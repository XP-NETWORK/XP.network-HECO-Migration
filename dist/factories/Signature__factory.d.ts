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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161075138038061075183398101604081905261002f916100c0565b6100506fa2a8918ca85bafe22016d0b997e4df60600160ff1b0360016100f6565b82106100a25760405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f510000000000604482015260640160405180910390fd5b6000919091556001805460ff191660ff90921691909117905561011d565b600080604083850312156100d357600080fd5b82519150602083015160ff811681146100eb57600080fd5b809150509250929050565b8082018082111561011757634e487b7160e01b600052601160045260246000fd5b92915050565b6106258061012c6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638efb3bb21161005b5780638efb3bb2146100ee578063de1ab9a014610104578063e493ef8c1461010d578063ff51dff21461012657600080fd5b806316b47ef71461008257806346b31b6e146100a65780638b4e54aa146100d9575b600080fd5b60015461008f9060ff1681565b60405160ff90911681526020015b60405180910390f35b6100c96100b43660046104a0565b60026020526000908152604090205460ff1681565b604051901515815260200161009d565b6100ec6100e73660046104c2565b610139565b005b6100f66101d2565b60405190815260200161009d565b6100f660005481565b6100f670014551231950b75fc4402da1732fc9bebe1981565b6100c9610134366004610508565b610200565b604080514660208201523091810191909152606081018590526001600160a01b038416608082015260009060a00160408051601f198184030181529082905261018491602001610560565b6040516020818303038152906040528051906020012060001c90506101aa838383610412565b5050506001600160a01b03166000908152600260205260409020805460ff1916600117905550565b6101fd7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a060016105c3565b81565b600070014551231950b75fc4402da1732fc9bebe1984106102735760405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b60648201526084015b60405180910390fd5b6001600160a01b0382161580159061028b5750600086115b80156102975750600084115b80156102a35750600083115b6102e85760405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b604482015260640161026a565b60408051602080820189905260f888901b6001600160f81b0319168284015260418201869052606085901b6bffffffffffffffffffffffff1916606183015282516055818403018152607590920190925280519101206000600170014551231950b75fc4402da1732fc9bebe19878a096103749070014551231950b75fc4402da1732fc9bebe196105dc565b60ff89161561038457601c610387565b601b5b8a70014551231950b75fc4402da1732fc9bebe198c87096040805160008152602081018083529590955260ff909316928401929092526060830152608082015260a0016020604051602081039080840390855afa1580156103ec573d6000803e3d6000fd5b5050604051601f1901516001600160a01b03868116911614935050505095945050505050565b61041d838383610422565b505050565b600054600154610438919060ff16858486610200565b61041d5760405162461bcd60e51b815260206004820152601a60248201527f6661696c656420746f20766572696679207369676e6174757265000000000000604482015260640161026a565b80356001600160a01b038116811461049b57600080fd5b919050565b6000602082840312156104b257600080fd5b6104bb82610484565b9392505050565b600080600080608085870312156104d857600080fd5b843593506104e860208601610484565b9250604085013591506104fd60608601610484565b905092959194509250565b600080600080600060a0868803121561052057600080fd5b85359450602086013560ff8116811461053857600080fd5b9350604086013592506060860135915061055460808701610484565b90509295509295909350565b712bb434ba32b634b9ba27333a20b1ba34b7b760711b81526000825160005b8181101561059c576020818601810151601286840101520161057f565b506000920160120191825250919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156105d6576105d66105ad565b92915050565b818103818111156105d6576105d66105ad56fea2646970667358221220d0ca7418d57f3447260229f099bfc43f2cf6ae1317f5d3cd8162567d3e7cd3ae64736f6c63430008110033";
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
