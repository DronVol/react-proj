import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class Waterfall extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var data = []
        for(var i=0;i<this.props.options.data.length;i++){
            var data_tmp = {}
            data_tmp.name = this.props.options.data[i].name
            data_tmp.close = this.props.options.data[i].val
            if((i==0)||(i==this.props.options.data.length-1)){
                data_tmp.open = this.props.options.startValue;
                data_tmp.color = "#dfdfdf";
                data_tmp.balloonValue = data_tmp.close
            } else {
                data_tmp.open = this.props.options.data[i-1].val
                data_tmp.balloonValue = data_tmp.close - data_tmp.open
                if (data_tmp.close - data_tmp.open >= 0){
                    data_tmp.color = "#6EC7F7";
                    data_tmp.balloonValue = "+"+data_tmp.balloonValue;
                } else{
                    data_tmp.color = "#61db96";
                    data_tmp.balloonValue = ""+data_tmp.balloonValue;
                }
            }
            data.push(data_tmp)
        }
        var amchartsSettings =
        {
                    "type": "serial",
                    "fontFamily": "'Open Sans', sans-serif",
                    "categoryField": "name",
                    "columnWidth": 0.6,
                    "color": "#a1abb8",
                    "rotate": true,
                    "marginRight": 40,
                    "theme": "dark",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "axisColor": "#a0aab7",
                        "color": "#c9cbce",
                        "fontSize": 14,
                        "gridThickness": 0,
                        "axisAlpha": 0
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[category]]:<br>[[value]] млрд. руб",
                            "colorField": "color",
                            "fillAlphas": 0.8,
                            "id": "AmGraph-1",
                            "fixedColumnWidth": 20,
                            "fontSize": 13,
                            "labelText": "[[balloonValue]]",
                            "lineColor": "#36414D",
                            "color": "#DCDDDF",
                            "openField": "open",
                            "type": "column",
                            "valueField": "close"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "axisFrequency": 0,
                            "id": "ValueAxis-1",
                            "logarithmic": true,
                            "color": "#DCDDDF",
                            "axisAlpha": 0,
                            "axisThickness": 0,
                            "gridThickness": 0,
                            "labelOffset": 1,
                            "labelsEnabled": false,
                            "tickLength": 0
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "titles": [],
                    "dataProvider": data
                    //     [
                    //                {
                    //                                "name": "Факт ЗМ 2017",
                    //                                "open": 60,
                    //                                "close": 76.8,
                    //                                "color": "#dfdfdf",
                    //                                "balloonValue": "76.8"
                    //                }
                }
            return (
                <div
                    className="waterfall_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px"}}
                        options={amchartsSettings}
                    />
                </div>
            );
    }
}

export default Waterfall;
