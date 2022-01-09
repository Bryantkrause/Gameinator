const Sequelize = require("sequelize");
const sequelize = require("../config");


// const Game = sequelize.define("order", {
// 	id: {
// 		type: Sequelize.INTEGER,
// 		autoIncrement: true,
// 		allowNull: false,
// 		primaryKey: true,
// 	},
// 	name: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// });



module.exports = (sequelize, Model, DataTypes) => {
	class Game extends Model {}

	Game.init(
		{
			Name: DataTypes.STRING,
			Players: DataTypes.STRING,
			Type: DataTypes.STRING,
		},
		{ sequelize, modelName: "game" }
	);

	return Game;
};