import { Hosting, Storage } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.HOSTING);
  const hosting = new Hosting({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  console.log("Getting website:");
  const website = await hosting.website(process.env.APILLON_WEBSITE).get();
  console.info(website)
})().catch(async (err) => {
  console.log(err);
});
