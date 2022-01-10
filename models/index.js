const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");


module.exports = {
	Game: require("./Game.js")(sequelize, Model, DataTypes),
	User: require("./User.js")(sequelize, Model, DataTypes),
};