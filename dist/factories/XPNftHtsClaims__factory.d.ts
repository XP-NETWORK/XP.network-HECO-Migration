import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { XPNftHtsClaims, XPNftHtsClaimsInterface } from "../XPNftHtsClaims";
declare type XPNftHtsClaimsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class XPNftHtsClaims__factory extends ContractFactory {
    constructor(...args: XPNftHtsClaimsConstructorParams);
    deploy(xpNftHts_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<XPNftHtsClaims>;
    getDeployTransaction(xpNftHts_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): XPNftHtsClaims;
    connect(signer: Signer): XPNftHtsClaims__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161066e38038061066e83398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6105db806100936000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806303b570aa1461005c5780630b5d6cab146100715780630e44263a1461009a57806313b87c73146100d257806328dafa73146100e5575b600080fd5b61006f61006a36600461047b565b610110565b005b61008461007f3660046104c8565b6101e1565b60405161009191906104fb565b60405180910390f35b6100b06100a836600461053f565b606081901c91565b604080516001600160a01b03909316835260079190910b602083015201610091565b61006f6100e036600461047b565b610219565b6001546100f8906001600160a01b031681565b6040516001600160a01b039091168152602001610091565b6001546001600160a01b031633146101605760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b21029b2b73232b960911b60448201526064015b60405180910390fd5b6001600160a01b038084166000908152602081815260408083209386168352929052206101978167ffffffffffffffff8416610295565b6101db5760405162461bcd60e51b815260206004820152601560248201527410d85b9b9bdd0818db185a5b481d1a1a5cc81b999d605a1b6044820152606401610157565b50505050565b6001600160a01b03808316600090815260208181526040808320938516835292905220606090610210906102a1565b90505b92915050565b6001546001600160a01b031633146102645760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b21029b2b73232b960911b6044820152606401610157565b6001600160a01b038084166000908152602081815260408083209386168352929052206101db90600783900b6102b5565b600061021083836102c1565b606060006102ae836103b4565b9392505050565b60006102108383610410565b600081815260018301602052604081205480156103aa5760006102e5600183610558565b85549091506000906102f990600190610558565b905081811461035e57600086600001828154811061031957610319610579565b906000526020600020015490508087600001848154811061033c5761033c610579565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061036f5761036f61058f565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610213565b6000915050610213565b60608160000180548060200260200160405190810160405280929190818152602001828054801561040457602002820191906000526020600020905b8154815260200190600101908083116103f0575b50505050509050919050565b600081815260018301602052604081205461045757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610213565b506000610213565b80356001600160a01b038116811461047657600080fd5b919050565b60008060006060848603121561049057600080fd5b6104998461045f565b92506104a76020850161045f565b915060408401358060070b81146104bd57600080fd5b809150509250925092565b600080604083850312156104db57600080fd5b6104e48361045f565b91506104f26020840161045f565b90509250929050565b6020808252825182820181905260009190848201906040850190845b8181101561053357835183529284019291840191600101610517565b50909695505050505050565b60006020828403121561055157600080fd5b5035919050565b8181038181111561021357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220476f9c5dd4d825a3119d92269e3bf0ea10ee9d0b9be969d51fd4973f2c87982e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "xpNftHts_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int64";
            readonly name: "serial";
            readonly type: "int64";
        }];
        readonly name: "addClaimRecord";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "data";
            readonly type: "uint256";
        }];
        readonly name: "decodeHts";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "int64";
            readonly name: "";
            readonly type: "int64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int64";
            readonly name: "serialNum";
            readonly type: "int64";
        }];
        readonly name: "getClaimRecord";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "claimer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getClaimableNfts";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "xpNftHts";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): XPNftHtsClaimsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): XPNftHtsClaims;
}
export {};
