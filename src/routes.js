const SessionController = require("./app/controllers/SessionController");

const routes = require("express").Router();

routes.post("/session", SessionController.store);

module.exports = routes;
