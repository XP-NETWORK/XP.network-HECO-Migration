import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SignatureInterface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "nftWhitelist(address)": FunctionFragment;
        "validateWhitelistNft(uint256,address,uint256,address)": FunctionFragment;
        "validatorPKX()": FunctionFragment;
        "validatorPKYParity()": FunctionFragment;
        "verifySignature(uint256,uint8,uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HALF_Q" | "Q" | "nftWhitelist" | "validateWhitelistNft" | "validatorPKX" | "validatorPKYParity" | "verifySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "nftWhitelist", values: [PromiseOrValue<string>]): string;
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
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateWhitelistNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorPKYParity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
    events: {};
}
export interface Signature extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignatureInterface;
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
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorPKYParity(overrides?: CallOverrides): Promise<[number]>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
    validatorPKYParity(overrides?: CallOverrides): Promise<number>;
    verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<number>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatorPKX(overrides?: CallOverrides): Promise<BigNumber>;
        validatorPKYParity(overrides?: CallOverrides): Promise<BigNumber>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateWhitelistNft(actionId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatorPKX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorPKYParity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySignature(signingPubKeyX: PromiseOrValue<BigNumberish>, pubKeyYParity: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
