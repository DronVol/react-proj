import React, { Component } from 'react';
import './custom.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MyGraph extends Component {
    constructor(props){
        super(props);
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
      const divStyle = {
  border: "4px dashed " + this.props.color
};

var iD = this.props.name;
var params = this.props.graphs[iD];
//window.alert(this.props.graphs.test+" "+params["test"]);

var chart = AmCharts.makeChart(params.id, params.param);

    return (
                       <div className="vap tiles_wrapper__item item_4 content" style={divStyle}>
                               <div id={params.id} className="graph">

                               </div>
                           </div>
    );
  }
}

function mapStateToProps(state){
    return {
        graphs: state.graphs
    }
}

export default connect(mapStateToProps)(MyGraph);
