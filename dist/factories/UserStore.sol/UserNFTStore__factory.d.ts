import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { UserNFTStore, UserNFTStoreInterface } from "../../UserStore.sol/UserNFTStore";
declare type UserNFTStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UserNFTStore__factory extends ContractFactory {
    constructor(...args: UserNFTStoreConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _minterAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UserNFTStore>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _minterAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UserNFTStore;
    connect(signer: Signer): UserNFTStore__factory;
    static readonly bytecode = "0x608060405260006002553480156200001657600080fd5b5060405162001cba38038062001cba8339810160408190526200003991620000ee565b6200005c6fa2a8918ca85bafe22016d0b997e4df60600160ff1b03600162000146565b8310620000af5760405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f510000000000604482015260640160405180910390fd5b6000929092556001805460ff191660ff92909216919091179055600580546001600160a01b0319166001600160a01b039092169190911790556200016e565b6000806000606084860312156200010457600080fd5b83519250602084015160ff811681146200011d57600080fd5b60408501519092506001600160a01b03811681146200013b57600080fd5b809150509250925092565b808201808211156200016857634e487b7160e01b600052601160045260246000fd5b92915050565b611b3c806200017e6000396000f3fe6080604052600436106101335760003560e01c806390e704e5116100b4578063d9d86def1161006e578063e493ef8c11610056578063e493ef8c1461039f578063f23a6e61146103c5578063ff51dff21461040a57005b8063d9d86def14610369578063de1ab9a01461038957005b80639cf45bf81161009c5780639cf45bf8146102f1578063b0d32db614610311578063bc197c811461032457005b806390e704e5146102be57806394dc2ed8146102d157005b80632a75f138116101055780635373edd4116100ed5780635373edd4146102695780637629c3fc146102895780638efb3bb2146102a957005b80632a75f1381461021e57806334d722c91461023157005b806301ffc9a71461013c578063150b7a021461017157806316b47ef7146101ce57806328dc132d146101fa57005b3661013a57005b005b34801561014857600080fd5b5061015c6101573660046110cf565b61042a565b60405190151581526020015b60405180910390f35b34801561017d57600080fd5b506101b561018c3660046111ed565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040516001600160e01b03199091168152602001610168565b3480156101da57600080fd5b506001546101e89060ff1681565b60405160ff9091168152602001610168565b34801561020657600080fd5b5061021060025481565b604051908152602001610168565b61013a61022c366004611271565b610493565b34801561023d57600080fd5b50600554610251906001600160a01b031681565b6040516001600160a01b039091168152602001610168565b34801561027557600080fd5b5061013a610284366004611302565b610624565b34801561029557600080fd5b5061013a6102a4366004611302565b6106a1565b3480156102b557600080fd5b506102106107a9565b61013a6102cc366004611271565b6107d7565b3480156102dd57600080fd5b5061013a6102ec366004611302565b6108e3565b3480156102fd57600080fd5b5061013a61030c3660046113f3565b61099f565b61013a61031f3660046114ea565b610a1c565b34801561033057600080fd5b506101b561033f3660046115b7565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561037557600080fd5b5061013a610384366004611646565b610b30565b34801561039557600080fd5b5061021060005481565b3480156103ab57600080fd5b5061021070014551231950b75fc4402da1732fc9bebe1981565b3480156103d157600080fd5b506101b56103e036600461169a565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561041657600080fd5b5061015c610425366004611703565b610bb9565b60006001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000148061048d57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6001600260008282546104a6919061175f565b925050819055507f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c60600254843485888a8b6001600160a01b0316630e89341c8c6040518263ffffffff1660e01b815260040161050491815260200190565b600060405180830381865afa158015610521573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105499190810190611796565b8860405161055e989796959493929190611839565b60405180910390a1604051637921219560e11b8152336004820152306024820152604481018590526001606482015260a06084820152600060a48201526001600160a01b0386169063f242432a9060c4015b600060405180830381600087803b1580156105ca57600080fd5b505af11580156105de573d6000803e3d6000fd5b50506005546040516001600160a01b0390911692503480156108fc029250906000818181858888f1935050505015801561061c573d6000803e3d6000fd5b505050505050565b604080514660208201529081018790526001600160a01b038616606082015260009060800160408051601f1981840301815290829052610666916020016118b5565b6040516020818303038152906040528051906020012060001c905061068d87848484610e05565b610698868686610e8e565b50505050505050565b604080514660208201523091810191909152606081018790526001600160a01b03808716608083015260a08201869052841660c082015260009060e00160408051601f19818403018152908290526106fb916020016118fa565b6040516020818303038152906040528051906020012060001c905061072287848484610e05565b604051637921219560e11b81523060048201526001600160a01b038781166024830152604482018790526001606483015260a06084830152600060a483015285169063f242432a9060c4015b600060405180830381600087803b15801561078857600080fd5b505af115801561079c573d6000803e3d6000fd5b5050505050505050505050565b6107d47f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0600161175f565b81565b6001600260008282546107ea919061175f565b925050819055507fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152600254843485888a8b6001600160a01b031663c87b56dd8c6040518263ffffffff1660e01b815260040161084891815260200190565b600060405180830381865afa158015610865573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261088d9190810190611796565b886040516108a2989796959493929190611839565b60405180910390a1604051632142170760e11b8152336004820152306024820152604481018590526001600160a01b038616906342842e0e906064016105b0565b604080514660208201523091810191909152606081018790526001600160a01b03808716608083015260a08201869052841660c082015260009060e00160408051601f198184030181529082905261093d9160200161193f565b6040516020818303038152906040528051906020012060001c905061096487848484610e05565b604051632142170760e11b81523060048201526001600160a01b038781166024830152604482018790528516906342842e0e9060640161076e565b604080514660208201523091810191909152606081018790526001600160a01b038616608082015260009060a00160408051601f19818403018152908290526109ea916020016118b5565b6040516020818303038152906040528051906020012060001c9050610a1187848484610e05565b610698868686610f07565b600160026000828254610a2f919061175f565b90915550506002546040517f3f998d848d8364d0f4ba361a1e2a550e49df9b8f2e80e8bb523cc1fa1fb748aa91610a71918690349087908b908d9089906119bf565b60405180910390a16040517f2eb2c2d60000000000000000000000000000000000000000000000000000000081526001600160a01b03871690632eb2c2d690610ac490339030908a908a90600401611a31565b600060405180830381600087803b158015610ade57600080fd5b505af1158015610af2573d6000803e3d6000fd5b50506005546040516001600160a01b0390911692503480156108fc029250906000818181858888f19350505050158015610698573d6000803e3d6000fd5b604080514660208201529081018690526060810185905260ff8416608082015260009060a00160408051601f1981840301815290829052610b7391602001611a8c565b6040516020818303038152906040528051906020012060001c9050610b9a86848484610fe9565b5050506000919091556001805460ff191660ff90921691909117905550565b600070014551231950b75fc4402da1732fc9bebe198410610c475760405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60448201527f205100000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6001600160a01b03821615801590610c5f5750600086115b8015610c6b5750600084115b8015610c775750600083115b610cc35760405162461bcd60e51b815260206004820152601660248201527f6e6f207a65726f20696e7075747320616c6c6f776564000000000000000000006044820152606401610c3e565b60408051602080820189905260f888901b7fff00000000000000000000000000000000000000000000000000000000000000168284015260418201869052606085901b6bffffffffffffffffffffffff1916606183015282516055818403018152607590920190925280519101206000600170014551231950b75fc4402da1732fc9bebe19878a09610d679070014551231950b75fc4402da1732fc9bebe19611ac4565b60ff891615610d7757601c610d7a565b601b5b8a70014551231950b75fc4402da1732fc9bebe198c87096040805160008152602081018083529590955260ff909316928401929092526060830152608082015260a0016020604051602081039080840390855afa158015610ddf573d6000803e3d6000fd5b5050604051601f1901516001600160a01b03868116911614935050505095945050505050565b60008481526003602052604090205460ff1615610e645760405162461bcd60e51b815260206004820152601160248201527f6475706c696361746520616374696f6e210000000000000000000000000000006044820152606401610c3e565b6000848152600360205260409020805460ff19166001179055610e88838383611068565b50505050565b604051637921219560e11b81523060048201526001600160a01b038481166024830152604482018490526001606483015260a06084830152600060a483015282169063f242432a9060c401600060405180830381600087803b158015610ef357600080fd5b505af1158015610698573d6000803e3d6000fd5b60005b8251811015610e8857818181518110610f2557610f25611ad7565b60200260200101516001600160a01b031663f242432a3086868581518110610f4f57610f4f611ad7565b60209081029190910101516040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526001606482015260a06084820152600060a482015260c401600060405180830381600087803b158015610fbe57600080fd5b505af1158015610fd2573d6000803e3d6000fd5b505050508080610fe190611aed565b915050610f0a565b60008481526004602052604090205460ff16156110485760405162461bcd60e51b815260206004820152601160248201527f6475706c696361746520616374696f6e210000000000000000000000000000006044820152606401610c3e565b6000848152600460205260409020805460ff19166001179055610e888383835b60005460015461107e919060ff16858486610bb9565b6110ca5760405162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152606401610c3e565b505050565b6000602082840312156110e157600080fd5b81356001600160e01b0319811681146110f957600080fd5b9392505050565b6001600160a01b038116811461111557600080fd5b50565b803561112381611100565b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561116757611167611128565b604052919050565b600067ffffffffffffffff82111561118957611189611128565b50601f01601f191660200190565b600082601f8301126111a857600080fd5b81356111bb6111b68261116f565b61113e565b8181528460208386010111156111d057600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561120357600080fd5b843561120e81611100565b9350602085013561121e81611100565b925060408501359150606085013567ffffffffffffffff81111561124157600080fd5b61124d87828801611197565b91505092959194509250565b803567ffffffffffffffff8116811461112357600080fd5b600080600080600060a0868803121561128957600080fd5b853561129481611100565b9450602086013593506112a960408701611259565b9250606086013567ffffffffffffffff808211156112c657600080fd5b6112d289838a01611197565b935060808801359150808211156112e857600080fd5b506112f588828901611197565b9150509295509295909350565b60008060008060008060c0878903121561131b57600080fd5b86359550602087013561132d81611100565b945060408701359350606087013561134481611100565b92506080870135915060a087013561135b81611100565b809150509295509295509295565b600067ffffffffffffffff82111561138357611383611128565b5060051b60200190565b600082601f83011261139e57600080fd5b813560206113ae6111b683611369565b82815260059290921b840181019181810190868411156113cd57600080fd5b8286015b848110156113e857803583529183019183016113d1565b509695505050505050565b60008060008060008060c0878903121561140c57600080fd5b8635955060208088013561141f81611100565b9550604088013567ffffffffffffffff8082111561143c57600080fd5b6114488b838c0161138d565b965060608a013591508082111561145e57600080fd5b508801601f81018a1361147057600080fd5b803561147e6111b682611369565b81815260059190911b8201830190838101908c83111561149d57600080fd5b928401925b828410156114c45783356114b581611100565b825292840192908401906114a2565b9650505050608088013592506114de905060a08801611118565b90509295509295509295565b60008060008060008060c0878903121561150357600080fd5b61150c87611118565b9550602087013567ffffffffffffffff8082111561152957600080fd5b6115358a838b0161138d565b9650604089013591508082111561154b57600080fd5b6115578a838b0161138d565b955061156560608a01611259565b9450608089013591508082111561157b57600080fd5b6115878a838b01611197565b935060a089013591508082111561159d57600080fd5b506115aa89828a01611197565b9150509295509295509295565b600080600080600060a086880312156115cf57600080fd5b85356115da81611100565b945060208601356115ea81611100565b9350604086013567ffffffffffffffff8082111561160757600080fd5b61161389838a0161138d565b9450606088013591508082111561162957600080fd5b6112d289838a0161138d565b803560ff8116811461112357600080fd5b600080600080600060a0868803121561165e57600080fd5b853594506020860135935061167560408701611635565b925060608601359150608086013561168c81611100565b809150509295509295909350565b600080600080600060a086880312156116b257600080fd5b85356116bd81611100565b945060208601356116cd81611100565b93506040860135925060608601359150608086013567ffffffffffffffff8111156116f757600080fd5b6112f588828901611197565b600080600080600060a0868803121561171b57600080fd5b8535945061172b60208701611635565b93506040860135925060608601359150608086013561168c81611100565b634e487b7160e01b600052601160045260246000fd5b8082018082111561048d5761048d611749565b60005b8381101561178d578181015183820152602001611775565b50506000910152565b6000602082840312156117a857600080fd5b815167ffffffffffffffff8111156117bf57600080fd5b8201601f810184136117d057600080fd5b80516117de6111b68261116f565b8181528560208385010111156117f357600080fd5b611804826020830160208601611772565b95945050505050565b60008151808452611825816020860160208601611772565b601f01601f19169290920160200192915050565b60006101008a835267ffffffffffffffff8a1660208401528860408401528060608401526118698184018961180d565b90508660808401526001600160a01b03861660a084015282810360c0840152611892818661180d565b905082810360e08401526118a6818561180d565b9b9a5050505050505050505050565b7f556e667265657a65457263313135354261746368416374696f6e0000000000008152600082516118ed81601a850160208701611772565b91909101601a0192915050565b7f556e667265657a6545726331313535416374696f6e0000000000000000000000815260008251611932816015850160208701611772565b9190910160150192915050565b7f556e667265657a65457263373231416374696f6e000000000000000000000000815260008251611977816014850160208701611772565b9190910160140192915050565b600081518084526020808501945080840160005b838110156119b457815187529582019590820190600101611998565b509495945050505050565b87815267ffffffffffffffff8716602082015285604082015260e0606082015260006119ee60e083018761180d565b8281036080840152611a008187611984565b90506001600160a01b03851660a084015282810360c0840152611a23818561180d565b9a9950505050505050505050565b60006001600160a01b03808716835280861660208401525060a06040830152611a5d60a0830185611984565b8281036060840152611a6f8185611984565b838103608090940193909352505060008152602001949350505050565b7f55706461746547726f75704b6579416374696f6e000000000000000000000000815260008251611977816014850160208701611772565b8181038181111561048d5761048d611749565b634e487b7160e01b600052603260045260246000fd5b600060018201611aff57611aff611749565b506001019056fea2646970667358221220676aefbc621e1f821091a1be116a71db9e2feabd6461c66239ed263512bf5d5d64736f6c63430008110033";
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
        readonly stateMutability: "payable";
        readonly type: "fallback";
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
            readonly name: "id";
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
        readonly name: "validateUnfreezeErc1155BatchNew";
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
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): UserNFTStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UserNFTStore;
}
export {};
