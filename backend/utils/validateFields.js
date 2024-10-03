// validateFields.js

/**
 * Validates that the required fields are present and not empty in the incoming data
 * @param { Object } data - The incoming request body (req.body)
 * @param { Array } requiredFields - An array of field names that are required
 * @returns { Object } - Returns an object with { isValid: boolean, errors: array}
 */

const validateFields = (data, requiredFields) => {
  const errors = [];

  // Check each required field
  requiredFields.forEach((field) => {
    if (!data[field] || data[field].trim === "") {
      errors.push(`${field} is required`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = validateFields;
