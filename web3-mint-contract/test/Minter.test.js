const chai = require('chai');
const { ethers } = require("hardhat")
const { solidity } = require("ethereum-waffle");

chai.use(solidity);
const { expect } = chai;

const TRANSFER_AMT = 100000000000000;
const ALICE_POLKA = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

describe('Minter', () => {
	let owner, addr1, addr2, addr3;
	let xpnet;
	let minter;

	beforeEach(async () => {
		[owner, addr1, addr2, addr3] = await ethers.getSigners();

		const XPNet = await ethers.getContractFactory("XPNet");
		xpnet = await XPNet.deploy();

		const Minter = await ethers.getContractFactory("Minter");
		minter = await Minter.deploy(
			[owner.address, addr1.address, addr2.address],
			2,
			xpnet.address
		);

		await xpnet.transferOwnership(minter.address);
	});

	it('validate a simple transaction', async () => {
		await minter.connect(addr1)
			.validate_transfer(1, addr3.address, TRANSFER_AMT);

		await minter.connect(addr2)
			.validate_transfer(1, addr3.address, TRANSFER_AMT);

		const bal = await xpnet.balanceOf(addr3.address);
		expect(bal).to.equal(TRANSFER_AMT);
	
		await minter.connect(owner)
			.validate_transfer(1, add3.address, TRANSFER_AMT);
	});

	it('unfreeze test', async () => {
		await minter.connect(addr1)
			.validate_transfer(3434343, addr3.address, TRANSFER_AMT);
	
		await minter.connect(addr2)
			.validate_transfer(3434343, addr3.address, TRANSFER_AMT);

		await expect(minter.connect(addr3)
			.withdraw(ALICE_POLKA, TRANSFER_AMT))
			.to.emit(minter, 'Unfreeze')
			.withArgs(0, ALICE_POLKA, TRANSFER_AMT)

		const bal = await xpnet.balanceOf(addr3.address);
		expect(bal).to.equal(0);
	})
})
