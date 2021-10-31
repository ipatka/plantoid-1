/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RemixNft } from "./RemixNft";

export class RemixNftFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(uri_: string, overrides?: Overrides): Promise<RemixNft> {
    return super.deploy(uri_, overrides || {}) as Promise<RemixNft>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): RemixNft {
    return super.attach(address) as RemixNft;
  }
  connect(signer: Signer): RemixNftFactory {
    return super.connect(signer) as RemixNftFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RemixNft {
    return new Contract(address, _abi, signerOrProvider) as RemixNft;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasBeenMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_licensor",
        type: "address",
      },
    ],
    name: "mintLicense",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "_remixTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_licenseTokens",
        type: "address[]",
      },
    ],
    name: "mintPrimary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintRemix",
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
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "signatureUsed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200221238038062002212833981016040819052620000349162000107565b80620000408162000048565b505062000236565b80516200005d90600290602084019062000061565b5050565b8280546200006f90620001e3565b90600052602060002090601f016020900481019282620000935760008555620000de565b82601f10620000ae57805160ff1916838001178555620000de565b82800160010185558215620000de579182015b82811115620000de578251825591602001919060010190620000c1565b50620000ec929150620000f0565b5090565b5b80821115620000ec5760008155600101620000f1565b600060208083850312156200011b57600080fd5b82516001600160401b03808211156200013357600080fd5b818501915085601f8301126200014857600080fd5b8151818111156200015d576200015d62000220565b604051601f8201601f19908116603f0116810190838211818310171562000188576200018862000220565b816040528281528886848701011115620001a157600080fd5b600093505b82841015620001c55784840186015181850187015292850192620001a6565b82841115620001d75760008684830101525b98975050505050505050565b600181811c90821680620001f857607f821691505b602082108114156200021a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611fcc80620002466000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c8063bc197c8111610097578063e307fb3111610066578063e307fb3114610228578063e985e9c51461024b578063f23a6e6114610287578063f242432a146102a657600080fd5b8063bc197c81146101bd578063c52b8e20146101f5578063d6a9544514610202578063e20d2f151461021557600080fd5b80632eb2c2d6116100d35780632eb2c2d614610162578063312f2818146101775780634e1273f41461018a578063a22cb465146101aa57600080fd5b8062fdd58e146100f957806301ffc9a71461011f5780630e89341c14610142575b600080fd5b61010c610107366004611998565b6102b9565b6040519081526020015b60405180910390f35b61013261012d366004611a3f565b610350565b6040519015158152602001610116565b610155610150366004611a26565b6103b1565b6040516101169190611cd9565b61017561017036600461184d565b610445565b005b610175610185366004611a79565b6104dc565b61019d6101983660046119c2565b610719565b6040516101169190611c98565b6101756101b836600461195c565b610843565b6101dc6101cb36600461184d565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610116565b6003546101329060ff1681565b610175610210366004611a26565b61091a565b610175610223366004611b18565b610939565b610132610236366004611a26565b60046020526000908152604090205460ff1681565b61013261025936600461181a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101dc6102953660046118f7565b63f23a6e6160e01b95945050505050565b6101756102b43660046118f7565b610a7f565b60006001600160a01b03831661032a5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216630271189760e51b148061038157506001600160e01b03198216636cdb3d1360e11b145b8061039c57506001600160e01b031982166303a24d0760e21b145b806103ab57506103ab82610b06565b92915050565b6060600280546103c090611dff565b80601f01602080910402602001604051908101604052809291908181526020018280546103ec90611dff565b80156104395780601f1061040e57610100808354040283529160200191610439565b820191906000526020600020905b81548152906001019060200180831161041c57829003601f168201915b50505050509050919050565b6001600160a01b03851633148061046157506104618533610259565b6104c85760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610321565b6104d58585858585610b2b565b5050505050565b60035460ff161561052f5760405162461bcd60e51b815260206004820152601c60248201527f7072696d61727920746f6b656e20616c7265616479206d696e746564000000006044820152606401610321565b60005b81518110156106065781818151811061054d5761054d611eae565b60200260200101516001600160a01b031663f242432a333060028081111561057757610577611e98565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526001606482015260a06084820152600060a482015260c401600060405180830381600087803b1580156105db57600080fd5b505af11580156105ef573d6000803e3d6000fd5b5050505080806105fe90611e67565b915050610532565b5060005b82518110156106df5782818151811061062557610625611eae565b60200260200101516001600160a01b031663f242432a33306001600281111561065057610650611e98565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526001606482015260a06084820152600060a482015260c401600060405180830381600087803b1580156106b457600080fd5b505af11580156106c8573d6000803e3d6000fd5b5050505080806106d790611e67565b91505061060a565b506106e983610d08565b6003805460ff191660011790556107143360005b600160405180602001604052806000815250610d1f565b505050565b6060815183511461077e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610321565b6000835167ffffffffffffffff81111561079a5761079a611ec4565b6040519080825280602002602001820160405280156107c3578160200160208202803683370190505b50905060005b845181101561083b5761080e8582815181106107e7576107e7611eae565b602002602001015185838151811061080157610801611eae565b60200260200101516102b9565b82828151811061082057610820611eae565b602090810291909101015261083481611e67565b90506107c9565b509392505050565b336001600160a01b03831614156108ae5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610321565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6109363360018360405180602001604052806000815250610d1f565b50565b600083333060405160200161097793929190928352606091821b6bffffffffffffffffffffffff199081166020850152911b16603482015260480190565b60408051601f1981840301815291815281516020928301206000818152600490935291205490915060ff16156109ef5760405162461bcd60e51b815260206004820152601660248201527f7369676e617475726520616c72656164792075736564000000000000000000006044820152606401610321565b6000818152600460205260408120805460ff19166001179055610a139083906102b9565b600114610a625760405162461bcd60e51b815260206004820181905260248201527f7369676e6174757265206e6f7420697373756564206279206c6963656e736f726044820152606401610321565b610a6d818484610e29565b50610a793360026106fd565b50505050565b6001600160a01b038516331480610a9b5750610a9b8533610259565b610af95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b6064820152608401610321565b6104d58585858585610ea8565b60006001600160e01b03198216630271189760e51b14806103ab57506103ab82610fc5565b8151835114610b8d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b6064820152608401610321565b6001600160a01b038416610bb35760405162461bcd60e51b815260040161032190611d34565b3360005b8451811015610c9a576000858281518110610bd457610bd4611eae565b602002602001015190506000858381518110610bf257610bf2611eae565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610c425760405162461bcd60e51b815260040161032190611d79565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610c7f908490611de7565b9250508190555050505080610c9390611e67565b9050610bb7565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610cea929190611cab565b60405180910390a4610d00818787878787611015565b505050505050565b8051610d1b9060029060208401906115f8565b5050565b6001600160a01b038416610d7f5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610321565b33610d9981600087610d9088611180565b6104d588611180565b6000848152602081815260408083206001600160a01b038916845290915281208054859290610dc9908490611de7565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46104d5816000878787876111cb565b6000816001600160a01b0316610e9684610e90876040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90611295565b6001600160a01b031614949350505050565b6001600160a01b038416610ece5760405162461bcd60e51b815260040161032190611d34565b33610ede818787610d9088611180565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610f1f5760405162461bcd60e51b815260040161032190611d79565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610f5c908490611de7565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610fbc8288888888886111cb565b50505050505050565b60006001600160e01b03198216636cdb3d1360e11b1480610ff657506001600160e01b031982166303a24d0760e21b145b806103ab57506301ffc9a760e01b6001600160e01b03198316146103ab565b6001600160a01b0384163b15610d005760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906110599089908990889088908890600401611bf7565b602060405180830381600087803b15801561107357600080fd5b505af19250505080156110a3575060408051601f3d908101601f191682019092526110a091810190611a5c565b60015b611150576110af611eda565b806308c379a014156110e957506110c4611ef6565b806110cf57506110eb565b8060405162461bcd60e51b81526004016103219190611cd9565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610321565b6001600160e01b0319811663bc197c8160e01b14610fbc5760405162461bcd60e51b815260040161032190611cec565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106111ba576111ba611eae565b602090810291909101015292915050565b6001600160a01b0384163b15610d005760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061120f9089908990889088908890600401611c55565b602060405180830381600087803b15801561122957600080fd5b505af1925050508015611259575060408051601f3d908101601f1916820190925261125691810190611a5c565b60015b611265576110af611eda565b6001600160e01b0319811663f23a6e6160e01b14610fbc5760405162461bcd60e51b815260040161032190611cec565b60008060006112a485856112b1565b9150915061083b81611321565b6000808251604114156112e85760208301516040840151606085015160001a6112dc878285856114dc565b9450945050505061131a565b82516040141561131257602083015160408401516113078683836115c9565b93509350505061131a565b506000905060025b9250929050565b600081600481111561133557611335611e98565b141561133e5750565b600181600481111561135257611352611e98565b14156113a05760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610321565b60028160048111156113b4576113b4611e98565b14156114025760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610321565b600381600481111561141657611416611e98565b141561146f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610321565b600481600481111561148357611483611e98565b14156109365760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610321565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561151357506000905060036115c0565b8460ff16601b1415801561152b57508460ff16601c14155b1561153c57506000905060046115c0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611590573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166115b9576000600192509250506115c0565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b016115ea878288856114dc565b935093505050935093915050565b82805461160490611dff565b90600052602060002090601f016020900481019282611626576000855561166c565b82601f1061163f57805160ff191683800117855561166c565b8280016001018555821561166c579182015b8281111561166c578251825591602001919060010190611651565b5061167892915061167c565b5090565b5b80821115611678576000815560010161167d565b600067ffffffffffffffff8311156116ab576116ab611ec4565b6040516116c2601f8501601f191660200182611e3a565b8091508381528484840111156116d757600080fd5b83836020830137600060208583010152509392505050565b80356001600160a01b038116811461170657600080fd5b919050565b600082601f83011261171c57600080fd5b8135602061172982611dc3565b6040516117368282611e3a565b8381528281019150858301600585901b8701840188101561175657600080fd5b60005b8581101561177c5761176a826116ef565b84529284019290840190600101611759565b5090979650505050505050565b600082601f83011261179a57600080fd5b813560206117a782611dc3565b6040516117b48282611e3a565b8381528281019150858301600585901b870184018810156117d457600080fd5b60005b8581101561177c578135845292840192908401906001016117d7565b600082601f83011261180457600080fd5b61181383833560208501611691565b9392505050565b6000806040838503121561182d57600080fd5b611836836116ef565b9150611844602084016116ef565b90509250929050565b600080600080600060a0868803121561186557600080fd5b61186e866116ef565b945061187c602087016116ef565b9350604086013567ffffffffffffffff8082111561189957600080fd5b6118a589838a01611789565b945060608801359150808211156118bb57600080fd5b6118c789838a01611789565b935060808801359150808211156118dd57600080fd5b506118ea888289016117f3565b9150509295509295909350565b600080600080600060a0868803121561190f57600080fd5b611918866116ef565b9450611926602087016116ef565b93506040860135925060608601359150608086013567ffffffffffffffff81111561195057600080fd5b6118ea888289016117f3565b6000806040838503121561196f57600080fd5b611978836116ef565b91506020830135801515811461198d57600080fd5b809150509250929050565b600080604083850312156119ab57600080fd5b6119b4836116ef565b946020939093013593505050565b600080604083850312156119d557600080fd5b823567ffffffffffffffff808211156119ed57600080fd5b6119f98683870161170b565b93506020850135915080821115611a0f57600080fd5b50611a1c85828601611789565b9150509250929050565b600060208284031215611a3857600080fd5b5035919050565b600060208284031215611a5157600080fd5b813561181381611f80565b600060208284031215611a6e57600080fd5b815161181381611f80565b600080600060608486031215611a8e57600080fd5b833567ffffffffffffffff80821115611aa657600080fd5b818601915086601f830112611aba57600080fd5b611ac987833560208501611691565b94506020860135915080821115611adf57600080fd5b611aeb8783880161170b565b93506040860135915080821115611b0157600080fd5b50611b0e8682870161170b565b9150509250925092565b600080600060608486031215611b2d57600080fd5b83359250602084013567ffffffffffffffff811115611b4b57600080fd5b611b57868287016117f3565b925050611b66604085016116ef565b90509250925092565b600081518084526020808501945080840160005b83811015611b9f57815187529582019590820190600101611b83565b509495945050505050565b6000815180845260005b81811015611bd057602081850181015186830182015201611bb4565b81811115611be2576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808816835280871660208401525060a06040830152611c2360a0830186611b6f565b8281036060840152611c358186611b6f565b90508281036080840152611c498185611baa565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152611c8d60a0830184611baa565b979650505050505050565b6020815260006118136020830184611b6f565b604081526000611cbe6040830185611b6f565b8281036020840152611cd08185611b6f565b95945050505050565b6020815260006118136020830184611baa565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600067ffffffffffffffff821115611ddd57611ddd611ec4565b5060051b60200190565b60008219821115611dfa57611dfa611e82565b500190565b600181811c90821680611e1357607f821691505b60208210811415611e3457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff81118282101715611e6057611e60611ec4565b6040525050565b6000600019821415611e7b57611e7b611e82565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115611ef35760046000803e5060005160e01c5b90565b600060443d1015611f045790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611f3457505050505090565b8285019150815181811115611f4c5750505050505090565b843d8701016020828501011115611f665750505050505090565b611f7560208286010187611e3a565b509095945050505050565b6001600160e01b03198116811461093657600080fdfea264697066735822122044f05e513a3dac29bec6eaad8effd8e9cb6b1ab864807cd811becefb629d706164736f6c63430008070033";
