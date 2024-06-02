const AWS = require("aws-sdk");
const JSONbig = require("json-bigint")({ storeAsString: true });

// Set the region
AWS.config.update({ region: "ap-southeast-2" });

const invokeLambda = async (
  FunctionName,
  payload,
  invocationType = "RequestResponse"
) => {
  // Create an instance of the Lambda service object
  const lambda = new AWS.Lambda();

  // Parameters for the Lambda function invocation
  const params = {
    FunctionName,
    InvocationType: invocationType,
    LogType: invocationType === "RequestResponse" ? "Tail" : "None",
    Payload: JSONbig.stringify(payload),
  };

  console.log("params: ", params);

  // Invoke the Lambda function
  lambda.invoke(params, (err, data) => {
    if (err) {
      console.error("Error invoking Lambda function:", err);
    } else {
      if (invocationType === "RequestResponse") {
        try {
          // Attempt to parse the JSON response
          const responsePayload = JSON.parse(data.Payload);
          console.log("Lambda function response:", responsePayload);
        } catch (parseError) {
          // Handle cases where the response is not valid JSON
          console.error("Error parsing response:", parseError);
          console.log("Raw response payload:", data.Payload);
        }
      } else {
        console.log("Lambda function invoked successfully.");
      }
    }
  });
};

module.exports = { invokeLambda };
