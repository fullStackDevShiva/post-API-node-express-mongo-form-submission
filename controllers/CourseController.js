import Course from "../models/CourseModel.js";

export const addCourse = async (req, res) => {
  const course = new Course(req.body);
  try {
    // To save the course object in the DB
    await course.save();
    console.log(course);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCourses = async (req, res) => {
  try {
    // To list all the documents
    const courses = await Course.find();
    if (!courses) {
      res.status(404).json("Courses Not Found");
    }
    console.log(courses);
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCourseById = async (req, res) => {
  console.log(req.params.id);
  // To check if the course id is valid
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    console.log("Invalid request");
    res.status(400).json({ message: "Invalid request" });
    return;
  }
  try {
    const course = await Course.findById(req.params.id);
    // To check if a course is found in the DB
    if (!course) {
      console.log("Course not found!");
      res.status(404).json("Course not found!");
    }
    console.log(course);
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
