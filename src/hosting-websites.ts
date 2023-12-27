import { Hosting, Storage } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const hosting = new Hosting({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  console.log("Listing websites:");
  const websites = await hosting.listWebsites();
  if (websites.items.length == 0) {
    console.log("No websites.");
  }
  for (const website of websites.items) {
    console.log(`Website: ${website.name} - ${website.uuid}`);
  }
})().catch(async (err) => {
  console.log(err);
});
