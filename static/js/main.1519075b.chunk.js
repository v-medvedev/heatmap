(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(6),r=t.n(s),l=(t(72),t(17)),i=t(29);t(128),t(129);var m=function(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)(0),m=Object(l.a)(r,2),u=m[0],o=m[1],d=Object(n.useState)(0),v=Object(l.a)(d,2),g=v[0],E=v[1],f=Object(n.useState)(50),N=Object(l.a)(f,2),b=N[0],p=N[1],_=Object(n.useState)(100),h=Object(l.a)(_,2),y=h[0],k=h[1],j=Object(n.useState)(1),O=Object(l.a)(j,2),S=O[0],C=O[1],w=Object(n.useState)(100),R=Object(l.a)(w,2),x=R[0],B=R[1];Object(n.useEffect)(function(){var e=setInterval(function(){return I()},x);return function(){clearInterval(e)}});var I=function(){t>0&&s(function(e){return e-S>0?e-S:0}),u>0&&o(function(e){return e-S>0?e-S:0}),g>0&&E(function(e){return e-S>0?e-S:0})},H=function(e,a){"reg"===a?"head"===e?s(function(e){return e+b}):"body"===e?o(function(e){return e+b}):"legs"===e&&E(function(e){return e+b}):"sig"===a&&("head"===e?s(function(e){return e+y}):"body"===e?o(function(e){return e+y}):"legs"===e&&E(function(e){return e+y}))};return c.a.createElement("div",{className:"heatmap_wrapper"},c.a.createElement("div",{className:"heatmap_stats"},c.a.createElement("div",{className:"stat"},c.a.createElement("div",{className:"stat_label"},"Head"),c.a.createElement("div",{className:"stat_value"},t)),c.a.createElement("div",{className:"stat"},c.a.createElement("div",{className:"stat_label"},"Body"),c.a.createElement("div",{className:"stat_value"},u)),c.a.createElement("div",{className:"stat"},c.a.createElement("div",{className:"stat_label"},"Legs"),c.a.createElement("div",{className:"stat_value"},g))),c.a.createElement("div",{className:"heatmap_container"},c.a.createElement("div",{className:"heatmap_fighter"},c.a.createElement("div",{className:"heatmap_head",style:{opacity:t>299?1:t/300}}),c.a.createElement("div",{className:"heatmap_body",style:{opacity:u>299?1:u/300}}),c.a.createElement("div",{className:"heatmap_legs",style:{opacity:g>299?1:g/300}}))),c.a.createElement("div",{className:"heatmap_buttons"},c.a.createElement("div",{className:"reg_strike",onClick:function(){return H("head","reg")}},"Reg Head"),c.a.createElement("div",{className:"reg_strike",onClick:function(){return H("body","reg")}},"Reg Body"),c.a.createElement("div",{className:"reg_strike",onClick:function(){return H("legs","reg")}},"Reg Legs"),c.a.createElement("div",{className:"sig_strike",onClick:function(){return H("head","sig")}},"Sig Head"),c.a.createElement("div",{className:"sig_strike",onClick:function(){return H("body","sig")}},"Sig Body"),c.a.createElement("div",{className:"sig_strike",onClick:function(){return H("legs","sig")}},"Sig Legs")),c.a.createElement("div",{className:"settings_wrapper"},c.a.createElement("div",{className:"setting"},c.a.createElement("div",{className:"setting_label"},"Regular Strike Damage: ",b),c.a.createElement(i.a,{min:0,max:150,step:10,value:b,onChange:function(e){return p(e)}})),c.a.createElement("div",{className:"setting"},c.a.createElement("div",{className:"setting_label"},"Significant Strike Damage: ",y),c.a.createElement(i.a,{min:0,max:250,step:10,value:y,onChange:function(e){return k(e)}})),c.a.createElement("div",{className:"setting"},c.a.createElement("div",{className:"setting_label"},"Recovery Rate: ",S),c.a.createElement(i.a,{min:0,max:10,step:1,value:S,onChange:function(e){return C(e)}})),c.a.createElement("div",{className:"setting"},c.a.createElement("div",{className:"setting_label"},"Recovery Interval: ",x),c.a.createElement(i.a,{min:0,max:500,step:50,value:x,onChange:function(e){return B(e)}}))))};r.a.render(c.a.createElement(m,null),document.getElementById("root"))},67:function(e,a,t){e.exports=t(130)},72:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.1519075b.chunk.js.map