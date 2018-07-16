import React, { Component } from 'react';
import './custom.css';
import { Router, Redirect } from 'react-router-dom';
import store from './model';

var changePage = (pathTo) => {store.dispatch({type: 'CHANGE_PAGE', payload: pathTo}); /*window.alert(pathTo)*/}

class SelectPage extends Component {
    constructor(props){
        super(props);
    }
    change(){
        var path = document.URL;
        var pathTo = document.getElementById("routeSelector").value;

        /*var newPath = path.split("/");
        newPath.pop();
        newPath.push(pathTo);
        newPath = newPath.join("/");
        //window.alert(newPath);
        //window.location=newPath;*/
        changePage(pathTo);

    }
  render() {
      return(
      <div>
          <select onChange={this.change} id="routeSelector">
  <option value="one">One</option>
  <option value="two">Two</option>
</select>

      </div>
);
  }
}

export default SelectPage;
