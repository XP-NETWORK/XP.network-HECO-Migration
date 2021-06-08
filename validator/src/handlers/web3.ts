import { ChainListener, TransferEvent } from "validator";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";


export class Web3Helper implements ChainListener<TransferEvent> {
    private readonly w3: Web3;
    private readonly mintContract: Contract;
    private readonly account: string;

    private constructor(provider: Web3, mintContract: Contract, account: string) {
        this.w3 = provider;
        this.mintContract = mintContract;
        this.account = account;
    }

    //public static async new(provider_uri: string, pkey: string, minter: string)

    async emittedEventHandler(event: TransferEvent): Promise<void> {
        console.log("received event: ", event);
        console.log("unimplemented!");
    }
}