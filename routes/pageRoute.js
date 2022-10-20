const express = require("express");
const pageController = require("../controllers/pageController");
const redirectware = require('../middlewares/redirectware');

const router = express.Router();

router.route("/").get(pageController.getHome);
router.route("/about").get(pageController.getAbout);
router.route("/register").get(redirectware, pageController.getRegisterPage);
router.route("/login").get(redirectware, pageController.getLoginPage);
router.route("/contact").get(pageController.getContactPage);
// router.route('/contact').post(pageController.sendMail); For sending mail. But after May 2022 Google does not allow to send mail from 3rd party applications.

module.exports = router;
