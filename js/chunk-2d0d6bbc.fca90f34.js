(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6bbc"],{"748a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search",{staticClass:"mb-2",model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e.is_loading?n("loader"):n("results",e._b({on:{click:function(t){return e.toRelease(t.id)}}},"results",{items:e.items},!1))],1)},a=[],s=(n("96cf"),n("1da1")),i=n("5530"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",e._b({attrs:{solo:"",clearable:"","hide-details":"",placeholder:"Введите название релиза ...",autocomplete:"off"},on:{input:function(t){return e.$emit("input",t)}}},"v-text-field",{value:e.value},!1))},c=[],o={value:{type:String,default:null}},u={props:o},m=u,p=n("2877"),d=n("6544"),h=n.n(d),v=n("8654"),f=Object(p["a"])(m,l,c,!1,null,null,null),b=f.exports;h()(f,{VTextField:v["a"]});var w=b,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-skeleton-loader",{attrs:{type:"list-item-avatar-two-line@10"}})],1)},k=[],g=n("31292"),x={},$=Object(p["a"])(x,_,k,!1,null,null,null),R=$.exports;h()($,{VSkeletonLoader:g["a"]});var V=R,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items&&e.items.length>0?n("v-list",[e._l(e.items,(function(t,r){return[r>0?n("v-divider",{key:"d:"+r}):e._e(),n("v-list-item",{key:r,on:{click:function(n){return e.$emit("click",t)}}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.poster}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-pre-wrap",domProps:{textContent:e._s(t.names.ru)}}),n("v-list-item-subtitle",{staticClass:"text-pre-wrap",domProps:{textContent:e._s(t.names.original)}})],1)],1)]}))],2):e._e()},y=[],C={items:{type:Array,default:null}},L={props:C},O=L,q=n("ce7e"),I=n("adda"),E=n("8860"),S=n("da13"),T=n("8270"),A=n("5d23"),J=Object(p["a"])(O,j,y,!1,null,null,null),P=J.exports;h()(J,{VDivider:q["a"],VImg:I["a"],VList:E["a"],VListItem:S["a"],VListItemAvatar:T["a"],VListItemContent:A["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"]});var D=P,F=n("bc3a"),z=n.n(F),B=n("b047c"),G=n.n(B),H=n("3513"),K=n("1330"),M=n("882d"),N=n("12fe"),Q={name:"Search",request:null,components:{Search:w,Loader:V,Results:D},data:function(){return{items:[],search:null,is_loading:!1}},methods:Object(i["a"])(Object(i["a"])({},{toRelease:M["b"]}),{},{getReleases:G()(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.is_loading=!0,this.$options.request&&this.$options.request.cancel(),this.$options.request=z.a.CancelToken.source(),e.next=6,(new H["a"]).searchReleases(t,{cancelToken:this.$options.request.token});case 6:n=e.sent,this.items=(new K["a"]).fetchCollection(n||[]),e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),N["a"].emitError("Произошла ошибка во время поиска релизов"),e.t0;case 14:return e.prev=14,this.is_loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[0,10,14,17]])})));return function(t){return e.apply(this,arguments)}}(),1e3)}),watch:{search:{handler:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e&&e.length>2?(t.getReleases(e),t.$visit("/search?query=".concat(e),"Поиск релиза")):t.items=[];case 1:case"end":return n.stop()}}),n)})))()}}}},U=Q,W=Object(p["a"])(U,r,a,!1,null,null,null),X=W.exports;t["default"]=X}}]);
//# sourceMappingURL=chunk-2d0d6bbc.fca90f34.js.map