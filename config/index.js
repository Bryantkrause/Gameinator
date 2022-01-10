// Option 3: Passing parameters separately (other dialects)

const { Sequelize } = require("sequelize");

// module.exports = new Sequelize("db1", "root", "password", {
// 	host: "localhost",
// 	dialect: "mysql",
// });



const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize('db1', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql'
})

const Country = sequelize.define('country', {
	countryName: {
		type: DataTypes.STRING,
		unique: true
	}
}, {
	timestamps: false
})

const Capital = sequelize.define(
	"capitol",
	{
		capitolName: {
			type: DataTypes.STRING,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

Country.hasOne(Capital)

sequelize.sync({ alter: true }).then(() => {
	
}).catch((err) => {
	console.log(err)
})

// 	; const Sequelize = require("sequelize");
// console.log(process.env.NODE_ENV);
// module.exports = new Sequelize(
// 	process.env.NODE_ENV ? process.env.jawsdb_url : process.env.local_url
// );
