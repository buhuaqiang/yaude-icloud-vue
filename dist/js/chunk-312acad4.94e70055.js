(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312acad4"],{2832:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{defaultActiveKey:"1"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"柱状图"}},[a("a-row",[a("a-col",{attrs:{span:10}},[a("a-radio-group",{attrs:{value:t.barType},on:{change:t.statisticst}},[a("a-radio-button",{attrs:{value:"year"}},[t._v("按年统计")]),a("a-radio-button",{attrs:{value:"month"}},[t._v("按月统计")]),a("a-radio-button",{attrs:{value:"category"}},[t._v("按类别统计")]),a("a-radio-button",{attrs:{value:"cabinet"}},[t._v("按柜号统计")])],1)],1),a("a-col",{attrs:{span:14}},[(t.barType,t._e())],1),a("bar",{staticClass:"statistic",attrs:{title:"档案统计",dataSource:t.countSource,height:400}})],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"饼状图"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:10}},[a("a-radio-group",{attrs:{value:t.pieType},on:{change:t.statisticst}},[a("a-radio-button",{attrs:{value:"year"}},[t._v("按年统计")]),a("a-radio-button",{attrs:{value:"month"}},[t._v("按月统计")]),a("a-radio-button",{attrs:{value:"category"}},[t._v("按类别统计")]),a("a-radio-button",{attrs:{value:"cabinet"}},[t._v("按柜号统计")])],1)],1),a("a-col",{attrs:{span:14}},[(t.pieType,t._e())],1),a("pie",{staticClass:"statistic",attrs:{title:"档案统计",dataSource:t.countSource,height:450}})],1)],1)],1)],1)},r=[],o=a("edd9"),i=a("6cb2"),u=a("da05"),s=a("0fea"),c={name:"ArchivesStatisticst",components:{ACol:u["b"],Bar:o["default"],Pie:i["default"]},data:function(){return{description:"档案统计页面",queryParam:{},countSource:[],barType:"year",barDate:["month","month"],barValue:[],pieType:"year",pieDate:["month","month"],pieValue:[],tabStatus:"bar",url:{getYearCountInfo:"/mock/api/report/getYearCountInfo",getMonthCountInfo:"/mock/api/report/getMonthCountInfo",getCntrNoCountInfo:"/mock/api/report/getCntrNoCountInfo",getCabinetCountInfo:"/mock/api/report/getCabinetCountInfo"}}},created:function(){var t=this.url.getYearCountInfo;this.loadDate(t,"year",{})},methods:{loadDate:function(t,e,a){var n=this;Object(s["c"])(t,a,"get").then((function(t){if(t.success)n.countSource=[],"year"===e&&n.getYearCountSource(t.result),"month"===e&&n.getMonthCountSource(t.result),"category"===e&&n.getCategoryCountSource(t.result),"cabinet"===e&&n.getCabinetCountSource(t.result);else{var a=n;a.$message.warning(t.message)}}))},getYearCountSource:function(t){for(var e=0;e<t.length;e++)"bar"===this.tabStatus?this.countSource.push({x:"".concat(t[e].year,"年"),y:t[e].yearcount}):this.countSource.push({item:"".concat(t[e].year,"年"),count:t[e].yearcount})},getMonthCountSource:function(t){for(var e=0;e<t.length;e++)"bar"===this.tabStatus?this.countSource.push({x:t[e].month,y:t[e].monthcount}):this.countSource.push({item:t[e].month,count:t[e].monthcount})},getCategoryCountSource:function(t){for(var e=0;e<t.length;e++)"bar"===this.tabStatus?this.countSource.push({x:t[e].classifyname,y:t[e].cntrnocount}):this.countSource.push({item:t[e].classifyname,count:t[e].cntrnocount})},getCabinetCountSource:function(t){for(var e=0;e<t.length;e++)"bar"===this.tabStatus?this.countSource.push({x:t[e].cabinetname,y:t[e].cabinetcocunt}):this.countSource.push({item:t[e].cabinetname,count:t[e].cabinetcocunt})},callback:function(t){"1"===t?(this.tabStatus="bar",this.queryDatebar()):(this.tabStatus="pie",this.queryDatepie())},statisticst:function(t){"pie"===this.tabStatus?(this.pieType=t.target.value,this.queryDatepie()):(this.barType=t.target.value,this.queryDatebar())},queryDatebar:function(){this.barValue.length>0?this.getUrl(this.barType,{startTime:this.barValue[0]._d,endTime:this.barValue[1]._d}):this.getUrl(this.barType,{})},queryDatepie:function(){this.pieValue.length>0?this.getUrl(this.pieType,{startTime:this.pieValue[0]._d,endTime:this.pieValue[1]._d}):this.getUrl(this.pieType,{})},searchReset:function(){"pie"===this.tabStatus?this.pieValue=[]:this.barValue=[],this.getUrl(this.barType,{})},getUrl:function(t,e){var a="";"year"===t&&(a=this.url.getYearCountInfo),"month"===t&&(a=this.url.getMonthCountInfo),"category"===t&&(a=this.url.getCntrNoCountInfo),"cabinet"===t&&(a=this.url.getCabinetCountInfo),this.loadDate(a,t,e)},handleBarDate:function(t,e){this.barValue=t,this.barDate=["date"===e[0]?"month":e[0],"date"===e[1]?"month":e[1]]},handlePieDate:function(t,e){this.pieValue=t,this.pieDate=["date"===e[0]?"month":e[0],"date"===e[1]?"month":e[1]]}}},l=c,h=(a("4b55"),a("2877")),p=Object(h["a"])(l,n,r,!1,null,"1e0c0d3c",null);e["default"]=p.exports},"4b55":function(t,e,a){"use strict";var n=a("93d6"),r=a.n(n);r.a},"6cb2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[a("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),a("v-axis"),a("v-legend",{attrs:{dataKey:"item"}}),a("v-pie",{attrs:{position:"percent",color:"item","v-style":t.pieStyle,label:t.labelConfig}}),a("v-coord",{attrs:{type:"theta"}})],1)},r=[],o=a("c917"),i=a("7104"),u={name:"Pie",mixins:[o["a"]],props:{title:{type:String,default:""},height:{type:Number,default:254},dataSource:{type:Array,default:function(){return[{item:"示例一",count:40},{item:"示例二",count:21},{item:"示例三",count:17},{item:"示例四",count:13},{item:"示例五",count:9}]}}},data:function(){return{scale:[{dataKey:"percent",min:0,formatter:".0%"}],pieStyle:{stroke:"#fff",lineWidth:1},labelConfig:["percent",{formatter:function(t,e){return e.point.item+": "+t}}]}},computed:{data:function(){var t=(new i.View).source(this.dataSource);return t.transform({type:"percent",field:"count",dimension:"item",as:"percent"}),t.rows}}},s=u,c=a("2877"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},"93d6":function(t,e,a){},c917:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={methods:{handleClick:function(t,e){this.handleEvent("click",t,e)},handleEvent:function(t,e,a){this.$emit(t,e,a)}}}},edd9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[a("v-tooltip"),a("v-axis"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},r=[],o=a("ca00"),i={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(o["p"])()}},u=i,s=a("2877"),c=Object(s["a"])(u,n,r,!1,null,null,null);e["default"]=c.exports}}]);