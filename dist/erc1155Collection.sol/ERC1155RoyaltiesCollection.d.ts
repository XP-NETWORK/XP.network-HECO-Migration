import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ERC1155RoyaltiesCollectionInterface extends utils.Interface {
    functions: {
        "OPERATOR_FILTER_REGISTRY()": FunctionFragment;
        "adminAddress()": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "baseURI()": FunctionFragment;
        "bridgeAddress()": FunctionFragment;
        "burnBatchFor(address,uint256[],uint256[])": FunctionFragment;
        "burnFor(address,uint256)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "getFirstTokenBaseURL()": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint(address,uint256,bytes)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[],bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseURIUpdate()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpauseURIupdate()": FunctionFragment;
        "updateBaseUri(string)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "OPERATOR_FILTER_REGISTRY" | "adminAddress" | "balanceOf" | "balanceOfBatch" | "baseURI" | "bridgeAddress" | "burnBatchFor" | "burnFor" | "exists" | "getFirstTokenBaseURL" | "isApprovedForAll" | "mint" | "mintBatch" | "owner" | "pauseURIUpdate" | "renounceOwnership" | "royaltyInfo" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "supportsInterface" | "totalSupply" | "transferOwnership" | "unpauseURIupdate" | "updateBaseUri" | "uri"): FunctionFragment;
    encodeFunctionData(functionFragment: "OPERATOR_FILTER_REGISTRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnBatchFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "burnFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exists", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFirstTokenBaseURL", values?: undefined): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseURIUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseURIupdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateBaseUri", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "uri", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "OPERATOR_FILTER_REGISTRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatchFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstTokenBaseURL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseURIUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseURIupdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBaseUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
        "baseUriUpdated(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "baseUriUpdated"): EventFragment;
}
export interface ApprovalForAllEventObject {
    account: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TransferBatchEventObject {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export declare type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
export declare type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export interface TransferSingleEventObject {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export declare type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
export declare type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export interface URIEventObject {
    value: string;
    id: BigNumber;
}
export declare type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
export declare type URIEventFilter = TypedEventFilter<URIEvent>;
export interface baseUriUpdatedEventObject {
    updatedBaseURI: string;
}
export declare type baseUriUpdatedEvent = TypedEvent<[
    string
], baseUriUpdatedEventObject>;
export declare type baseUriUpdatedEventFilter = TypedEventFilter<baseUriUpdatedEvent>;
export interface ERC1155RoyaltiesCollection extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155RoyaltiesCollectionInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<[string]>;
        adminAddress(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        bridgeAddress(overrides?: CallOverrides): Promise<[string]>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnFor(from: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        getFirstTokenBaseURL(overrides?: CallOverrides): Promise<[BigNumber]>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseURIUpdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        totalSupply(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpauseURIupdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uri(_tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<string>;
    adminAddress(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    baseURI(overrides?: CallOverrides): Promise<string>;
    bridgeAddress(overrides?: CallOverrides): Promise<string>;
    burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnFor(from: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    getFirstTokenBaseURL(overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseURIUpdate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    totalSupply(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpauseURIupdate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uri(_tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<string>;
        adminAddress(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        bridgeAddress(overrides?: CallOverrides): Promise<string>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        burnFor(from: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        exists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        getFirstTokenBaseURL(overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, rawInfo: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], rawInfo: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseURIUpdate(overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        royaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpauseURIupdate(overrides?: CallOverrides): Promise<void>;
        updateBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        uri(_tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter;
        URI(value?: null, id?: PromiseOrValue<BigNumberish> | null): URIEventFilter;
        "baseUriUpdated(string)"(updatedBaseURI?: null): baseUriUpdatedEventFilter;
        baseUriUpdated(updatedBaseURI?: null): baseUriUpdatedEventFilter;
    };
    estimateGas: {
        OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
        adminAddress(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnFor(from: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFirstTokenBaseURL(overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseURIUpdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        royaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpauseURIupdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uri(_tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adminAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnFor(from: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exists(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirstTokenBaseURL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(account: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], rawInfo: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseURIUpdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(_tokenId: PromiseOrValue<BigNumberish>, _salePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpauseURIupdate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uri(_tokenID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
