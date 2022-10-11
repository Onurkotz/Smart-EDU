const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");


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

// ROUTES
app.use("/", pageRoute);
app.use("/courses", courseRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}.`);
});
