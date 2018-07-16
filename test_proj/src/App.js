import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectPage from './SelectPage.js';
import RoutedBody from './RoutedBody.js';
import MyBody from './Body.js';

class App extends Component {
    //const date = {name: "Puding", quant: 50};
    
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //
    //     </p>
    //     <SelectPage />
    //     <MyBody />
    //     <RoutedBody />
    //
    //   </div>
    // );
    return (
      <div className="App">
        <SelectPage />
        <MyBody />
        <RoutedBody />

      </div>
    );
  }
}

export default App;
