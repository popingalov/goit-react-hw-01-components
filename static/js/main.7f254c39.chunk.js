(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,r){t.exports={ColorPicker:"ColorPicker_ColorPicker__3542I",ColorPicker__title:"ColorPicker_ColorPicker__title__2uVwY",ColorPicker__option:"ColorPicker_ColorPicker__option__2HuE7"}},,,function(t){t.exports=JSON.parse('[{"id":"id-1","url":"https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg","title":"Feathers. Art abstract","price":500,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":10},{"id":"id-2","url":"https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg","title":"Bird. Animal art abstract","price":400,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":15},{"id":"id-3","url":"https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg","title":"Flowers. Tulip nature art abstract","price":600,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":5}]')},function(t,e,r){t.exports={alert:"Alert_alert__13QMQ",error:"Alert_error__1F62D Alert_alert__13QMQ",warning:"Alert_warning__2p0ew Alert_alert__13QMQ",success:"Alert_success__1qP3P Alert_alert__13QMQ"}},,,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){"use strict";r.r(e);var c=r(4),o=r.n(c),i=r(5),l=r.p+"static/media/default.ecf17127.png",a=r(0);var s=function(t){var e=t.url,r=void 0===e?l:e,c=t.title,o=t.profilUrls,i=t.author,s=void 0===i?"\u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d":i,n=t.price,u=t.quantity;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:r,alt:c,width:"480"}),Object(a.jsx)("h2",{children:c}),Object(a.jsxs)("p",{children:["\u0410\u0432\u0442\u043er: ",Object(a.jsx)("a",{href:o,children:s})]}),Object(a.jsxs)("p",{children:["Price: ",n," credits"]}),Object(a.jsxs)("p",{children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c: ",u>10?"\u0415\u0441\u0442\u044c":"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"," "]}),Object(a.jsx)("button",{type:"button",children:"Add in korzina"})]})};r(12);var n=function(t){var e=t.items;return Object(a.jsx)("ul",{className:"Painting",children:e.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)(s,{url:t.url,title:t.title,profilUrls:t.author.url,author:t.author.tag,price:t.price,quantity:t.quantity})},t.id)}))})};var u=function(t){var e=t.title,r=t.children;return Object(a.jsxs)("section",{children:[e&&Object(a.jsx)("h2",{children:e})," ",r]})},p=r(2),j=r.n(p);var b=function(t){var e=t.options;return Object(a.jsxs)("div",{className:j.a.ColorPicker,children:[Object(a.jsx)("h2",{className:j.a.ColorPicker__Title,children:"Color Picker"}),Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)("li",{className:j.a.ColorPicker__option,style:{backgroundColor:t.color}},t.color)}))})]})},d=r(6),h=r.n(d);var x=function(t){var e=t.text,r=t.type;return Object(a.jsx)("p",{role:"alert",className:h.a[r],children:e})},_=r(1),O=r.n(_),m=(r(13),function(t){var e=t.children;return Object(a.jsx)("div",{className:"Container",children:e})});r(14);var f=function(t){var e=t.type,r=void 0===e?"small":e,c=t.classNames,o=void 0===c?"":c,i=t.styles;return Object(a.jsx)("div",{className:"box box-".concat(r," ").concat(o),style:i,children:"Box"})},y=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}];function g(){return Object(a.jsxs)(m,{children:[Object(a.jsx)(u,{title:"\u0442\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436",children:Object(a.jsx)(n,{items:i})}),Object(a.jsx)(x,{text:"\u0428\u0435\u0444 \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e!",type:"success"}),Object(a.jsx)(x,{text:"\u0428\u0435\u0444 \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e!",type:"warning"}),Object(a.jsx)(x,{text:"\u0428\u0435\u0444 \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e!",type:"error"}),Object(a.jsx)(b,{options:y}),Object(a.jsx)(b,{options:y}),Object(a.jsx)(u,{title:"Hi man"}),Object(a.jsx)(f,{type:"small",classNames:"big red",styles:{color:"#fff"}}),Object(a.jsx)(f,{type:"medium"}),Object(a.jsx)(f,{type:"large"})]})}r(15),r(16);var v=document.querySelector("#root");o.a.render(Object(a.jsx)(O.a.StrictMode,{children:Object(a.jsx)(g,{})}),v)}],[[17,1,2]]]);
//# sourceMappingURL=main.7f254c39.chunk.js.map