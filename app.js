const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const ejs = require("ejs");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();
// Connect database
mongoose
  .connect("mongodb://localhost/smartEduDB")
  .then(() => {
    console.log("Connected database.");
  })
  .catch((err) => {
    console.log(err);
  });
// Template Engine
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/category", categoryRoute);
app.use("/user", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}.`);
});
