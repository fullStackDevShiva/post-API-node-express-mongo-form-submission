import { body, validationResult } from "express-validator";

export const checkCourseRules = () => {
  return [
    body("title")
      .trim()
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 15, max: 80 })
      .withMessage("Min 15 characters and max 80 characters allowed"),
    body("subtitle")
      .trim()
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 15, max: 80 })
      .withMessage("Min 15 characters and max 80 characters allowed"),
    body("description")
      .trim()
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 200, max: 800 })
      .withMessage("Min 200 characters and max 800 characters allowed"),
    body("prerequisites")
      .trim()
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isLength({ min: 80, max: 800 })
      .withMessage("Min 200 characters and max 800 characters allowed"),
    body("fees")
      .trim()
      .not()
      .isEmpty()
      .withMessage("This field is required")
      .isInt()
      .withMessage("Please enter digits")
      .isLength({ min: 3, max: 5 })
      .withMessage("Min 3 digits and max 5 digits allowed"),

    // body("image").trim().not().isEmpty().withMessage("This field is required"),

    // body("faqs.*.question") //faqs array of objects - taken array of each object separately
    //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage("This field is required")
    //   .isLength({ min: 10, max: 120 })
    //   .withMessage("Min 50 characters and max 120 characters allowed"),
    // body("faqs.*.answer") //faqs array of objects - taken array of each object separately
    //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage("This field is required")
    //   .isLength({ min: 10, max: 400 })
    //   .withMessage("Min 100 characters and max 400 characters allowed"),

    //validation middleware is included here.
    //-----------------------------------------
    //Since it this section of code is common for all the validations,
    //it's better to use a separate file instead of writing it repeatedly in every validation check
    //it is called after a specific validation check is executed like the above function

    // (req, res, next) => {
    //   /* the rest of the existing function */
    //   console.log("Got into validation middleware");
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res
    //       .status(400)
    //       .json({ errors: errors.array({ onlyFirstError: true }) });
    //   }
    //   next();
    // },
  ];
};
