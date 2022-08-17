const express = require("express");
const routes = express.Router();

const PlanetController = require("../controller/PlanetController");
const SatelliteController = require("../controller/SatelliteController");
const CapController = require("../controller/CapController");
const Spaceship = require("../controller/SpaceshipController");

routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satellites", SatelliteController.store);
routes.get("/planet/:planetId/satellites", SatelliteController.index);

routes.post("/caps", CapController.store);
routes.get("/caps", CapController.index);

routes.post("/caps/:capsId/spaceships", Spaceship.store);
routes.get("/caps/:capsId/spaceships", Spaceship.index);

module.exports = routes;
