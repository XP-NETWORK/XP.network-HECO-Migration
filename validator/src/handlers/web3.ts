import BigNumber from "bignumber.js";
import { Contract, providers, Wallet } from "ethers";
import { Interface } from "ethers/lib/utils";
import { ChainEmitter, ChainListener, TransferEvent, UnfreezeEvent } from "validator";

type SolUnfreezeEvent = {
	readonly action_id: BigNumber;
	readonly to: string;
	readonly value: BigNumber;
};

export class Web3Helper implements ChainEmitter<SolUnfreezeEvent, void, UnfreezeEvent>, ChainListener<TransferEvent> {
    readonly mintContract: Contract;

    private constructor(mintContract: Contract) {
        this.mintContract = mintContract;
    }

    public static new = async function(provider_uri: string, pkey: string, minter: string, minterAbi: Interface): Promise<Web3Helper> {
        const w3 = new providers.WebSocketProvider(provider_uri);
		await w3.ready;
        const acc = (new Wallet(pkey)).connect(w3);
        const mint = new Contract(minter, minterAbi, acc);

        return new Web3Helper(mint);
    }

	async eventIter(cb: ((event: SolUnfreezeEvent) => Promise<void>)): Promise<void> {
		this.mintContract.on(this.mintContract.filters.Unfreeze(), async (action_id: BigNumber, to: string, value: BigNumber) => {
			const ev = { action_id, to, value };
			console.log("ev", JSON.stringify(ev));
			await cb(ev)
		});
	}

	async eventHandler(ev: SolUnfreezeEvent): Promise<UnfreezeEvent | undefined> {
		return new UnfreezeEvent(ev.action_id, ev.to, ev.value);
	}

    async emittedEventHandler(event: TransferEvent): Promise<void> {
		await this.mintContract.validate_transfer(event.action_id.toString(), event.to, event.value.toString());
		console.log(`web3 action_id: ${event.action_id}, executed`);
    }
}
