import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UserNFTStore1155, UserNFTStore1155Interface } from "../UserNFTStore1155";
declare type UserNFTStore1155ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UserNFTStore1155__factory extends ContractFactory {
    constructor(...args: UserNFTStore1155ConstructorParams);
    deploy(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UserNFTStore1155>;
    getDeployTransaction(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UserNFTStore1155;
    connect(signer: Signer): UserNFTStore1155__factory;
    static readonly bytecode = "0x60803461007a57601f61107c38819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b0319818160005416176000556001541617600155604051610fe690816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a714610cc85750806328815af314610ca15780632a75f138146109a65780637629c3fc146107a25780639cf45bf814610426578063b0d32db614610164578063bc197c81146100d65763f23a6e611461007957600080fd5b346100d35760a03660031901126100d357610092610de2565b5061009b610db6565b5060843567ffffffffffffffff81116100cf576100bc903690600401610d6f565b5060405163f23a6e6160e01b8152602090f35b5080fd5b80fd5b50346100d35760a03660031901126100d3576100f0610de2565b506100f9610db6565b5067ffffffffffffffff6044358181116101605761011b903690600401610e10565b5060643581811161016057610134903690600401610e10565b506084359081116100cf5761014d903690600401610d6f565b5060405163bc197c8160e01b8152602090f35b8280fd5b5060031960c0368201126100cf5761017a610de2565b67ffffffffffffffff6024358181116104225761019b903690600401610e10565b9260443582811161041e576101b4903690600401610e10565b916064358181168091036103d657869560843583811161041a576101dc903690600401610d6f565b9160a43593841161041a576101f688943690600401610d6f565b9660018060a01b0397888654169160405192630f79bc9b60e31b84528360048160209a8b945af180156103e257600161023c916004958e916103ed575b50151514610e86565b868a8c5416604051948580926328dc132d60e01b82525afa9283156103e2578b936103a3575b507f3f998d848d8364d0f4ba361a1e2a550e49df9b8f2e80e8bb523cc1fa1fb748aa9392916102c56102b78c6102d994169860405196879687528b87015234604087015260e0606087015260e0860190610ef5565b848103608086015287610f52565b908760a085015283820360c0850152610ef5565b0390a1813b1561039f578661031d9381958261032d604051998a988997631759616b60e11b89523360048a01523060248a015260a060448a015260a4890190610f52565b9084888303016064890152610f52565b85810392830160848701525201925af190811561039457839161037d575b508080926001541681903415610373575b3491f1156103675780f35b604051903d90823e3d90fd5b6108fc915061035c565b61038690610d1d565b61039157813861034b565b50fd5b6040513d85823e3d90fd5b8680fd5b9a5090929150858a813d81116103db575b6103be8183610d31565b810103126103d65798518a99919290916102d9610262565b600080fd5b503d6103b4565b6040513d8d823e3d90fd5b61040d91508a3d8c11610413575b6104058183610d31565b810190610e6e565b38610233565b503d6103fb565b8780fd5b8580fd5b8480fd5b50346100d35760c03660031901126100d357610440610db6565b67ffffffffffffffff919060443583811161016057610463903690600401610e10565b606435938085116106db57366023860112156106db5784600401359061048882610df8565b956104966040519788610d31565b82875260208701906024829460051b8201019036821161041a57602401915b818310610782575050506104c7610dcc565b9185602060018060a01b03825416600460405180948193630f79bc9b60e31b83525af19081156107775761050791600191899161075e5750151514610e86565b604051916020830190468252306040850152600435606085015260018060a01b0387166080850152608084528360a08101109060a0850111176107485760da839160a083016040527f556e667265657a65457263313135354261746368416374696f6e00000000000060c08401526105858351809284860190610ed2565b8201019185516020870190895b81811061072f575050508851929092885b81811061070d5750506105c992500360bf19810160a0840152609f190160a08301610d31565b60c060a08201519101209060018060a01b0385541690813b1561041e576040516306cd4d0d60e01b815260048035908201526084803560248301526001600160a01b0392909216604482015260648101939093528591839190829084905af18015610702579084916106ee575b5050825b81518110156106ea576001600160a01b036106558287610f86565b51166106618284610f86565b51813b1561041e5761068e86928392604051948580948193637921219560e11b83528b3060048501610f1a565b03925af180156106df579085916106c7575b505060001981146106b35760010161063a565b634e487b7160e01b84526011600452602484fd5b6106d090610d1d565b6106db5783386106a0565b8380fd5b6040513d87823e3d90fd5b8380f35b6106f790610d1d565b610160578238610636565b6040513d86823e3d90fd5b84516001600160a01b03168352602094850194869450909201916001016105a3565b8251865260209586019587955090920191600101610592565b634e487b7160e01b600052604160045260246000fd5b61040d915060203d602011610413576104058183610d31565b6040513d89823e3d90fd5b82356001600160a01b03811681036103d6578152602092830192016104b5565b50346100d35760c03660031901126100d3576004356107bf610db6565b6001600160a01b03916064358381169291604435918490036103d6576107e3610dcc565b9086602087825416600460405180948193630f79bc9b60e31b83525af190811561099b5761081d916001918a916109835750151514610e86565b604051956020870146815230604089015282606089015281861660808901528460a08901528660c089015260c0885260e0880188811067ffffffffffffffff821117610748576108b160358b9a83604052610100810194742ab7333932b2bd32a2b93198989a9aa0b1ba34b7b760591b86526108a182518092610115850190610ed2565b8101036015810184520182610d31565b51902090875416803b1561041a576040516306cd4d0d60e01b815260048101939093526084803560248501526001600160a01b03949094166044840152606483019190915290918691839190829084905af19081156106df57859161096f575b5050823b1561096a5761093e92849283604051809681958294637921219560e11b84523060048501610f1a565b03925af1801561095f5761094f5750f35b61095890610d1d565b6100d35780f35b6040513d84823e3d90fd5b505050fd5b61097890610d1d565b61096a578338610911565b61040d915060203d8111610413576104058183610d31565b6040513d8a823e3d90fd5b5060a03660031901126100d3576001600160a01b0390600435828116908190036100cf5760243560443567ffffffffffffffff8082168092036104225760643581811161041e576109fb903690600401610d6f565b60843582811161039f5790610a17879493923690600401610d6f565b928885541660405190630f79bc9b60e31b8252816004816020998a945af1908115610c7f57600160049695949392610a58928c91610c8a5750151514610e86565b858a8a5416604051968780926328dc132d60e01b82525afa948515610c7f578995610c4c575b506040516303a24d0760e21b81526004810188905289816024818c5afa938415610c41578a94610b8f575b5050610b2592610afd7f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c6097969593610b17936040519889988952880152346040880152610100806060890152870190610ef5565b908860808701528960a087015285820360c0870152610ef5565b9083820360e0850152610ef5565b0390a1813b1561016057610b5483928392604051948580948193637921219560e11b8352303360048501610f1a565b03925af1801561095f57610b80575b5080808080946001541681903415610373573491f1156103675780f35b610b8990610d1d565b38610b63565b909193503d808b843e610ba28184610d31565b8201918781840312610c39578051918211610c39570181601f82011215610c3d57805190610bcf82610d53565b92610bdd6040519485610d31565b828452888383010111610c39578796959383610c2a610b259794610afd948b7f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c609d610b1799019101610ed2565b95509395969750819250610aa9565b8a80fd5b8980fd5b6040513d8c823e3d90fd5b9094508581813d8311610c78575b610c648183610d31565b81010312610c7457519338610a7e565b8880fd5b503d610c5a565b6040513d8b823e3d90fd5b61040d9150893d8b11610413576104058183610d31565b50346100d357806003193601126100d357546040516001600160a01b039091168152602090f35b9050346100cf5760203660031901126100cf5760043563ffffffff60e01b81168091036101605760209250630271189760e51b8114908115610d0c575b5015158152f35b6301ffc9a760e01b14905038610d05565b67ffffffffffffffff811161074857604052565b90601f8019910116810190811067ffffffffffffffff82111761074857604052565b67ffffffffffffffff811161074857601f01601f191660200190565b81601f820112156103d657803590610d8682610d53565b92610d946040519485610d31565b828452602083830101116103d657816000926020809301838601378301015290565b602435906001600160a01b03821682036103d657565b60a435906001600160a01b03821682036103d657565b600435906001600160a01b03821682036103d657565b67ffffffffffffffff81116107485760051b60200190565b81601f820112156103d657803591610e2783610df8565b92610e356040519485610d31565b808452602092838086019260051b8201019283116103d6578301905b828210610e5f575050505090565b81358152908301908301610e51565b908160209103126103d6575180151581036103d65790565b15610e8d57565b60405162461bcd60e51b815260206004820152601d60248201527f556e61626c6520746f20696e6372656d656e7420616374696f6e2069640000006044820152606490fd5b60005b838110610ee55750506000910152565b8181015183820152602001610ed5565b90602091610f0e81518092818552858086019101610ed2565b601f01601f1916010190565b6001600160a01b0391821681529116602082015260408101919091526001606082015260a06080820181905260009082015260c00190565b90815180825260208080930193019160005b828110610f72575050505090565b835185529381019392810192600101610f64565b8051821015610f9a5760209160051b010190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220046fa1bef7cb0a0c951bbd17e53e1f91d62e732d00b369e02822ad3da55a2e7c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_noWhitelistUtils";
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
        readonly name: "TransferErc1155";
        readonly type: "event";
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
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "TransferErc1155Batch";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC1155MetadataURI";
            readonly name: "erc1155Contract";
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
        readonly name: "freezeErc1155";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC1155";
            readonly name: "erc1155Contract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ones";
            readonly type: "uint256[]";
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
        readonly name: "freezeErc1155Batch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "noWhitelistUtils";
        readonly outputs: readonly [{
            readonly internalType: "contract INoWhitelistUtils";
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
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC1155";
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
        readonly name: "validateUnfreezeErc1155";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "contract IERC1155[]";
            readonly name: "contractAddrs";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUnfreezeErc1155Batch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): UserNFTStore1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UserNFTStore1155;
}
export {};
