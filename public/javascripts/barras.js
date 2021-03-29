const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "ECharts entry example"
	},
	tooltip: {},
	legend: {
		data: ["Sales"]
	},
	xAxis: {
		data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
	},
	yAxis: {},
	series: [{
		name: "Sales",
		type: "bar",
		data: [5, 20, 36, 10, 10, 20]
	}],
	grid: {
		containLabel: true,
		left: 0,
		right: 0,
		top: 50,
		bottom: 0
	}
};

chart.setOption(option);
window.onresize = chart.resize;
