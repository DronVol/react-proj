import React, { Component } from 'react';
import MyTile from './Tile.js';
import MyGraph from './Graph.js';
import MyTable from './Table.js';

class MyBody extends Component {
    constructor(props){
        super(props);
    }
  render() {
      //window.alert(this.props.text);
    return (
        <div>
            <div className="tiles_wrapper_1">
                <MyTile name="Kopustin" quant="50" color="black"/>
                <MyTile name="Population" quant="300" color="red" />
                <MyTile name="Cost" quant="3000$" color="yellow" />
            </div>
            <div className="tiles_wrapper_2">
                <MyGraph name="pie_graph" />
                <MyTable />
            </div>
        </div>
    );
  }
}

export default MyBody;
