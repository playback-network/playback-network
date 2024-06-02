const { invokeLambda } = require("../invokeLambda");

// Replace with your actual Lambda function name and payload
const FunctionName =
  "amplify-db6s1roouv0tm-dev-payloadmanagerfunctionla-Fw9lL82vzIoX";
const payload = { valuation: 10, recipient: "0x327892345" };

// Invoke the Lambda function
invokeLambda(FunctionName, payload, "Event"); // Change to "Event" if you want to test asynchronous invocation
