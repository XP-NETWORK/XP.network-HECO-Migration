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
    static readonly bytecode = "0x60803461007a57601f610ad038819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b0319818160005416176000556001541617600155604051610a3a90816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001457600080fd5b600090813560e01c8063150b7a021461073757806328815af3146106e657806390e704e514610337576394dc2ed81461004c57600080fd5b346103335760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610333578035926100866107eb565b9160443560643573ffffffffffffffffffffffffffffffffffffffff80821680920361032f5760a4359781891680990361032a5787602083825416878951809481937f7bcde4d80000000000000000000000000000000000000000000000000000000083525af19081156103205761010b916001918b916102f2575b50151514610939565b85519860208a0146815230888c01528260608c015283891660808c01528560a08c01528460c08c015260c08b5260e08b018b811067ffffffffffffffff8211176102c4576101a460348c9d838c526101008101947f556e667265657a65457263373231416374696f6e00000000000000000000000086526101948251809261011485019061099e565b8101036014810184520182610851565b51902092895416803b156102c0578992836084928a5196879586947f06cd4d0d0000000000000000000000000000000000000000000000000000000086528c86015285356024860152604485015260648401525af180156102b6579087916102a2575b5050803b1561029e5783517f42842e0e0000000000000000000000000000000000000000000000000000000081523093810193845273ffffffffffffffffffffffffffffffffffffffff90951660208401526040830191909152849184919082908490829060600103925af190811561029557506102825750f35b61028b9061080e565b6102925780f35b80fd5b513d84823e3d90fd5b8580fd5b6102ab9061080e565b61029e578538610207565b85513d89823e3d90fd5b8980fd5b6041887f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b610313915060203d8111610319575b61030b8183610851565b810190610921565b38610102565b503d610301565b87513d8b823e3d90fd5b600080fd5b8680fd5b5080fd5b50829060a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105d3578035908373ffffffffffffffffffffffffffffffffffffffff92838116809103610333576024359060443567ffffffffffffffff8082168092036106e25760643581811161029e576103b99036908801610903565b916084359180831161032f576103d3879336908a01610903565b908a8a855416938151947f7bcde4d8000000000000000000000000000000000000000000000000000000008652858c816020998a945af180156106c1576001610427918d978d916106cb5750151514610939565b858c8b54168351968780927f28dc132d0000000000000000000000000000000000000000000000000000000082525afa9485156106c1578a9561068a575b5081517fc87b56dd000000000000000000000000000000000000000000000000000000008152898c8201528a816024818c5afa938415610680578b946105d7575b5050916104f77fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152978361051f96956105119551998a998a5289015234908801526101008060608901528701906109c1565b908960808701528860a087015285820360c08701526109c1565b9083820360e08501526109c1565b0390a1803b156105d35785517f42842e0e000000000000000000000000000000000000000000000000000000008152339481019485523060208601526040850192909252909283919082908490829060600103925af180156105c6576105b3575b50828080809360015416819034156105a9575b3491f11561059f575080f35b51903d90823e3d90fd5b6108fc9150610593565b6105bf9093919361080e565b9183610580565b50505051903d90823e3d90fd5b8280fd5b9194935091503d808b843e6105ec8184610851565b820191868184031261067c57805191821161067c57019281601f850112156102c05783518d9261062761061e83610892565b94519485610851565b81845287828701011161067c577fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152978e846106716104f79461051f998c806105119a01910161099e565b9596509350976104a6565b8a80fd5b83513d8d823e3d90fd5b86809296508193503d83116106ba575b6106a48183610851565b810103126106b6578b9051938e610465565b8880fd5b503d61069a565b82513d8c823e3d90fd5b6103139150893d8b116103195761030b8183610851565b8480fd5b82843461033357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103335773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b509190346102925760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261029257823573ffffffffffffffffffffffffffffffffffffffff8116036102925761078f6107eb565b506064359067ffffffffffffffff8211610292573660238301121561029257506020928160246107c4933693013591016108cc565b50517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361032a57565b67ffffffffffffffff811161082257604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761082257604052565b67ffffffffffffffff811161082257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926108d882610892565b916108e66040519384610851565b82948184528183011161032a578281602093846000960137010152565b9080601f8301121561032a5781602061091e933591016108cc565b90565b9081602091031261032a5751801515810361032a5790565b1561094057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f556e61626c6520746f20696e6372656d656e7420616374696f6e2069640000006044820152fd5b60005b8381106109b15750506000910152565b81810151838201526020016109a1565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936109fd8151809281875287808801910161099e565b011601019056fea264697066735822122055b17adfa88b4881b7a744dcf2beec696c1a2a67493ec4744f69d0b246a69ad064736f6c63430008110033";
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
