webpackJsonp([0],{"2Xvq":function(t,e,n){"use strict";e.a={data:function(){return{}},computed:{url:function(){return window.location.origin+"/"+this.$route.fullPath}}}},"3xhJ":function(t,e,n){"use strict";var a=n("9Qj3"),s=n("DN+g"),r=!1;var i=function(t){r||n("OkcJ")},o=n("VU/8")(a.a,s.a,!1,i,"data-v-9b3143bc",null);o.options.__file="components/AnnualDownload.vue",e.a=o.exports},"4Ssi":function(t,e,n){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("vue-disqus",{staticClass:"w-100 mt5",attrs:{shortname:"tw-rental-house-data",identifier:this.$route.fullPath,url:this.url}})};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"9Qj3":function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),r=n("MS6o");e.a={props:{year:{type:Number,required:!0},definition:{type:Object,required:!0}},data:function(){return{}},computed:{jsonContent:function(){return"data:text/plain;charset=utf-8,"+encodeURIComponent(s()(this.definition,null,2))}},components:{DownloadTable:r.a}}},Axz2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("FKy9"),s=n("w3F8"),r=n("VU/8")(a.a,s.a,!1,null,null,null);r.options.__file="pages/download.vue",e.default=r.exports},"DN+g":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"annual ba b--black br1 ma4"},[n("div",{staticClass:"annual__header flex justify-between items-center bb b--black bg-black-30"},[n("h2",{staticClass:"ma0 pa2 ml2"},[t._v(t._s(t.year))]),n("div",{staticClass:"pa2 mr2"},[t._v("本表格資料下載 ["),n("a",{attrs:{download:t.year+".json",href:t.jsonContent}},[t._v("JSON")]),t._v("]")])]),t.definition.annual?n("div",{staticClass:"annual__seg seg"}):t._e(),t.definition.quarterly.length?n("div",{staticClass:"annual__seg seg"}):t._e(),n("div",{staticClass:"annual__seg seg"},[n("div",{staticClass:"seg__title"},[t._v("每月資料")]),n("div",{staticClass:"seg__table"},[n("DownloadTable",{attrs:{idHeader:"月份",rows:t.definition.monthly}})],1)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},FKy9:function(t,e,n){"use strict";var a=n("3xhJ"),s=n("xY0Z"),r=n("TRtI"),i=n("JIuy"),o=n.n(i);e.a={head:function(){return{title:"打包回家玩"}},data:function(){return{years:[{year:2018,data:o.a}]}},components:{AnnualDownload:a.a,AboutDataBrief:s.a,Disqus:r.a}}},JIuy:function(t,e){t.exports={annual:null,quarterly:[],monthly:[{id:5,total_count:135160,sources:[{name:"591",count:135160}],file_size_byte:40765154,download_url:"http://pcse.pw/tw-rental-data-2018-05",comment:"五月底才開始收集六都以外縣市的資料，可視為五月只有六都的物件。"}]}},MS6o:function(t,e,n){"use strict";var a=n("Q1J3"),s=n("WPP5"),r=n("VU/8")(a.a,s.a,!1,null,null,null);r.options.__file="components/DownloadTable.vue",e.a=r.exports},NMDr:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".seg>[data-v-9b3143bc]{padding:8px 16px;padding:.5rem 1rem}.seg__title[data-v-9b3143bc]{font-size:1.2em;border-bottom:1px solid #000}",""])},OkcJ:function(t,e,n){var a=n("NMDr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("91a00a84",a,!1,{sourceMap:!1})},Q1J3:function(t,e,n){"use strict";var s=n("M4fF"),r=n.n(s),i=n("H52G"),o=n.n(i);e.a={props:{rows:{type:Array,required:!0,validator:function(t){return r.a.isArray(t)&&t.every(function(t){return void 0!==t.id&&t.total_count&&t.sources&&t.file_size_byte&&t.download_url})}},idHeader:{type:String,default:""},idFormatter:{type:Function,default:null}},data:function(){return{}},methods:{idName:function(t){return this.idFormatter&&"function"==typeof a?this.idFormatter(t):t},prettyNumber:function(t){return t.toLocaleString()},prettyCount:function(t,e){var n=t.sources.find(function(t){return t.name===e});return n?this.prettyNumber(n.count):"-"},filesize:function(t){return o()(t)}},computed:{needIdColumn:function(){return!!this.idHeader},sourceHeaders:function(){return r.a.uniq(r.a.flatten(this.rows.map(function(t){return t.sources.map(function(t){return t.name})})))}}}},TRtI:function(t,e,n){"use strict";var a=n("2Xvq"),s=n("4Ssi"),r=n("VU/8")(a.a,s.a,!1,null,null,null);r.options.__file="components/Disqus.vue",e.a=r.exports},WPP5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"download ba b--black-20 w-100 collapse"},[n("tbody",[n("tr",{staticClass:"striped--light-gray"},[t.needIdColumn?n("th",{staticClass:"pv2 ph3 tl f6 fw6"},[t._v(t._s(t.idHeader))]):t._e(),n("th",{staticClass:"pv2 ph3 tl f6 fw6"},[t._v("總物件數")]),t._l(t.sourceHeaders,function(e){return n("th",{key:e,staticClass:"pv2 ph3 tl f6 fw6"},[t._v(t._s(e)+" 物件數")])}),n("th",{staticClass:"pv2 ph3 tl f6 fw6"},[t._v("檔案解壓縮後大小")]),n("th",{staticClass:"pv2 ph3 tl f6 fw6"},[t._v("附註")]),n("th",{staticClass:"pv2 ph3 tl f6 fw6"},[t._v("下載連結")])],2),t._l(t.rows,function(e){return n("tr",{key:e.id,staticClass:"striped--light-gray"},[t.needIdColumn?n("td",{staticClass:"pv2 ph3"},[t._v(t._s(t.idName(e.id)))]):t._e(),n("td",{staticClass:"pv2 ph3"},[t._v(t._s(t.prettyNumber(e.total_count)))]),t._l(t.sourceHeaders,function(a){return n("td",{key:a,staticClass:"pv2 ph3"},[t._v(t._s(t.prettyCount(e,a)))])}),n("td",{staticClass:"pv2 ph3"},[t._v(t._s(t.filesize(e.file_size_byte)))]),n("td",{staticClass:"pv2 ph3"},[t._v(t._s(e.comment||"-"))]),n("td",{staticClass:"pv2 ph3"},[t._v("["),n("a",{attrs:{href:e.download_url,target:"_blank",rel:"noopener"}},[t._v("CSV")]),t._v("]")])],2)})],2)])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},ZTur:function(t,e,n){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("vue-markdown",{staticClass:"brief",attrs:{breaks:!1,anchorAttributes:{target:"_blank",rel:"noopener"}}},[this._v("「開放民間租屋資料」希望提供對租屋議題有興趣的單位，一份長期、開放，而且詳細的租屋資料集，\n去除有著作權與隱私疑慮的資料後，以 \n[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.zh_TW) \n釋出，為台灣的租賃市場與居住議題建立研究的基礎資料。\n\n本資料集的來源目前為[591 租屋網](https://rent.591.com.tw/)，\n後續也會持續擴充資料來源至各大租屋網與其他代管業者的公開資訊，\n預計每月、每季、每年都會發佈一份該期間內曾經出現過的所有出租物件，\n除了資料標準化外，不做額外的資料處理與刪減，希望盡量保持資料的原始狀態。\n\n本資料集是以現狀提供，並在相關法律容許的最大範圍內，主張免除提供者所有的擔保責任，\n包括但不限於合用性、正確性、權利瑕疵等，使用者並須為其後個案的使用情境自負其責，不得歸咎於提供者。")])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},w3F8:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-100 mw9 center pa4"},[n("div",{staticClass:"mw7 center lh-copy"},[n("h1",[t._v("打包回家玩～")]),n("AboutDataBrief"),n("p",{staticClass:"mv3"},[t._v("關於資料集的欄位與編碼表，請見「"),n("nuxt-link",{attrs:{to:"/about-data-set"}},[t._v("關於資料集")]),t._v("」。"),n("br"),t._v("如果好奇本專案的規劃、想要參與，或是發現問題，請至 "),n("a",{attrs:{href:"https://github.com/g0v/tw-rental-house-data",target:"_blank",rel:"noopener"}},[t._v("Github")]),t._v(" 開票。"),n("br"),t._v("若你是資料擁有者，而且認為本資料集有侵犯隱私或其他疑慮的，歡迎"),n("a",{attrs:{href:"mailto:open-tw-rental-house@ddio.io"}},[t._v("來信")]),t._v("要求移除。")],1)],1),t._l(t.years,function(t){return n("main",{key:t.year,staticClass:"w-100"},[n("AnnualDownload",{attrs:{year:t.year,definition:t.data}})],1)}),n("Disqus",{staticClass:"mw7 center"})],2)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},xY0Z:function(t,e,n){"use strict";var a=n("ZTur"),s=n("VU/8")(null,a.a,!1,null,null,null);s.options.__file="components/AboutDataBrief.vue",e.a=s.exports}});