(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aa07c9a","chunk-64ea1b29","chunk-b124276a","chunk-579fdc84"],{"1edb":function(e,t,a){},"39f6":function(e,t,a){"use strict";var s=a("ec4e"),l=a.n(s);l.a},"418f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"100%",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:e.drawerWidth,placement:"right",closable:!0,visible:e.visible},on:{close:e.handleCancel}},[a("template",{slot:"title"},[a("div",{staticStyle:{width:"100%"}},[a("span",[e._v(e._s(e.title))]),a("span",{staticStyle:{display:"inline-block",width:"calc(100% - 51px)","padding-right":"10px","text-align":"right"}},[a("a-button",{staticStyle:{height:"20px",width:"20px",border:"0px"},attrs:{icon:"appstore"},on:{click:e.toggleScreen}})],1)])]),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[a("a-input",{attrs:{placeholder:"请输入用户账号",readOnly:!!e.model.id},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e.model.id?e._e():[a("a-form-model-item",{attrs:{label:"登录密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"password"}},[a("a-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),a("a-form-model-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"confirmpassword"}},[a("a-input",{attrs:{type:"password",placeholder:"请重新输入登录密码"},on:{blur:e.handleConfirmBlur},model:{value:e.model.confirmpassword,callback:function(t){e.$set(e.model,"confirmpassword",t)},expression:"model.confirmpassword"}})],1)],a("a-form-model-item",{attrs:{label:"用户姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"realname"}},[a("a-input",{attrs:{placeholder:"请输入用户姓名"},model:{value:e.model.realname,callback:function(t){e.$set(e.model,"realname",t)},expression:"model.realname"}})],1),a("a-form-model-item",{attrs:{label:"工号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"workNo"}},[a("a-input",{attrs:{placeholder:"请输入工号"},model:{value:e.model.workNo,callback:function(t){e.$set(e.model,"workNo",t)},expression:"model.workNo"}})],1),a("a-form-model-item",{attrs:{label:"职务",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-position",{attrs:{placeholder:"请选择职务",multiple:!1},model:{value:e.model.post,callback:function(t){e.$set(e.model,"post",t)},expression:"model.post"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.roleDisabled,expression:"!roleDisabled"}],attrs:{label:"角色分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.rolesOptions,placeholder:"请选择角色"},model:{value:e.model.selectedroles,callback:function(t){e.$set(e.model,"selectedroles",t)},expression:"model.selectedroles"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"部门分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-depart",{attrs:{multi:!0,backDepart:!0,treeOpera:!0},on:{back:e.backDepartInfo},model:{value:e.model.selecteddeparts,callback:function(t){e.$set(e.model,"selecteddeparts",t)},expression:"model.selecteddeparts"}},[e._v(">")])],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"租户分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.tenantsOptions,placeholder:"请选择租户"},model:{value:e.model.relTenantIds,callback:function(t){e.$set(e.model,"relTenantIds",t)},expression:"model.relTenantIds"}})],1),a("a-form-model-item",{attrs:{label:"身份",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.identityChange},model:{value:e.model.userIdentity,callback:function(t){e.$set(e.model,"userIdentity",t)},expression:"model.userIdentity"}},[a("a-radio",{attrs:{value:1}},[e._v("普通用户")]),a("a-radio",{attrs:{value:2}},[e._v("上级")])],1)],1),1==e.departIdShow?a("a-form-model-item",{attrs:{label:"负责部门",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.nextDepartOptions,placeholder:"请选择负责部门"},model:{value:e.model.departIds,callback:function(t){e.$set(e.model,"departIds",t)},expression:"model.departIds"}})],1):e._e(),a("a-form-model-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-image-upload",{staticClass:"avatar-uploader",attrs:{text:"上传"},model:{value:e.model.avatar,callback:function(t){e.$set(e.model,"avatar",t)},expression:"model.avatar"}})],1),a("a-form-model-item",{attrs:{label:"生日",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择生日",format:e.dateFormat,getCalendarContainer:function(e){return e.parentNode}},model:{value:e.model.birthday,callback:function(t){e.$set(e.model,"birthday",t)},expression:"model.birthday"}})],1),a("a-form-model-item",{attrs:{label:"性别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{placeholder:"请选择性别",getPopupContainer:function(e){return e.parentNode}},model:{value:e.model.sex,callback:function(t){e.$set(e.model,"sex",t)},expression:"model.sex"}},[a("a-select-option",{attrs:{value:1}},[e._v("男")]),a("a-select-option",{attrs:{value:2}},[e._v("女")])],1)],1),a("a-form-model-item",{attrs:{label:"邮箱",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"email"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),a("a-form-model-item",{attrs:{label:"手机号码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"phone"}},[a("a-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),a("a-form-model-item",{attrs:{label:"座机",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"telephone"}},[a("a-input",{attrs:{placeholder:"请输入座机"},model:{value:e.model.telephone,callback:function(t){e.$set(e.model,"telephone",t)},expression:"model.telephone"}})],1),a("a-form-model-item",{attrs:{label:"工作流引擎",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择是否同步工作流引擎",type:"radio",dictCode:"activiti_sync"},model:{value:e.model.activitiSync,callback:function(t){e.$set(e.model,"activitiSync",t)},expression:"model.activitiSync"}})],1)],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disableSubmit,expression:"!disableSubmit"}],staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.handleCancel}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],2)},l=[],r=a("c1df"),i=a.n(r),o=a("2b0e"),n=a("9fb0"),d=a("0fea"),c=a("4ec3"),u=a("c82c"),m={name:"UserModal",components:{},data:function(){return{departDisabled:!1,roleDisabled:!1,modalWidth:800,drawerWidth:700,modaltoggleFlag:!0,confirmDirty:!1,userId:"",disableSubmit:!1,dateFormat:"YYYY-MM-DD",validatorRules:{username:[{required:!0,message:"请输入用户账号!"},{validator:this.validateUsername}],password:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword,trigger:"change"}],confirmpassword:[{required:!0,message:"请重新输入登录密码!"},{validator:this.compareToFirstPassword}],realname:[{required:!0,message:"请输入用户名称!"}],phone:[{required:!0,message:"请输入手机号!"},{validator:this.validatePhone}],email:[{validator:this.validateEmail}],roles:{},workNo:[{required:!0,message:"请输入工号"},{validator:this.validateWorkNo}],telephone:[{pattern:/^0\d{2,3}-[1-9]\d{6,7}$/,message:"请输入正确的座机号码"}]},departIdShow:!1,title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},uploadLoading:!1,confirmLoading:!1,headers:{},url:{fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",userWithDepart:"/sys/user/userDepartList",userId:"/sys/user/generateUserId",syncUserByUserName:"/act/process/extActProcess/doSyncUserByUserName",queryTenantList:"/sys/tenant/queryList"},tenantsOptions:[],rolesOptions:[],nextDepartOptions:[]}},created:function(){var e=o["default"].ls.get(n["a"]);this.headers={"X-Access-Token":e},this.initRoleList(),this.initTenantList()},computed:{uploadAction:function(){return this.url.fileUpload}},methods:{add:function(){this.refresh(),this.edit({activitiSync:"1",userIdentity:1})},edit:function(e){var t=this;t.visible=!0,this.resetScreenSize(),t.userId=e.id,t.model=Object.assign({},{selectedroles:"",selecteddeparts:""},e),2==this.model.userIdentity?this.departIdShow=!0:this.departIdShow=!1,e.hasOwnProperty("id")&&(t.getUserRoles(e.id),t.getUserDeparts(e.id))},isDisabledAuth:function(e){return Object(u["a"])(e)},toggleScreen:function(){this.modaltoggleFlag?this.modalWidth=window.innerWidth:this.modalWidth=800,this.modaltoggleFlag=!this.modaltoggleFlag},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:700},initTenantList:function(){var e=this;Object(d["c"])(this.url.queryTenantList).then((function(t){t.success&&(e.tenantsOptions=t.result.map((function(e,t,a){var s={label:e.name,value:e.id+""};return s})))}))},initRoleList:function(){var e=this;Object(c["R"])().then((function(t){t.success&&(e.rolesOptions=t.result.map((function(e,t,a){var s={label:e.roleName,value:e.id};return s})))}))},getUserRoles:function(e){var t=this;Object(c["Q"])({userid:e}).then((function(e){e.success&&(t.model.selectedroles=e.result.join(","))}))},getUserDeparts:function(e){var t=this;Object(d["c"])(t.url.userWithDepart,{userId:e}).then((function(e){if(e.success){for(var a=[],s=[],l=0;l<e.result.length;l++)s.push(e.result[l].key),a.push({value:e.result[l].key,label:e.result[l].title});t.model.selecteddeparts=s.join(","),t.nextDepartOptions=a}}))},backDepartInfo:function(e){this.model.departIds=this.model.selecteddeparts,this.nextDepartOptions=e.map((function(e,t,a){var s={label:e.text,value:e.value+""};return s}))},refresh:function(){this.userId="",this.nextDepartOptions=[],this.departIdShow=!1},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.nextDepartOptions=[],this.departIdShow=!1,this.$refs.form.resetFields()},moment:i.a,handleSubmit:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;var s;t.confirmLoading=!0,2!==e.model.userIdentity&&(e.model.departIds=""),e.model.id?s=Object(c["r"])(e.model):(e.model.id=e.userId,s=Object(c["e"])(e.model)),s.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var s=this.model.confirmpassword;t&&s&&t!==s&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&this.$refs.form.validateField(["confirmpassword"]),a()},compareToFirstPassword:function(e,t,a){t&&t!==this.model.password?a("两次输入的密码不一样！"):a()},validatePhone:function(e,t,a){if(t)if(new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(t)){var s={tableName:"sys_user",fieldName:"phone",fieldVal:t,dataId:this.userId};Object(c["m"])(s).then((function(e){e.success?a():a("手机号已存在!")}))}else a("请输入正确格式的手机号码!");else a()},validateEmail:function(e,t,a){if(t)if(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(t)){var s={tableName:"sys_user",fieldName:"email",fieldVal:t,dataId:this.userId};Object(c["m"])(s).then((function(e){e.success?a():a("邮箱已存在!")}))}else a("请输入正确格式的邮箱!");else a()},validateUsername:function(e,t,a){var s={tableName:"sys_user",fieldName:"username",fieldVal:t,dataId:this.userId};Object(c["m"])(s).then((function(e){e.success?a():a("用户名已存在!")}))},validateWorkNo:function(e,t,a){var s={tableName:"sys_user",fieldName:"work_no",fieldVal:t,dataId:this.userId};Object(c["m"])(s).then((function(e){e.success?a():a("工号已存在!")}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},identityChange:function(e){1===e.target.value?this.departIdShow=!1:this.departIdShow=!0}}},p=m,h=(a("98af"),a("2877")),f=Object(h["a"])(p,s,l,!1,null,"1e1a12d2",null);t["default"]=f.exports},"553e":function(e,t,a){},5859:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"-15px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAddUserDepart}},[e._v("添加已有用户")]),a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建用户")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          取消关联\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDeptRole(s)}}},[e._v("部门角色")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("用户详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定取消与选中部门关联吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("取消关联")])])],1)],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("Select-User-Modal",{ref:"selectUserModal",on:{selectFinished:e.selectOK}}),a("dept-role-user-modal",{ref:"deptRoleUser"})],1)},l=[],r=a("b65a"),i=a("0fea"),o=a("b3c4"),n=a("418f"),d=a("8034"),c={name:"DeptUserInfo",mixins:[r["a"]],components:{DeptRoleUserModal:d["default"],SelectUserModal:o["default"],UserModal:n["default"]},data:function(){return{description:"用户信息",currentDeptId:"",currentDept:{},columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"性别",align:"center",dataIndex:"sex_dictText"},{title:"电话",align:"center",dataIndex:"phone"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:150}],url:{list:"/sys/user/departUserList",edit:"/sys/user/editSysDepartWithUser",delete:"/sys/user/deleteUserInDepart",deleteBatch:"/sys/user/deleteUserInDepartBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.loadData(1)},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.depId=this.currentDeptId,Object(i["c"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.currentDeptId)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认取消",content:"是否取消用户与选中部门的关联?",onOk:function(){Object(i["a"])(a.url.deleteBatch,{depId:a.currentDeptId,userIds:e}).then((function(e){e.success?(a.$message.success("删除用户与选中部门关系成功！"),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}})}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){var t=this;if(this.url.delete)if(this.currentDeptId){var a=this;Object(i["a"])(a.url.delete,{depId:this.currentDeptId,userId:e}).then((function(s){if(s.success){if(a.$message.success("删除用户与选中部门关系成功！"),t.selectedRowKeys.length>0)for(var l=0;l<t.selectedRowKeys.length;l++)if(t.selectedRowKeys[l]==e){t.selectedRowKeys.splice(l,1);break}a.loadData()}else a.$message.warning(s.message)}))}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.delete属性!")},open:function(e){this.currentDeptId=e.id,this.currentDept=e,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleAddUserDepart:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):this.$refs.selectUserModal.visible=!0},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.nextDepartOptions=[{value:this.currentDept.key,label:this.currentDept.title}],this.$refs.modalForm.title="新增",this.$refs.modalForm.edit({activitiSync:"1",userIdentity:1,selecteddeparts:this.currentDeptId}))},selectOK:function(e){var t=this,a={};a.depId=this.currentDeptId,a.userIdList=[];for(var s=0;s<e.length;s++)a.userIdList.push(e[s]);Object(i["i"])(this.url.edit,a).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDeptRole:function(e){""!=this.currentDeptId?(this.$refs.deptRoleUser.add(e,this.currentDeptId),this.$refs.deptRoleUser.title="部门角色分配"):this.$message.warning("请先选择一个部门!")}}},u=c,m=(a("80a0"),a("2877")),p=Object(m["a"])(u,s,l,!1,null,"6adc63d1",null);t["default"]=p.exports},"7f76":function(e,t,a){"use strict";var s=a("553e"),l=a.n(s);l.a},8034:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"600",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[e.designNameOption.length>0?a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:""}},[a("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("a-card",{style:{marginTop:"12px",height:"auto"}},[a("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.designNameChange},model:{value:e.designNameValue,callback:function(t){e.designNameValue=t},expression:"designNameValue"}},[a("a-row",[e._l(e.designNameOption,(function(t){return[a("a-col",{attrs:{span:6}},[a("a-checkbox",{attrs:{value:t.value}},[e._v(e._s(t.text))])],1)]}))],2)],1)],1)],1)],1)],1):a("div",[a("h3",[e._v("无可配置角色!")])])],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"2",on:{click:e.cancelCheckALL}},[e._v("取消全选")])],1),a("a-button",[e._v("\n        操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存")])],1)],1)},l=[],r=a("0fea"),i=a("d579");a("89f2");function o(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=n(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var s=0,l=function(){};return{s:l,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw r}}}}function n(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}var c={name:"DeptRoleUserModal",components:{JEllipsis:i["default"]},data:function(){return{currentDeptId:"",title:"部门角色分配",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/sys/sysDepartRole/deptRoleUserAdd",getDeptRoleList:"/sys/sysDepartRole/getDeptRoleList",getDeptRoleByUserId:"/sys/sysDepartRole/getDeptRoleByUserId"},designNameOption:[],userId:"",newRoleId:"",oldRoleId:"",designNameValue:[],desformList:[]}},created:function(){},methods:{add:function(e,t){this.userId=e.id,this.currentDeptId=t,this.loadDesformList(),this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,Object(r["c"])(this.url.getDeptRoleByUserId,{userId:this.userId,departId:this.currentDeptId}).then((function(e){if(e.success){var a,s=[],l=o(e.result);try{for(l.s();!(a=l.n()).done;){var r=a.value;s.push(r.droleId)}}catch(i){l.e(i)}finally{l.f()}t.oldRoleId=s.join(","),t.designNameValue=s,t.newRoleId=s.join(",")}}))},close:function(){this.$emit("close"),this.visible=!1},handleSubmit:function(){var e=this;e.confirmLoading=!0;var t=this.url.add,a="post",s=Object.assign(this.model,{});s.userId=this.userId,s.newRoleId=this.newRoleId,s.oldRoleId=this.oldRoleId,Object(r["h"])(t,s,a).then((function(t){t.success?(e.$message.success(t.message),e.$emit("reload"),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.designNameOption=[],this.designNameValue=[],this.close()},designNameChange:function(e){this.newRoleId=e.join(",")},checkALL:function(){var e,t=[],a=o(this.desformList);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.push(s.id)}}catch(l){a.e(l)}finally{a.f()}this.designNameValue=t,this.newRoleId=t.join(",")},cancelCheckALL:function(){this.designNameValue=[],this.newRoleId=""},loadDesformList:function(){var e=this;Object(r["c"])(this.url.getDeptRoleList,{departId:this.currentDeptId,userId:this.userId}).then((function(t){if(t.success){e.desformList=t.result;var a,s=[],l=o(e.desformList);try{for(l.s();!(a=l.n()).done;){var r=a.value;s.push({value:r.id,text:r.roleName})}}catch(i){l.e(i)}finally{l.f()}e.designNameOption=s}}))}}},u=c,m=(a("39f6"),a("2877")),p=Object(m["a"])(u,s,l,!1,null,"5943a896",null);t["default"]=p.exports},"80a0":function(e,t,a){"use strict";var s=a("1edb"),l=a.n(s);l.a},"98af":function(e,t,a){"use strict";var s=a("ff9c"),l=a.n(s);l.a},b3c4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{centered:"",title:e.title,width:1e3,visible:e.visible,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:10}},[a("a-form-item",{attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入用户账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",[a("a-table",{attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns1,dataSource:e.dataSource1,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onSelectAll:e.onSelectAll,onSelect:e.onSelect,onChange:e.onSelectChange}},on:{change:e.handleTableChange}})],1)])],1)},l=[],r=a("ca00"),i=a("0fea"),o={name:"SelectUserModal",data:function(){return{title:"添加已有用户",names:[],visible:!1,placement:"right",description:"",queryParam:{},columns1:[{title:"#",dataIndex:"",key:"rowIndex",width:50,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"用户账号",align:"center",width:100,dataIndex:"username"},{title:"用户名称",align:"center",width:100,dataIndex:"realname"},{title:"性别",align:"center",width:100,dataIndex:"sex_dictText"},{title:"电话",align:"center",width:100,dataIndex:"phone"},{title:"部门",align:"center",width:150,dataIndex:"orgCode"}],columns2:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"操作",dataIndex:"action",align:"center",width:100,scopedSlots:{customRender:"action"}}],dataSource1:[],dataSource2:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/user/list"}}},created:function(){this.loadData()},methods:{searchQuery:function(){this.loadData(1)},searchReset:function(){this.queryParam={},this.loadData(1)},handleCancel:function(){this.visible=!1},handleOk:function(){this.dataSource2=this.selectedRowKeys,this.$emit("selectFinished",this.dataSource2),this.visible=!1},add:function(){this.visible=!0},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(i["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource1=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(r["d"])(e)},getQueryField:function(){},onSelectAll:function(e,t,a){if(!0===e)for(var s=0;s<a.length;s++)this.dataSource2.push(a[s]);else for(var l=0;l<a.length;l++)this.dataSource2.splice(this.dataSource2.indexOf(a[l]),1)},onSelect:function(e,t){if(!0===t)this.dataSource2.push(e);else{var a=this.dataSource2.indexOf(e);a>=0&&this.dataSource2.splice(this.dataSource2.indexOf(e),1)}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){this.dataSource2.splice(this.dataSource2.indexOf(e),1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()}}},n=o,d=(a("7f76"),a("2877")),c=Object(d["a"])(n,s,l,!1,null,"3f080a9a",null);t["default"]=c.exports},ec4e:function(e,t,a){},ff9c:function(e,t,a){}}]);