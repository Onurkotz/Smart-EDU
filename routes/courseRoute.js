const express = require("express");
const courseController = require("../controllers/courseContorller");
const roleware = require("../middlewares/roleware");

const router = express.Router();

router
  .route("/")
  .post(roleware(["Teacher", "Admin"]), courseController.createCourse);
router.route("/").get(courseController.getAllCourses);
router.route("/:slug").get(courseController.getCourse);
router.route("/join").post(courseController.joinCourse);
router.route("/leave").post(courseController.leaveCourse);

module.exports = router;
