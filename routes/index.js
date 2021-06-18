const express = require("express");
const router = express.Router();

const routes = [
	"/equacoes",
	"/area",
	"/barras",
	"/horizontal",
	"/pizza",
	"/doughnut",
	"/medidor",
	"/dispersao",
	"/radar",
	"/velas",
	"/pi",
	"/circulo"
];

for (let route of routes) {
	router.get(route, function (req, res, next) {
		res.render("index", { chart: route.substr(1) });
	});
}

module.exports = router;
