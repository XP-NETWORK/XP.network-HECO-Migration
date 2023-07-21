import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface XPNftHtsClaimsInterface extends utils.Interface {
    functions: {
        "addClaimRecord(address,address,int64)": FunctionFragment;
        "decodeHts(uint256)": FunctionFragment;
        "getClaimRecord(address,address,int64)": FunctionFragment;
        "getClaimableNfts(address,address)": FunctionFragment;
        "xpNftHts()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addClaimRecord" | "decodeHts" | "getClaimRecord" | "getClaimableNfts" | "xpNftHts"): FunctionFragment;
    encodeFunctionData(functionFragment: "addClaimRecord", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decodeHts", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getClaimRecord", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getClaimableNfts", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "xpNftHts", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addClaimRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeHts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimableNfts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xpNftHts", data: BytesLike): Result;
    events: {};
}
export interface XPNftHtsClaims extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: XPNftHtsClaimsInterface;
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
        addClaimRecord(to: PromiseOrValue<string>, token: PromiseOrValue<string>, serial: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getClaimRecord(sender: PromiseOrValue<string>, token: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getClaimableNfts(claimer: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        xpNftHts(overrides?: CallOverrides): Promise<[string]>;
    };
    addClaimRecord(to: PromiseOrValue<string>, token: PromiseOrValue<string>, serial: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    getClaimRecord(sender: PromiseOrValue<string>, token: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getClaimableNfts(claimer: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    xpNftHts(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addClaimRecord(to: PromiseOrValue<string>, token: PromiseOrValue<string>, serial: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getClaimRecord(sender: PromiseOrValue<string>, token: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getClaimableNfts(claimer: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        xpNftHts(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        addClaimRecord(to: PromiseOrValue<string>, token: PromiseOrValue<string>, serial: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimRecord(sender: PromiseOrValue<string>, token: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getClaimableNfts(claimer: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        xpNftHts(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addClaimRecord(to: PromiseOrValue<string>, token: PromiseOrValue<string>, serial: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimRecord(sender: PromiseOrValue<string>, token: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getClaimableNfts(claimer: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        xpNftHts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
