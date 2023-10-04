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
    static readonly bytecode = "0x6080346100d057601f6107a038819003918201601f19168301916001600160401b038311848410176100d55780849260409485528339810103126100d057602081519101519060ff82168092036100d0576fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0381101561008b5760005560ff1960015416176001556040516106b490816100ec8239f35b60405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816316b47ef7146103b35750806346b31b6e146103695780638b4e54aa146101725780638efb3bb214610137578063de1ab9a01461011a578063e493ef8c146100db5763ff51dff21461007057600080fd5b346100d75760a06003193601126100d7576024359060ff821682036100d3576084359373ffffffffffffffffffffffffffffffffffffffff851685036100d05750926100c7916020946064359160443591356103d2565b90519015158152f35b80fd5b8380fd5b8280fd5b505034610116578160031936011261011657602090517ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418152f35b5080fd5b505034610116578160031936011261011657602091549051908152f35b505034610116578160031936011261011657602090517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b50346100d75760806003193601126100d75760243573ffffffffffffffffffffffffffffffffffffffff918282168092036103655760643592831683036103655783519260209346858201523086820152823560608201528360808201526080815260a0810167ffffffffffffffff828210818311176103215781885260c08301927f57686974656c6973744e6674416374696f6e0000000000000000000000000000845289815189825b82811061034d57505060518380937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09360a096019060d282015203601281018752011601019082821090821117610321578752519020865460015461028b9392916044359160ff16906103d2565b156102c55750835260029052812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580f35b606490838551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601a60248201527f6661696c656420746f20766572696679207369676e61747572650000000000006044820152fd5b6024896041877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8481018083015160d2909101528d93508b910161021d565b8480fd5b50346100d75760206003193601126100d7573573ffffffffffffffffffffffffffffffffffffffff81168091036100d757818360ff92602095526002855220541690519015158152f35b84903461011657816003193601126101165760209060ff600154168152f35b91909392937ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414194858310156105fa5773ffffffffffffffffffffffffffffffffffffffff9485811696871515806105f1575b806105e8575b806105df575b15610581577fffffffffffffffffffffffffffffffffffffffff0000000000000000000000006040519260208401948886527fff000000000000000000000000000000000000000000000000000000000000008760f81b166040860152604185015260601b16606183015260558252608082019282841067ffffffffffffffff85111761055257819084604052835190209587098103908082116105235760209660009660ff60e0948160809916158a1461051b57601b905b88521660a08601528160c08601520991015282805260015afa1561050f57600051161490565b6040513d6000823e3d90fd5b601c906104e9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f207a65726f20696e7075747320616c6c6f776564000000000000000000006044820152fd5b50821515610430565b5084151561042a565b50851515610424565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60448201527f20510000000000000000000000000000000000000000000000000000000000006064820152fdfea2646970667358221220087153ca3fe5d5bdc73b7b0155de1fe465e07cd858b7a9355afa184033b63b0a64736f6c63430008110033";
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
