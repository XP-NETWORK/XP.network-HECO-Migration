/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export declare namespace Bridge {
  export type ClaimDataStruct = {
    tokenId: BigNumberish;
    sourceChain: string;
    destinationChain: string;
    destinationUserAddress: string;
    sourceNftContractAddress: string;
    name: string;
    symbol: string;
    royalty: BigNumberish;
    royaltyReceiver: string;
    metadata: string;
    transactionHash: string;
    tokenAmount: BigNumberish;
    nftType: string;
    fee: BigNumberish;
  };

  export type ClaimDataStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    tokenId: BigNumber;
    sourceChain: string;
    destinationChain: string;
    destinationUserAddress: string;
    sourceNftContractAddress: string;
    name: string;
    symbol: string;
    royalty: BigNumber;
    royaltyReceiver: string;
    metadata: string;
    transactionHash: string;
    tokenAmount: BigNumber;
    nftType: string;
    fee: BigNumber;
  };
}

export interface BridgeInterface extends utils.Interface {
  functions: {
    "addValidator(address,bytes[])": FunctionFragment;
    "claimNFT1155((uint256,string,string,address,address,string,string,uint256,address,string,string,uint256,string,uint256),bytes[])": FunctionFragment;
    "claimNFT721((uint256,string,string,address,address,string,string,uint256,address,string,string,uint256,string,uint256),bytes[])": FunctionFragment;
    "claimValidatorRewards(address,bytes[])": FunctionFragment;
    "collectionDeployer()": FunctionFragment;
    "duplicateStorageMapping1155(address,string)": FunctionFragment;
    "duplicateStorageMapping721(address,string)": FunctionFragment;
    "duplicateToOriginalMapping(address,string)": FunctionFragment;
    "lock1155(uint256,string,string,address,uint256)": FunctionFragment;
    "lock721(uint256,string,string,address)": FunctionFragment;
    "originalStorageMapping1155(address,string)": FunctionFragment;
    "originalStorageMapping721(address,string)": FunctionFragment;
    "originalToDuplicateMapping(address,string)": FunctionFragment;
    "selfChain()": FunctionFragment;
    "storageDeployer()": FunctionFragment;
    "uniqueIdentifier(bytes32)": FunctionFragment;
    "validators(address)": FunctionFragment;
    "validatorsCount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addValidator"
      | "claimNFT1155"
      | "claimNFT721"
      | "claimValidatorRewards"
      | "collectionDeployer"
      | "duplicateStorageMapping1155"
      | "duplicateStorageMapping721"
      | "duplicateToOriginalMapping"
      | "lock1155"
      | "lock721"
      | "originalStorageMapping1155"
      | "originalStorageMapping721"
      | "originalToDuplicateMapping"
      | "selfChain"
      | "storageDeployer"
      | "uniqueIdentifier"
      | "validators"
      | "validatorsCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addValidator",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimNFT1155",
    values: [Bridge.ClaimDataStruct, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimNFT721",
    values: [Bridge.ClaimDataStruct, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimValidatorRewards",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "duplicateStorageMapping1155",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "duplicateStorageMapping721",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "duplicateToOriginalMapping",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lock1155",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lock721",
    values: [BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "originalStorageMapping1155",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "originalStorageMapping721",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "originalToDuplicateMapping",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "selfChain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "storageDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueIdentifier",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "validators", values: [string]): string;
  encodeFunctionData(
    functionFragment: "validatorsCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimNFT1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimNFT721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimValidatorRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "duplicateStorageMapping1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "duplicateStorageMapping721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "duplicateToOriginalMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock1155", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock721", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originalStorageMapping1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "originalStorageMapping721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "originalToDuplicateMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "selfChain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storageDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueIdentifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validatorsCount",
    data: BytesLike
  ): Result;

  events: {
    "AddNewValidator(address)": EventFragment;
    "Claimed(string,string)": EventFragment;
    "Locked(uint256,string,string,address,uint256,string,string)": EventFragment;
    "LogHash(bytes32,bytes[])": EventFragment;
    "RewardValidator(address)": EventFragment;
    "UnLock1155(address,uint256,address,uint256)": EventFragment;
    "UnLock721(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddNewValidator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Locked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogHash"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardValidator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnLock1155"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnLock721"): EventFragment;
}

export interface AddNewValidatorEventObject {
  _validator: string;
}
export type AddNewValidatorEvent = TypedEvent<
  [string],
  AddNewValidatorEventObject
>;

export type AddNewValidatorEventFilter = TypedEventFilter<AddNewValidatorEvent>;

export interface ClaimedEventObject {
  sourceChain: string;
  transactionHash: string;
}
export type ClaimedEvent = TypedEvent<[string, string], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface LockedEventObject {
  tokenId: BigNumber;
  destinationChain: string;
  destinationUserAddress: string;
  sourceNftContractAddress: string;
  tokenAmount: BigNumber;
  nftType: string;
  sourceChain: string;
}
export type LockedEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, string, string],
  LockedEventObject
>;

export type LockedEventFilter = TypedEventFilter<LockedEvent>;

export interface LogHashEventObject {
  hashValue: string;
  arg1: string[];
}
export type LogHashEvent = TypedEvent<[string, string[]], LogHashEventObject>;

export type LogHashEventFilter = TypedEventFilter<LogHashEvent>;

export interface RewardValidatorEventObject {
  _validator: string;
}
export type RewardValidatorEvent = TypedEvent<
  [string],
  RewardValidatorEventObject
>;

export type RewardValidatorEventFilter = TypedEventFilter<RewardValidatorEvent>;

export interface UnLock1155EventObject {
  to: string;
  tokenId: BigNumber;
  contractAddr: string;
  amount: BigNumber;
}
export type UnLock1155Event = TypedEvent<
  [string, BigNumber, string, BigNumber],
  UnLock1155EventObject
>;

export type UnLock1155EventFilter = TypedEventFilter<UnLock1155Event>;

export interface UnLock721EventObject {
  to: string;
  tokenId: BigNumber;
  contractAddr: string;
}
export type UnLock721Event = TypedEvent<
  [string, BigNumber, string],
  UnLock721EventObject
>;

export type UnLock721EventFilter = TypedEventFilter<UnLock721Event>;

export interface Bridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeInterface;

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
    addValidator(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimNFT1155(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimNFT721(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimValidatorRewards(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    collectionDeployer(overrides?: CallOverrides): Promise<[string]>;

    duplicateStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    duplicateStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    duplicateToOriginalMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { chain: string; contractAddress: string }>;

    lock1155(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lock721(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    originalStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    originalStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    originalToDuplicateMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { chain: string; contractAddress: string }>;

    selfChain(overrides?: CallOverrides): Promise<[string]>;

    storageDeployer(overrides?: CallOverrides): Promise<[string]>;

    uniqueIdentifier(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { added: boolean; pendingReward: BigNumber }
    >;

    validatorsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addValidator(
    _validator: string,
    signatures: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimNFT1155(
    data: Bridge.ClaimDataStruct,
    signatures: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimNFT721(
    data: Bridge.ClaimDataStruct,
    signatures: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimValidatorRewards(
    _validator: string,
    signatures: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  collectionDeployer(overrides?: CallOverrides): Promise<string>;

  duplicateStorageMapping1155(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  duplicateStorageMapping721(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  duplicateToOriginalMapping(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { chain: string; contractAddress: string }>;

  lock1155(
    tokenId: BigNumberish,
    destinationChain: string,
    destinationUserAddress: string,
    sourceNftContractAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lock721(
    tokenId: BigNumberish,
    destinationChain: string,
    destinationUserAddress: string,
    sourceNftContractAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  originalStorageMapping1155(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  originalStorageMapping721(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  originalToDuplicateMapping(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { chain: string; contractAddress: string }>;

  selfChain(overrides?: CallOverrides): Promise<string>;

  storageDeployer(overrides?: CallOverrides): Promise<string>;

  uniqueIdentifier(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validators(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber] & { added: boolean; pendingReward: BigNumber }
  >;

  validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addValidator(
      _validator: string,
      signatures: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimNFT1155(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimNFT721(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimValidatorRewards(
      _validator: string,
      signatures: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    collectionDeployer(overrides?: CallOverrides): Promise<string>;

    duplicateStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    duplicateStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    duplicateToOriginalMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { chain: string; contractAddress: string }>;

    lock1155(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lock721(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    originalStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    originalStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    originalToDuplicateMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { chain: string; contractAddress: string }>;

    selfChain(overrides?: CallOverrides): Promise<string>;

    storageDeployer(overrides?: CallOverrides): Promise<string>;

    uniqueIdentifier(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber] & { added: boolean; pendingReward: BigNumber }
    >;

    validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AddNewValidator(address)"(_validator?: null): AddNewValidatorEventFilter;
    AddNewValidator(_validator?: null): AddNewValidatorEventFilter;

    "Claimed(string,string)"(
      sourceChain?: null,
      transactionHash?: null
    ): ClaimedEventFilter;
    Claimed(sourceChain?: null, transactionHash?: null): ClaimedEventFilter;

    "Locked(uint256,string,string,address,uint256,string,string)"(
      tokenId?: null,
      destinationChain?: null,
      destinationUserAddress?: null,
      sourceNftContractAddress?: null,
      tokenAmount?: null,
      nftType?: null,
      sourceChain?: null
    ): LockedEventFilter;
    Locked(
      tokenId?: null,
      destinationChain?: null,
      destinationUserAddress?: null,
      sourceNftContractAddress?: null,
      tokenAmount?: null,
      nftType?: null,
      sourceChain?: null
    ): LockedEventFilter;

    "LogHash(bytes32,bytes[])"(
      hashValue?: BytesLike | null,
      arg1?: null
    ): LogHashEventFilter;
    LogHash(hashValue?: BytesLike | null, arg1?: null): LogHashEventFilter;

    "RewardValidator(address)"(_validator?: null): RewardValidatorEventFilter;
    RewardValidator(_validator?: null): RewardValidatorEventFilter;

    "UnLock1155(address,uint256,address,uint256)"(
      to?: null,
      tokenId?: null,
      contractAddr?: null,
      amount?: null
    ): UnLock1155EventFilter;
    UnLock1155(
      to?: null,
      tokenId?: null,
      contractAddr?: null,
      amount?: null
    ): UnLock1155EventFilter;

    "UnLock721(address,uint256,address)"(
      to?: null,
      tokenId?: null,
      contractAddr?: null
    ): UnLock721EventFilter;
    UnLock721(
      to?: null,
      tokenId?: null,
      contractAddr?: null
    ): UnLock721EventFilter;
  };

  estimateGas: {
    addValidator(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimNFT1155(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    claimNFT721(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    claimValidatorRewards(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    collectionDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    duplicateStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    duplicateStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    duplicateToOriginalMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock1155(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    lock721(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    originalStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    originalStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    originalToDuplicateMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfChain(overrides?: CallOverrides): Promise<BigNumber>;

    storageDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    uniqueIdentifier(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    validatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addValidator(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimNFT1155(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimNFT721(
      data: Bridge.ClaimDataStruct,
      signatures: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimValidatorRewards(
      _validator: string,
      signatures: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    collectionDeployer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duplicateStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duplicateStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duplicateToOriginalMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock1155(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lock721(
      tokenId: BigNumberish,
      destinationChain: string,
      destinationUserAddress: string,
      sourceNftContractAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    originalStorageMapping1155(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    originalStorageMapping721(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    originalToDuplicateMapping(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selfChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    storageDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniqueIdentifier(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatorsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}