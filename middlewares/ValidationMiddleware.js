import { validationResult } from "express-validator";
//this code is common for all the validations
//it's better to use a separate middleware like this file and call it after the validatio check file is executed
const ValidationMiddleware = (req, res, next) => {
  console.log("Called validation middleware");
  const errors = validationResult(req);
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
