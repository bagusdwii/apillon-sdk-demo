import * as dotenv from "dotenv";

export function prepareEnv() {
  dotenv.config();
  if (!process.env.APILLON_API_KEY) {
    throw new Error("Missing env: APILLON_API_KEY");
  }
}
