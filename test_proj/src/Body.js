import React, { Component } from 'react';
import MyTile from './Tile.js';
import MyGraph from './Graph.js';
import MyTable from './Table.js';
import Pie from './innerPie.js';
import Categorical from './bothSidesCategorical';
import MultiLine from './multiLine';
import Waterfall from './waterfall';

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
            <Pie
              options={{
                  wrapperStyles: {width: "100%", height: "100%"},
                  colors: [
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
                  ],
                  data: [
                      {"category": "Валютные договоры","val": "15"},
                      {"category": "Объекты ЦА","val": "3"}
                  ],
                  labelText: "[[val]]%",
                  mera: "тыс. чел",
                  centerValue: {
                      text: "321шт",
                      styles: {lineHeight: "20px"}
                  }
              }}
            />
            <Categorical
                options={{
                    grId: "cat",
                    geometry: ["200px, 300px"],
                    posColor: "#6EC7F7",
                    negColor: "#61db96",
                    data: [
                        {"category": "CIB", "currFact": "100", "val": "13", "drawVal": "", "prevFact": "110"},
                        {"category": "SBI", "currFact": "-150", "val": "-5", "drawVal": "", "prevFact": "110"},
                        {"category": "ДРПА", "currFact": "130", "val": "11", "drawVal": "", "prevFact": "110"},
                        {"category": "КБ", "currFact": "-100", "val": "-3", "drawVal": "", "prevFact": "110"}
                    ]
                }}
            />
        <MultiLine
            options={{
                grId:"line",
                geometry: ["200px, 300px"],
                colors: ["#61DB96","#f60f0f"],
                categories: ["2017", "2018", "2019"],
                data: [[10, 6, 11], [9,7,12]]
            }}
        />
    <Waterfall
        options={{
            grId: "wat",
            geometry: ["200px, 300px"],
            startValue: 60,
            data: [{name:"2017", val:70},{name:"Прирост", val:85},{name:"Убыток", val:80},{name:"2018", val:80}]

        }}
    />
        </div>
    );
  }
}

export default MyBody;
