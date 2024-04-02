import Course from "../models/CourseModel.js";

export const addCourse = async (req, res) => {
  const course = new Course(req.body);
  try {
    const addedCourse = await course.save();
    console.log(addedCourse);
    res.status(201).json(addedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCourses = async (req, res) => {
  try {
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
  console.log("get a course function called");
  console.log(req.params.id);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    console.log("Invalid request");
    res.status(400).json({ message: "Invalid request" });
    return;
  }
  try {
    const course = await Course.findById(req.params.id);

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
