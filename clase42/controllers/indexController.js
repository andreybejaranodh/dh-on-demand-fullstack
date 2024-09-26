let path = require("path");

const indexController = {
  home: function (req, res) {
    res.render("home");
  },
};
module.exports = indexController;
