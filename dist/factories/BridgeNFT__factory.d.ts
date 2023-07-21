import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BridgeNFT, BridgeNFTInterface } from "../BridgeNFT";
export declare class BridgeNFT__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "baseURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "burnFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "mintArgs";
            readonly type: "bytes";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): BridgeNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeNFT;
}
