(function(t){function e(e){for(var i,r,c=e[0],l=e[1],f=e[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);o&&o(e);while(u.length)u.shift()();return n.push.apply(n,f||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,c=1;c<s.length;c++){var l=s[c];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var o=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"00f5":function(t,e,s){"use strict";var i=s("4d68"),a=s.n(i);a.a},2757:function(t,e,s){},3759:function(t,e,s){},"3dc8":function(t,e,s){"use strict";var i=s("2757"),a=s.n(i);a.a},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="4678"},"4d68":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=s("bc3a"),n=s.n(a),r=function(t,e){var s={airlines:{all:function(s){return e.get("".concat(t,"/results.json"),s)}}};return s},c="/api",l={},f=n.a.create(l),o=r(c,f);f.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),f.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=f,window.axios=f,t.api=o,Object.defineProperties(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}},api:{get:function(){return o}},$api:{get:function(){return o}}})},i["a"].use(Plugin);Plugin;var d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"row"},[s("aside",{class:{sidebar:!0,"sidebar-active":t.showSidebar}},[s("div",{staticClass:"sidebar-toggle"},[s("button",{staticClass:"sidebar-toggle-btn",on:{click:function(e){t.showSidebar=!t.showSidebar}}},[t.showSidebar?t._e():s("span",[t._v("\n            Показать фильтры\n          ")]),t.showSidebar?s("span",[t._v("\n            Скрыть фильтры\n          ")]):t._e()])]),t._l(t.filters,(function(e,i){return s("FilterCheckboxes",{key:"filter-"+i,attrs:{filter:e},model:{value:t.selectedFilters[e.name],callback:function(s){t.$set(t.selectedFilters,e.name,s)},expression:"selectedFilters[filter.name]"}})}))],2),s("main",{staticClass:"main"},[s("FlightList",{attrs:{flights:t.flightsFiltered,loading:t.loading}})],1)])])},u=[],h=(s("ac6a"),s("456d"),s("75fc")),g=(s("7f7f"),s("7514"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter"},[s("h3",{staticClass:"filter-title"},[t._v("\n    "+t._s(t.filter.title)+"\n  ")]),t.clearFiltersShow?s("div",{staticClass:"filter-clear tooltip-wrap",on:{click:t.dropFilters}},[s("div",{staticClass:"tooltip"},[t._v("\n      Сбросить выбор\n    ")])]):t._e(),s("div",{class:{"filter-variants":!0,"filter-variants--scroll":t.filter.variants.length>8}},[t.filter.selectAll?s("div",{staticClass:"filter-variant"},[s("label",{staticClass:"checkbox"},[s("input",{staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:t.selectAll},on:{change:function(e){return e.preventDefault(),e.stopPropagation(),t.selectAllHandler(e)}}}),s("div",{staticClass:"checkbox-input-fake"}),s("div",{staticClass:"checkbox-label"},[t._v("\n          Все\n        ")])])]):t._e(),t._l(t.filter.variants,(function(e,i){return s("div",{key:"filter-variant-"+i,staticClass:"filter-variant"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariants,expression:"selectedVariants"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(t.selectedVariants)?t._i(t.selectedVariants,e.value)>-1:t.selectedVariants},on:{change:function(s){var i=t.selectedVariants,a=s.target,n=!!a.checked;if(Array.isArray(i)){var r=e.value,c=t._i(i,r);a.checked?c<0&&(t.selectedVariants=i.concat([r])):c>-1&&(t.selectedVariants=i.slice(0,c).concat(i.slice(c+1)))}else t.selectedVariants=n}}}),s("div",{staticClass:"checkbox-input-fake"}),s("div",{staticClass:"checkbox-label"},[t._v("\n          "+t._s(e.text)+"\n        ")])])])}))],2)])}),b=[],p={props:{value:{type:Array,default:function(){return[]}},filter:{type:Object,default:function(){}}},data:function(){return{selectedVariants:this.value}},computed:{clearFiltersShow:function(){return this.selectedVariants.length>0},selectAll:function(){return 0===this.selectedVariants.length}},methods:{selectAllHandler:function(t){t.target.checked?this.selectedVariants=[]:t.target.checked=!0},dropFilters:function(){this.selectedVariants=[]}},watch:{value:function(t){this.selectedVariants=t},selectedVariants:function(t){this.$emit("input",t)}}},v=p,m=(s("3dc8"),s("2877")),j=Object(m["a"])(v,g,b,!1,null,"3aadfb1b",null),_=j.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flights"},[t.flights.length||t.loading?t._e():s("div",{staticClass:"flights-empty"},[t._v("\n    Билетов не найдено\n  ")]),t.loading?s("div",{staticClass:"flights-empty"},[t._v("\n    Загрузка\n  ")]):t._e(),s("transition-group",{attrs:{name:"flights-anim",tag:"div"}},t._l(t.flights,(function(t){return s("FlightItem",{key:t.id,attrs:{flight:t}})})),1)],1)},C=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flight"},[s("div",{staticClass:"flight-left"},[s("FlightItemInfo",{attrs:{itineraries:t.itineraries}})],1),s("div",{staticClass:"flight-right"},[s("FlightItemPrice",{attrs:{price:t.itineraries.price}})],1)])},x=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flight-info"},[s("div",{staticClass:"flight-carrier"},[s("div",{staticClass:"flight-carrier-img"},[s("img",{attrs:{src:t.getCarrierImg(t.itineraries.carrier),alt:t.itineraries.carrier_name}})]),s("div",{staticClass:"flight-carrier-name"},[t._v("\n      "+t._s(t.itineraries.carrier_name)+"\n    ")])]),s("div",{staticClass:"flight-time"},[s("div",{staticClass:"flight-date"},[s("div",{staticClass:"flight-date-day"},[t._v("\n        "+t._s(t._f("moment")(t.itineraries.dep_date,"D MMM dd"))+"\n      ")]),s("div",{staticClass:"flight-date-time"},[t._v("\n        "+t._s(t._f("moment")(t.itineraries.dep_date,"hh:mm"))+"\n      ")])]),s("div",{staticClass:"flight-segment"},[s("div",{staticClass:"flight-segment-line"},[s("div",{staticClass:"flight-segment-part flight-segment-part--start"},[s("div",{staticClass:"flight-segment-code"},[t._v("\n            "+t._s(t.itineraries.segments[0].origin_code)+"\n          ")])]),s("div",{staticClass:"flight-segment-part flight-segment-part--center flight-segment-time"},[t._v("\n          "+t._s(t.segmentTime)+"\n        ")]),s("div",{staticClass:"flight-segment-part flight-segment-part--end"},[s("div",{staticClass:"flight-segment-code"},[t._v("\n            "+t._s(t.itineraries.segments[t.itineraries.segments.length-1].dest_code)+"\n          ")])])]),0===t.itineraries.stops?s("div",{staticClass:"flight-segment-stops"},[t._v("\n        прямой рейс\n      ")]):t._e(),1===t.itineraries.stops?s("div",{staticClass:"flight-segment-stops"},[t._v("\n        через "+t._s(t.itineraries.segments[0].airport_dest)+", \n        "+t._s(t.calculateDiff(t.itineraries.segments[1].dep_time_iso,t.itineraries.segments[0].arr_time_iso))+"\n      ")]):t._e(),t.itineraries.stops>1?s("div",{staticClass:"flight-segment-stops"},[t._v("\n        "+t._s(t.itineraries.stops)+" пересадки\n      ")]):t._e()]),s("div",{staticClass:"flight-date"},[s("div",{staticClass:"flight-date-day"},[t._v("\n        "+t._s(t._f("moment")(t.itineraries.arr_date,"D MMM dd"))+"\n        "),t.additionalDay?s("span",{staticClass:"flight-date-add"},[t._v("\n           +"+t._s(t.additionalDay)+"\n        ")]):t._e()]),s("div",{staticClass:"flight-date-time"},[t._v("\n        "+t._s(t._f("moment")(t.itineraries.arr_date,"hh:mm"))+"\n      ")])])]),s("div",{staticClass:"flight-meta"},[s("a",{staticClass:"flight-link",attrs:{href:"#"}},[t._v("\n      Детали перелета\n    ")]),s("a",{staticClass:"flight-link",attrs:{href:"#"}},[t._v("\n      Условия тарифа\n    ")]),t.itineraries.refundable?s("span",{staticClass:"flight-refundable"},[t._v("\n      возвратный\n    ")]):t._e(),t.itineraries.refundable?t._e():s("span",{staticClass:"flight-refundable flight-refundable--false"},[t._v("\n      невозвратный\n    ")])])])},F=[],O={props:{itineraries:{type:Object,default:function(){}}},computed:{segmentTime:function(){return this.calculateDiff(this.itineraries.arr_date,this.itineraries.dep_date)},additionalDay:function(){return this.$moment(this.itineraries.arr_date).dayOfYear()-this.$moment(this.itineraries.dep_date).dayOfYear()}},methods:{calculateDiff:function(t,e){var s=this.$moment(e),i=this.$moment(t),a=i.diff(s,"hours"),n=i.diff(s,"hours")%24,r=i.diff(s,"days"),c=i.diff(s,"minutes")%60,l="";return r>0&&(l+="".concat(r," д ")),a>0&&(l+="".concat(n," ч ")),l+="".concat(c," м"),l},getCarrierImg:function(t){return"https://aviata.kz/static/airline-logos/80x80/".concat(t,".png")}},created:function(){}},z=O,P=(s("a631"),Object(m["a"])(z,w,F,!1,null,"7fe59eea",null)),V=P.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flight-price"},[s("div",{staticClass:"flight-amount"},[t._v("\n    "+t._s(t.price.amount)+"\n    "),s("span",{staticClass:"flight-amount-currency"},[t._v("\n      "+t._s(t.currency)+"\n    ")])]),s("button",{staticClass:"flight-price-btn"},[t._v("\n    Выбрать\n  ")]),s("div",{staticClass:"flight-price-notice"},[t._v("\n    Цена за всех пассажиров\n  ")]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flight-baggage"},[s("span",{staticClass:"flight-baggage-value"},[t._v("\n      Нет багажа\n    ")]),s("button",{staticClass:"flight-baggage-btn"},[t._v("\n      + Добавить багаж\n    ")])])}],A={props:{price:{type:Object,default:function(){}}},computed:{currency:function(){return this.price.currency,"₸"}}},D=A,E=(s("5bcf"),Object(m["a"])(D,S,$,!1,null,"181a3bdc",null)),M=E.exports,I={components:{FlightItemInfo:V,FlightItemPrice:M},props:{flight:{type:Object,default:function(){}}},data:function(){return{itineraries:this.flight.itineraries[0][0]||{},meta:{refundable:this.flight.refundable||!0}}}},T=I,B=(s("5d4f"),Object(m["a"])(T,k,x,!1,null,"0600887c",null)),N=B.exports,J={components:{FlightItem:N},props:{flights:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:function(){return!1}}}},R=J,q=(s("9cf9"),Object(m["a"])(R,y,C,!1,null,"530e6b87",null)),L=q.exports,G={name:"app",components:{FilterCheckboxes:_,FlightList:L},data:function(){return{loading:!0,filters:[{title:"Опции тарифа",name:"rate",type:"checkbox",selectAll:!1,variants:[{value:1,text:"Только прямые"},{value:2,text:"Только с багажом"},{value:3,text:"Только возвратные"}]},{title:"Авиакомпании",name:"airlines",selectAll:!0,type:"checkbox",variants:[]}],selectedFilters:{rate:[],airlines:[]},flights:[],flightsFiltered:[],showSidebar:!1}},methods:{setFiltersVariants:function(t,e){var s=this.filters.find((function(e){return e.name===t})),i=Object(h["a"])(e);s.variants=i},transformAirlines:function(t){var e=Object.keys(t),s=e.map((function(e){return{value:e,text:t[e]}}));return s},filterByRate:function(t){if(!this.selectedFilters.rate.length)return t;var e=[];return this.selectedFilters.rate.forEach((function(s){var i=e.length?e:t;1===s&&(e=i.filter((function(t){return 0===t.itineraries[0][0].stops}))),2===s&&(e=i.filter((function(t){return t.itineraries[0][0].segments.some((function(t){return t.baggage_options[0].value>0}))}))),3===s&&(e=i.filter((function(t){return t.refundable})))})),e},filterByCarrier:function(t){var e=this;return this.selectedFilters.airlines.length?t.filter((function(t){return e.selectedFilters.airlines.some((function(e){return e===t.itineraries[0][0].carrier}))})):t},filterFlights:function(){var t=this.filterByRate(this.flights);t=this.filterByCarrier(t),this.flightsFiltered=JSON.parse(JSON.stringify(t))},getResults:function(){var t=this;return this.loading=!0,this.$api.airlines.all().then((function(e){var s=e.data;t.setFiltersVariants("airlines",t.transformAirlines(s.airlines)),t.flights=s.flights,t.filterFlights(),t.loading=!1})).catch((function(t){return new Error(t)}))}},watch:{selectedFilters:{handler:function(){this.filterFlights()},deep:!0}},created:function(){this.getResults()}},H=G,U=(s("00f5"),Object(m["a"])(H,d,u,!1,null,"1ce00c8a",null)),Y=U.exports,K=(s("c1c3"),s("c1df"));s("957c"),i["a"].config.productionTip=!1,i["a"].use(s("2ead"),{moment:K}),new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5bcf":function(t,e,s){"use strict";var i=s("79e0"),a=s.n(i);a.a},"5d4f":function(t,e,s){"use strict";var i=s("9f9e"),a=s.n(i);a.a},"79e0":function(t,e,s){},"9cf9":function(t,e,s){"use strict";var i=s("a2a1"),a=s.n(i);a.a},"9f9e":function(t,e,s){},a2a1:function(t,e,s){},a631:function(t,e,s){"use strict";var i=s("3759"),a=s.n(i);a.a},c1c3:function(t,e,s){}});
//# sourceMappingURL=app.bae786f0.js.map