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
    static readonly bytecode = "0x60803461007457601f61058238819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600180546001600160a01b0319169190911790556040516104f290816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600436101561001357600080fd5b600090813560e01c806303b570aa146101fd5780630b5d6cab1461010a5780630e44263a146100cf57806313b87c7314610081576328dafa731461005657600080fd5b3461007d578160031936011261007d5760015490516001600160a01b039091168152602090f35b5080fd5b503461007d576100cb9061009436610291565b929160018060a01b0380916100ae826001541633146102d5565b168652856020528286209116855260205283209060070b90610449565b5080f35b50903461010757602036600319011261010757506004356bffffffffffffffffffffffff8251918060601c83521660070b6020820152f35b80fd5b5090346101075781600319360112610107576001600160a01b03906004358281169081900361007d5760243592831680930361007d578152602091818352838220908252825282812091835191828285549182815201908195835283832090835b858282106101e95750505050839003601f01601f191683019467ffffffffffffffff8611848710176101d55785815282865292518583018190528594938501939290915b8281106101be57505050500390f35b8351855286955093810193928101926001016101af565b634e487b7160e01b82526041600452602482fd5b83548552909301926001928301920161016b565b503461007d5761024d61020f36610291565b9160018060a01b038091610228826001541633146102d5565b168652856020528486209116855260205267ffffffffffffffff838520911690610340565b15610256575080f35b5162461bcd60e51b815260206004820152601560248201527410d85b9b9bdd0818db185a5b481d1a1a5cc81b999d605a1b6044820152606490fd5b60609060031901126102d0576001600160a01b039060043582811681036102d0579160243590811681036102d057906044358060070b81036102d05790565b600080fd5b156102dc57565b60405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b21029b2b73232b960911b6044820152606490fd5b805482101561032a5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b90600182019060009281845282602052604084205490811515600014610442576000199180830181811161042e5782549084820191821161041a578082036103cc575b505050805480156103b85782019161039b8383610312565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6104056103dc6103ec9386610312565b90549060031b1c92839286610312565b819391549060031b600019811b9283911b169119161790565b90558652846020526040862055388080610383565b634e487b7160e01b88526011600452602488fd5b634e487b7160e01b87526011600452602487fd5b5050505090565b919060018301600090828252806020526040822054156000146104b657845494680100000000000000008610156104a257836104926103ec886001604098999a01855584610312565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b5092505056fea2646970667358221220edf911e595c2393a50be09562f63cd3b95be1012440b7e4cfe302a12b004e5c564736f6c63430008110033";
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
