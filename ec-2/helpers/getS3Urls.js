// const AWS = require("aws-sdk");

// // Initialize S3 without credentials for public access
// const s3 = new AWS.S3({
//   region: "ap-southeast-2", // Specify the region of the S3 bucket
// });

// // Function to retrieve URLs of objects containing the specified string in the path
// const getImageUrlsWithFilter = async (filterString) => {
//   const bucketName =
//     "amplify-db6s1roouv0tm-dev-bra-mediasbucket5fdfde77-bktlwbdhkr1y";
//   try {
//     const params = {
//       Bucket: bucketName,
//       Prefix: "", // Optionally, specify a prefix if you want to limit the search to a specific directory
//     };

//     let urls = [];
//     let isTruncated = true;
//     let continuationToken;

//     while (isTruncated) {
//       if (continuationToken) params.ContinuationToken = continuationToken;

//       const data = await s3.listObjectsV2(params).promise();
//       const bucketUrls = data.Contents.filter((item) =>
//         item.Key.includes(filterString)
//       ).map(
//         (item) =>
//           `https://${bucketName}.s3.${s3.config.region}.amazonaws.com/${item.Key}`
//       );
//       urls = urls.concat(bucketUrls);

//       isTruncated = data.IsTruncated;
//       continuationToken = data.NextContinuationToken;
//     }

//     return urls;
//   } catch (err) {
//     console.error("Error fetching image URLs from S3:", err);
//     throw err;
//   }
// };

// // Example usage
// const filterString = "0xABF94270D76AC85Bae8d8EE1784ACa8991B7Fd01";
// getImageUrlsWithFilter(filterString)
//   .then((urls) => {
//     console.log("Filtered Image URLs:", urls);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// // module.exports = getImageUrlsWithFilter;
