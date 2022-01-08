// module.exports = (sequelize, Model, DataTypes) => {
// 	class User extends Model {}

// 	User.init(
// 		{
// 			username: DataTypes.STRING,
// 			Game: DataTypes.STRING,
// 		},
// 		{ sequelize, modelName: "user" }
// 	);

// 	return User;
// };

const Sequelize = require("sequelize")
const sequelize = require("../config")

const User = sequelize.define("User", {
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
	},

});

module.exports = Customer
