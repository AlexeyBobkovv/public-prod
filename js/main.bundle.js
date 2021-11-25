!function(){"use strict";var e,t={289:function(){},189:function(e,t,a){a.r(t)},854:function(e,t,a){a.r(t)},227:function(e,t,a){a.r(t)},378:function(e,t,a){a.r(t)},385:function(e,t,a){a.r(t)},315:function(e,t,a){a.r(t)},381:function(e,t,a){a.r(t)},28:function(e,t,a){a.r(t)},957:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294)),l=r(a(309)),u=r(a(859));t.default=function(){return n.default.createElement("div",{className:"app"},n.default.createElement(l.default,null),n.default.createElement(u.default,null))}},859:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294)),l=a(68);a(189);var u=r(a(278)),s=r(a(200)),i=r(a(377)),c=r(a(690)),o=r(a(588)),m=r(a(149));t.default=function(){return n.default.createElement(l.Routes,null,n.default.createElement(l.Route,{path:"/",element:n.default.createElement(u.default,null)}),n.default.createElement(l.Route,{path:"/main",element:n.default.createElement(i.default,null)}),n.default.createElement(l.Route,{path:"/info",element:n.default.createElement(s.default,null)}),n.default.createElement(l.Route,{path:"/video",element:n.default.createElement(c.default,null)}),n.default.createElement(l.Route,{path:"/letter",element:n.default.createElement(o.default,null)}),n.default.createElement(l.Route,{path:"/partners",element:n.default.createElement(m.default,null)}))}},309:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));a(854);var l=a(68),u=r(a(184)),s=a(641),i=a(907),c=r(a(19));t.default=function(){var e=l.useLocation(),t=s.useAppDispatch(),a=["/main","/letter","/video","/info"].includes(e.pathname),r=u.default("center-item__filters",{"center-item__filters_enabled":a}),o=s.useAppSelector((function(e){return e.header})).headerClass,m=u.default(o,{header_disabled:"/"===e.pathname,header_absolute:!a}),d=u.default("nav-item__name",{"tournOpen-btn":"/tournament"===e.pathname}),f=u.default("head-btn head-btn_close",{"head-btn_open":"header header_closed"===o}),_=u.default("arrow arrow_close",{arrow_open:"header header_closed"===o}),g=s.useAppSelector((function(e){return e.registr.auth}));return n.default.createElement("header",{className:m},n.default.createElement("nav",{className:"menu"},n.default.createElement("div",{className:"nav-item"},n.default.createElement("div",{className:"nav-item__block"},n.default.createElement(l.NavLink,{to:"/tournament",className:function(e){return"nav-item__link nav-item__link_size"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-tourn.svg",alt:"",className:"nav-item__link_size_tournament"}))),n.default.createElement("p",{className:d},"Турниры")),n.default.createElement(c.default,{name:"Зрители",link:"spectators",mainImg:"head-spectator",mainImgClass:"spectators",filterImg:"club-player-filter",filterRightTopImg:"date-filter.svg"}),n.default.createElement(c.default,{name:"Партнеры",link:"partners",mainImg:"head-partner",mainImgClass:"partners",filterImg:"partner-filter"}),n.default.createElement("div",{className:"center-item"},n.default.createElement("div",{className:r},n.default.createElement(l.NavLink,{className:function(e){return"center-item__help-link "+(e.isActive?" onbtn-background":" offbtn-background")},to:"/info"},n.default.createElement("img",{src:"./images/head-filter-info.svg",alt:"",className:"center-item__help-link_size_info"})),n.default.createElement(l.NavLink,{to:"/main",className:function(e){return"center-item__help-link "+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-rose.svg",alt:"",className:"center-item__help-link_size_rose"}))),n.default.createElement(l.NavLink,{className:"center-item__icon",to:"/main"},n.default.createElement("img",{src:"./images/main-"+(a?"on":"off")+".svg",alt:""})),n.default.createElement("div",{className:r},n.default.createElement(l.NavLink,{to:"/video",className:function(e){return"center-item__help-link"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-video.svg",alt:"",className:"center-item__help-link_size_video"})),n.default.createElement(l.NavLink,{to:"/letter",className:function(e){return"center-item__help-link"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/head-filter-letter.svg",alt:"",className:"center-item__help-link_size_video"})))),n.default.createElement(c.default,{name:"Клубы",link:"clubs",mainImg:"head-club",mainImgClass:"clubs",filterImg:"club-player-filter"}),n.default.createElement(c.default,{name:"Игроки",link:"players",mainImg:"head-player",mainImgClass:"players",filterImg:"club-player-filter"}),n.default.createElement(c.default,{name:"Блоггеры",link:"bloggers",mainImg:"head-bloger",mainImgClass:"bloggers",filterImg:"blogger-filter"})),n.default.createElement(l.Link,{to:"/",className:"head-registr registr-rule "+(g?"on":"off")+"btn-background"},n.default.createElement("img",{src:"./images/registr-"+(g?"on.png":"off.svg"),alt:""})),n.default.createElement("button",{type:"button",className:f,onClick:function(){return t("header"===o?i.closeHeader():i.openHeader())}},n.default.createElement("img",{src:"./images/dropArrow.png",alt:"",className:_})))}},19:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));a(227);var l=a(68),u=r(a(184));function s(e){var t=e.name,a=e.link,r=e.mainImg,s=e.mainImgClass,i=e.filterImg,c=e.filterRightTopImg,o=void 0===c?"search-icon-filter.svg":c,m=l.useLocation(),d=u.default("nav-item__name",{"nav-item__name_enabled":m.pathname==="/"+a}),f=u.default("nav-item__filters",{"nav-item__filters_enabled":m.pathname==="/"+a}),_=u.default("button_size_right-top",{"button__date-filter":"search-icon-filter.svg"!==o});return n.default.createElement("div",{className:"nav-item"},n.default.createElement("div",{className:"nav-item__block"},n.default.createElement("div",{className:f},n.default.createElement("button",{type:"button",className:"button offbtn-background "},n.default.createElement("img",{src:"./images/earth-filter.svg",alt:"",className:"button_size_left-top"})),n.default.createElement("button",{type:"button",className:"button offbtn-background "},n.default.createElement("img",{src:"./images/"+i+".svg",alt:"",className:"button_size_left-bottom"}))),n.default.createElement(l.NavLink,{to:"/"+a,className:function(e){return"nav-item__link nav-item__link_size"+(e.isActive?" onbtn-background":" offbtn-background")}},n.default.createElement("img",{src:"./images/"+r+".svg",alt:"",className:"nav-item__link_size_"+s})),n.default.createElement("div",{className:"fake-center"}),n.default.createElement("div",{className:f},n.default.createElement("button",{type:"button",className:"button offbtn-background"},n.default.createElement("img",{src:"./images/"+o,alt:"",className:_})),n.default.createElement("button",{type:"button",className:"button offbtn-background"},n.default.createElement("img",{src:"./images/raiting-filter.svg",alt:"",className:"button_size_right-bottom"})))),n.default.createElement("p",{className:d},t))}t.default=s,s.defaultProps={filterRightTopImg:"search-icon-filter.svg"}},200:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! Info"))}},588:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! Letter"))}},377:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));a(378);var l=r(a(328));t.default=function(){return n.default.createElement("div",{className:"main-nav"},n.default.createElement("nav",{className:"main-nav__aside"},n.default.createElement("a",{href:"",className:"top-block top-block_size_aside top-block_direction_partner"},n.default.createElement("img",{src:"./images/main-top-partner.svg",alt:"",className:"top-block__foreground"}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"top-block__background"})),n.default.createElement("a",{href:"",className:"top-block top-block_size_aside top-block_direction_tournament"},n.default.createElement("img",{src:"./images/main-top-tournament.svg",alt:"",className:"top-block__foreground"}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"top-block__background"})),n.default.createElement("a",{href:"",className:"partner-logo partner-logo_direction_left-top"},n.default.createElement("img",{src:"./images/partn-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo partner-logo_direction_left-center"},n.default.createElement("img",{src:"./images/bentley-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo partner-logo_direction_left-bottom"},n.default.createElement("img",{src:"./images/mersedes-logo.png",alt:""})),n.default.createElement("a",{className:"bottom-registr registr-rule offbtn-top-block__background"},n.default.createElement("img",{src:"./images/registation.svg",alt:""}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"bg"}))),n.default.createElement("div",{className:"main-nav__center"},n.default.createElement("div",{className:"main-nav__upper-block"},n.default.createElement("img",{src:"./images/earth.svg",alt:"",className:"main-nav__upper-block_size_earth"})),n.default.createElement("div",{className:"main-nav__lower-block"},n.default.createElement("a",{href:"",className:"top-block top-block_size_center"},n.default.createElement("img",{src:"./images/main-top-club.svg",alt:"",className:"top-block__foreground"}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"top-block__background"})))),n.default.createElement("nav",{className:"main-nav__aside"},n.default.createElement("a",{href:"",className:"top-block top-block_size_aside top-block_direction_player"},n.default.createElement("img",{src:"./images/main-top-player.svg",alt:"",className:"top-block__foreground"}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"top-block__background"})),n.default.createElement("a",{href:"",className:"top-block top-block_size_aside top-block_direction_blogger"},n.default.createElement("img",{src:"./images/main-top-blogger.svg",alt:"",className:"top-block__foreground"}),n.default.createElement("img",{src:"./images/btn-off.svg",alt:"",className:"top-block__background"})),n.default.createElement("a",{href:"",className:"partner-logo partner-logo_direction_right-top"},n.default.createElement("img",{src:"./images/bmw-logo.png",alt:""})),n.default.createElement("a",{href:"",className:"partner-logo partner-logo_direction_right-bottom"},n.default.createElement("img",{src:"./images/audi-logo.png",alt:""}))),n.default.createElement(l.default,null))}},328:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(a(294)),i=u(a(184));a(385),t.default=function(){var e=s.useState(!1),t=e[0],a=e[1],r=i.default("radial-menu__main",{"onbtn-background":t},{"offbtn-background":!t}),n=i.default("radial-menu",{active:t});return s.default.createElement("div",{className:n},s.default.createElement("button",{type:"button",className:r,onClick:function(){return a(!t)}},s.default.createElement("img",{src:"./images/wand.svg",alt:""})),s.default.createElement("div",{className:"moving-icons"},s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/user-solid.svg",alt:""}))),s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/message-solid.svg",alt:""}))),s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/volume-low-solid.svg",alt:""}))),s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/radial-contacts-icon.svg",alt:""}))),s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"#",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/heart-solid.svg",alt:"",className:"heart"}))),s.default.createElement("div",{className:"rotater"},s.default.createElement("a",{href:"",className:"radial-menu__icon offbtn-background"},s.default.createElement("img",{src:"./images/r-solid.svg",alt:""})))))}},690:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));t.default=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"HI! VId"))}},149:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(a(294));a(315);var i=u(a(535)),c=a(641),o=a(907);t.default=function(){var e=c.useAppDispatch();return s.useEffect((function(){var t=setTimeout((function(){e(o.closeHeader())}),5e3);return function(){return clearTimeout(t)}}),[]),s.default.createElement("div",{className:"partner-page"},s.default.createElement("div",{className:"partner-page__list"},s.default.createElement("div",{className:"partner-page__item partner-page__item_add"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement("div",{className:"partner-page__item partner-page__item_add"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement("div",{className:"partner-page__item partner-page__item_add"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement("div",{className:"partner-page__item partner-page__item_add"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"}),s.default.createElement(i.default,{userName:"Какое-то",userRaiting:55,userBrand:"bmw",userLogo:"bmw",partnerType:"cars",country:"russia"})))}},278:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294)),l=a(68),u=a(641),s=a(751);a(381),t.default=function(){var e=u.useAppDispatch();return n.default.createElement("div",{className:"registration"},n.default.createElement(l.Link,{to:"/main",className:"no-auth"}),n.default.createElement(l.Link,{to:"/main",className:"exit-btn offbtn-background"},n.default.createElement("img",{src:"./images/exit-registr.svg",alt:""})),n.default.createElement("div",{className:"registration__block"},n.default.createElement("div",{className:"registration__authorization"},n.default.createElement("div",{className:"button-block button-block_size_registr"},n.default.createElement("button",{type:"button",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/r-solid.svg",alt:""}))),n.default.createElement("div",{className:"button-block button-block_size_registr sing-in-btn"},n.default.createElement(l.Link,{to:"/main",type:"button",onClick:function(){return e(s.switchAuth())},className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/log-in-registr.svg",alt:""})))),n.default.createElement("p",{className:"registration__name registration__name_directions_left-top"},"Регистрация"),n.default.createElement("p",{className:"registration__name registration__name_directions_right-top"},"Вход"),n.default.createElement("div",{className:"registration__mail-language"},n.default.createElement("div",{className:"button-block button-block_size_emai-language"},n.default.createElement("button",{type:"submit",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/email-registr.svg",alt:""}))),n.default.createElement("input",{className:"registration__input registration__input_email-input",type:"text",placeholder:"example@email"}),n.default.createElement("div",{className:"button-block button-block_size_emai-language"},n.default.createElement("button",{type:"button",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/language-registr.svg",alt:""})))),n.default.createElement("p",{className:"registration__name registration__name_directions_left-middle"},"E-mail"),n.default.createElement("p",{className:"registration__name registration__name_directions_right-middle"},"Язык"),n.default.createElement("div",{className:"registration__password"},n.default.createElement("div",{className:"button-block button-block_size_location-pwrd"},n.default.createElement("button",{type:"submit",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/reg-pas-key.svg",alt:""}))),n.default.createElement("input",{className:"registration__input registration__input_password-input",type:"text",placeholder:"some-password"}),n.default.createElement("div",{className:"button-block button-block_size_location-pwrd"},n.default.createElement("button",{type:"button",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/lctn-registr.svg",alt:""})))),n.default.createElement("p",{className:"registration__name registration__name_directions_left-bottom"},"Пароль"),n.default.createElement("p",{className:"registration__name registration__name_directions_right-bottom"},"Место"),n.default.createElement("div",{className:"button-block button-lower help-btn"},n.default.createElement("button",{type:"button",className:"button-block__icon offbtn-background"},n.default.createElement("img",{src:"./images/help-registr.svg",alt:""}))),n.default.createElement("p",{className:"registration__name registration__name_directions_bottom"},"Помощь")))}},535:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294));a(28),t.default=function(e){var t=e.userName,a=e.userRaiting,r=e.userBrand,l=e.userLogo,u=e.partnerType,s=e.country;return n.default.createElement("div",{className:"user-item"},n.default.createElement("div",{className:"user-item__block"},n.default.createElement("div",{className:"user-item__filters"},n.default.createElement("button",{type:"button",className:"user-button offbtn-background "},n.default.createElement("img",{src:"./images/"+u+"-type.svg",alt:"",className:"user-button_size_left-top"})),n.default.createElement("div",{className:"user-button user-button_size_left-bottom"},n.default.createElement("img",{src:"./images/"+r+"-logo.png",alt:""}))),n.default.createElement("div",{className:"user-item__link"},n.default.createElement("img",{src:"./images/"+l+"-logo.png",alt:"",className:"user-item__link_size_tournament"})),n.default.createElement("div",{className:"fake-center"}),n.default.createElement("div",{className:"user-item__filters"},n.default.createElement("button",{type:"button",className:"user-button offbtn-background"},n.default.createElement("img",{src:"./images/partner-filter.svg",alt:"",className:"user-button_size_right-top"})),n.default.createElement("div",{className:"user-button user-button_size_right-bottom"},n.default.createElement("img",{src:"./images/"+s+".png",alt:""})))),n.default.createElement("p",{className:"user-item__name"},a,n.default.createElement("span",null," "),t))}},641:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.useAppSelector=t.useAppDispatch=void 0;var r=a(675);t.useAppDispatch=function(){return r.useDispatch()},t.useAppSelector=r.useSelector},629:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(294)),l=r(a(935)),u=a(68),s=a(675),i=r(a(957)),c=a(54).setupStore();l.default.render(n.default.createElement(u.HashRouter,null,n.default.createElement(s.Provider,{store:c},n.default.createElement(i.default,null))),document.getElementById("root"))},907:function(e,t,a){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.selectCount=t.openHeader=t.closeHeader=t.headerSlice=void 0;var n=a(32);t.headerSlice=n.createSlice({name:"headOpen",initialState:{headerClass:"header"},reducers:{closeHeader:function(e){e.headerClass="header header_closed"},openHeader:function(e){e.headerClass="header"}}}),t.closeHeader=(r=t.headerSlice.actions).closeHeader,t.openHeader=r.openHeader;t.selectCount=function(e){return e.header.headerClass},t.default=t.headerSlice.reducer},751:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.selectCount=t.switchAuth=t.counterSlice=void 0;var r=a(32);t.counterSlice=r.createSlice({name:"registration",initialState:{auth:!1},reducers:{switchAuth:function(e){e.auth=!e.auth}}}),t.switchAuth=t.counterSlice.actions.switchAuth;t.selectCount=function(e){return e.registr.auth},t.default=t.counterSlice.reducer},54:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setupStore=void 0;var n=a(32),l=r(a(751)),u=r(a(907)),s=n.combineReducers({registr:l.default,header:u.default});t.setupStore=function(){return n.configureStore({reducer:s})}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,a,n,l){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],l=e[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&l||u>=l)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(s=!1,l<u&&(u=l));s&&(e.splice(c--,1),t=n())}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,n,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,u=a[0],s=a[1],i=a[2],c=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(i)var o=i(r);for(t&&t(a);c<u.length;c++)l=u[c],r.o(e,l)&&e[l]&&e[l][0](),e[u[c]]=0;return r.O(o)},a=self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),r.O(void 0,[477],(function(){return r(629)}));var n=r.O(void 0,[477],(function(){return r(289)}));n=r.O(n)}();