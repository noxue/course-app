
var app = new Vue({
	el: '#app',
	data: {
		students: [],
		message: 'Hello Vue!'
	},
	methods: {

	}
})

app.$data.message = "aaaa";

window.onload = function() {
	$('#excel-file').change(function(e) {
		var files = e.target.files;

		var fileReader = new FileReader();
		fileReader.onload = function(ev) {
			try {
				var data = ev.target.result,
					workbook = XLSX.read(data, {
						type: 'binary'
					}), // 以二进制流方式读取得到整份excel表格对象
					persons = []; // 存储获取到的数据
			} catch (e) {
				console.log('文件类型不正确');
				return;
			}

			// 表格的表格范围，可用于判断表头是否数量是否正确
			var fromTo = '';
			// 遍历每张表读取
			for (var sheet in workbook.Sheets) {
				if (workbook.Sheets.hasOwnProperty(sheet)) {
					fromTo = workbook.Sheets[sheet]['!ref'];
					console.log(fromTo);
					persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
					// break;
				}
			}

			console.log(persons);
			app.$data.students = persons;
			//将persons赋值给要展示的表格数组里即可展示在界面
			
			
			
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			
			// 指定图表的配置项和数据
			var option = {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data: ['销量']
				},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			};
			
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			
		};

		// 以二进制方式打开文件
		fileReader.readAsBinaryString(files[0]);
	});
}