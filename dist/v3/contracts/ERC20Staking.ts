/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ERC20StakingInterface extends utils.Interface {
  functions: {
    "ERC20Token()": FunctionFragment;
    "stakeERC20()": FunctionFragment;
    "stakingAmount()": FunctionFragment;
    "stakingBalances(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ERC20Token"
      | "stakeERC20"
      | "stakingAmount"
      | "stakingBalances"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ERC20Token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingBalances",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "ERC20Token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeERC20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingBalances",
    data: BytesLike
  ): Result;

  events: {
    "Staked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
}

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface ERC20Staking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20StakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ERC20Token(overrides?: CallOverrides): Promise<[string]>;

    stakeERC20(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    stakingAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakingBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  ERC20Token(overrides?: CallOverrides): Promise<string>;

  stakeERC20(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  stakingAmount(overrides?: CallOverrides): Promise<BigNumber>;

  stakingBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ERC20Token(overrides?: CallOverrides): Promise<string>;

    stakeERC20(overrides?: CallOverrides): Promise<void>;

    stakingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    stakingBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): StakedEventFilter;
    Staked(user?: string | null, amount?: null): StakedEventFilter;
  };

  estimateGas: {
    ERC20Token(overrides?: CallOverrides): Promise<BigNumber>;

    stakeERC20(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    stakingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    stakingBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC20Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakeERC20(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    stakingAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}