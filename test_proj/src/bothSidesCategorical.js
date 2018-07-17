import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

class Categorical extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var amchartsSettings =
        {
                "type": "serial",
                "fontFamily": "'Open Sans', sans-serif",
                "categoryField": "category",
                "rotate": true,
                "colors": [
                    "#00CC00"
                ],
                "backgroundColor": "#36414D",
                "categoryAxis": {
                    "labelFunction": function (a) {
                        return (a.length > 18) ? a.slice(0, 15) + "..." : a;
                    },
                    "listeners": [{
                        "event": "rollOverItem",
                        "method": function (event) {
                            event.target.setAttr("cursor", "default");
                            event.chart.balloon.followCursor(true);
                            event.chart.balloon.showBalloon(event.serialDataItem.dataContext.category);
                            event.chart.balloon.fixedPosition = false;
                        }
                    },
                        {
                            "event": "rollOutItem",
                            "method": function (event) {
                                event.chart.balloon.hide();
                            }
                        }
                    ],
                    "gridPosition": "start",
                    "axisAlpha": 0,
                    "fontSize": 14,
                    "color": "#cdcfd2",
                    "gridAlpha": 0.46,
                    "gridThickness": 0,
                    "gridColor": "#a0aab7",
                    "autoGridCount": false,
                    "inside": true,
                    "gridCount": 10000
                },
                "trendLines": [],
                "graphs": [
                    {
                        "balloonText": "[[category]]:[[value]]",
                        "color": "#333333",
                        "customBullet": "",
                        "fillAlphas": 1,
                        "color": "#cdcfd2",
                        "lineThickness": 0,
                        "fillColors": this.props.options.posColor,
                        "fixedColumnWidth": 15,
                        "id": "AmGraph-1",
                        "labelOffset": 10,
                        "fontSize": 14,
                        "labelPosition": "right",
                        "labelText": "[[val]]",
                        "lineColor": this.props.options.posColor,
                        "negativeFillColors": this.props.options.negColor,
                        "negativeLineColor": this.props.options.negColor,
                        "title": "graph 1",
                        "type": "column",
                        "valueField": "val"
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-1",
                        "axisAlpha": 0,
                        "gridAlpha": 0,
                        "labelsEnabled": false,
                        "autoGridCount": false,
                        "gridCount": 10000,
                        "maximum": 200,
                        "minimum": -200,
                        "title": ""
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "listeners": [],
                "dataProvider": this.props.options.data


            }
            return (
                <div
                    className="categorical_wrapper__item"
                    style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>
                    <AmCharts.React style={{"height": "300px"}}
                        options={amchartsSettings}
                    />
                </div>
            );
    }
}

export default Categorical;
