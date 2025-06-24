const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying RealEstate with account:", deployer.address);
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Available account balance:", balance.toString());

  const RealEstate = await ethers.getContractFactory("RealEstate");

  const dao = await RealEstate.deploy();

  await dao.waitForDeployment();

  console.log("RealEstate deployed to:", await dao.getAddress());
  console.log("Owner set to:", await dao.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
