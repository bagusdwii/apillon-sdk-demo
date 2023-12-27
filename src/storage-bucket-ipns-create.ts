import { Storage } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.STORAGE);
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  // Change CID with your own content
  const ipns = await storage.bucket(process.env.APILLON_BUCKET).createIpns({
    name: "test ipns",
    cid: "QmfYpznrP4LWKdfXSABEXHKB5d7dEFe5JhBi8WHvxxXg9G",
  });

  console.log(`IPNS ${ipns.uuid} created: `, ipns.link);
})().catch(async (err) => {
  console.log(err);
});
