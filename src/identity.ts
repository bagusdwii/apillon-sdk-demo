import { Identity } from "@apillon/sdk";
import { prepareEnv } from "./helpers";

(async () => {
  prepareEnv();
  const identity = new Identity({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });
  // check any dot wallet you want
  const info = await identity.getWalletIdentity(
    "5HB6TahxS9KpSAq69tqjvU7VLuzKsVkCpPSPULEYixrqvn1V"
  );
  console.log(info);
})().catch(async (err) => {
  console.log(err);
});
