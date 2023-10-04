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
    static readonly bytecode = "0x60803461007a57601f61147038819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b03198181600054161760005560015416176001556040516113da90816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a714610ff55750806328815af314610fc25780632a75f13814610c3c5780637629c3fc146109925780639cf45bf8146104af578063b0d32db614610194578063bc197c81146100ee5763f23a6e611461007957600080fd5b346100eb5760a06003193601126100eb576100926111b1565b5061009b61116b565b5060843567ffffffffffffffff81116100e7576100bc903690600401611124565b5060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b5080fd5b80fd5b50346100eb5760a06003193601126100eb576101086111b1565b5061011161116b565b5067ffffffffffffffff604435818111610190576101339036906004016111ec565b506064358181116101905761014c9036906004016111ec565b506084359081116100e757610165903690600401611124565b5060206040517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b8280fd5b5060031960c0813601126100e7576101aa6111b1565b67ffffffffffffffff6024358181116104ab576101cb9036906004016111ec565b926044358281116104a7576101e49036906004016111ec565b9160643581811680910361045f5786956084358381116104a35761020c903690600401611124565b9160a4359384116104a35761022688943690600401611124565b9673ffffffffffffffffffffffffffffffffffffffff978886541691604051927f7bcde4d80000000000000000000000000000000000000000000000000000000084528360048160209a8b945af1801561046b576001610293916004958e91610476575b50151514611262565b868a8c5416604051948580927f28dc132d0000000000000000000000000000000000000000000000000000000082525afa92831561046b578b9361042c575b507f3f998d848d8364d0f4ba361a1e2a550e49df9b8f2e80e8bb523cc1fa1fb748aa9392916103356103278c61034994169860405196879687528b87015234604087015260e0606087015260e08601906112ea565b84810360808601528761132d565b908760a085015283820360c08501526112ea565b0390a1813b1561042857866103a6938195826103b6604051998a9889977f2eb2c2d60000000000000000000000000000000000000000000000000000000089523360048a01523060248a015260a060448a015260a489019061132d565b908488830301606489015261132d565b85810392830160848701525201925af190811561041d578391610406575b5080809260015416819034156103fc575b3491f1156103f05780f35b604051903d90823e3d90fd5b6108fc91506103e5565b61040f90611095565b61041a5781386103d4565b50fd5b6040513d85823e3d90fd5b8680fd5b9a5090929150858a813d8111610464575b61044781836110a9565b8101031261045f5798518a99919290916103496102d2565b600080fd5b503d61043d565b6040513d8d823e3d90fd5b61049691508a3d8c1161049c575b61048e81836110a9565b81019061124a565b3861028a565b503d610484565b8780fd5b8580fd5b8480fd5b50346100eb5760c06003193601126100eb576104c961116b565b67ffffffffffffffff9190604435838111610190576104ec9036906004016111ec565b60643593808511610898573660238601121561089857846004013590610511826111d4565b9561051f60405197886110a9565b82875260208701906024829460051b820101903682116104a357602401915b8183106109655750505061055061118e565b9185602073ffffffffffffffffffffffffffffffffffffffff8254166004604051809481937f7bcde4d80000000000000000000000000000000000000000000000000000000083525af190811561095a576105b79160019189916109415750151514611262565b604051916020830190468252306040850152600435606085015273ffffffffffffffffffffffffffffffffffffffff87166080850152608084528360a08101109060a085011117610912579060da839260a084016040527f556e667265657a65457263313135354261746368416374696f6e00000000000060c085015261064484518092848701906112c7565b83010185516020870190895b8181106108f9575050508851909190885b8181106108ca575050506106c4917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6091037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff40810160a08501520160a083016110a9565b60c060a08201519101209073ffffffffffffffffffffffffffffffffffffffff85541690813b156104a7576040517f06cd4d0d000000000000000000000000000000000000000000000000000000008152600480359082015260848035602483015273ffffffffffffffffffffffffffffffffffffffff92909216604482015260648101939093528591839190829084905af180156108bf579084916108ab575b5050825b81518110156108a75773ffffffffffffffffffffffffffffffffffffffff6107918287611361565b511661079d8284611361565b51813b156104a7576040517ff242432a00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8616602482015260448101919091526001606482015260a06084820152600060a4820152908590829060c490829084905af1801561089c57908591610884575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461085757600101610769565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b61088d90611095565b610898578338610826565b8380fd5b6040513d87823e3d90fd5b8380f35b6108b490611095565b610190578238610765565b6040513d86823e3d90fd5b825173ffffffffffffffffffffffffffffffffffffffff16845285945060209384019390920191600101610661565b8251845286955060209384019390920191600101610650565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610496915060203d60201161049c5761048e81836110a9565b6040513d89823e3d90fd5b823573ffffffffffffffffffffffffffffffffffffffff8116810361045f5781526020928301920161053e565b50346100eb5760c06003193601126100eb576004356109af61116b565b604435906064359173ffffffffffffffffffffffffffffffffffffffff9384841680940361045f576109df61118e565b90866020878254166004604051809481937f7bcde4d80000000000000000000000000000000000000000000000000000000083525af1908115610c3157610a32916001918a91610c195750151514611262565b604051956020870146815230604089015282606089015281861660808901528460a08901528660c089015260c0885260e0880188811067ffffffffffffffff82111761091257610ace60358b9a836040526101008101947f556e667265657a6545726331313535416374696f6e00000000000000000000008652610abe825180926101158501906112c7565b81010360158101845201826110a9565b51902090875416803b156104a357610b4b93888094604051968795869485937f06cd4d0d00000000000000000000000000000000000000000000000000000000855260843590600486019094939273ffffffffffffffffffffffffffffffffffffffff906060936080840197845260208401521660408201520152565b03925af190811561089c578591610c05575b5050823b15610c00576040517ff242432a00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff92909216602483015260448201526001606482015260a06084820152600060a4820152908290829060c490829084905af18015610bf557610be55750f35b610bee90611095565b6100eb5780f35b6040513d84823e3d90fd5b505050fd5b610c0e90611095565b610c00578338610b5d565b610496915060203d811161049c5761048e81836110a9565b6040513d8a823e3d90fd5b5060a06003193601126100eb576004359073ffffffffffffffffffffffffffffffffffffffff918281168091036100e75760243560443567ffffffffffffffff8082168092036104ab576064358181116104a757610c9e903690600401611124565b6084358281116104285790610cba879493923690600401611124565b9288855416604051907f7bcde4d8000000000000000000000000000000000000000000000000000000008252816004816020998a945af1908115610fa057600160049695949392610d14928c91610fab5750151514611262565b858a8a5416604051968780927f28dc132d0000000000000000000000000000000000000000000000000000000082525afa948515610fa0578995610f6d575b506040517f0e89341c00000000000000000000000000000000000000000000000000000000815287600482015289816024818c5afa938415610f62578a94610eb0575b5050610e1292610dea7f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c6097969593610e049360405198899889528801523460408801526101008060608901528701906112ea565b908860808701528960a087015285820360c08701526112ea565b9083820360e08501526112ea565b0390a1813b15610190576040517ff242432a00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101919091526001606482015260a06084820152600060a4820152908290829060c490829084905af18015610bf557610ea1575b50808080809460015416819034156103fc573491f1156103f05780f35b610eaa90611095565b38610e84565b909193503d808b843e610ec381846110a9565b8201918781840312610f5a578051918211610f5a570181601f82011215610f5e57805190610ef0826110ea565b92610efe60405194856110a9565b828452888383010111610f5a578796959383610f4b610e129794610dea948b7f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c609d610e04990191016112c7565b95509395969750819250610d96565b8a80fd5b8980fd5b6040513d8c823e3d90fd5b9094508581813d8311610f99575b610f8581836110a9565b81010312610f9557519338610d53565b8880fd5b503d610f7b565b6040513d8b823e3d90fd5b6104969150893d8b1161049c5761048e81836110a9565b50346100eb57806003193601126100eb5773ffffffffffffffffffffffffffffffffffffffff6020915416604051908152f35b9050346100e75760206003193601126100e7576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361019057602092507f4e2312e000000000000000000000000000000000000000000000000000000000811490811561106b575b5015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438611064565b67ffffffffffffffff811161091257604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761091257604052565b67ffffffffffffffff811161091257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561045f5780359061113b826110ea565b9261114960405194856110a9565b8284526020838301011161045f57816000926020809301838601378301015290565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361045f57565b60a4359073ffffffffffffffffffffffffffffffffffffffff8216820361045f57565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361045f57565b67ffffffffffffffff81116109125760051b60200190565b81601f8201121561045f57803591611203836111d4565b9261121160405194856110a9565b808452602092838086019260051b82010192831161045f578301905b82821061123b575050505090565b8135815290830190830161122d565b9081602091031261045f5751801515810361045f5790565b1561126957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f556e61626c6520746f20696e6372656d656e7420616374696f6e2069640000006044820152fd5b60005b8381106112da5750506000910152565b81810151838201526020016112ca565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093611326815180928187528780880191016112c7565b0116010190565b90815180825260208080930193019160005b82811061134d575050505090565b83518552938101939281019260010161133f565b80518210156113755760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122054e9d92894be302e1b06391df08e4688892c4d603d246cc5eb32eb91e3922bb764736f6c63430008110033";
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
