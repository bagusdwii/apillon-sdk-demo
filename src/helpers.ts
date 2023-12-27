import * as dotenv from "dotenv";

export enum EnvLevel {
  GENERAL = 1,
  STORAGE = 2,
  STORAGE_IPNS = 3,
}

export function prepareEnv(level: EnvLevel = EnvLevel.GENERAL) {
  dotenv.config();

  if (!process.env.APILLON_API_KEY) {
    throw new Error("Missing env: APILLON_API_KEY");
  }

  if (!process.env.APILLON_API_SECRET) {
    throw new Error("Missing env: APILLON_API_SECRET");
  }

  if (
    (level == EnvLevel.STORAGE || level == EnvLevel.STORAGE_IPNS) &&
    !process.env.APILLON_BUCKET
  ) {
    throw new Error("Missing env: APILLON_BUCKET");
  }

  if (level == EnvLevel.STORAGE_IPNS && !process.env.APILLON_IPNS) {
    throw new Error("Missing env: APILLON_IPNS");
  }
}
