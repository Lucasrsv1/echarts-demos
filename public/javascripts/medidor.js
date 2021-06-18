const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "OEE (OP 260)",
		subtext: "Dados de 17/06/2021 06:00 à 18/06/2021 05:59",
		left: "center"
	},
	series: [{
		type: "gauge",
		center: ["50%", "60%"],
		axisLine: {
			lineStyle: {
				width: 30,
				color: [[0.25, "#C23531"], [0.5, "#F49B45"], [0.75, "#E3DC28"], [1, "#1CD064"]]
			}
		},
		pointer: {
			itemStyle: { color: "auto" }
		},
		axisTick: {
			distance: -30,
			length: 8,
			lineStyle: {
				color: "#FFF",
				width: 2
			}
		},
		splitLine: {
			distance: -30,
			length: 30,
			lineStyle: {
				color: "#FFF",
				width: 4
			}
		},
		axisLabel: {
			color: "auto",
			distance: 40,
			fontSize: 20
		},
		detail: {
			valueAnimation: true,
			formatter: "{value}%",
			color: "auto"
		},
		data: [{ value: 78.4 }]
	}]
};

chart.setOption(option);
window.onresize = chart.resize;
