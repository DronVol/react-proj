import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class HColumnCompare extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var graphs = [];
        for(var k=0;k<this.props.options.data[0].val.length;k++){
            var graph_tmp =
            {
                    "balloonText": "Факт:[[value]]",
                    "color": "#BEBEBE",
                    "fillAlphas": 1,
                    "fillColors": this.props.options.colors[k],
                    "fixedColumnWidth": 10,
                    "fontSize": 13,
                    "id": "AmGraph-"+k,
                    "labelOffset": 10,
                    "labelPosition": "right",
                    "labelText": "[[value]]",
                    "lineAlpha": 0,
                    "showAllValueLabels": true,
                    "showBulletsAt": "open",
                    "title": "graph 1",
                    "type": "column",
                    "valueAxis": "ValueAxis-1",
                    "valueField": "column-"+k
                };
            graphs.push(graph_tmp);
        }
        var data = [];
        for(var i=0;i<this.props.options.data.length;i++){
            var data_tmp = {};
            data_tmp.category = this.props.options.data[i].category;
            for(var k=0;k<this.props.options.data[i].val.length;k++){
                data_tmp["column-"+k] = this.props.options.data[i].val[k];
            }
            data.push(data_tmp);
        }
        console.log(data);

        var amchartsSettings =
        {
            "type": "serial",
            "marginRight": 40,
            "fontFamily": "'Open Sans', sans-serif",
            "categoryField": "category",
            "columnSpacing": 2,
            "rotate": true,
            "marginTop": 0,
            "theme": "black",
            "categoryAxis": {
                "gridPosition": "start",
                "autoGridCount": true,
                "axisAlpha": 0,
                "axisThickness": 2,
                "color": "#A0AAB7",
                "fontSize": 13,
                "gridAlpha": 0,
                "gridCount": 12,
                "gridThickness": 0
            },
            "trendLines": [],
            "graphs": graphs,
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "position": "right",
                    "axisAlpha": 0,
                    "axisThickness": 0,
                    "gridAlpha": 0,
                    "labelsEnabled": false,
                    "tickLength": 0
                }
            ],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider":data
        }
            return (
                <div
                    className="hcolumncompare_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px"}}
                        options={amchartsSettings}
                    />
                </div>
            );
    }
}

export default HColumnCompare;
