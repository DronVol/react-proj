import React, { Component } from 'react';
import './custom.css';
import MyTile from './Tile.js';

class PageTwo extends Component {
    constructor(props){
        super(props);
    }
  render() {
      return(
      <div>
          <MyTile name="Seledkin" quant="30" color="black"/>
          <MyTile name="Ribkin" quant="300" color="red" />
      </div>
);
  }
}

export default PageTwo;
