const express = require("express");
const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getHome);
router.route("/about").get(pageController.getAbout);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);

module.exports = router;
