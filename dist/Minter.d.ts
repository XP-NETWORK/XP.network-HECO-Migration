import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MinterInterface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "freezeErc1155(address,uint256,uint64,string,string)": FunctionFragment;
        "freezeErc1155Batch(address,uint256[],uint256[],uint64,string,string)": FunctionFragment;
        "freezeErc721(address,uint256,uint64,string,string)": FunctionFragment;
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
        "validateWhitelistNft(uint256,address,uint256,address)": FunctionFragment;
        "validatorPKX()": FunctionFragment;
        "validatorPKYParity()": FunctionFragment;
        "verifySignature(uint256,uint8,uint256,uint256,address)": FunctionFragment;
        "withdrawNft(string,uint64,uint256,address)": FunctionFragment;
        "withdrawNftBatch(string,uint64,uint256[],uint256[],address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "freezeErc1155", values: [string, BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "freezeErc1155Batch", values: [
        string,
        BigNumberish[],
        BigNumberish[],
        BigNumberish,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "freezeErc721", values: [string, BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "nftWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "validatePauseBridge", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validateTransferFees", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validateTransferNft", values: [
        BigNumberish,
        string,
        BigNumberish,
        string,
        BytesLike,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "validateTransferNftBatch", values: [
        BigNumberish,
        string,
        BigNumberish[],
        string[],
        BytesLike,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc1155", values: [BigNumberish, string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc1155Batch", values: [
        BigNumberish,
        string,
        BigNumberish[],
        string[],
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc721", values: [BigNumberish, string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validateUnpauseBridge", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validateWhitelistNft", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "validatorPKX", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorPKYParity", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdrawNft", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdrawNftBatch", values: [string, BigNumberish, BigNumberish[], BigNumberish[], string]): string;
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
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
        "UnfreezeNft(uint256,uint256,uint256,string,uint256,string)": EventFragment;
        "UnfreezeNftBatch(uint256,uint256,uint256,string,uint256[],string)": EventFragment;
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
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type TransferErc1155Event = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
], {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
    tokenData: string;
    mintWith: string;
}>;
export declare type TransferErc1155EventFilter = TypedEventFilter<TransferErc1155Event>;
export declare type TransferErc1155BatchEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber[],
    string,
    string
], {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    ids: BigNumber[];
    contractAddr: string;
    mintWith: string;
}>;
export declare type TransferErc1155BatchEventFilter = TypedEventFilter<TransferErc1155BatchEvent>;
export declare type TransferErc721Event = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
], {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
    tokenData: string;
    mintWith: string;
}>;
export declare type TransferErc721EventFilter = TypedEventFilter<TransferErc721Event>;
export declare type UnfreezeNftEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
], {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    tokenId: BigNumber;
    baseURI: string;
}>;
export declare type UnfreezeNftEventFilter = TypedEventFilter<UnfreezeNftEvent>;
export declare type UnfreezeNftBatchEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber[],
    string
], {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    tokenIds: BigNumber[];
    baseURI: string;
}>;
export declare type UnfreezeNftBatchEventFilter = TypedEventFilter<UnfreezeNftBatchEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface Minter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinterInterface;
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
        freezeErc1155(erc1155Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        freezeErc1155Batch(erc1155Contract: string, tokenIds: BigNumberish[], ones: BigNumberish[], chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        freezeErc721(erc721Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nftWhitelist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        validatePauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateTransferFees(actionId: BigNumberish, receiver: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateTransferNft(actionId: BigNumberish, to: string, nftId: BigNumberish, mintWith: string, mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateTransferNftBatch(actionId: BigNumberish, to: string, ids: BigNumberish[], mintWith: string[], mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc1155(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc1155Batch(actionId: BigNumberish, to: string, ids: BigNumberish[], contractAddrs: string[], sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc721(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateUnpauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateWhitelistNft(actionId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorPKYParity(overrides?: CallOverrides): Promise<[number]>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawNft(to: string, chainNonce: BigNumberish, id: BigNumberish, burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawNftBatch(to: string, chainNonce: BigNumberish, ids: BigNumberish[], ones: BigNumberish[], burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    freezeErc1155(erc1155Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    freezeErc1155Batch(erc1155Contract: string, tokenIds: BigNumberish[], ones: BigNumberish[], chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    freezeErc721(erc721Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nftWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    validatePauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateTransferFees(actionId: BigNumberish, receiver: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateTransferNft(actionId: BigNumberish, to: string, nftId: BigNumberish, mintWith: string, mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateTransferNftBatch(actionId: BigNumberish, to: string, ids: BigNumberish[], mintWith: string[], mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc1155(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc1155Batch(actionId: BigNumberish, to: string, ids: BigNumberish[], contractAddrs: string[], sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc721(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateUnpauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateWhitelistNft(actionId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
    validatorPKYParity(overrides?: CallOverrides): Promise<number>;
    verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<boolean>;
    withdrawNft(to: string, chainNonce: BigNumberish, id: BigNumberish, burner: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawNftBatch(to: string, chainNonce: BigNumberish, ids: BigNumberish[], ones: BigNumberish[], burner: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc1155(erc1155Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: CallOverrides): Promise<void>;
        freezeErc1155Batch(erc1155Contract: string, tokenIds: BigNumberish[], ones: BigNumberish[], chainNonce: BigNumberish, to: string, mintWith: string, overrides?: CallOverrides): Promise<void>;
        freezeErc721(erc721Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: CallOverrides): Promise<void>;
        nftWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        validatePauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateTransferFees(actionId: BigNumberish, receiver: string, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateTransferNft(actionId: BigNumberish, to: string, nftId: BigNumberish, mintWith: string, mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateTransferNftBatch(actionId: BigNumberish, to: string, ids: BigNumberish[], mintWith: string[], mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc1155(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc1155Batch(actionId: BigNumberish, to: string, ids: BigNumberish[], contractAddrs: string[], sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc721(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateUnpauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validateWhitelistNft(actionId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: CallOverrides): Promise<void>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<number>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<boolean>;
        withdrawNft(to: string, chainNonce: BigNumberish, id: BigNumberish, burner: string, overrides?: CallOverrides): Promise<void>;
        withdrawNftBatch(to: string, chainNonce: BigNumberish, ids: BigNumberish[], ones: BigNumberish[], burner: string, overrides?: CallOverrides): Promise<void>;
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
        "UnfreezeNft(uint256,uint256,uint256,string,uint256,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, tokenId?: null, baseURI?: null): UnfreezeNftEventFilter;
        UnfreezeNft(actionId?: null, chainNonce?: null, txFees?: null, to?: null, tokenId?: null, baseURI?: null): UnfreezeNftEventFilter;
        "UnfreezeNftBatch(uint256,uint256,uint256,string,uint256[],string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, tokenIds?: null, baseURI?: null): UnfreezeNftBatchEventFilter;
        UnfreezeNftBatch(actionId?: null, chainNonce?: null, txFees?: null, to?: null, tokenIds?: null, baseURI?: null): UnfreezeNftBatchEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc1155(erc1155Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        freezeErc1155Batch(erc1155Contract: string, tokenIds: BigNumberish[], ones: BigNumberish[], chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        freezeErc721(erc721Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nftWhitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validatePauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateTransferFees(actionId: BigNumberish, receiver: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateTransferNft(actionId: BigNumberish, to: string, nftId: BigNumberish, mintWith: string, mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateTransferNftBatch(actionId: BigNumberish, to: string, ids: BigNumberish[], mintWith: string[], mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc1155(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc1155Batch(actionId: BigNumberish, to: string, ids: BigNumberish[], contractAddrs: string[], sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc721(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateUnpauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateWhitelistNft(actionId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<BigNumber>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawNft(to: string, chainNonce: BigNumberish, id: BigNumberish, burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawNftBatch(to: string, chainNonce: BigNumberish, ids: BigNumberish[], ones: BigNumberish[], burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeErc1155(erc1155Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        freezeErc1155Batch(erc1155Contract: string, tokenIds: BigNumberish[], ones: BigNumberish[], chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        freezeErc721(erc721Contract: string, tokenId: BigNumberish, chainNonce: BigNumberish, to: string, mintWith: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nftWhitelist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatePauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferFees(actionId: BigNumberish, receiver: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferNft(actionId: BigNumberish, to: string, nftId: BigNumberish, mintWith: string, mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateTransferNftBatch(actionId: BigNumberish, to: string, ids: BigNumberish[], mintWith: string[], mintArgs: BytesLike, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155Batch(actionId: BigNumberish, to: string, ids: BigNumberish[], contractAddrs: string[], sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc721(actionId: BigNumberish, to: string, tokenId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateUnpauseBridge(actionId: BigNumberish, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateWhitelistNft(actionId: BigNumberish, contractAddr: string, sig: BigNumberish, proofAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorPKYParity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawNft(to: string, chainNonce: BigNumberish, id: BigNumberish, burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawNftBatch(to: string, chainNonce: BigNumberish, ids: BigNumberish[], ones: BigNumberish[], burner: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
