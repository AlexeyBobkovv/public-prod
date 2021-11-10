!function(){"use strict";var e,t={806:function(e,t,a){a.r(t)},289:function(){},470:function(e,t,a){a.r(t)},355:function(e,t,a){a.r(t)},838:function(e,t,a){a.r(t)},280:function(e,t,a){a.r(t)},709:function(e,t,a){a.r(t)},957:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294)),r=l(a(370)),c=l(a(504)),u=l(a(898));t.default=function(){return n.default.createElement("div",{className:"app"},n.default.createElement(r.default,null),n.default.createElement(c.default,null),n.default.createElement(u.default,null))}},370:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));a(806);var r=a(936),c=l(a(184)),u=l(a(682));t.default=function(){var e=r.useLocation(),t=["/","/letter","/video","/info"].includes(e.pathname),a=c.default("center-item__filters",{"filters-on":t}),l=c.default("nav-item__name",{"tournOpen-btn":"/tournament"===e.pathname});return n.default.createElement("header",{className:"header"},n.default.createElement("nav",{className:"menu"},n.default.createElement("div",{className:"nav-item"},n.default.createElement("div",{className:"nav-item__block"},n.default.createElement(r.NavLink,{to:"/tournament",className:function(e){return"nav-item__link links-size"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-tourn.svg",alt:"",className:"tournament"}))),n.default.createElement("p",{className:l},"Tournament")),n.default.createElement(u.default,{name:"Spectators",link:"spectators",mainImg:"head-spectator",mainImgClass:"spectators",filterImg:"club-player-filter",filterRightTopImg:"date-filter.svg"}),n.default.createElement(u.default,{name:"Partner",link:"partners",mainImg:"head-partner",mainImgClass:"partners",filterImg:"partner-filter"}),n.default.createElement("div",{className:"center-item"},n.default.createElement("div",{className:a},n.default.createElement(r.NavLink,{className:function(e){return"center-item__help-link "+(e.isActive?" onbtn-background":" offbtn-background")},to:"/info"},n.default.createElement("img",{src:"./images/head-filter-info.svg",alt:"",className:"info"})),n.default.createElement(r.NavLink,{to:"/",className:function(e){return"center-item__help-link "+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-rose.svg",alt:"",className:"rose"}))),n.default.createElement(r.NavLink,{className:"center-item__icon",to:"/"},n.default.createElement("img",{src:"./images/main-"+(t?"on":"off")+".png",alt:""})),n.default.createElement("div",{className:a},n.default.createElement(r.NavLink,{to:"/video",className:function(e){return"center-item__help-link"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-video.svg",alt:"",className:"video"})),n.default.createElement(r.NavLink,{to:"/letter",className:function(e){return"center-item__help-link"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-letter.svg",alt:"",className:"letter"})))),n.default.createElement(u.default,{name:"Clubs",link:"clubs",mainImg:"head-club",mainImgClass:"clubs",filterImg:"club-player-filter"}),n.default.createElement(u.default,{name:"Players",link:"players",mainImg:"head-player",mainImgClass:"players",filterImg:"club-player-filter"}),n.default.createElement(u.default,{name:"Bloggers",link:"bloggers",mainImg:"head-bloger",mainImgClass:"blogers",filterImg:"blogger-filter"})),n.default.createElement("div",{className:"head-registr registr-rule"},n.default.createElement("img",{src:"./images/registation.svg",alt:""}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"bg"})))}},682:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));a(355);var r=a(936),c=l(a(184));function u(e){var t=e.name,a=e.link,l=e.mainImg,u=e.mainImgClass,i=e.filterImg,m=e.filterRightTopImg,s=void 0===m?"search-icon.png":m,f=r.useLocation(),o=c.default("nav-item__name",{"open-btn":f.pathname==="/"+a}),d=c.default("nav-item__filters",{"filters-on":f.pathname==="/"+a});return n.default.createElement("div",{className:"nav-item"},n.default.createElement("div",{className:"nav-item__block"},n.default.createElement("div",{className:d},n.default.createElement("button",{type:"button",className:"filter-icon offbtn-background "},n.default.createElement("img",{src:"./images/earth-filter.svg",alt:"",className:"left-top-filter"})),n.default.createElement("button",{type:"button",className:"filter-icon offbtn-background "},n.default.createElement("img",{src:"./images/"+i+".svg",alt:"",className:"left-bottom-filter"}))),n.default.createElement(r.NavLink,{to:"/"+a,className:function(e){return"nav-item__link links-size"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/"+l+".svg",alt:"",className:u})),n.default.createElement("div",{className:"fake-center"}),n.default.createElement("div",{className:d},n.default.createElement("button",{type:"button",className:"filter-icon offbtn-background"},n.default.createElement("img",{src:"./images/"+s,alt:"",className:"right-top-filter"})),n.default.createElement("button",{type:"button",className:"filter-icon offbtn-background"},n.default.createElement("img",{src:"./images/raiting-filter.svg",alt:"",className:"right-bottom-filter"})))),n.default.createElement("p",{className:o},t))}t.default=u,u.defaultProps={filterRightTopImg:"search-icon.png"}},898:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(a(294)),i=c(a(184));a(709),t.default=function(){var e=u.useState(!1),t=e[0],a=e[1],l=i.default("radial-menu__main",{"onbtn-background":t},{"offbtn-background":!t}),n=i.default("radial-menu",{active:t});return u.default.createElement("div",{className:n},u.default.createElement("button",{type:"button",className:l,onClick:function(){return a(!t)}},u.default.createElement("img",{src:"./images/wand.png",alt:""})),u.default.createElement("div",{className:"moving-icons"},u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/user-solid.svg",alt:""}))),u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/message-solid.svg",alt:""}))),u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/volume-low-solid.svg",alt:""}))),u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/book-solid.svg",alt:""}))),u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/heart-solid.svg",alt:"",className:"heart"}))),u.default.createElement("div",{className:"rotater"},u.default.createElement("a",{href:"",className:"radial-menu__icon offbtn-background"},u.default.createElement("img",{src:"./images/r-solid.svg",alt:""})))))}},200:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! Info"))}},588:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! Letter"))}},504:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294)),r=a(936);a(470);var c=l(a(200)),u=l(a(377)),i=l(a(679)),m=l(a(588)),s=l(a(149));t.default=function(){return n.default.createElement("main",{className:"main"},n.default.createElement(r.Routes,null,n.default.createElement(r.Route,{path:"/",element:n.default.createElement(u.default,null)}),n.default.createElement(r.Route,{path:"/info",element:n.default.createElement(c.default,null)}),n.default.createElement(r.Route,{path:"/video",element:n.default.createElement(i.default,null)}),n.default.createElement(r.Route,{path:"/letter",element:n.default.createElement(m.default,null)}),n.default.createElement(r.Route,{path:"/partners",element:n.default.createElement(s.default,null)})))}},377:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));a(838),t.default=function(){return n.default.createElement("div",{className:"main-nav"},n.default.createElement("nav",{className:"main-nav__aside"},n.default.createElement("a",{href:"",className:"top-block top-partner"},n.default.createElement("img",{src:"./images/main-top-partner.svg",alt:"",className:"foreground"}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"background"})),n.default.createElement("a",{href:"",className:"top-block top-tournament"},n.default.createElement("img",{src:"./images/main-top-tournament.svg",alt:"",className:"foreground"}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"background"})),n.default.createElement("a",{href:"",className:"partner-logo left-top-partn"},n.default.createElement("img",{src:"./images/partn-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo left-center-partn"},n.default.createElement("img",{src:"./images/bentley-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo left-bottom-partn"},n.default.createElement("img",{src:"./images/mersedes-logo.png",alt:""})),n.default.createElement("a",{className:"bottom-registr registr-rule offbtn-background"},n.default.createElement("img",{src:"./images/registation.svg",alt:""}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"bg"}))),n.default.createElement("div",{className:"main-nav__center"},n.default.createElement("div",{className:"main-nav__center-header-block"},n.default.createElement("img",{src:"./images/earth.svg",alt:"",className:"earth"})),n.default.createElement("div",{className:"main-nav__center-footer-block"},n.default.createElement("a",{href:"",className:"top-block"},n.default.createElement("img",{src:"./images/main-top-club.svg",alt:"",className:"foreground"}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"background"})))),n.default.createElement("nav",{className:"main-nav__aside"},n.default.createElement("a",{href:"",className:"top-block top-player"},n.default.createElement("img",{src:"./images/main-top-player.svg",alt:"",className:"foreground"}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"background"})),n.default.createElement("a",{href:"",className:"top-block top-blogger"},n.default.createElement("img",{src:"./images/main-top-blogger.svg",alt:"",className:"foreground"}),n.default.createElement("img",{src:"./images/btn-off.png",alt:"",className:"background"})),n.default.createElement("a",{href:"",className:"partner-logo right-top-partn"},n.default.createElement("img",{src:"./images/bmw-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo right-bottom-partn"},n.default.createElement("img",{src:"./images/audi-logo.png",alt:""}))))}},679:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! VId"))}},149:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294));a(280),t.default=function(){return n.default.createElement("div",{className:"main-page"},n.default.createElement("div",{className:"main-page__add"},n.default.createElement("div",{className:"page-add upper"}),n.default.createElement("div",{className:"page-add center"}),n.default.createElement("div",{className:"page-add lower"})),n.default.createElement("div",{className:"main-page__list"},n.default.createElement("p",null,"vbn")))}},629:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294)),r=l(a(935)),c=a(936),u=l(a(957));r.default.render(n.default.createElement(c.HashRouter,null,n.default.createElement(u.default,null)),document.getElementById("root"))}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e].call(r.exports,r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var c=1/0;for(m=0;m<e.length;m++){a=e[m][0],n=e[m][1],r=e[m][2];for(var u=!0,i=0;i<a.length;i++)(!1&r||c>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[i])}))?a.splice(i--,1):(u=!1,r<c&&(c=r));u&&(e.splice(m--,1),t=n())}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,n,r]},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,c=a[0],u=a[1],i=a[2],m=0;for(n in u)l.o(u,n)&&(l.m[n]=u[n]);if(i)var s=i(l);for(t&&t(a);m<c.length;m++)r=c[m],l.o(e,r)&&e[r]&&e[r][0](),e[c[m]]=0;return l.O(s)},a=self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),l.O(void 0,[925],(function(){return l(629)}));var n=l.O(void 0,[925],(function(){return l(289)}));n=l.O(n)}();