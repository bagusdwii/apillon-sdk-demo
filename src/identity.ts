import { Identity } from "@apillon/sdk";

const identity = new Identity();
const message = identity.generateSigningMessage("test");
console.log(message.message);
