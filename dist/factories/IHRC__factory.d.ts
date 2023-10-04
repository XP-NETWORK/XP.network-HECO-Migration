import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHRC, IHRCInterface } from "../IHRC";
export declare class IHRC__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "associate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "responseCode";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "dissociate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "responseCode";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IHRCInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHRC;
}
