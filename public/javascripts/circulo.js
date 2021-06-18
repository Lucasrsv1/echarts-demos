const chart = echarts.init(document.getElementById("chart"));

const SIDES = 200;
const POINTS = 5000;
const RADIUS = 1;
const X = 0;
const Y = 0;

const circle = [];
for (let i = 0; i <= SIDES; i++) {
	circle.push([
		X + (Math.cos(Math.PI * 2 * (i / SIDES)) * RADIUS),
		Y + (Math.sin(Math.PI * 2 * (i / SIDES)) * RADIUS)
	]);
}

const randomPoints = [];
for (let i = 0; i < POINTS; i++) {
	let randRadius = Math.sqrt(Math.random()) * RADIUS;
	let randAngle = Math.random() * 2 * Math.PI;

	randomPoints.push([
		X + (Math.cos(randAngle) * randRadius),
		Y + (Math.sin(randAngle) * randRadius)
	]);
}

option = {
	title: {
		text: "Pontos Uniformemente Aleatórios em um Círculo"
	},
	legend: { top: "bottom" },
	toolbox: {
		feature: {
			saveAsImage: {},
			restore: {},
			dataZoom: {},
			dataView: {}
		}
	},
	xAxis: {
		type: "value",
		min: X - RADIUS * 1.1,
		max: X + RADIUS * 1.1
	},
	yAxis: {
		type: "value",
		min: Y - RADIUS * 1.1,
		max: Y + RADIUS * 1.1
	},
	dataZoom: [
		{ bottom: 40 },
		{ type: "inside" },
		{ orient: "vertical" },
		{ type: "inside", orient: "vertical" }
	],
	series: [{
		name: "Centro",
		data: [[X, Y]],
		type: "line",
		symbolSize: 8
	}, {
		name: "Círculo",
		data: circle,
		type: "line",
		connectNulls: true
	}, {
		name: "Pontos",
		data: randomPoints,
		type: "scatter",
		symbolSize: 4
	}],
	grid: {
		containLabel: true,
		left: 10,
		right: 60,
		top: 60,
		bottom: 80
	}
};

chart.setOption(option);
window.onresize = chart.resize;
