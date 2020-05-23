// 定义全局变量
var $;
layui.use(['form', 'layer', 'laydate'], function() {
	$ = layui.jquery;
	var form = layui.form,
		layer = layui.layer,
		laydate = layui.laydate;
	//日期1
	laydate.render({
		elem: '#grade',
		type: 'year'
	});
	//日期2
	laydate.render({
		elem: '#daterange',
		type: 'month',
		range: '~'
	});
	
	// 监听搜索_1操作
	form.on('submit(data-search-btn1)', function(data) {
		var result = JSON.stringify(data.field);
		layer.alert(result, {
			title: '最终的搜索信息'
		});
		//执行搜索重载
		table.reload('userloginlogTable', {
			page: {
				curr: 1
			},
			where: {
				searchParams: result
			}
		}, 'data');
		return false;
	});
	// 监听搜索_2操作
	form.on('submit(data-search-btn2)', function(data) {
		var result = JSON.stringify(data.field);
		layer.alert(result, {
			title: '最终的搜索信息'
		});
		//执行搜索重载
		table.reload('userloginlogTable', {
			page: {
				curr: 1
			},
			where: {
				searchParams: result
			}
		}, 'data');
		return false;
	});
	
	
	
	
    /**
	 * 图表统计
	 */
	var echarts_pienum = echarts.init(document.getElementById('pienum'), 'walden');
	var echarts_piewin = echarts.init(document.getElementById('piewin'), 'walden');
	var echarts_histogram = echarts.init(document.getElementById('histogrammajor'), 'walden');
	
	// 成员人数统计饼图
	var pienum = {
	    title : {
	        text: '根据各年级统计成员人数饼图',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['大一','大二','大三','大四','毕业']
	    },
	    series : [
	        {
	            name: '成员来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'大一'},
	                {value:560, name:'大二'},
	                {value:800, name:'大三'},
	                {value:300, name:'大四'},
	                {value:150, name:'毕业'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	// 各院系成员统计饼图
	var piewin = {
	    title : {
	        text: '根据各院系统计成员饼图',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['计算机科学与技术学院','应用科学学院','电子信息工程学院','机械工程学院','材料科学与工程学院']
	    },
	    series : [
	        {
	            name: '成员来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:1500, name:'计算机科学与技术学院'},
	                {value:410, name:'应用科学学院'},
	                {value:556, name:'电子信息工程学院'},
	                {value:335, name:'机械工程学院'},
	                {value:148, name:'材料科学与工程学院'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};

	var histogram = {
	    legend: {},
	    tooltip: {},
		toolbox : {
			show : true,
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				magicType : {
					show : true,
					type : [ 'line', 'bar' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
	    dataset: {
	        source: [
	            ['product', '2018', '2019'],
	            ['软件工程', 43.3,  93.7],
	            ['计算机科学与技术', 83.1,  55.1],
	            ['网络工程', 86.4, 82.5],
	            ['数字媒体技术', 72.4, 39.1],
	            ['物联网工程', 72.4, 39.1]
	        ]
	    },
	    xAxis: {type: 'category'},
	    yAxis: {},
	    // Declare several bar series, each will be mapped
	    // to a column of dataset.source by default.
	    series: [
	        {type: 'bar'},
	        {type: 'bar'}
	    ]
	};

	echarts_pienum.setOption(pienum);
	echarts_piewin.setOption(piewin);
	echarts_histogram.setOption(histogram);
	// echarts 窗口缩放自适应
	window.onresize = function() {
		echarts_pienum.resize();
		echarts_piewin.resize();
		echarts_histogram.resize();
	}

});