(this["webpackJsonpnotes-simple"]=this["webpackJsonpnotes-simple"]||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(14),o=n.n(a),s=n(3),i=(n(19),n(5)),r=n.n(i),u=n(1);var j=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),j=i[0],l=i[1],b=Object(c.useState)(!0),p=Object(s.a)(b,2),O=p[0],d=p[1],m=Object(c.useState)([]),f=Object(s.a)(m,2),h=f[0],x=f[1],v=Object(c.useState)(!0),k=Object(s.a)(v,2),g=k[0],N=k[1],S=g?n:n.filter((function(t){return!0===t.important})),C=function(){r.a.post("/api/notes",{content:j}).then((function(t){console.log(t)}))};return Object(c.useEffect)((function(){r.a.get("/api/notes").then((function(t){a(n.concat(t.data)),x(h.concat(t.data))}))}),[O]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsxs)("button",{onClick:function(){return N(!g)},className:"filter",children:["Show ",g?"important":"all"]}),Object(u.jsx)("ul",{children:S.map((function(t){return Object(u.jsxs)("li",{children:[" ",t.content,Object(u.jsx)("button",{className:"important",onClick:function(){return e=t.id,void console.log(e);var e},children:t.important?"make not important":"make important"})," "]},t.id)}))}),Object(u.jsxs)("div",{className:"input-notes",children:[Object(u.jsx)("input",{type:"text",onChange:function(t){l(t.target.value)}}),Object(u.jsx)("button",{className:"save",onClick:function(){d(!O),a([]),C()},children:"save"})]})]})};o.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d5e0a939.chunk.js.map