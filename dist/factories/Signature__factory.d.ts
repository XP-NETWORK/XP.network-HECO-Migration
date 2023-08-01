import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Signature, SignatureInterface } from "../Signature";
declare type SignatureConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Signature__factory extends ContractFactory {
    constructor(...args: SignatureConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Signature>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Signature;
    connect(signer: Signer): Signature__factory;
    static readonly bytecode = "0x6080346100d057601f61062338819003918201601f19168301916001600160401b038311848410176100d55780849260409485528339810103126100d057602081519101519060ff82168092036100d0576fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0381101561008b5760005560ff19600154161760015560405161053790816100ec8239f35b60405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816316b47ef7146103035750806346b31b6e146102c55780638b4e54aa146101575780638efb3bb21461011c578063de1ab9a0146100ff578063e493ef8c146100ce5763ff51dff21461007057600080fd5b346100ca5760a03660031901126100ca576024359060ff821682036100c657608435936001600160a01b03851685036100c35750926100ba91602094606435916044359135610322565b90519015158152f35b80fd5b8380fd5b8280fd5b5050346100fb57816003193601126100fb575170014551231950b75fc4402da1732fc9bebe198152602090f35b5080fd5b5050346100fb57816003193601126100fb57602091549051908152f35b5050346100fb57816003193601126100fb57602090517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b50346100ca5760803660031901126100ca576001600160a01b039060243582811691908290036102c15760643592831683036102c15783519260209346858201523086820152823560608201528360808201526080815260a0810167ffffffffffffffff8282108183111761029a5781885260c0830192712bb434ba32b634b9ba27333a20b1ba34b7b760711b84528051888b5b8281106102ad575050908060a09281018c60d2820152036012810185526051601f199101160101908282109082111761029a578752519020865460015461023b9392916044359160ff1690610322565b1561025757508352600290528120805460ff1916600117905580f35b835162461bcd60e51b8152908101839052601a60248201527f6661696c656420746f20766572696679207369676e61747572650000000000006044820152606490fd5b634e487b7160e01b895260418552602489fd5b80840160d2838201519101520189906101eb565b8480fd5b50346100ca5760203660031901126100ca57356001600160a01b038116908190036100ca57818360ff92602095526002855220541690519015158152f35b8490346100fb57816003193601126100fb5760209060ff600154168152f35b70014551231950b75fc4402da1732fc9bebe19949390929190858310156104b1576001600160a01b0385811696909590871515806104a8575b8061049f575b80610496575b156104585760405191602083019387855260ff60f81b8660f81b16604085015260418401526bffffffffffffffffffffffff199060601b16606183015260558252608082019282841067ffffffffffffffff851117610442578190846040528351902095870981039080821161042c5760209660009660ff60e0948160809916158a1461042457601b905b88521660a08601528160c08601520991015282805260015afa1561041857600051161490565b6040513d6000823e3d90fd5b601c906103f2565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b50821515610367565b50841515610361565b5085151561035b565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea26469706673582212201ce3492092a148ede850a907d0264d8c2845b5ea7ec6ca73f7aca169054fb6e464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_validatorPKX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_validatorPKYP";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nftWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateWhitelistNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "validatorPKX";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "validatorPKYParity";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
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
    static createInterface(): SignatureInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Signature;
}
export {};
