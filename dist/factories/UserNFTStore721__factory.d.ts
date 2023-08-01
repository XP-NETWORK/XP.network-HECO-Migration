import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UserNFTStore721, UserNFTStore721Interface } from "../UserNFTStore721";
declare type UserNFTStore721ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UserNFTStore721__factory extends ContractFactory {
    constructor(...args: UserNFTStore721ConstructorParams);
    deploy(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UserNFTStore721>;
    getDeployTransaction(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UserNFTStore721;
    connect(signer: Signer): UserNFTStore721__factory;
    static readonly bytecode = "0x60803461007a57601f61089738819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b031981816000541617600055600154161760015560405161080190816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001457600080fd5b600090813560e01c8063150b7a02146105dc57806328815af3146105b457806390e704e514610293576394dc2ed81461004c57600080fd5b3461028f5760c036600319011261028f5780359261006861064c565b916044356064356001600160a01b038181169182900361028b5760a43597818916809903610286578760208382541687895180948193630f79bc9b60e31b83525af190811561027c576100c8916001918b9161024e575b50151514610737565b85519860208a0146815230888c01528260608c015283891660808c01528560a08c01528460c08c015260c08b5260e08b018b811067ffffffffffffffff8211176102395761015860348c9d838c52610100810194732ab7333932b2bd32a2b9319b9918a0b1ba34b7b760611b865261014882518092610114850190610783565b810103601481018452018261068c565b51902092895416803b15610235578992836084928a5196879586946306cd4d0d60e01b86528c86015285356024860152604485015260648401525af1801561022b57908791610217575b5050803b15610213578351632142170760e11b8152309381019384526001600160a01b0390951660208401526040830191909152849184919082908490829060600103925af190811561020a57506101f75750f35b61020090610662565b6102075780f35b80fd5b513d84823e3d90fd5b8580fd5b61022090610662565b6102135785386101a2565b85513d89823e3d90fd5b8980fd5b604188634e487b7160e01b6000525260246000fd5b61026f915060203d8111610275575b610267818361068c565b81019061071f565b386100bf565b503d61025d565b87513d8b823e3d90fd5b600080fd5b8680fd5b5080fd5b50829060a03660031901126104a1576001600160a01b03908381358381169081900361028f576024359060443567ffffffffffffffff8082168092036105b057606435818111610213576102ea9036908801610701565b916084359180831161028b57610304879336908a01610701565b908a8a85541693815194630f79bc9b60e31b8652858c816020998a945af1801561058f57600161033f918d978d916105995750151514610737565b858c8b54168351968780926328dc132d60e01b82525afa94851561058f578a95610558575b50815163c87b56dd60e01b81528b81018a90528a816024818c5afa93841561054e578b946104a5575b5050916103de7fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152978361040696956103f89551998a998a5289015234908801526101008060608901528701906107a6565b908960808701528860a087015285820360c08701526107a6565b9083820360e08501526107a6565b0390a1803b156104a1578551632142170760e11b8152339481019485523060208601526040850192909252909283919082908490829060600103925af1801561049457610481575b5082808080936001541681903415610477575b3491f11561046d575080f35b51903d90823e3d90fd5b6108fc9150610461565b61048d90939193610662565b918361044e565b50505051903d90823e3d90fd5b8280fd5b9194935091503d808b843e6104ba818461068c565b820191868184031261054a57805191821161054a57019281601f850112156102355783518d926104f56104ec836106ae565b9451948561068c565b81845287828701011161054a577fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152978e8461053f6103de94610406998c806103f89a019101610783565b95965093509761038d565b8a80fd5b83513d8d823e3d90fd5b86809296508193503d8311610588575b610572818361068c565b81010312610584578b9051938e610364565b8880fd5b503d610568565b82513d8c823e3d90fd5b61026f9150893d8b1161027557610267818361068c565b8480fd5b82843461028f578160031936011261028f57905490516001600160a01b039091168152602090f35b509190346102075760803660031901126102075782356001600160a01b038116036102075761060961064c565b506064359067ffffffffffffffff82116102075736602383011215610207575060209281602461063e933693013591016106ca565b5051630a85bd0160e11b8152f35b602435906001600160a01b038216820361028657565b67ffffffffffffffff811161067657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761067657604052565b67ffffffffffffffff811161067657601f01601f191660200190565b9291926106d6826106ae565b916106e4604051938461068c565b829481845281830111610286578281602093846000960137010152565b9080601f830112156102865781602061071c933591016106ca565b90565b90816020910312610286575180151581036102865790565b1561073e57565b60405162461bcd60e51b815260206004820152601d60248201527f556e61626c6520746f20696e6372656d656e7420616374696f6e2069640000006044820152606490fd5b60005b8381106107965750506000910152565b8181015183820152602001610786565b906020916107bf81518092818552858086019101610783565b601f01601f191601019056fea264697066735822122043cdde3727c666432b0ba5a305c7694922efd2708196db04fc2470ad7446f43464736f6c63430008110033";
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
        readonly name: "TransferErc721";
        readonly type: "event";
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
    }];
    static createInterface(): UserNFTStore721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UserNFTStore721;
}
export {};
