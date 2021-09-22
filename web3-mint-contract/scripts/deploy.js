async function deploy(contract_name, ...args) {
	const Contract = await ethers.getContractFactory(contract_name);
	console.log(`Deploying ${contract_name}..`);
	const contract = await Contract.deploy(...args);
	await contract.deployed();
	console.log(`${contract_name} deployed to: ${contract.address}`);
	return contract;
}

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("Deploying smart contract for normal NFTs (Mint your NFTs here!)")
  const mint_default = await deploy("XPNft");

  const nft_token = await deploy("XPNft");
  const token = await deploy("XPNet");
  const minter = await deploy("Minter", [owner.address], [mint_default], 1, nft_token.address, token.address);

  await nft_token.transferOwnership(minter.address);
  await token.transferOwnership(minter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
