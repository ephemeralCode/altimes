(this.webpackJsonpaltb=this.webpackJsonpaltb||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(9),i=n.n(a),l=n(4),r=n(5),O=n(2),s=n(3),u=n(0);function j(e){var t=Object(c.useRef)(),n=Object(c.useState)(!1),a=Object(s.a)(n,2),i=a[0],j=a[1],_=Object(c.useState)(!1),o=Object(s.a)(_,2),b=o[0],d=o[1],m=Object(c.useState)("Select time"),v=Object(s.a)(m,2),x=v[0],M=v[1],h=Object(c.useState)(0),C=Object(s.a)(h,2),f=C[0],g=C[1],S=Object(c.useState)({remainingSeconds:"00",remainingMinutes:"00",remainingHours:"00"}),p=Object(s.a)(S,2),T=p[0],N=p[1],R=Object(c.useRef)();return Object(c.useEffect)((function(){t.current&&(e.setSaveLocalTime((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(l.a)({},e.typeTimer,Object(r.a)(t[e.typeTimer].filter((function(t){return t.id!==e.item.id})))))})),t.current=!1,d(!1))}),[b]),Object(c.useEffect)((function(){if(t.current){var e=x.split("_"),n=Object(s.a)(e,4),c=(n[0],n[1]),a=n[2],i=n[3];g(f.setHours(f.getHours()+Number(c))),g(f.setMinutes(f.getMinutes()+Number(a))),g(f.setSeconds(f.getSeconds()+Number(i)))}}),[i]),Object(c.useEffect)((function(){return t.current?R.current=setInterval((function(){var e=new Date,t=f-e;t>0?N(Object(O.a)(Object(O.a)({},T),{},{remainingSeconds:Math.floor(t%6e4/1e3),remainingMinutes:Math.floor(t%36e5/6e4),remainingHours:Math.floor(t%864e5/36e5)})):clearInterval(R.current)}),1e3):t.current=!0,function(){clearInterval(R.current)}}),[i]),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("h2",{children:"\n                ".concat(String(T.remainingHours).padStart(2,"0"),":\n                ").concat(String(T.remainingMinutes).padStart(2,"0"),":\n                ").concat(String(T.remainingSeconds).padStart(2,"0"),"\n            ")}),i?Object(u.jsx)("button",{onClick:function(){t.current=!1,M("Select time"),j(!1),clearInterval(R),g(0),N(Object(O.a)(Object(O.a)({},T),{},{remainingSeconds:"00",remainingMinutes:"00",remainingHours:"00"}))},children:"Cancel"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("select",{onClick:function(e){M(e.target.options[e.target.selectedIndex].value)},children:[Object(u.jsx)("option",{children:"Select time"}),e.times.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e.text},t)}))]}),Object(u.jsx)("button",{disabled:"Select time"===x,onClick:function(){j(!0),g(new Date)},children:"Go"})]}),Object(u.jsx)("button",{onClick:function(){clearInterval(R),d(!0)},children:"Del"})]})}n(15);function _(){var e=Object(c.useState)(4),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({COMM:[],BOOK:[],PROJ:[]}),_=Object(s.a)(i,2),o=_[0],b=_[1],d=[{text:"10:00:00",value:"COMM_10_00_00"},{text:"09:00:00",value:"COMM_09_00_00"},{text:"08:00:00",value:"COMM_08_00_00"},{text:"06:00:00",value:"COMM_06_00_00"},{text:"05:20:00",value:"COMM_05_20_00"},{text:"05:00:00",value:"COMM_05_00_00"},{text:"04:00:00",value:"COMM_04_00_00"},{text:"03:20:00",value:"COMM_03_20_00"},{text:"03:00:00",value:"COMM_03_00_00"},{text:"02:40:00",value:"COMM_02_40_00"},{text:"02:30:00",value:"COMM_02_30_00"},{text:"02:15:00",value:"COMM_02_15_00"},{text:"02:00:00",value:"COMM_02_00_00"},{text:"01:45:00",value:"COMM_01_45_00"},{text:"01:40:00",value:"COMM_01_40_00"},{text:"01:30:00",value:"COMM_01_30_00"},{text:"01:20:00",value:"COMM_01_20_00"},{text:"01:10:00",value:"COMM_01_10_00"},{text:"01:00:00",value:"COMM_01_00_00"},{text:"00:30:00",value:"COMM_00_30_00"},{text:"00:20:00",value:"COMM_00_20_00"}],m=[{text:"08:00:00",value:"BOOK_08_00_00"},{text:"04:00:00",value:"BOOK_04_00_00"},{text:"02:00:00",value:"BOOK_02_00_00"}],v=[{text:"12:00:00",value:"PROJ_10_00_00"},{text:"10:00:00",value:"PROJ_10_00_00"},{text:"09:00:00",value:"PROJ_09_00_00"},{text:"08:00:00",value:"PROJ_08_00_00"},{text:"06:00:00",value:"PROJ_06_00_00"},{text:"05:00:00",value:"PROJ_05_00_00"},{text:"04:00:00",value:"PROJ_04_00_00"},{text:"03:00:00",value:"PROJ_03_00_00"},{text:"02:30:00",value:"PROJ_02_30_00"},{text:"02:00:00",value:"PROJ_02_00_00"},{text:"01:30:00",value:"PROJ_01_30_00"},{text:"01:00:00",value:"PROJ_01_00_00"},{text:"00:30:00",value:"PROJ_00_30_00"}],x=function(e){var t=e.target.name;o[t].length?b((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(l.a)({},t,[].concat(Object(r.a)(e[t]),[{id:e[t][e[t].length-1].id+1,time:"00:00:00"}])))})):b((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(l.a)({},t,[].concat(Object(r.a)(e[t]),[{id:0,time:"00:00:00"}])))}))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"containerTimer",children:[Object(u.jsxs)("div",{className:"containerCommissionTitle",children:[Object(u.jsx)("p",{children:"COMMISSION"}),Object(u.jsxs)("div",{className:"containerCommissionTitleAvailable",children:[Object(u.jsxs)("p",{children:["Available ",n-o.COMM.length]}),Object(u.jsxs)("label",{className:"containerCommissionTitleEvent",children:[Object(u.jsx)("p",{children:"Event"}),Object(u.jsx)("input",{type:"checkbox",onClick:function(e){a(e.target.checked?5:4),5===o.COMM.length&&b((function(e){return Object(O.a)(Object(O.a)({},e),{},{COMM:Object(r.a)(e.COMM.slice(0,-1))})}))}})]})]})]}),Object(u.jsx)("div",{children:o.COMM.length?o.COMM.map((function(e,t){return Object(u.jsx)(j,{item:e,id:t,saveLocalTime:o,setSaveLocalTime:b,times:d,typeTimer:"COMM"},e.id)})):Object(u.jsx)("div",{className:"availableTimer",children:"Not found"})}),o.COMM.length!==n&&Object(u.jsx)("button",{name:"COMM",className:"addTimer",onClick:function(e){x(e)},children:"+"})]}),Object(u.jsxs)("div",{className:"containerTimer",children:[Object(u.jsxs)("div",{className:"containerTitle",children:[Object(u.jsx)("p",{children:"CLASSROOM"}),Object(u.jsxs)("div",{children:["Available ",4-o.BOOK.length]})]}),Object(u.jsx)("div",{children:o.BOOK.length?o.BOOK.map((function(e,t){return Object(u.jsx)(j,{item:e,id:t,saveLocalTime:o,setSaveLocalTime:b,times:m,typeTimer:"BOOK"},e.id)})):Object(u.jsx)("div",{className:"availableTimer",children:"Not found"})}),4!==o.BOOK.length&&Object(u.jsx)("button",{name:"BOOK",className:"addTimer",onClick:function(e){x(e)},children:"+"})]}),Object(u.jsxs)("div",{className:"containerTimer",children:[Object(u.jsxs)("div",{className:"containerTitle",children:[Object(u.jsx)("p",{children:"LAB"}),Object(u.jsxs)("div",{children:["Available ",1-o.PROJ.length]})]}),Object(u.jsx)("div",{children:o.PROJ.length?o.PROJ.map((function(e,t){return Object(u.jsx)(j,{item:e,id:t,saveLocalTime:o,setSaveLocalTime:b,times:v,typeTimer:"PROJ"},e.id)})):Object(u.jsx)("div",{className:"availableTimer",children:"Not found"})}),1!==o.PROJ.length&&Object(u.jsx)("button",{name:"PROJ",className:"addTimer",onClick:function(e){x(e)},children:"+"})]})]})}i.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.19ed4684.chunk.js.map