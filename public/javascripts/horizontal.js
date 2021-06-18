const chart = echarts.init(document.getElementById("chart"));

const option = {
	title: {
		text: "Carros Produzidos"
	},
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow"
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
		data: ["Mobi", "Argo", "Nova Strada", "Cronos", "Toro"]
	},
	xAxis: {
		name: "Carros",
		nameGap: 7,
		type: "value"
	},
	yAxis: {
		name: "Dia da Semana",
		nameGap: 7,
		type: "category",
		data: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
	},
	series: [{
		name: "Mobi",
		type: "bar",
		stack: "total",
		label: { show: true },
		emphasis: { focus: "series" },
		data: [320, 302, 301, 334, 390, 130, 0]
	}, {
		name: "Argo",
		type: "bar",
		stack: "total",
		label: { show: true },
		emphasis: { focus: "series" },
		data: [225, 183, 191, 233, 270, 330, 0]
	}, {
		name: "Nova Strada",
		type: "bar",
		stack: "total",
		label: { show: true },
		emphasis: { focus: "series" },
		data: [121, 132, 101, 134, 90, 58, 0]
	}, {
		name: "Cronos",
		type: "bar",
		stack: "total",
		label: { show: true },
		emphasis: { focus: "series" },
		data: [150, 212, 201, 154, 190, 330, 0]
	}, {
		name: "Toro",
		type: "bar",
		stack: "total",
		label: { show: true },
		emphasis: { focus: "series" },
		data: [98, 135, 189, 204, 184, 258, 0]
	}],
	grid: {
		containLabel: true,
		left: 10,
		right: 60,
		top: 60,
		bottom: 50
	}
};

chart.setOption(option);
window.onresize = chart.resize;
