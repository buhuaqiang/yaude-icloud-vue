(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df024"],{"87a0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","keep-source":"",height:484,loading:e.loading,dataSource:e.dataSource,columns:e.columns,pagination:e.pagination},on:{pageChange:e.handlePageChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[a("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])]},proxy:!0}])})},n=[],o=(a("c1df"),a("ca00")),p=a("2475"),s={name:"JVxeDemo2",data:function(){return{loading:!1,columns:[{title:"下拉框_字典表搜索",key:"select_dict_search",type:p["b"].selectDictSearch,width:"200px",dict:"sys_user,realname,username"},{title:"JPopup",key:"popup",type:p["b"].popup,width:"180px",popupCode:"demo",field:"name,sex,age",orgFields:"name,sex,age",destFields:"popup,popup_sex,popup_age"},{title:"JP-性别",key:"popup_sex",type:p["b"].select,dictCode:"sex",disabled:!0,width:"100px"},{title:"JP-年龄",key:"popup_age",type:p["b"].normal,width:"80px"},{title:"进度条",key:"progress",type:p["b"].progress,minWidth:"120px"},{title:"单选",key:"radio",type:p["b"].radio,width:"130px",options:[{text:"男",value:"1"},{text:"女",value:"2"}],allowClear:!0},{title:"上传",key:"upload",type:p["b"].upload,width:"180px",btnText:"点击上传",token:!0,responseName:"message",action:window._CONFIG["domianURL"]+"/sys/common/upload"},{title:"图片上传",key:"image",type:p["b"].image,width:"180px",token:!0},{title:"文件上传",key:"file",type:p["b"].file,width:"180px",token:!0}],dataSource:[],pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","100","200"],total:1e3}}},created:function(){this.randomPage(this.pagination.current,this.pagination.pageSize,!0)},methods:{handlePageChange:function(e){this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,this.randomPage(e.current,e.pageSize,!0)},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},randomPage:function(e,t){var a=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i&&(this.loading=!0);for(var n=Date.now(),p=[],s=0;s<t;s++){var r=Object(o["k"])(0,2);p.push({id:Object(o["m"])(),select_dict_search:["","admin","","jeecg",""][Object(o["k"])(0,4)],progress:Object(o["k"])(0,100),radio:r?r.toString():null})}this.dataSource=p;var l=Date.now(),d=l-n;i&&d<t&&setTimeout((function(){a.loading=!1}),t-d)}}},r=s,l=a("2877"),d=Object(l["a"])(r,i,n,!1,null,"59815a48",null);t["default"]=d.exports}}]);