(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)r=s[u],o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({area:"area",blank:"blank",community:"community",company:"company",home:"home"}[t]||t)+"."+{area:"8308d28a",blank:"7a5f382f",community:"2115d9a1",company:"0de96e3b",home:"fa551741"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={area:1,home:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({area:"area",blank:"blank",community:"community",company:"company",home:"home"}[t]||t)+"."+{area:"c652db59",blank:"31d6cfe0",community:"31d6cfe0",company:"31d6cfe0",home:"d2d913f5"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PageHeader"),n("router-view"),n("PageJoin"),n("PageFooter")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("nav",{staticClass:"navbar has-shadow is-spaced",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{attrs:{src:n("cf05"),width:"112",height:"28"}})]),t._m(0)],1),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/community"}},[t._v("Community")]),a("div",{staticClass:"navbar-dropdown"},[t._l(t.communityList,function(e){return a("router-link",{key:e.path,staticClass:"navbar-item",attrs:{to:e.path}},[t._v(t._s(e.name))])}),a("hr",{staticClass:"navbar-divider"}),a("router-link",{staticClass:"navbar-item",attrs:{to:"/community"}},[t._v("More...")])],2)],1),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/company"}},[t._v("Company")]),a("div",{staticClass:"navbar-dropdown"},[t._l(t.companyList,function(e){return a("router-link",{key:e.path,staticClass:"navbar-item",attrs:{to:e.path}},[t._v(t._s(e.name))])}),a("hr",{staticClass:"navbar-divider"}),a("router-link",{staticClass:"navbar-item",attrs:{to:"/company"}},[t._v("More...")])],2)],1)],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("b-icon",{attrs:{icon:"github-circle",size:"is-medium"}}),a("b-icon",{attrs:{icon:"twitter",size:"is-medium"}}),a("b-icon",{attrs:{icon:"facebook",size:"is-medium"}})],1)]),a("div",{staticClass:"navbar-item"},[a("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left"}},[a("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[a("span",[t._v(t._s(t.lang))]),a("b-icon",{attrs:{icon:"menu-down"}})],1),t._l(t.langList,function(e){return a("b-dropdown-item",{key:e.name,attrs:{"data-id":"lang.name","aria-role":"listitem"},on:{click:function(n){return t.changeLang(e.name)}}},[t._v(t._s(e.flag)+" "+t._s(e.displayName))])})],2)],1)])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],c={data:function(){return{communityList:[{name:"China Mainland",path:"/community/cn"},{name:"Hong Kong",path:"/community/hk"},{name:"Taiwan",path:"/community/tw"}],companyList:[{name:"China Mainland",path:"/company/cn"},{name:"Hong Kong",path:"/company/hk"},{name:"Taiwan",path:"/company/tw"}],langList:[{displayName:"English",name:"en",flag:"🇺🇸"},{displayName:"简体中文",name:"zh-cn",flag:"🇨🇳"},{displayName:"繁体中文",name:"zh-tw",flag:"🇹🇼"}]}},computed:{lang:function(){return this.$store.state.lang}},methods:{changeLang:function(t){this.$store.commit("changeLang",t)}}},l=c,u=n("2877"),m=Object(u["a"])(l,i,s,!1,null,null,null),d=m.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("strong",[t._v("Opensource Lists")]),t._v(" by "),n("a",{attrs:{href:"https://www.ixiqin.com"}},[t._v("Bestony (HuanCheng Bai)")]),t._v(". The source code is licensed\n      "),n("a",{attrs:{href:"https://github.com/bestony/opensourcelists.com/blob/master/LICENSE"}},[t._v("AGPL")]),t._v(". The website content\n      is licensed "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n    ")])])])}],h={},v=Object(u["a"])(h,p,f,!1,null,null,null),b=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-medium is-success is-bold"},[n("div",{staticClass:"hero-body has-text-centered"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Submit Your Local Opensource Community or Opensource Company")]),n("div",[n("b-button",{attrs:{type:"is-link",size:"is-large"}},[t._v("😋 Click Here to see tutorials")])],1)])])])},y=[],_={},C=Object(u["a"])(_,g,y,!1,null,null,null),w=C.exports,k={components:{PageHeader:d,PageFooter:b,PageJoin:w}},E=k,x=(n("034f"),Object(u["a"])(E,r,o,!1,null,null,null)),L=x.exports,O=n("2f62");a["default"].use(O["a"]);var P=new O["a"].Store({state:{lang:"en"},mutations:{changeLang:function(t,e){t.lang=e}},actions:{}}),j=n("8c4f");a["default"].use(j["a"]);var S=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/community",name:"community",component:function(){return n.e("community").then(n.bind(null,"8838"))}},{path:"/company",name:"company",component:function(){return n.e("company").then(n.bind(null,"8799"))}},{path:"/blank",name:"blank",component:function(){return n.e("blank").then(n.bind(null,"9de2"))}},{path:"/:mode/:area",name:"area",props:!0,component:function(){return n.e("area").then(n.bind(null,"2013"))}}],scrollBehavior:function(t){if(t.hash)return{selector:t.hash}}}),T=n("8a03"),N=n.n(T);n("7e7d");a["default"].use(N.a),a["default"].config.productionTip=!1,new a["default"]({store:P,router:S,render:function(t){return t(L)}}).$mount("#app")},"64a9":function(t,e,n){},"7e7d":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.214ba2f0.png"}});
//# sourceMappingURL=app.968c10f1.js.map