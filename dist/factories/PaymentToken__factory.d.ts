import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaymentToken, PaymentTokenInterface } from "../PaymentToken";
declare type PaymentTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaymentToken__factory extends ContractFactory {
    constructor(...args: PaymentTokenConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaymentToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaymentToken;
    connect(signer: Signer): PaymentToken__factory;
    static readonly bytecode = "0x608034620003ef576040906001600160401b039080830182811182821017620003d9578352600c81526020906b2830bcb6b2b73a2a37b5b2b760a11b8282015283519084820182811085821117620003d957855260049384835263282a25a760e11b84840152815192818411620003c4576003908154946001948587811c97168015620003b9575b88881014620003a4578190601f978881116200034e575b508890888311600114620002e757600092620002db575b505060001982851b1c191690851b1782555b8051928311620002c65786548481811c91168015620002bb575b87821014620002a6578581116200025b575b508590858411600114620001f057938394918492600095620001e4575b50501b92600019911b1c19161783555b3315620001a5575060025469d3c21bcecceda1000000928382018092116200019057506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025533835282815284832084815401905584519384523393a351610b059081620003f58239f35b601190634e487b7160e01b6000525260246000fd5b90606493519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519350388062000110565b9190601f198416928860005284886000209460005b8a8983831062000243575050501062000228575b50505050811b01835562000120565b01519060f884600019921b161c191690553880808062000219565b86860151895590970196948501948893500162000205565b87600052866000208680860160051c8201928987106200029c575b0160051c019085905b8281106200028f575050620000f3565b600081550185906200027f565b9250819262000276565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000e1565b604187634e487b7160e01b6000525260246000fd5b015190503880620000b5565b90879350601f19831691866000528a6000209260005b8c8282106200033757505084116200031e575b505050811b018255620000c7565b015160001983871b60f8161c1916905538808062000310565b8385015186558b97909501949384019301620002fd565b90915084600052886000208880850160051c8201928b86106200039a575b918991869594930160051c01915b8281106200038a5750506200009e565b600081558594508991016200037a565b925081926200036c565b602289634e487b7160e01b6000525260246000fd5b96607f169662000087565b604186634e487b7160e01b6000525260246000fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde03146105d057508163095ea7b3146105a657816318160ddd1461058757816323b872dd14610477578163313ce5671461045b57816339509351146103cf57816370a082311461038c57816395d89b411461020e578163a457c2d71461012657508063a9059cbb146100f65763dd62ed3e1461009e57600080fd5b346100f257806003193601126100f257806020926100ba610700565b6100c2610728565b73ffffffffffffffffffffffffffffffffffffffff91821683526001865283832091168252845220549051908152f35b5080fd5b50346100f257806003193601126100f25760209061011f610115610700565b602435903361074b565b5160018152f35b9050823461020b578260031936011261020b57610141610700565b918360243592338152600160205281812073ffffffffffffffffffffffffffffffffffffffff861682526020522054908282106101885760208561011f858503873361095a565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b8383346100f257816003193601126100f257805190828454600181811c90808316928315610382575b602093848410811461035657838852879594939291811561031957506001146102bb575b50505003601f01601f191682019267ffffffffffffffff84118385101761028f575082918261028b9252826106b8565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b8888529193925086917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106103035750505090601f1992601f9282010191819361025b565b80548885018701528794509285019281016102e6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f601f1961025b565b60248960228c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b91607f1691610237565b5050346100f25760206003193601126100f2578060209273ffffffffffffffffffffffffffffffffffffffff6103c0610700565b16815280845220549051908152f35b82843461020b578160031936011261020b576103e9610700565b338252600160205282822073ffffffffffffffffffffffffffffffffffffffff821683526020528282205491602435830180931161042f5760208461011f85853361095a565b806011867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b5050346100f257816003193601126100f2576020905160128152f35b839150346100f25760606003193601126100f257610493610700565b61049b610728565b91846044359473ffffffffffffffffffffffffffffffffffffffff8416815260016020528181203382526020522054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610501575b60208661011f87878761074b565b84821061052a575091839161051f6020969561011f9503338361095a565b9193948193506104f3565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100f257816003193601126100f2576020906002549051908152f35b5050346100f257806003193601126100f25760209061011f6105c6610700565b602435903361095a565b849084346106b457826003193601126106b45782600354600181811c908083169283156106aa575b6020938484108114610356578388528795949392918115610319575060011461064b5750505003601f01601f191682019267ffffffffffffffff84118385101761028f575082918261028b9252826106b8565b600388529193925086917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106106945750505090601f1992601f9282010191819361025b565b8054888501870152879450928501928101610677565b91607f16916105f8565b8280fd5b60208082528251818301819052939260005b8581106106ec57505050601f19601f8460006040809697860101520116010190565b8181018301518482016040015282016106ca565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361072357565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361072357565b73ffffffffffffffffffffffffffffffffffffffff8091169182156108d65716918215610852576000828152806020526040812054918083106107ce57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215610a4c57169182156109c85760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fdfea2646970667358221220772e83d23661c8a16378116820ea2ce7cd98c5dc09b18b5b908dfeee4ac64a7e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PaymentTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaymentToken;
}
export {};
