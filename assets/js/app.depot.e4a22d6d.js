(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.depot"],{"17ee":function(e,t,r){var n,a=r("2fa1").wrap,i=r("2075");e.exports=function e(){return this instanceof e?a(i()):n||(n=a(i()))}},2075:function(e,t){e.exports=function(){return new Worker("./assets/js/dr.855f0092a5b1bcef8545.worker.js")}},"2f6b":function(e,t,r){"use strict";r("5fd6")},"5fd6":function(e,t,r){},8679:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",{staticClass:"arkn-item mdui-m-r-1 no-sl no-pe",style:{width:e.widthCss,height:e.widthCss},attrs:{src:e.$root.materialImage(e.img),crossorigin:"anonymous"},on:{error:e.handleImgErr}})},a=[],i=(r("a9e3"),{name:"arkn-item",props:{img:String,width:{type:[Number,String],default:48}},computed:{widthCss:function(){return"number"===typeof this.width?"".concat(this.width,"px"):this.width}},methods:{handleImgErr:function(e){e.target.src=this.$root.avatar("no_image"),e.target.style.backgroundColor="#bdbdbd",e.target.style.borderRadius="50%"}}}),s=i,u=(r("2f6b"),r("0c7c")),o=Object(u["a"])(s,n,a,!1,null,"d0f648b6",null);t["a"]=o.exports},a3d0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"arkn-depot"}},[e.drImg.src?[r("div",{staticClass:"mdui-typo-body-2 mdui-m-b-1 no-sl"},[e._v(e._s(e.$t("depot.result.tip")))]),r("div",{staticClass:"result"},[r("div",{ref:"resultScrollable",staticClass:"result-scrollable",style:{"overflow-x":e.drProgress?"hidden":""},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)},contextmenu:function(e){e.preventDefault()},wheel:e.onScrollResult}},[r("div",{staticClass:"result-wrapper",style:e.resultWrapperStyle},[r("div",{staticClass:"result-container",style:{backgroundImage:"url("+(e.drImg.src||e.PNG1P)+")",paddingBottom:100/e.drImgRatio+"%"}},[e._l(e.drData,(function(t,n){var a=t.view,i=t.sim,s=t.num;return[i&&s&&i.diff<=e.MAX_SHOW_DIFF?r("div",{key:n,staticClass:"result-square pointer",class:{disabled:!e.drSelect[n]},style:e.viewNumToPct(a),on:{click:function(t){return t.target!==t.currentTarget?null:e.$set(e.drSelect,n,!e.drSelect[n])},contextmenu:function(t){return t.preventDefault(),e.editResult(n)}}},[r("div",{staticClass:"result-sim mdui-valign",class:{"mdui-ripple mdui-ripple-white":e.drSelect[n]},on:{click:function(t){return e.editResult(n)}}},[r("arkn-item",{staticClass:"result-sim-img",staticStyle:{height:"100%"},attrs:{t:e.materialTable[i.name].rare,img:i.name,width:""}}),r("div",{staticClass:"result-sim-num no-pe no-sl"},[e._v(e._s(s.value))])],1),s.warn&&!s.edit?r("div",{staticClass:"result-sim-warn no-sl no-pe"},[e._v("⚠️")]):e._e()]):e._e()]}))],2)]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$_.size(e.drData),expression:"$_.size(drData)"}],staticClass:"debug-checkbox-wrapper"},[r("mdui-checkbox",{staticClass:"debug-checkbox",model:{value:e.debug,callback:function(t){e.debug=t},expression:"debug"}},[e._v("Debug")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.drProgress,expression:"drProgress"}],staticClass:"result-progress"},[r("mdui-spinner",{staticClass:"mdui-m-r-1",attrs:{colorful:!0}}),r("div",{staticClass:"mdui-typo-body-1 mdui-text-color-black-text"},[e._v(e._s(e.drProgress))])],1)])]),e.drData?r("div",{staticClass:"mdui-row mdui-m-t-2"},[r("div",{staticClass:"mdui-col-xs-6"},[r("label",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-purple","mdui-color-purple-a100 mdui-ripple-black"],expression:"['mdui-color-purple', 'mdui-color-purple-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",attrs:{for:"img-select"},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)}}},[e._v(e._s(e.$t("depot.result.selectImage")))])]),r("div",{staticClass:"mdui-col-xs-6"},[r("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:e.$root.color.pinkBtn,expression:"$root.color.pinkBtn"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",attrs:{disabled:!e.drData.length},on:{click:e.importItems}},[e._v(e._s(e.$t("common.import")))])])]):e._e()]:r("label",{staticClass:"image-select pointer mdui-valign mdui-text-center mdui-p-a-4 no-sl",attrs:{for:"img-select"},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),function(t){return e.useImg(t.dataTransfer.files[0])}(t)}}},[r("div",{staticClass:"mdui-typo-display-1-opacity mdui-hidden-xs",domProps:{innerHTML:e._s(e.$t("depot.input.title"))}}),r("div",{staticClass:"mdui-typo-headline mdui-hidden-sm-up",staticStyle:{opacity:"0.54"},domProps:{innerHTML:e._s(e.$t("depot.input.title"))}})]),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",id:"img-select",accept:"image/jpeg,image/png"},on:{change:function(t){return e.useImg(e.$refs.image.files[0])}}}),e.debug&&e.drData?r("div",{staticClass:"mdui-m-t-4 no-sl",attrs:{id:"debug"}},[e._l(e.drData,(function(t,n){var a=t.sim,i=t.num,s=t.debug,u=s.x,o=s.y,c=s.scale;return[i?r("div",{key:n,staticClass:"debug-item mdui-m-b-2"},[r("div",{staticClass:"debug-img",style:{backgroundImage:"url("+(e.drImg.src||e.PNG1P)+")",backgroundPosition:"-"+u*c+"px -"+o*c+"px",backgroundSize:"auto "+e.drImg.h*c+"px"}}),r("img",{staticClass:"debug-num-img no-pe mdui-m-r-1",attrs:{src:i.img}}),r("pre",{staticClass:"mdui-m-y-0"},[e._v("item: "+e._s(a.name)+"\nsimi: "+e._s(e.$_.round(100*(1-a.diff),2))+"%\ntext: "+e._s(i.text))])]):e._e()]}))],2):e._e(),e._l(e.drTest,(function(e,t){return r("img",{key:t,staticClass:"test-img mdui-m-t-2",attrs:{src:e}})}))],2)},a=[],i=(r("99af"),r("4de4"),r("caad"),r("d81d"),r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("2ca0"),r("498a"),r("ddb0"),r("2b3d"),r("54f8")),s=r("f3f3"),u=(r("96cf"),r("c964")),o=r("8679"),c=r("60bb"),d=r.n(c),l=r("b9af"),m=r("60fe"),p=r("f71e"),f=.2,g={DEFAULT:.15,30042:.12,30043:.1,30044:.1,30062:.12,30125:.2,31023:.16,31024:.18},b=function(e){if(!e)return!1;var t=e.diff,r=e.name,n=r in g?g[r]:g.DEFAULT;return t<n},v=r("de76"),h=r("2fa1"),w=r("17ee"),x=r.n(w),y=new x.a,k={name:"arkn-depot",components:{ArknItem:o["a"]},data:function(){return{MAX_SHOW_DIFF:f,PNG1P:m["c"],materialTable:v["b"],drImg:{src:null,w:0,h:0},drData:null,drSelect:[],drProgress:"",drTest:[],debug:!1}},computed:{itemsWillBeImported:function(){var e=this;return d.a.fromPairs(this.drData.filter((function(t,r){var n=t.sim,a=t.num;return n&&a&&e.drSelect[r]})).map((function(e){var t=e.sim.name,r=e.num.value;return[t,r]})))},drImgRatio:function(){return this.drImg.w/this.drImg.h||0},resultWrapperStyle:function(){var e=this.drImgRatio;return!e||e>4/3?{minWidth:"1000px"}:window.innerWidth>window.innerHeight?{width:"".concat(70*e,"vh"),margin:"auto"}:{}}},methods:{isTrustSim:b,viewNumToPct:function(e){return d.a.mapValues(e,(function(e){return"".concat(d.a.round(100*e,3),"%")}))},updateProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.drProgress=e},useImg:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e&&["image/jpeg","image/png"].includes(e.type)){r.next=2;break}return r.abrupt("return");case 2:return t.updateProgress("Starting"),t.drData=null,t.drSelect=[],t.drTest=[],t.drImg={src:window.URL.createObjectURL(e),w:0,h:0},t.updateImgInfo(),t.$gtag.event("depot_recognition",{event_category:"depot",event_label:"recognition"}),r.next=11,y.recognize(t.drImg.src,Object(h["proxy"])(t.updateProgress));case 11:n=r.sent,a=n.data,i=n.test,console.log("Recognition",a),t.drData=d.a.cloneDeep(a),t.drSelect=a.map((function(e){var t=e.sim;return b(t)})),t.drTest=i,setTimeout(t.updateProgress);case 19:case"end":return r.stop()}}),r)})))()},updateImgInfo:function(){var e=this,t=new Image;t.src=this.drImg.src,t.onload=function(){e.drImg.w=t.width,e.drImg.h=t.height}},editResult:function(e){var t=this;this.$prompt("材料数量","修改结果",(function(r){var n=r.trim();/^[0-9]+$/.test(n)?(t.drData[e].num.value=parseInt(n),t.drData[e].num.edit=!0):t.editResult(e)}),(function(){}),{history:!1,confirmOnEnter:!0,cancelText:this.$t("common.cancel"),confirmText:this.$t("common.edit"),defaultValue:this.drData[e].num.value})},importItems:function(){if(this.$root.importItemsListening)this.$root.$emit("import-items",this.itemsWillBeImported);else{var e="depot.imports",t=Object(s["a"])(Object(s["a"])({},Object(l["a"])(localStorage.getItem(e))),this.itemsWillBeImported);localStorage.setItem(e,JSON.stringify(t))}this.$snackbar(this.$t("depot.result.imported"))},detectPasteAndUseImg:function(e){var t=this;if(this.$route.path.startsWith("/depot")&&p["a"](e))return p["b"]().catch((function(e){console.warn(e),"DataError"===e.name&&t.$snackbar({message:t.$t("hr.ocr.pasteDataError"),timeout:6e3})})).then(this.useImg)},readClipboardImg:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$requestClipboardPermission("clipboard-read");case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,navigator.clipboard.read();case 6:r=t.sent,n=Object(i["a"])(r),t.prev=8,n.s();case 10:if((a=n.n()).done){t.next=20;break}if(s=a.value,u=s.types.filter((function(e){return e.startsWith("image/")})),!(u.length>0)){t.next=18;break}return t.next=16,s.getType(u[0]);case 16:return o=t.sent,t.abrupt("return",new File([o],"depot-".concat(Date.now(),".").concat(d.a.last(u[0].split("/"))),{type:u[0]}));case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](8),n.e(t.t0);case 25:return t.prev=25,n.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[8,22,25,28]])})))()},onScrollResult:function(e){var t=this.$refs.resultScrollable;e.deltaY&&t.scrollWidth>t.clientWidth&&(e.preventDefault(),t.scrollLeft+=e.deltaY)}},beforeRouteEnter:function(e,t,r){y.setTest(!!e.query.debug),r()},beforeRouteUpdate:function(e,t,r){y.setTest(!!e.query.debug),r()},created:function(){this.$$(window).on("keydown",this.detectPasteAndUseImg),this.debug=!!this.$route.query.debug,y.prepareLS(Object(h["proxy"])(localStorage))},beforeDestroy:function(){this.$$(window).off("keydown",this.detectPasteAndUseImg)}},I=k,_=(r("db2a"),r("0c7c")),C=Object(_["a"])(I,n,a,!1,null,null,null);t["default"]=C.exports},d844:function(e,t,r){},db2a:function(e,t,r){"use strict";r("d844")},de76:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));r("5db7"),r("d81d"),r("73d9"),r("b0c0"),r("07ac");var n=r("f3f3"),a=r("60bb"),i=r.n(a),s=r("9d72"),u=i.a.mapValues(s,(function(e,t){return Object(n["a"])({name:t},e)})),o=i.a.sortBy(Object.values(u),"sortId"),c=i.a.groupBy(o,(function(e){var t=e.rare;return t})),d=o.map((function(e){var t=e.name;return t})),l=i.a.flatMap(Object.values(c).reverse(),(function(e){return e.map((function(e){var t=e.name;return t}))}));t["a"]={materials:c,materialTable:u,materialList:o,materialOrder:d,materialRareFirstOrder:l}},f71e:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));r("99af"),r("4de4"),r("ac1f"),r("1276"),r("2ca0");var n=r("54f8"),a=(r("96cf"),r("c964")),i=r("60bb"),s=r.n(i),u=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator&&"permissions"in navigator&&"clipboard"in navigator){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,navigator.permissions.query({name:t});case 4:if(r=e.sent.state,"granted"===r||"prompt"===r){e.next=7;break}return e.abrupt("return",!1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u("clipboard-write");case 2:if(!e.sent){e.next=5;break}return navigator.clipboard.writeText(t),e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){var t,r,n=e.ctrlKey,a=e.metaKey,i=e.keyCode;return 86===i&&!!(n||null!==(t=navigator)&&void 0!==t&&null!==(r=t.platform)&&void 0!==r&&r.startsWith("Mac")&&a)},d=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u("clipboard-read");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,navigator.clipboard.read();case 6:t=e.sent,r=Object(n["a"])(t),e.prev=8,r.s();case 10:if((a=r.n()).done){e.next=20;break}if(i=a.value,o=i.types.filter((function(e){return e.startsWith("image/")})),!(o.length>0)){e.next=18;break}return e.next=16,i.getType(o[0]);case 16:return c=e.sent,e.abrupt("return",new File([c],"clipboard-".concat(Date.now(),".").concat(s.a.last(o[0].split("/"))),{type:o[0]}));case 18:e.next=10;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](8),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[8,22,25,28]])})));return function(){return e.apply(this,arguments)}}()}}]);