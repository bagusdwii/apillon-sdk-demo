import { Storage, StorageContentType } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const content = await storage
    .bucket(process.env.APILLON_BUCKET)
    .listObjects();

  if (content.items.length == 0) {
    console.log("Empty bucket.");
  }

  for (const data of content.items) {
    if (data.type == StorageContentType.DIRECTORY) {
      console.log("Directory: ", data.name);
    } else {
      console.log("File: ", data.name, " - CID: ", data.CID);
    }
  }
})().catch(async (err) => {
  console.log(err);
});
