const express = require("express");
const pageController = require("../controllers/pageController");
const redirectware = require('../middlewares/redirectware');

const router = express.Router();

router.route("/").get(pageController.getHome);
router.route("/about").get(pageController.getAbout);
router.route("/register").get(redirectware, pageController.getRegisterPage);
router.route("/login").get(redirectware, pageController.getLoginPage);

module.exports = router;
