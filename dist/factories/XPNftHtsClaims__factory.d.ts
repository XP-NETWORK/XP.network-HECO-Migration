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
    static readonly bytecode = "0x60803461007457601f6107d138819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600180546001600160a01b03191691909117905560405161074190816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600436101561001357600080fd5b600090813560e01c806303b570aa146102e25780630b5d6cab1461018a5780630e44263a1461013157806313b87c73146100ab576328dafa731461005657600080fd5b346100a757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a75760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b5080fd5b50346100a757610109906100be366103d4565b93909273ffffffffffffffffffffffffffffffffffffffff80936100e782600154163314610443565b16928387528660205281872094169384875260205285209360070b809461067f565b507f44b4992efa0f4a2ef0ab6c12e382a8912e85b95be1d0c1ef675f3ec8eb4c072f8480a480f35b5090346101875760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018757506004356bffffffffffffffffffffffff8251918060601c83521660070b6020820152f35b80fd5b50903461018757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610187576004359073ffffffffffffffffffffffffffffffffffffffff918281168091036100a7576024359283168093036100a75781526020918183528382209082528252828120918351918280938386549182815201908196845284842090845b868282106102cb575050505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01683019467ffffffffffffffff86118487101761029e5785815282865292518583018190528594938501939290915b82811061028757505050500390f35b835185528695509381019392810192600101610278565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b835485528895509093019260019283019201610218565b50346100a7576102f1366103d4565b90919273ffffffffffffffffffffffffffffffffffffffff809461031a82600154163314610443565b16938486528560205281862093169283865260205261034681862067ffffffffffffffff8416906104ef565b15610377575060070b917fb07fa4a51e7b16a069203e783265a3ef2a613ec877f5c502ffd9694079204ac18480a480f35b606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f43616e6e6f7420636c61696d2074686973206e667400000000000000000000006044820152fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc606091011261043e5773ffffffffffffffffffffffffffffffffffffffff90600435828116810361043e5791602435908116810361043e57906044358060070b810361043e5790565b600080fd5b1561044a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c69642053656e6465720000000000000000000000000000000000006044820152fd5b80548210156104c05760005260206000200190600090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600182019060009281845282602052604084205490811515600014610678577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9182810181811161064b5782549084820191821161061e578082036105b2575b505050805480156105855782019161056883836104a8565b909182549160031b1b191690555582526020526040812055600190565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6106096105c26105d293866104a8565b90549060031b1c928392866104a8565b819391549060031b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811b9283911b169119161790565b90558652846020526040862055388080610550565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024877f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b5050505090565b9190600183016000908282528060205260408220541560001461070557845494680100000000000000008610156106d857836106c86105d2886001604098999a018555846104a8565b9055549382526020522055600190565b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b5092505056fea2646970667358221220f7854bf719474c09798e468ae9b7c63fad2a21cced0aa9125b255c1f7a36bfba64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "xpNftHts_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int64";
            readonly name: "serial";
            readonly type: "int64";
        }];
        readonly name: "ClaimCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int64";
            readonly name: "serial";
            readonly type: "int64";
        }];
        readonly name: "ClaimRemoved";
        readonly type: "event";
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
