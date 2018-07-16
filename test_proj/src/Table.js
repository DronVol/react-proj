import React, { Component } from 'react';
import './custom.css';
import './bootstrap.min.css';
//import IScroll from 'iscroll';
import ReactIScroll from 'react-iscroll';
var iScroll = require('iscroll');

function resize(){
    var iScroll = require('iscroll');
    console.log("resized window");
}

window.addEventListener('resize', resize);

var krpnTableElms = [
    {
        parent: "Недвижимость",
        fact_curr: "110",
        fact_prev_abs: "5%",
        fact_prev_proc: "3%",
        children: [
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            },
            {
                name: "Амортизация недвижимости",
                fact_curr: "2",
                fact_prev_abs: "4%",
                fact_prev_proc: "-1%"
            }
        ]
    }
];

function collapseElements(Arr) {

    var element = "",
        childrenFunc = "",
        notChild = "",
        notBefore = "";

    function childs (childArr) {
        var child = "";
        for(var ic = 0; ic < childArr.length; ic++) {
            child +=
                '<div class="row">' +
                '   <div class="col-6">' +
                '       <span class="collapse__table__title">'+ childArr[ic].name +'</span>' +
                '   </div>' +
                '   <div class="col-2">' +
                '       <span class="collapse__table__title">'+ childArr[ic].fact_curr +'</span>' +
                '   </div>' +
                '   <div class="col-2">' +
                '       <span class="collapse__table__title">'+ childArr[ic].fact_prev_abs +'</span>' +
                '   </div>' +
                '   <div class="col-2">' +
                '       <span class="collapse__table__title">'+ childArr[ic].fact_prev_proc +'</span>' +
                '   </div>' +
                '</div>';
        }
        return child;
    }

    for(var inc = 0; inc < Arr.length; inc++) {
        if(Arr[inc].children === null) {
            childrenFunc = "";
            notChild = " hidden";
            notBefore = " nobefore";
        }else {
            childrenFunc = childs (Arr[inc].children);
        }
        element +=
            '<div id="scroller" style=style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, -1.78804px) translateZ(0px);">'+
            '<div class="collapse_title'+ notBefore +'">' +
            '      <div class="row">' +
            '           <div class="col-6">' +
            '               <span class="collapse__table__title">'+ Arr[inc].parent +'</span>' +
            '           </div>' +
            '           <div class="col-2">' +
            '               <span class="collapse__table__title">'+ Arr[inc].fact_curr +'</span>' +
            '           </div>' +
            '           <div class="col-2">' +
            '               <span class="collapse__table__title">'+ Arr[inc].fact_prev_abs +'</span>' +
            '           </div>' +
            '           <div class="col-2">' +
            '               <span class="collapse__table__title">'+ Arr[inc].fact_prev_proc +'</span>' +
            '           </div>' +
            '       </div>' +
            '</div>' +
            '<div class="collapse_container'+ notChild +'">' +
            childrenFunc +
            '</div>'+
            '</div>';
    }
    return element;
}

var html = collapseElements(krpnTableElms);

class MyTable extends Component {
    componentDidMount() {
    var el = document.getElementById("table_insert");
    el.innerHTML = html;
    // var myScroll = new IScroll('#wrapper', {
    //     snap: true,
    //     momentum: false,
    //     hScrollbar: false,
    //     vScrollbar: false
    // });
  }
    constructor(props){
        super(props);
    }
    getDefaultProps() {
    return ({
      options: {
        mouseWheel: true,
        scrollbars: true
      }
    })
  }
  onScrollStart() {
    console.log("iScroll starts scrolling")
  }
  render() {
      const divStyle = {
  border: "4px dashed " + this.props.color
};
//Добавить перезагрузку плагина на событие ресайз
    return (
        <div class = "vap tiles_wrapper__item item_2 ind_table graph">
                                        <div class="tiles__wrapper__tile">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <span class="tiles__wrapper__tile_title">Категории расходов по недвижимости<span>млрд. руб</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="collapse__table border_bt">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-6">
                                                        </div>
                                                        <div class="col-2">
                                                            <span class="collapse__table__title">Факт '18</span>
                                                        </div>
                                                        <div class="col-2">
                                                            <span class="collapse__table__title">Факт '17</span>
                                                        </div>
                                                        <div class="col-2">
                                                            <span class="collapse__table__title">План '18</span>
                                                        </div>
                                                    <div class="border_bt_table_1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="collapse__table"  id="wrapper">
                                                <ReactIScroll iScroll={iScroll}
                                                          options={this.props.options}
                                                          onScrollStart={this.onScrollStart}>


                                                        <div class="collapse_wrap krpn_collpse" id="table_insert">

                                                        </div>
                                                    </ReactIScroll>

                                            </div>
                                        </div>
        </div>
    );
  }
}

export default MyTable;
