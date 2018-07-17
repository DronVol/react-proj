import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class MultiLine extends Component {
    constructor(props){
        super(props);
    }
    render() {
            var amchartsSettings =
            {

                    "type": "serial",
                    "fontFamily": "'Open Sans', sans-serif",
                    "categoryField": "category",
                    "zoomOutButtonRollOverAlpha": 0,
                    "colors": this.props.options.colors,
                    "sequencedAnimation": false,
                    "startDuration": 0,
                    "color": "#a1abb8",
                    "fontSize": 13,
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisColor": "#a0aab7",
                        "color": "#A0AAB7",
                        "axisThickness": 0.4,
                        "gridAlpha": 0,
                        "gridColor": "#E5E5E5",
                        "gridCount": 0,
                        "gridThickness": 0,
                        "titleColor": "#FFFFFF"
                    },
                    "trendLines": [],
                    "graphs": [],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "precision": 0,
                            "axisAlpha": 0.0,
                            "axisColor": "#E5E5E5",
                            "gridAlpha": 0,
                            "gridThickness": 0,
                            "gridColor": "#E5E5E5",
                            "labelsEnabled": false,
                            "title": "",
                            "titleColor": "#E5E5E5"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {
                        "fillAlpha": 1,
                        "offsetX": 9,
                        "shadowAlpha": 0
                    },
                    "titles": [],
                    "dataProvider": []

                }
                var data = [];

                var grNum = this.props.options.colors.length;
                for (var i = 0;i<grNum;i++){
                    amchartsSettings.graphs.push(
                        {
                            "balloonText": "[[category]]: [[value]]%",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": this.props.options.colors[i],
                            "bulletColor": this.props.options.colors[i],
                            "bulletSize": 3,
                            "id": "AmGraph-"+i,
                            "fontSize": 13,
                            "labelText": "[[value]]%",
                            "lineThickness": 3,
                            "title": "",
                            "valueField": "val"+i
                        }


                    );
                }
                var catNum = this.props.options.categories.length;
                for (var i = 0;i<catNum;i++){
                    var dataCurr = {};
                    dataCurr["category"]=this.props.options.categories[i];
        			for (var j = 0; j<grNum; j++){
                        dataCurr["val"+j]=this.props.options.data[j][i];
                    }
                    data.push(dataCurr);
                }
                amchartsSettings.dataProvider = data;
                console.log(amchartsSettings);
                return (
                    <div
                        className="multiline_wrapper__item"
                        style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                        <AmCharts.React style={{"height": "300px"}}
                            options={amchartsSettings}
                        />
                    </div>
                );
    }
}

export default MultiLine;
