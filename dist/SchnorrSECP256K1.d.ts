import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SchnorrSECP256K1Interface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "verifySignature(uint256,uint8,uint256,uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
    events: {};
}
export interface SchnorrSECP256K1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SchnorrSECP256K1Interface;
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
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySignature(signingPubKeyX: BigNumberish, pubKeyYParity: BigNumberish, signature: BigNumberish, msgHash: BigNumberish, nonceTimesGeneratorAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
