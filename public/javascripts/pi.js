const chart = echarts.init(document.getElementById("chart"));

const ITERATIONS = 2000;
const data = [];
const sum = [];

for (let n = 0; n < ITERATIONS; n++) {
	data.push([n, (Math.pow(-1, n) * 4) / (2 * n + 1)]);
	sum.push([n, data[n][1] + (n > 0 ? sum[n - 1][1] : 0)]);
}

option = {
	title: {
		text: "PI",
		top: 5,
		left: 0
	},
	toolbox: {
		bottom: 0,
		feature: {
			saveAsImage: {},
			restore: {},
			dataZoom: {},
			dataView: {}
		}
	},
	legend: { bottom: 0 },
	tooltip: {},
	grid: {
		containLabel: true,
		right: 50,
		left: 10,
		bottom: 30,
		top: 50
	},
	dataZoom: [
		{ top: 0, end: 10 },
		{ orient: "vertical" },
		{ type: "inside" },
		{ type: "inside", orient: "vertical" }
	],
	xAxis: { type: "value" },
	yAxis: { type: "value" },
	series: [{
		name: "Termo",
		data,
		type: "line",
		symbolSize: 2,
		smooth: true
	}, {
		name: "Somatório",
		data: sum,
		type: "line",
		symbolSize: 2,
		smooth: true
	}, {
		name: "PI",
		data: sum.map(d => [d[0], Math.PI]),
		type: "line",
		symbolSize: 2
	}]
};

chart.setOption(option);
window.onresize = chart.resize;
