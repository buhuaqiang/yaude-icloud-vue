(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-289539c8"],{2914:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"user-login-other"},[n("span",[t._v("其他登录方式")]),n("a",{attrs:{title:"github"},on:{click:function(i){return t.onThirdLogin("github")}}},[n("a-icon",{staticClass:"item-icon",attrs:{type:"github"}})],1),n("a",{attrs:{title:"企业微信"},on:{click:function(i){return t.onThirdLogin("wechat_enterprise")}}},[n("icon-font",{staticClass:"item-icon",attrs:{type:"icon-qiyeweixin3"}})],1),n("a",{attrs:{title:"钉钉"},on:{click:function(i){return t.onThirdLogin("dingtalk")}}},[n("a-icon",{staticClass:"item-icon",attrs:{type:"dingding"}})],1),n("a",{attrs:{title:"微信"},on:{click:function(i){return t.onThirdLogin("wechat_open")}}},[n("a-icon",{staticClass:"item-icon",attrs:{type:"wechat"}})],1)]),n("a-modal",{attrs:{title:"请输入密码",visible:t.thirdPasswordShow},on:{ok:t.thirdLoginCheckPassword,cancel:t.thirdLoginNoPassword}},[n("a-input-password",{attrs:{placeholder:"请输入密码"},model:{value:t.thirdLoginPassword,callback:function(i){t.thirdLoginPassword=i},expression:"thirdLoginPassword"}})],1),n("a-modal",{class:"ant-modal-confirm",attrs:{footer:null,closable:!1,visible:t.thirdConfirmShow}},[n("div",{staticClass:"ant-modal-confirm-body-wrapper"},[n("div",{staticClass:"ant-modal-confirm-body"},[n("a-icon",{staticStyle:{color:"#faad14"},attrs:{type:"question-circle"}}),n("span",{staticClass:"ant-modal-confirm-title"},[t._v("提示")]),n("div",{staticClass:"ant-modal-confirm-content"},[t._v("\n          已有同名账号存在,请确认是否绑定该账号？\n        ")])],1),n("div",{staticClass:"ant-modal-confirm-btns"},[n("a-button",{attrs:{loading:t.thirdCreateUserLoding},on:{click:t.thirdLoginUserCreate}},[t._v("创建新账号")]),n("a-button",{attrs:{type:"primary"},on:{click:t.thirdLoginUserBind}},[t._v("确认绑定")])],1)])]),n("a-modal",{class:"ant-modal-confirm",attrs:{visible:t.bindingPhoneModal}},[n("template",{slot:"footer"},[n("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.thirdHandleOk}},[t._v("\n        确定\n      ")])],1),n("div",{staticClass:"ant-modal-confirm-body-wrapper"},[n("a-form-model-item",[n("span",[t._v("绑定手机号")])]),n("a-form-model-item",[n("a-input",{attrs:{size:"large",type:"text",placeholder:"手机号"},model:{value:t.thirdPhone,callback:function(i){t.thirdPhone=i},expression:"thirdPhone"}},[n("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),n("a-row",{attrs:{gutter:16}},[n("a-col",{staticClass:"gutter-row",attrs:{span:16}},[n("a-form-model-item",[n("a-input",{attrs:{size:"large",type:"text",placeholder:"请输入验证码"},model:{value:t.thirdCaptcha,callback:function(i){t.thirdCaptcha=i},expression:"thirdCaptcha"}},[n("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),n("a-col",{staticClass:"gutter-row",attrs:{span:8}},[n("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:t.thirdState.smsSendBtn},domProps:{textContent:t._s(t.thirdState.smsSendBtn?t.thirdState.time+" s":"获取验证码")},on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.getThirdCaptcha(i)}}})],1)],1)],1)],2)],1)},o=[],r=n("2f62"),s=n("0fea"),a=n("ca00");function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function c(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?c(Object(n),!0).forEach((function(i){l(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}function l(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var u={data:function(){return{thirdLoginInfo:"",thirdPasswordShow:!1,thirdLoginPassword:"",thirdLoginUser:"",thirdConfirmShow:!1,thirdCreateUserLoding:!1,thirdLoginState:!1,bindingPhoneModal:!1,thirdPhone:"",thirdCaptcha:"",thirdState:{time:30,smsSendBtn:!1},thirdUserUuid:"",thirdType:"",url:{bindingThirdPhone:"/sys/thirdLogin/bindingThirdPhone"}}},created:function(){},methods:h(h({},Object(r["b"])(["ThirdLogin"])),{},{onThirdLogin:function(t){var i=window._CONFIG["domianURL"]+"/sys/thirdLogin/render/".concat(t);window.open(i,"login ".concat(t),"height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no");var n=this;n.thirdType=t,n.thirdLoginInfo="",n.thirdLoginState=!1;var e=function(t){var i=t.data;if("string"===typeof i)if("登录失败"===i)n.$message.warning(i);else if(i.includes("绑定手机号")){n.bindingPhoneModal=!0;var e=i.split(",");n.thirdUserUuid=e[1]}else n.doThirdLogin(i);else"object"===d(i)?!0===i["isObj"]&&(n.thirdConfirmShow=!0,n.thirdLoginInfo=h({},i)):n.$message.warning("不识别的信息传递")};window.addEventListener("message",e,!1)},doThirdLogin:function(t){var i=this;if(!1===this.thirdLoginState){this.thirdLoginState=!0;var n={};n.thirdType=this.thirdType,n.token=t,this.ThirdLogin(n).then((function(t){t.success?i.loginSuccess():i.requestFailed(t)}))}},thirdLoginUserBind:function(){this.thirdLoginPassword="",this.thirdLoginUser=this.thirdLoginInfo.uuid,this.thirdConfirmShow=!1,this.thirdPasswordShow=!0},thirdLoginUserCreate:function(){var t=this;this.thirdCreateUserLoding=!0,this.thirdLoginInfo["suffix"]=parseInt(98*Math.random()+1),Object(s["i"])("/sys/third/user/create",this.thirdLoginInfo).then((function(i){if(i.success){var n=i.result;t.doThirdLogin(n),t.thirdConfirmShow=!1}else t.$message.warning(i.message)})).finally((function(){t.thirdCreateUserLoding=!1}))},thirdLoginCheckPassword:function(){var t=this,i=Object.assign({},this.thirdLoginInfo,{password:this.thirdLoginPassword});Object(s["i"])("/sys/third/user/checkPassword",i).then((function(i){i.success?(t.thirdLoginNoPassword(),t.doThirdLogin(i.result)):t.$message.warning(i.message)}))},thirdLoginNoPassword:function(){this.thirdPasswordShow=!1,this.thirdLoginPassword="",this.thirdLoginUser=""},getThirdCaptcha:function(){var t=this,i=this;if(this.thirdPhone){this.thirdState.smsSendBtn=!0;var n=window.setInterval((function(){i.thirdState.time--<=0&&(i.thirdState.time=30,i.thirdState.smsSendBtn=!1,window.clearInterval(n))}),1e3),e=this.$message.loading("验证码发送中..",0),o={};o.mobile=this.thirdPhone,o.smsmode="0",Object(s["i"])("/sys/sms",o).then((function(i){i.success||(setTimeout(e,0),t.cmsFailed(i.message)),setTimeout(e,500)})).catch((function(o){setTimeout(e,1),clearInterval(n),i.thirdState.time=30,i.thirdState.smsSendBtn=!1,t.requestFailed(o)}))}else i.cmsFailed("请输入手机号")},thirdHandleOk:function(){var t=this,i={};i.mobile=this.thirdPhone,i.captcha=this.thirdCaptcha,i.thirdUserUuid=this.thirdUserUuid,Object(s["i"])(this.url.bindingThirdPhone,i).then((function(i){i.success?(t.bindingPhoneModal=!1,t.doThirdLogin(i.result)):t.$message.warning(i.message)}))},loginSuccess:function(){this.$router.push({path:"/dashboard/analysis"}).catch((function(){})),this.$notification.success({message:"欢迎",description:"".concat(Object(a["o"])(),"，欢迎回来")})},cmsFailed:function(t){this.$notification["error"]({message:"登录失败",description:t,duration:4})},requestFailed:function(t){this.$notification["error"]({message:"登录失败",description:((t.response||{}).data||{}).message||t.message||"请求出现错误，请稍后再试",duration:4}),this.loginBtn=!1}})},f=n("0c63"),g=f["a"].createFromIconfontCN({scriptUrl:"/cdn/font-icon/font_2316098_umqusozousr.js"}),m={name:"thirdLogin",mixins:[u],components:{IconFont:g}},p=m,b=(n("8cea"),n("2877")),w=Object(b["a"])(p,e,o,!1,null,"0d925ab8",null);i["default"]=w.exports},"8cea":function(t,i,n){"use strict";var e=n("e5aa"),o=n.n(e);o.a},e5aa:function(t,i,n){}}]);