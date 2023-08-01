import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface UserNFTStore1155Interface extends utils.Interface {
    functions: {
        "freezeErc1155(address,uint256,uint64,string,string)": FunctionFragment;
        "freezeErc1155Batch(address,uint256[],uint256[],uint64,string,string)": FunctionFragment;
        "noWhitelistUtils()": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "validateUnfreezeErc1155(uint256,address,uint256,address,uint256,address)": FunctionFragment;
        "validateUnfreezeErc1155Batch(uint256,address,uint256[],address[],uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "freezeErc1155" | "freezeErc1155Batch" | "noWhitelistUtils" | "onERC1155BatchReceived" | "onERC1155Received" | "supportsInterface" | "validateUnfreezeErc1155" | "validateUnfreezeErc1155Batch"): FunctionFragment;
    encodeFunctionData(functionFragment: "freezeErc1155", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "freezeErc1155Batch", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "noWhitelistUtils", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
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
    decodeFunctionResult(functionFragment: "freezeErc1155", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc1155Batch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noWhitelistUtils", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc1155", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc1155Batch", data: BytesLike): Result;
    events: {
        "TransferErc1155(uint256,uint64,uint256,string,uint256,address,string,string)": EventFragment;
        "TransferErc1155Batch(uint256,uint64,uint256,string,uint256[],address,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TransferErc1155"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferErc1155Batch"): EventFragment;
}
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
export interface UserNFTStore1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserNFTStore1155Interface;
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
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TransferErc1155(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc1155EventFilter;
        TransferErc1155(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc1155EventFilter;
        "TransferErc1155Batch(uint256,uint64,uint256,string,uint256[],address,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, ids?: null, contractAddr?: null, mintWith?: null): TransferErc1155BatchEventFilter;
        TransferErc1155Batch(actionId?: null, chainNonce?: null, txFees?: null, to?: null, ids?: null, contractAddr?: null, mintWith?: null): TransferErc1155BatchEventFilter;
    };
    estimateGas: {
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        freezeErc1155(erc1155Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        freezeErc1155Batch(erc1155Contract: PromiseOrValue<string>, tokenIds: PromiseOrValue<BigNumberish>[], ones: PromiseOrValue<BigNumberish>[], chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc1155Batch(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], contractAddrs: PromiseOrValue<string>[], sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
