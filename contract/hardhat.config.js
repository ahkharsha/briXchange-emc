require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_EMC_RPC = "https://rpc1-mainnet.emc.network";
const NEXT_PUBLIC_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
  },
  networks: {
    EMC: {
      url: NEXT_PUBLIC_EMC_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
