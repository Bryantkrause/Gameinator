const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");


module.exports = {
	Game: require("./Game.js")(sequelize, Model, DataTypes),
	User: require("./User.js")(sequelize, Model, DataTypes),
};

module.exports = (sequelize, Model, DataTypes) => {

	const Games = sequelize.define("games", {
		gameName: {
			type: DataTypes.STRING,
			unique: true,
		},
		id: 
	});

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

	return Games;
};