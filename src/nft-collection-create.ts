import { CollectionType, EvmChain, Nft } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const nft = new Nft({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const collection = await nft.create({
    collectionType: CollectionType.GENERIC,
    chain: EvmChain.MOONBASE,
    name: "Example Collection",
    symbol: "EC",
    description: "An example collection description.",
    baseUri: "https://example.com/collection/",
    baseExtension: ".json",
    maxSupply: 100,
    isRevokable: false,
    isSoulbound: false,
    royaltiesAddress: "0x65266dbf8259968f54747bc83155238370d3808a",
    royaltiesFees: 1,
    drop: false,
    dropStart: 0,
    dropPrice: 0,
    dropReserve: 0,
  });

  console.log("creating collection: ", collection.uuid);
  console.log("details: ", collection);
})().catch(async (err) => {
  console.log(err);
});
