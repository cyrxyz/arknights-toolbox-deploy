(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.depot"],{"2f6b":function(t,e,r){"use strict";r("5fd6")},3545:function(t,e){t.exports=function(){return new Worker("./assets/js/dr.d997c0b10cb88ec7bf6a.worker.js")}},"5fd6":function(t,e,r){},6129:function(t,e,r){var n,a=r("2fa1").wrap,i=r("3545");t.exports=function t(){return this instanceof t?a(i()):n||(n=a(i()))}},8679:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"arkn-item mdui-m-r-1 no-sl no-pe",style:{width:t.widthCss,height:t.widthCss},attrs:{src:t.$root.materialImage(t.img),crossorigin:"anonymous"},on:{error:t.handleImgErr}})},a=[],i=(r("a9e3"),{name:"arkn-item",props:{img:String,width:{type:[Number,String],default:48}},computed:{widthCss:function(){return"number"===typeof this.width?"".concat(this.width,"px"):this.width}},methods:{handleImgErr:function(t){t.target.src=this.$root.avatar("no_image"),t.target.style.backgroundColor="#bdbdbd",t.target.style.borderRadius="50%"}}}),s=i,u=(r("2f6b"),r("0c7c")),o=Object(u["a"])(s,n,a,!1,null,"d0f648b6",null);e["a"]=o.exports},a3d0:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"arkn-depot"}},[t.imgSrc?[r("div",{staticClass:"mdui-typo-body-2 mdui-m-b-1 no-sl"},[t._v(t._s(t.$t("depot.result.tip")))]),r("div",{staticClass:"result"},[r("div",{staticClass:"result-scrollable",style:{"overflow-x":t.drProgress?"hidden":""},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),function(e){return t.useImg(e.dataTransfer.files[0])}(e)},contextmenu:function(t){t.preventDefault()}}},[r("div",{staticClass:"result-wrapper"},[r("div",{staticClass:"result-container",style:{backgroundImage:"url("+(t.imgSrc||t.PNG1P)+")",paddingBottom:100*t.imgRatio+"%"}},[t._l(t.drData,(function(e,n){var a=e.posPct,i=e.sim,s=e.num;return[i&&s&&i.diff<=t.MAX_SHOW_DIFF?r("div",{key:n,staticClass:"result-square pointer",class:{disabled:!t.drSelect[n]},style:t.num2pct(a),on:{click:function(e){return e.target!==e.currentTarget?null:t.$set(t.drSelect,n,!t.drSelect[n])},contextmenu:function(e){return e.preventDefault(),t.editResult(n)}}},[r("div",{staticClass:"result-sim mdui-valign",class:{"mdui-ripple mdui-ripple-white":t.drSelect[n]},on:{click:function(e){return t.editResult(n)}}},[r("arkn-item",{staticClass:"result-sim-img",staticStyle:{height:"100%"},attrs:{t:t.materialTable[i.name].rare,img:i.name,width:""}}),r("div",{staticClass:"result-sim-num no-pe no-sl"},[t._v(t._s(s.value))])],1),s.warn&&!s.edit?r("div",{staticClass:"result-sim-warn no-sl no-pe"},[t._v("⚠️")]):t._e()]):t._e()]}))],2)]),r("div",{staticClass:"debug-checkbox-wrapper"},[r("mdui-checkbox",{staticClass:"debug-checkbox",model:{value:t.debug,callback:function(e){t.debug=e},expression:"debug"}},[t._v("Debug")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.drProgress,expression:"drProgress"}],staticClass:"result-progress"},[r("mdui-spinner",{staticClass:"mdui-m-r-1",attrs:{colorful:!0}}),r("div",{staticClass:"mdui-typo-body-1 mdui-text-color-black-text"},[t._v(t._s(t.drProgress))])],1)])]),t.drData.length?r("div",{staticClass:"mdui-row mdui-m-t-2"},[r("div",{staticClass:"mdui-col-xs-6"},[r("label",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-purple","mdui-color-purple-a100 mdui-ripple-black"],expression:"['mdui-color-purple', 'mdui-color-purple-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",attrs:{for:"img-select"},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),function(e){return t.useImg(e.dataTransfer.files[0])}(e)}}},[t._v(t._s(t.$t("depot.result.selectImage")))])]),r("div",{staticClass:"mdui-col-xs-6"},[r("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.pinkBtn,expression:"$root.color.pinkBtn"}],staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-btn-block",on:{click:t.importItems}},[t._v(t._s(t.$t("common.import")))])])]):t._e()]:r("label",{staticClass:"image-select pointer mdui-valign mdui-text-center mdui-p-a-4",attrs:{for:"img-select"},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),function(e){return t.useImg(e.dataTransfer.files[0])}(e)}}},[r("div",{staticClass:"mdui-typo-display-1-opacity mdui-hidden-xs",domProps:{innerHTML:t._s(t.$t("depot.input.title"))}}),r("div",{staticClass:"mdui-typo-headline mdui-hidden-sm-up",staticStyle:{opacity:"0.54"},domProps:{innerHTML:t._s(t.$t("depot.input.title"))}}),r("div",{staticClass:"mdui-typo-body-2 mdui-m-t-2"},[t._v(t._s(t.$t("depot.input.notice")))])]),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",id:"img-select",accept:"image/jpeg,image/png"},on:{change:function(e){return t.useImg(t.$refs.image.files[0])}}}),t.debug?r("div",{staticClass:"mdui-m-t-4 no-sl",attrs:{id:"debug"}},[t._l(t.drData,(function(e,n){var a=e.pos,i=a.x,s=a.y,u=e.sim,o=e.num;return[o?r("div",{key:n,staticClass:"debug-item mdui-m-b-2"},[r("div",{staticClass:"debug-img",style:{backgroundImage:"url("+(t.imgSrc||t.PNG1P)+")",backgroundPosition:"-"+(.6*i+1)+"px -"+(.6*s+2)+"px"}}),r("img",{staticClass:"debug-num-img no-pe mdui-m-r-1",attrs:{src:o.img}}),r("pre",{staticClass:"mdui-m-y-0"},[t._v("item: "+t._s(u.name)+"\nsimi: "+t._s(t.$_.round(100*(1-u.diff),2))+"%\ntext: "+t._s(o.text))])]):t._e()]}))],2):t._e()],2)},a=[],i=(r("99af"),r("4de4"),r("caad"),r("d81d"),r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("2ca0"),r("498a"),r("ddb0"),r("2b3d"),r("b85c")),s=r("5530"),u=(r("96cf"),r("1da1")),o=r("8679"),c=r("60bb"),d=r.n(c),l=r("b9af"),m=r("60fe"),p=r("f71e"),f=.2,g={DEFAULT:.15,30042:.12,30043:.1,30044:.1,30062:.12,30125:.2,31023:.16,31024:.18},b=function(t){if(!t)return!1;var e=t.diff,r=t.name,n=r in g?g[r]:g.DEFAULT;return e<n},v=r("de76"),h=r("2fa1"),w=r("6129"),x=r.n(w),k=new x.a,y={name:"arkn-depot",components:{ArknItem:o["a"]},data:function(){return{MAX_SHOW_DIFF:f,PNG1P:m["c"],materialTable:v["b"],imgSrc:null,imgRatio:0,drData:[],drSelect:[],drProgress:"",debug:!1}},methods:{isTrustSim:b,num2pct:function(t){return d.a.mapValues(t,(function(t){return"".concat(d.a.round(100*t,3),"%")}))},updateProgress:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.drProgress=t},useImg:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t&&["image/jpeg","image/png"].includes(t.type)){r.next=2;break}return r.abrupt("return");case 2:return e.updateProgress("Starting"),e.drData=[],e.drSelect=[],e.imgRatio=0,e.imgSrc=window.URL.createObjectURL(t),e.updateRatio(e.imgSrc),e.$gtag.event("depot_recognition",{event_category:"depot",event_label:"recognition"}),r.next=11,k.recognize(e.imgSrc,Object(h["proxy"])(e.updateProgress));case 11:n=r.sent,console.log("Recognition",n),e.drData=d.a.cloneDeep(n),e.drSelect=n.map((function(t){var e=t.sim;return b(e)})),e.updateProgress();case 16:case"end":return r.stop()}}),r)})))()},updateRatio:function(t){var e=this,r=new Image;r.src=t,r.onload=function(){e.imgRatio=r.height/r.width}},editResult:function(t){var e=this;this.$prompt("材料数量","修改结果",(function(r){var n=r.trim();/^[0-9]+$/.test(n)?(e.drData[t].num.value=parseInt(n),e.drData[t].num.edit=!0):e.editResult(t)}),(function(){}),{history:!1,confirmOnEnter:!0,cancelText:this.$t("common.cancel"),confirmText:this.$t("common.edit"),defaultValue:this.drData[t].num.value})},importItems:function(){if(this.$root.importItemsListening)this.$root.$emit("import-items",this.itemsWillBeImported);else{var t="depot.imports",e=Object(s["a"])(Object(s["a"])({},Object(l["a"])(localStorage.getItem(t))),this.itemsWillBeImported);localStorage.setItem(t,JSON.stringify(e))}this.$snackbar(this.$t("depot.result.imported"))},detectPasteAndUseImg:function(t){var e=this;if(this.$route.path.startsWith("/depot")&&p["a"](t))return p["b"]().catch((function(t){console.warn(t),"DataError"===t.name&&e.$snackbar({message:e.$t("hr.ocr.pasteDataError"),timeout:6e3})})).then(this.useImg)},readClipboardImg:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,n,a,s,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$requestClipboardPermission("clipboard-read");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,navigator.clipboard.read();case 6:r=e.sent,n=Object(i["a"])(r),e.prev=8,n.s();case 10:if((a=n.n()).done){e.next=20;break}if(s=a.value,u=s.types.filter((function(t){return t.startsWith("image/")})),!(u.length>0)){e.next=18;break}return e.next=16,s.getType(u[0]);case 16:return o=e.sent,e.abrupt("return",new File([o],"depot-".concat(Date.now(),".").concat(d.a.last(u[0].split("/"))),{type:u[0]}));case 18:e.next=10;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](8),n.e(e.t0);case 25:return e.prev=25,n.f(),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[8,22,25,28]])})))()}},computed:{itemsWillBeImported:function(){var t=this;return d.a.fromPairs(this.drData.filter((function(e,r){var n=e.sim,a=e.num;return n&&a&&t.drSelect[r]})).map((function(t){var e=t.sim.name,r=t.num.value;return[e,r]})))}},created:function(){this.$$(window).on("keydown",this.detectPasteAndUseImg),k.prepareLS(Object(h["proxy"])(localStorage))},beforeDestroy:function(){this.$$(window).off("keydown",this.detectPasteAndUseImg)}},_=y,C=(r("db2a"),r("0c7c")),$=Object(C["a"])(_,n,a,!1,null,null,null);e["default"]=$.exports},d844:function(t,e,r){},db2a:function(t,e,r){"use strict";r("d844")},de76:function(t,e,r){"use strict";r.d(e,"b",(function(){return u}));r("5db7"),r("d81d"),r("73d9"),r("b0c0"),r("07ac");var n=r("5530"),a=r("60bb"),i=r.n(a),s=r("9d72"),u=i.a.mapValues(s,(function(t,e){return Object(n["a"])({name:e},t)})),o=i.a.sortBy(Object.values(u),"sortId"),c=i.a.groupBy(o,(function(t){var e=t.rare;return e})),d=o.map((function(t){var e=t.name;return e})),l=i.a.flatMap(Object.values(c).reverse(),(function(t){return t.map((function(t){var e=t.name;return e}))}));e["a"]={materials:c,materialTable:u,materialList:o,materialOrder:d,materialRareFirstOrder:l}},f71e:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d}));r("99af"),r("4de4"),r("ac1f"),r("1276"),r("2ca0");var n=r("b85c"),a=(r("96cf"),r("1da1")),i=r("60bb"),s=r.n(i),u=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(navigator&&"permissions"in navigator&&"clipboard"in navigator){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,navigator.permissions.query({name:e});case 4:if(r=t.sent.state,"granted"===r||"prompt"===r){t.next=7;break}return t.abrupt("return",!1);case 7:return t.abrupt("return",!0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u("clipboard-write");case 2:if(!t.sent){t.next=5;break}return navigator.clipboard.writeText(e),t.abrupt("return",!0);case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(t){var e,r,n=t.ctrlKey,a=t.metaKey,i=t.keyCode;return 86===i&&!!(n||null!==(e=navigator)&&void 0!==e&&null!==(r=e.platform)&&void 0!==r&&r.startsWith("Mac")&&a)},d=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r,a,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u("clipboard-read");case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,navigator.clipboard.read();case 6:e=t.sent,r=Object(n["a"])(e),t.prev=8,r.s();case 10:if((a=r.n()).done){t.next=20;break}if(i=a.value,o=i.types.filter((function(t){return t.startsWith("image/")})),!(o.length>0)){t.next=18;break}return t.next=16,i.getType(o[0]);case 16:return c=t.sent,t.abrupt("return",new File([c],"clipboard-".concat(Date.now(),".").concat(s.a.last(o[0].split("/"))),{type:o[0]}));case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](8),r.e(t.t0);case 25:return t.prev=25,r.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[8,22,25,28]])})));return function(){return t.apply(this,arguments)}}()}}]);