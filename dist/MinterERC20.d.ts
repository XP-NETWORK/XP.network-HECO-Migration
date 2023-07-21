import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MinterERC20Interface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "actionCnt()": FunctionFragment;
        "freezeErc1155(address,uint256,uint64,string,string,uint256)": FunctionFragment;
        "freezeErc1155Batch(address,uint256[],uint256[],uint64,string,string,uint256)": FunctionFragment;
        "freezeErc721(address,uint256,uint64,string,string,uint256)": FunctionFragment;
        "nftWhitelist(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "paused()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "validatePauseBridge(uint256,uint256,address)": FunctionFragment;
        "validateTransferFees(uint256,address,uint256,address)": FunctionFragment;
        "validateTransferNft(uint256,address,uint256,address,bytes,uint256,address)": FunctionFragment;
        "validateTransferNftBatch(uint256,address,uint256[],address[],bytes,uint256,address)": FunctionFragment;
        "validateUnfreezeErc1155(uint256,address,uint256,address,uint256,address)": FunctionFragment;
        "validateUnfreezeErc1155Batch(uint256,address,uint256[],address[],uint256,address)": FunctionFragment;
        "validateUnfreezeErc721(uint256,address,uint256,address,uint256,address)": FunctionFragment;
        "validateUnpauseBridge(uint256,uint256,address)": FunctionFragment;
        "validateUpdateGroupKey(uint256,uint256,uint8,uint256,address)": FunctionFragment;
        "validateWhitelistNft(uint256,address,uint256,address)": FunctionFragment;
        "validatorPKX()": FunctionFragment;
        "validatorPKYParity()": FunctionFragment;
        "verifySignature(uint256,uint8,uint256,uint256,address)": FunctionFragment;
        "withdrawNft(string,uint64,uint256,address,uint256)": FunctionFragment;
        "withdrawNftBatch(string,uint64,uint256[],uint256[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HALF_Q" | "Q" | "actionCnt" | "freezeErc1155" | "freezeErc1155Batch" | "freezeErc721" | "nftWhitelist" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "paused" | "supportsInterface" | "validatePauseBridge" | "validateTransferFees" | "validateTransferNft" | "validateTransferNftBatch" | "validateUnfreezeErc1155" | "validateUnfreezeErc1155Batch" | "validateUnfreezeErc721" | "validateUnpauseBridge" | "validateUpdateGroupKey" | "validateWhitelistNft" | "validatorPKX" | "validatorPKYParity" | "verifySignature" | "withdrawNft" | "withdrawNftBatch"): FunctionFragment;
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "actionCnt", values?: undefined): string;
    encodeFunctionData(functionFragment: "freezeErc1155", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "freezeErc1155Batch", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "freezeErc721", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nftWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "validatePauseBridge", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateTransferFees", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateTransferNft", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateTransferNftBatch", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc1155", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc1155Batch", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc721", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateUnpauseBridge", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateUpdateGroupKey", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validateWhitelistNft", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "validatorPKX", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorPKYParity", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawNft", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawNftBatch", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCnt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc1155", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc1155Batch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatePauseBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTransferFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTransferNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTransferNftBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc1155", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc1155Batch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnpauseBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUpdateGroupKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateWhitelistNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKYParity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawNftBatch", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "TransferErc1155(uint256,uint64,uint256,string,uint256,address,string,string)": EventFragment;
        "TransferErc1155Batch(uint256,uint64,uint256,string,uint256[],address,string)": EventFragment;
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)": EventFragment;
        "UnfreezeNft(uint256,uint256,uint256,string,address,uint256,string)": EventFragment;
        "UnfreezeNftBatch(uint256,uint256,uint256,string,address,uint256[],string)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferErc1155"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferErc1155Batch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferErc721"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnfreezeNft"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnfreezeNftBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface TransferErc1155EventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
    tokenData: string;
    mintWith: string;
}
export declare type TransferErc1155Event = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
], TransferErc1155EventObject>;
export declare type TransferErc1155EventFilter = TypedEventFilter<TransferErc1155Event>;
export interface TransferErc1155BatchEventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    ids: BigNumber[];
    contractAddr: string;
    mintWith: string;
}
export declare type TransferErc1155BatchEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber[],
    string,
    string
], TransferErc1155BatchEventObject>;
export declare type TransferErc1155BatchEventFilter = TypedEventFilter<TransferErc1155BatchEvent>;
export interface TransferErc721EventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
    tokenData: string;
    mintWith: string;
}
export declare type TransferErc721Event = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
], TransferErc721EventObject>;
export declare type TransferErc721EventFilter = TypedEventFilter<TransferErc721Event>;
export interface UnfreezeNftEventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    burner: string;
    tokenId: BigNumber;
    baseURI: string;
}
export declare type UnfreezeNftEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    string
], UnfreezeNftEventObject>;
export declare type UnfreezeNftEventFilter = TypedEventFilter<UnfreezeNftEvent>;
export interface UnfreezeNftBatchEventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    burner: string;
    tokenIds: BigNumber[];
    baseURI: string;
}
export declare type UnfreezeNftBatchEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber[],
    string
], UnfreezeNftBatchEventObject>;
export declare type UnfreezeNftBatchEventFilter = TypedEventFilter<UnfreezeNftBatchEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface MinterERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinterERC20Interface;
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
        HALF_Q(overrides?: CallOverrides): Promise<[BigNumber]>;
        Q(overrides?: CallOverrides): Promise<[BigNumber]>;
        actionCnt(overrides?: CallOverrides): Promise<[BigNumber]>;
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        validatePauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateTransferFees(actionId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateTransferNft(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, nftId: PromiseOrValue<BigNumberish>, mintWith: PromiseOrValue<string>, mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateTransferNftBatch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], mintWith: PromiseOrValue<string>[], mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnpauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorPKYParity(overrides?: CallOverrides): Promise<[number]>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawNft(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BigNumberish>, burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawNftBatch(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, ids: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
    freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    validatePauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateTransferFees(actionId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateTransferNft(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, nftId: PromiseOrValue<BigNumberish>, mintWith: PromiseOrValue<string>, mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateTransferNftBatch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], mintWith: PromiseOrValue<string>[], mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnpauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
    validatorPKYParity(overrides?: CallOverrides): Promise<number>;
    verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    withdrawNft(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BigNumberish>, burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawNftBatch(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, ids: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        validatePauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateTransferFees(actionId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateTransferNft(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, nftId: PromiseOrValue<BigNumberish>, mintWith: PromiseOrValue<string>, mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateTransferNftBatch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], mintWith: PromiseOrValue<string>[], mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUnpauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<number>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        withdrawNft(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BigNumberish>, burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawNftBatch(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, ids: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "TransferErc1155(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc1155EventFilter;
        TransferErc1155(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc1155EventFilter;
        "TransferErc1155Batch(uint256,uint64,uint256,string,uint256[],address,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, ids?: null, contractAddr?: null, mintWith?: null): TransferErc1155BatchEventFilter;
        TransferErc1155Batch(actionId?: null, chainNonce?: null, txFees?: null, to?: null, ids?: null, contractAddr?: null, mintWith?: null): TransferErc1155BatchEventFilter;
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
        TransferErc721(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
        "UnfreezeNft(uint256,uint256,uint256,string,address,uint256,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, burner?: null, tokenId?: null, baseURI?: null): UnfreezeNftEventFilter;
        UnfreezeNft(actionId?: null, chainNonce?: null, txFees?: null, to?: null, burner?: null, tokenId?: null, baseURI?: null): UnfreezeNftEventFilter;
        "UnfreezeNftBatch(uint256,uint256,uint256,string,address,uint256[],string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, burner?: null, tokenIds?: null, baseURI?: null): UnfreezeNftBatchEventFilter;
        UnfreezeNftBatch(actionId?: null, chainNonce?: null, txFees?: null, to?: null, burner?: null, tokenIds?: null, baseURI?: null): UnfreezeNftBatchEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validatePauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateTransferFees(actionId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateTransferNft(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, nftId: PromiseOrValue<BigNumberish>, mintWith: PromiseOrValue<string>, mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateTransferNftBatch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], mintWith: PromiseOrValue<string>[], mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnpauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<BigNumber>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawNft(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BigNumberish>, burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawNftBatch(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, ids: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionCnt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatePauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferFees(actionId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferNft(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, nftId: PromiseOrValue<BigNumberish>, mintWith: PromiseOrValue<string>, mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferNftBatch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], mintWith: PromiseOrValue<string>[], mintArgs: PromiseOrValue<BytesLike>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnpauseBridge(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorPKYParity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawNft(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BigNumberish>, burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawNftBatch(to: PromiseOrValue<string>, chainNonce: PromiseOrValue<BigNumberish>, ids: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], burner: PromiseOrValue<string>, txFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
