const express = require("express");
const routes = express.Router();

const PlanetController = require("../controller/PlanetController");

routes.post("/planets", PlanetController.store);

module.exports = routes;
