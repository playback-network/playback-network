/**
 * Extracts the number following the word 'valuation' in a given string.
 * @param {string} text - The input string to search.
 * @returns {number|null} - The extracted number or null if not found.
 */
function extractValuation(text) {
  // Create a regular expression to match the word 'valuation' (case-insensitive)
  // followed by a colon and a number (with optional decimal part)
  const regex = /valuation:\s*([\d.]+)/i;

  // Execute the regular expression on the input text
  const match = text.match(regex);

  // If a match is found, return the captured number as a float
  // Otherwise, return null
  return match ? parseFloat(match[1]) : null;
}

// Example usage
// const exampleString = `Yes, these are indeed fish. The first image features a Blue Tang, known scientifically as Paracanthurus hepatus, which is famous for its vivid blue color and striking yellow tail. The second image shows a Yellow Tang, scientifically named Zebrasoma flavescens, recognized by its bright yellow color and distinct spotted patterns along its cheeks and dorsal area.

// Valuation: 8.8923`;
// const valuation = extractValuation(exampleString);
// console.log(`Extracted valuation: ${valuation}`); // Output: Extracted valuation: 8.765244

// Export the function for use in other modules
module.exports = extractValuation;
