(this.webpackJsonpdaily=this.webpackJsonpdaily||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a.n(n),r=a(8),s=a.n(r),c=a(1),l=a(4),u=a(5),o=a(7),d=a(6),h=(a(13),a(0));Notification.requestPermission().then((function(t){console.log("Permission: "+t)}));var m=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(b,{})})}}]),a}(i.a.Component),b=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={date:"",timerInput:"",timerValue:""},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleReset=n.handleReset.bind(Object(c.a)(n)),n.formatTime=n.formatTime.bind(Object(c.a)(n)),n.tick=n.tick.bind(Object(c.a)(n)),n}return Object(u.a)(a,[{key:"tick",value:function(){var t=this;this.setState((function(e,a){return 0===e.date?(clearInterval(t.timerId),n=t.state.timerValue,void new Notification("Timer",{body:n+" min Timer complete"})):{date:e.date-1};var n}))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState({timerInput:""}),""!==this.state.date&&(this.timerId=setInterval(this.tick,1e3),this.setState((function(t,e){return{date:parseInt(t.date)}})))}},{key:"handleChange",value:function(t){this.setState({date:60*t.target.value,timerInput:t.target.value,timerValue:t.target.value})}},{key:"handleReset",value:function(t){t.preventDefault(),clearInterval(this.timerId),this.setState({date:""})}},{key:"formatTime",value:function(t){return""===t?"00:00":Math.floor(t/60).toString().padStart(2,"0")+":"+(t%60).toString().padStart(2,"0")}},{key:"render",value:function(){var t=this.state.date,e=this.formatTime(t);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h1",{children:"Timer"})}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{children:["Time:",Object(h.jsx)("input",{className:"mx-3 px-3",onChange:this.handleChange,value:this.state.timerInput,type:"text",name:"name"})]}),Object(h.jsx)("button",{className:"btn mx-3",onClick:this.handleSubmit,children:"Start"}),Object(h.jsx)("button",{className:"btn mx-3",onClick:this.handleReset,children:"Reset"})]}),Object(h.jsx)("p",{children:e})]})}}]),a}(i.a.Component),j=m;s.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9fcc1b9c.chunk.js.map