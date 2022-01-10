
const Sequelize = require("sequelize")
const { Game } = require("./Game")
const sequelize = require("../config")

module.exports = (sequelize, Model, DataTypes) => {
	class User extends Model { }
	
	User.init({
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: Sequelize.String,
			allowNull: false,
		},
		email: {
			type: Sequelize.String,
			allowNull: false,
		}
	},
		{sequelize, modelName: "user"}
	)
	
return User
}
	

