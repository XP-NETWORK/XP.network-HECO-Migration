import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BridgeNFTBatch, BridgeNFTBatchInterface } from "../BridgeNFTBatch";
export declare class BridgeNFTBatch__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): BridgeNFTBatchInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeNFTBatch;
}
