/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { BuilderFiV1, BuilderFiV1Interface } from "../../../contracts/BuilderFiSharesV1.sol/BuilderFiV1";

const _abi = [
  {
    inputs: [],
    name: "CannotSellLastShare",
    type: "error",
  },
  {
    inputs: [],
    name: "FundsTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientPayment",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientShares",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlySharesSubjectCanBuyFirstShare",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "subject",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolEthAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "subjectEthAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hodlerEthAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "Trade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
    ],
    name: "buyShares",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
    ],
    name: "getAtMostTopTenSupporters",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
    ],
    name: "getBuyPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
    ],
    name: "getBuyPriceAfterFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getSellPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getSellPriceAfterFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hodlerFeePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeDestination",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sharesSubject",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sellShares",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeDestination",
        type: "address",
      },
    ],
    name: "setFeeDestination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "setHodlerFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "setProtocolFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "setSubjectFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sharesBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sharesSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "subjectFeePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "supporterAddressArray",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "supporterKeysArray",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supporterNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6116228061007e6000396000f3fe60806040526004361061018b5760003560e01c80638da5cb5b116100d6578063cedc72771161007f578063f2fde38b11610059578063f2fde38b14610456578063f9931be014610476578063fbe53234146104a357600080fd5b8063cedc727714610400578063d6e6eb9f14610420578063e5aef9f81461043657600080fd5b8063a4983421116100b0578063a49834211461039f578063b51d0534146103bf578063c8ee425d146103d257600080fd5b80638da5cb5b14610341578063932e8dc61461035f5780639ae717811461037f57600080fd5b80635a8a764e116101385780637da4757f116101125780637da4757f146102d35780637f33a1c9146102f35780638546e75f1461032b57600080fd5b80635a8a764e1461027e5780635cf4ee911461029e578063715018a6146102be57600080fd5b80633365dd94116101695780633365dd94146102115780634c85b425146102335780634ce7957c1461024657600080fd5b8063020235ff146101905780632267a89c146101db57806324dc441d146101fb575b600080fd5b34801561019c57600080fd5b506101c86101ab366004611444565b600860209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b3480156101e757600080fd5b506101c86101f6366004611477565b6104c3565b34801561020757600080fd5b506101c860035481565b34801561021d57600080fd5b5061023161022c3660046114a1565b61056e565b005b6102316102413660046114ba565b61057b565b34801561025257600080fd5b50600154610266906001600160a01b031681565b6040516001600160a01b0390911681526020016101d2565b34801561028a57600080fd5b506102316102993660046114a1565b610973565b3480156102aa57600080fd5b506101c86102b93660046114d5565b610980565b3480156102ca57600080fd5b50610231610aa1565b3480156102df57600080fd5b506102666102ee366004611477565b610ab5565b3480156102ff57600080fd5b506101c861030e366004611444565b600560209081526000928352604080842090915290825290205481565b34801561033757600080fd5b506101c860045481565b34801561034d57600080fd5b506000546001600160a01b0316610266565b34801561036b57600080fd5b506101c861037a366004611477565b610aed565b34801561038b57600080fd5b506101c861039a366004611477565b610b1e565b3480156103ab57600080fd5b506102316103ba3660046114a1565b610b53565b6102316103cd366004611477565b610b60565b3480156103de57600080fd5b506103f26103ed3660046114ba565b610f43565b6040516101d29291906114f7565b34801561040c57600080fd5b506101c861041b3660046114ba565b611075565b34801561042c57600080fd5b506101c860025481565b34801561044257600080fd5b506101c86104513660046114ba565b611099565b34801561046257600080fd5b506102316104713660046114ba565b611136565b34801561048257600080fd5b506101c86104913660046114ba565b60096020526000908152604090205481565b3480156104af57600080fd5b506102316104be3660046114ba565b6111cb565b6000806104d08484610b1e565b90506000670de0b6b3a7640000600254836104eb919061155e565b6104f59190611575565b90506000670de0b6b3a764000060035484610510919061155e565b61051a9190611575565b90506000670de0b6b3a764000060045485610535919061155e565b61053f9190611575565b9050808261054d8587611597565b6105579190611597565b6105619190611597565b9450505050505b92915050565b610576611202565b600455565b6001600160a01b038116600090815260096020526040902054801580156105ab57506001600160a01b0382163314155b156105e2576040517f80843b1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006105ef826001610980565b90506000670de0b6b3a76400006002548361060a919061155e565b6106149190611575565b90506000670de0b6b3a76400006003548461062f919061155e565b6106399190611575565b90506000670de0b6b3a764000060045485610654919061155e565b61065e9190611575565b9050808261066c85876115aa565b61067691906115aa565b61068091906115aa565b3410156106b9576040517fcd1c886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038616600090815260086020908152604080832033845290915281208054918291906106eb836115bd565b90915550506001600160a01b0387166000908152600960205260408120805491610714836115bd565b909155507f952ff8d90add9fdeaeb478102d54441cf0cc0cbe53b1d99e51f747cdc8379e54905033886001808989898961074e8f866115aa565b604080516001600160a01b039a8b168152989099166020890152951515878901526060870194909452608086019290925260a085015260c084015260e08301526101008201529051908190036101200190a16001546040516000916001600160a01b03169086908381818185875af1925050503d80600081146107ed576040519150601f19603f3d011682016040523d82523d6000602084013e6107f2565b606091505b505090506000886001600160a01b03168560405160006040518083038185875af1925050503d8060008114610843576040519150601f19603f3d011682016040523d82523d6000602084013e610848565b606091505b5050905060006108588a8661125c565b90508280156108645750815b801561086d5750805b61088a57604051634a66f90360e01b815260040160405180910390fd5b8360000361090f576001600160a01b038a166000818152600660209081526040808320805460058452828520338087529085528386208290556001808301845592865284862090910182905594845260078352908320805491820181558352912001805473ffffffffffffffffffffffffffffffffffffffff19169091179055610967565b6001600160a01b038a16600090815260066020908152604080832060058352818420338552909252909120548154811061094b5761094b6115d6565b60009182526020822001805491610961836115bd565b91905055505b50505050505050505050565b61097b611202565b600355565b60008083156109db576006610996600186611597565b6109a190600261155e565b6109ac9060016115aa565b856109b8600182611597565b6109c2919061155e565b6109cc919061155e565b6109d69190611575565b6109de565b60005b90506000841580156109f05750836001145b610a655760066001610a0286886115aa565b610a0c9190611597565b610a1790600261155e565b610a229060016115aa565b610a2c86886115aa565b6001610a38888a6115aa565b610a429190611597565b610a4c919061155e565b610a56919061155e565b610a609190611575565b610a68565b60005b90506000610a768383611597565b9050613e80610a8d82670de0b6b3a764000061155e565b610a979190611575565b9695505050505050565b610aa9611202565b610ab360006113cb565b565b60076020528160005260406000208181548110610ad157600080fd5b6000918252602090912001546001600160a01b03169150829050565b60066020528160005260406000208181548110610b0957600080fd5b90600052602060002001600091509150505481565b6001600160a01b038216600090815260096020526040812054610b4c90610b46908490611597565b83610980565b9392505050565b610b5b611202565b600255565b6001600160a01b038216600090815260096020526040902054818111610bb2576040517fb4abda3900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166000908152600860209081526040808320338452909152902054821115610c0f576040517f3999656700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610c24610c1e8484611597565b84610980565b90506000670de0b6b3a764000060025483610c3f919061155e565b610c499190611575565b90506000670de0b6b3a764000060035484610c64919061155e565b610c6e9190611575565b90506000670de0b6b3a764000060045485610c89919061155e565b610c939190611575565b6001600160a01b03881660009081526006602090815260408083206005835281842033855290925290912054815492935088928110610cd457610cd46115d6565b906000526020600020016000828254610ced9190611597565b90915550506001600160a01b038716600090815260086020908152604080832033845290915281208054889290610d25908490611597565b90915550610d3590508686611597565b6001600160a01b0388166000908152600960205260408120919091557f952ff8d90add9fdeaeb478102d54441cf0cc0cbe53b1d99e51f747cdc8379e5490339089908988888888610d86858f611597565b604080516001600160a01b039a8b168152989099166020890152951515878901526060870194909452608086019290925260a085015260c084015260e08301526101008201529051908190036101200190a16000338284610de78789611597565b610df19190611597565b610dfb9190611597565b604051600081818185875af1925050503d8060008114610e37576040519150601f19603f3d011682016040523d82523d6000602084013e610e3c565b606091505b50506001546040519192506000916001600160a01b039091169086908381818185875af1925050503d8060008114610e90576040519150601f19603f3d011682016040523d82523d6000602084013e610e95565b606091505b505090506000896001600160a01b03168560405160006040518083038185875af1925050503d8060008114610ee6576040519150601f19603f3d011682016040523d82523d6000602084013e610eeb565b606091505b505090506000610efb8b8661125c565b9050838015610f075750825b8015610f105750815b8015610f195750805b610f3657604051634a66f90360e01b815260040160405180910390fd5b5050505050505050505050565b60408051600a8082526101608201909252606091600091829160208201610140803683375050506001600160a01b03851660009081526006602052604081205491925090815b81811015611069576001600160a01b0387166000908152600660205260409020805482908110610fbb57610fbb6115d6565b906000526020600020015460001461104d576001600160a01b0387166000908152600760205260409020805482908110610ff757610ff76115d6565b9060005260206000200160009054906101000a90046001600160a01b0316848481518110611027576110276115d6565b6001600160a01b039092166020928302919091019091015282611049816115bd565b9350505b600983118061105d57506103e781115b61106957600101610f89565b50919590945092505050565b6001600160a01b038116600090815260096020526040812054610568906001610980565b6000806110a583611075565b90506000670de0b6b3a7640000600254836110c0919061155e565b6110ca9190611575565b90506000670de0b6b3a7640000600354846110e5919061155e565b6110ef9190611575565b90506000670de0b6b3a76400006004548561110a919061155e565b6111149190611575565b9050808261112285876115aa565b61112c91906115aa565b610a9791906115aa565b61113e611202565b6001600160a01b0381166111bf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6111c8816113cb565b50565b6111d3611202565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610ab35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016111b6565b600080600061126a85610f43565b91509150806000036112f0576001546040516000916001600160a01b03169086908381818185875af1925050503d80600081146112c3576040519150601f19603f3d011682016040523d82523d6000602084013e6112c8565b606091505b50509050806112ea57604051634a66f90360e01b815260040160405180910390fd5b506113c0565b6000670de0b6b3a764000082611306878361155e565b6113109190611575565b61131a9190611575565b905060005b828110156113bd57600084828151811061133b5761133b6115d6565b60200260200101516001600160a01b03168360405160006040518083038185875af1925050503d806000811461138d576040519150601f19603f3d011682016040523d82523d6000602084013e611392565b606091505b50509050806113b457604051634a66f90360e01b815260040160405180910390fd5b5060010161131f565b50505b506001949350505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461143f57600080fd5b919050565b6000806040838503121561145757600080fd5b61146083611428565b915061146e60208401611428565b90509250929050565b6000806040838503121561148a57600080fd5b61149383611428565b946020939093013593505050565b6000602082840312156114b357600080fd5b5035919050565b6000602082840312156114cc57600080fd5b610b4c82611428565b600080604083850312156114e857600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b828110156115395781516001600160a01b031684529284019290840190600101611514565b50505092019290925292915050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761056857610568611548565b60008261159257634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561056857610568611548565b8082018082111561056857610568611548565b6000600182016115cf576115cf611548565b5060010190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220c2c31fac99339a7b50e470219e2bc8e99b036d6cc035fdcc85b1d2684d86a99664736f6c63430008130033";

type BuilderFiV1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BuilderFiV1ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class BuilderFiV1__factory extends ContractFactory {
  constructor(...args: BuilderFiV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BuilderFiV1> {
    return super.deploy(overrides || {}) as Promise<BuilderFiV1>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BuilderFiV1 {
    return super.attach(address) as BuilderFiV1;
  }
  override connect(signer: Signer): BuilderFiV1__factory {
    return super.connect(signer) as BuilderFiV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuilderFiV1Interface {
    return new utils.Interface(_abi) as BuilderFiV1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BuilderFiV1 {
    return new Contract(address, _abi, signerOrProvider) as BuilderFiV1;
  }
}
