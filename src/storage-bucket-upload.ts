import { Storage } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.STORAGE);
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  await storage
    .bucket(process.env.APILLON_BUCKET)
    .uploadFromFolder("./example/files");

  console.log("Upload successful, list contents to see CIDs.");
})().catch(async (err) => {
  console.log(err);
});
