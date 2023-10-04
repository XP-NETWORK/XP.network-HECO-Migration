import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SchnorrSECP256K1, SchnorrSECP256K1Interface } from "../SchnorrSECP256K1";
declare type SchnorrSECP256K1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SchnorrSECP256K1__factory extends ContractFactory {
    constructor(...args: SchnorrSECP256K1ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SchnorrSECP256K1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SchnorrSECP256K1;
    connect(signer: Signer): SchnorrSECP256K1__factory;
    static readonly bytecode = "0x6080806040523461001657610431908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c9081638efb3bb2146103a357508063e493ef8c146103465763ff51dff21461004457600080fd5b346103425760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103425780359060243560ff81169283820361033e57604435606435916084359173ffffffffffffffffffffffffffffffffffffffff958684169788850361033a577ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414194858410156102b757891515806102ae575b806102a5575b8061029c575b1561023f577fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908b51977fff0000000000000000000000000000000000000000000000000000000000000060208a019a888c5260f81b168d8a0152604189015260601b16606187015260558652608086019686881067ffffffffffffffff891117610213578590888c52875190209385098503918583116101e7575093602096938b969360ff60e094608098156000146101df57601b905b88521660a08601528160c08601520991015282805260015afa156101d3576020935116149051908152f35b505051903d90823e3d90fd5b601c906101a8565b8b60116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60248c6041857f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60648360208d51917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601660248201527f6e6f207a65726f20696e7075747320616c6c6f776564000000000000000000006044820152fd5b508615156100f0565b508315156100ea565b508415156100e4565b60848360208d51917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60448201527f20510000000000000000000000000000000000000000000000000000000000006064820152fd5b8a80fd5b8580fd5b8280fd5b50503461039f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261039f57602090517ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418152f35b5080fd5b84903461039f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261039f57807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a160209252f3fea2646970667358221220437dc9f62bf238f1767d197ce77c129b355a227d9f10355c80b225f8f4362f8864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "HALF_Q";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Q";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "signingPubKeyX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "pubKeyYParity";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "signature";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "nonceTimesGeneratorAddress";
            readonly type: "address";
        }];
        readonly name: "verifySignature";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SchnorrSECP256K1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SchnorrSECP256K1;
}
export {};
