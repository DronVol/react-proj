// import React from 'react';
// class MyButton extends React.Component{
//     render(){
//         return (
//     <button style="color: blue">Click Me</button>);}
// }
// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('element')
);
