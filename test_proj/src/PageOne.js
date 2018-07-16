import React, { Component } from 'react';
import './custom.css';
import MyTile from './Tile.js';

class PageOne extends Component {
    constructor(props){
        super(props);
    }
  render() {
      return(
      <div>
          <MyTile name="Kartoshkin" quant="30" color="black"/>
          <MyTile name="Morkovkin" quant="300" color="red" />
      </div>
  );
  }
}

export default PageOne;
