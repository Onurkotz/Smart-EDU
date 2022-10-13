exports.getHome = (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.getAbout = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getRegisterPAge = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
