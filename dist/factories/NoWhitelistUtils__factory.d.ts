import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NoWhitelistUtils, NoWhitelistUtilsInterface } from "../NoWhitelistUtils";
declare type NoWhitelistUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoWhitelistUtils__factory extends ContractFactory {
    constructor(...args: NoWhitelistUtilsConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _actionCnt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NoWhitelistUtils>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _actionCnt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NoWhitelistUtils;
    connect(signer: Signer): NoWhitelistUtils__factory;
    static readonly bytecode = "0x6080346100da57601f610f5838819003918201601f19168301916001600160401b038311848410176100df578084926060946040528339810103126100da5780519060208101519060ff82168092036100da5760400151916fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038110156100955760005560ff196001541617600155600255604051610e6290816100f68239f35b60405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c806306cd4d0d146108495780631192dfc71461080257806315fdf194146106bb5780631cd6dd2d1461069e57806328dc132d1461067f578063381c63b5146105f15780637261f506146105cf578063747047a9146105885780637bcde4d8146104fe5780638efb3bb2146104c3578063ae39d94f14610497578063c22c90c9146102a8578063d9d86def1461013f578063e493ef8c146101005763e7acb7f7146100d25750610011565b346100fc5760206003193601126100fc57816020938260ff93358252855220541690519015158152f35b8280fd5b50503461013b578160031936011261013b57602090517ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418152f35b5080fd5b5091903461013b5760a060031936011261013b578235602435906044359260ff84168094036102a45761017061093b565b9080519046602083015230818301528360608301528460808301528560a083015260a0825260c082019082821067ffffffffffffffff83111761027857908061024a959493925261023d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4060e08401937f55706461746547726f75704b6579416374696f6e000000000000000000000000855261021060f4820182610da2565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff20810184520182610d61565b5190209160643590610dcd565b82557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600154161760015580f35b60248860418b7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8480fd5b50346100fc5760a06003193601126100fc576102c2610918565b916024359273ffffffffffffffffffffffffffffffffffffffff908185168095036104935760443590826102f461093b565b9116948588526020936005855285892054166104375750600692916103f3918551468582015230878201528260608201528760808201526080815261033881610cfa565b865161039e81610372888201947f416464436f6e747261637441646472657373000000000000000000000000000086526032830190610da2565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610d61565b51902091808a52600385526103b960ff888c205416156109c3565b89526003845285892060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055606435610a28565b83865260058152828620947fffffffffffffffffffffffff000000000000000000000000000000000000000095818782541617905586525283209182541617905580f35b606490848651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601a60248201527f436f6e747261637420616c7265616479206465706c6f796564210000000000006044820152fd5b8580fd5b50346100fc5760206003193601126100fc578160209360ff923581526003855220541690519015158152f35b50503461013b578160031936011261013b57602090517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b509134610585578060031936011261058557338152600660205261053c73ffffffffffffffffffffffffffffffffffffffff8383205416151561095e565b600254906001820180921161055957602083836002555160018152f35b806011857f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b80fd5b50503461013b57602060031936011261013b576020918173ffffffffffffffffffffffffffffffffffffffff91826105be610918565b168152600585522054169051908152f35b50503461013b578160031936011261013b5760209060ff600154169051908152f35b50346100fc5760606003193601126100fc576106799035916106116108f0565b9080519046602083015230818301528460608301526060825261063382610d45565b5161066d8161037260208201947f536574416374696f6e436e74416374696f6e000000000000000000000000000086526032830190610da2565b51902090602435610a28565b60025580f35b50503461013b578160031936011261013b576020906002549051908152f35b50503461013b578160031936011261013b57602091549051908152f35b50346100fc5760806003193601126100fc5780356024359173ffffffffffffffffffffffffffffffffffffffff908184168094036104935760643591821682036104935783156107a5575084809361077e829483948851466020820152308a8201528260608201528460808201526080815261073681610cfa565b89516107718161037260208201947f5472616e7366657246656573416374696f6e000000000000000000000000000086526032830190610da2565b5190209160443590610dcd565b479082821561079c575bf115610792575080f35b51903d90823e3d90fd5b506108fc610788565b60649060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f73686f756c646e27742073656e6420746f206e756c6c206164647265737321006044820152fd5b50503461013b57602060031936011261013b576020918173ffffffffffffffffffffffffffffffffffffffff9182610838610918565b168152600685522054169051908152f35b5090346100fc5760806003193601126100fc576108ed91359061086a6108f0565b91338552600660205261089773ffffffffffffffffffffffffffffffffffffffff8387205416151561095e565b80855260036020526108af60ff8387205416156109c3565b84526003602052832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905560643590602435610a28565b80f35b6044359073ffffffffffffffffffffffffffffffffffffffff8216820361091357565b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361091357565b6084359073ffffffffffffffffffffffffffffffffffffffff8216820361091357565b1561096557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f7420416c6c6f7765642100000000000000000000000000000000000000006044820152fd5b156109ca57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6475706c696361746520616374696f6e210000000000000000000000000000006044820152fd5b90917ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641419182811015610c765773ffffffffffffffffffffffffffffffffffffffff918285169384151580610c6b575b80610c62575b80610c59575b15610bfb5760009283549082600154946040997fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008b519160208301938785528d7fff000000000000000000000000000000000000000000000000000000000000008b60f81b1690850152604184015260601b16606182015260558152610b0881610d45565b519020918309830393838511610bce57926080926020959260ff88961615600014610bc55760ff601b5b8c519586521687850152818b85015209606082015282805260015afa15610bba57511603610b5d5750565b606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152fd5b8351903d90823e3d90fd5b60ff601c610b32565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f207a65726f20696e7075747320616c6c6f776564000000000000000000006044820152fd5b50811515610a83565b50821515610a7d565b506000541515610a77565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f60448201527f20510000000000000000000000000000000000000000000000000000000000006064820152fd5b60a0810190811067ffffffffffffffff821117610d1657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6080810190811067ffffffffffffffff821117610d1657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d1657604052565b9081519160005b838110610dba575050016000815290565b8060208092840101518185015201610da9565b90610e2a939291806000526004602052610def60ff60406000205416156109c3565b6000526004602052604060002060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055610a28565b56fea26469706673582212205071f2ebf8e68a1fed885b7f341431f75a15a205eaf6d3e643f687637c5c785b64736f6c63430008110033";
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
            readonly internalType: "uint256";
            readonly name: "_actionCnt";
            readonly type: "uint256";
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
            readonly internalType: "address";
            readonly name: "collectionAddr";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "addNewContractAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "collectionToContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "consumedActions";
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
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "consumedConfigActions";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "contractToCollection";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "incrementor";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pubKeyYParity";
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
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "actionHash";
            readonly type: "uint256";
        }];
        readonly name: "requireValidatorSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_actionCnt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "setActionCnt";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "signingPubKeyX";
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
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
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
        readonly name: "validateTransferFees";
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
            readonly name: "_signingPubKeyX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_pubKeyYParity";
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
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): NoWhitelistUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoWhitelistUtils;
}
export {};
