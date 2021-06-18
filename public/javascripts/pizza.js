const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "Estado da Máquina",
		subtext: "Dados de 17/06/2021 06:00 à 18/06/2021 05:59",
		left: "center"
	},
	tooltip: {
		trigger: "item",
		formatter: params => {
			var hh = Math.floor(params.data.value / 3600).toString().padStart(2, "0");
			var mm = Math.floor((params.data.value - hh * 3600) / 60).toString().padStart(2, "0");
			var ss = (params.data.value - hh * 3600 - mm * 60).toString().padStart(2, "0");

			return `${params.seriesName}<br/>${params.marker} ${params.data.name}: <b>${hh}:${mm}:${ss}</b>`;
		}
	},
	toolbox: {
		feature: {
			saveAsImage: {},
			restore: {},
			dataView: {}
		}
	},
	legend: {
		orient: "vertical",
		left: "left"
	},
	series: [{
		name: "OP 10",
		type: "pie",
		radius: "65%",
		data: [
			{ value: 5251, name: "Predisposto" },
			{ value: 51749, name: "Produzindo" },
			{ value: 8200, name: "Parada Programada" },
			{ value: 3800, name: "Parada não Programada" }
		],
		emphasis: {
			itemStyle: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: "rgba(0, 0, 0, 0.5)"
			}
		}
	}]
};

chart.setOption(option);
window.onresize = chart.resize;
