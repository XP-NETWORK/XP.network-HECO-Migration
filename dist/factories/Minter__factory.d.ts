import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Minter, MinterInterface } from "../Minter";
declare type MinterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Minter__factory extends ContractFactory {
    constructor(...args: MinterConstructorParams);
    deploy(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _nftWhitelist: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Minter>;
    getDeployTransaction(_validatorPKX: PromiseOrValue<BigNumberish>, _validatorPKYP: PromiseOrValue<BigNumberish>, _nftWhitelist: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Minter;
    connect(signer: Signer): Minter__factory;
    static readonly bytecode = "0x60406080815234620001b3576200242a803803806200001e81620001ce565b9283398101606082820312620001b357815192602090818401519260ff8416809403620001b357848201516001600160401b0395868211620001b357019080601f83011215620001b3578151958611620001b85760059186831b90858062000088818501620001ce565b809a81520192820101928311620001b3578501905b828210620001925750505060ff1992600095848754168755866003556004958787556fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038910156200014f57875b8251811015620001325780851b83018401516001600160a01b0316895284845285892080548816600117905560001981146200011f57600101620000e0565b634e487b7160e01b895260118852602489fd5b8582888c6001556002541617600255516122359081620001f58239f35b845162461bcd60e51b8152808801849052601b60248201527f5075626c6963206b6579206d757374206265203c2048414c465f5100000000006044820152606490fd5b81516001600160a01b0381168103620001b35781529085019085016200009d565b600080fd5b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620001b85760405256fe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a7146118fe57508063040833bd1461176457806312fd8885146116a2578063150b7a021461164c57806315fdf1941461153757806316b47ef7146115165780631a44a6281461140457806328dc132d146113e65780632a75f1381461129e57806346b31b6e1461125f5780635c975abb1461123d57806369fb99a5146111715780637629c3fc146110805780638b4e54aa14610f545780638efb3bb214610f1957806390e704e514610d8657806394dc2ed814610c835780639cf45bf814610a28578063ac7a67bc14610833578063ae54deaf146105c0578063b0d32db6146103b9578063bc197c811461032c578063d9d86def1461023e578063de1ab9a014610220578063e493ef8c146101f3578063f23a6e61146101995763ff51dff21461014a57600080fd5b346101965760a03660031901126101965760243560ff8116810361019157610187602091610176611a1a565b90606435906044359060043561204d565b6040519015158152f35b600080fd5b80fd5b50346101965760a0366003190112610196576101b36119c2565b506101bc6119d8565b506084356001600160401b0381116101ef576101dc903690600401611ad8565b5060405163f23a6e6160e01b8152602090f35b5080fd5b5034610196578060031936011261019657602060405170014551231950b75fc4402da1732fc9bebe198152f35b50346101965780600319360112610196576020600154604051908152f35b50346101965760a0366003190112610196576004356024356044359160ff83168093036101915761026d611a1a565b9060405191602083014681523060408501528260608501528460808501528560a085015260a0845260c084018481106001600160401b03821117610316576102f86034610305968360405260e0810194732ab83230ba32a3b937bab825b2bca0b1ba34b7b760611b86526102e88251809260f4850190611bf0565b8101036014810184520182611a9c565b5190209160643590611e66565b60015560ff19600254161760025580f35b634e487b7160e01b600052604160045260246000fd5b50346101965760a0366003190112610196576103466119c2565b5061034f6119d8565b506001600160401b036044358181116103b557610370903690600401611b59565b506064358181116103b557610389903690600401611b59565b506084359081116101ef576103a2903690600401611ad8565b5060405163bc197c8160e01b8152602090f35b8280fd5b506003199060c036830112610196576103d06119c2565b6001600160401b03926024358481116105bc576103f1903690600401611b59565b906044358581116105a05761040a903690600401611b59565b9260643595808716809703610191576084358181116105b857610431903690600401611ad8565b9060a4359081116105b85761044a903690600401611ad8565b91610456341515611eee565b6001600160a01b03168087526005602052604087205490929061047b9060ff16611dea565b60035491600183018093116105a457916105128899926104fe6104f07f3f998d848d8364d0f4ba361a1e2a550e49df9b8f2e80e8bb523cc1fa1fb748aa96856003556104c934600454611b1f565b6004556040519687968752602087015234604087015260e0606087015260e0860190611c13565b848103608086015289611fb0565b908660a085015283820360c0850152611c13565b0390a1803b156105a05784928360206105589482610568604051998a988997631759616b60e11b89523360048a01523060248a015260a060448a015260a4890190611fb0565b9084888303016064890152611fb0565b85810392830160848701525201925af18015610595576105855750f35b61058e90611a6e565b6101965780f35b6040513d84823e3d90fd5b8480fd5b634e487b7160e01b88526011600452602488fd5b8680fd5b8380fd5b50346101965760e0366003190112610196576105da6119d8565b6001600160401b03906044358281116105bc576105fb903690600401611b59565b91606435928184116105a057366023850112156105a05783600401359161062183611b42565b9461062f6040519687611a9c565b838652602086016024819560051b8301019136831161082f57602401905b828210610817575050506084359081116107ed57906106728693923690600401611ad8565b9161067b6119ee565b90610684611c5f565b604080514660208201908152309282019290925260043560608201526001600160a01b038816608080830191909152815291601f1991610707906036906106cc60a087611a9c565b6106fe60405196752a3930b739b332b927333a2130ba31b420b1ba34b7b760511b602089015251809284890190611bf0565b85010186611d84565b8951909190885b8181106107f5575050508291610754949361074192885190610734828260208d01611bf0565b0103908101835282611a9c565b602081519101209060a435600435611ce3565b825b81518110156107f1576001600160a01b036107718288611dc0565b511661077d8284611dc0565b5190803b156107ed578486916107ac93838a604051968795869485936394d008ef60e01b855260048501611c38565b03925af19081156107e25785916107ce575b50506107c990611db1565b610756565b6107d790611a6e565b6105bc5783386107be565b6040513d87823e3d90fd5b8580fd5b8380f35b82516001600160a01b031684528c99506020938401939092019160010161070e565b6020809161082484611a30565b81520191019061064d565b8880fd5b5060a0366003190112610196576001600160401b03906004358281116101ef57610861903690600401611953565b909261086b611980565b6044358281116105a057610883903690600401611b59565b916064358181116107ed5761089c903690600401611b59565b916108a5611a1a565b966108b1341515611eee565b6108b9611c5f565b60035490600182018092116105a4578798826003556108da34600454611b1f565b60045560018060a01b03169660405191636c0360eb60e01b83528983600481838d5af1918215610a1d577f4c7d622af4f34f65413b1981ceaf14550d0b8907407472f736013dc1b9ed703596610984948c80956109eb575b5050916109629161097693604051988998895216602088015234604088015260e0606088015260e0870191611f8f565b89608086015284810360a086015288611fb0565b9083820360c0850152611c13565b0390a1823b156109e6576109d5926109c38580946040519687958694859363885c2f3560e01b8552336004860152606060248601526064850190611fb0565b83810360031901604485015290611fb0565b03925af18015610595576105855750f35b505050fd5b610976949295506109629391610a12913d8091833e610a0a8183611a9c565b810190611f31565b94919350918c610932565b6040513d8c823e3d90fd5b50346101965760c036600319011261019657600435610a456119d8565b6001600160401b03916044358381116105a057610a66903690600401611b59565b906064359384116105a057366023850112156105a0578360040135610a8a81611b42565b94610a986040519687611a9c565b8186526020908187016024819460051b83010191368311610c7f579060248a9694939297959701905b828210610c5857505050610ad3611a04565b90610adc611c5f565b60408051468382019081523060208201529182018590526001600160a01b03891660608301529182608083010390610b1c601f1992838101865285611a9c565b610b64603a60405194610b5b848701977f556e667265657a65457263313135354261746368416374696f6e000000000000895251809284890190611bf0565b85010188611d84565b8b51909991895b828110610c385750505050610b8d9082610b9a97989903908101835282611a9c565b5190209160843590611ce3565b815b8151811015610c34576001600160a01b03610bb78287611dc0565b5116610bc38284611dc0565b5190803b156105a057604051637921219560e11b81529185918391829084908290610bf3908c3060048501611e2e565b03925af1908115610c29578491610c15575b5050610c1090611db1565b610b9c565b610c1e90611a6e565b6103b5578238610c05565b6040513d86823e3d90fd5b8280f35b83516001600160a01b03168c529a81019a8e9a5092810192600101610b6b565b8394965092819293610c6d8293999799611a30565b81520191018995939291969496610ac1565b8980fd5b50346101965760c03660031901126101965780600435610ca16119d8565b604435610d46610caf6119ac565b93610cb8611a04565b94610cc1611c5f565b6001600160a01b031680875260056020526040872054909590610ce69060ff16611dea565b60405160208101610d0e82610d008a898b89304689611bb7565b03601f198101845283611a9c565b610b8d603460405180936102e86020830196732ab7333932b2bd32a2b9319b9918a0b1ba34b7b760611b885251809285850190611bf0565b823b156109e657604051632142170760e11b81523060048201526001600160a01b03909216602483015260448201529082908290818381606481016109d5565b5060a0366003190112610196576004356001600160a01b038116919082900361019657602435610db4611996565b926001600160401b036064358181116105a057610dd5903690600401611ad8565b906084359081116105a057610dee903690600401611ad8565b94610dfa341515611eee565b610e02611c5f565b8285526005602052610e1a60ff604087205416611dea565b6003549060018201809211610f0557859682600355610e3b34600454611b1f565b6004556040519063c87b56dd60e01b82528660048301528782602481895afa8015610efa5786887fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c73429815297610e9e958c94610edd575b50604051978897349189611fe4565b0390a1803b15610ed957604051632142170760e11b8152336004820152306024820152604481019290925282908290818381606481016109d5565b5050fd5b610ef39194508c3d8091833e610a0a8183611a9c565b9238610e8f565b6040513d8a823e3d90fd5b634e487b7160e01b86526011600452602486fd5b503461019657806003193601126101965760206040517f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a18152f35b503461019657608036600319011261019657600435610f716119d8565b610f796119ac565b90610f82611c5f565b6001600160a01b03168084526005602052604084205490929060ff1661103b57611022916040516020810146815230604083015283606083015285608083015260808252610fcf82611a81565b611015603260405180936110056020830196712bb434ba32b634b9ba27333a20b1ba34b7b760711b885251809285850190611bf0565b8101036012810184520182611a9c565b5190209160443590611e66565b8152600560205260408120805460ff1916600117905580f35b60405162461bcd60e51b815260206004820152601760248201527f4e465420616c72656164792077686974656c69737465640000000000000000006044820152606490fd5b50346101965760c0366003190112610196578060043561109e6119d8565b6044356111466110ac6119ac565b936110b5611a04565b946110be611c5f565b6001600160a01b0316808752600560205260408720549095906110e39060ff16611dea565b604051602081016110fd82610d008a898b89304689611bb7565b610b8d603560405180936111366020830196742ab7333932b2bd32a2b93198989a9aa0b1ba34b7b760591b885251809285850190611bf0565b8101036015810184520182611a9c565b823b156109e6576109d592849283604051809681958294637921219560e11b84523060048501611e2e565b5034610196576111fd61118336611a44565b9061118c611c5f565b604080514660208201908152309282019290925260608101859052906111b58260808101610d00565b6111f4602b60405180936111e460208301966a2830bab9b2a0b1ba34b7b760a91b885251809285850190611bf0565b810103600b810184520182611a9c565b51902092611e66565b611205611c5f565b600160ff198254161781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b503461019657806003193601126101965760ff60209154166040519015158152f35b50346101965760203660031901126101965760209060ff906040906001600160a01b0361128a6119c2565b168152600584522054166040519015158152f35b5060a0366003190112610196576004356001600160a01b0381169190829003610196576024356112cc611996565b926001600160401b036064358181116105a0576112ed903690600401611ad8565b906084359081116105a057611306903690600401611ad8565b94611312341515611eee565b61131a611c5f565b828552600560205261133260ff604087205416611dea565b6003549060018201809211610f055785968260035561135334600454611b1f565b600455604051906303a24d0760e21b82528660048301528782602481895afa8015610efa5786887f615c9537dd34907365f03ae3b225d04cd0389b72753f05e074cc243a78237c60976113b5958c94610edd5750604051978897349189611fe4565b0390a1803b15610ed957604051637921219560e11b815291839183918290849082906109d590303360048501611e2e565b50346101965780600319360112610196576020600354604051908152f35b50346101965760e036600319011261019657806004356114226119d8565b6044359161142e6119ac565b6084356001600160401b0381116107ed576114506114eb913690600401611ad8565b926114596119ee565b92611462611c5f565b60018060a01b0316926040516020810161148582610d00888c8c89304689611bb7565b6114de603160405180936114ba6020830196702a3930b739b332b927333a20b1ba34b7b760791b885251809285850190611bf0565b8a519082016114cf8285830160208f01611bf0565b01036011810184520182611a9c565b5190209160a43590611ce3565b803b156105a0576109d593858094604051968795869485936394d008ef60e01b855260048501611c38565b5034610196578060031936011261019657602060ff60025416604051908152f35b5034610196576080366003190112610196576004356024356001600160a01b038116908190036103b5576115696119ac565b811561160757838093926115d98294839460405160208101468152306040830152836060830152856080830152608082526115a382611a81565b611015603260405180936110056020830196712a3930b739b332b92332b2b9a0b1ba34b7b760711b885251809285850190611bf0565b60045490826004558282156115fe575bf1156115f25780f35b604051903d90823e3d90fd5b506108fc6115e9565b60405162461bcd60e51b815260206004820152601f60248201527f73686f756c646e27742073656e6420746f206e756c6c206164647265737321006044820152606490fd5b5034610196576080366003190112610196576116666119c2565b5061166f6119d8565b506064356001600160401b0381116101ef5761168f903690600401611ad8565b50604051630a85bd0160e11b8152602090f35b5034610196576117276116b436611a44565b906116bd611ea5565b604080514660208201908152309282019290925260608101859052906116e68260808101610d00565b6111f4602d604051809361171760208301966c2ab73830bab9b2a0b1ba34b7b760991b885251809285850190611bf0565b810103600d810184520182611a9c565b61172f611ea5565b60ff1981541681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b506080366003190112610196576001600160401b03906004358281116101ef57611792903690600401611953565b909261179c611980565b91604435926117a96119ac565b956117b5341515611eee565b6117bd611c5f565b60035490600182018092116118ea578697826003556117de34600454611b1f565b60045560018060a01b03169460405191636c0360eb60e01b83528883600481838b5af19081156118df577fe6c2e264dfdacef76476a71b1eec2327a90b6fb27e3c5ee848b76623fdf795629661187a948b936118c1575b506118609293604051978897885216602087015234604087015260e0606087015260e0860191611f8f565b908660808501528760a085015283820360c0850152611c13565b0390a1803b15610ed957604483926040519485938492631dd319cb60e01b845233600485015260248401525af18015610595576118b5575080f35b6118be90611a6e565b80f35b61186093506118d9903d808e833e610a0a8183611a9c565b92611835565b6040513d8b823e3d90fd5b634e487b7160e01b87526011600452602487fd5b9050346101ef5760203660031901126101ef5760043563ffffffff60e01b81168091036103b55760209250630271189760e51b8114908115611942575b5015158152f35b6301ffc9a760e01b1490503861193b565b9181601f84011215610191578235916001600160401b038311610191576020838186019501011161019157565b602435906001600160401b038216820361019157565b604435906001600160401b038216820361019157565b606435906001600160a01b038216820361019157565b600435906001600160a01b038216820361019157565b602435906001600160a01b038216820361019157565b60c435906001600160a01b038216820361019157565b60a435906001600160a01b038216820361019157565b608435906001600160a01b038216820361019157565b35906001600160a01b038216820361019157565b60609060031901126101915760043590602435906044356001600160a01b03811681036101915790565b6001600160401b03811161031657604052565b60a081019081106001600160401b0382111761031657604052565b90601f801991011681019081106001600160401b0382111761031657604052565b6001600160401b03811161031657601f01601f191660200190565b81601f8201121561019157803590611aef82611abd565b92611afd6040519485611a9c565b8284526020838301011161019157816000926020809301838601378301015290565b91908201809211611b2c57565b634e487b7160e01b600052601160045260246000fd5b6001600160401b0381116103165760051b60200190565b81601f8201121561019157803591611b7083611b42565b92611b7e6040519485611a9c565b808452602092838086019260051b820101928311610191578301905b828210611ba8575050505090565b81358152908301908301611b9a565b9081526001600160a01b03918216602082015260408101929092529182166060820152608081019290925290911660a082015260c00190565b60005b838110611c035750506000910152565b8181015183820152602001611bf3565b90602091611c2c81518092818552858086019101611bf0565b601f01601f1916010190565b611c5c939260609260018060a01b0316825260208201528160408201520190611c13565b90565b60ff60005416611c6b57565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b15611caa57565b60405162461bcd60e51b81526020600482015260116024820152706475706c696361746520616374696f6e2160781b6044820152606490fd5b90611d22939291806000526006602052611d0560ff6040600020541615611ca3565b60005260066020526040600020600160ff19825416179055611d24565b565b91611d389260015460ff600254169061204d565b15611d3f57565b60405162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f20766572696679207369676e61747572652100000000006044820152606490fd5b805160208092019160005b828110611d9d575050505090565b835185529381019392810192600101611d8f565b6000198114611b2c5760010190565b8051821015611dd45760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b15611df157565b60405162461bcd60e51b81526020600482015260156024820152744e4654206e6f742077686974656c69737465643f2160581b6044820152606490fd5b6001600160a01b0391821681529116602082015260408101919091526001606082015260a06080820181905260009082015260c00190565b90611d22939291806000526007602052611e8860ff6040600020541615611ca3565b60005260076020526040600020600160ff19825416179055611d24565b60ff6000541615611eb257565b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b15611ef557565b60405162461bcd60e51b8152602060048201526014602482015273547820466565732069732072657175697265642160601b6044820152606490fd5b602081830312610191578051906001600160401b038211610191570181601f82011215610191578051611f6381611abd565b92611f716040519485611a9c565b8184526020828401011161019157611c5c9160208085019101611bf0565b908060209392818452848401376000828201840152601f01601f1916010190565b90815180825260208080930193019160005b828110611fd0575050505090565b835185529381019392810192600101611fc2565b96929361203f95946001600160401b03611c5c9a989461201c948b521660208a015260408901526101008060608a0152880190611c13565b60808701939093526001600160a01b031660a086015284820360c0860152611c13565b9160e0818403910152611c13565b70014551231950b75fc4402da1732fc9bebe19949390929190858310156121af576001600160a01b0385811696909590871515806121a6575b8061219d575b80612194575b156121565760405191602083019387855260ff60f81b8660f81b16604085015260418401526bffffffffffffffffffffffff199060601b1660618301526055825260808201928284106001600160401b038511176103165781908460405283519020958709810390808211611b2c5760209660009660ff60e0948160809916158a1461214e57601b905b88521660a08601528160c08601520991015282805260015afa1561214257600051161490565b6040513d6000823e3d90fd5b601c9061211c565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b50821515612092565b5084151561208c565b50851515612086565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea2646970667358221220f77535dde40b9765460c503a44da435ef4f648933357acacf9e05b1f1f51327364736f6c63430008110033";
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
        }];
        readonly name: "withdrawNftBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Minter;
}
export {};
