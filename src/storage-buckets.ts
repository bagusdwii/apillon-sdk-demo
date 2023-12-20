import { Storage } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  console.log("Listing buckets:");
  const buckets = await storage.listBuckets();
  if (buckets.items.length == 0) {
    console.log("No buckets.");
  }
  for (const bucket of buckets.items) {
    console.log(`Bucket: ${bucket.name} - ${bucket.uuid}`);
  }
})().catch(async (err) => {
  console.log(err);
});
