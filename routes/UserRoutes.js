const { User } = require("../models");

module.exports = (app) => {
	app.get("/users", (req, res) => {
		User.findAll()
			.then((users) => res.json(users))
			.catch((e) => console.error(e));
	});

	app.post("/users", (req, res) => {
		User.create(req.body)
			.then(() => res.sendStatus(200))
			.catch((e) => console.error(e));
	});

	app.put("/users/:id", (req, res) => {
		User.findOne({ where: { id: parseInt(req.params.id) } })
			.then(() => res.sendStatus(200))
			.catch((e) => console.error(e));
	});

	app.delete("/users/:id", (req, res) => {
		User.findOne({ where: { id: parseInt(req.params.id) } })
			.then((user) => user.destroy())
			.then(() => res.sendStatus(200))
			.catch((e) => console.error(e));
	});
};
