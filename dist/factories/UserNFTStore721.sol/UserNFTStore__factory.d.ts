import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UserNFTStore, UserNFTStoreInterface } from "../../UserNFTStore721.sol/UserNFTStore";
declare type UserNFTStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UserNFTStore__factory extends ContractFactory {
    constructor(...args: UserNFTStoreConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _minterAddress: PromiseOrValue<string>, _signatureVerifier: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UserNFTStore>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _minterAddress: PromiseOrValue<string>, _signatureVerifier: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UserNFTStore;
    connect(signer: Signer): UserNFTStore__factory;
    static readonly bytecode = "0x6080604052600060025534801561001557600080fd5b50604051610e69380380610e698339810160408190526100349161010c565b6100556fa2a8918ca85bafe22016d0b997e4df60600160ff1b036001610167565b84106100a75760405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f510000000000604482015260640160405180910390fd5b6000939093556001805460ff191660ff9390931692909217909155600580546001600160a01b03199081166001600160a01b0393841617909155600680549091169190921617905561018e565b6001600160a01b038116811461010957600080fd5b50565b6000806000806080858703121561012257600080fd5b84519350602085015160ff8116811461013a57600080fd5b604086015190935061014b816100f4565b606086015190925061015c816100f4565b939692955090935050565b8082018082111561018857634e487b7160e01b600052601160045260246000fd5b92915050565b610ccc8061019d6000396000f3fe6080604052600436106100bc5760003560e01c806390e704e511610074578063de1ab9a01161004e578063de1ab9a01461022d578063e493ef8c14610243578063fde919f61461027757600080fd5b806390e704e5146101d857806394dc2ed8146101ed578063d9d86def1461020d57600080fd5b806328dc132d116100a557806328dc132d1461016757806334d722c91461018b5780638efb3bb2146101c357600080fd5b8063150b7a02146100c157806316b47ef71461013b575b600080fd5b3480156100cd57600080fd5b506101056100dc366004610889565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b34801561014757600080fd5b506001546101559060ff1681565b60405160ff9091168152602001610132565b34801561017357600080fd5b5061017d60025481565b604051908152602001610132565b34801561019757600080fd5b506005546101ab906001600160a01b031681565b6040516001600160a01b039091168152602001610132565b3480156101cf57600080fd5b5061017d610297565b6101eb6101e6366004610930565b6102c5565b005b3480156101f957600080fd5b506101eb6102083660046109ca565b610440565b34801561021957600080fd5b506101eb610228366004610a31565b610532565b34801561023957600080fd5b5061017d60005481565b34801561024f57600080fd5b5061017d7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414181565b34801561028357600080fd5b506006546101ab906001600160a01b031681565b6102c27f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a06001610a8d565b81565b6001600260008282546102d89190610a8d565b925050819055507fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152600254843485888a8b6001600160a01b031663c87b56dd8c6040518263ffffffff1660e01b815260040161033691815260200190565b600060405180830381865afa158015610353573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261037b9190810190610ad8565b88604051610390989796959493929190610b7b565b60405180910390a1604051632142170760e11b8152336004820152306024820152604481018590526001600160a01b038616906342842e0e90606401600060405180830381600087803b1580156103e657600080fd5b505af11580156103fa573d6000803e3d6000fd5b50506005546040516001600160a01b0390911692503480156108fc029250906000818181858888f19350505050158015610438573d6000803e3d6000fd5b505050505050565b604080514660208201523091810191909152606081018790526001600160a01b03808716608083015260a08201869052841660c082015260009060e00160408051601f198184030181529082905261049a91602001610bf7565b6040516020818303038152906040528051906020012060001c90506104c1878484846105bb565b604051632142170760e11b81523060048201526001600160a01b038781166024830152604482018790528516906342842e0e90606401600060405180830381600087803b15801561051157600080fd5b505af1158015610525573d6000803e3d6000fd5b5050505050505050505050565b604080514660208201529081018690526060810185905260ff8416608082015260009060a00160408051601f198184030181529082905261057591602001610c3c565b6040516020818303038152906040528051906020012060001c905061059c86848484610649565b5050506000919091556001805460ff191660ff90921691909117905550565b60008481526003602052604090205460ff161561061f5760405162461bcd60e51b815260206004820152601160248201527f6475706c696361746520616374696f6e2100000000000000000000000000000060448201526064015b60405180910390fd5b6000848152600360205260409020805460ff191660011790556106438383836106c8565b50505050565b60008481526004602052604090205460ff16156106a85760405162461bcd60e51b815260206004820152601160248201527f6475706c696361746520616374696f6e210000000000000000000000000000006044820152606401610616565b6000848152600460205260409020805460ff191660011790556106438383835b6006546000546001546040517fff51dff2000000000000000000000000000000000000000000000000000000008152600481019290925260ff16602482015260448101859052606481018390526001600160a01b0384811660848301529091169063ff51dff29060a401602060405180830381865afa15801561074f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107739190610c74565b6107bf5760405162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152606401610616565b505050565b6001600160a01b03811681146107d957600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561081b5761081b6107dc565b604052919050565b600067ffffffffffffffff82111561083d5761083d6107dc565b50601f01601f191660200190565b600061085e61085984610823565b6107f2565b905082815283838301111561087257600080fd5b828260208301376000602084830101529392505050565b6000806000806080858703121561089f57600080fd5b84356108aa816107c4565b935060208501356108ba816107c4565b925060408501359150606085013567ffffffffffffffff8111156108dd57600080fd5b8501601f810187136108ee57600080fd5b6108fd8782356020840161084b565b91505092959194509250565b600082601f83011261091a57600080fd5b6109298383356020850161084b565b9392505050565b600080600080600060a0868803121561094857600080fd5b8535610953816107c4565b945060208601359350604086013567ffffffffffffffff808216821461097857600080fd5b9093506060870135908082111561098e57600080fd5b61099a89838a01610909565b935060808801359150808211156109b057600080fd5b506109bd88828901610909565b9150509295509295909350565b60008060008060008060c087890312156109e357600080fd5b8635955060208701356109f5816107c4565b9450604087013593506060870135610a0c816107c4565b92506080870135915060a0870135610a23816107c4565b809150509295509295509295565b600080600080600060a08688031215610a4957600080fd5b8535945060208601359350604086013560ff81168114610a6857600080fd5b9250606086013591506080860135610a7f816107c4565b809150509295509295909350565b80820180821115610aae57634e487b7160e01b600052601160045260246000fd5b92915050565b60005b83811015610acf578181015183820152602001610ab7565b50506000910152565b600060208284031215610aea57600080fd5b815167ffffffffffffffff811115610b0157600080fd5b8201601f81018413610b1257600080fd5b8051610b2061085982610823565b818152856020838501011115610b3557600080fd5b610b46826020830160208601610ab4565b95945050505050565b60008151808452610b67816020860160208601610ab4565b601f01601f19169290920160200192915050565b60006101008a835267ffffffffffffffff8a166020840152886040840152806060840152610bab81840189610b4f565b90508660808401526001600160a01b03861660a084015282810360c0840152610bd48186610b4f565b905082810360e0840152610be88185610b4f565b9b9a5050505050505050505050565b7f556e667265657a65457263373231416374696f6e000000000000000000000000815260008251610c2f816014850160208701610ab4565b9190910160140192915050565b7f55706461746547726f75704b6579416374696f6e000000000000000000000000815260008251610c2f816014850160208701610ab4565b600060208284031215610c8657600080fd5b8151801515811461092957600080fdfea264697066735822122076c51dcbdddec38d1a83ce3ae22ff73b70bb342c0ec4adc28e85c49a25002e7e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_validatorPKX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_validatorPKYP";
            readonly type: "uint8";
        }, {
            readonly internalType: "address payable";
            readonly name: "_minterAddress";
            readonly type: "address";
        }, {
            readonly internalType: "contract SchnorrSECP256K1";
            readonly name: "_signatureVerifier";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "tokenData";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "TransferErc721";
        readonly type: "event";
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
        readonly inputs: readonly [];
        readonly name: "actionCnt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC721Metadata";
            readonly name: "erc721Contract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "freezeErc721";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minterAddress";
        readonly outputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "signatureVerifier";
        readonly outputs: readonly [{
            readonly internalType: "contract SchnorrSECP256K1";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC721";
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
        readonly name: "validateUnfreezeErc721";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_validatorPKX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_validatorPKYP";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUpdateGroupKey";
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
    }];
    static createInterface(): UserNFTStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UserNFTStore;
}
export {};
