import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    // currency: "USD",
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  }
};

export default config;
