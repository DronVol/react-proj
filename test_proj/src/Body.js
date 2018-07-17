import React, { Component } from 'react';
import MyTile from './Tile.js';
import MyGraph from './Graph.js';
import MyTable from './Table.js';
import MyPie from './innerPie.js';

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
                <MyPie
                    grId={"opex"}
                    geometry={["200px, 300px"]}
                    colors={[
                        "#61DB96",
                        "#F5A623",
                        "#6EC7F7",
                        "#2ACED0",
                        "#8064a2",
                        "#a76eff",
                        "#64A7D2",
                        "#04D215",
                        "#0D52D1",
                        "#2A0CD0",
                        "#8A0CCF",
                        "#CD0D74"
                    ]}
                    data = {[
                        {"category": "Валютные договоры","val": "15"},
                        {"category": "Объекты ЦА","val": "3"}
                    ]}
                    centralValue={{"isNeeded":"true", "val":"50"}}
                    mera={"тыс. чел"}
                />
                <MyTable />
            </div>
        </div>
    );
  }
}

export default MyBody;
