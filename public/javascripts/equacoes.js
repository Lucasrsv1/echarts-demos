const INTERVAL = [-20, 20];

const chart = echarts.init(document.getElementById("chart"));
const primeiroGrau = [];
const segundoGrau = [];
const terceiroGrau = [];

function fnGrau1 (x) {
	return 2 * x - 3;
}

function fnGrau2 (x) {
	return Math.pow(x, 2) + 3 * x - 22;
}

function fnGrau3 (x) {
	return Math.pow(x, 3);
}

for (let x = INTERVAL[0]; x <= INTERVAL[1]; x++) {
	primeiroGrau.push([x, fnGrau1(x)]);
	segundoGrau.push([x, fnGrau2(x)]);
	terceiroGrau.push([x, fnGrau3(x)]);
}

option = {
	title: {
		text: "Equações"
	},
	toolbox: {
		feature: {
			saveAsImage: {},
			restore: {},
			dataZoom: {},
			dataView: {}
		}
	},
	legend: {},
	tooltip: {
		formatter: params => {
			return `${params.seriesName}<br/>${params.marker} <b>F(${params.value[0]}) = ${params.value[1]}</b>`;
		}
	},
	xAxis: [{
		name: "X",
		nameGap: 7,
		type: "value",
		min: INTERVAL[0] - 1,
		max: INTERVAL[1] + 1
	}, {
		name: "X",
		nameGap: 7,
		type: "value",
		axisLabel: { show: false },
		min: INTERVAL[0] - 1,
		max: INTERVAL[1] + 1
	}],
	yAxis: [{
		name: "Y",
		nameGap: 7,
		type: "value"
	}, {
		type: "value",
		axisLabel: {
			padding: 10
		}
	}],
	dataZoom: [
		{},
		{ type: "inside" },
		{ orient: "vertical" },
		{ type: "inside", orient: "vertical" }
	],
	series: [{
		name: "F(x) = 2x - 3",
		data: primeiroGrau,
		type: "line",
		xAxisIndex: 0,
		yAxisIndex: 0
	}, {
		name: "F(x) = x² + 3x - 22",
		data: segundoGrau,
		type: "line",
		xAxisIndex: 0,
		yAxisIndex: 0
	}, {
		name: "F(x) = x³",
		data: terceiroGrau,
		type: "line",
		xAxisIndex: 1,
		yAxisIndex: 1
	}],
	grid: {
		containLabel: true,
		left: 0,
		right: 60,
		top: 60,
		bottom: 50
	}
};

chart.setOption(option);
window.onresize = chart.resize;
