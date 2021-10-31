/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RageQuitBankInterface extends ethers.utils.Interface {
  functions: {
    "baal()": FunctionFragment;
    "init(address)": FunctionFragment;
    "memberAction(address,uint96,uint96)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baal", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(
    functionFragment: "memberAction",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "baal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "memberAction",
    data: BytesLike
  ): Result;

  events: {};
}

export class RageQuitBank extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RageQuitBankInterface;

  functions: {
    baal(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "baal()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    init(_baal: string, overrides?: Overrides): Promise<ContractTransaction>;

    "init(address)"(
      _baal: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    memberAction(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "memberAction(address,uint96,uint96)"(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  baal(overrides?: CallOverrides): Promise<string>;

  "baal()"(overrides?: CallOverrides): Promise<string>;

  init(_baal: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    _baal: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  memberAction(
    arg0: string,
    loot: BigNumberish,
    shares: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "memberAction(address,uint96,uint96)"(
    arg0: string,
    loot: BigNumberish,
    shares: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    baal(overrides?: CallOverrides): Promise<string>;

    "baal()"(overrides?: CallOverrides): Promise<string>;

    init(_baal: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(_baal: string, overrides?: CallOverrides): Promise<void>;

    memberAction(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      lootOut: BigNumber;
      sharesOut: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "memberAction(address,uint96,uint96)"(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      lootOut: BigNumber;
      sharesOut: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    baal(overrides?: CallOverrides): Promise<BigNumber>;

    "baal()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(_baal: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(_baal: string, overrides?: Overrides): Promise<BigNumber>;

    memberAction(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "memberAction(address,uint96,uint96)"(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baal()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(_baal: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "init(address)"(
      _baal: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    memberAction(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "memberAction(address,uint96,uint96)"(
      arg0: string,
      loot: BigNumberish,
      shares: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
