(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.home"],{"168c":function(t,e,i){"use strict";var a=i("f92a"),s=i.n(a);s.a},"6c66":function(t,e,i){},"71e7":function(t,e,i){"use strict";var a=i("6c66"),s=i.n(a);s.a},bb51:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-row mdui-center",staticStyle:{"max-width":"1012px"}},[i("div",{staticClass:"mdui-col-xs-12 mdui-typo"},[i("h1",{staticClass:"mdui-m-t-0"},[t._v(t._s(t.$t("app.title")))]),t._m(0),i("welcome"),i("h2",[t._v(t._s(t.$t("common.setting")))]),i("div",{staticClass:"no-sl"},[i("locale-select",{key:t.$root.localeSelectKey}),i("theme-select"),i("div",{staticClass:"mdui-m-b-2"},[i("mdui-switch",{model:{value:t.setting.rememberLastPage,callback:function(e){t.$set(t.setting,"rememberLastPage",e)},expression:"setting.rememberLastPage"}},[t._v(t._s(t.$t("home.setting.rememberLastPage")))])],1),i("div",{staticClass:"mdui-m-b-2"},[i("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-btn-raised mdui-color-pink-accent","mdui-color-indigo-a100 mdui-ripple-black"],expression:"['mdui-btn-raised mdui-color-pink-accent', 'mdui-color-indigo-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple mdui-m-r-1",on:{click:t.clearStorage}},[t._v(t._s(t.$t("home.setting.clearStorage")))]),i("i",{staticClass:"mdui-icon material-icons mdui-m-r-1 help no-sl",attrs:{"mdui-tooltip":"{content:'"+t.$t("home.setting.clearStorageTip")+"',position:'top'}"}},[t._v(t._s(t.$root.dark?"info":"info_outline"))]),t._v(t._s(t.$t("home.used"))+t._s(t.lsSize)+" ")]),i("div",[i("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-btn-raised mdui-color-pink-accent","mdui-color-indigo-a100 mdui-ripple-black"],expression:"['mdui-btn-raised mdui-color-pink-accent', 'mdui-color-indigo-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple mdui-m-r-1",attrs:{disabled:!t.checkNavigatorStorage()},on:{click:t.clearCaches}},[t._v(t._s(t.$t("home.setting.clearCaches")))]),i("i",{staticClass:"mdui-icon material-icons mdui-m-r-1 help no-sl",attrs:{"mdui-tooltip":"{content:'"+t.$t("home.setting.clearCachesTip")+"',position:'top'}"}},[t._v(t._s(t.$root.dark?"info":"info_outline"))]),t._v(t._s(t.$t("home.used"))+t._s(t.csSize)+" ")])],1),i("add-to-home-screen"),t.$root.localeCN?[i("h2",[t._v("主要功能")]),t._m(1),i("p",[t._v("※ 如果公招词条识别出现遗漏现象且您愿意帮助我改进结果，请到 GitHub 上提交 issue，附上词条截图和浏览器 console 中的 OCR 日志")])]:t.$root.localeTW?[i("h2",[t._v("主要功能")]),t._m(2),i("p",[t._v("※ 如果公招詞條識別出現遺漏現象且您願意幫助我改進結果，請到 GitHub 上提交 issue，附上詞條截圖和瀏覽器 console 中的 OCR 日誌")])]:t._e(),i("h2",[t._v(t._s(t.$t("home.dataSources")))]),t._m(3),t._m(4),i("h2",[t._v(t._s(t.$t("home.contributors")))])],2),i("div",{staticClass:"mdui-col-xs-12"},[i("contributor-list",{attrs:{title:"Development",list:t.contribution,icon:"code"}})],1),i("div",{staticClass:"mdui-col-xs-12"},[i("contributor-list",{attrs:{title:"Translation",list:t.translation,"show-translation":!0,icon:"g_translate"}})],1),i("div",{staticClass:"mdui-col-xs-12 mdui-typo"},[i("h2",[t._v(t._s(t.$t("home.changelog")))]),i("changelog")],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Github: "),i("a",{attrs:{href:"https://github.com/Tsuk1ko/arknights-toolbox",target:"_blank"}},[t._v("Tsuk1ko/arknights-toolbox")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("公开招募计算 + 词条截图识别")]),i("li",[t._v("精英材料计算 + 导入干员材料预设 + 刷图规划")]),i("li",[t._v("干员升级计算")]),i("li",[t._v("基建技能筛选")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("公開招募計算 + 詞條截圖識別")]),i("li",[t._v("精英材料計算 + 導入幹員材料預設 + 材料獲取最優策略規劃")]),i("li",[t._v("幹員陞級計算")]),i("li",[t._v("基建技能篩選")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/Kengxxiao/ArknightsGameData",target:"_blank"}},[t._v("Kengxxiao/ArknightsGameData")]),t._v("（数据）")]),i("li",[i("a",{attrs:{href:"http://ak.mooncell.wiki",target:"_blank"}},[t._v("PRTS Wiki")]),t._v("（干员头像）")]),i("li",[i("a",{attrs:{href:"https://github.com/graueneko",target:"_blank"}},[t._v("灰格猫")]),t._v("（干员升级数据）")]),i("li",[i("a",{attrs:{href:"https://github.com/Houdou/arkgraph",target:"_blank"}},[t._v("ark-nights.com")]),t._v("（材料图片）")]),i("li",[i("a",{attrs:{href:"https://penguin-stats.io/",target:"_blank"}},[t._v("企鹅物流数据统计")]),t._v("（掉落数据）")]),i("li",[i("a",{attrs:{href:"https://bbs.nga.cn/read.php?tid=17507710",target:"_blank"}},[t._v("素材获取最优策略规划")]),t._v("（思路）")]),i("li",[t._v("跳转到 wiki "),i("ul",[i("li",[t._v("CN & TW - "),i("a",{attrs:{href:"http://ak.mooncell.wiki",target:"_blank"}},[t._v("PRTS Wiki")]),t._v("（很棒的 wiki，大家有条件可以打钱支持一下）")]),i("li",[t._v("EN - "),i("a",{attrs:{href:"https://gamepress.gg/arknights/",target:"_blank"}},[t._v("GamePress")])]),i("li",[t._v("JP - "),i("a",{attrs:{href:"https://wiki.gamerclub.jp/anwiki/",target:"_blank"}},[t._v("GamerClub")])]),i("li",[t._v("KR - "),i("a",{attrs:{href:"https://namu.wiki/",target:"_blank"}},[t._v("Namu Wiki")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{attrs:{href:"https://github.com/arkntools",target:"_blank"}},[t._v("组织")]),t._v("头像及本项目"),i("a",{attrs:{href:"https://github.com/Tsuk1ko/arknights-toolbox/tree/master/public/assets/icons",target:"_blank"}},[t._v("应用图标")]),t._v("由"),i("a",{attrs:{href:"https://www.pixiv.net/users/8745555",target:"_blank"}},[t._v("冬夏")]),t._v("绘制并授权使用")])}],r=(i("4de4"),i("caad"),i("d81d"),i("d3b7"),i("07ac"),i("2532"),i("3ca3"),i("ddb0"),i("b85c")),n=(i("96cf"),i("1da1")),l=i("5530"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.$root.localeCN?[t._m(0),t._m(1),i("p",[t._v("觉得好用的话记得向朋友推荐一下呀~")])]:t.$root.localeTW?[t._m(2),t._m(3),i("p",[t._v("覺得好用的話記得跟朋友推薦一下呀~")])]:[t._m(4),t._m(5),i("p",[t._v("If you think this toolbox helps you well, just recommend to your friends!")])]],2)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("目前支持国服、台服、国际服、日服、韩服，可在下方设置中切换"),i("br"),t._v("若有意愿帮助本项目翻译或改进翻译，请前往 GitHub 阅读 README，谢谢")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("如果有好的想法、建议、希望增加的功能，或者发现了 bug，欢迎提 "),i("a",{attrs:{href:"https://github.com/Tsuk1ko/arknights-toolbox/issues",target:"_blank"}},[t._v("issue")]),t._v(" 或 pr")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("現支持國服、台服、國際服、日服、韓服，可在下方設定中切換"),i("br"),t._v("若有意願幫助本項目翻譯或改進翻譯，請前往 GitHub 閱讀 README，謝謝")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("如果有好的想法、建議、希望新增的功能，或者發現了 bug，歡迎發起 "),i("a",{attrs:{href:"https://github.com/Tsuk1ko/arknights-toolbox/issues",target:"_blank"}},[t._v("issue")]),t._v(" 或 pr")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Support all servers, you can change it in the settings below."),i("br"),t._v("If you are willing to help us to translate or improve translation, please read the README on GitHub, thanks.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Welcome to submit "),i("a",{attrs:{href:"https://github.com/Tsuk1ko/arknights-toolbox/issues",target:"_blank"}},[t._v("issue")]),t._v(" or pull request if you have good ideas, suggestions, or find some bugs.")])}],u=i("2877"),m={},_=Object(u["a"])(m,o,c,!1,null,null,null),d=_.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"localeSelect",staticClass:"mdui-m-b-2",attrs:{id:"locale-select"}},[i("span",{staticClass:"inline-block mdui-m-r-2"},[t._v("Server & Language:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.$root.locale,expression:"$root.locale"}],attrs:{"mdui-select":""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$root,"locale",e.target.multiple?i:i[0])}}},t._l(t.$root.locales,(function(e){return i("option",{key:e.short,domProps:{value:e.short}},[t._v(t._s(e.short.toUpperCase())+" "+t._s(e.long))])})),0)])},h=[],p={name:"locale-select",mounted:function(){this.$mutation(this.$refs.localeSelect)}},f=p,b=(i("168c"),Object(u["a"])(f,v,h,!1,null,null,null)),g=b.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-m-b-2",attrs:{id:"theme-select"}},[i("table",{staticClass:"thin-table mdui-m-b-0"},[i("tbody",[i("tr",[i("td",{staticClass:"no-wrap"},[i("span",{staticClass:"inline-block mdui-m-r-2"},[t._v(t._s(t.$t("home.setting.appearance")))])]),i("td",t._l(t.$root.themeEnum,(function(e,a){return i("label",{key:a,staticClass:"mdui-radio mdui-p-l-3 mdui-m-r-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.themeSetting,expression:"$root.themeSetting"}],attrs:{type:"radio",name:"theme-select"},domProps:{value:e,checked:t._q(t.$root.themeSetting,e)},on:{change:function(i){return t.$set(t.$root,"themeSetting",e)}}}),i("i",{staticClass:"mdui-radio-icon"}),t._v(" "+t._s(t.$t("home.setting.appearanceList."+a))+" ")])})),0)])])])])},k=[],$={name:"theme-select"},w=$,S=Object(u["a"])(w,C,k,!1,null,null,null),y=S.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.$root.localeCN?[i("h2",[t._v("添加到主屏幕")]),i("p",[t._v("可将本工具箱添加到主屏幕作为 APP 在离线环境下使用，图片资源需要实际加载过一次后方可在离线状态下显示")]),i("p",[t._v("若您是首次打开该工具箱，可能需要等待所有资源缓存完毕后才能添加")]),i("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[t._m(0),i("div",{staticClass:"mdui-panel-item-body"},[i("h4",{staticClass:"mdui-m-t-1 h-ul"},[t._v("Chrome")]),i("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink-accent mdui-m-b-2",attrs:{disabled:!1===t.$root.deferredPrompt},on:{click:t.$root.installPWA}},[t._v("添加到主屏幕")]),i("p",[t._v("请尝试点击（如果可点击的话）")]),i("h4",{staticClass:"h-ul"},[t._v("Windows - Chrome")]),t._m(1),i("h4",{staticClass:"h-ul"},[t._v("Android - Chrome")]),t._m(2),i("h4",{staticClass:"h-ul"},[t._v("iOS ≥ 11.3")]),t._m(3)])])])]:t.$root.localeTW?[i("h2",[t._v("加到主畫面")]),i("p",[t._v("可將本工具箱加到主畫面作為 APP 在離線環境下使用，圖片資源需要實際加載過一次後方可在離線狀態下顯示")]),i("p",[t._v("若您是首次打開該工具箱，可能需要等待所有資源緩存完畢後才能添加")]),i("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[t._m(4),i("div",{staticClass:"mdui-panel-item-body"},[i("h4",{staticClass:"mdui-m-t-1 h-ul"},[t._v("Chrome")]),i("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink-accent mdui-m-b-2",attrs:{disabled:!1===t.$root.deferredPrompt},on:{click:t.$root.installPWA}},[t._v("加到主畫面")]),i("p",[t._v("請嘗試點擊（如果可點擊的話）")]),i("h4",{staticClass:"h-ul"},[t._v("Windows - Chrome")]),t._m(5),i("h4",{staticClass:"h-ul"},[t._v("Android - Chrome")]),t._m(6),i("h4",{staticClass:"h-ul"},[t._v("iOS ≥ 11.3")]),t._m(7)])])])]:t.$root.localeIs("jp")?[i("h2",[t._v("ホーム画面に追加")]),i("p",[t._v("ホーム画面に追加して、インタネットに接続されてなくてもご利用できますが、画像一回読み込むことが必要です。")]),i("p",[t._v("初めての方は一回全てのデータを読み込んだ後でご利用できます。")]),i("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[t._m(8),i("div",{staticClass:"mdui-panel-item-body"},[i("h4",{staticClass:"mdui-m-t-1 h-ul"},[t._v("Chrome")]),i("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink-accent mdui-m-b-2",attrs:{disabled:!1===t.$root.deferredPrompt},on:{click:t.$root.installPWA}},[t._v("ホーム画面に追加")]),i("p",[t._v("お試しください（もし使えたら）")]),i("h4",{staticClass:"h-ul"},[t._v("Windows - Chrome")]),t._m(9),i("h4",{staticClass:"h-ul"},[t._v("Android - Chrome")]),t._m(10),i("h4",{staticClass:"h-ul"},[t._v("iOS ≥ 11.3")]),t._m(11)])])])]:[i("h2",[t._v("Add to Home Screen")]),i("p",[t._v("You can add this toolbox to home screen and use it as an APP even when offline, but images can only be displayed offline after being loaded once.")]),i("p",[t._v("If you are launching for the first time, you may need to wait for all resources to be cached before adding to home page.")]),i("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[t._m(12),i("div",{staticClass:"mdui-panel-item-body"},[i("h4",{staticClass:"mdui-m-t-1 h-ul"},[t._v("Chrome")]),i("button",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-pink-accent mdui-m-b-2",attrs:{disabled:!1===t.$root.deferredPrompt},on:{click:t.$root.installPWA}},[t._v("Add to Home Screen")]),i("p",[t._v("Click that button if avaliable.")]),i("h4",{staticClass:"h-ul"},[t._v("Windows - Chrome")]),t._m(13),i("h4",{staticClass:"h-ul"},[t._v("Android - Chrome")]),t._m(14),i("h4",{staticClass:"h-ul"},[t._v("iOS ≥ 11.3")]),t._m(15)])])])]],2)},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v("各平台添加方法")]),i("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("点击浏览器右上方的"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("按钮，选择"),i("code",[t._v("安装“明日方舟工具箱”")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("点击浏览器右上方的"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("按钮，选择"),i("code",[t._v("添加到主屏幕")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("使用 Safari 浏览器打开本页面，点击浏览器底部的分享按钮"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("crop_5_4")]),i("i",{staticClass:"mdui-icon material-icons",staticStyle:{"margin-left":"-24px","margin-top":"-20px"}},[t._v("arrow_upward")]),t._v("，选择"),i("code",[t._v("添加到主屏幕")]),t._v("，接着点击右上角的“添加”即可")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v("添加方法")]),i("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("點擊瀏覽器右上方的"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("按鈕，選擇"),i("code",[t._v("安裝「明日方舟工具箱」")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("點擊瀏覽器右上方的"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("按鈕，選擇"),i("code",[t._v("加到主畫面")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("使用 Safari 瀏覽器打開本頁面，點擊瀏覽器底部的分享按鈕"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("crop_5_4")]),i("i",{staticClass:"mdui-icon material-icons",staticStyle:{"margin-left":"-24px","margin-top":"-20px"}},[t._v("arrow_upward")]),t._v("，選擇"),i("code",[t._v("加入主畫面")]),t._v("，然後點擊右上角的「新增」即可")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v("各端末追加の方法")]),i("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("ブラウザの右上にある"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("ボタンをクリックして、"),i("code",[t._v("“明日方舟工具箱”をインストール")]),t._v("をクリックしてください")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("ブラウザの右上にある"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v("ボタンをクリックして、"),i("code",[t._v("ホーム画面に追加")]),t._v("をクリックしてください")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("「Safari」でこのページを開いて，ブラウザの下にある"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("crop_5_4")]),i("i",{staticClass:"mdui-icon material-icons",staticStyle:{"margin-left":"-24px","margin-top":"-20px"}},[t._v("arrow_upward")]),t._v("ボタンをクリックして，"),i("code",[t._v("ホーム画面に追加")]),t._v("をクリックして，右上の「追加」をクリックしてください")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v("Guides")]),i("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Click the "),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v(" button on the top right of browser, then click "),i("code",[t._v('Install "明日方舟工具箱"')]),t._v(".")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Click the "),i("i",{staticClass:"mdui-icon material-icons"},[t._v("more_vert")]),t._v(" button on the top right of browser, then click "),i("code",[t._v("Add to home screen")]),t._v(".")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Visit this site with Safari, then click the share button "),i("i",{staticClass:"mdui-icon material-icons"},[t._v("crop_5_4")]),i("i",{staticClass:"mdui-icon material-icons",staticStyle:{"margin-left":"-24px","margin-top":"-20px"}},[t._v("arrow_upward")]),t._v(" at the bottom of the browser and click "),i("code",[t._v("Add to home screen")]),t._v(".")])}],P={name:"add-to-home-screen"},A=P,T=Object(u["a"])(A,x,E,!1,null,null,null),W=T.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"changelog"}},[i("p",[t._v(t._s(t.$t("home.lastUpdateDate"))),i("code",[t._v(t._s(t.time))])]),t._l(t.first,(function(e){return i("div",{key:e.time},[i("h4",[t._v(t._s(e.time))]),i("ul",t._l(e.changes,(function(e,a){return i("li",{key:a,domProps:{innerHTML:t._s(e)}})})),0)])})),i("div",{staticClass:"mdui-panel mdui-panel-gapless",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title",staticStyle:{width:"auto"}},[t._v(t._s(t.$t("home.earlyChangelog")))]),i("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])]),i("div",{staticClass:"mdui-panel-item-body"},t._l(t.second,(function(e){return i("div",{key:e.time},[i("h4",[t._v(t._s(e.time))]),i("ul",t._l(e.changes,(function(e,a){return i("li",{key:a,domProps:{innerHTML:t._s(e)}})})),0)])})),0)])])],2)},j=[],z=(i("fb6a"),i("44fe")),N=i("7a3b"),L={name:"changelog",data:function(){return{time:z["a"],first:N.slice(0,5),second:N.slice(5)}}},R=L,G=Object(u["a"])(R,O,j,!1,null,null,null),H=G.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"mdui-list"},[t.title?i("li",{staticClass:"mdui-subheader-inset"},[t.icon?i("i",{staticClass:"mdui-icon material-icons"},[t._v(t._s(t.icon))]):t._e(),t._v(t._s(t.title))]):t._e(),t._l(t.list,(function(e){return i("a",{key:e.name,staticClass:"mdui-list-item mdui-ripple",class:{"cursor-unset":!e.url},attrs:{href:e.url,target:"_blank","data-translation":t.showTranslation&&(e.translation||[]).join(" ")}},[i("div",{staticClass:"mdui-list-item-avatar"},[i("img",{attrs:{src:e.avatar,crossorigin:"anonymous"}})]),i("div",{staticClass:"mdui-list-item-content"},[t._v(t._s(e.name))])])})),t._l(6,(function(t){return i("li",{key:"placeholder-"+t,staticClass:"mdui-list-placeholder mdui-p-x-1"})}))],2)},I=[],M={name:"contributor-list",props:{title:{type:String,default:""},list:{type:Array,default:function(){return[]}},icon:{type:String,default:""},showTranslation:{type:Boolean,default:!1}},methods:{openLink:function(t){var e=t.url;e&&window.open(e,"_blank")}}},K=M,J=(i("71e7"),Object(u["a"])(K,D,I,!1,null,"8c1c0324",null)),q=J.exports,B=i("60bb"),U=i.n(B),Y=i("8fc5"),V=i("bba1"),F=function(t){return t.map((function(t){return V["b"][t]}))},Q={contribution:F(V["a"]),translation:F(V["c"])},X={name:"home",components:{Welcome:d,LocaleSelect:g,ThemeSelect:y,AddToHomeScreen:W,Changelog:H,ContributorList:q},data:function(){return Object(l["a"])({lsSize:this.calcLsSize(),csSize:this.$t("home.calculating"),setting:this.$root.setting},Q)},methods:{checkNavigatorStorage:function(){return"storage"in navigator&&"estimate"in navigator.storage},clearStorage:function(){localStorage.clear(),this.$snackbar(this.$t("common.success")),this.lsSize=this.calcLsSize()},clearCaches:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,a,s,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("serviceWorker"in navigator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,caches.keys();case 4:return i=e.sent.filter((function(t){return U.a.includes(t,"runtime")})),e.next=7,Promise.all(i.map((function(t){return caches.open(t)})));case 7:a=e.sent,s=Object(r["a"])(a),e.prev=9,l=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.value,t.next=3,e.keys().then((function(t){return Promise.all(t.map((function(t){return e.delete(t)})))}));case 3:case"end":return t.stop()}}),t)})),s.s();case 12:if((n=s.n()).done){e.next=16;break}return e.delegateYield(l(),"t0",14);case 14:e.next=12;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e["catch"](9),s.e(e.t1);case 21:return e.prev=21,s.f(),e.finish(21);case 24:return e.next=26,Promise.all(i.map((function(t){return caches.delete(t)})));case 26:return t.$snackbar(t.$t("common.success")),e.next=29,t.calcCsSize();case 29:t.csSize=e.sent;case 30:case"end":return e.stop()}}),e,null,[[9,18,21,24]])})))()},calcLsSize:function(){return this.$root.calcSize(2*U.a.sumBy(Object.values(localStorage),Y["a"]))},calcCsSize:function(){var t=this;return this.checkNavigatorStorage()?navigator.storage.estimate().then((function(e){var i=e.usage;return t.$root.calcSize(i)})).catch((function(){return"N/A"})):Promise.resolve("N/A")}},created:function(){var t=this;this.calcCsSize().then((function(e){return t.csSize=e}))}},Z=X,tt=Object(u["a"])(Z,a,s,!1,null,null,null);e["default"]=tt.exports},f92a:function(t,e,i){}}]);