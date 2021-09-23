const chai = require('chai');
const { ethers } = require("hardhat")
const { solidity } = require("ethereum-waffle");

chai.use(solidity);
const { expect } = chai;

const TRANSFER_AMT = 100000000000000;
const ALICE_POLKA = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

describe('Minter', () => {
	let owner, addr1, addr2, addr3, addr4;

	let erc721;
	let xpnet;
	let xpnft;
	let minter;

	beforeEach(async () => {
		[owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();

		const Erc721 = await ethers.getContractFactory("XPNft");
		erc721 = await Erc721.deploy();

		const XPNft = await ethers.getContractFactory("XPNft");
		xpnft = await XPNft.deploy();

		const XPNet = await ethers.getContractFactory("XPNet");
		xpnet = await XPNet.deploy();

		const Minter = await ethers.getContractFactory("Minter");
		minter = await Minter.deploy(
			[owner.address, addr1.address, addr2.address],
			[erc721.address],
			2,
			xpnft.address,
			xpnet.address
		);

		await xpnft.transferOwnership(minter.address);
		await xpnet.transferOwnership(minter.address);
	});

	const multisig_action = async (cb, ...args) => {
		const tx1 = cb(minter.connect(addr1), ...args).then(t => t.wait());

		const tx2 = cb(minter.connect(addr2), ...args).then(t => t.wait());

		let [,res2] = await Promise.all([tx1, tx2]);

		return res2;
	}

	const validate_transfer = async (action_id, token_id, target_address, value) => {
		return await multisig_action(async (minter) => {
			return await minter.validate_transfer(action_id, token_id, target_address, value)
		});
	}

	const validate_transfer_nft = async (action_id, target_address, nft_uri) => {
		return await multisig_action(async (minter) => {
			return await minter.validate_transfer_nft(action_id, target_address, nft_uri)
		});
	}

	const validate_unfreeze = async (action_id, target_address, value) => {
		return await multisig_action(async (minter) => {
			return await minter.validate_unfreeze(action_id, target_address, value);
		})
	}

	const validate_unfreeze_nft = async (action_id, target_address, token_id) => {
		return await multisig_action(async (minter) => {
			return await minter.validate_unfreeze_nft(action_id, target_address, token_id, erc721.address)
		})
	}

	const validate_whitelist_nft = async (action_id, new_addr) => {
		return await multisig_action(async (minter) => {
			return await minter.validate_whitelist_nft(action_id, new_addr);
		})
	}

	it('validate a simple transaction', async () => {
		await validate_transfer(1, 1, addr3.address, TRANSFER_AMT);

		const bal = await xpnet.balanceOf(addr3.address, 1)
		expect(bal).to.equal(TRANSFER_AMT);
	
		await minter.connect(owner)
			.validate_transfer(1, 1, addr3.address, TRANSFER_AMT);
	});

	it('withdraw', async () => {
		await validate_transfer(3232342, 1, addr3.address, TRANSFER_AMT);

		const tx = await minter.connect(addr3)
			.withdraw(1, ALICE_POLKA, TRANSFER_AMT);

		await expect(tx)
			.to.emit(minter, 'Unfreeze')
			.withArgs(0, 1, ALICE_POLKA, TRANSFER_AMT)

		await tx.wait();

		const bal = await xpnet.balanceOf(addr3.address, 1);
		expect(bal).to.equal(0);
	})

	it('validate nft', async () => {
		await validate_transfer_nft(1, addr3.address, "test-nft");

		const owner = await xpnft.ownerOf(0);
		expect(owner).to.equal(addr3.address);

		const uri = await xpnft.tokenURI(0);
		expect(uri).to.equal("test-nft");
	});

	it('withdraw nft', async () => {
		await validate_transfer_nft(323232, addr3.address, "test-nft");

		const txw = await minter.connect(addr3)
			.withdraw_nft(ALICE_POLKA, 0);

		await expect(txw)
			.to.emit(minter, "UnfreezeNft")
			.withArgs(0, ALICE_POLKA, "test-nft");

		await txw.wait();

		await expect(xpnft.ownerOf(0)).to.be.revertedWith("VM Exception while processing transaction: revert ERC721: owner query for nonexistent token");
	});

	it('transfer to foreign', async () => {
		const tx = await minter.connect(addr3)
			.freeze(1, ALICE_POLKA, { value: TRANSFER_AMT });

		await expect(tx)
			.to.emit(minter, "Transfer")
			.withArgs(0, 1, ALICE_POLKA, TRANSFER_AMT)
			.to.changeEtherBalances([addr3, minter], [-TRANSFER_AMT, TRANSFER_AMT]);
	});

	it('unfreeze eth', async () => {
		const txf = await minter.connect(addr3)
			.freeze(1, ALICE_POLKA, { value: TRANSFER_AMT });

		await txf.wait();

		const txr = await validate_unfreeze(1, addr3.address, TRANSFER_AMT);

		// Hack https://github.com/EthWorks/Waffle/blob/master/waffle-chai/src/matchers/changeEtherBalance.ts#L36
		txr.wait = () => ({
			blockNumber: txr.blockNumber,
			gasUsed: txr.gasUsed
		});

		await expect(txr)
			.to.changeEtherBalances([minter, addr3], [-TRANSFER_AMT, TRANSFER_AMT]);
	});

	const transfer_nft_foreign = async (own, token_id, chain_nonce, target) => {
		const txm = await erc721.connect(owner).mint(own.address, token_id);
		await txm.wait();
		const txs = await erc721.connect(owner).setURI(token_id, "test-nft");
		await txs.wait();

		const calldata = Buffer.concat([
			Buffer.from(new Int32Array([0]).buffer),
			Buffer.from(new Int32Array([chain_nonce]).buffer).reverse(),
			Buffer.from(target, "utf-8")
		]);


		return await erc721.connect(own)
		['safeTransferFrom(address,address,uint256,bytes)'](own.address, minter.address, token_id, calldata);
	}

	it('transfer nft to foreign', async () => {
		const tx = await transfer_nft_foreign(addr3, 1, 1, ALICE_POLKA);

		await expect(tx)
			.to.emit(minter, "TransferErc721")
			.withArgs(0, 1, ALICE_POLKA, 1, erc721.address);

		await tx.wait();

		const owner = await erc721.ownerOf(1)
		expect(owner).to.equal(minter.address);
	});

	it('unfreeze nft from foreign', async () => {
		const tx = await transfer_nft_foreign(addr3, 1, 1, ALICE_POLKA);

		await tx.wait();

		await validate_unfreeze_nft(1, addr3.address, 1, er721.address);

		const owner = await erc721.ownerOf(1);
		expect(owner).to.equal(addr3.address);
	});

	it('validate whitelist nft', async () => {
		const Erc721 = await ethers.getContractFactory("XPNft");
		const erc721f = await Erc721.deploy();

		const tx = await validate_whitelist_nft(1, erc721f.address);
		await tx.wait();
	})
})
