import { Identity } from "@apillon/sdk";

const identity = new Identity();

// message that was signed
const message = `Identity EVM SDK test\n1703683380574`;
// wallet that signed the message
const wallet = "0x65266dbf8259968f54747bc83155238370d3808a";
// signature created via ethers and metamask
const signature =
  "0xe576fcf2d3bbe335ec542faab8701eff263f6ad068709a32d5d714e7d9a01c82353a6639a3206376b5c3e278bb5276595b4ecd67a22da58c16f5cb1f9026478a1c";

const { isValid, address } = identity.validateEvmWalletSignature({
  walletAddress: wallet,
  message,
  signature,
});

console.log("Valid: ", isValid);
console.log("Signing wallet: ", address);
