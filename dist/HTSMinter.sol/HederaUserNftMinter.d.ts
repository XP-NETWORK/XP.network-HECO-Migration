import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IHederaTokenService {
    type ExpiryStruct = {
        second: PromiseOrValue<BigNumberish>;
        autoRenewAccount: PromiseOrValue<string>;
        autoRenewPeriod: PromiseOrValue<BigNumberish>;
    };
    type ExpiryStructOutput = [number, string, number] & {
        second: number;
        autoRenewAccount: string;
        autoRenewPeriod: number;
    };
    type KeyValueStruct = {
        inheritAccountKey: PromiseOrValue<boolean>;
        contractId: PromiseOrValue<string>;
        ed25519: PromiseOrValue<BytesLike>;
        ECDSA_secp256k1: PromiseOrValue<BytesLike>;
        delegatableContractId: PromiseOrValue<string>;
    };
    type KeyValueStructOutput = [
        boolean,
        string,
        string,
        string,
        string
    ] & {
        inheritAccountKey: boolean;
        contractId: string;
        ed25519: string;
        ECDSA_secp256k1: string;
        delegatableContractId: string;
    };
    type TokenKeyStruct = {
        keyType: PromiseOrValue<BigNumberish>;
        key: IHederaTokenService.KeyValueStruct;
    };
    type TokenKeyStructOutput = [
        BigNumber,
        IHederaTokenService.KeyValueStructOutput
    ] & {
        keyType: BigNumber;
        key: IHederaTokenService.KeyValueStructOutput;
    };
    type HederaTokenStruct = {
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        treasury: PromiseOrValue<string>;
        memo: PromiseOrValue<string>;
        tokenSupplyType: PromiseOrValue<boolean>;
        maxSupply: PromiseOrValue<BigNumberish>;
        freezeDefault: PromiseOrValue<boolean>;
        tokenKeys: IHederaTokenService.TokenKeyStruct[];
        expiry: IHederaTokenService.ExpiryStruct;
    };
    type HederaTokenStructOutput = [
        string,
        string,
        string,
        string,
        boolean,
        BigNumber,
        boolean,
        IHederaTokenService.TokenKeyStructOutput[],
        IHederaTokenService.ExpiryStructOutput
    ] & {
        name: string;
        symbol: string;
        treasury: string;
        memo: string;
        tokenSupplyType: boolean;
        maxSupply: BigNumber;
        freezeDefault: boolean;
        tokenKeys: IHederaTokenService.TokenKeyStructOutput[];
        expiry: IHederaTokenService.ExpiryStructOutput;
    };
}
export interface HederaUserNftMinterInterface extends utils.Interface {
    functions: {
        "DEFAULT_EXPIRY()": FunctionFragment;
        "MAX_INT()": FunctionFragment;
        "_token()": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "getTokenExpiryInfo(address)": FunctionFragment;
        "grantTokenKyc(address,address)": FunctionFragment;
        "isKyc(address,address)": FunctionFragment;
        "mint(string,address)": FunctionFragment;
        "pauseToken(address)": FunctionFragment;
        "revokeTokenKyc(address,address)": FunctionFragment;
        "unpauseToken(address)": FunctionFragment;
        "updateTokenExpiryInfo(address,(uint32,address,uint32))": FunctionFragment;
        "updateTokenInfo(address,(string,string,address,string,bool,int64,bool,(uint256,(bool,address,bytes,bytes,address))[],(uint32,address,uint32)))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_EXPIRY" | "MAX_INT" | "_token" | "burn" | "getTokenExpiryInfo" | "grantTokenKyc" | "isKyc" | "mint" | "pauseToken" | "revokeTokenKyc" | "unpauseToken" | "updateTokenExpiryInfo" | "updateTokenInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_EXPIRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_INT", values?: undefined): string;
    encodeFunctionData(functionFragment: "_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTokenExpiryInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateTokenExpiryInfo", values: [PromiseOrValue<string>, IHederaTokenService.ExpiryStruct]): string;
    encodeFunctionData(functionFragment: "updateTokenInfo", values: [PromiseOrValue<string>, IHederaTokenService.HederaTokenStruct]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_EXPIRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_INT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenInfo", data: BytesLike): Result;
    events: {};
}
export interface HederaUserNftMinter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HederaUserNftMinterInterface;
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
        DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<[number]>;
        MAX_INT(overrides?: CallOverrides): Promise<[BigNumber]>;
        _token(overrides?: CallOverrides): Promise<[string]>;
        burn(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(uri: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<number>;
    MAX_INT(overrides?: CallOverrides): Promise<BigNumber>;
    _token(overrides?: CallOverrides): Promise<string>;
    burn(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(uri: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<number>;
        MAX_INT(overrides?: CallOverrides): Promise<BigNumber>;
        _token(overrides?: CallOverrides): Promise<string>;
        burn(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            responseCode: BigNumber;
            newTotalSupply: BigNumber;
        }>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            IHederaTokenService.ExpiryStructOutput
        ] & {
            responseCode: BigNumber;
            expiryInfo: IHederaTokenService.ExpiryStructOutput;
        }>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            responseCode: BigNumber;
            kycGranted: boolean;
        }>;
        mint(uri: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_INT(overrides?: CallOverrides): Promise<BigNumber>;
        _token(overrides?: CallOverrides): Promise<BigNumber>;
        burn(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(uri: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_INT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(uri: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
