(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-058bce1b","chunk-2d0a484b"],{"077e":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okText:"保存并安排任务",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"任务类名",prop:"jobClassName",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入任务类名"},model:{value:e.model.jobClassName,callback:function(t){e.$set(e.model,"jobClassName",t)},expression:"model.jobClassName"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"Cron表达式",prop:"cronExpression"}},[a("j-easy-cron",{model:{value:e.model.cronExpression,callback:function(t){e.$set(e.model,"cronExpression",t)},expression:"model.cronExpression"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"参数",prop:"parameter"}},[a("a-textarea",{attrs:{placeholder:"请输入参数",rows:5},model:{value:e.model.parameter,callback:function(t){e.$set(e.model,"parameter",t)},expression:"model.parameter"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",prop:"description"}},[a("a-textarea",{attrs:{placeholder:"请输入描述",rows:3},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",prop:"status"}},[a("j-dict-select-tag",{attrs:{type:"radioButton",dictCode:"quartz_status"},model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}})],1)],1)],1)],1)},s=[],n=a("0fea"),r=a("f8d8"),l=a.n(r),i=a("483f"),c=function(e,t,a){if(!t)return a(),!0;var o=t.split(" ").filter((function(e){return!!e}));if(o.length>7)return a(new Error("Cron表达式最多7项！")),!1;var s=t;if(7===o.length){var n=Object(i["b"])(o[6]);if("*"!==n&&"?"!==n){var r=[];r=n.indexOf("-")>=0?n.split("-"):n.indexOf("/")?n.split("/"):[n];var c=r.some((function(e){return isNaN(e)}));if(c)return a(new Error("Cron表达式参数[年]错误："+n)),!1}s=o.slice(0,6).join(" ")}var d=!0;try{var u=l.a.parseExpression(s);u.next(),a()}catch(s){a(new Error("Cron表达式错误："+s)),d=!1}return d},d={name:"QuartzJobModal",components:{},data:function(){return{title:"操作",buttonStyle:"solid",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},cron:{label:"",value:""},confirmLoading:!1,validatorRules:{cronExpression:[{required:!0,message:"请输入cron表达式!"},{validator:c}],jobClassName:[{required:!0,message:"请输入任务类名!"}]},url:{add:"/sys/quartzJob/add",edit:"/sys/quartzJob/edit"}}},created:function(){},methods:{add:function(){this.edit({cronExpression:"* * * * * ? *",status:0})},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.form.resetFields(),t.model=Object.assign({},e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a,o){if(a){t.confirmLoading=!0;var s="",r="";e.model.id?(s+=e.url.edit,r="put"):(s+=e.url.add,r="post"),Object(n["h"])(s,e.model,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))},handleCancel:function(){this.close()}}},u=d,m=a("2877"),p=Object(m["a"])(u,o,s,!1,null,"0cc59faa",null);t["default"]=p.exports},"7a9d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form-model",{attrs:{layout:"inline",model:e.queryParam},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:10}},[a("a-form-model-item",{attrs:{label:"任务类名",prop:"jobClassName"}},[a("a-input",{attrs:{placeholder:"请输入任务类名"},model:{value:e.queryParam.jobClassName,callback:function(t){e.$set(e.queryParam,"jobClassName",t)},expression:"queryParam.jobClassName"}})],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-model-item",{attrs:{label:"任务状态",prop:"status"}},[a("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择状态"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("全部")]),a("a-select-option",{attrs:{value:"0"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"-1"}},[e._v("停止")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("定时任务信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"description",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:20}})],1)}},{key:"parameterRender",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:20}})],1)}},{key:"action",fn:function(t,o){return a("span",{},[-1==o.status?a("a",{on:{click:function(t){return e.resumeJob(o)}}},[e._v("启动")]):e._e(),0==o.status?a("a",{on:{click:function(t){return e.pauseJob(o)}}},[e._v("停止")]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.executeImmediately(o)}}},[e._v("立即执行")])]),a("a-menu-item",[a("a",{on:{click:function(t){return e.handleEdit(o)}}},[e._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(o.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}},{key:"customRenderStatus",fn:function(t){return[0==t?a("a-tag",{attrs:{color:"green"}},[e._v("已启动")]):e._e(),-1==t?a("a-tag",{attrs:{color:"orange"}},[e._v("已暂停")]):e._e()]}}])})],1),a("quartzJob-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},s=[],n=a("077e"),r=a("0fea"),l=a("b65a"),i=a("d579"),c={name:"QuartzJobList",mixins:[l["a"]],components:{QuartzJobModal:n["default"],JEllipsis:i["default"]},data:function(){return{description:"定时任务在线管理",queryParam:{},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"任务类名",align:"center",dataIndex:"jobClassName",sorter:!0},{title:"cron表达式",align:"center",dataIndex:"cronExpression"},{title:"参数",align:"center",width:150,dataIndex:"parameter",scopedSlots:{customRender:"parameterRender"}},{title:"描述",align:"center",width:250,dataIndex:"description",scopedSlots:{customRender:"description"}},{title:"状态",align:"center",dataIndex:"status",scopedSlots:{customRender:"customRenderStatus"},filterMultiple:!1,filters:[{text:"已启动",value:"0"},{text:"已暂停",value:"-1"}]},{title:"操作",dataIndex:"action",align:"center",width:180,scopedSlots:{customRender:"action"}}],url:{list:"/sys/quartzJob/list",delete:"/sys/quartzJob/delete",deleteBatch:"/sys/quartzJob/deleteBatch",pause:"/sys/quartzJob/pause",resume:"/sys/quartzJob/resume",exportXlsUrl:"sys/quartzJob/exportXls",importExcelUrl:"sys/quartzJob/importExcel",execute:"sys/quartzJob/execute"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),t&&Object.keys(t).length>0&&t.status&&(this.filters.status=t.status[0]),this.ipagination=e,this.loadData()},pauseJob:function(e){var t=this;this.$confirm({title:"确认暂停",content:"是否暂停选中任务?",onOk:function(){Object(r["c"])(t.url.pause,{id:e.id}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(),t.onClearSelected()):t.$message.warning(e.message)}))}})},resumeJob:function(e){var t=this;this.$confirm({title:"确认启动",content:"是否启动选中任务?",onOk:function(){Object(r["c"])(t.url.resume,{id:e.id}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(),t.onClearSelected()):t.$message.warning(e.message)}))}})},executeImmediately:function(e){var t=this;this.$confirm({title:"确认提示",content:"是否立即执行任务?",onOk:function(){Object(r["c"])(t.url.execute,{id:e.id}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(),t.onClearSelected()):t.$message.warning(e.message)}))}})}}},d=c,u=(a("882c"),a("2877")),m=Object(u["a"])(d,o,s,!1,null,"6c2ec09c",null);t["default"]=m.exports},"882c":function(e,t,a){"use strict";var o=a("bc20"),s=a.n(o);s.a},bc20:function(e,t,a){}}]);