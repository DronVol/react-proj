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

class MyMultiLine extends Component {
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
                    "zoomOutButtonRollOverAlpha": 0,
                    "colors": this.props.colors,
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

                var grNum = this.props.colors.length;
                for (var i = 0;i<grNum;i++){
                    amchartsSettings.graphs.push(
                        {
                            "balloonText": "[[category]]: [[value]]%",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": this.props.colors[i],
                            "bulletColor": this.props.colors[i],
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
                var catNum = this.props.categories.length;
                for (var i = 0;i<catNum;i++){
                    var dataCurr = {};
                    dataCurr["category"]=this.props.categories[i];
        			for (var j = 0; j<grNum; j++){
                        dataCurr["val"+j]=this.props.data[j][i];
                    }
                    data.push(dataCurr);
                }
                amchartsSettings.dataProvider = data;
                console.log(amchartsSettings);

        var chart = AmCharts.makeChart(this.props.grId, amchartsSettings);

        return (
                <div className="graph_wrapper__item" style={{"height":"300px"}}>
                    <div id={this.props.grId} className="graph" style={divStyle}></div>
                </div>
        );
    }
}

export default MyMultiLine;
