(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{18:function(e,n,t){"use strict";var c=t(1),l=t(0),i=t(14),a=t(3),r=t(10),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,b=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(b);var u=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},o=t(8),d=t(20),h=[{index:!0,label:"Alvin Perlas",path:"/"},{label:"About",path:"/about"},{label:"Experience",path:"/experience"},{label:"Education",path:"/education"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return t.e(5).then(t.t.bind(null,164,7))})),x=function(){var e=Object(l.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(o.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},m=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},f=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(m,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Alvin Perlas",defaultTitle:"Alvin Perlas",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children})]})]})};f.defaultProps={children:null,title:null,description:"Alvin Perlas personal website."};n.a=f},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var c=t(1),l=t(0),i=t.n(l),a=t(13),r=t(8),s=t(3),j=t(18),b=(t(34),Object(l.lazy)((function(){return Promise.all([t.e(3),t.e(8)]).then(t.bind(null,161))}))),u=Object(l.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,162))})),o=Object(l.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,167))})),d=Object(l.lazy)((function(){return t.e(11).then(t.bind(null,163))})),h=Object(l.lazy)((function(){return t.e(9).then(t.bind(null,165))})),O=Object(l.lazy)((function(){return t.e(10).then(t.bind(null,166))})),x=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:o}),Object(c.jsx)(s.a,{path:"/about",component:b}),Object(c.jsx)(s.a,{path:"/education",component:h}),Object(c.jsx)(s.a,{path:"/experience",component:O}),Object(c.jsx)(s.a,{path:"/contact",component:u}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),m):Object(a.render)(Object(c.jsx)(p,{}),m)}},[[35,2,4]]]);
//# sourceMappingURL=main.cda63e8a.chunk.js.map