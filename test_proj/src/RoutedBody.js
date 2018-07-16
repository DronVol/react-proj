import React, { Component } from 'react';
import Router from './router';
import store from './model';

class RoutedBody extends Component {
    constructor(props) {
        super(props);
        this.state = {el: "home"}
    }

    render() {
        store.subscribe(() => {
          this.setState({el: store.getState().page})
        })

        return (
            <Router page={this.state.el} />
        );
    }
}

export default RoutedBody;
