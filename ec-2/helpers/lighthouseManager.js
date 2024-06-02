const lighthouse = require("@lighthouse-web3/sdk");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const uploadToLighthouse = async (jsonString, apiKey, name) => {
  try {
    const response = await lighthouse.uploadText(jsonString, apiKey, name);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error uploading text to Lighthouse:", error);
    throw error;
  }
};

// const response = uploadToLighthouse(jsonString, apiKey, name);
// console.log(response);

module.exports = { uploadToLighthouse };

// const response = await lighthouse.uploadText(text, apiKey, name)

// console.log(response)
// Sample response
// {
//   data: {
//     Name: 'shikamaru',
//     Hash: 'QmY77L7JzF8E7Rio4XboEpXL2kTZnW2oBFdzm6c53g5ay8',
//     Size: '91'
//   }
// }
