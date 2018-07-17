import React, { Component } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import 'amcharts3/amcharts/plugins/export/export.min.js';
import 'amcharts3/amcharts/plugins/export/export.css';
import AmCharts from '@amcharts/amcharts3-react';

/*require('../node_modules/amcharts3/amcharts/amcharts.js');
require('../node_modules/amcharts3/amcharts/pie.js');
require('../node_modules/amcharts3/amcharts/funnel.js');
require('../node_modules/amcharts3/amcharts/gantt.js');
require('../node_modules/amcharts3/amcharts/gauge.js');
require('../node_modules/amcharts3/amcharts/radar.js');
require('../node_modules/amcharts3/amcharts/serial.js');
require('../node_modules/amcharts3/amcharts/xy.js');*/

//var AmCharts = require("@amcharts/amcharts3-react");

class Pie extends Component {

    constructor(props) {
        super(props);
    }

    centerValue = (value) => {
        if(typeof value !== "undefined") {
            return (
                <div
                    style={(typeof this.props.options.centerValue.styles !== "undefined") ? this.props.options.centerValue.styles : {}}
                    className="pie_wrapper__center_value">

                    <span>{value}</span>
                </div>
            )
        }
    }

    render() {
        return (
            <div
                className="pie_wrapper__item"
                style={(typeof this.props.options.wrapperStyles !== "undefined") ? this.props.options.wrapperStyles : {}}>

                {this.centerValue(this.props.options.centerValue.text)}

                <AmCharts.React style={{"height": "300px"}}
                    options={{
                        "type": "pie",
                        "fontFamily": "'Open Sans', sans-serif",
                        "categoryField": "category",
                        "balloonText":"[[category]]:<br>[[val]] " + this.props.options.mera,
                        "thousandsSeparator": " ",
                        "startDuration":0,
                        "outlineThickness":1,
                        "outlineAlpha":1,
                        "outlineColor":"#36414d",
                        "sequencedAnimation":false,
                        "percentPrecision":0,
                        "labelText": this.props.options.labelText,
                        "titleField": "category",
                        "valueField": "val",
                        "allLabels": [],
                        "color":"#a1abb8",
                        "innerRadius":"70%",
                        "fontSize":13,
                        "balloon": {},
                        "pullOutRadius": "0%",
                        "startRadius": "50%",
                        "labelTickAlpha": 0.2,
                        "labelTickColor": "#a1abb8",
                        "labelRadius": 10,
                        "titles": [],
                        "colors":  this.props.options.colors,
                        "dataProvider": this.props.options.data
                    }}
                />
            </div>
        );
    }
}

export default Pie;
