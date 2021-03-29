const express = require("express");
const router = express.Router();

const routes = [
	"/equacoes",
	"/circulo",
	"/pi",
	"/barras",
	"/horizontal"
];

for (let route of routes) {
	router.get(route, function (req, res, next) {
		res.render("index", { chart: route.substr(1) });
	});
}

module.exports = router;
