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
    static readonly bytecode = "0x60808060405234610016576102fd908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c9081638efb3bb21461028d57508063e493ef8c1461025c5763ff51dff21461004457600080fd5b346102585760a03660031901126102585780359060243560ff81169283820361025457604435606435916084359160018060a01b0395868416978885036102505770014551231950b75fc4402da1732fc9bebe19948584101561020257891515806101f9575b806101f0575b806101e7575b156101ab578a516020810186815260f89990991b6001600160f81b031916818d0152604181019790975260601b6bffffffffffffffffffffffff1916606187015260558652608086019667ffffffffffffffff881187891017610198578590888c5287519020938509850391858311610185575093602096938b969360ff60e0946080981560001461017d57601b905b88521660a08601528160c08601520991015282805260015afa15610171576020935116149051908152f35b505051903d90823e3d90fd5b601c90610146565b634e487b7160e01b8c526011905260248bfd5b634e487b7160e01b8c526041835260248cfd5b8a5162461bcd60e51b815260208185015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b508615156100b6565b508315156100b0565b508415156100aa565b8a5162461bcd60e51b8152602081850152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fd5b8a80fd5b8580fd5b8280fd5b5050346102895781600319360112610289575170014551231950b75fc4402da1732fc9bebe198152602090f35b5080fd5b849034610289578160031936011261028957807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a160209252f3fea2646970667358221220d800fbb9355a1d90eb75f4aaccd9fa573c0d3a845a3fdf8e8b9e9b9fb7aef40564736f6c63430008110033";
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
