const express = require("express");
const courseController = require("../controllers/courseContorller");

const router = express.Router();

router.route("/").post(courseController.createCourse);
router.route("/").get(courseController.getAllCourses);
router.route("/:id").get(courseController.getCourse);

module.exports = router;
