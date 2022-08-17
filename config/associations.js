const Planet = require('../models/Planet');
const Satellite = require('../models/Satellite'); 

const Cap = require('../models/Cap');
const Spaceship = require('../models/Spaceship')

// Planet.hasOne(Satellite,{onDelete: "CASCADE", onUpdate: "CASCADE"});
// Satellite.belongsTo(Planet,{foreingKey: "planetId", as: "planet"});

Planet.hasMany(Satellite,{onDelete: "CASCADE", onUpdate: "CASCADE"});
Satellite.belongsTo(Planet,{foreingKey: "planetId", as: "planet"});

Cap.belongsToMany(Spaceship, {
    foreingKey: "capsId",
    throught: "capSpaceship",
    as: "spaceships"
});
Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    throught: "capSpaceship",
    as: "caps"
})

module.exports = {Planet, Satellite};