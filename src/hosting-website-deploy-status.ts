import { Hosting } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.HOSTING);
  const hosting = new Hosting({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const deployment = await hosting
    .website(process.env.APILLON_HOSTING)
    .deployment(process.env.APILLON_DEPLOYMENT)
    .get();

  console.log("Deployment status: ", deployment.deploymentStatus);
  console.log(
    "For more info on deployment statuses check: https://sdk-docs.apillon.io/enums/DeploymentStatus.html"
  );
})().catch(async (err) => {
  console.log(err);
});
