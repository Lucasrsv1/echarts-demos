const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "Variação da Eficiência Técnica (OP 10)"
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	tooltip: {
		formatter: params => {
			return `
				${params.seriesName}<br/>
				${params.marker}${params.name}<br/>
				Início do dia: <b>${params.data[1]}%</b><br/>
				Fim do dia: <b>${params.data[2]}%</b><br/>
				Mínima: <b>${params.data[3]}%</b><br/>
				Máxima: <b>${params.data[4]}%</b>
			`;
		}
	},
	xAxis: {
		name: "Dia",
		nameGap: 7,
		data: ["07/06/2021", "08/06/2021", "09/06/2021", "10/06/2021", "11/06/2021"]
	},
	yAxis: {
		name: "Eficiência Técnica",
		nameGap: 15,
		type: "value",
		min: 0,
		max: 100
	},
	series: [{
		name: "Eficiência Técnica",
		type: "candlestick",
		itemStyle: {
			color: "#47B262",
			borderColor: "#47B262",
			color0: "#EB5454",
			borderColor0: "#EB5454"
		},
		data: [
			[81, 73, 65, 87],
			[75, 85, 58, 89],
			[79, 94, 79, 97],
			[92, 86, 74, 93],
			[68, 94, 65, 98]
		]
	}],
	grid: {
		containLabel: true,
		left: 30,
		right: 80,
		top: 60,
		bottom: 50
	}
};

chart.setOption(option);
window.onresize = chart.resize;
