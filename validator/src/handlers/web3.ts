import { ChainEmitter, ChainListener, TransferEvent, UnfreezeEvent } from "validator";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { Account } from "web3-core";
import { AbiItem } from "web3-utils";
import BN from "bn.js";
import BigNumber from "bignumber.js";

type SolUnfreezeEventArgs = {
	readonly action_id: BN;
	readonly to: string;
	readonly value: BN;
};

type SolUnfreezeEvent = {
	readonly event: string;
	readonly signature: string | null;
	readonly address: string;
	readonly returnValues: SolUnfreezeEventArgs;
	readonly logIndex: number;
	readonly transactionIndex: number;
	readonly transactionHash: string;
	readonly blockHash: string;
	readonly raw: {
		data: string;
		topics: Array<number>;
	}
};

export class Web3Helper implements ChainEmitter<SolUnfreezeEvent, any, UnfreezeEvent>, ChainListener<TransferEvent> {
	// @ts-expect-error
    private readonly w3: Web3;
    private readonly mintContract: Contract;
    private readonly account: Account;

    private constructor(provider: Web3, mintContract: Contract, account: Account) {
        this.w3 = provider;
        this.mintContract = mintContract;
        this.account = account;
    }

    public static new(provider_uri: string, pkey: string, minter: string, minterAbi: AbiItem): Web3Helper {
        const w3 = new Web3(new Web3.providers.WebsocketProvider(provider_uri));
        const acc = w3.eth.accounts.privateKeyToAccount(pkey);
        const mint = new w3.eth.Contract(minterAbi, minter);

        return new Web3Helper(w3, mint, acc);
    }

	async eventIter(cb: ((event: SolUnfreezeEvent) => Promise<void>)): Promise<any> {
		this.mintContract.events.Unfreeze()
		.on("data", async (ev: SolUnfreezeEvent | undefined) => {
			console.log("ev", JSON.stringify(ev));
			ev && ev.returnValues.action_id && await cb(ev)
		});
	}

	async eventHandler(ev: SolUnfreezeEvent): Promise<UnfreezeEvent | undefined> {
		const args = ev.returnValues;
		const action_id = new BigNumber(args.action_id.toString());
		const value = new BigNumber(args.value.toString());
		return new UnfreezeEvent(action_id, args.to, value);
	}

    async emittedEventHandler(event: TransferEvent): Promise<void> {
        await this.mintContract.methods.validate_transfer(event.action_id, event.to, event.value)
            .send({from: this.account.address})
            .on('transactionHash', (hash: string) => console.log("Validate Transfer hash: ", hash))
            .on('error', (err: Error, _: any) => { throw err })
    }
}
