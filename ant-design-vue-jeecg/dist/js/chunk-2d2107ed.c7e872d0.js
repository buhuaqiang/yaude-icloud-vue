(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2107ed"],{b7ac:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"操作",width:800,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[]}],expression:"[ 'id', {rules: []} ]"}],attrs:{placeholder:"唯一识别码",disabled:"disabled"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"不起一个名字吗？"}]}],expression:"[ 'name', {rules: [{ required: true, message: '不起一个名字吗？' }] }]"}],attrs:{placeholder:"起一个名字"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[]}],expression:"[ 'status', {rules: []} ]"}]},[a("a-select-option",{attrs:{value:1}},[e._v("正常")]),a("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe",{rules:[]}],expression:"[ 'describe', { rules: [] } ]"}],attrs:{rows:5,placeholder:"..."}})],1),a("a-divider"),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.permissions,(function(t,n){return a("a-row",{key:n,attrs:{gutter:16}},[a("a-col",{attrs:{span:4}},[e._v("\n            "+e._s(t.name)+"：\n          ")]),a("a-col",{attrs:{span:20}},[t.actionsOptions.length>0?a("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkedAll},on:{change:function(a){return e.onChangeCheckAll(a,t)}}},[e._v("\n              全选\n            ")]):e._e(),a("a-checkbox-group",{attrs:{options:t.actionsOptions},on:{change:function(a){return e.onChangeCheck(t)}},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"permission.selected"}})],1)],1)})),1)],1)],1)],1)},s=[],i=a("0fea");function r(e){try{return JSON.parse(e)}catch(t){}return[]}var o=a("88bc"),l=a.n(o),c={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(e){var t=this;if(this.mdl=Object.assign({},e),this.visible=!0,this.mdl.permissions&&this.permissions){var a={};this.mdl.permissions.forEach((function(e){a[e.permissionId]=e.actionEntitySet.map((function(e){return e.action}))})),this.permissions.forEach((function(e){e.selected=a[e.id]}))}this.$nextTick((function(){t.form.setFieldsValue(l()(t.mdl,"id","name","status","describe"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,a){t||(e.confirmLoading=!0,new Promise((function(e){setTimeout((function(){return e()}),2e3)})).then((function(){e.$message.success("保存成功"),e.$emit("ok")})).catch((function(){})).finally((function(){e.confirmLoading=!1,e.close()})))}))},handleCancel:function(){this.close()},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e.target.checked?t.actionsOptions.map((function(e){return e.value})):[],indeterminate:!1,checkedAll:e.target.checked})},loadPermissions:function(){var e=this;Object(i["e"])().then((function(t){var a=t.result;e.permissions=a.map((function(e){var t=r(e.actionData);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map((function(e){return{label:e.describe,value:e.action}})),e}))}))}}},d=c,u=a("2877"),m=Object(u["a"])(d,n,s,!1,null,"46bbfa96",null);t["default"]=m.exports}}]);