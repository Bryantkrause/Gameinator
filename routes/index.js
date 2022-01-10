module.exports = (app) => {
	require("./GameRoutes.js")(app),
	require("./UserRoutes.js")(app);
};
