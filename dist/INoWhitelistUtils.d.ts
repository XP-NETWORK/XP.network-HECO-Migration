import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface INoWhitelistUtilsInterface extends utils.Interface {
    functions: {
        "HALF_Q()": FunctionFragment;
        "Q()": FunctionFragment;
        "actionCnt()": FunctionFragment;
        "addNewContractAddress(address,address,uint256,uint256,address)": FunctionFragment;
        "collectionToContract(address)": FunctionFragment;
        "consumedActions(uint256)": FunctionFragment;
        "consumedConfigActions(uint256)": FunctionFragment;
        "contractToCollection(address)": FunctionFragment;
        "incrementor()": FunctionFragment;
        "pubKeyYParity()": FunctionFragment;
        "requireValidatorSig(uint256,uint256,address,uint256)": FunctionFragment;
        "setActionCnt(uint256,uint256,address)": FunctionFragment;
        "signingPubKeyX()": FunctionFragment;
        "validateUpdateGroupKey(uint256,uint256,uint8,uint256,address)": FunctionFragment;
        "verifySignature(uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HALF_Q" | "Q" | "actionCnt" | "addNewContractAddress" | "collectionToContract" | "consumedActions" | "consumedConfigActions" | "contractToCollection" | "incrementor" | "pubKeyYParity" | "requireValidatorSig" | "setActionCnt" | "signingPubKeyX" | "validateUpdateGroupKey" | "verifySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "HALF_Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "Q", values?: undefined): string;
    encodeFunctionData(functionFragment: "actionCnt", values?: undefined): string;
    encodeFunctionData(functionFragment: "addNewContractAddress", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "collectionToContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "consumedActions", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "consumedConfigActions", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "contractToCollection", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "incrementor", values?: undefined): string;
    encodeFunctionData(functionFragment: "pubKeyYParity", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireValidatorSig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setActionCnt", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "signingPubKeyX", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateUpdateGroupKey", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "HALF_Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Q", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCnt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNewContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectionToContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "consumedActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "consumedConfigActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractToCollection", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pubKeyYParity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireValidatorSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setActionCnt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signingPubKeyX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUpdateGroupKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
    events: {};
}
export interface INoWhitelistUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INoWhitelistUtilsInterface;
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
        addNewContractAddress(collectionAddr: PromiseOrValue<string>, contractAddr: PromiseOrValue<string>, actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectionToContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        consumedActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        consumedConfigActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        contractToCollection(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        incrementor(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pubKeyYParity(overrides?: CallOverrides): Promise<[number]>;
        requireValidatorSig(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddress: PromiseOrValue<string>, actionHash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setActionCnt(_actionCnt: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signingPubKeyX(overrides?: CallOverrides): Promise<[BigNumber]>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _signingPubKeyX: PromiseOrValue<BigNumberish>, _pubKeyYParity: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifySignature(signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
    Q(overrides?: CallOverrides): Promise<BigNumber>;
    actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
    addNewContractAddress(collectionAddr: PromiseOrValue<string>, contractAddr: PromiseOrValue<string>, actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectionToContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    consumedActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    consumedConfigActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    contractToCollection(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    incrementor(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pubKeyYParity(overrides?: CallOverrides): Promise<number>;
    requireValidatorSig(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddress: PromiseOrValue<string>, actionHash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setActionCnt(_actionCnt: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signingPubKeyX(overrides?: CallOverrides): Promise<BigNumber>;
    validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _signingPubKeyX: PromiseOrValue<BigNumberish>, _pubKeyYParity: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifySignature(signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        addNewContractAddress(collectionAddr: PromiseOrValue<string>, contractAddr: PromiseOrValue<string>, actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        collectionToContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        consumedActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        consumedConfigActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        contractToCollection(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        incrementor(overrides?: CallOverrides): Promise<boolean>;
        pubKeyYParity(overrides?: CallOverrides): Promise<number>;
        requireValidatorSig(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddress: PromiseOrValue<string>, actionHash: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setActionCnt(_actionCnt: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        signingPubKeyX(overrides?: CallOverrides): Promise<BigNumber>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _signingPubKeyX: PromiseOrValue<BigNumberish>, _pubKeyYParity: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        verifySignature(signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        HALF_Q(overrides?: CallOverrides): Promise<BigNumber>;
        Q(overrides?: CallOverrides): Promise<BigNumber>;
        actionCnt(overrides?: CallOverrides): Promise<BigNumber>;
        addNewContractAddress(collectionAddr: PromiseOrValue<string>, contractAddr: PromiseOrValue<string>, actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectionToContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        consumedActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        consumedConfigActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        contractToCollection(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        incrementor(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pubKeyYParity(overrides?: CallOverrides): Promise<BigNumber>;
        requireValidatorSig(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddress: PromiseOrValue<string>, actionHash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setActionCnt(_actionCnt: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signingPubKeyX(overrides?: CallOverrides): Promise<BigNumber>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _signingPubKeyX: PromiseOrValue<BigNumberish>, _pubKeyYParity: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifySignature(signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HALF_Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Q(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionCnt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addNewContractAddress(collectionAddr: PromiseOrValue<string>, contractAddr: PromiseOrValue<string>, actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectionToContract(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        consumedActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        consumedConfigActions(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractToCollection(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incrementor(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pubKeyYParity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireValidatorSig(actionId: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddress: PromiseOrValue<string>, actionHash: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setActionCnt(_actionCnt: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signingPubKeyX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUpdateGroupKey(actionId: PromiseOrValue<BigNumberish>, _signingPubKeyX: PromiseOrValue<BigNumberish>, _pubKeyYParity: PromiseOrValue<BigNumberish>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifySignature(signature: PromiseOrValue<BigNumberish>, msgHash: PromiseOrValue<BigNumberish>, nonceTimesGeneratorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
