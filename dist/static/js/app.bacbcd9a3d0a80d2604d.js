webpackJsonp([0],{"/6gk":function(a,t){},"7rDd":function(a,t){},"9wWO":function(a,t){},NHnr:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("7+uW"),i=(s("/6gk"),{render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"navigation"},[t("nav",{staticClass:"navbar navbar-default"},[t("i",{staticClass:"fas fa-home trello_button",on:{mousedown:this.goToHome}}),this._v(" "),t("span",{staticClass:"trello_button color-white",on:{mousedown:this.goToBoardsList}},[t("i",{staticClass:"fas fa-calendar-day"}),this._v("\n           Tablice\n      ")]),this._v(" "),t("form",{staticClass:"form-inline"},[t("input",{staticClass:"form-control mr-sm-2 search_input",attrs:{type:"search",placeholder:"","aria-label":{searchLabel:this.searchLabel}}}),this._v(" "),t("i",{staticClass:"fas fa-search"})])])])},staticRenderFns:[]});var n={name:"App",components:{Navigation:s("VU/8")({name:"Navigation",data:function(){return{msg:"Upsi kurwa",searchLabel:"Search"}}},i,!1,function(a){s("9wWO")},"data-v-54b193bd",null).exports}},o={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("Navigation"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(n,o,!1,function(a){s("qE1X")},null,null).exports,r=s("/ocq"),c={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeInformation"},[this.homeInfo?t("div",{staticClass:"container-fluid bg-darkBlue"},[this._m(0),this._v(" "),t("i",{staticClass:"fas fa-times",on:{mousedown:this.hideInfoSection}})]):this._e()])},staticRenderFns:[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("div",{staticClass:"nav-info"},[s("h5",[a._v("Wykup swoją wersję Trello Gold!")]),a._v(" "),s("p",[a._v("Dziękujemy za podzielenie się Trello! Ciesz się możliwością korzystania z Trello Gold przez 1 miesiąc.")])])]),a._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"nav-info"},[s("ul",[s("li",[a._v("Ooo tak… Te osoby dołączyły do Trello dzięki Twojej rekomendacji: Kuba Buba")]),a._v(" "),s("li",[a._v("Przejdź do strony płatności Trello Gold, aby wykorzystać swoje kredyty")]),a._v(" "),s("li",[a._v("Dowiedz się, jak korzystać z możliwości Trello Gold tutaj")])])])])])])}]};var d=s("VU/8")({name:"HomeInformation",data:function(){return{homeInfo:!1}},methods:{hideInfoSection:function(){this.homeInfo=!1}}},c,!1,function(a){s("twdy")},"data-v-d095ba22",null).exports,m={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeSidebar"},[t("ul",{staticClass:"menu mt-4"},[this._m(0),this._v(" "),this._m(1),this._v(" "),t("li",{on:{mousedown:this.goToHome}},[this._m(2)])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("li",{staticClass:" selected"},[t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fas fa-calendar-day"}),this._v("\n               Tablice\n          ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("li",[t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fab fa-angellist"}),this._v("\n               Szablony\n          ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fab fa-artstation"}),this._v("\n               Strona główna\n          ")])}]};var v={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"HomeBoards"},[s("div",{staticClass:"row mt-4 pl-4"},[s("span",{staticClass:"color-dark font-bold"},[s("i",{staticClass:"far fa-clock"}),a._v("\n           Ostatnio przeglądane\n          "),s("div",{staticClass:"container mt-4"},[s("div",{staticClass:"row"},a._l(a.boards,function(t){return!0===t.lastSeen?s("div",{staticClass:"col-3"},[s("div",{staticClass:"card bg-dark text-white",attrs:{"param-id":t.name},on:{mousedown:a.goToBoard}},[s("img",{staticClass:"card-img",attrs:{src:t.image,alt:"title"}}),a._v(" "),s("div",{staticClass:"card-img-overlay"},[s("h6",{staticClass:"card-title"},[a._v(a._s(t.name))])])])]):a._e()}),0)])])]),a._v(" "),s("div",{staticClass:"row mt-4 pl-4"},[s("span",{staticClass:"color-dark font-bold"},[s("i",{staticClass:"far fa-clock"}),a._v("\n           Tablice prywatne\n          "),s("div",{staticClass:"container mt-4"},[s("div",{staticClass:"row"},[a._l(a.boards,function(t){return s("div",{staticClass:"col-3"},[s("div",{staticClass:"card bg-dark text-white",attrs:{"param-id":t.name},on:{mousedown:a.goToBoard}},[s("img",{staticClass:"card-img",attrs:{src:t.image,alt:"title"}}),a._v(" "),s("div",{staticClass:"card-img-overlay"},[s("h6",{staticClass:"card-title"},[a._v(a._s(t.name))])])])])}),a._v(" "),s("div",{staticClass:"col-3"},[s("div",{staticClass:"card bg-nieChceMiSieIJestPoPolnocyAJaPoSilceXd",on:{mousedown:a.createBoard}},[a._m(0)])])],2)])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"card-body"},[t("p",{staticClass:"card-text"},[this._v("Tworzenie tablic już hula :o")])])}]};var u={name:"HomeHeader",components:{HomeSidebar:s("VU/8")({name:"HomeSidebar",data:function(){return{}}},m,!1,function(a){s("7rDd")},"data-v-d3934880",null).exports,HomeBoards:s("VU/8")({name:"HomeBoards",data:function(){return{currentBoard:{name:""},boards:[{name:"Tablica 1",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 2",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 3",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 4",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 5",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 6",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 7",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 8",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 9",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0}]}}},v,!1,function(a){s("QPcA")},"data-v-e0eefc8e",null).exports},data:function(){return{}}},f={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeHeader"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-3"},[t("HomeSidebar")],1),this._v(" "),t("div",{staticClass:"col-9"},[t("HomeBoards")],1)])])])},staticRenderFns:[]};var h={name:"Home",components:{HomeInformation:d,HomeHeader:s("VU/8")(u,f,!1,function(a){s("gfX4")},"data-v-5470d09c",null).exports},data:function(){return{showModal:!1,request:{},showMenu:!0}}},p={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"home"},[t("HomeInformation"),this._v(" "),t("HomeHeader")],1)},staticRenderFns:[]};var _=s("VU/8")(h,p,!1,function(a){s("bt+m")},"data-v-65ede88f",null).exports;e.a.use(r.a);var g=new r.a({routes:[{path:"/",name:"Home",component:_}]});e.a.config.productionTip=!1,e.a.component("Navigation"),new e.a({el:"#app",router:g,components:{App:l},template:"<App/>"})},QPcA:function(a,t){},"bt+m":function(a,t){},gfX4:function(a,t){},qE1X:function(a,t){},twdy:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.bacbcd9a3d0a80d2604d.js.map