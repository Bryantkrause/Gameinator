const Sequelize = require("sequelize");

const sequelize = require("../config");
const User = require("./User");


module.exports = (sequelize, Model, DataTypes) => {
	class Game extends Model {}
	
	Game.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			Name: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Uno",
			},
			Players: {
				type: DataTypes.Number,
				allowNull: false,
				defaultValue: 1,
			},
			Type: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Card",
			},
		},
		{ sequelize, modelName: "game" }


	);

	return Game;
};

