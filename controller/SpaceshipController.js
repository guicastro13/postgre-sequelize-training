const Spaceship = require("../models/Spaceship");

module.exports = {
  async store(req, res) {
    const { name, capacity } = req.body;
    const spaceship = await Spaceship.create({ name, capacity });
    return res.json(spaceship);
  },
  async index(req, res) {
    const spaceship = await Spaceship.findAll();
    return res.json(spaceship);
  },
};
