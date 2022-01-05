const express = require('express')
const { join } = require('path')
const app = express()
// const db = require('./connection')

const sequelize = require("./connection")

app.use(express.static(join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require('./routes')(app)

// app.get('/', (req, res) => res.send('Index'))

// const PORT = process.env.PORT || 5000


// db.sync()
// .then(() => app.listen(process.env.PORT || 3000))
// .catch((e) => console.log(e));

// app.listen (PORT, console.log(`server started on port ${PORT}`))

sequelize.sync()
	.then((result) => {
	console.log(result)
	})
	.catch((err) => {
	console.log(err)
})