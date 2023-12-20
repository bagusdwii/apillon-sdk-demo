import { Storage } from "@apillon/sdk";
import * as dotenv from "dotenv";

dotenv.config();

(async () => {
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const buckets = await storage.listBuckets();
  console.log(buckets);
})().catch(async (err) => {
  console.log(err);
});
