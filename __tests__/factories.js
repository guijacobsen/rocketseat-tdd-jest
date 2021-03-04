const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: "Guilherme",
  email: "guijacobsen@gmail.com",
  password: "abc123",
});

module.exports = factory;
