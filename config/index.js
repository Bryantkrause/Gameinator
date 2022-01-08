// Option 3: Passing parameters separately (other dialects)

const { Sequelize } = require("sequelize");

module.exports = new Sequelize("db1", "root", "password", {
	host: "localhost",
	dialect: "mysql",
});

// 	; const Sequelize = require("sequelize");
// console.log(process.env.NODE_ENV);
// module.exports = new Sequelize(
// 	process.env.NODE_ENV ? process.env.jawsdb_url : process.env.local_url
// );
