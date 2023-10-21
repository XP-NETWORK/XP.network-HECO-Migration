import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UserNFTStoreHedera, UserNFTStoreHederaInterface } from "../UserNFTStoreHedera";
declare type UserNFTStoreHederaConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UserNFTStoreHedera__factory extends ContractFactory {
    constructor(...args: UserNFTStoreHederaConstructorParams);
    deploy(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UserNFTStoreHedera>;
    getDeployTransaction(_noWhitelistUtils: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UserNFTStoreHedera;
    connect(signer: Signer): UserNFTStoreHedera__factory;
    static readonly bytecode = "0x60803461007a57601f612a2838819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b031981816000541617600055600154161760015560405161299290816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe61024080604052600436101561001457600080fd5b60003560e01c9081630b5d6cab14611d4d575080630e44263a14611d1657806318370d34146116af57806328815af31461167b5780633b3bff0f1461160c578063593d6e82146114ee5780637ad43629146113685780637c41ad2c146112f95780638f8d7f991461127457806390e704e51461049757806394dc2ed814610394578063af99c633146102ca578063d614cdb8146101ac5763f2c31ff4146100ba57600080fd5b3461019b57604060031936011261019b576000806100d6611e22565b61013f61014d6100e4611e45565b6040517ff2c31ff4000000000000000000000000000000000000000000000000000000006020820190815273ffffffffffffffffffffffffffffffffffffffff95861660248301529490911660448201529182906064820190565b03601f198101835282611f45565b5190826101675af161015d61279b565b90156101a05760408180518101031261019b578061018a604061018360208295016127cb565b920161208c565b82519160030b825215156020820152f35b600080fd5b5060406015600061018a565b3461019b57602060031936011261019b576000806101c8611e22565b6101d061269f565b5060405173ffffffffffffffffffffffffffffffffffffffff60208201927fd614cdb80000000000000000000000000000000000000000000000000000000084521660248201526024815261022481611f29565b5190826101675af161023461279b565b9061023d61269f565b90156102bb57508051810160808282031261019b576102b9610273836040602061026a81608098016127cb565b9501910161285e565b6040519260030b835260208301906040908163ffffffff9182815116855273ffffffffffffffffffffffffffffffffffffffff6020820151166020860152015116910152565bf35b608091506102b9601591610273565b3461019b57604060031936011261019b576000806102e6611e22565b61013f61034f6102f4611e45565b6040517faf99c633000000000000000000000000000000000000000000000000000000006020820190815273ffffffffffffffffffffffffffffffffffffffff95861660248301529490911660448201529182906064820190565b5190826101675af161035f61279b565b901561038a5760208180518101031261019b5761037f60208092016127cb565b6040519060030b8152f35b506020601561037f565b3461019b5760c060031936011261019b576103ad611e45565b6044359073ffffffffffffffffffffffffffffffffffffffff90606435828116810361019b5760a435928316830361019b57604051937f0a754de600000000000000000000000000000000000000000000000000000000855260208560048160008560601c5af194851561048b57600095610456575b5061043d856016610449971490811561044b575b50612001565b60843592600435612186565b005b60c291501487610437565b94506020853d8211610483575b8161047060209383611f45565b8101031261019b5793519361043d610423565b3d9150610463565b6040513d6000823e3d90fd5b60a060031936011261019b576104ab611e22565b6044359067ffffffffffffffff8216820361019b5760643567ffffffffffffffff811161019b576104e0903690600401611f84565b9160843567ffffffffffffffff811161019b57610501903690600401611f84565b604051927f0a754de6000000000000000000000000000000000000000000000000000000008452602084600481600060243560601c5af193841561048b5760009461123e575b5061055f8460166000961490811561044b5750612001565b602073ffffffffffffffffffffffffffffffffffffffff8554166004604051809781937f7bcde4d80000000000000000000000000000000000000000000000000000000083525af193841561048b576000946111fb575b506105c76001600495151514612099565b602073ffffffffffffffffffffffffffffffffffffffff60005416604051958680927f28dc132d0000000000000000000000000000000000000000000000000000000082525afa93841561048b576000946111c7575b506106266126cf565b506040517f287e1da800000000000000000000000000000000000000000000000000000000602082015260248035606081901c918301919091526bffffffffffffffffffffffff1660070b60448201526000908190610688816064810161013f565b602081519101826101675af161069c61279b565b6080526106a76126cf565b90156111b7575060805190815182016101c0526040826101c051031261019b576106d3602083016127cb565b91604081015160c05267ffffffffffffffff60c0511161019b5760c0908151016101c051031261019b576040516102205261071061022051611f0d565b60c05160805101602081015160e05267ffffffffffffffff60e0511161019b576101209060e051016101c051031261019b576040519061074f82611e89565b60e05160c0516080510101602081015160a05267ffffffffffffffff60a0511161019b576101609060a051016101c051031261019b576040519461079286611e89565b60a05160e05160c05160805101010160208101519067ffffffffffffffff821161019b5760206107ca92816101c051019201016127d9565b865260a05160e05160c05160805101010160408101519067ffffffffffffffff821161019b57602061080492816101c051019201016127d9565b6020870152610823606060a05160e05160c0516080510101010161281e565b604087015260a05160e05160c05160805101010160808101519067ffffffffffffffff821161019b57602061086092816101c051019201016127d9565b606087015261087e60a0805160e05160c0516080510101010161208c565b608087015261089c60c060a05160e05182516080510101010161283f565b60a08701526108ba60e060a051815160c0516080510101010161208c565b60c087015260a05160e05160c051608051010101966101008801519767ffffffffffffffff891161019b5760206101c05101603f8a830101121561019b57886020910101516101e05261090f6101e051611fd8565b9861091d6040519a8b611f45565b6101e0518a5260208a01978960a05160e05160c0516080510101010160206101c0510160406101e05160051b8301011161019b57604001985b8a60a05160e05160c051608051010101019060406101e05160051b8301018b1015610aa7578a519067ffffffffffffffff821161019b576040601f198385016101c05103011261019b576040516109ac81611ed5565b83830160408101518252606001519367ffffffffffffffff851161019b5760a0601f1986868401016101c05103011261019b57604051906109ec82611ef1565b6109fc604087878401010161208c565b8252610a0e606087878401010161281e565b602083015260808686830101015167ffffffffffffffff811161019b57610a4590604060206101c0510191898986010101016127d9565b604083015260a08686830101015167ffffffffffffffff811161019b576020968796610a9393610a8660c09460408b6101c0510191868686010101016127d9565b606087015201010161281e565b608082015283820152815201990198610956565b5050929598509295989093965060e0820152610adb60206101c0510161012060a05160e05160c0516080510101010161285e565b6101008201528552604060e05160c0516080510101015167ffffffffffffffff8116810361019b576020860152610b1e606060e05160c05160805101010161208c565b6040860152610b38608060e05160c051825101010161208c565b6060860152610b5360a060e05160c05160805101010161208c565b608086015260e05160c05160805101019660c08801519767ffffffffffffffff891161019b5760206101c05101603f8a830101121561019b578860209101015161018052610ba361018051611fd8565b610bb06040519182611f45565b806101205261018051815260208101610120528860e05160c05160805101010160206101c05101604060a061018051028301011161019b576040015b604060a061018051028b60e05160c0516080510101010101811015610c905760a06020826101c05103011261019b5760a06040918251610c2b81611ef1565b610c348261284d565b8152610c426020830161281e565b6020820152610c5284830161208c565b84820152610c626060830161208c565b6060820152610c736080830161281e565b608082015261012051526020610120510161012052019050610bec565b5090919293949596975060a087015260e05160c05160805101019660e08801519767ffffffffffffffff891161019b5760206101c05101603f8a830101121561019b578860209101015161016052610cea61016051611fd8565b610cf76040519182611f45565b806101405261016051815260208101610140528860e05160c05160805101010160206101c05101604060c061016051028301011161019b576040015b604060c061016051028b60e05160c0516080510101010101811015610de85760c06020826101c05103011261019b5760c06040918251610d7281611f0d565b610d7b8261284d565b8152610d896020830161284d565b6020820152610d9984830161284d565b84820152610da96060830161284d565b6060820152610dba6080830161208c565b6080820152610dcb60a0830161281e565b60a082015261014051526020610140510161014052019050610d33565b5090919293949596975060c088015260e05160c05160805101016101008101516102005267ffffffffffffffff610200511161019b5760206101c05101603f61020051830101121561019b57602090610200510101516101a052610e4e6101a051611fd8565b96610e5c6040519889611f45565b87610100526101a051885260208801610100526102005160e05160c05160805101010160206101c05101604060c06101a051028301011161019b576040015b604060c06101a051026102005160e05160c0516080510101010101811015610f525760c06020826101c05103011261019b5760c090604051610edc81611f0d565b610ee58261284d565b8152610ef36020830161284d565b6020820152610f046040830161284d565b6040820152610f156060830161281e565b6060820152610f266080830161208c565b6080820152610f3760a0830161281e565b60a08201526101005152602061010051016101005201610e9b565b509091929394959660e082015260e05160c05160805101016101208101519067ffffffffffffffff821161019b576020610f9492816101c051019201016127d9565b6101008201526102205152610fb1604060c051608051010161283f565b6020610220510152610fcb606060c051608051010161281e565b6040610220510152610fe4608060c0518151010161283f565b606061022051015260c0516080510160a08101519067ffffffffffffffff821161019b57602061101c92816101c051019201016127d9565b608061022051015261103560c08051608051010161281e565b60a0610220510152601661022051915b60030b03611159577fa67c5186c697f2bbadb0b86a04669ed6318303bc6aa662b8148bd3c734298152956110ec9373ffffffffffffffffffffffffffffffffffffffff6110c260806110de9501519267ffffffffffffffff6040519a8b9a8b521660208a01523460408a01526101008060608b015289019061267a565b9260243560808901521660a087015285820360c087015261267a565b9083820360e085015261267a565b0390a161111e60166111186bffffffffffffffffffffffff6024351660070b303360243560601c6128a5565b14612121565b600080808073ffffffffffffffffffffffffffffffffffffffff600154168190341561114f575b3491f11561048b57005b6108fc9150611145565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4661696c656420746f2067657420746f6b656e20696e666f00000000000000006044820152fd5b6016601596939296959495611045565b9093506020813d6020116111f3575b816111e360209383611f45565b8101031261019b5751928561061d565b3d91506111d6565b93506020843d602011611236575b8161121660209383611f45565b8101031261019b576105c7600161122e60049661208c565b9550506105b6565b3d9150611209565b93506020843d60201161126c575b8161125960209383611f45565b8101031261019b5792519261055f610547565b3d915061124c565b3461019b57604060031936011261019b57600080611290611e22565b61013f61034f61129e611e45565b6040517f8f8d7f99000000000000000000000000000000000000000000000000000000006020820190815273ffffffffffffffffffffffffffffffffffffffff95861660248301529490911660448201529182906064820190565b3461019b57602060031936011261019b57600080611315611e22565b60405173ffffffffffffffffffffffffffffffffffffffff60208201927f7c41ad2c0000000000000000000000000000000000000000000000000000000084521660248201526024815261034f81611f29565b3461019b57604060031936011261019b576004358060070b80820361019b5761138f611e45565b90336000526002602052604060002073ffffffffffffffffffffffffffffffffffffffff8316908160005260205260406000209367ffffffffffffffff8116936113e9858760019160005201602052604060002054151590565b156114905760169361142493337fb07fa4a51e7b16a069203e783265a3ef2a613ec877f5c502ffd9694079204ac1600080a4339030906128a5565b036114325761044991612521565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4661696c656420746f207472616e7366657220746f6b656e00000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f596f7520646f6e74206f776e2074686973204e46542e000000000000000000006044820152fd5b3461019b57608060031936011261019b57611507611e22565b60607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc36011261019b5760405161153d81611f29565b63ffffffff91602435838116810361019b57825273ffffffffffffffffffffffffffffffffffffffff604435818116810361019b576020840152606435938416840361019b576115ff836000956040879601526040519260208401947f593d6e8200000000000000000000000000000000000000000000000000000000865216602484015260448301906040908163ffffffff9182815116855273ffffffffffffffffffffffffffffffffffffffff6020820151166020860152015116910152565b6084815261034f81611f0d565b3461019b57602060031936011261019b57600080611628611e22565b60405173ffffffffffffffffffffffffffffffffffffffff60208201927f3b3bff0f0000000000000000000000000000000000000000000000000000000084521660248201526024815261034f81611f29565b3461019b57600060031936011261019b57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b3461019b5760031960408136011261019b576116c9611e22565b9067ffffffffffffffff6024351161019b57610160906024353603011261019b57604051906116f782611e89565b6024356004013567ffffffffffffffff811161019b5761171f90600436916024350101611f84565b825260248035013567ffffffffffffffff811161019b5761174890600436916024350101611f84565b602083015261175b604460243501611e68565b60408301526064602435013567ffffffffffffffff811161019b5761178890600436916024350101611f84565b606083015261179b608460243501611fcb565b608083015260243560a40135600781900b900361019b5760a4602435013560a08301526117cc60c460243501611fcb565b60c083015260e4602435013567ffffffffffffffff811161019b57366023826024350101121561019b576004816024350101359061180982611fd8565b916118176040519384611f45565b80835260208301913660248360051b8382350101011161019b5760248181350101925b60248360051b8382350101018410611b6b575050505060e083015260607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefc6024353603011261019b5760405161188f81611f29565b61189e61010460243501611ff0565b81526118af61012460243501611e68565b60208201526118c361014460243501611ff0565b604082015261010083015273ffffffffffffffffffffffffffffffffffffffff604051917f18370d34000000000000000000000000000000000000000000000000000000006020840152166024820152604060448201526119c061196c611938845161016060648601526101c485019061267a565b60208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c85830301608486015261267a565b73ffffffffffffffffffffffffffffffffffffffff60408501511660a484015260608401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c8483030160c485015261267a565b916080810151151560e483015260a081015160070b61010483015260c0810151151561012483015260e0810151927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c83820301610144840152835180825260208201916020808360051b8301019601926000915b838310611aa157610100860151805163ffffffff9081166101648a0152602082015173ffffffffffffffffffffffffffffffffffffffff166101848a0152604090910151166101a488015260008088611a8d818c61013f565b602081519101826101675af161035f61279b565b909192939660208082601f198560019503018652818b518051835201519060408382015281511515604082015273ffffffffffffffffffffffffffffffffffffffff8383015116606082015260c073ffffffffffffffffffffffffffffffffffffffff6080611b55611b21604087015160a08488015260e087019061267a565b60608701517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08783030160a088015261267a565b9401511691015299019301930191939290611a34565b67ffffffffffffffff84351161019b5760407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc85358460243501013603011261019b57604051611bba81611ed5565b60248035840186350190810135825267ffffffffffffffff6044909101351161019b5760a0602435840186350160448101350136037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc011261019b57604051611c2281611ef1565b611c3a60248035860188350160448101350101611fcb565b8152611c5460448735602435870101818101350101611e68565b602082015267ffffffffffffffff6024358501873501604481013501606401351161019b57611c983660248035870189350160448101350160648101350101611f84565b604082015267ffffffffffffffff6024358501873501604481013501608401351161019b576024926020928392611ce336873589018b35016044810135016084810135018801611f84565b6060820152611d00863588018a350160448101350160a401611e68565b608082015283820152815201940193905061183a565b3461019b57602060031936011261019b5760408051600435606081901c82526bffffffffffffffffffffffff1660070b6020820152f35b3461019b57604060031936011261019b57611d66611e22565b90611d6f611e45565b73ffffffffffffffffffffffffffffffffffffffff8093166000526020926002845260406000209116600052825260406000208054808352838301908192600052846000209060005b86828210611e0e578686611dce82880383611f45565b604051928392818401908285525180915260408401929160005b828110611df757505050500390f35b835185528695509381019392810192600101611de8565b835485529093019260019283019201611db8565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361019b57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361019b57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361019b57565b610120810190811067ffffffffffffffff821117611ea657604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff821117611ea657604052565b60a0810190811067ffffffffffffffff821117611ea657604052565b60c0810190811067ffffffffffffffff821117611ea657604052565b6060810190811067ffffffffffffffff821117611ea657604052565b90601f601f19910116810190811067ffffffffffffffff821117611ea657604052565b67ffffffffffffffff8111611ea657601f01601f191660200190565b81601f8201121561019b57803590611f9b82611f68565b92611fa96040519485611f45565b8284526020838301011161019b57816000926020809301838601378301015290565b3590811515820361019b57565b67ffffffffffffffff8111611ea65760051b60200190565b359063ffffffff8216820361019b57565b1561200857565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f4661696c656420746f206173736f636961746520746f6b656e20746f2074686560448201527f206163636f756e740000000000000000000000000000000000000000000000006064820152fd5b5190811515820361019b57565b156120a057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f556e61626c6520746f20696e6372656d656e7420616374696f6e2069640000006044820152fd5b60005b8381106121115750506000910152565b8181015183820152602001612101565b1561212857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c656420746f207472616e7366657220746f6b656e2e000000000000006044820152fd5b9093929192600095869173ffffffffffffffffffffffffffffffffffffffff9081845416946040958651907f7bcde4d80000000000000000000000000000000000000000000000000000000082528160048160209e8f945af190811561243d5786916123fe575b5060016121fc91151514612099565b8551928a8401468152308886015282606086015281808c16998a60808801528b60a08801521660c086015260c0855260e0850167ffffffffffffffff95808210878311176123d157603461229891838c526101008101947f556e667265657a65457263373231416374696f6e0000000000000000000000008652612288825180926101148501906120fe565b8101036014810184520182611f45565b5190208187541691823b156123cd576084928895949286928b51998a9788967f06cd4d0d0000000000000000000000000000000000000000000000000000000088526004880152602487015216604485015260648401525af180156123c357612387575b5050906123216bffffffffffffffffffffffff8560601c951660070b809630876128a5565b9560b8871461233e57505050505050601661233c9114612121565b565b85965094612382918495967f44b4992efa0f4a2ef0ab6c12e382a8912e85b95be1d0c1ef675f3ec8eb4c072f9585526002815281852090886000525260002061248e565b5080a4565b811161239657825238806122fc565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b84513d85823e3d90fd5b8780fd5b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b90508a81813d8311612436575b6124158183611f45565b8101031261243257600161242b6121fc9261208c565b91506121ed565b8580fd5b503d61240b565b87513d88823e3d90fd5b805482101561245f5760005260206000200190600090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082815260018201602052604090205461251a5780549068010000000000000000821015611ea657826125036124cc846001809601855584612447565b819391549060031b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811b9283911b169119161790565b905580549260005201602052604060002055600190565b5050600090565b90600182019060009281845282602052604084205490811515600014612673577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9182810181811161264657825490848201918211612619578082036125e4575b505050805480156125b75782019161259a8383612447565b909182549160031b1b191690555582526020526040812055600190565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6126046125f46124cc9386612447565b90549060031b1c92839286612447565b90558652846020526040862055388080612582565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024877f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b5050505090565b90601f19601f602093612698815180928187528780880191016120fe565b0116010190565b604051906060820182811067ffffffffffffffff821117611ea65760405260006040838281528260208201520152565b6040519060c0820182811067ffffffffffffffff821117611ea6578060405260a0836126fa83611e89565b6040519261270784611e89565b60609081855281602086015260008581604081980152838082015281608082015281868201528160c08201528360e082015261274161269f565b90610100918282015283528160e086015284015284610120840152846101408401528161016084015281610180840152816101a0840152816101c08401528252836020830152836040830152838183015260808201520152565b3d156127c6573d906127ac82611f68565b916127ba6040519384611f45565b82523d6000602084013e565b606090565b51908160030b820361019b57565b81601f8201121561019b5780516127ef81611f68565b926127fd6040519485611f45565b8184526020828401011161019b5761281b91602080850191016120fe565b90565b519073ffffffffffffffffffffffffffffffffffffffff8216820361019b57565b51908160070b820361019b57565b519063ffffffff8216820361019b57565b919082606091031261019b5760405161287681611f29565b60406128a08183956128878161284d565b85526128956020820161281e565b60208601520161284d565b910152565b92906040519260208401947f5cfc901100000000000000000000000000000000000000000000000000000000865273ffffffffffffffffffffffffffffffffffffffff9283809216602487015216604485015216606483015260070b60848201526084815261291381611f0d565b6000809281925190826101675af19061292a61279b565b9115612953576020828051810103126129505750602061294a91016127cb565b60030b90565b80fd5b5050601561294a56fea26469706673582212201133d95ff27e415d8922be05a2db6860f7d5e1f1382fa746ab407e025558475964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_noWhitelistUtils";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int64";
            readonly name: "serial";
            readonly type: "int64";
        }];
        readonly name: "ClaimCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "int64";
            readonly name: "serial";
            readonly type: "int64";
        }];
        readonly name: "ClaimRemoved";
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
        readonly inputs: readonly [{
            readonly internalType: "int64";
            readonly name: "serialNum";
            readonly type: "int64";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "claimNft";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "data";
            readonly type: "uint256";
        }];
        readonly name: "decodeHts";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "int64";
            readonly name: "";
            readonly type: "int64";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
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
            readonly name: "claimer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getClaimableNfts";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getTokenExpiryInfo";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "responseCode";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "second";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "autoRenewAccount";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "autoRenewPeriod";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IHederaTokenService.Expiry";
            readonly name: "expiryInfo";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantTokenKyc";
        readonly outputs: readonly [{
            readonly internalType: "int64";
            readonly name: "responseCode";
            readonly type: "int64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isKyc";
        readonly outputs: readonly [{
            readonly internalType: "int64";
            readonly name: "responseCode";
            readonly type: "int64";
        }, {
            readonly internalType: "bool";
            readonly name: "kycGranted";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "noWhitelistUtils";
        readonly outputs: readonly [{
            readonly internalType: "contract INoWhitelistUtils";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "pauseToken";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "responseCode";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeTokenKyc";
        readonly outputs: readonly [{
            readonly internalType: "int64";
            readonly name: "responseCode";
            readonly type: "int64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "unpauseToken";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "responseCode";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "second";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "autoRenewAccount";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "autoRenewPeriod";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IHederaTokenService.Expiry";
            readonly name: "expiryInfo";
            readonly type: "tuple";
        }];
        readonly name: "updateTokenExpiryInfo";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "responseCode";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "memo";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "tokenSupplyType";
                readonly type: "bool";
            }, {
                readonly internalType: "int64";
                readonly name: "maxSupply";
                readonly type: "int64";
            }, {
                readonly internalType: "bool";
                readonly name: "freezeDefault";
                readonly type: "bool";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "keyType";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "inheritAccountKey";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "address";
                        readonly name: "contractId";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "ed25519";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "ECDSA_secp256k1";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "delegatableContractId";
                        readonly type: "address";
                    }];
                    readonly internalType: "struct IHederaTokenService.KeyValue";
                    readonly name: "key";
                    readonly type: "tuple";
                }];
                readonly internalType: "struct IHederaTokenService.TokenKey[]";
                readonly name: "tokenKeys";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "second";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "address";
                    readonly name: "autoRenewAccount";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "autoRenewPeriod";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct IHederaTokenService.Expiry";
                readonly name: "expiry";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHederaTokenService.HederaToken";
            readonly name: "tokenInfo";
            readonly type: "tuple";
        }];
        readonly name: "updateTokenInfo";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "responseCode";
            readonly type: "int256";
        }];
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
            readonly internalType: "address";
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
    }];
    static createInterface(): UserNFTStoreHederaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UserNFTStoreHedera;
}
export {};
