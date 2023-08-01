import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MinterERC20, MinterERC20Interface } from "../MinterERC20";
declare type MinterERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MinterERC20__factory extends ContractFactory {
    constructor(...args: MinterERC20ConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _nftWhitelist: PromiseOrValue<string>[], payMethod: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MinterERC20>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _nftWhitelist: PromiseOrValue<string>[], payMethod: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MinterERC20;
    connect(signer: Signer): MinterERC20__factory;
    static readonly bytecode = "0x60406080815234620001db576200267e90813803806200001f81620001f6565b9384398201608083820312620001db57825192602092838201519260ff8416809403620001db57828201516001600160401b039390848111620001db5781019180601f84011215620001db578251948511620001e05760059285841b9088806200008b818501620001f6565b809981520192820101928311620001db5788809101915b838310620001c057505050506060620000bc91016200021c565b9460ff1993600096858854168855876003556004968888556fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038a10156200017d57885b8351811015620001475780861b84018501516001600160a01b03168a52858552868a2080548916600117905560001981146200013457600101620000f5565b634e487b7160e01b8a526011895260248afd5b60018b9055600280546001600160a81b0319168317600885901b610100600160a81b0316179055865161244c9081620002328239f35b855162461bcd60e51b8152808901859052601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b8190620001cd846200021c565b8152019101908890620000a2565b600080fd5b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620001e057604052565b51906001600160a01b0382168203620001db5756fe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a714611afd5750806311b2fec71461189f57806312fd8885146117dd578063150b7a021461178757806315fdf1941461164a57806316b47ef7146116295780631a44a6281461151757806328dc132d146114f957806330294d8e146112e057806344e458181461113f57806346b31b6e146111005780635c975abb146110de57806369fb99a5146110125780637629c3fc14610f215780638b4e54aa14610df55780638efb3bb214610dba57806394dc2ed814610cb25780639610729714610ad55780639cf45bf81461087a578063ae54deaf14610603578063bbbca88f146103b9578063bc197c811461032c578063d9d86def1461023e578063de1ab9a014610220578063e493ef8c146101f3578063f23a6e61146101995763ff51dff21461014a57600080fd5b346101965760a03660031901126101965760243560ff8116810361019157610187602091610176611d26565b906064359060443590600435612264565b6040519015158152f35b600080fd5b80fd5b50346101965760a0366003190112610196576101b3611b52565b506101bc611ce4565b506084356001600160401b0381116101ef576101dc903690600401611c9d565b5060405163f23a6e6160e01b8152602090f35b5080fd5b5034610196578060031936011261019657602060405170014551231950b75fc4402da1732fc9bebe198152f35b50346101965780600319360112610196576020600154604051908152f35b50346101965760a0366003190112610196576004356024356044359160ff83168093036101915761026d611d26565b9060405191602083014681523060408501528260608501528460808501528560a085015260a0845260c084018481106001600160401b03821117610316576102f86034610305968360405260e0810194732ab83230ba32a3b937bab825b2bca0b1ba34b7b760611b86526102e88251809260f4850190611def565b8101036014810184520182611bc0565b5190209160643590612065565b60015560ff19600254161760025580f35b634e487b7160e01b600052604160045260246000fd5b50346101965760a036600319011261019657610346611b52565b5061034f611ce4565b506001600160401b036044358181116103b557610370903690600401611bf8565b506064358181116103b557610389903690600401611bf8565b506084359081116101ef576103a2903690600401611c9d565b5060405163bc197c8160e01b8152602090f35b8280fd5b5060c0366003190112610196576001600160a01b0390600435828116908190036101ef57602435906103e9611c6c565b6001600160401b0394906064358681116105ff5761040b903690600401611c9d565b956084359081116105ff57610424903690600401611c9d565b6002546040516323b872dd60e01b815233600482015230602482015260a43560448201819052929892949091602091839160081c16818a816064810103925af19081156105f4579061047d9188916105c6575b50612105565b610485611e5e565b838652600560205261049d60ff604088205416611fe9565b60035490600182018092116105b2578697826003556104be85600454611d93565b600455604051946303a24d0760e21b865287600487015288866024818a5afa9081156105a757886105219489927f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c60998d95610582575b50604051988998896121fb565b0390a1803b1561057e57604051637921219560e11b815291839183918290849082906105529030336004850161202d565b03925af18015610573576105635750f35b61056c90611b92565b6101965780f35b6040513d84823e3d90fd5b5050fd5b6105a09195508d3d8091833e6105988183611bc0565b810190612148565b9338610514565b6040513d8b823e3d90fd5b634e487b7160e01b87526011600452602487fd5b6105e7915060203d81116105ed575b6105df8183611bc0565b8101906120ed565b38610477565b503d6105d5565b6040513d89823e3d90fd5b8580fd5b50346101965760e03660031901126101965761061d611ce4565b6001600160401b03906044358281116108255761063e903690600401611bf8565b916064359281841161087657366023850112156108765783600401359161066483611be1565b946106726040519687611bc0565b838652602086016024819560051b8301019136831161087257602401905b82821061085a575050506084359081116105ff57906106b58693923690600401611c9d565b916106be611cfa565b906106c7611e5e565b604080514660208201908152309282019290925260043560608201526001600160a01b038816608080830191909152815291601f199161074a9060369061070f60a087611bc0565b61074160405196752a3930b739b332b927333a2130ba31b420b1ba34b7b760511b602089015251809284890190611def565b85010186611f83565b8951909190885b818110610838575050508291610797949361078492885190610777828260208d01611def565b0103908101835282611bc0565b602081519101209060a435600435611ee2565b825b8151811015610834576001600160a01b036107b48288611fbf565b51166107c08284611fbf565b5190803b156105ff578486916107ef93838a604051968795869485936394d008ef60e01b855260048501611e37565b03925af1908115610829578591610811575b505061080c90611fb0565b610799565b61081a90611b92565b610825578338610801565b8380fd5b6040513d87823e3d90fd5b8380f35b82516001600160a01b031684528c995060209384019390920191600101610751565b6020809161086784611b7e565b815201910190610690565b8880fd5b8480fd5b50346101965760c036600319011261019657600435610897611ce4565b6001600160401b0391604435838111610876576108b8903690600401611bf8565b9060643593841161087657366023850112156108765783600401356108dc81611be1565b946108ea6040519687611bc0565b8186526020908187016024819460051b83010191368311610ad1579060248a9694939297959701905b828210610aaa57505050610925611d10565b9061092e611e5e565b60408051468382019081523060208201529182018590526001600160a01b0389166060830152918260808301039061096e601f1992838101865285611bc0565b6109b6603a604051946109ad848701977f556e667265657a65457263313135354261746368416374696f6e000000000000895251809284890190611def565b85010188611f83565b8b51909991895b828110610a8a57505050506109df90826109ec97989903908101835282611bc0565b5190209160843590611ee2565b815b8151811015610a86576001600160a01b03610a098287611fbf565b5116610a158284611fbf565b5190803b1561087657604051637921219560e11b81529185918391829084908290610a45908c306004850161202d565b03925af1908115610a7b578491610a67575b5050610a6290611fb0565b6109ee565b610a7090611b92565b6103b5578238610a57565b6040513d86823e3d90fd5b8280f35b83516001600160a01b03168c529a81019a8e9a50928101926001016109bd565b8394965092819293610abf8293999799611b7e565b81520191018995939291969496610913565b8980fd5b5060a0366003190112610196576001600160401b03906004358281116101ef57610b03903690600401611d66565b90610b0c611c56565b9060443591610b19611b68565b6002546040516323b872dd60e01b815233600482015230602482015260843560448201819052929892946001600160a01b03939092909190602090829060649082908d9060081c89165af19081156105a75790610b7c918a916105c65750612105565b610b84611e5e565b6003549260018401809411610c9e57889984600355610ba587600454611d93565b600455169660405192636c0360eb60e01b84528984600481838d5af1918215610c93577fe6c2e264dfdacef76476a71b1eec2327a90b6fb27e3c5ee848b76623fdf7956297610c39958c94610c75575b50610c1f93946040519889988952166020880152604087015260e0606087015260e08601916121a6565b908760808501528660a085015283820360c0850152611e12565b0390a1813b1561057e578291604483926040519485938492631dd319cb60e01b845233600485015260248401525af18015610573576105635750f35b610c1f9450610c8d903d808f833e6105988183611bc0565b93610bf5565b6040513d8c823e3d90fd5b634e487b7160e01b89526011600452602489fd5b50346101965760c03660031901126101965780600435610cd0611ce4565b604435610d75610cde611b68565b93610ce7611d10565b94610cf0611e5e565b6001600160a01b031680875260056020526040872054909590610d159060ff16611fe9565b60405160208101610d3d82610d2f8a898b89304689611db6565b03601f198101845283611bc0565b6109df603460405180936102e86020830196732ab7333932b2bd32a2b9319b9918a0b1ba34b7b760611b885251809285850190611def565b823b15610db557604051632142170760e11b81523060048201526001600160a01b0390921660248301526044820152908290829081838160648101610552565b505050fd5b503461019657806003193601126101965760206040517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b503461019657608036600319011261019657600435610e12611ce4565b610e1a611b68565b90610e23611e5e565b6001600160a01b03168084526005602052604084205490929060ff16610edc57610ec3916040516020810146815230604083015283606083015285608083015260808252610e7082611ba5565b610eb660326040518093610ea66020830196712bb434ba32b634b9ba27333a20b1ba34b7b760711b885251809285850190611def565b8101036012810184520182611bc0565b5190209160443590612065565b8152600560205260408120805460ff1916600117905580f35b60405162461bcd60e51b815260206004820152601760248201527f4e465420616c72656164792077686974656c69737465640000000000000000006044820152606490fd5b50346101965760c03660031901126101965780600435610f3f611ce4565b604435610fe7610f4d611b68565b93610f56611d10565b94610f5f611e5e565b6001600160a01b031680875260056020526040872054909590610f849060ff16611fe9565b60405160208101610f9e82610d2f8a898b89304689611db6565b6109df60356040518093610fd76020830196742ab7333932b2bd32a2b93198989a9aa0b1ba34b7b760591b885251809285850190611def565b8101036015810184520182611bc0565b823b15610db55761055292849283604051809681958294637921219560e11b8452306004850161202d565b50346101965761109e61102436611d3c565b9061102d611e5e565b604080514660208201908152309282019290925260608101859052906110568260808101610d2f565b611095602b604051809361108560208301966a2830bab9b2a0b1ba34b7b760a91b885251809285850190611def565b810103600b810184520182611bc0565b51902092612065565b6110a6611e5e565b600160ff198254161781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b503461019657806003193601126101965760ff60209154166040519015158152f35b50346101965760203660031901126101965760209060ff906040906001600160a01b0361112b611b52565b168152600584522054166040519015158152f35b5060c0366003190112610196576001600160a01b0390600435828116908190036101ef576024359061116f611c6c565b6001600160401b0394906064358681116105ff57611191903690600401611c9d565b956084359081116105ff576111aa903690600401611c9d565b6002546040516323b872dd60e01b815233600482015230602482015260a43560448201819052929892949091602091839160081c16818a816064810103925af19081156105f457906112029188916105c65750612105565b61120a611e5e565b838652600560205261122260ff604088205416611fe9565b60035490600182018092116105b25786978260035561124385600454611d93565b6004556040519463c87b56dd60e01b865287600487015288866024818a5afa9081156105a757886112a59489927fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152998d956105825750604051988998896121fb565b0390a1803b1561057e57604051632142170760e11b815233600482015230602482015260448101929092528290829081838160648101610552565b5060c0366003190112610196576001600160401b03906004358281116101ef5761130e903690600401611d66565b9092611318611c56565b60443582811161087657611330903690600401611bf8565b916064358181116105ff57611349903690600401611bf8565b91611352611d26565b6002546040516323b872dd60e01b815233600482015230602482015260a435604482015291986001600160a01b03929091602090829060649082908d9060081c88165af19081156105a757906113ae918a916105c65750612105565b6113b6611e5e565b6003549160018301809311610c9e578899836003556113d960a435600454611d93565b600455169660405191636c0360eb60e01b83528983600481838d5af1918215610c93577f4c7d622af4f34f65413b1981ceaf14550d0b8907407472f736013dc1b9ed70359661147e948c80956114cf575b50509161145c9161147093604051988998895216602088015260a435604088015260e0606088015260e08701916121a6565b89608086015284810360a0860152886121c7565b9083820360c0850152611e12565b0390a1823b15610db557610552926114bd8580946040519687958694859363885c2f3560e01b85523360048601526060602486015260648501906121c7565b838103600319016044850152906121c7565b6114709492955061145c93916114ee913d8091833e6105988183611bc0565b94919350918c61142a565b50346101965780600319360112610196576020600354604051908152f35b50346101965760e03660031901126101965780600435611535611ce4565b60443591611541611b68565b6084356001600160401b0381116105ff576115636115fe913690600401611c9d565b9261156c611cfa565b92611575611e5e565b60018060a01b0316926040516020810161159882610d2f888c8c89304689611db6565b6115f1603160405180936115cd6020830196702a3930b739b332b927333a20b1ba34b7b760791b885251809285850190611def565b8a519082016115e28285830160208f01611def565b01036011810184520182611bc0565b5190209160a43590611ee2565b803b156108765761055293858094604051968795869485936394d008ef60e01b855260048501611e37565b5034610196578060031936011261019657602060ff60025416604051908152f35b5034610196576080366003190112610196576001600160a01b0360243581811691600435918390036108255761167e611b68565b8315611742576020926116e891604051858101468152306040830152836060830152876080830152608082526116b382611ba5565b610eb660326040518093610ea68b830196712a3930b739b332b92332b2b9a0b1ba34b7b760711b885251809285850190611def565b6044600454918560045560025460081c169385604051958694859363a9059cbb60e01b8552600485015260248401525af1801561057357611727575080f35b61173e9060203d81116105ed576105df8183611bc0565b5080f35b60405162461bcd60e51b815260206004820152601f60248201527f73686f756c646e27742073656e6420746f206e756c6c206164647265737321006044820152606490fd5b5034610196576080366003190112610196576117a1611b52565b506117aa611ce4565b506064356001600160401b0381116101ef576117ca903690600401611c9d565b50604051630a85bd0160e11b8152602090f35b5034610196576118626117ef36611d3c565b906117f86120a4565b604080514660208201908152309282019290925260608101859052906118218260808101610d2f565b611095602d604051809361185260208301966c2ab73830bab9b2a0b1ba34b7b760991b885251809285850190611def565b810103600d810184520182611bc0565b61186a6120a4565b60ff1981541681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b506003199060e036830112610196576118b6611b52565b916001600160401b03602435818111610825576118d7903690600401611bf8565b604435828111610876576118ef903690600401611bf8565b92606435958387168097036105ff57608435848111611af957611916903690600401611c9d565b9360a435908111611af9579061193487959493923690600401611c9d565b6002546040516323b872dd60e01b815233600482015230602482015260c4356044820181905260209890946001600160a01b03939092918a91839160649183919060081c88165af1908115611aee5790611994918c91611ad75750612105565b1694858952600587526119ad60ff60408b205416611fe9565b6003549260018401809411611ac357899a92611a32611a248694611a46947f3f998d848d8364d0f4ba361a1e2a550e49df9b8f2e80e8bb523cc1fa1fb748aa989d9e9d6003556119ff81600454611d93565b60045560405197889788528d880152604087015260e0606087015260e0860190611e12565b8481036080860152886121c7565b908860a085015283820360c0850152611e12565b0390a1823b1561087657611a8993859182611a99604051998a988997631759616b60e11b89523360048a01523060248a015260a060448a015260a48901906121c7565b90848883030160648901526121c7565b85810392830160848701525201925af1801561057357611ab7575080f35b611ac090611b92565b80f35b634e487b7160e01b8a52601160045260248afd5b6105e791508a3d8c116105ed576105df8183611bc0565b6040513d8d823e3d90fd5b8680fd5b9050346101ef5760203660031901126101ef5760043563ffffffff60e01b81168091036103b55760209250630271189760e51b8114908115611b41575b5015158152f35b6301ffc9a760e01b14905038611b3a565b600435906001600160a01b038216820361019157565b606435906001600160a01b038216820361019157565b35906001600160a01b038216820361019157565b6001600160401b03811161031657604052565b60a081019081106001600160401b0382111761031657604052565b90601f801991011681019081106001600160401b0382111761031657604052565b6001600160401b0381116103165760051b60200190565b81601f8201121561019157803591611c0f83611be1565b92611c1d6040519485611bc0565b808452602092838086019260051b820101928311610191578301905b828210611c47575050505090565b81358152908301908301611c39565b602435906001600160401b038216820361019157565b604435906001600160401b038216820361019157565b6001600160401b03811161031657601f01601f191660200190565b81601f8201121561019157803590611cb482611c82565b92611cc26040519485611bc0565b8284526020838301011161019157816000926020809301838601378301015290565b602435906001600160a01b038216820361019157565b60c435906001600160a01b038216820361019157565b60a435906001600160a01b038216820361019157565b608435906001600160a01b038216820361019157565b60609060031901126101915760043590602435906044356001600160a01b03811681036101915790565b9181601f84011215610191578235916001600160401b038311610191576020838186019501011161019157565b91908201809211611da057565b634e487b7160e01b600052601160045260246000fd5b9081526001600160a01b03918216602082015260408101929092529182166060820152608081019290925290911660a082015260c00190565b60005b838110611e025750506000910152565b8181015183820152602001611df2565b90602091611e2b81518092818552858086019101611def565b601f01601f1916010190565b611e5b939260609260018060a01b0316825260208201528160408201520190611e12565b90565b60ff60005416611e6a57565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b15611ea957565b60405162461bcd60e51b81526020600482015260116024820152706475706c696361746520616374696f6e2160781b6044820152606490fd5b90611f21939291806000526006602052611f0460ff6040600020541615611ea2565b60005260066020526040600020600160ff19825416179055611f23565b565b91611f379260015460ff6002541690612264565b15611f3e57565b60405162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152606490fd5b805160208092019160005b828110611f9c575050505090565b835185529381019392810192600101611f8e565b6000198114611da05760010190565b8051821015611fd35760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b15611ff057565b60405162461bcd60e51b81526020600482015260156024820152744e4654206e6f742077686974656c69737465643f2160581b6044820152606490fd5b6001600160a01b0391821681529116602082015260408101919091526001606082015260a06080820181905260009082015260c00190565b90611f2193929180600052600760205261208760ff6040600020541615611ea2565b60005260076020526040600020600160ff19825416179055611f23565b60ff60005416156120b157565b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b90816020910312610191575180151581036101915790565b1561210c57565b60405162461bcd60e51b8152602060048201526014602482015273547820466565732069732072657175697265642160601b6044820152606490fd5b602081830312610191578051906001600160401b038211610191570181601f8201121561019157805161217a81611c82565b926121886040519485611bc0565b8184526020828401011161019157611e5b9160208085019101611def565b908060209392818452848401376000828201840152601f01601f1916010190565b90815180825260208080930193019160005b8281106121e7575050505090565b8351855293810193928101926001016121d9565b96929361225695946001600160401b03611e5b9a9894612233948b521660208a015260408901526101008060608a0152880190611e12565b60808701939093526001600160a01b031660a086015284820360c0860152611e12565b9160e0818403910152611e12565b70014551231950b75fc4402da1732fc9bebe19949390929190858310156123c6576001600160a01b0385811696909590871515806123bd575b806123b4575b806123ab575b1561236d5760405191602083019387855260ff60f81b8660f81b16604085015260418401526bffffffffffffffffffffffff199060601b1660618301526055825260808201928284106001600160401b038511176103165781908460405283519020958709810390808211611da05760209660009660ff60e0948160809916158a1461236557601b905b88521660a08601528160c08601520991015282805260015afa1561235957600051161490565b6040513d6000823e3d90fd5b601c90612333565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b508215156122a9565b508415156122a3565b5085151561229d565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea264697066735822122071c96ad17204ccb04b86b5baa0f8a9a65c37ecd19239a4d70168610f9e950d1264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_validatorPKX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_validatorPKYP";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_nftWhitelist";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "payMethod";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "tokenData";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "TransferErc1155";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "TransferErc1155Batch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "tokenData";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }];
        readonly name: "TransferErc721";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainNonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "burner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "baseURI";
            readonly type: "string";
        }];
        readonly name: "UnfreezeNft";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainNonce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "burner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "baseURI";
            readonly type: "string";
        }];
        readonly name: "UnfreezeNftBatch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "HALF_Q";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Q";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "actionCnt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC1155MetadataURI";
            readonly name: "erc1155Contract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee";
            readonly type: "uint256";
        }];
        readonly name: "freezeErc1155";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC1155";
            readonly name: "erc1155Contract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ones";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee";
            readonly type: "uint256";
        }];
        readonly name: "freezeErc1155Batch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC721Metadata";
            readonly name: "erc721Contract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "mintWith";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee";
            readonly type: "uint256";
        }];
        readonly name: "freezeErc721";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nftWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validatePauseBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateTransferFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nftId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract BridgeNFT";
            readonly name: "mintWith";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "mintArgs";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateTransferNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "contract BridgeNFTBatch[]";
            readonly name: "mintWith";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "mintArgs";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateTransferNftBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC1155";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUnfreezeErc1155";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "contract IERC1155[]";
            readonly name: "contractAddrs";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUnfreezeErc1155Batch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC721";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUnfreezeErc721";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUnpauseBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_validatorPKX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_validatorPKYP";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateUpdateGroupKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC721";
            readonly name: "contractAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sig";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "proofAddr";
            readonly type: "address";
        }];
        readonly name: "validateWhitelistNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "validatorPKX";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "validatorPKYParity";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "signingPubKeyX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "pubKeyYParity";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "signature";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "nonceTimesGeneratorAddress";
            readonly type: "address";
        }];
        readonly name: "verifySignature";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract BridgeNFT";
            readonly name: "burner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee";
            readonly type: "uint256";
        }];
        readonly name: "withdrawNft";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainNonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ones";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "contract BridgeNFTBatch";
            readonly name: "burner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee";
            readonly type: "uint256";
        }];
        readonly name: "withdrawNftBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MinterERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MinterERC20;
}
export {};
