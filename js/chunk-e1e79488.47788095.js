(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1e79488"],{"13b3":function(t,e,s){},"19fd":function(t,e,s){"use strict";var i=s("4825"),n=s.n(i);n.a},"1bfb":function(t,e,s){},4825:function(t,e,s){},"608c":function(t,e,s){},"7efd":function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));s("608c");var i=s("9d26"),n=s("0789"),r=s("604c"),a=s("e4cd"),o=s("dc22"),l=s("c3f0"),c=s("58df");const h=Object(c["a"])(r["a"],a["a"]).extend({name:"base-slide-group",directives:{Resize:o["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...r["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing;case"mobile":return this.isMobile||this.isOverflowing;default:return!this.isMobile&&this.isOverflowing}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,n=this["has"+s];return this.showArrows||n?this.$createElement(i["a"],{props:{disabled:!n}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(n["d"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const a=e.wrapper+i,o=n+r,l=.4*n;return r<=i?i=Math.max(r-l,0):a<=o&&(i=Math.min(i-(a-o-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=h.extend({name:"v-slide-group",provide(){return{slideGroup:this}}})},"8adc":function(t,e,s){},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]},b1ff:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.is_loading||t._release?s("v-layout",{class:{"py-6":!this.isMobile},attrs:{column:""}},[s("card",{staticClass:"mb-2",attrs:{loading:t.is_loading,release:t._release}}),t.is_loading?t._e():s("v-tabs",{staticClass:"shrink mb-6",attrs:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab",[t._v("Эпизоды")]),s("v-tab",[t._v("Комментарии")])],1),t.component?s(t.component.is,t._g(t._b({tag:"component",class:{"pb-6":this.isMobile}},"component",t.component.props,!1),t.component.events)):t._e()],1):t._e()},n=[],r=(s("99af"),s("a9e3"),s("96cf"),s("1da1")),a=s("5530"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:"",color:"transparent"}},[t.loading?s("loader"):s("v-layout",{attrs:{column:""}},[s("v-row",{class:{"mb-4":!t.isMobile},attrs:{"no-gutters":"",align:"center"}},[s("v-col",{style:{maxWidth:t.isMobile?"100%":"240px"},attrs:{cols:t.isMobile?12:3}},[s("v-avatar",{class:{rounded:t.isMobile},attrs:{"max-height":"300",tile:t.isMobile,size:t.isMobile?"100%":"220"}},[s("v-img",{attrs:{"aspect-ratio":"1",src:t.poster,position:t.isMobile?"top center":"center center"}})],1)],1),s("v-col",{attrs:{cols:t.isMobile?12:9}},[s("div",[s("v-card-title",{staticClass:"text-h5 mb-2 font-weight-black",style:{wordBreak:"break-word"},domProps:{textContent:t._s(t.title)}}),s("v-card-subtitle",{staticClass:"pb-0",domProps:{textContent:t._s(t.original)}}),s("v-card-subtitle",{staticClass:"pt-0",domProps:{textContent:t._s(t.genres)}}),s("v-card-text",[s("favorite",t._b({staticClass:"mr-1",attrs:{color:"grey darken-3"}},"favorite",{release:t.release},!1)),t.year?s("v-chip",{staticClass:"mr-1",style:{height:"36px"},attrs:{label:"",color:"grey darken-3"},domProps:{textContent:t._s(t.year)}}):t._e(),t.type?s("v-chip",{staticClass:"mr-1",style:{height:"36px"},attrs:{label:"",color:"grey darken-3"},domProps:{textContent:t._s(t.type)}}):t._e()],1)],1)])],1),s("v-card-text",{staticClass:"white--text",domProps:{textContent:t._s(t.description)}})],1)],1)},l=[],c=(s("a15b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ma-4"},[s("v-layout",{attrs:{"align-center":""}},[s("v-skeleton-loader",{staticClass:"mr-8",attrs:{boilerplate:"",type:"avatar",height:"220",width:"220"}}),s("v-layout",{attrs:{column:""}},[s("v-skeleton-loader",{attrs:{boilerplate:"",type:"heading",height:"40",width:"70%"}}),s("v-skeleton-loader",{staticClass:"mt-5",attrs:{boilerplate:"",type:"text",width:"140"}}),s("v-skeleton-loader",{attrs:{boilerplate:"",type:"text",width:"260"}}),s("v-layout",{staticClass:"shrink mt-4"},[s("v-skeleton-loader",{staticClass:"mr-1",attrs:{boilerplate:"",type:"button",width:"65"}}),s("v-skeleton-loader",{staticClass:"mr-1",attrs:{boilerplate:"",type:"button",width:"65"}}),s("v-skeleton-loader",{attrs:{boilerplate:"",type:"button",width:"160"}})],1)],1)],1),s("v-skeleton-loader",{staticClass:"mt-6",attrs:{boilerplate:"",type:"text@10"}})],1)}),h=[],d=s("2877"),u=s("6544"),p=s.n(u),v=s("a722"),f=s("3129"),m={},g=Object(d["a"])(m,c,h,!1,null,null,null),b=g.exports;p()(g,{VLayout:v["a"],VSkeletonLoader:f["a"]});var w=b,x=s("b82e"),y=s("8d8d"),_={loading:{type:Boolean,default:!1},release:{type:Object,default:null}},$={props:_,mixins:[y["a"]],components:{Loader:w,Favorite:x["a"]},computed:{title:function(){return this.$__get(this.release,"names.ru")},original:function(){return this.$__get(this.release,"names.original")},genres:function(){return(this.$__get(this.release,"genres")||[]).join(" | ")},year:function(){return this.$__get(this.release,"year")},type:function(){return this.$__get(this.release,"type")},description:function(){return this.$__get(this.release,"description")},poster:function(){return this.$__get(this.release,"poster")}}},C=$,k=s("8212"),O=s("b0af"),I=s("99d9"),S=s("cc20"),B=s("62ad"),j=s("adda"),T=s("0fd9"),E=Object(d["a"])(C,o,l,!1,null,null,null),A=E.exports;p()(E,{VAvatar:k["a"],VCard:O["a"],VCardSubtitle:I["a"],VCardText:I["b"],VCardTitle:I["c"],VChip:S["a"],VCol:B["a"],VImg:j["a"],VLayout:v["a"],VRow:T["a"]});var V=A,R=s("11d0"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{column:""}},[!1===t.visible?s("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line@19"}}):t._e(),s("webview",t._b({ref:"comments",staticClass:"comments",class:{visible:t.visible},style:{height:t.height}},"webview",t.configuration,!1))],1)},M=[],N=s("9224"),z="(() => {\n  return {\n    width: document.getElementsByTagName('body')[0].clientWidth,\n    height: document.getElementsByTagName('body')[0].clientHeight,\n  }\n})();\n\n",L=":root {\n  --link-color: #bd636c !important;\n}\n\n\nhtml, body {\n  height: auto !important;\n  overflow: hidden !important;\n}\n\n.wcomments_page{\n  width: 100% !important;\n}\n\n.wcomments_head {\n  background: #1E1E1E !important;\n}\n\n.wcomments_form {\n  background: #313131 !important;\n  margin-bottom: 14px !important;\n  border: 0 !important;\n}\n\n#post_field {\n  background: transparent !important;\n  border-color: #1E1E1E !important;\n  color: white !important;\n}\n\ndiv#wcomments_export {\n  color: #868686 !important;\n}\n\n#page_wrap {\n  background: transparent !important;\n}\n\n.wall_post_text, .wall_reply_text {\n  color: #bdbdbd !important;\n}\n\n.reply_fakebox {\n  background: #121212 !important;\n  border-color: #404040 !important;\n}\n\n.reply_fakebox_wrap {\n  background: transparent !important;\n}\n\n.page_block {\n  background: #2f2f2f !important;\n  box-shadow: none !important;\n}\n\n.reply_highlighted {\n  background: #2f2f2f !important;\n}\n\n.post {\n  line-height: 20px !important;\n}\n\n.wr_header, ._wcomments_more {\n  background: #2f2f2f !important;\n  color: #a9a6a6 !important;\n}\n\n#send_post {\n  background: #191919 !important;\n}\n\n.addpost_button {\n  background: #333333 !important;\n}\n\n.reply_box {\n  background: #23232366 !important;\n  border: 0 !important;\n}\n\n.reply_form {\n  background-color: transparent !important;\n  border-color: #1E1E1E !important;\n  color: white !important;\n}\n\n.reply_field {\n  color: white !important;\n  background: transparent !important;\n  border-color: #636262 !important;\n}\n\n.submit_post {\n  background: transparent !important;\n}\n",W={release:{type:Object,default:null}},D={props:W,data:function(){return{width:"100%",height:"100%",visible:!1,interval:null}},computed:{anilibria:function(){return N["meta"].links.anilibria},configuration:function(){return{src:this.src,partition:"release:comments",allowpopups:!0,httpreferrer:this.anilibria,disablewebsecurity:!0}},src:function(){var t=this.$__get(this.release,"code"),e="".concat(this.anilibria,"/release/").concat(t,".html"),s="5315207";return"https://vk.com/widget_comments.php?app=".concat(s,"&url=").concat(e,"&limit=10")}},mounted:function(){var t=this,e=this.$refs.comments;e.addEventListener("did-navigate",(function(){return t.visible=!1})),e.addEventListener("certificate-error",(function(){return t.$toasted.error("Произошла ошибка при загрузке комментариев. Ошибка с сертификатом")})),e.addEventListener("did-fail-load",(function(){return t.$toasted.error("Произошла ошибка при загрузке комментариев")})),e.addEventListener("dom-ready",(function(){t.visible=!1,e.insertCSS(L),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){e.executeJavaScript(z).then((function(e){var s=e.width,i=e.height;t.width=s+"px",t.height=i+"px"}))}),50),setTimeout((function(){return t.visible=!0}),1e3)}))},beforeDestroy:function(){this.interval&&clearInterval(this.interval)}},F=D,G=(s("19fd"),Object(d["a"])(F,P,M,!1,null,null,null)),H=G.exports;p()(G,{VLayout:v["a"],VSkeletonLoader:f["a"]});var X=H,q=s("a1ca"),U=s("2f62"),J={release_id:{type:[String,Number],default:null}},K={props:J,name:"Release.View",meta:function(){return{title:this._release?"Релиз: ".concat(this._release.names.ru," — ").concat(this._release.names.original):"Anilibrix: загрузка релиза ".concat(this.release_id)}},mixins:[y["a"]],components:{Card:V,Episodes:R["a"],Comments:X},data:function(){return{tab:0,is_loading:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(U["d"])("release",{_release:function(t){return t.data}})),{},{episodes:function(){return this.$__get(this._release,"episodes")||[]},components:function(){var t=this;return[{is:R["a"],props:{release:this._release,episodes:this.episodes,is_loading:this.is_loading},events:{"play:episode":function(e){return Object(q["b"])(t._release.id,e.id)}}},{is:X,props:{release:this._release}}]},component:function(){return this.components[this.tab]||null}}),methods:Object(a["a"])({},Object(U["b"])("release",{_getRelease:"getRelease"})),mounted:function(){window.scrollTo(0,0)},watch:{release_id:{immediate:!0,handler:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(i=document.getElementById("container"),i&&i.scrollTo(0,0),null!==e._release&&e._release.id===parseInt(t)){s.next=8;break}return e.is_loading=!0,s.next=6,e._getRelease(t);case 6:e.is_loading=!1,e.$visit(e.$route.path,e.$metaInfo.title);case 8:case"end":return s.stop()}}),s)})))()}}}},Q=K,Y=s("4e82"),Z=s("1c87"),tt=s("7560"),et=s("80d2"),st=s("58df");const it=Object(st["a"])(Z["a"],Object(Y["a"])("tabsBar"),tt["a"]);var nt=it.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...Z["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:t=>{t.keyCode===et["s"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),rt=(s("1bfb"),s("7efd")),at=s("d10f"),ot=Object(st["a"])(rt["a"],at["a"],tt["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...rt["a"].options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=rt["a"].options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let r=!1,a=!1;for(const o of s)if(o.to===i?r=!0:o.to===n&&(a=!0),r&&a)break;!r&&a&&(this.internalValue=void 0)}},render(t){const e=rt["a"].options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),lt=(s("13b3"),s("c3f0")),ct=s("afdd"),ht=s("9d26"),dt=s("604c"),ut=dt["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:lt["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...dt["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){return this.$createElement("div",{staticClass:"v-window__"+t},[this.$createElement(ct["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},on:{click:()=>{this.changedByDelimiters=!0,s()}}},[this.$createElement(ht["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),pt=ut.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...ut.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||dt["a"].options.methods.getValue.call(this,t,e)}}}),vt=s("a9ad"),ft=Object(st["a"])(vt["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),mt=s("a452"),gt=s("dc22");const bt=Object(st["a"])(vt["a"],mt["a"],tt["a"]);var wt=bt.extend().extend({name:"v-tabs",directives:{Resize:gt["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(et["f"])(this.slider.height),left:this.isReversed?void 0:Object(et["f"])(this.slider.left),right:this.isReversed?Object(et["f"])(this.slider.right):void 0,top:this.vertical?Object(et["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(et["f"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(et["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(ot,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(pt,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(ft,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],r=n.length;for(let a=0;a<r;a++){const r=n[a];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":s.push(r);break;default:i.push(r)}else i.push(r)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),xt=Object(d["a"])(Q,i,n,!1,null,null,null),yt=xt.exports;p()(xt,{VLayout:v["a"],VTab:nt,VTabs:wt});e["default"]=yt},b82e:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isAuthorized?s("v-btn",{attrs:{color:t.isInFavorite?"secondary":t.color,loading:t._is_loading},on:{click:function(e){return e.stopPropagation(),t.toggleFavorite(t.release)}}},[t.isInFavorite?s("v-icon",[t._v("mdi-star")]):s("v-icon",[t._v("mdi-star-outline")])],1):t._e()},n=[],r=s("5530"),a=s("aada"),o=s("0ea3"),l=s("2f62"),c={release:{type:Object,default:null},color:{type:String,default:null}},h={props:c,computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["d"])("favorites",{_is_loading:function(t){return t.is_loading}})),Object(l["c"])("favorites",[o["c"]])),Object(l["c"])("app/account",[a["b"]])),{},{isAuthorized:function(){return!0===this[a["b"]]},isInFavorite:function(){return this[o["c"]](this.release)}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("favorites",[o["a"],o["d"]])),{},{toggleFavorite:function(t){this.isInFavorite?this[o["d"]](t):this[o["a"]](t)}})},d=h,u=s("2877"),p=s("6544"),v=s.n(p),f=s("8336"),m=s("132d"),g=Object(u["a"])(d,i,n,!1,null,null,null),b=g.exports;v()(g,{VBtn:f["a"],VIcon:m["a"]});e["a"]=b},cc20:function(t,e,s){"use strict";s("8adc");var i=s("58df"),n=s("0789"),r=s("9d26"),a=s("a9ad"),o=s("4e82"),l=s("7560"),c=s("f2e7"),h=s("1c87"),d=s("af2b"),u=s("d9bd");e["a"]=Object(i["a"])(a["a"],d["a"],h["a"],l["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],t)},genClose(){return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(n,i),e)}})}}]);
//# sourceMappingURL=chunk-e1e79488.47788095.js.map