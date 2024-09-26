let usersController = {
  userList: function (req, res, next) {
    res.send("userList");
  },
  loginForm: function (req, res, next) {
    res.send("Login Form");
  },
  registerForm: function (req, res, next) {
    res.send("Register form");
  },
};
module.exports = usersController;
