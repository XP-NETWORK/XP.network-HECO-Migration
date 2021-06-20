import { ethers } from "ethers";
import {emitEvents, PolkadotHelper} from "validator";
import config from './config';
import * as freezer_abi from './freezer_abi.json';
import {Web3Helper} from "./handlers/web3";
import { abi as minter_abi  }  from './minter.json';

const main = async () => {
	const polka = await PolkadotHelper.new(
		config.xnode,
		freezer_abi,
		config.xp_freezer
	);

	const w3 = await Web3Helper.new(
		config.w3_node,
		config.w3_pk,
		config.w3_minter,
		//@ts-expect-error ABI
		minter_abi
	)

	console.log('READY TO LISTEN EVENTS!');

	emitEvents(polka, w3);
	emitEvents(w3, polka);

	w3.mintContract.on('Unfreeze', async (action_id: ethers.BigNumber, to: string, value: ethers.BigNumber ) => {
		const ev = { action_id, to, value };
		console.log("ev", JSON.stringify(ev));
	});
};

main();
