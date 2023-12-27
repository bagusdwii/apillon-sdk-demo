import { DeployToEnvironment, Hosting } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.HOSTING);
  const hosting = new Hosting({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const website = hosting.website(process.env.APILLON_HOSTING);
  await website.uploadFromFolder("./example/website");
  const deployment = await website.deploy(DeployToEnvironment.TO_STAGING);
  console.log("Deploy started check status via uuid: ", deployment.uuid);
})().catch(async (err) => {
  console.log(err);
});
