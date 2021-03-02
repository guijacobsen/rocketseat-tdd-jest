const routes = require("express").Router();

const { User } = require("./models");

User.create({
  name: "Guilherme",
  email: "guijacobsen@gmail.com",
  password_hash: "abc123",
});

module.exports = routes;
