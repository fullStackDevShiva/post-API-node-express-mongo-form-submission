import express from "express";
import { checkCourseRules } from "../validators/CourseValidator.js";
import ValidationMiddleware from "../middlewares/ValidationMiddleware.js";
import {
  addCourse,
  getCourses,
  getCourseById,
} from "../controllers/CourseController.js";

const router = express.Router();

// To create a course
router.post(
  "/courses/add",
  checkCourseRules(),
  ValidationMiddleware,
  addCourse
);

// To view all courses
router.get("/courses", getCourses);

// To view a course details
router.get("/courses/:id", getCourseById);

export default router;
