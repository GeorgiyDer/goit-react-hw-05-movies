"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133],{133:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a,c=e(439),u=e(791),o=e(168),i=e(444),s=e(87),p=(0,i.ZP)(s.OL)(r||(r=(0,o.Z)(["\n    color: black;\n    text-decoration: none;\n    font-size: 20px;\n\n    &.active {\n        color: tomato;\n    }\n    \n    :hover:not(.active),\n    :focus-visible:not(.active) {\n        color: tomato\n    }\n\n"]))),f=i.ZP.li(a||(a=(0,o.Z)(["\n    list-style: none;\n"]))),h=e(831),v=e(184),l=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,u.useEffect)((function(){(0,h.he)().then((function(n){r(n.data.results)}))}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Trending Today"}),(0,v.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,v.jsx)(f,{children:(0,v.jsx)(p,{to:"movies/".concat(t),children:e})},t)}))})]})}},831:function(n,t,e){e.d(t,{h_:function(){return s},he:function(){return i},mJ:function(){return h},oO:function(){return f},y:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(263),o="a929247367e6a655cfe576358218294b",i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o),n.next=3,u.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?").concat(e),n.next=4,u.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o,language:"en-US",page:1,include_adult:!1,query:"".concat(t)}),r="https://api.themoviedb.org/3/search/movie?".concat(e),n.next=4,u.Z.get(r);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=133.aa7ea335.chunk.js.map