import realEstate from "./RealEstate.json";
require("dotenv").config();

export const PINATA_API_KEY = process.env.PINATA_API_KEY;
export const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;


export const REAL_ESTATE_ADDRESS = "0xFc9ECfbd32F9dcC19645e6B591975942bff4Aad0";
export const REAL_ESTATE_ABI = realEstate.abi;

// NETWORK
const networks = {
  emc_mainnet: {
    chainId: `0x${Number(6678).toString(16)}`,
    chainName: "Edge Matrix Chain",
    nativeCurrency: {
      name: "EMC",
      symbol: "EMC",
      decimals: 18,
    },
    rpcUrls: "https://rpc1-mainnet.emc.network",
    blockExplorerUrls: "https://emcscan.com/",
  },
  emc_testnet: {
    chainId: `0x${Number(99879).toString(16)}`,
    chainName: "EMC Testnet",
    nativeCurrency: {
      name: "EMC",
      symbol: "EMC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc1-sepolia.emc.network/"],
    blockExplorerUrls: ["https://sepolia.emcscan.com/"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "EMC",
      symbol: "EMC",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://sepolia.emcscan.com/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "emc_mainnet";

export const handleNetworkSwitch = async () => {
  const networkName = "emc_mainnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};