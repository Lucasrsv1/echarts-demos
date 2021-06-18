const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "Produção Prevista x Carros Produzidos"
	},
	tooltip: { },
	toolbox: {
		feature: {
			saveAsImage: {},
			restore: {},
			dataView: {}
		}
	},
	legend: {
		top: "bottom",
		data: ["Produção Prevista", "Carros Produzidos"]
	},
	radar: {
		// shape: "circle",
		indicator: [
			{ name: "Mobi" },
			{ name: "Argo" },
			{ name: "Nova Strada" },
			{ name: "Cronos" },
			{ name: "Toro" }
		]
	},
	series: [{
		name: "Produção Prevista x Carros Produzidos",
		type: "radar",
		data: [
			{
				value: [3200, 3000, 1200, 3500, 1865],
				name: "Produção Prevista"
			},
			{
				value: [1777, 1432, 636, 1237, 1068],
				name: "Carros Produzidos"
			}
		]
	}]
};

chart.setOption(option);
window.onresize = chart.resize;
