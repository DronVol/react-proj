import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class ColumnLines extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var data = [];
        for (var i=0;i<this.props.options.data.length;i++){
            var data_tmp = {};
            data_tmp.category = this.props.options.data[i].category;
            data_tmp["line-2"] = this.props.options.data[i].line;
            data_tmp["column-1"] = this.props.options.data[i].column;
            //console.log(data_tmp);
            data.push(data_tmp);
        }
        var amchartsSettings =
        {
                "type": "serial",
                "fontFamily": "'Open Sans', sans-serif",
                "fontSize": 13,
                "categoryField": "category",
                "colors": [
                    this.props.options.lineColor
                ],
                "startDuration": 0,
                "categoryAxis": {
                    "labelsEnabled": false,
                    "gridPosition": "start",
                    "autoGridCount": false,
                    "axisColor": "#a0aab7",
                    "color": "#A0AAB7",
                    "axisThickness": 0,
                    "gridThickness": 0
                },
                "trendLines": [],
                "graphs": [
                    {
                        "balloonText": "[[category]]:[[value]]",
                        "bullet": "round",
                        "id": "AmGraph-2",
                        "labelOffset": 5,
                        "labelText": "",
                        "labelPosition": "top",
                        "color": "#A0AAB7",
                        "lineThickness": 2,
                        "title": "graph 2",
                        "valueField": "line-2"
                    }
                ],
                "guides": [],
                "valueAxes": [{
                    "id": "ValueAxis-1",
                    "axisThickness": 0,
                    "gridThickness": 0,
                    "labelsEnabled": false,
                    "tickLength": 0,
                    "title": ""
                }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "dataProvider": data
                //     [
                //        {
                //        "category": "2016",
                //        "column-1": "н/д",
                //        "line-2": "н/д"
                //        },
                //        {
                //        "category": "2017",
                //        "column-1": "324",
                //        "line-2": "326"
                //        },
                //        {
                //        "category": "2018",
                //        "column-1": "85",
                //        "line-2": "328"
                //        },
                //        {
                //        "category": "2019",
                //        "column-1": "н/д",
                //        "line-2": "н/д"
                //        },
                //        {
                //        "category": "2020",
                //        "column-1": "н/д",
                //        "line-2": "н/д"
                //   }
                // ]
            }
            var amchartsSettings_2 = {
                "type": "serial",
                "fontFamily": "'Open Sans', sans-serif",
                "fontSize": 14,
                "categoryField": "category",
                "colors": [
                    this.props.options.columnColor
                ],
                "startDuration": 0,
                "categoryAxis": {
                    "gridPosition": "start",
                    "autoGridCount": false,
                    "axisColor": "#a0aab7",
                    "color": "#A0AAB7",
                    "axisThickness": 1,
                    "gridThickness": 0
                },
                "trendLines": [],
                "graphs": [
                    {
                        "labelOffset": 7,
                        "balloonText": "[[category]]:[[value]]",
                        "columnWidth": 0,
                        "fillAlphas": 1,
                        "fixedColumnWidth": 30,
                        "id": "AmGraph-1",
                        "labelPosition": "top",
                        "color": "#A0AAB7",
                        "labelText": "[[value]]",
                        "title": "graph 1",
                        "type": "column",
                        "valueField": "column-1"
                    }
                ],
                "guides": [],
                "valueAxes": [{
                    "id": "ValueAxis-1",
                    "axisThickness": 0,
                    "gridThickness": 0,
                    "labelsEnabled": false,
                    "tickLength": 0,
                    "title": ""
                }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "dataProvider": data
                // [
                //                {
                //                "category": "2016",
                //                "column-1": "н/д",
                //                "line-2": "н/д"
                //                },
                //                {
                //                "category": "2017",
                //                "column-1": "324",
                //                "line-2": "326"
                //                },
                //                {
                //                "category": "2018",
                //                "column-1": "85",
                //                "line-2": "328"
                //                },
                //                {
                //                "category": "2019",
                //                "column-1": "н/д",
                //                "line-2": "н/д"
                //                },
                //                {
                //                "category": "2020",
                //                "column-1": "н/д",
                //                "line-2": "н/д"
                //           }
                //         ]
            }
            return (
                <div
                    className="columnlines_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px", "position":"absolute","width":"500px"}}
                        options={amchartsSettings}
                    />
                <AmCharts.React style={{"height": "300px", "position":"absolute","width":"500px"}}
                        options={amchartsSettings_2}
                    />
                </div>
            );
    }
}

export default ColumnLines;
