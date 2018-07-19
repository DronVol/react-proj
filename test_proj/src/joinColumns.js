import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class JoinColumns extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var data = [];
        for(var i=0;i<this.props.options.category.length;i++){
            var data_tmp = {};
            data_tmp.category = this.props.options.category[i];
            data_tmp.plan = this.props.options.plan[i];
            data_tmp.fact = this.props.options.fact[i];
            data.push(data_tmp);
        }

        var amchartsSettings =
        {
        "type": "serial",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "categoryField": "category",
        "colors": [
            this.props.options.planColor,
            this.props.options.factColor
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
                "balloonText": "Банк<br>[[category]]:[[value]]",
                "columnWidth": 0,
                "fillAlphas": 1,
                "fixedColumnWidth": 30,
                "id": "AmGraph-1",
                "labelPosition": "inside",
                "labelText": "",
                "title": "graph 1",
                "type": "column",
                "valueField": "fact"
            },
            {
                "labelOffset": 7,
                "balloonText": "ДЗО<br>[[category]]:[[value]]",
                "columnWidth": 0,
                "fillAlphas": 1,
                "fixedColumnWidth": 30,
                "id": "AmGraph-2",
                "labelPosition": "top",
                "color": "#A0AAB7",
                "labelText": "",
                "title": "graph 1",
                "type": "column",
                "valueField": "plan"
            }
        ],
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
                    className="joincolumns_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px"}}
                        options={amchartsSettings}
                    />
                </div>
            );
    }
}

export default JoinColumns;
