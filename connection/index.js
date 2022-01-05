// const Sequelize = require("sequelize");
// module.exports = new Sequelize(
// 	process.env.NODE_ENV ? process.env.JAWSDB_URL : process.env.LOCALDB_URL,
// 	{ dialect: "postgres" }
// );


// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("db1", "root", "password", {
// 	dialect: "mysql",
// 	host: "localhost",
// })

// module.exports = sequelize

const Sequelize = require("sequelize");

const sequelize = new Sequelize("db1", "root", "password", {
	dialect: "mysql",
});

module.exports = sequelize;