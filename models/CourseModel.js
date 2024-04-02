import mongoose from "mongoose";

const courseModel = mongoose.Schema(
  {
    title: {
      type: String,
      // minLength: [15, "Please enter more than 15 characters"],
      maxLength: [80, "Please enter less than 80 characters"],
      required: true,
    },
    subtitle: {
      type: String,
      minLength: [15, "Please enter more than 15 characters"],
      maxLength: [80, "Please enter less than 80 characters"],
      required: true,
    },
    description: {
      type: String,
      // minLength: [200, "Please enter more than 200 characters"],
      // maxLength: [800, "Please enter less than 800 characters"],
      required: true,
    },
    prerequisites: {
      type: String,
      // minLength: [200, "Please enter more than 200 characters"],
      maxLength: [800, "Please enter less than 800 characters"],
      required: true,
    },
    fees: {
      type: Number,
      // min: [3, "Please enter more than 2 digits"],
      // max: [5, "Please enter less than 5 digits"],
      required: true,
    },
    // image: {
    //   type: String,
    //   required: true,
    // },
    // faqs: [
    //   {
    //     question: {
    //       type: String,
    //       minLength: [10, "Please enter more than 50 characters"],
    //       maxLength: [120, "Please enter less than 120 characters"],
    //     },
    //     answer: {
    //       type: String,
    //       minLength: [10, "Please enter more than 100 characters"],
    //       maxLength: [400, "Please enter less than 400 characters"],
    //     },
    //   },
    // ],
  },
  { timestamp: true }
);

export default mongoose.model("Course", courseModel);
