(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{625:function(e,a,t){"use strict";t.r(a);var n=t(158),r=t(159),i=t(161),u=t(160),l=t(1),o=t.n(l),c=(t(613),t(620)),s=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={data:[]},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://indonesia-covid-19.mathdro.id/api/harian").then((function(e){if(200===e.status)return e.json()})).then((function(a){e.setState({data:a.data})}))}},{key:"render",value:function(){var e=this.state.data,a=e.map((function(e){return e.harike})),t=e.map((function(e){return e.jumlahKasusKumulatif})),n=e.map((function(e){return e.jumlahPasienSembuh})),r=e.map((function(e){return e.jumlahPasienMeninggal}));e.map((function(e){return e.jumlahKasusDiperiksa}));return console.log(t),o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-title"},"Indonesia's Copit Graph"))),o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement(c.c,{type:"line",labels:a,datasets:[{label:"Akumulasi Positif",backgroundColor:"rgb(229, 83, 83)",data:t},{label:"Akumulasi Sembuh",backgroundColor:"rgb(46, 184, 92)",data:n},{label:"Akumulasi Meninggal",backgroundColor:"rgb(249, 177, 21)",data:r}],options:{tooltips:{enabled:!0}}}))))}}]),t}(l.Component);a.default=s}}]);
//# sourceMappingURL=43.32e7215f.chunk.js.map