import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export interface UserNFTStoreHederaInterface extends utils.Interface {
    functions: {
        "decodeHts(uint256)": FunctionFragment;
        "freezeErc721(address,uint256,uint64,string,string)": FunctionFragment;
        "getTokenExpiryInfo(address)": FunctionFragment;
        "grantTokenKyc(address,address)": FunctionFragment;
        "isKyc(address,address)": FunctionFragment;
        "noWhitelistUtils()": FunctionFragment;
        "pauseToken(address)": FunctionFragment;
        "revokeTokenKyc(address,address)": FunctionFragment;
        "unpauseToken(address)": FunctionFragment;
        "updateTokenExpiryInfo(address,(uint32,address,uint32))": FunctionFragment;
        "updateTokenInfo(address,(string,string,address,string,bool,int64,bool,(uint256,(bool,address,bytes,bytes,address))[],(uint32,address,uint32)))": FunctionFragment;
        "validateUnfreezeErc721(uint256,address,uint256,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decodeHts" | "freezeErc721" | "getTokenExpiryInfo" | "grantTokenKyc" | "isKyc" | "noWhitelistUtils" | "pauseToken" | "revokeTokenKyc" | "unpauseToken" | "updateTokenExpiryInfo" | "updateTokenInfo" | "validateUnfreezeErc721"): FunctionFragment;
    encodeFunctionData(functionFragment: "decodeHts", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "freezeErc721", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getTokenExpiryInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "noWhitelistUtils", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateTokenExpiryInfo", values: [PromiseOrValue<string>, IHederaTokenService.ExpiryStruct]): string;
    encodeFunctionData(functionFragment: "updateTokenInfo", values: [PromiseOrValue<string>, IHederaTokenService.HederaTokenStruct]): string;
    encodeFunctionData(functionFragment: "validateUnfreezeErc721", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "decodeHts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeErc721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noWhitelistUtils", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUnfreezeErc721", data: BytesLike): Result;
    events: {
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TransferErc721"): EventFragment;
}
export interface TransferErc721EventObject {
    actionId: BigNumber;
    chainNonce: BigNumber;
    txFees: BigNumber;
    to: string;
    id: BigNumber;
    contractAddr: string;
    tokenData: string;
    mintWith: string;
}
export declare type TransferErc721Event = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
], TransferErc721EventObject>;
export declare type TransferErc721EventFilter = TypedEventFilter<TransferErc721Event>;
export interface UserNFTStoreHedera extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserNFTStoreHederaInterface;
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
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
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
        noWhitelistUtils(overrides?: CallOverrides): Promise<[string]>;
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
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
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
    noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
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
    validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
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
        noWhitelistUtils(overrides?: CallOverrides): Promise<string>;
        pauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: CallOverrides): Promise<BigNumber>;
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TransferErc721(uint256,uint64,uint256,string,uint256,address,string,string)"(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
        TransferErc721(actionId?: null, chainNonce?: null, txFees?: null, to?: null, id?: null, contractAddr?: null, tokenData?: null, mintWith?: null): TransferErc721EventFilter;
    };
    estimateGas: {
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
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
        noWhitelistUtils(overrides?: CallOverrides): Promise<BigNumber>;
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
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeErc721(erc721Contract: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, chainNonce: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, mintWith: PromiseOrValue<string>, overrides?: PayableOverrides & {
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
        noWhitelistUtils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        validateUnfreezeErc721(actionId: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, contractAddr: PromiseOrValue<string>, sig: PromiseOrValue<BigNumberish>, proofAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
