const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "Produção por Máquina"
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
	tooltip: { trigger: "axis" },
	xAxis: {
		name: "Hora",
		nameGap: 7,
		type: "category",
		boundaryGap: false,
		data: [
			"00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h", "11h",
			"12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"
		]
	},
	yAxis: {
		name: "Peças",
		nameGap: 7,
		type: "value"
	},
	dataZoom: [
		{},
		{ type: "inside" },
		{ orient: "vertical" },
		{ type: "inside", orient: "vertical" }
	],
	series: [{
		name: "OP 10",
		data: [
			540, 50, 0, 0, 0, 0, 820, 932, 901, 934, 1290, 10, 1320,
			760, 889, 1005, 430, 400, 893, 723, 24, 801, 910, 1083, 764
		],
		type: "line",
		step: "middle",
		// smooth: true,
		areaStyle: {},
		stack: "maquina"
	}, {
		name: "OP 20",
		data: [
			618, 83, 0, 0, 0, 0, 1187, 965, 1198, 703, 900, 19,
			499, 812, 979, 513, 986, 629, 575, 436, 32, 1068, 686, 1027
		],
		type: "line",
		step: "middle",
		// smooth: true,
		areaStyle: {},
		stack: "maquina"
	}],
	grid: {
		containLabel: true,
		left: 0,
		right: 80,
		top: 60,
		bottom: 50
	}
};

chart.setOption(option);
window.onresize = chart.resize;
