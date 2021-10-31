/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EtherPaymentFallback } from "./EtherPaymentFallback";

export class EtherPaymentFallbackFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EtherPaymentFallback> {
    return super.deploy(overrides || {}) as Promise<EtherPaymentFallback>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EtherPaymentFallback {
    return super.attach(address) as EtherPaymentFallback;
  }
  connect(signer: Signer): EtherPaymentFallbackFactory {
    return super.connect(signer) as EtherPaymentFallbackFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherPaymentFallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EtherPaymentFallback;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeReceived",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607a8061001e6000396000f3fe608060405236603f5760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b600080fdfea2646970667358221220eb0ba2e6c87b28dd6cd714c31834863d13df669e682736757db156f4db6479f564736f6c63430008070033";
