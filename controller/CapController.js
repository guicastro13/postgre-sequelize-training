const Cap = require("../models/Cap");

module.exports = {
  async store(req, res) {
    const { name, registerNumber } = req.body;
    const cap = await Cap.create({ name, registerNumber });
    return res.json(cap);
  },
  async index(req, res) {
    const caps = await Cap.findAll();
    return res.json(caps);
  },
};
