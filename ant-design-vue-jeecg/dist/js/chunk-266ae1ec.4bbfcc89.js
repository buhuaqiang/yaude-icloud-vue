(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266ae1ec","chunk-85e7fd2a","chunk-8911c64c","chunk-13c226cb","chunk-d48122ca"],{5030:function(t,e,s){},5171:function(t,e,s){},"5d58":function(t,e,s){},8859:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-card",{staticStyle:{width:"130%","text-align":"center","margin-left":"-10%"},attrs:{bordered:!1}},[s("a-steps",{staticClass:"steps",attrs:{current:t.currentTab}},[s("a-step",{attrs:{title:"手机验证"}}),s("a-step",{attrs:{title:"更改密码"}}),s("a-step",{attrs:{title:"完成"}})],1),s("div",{staticClass:"content"},[0===t.currentTab?s("step2",{on:{nextStep:t.nextStep}}):t._e(),1===t.currentTab?s("step3",{attrs:{userList:t.userList},on:{nextStep:t.nextStep,prevStep:t.prevStep}}):t._e(),2===t.currentTab?s("step4",{attrs:{userList:t.userList},on:{prevStep:t.prevStep,finish:t.finish}}):t._e()],1)],1)},r=[],n=s("a73d"),o=s("977f"),i=s("b23d"),l={name:"Alteration",components:{Step2:n["default"],Step3:o["default"],Step4:i["default"]},data:function(){return{description:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",currentTab:0,userList:{},form:null}},methods:{nextStep:function(t){this.userList=t,this.currentTab<4&&(this.currentTab+=1)},prevStep:function(t){this.userList=t,this.currentTab>0&&(this.currentTab-=1)},finish:function(){this.currentTab=0}}},c=l,u=(s("c4f8"),s("2877")),p=Object(u["a"])(c,a,r,!1,null,"8733cc9e",null);e["default"]=p.exports},"8ef0":function(t,e,s){"use strict";var a=s("d1e8"),r=s.n(a);r.a},"977f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-form-model",{ref:"form",staticClass:"password-retrieval-form",attrs:{model:t.model,rules:t.validatorRules}},[s("a-form-model-item",t._b({attrs:{label:"账号名"}},"a-form-model-item",t.layout,!1),[s("a-input",{attrs:{type:"text",value:t.accountName,disabled:""}})],1),s("a-form-model-item",t._b({staticClass:"stepFormText",attrs:{prop:"password",label:"新密码"}},"a-form-model-item",t.layout,!1),[s("a-input",{attrs:{type:"password",autocomplete:"false"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),s("a-form-model-item",t._b({staticClass:"stepFormText",attrs:{prop:"confirmPassword",label:"确认密码"}},"a-form-model-item",t.layout,!1),[s("a-input",{attrs:{type:"password",autocomplete:"false"},model:{value:t.model.confirmPassword,callback:function(e){t.$set(t.model,"confirmPassword",e)},expression:"model.confirmPassword"}})],1),s("a-form-model-item",{attrs:{wrapperCol:{span:19,offset:5}}},[s("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")]),s("a-button",{staticStyle:{"margin-left":"20px"},attrs:{loading:t.loading,type:"primary"},on:{click:t.nextStep}},[t._v("提交")])],1)],1)],1)},r=[],n=s("0fea"),o={name:"Step3",props:["userList"],data:function(){return{model:{},layout:{labelCol:{span:5},wrapperCol:{span:19}},loading:!1,accountName:this.userList.username,validatorRules:{password:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!!"}],confirmPassword:[{required:!0,message:"密码不能为空!"},{validator:this.handlePasswordCheck}]}}},methods:{nextStep:function(){var t=this;t.loading=!0,t.$refs["form"].validate((function(e){if(!0===e){var s={username:t.userList.username,password:t.model.password,smscode:t.userList.smscode,phone:t.userList.phone};Object(n["c"])("/sys/user/passwordChange",s).then((function(e){if(e.success){var s={username:t.userList.username};setTimeout((function(){t.$emit("nextStep",s)}),1500)}else t.passwordFailed(e.message),t.loading=!1}))}else t.loading=!1}))},prevStep:function(){this.$emit("prevStep",this.userList)},handlePasswordCheck:function(t,e,s){var a=this.model["password"];e&&a&&e.trim()!==a.trim()&&s(new Error("两次密码不一致")),s()},passwordFailed:function(t){this.$notification["error"]({message:"更改密码失败",description:t,duration:4})}}},i=o,l=(s("f55e"),s("2877")),c=Object(l["a"])(i,a,r,!1,null,"3c0160d7",null);e["default"]=c.exports},"9a3d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result"},[s("div",[s("a-icon",{class:[t.isSuccess?"success":"error","icon"],attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.title?s("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.description?s("div",{staticClass:"description"},[t._v(t._s(t.description))]):t._e(),t.content?s("div",{staticClass:"content"},[t._t("default")],2):t._e(),s("div",{staticClass:"action"},[t._t("action")],2)])},r=[],n={name:"Result",props:{isSuccess:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},content:{type:Boolean,default:!0}}},o=n,i=(s("fce6"),s("2877")),l=Object(i["a"])(o,a,r,!1,null,"5cd17224",null);e["default"]=l.exports},"9b1f":function(t,e,s){},a73d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-form-model",{ref:"form",staticClass:"password-retrieval-form",attrs:{model:t.model,rules:t.validatorRules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextStep(e)}}},[s("a-form-model-item",{attrs:{label:"手机",required:"",prop:"phone",labelCol:{span:5},wrapperCol:{span:19}}},[s("a-row",{attrs:{gutter:16}},[s("a-col",{staticClass:"gutter-row",attrs:{span:20}},[s("a-input",{attrs:{type:"text",autocomplete:"false",placeholder:"请输入手机号"},model:{value:t.model.phone,callback:function(e){t.$set(t.model,"phone",e)},expression:"model.phone"}},[s("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"phone"},slot:"prefix"})],1)],1)],1)],1),t.show?s("a-form-model-item",{attrs:{required:"",prop:"captcha",label:"验证码",labelCol:{span:5},wrapperCol:{span:19}}},[s("a-row",{attrs:{gutter:16}},[s("a-col",{staticClass:"gutter-row",attrs:{span:12}},[s("a-input",{attrs:{type:"text",placeholder:"手机短信验证码"},model:{value:t.model.captcha,callback:function(e){t.$set(t.model,"captcha",e)},expression:"model.captcha"}},[s("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"code"},slot:"prefix"})],1)],1),s("a-col",{staticClass:"gutter-row",attrs:{span:8}},[s("a-button",{attrs:{tabindex:"-1",size:"default",disabled:t.state.smsSendBtn},domProps:{textContent:t._s(t.state.smsSendBtn?t.state.time+" s":"获取验证码")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.getCaptcha(e)}}})],1)],1)],1):t._e(),s("a-form-model-item",{attrs:{wrapperCol:{span:19,offset:5}}},[s("router-link",{staticStyle:{float:"left","line-height":"40px"},attrs:{to:{name:"login"}}},[t._v("使用已有账户登录")]),s("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")])],1)],1)],1)},r=[],n=s("0fea"),o={name:"Step2",props:["userList"],data:function(){return{model:{},loading:!1,dropList:"0",captcha:"",show:!0,state:{time:60,smsSendBtn:!1},formLogin:{captcha:"",mobile:""},validatorRules:{phone:[{required:!0,message:"请输入手机号码!"},{validator:this.validatePhone}],captcha:[{required:!0,message:"请输入短信验证码!"}]}}},computed:{},methods:{nextStep:function(){var t=this,e=this;e.loading=!0,this.$refs["form"].validate((function(s){if(1==s){var a={phone:t.model.phone,smscode:t.model.captcha};Object(n["i"])("/sys/user/phoneVerification",a).then((function(s){if(s.success){var r={username:s.result.username,phone:a.phone,smscode:s.result.smscode};setTimeout((function(){e.$emit("nextStep",r)}),0)}else t.cmsFailed(s.message)}))}}))},getCaptcha:function(t){t.preventDefault();var e=this;e.$refs["form"].validateField("phone",(function(t){if(t)e.cmsFailed(t);else{e.state.smsSendBtn=!0;var s=window.setInterval((function(){e.state.time--<=0&&(e.state.time=60,e.state.smsSendBtn=!1,window.clearInterval(s))}),1e3),a=e.$message.loading("验证码发送中..",0),r={mobile:e.model.phone,smsmode:"2"};Object(n["i"])("/sys/sms",r).then((function(t){t.success||(setTimeout(a,1),e.cmsFailed(t.message)),setTimeout(a,500)}))}}))},cmsFailed:function(t){this.$notification["error"]({message:"验证错误",description:t,duration:4})},handleChangeSelect:function(t){var e=this;0==t?(e.dropList="0",e.show=!0):(e.dropList="1",e.show=!1)},validatePhone:function(t,e,s){if(e){var a=/^[1][3,4,5,7,8][0-9]{9}$/;a.test(e)?s():s("请输入正确的手机号")}else s()}}},i=o,l=(s("8ef0"),s("2877")),c=Object(l["a"])(i,a,r,!1,null,"14343278",null);e["default"]=c.exports},b23d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-form",{staticStyle:{margin:"40px auto 0"}},[s("result",{attrs:{title:"更改密码成功","is-success":!0}},[s("div",{staticClass:"toLogin"},[s("h3",[t._v("将在"),s("span",[t._v(t._s(t.time))]),t._v("秒后返回登录页面.")])])])],1)],1)},r=[],n=s("9a3d"),o={name:"Step4",props:["userList"],components:{Result:n["default"]},data:function(){return{loading:!1,time:0}},methods:{countDown:function(){var t=this;t.time--}},mounted:function(){var t=this;t.time=5,setInterval(t.countDown,1e3)},watch:{time:function(t,e){if(0==t){var s={username:this.userList.username};this.$router.push({name:"login",params:s})}}}},i=o,l=(s("d8b8"),s("2877")),c=Object(l["a"])(i,a,r,!1,null,"0ac9a29e",null);e["default"]=c.exports},c4f8:function(t,e,s){"use strict";var a=s("5d58"),r=s.n(a);r.a},d1e8:function(t,e,s){},d8b8:function(t,e,s){"use strict";var a=s("5171"),r=s.n(a);r.a},f55e:function(t,e,s){"use strict";var a=s("9b1f"),r=s.n(a);r.a},fce6:function(t,e,s){"use strict";var a=s("5030"),r=s.n(a);r.a}}]);