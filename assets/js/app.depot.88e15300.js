(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.depot"],{"0fa7":function(e,t,r){"use strict";var i=r("3b74"),n=r.n(i);n.a},"3b74":function(e,t,r){},"60fe":function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return c}));var i=r("5530"),n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",a={notSelected:["mdui-color-brown-100 mdui-ripple-black","mdui-color-grey-900"],selected:["mdui-color-grey-800","mdui-color-brown-100 mdui-ripple-black"]},o=Object(i["a"])(Object(i["a"])({},a),{},{6:["mdui-color-red-700","mdui-color-red-200 mdui-ripple-black"],5:["mdui-color-orange-900","mdui-color-orange-200 mdui-ripple-black"],4:["mdui-color-cyan-700","mdui-color-cyan-200 mdui-ripple-black"],3:["mdui-color-green-700","mdui-color-green-200 mdui-ripple-black"],2:["mdui-color-brown-700","mdui-color-brown-200 mdui-ripple-black"],1:["mdui-color-grey-700","mdui-color-grey-200 mdui-ripple-black"],text:{6:["mdui-text-color-red-700","mdui-text-color-red-200"],5:["mdui-text-color-orange-900","mdui-text-color-orange-200"],4:["mdui-text-color-cyan-700","mdui-text-color-cyan-200"],3:["mdui-text-color-green-700","mdui-text-color-green-200"],2:["mdui-text-color-brown-700","mdui-text-color-brown-200"],1:["mdui-text-color-grey-700","mdui-text-color-grey-200"]}}),u=Object(i["a"])(Object(i["a"])({},a),{},{5:["mdui-color-yellow-700","mdui-color-yellow-200 mdui-ripple-black"],4:["mdui-color-deep-purple-300","mdui-color-deep-purple-200 mdui-ripple-black"],3:["mdui-color-blue-600","mdui-color-blue-200 mdui-ripple-black"],2:["mdui-color-lime","mdui-color-lime-200 mdui-ripple-black"],1:["mdui-color-grey-700","mdui-color-grey-200 mdui-ripple-black"],SYNT:["mdui-color-orange-900","mdui-color-orange-300"],ALWAYS:["mdui-color-grey-900","mdui-color-grey-200"],ALMOST:["mdui-color-grey-700","mdui-color-grey-400"],USUAL:["mdui-color-grey-500","mdui-color-grey-600"],OFTEN:["mdui-color-grey-300","mdui-color-grey-800"],SOMETIMES:["mdui-color-red-900","mdui-color-red-200"]}),c=Object(i["a"])(Object(i["a"])({},a),{},{BUILDING:a.selected,MANUFACTURE:["mdui-color-amber-400","mdui-color-amber-300"],TRADING:["mdui-color-light-blue-700","mdui-color-light-blue-300"],POWER:["mdui-color-green-600","mdui-color-green-300"],CONTROL:["mdui-color-green-900","mdui-color-green-300"],DORMITORY:["mdui-color-cyan-300","mdui-color-cyan-200"],MEETING:["mdui-color-orange-900","mdui-color-orange-300"],WORKSHOP:["mdui-color-lime-400","mdui-color-lime-300"],TRAINING:["mdui-color-red-900","mdui-color-red-300"],HIRE:["mdui-color-grey-700","mdui-color-grey-300"]})},8679:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",{staticClass:"arkn-item mdui-m-r-1 no-sl no-pe",style:{width:e.widthCss,height:e.widthCss},attrs:{src:e.$root.materialImage(e.img),crossorigin:"anonymous"}})},n=[],a=(r("a9e3"),{name:"arkn-item",computed:{widthCss:function(){return"number"===typeof this.width?"".concat(this.width,"px"):this.width}},props:{img:String,width:{type:[Number,String],default:48}}}),o=a,u=(r("0fa7"),r("2877")),c=Object(u["a"])(o,i,n,!1,null,"48273ef1",null);t["a"]=c.exports},"8ba6":function(e,t,r){},a3d0:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"arkn-depot"}},[e.imgSrc?[r("div",{staticClass:"mdui-typo-body-2 mdui-m-b-1 no-sl"},[e._v(e._s(e.$t("depot.result.tip")))]),r("div",{staticClass:"result"},[r("div",{staticClass:"result-scrollable",style:{"overflow-x":e.drProgress?"hidden":""},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)},contextmenu:function(e){e.preventDefault()}}},[r("div",{staticClass:"result-wrapper"},[r("div",{staticClass:"result-container",style:{backgroundImage:"url("+(e.imgSrc||e.PNG1P)+")",paddingBottom:100*e.imgRatio+"%"}},[e._l(e.drData,(function(t,i){var n=t.posPct,a=t.sim,o=t.num;return[a&&o?r("div",{key:i,staticClass:"result-square pointer",class:{disabled:!e.drSelect[i]},style:e.num2pct(n),on:{click:function(t){return t.target!==t.currentTarget?null:e.$set(e.drSelect,i,!e.drSelect[i])},contextmenu:function(t){return t.preventDefault(),e.editResult(i)}}},[r("div",{staticClass:"result-sim mdui-valign",class:{"mdui-ripple mdui-ripple-white":e.drSelect[i]},on:{click:function(t){return e.editResult(i)}}},[r("arkn-item",{staticClass:"result-sim-img",staticStyle:{height:"100%"},attrs:{t:e.materialTable[a.name].rare,img:a.name,width:""}}),r("div",{staticClass:"result-sim-num no-pe no-sl"},[e._v(e._s(o.value))])],1),o.warn&&!o.edit?r("div",{staticClass:"result-sim-warn no-sl no-pe"},[e._v("⚠️")]):e._e()]):e._e()]}))],2)]),r("div",{staticClass:"debug-checkbox-wrapper"},[r("mdui-checkbox",{staticClass:"debug-checkbox",model:{value:e.debug,callback:function(t){e.debug=t},expression:"debug"}},[e._v("Debug")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.drProgress,expression:"drProgress"}],staticClass:"result-progress"},[r("mdui-spinner",{staticClass:"mdui-m-r-1",attrs:{colorful:!0}}),r("div",{staticClass:"mdui-typo-body-1 mdui-text-color-black-text"},[e._v(e._s(e.drProgress))])],1)])]),e.drData.length?r("div",{staticClass:"mdui-row mdui-m-t-2"},[r("div",{staticClass:"mdui-col-xs-6"},[r("label",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-purple","mdui-color-purple-a100 mdui-ripple-black"],expression:"['mdui-color-purple', 'mdui-color-purple-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",attrs:{for:"img-select"},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)}}},[e._v(e._s(e.$t("depot.result.selectImage")))])]),r("div",{staticClass:"mdui-col-xs-6"},[r("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:e.$root.color.pinkBtn,expression:"$root.color.pinkBtn"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",on:{click:e.importItems}},[e._v(e._s(e.$t("common.import")))])])]):e._e()]:r("label",{staticClass:"image-select pointer mdui-valign mdui-text-center mdui-p-a-4",attrs:{for:"img-select"},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)}}},[r("div",{staticClass:"mdui-typo-display-1-opacity mdui-hidden-xs",domProps:{innerHTML:e._s(e.$t("depot.input.title"))}}),r("div",{staticClass:"mdui-typo-headline mdui-hidden-sm-up",staticStyle:{opacity:"0.54"},domProps:{innerHTML:e._s(e.$t("depot.input.title"))}}),r("div",{staticClass:"mdui-typo-body-2 mdui-m-t-2"},[e._v(e._s(e.$t("depot.input.notice")))])]),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",id:"img-select",accept:"image/jpeg,image/png"},on:{change:function(t){return e.useImg(e.$refs.image.files[0])}}}),e.debug?r("div",{staticClass:"mdui-m-t-4 no-sl",attrs:{id:"debug"}},[e._l(e.drData,(function(t,i){var n=t.pos,a=n.x,o=n.y,u=t.sim,c=t.num;return[c?r("div",{key:i,staticClass:"debug-item mdui-m-b-2"},[r("div",{staticClass:"debug-img",style:{backgroundImage:"url("+(e.imgSrc||e.PNG1P)+")",backgroundPosition:"-"+(.6*a+1)+"px -"+(.6*o+2)+"px"}}),r("img",{staticClass:"debug-num-img no-pe mdui-m-r-1",attrs:{src:c.img}}),r("pre",{staticClass:"mdui-m-y-0"},[e._v("item: "+e._s(u.name)+"\nsimi: "+e._s(e.$_.round(100*(1-u.diff),2))+"%\ntext: "+e._s(c.text))])]):e._e()]}))],2):e._e()],2)},n=[],a=(r("99af"),r("4de4"),r("caad"),r("d81d"),r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("2ca0"),r("498a"),r("ddb0"),r("2b3d"),r("b85c")),o=r("5530"),u=(r("96cf"),r("1da1")),c=r("60bb"),s=r.n(c),l=r("b9af"),d=r("60fe"),m=r("8679"),p=r("f71e"),g=r("de76"),f=r("3d15"),b=r("d495"),v=r.n(b),h=new v.a,y=.16,w={name:"arkn-depot",components:{ArknItem:m["a"]},data:function(){return{PNG1P:d["c"],materialTable:g["b"],imgSrc:null,imgRatio:0,drData:[],drSelect:[],drProgress:"",debug:!1}},methods:{num2pct:function(e){return s.a.mapValues(e,(function(e){return"".concat(s.a.round(100*e,3),"%")}))},updateProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.drProgress=e},useImg:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e&&["image/jpeg","image/png"].includes(e.type)){r.next=2;break}return r.abrupt("return");case 2:return t.updateProgress("Starting"),t.drData=[],t.drSelect=[],t.imgRatio=0,t.imgSrc=window.URL.createObjectURL(e),t.updateRatio(t.imgSrc),r.next=10,h.recognize(t.imgSrc,Object(f["proxy"])(t.updateProgress));case 10:i=r.sent,console.log("Recognition",i),t.drData=s.a.cloneDeep(i),t.drSelect=i.map((function(e){var t=e.sim;return(null===t||void 0===t?void 0:t.diff)<=y})),t.updateProgress();case 15:case"end":return r.stop()}}),r)})))()},updateRatio:function(e){var t=this,r=new Image;r.src=e,r.onload=function(){t.imgRatio=r.height/r.width}},editResult:function(e){var t=this;this.$prompt("材料数量","修改结果",(function(r){var i=r.trim();/^[0-9]+$/.test(i)?(t.drData[e].num.value=parseInt(i),t.drData[e].num.edit=!0):t.editResult(e)}),(function(){}),{history:!1,confirmOnEnter:!0,cancelText:this.$t("common.cancel"),confirmText:this.$t("common.edit"),defaultValue:this.drData[e].num.value})},importItems:function(){if(this.$root.importItemsListening)this.$root.$emit("importItems",this.itemsWillBeImported);else{var e="depot.imports",t=Object(o["a"])(Object(o["a"])({},Object(l["a"])(localStorage.getItem(e))),this.itemsWillBeImported);localStorage.setItem(e,JSON.stringify(t))}this.$snackbar(this.$t("depot.result.imported"))},detectPasteAndUseImg:function(e){var t=this;if(this.$route.path.startsWith("/depot")&&p["a"](e))return p["b"]().catch((function(e){console.warn(e),"DataError"===e.name&&t.$snackbar({message:t.$t("hr.ocr.pasteDataError"),timeout:6e3})})).then(this.useImg)},readClipboardImg:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,i,n,o,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$requestClipboardPermission("clipboard-read");case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,navigator.clipboard.read();case 6:r=t.sent,i=Object(a["a"])(r),t.prev=8,i.s();case 10:if((n=i.n()).done){t.next=20;break}if(o=n.value,u=o.types.filter((function(e){return e.startsWith("image/")})),!(u.length>0)){t.next=18;break}return t.next=16,o.getType(u[0]);case 16:return c=t.sent,t.abrupt("return",new File([c],"depot-".concat(Date.now(),".").concat(s.a.last(u[0].split("/"))),{type:u[0]}));case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](8),i.e(t.t0);case 25:return t.prev=25,i.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[8,22,25,28]])})))()}},computed:{itemsWillBeImported:function(){var e=this;return s.a.fromPairs(this.drData.filter((function(t,r){var i=t.sim,n=t.num;return i&&n&&e.drSelect[r]})).map((function(e){var t=e.sim.name,r=e.num.value;return[t,r]})))}},created:function(){this.$$(window).on("keydown",this.detectPasteAndUseImg)},beforeDestroy:function(){this.$$(window).off("keydown",this.detectPasteAndUseImg)}},x=w,k=(r("db2a"),r("2877")),A=Object(k["a"])(x,i,n,!1,null,null,null);t["default"]=A.exports},cff4:function(e,t,r){e.exports=function(){return new Worker(r.p+"assets/js/dr.b7bb9abcf2e245c4a295.worker.js")}},d495:function(e,t,r){var i,n=r("3d15").wrap,a=r("cff4");e.exports=function e(){return this instanceof e?n(a()):i||(i=n(a()))}},db2a:function(e,t,r){"use strict";var i=r("8ba6"),n=r.n(i);n.a},de76:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));r("d81d"),r("b0c0"),r("07ac");var i=r("5530"),n=r("60bb"),a=r.n(n),o=r("9d72"),u=a.a.mapValues(o,(function(e,t){return Object(i["a"])({name:t},e)})),c=Object.values(u),s=a.a.groupBy(c,(function(e){var t=e.rare;return t})),l=a.a.sortBy(a.a.clone(c),"sortId").map((function(e){var t=e.name;return t}));t["a"]={materials:s,materialTable:u,materialList:c,materialOrder:l}},f71e:function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l}));r("99af"),r("4de4"),r("ac1f"),r("1276"),r("2ca0");var i=r("b85c"),n=(r("96cf"),r("1da1")),a=r("60bb"),o=r.n(a),u=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator&&"permissions"in navigator&&"clipboard"in navigator){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,navigator.permissions.query({name:t});case 4:if(r=e.sent.state,"granted"===r||"prompt"===r){e.next=7;break}return e.abrupt("return",!1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u("clipboard-write");case 2:if(!e.sent){e.next=5;break}return navigator.clipboard.writeText(t),e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){var t,r,i=e.ctrlKey,n=e.metaKey,a=e.keyCode;return 86===a&&!!(i||(null===(t=navigator)||void 0===t||null===(r=t.platform)||void 0===r?void 0:r.startsWith("Mac"))&&n)},l=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u("clipboard-read");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,navigator.clipboard.read();case 6:t=e.sent,r=Object(i["a"])(t),e.prev=8,r.s();case 10:if((n=r.n()).done){e.next=20;break}if(a=n.value,c=a.types.filter((function(e){return e.startsWith("image/")})),!(c.length>0)){e.next=18;break}return e.next=16,a.getType(c[0]);case 16:return s=e.sent,e.abrupt("return",new File([s],"clipboard-".concat(Date.now(),".").concat(o.a.last(c[0].split("/"))),{type:c[0]}));case 18:e.next=10;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](8),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[8,22,25,28]])})));return function(){return e.apply(this,arguments)}}()}}]);