(this["webpackJsonpTic-Tac-Toe"]=this["webpackJsonpTic-Tac-Toe"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=a(4),i=a(1);a(12);var u=function(e){var t=e.value,a=e.onClick;return c.a.createElement("div",null,c.a.createElement("button",{className:"squares",onClick:a},t))};a(13);var s=function(e){var t=e.squares,a=e.onClick;return c.a.createElement("div",{className:"board"},t.map((function(e,t){return c.a.createElement(u,{key:t,value:e,onClick:function(){return a(t)}})})))};a(14);var m=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),u=Object(i.a)(l,2),m=u[0],f=u[1],v=Object(n.useState)(!0),E=Object(i.a)(v,2),d=E[0],b=E[1],h=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(i.a)(t[a],3),c=n[0],r=n[1],l=n[2];if(e[c]&&e[c]===e[r]&&e[c]===e[l])return e[c]}return null}(a[m]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{squares:a[m],onClick:function(e){var t=a.slice(0,m+1),n=t[m],c=Object(o.a)(n);h||c[e]||(c[e]=d?"X":"O",r([].concat(Object(o.a)(t),[c])),f(t.length),b(!d))}}),c.a.createElement("div",{className:"game"},c.a.createElement("h3",null,h?"Winner! Player "+h:"Next Player: "+(d?"X":"O")),a.map((function(e,t){var a=t?"Go to Move #".concat(t):"Restart Game";return c.a.createElement("li",{className:"listStyle",key:t},c.a.createElement("button",{className:"moveButtons",onClick:function(){return f(e=t),void b(e%2===0);var e}},a))}))))};a(15);var f=function(e){return c.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(16);var v=function(e){return c.a.createElement("main",Object.assign({className:"wrapper"},e))};var E=function(){return c.a.createElement("div",null,c.a.createElement(v,null,c.a.createElement(f,null,c.a.createElement("h1",null,c.a.createElement("i",{className:"fas fa-th"})," Tic Tac Toe"," ",c.a.createElement("i",{className:"fas fa-th"})),c.a.createElement(m,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.03e5b22f.chunk.js.map