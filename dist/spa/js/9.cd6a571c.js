(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5f7c":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex flex-center "},[o("div",{staticClass:"row flex-center",staticStyle:{width:"100%"}},[o("q-spinner-dots",{staticStyle:{margin:"auto auto"},attrs:{size:"xl",color:"secondary"}})],1),o("img",{staticStyle:{"margin-top":"-470px"},attrs:{alt:"Snack Box",width:"128px",src:"statics/logo.png"}})])},a=[],n=(o("f68b"),o("bc3a"),o("4328"),{name:"PageName",data:function(){return{log:""}},created:function(){var t=this;if(this.$store.state.user_info.access_token)t.log="请使用微信登录";else{var e=window.navigator.userAgent.toLowerCase();console.log(e),"micromessenger"==e.match(/MicroMessenger/i)&&t.login()}},methods:{login:function(){var t=this;this.$api.user.getCode(this.$store.state.code,this.$store.state.shop_id).then((function(e){console.log(e),t.$store.commit("getShopAddress",e.data.data.shopAddress),t.$store.commit("getCreditScore",e.data.data.creditScore),t.$store.commit("getUserInfo",e.data.data.userInfo),t.$store.commit("getUserPermission",e.data.data.permission),t.$api.shop.getBoxItems(t.$store.state.user_info.access_token).then((function(e){t.$store.commit("getBoxItems",e.data.data.Info.filter((function(t){return(null===t||void 0===t?void 0:t.sortPageItem.length)>0}))),t.$router.push("/")}))})).catch((function(t){console.log(t)}))}}}),r=n,i=o("4023"),c=o("9989"),l=o("8380"),d=o("b2a3"),g=o.n(d),u=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=u.exports;g()(u,"components",{QPage:c["a"],QSpinnerDots:l["a"]})}}]);