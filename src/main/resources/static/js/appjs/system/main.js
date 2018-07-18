/**
 * Created by Administrator on 2018/5/11.
 * 销售数据图形化显示
 */
$(function () {
    /*中国地图*/
    var mapChart = echarts.init(document.getElementById("echarts-map-chart"));
    var mapoption = {
        title : {
            text: '香飘飘全国销售示意图',
            subtext: '纯属虚构，如有雷同，那就是真的！',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['香飘飘冲泡','MECO','兰芳园']
        },
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '香飘飘冲泡',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '河南',value: Math.round(Math.random()*1000)},
                    {name: '云南',value: Math.round(Math.random()*1000)},
                    {name: '辽宁',value: Math.round(Math.random()*1000)},
                    {name: '黑龙江',value: Math.round(Math.random()*1000)},
                    {name: '湖南',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '山东',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '江苏',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '湖北',value: Math.round(Math.random()*1000)},
                    {name: '广西',value: Math.round(Math.random()*1000)},
                    {name: '甘肃',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '陕西',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '贵州',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '青海',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '海南',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: 'MECO',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '兰芳园',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };
    mapChart.setOption(mapoption);
    $(window).resize(mapChart.resize);

    ///*点状分布图*/
    //var scatterChart = echarts.init(document.getElementById("echarts-scatter-chart"));
    //var scatteroption = {
    //    title : {
    //        text: '香飘飘液体/冲泡销售点状分布',
    //        subtext: '抽样调查来自: EXP销售提报数据'
    //    },
    //    grid: {
    //        left: '3%',
    //        right: '7%',
    //        bottom: '3%',
    //        containLabel: true
    //    },
    //    tooltip : {
    //        trigger: 'axis',
    //        showDelay : 0,
    //        axisPointer:{
    //            type : 'cross',
    //            lineStyle: {
    //                type : 'dashed',
    //                width : 1
    //            }
    //        }
    //    },
    //    toolbox : {
    //      feature : {
    //          dataZoom : {},
    //          brush : {
    //              type : ['rect', 'polygon', 'clear']
    //          }
    //      }
    //    },
    //    brush : {
    //    },
    //    legend: {
    //        data:['液体','冲泡'],
    //        left : 'center'
    //    },
    //    xAxis : [
    //        {
    //            type : 'value',
    //            scale:true,
    //            axisLabel : {
    //                formatter: '{value} MONTH'
    //            }
    //        }
    //    ],
    //    yAxis : [
    //        {
    //            type : 'value',
    //            scale:true,
    //            axisLabel : {
    //                formatter: '{value} BOX'
    //            }
    //        }
    //    ],
    //    series : [
    //        {
    //            name:'液体',
    //            type:'scatter',
    //            tooltip : {
    //                trigger: 'item',
    //                formatter : function (params) {
    //                    if (params.value.length > 1) {
    //                        return params.seriesName + ' :<br/>'
    //                            + params.value[0] + 'BOX'
    //                            + params.value[1] + 'MONTH';
    //                    }
    //                    else {
    //                        return params.seriesName + ' :<br/>'
    //                            + params.name + ' : '
    //                            + params.value + 'MONTH';
    //                    }
    //                }
    //            },
    //            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
    //                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
    //                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
    //                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
    //                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
    //                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
    //                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
    //                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
    //                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
    //                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
    //                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
    //                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
    //                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
    //                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
    //                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
    //                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
    //                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
    //                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
    //                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
    //                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
    //                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
    //                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
    //                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
    //                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
    //                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
    //                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
    //                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
    //                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
    //                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
    //                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
    //                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
    //                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
    //                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
    //                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
    //                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
    //                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
    //                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
    //                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
    //                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
    //                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
    //                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
    //                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
    //                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
    //                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
    //                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
    //                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
    //                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
    //                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
    //                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
    //                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
    //                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
    //                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
    //            ],
    //            markArea: {
    //                silent: true,
    //                itemStyle: {
    //                    normal: {
    //                        color: 'transparent',
    //                        borderWidth: 1,
    //                        borderType: 'dashed'
    //                    }
    //                },
    //                data: [[{
    //                    name: '液体分布区间',
    //                    xAxis: 'min',
    //                    yAxis: 'min'
    //                }, {
    //                    xAxis: 'max',
    //                    yAxis: 'max'
    //                }]]
    //            },
    //            markPoint : {
    //                data : [
    //                    {type : 'max', name: '最大值'},
    //                    {type : 'min', name: '最小值'}
    //                ]
    //            },
    //            markLine : {
    //                lineStyle : {
    //                  normal :{
    //                      type : 'solid'
    //                  }
    //                },
    //                data : [
    //                    {type : 'average', name: '平均值'}
    //                ]
    //            }
    //        },
    //        {
    //            name:'冲泡',
    //            type:'scatter',
    //            tooltip : {
    //                trigger: 'item',
    //                formatter : function (params) {
    //                    if (params.value.length > 1) {
    //                        return params.seriesName + ' :<br/>'
    //                            + params.value[0] + 'BOX '
    //                            + params.value[1] + 'MONTH ';
    //                    }
    //                    else {
    //                        return params.seriesName + ' :<br/>'
    //                            + params.name + ' : '
    //                            + params.value + 'MONTH ';
    //                    }
    //                }
    //            },
    //            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
    //                [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
    //                [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
    //                [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
    //                [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
    //                [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
    //                [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
    //                [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
    //                [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
    //                [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
    //                [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
    //                [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
    //                [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
    //                [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
    //                [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
    //                [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
    //                [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
    //                [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
    //                [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
    //                [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
    //                [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
    //                [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
    //                [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
    //                [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
    //                [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
    //                [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
    //                [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
    //                [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
    //                [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
    //                [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
    //                [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
    //                [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
    //                [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
    //                [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
    //                [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
    //                [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
    //                [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
    //                [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
    //                [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
    //                [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
    //                [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
    //                [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
    //                [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
    //                [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
    //                [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
    //                [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
    //                [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
    //                [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
    //                [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
    //                [180.3, 83.2], [180.3, 83.2]
    //            ],
    //            markPoint : {
    //                data : [
    //                    {type : 'max', name: '最大值'},
    //                    {type : 'min', name: '最小值'}
    //                ]
    //            },
    //            markLine : {
    //                data : [
    //                    {type : 'average', name: '平均值'}
    //                ]
    //            }
    //        }
    //    ]
    //};
    //scatterChart.setOption(scatteroption);
    //$(window).resize(scatterChart.resize);
    //
    //
    ///*全局数据*/
    //var dataBJ = [
    //    [1,55,9,56,0.46,18,6,"良"],
    //    [2,25,11,21,0.65,34,9,"优"],
    //    [3,56,7,63,0.3,14,5,"良"],
    //    [4,33,7,29,0.33,16,6,"优"],
    //    [5,42,24,44,0.76,40,16,"优"],
    //    [6,82,58,90,1.77,68,33,"良"],
    //    [7,74,49,77,1.46,48,27,"良"],
    //    [8,78,55,80,1.29,59,29,"良"],
    //    [9,267,216,280,4.8,108,64,"重度污染"],
    //    [10,185,127,216,2.52,61,27,"中度污染"],
    //    [11,39,19,38,0.57,31,15,"优"],
    //    [12,41,11,40,0.43,21,7,"优"],
    //    [13,64,38,74,1.04,46,22,"良"],
    //    [14,108,79,120,1.7,75,41,"轻度污染"],
    //    [15,108,63,116,1.48,44,26,"轻度污染"],
    //    [16,33,6,29,0.34,13,5,"优"],
    //    [17,94,66,110,1.54,62,31,"良"],
    //    [18,186,142,192,3.88,93,79,"中度污染"],
    //    [19,57,31,54,0.96,32,14,"良"],
    //    [20,22,8,17,0.48,23,10,"优"],
    //    [21,39,15,36,0.61,29,13,"优"],
    //    [22,94,69,114,2.08,73,39,"良"],
    //    [23,99,73,110,2.43,76,48,"良"],
    //    [24,31,12,30,0.5,32,16,"优"],
    //    [25,42,27,43,1,53,22,"优"],
    //    [26,154,117,157,3.05,92,58,"中度污染"],
    //    [27,234,185,230,4.09,123,69,"重度污染"],
    //    [28,160,120,186,2.77,91,50,"中度污染"],
    //    [29,134,96,165,2.76,83,41,"轻度污染"],
    //    [30,52,24,60,1.03,50,21,"良"],
    //    [31,46,5,49,0.28,10,6,"优"]
    //];
    //var dataGZ = [
    //    [1,26,37,27,1.163,27,13,"优"],
    //    [2,85,62,71,1.195,60,8,"良"],
    //    [3,78,38,74,1.363,37,7,"良"],
    //    [4,21,21,36,0.634,40,9,"优"],
    //    [5,41,42,46,0.915,81,13,"优"],
    //    [6,56,52,69,1.067,92,16,"良"],
    //    [7,64,30,28,0.924,51,2,"良"],
    //    [8,55,48,74,1.236,75,26,"良"],
    //    [9,76,85,113,1.237,114,27,"良"],
    //    [10,91,81,104,1.041,56,40,"良"],
    //    [11,84,39,60,0.964,25,11,"良"],
    //    [12,64,51,101,0.862,58,23,"良"],
    //    [13,70,69,120,1.198,65,36,"良"],
    //    [14,77,105,178,2.549,64,16,"良"],
    //    [15,109,68,87,0.996,74,29,"轻度污染"],
    //    [16,73,68,97,0.905,51,34,"良"],
    //    [17,54,27,47,0.592,53,12,"良"],
    //    [18,51,61,97,0.811,65,19,"良"],
    //    [19,91,71,121,1.374,43,18,"良"],
    //    [20,73,102,182,2.787,44,19,"良"],
    //    [21,73,50,76,0.717,31,20,"良"],
    //    [22,84,94,140,2.238,68,18,"良"],
    //    [23,93,77,104,1.165,53,7,"良"],
    //    [24,99,130,227,3.97,55,15,"良"],
    //    [25,146,84,139,1.094,40,17,"轻度污染"],
    //    [26,113,108,137,1.481,48,15,"轻度污染"],
    //    [27,81,48,62,1.619,26,3,"良"],
    //    [28,56,48,68,1.336,37,9,"良"],
    //    [29,82,92,174,3.29,0,13,"良"],
    //    [30,106,116,188,3.628,101,16,"轻度污染"],
    //    [31,118,50,0,1.383,76,11,"轻度污染"]
    //];
    //var dataSH = [
    //    [1,91,45,125,0.82,34,23,"良"],
    //    [2,65,27,78,0.86,45,29,"良"],
    //    [3,83,60,84,1.09,73,27,"良"],
    //    [4,109,81,121,1.28,68,51,"轻度污染"],
    //    [5,106,77,114,1.07,55,51,"轻度污染"],
    //    [6,109,81,121,1.28,68,51,"轻度污染"],
    //    [7,106,77,114,1.07,55,51,"轻度污染"],
    //    [8,89,65,78,0.86,51,26,"良"],
    //    [9,53,33,47,0.64,50,17,"良"],
    //    [10,80,55,80,1.01,75,24,"良"],
    //    [11,117,81,124,1.03,45,24,"轻度污染"],
    //    [12,99,71,142,1.1,62,42,"良"],
    //    [13,95,69,130,1.28,74,50,"良"],
    //    [14,116,87,131,1.47,84,40,"轻度污染"],
    //    [15,108,80,121,1.3,85,37,"轻度污染"],
    //    [16,134,83,167,1.16,57,43,"轻度污染"],
    //    [17,79,43,107,1.05,59,37,"良"],
    //    [18,71,46,89,0.86,64,25,"良"],
    //    [19,97,71,113,1.17,88,31,"良"],
    //    [20,84,57,91,0.85,55,31,"良"],
    //    [21,87,63,101,0.9,56,41,"良"],
    //    [22,104,77,119,1.09,73,48,"轻度污染"],
    //    [23,87,62,100,1,72,28,"良"],
    //    [24,168,128,172,1.49,97,56,"中度污染"],
    //    [25,65,45,51,0.74,39,17,"良"],
    //    [26,39,24,38,0.61,47,17,"优"],
    //    [27,39,24,39,0.59,50,19,"优"],
    //    [28,93,68,96,1.05,79,29,"良"],
    //    [29,188,143,197,1.66,99,51,"中度污染"],
    //    [30,174,131,174,1.55,108,50,"中度污染"],
    //    [31,187,143,201,1.39,89,53,"中度污染"]
    //];
    //var schema = [
    //    {name: 'date', index: 0, text: '日'},
    //    {name: 'AQIindex', index: 1, text: 'AQI指数'},
    //    {name: 'PM25', index: 2, text: 'PM2.5'},
    //    {name: 'PM10', index: 3, text: 'PM10'},
    //    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    //    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    //    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
    //];
    //var itemStyle = {
    //    normal: {
    //        opacity: 0.8,
    //        shadowBlur: 10,
    //        shadowOffsetX: 0,
    //        shadowOffsetY: 0,
    //        shadowColor: 'rgba(0, 0, 0, 0.5)'
    //    }
    //};
    //var scatterChart2 = echarts.init(document.getElementById("echarts-scatter-chart2"));
    //var scatteroption2 = {
    //    backgroundColor: '#404a59',
    //    color: [
    //        '#dd4444', '#fec42c', '#80F1BE'
    //    ],
    //    legend: {
    //        y: 'top',
    //        data: ['北京', '上海', '广州'],
    //        textStyle: {
    //            color: '#fff',
    //            fontSize: 16
    //        }
    //    },
    //    grid: {
    //        x: '10%',
    //        x2: 150,
    //        y: '18%',
    //        y2: '10%'
    //    },
    //    tooltip: {
    //        padding: 10,
    //        backgroundColor: '#222',
    //        borderColor: '#777',
    //        borderWidth: 1,
    //        formatter: function (obj) {
    //            var value = obj.value;
    //            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
    //                + obj.seriesName + ' ' + value[0] + '日：'
    //                + value[7]
    //                + '</div>'
    //                + schema[1].text + '：' + value[1] + '<br>'
    //                + schema[2].text + '：' + value[2] + '<br>'
    //                + schema[3].text + '：' + value[3] + '<br>'
    //                + schema[4].text + '：' + value[4] + '<br>'
    //                + schema[5].text + '：' + value[5] + '<br>'
    //                + schema[6].text + '：' + value[6] + '<br>';
    //        }
    //    },
    //    xAxis: {
    //        type: 'value',
    //        name: '日期',
    //        nameGap: 16,
    //        nameTextStyle: {
    //            color: '#fff',
    //            fontSize: 14
    //        },
    //        max: 31,
    //        splitLine: {
    //            show: false
    //        },
    //        axisLine: {
    //            lineStyle: {
    //                color: '#eee'
    //            }
    //        }
    //    },
    //    yAxis: {
    //        type: 'value',
    //        name: 'AQI指数',
    //        nameLocation: 'end',
    //        nameGap: 20,
    //        nameTextStyle: {
    //            color: '#fff',
    //            fontSize: 16
    //        },
    //        axisLine: {
    //            lineStyle: {
    //                color: '#eee'
    //            }
    //        },
    //        splitLine: {
    //            show: false
    //        }
    //    },
    //    visualMap: [
    //        {
    //            left: 'right',
    //            top: '10%',
    //            dimension: 2,
    //            min: 0,
    //            max: 250,
    //            itemWidth: 30,
    //            itemHeight: 120,
    //            calculable: true,
    //            precision: 0.1,
    //            text: ['圆形大小：PM2.5'],
    //            textGap: 30,
    //            textStyle: {
    //                color: '#fff'
    //            },
    //            inRange: {
    //                symbolSize: [10, 70]
    //            },
    //            outOfRange: {
    //                symbolSize: [10, 70],
    //                color: ['rgba(255,255,255,.2)']
    //            },
    //            controller: {
    //                inRange: {
    //                    color: ['#c23531']
    //                },
    //                outOfRange: {
    //                    color: ['#444']
    //                }
    //            }
    //        },
    //        {
    //            left: 'right',
    //            bottom: '5%',
    //            dimension: 6,
    //            min: 0,
    //            max: 50,
    //            itemHeight: 120,
    //            calculable: true,
    //            precision: 0.1,
    //            text: ['明暗：二氧化硫'],
    //            textGap: 30,
    //            textStyle: {
    //                color: '#fff'
    //            },
    //            inRange: {
    //                colorLightness: [1, 0.5]
    //            },
    //            outOfRange: {
    //                color: ['rgba(255,255,255,.2)']
    //            },
    //            controller: {
    //                inRange: {
    //                    color: ['#c23531']
    //                },
    //                outOfRange: {
    //                    color: ['#444']
    //                }
    //            }
    //        }
    //    ],
    //    series: [
    //        {
    //            name: '北京',
    //            type: 'scatter',
    //            itemStyle: itemStyle,
    //            data: dataBJ
    //        },
    //        {
    //            name: '上海',
    //            type: 'scatter',
    //            itemStyle: itemStyle,
    //            data: dataSH
    //        },
    //        {
    //            name: '广州',
    //            type: 'scatter',
    //            itemStyle: itemStyle,
    //            data: dataGZ
    //        }
    //    ]
    //};
    //scatterChart2.setOption(scatteroption2);
    //$(window).resize(scatterChart.resize);


});