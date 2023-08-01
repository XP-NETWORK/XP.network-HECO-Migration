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
export interface XPNftHtsInterface extends utils.Interface {
    functions: {
        "DEFAULT_EXPIRY()": FunctionFragment;
        "MAX_INT()": FunctionFragment;
        "baseURI()": FunctionFragment;
        "baseUri()": FunctionFragment;
        "burnFor(address,uint256)": FunctionFragment;
        "claimContract()": FunctionFragment;
        "claimNft(int64,address)": FunctionFragment;
        "decodeHts(uint256)": FunctionFragment;
        "getTokenExpiryInfo(address)": FunctionFragment;
        "grantTokenKyc(address,address)": FunctionFragment;
        "htsToken()": FunctionFragment;
        "initialize(string,string,string,address,uint32,uint32,address,uint32,address)": FunctionFragment;
        "isKyc(address,address)": FunctionFragment;
        "mint(address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseToken(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "revokeTokenKyc(address,address)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpauseToken(address)": FunctionFragment;
        "updateTokenExpiryInfo(address,(uint32,address,uint32))": FunctionFragment;
        "updateTokenInfo(address,(string,string,address,string,bool,int64,bool,(uint256,(bool,address,bytes,bytes,address))[],(uint32,address,uint32)))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_EXPIRY" | "MAX_INT" | "baseURI" | "baseUri" | "burnFor" | "claimContract" | "claimNft" | "decodeHts" | "getTokenExpiryInfo" | "grantTokenKyc" | "htsToken" | "initialize" | "isKyc" | "mint" | "owner" | "pauseToken" | "renounceOwnership" | "revokeTokenKyc" | "safeTransferFrom" | "tokenURI" | "transferOwnership" | "unpauseToken" | "updateTokenExpiryInfo" | "updateTokenInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_EXPIRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_INT", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseUri", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimNft", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decodeHts", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTokenExpiryInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "htsToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeTokenKyc", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateTokenExpiryInfo", values: [PromiseOrValue<string>, IHederaTokenService.ExpiryStruct]): string;
    encodeFunctionData(functionFragment: "updateTokenInfo", values: [PromiseOrValue<string>, IHederaTokenService.HederaTokenStruct]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_EXPIRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_INT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeHts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "htsToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeTokenKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenExpiryInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenInfo", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface XPNftHts extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: XPNftHtsInterface;
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
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        baseUri(overrides?: CallOverrides): Promise<[string]>;
        burnFor(from: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimContract(overrides?: CallOverrides): Promise<[string]>;
        claimNft(serialNum: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        htsToken(overrides?: CallOverrides): Promise<[string]>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, claimContract_: PromiseOrValue<string>, numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, feeCollector: PromiseOrValue<string>, amountForFixed: PromiseOrValue<BigNumberish>, feeCollectorFixed: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
    baseURI(overrides?: CallOverrides): Promise<string>;
    baseUri(overrides?: CallOverrides): Promise<string>;
    burnFor(from: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimContract(overrides?: CallOverrides): Promise<string>;
    claimNft(serialNum: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    htsToken(overrides?: CallOverrides): Promise<string>;
    initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, claimContract_: PromiseOrValue<string>, numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, feeCollector: PromiseOrValue<string>, amountForFixed: PromiseOrValue<BigNumberish>, feeCollectorFixed: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        baseURI(overrides?: CallOverrides): Promise<string>;
        baseUri(overrides?: CallOverrides): Promise<string>;
        burnFor(from: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimContract(overrides?: CallOverrides): Promise<string>;
        claimNft(serialNum: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            IHederaTokenService.ExpiryStructOutput
        ] & {
            responseCode: BigNumber;
            expiryInfo: IHederaTokenService.ExpiryStructOutput;
        }>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        htsToken(overrides?: CallOverrides): Promise<string>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, claimContract_: PromiseOrValue<string>, numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, feeCollector: PromiseOrValue<string>, amountForFixed: PromiseOrValue<BigNumberish>, feeCollectorFixed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            responseCode: BigNumber;
            kycGranted: boolean;
        }>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _serialNum: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpauseToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenExpiryInfo(token: PromiseOrValue<string>, expiryInfo: IHederaTokenService.ExpiryStruct, overrides?: CallOverrides): Promise<BigNumber>;
        updateTokenInfo(token: PromiseOrValue<string>, tokenInfo: IHederaTokenService.HederaTokenStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        DEFAULT_EXPIRY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_INT(overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        baseUri(overrides?: CallOverrides): Promise<BigNumber>;
        burnFor(from: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimContract(overrides?: CallOverrides): Promise<BigNumber>;
        claimNft(serialNum: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        htsToken(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, claimContract_: PromiseOrValue<string>, numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, feeCollector: PromiseOrValue<string>, amountForFixed: PromiseOrValue<BigNumberish>, feeCollectorFixed: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseUri(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnFor(from: PromiseOrValue<string>, serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimNft(serialNum: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decodeHts(data: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenExpiryInfo(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        htsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, claimContract_: PromiseOrValue<string>, numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, feeCollector: PromiseOrValue<string>, amountForFixed: PromiseOrValue<BigNumberish>, feeCollectorFixed: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeTokenKyc(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _serialNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
