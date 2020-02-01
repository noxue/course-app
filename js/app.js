var app = new Vue({
	el: '#app',
	data: {
		students: [],
		message: 'Hello Vue!'
	},
	watch: {
		students: function(val) {
			for (var i = 0; i < val.length; i++) {
				val[i]["总平时成绩"] = parseFloat(val[i]["平时成绩1"]) + parseFloat(val[i]["平时成绩2"]) + parseFloat(val[i]["平时成绩3"]) +
					parseFloat(val[i]["平时成绩4"]);
				val[i]["总期末成绩"] = parseFloat(val[i]["期末成绩1"]) + parseFloat(val[i]["期末成绩2"]) + parseFloat(val[i]["期末成绩3"]) +
					parseFloat(val[i]["期末成绩4"]);
			}
			this.students = val;


			//===============000=======
			// 基于准备好的dom，初始化echarts实例
			var course0 = echarts.init(document.getElementById('course0'));

			option = {
				title: {
					text: '平时总成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["总平时成绩"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course0.setOption(option);


			// 基于准备好的dom，初始化echarts实例
			var course00 = echarts.init(document.getElementById('course00'));
			course00.setOption(option);
			option = {
				title: {
					text: '期末总成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["总期末成绩"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course00.setOption(option);

			//==================1111================

			// 基于准备好的dom，初始化echarts实例
			var course1 = echarts.init(document.getElementById('course1'));

			option = {
				title: {
					text: '课程目标 1 的平时成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["平时成绩1"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course1.setOption(option);


			var course11 = echarts.init(document.getElementById('course11'));

			option = {
				title: {
					text: '课程目标 1 的期末成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["期末成绩1"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course11.setOption(option);


			//=======================2====================

			var course2 = echarts.init(document.getElementById('course2'));

			option = {
				title: {
					text: '课程目标 2 的平时成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["平时成绩2"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course2.setOption(option);


			var course22 = echarts.init(document.getElementById('course22'));

			option = {
				title: {
					text: '课程目标 2 的期末成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["期末成绩2"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course22.setOption(option);

			//========================333=======================

			var course3 = echarts.init(document.getElementById('course3'));

			option = {
				title: {
					text: '课程目标 3 的平时成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["平时成绩3"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course3.setOption(option);


			var course33 = echarts.init(document.getElementById('course33'));

			option = {
				title: {
					text: '课程目标 3 的期末成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["期末成绩3"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course33.setOption(option);

			//====================4444444==================

			var course4 = echarts.init(document.getElementById('course4'));

			option = {
				title: {
					text: '课程目标 4 的平时成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["平时成绩4"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course4.setOption(option);



			var course44 = echarts.init(document.getElementById('course44'));

			option = {
				title: {
					text: '课程目标 4 的期末成绩'
				},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					symbolSize: 20,
					data: [

					],
					type: 'scatter'
				}]
			};
			for (var i = 0; i < this.students.length; i++) {
				option.xAxis.data.push(this.students[i]["姓名"])
				option.series[0].data.push([i, this.students[i]["期末成绩4"]])
			}

			// 使用刚指定的配置项和数据显示图表。
			course44.setOption(option);

			//=================达成度======================


			var course_result = echarts.init(document.getElementById('course_result'));

			option = {
				title: {
					text: '课程目标达成度'
				},
				xAxis: {
					type: 'category',
					data: ["课程目标1", "课程目标2", "课程目标3", "课程目标4"]
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [],
					type: 'bar'
				}]
			};

			var result1 = 0;
			var result11 = 0;
			var result2 = 0;
			var result22 = 0;
			var result3 = 0;
			var result33 = 0;
			var result4 = 0;
			var result44 = 0;
			for (var i = 0; i < this.students.length; i++) {
				result1 += parseFloat(this.students[i]["平时成绩1"]);
				result11 += parseFloat(this.students[i]["期末成绩1"]);
				result2 += parseFloat(this.students[i]["平时成绩2"]);
				result22 += parseFloat(this.students[i]["期末成绩2"]);
				result3 += parseFloat(this.students[i]["平时成绩3"]);
				result33 += parseFloat(this.students[i]["期末成绩3"]);
				result4 += parseFloat(this.students[i]["平时成绩4"]);
				result44 += parseFloat(this.students[i]["期末成绩4"]);
			}
			result1 /= this.students.length;
			result11 /= this.students.length;
			result1 += result11;
			option.series[0].data.push([0, result1/60.0])
			
			
			result2 /= this.students.length;
			result22 /= this.students.length;
			result2 += result22;
			option.series[0].data.push([1, result2/60.0])
			
			
			result3 /= this.students.length;
			result33 /= this.students.length;
			result3 += result33;
			option.series[0].data.push([2, result3/40.0])
			
			
			result4 /= this.students.length;
			result44 /= this.students.length;
			result4 += result44;
			option.series[0].data.push([3, result4/40.0])

			// 使用刚指定的配置项和数据显示图表。
			course_result.setOption(option);

		}
	},
	methods: {
		refresh: function() {
			this.students = this.students;
		}
	},
})

app.$data.message = "aaaa";

window.onload = function() {
	$('#import-file').change(function(e) {
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


		};

		// 以二进制方式打开文件
		fileReader.readAsBinaryString(files[0]);
	});
}
