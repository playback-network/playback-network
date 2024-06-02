const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const ethers = require("ethers");
const JSONbig = require("json-bigint")({ storeAsString: true });

const config = require("./config");
const extractValuation = require("./helpers/extractValuation");
const lighthouseManager = require("./helpers/lighthouseManager");
const { invokeLambda } = require("./helpers/invokeLambda");

async function main() {
  const provider = new ethers.JsonRpcProvider(config.rpcUrl);
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  console.log(`Connected to contract at address: ${config.contractAddress}`);
  console.log(`Listening for events with name: ${config.eventName}`);
  console.log(`Using RPC URL: ${config.rpcUrl}`);

  // `contract.on` is called once for each existing event, then again for each new event
  // `contract.once` is called for each new event
  contract.on(config.eventName, async (...args) => {
    console.log("-----!!!Event received!!!-----");
    // console.log("args received: ", args);
    const recipientAddress = args[0];
    console.log(`recipientAddress received: ${recipientAddress}`);
    const taskId = args[1];
    console.log(`taskId received: ${taskId}`);
    const success = args[2];
    console.log(`success received: ${success}`);
    const response = args[3];
    console.log(`response received: ${response}`);
    const imageUrls = args[4];
    console.log(`imageUrls received: ${imageUrls}`);

    const valuation = extractValuation(response);
    console.log(`Valuation extracted: ${valuation}`);
    if (valuation === 0) {
      console.log("Valuation is zero, rejecting...");
      // Need to respond to the lambda with a rejection
      return;
    }
    if (success === false) {
      console.log("Success is false, rejecting...");
      // Need to respond to the lambda with a rejection
      return;
    }
    const data = {
      taskId,
      valuation,
      imageUrls,
    };
    const jsonString = JSONbig.stringify(data);
    console.log("Lighthouse JSON string Payload", jsonString);
    const apiKey = process.env.LIGHTHOUSE_API_KEY;
    const name = `taskId-${taskId}`;

    const lighthouseResponse = await lighthouseManager.uploadToLighthouse(
      jsonString,
      apiKey,
      name
    );
    console.log("lighthouseResponse", lighthouseResponse);

    // Send recipientAddress and valuation to lambda
    const payload = {
      taskId,
      recipientAddress,
      valuation,
    };
    const functionName = config.lambdaName;

    await invokeLambda(functionName, payload);
  });

  console.log(`Listening for ${config.eventName} events...`);
}

main().catch((error) => {
  console.error("Error in main:", error);
});
