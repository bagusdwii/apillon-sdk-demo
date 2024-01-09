import { CollectionType, EvmChain, Nft } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.NFT);
  const nft = new Nft({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const collection = await nft.collection(process.env.APILLON_COLLECTION).get();

  console.log("Collection status: ", collection.collectionStatus);
  console.log("Contract address: ", collection.contractAddress);
  console.log(
    "For more info on statuses check: https://sdk-docs.apillon.io/enums/CollectionStatus.html"
  );
  console.info(collection);
})().catch(async (err) => {
  console.log(err);
});
