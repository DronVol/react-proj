import React, { Component } from 'react';
import './custom.css';

class MyTile extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const divStyle = {
  border: "4px dashed " + this.props.color
};
    return (
                       <div className="vap tiles_wrapper__item item_1" style={divStyle}>
                               <div className="tiles__wrapper__tile">
                                   <div className="container">
                                       <div className="row">
                                           <div className="col-12">
                                               <div className="content"><span className="vap tiles__wrapper__tile_title">{this.props.name} {this.props.quant}</span></div>
                                               <div className="content"><button type="button" className="btn btn-outline-info btn-abc btn-sm btn_ovi btn_domr">Opex vs Инфл.</button></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
    );
  }
}

export default MyTile;
