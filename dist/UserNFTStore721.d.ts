import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface UserNFTStore721Interface extends utils.Interface {
    functions: {
        "freezeErc721(address,uint256,uint64,string,string)": FunctionFragment;
        "noWhitelistUtils()": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "validateUnfreezeErc721(uint256,address,uint256,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "freezeErc721" | "noWhitelistUtils" | "onERC721Received" | "validateUnfreezeErc721"): FunctionFragment;
    encodeFunctionData(functionFragment: "freezeErc721", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "noWhitelistUtils", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc721", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "freezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noWhitelistUtils", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc721", data: BytesLike): Result;
    events: {
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TransferErc721"): EventFragment;
}
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
export interface UserNFTStore721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserNFTStore721Interface;
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
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
        TransferErc721(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
    };
    estimateGas: {
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        noWhitelistUtils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
