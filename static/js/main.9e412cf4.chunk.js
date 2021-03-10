(this["webpackJsonpgoogle-keep-clone"]=this["webpackJsonpgoogle-keep-clone"]||[]).push([[0],{53:function(e,t,a){e.exports=a(68)},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(104),i=a(103),u=a(47),m=Object(u.a)({typography:{useNextVariants:!0},palette:{type:"light"}}),s=Object(u.a)({typography:{useNextVariants:!0},palette:{type:"dark"}}),d=(a(60),a(13)),f=a(4),p=a(105),E=a(100),g=a(107),b=a(106),k=a(44),h=a.n(k),v=a(71),O=a(99),N=r.a.createContext({darkMode:!1}),j=Object(f.a)((function(e){return{root:{position:"fixed",top:5,left:5},menuIcon:{paddingTop:10},drawer:{width:250},drawerItem:{padding:15},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}))((function(e){var t=e.classes,a=e.align,o=void 0===a?"right":a,l=Object(n.useContext)(N),c=Object(n.useState)(!1),i=Object(d.a)(c,2),u=i[0],m=i[1];return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{color:"inherit","aria-label":"Settings",onClick:function(){return m(!0)}},r.a.createElement(v.a,null,r.a.createElement(h.a,{fontSize:"large"}))),r.a.createElement(p.a,{anchor:o,open:u,onClose:function(){return m(!1)},onOpen:function(){return m(!0)}},r.a.createElement("div",{className:t.drawer},r.a.createElement(O.a,null),r.a.createElement("div",{className:t.drawerItem},r.a.createElement(E.a,{control:r.a.createElement(g.a,{checked:l.darkMode,onChange:function(){return l.onSetDarkMode(!l.darkMode)}}),label:"Dark Mode"})))))})),y=a(101),M=a(102),S=a(45),C=a.n(S),x=(a(42),a(64),Object(f.a)((function(e){return{root:{paddingLeft:55},darkMode:{padding:10}}}))((function(e){var t=e.classes,a=Object(n.useContext)(N);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{position:"static",className:"bg-warning py-1"},r.a.createElement(M.a,{className:t.root},r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu",className:"iconBtn"},r.a.createElement(C.a,{fontSize:"large"})),r.a.createElement(v.a,{variant:"h5"},r.a.createElement("span",{className:"brandName"},"Google Keep Clone")),r.a.createElement("div",{className:t.darkMode},r.a.createElement(E.a,{control:r.a.createElement(g.a,{checked:a.darkMode,onChange:function(){return a.onSetDarkMode(!a.darkMode)}}),label:"Dark Mode"})))))}))),w=a(48),D=(a(65),a(46)),I=a.n(D),F=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-lg-4 col-sm-6 col-12 px-4 my-4 h-100"},r.a.createElement("div",{className:"px-3 py-4 shadow-lg rounded card-note",onMouseOver:function(){return l(!0)},onMouseOut:function(){return l(!1)}},r.a.createElement("h5",null,e.title),r.a.createElement("hr",null),r.a.createElement("p",null,e.note),r.a.createElement("button",{type:"button",className:"deleteBtn",style:{display:o?"block":"none"},onClick:function(){return e.onDelete(e.id)}},r.a.createElement(I.a,{className:"btnIcon"})))))},B=(a(66),function(){var e=Object(n.useState)({title:"",note:""}),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(d.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)([]),s=Object(d.a)(m,2),f=s[0],p=s[1],E=function(e){var t=e.target,a=t.value,n=t.name;o((function(e){return"title"===n?{title:a,note:e.note}:"note"===n?{title:e.title,note:a}:void 0}))},g=function(e){p((function(t){return t.filter((function(t,a){return a!==e}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"mt-4 p-2 mx-auto",onClick:function(){return u(!0)},onDoubleClick:function(){return u(!1)},onSubmit:function(e){e.preventDefault(),o({title:"",note:""}),p((function(e){return[].concat(Object(w.a)(e),[a])}))},autoComplete:"off"},r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",className:"form-control",onChange:E,value:a.title,style:{display:i?"block":"none"},required:!0}),r.a.createElement("textarea",{placeholder:"Write a Note",name:"note",onChange:E,className:"form-control",rows:"3",value:a.note}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{class:"fa fa-location-arrow","aria-hidden":"true"}))),r.a.createElement("div",{className:"container mt-5 pt-3"},r.a.createElement("div",{className:"row"},f.map((function(e,t){return r.a.createElement(F,{key:t,title:e.title,note:e.note,id:t,onDelete:g})})))))}),z=function(e){e.classes;var t=Object(n.useContext)(N).darkMode?s:m;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{theme:t},r.a.createElement(c.a,null),r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement(j,{align:"left"})))},J=(a(67),function(e){if(localStorage)return localStorage.getItem(e)}),L=function(e,t){if(localStorage)return localStorage.setItem(e,t)},T=function(e){var t=Object(n.useState)("true"===J("darkMode")),a=Object(d.a)(t,2),o=a[0],l=a[1];return r.a.createElement(N.Provider,{value:{darkMode:o,onSetDarkMode:function(e){l(e),L("darkMode",e)}}},e.children)};l.a.render(r.a.createElement(T,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.9e412cf4.chunk.js.map