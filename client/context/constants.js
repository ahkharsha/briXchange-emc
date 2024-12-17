import realEstate from "./RealEstate.json";
require("dotenv").config();

// export const REAL_ESTATE_ADDRESS = "0xb06cbBeAE36EdBa7a14D733E8aE922a29630c7C1";
export const REAL_ESTATE_ADDRESS = "0x73641118e93Be1Ed8cE170E17E564Fa76b43a8fb"
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "da212708ca61ceb1b91d";
export const PINATA_SECRET_KEY = "ce9bea71753244b0e67a0b3039e09889b69d15b863d25f3b9110449afae55c05";

// NETWORK
const networks = {
  // emc_mainnet: {
  //   chainId: Waiting for launch...,
  //   chainName: Waiting for launch...,
  //   nativeCurrency: {
  //     name: "EMC",
  //     symbol: "EMC",
  //     decimals: 18,
  //   },
  //   rpcUrls: Waiting for launch...,
  //   blockExplorerUrls: Waiting for launch...,
  // },
  emc_testnet: {
    chainId: `0x${Number(99876).toString(16)}`,
    chainName: "EMC Testnet",
    nativeCurrency: {
      name: "EMC",
      symbol: "EMC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc1-testnet.emc.network"],
    blockExplorerUrls: ["https://testnet.emcscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  neox_testnet: {
    chainId: `0x${Number(12227332).toString(16)}`,
    chainName: "NeoX Testnet T4",
    nativeCurrency: {
      name: "NeoX",
      symbol: "GAS",
      decimals: 18,
    },
    rpcUrls: ["https://12227332.rpc.thirdweb.com"],
    blockExplorerUrls: ["https://xexplorer.neo.org/"],
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

export const ACTIVE_NETWORK = "neox_testnet";

export const handleNetworkSwitch = async () => {
  const networkName = "neox_testnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};