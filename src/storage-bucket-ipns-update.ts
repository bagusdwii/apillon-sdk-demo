import { Storage } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.STORAGE_IPNS);
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  let ipns = await storage
    .bucket(process.env.APILLON_BUCKET)
    .ipns(process.env.APILLON_IPNS);

  // Change CID with your own content
  ipns = await ipns.publish("QmQgTdGuBbRMkHESQeRWsgjRtgCdgd2XjCYTcpoLNu2mMk");

  console.log(`IPNS ${ipns.uuid} updated: `, ipns.link);
})().catch(async (err) => {
  console.log(err);
});
