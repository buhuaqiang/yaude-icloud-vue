(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30c74116","chunk-2d0c1d57"],{4874:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{staticStyle:{"min-width":"800px","overflow-x":"auto"},attrs:{title:"树形结构图片翻页查看"}},[i("a-row",[i("a-col",{attrs:{span:5}},[i("a-tree",{style:{height:"500px","border-right":"2px solid #c1c1c1","overflow-y":"auto"},attrs:{showLine:"",treeData:t.treeData,expandedKeys:[t.expandedKeys[0]],selectedKeys:t.selectedKeys},on:{expand:t.onExpand,select:this.onSelect}})],1),i("a-col",{attrs:{span:19}},[i("a-row",{staticStyle:{"margin-top":"10px"}},[i("a-col",{staticStyle:{"padding-left":"2%","margin-bottom":"10px"},attrs:{span:24}},[i("a-button",{attrs:{type:"primary"},on:{click:t.prev}},[i("a-icon",{attrs:{type:"left"}}),t._v("上一页")],1),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:t.next}},[t._v("下一页"),i("a-icon",{attrs:{type:"right"}})],1),i("span",{staticStyle:{"margin-left":"15%","font-weight":"bolder"}},[t._v(t._s(t.navName))])],1),i("a-col",{staticStyle:{"padding-left":"2%"},attrs:{span:24}},[i("img",{attrs:{src:t.imgUrl,preview:""}})])],1)],1)],1)],1)},a=[],r=i("310e"),n=i.n(r),l={name:"ImgTurnPage",components:{draggable:n.a},data:function(){return{description:"图片翻页",treeData:[{title:"第一页",key:"0-0",children:[{title:"1页",key:"0-0-0",imgUrl:"https://static.jeecg.com/upload/test/1_1588149743473.jpg"},{title:"2页",key:"0-0-1",imgUrl:"https://static.jeecg.com/upload/test/u27356337152749454924fm27gp0_1588149731821.jpg"}]},{title:"第二页",key:"0-1",children:[{title:"1页",key:"0-1-0",imgUrl:"https://static.jeecg.com/upload/test/u24454681402491956848fm27gp0_1588149712663.jpg"},{title:"2页",key:"0-1-1",imgUrl:"https://static.jeecg.com/upload/test/u8891206113801177793fm27gp0_1588149704459.jpg"}]},{title:"第三页",key:"0-2",children:[{title:"1页",key:"0-2-0",imgUrl:"https://static.jeecg.com/upload/test/1374962_1587621329085.jpg"}]}],selectedKeys:[],expandedKeys:[],sort:0,imgUrl:"",navName:"",imgList:[]}},created:function(){this.getImgList()},methods:{getImgList:function(){for(var t=0,e=0;e<this.treeData.length;e++)for(var i=0;i<this.treeData[e].children.length;i++)this.imgList.push({key:this.treeData[e].children[i].key,pkey:this.treeData[e].key,sort:t++,imgUrl:this.treeData[e].children[i].imgUrl,navName:this.treeData[e].title+"/"+this.treeData[e].children[i].title});this.setValue(this.imgList[this.sort])},onSelect:function(t,e){for(var i=0;i<this.imgList.length;i++)if(this.imgList[i].key===t[0]){this.sort=this.imgList[i].sort,this.setValue(this.imgList[i]);break}},onExpand:function(t){this.expandedKeys=[],null!==t&&""!==t&&(this.expandedKeys[0]=t[1])},prev:function(){0===this.sort?this.sort=this.imgList.length-1:this.sort=this.sort-1,this.setValue(this.imgList[this.sort])},next:function(){this.sort===this.imgList.length-1?this.sort=0:this.sort=this.sort+1,this.setValue(this.imgList[this.sort])},setValue:function(t){this.selectedKeys=[],this.imgUrl=t.imgUrl,this.selectedKeys[0]=t.key,this.expandedKeys[0]=t.pkey,this.navName=t.navName}}},o=l,c=i("2877"),h=Object(c["a"])(o,s,a,!1,null,"bfa7c60c",null);e["default"]=h.exports},"54d3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-card",{staticStyle:{"min-width":"500px","overflow-x":"auto"}},[i("p",[t._v("我是左侧页面")]),i("img-turn-page")],1)},a=[],r=i("4874"),n={name:"SplitPanelAModal",components:{ImgTurnPage:r["default"]},data:function(){return{}},created:function(){},methods:{}},l=n,o=i("2877"),c=Object(o["a"])(l,s,a,!1,null,"045cdf58",null);e["default"]=c.exports}}]);