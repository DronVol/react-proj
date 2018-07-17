import React, { Component } from 'react';
import './custom.css';

class MyPie extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        var centralValue = this.props.centralValue;
        if (centralValue.isNeeded){
            document.getElementById("centralValue").innerHTML = centralValue.val;
        }
    }
    render() {
        require('../node_modules/amcharts3/amcharts/amcharts.js');
        require('../node_modules/amcharts3/amcharts/pie.js');
        require('../node_modules/amcharts3/amcharts/funnel.js');
        require('../node_modules/amcharts3/amcharts/gantt.js');
        require('../node_modules/amcharts3/amcharts/gauge.js');
        require('../node_modules/amcharts3/amcharts/radar.js');
        require('../node_modules/amcharts3/amcharts/serial.js');
        require('../node_modules/amcharts3/amcharts/xy.js');

        var AmCharts = require("@amcharts/amcharts3-react");


        var colors = this.props.colors;
        var data = this.props.data;
        var centralValue = this.props.centralValue;
        var geometry = this.props.geometry;

        var divStyle = {width: geometry[0], height: geometry[1]};

        var iD = this.props.grId;

        var mera = this.props.mera;
        //window.alert(this.props.graphs.test+" "+params["test"]);

        var amchartsSettings =
        {
            "type": "pie",
            "fontFamily": "'Open Sans', sans-serif",
            //"startAngle": 10,
            "categoryField": "category",
            "balloonText":"[[category]]:<br>[[val]] "+mera,
            "thousandsSeparator": " ",
            "startDuration":0,
            "outlineThickness":1,
            "outlineAlpha":1,
            "outlineColor":"#36414d",
            "sequencedAnimation":false,
            "percentPrecision":0,
            "labelText": "[[val]]",
            // "labelsEnabled": false,
            "titleField": "category",
            "valueField": "val",
            "allLabels": [],
            "color":"#a1abb8",
            "innerRadius":"70%",
            "fontSize":13,
            "balloon": {},
            "pullOutRadius": "0%",
            "startRadius": "50%",
            //"autoMargins": false,
            // "marginBottom":10,
            // "marginRight":10,
            // "marginLeft":10,
            // "marginTop":10,
            "labelTickAlpha": 0.2,
            "labelTickColor": "#a1abb8",
            "labelRadius": 10,
            "titles": [],
            "colors":  colors,
            "dataProvider": data
        }

        var chart = AmCharts.makeChart(iD, amchartsSettings);

        return (
                <div className="graph_wrapper__item">
                    <div id="centralValue" style={{"position":"relative","top": "28.5%", "left": "0"}}></div>
                    <div id={iD} className="graph" style={divStyle}></div>
                </div>
        );
    }
}

export default MyPie;
