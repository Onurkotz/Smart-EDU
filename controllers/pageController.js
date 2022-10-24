// const nodemailer = require("nodemailer"); For sending mail.
const User = require("../models/User");
const Course = require("../models/Course");

exports.getHome = async (req, res) => {
  console.log(req.session.userID);
  const courseLast2 = await Course.find().sort("-createdAt").limit(2);
  const userStudents = await User.countDocuments({ role: "Student" });
  const userTeachers = await User.countDocuments({ role: "Teacher" });
  const allCourses = await Course.countDocuments();
  res.status(200).render("index", {
    page_name: "index",
    courseLast2,
    userStudents,
    userTeachers,
    allCourses,
  });
};

exports.getAbout = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};

/* exports.sendMail = async (req, res) => {

  const outputMessage = `
  
  <h1>Mail Details </h1>
  <h2>From: </h2>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h2>Message</h2>
  <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "onurkottz@gmail.com", // gmail account
      pass: "ARVR191919", // gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Smart Edu Portal Contact Form" <onurkottz@gmail.com>', // sender address
    to: "ounurkouc@gmail.com", // list of receivers
    subject: "Smart Edu Portal New Message ✔", // Subject line
    html: outputMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.status(200).redirect('contact');

};

For sending mail. But after May 2022 Google does not allow to send mail from 3rd party applications. Instead of this you can use Amazon SES.
 */
