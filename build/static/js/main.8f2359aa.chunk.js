(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t.p+"static/media/logo.46aaeee7.jpg"},40:function(e,n,t){e.exports=t(66)},45:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(31),c=t.n(o),l=(t(45),t(8)),i=t(6),u=t(7),m=t(37),s=Object(a.createContext)();function d(){return Object(a.useContext)(s)}var p=function(e){var n=e.component,t=Object(m.a)(e,["component"]),a=d().authTokens;return r.a.createElement(u.b,Object.assign({},t,{render:function(e){return a?r.a.createElement(n,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{referer:e.location}}})}}))};var b=function(e){return r.a.createElement("div",null,"Home Page - Github webhook done")},f=t(9),h=t(10);function g(){var e=Object(f.a)(["\n  background-color: red;\n"]);return g=function(){return e},e}function v(){var e=Object(f.a)(["\n  width: 50%;\n  margin-bottom: 1rem;\n"]);return v=function(){return e},e}function E(){var e=Object(f.a)(["\n  background: linear-gradient(to bottom, #6371c7, #5563c1);\n  border-color: #3f4eae;\n  border-radius: 3px;\n  padding: 1rem;\n  color: white;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return E=function(){return e},e}function w(){var e=Object(f.a)(["\n  padding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return w=function(){return e},e}function j(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  max-width: 410px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return O=function(){return e},e}var k=h.a.div(O()),x=h.a.div(j()),y=h.a.input(w()),S=h.a.button(E()),A=h.a.img(v()),C=h.a.div(g());var T=function(e){var n=d().setAuthTokens;return r.a.createElement("div",null,r.a.createElement("div",null,"Admin Page - webhook test"),r.a.createElement(S,{onClick:function(){n()}},"Log out"))},P=t(36),z=t.n(P),I=t(14),J=t.n(I);var B=function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),o=t[0],c=t[1],m=Object(a.useState)(!1),s=Object(l.a)(m,2),p=s[0],b=s[1],f=Object(a.useState)(""),h=Object(l.a)(f,2),g=h[0],v=h[1],E=Object(a.useState)(""),w=Object(l.a)(E,2),j=w[0],O=w[1],T=d().setAuthTokens,P=e.location.state.referer||"/";return o?r.a.createElement(u.a,{to:P}):r.a.createElement(k,null,r.a.createElement(A,{src:J.a}),r.a.createElement(x,null,r.a.createElement(y,{type:"username",value:g,onChange:function(e){v(e.target.value)},placeholder:"email"}),r.a.createElement(y,{type:"password",value:j,onChange:function(e){O(e.target.value)},placeholder:"password"}),r.a.createElement(S,{onClick:function(){z.a.post("http://localhost:8080/api/auth/signin",{userName:g,password:j}).then(function(e){200===e.status?(T(e.data),c(!0)):b(!0)}).catch(function(e){b(!0)})}},"Sign In")),r.a.createElement(i.b,{to:"/signup"},"Don't have an account?"),p&&r.a.createElement(C,null,"The username or password provided were incorrect!"))};var H=function(){return r.a.createElement(k,null,r.a.createElement(A,{src:J.a}),r.a.createElement(x,null,r.a.createElement(y,{type:"email",placeholder:"email"}),r.a.createElement(y,{type:"password",placeholder:"password"}),r.a.createElement(y,{type:"password",placeholder:"password again"}),r.a.createElement(S,null,"Sign Up")),r.a.createElement(i.b,{to:"/login"},"Already have an account?"))};var N=function(e){var n=Object(a.useState)(),t=Object(l.a)(n,2),o=t[0],c=t[1];return r.a.createElement(s.Provider,{value:{authTokens:o,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),c(e)}}},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home Page-wh")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/admin"},"Admin Page-wh"))),r.a.createElement(u.b,{exact:!0,path:"/",component:b}),r.a.createElement(u.b,{path:"/login",component:B}),r.a.createElement(u.b,{path:"/signup",component:H}),r.a.createElement(p,{path:"/admin",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.8f2359aa.chunk.js.map