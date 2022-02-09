import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BridgeNFTBatchInterface extends utils.Interface {
    functions: {
        "baseURI()": FunctionFragment;
        "burnBatchFor(address,uint256[],uint256[])": FunctionFragment;
        "burnFor(address,uint256)": FunctionFragment;
        "mint(address,uint256,bytes)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[],bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnBatchFor", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [string, BigNumberish[], BigNumberish[], BytesLike]): string;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnBatchFor(from: string, ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFor(to: string, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(to: string, id: BigNumberish, mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintBatch(to: string, ids: BigNumberish[], amounts: BigNumberish[], mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    baseURI(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnBatchFor(from: string, ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFor(to: string, id: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(to: string, id: BigNumberish, mintArgs: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintBatch(to: string, ids: BigNumberish[], amounts: BigNumberish[], mintArgs: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        baseURI(overrides?: CallOverrides): Promise<string>;
        burnBatchFor(from: string, ids: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        burnFor(to: string, id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mint(to: string, id: BigNumberish, mintArgs: BytesLike, overrides?: CallOverrides): Promise<void>;
        mintBatch(to: string, ids: BigNumberish[], amounts: BigNumberish[], mintArgs: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        baseURI(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnBatchFor(from: string, ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFor(to: string, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(to: string, id: BigNumberish, mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintBatch(to: string, ids: BigNumberish[], amounts: BigNumberish[], mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        baseURI(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnBatchFor(from: string, ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFor(to: string, id: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: string, id: BigNumberish, mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintBatch(to: string, ids: BigNumberish[], amounts: BigNumberish[], mintArgs: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
