(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c89f2f6c"],{"02d5":function(e,t,a){"use strict";var i=a("249e"),l=a.n(i);l.a},"249e":function(e,t,a){},"39a5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",prop:"name",required:"",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[a("a-select",{attrs:{placeholder:"请选择性别"},model:{value:e.model.sex,callback:function(t){e.$set(e.model,"sex",t)},expression:"model.sex"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",prop:"idcard",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit},model:{value:e.model.idcard,callback:function(t){e.$set(e.model,"idcard",t)},expression:"model.idcard"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[a("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",prop:"telphone",hasFeedback:""}},[a("a-input",{attrs:{readOnly:e.disableSubmit},model:{value:e.model.telphone,callback:function(t){e.$set(e.model,"telphone",t)},expression:"model.telphone"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""}},[a("a-input",{attrs:{disabled:"disabled"},model:{value:e.model.orderId,callback:function(t){e.$set(e.model,"orderId",t)},expression:"model.orderId"}})],1)],1)],1):e._e()],1)},l=[],s=a("0fea"),d=a("2b0e"),o=a("9fb0"),r=a("e610"),n={name:"JeecgOrderCustomerModal",components:{JImageUpload:r["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{name:[{required:!0,message:"请输入客户姓名!"}],telphone:[{validator:this.validateMobile}],idcard:[{validator:this.validateIdCard}]}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=d["default"].ls.get(o["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?this.edit({orderId:e},""):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,setTimeout((function(){a.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[],this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var i="",l="";e.model.id?(i+=e.url.edit,l="put"):(i+=e.url.add,l="post");var d=Object.assign({},e.model);""!=e.fileList?d.idcardPic=e.fileList:d.idcardPic="",Object(s["h"])(i,d,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")},validateIdCard:function(e,t,a){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?a():a("您的身份证号码格式不正确!")}}},c=n,m=(a("02d5"),a("2877")),u=Object(m["a"])(c,i,l,!1,null,"e86d1f2e",null);t["default"]=u.exports}}]);