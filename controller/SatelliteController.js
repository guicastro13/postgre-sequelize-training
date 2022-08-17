const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

module.exports = {
  async store(req, res) {
    const { planetId } = req.params;
    const { name, serial_number } = req.body;
    const planet = await Planet.findByPk(planetId);
    console.log(planet);
    if (!planet) {
      res.send("This planet doesn't exist");
    }
    const satellite = await Satellite.create({ name, serial_number, planetId });
    return res.json(satellite);
  },
  async index(req, res) {
    const { planetId } = await req.params;
    console.log(planetId);
    if (!planetId) {
      res.send("didn't find this planet");
    }

    const planet = await Planet.findByPk(planetId, {
      include: Satellite,
    });
    return res.json(planet);
  },
};
