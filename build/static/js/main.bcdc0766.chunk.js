(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),u=(n(20),n(2)),i=n(3),l=function(e){var t=e.text,n=e.value,a=e.onChange;return r.a.createElement("div",null,t,":",r.a.createElement("input",{value:n,onChange:a}))},m=function(e){var t=e.filterText,n=e.filterVal,a=e.filterChange;return r.a.createElement(l,{text:t,value:n,onChange:a})},s=function(e){var t=e.id,n=e.type,a=e.text,c=e.onClick;return r.a.createElement("button",{id:t,type:n,onClick:c},a)},f=function(e){var t=e.entry,n=e.onClick;return r.a.createElement("div",null,t.name," ",t.number,r.a.createElement(s,{id:t.id,type:"button",text:"delete",onClick:n}))},d=function(e){var t=e.entries,n=e.deleteClick;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(f,{key:e.name,entry:e,onClick:n})})))},b=function(e){var t=e.onSubmit,n=e.nameText,a=e.nameVal,c=e.nameChange,o=e.numText,u=e.numVal,i=e.numChange;return r.a.createElement("form",{onSubmit:t},r.a.createElement(l,{text:n,value:a,onChange:c}),r.a.createElement(l,{text:o,value:u,onChange:i}),r.a.createElement(s,{type:"submit",text:"Add"}))},h=function(e){var t=e.message,n=e.className;return null===t?null:r.a.createElement("div",{className:n},t)},g=n(4),v=n.n(g),p="/api/persons",E=function(){return v.a.get(p).then((function(e){return e.data}))},j=function(e){return v.a.post(p,e).then((function(e){return e.data}))},k=function(e){return v.a.delete("".concat(p,"/").concat(e)).then((function(e){return e}))},y=function(e,t){return v.a.put("".concat(p,"/").concat(e),t).then((function(e){return e.data}))},C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),s=l[0],f=l[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),p=v[0],C=v[1],O=Object(a.useState)(""),w=Object(i.a)(O,2),x=w[0],N=w[1],S=Object(a.useState)({message:null,class:"notify"}),T=Object(i.a)(S,2),V=T[0],A=T[1];Object(a.useEffect)((function(){E().then((function(e){c(e)}))}),[]);var B=""===x?n:n.filter((function(e){return e.name.toLowerCase().includes(x)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{message:V.message,className:V.class}),r.a.createElement(m,{filterText:"Filter by",filterVal:x,filterChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"Add New Phonebook Entry"),r.a.createElement(b,{onSubmit:function(e){if(e.preventDefault(),n.map((function(e){return e.name})).includes(s)){if(window.confirm("".concat(s," is already in this phonebook! Replace number with a new one?"))){var t=n.filter((function(e){return e.name===s}))[0],a=Object(u.a)(Object(u.a)({},t),{},{number:p});y(t.id,a).then((function(e){c(n.map((function(n){return n.id!==t.id?n:e}))),f(""),C(""),A({message:"Updated number for ".concat(t.name),class:"notify"}),setTimeout((function(){A(Object(u.a)(Object(u.a)({},V),{},{message:null}))}),5e3)}))}}else j({name:s,number:p}).then((function(e){c(n.concat(e)),f(""),C(""),A({message:"Added ".concat(e.name," to phonebook"),class:"notify"}),setTimeout((function(){A(Object(u.a)(Object(u.a)({},V),{},{message:null}))}),5e3)}))},nameText:"Name",nameVal:s,nameChange:function(e){f(e.target.value)},numText:"Number",numVal:p,numChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{entries:B,deleteClick:function(e){var t=e.target.id,a=n.filter((function(e){return e.id===Number(t)}))[0];window.confirm("Delete ".concat(a.name,"?"))&&(k(t).catch((function(e){A({message:"".concat(a.name," was already deleted from the server."),class:"notify notify-error"})})),c(n.filter((function(e){return e.id!==Number(t)}))),A({message:"Removed ".concat(a.name," from phonebook"),class:"notify"}),setTimeout((function(){A(Object(u.a)(Object(u.a)({},V),{},{message:null}))}),5e3))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bcdc0766.chunk.js.map