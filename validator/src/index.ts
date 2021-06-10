import {PolkadotHelper, emitEvents} from "validator";
import {Web3Helper} from "./handlers/web3";
import * as freezer_abi from './freezer_abi.json';
import { abi as minter_abi  }  from './minter.json';
import config from './config';

const main = async () => {
	const polka = await PolkadotHelper.new(
		config.xnode,
		freezer_abi,
		config.xp_freezer
	);

	const w3 = Web3Helper.new(
		config.w3_node,
		config.w3_pk,
		config.w3_minter,
		//@ts-expect-error
		minter_abi
	)

	console.log('READY TO LISTEN EVENTS!');

	emitEvents(polka, w3);
	emitEvents(w3, polka);
};

main();
