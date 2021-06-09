import { ChainListener, TransferEvent } from "validator";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { Account } from "web3-core";
import { AbiItem } from "web3-utils";


export class Web3Helper implements ChainListener<TransferEvent> {
    private readonly w3: Web3;
    private readonly mintContract: Contract;
    private readonly account: Account;

    private constructor(provider: Web3, mintContract: Contract, account: Account) {
        this.w3 = provider;
        this.mintContract = mintContract;
        this.account = account;
    }

    public static new(provider_uri: string, pkey: string, minter: string, minterAbi: AbiItem): Web3Helper {
        const w3 = new Web3(provider_uri);
        const acc = w3.eth.accounts.privateKeyToAccount(pkey);
        const mint = new w3.eth.Contract(minterAbi, minter);

        return new Web3Helper(w3, mint, acc);
    }

    async emittedEventHandler(event: TransferEvent): Promise<void> {
        await this.mintContract.methods.validate_transfer(event.action_id, event.to, event.value)
            .send({from: this.account.address})
            .on('transactionHash', (hash: string) => console.log("Validate Transfer hash: ", hash))
            .on('confirmation', (receipt: any) => console.log(`Validate transfer receipt: ${JSON.stringify(receipt)}`))
            .on('error', (err: Error, _: any) => { throw err })
    }
}