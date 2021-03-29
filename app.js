const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");

const indexRouter = require("./routes/index");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
	src: path.join(__dirname, "public"),
	dest: path.join(__dirname, "public"),
	indentedSyntax: false, // true = .sass and false = .scss
	sourceMap: true
}));

app.use(express.static(path.join(__dirname, "public")));
app.use("/libs/echarts.min.js", express.static(path.join(__dirname, "node_modules", "echarts", "dist", "echarts.min.js")));

app.use("/", indexRouter);

// Catch 404 error
app.use(function (req, res, next) {
	res.redirect("/equacoes");
});

// Error handler
app.use(function (err, req, res, next) {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// Render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
