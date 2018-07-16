import React, { Component } from 'react';
import MyTile from './Tile.js';

class PhilRouter extends Component {
    render() {

        let include = null;


        switch (this.props.page) {
            case "one" :
            include = <MyTile name="One" quant="3000$" color="blue" />;
            break;

            case "two" :
            include = <MyTile name="Two" quant="3000$" color="red" />;
            break;


            default: include = <MyTile name="One" quant="3000$" color="blue" />;//include = <MyTile name="Default" quant="3000$" color="yellow" />;
        }

        return (
            <div className="body__inner">
                {include}
            </div>
        );
    }
}

export default PhilRouter;
