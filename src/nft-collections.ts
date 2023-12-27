import { Nft } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const nft = new Nft({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  console.log("Listing collections:");
  const collections = await nft.listCollections();
  if (collections.items.length == 0) {
    console.log("No collections.");
  }
  for (const collection of collections.items) {
    console.log(
      `Collection: ${collection.name} - ${collection.uuid}: ${collection.contractAddress}`
    );
  }
})().catch(async (err) => {
  console.log(err);
});
