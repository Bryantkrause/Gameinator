module.exports = (sequelize, Model, DataTypes) => {
	class User extends Model {}

	User.init(
		{
			username: DataTypes.STRING,
			Game: DataTypes.STRING,
		},
		{ sequelize, modelName: "user" }
	);

	return User;
};
