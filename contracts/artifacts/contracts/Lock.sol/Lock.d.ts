// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Lock$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Lock",
  "sourceName": "contracts/Lock.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_unlockTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "when",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unlockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052604051610798380380610798833981810160405281019061002591906101a9565b61003f675a52c4e65c9f207d60c01b61016b60201b60201c565b61005967657c13d2da7c4d8460c01b61016b60201b60201c565b61007367b3382ff3b14741dc60c01b61016b60201b60201c565b61008d675165fdb58926fb0160c01b61016b60201b60201c565b8042106100cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c690610259565b60405180910390fd5b6100e967a1ce10c28e0fd02b60c01b61016b60201b60201c565b6101036709cd5bc8af986c3e60c01b61016b60201b60201c565b80600081905550610124670aba747bf1fb6a5460c01b61016b60201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610279565b50565b600080fd5b6000819050919050565b61018681610173565b811461019157600080fd5b50565b6000815190506101a38161017d565b92915050565b6000602082840312156101bf576101be61016e565b5b60006101cd84828501610194565b91505092915050565b600082825260208201905092915050565b7f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b60006102436023836101d6565b915061024e826101e7565b604082019050919050565b6000602082019050818103600083015261027281610236565b9050919050565b610510806102886000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b9190610351565b60405180910390f35b61006c610092565b005b61007661030f565b60405161008391906103ad565b60405180910390f35b60005481565b6100a66762097aa3b2adb2da60c01b610335565b6100ba674704c16be54cee5b60c01b610335565b6100ce67c68e136dd2d506ae60c01b610335565b6100e2679b5e8ff448e1df0360c01b610335565b600054421015610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e90610425565b60405180910390fd5b61013b67a02e2c7973933ab460c01b610335565b61014f673502fa32915e7b7a60c01b610335565b61016367949bb126ba72df2d60c01b610335565b61017767b1e82061ab29abb860c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fe90610491565b60405180910390fd5b61021b679f611695a3797fa960c01b610335565b61022f67a49d1a037ea0a99960c01b610335565b6102436722c7ec4a0e07a5b860c01b610335565b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516102749291906104b1565b60405180910390a161029067d8d7e2d17faad7ed60c01b610335565b6102a4679708703feb0ed5b960c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561030c573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6000819050919050565b61034b81610338565b82525050565b60006020820190506103666000830184610342565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103978261036c565b9050919050565b6103a78161038c565b82525050565b60006020820190506103c2600083018461039e565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b600061040f6016836103c8565b915061041a826103d9565b602082019050919050565b6000602082019050818103600083015261043e81610402565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b600061047b6014836103c8565b915061048682610445565b602082019050919050565b600060208201905081810360008301526104aa8161046e565b9050919050565b60006040820190506104c66000830185610342565b6104d36020830184610342565b939250505056fea2646970667358221220843e74a880d38ff573a1c389f422204a779a946c0f9c57994e545d4a3140885c64736f6c634300081b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b9190610351565b60405180910390f35b61006c610092565b005b61007661030f565b60405161008391906103ad565b60405180910390f35b60005481565b6100a66762097aa3b2adb2da60c01b610335565b6100ba674704c16be54cee5b60c01b610335565b6100ce67c68e136dd2d506ae60c01b610335565b6100e2679b5e8ff448e1df0360c01b610335565b600054421015610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e90610425565b60405180910390fd5b61013b67a02e2c7973933ab460c01b610335565b61014f673502fa32915e7b7a60c01b610335565b61016367949bb126ba72df2d60c01b610335565b61017767b1e82061ab29abb860c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fe90610491565b60405180910390fd5b61021b679f611695a3797fa960c01b610335565b61022f67a49d1a037ea0a99960c01b610335565b6102436722c7ec4a0e07a5b860c01b610335565b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516102749291906104b1565b60405180910390a161029067d8d7e2d17faad7ed60c01b610335565b6102a4679708703feb0ed5b960c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561030c573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6000819050919050565b61034b81610338565b82525050565b60006020820190506103666000830184610342565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103978261036c565b9050919050565b6103a78161038c565b82525050565b60006020820190506103c2600083018461039e565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b600061040f6016836103c8565b915061041a826103d9565b602082019050919050565b6000602082019050818103600083015261043e81610402565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b600061047b6014836103c8565b915061048682610445565b602082019050919050565b600060208201905081810360008301526104aa8161046e565b9050919050565b60006040820190506104c66000830185610342565b6104d36020830184610342565b939250505056fea2646970667358221220843e74a880d38ff573a1c389f422204a779a946c0f9c57994e545d4a3140885c64736f6c634300081b0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Lock",
    constructorArgs: [_unlockTime: AbiParameterToPrimitiveType<{"name":"_unlockTime","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Lock$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Lock.sol:Lock",
    constructorArgs: [_unlockTime: AbiParameterToPrimitiveType<{"name":"_unlockTime","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Lock$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Lock",
    constructorArgs: [_unlockTime: AbiParameterToPrimitiveType<{"name":"_unlockTime","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Lock$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Lock.sol:Lock",
    constructorArgs: [_unlockTime: AbiParameterToPrimitiveType<{"name":"_unlockTime","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Lock$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Lock",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Lock$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Lock.sol:Lock",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Lock$Type["abi"]>>;
}
