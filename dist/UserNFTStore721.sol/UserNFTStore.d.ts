import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface UserNFTStoreInterface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "actionCnt()": FunctionFragment;
        "freezeErc721(address,uint256,uint64,string,string)": FunctionFragment;
        "minterAddress()": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "signatureVerifier()": FunctionFragment;
        "validateUnfreezeErc721(uint256,address,uint256,address,uint256,address)": FunctionFragment;
        "validateUpdateGroupKey(uint256,uint256,uint8,uint256,address)": FunctionFragment;
        "validatorPKX()": FunctionFragment;
        "validatorPKYParity()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HALF_Q" | "Q" | "actionCnt" | "freezeErc721" | "minterAddress" | "onERC721Received" | "signatureVerifier" | "validateUnfreezeErc721" | "validateUpdateGroupKey" | "validatorPKX" | "validatorPKYParity"): FunctionFragment;
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "actionCnt", values?: undefined): string;
    encodeFunctionData(functionFragment: "freezeErc721", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "minterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "signatureVerifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc721", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
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
    encodeFunctionData(functionFragment: "validatorPKX", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorPKYParity", values?: undefined): string;
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCnt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signatureVerifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUpdateGroupKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKYParity", data: BytesLike): Result;
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
export interface UserNFTStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserNFTStoreInterface;
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
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minterAddress(overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signatureVerifier(overrides?: CallOverrides): Promise<[string]>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorPKYParity(overrides?: CallOverrides): Promise<[number]>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
    freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minterAddress(overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signatureVerifier(overrides?: CallOverrides): Promise<string>;
    validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
    validatorPKYParity(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        minterAddress(overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        signatureVerifier(overrides?: CallOverrides): Promise<string>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
        TransferErc721(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
    };
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minterAddress(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signatureVerifier(overrides?: CallOverrides): Promise<BigNumber>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionCnt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signatureVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorPKYParity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
