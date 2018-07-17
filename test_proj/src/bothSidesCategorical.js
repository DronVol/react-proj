import React, { Component } from 'react';
import './custom.css';
require('../node_modules/amcharts3/amcharts/amcharts.js');
require('../node_modules/amcharts3/amcharts/pie.js');
require('../node_modules/amcharts3/amcharts/funnel.js');
require('../node_modules/amcharts3/amcharts/gantt.js');
require('../node_modules/amcharts3/amcharts/gauge.js');
require('../node_modules/amcharts3/amcharts/radar.js');
require('../node_modules/amcharts3/amcharts/serial.js');
require('../node_modules/amcharts3/amcharts/xy.js');

class MyCategorical extends Component {
    constructor(props){
        super(props);
    }
    /*componentDidMount() {
        var centralValue = this.props.centralValue;
        if (centralValue.isNeeded){
            document.getElementById("centralValue").innerHTML = centralValue.val;
        }
    }*/
    render() {

        var AmCharts = require("@amcharts/amcharts3-react");

        var divStyle = {width: this.props.geometry[0], height: this.props.geometry[1]};

        //window.alert(this.props.graphs.test+" "+params["test"]);

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
                        "fillColors": this.props.posColor,
                        "fixedColumnWidth": 15,
                        "id": "AmGraph-1",
                        "labelOffset": 10,
                        "fontSize": 14,
                        "labelPosition": "right",
                        "labelText": "[[val]]",
                        "lineColor": this.props.posColor,
                        "negativeFillColors": this.props.negColor,
                        "negativeLineColor": this.props.negColor,
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
                "listeners": [/*  {
                    "event":"init",
                    "method":function(event){
                            var dp = event.chart.dataProvider;
                            for(i = 0; i < dp.length; i++){
                                dp[i].val = (+event.chart.dataProvider[i].currFact-+event.chart.dataProvider[i].prevFact).toFixed(2);
                                dp[i].drawVal = event.chart.dataProvider[i].val>0 ? "+"+event.chart.dataProvider[i].val:event.chart.dataProvider[i].val;
                            }
                            event.chart.dataProvider = dp; event.chart.validateData();
                        }
                }   */],
                "dataProvider": this.props.data


            }

        var chart = AmCharts.makeChart(this.props.grId, amchartsSettings);

        return (
                <div className="graph_wrapper__item" style={{"height":"300px"}}>
                    <div id={this.props.grId} className="graph" style={divStyle}></div>
                </div>
        );
    }
}

export default MyCategorical;
