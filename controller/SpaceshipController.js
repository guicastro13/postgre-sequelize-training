const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

module.exports = {
  async store(req, res) {
    const { name, capacity } = req.body;
    const { capId } = req.params;
    const cap = await Cap.findByPk(capId);
    if (!cap) {
      res.send("ERROR, this cap doesn't exist!");
    }
    const [spaceship] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });
    await cap.addSpaceship(spaceship);
    return res.json(spaceship);
  },
  async index(req, res) {
    const { capId } = req.params;
    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });
    return res.json(cap);
  },
};
