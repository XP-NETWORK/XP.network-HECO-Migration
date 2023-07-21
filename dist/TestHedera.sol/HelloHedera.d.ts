import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface HelloHederaInterface extends utils.Interface {
    functions: {
        "get_message()": FunctionFragment;
        "set_message(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "get_message" | "set_message"): FunctionFragment;
    encodeFunctionData(functionFragment: "get_message", values?: undefined): string;
    encodeFunctionData(functionFragment: "set_message", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "get_message", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_message", data: BytesLike): Result;
    events: {};
}
export interface HelloHedera extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HelloHederaInterface;
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
        get_message(overrides?: CallOverrides): Promise<[string]>;
        set_message(message_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    get_message(overrides?: CallOverrides): Promise<string>;
    set_message(message_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get_message(overrides?: CallOverrides): Promise<string>;
        set_message(message_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        get_message(overrides?: CallOverrides): Promise<BigNumber>;
        set_message(message_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get_message(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        set_message(message_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
