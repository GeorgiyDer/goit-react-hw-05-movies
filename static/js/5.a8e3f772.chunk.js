"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[5],{5:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a,o=e(439),c=e(791),u=e(87),i=e(689),s=e(831),p=e(184),f=function(n){var t=n.onSubmit,e=(0,c.useState)(""),r=(0,o.Z)(e,2),a=r[0],u=r[1];return(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(t(a.trim()),u("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},children:[(0,p.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Movie name",onChange:function(n){u(n.currentTarget.value.toLowerCase())},value:a,name:"movieName"}),(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)("span",{children:"Search"})})]})},v=e(168),h=e(444),l=(0,h.ZP)(u.OL)(r||(r=(0,v.Z)(["\n    color: black;\n    text-decoration: none;\n    font-size: 20px;\n\n    &.active {\n        color: tomato;\n    }\n    \n    :hover:not(.active),\n    :focus-visible:not(.active) {\n        color: tomato\n    }\n\n"]))),m=h.ZP.li(a||(a=(0,v.Z)(["\n    list-style: none;\n"]))),d=function(){var n,t=(0,c.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],v=(0,u.lr)(),h=(0,o.Z)(v,2),d=h[0],g=h[1],x=null!==(n=d.get("query"))&&void 0!==n?n:"",b=(0,i.TH)();(0,c.useEffect)((function(){""!==x&&(0,s.mJ)(x).then((function(n){a(n.data.results)})).catch((function(n){console.log(n)}))}),[x]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{onSubmit:function(n){g(""!==n?{query:n}:{})}}),(0,p.jsx)("ul",{children:r.map((function(n){var t=n.title,e=n.id;return(0,p.jsx)(m,{children:(0,p.jsx)(l,{to:"/"===b.pathname?"movies/".concat(e):"".concat(e),state:{from:b},children:t})},e)}))})]})}},831:function(n,t,e){e.d(t,{h_:function(){return s},he:function(){return i},mJ:function(){return v},oO:function(){return f},y:function(){return p}});var r=e(861),a=e(757),o=e.n(a),c=e(263),u="a929247367e6a655cfe576358218294b",i=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(u),n.next=3,c.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,c.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,c.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:u}),r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?").concat(e),n.next=4,c.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:u,language:"en-US",page:1,include_adult:!1,query:"".concat(t)}),r="https://api.themoviedb.org/3/search/movie?".concat(e),n.next=4,c.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5.a8e3f772.chunk.js.map