//load
const path = require("path");

pathToDotEnv = path.join(__dirname, "..", ".env");

require("dotenv").config({ path: pathToDotEnv });

const ethers = require("ethers");

const providerKey = process.env.ALCHEMY_KEY;

const sepoliaUrl = `${process.env.ALCHEMY_SEPOLIA_API_URL}${providerKey}`;

const sepoliaProvider = new ethers.JsonRpcProvider(sepoliaUrl);

const linkAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const linkABI = require("./link_abi.json");

// Now your task. Get the balance for LINK for "unima.eth" and "vitalik.eth".
// Hint: you need first to create a Contract object via `ethers.Contract`,
// then invoke the appropriate smart contract method.
// Hint2: want to try it with your own address? Get some LINK ERC20 tokens here:
// https://faucets.chain.link/goerli

const link = async () => {
  const contract = new ethers.Contract(linkAddress, linkABI, sepoliaProvider);
  const linkBalance = await contract.balanceOf("unima.eth");
  console.log(ethers.formatEther(linkBalance));
};

link();
