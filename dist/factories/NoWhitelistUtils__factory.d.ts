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
    static readonly bytecode = "0x6080346100da57601f610c1338819003918201601f19168301916001600160401b038311848410176100df578084926060946040528339810103126100da5780519060208101519060ff82168092036100da5760400151916fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038110156100955760005560ff196001541617600155600255604051610b1d90816100f68239f35b60405162461bcd60e51b815260206004820152601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c806306cd4d0d146106c75780631192dfc71461068c57806315fdf194146105775780631cd6dd2d1461055a57806328dc132d1461053b578063381c63b5146104b85780637261f50614610496578063747047a91461045b5780637bcde4d8146103f65780638efb3bb2146103bb578063ae39d94f1461038f578063c22c90c91461021e578063d9d86def14610131578063e493ef8c146101005763e7acb7f7146100d25750610011565b346100fc5760203660031901126100fc57816020938260ff93358252855220541690519015158152f35b8280fd5b50503461012d578160031936011261012d575170014551231950b75fc4402da1732fc9bebe198152602090f35b5080fd5b5091903461012d5760a036600319011261012d578235602435906044359260ff841680940361021a57610162610777565b9080519046602083015230818301528360608301528460808301528560a083015260a0825260c082019082821067ffffffffffffffff8311176102075790806101f795949392526101ea60e0830192732ab83230ba32a3b937bab825b2bca0b1ba34b7b760611b84526101d860f4820182610a7b565b0360df198101835260bf190182610a59565b5190209160643590610aa6565b825560ff19600154161760015580f35b634e487b7160e01b885260418952602488fd5b8480fd5b50346100fc5760a03660031901126100fc57610238610761565b6001600160a01b0360243581811694929085900361038b57604435908261025d610777565b91169485885260209360058552858920541661034857506006929161031591855146858201523087820152826060820152876080820152608081526102a181610a0b565b86516102de816102d08882019471416464436f6e74726163744164647265737360701b86526032830190610a7b565b03601f198101835282610a59565b51902091808a52600385526102f960ff888c205416156107c8565b895260038452858920805460ff19166001179055606435610808565b83865260058152828620946bffffffffffffffffffffffff60a01b95818782541617905586525283209182541617905580f35b845162461bcd60e51b8152908101849052601a60248201527f436f6e747261637420616c7265616479206465706c6f796564210000000000006044820152606490fd5b8580fd5b50346100fc5760203660031901126100fc578160209360ff923581526003855220541690519015158152f35b50503461012d578160031936011261012d57602090517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b509134610458578060031936011261045857338152600660205281812054610428906001600160a01b0316151561078d565b600254906001820180921161044557602083836002555160018152f35b634e487b7160e01b815260118452602490fd5b80fd5b50503461012d57602036600319011261012d576020916001600160a01b0390829082610485610761565b168152600585522054169051908152f35b50503461012d578160031936011261012d5760209060ff600154169051908152f35b50346100fc5760603660031901126100fc576105359035916104d8610746565b908051904660208301523081830152846060830152606082526104fa82610a3d565b51610529816102d060208201947129b2ba20b1ba34b7b721b73a20b1ba34b7b760711b86526032830190610a7b565b51902090602435610808565b60025580f35b50503461012d578160031936011261012d576020906002549051908152f35b50503461012d578160031936011261012d57602091549051908152f35b50346100fc5760803660031901126100fc576024356001600160a01b038181169280359284900361038b57606435918216820361038b5783156106495750848093610622829483948851466020820152308a820152826060820152846080820152608081526105e581610a0b565b8951610615816102d06020820194712a3930b739b332b92332b2b9a0b1ba34b7b760711b86526032830190610a7b565b5190209160443590610aa6565b4790828215610640575bf115610636575080f35b51903d90823e3d90fd5b506108fc61062c565b606490602086519162461bcd60e51b8352820152601f60248201527f73686f756c646e27742073656e6420746f206e756c6c206164647265737321006044820152fd5b50503461012d57602036600319011261012d576020916001600160a01b03908290826106b6610761565b168152600685522054169051908152f35b5090346100fc5760803660031901126100fc576107439135906106e8610746565b33855260066020528185205490929061070b906001600160a01b0316151561078d565b808552600360205261072360ff8387205416156107c8565b845260036020528320805460ff1916600117905560643590602435610808565b80f35b604435906001600160a01b038216820361075c57565b600080fd5b600435906001600160a01b038216820361075c57565b608435906001600160a01b038216820361075c57565b1561079457565b60405162461bcd60e51b815260206004820152600c60248201526b4e6f7420416c6c6f7765642160a01b6044820152606490fd5b156107cf57565b60405162461bcd60e51b81526020600482015260116024820152706475706c696361746520616374696f6e2160781b6044820152606490fd5b909170014551231950b75fc4402da1732fc9bebe1991828110156109bb576001600160a01b0384811693909290841515806109b0575b806109a7575b8061099e575b156109605760009283549082600154946040998a5190602082019286845260ff60f81b8960f81b168d84015260418301526bffffffffffffffffffffffff199060601b166061820152605581526108a081610a3d565b51902091830983039383851161094c57926080926020959260ff889616156000146109435760ff601b5b8c519586521687850152818b85015209606082015282805260015afa15610938575116036108f55750565b5162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152606490fd5b8351903d90823e3d90fd5b60ff601c6108ca565b634e487b7160e01b86526011600452602486fd5b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b5081151561084a565b50821515610844565b50600054151561083e565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fd5b60a0810190811067ffffffffffffffff821117610a2757604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff821117610a2757604052565b90601f8019910116810190811067ffffffffffffffff821117610a2757604052565b9081519160005b838110610a93575050016000815290565b8060208092840101518185015201610a82565b90610ae5939291806000526004602052610ac860ff60406000205416156107c8565b60005260046020526040600020600160ff19825416179055610808565b56fea26469706673582212203567074be9c781323f0db3be98fd25b8fa04c0096ebc9dc1a9625318dfaf01fb64736f6c63430008110033";
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
