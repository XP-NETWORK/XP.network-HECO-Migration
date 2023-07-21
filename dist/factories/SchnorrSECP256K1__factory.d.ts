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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103bd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638efb3bb214610046578063e493ef8c14610061578063ff51dff21461007a575b600080fd5b61004e61009d565b6040519081526020015b60405180910390f35b61004e70014551231950b75fc4402da1732fc9bebe1981565b61008d6100883660046102dd565b6100cb565b6040519015158152602001610058565b6100c87f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0600161035b565b81565b600070014551231950b75fc4402da1732fc9bebe19841061013e5760405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b60648201526084015b60405180910390fd5b6001600160a01b038216158015906101565750600086115b80156101625750600084115b801561016e5750600083115b6101b35760405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606401610135565b60408051602080820189905260f888901b6001600160f81b0319168284015260418201869052606085901b6bffffffffffffffffffffffff1916606183015282516055818403018152607590920190925280519101206000600170014551231950b75fc4402da1732fc9bebe19878a0961023f9070014551231950b75fc4402da1732fc9bebe19610374565b60ff89161561024f57601c610252565b601b5b8a70014551231950b75fc4402da1732fc9bebe198c87096040805160008152602081018083529590955260ff909316928401929092526060830152608082015260a0016020604051602081039080840390855afa1580156102b7573d6000803e3d6000fd5b5050604051601f1901516001600160a01b03868116911614935050505095945050505050565b600080600080600060a086880312156102f557600080fd5b85359450602086013560ff8116811461030d57600080fd5b9350604086013592506060860135915060808601356001600160a01b038116811461033757600080fd5b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b8082018082111561036e5761036e610345565b92915050565b8181038181111561036e5761036e61034556fea26469706673582212208804e167ab6e0b62b4c30f67e81d7406bae92cec29dc0942968c84743142b60064736f6c63430008110033";
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
