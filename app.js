import express from "express";
import cors from "cors";
import createError from "http-errors";
import mongoose from "mongoose";
import CourseRoute from "./routes/CourseRoute.js";

// To create the express app
const app = express();

// To connect to the DB
try {
  mongoose.connect("mongodb://0.0.0.0:27017/course-db");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

// To handle connections events
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected..."));

// To use CORS - allow calls only from the origin
app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());
app.use(express.json());

// To use the router
app.use(CourseRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// To let the server listen to the given port
const port = 5002;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
