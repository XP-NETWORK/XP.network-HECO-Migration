import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BridgeNFTBatchInterface extends utils.Interface {
    functions: {
        "baseURI()": FunctionFragment;
        "burnBatchFor(address,uint256[],uint256[])": FunctionFragment;
        "burnFor(address,uint256)": FunctionFragment;
        "mint(address,uint256,bytes)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[],bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "baseURI" | "burnBatchFor" | "burnFor" | "mint" | "mintBatch"): FunctionFragment;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnBatchFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "burnFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
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
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatchFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    events: {};
}
export interface BridgeNFTBatch extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeNFTBatchInterface;
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
        baseURI(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnFor(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    baseURI(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnFor(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        baseURI(overrides?: CallOverrides): Promise<string>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        burnFor(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, mintArgs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], mintArgs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        baseURI(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnFor(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        baseURI(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnBatchFor(from: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnFor(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintBatch(to: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], mintArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
