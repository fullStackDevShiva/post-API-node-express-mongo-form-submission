import { validationResult } from "express-validator";
//this code is common for all the validations
const ValidationMiddleware = (req, res, next) => {
  console.log("Called validation middleware");
  const errors = validationResult(req);
  // To check if any error exists
  if (!errors.isEmpty()) {
    console.log({ errors: errors.array({ onlyFirstError: true }) });
    return res
      .status(400)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  } else {
    console.log("Validation is successful");
    next();
  }
};

export default ValidationMiddleware;
