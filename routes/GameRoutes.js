const { Game } = require("../models");

module.exports = (app) => {
	app.get("/games", (req, res) => {
		Game.findAll()
			.then((games) => res.json(games))
			.catch((e) => console.error(e));
	});

	app.post("/games", (req, res) => {
		Game.create(req.body)
			.then(() => res.sendStates(200))
			.catch((e) => console.error(e));
	});

	app.put("/games/:id", (req, res) => {
		Game.findOne({ where: { id: parseInt(req.params.id) } })
			.then(() => res.sendStatus(200))
			.catch((e) => console.error(e));
	});

	app.delete("/games/:id", (req, res) => {
		Game.findOne({ where: { id: parseInt(req.params.id) } })
			.then((game) => game.destroy())
			.then(() => res.sendStatus(200))
			.catch((e) => console.error(e));
	});
};
