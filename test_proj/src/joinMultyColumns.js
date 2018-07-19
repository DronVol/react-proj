import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class JoinMultyColumns extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var graphs = [];
        for(var k=0;k<this.props.options.data.length;k++){
            var graph_tmp =
            {
                "labelOffset": 7,
                "balloonText": "Банк<br>[[category]]:[[value]]",
                "columnWidth": 0,
                "fillAlphas": 1,
                "fixedColumnWidth": 30,
                "id": "AmGraph-"+k,
                "labelPosition": "inside",
                "labelText": "",
                "title": "graph "+k,
                "type": "column",
                "valueField": "column"+k
            };
            graphs.push(graph_tmp);
        }
        var data = [];
        for(var i=0;i<this.props.options.category.length;i++){
            var data_tmp = {};
            data_tmp.category = this.props.options.category[i];
            for(var k=0;k<this.props.options.data.length;k++){
                data_tmp["column"+k] = this.props.options.data[k][i];
            }
            data.push(data_tmp);
        }

        var amchartsSettings =
        {
        "type": "serial",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "categoryField": "category",
        "colors": this.props.options.colors,
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
        "graphs": graphs,
        "guides": [],
        "valueAxes": [{
            "id": "ValueAxis-1",
            "stackType": "regular",
            "axisThickness": 0,
            "gridThickness": 0,
            "labelsEnabled": false,
            "tickLength": 0,
            "totalText": "[[total]]",
            "title": ""
        }
        ],
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": data
    }
            return (
                <div
                    className="joinmultycolumns_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px"}}
                        options={amchartsSettings}
                    />
                </div>
            );
    }
}

export default JoinMultyColumns;
