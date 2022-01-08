// require("dotenv").config();
const express = require("express");
const { join } = require("path");

const db = require("./config");
const app = express();



app.use(express.static(join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);

// bread and butter brings everything together
db.sync()
	.then(() => app.listen(process.env.PORT || 3000))
	.catch((e) => console.log(e));


