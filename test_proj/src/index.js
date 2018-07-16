import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './allStore';
import registerServiceWorker from './registerServiceWorker';
import disableScroll from 'disable-scroll';
import IScroll from 'iscroll';
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
//
// disableScroll();

//disableScroll.on();
const store = createStore(allReducers);

const text = "I am simple text";

ReactDOM.render(
    <Provider store={store}>
        <App text={text}/>
    </Provider>
    , document.getElementById('root')
    );
    console.log("was_here!");
    var body_el = document.getElementsByTagName('body');
    //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    /*var myScroll = new IScroll('#wrapper', {
        snap: true,
        momentum: false,
        hScrollbar: false,
        vScrollbar: false
    });*/
    //console.log(myScroll);
registerServiceWorker();
