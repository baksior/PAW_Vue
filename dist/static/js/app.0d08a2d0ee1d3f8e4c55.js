webpackJsonp([0],{"/6gk":function(a,t){},"22jc":function(a,t){},JqEY:function(a,t){},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("7+uW"),o=(e("/6gk"),{render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"navigation"},[t("nav",{staticClass:"navbar navbar-default"},[t("i",{staticClass:"fas fa-home trello_button",on:{mousedown:this.goToHome}}),this._v(" "),t("span",{staticClass:"trello_button color-white",on:{mousedown:this.goToBoardsList}},[t("i",{staticClass:"fas fa-calendar-day"}),this._v("\n           Tablice\n      ")]),this._v(" "),t("form",{staticClass:"form-inline"},[t("input",{staticClass:"form-control mr-sm-2 search_input",attrs:{type:"search",placeholder:"","aria-label":{searchLabel:this.searchLabel}}}),this._v(" "),t("i",{staticClass:"fas fa-search"})])])])},staticRenderFns:[]});var i=e("VU/8")({name:"Navigation",data:function(){return{msg:"Upsi kurwa",searchLabel:"Search"}}},o,!1,function(a){e("22jc")},"data-v-af91aad4",null).exports,n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.showModalAttr?e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"HomeModal"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[a._t("header",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nameOfBoard,expression:"nameOfBoard"}],attrs:{type:"text",name:"board_name",placeholder:"Dodaj nazwę tablicy"},domProps:{value:a.nameOfBoard},on:{input:function(t){t.target.composing||(a.nameOfBoard=t.target.value)}}})])],2),a._v(" "),e("div",{staticClass:"modal-footer"},[a._t("footer",[e("button",{staticClass:"modal-default-button",on:{click:a.addBoard}},[a._v("\n                Utwórz tablicę\n                ")]),a._v(" "),e("button",{staticClass:"modal-default-button",on:{click:a.close}},[a._v("\n                Zamknij\n                ")])])],2)])])])]):a._e()},staticRenderFns:[]};var l=e("VU/8")({name:"HomeModal",data:function(){return{nameOfBoard:"",showModalAttr:!1}},methods:{addBoard:function(){this.closeModal(),this.$emit("addBoard",this.nameOfBoard),this.nameOfBoard=""},close:function(){this.closeModal(),this.nameOfBoard=""},showModal:function(){this.showModalAttr=!0},closeModal:function(){this.showModalAttr=!1}}},n,!1,function(a){e("d7o4")},"data-v-76d5c61e",null).exports,r={name:"App",components:{Navigation:i,HomeModal:l}},c={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("Navigation"),this._v(" "),t("router-view"),this._v(" "),t("HomeModal")],1)},staticRenderFns:[]};var d=e("VU/8")(r,c,!1,function(a){e("kOAe")},null,null).exports,m=e("/ocq"),u={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeInformation"},[this.homeInfo?t("div",{staticClass:"container-fluid bg-darkBlue"},[this._m(0),this._v(" "),t("i",{staticClass:"fas fa-times",on:{mousedown:this.hideInfoSection}})]):this._e()])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav-info"},[e("h5",[a._v("Wykup swoją wersję Trello Gold!")]),a._v(" "),e("p",[a._v("Dziękujemy za podzielenie się Trello! Ciesz się możliwością korzystania z Trello Gold przez 1 miesiąc.")])])]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"nav-info"},[e("ul",[e("li",[a._v("Ooo tak… Te osoby dołączyły do Trello dzięki Twojej rekomendacji: Kuba Buba")]),a._v(" "),e("li",[a._v("Przejdź do strony płatności Trello Gold, aby wykorzystać swoje kredyty")]),a._v(" "),e("li",[a._v("Dowiedz się, jak korzystać z możliwości Trello Gold tutaj")])])])])])])}]};var f=e("VU/8")({name:"HomeInformation",data:function(){return{homeInfo:!1}},methods:{hideInfoSection:function(){this.homeInfo=!1}}},u,!1,function(a){e("PCSj")},"data-v-6a16d062",null).exports,h={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeSidebar"},[t("ul",{staticClass:"menu mt-4"},[this._m(0),this._v(" "),this._m(1),this._v(" "),t("li",{on:{mousedown:this.goToHome}},[this._m(2)])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("li",{staticClass:" selected"},[t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fas fa-calendar-day"}),this._v("\n               Tablice\n          ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("li",[t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fab fa-angellist"}),this._v("\n               Szablony\n          ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("span",{staticClass:"color-dark font-bold"},[t("i",{staticClass:"fab fa-artstation"}),this._v("\n               Strona główna\n          ")])}]};var v={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"HomeBoards"},[e("div",{staticClass:"row mt-4 pl-4"},[e("span",{staticClass:"color-dark font-bold"},[e("i",{staticClass:"far fa-clock"}),a._v("\n           Ostatnio przeglądane\n          "),e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"row"},a._l(a.boards,function(t){return!0===t.lastSeen?e("div",{staticClass:"col-3"},[e("div",{staticClass:"card bg-dark text-white",attrs:{"param-id":t.name},on:{mousedown:a.goToBoard}},[e("img",{staticClass:"card-img",attrs:{src:t.image,alt:"title"}}),a._v(" "),e("div",{staticClass:"card-img-overlay"},[e("h6",{staticClass:"card-title"},[a._v(a._s(t.name))])])])]):a._e()}),0)])])]),a._v(" "),e("div",{staticClass:"row mt-4 pl-4"},[e("span",{staticClass:"color-dark font-bold"},[e("i",{staticClass:"far fa-clock"}),a._v("\n           Tablice prywatne\n          "),e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"row"},[a._l(a.boards,function(t){return e("div",{staticClass:"col-3"},[e("div",{staticClass:"card bg-dark text-white",attrs:{"param-id":t.name},on:{click:a.goToBoard}},[e("img",{staticClass:"card-img",attrs:{src:t.image,alt:"title"}}),a._v(" "),e("div",{staticClass:"card-img-overlay"},[e("h6",{staticClass:"card-title"},[a._v(a._s(t.name))])])])])}),a._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"card bg-nieChceMiSieIJestPoPolnocyAJaPoSilceXd",on:{click:a.createBoard}},[a._m(0)])])],2)])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"card-body"},[t("p",{staticClass:"card-text"},[this._v("Tworzenie tablic już hula :o")])])}]};var p={name:"HomeHeader",components:{HomeSidebar:e("VU/8")({name:"HomeSidebar",data:function(){return{}}},h,!1,function(a){e("JqEY")},"data-v-4df0fa40",null).exports,HomeBoards:e("VU/8")({name:"HomeBoards",data:function(){return{currentBoard:{name:""},boards:[{name:"Tablica 1",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 2",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 3",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 4",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 5",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 6",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 7",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0},{name:"Tablica 8",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg"},{name:"Tablica 9",image:"http://dawiq.lh.pl/Trellol//images/lolImg.jpg",lastSeen:!0}]}},methods:{addBoard:function(a){},createBoard:function(){this.$emit("showModal")}}},v,!1,function(a){e("nVM6")},"data-v-9c9cea3c",null).exports},data:function(){return{}},methods:{addBoard:function(a){this.$refs.HomeBoards.addBoard(a)},showModal:function(){this.$emit("showModal")}}},_={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"HomeHeader"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-3"},[t("HomeSidebar")],1),this._v(" "),t("div",{staticClass:"col-9"},[t("HomeBoards",{ref:"HomeBoards",on:{showModal:this.showModal}})],1)])])])},staticRenderFns:[]};var g={name:"Home",components:{HomeInformation:f,HomeHeader:e("VU/8")(p,_,!1,function(a){e("S8Zx")},"data-v-4f2b9f60",null).exports,HomeModal:l},data:function(){return{}},methods:{addBoard:function(a){console.log("kirwa"),this.$refs.HomeHeader.addBoard(a)},showModal:function(){this.$refs.modal.showModal()},closeModal:function(){this.$refs.modal.closeModal()}}},C={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"home"},[t("HomeInformation"),this._v(" "),t("HomeHeader",{ref:"HomeHeader",on:{showModal:this.showModal}}),this._v(" "),t("HomeModal",{ref:"modal",on:{addBoard:this.addBoard}})],1)},staticRenderFns:[]};var w=e("VU/8")(g,C,!1,function(a){e("uum9")},"data-v-7eb67778",null).exports;s.a.use(m.a);var b=new m.a({routes:[{path:"/",name:"Home",component:w}]});e.d(t,"bus",function(){return H}),s.a.config.productionTip=!1;var H=new s.a({el:"#app",router:b,components:{App:d},template:"<App/>"})},PCSj:function(a,t){},S8Zx:function(a,t){},d7o4:function(a,t){},kOAe:function(a,t){},nVM6:function(a,t){},uum9:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.0d08a2d0ee1d3f8e4c55.js.map