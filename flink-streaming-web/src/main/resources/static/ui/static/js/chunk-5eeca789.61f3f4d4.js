(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eeca789"],{"212d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[0==e.subPageFlag?n("div",{staticClass:"fl-container"},[n("el-form",{ref:"queryform",attrs:{model:e.queryform,inline:!0}},[n("el-form-item",[n("el-input",{staticClass:"wl-input",attrs:{placeholder:"Flink任务Id"},on:{input:function(t){return e.handleQuery()}},model:{value:e.queryform.jobId,callback:function(t){e.$set(e.queryform,"jobId",t)},expression:"queryform.jobId"}})],1),n("el-form-item",[n("el-select",{attrs:{placeholder:"任务类型",clearable:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.queryform.jobType,callback:function(t){e.$set(e.queryform,"jobType",t)},expression:"queryform.jobType"}},[n("el-option",{attrs:{label:"SQL流任务",value:"0"}}),n("el-option",{attrs:{label:"SQL批任务",value:"2"}}),n("el-option",{attrs:{label:"JAR包",value:"1"}})],1)],1),n("el-form-item",[n("el-select",{attrs:{placeholder:"开启状态",clearable:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.queryform.open,callback:function(t){e.$set(e.queryform,"open",t)},expression:"queryform.open"}},[n("el-option",{attrs:{label:"关闭",value:"0"}}),n("el-option",{attrs:{label:"开启",value:"1"}})],1)],1),n("el-form-item",[n("el-input",{staticClass:"wl-input",attrs:{placeholder:"任务名称(模糊查询)"},on:{input:function(t){return e.handleQuery()}},model:{value:e.queryform.jobName,callback:function(t){e.$set(e.queryform,"jobName",t)},expression:"queryform.jobName"}},[n("el-button",{staticClass:"wl-search",attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.handleQuery()}},slot:"append"})],1)],1),n("el-form-item",[n("el-dropdown",[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("新建任务"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{staticClass:"wl-append",attrs:{to:{name:e.getRouteTaskName("create","SQL_STREAMING"),params:{flag:"create",context:e.queryContent(),data:{jobTypeEnum:"SQL_STREAMING"}}}}},[n("el-dropdown-item",{attrs:{icon:"iconfont my-icon-jiediansql"}},[e._v("SQL流任务")])],1),n("router-link",{staticClass:"wl-append",attrs:{to:{name:e.getRouteTaskName("create","SQL_BATCH"),params:{flag:"create",context:e.queryContent(),data:{jobTypeEnum:"SQL_BATCH"}}}}},[n("el-dropdown-item",{attrs:{icon:"iconfont my-icon-file-SQL"}},[e._v("SQL批任务")])],1),n("router-link",{staticClass:"wl-append",attrs:{to:{name:e.getRouteTaskName("create","JAR"),params:{flag:"create",context:e.queryContent(),data:{jobTypeEnum:"JAR"}}}}},[n("el-dropdown-item",{attrs:{icon:"iconfont my-icon-suffix-jar"}},[e._v("JAR任务")])],1)],1)],1)],1)],1),n("el-form",{ref:"queryform2",attrs:{model:e.queryform,inline:!0}},[n("el-form-item",[n("el-radio-group",{staticClass:"wl-radio-group",attrs:{size:"small"},on:{change:function(t){return e.handleQuery()}},model:{value:e.queryform.status,callback:function(t){e.$set(e.queryform,"status",t)},expression:"queryform.status"}},[n("el-radio-button",{attrs:{label:""}},[e._v("所有")]),n("el-radio-button",{attrs:{label:"0"}},[e._v("停止")]),n("el-radio-button",{attrs:{label:"1"}},[e._v("运行中")]),n("el-radio-button",{attrs:{label:"2"}},[e._v("启动中")]),n("el-radio-button",{attrs:{label:"3"}},[e._v("提交成功")]),n("el-radio-button",{attrs:{label:"-1"}},[e._v("失败")]),n("el-radio-button",{attrs:{label:"-2"}},[e._v("其他")])],1)],1)],1),n("el-table",{staticClass:"wl-table",attrs:{data:e.list,"header-cell-style":{background:"#f4f4f5","text-align":"center"},border:""}},[n("el-table-column",{attrs:{prop:"id","show-overflow-tooltip":!0,label:"ID","min-width":"60",width:"80",align:"center",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-right":"5px"}},[e._v(e._s(t.row.id))]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.getTaskTypeName(t.row.jobTypeEnum),placement:"right"}},["SQL_STREAMING"===t.row.jobTypeEnum?n("i",{staticClass:"iconfont my-icon-jiediansql",staticStyle:{"font-size":"16px"}}):e._e(),"SQL_BATCH"===t.row.jobTypeEnum?n("i",{staticClass:"iconfont my-icon-file-SQL",staticStyle:{"font-size":"16px"}}):e._e(),"JAR"===t.row.jobTypeEnum?n("i",{staticClass:"iconfont my-icon-suffix-jar",staticStyle:{"font-size":"16px"}}):e._e()])]}}],null,!1,1905277288)}),n("el-table-column",{attrs:{prop:"jobName","show-overflow-tooltip":!0,label:"任务名称","min-width":"100",align:"center",fixed:""}}),n("el-table-column",{attrs:{prop:"isOpen","show-overflow-tooltip":!0,label:"开启",width:"65",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66"},on:{change:function(n){return e.changeIsOpen(n,t.row)}},model:{value:t.row.isOpen,callback:function(n){e.$set(t.row,"isOpen",n)},expression:"scope.row.isOpen"}})]}}],null,!1,1872013021)}),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[-2===t.row.status||"UNKNOWN"===t.row.status?n("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):-1===t.row.status||"FAIL"===t.row.status?n("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):0===t.row.status||"STOP"===t.row.status?n("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):1===t.row.status||"RUN"===t.row.status?n("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):2===t.row.status||"STARTING"===t.row.status?n("el-tag",{attrs:{size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):3===t.row.status||"SUCCESS"===t.row.status?n("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))]):n("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(t.row.status)))])]}}],null,!1,3710586266)}),n("el-table-column",{attrs:{prop:"deployModeEnum","show-overflow-tooltip":!0,label:"运行模式",width:"105",align:"center"}}),n("el-table-column",{attrs:{prop:"jobId","show-overflow-tooltip":!0,label:"Flink任务Id","min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.jobId?n("el-link",{attrs:{href:t.row.flinkRunUrl,target:"_blank"}},[e._v(e._s(t.row.jobId))]):e._e()]}}],null,!1,3841902066)}),n("el-table-column",{attrs:{prop:"editTime","show-overflow-tooltip":!0,label:"最后提交时间","min-width":"100",width:"135",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.formatDateTime(t.row.editTime)))])]}}],null,!1,960744588)}),n("el-table-column",{attrs:{prop:"editor","show-overflow-tooltip":!0,label:"提交人员","min-width":"70",width:"100",align:"center"}}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"版本信息","min-width":"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:{name:"HistoryTask",params:{flag:"tasklist",context:e.queryContent(),jobConfigId:t.row.id}}}},[n("el-link",{staticClass:"fl-version-text",attrs:{type:"info"}},[n("span",{staticClass:"fl-version-span"},[e._v("["+e._s(t.row.version)+"]")]),e._v(e._s(t.row.jobDesc))])],1)]}}],null,!1,2998596721)}),n("el-table-column",{attrs:{label:"报警模式","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.alarmStrs?n("el-link",[e._v(e._s(t.row.alarmStrs))]):e._e()]}}],null,!1,618922897)}),n("el-table-column",{attrs:{prop:"savepoint",label:"保存状态(savepoint)",width:"135px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return["SQL_STREAMING"===t.row.jobTypeEnum?n("el-link",{attrs:{type:"primary",icon:"el-icon-sell"},nativeOn:{click:function(n){return e.doRecoverSavePoint(t.row)}}},[e._v("恢复")]):e._e(),"SQL_STREAMING"===t.row.jobTypeEnum?n("el-link",{attrs:{type:"success",icon:"el-icon-sold-out"},nativeOn:{click:function(n){return e.savePoint(t.row)}}},[e._v("备份")]):e._e()]}}],null,!1,892952670)}),n("el-table-column",{attrs:{prop:"operate",label:"操作",width:"210",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.isOpen&&"RUN"!==t.row.status?n("el-link",{attrs:{type:"success",icon:"el-icon-video-play"},nativeOn:{click:function(n){return e.startTask(t.row)}}},[e._v("启动")]):e._e(),1===t.row.isOpen&&"RUN"===t.row.status?n("el-link",{attrs:{type:"warning",icon:"el-icon-switch-button"},nativeOn:{click:function(n){return e.stopTask(t.row)}}},[e._v("停止")]):e._e(),n("router-link",{attrs:{to:{name:e.getRouteTaskName("view",t.row.jobTypeEnum),params:{flag:"view",context:e.queryContent(),data:t.row}}}},[n("el-link",{attrs:{type:"info",icon:"el-icon-view"}},[e._v("查看")])],1),0===t.row.isOpen?n("router-link",{attrs:{to:{name:e.getRouteTaskName("update",t.row.jobTypeEnum),params:{flag:"update",context:e.queryContent(),data:t.row}}}},[n("el-link",{attrs:{type:"primary",icon:"el-icon-edit-outline"}},[e._v("修改")])],1):e._e(),n("el-link",{attrs:{type:"primary",icon:"el-icon-document-copy"},nativeOn:{click:function(n){return e.copyConfig(t.row)}}},[e._v("复制")]),0===t.row.isOpen?n("el-link",{attrs:{type:"danger",icon:"el-icon-delete"},nativeOn:{click:function(n){return e.deleteTask(t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,3270940891)}),n("el-table-column",{attrs:{label:"日志",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!==t.row.lastRunLogId?n("router-link",{attrs:{to:{name:"ViewTaskLogDetail",params:{flag:"tasklist",context:e.queryContent(),data:{id:t.row.lastRunLogId}}}}},[n("el-link",{attrs:{type:"info",icon:"el-icon-message"}},[e._v("详情")])],1):e._e(),n("router-link",{attrs:{to:{name:"FlinkLogManage",params:{flag:"tasklist",context:e.queryContent(),jobConfigId:t.row.id}}}},[n("el-link",{attrs:{type:"info",icon:"el-icon-chat-line-square"}},[e._v("历史")])],1)]}}],null,!1,945253990)})],1),e.pageshow?n("el-pagination",{staticClass:"wl-pagination",attrs:{background:"",layout:"total, sizes, prev, pager, next","current-page":e.currentPage,"page-sizes":[10,15,20,50,100,150,200],"page-size":e.pageSize,total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1):e._e(),n("recover-save-point",{ref:"recoverSavePoint"}),n("router-view")],1)},o=[],r=(n("b0c0"),n("498a"),n("99af"),n("b199")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"wl-dialog",attrs:{title:e.title,visible:e.visible,"close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.doClose()}}},[n("span",{staticClass:"wl-title"},[e._v("只显示最近10次备份(每一小时自动备份或者停止任务的时候备份)")]),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("div",{staticClass:"wl-popover"},[n("p",[e._v("备注1：如果sql语句发生变更或者业务逻辑发生变化，此时从savepoint恢复可能导致数据结果错误")]),n("p",[e._v("备注2：yarn模式下和集群模式下统一目录是(必须绑定hdfs)：hdfs:///flink/savepoint/flink-streaming-platform-web/")]),n("p",[e._v("备注3：LOCAL模式本地模式下保存在flink客户端的根目录下")]),n("p",[e._v("备注4：hdfs:///flink/savepoint/flink-streaming-platform-web/ 建议提前创建好")])]),n("span",{attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"el-icon-info"})])]),n("el-form",{ref:"form",staticStyle:{"padding-top":"10px"},attrs:{model:e.form,inline:!0,rules:e.rules}},[n("el-form-item",{attrs:{prop:"savepoint"}},[n("el-input",{ref:"inputSavePoint",staticClass:"wl-input",attrs:{placeholder:"手动增加SavePoint地址"},on:{blur:function(t){return e.blurSavePoint()}},model:{value:e.form.savepoint,callback:function(t){e.$set(e.form,"savepoint",t)},expression:"form.savepoint"}})],1),n("el-form-item",[n("el-button",{on:{click:function(t){return e.addSavepoint()}}},[e._v("手动添加")])],1)],1),n("el-table",{staticClass:"wl-table",attrs:{data:e.list,"header-cell-style":{background:"#f4f4f5","text-align":"center"},"highlight-current-row":"",border:""},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-radio",{attrs:{label:t.$index},nativeOn:{change:function(n){return e.getCurrentRow(t.$index)}},model:{value:e.radioIndex,callback:function(t){e.radioIndex=t},expression:"radioIndex"}})]}}])}),n("el-table-column",{attrs:{prop:"id","show-overflow-tooltip":!0,label:"备份编号",width:"80",align:"center"}}),n("el-table-column",{attrs:{prop:"savepointPath","show-overflow-tooltip":!0,label:"备份地址"}}),n("el-table-column",{attrs:{prop:"backupTime","show-overflow-tooltip":!0,label:"备份时间",width:"135"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.doCancel()}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.doConfirm()}}},[e._v("恢复任务")])],1)],1)},i=[],l=(n("c740"),n("b775")),c=n("4328"),u=n.n(c);function d(e){return Object(l["a"])({url:"/querySavePointList10",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return u.a.stringify(e)}],data:{taskid:e}})}function f(e,t){return Object(l["a"])({url:"/addSavepoint",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return u.a.stringify(e)}],data:{jobConfigId:e,savepointPath:t}})}var p={name:"RecoverSavePoint",data:function(){return{loading:!1,visible:!1,title:"恢复任务运行",form:{taskid:"",savepoint:""},rules:{savepoint:[{required:!0,message:"请输入savepoint地址",trigger:"change"}]},task:{},list:[],currentRow:null,radioIndex:!1}},methods:{openDialog:function(e){this.visible=!0,this.list=[],this.form.savepoint="",this.form.taskid=e.id,this.task=e,this.title="恢复任务运行[".concat(e.jobName,"]"),this.currentRow=null,this.radioIndex=!1,this.querySavePointList(e.id)},querySavePointList:function(e){var t=this;this.loading=!0,this.radioIndex=!1,d(e).then((function(e){t.loading=!1,t.$refs.form.clearValidate();var n=e.code,a=e.data,o=e.success,r=e.message;"200"===n&&o?(t.list=a&&a.data?a.data:[],t.loading=!1):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))},addSavepoint:function(){var e=this;this.$refs.form.validate((function(t){if(t){e.loading=!0;var n=e.form.taskid,a=e.form.savepoint;f(n,a).then((function(t){e.loading=!1;var a=t.code,o=t.data,r=t.success,s=t.message;"200"===a&&r?(e.list=o&&o.data?o.data:[],e.querySavePointList(n)):e.$message({type:"error",message:s||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))}else e.$refs.inputSavePoint.focus()}))},blurSavePoint:function(){this.$refs.form.clearValidate()},handleCurrentChange:function(e){var t=this;if(e){this.currentRow=e;var n=this.list.findIndex((function(e){return e.id==t.currentRow.id}));n>-1&&(this.radioIndex=n)}},getCurrentRow:function(e){this.radioIndex=e},doConfirm:function(){var e=this;if(this.currentRow){var t=this.form.taskid,n=this.currentRow.id;this.currentRow.savepointPath;this.$confirm("是否恢复任务[备份：".concat(n,"]！"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0,Object(r["k"])(t,n).then((function(t){e.loading=!1;var a=t.code,o=t.success,r=t.message;t.data;"200"===a&&o?(e.$message({type:"info",message:"正在恢复任务[备份：".concat(n,"]，稍后请刷新！")}),e.$parent.getTasks(),e.visible=!1):e.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))}))}else this.$message({type:"error",message:"请选择备份记录！"})},doCancel:function(){this.visible=!1},doClose:function(){this.list=[],this.form.savepoint="",this.form.taskid="",this.task=null,this.title="",this.currentRow=null,this.radioIndex=!1}}},m=p,g=(n("b820"),n("2877")),h=Object(g["a"])(m,s,i,!1,null,"9fd08c06",null),w=h.exports,y={name:"TaskManage",components:{RecoverSavePoint:w},data:function(){return{loading:!1,subPageFlag:!1,queryform:{jobId:"",jobName:"",jobType:"",open:"",status:""},list:[],count:0,pageSize:15,currentPage:1,pageshow:!0}},mounted:function(){if("FlinkTaskManage"===this.$route.name){this.subPageFlag=!1;var e=this.$route.params;e&&e.currentPage&&(this.queryform.jobId=e.jobId,this.queryform.jobName=e.jobName,this.queryform.jobType=e.jobType,this.queryform.open=e.open,this.queryform.status=e.status,e.currentPage&&(this.count=e.count,this.currentPage=e.currentPage,this.pageSize=e.pageSize)),this.handleQuery()}else this.subPageFlag=!0},methods:{queryContent:function(){return{count:this.count,currentPage:this.currentPage,pageSize:this.pageSize,jobId:this.queryform.jobId,jobName:this.queryform.jobName,jobType:this.queryform.jobType,open:this.queryform.open,status:this.queryform.status}},handleQuery:function(e){var t=this;this.pageshow=!1,this.getTasks(),this.$nextTick((function(){t.pageshow=!0}))},handleSizeChange:function(e){this.pageSize=e,this.handleQuery()},handleCurrentChange:function(e){this.currentPage=e,this.handleQuery()},getTasks:function(){var e=this;this.loading=!0;var t=this.queryform.jobName.trim(),n=this.queryform,a=n.jobId,o=n.jobType,s=n.status,i=n.open;Object(r["h"])(this.currentPage,this.pageSize,t,a,o,s,i).then((function(t){e.loading=!1;var n=t.code,a=t.success,o=t.message,r=t.data;"200"===n&&a?(e.list=r.data,e.count=r.total,e.count>0&&0==e.list.length&&(e.currentPage=Math.ceil(e.count/e.pageSize),e.getTasks())):e.$message({type:"error",message:o||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))},changeIsOpen:function(e,t){var n=this,a=1===e?"开启":"关闭",o=t.id,s=t.jobName;this.$confirm("是否".concat(a,"[").concat(s,"]"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){1===e?(n.loading=!0,Object(r["i"])(o).then((function(a){n.loading=!1;var o=a.code,r=a.success,i=a.message;a.data;if("200"!==o||!r)return t.isOpen=1===e?0:1,void n.$message({type:"error",message:i||"请求数据异常！"});n.$message({type:"success",message:"开启[".concat(s,"]成功！")})})).catch((function(a){n.loading=!1,t.isOpen=1===e?0:1,n.$message({type:"error",message:"请求异常！"}),console.log(a)}))):0===e&&(n.loading=!0,Object(r["c"])(o).then((function(a){n.loading=!1;var o=a.code,r=a.success,i=a.message;a.data;if("200"!==o||!r)return t.isOpen=1===e?0:1,void n.$message({type:"error",message:i||"请求数据异常！"});n.$message({type:"success",message:"关闭[".concat(s,"]成功！")})})).catch((function(a){n.loading=!1,t.isOpen=1===e?0:1,n.$message({type:"error",message:"请求异常！"}),console.log(a)})))})).catch((function(n){t.isOpen=1===e?0:1}))},startTask:function(e){var t=this;this.loading=!0;var n=e.id,a=e.jobName;Object(r["l"])(n).then((function(e){t.loading=!1;var n=e.code,o=e.success,r=e.message;e.data;"200"===n&&o?(t.handleQuery(),t.$message({type:"info",message:"正在启动[".concat(a,"]，稍后请刷新！")})):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))},stopTask:function(e){var t=this,n=e.id,a=e.jobName;this.$confirm("确定要停止任务【".concat(a,"】吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,Object(r["m"])(n).then((function(e){t.loading=!1;var n=e.code,o=e.success,r=e.message;e.data;"200"===n&&o?(t.handleQuery(),t.$message({type:"success",message:"正在停止任务【".concat(a,"】，稍后请刷新！")})):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))}))},savePoint:function(e){var t=this,n=e.id,a=e.jobName;this.$confirm("确定要手动执行[".concat(a,"]savePoint吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then((function(){t.loading=!0,Object(r["j"])(n).then((function(e){t.loading=!1;var n=e.code,o=e.success,r=e.message;e.data;"200"===n&&o?t.$message({type:"success",message:"手动执行[".concat(a,"]savePoint成功！")}):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))}))},copyConfig:function(e){var t=this,n=e.id,a=e.jobName;this.loading=!0,Object(r["d"])(n).then((function(e){t.loading=!1;var n=e.code,o=e.success,r=e.message;e.data;"200"===n&&o?(t.handleQuery(),t.$message({type:"success",message:"复制[".concat(a,"]成功！")})):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))},deleteTask:function(e){var t=this,n=e.id,a=e.jobName;this.$confirm("确定要删除[".concat(a,"]吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,Object(r["e"])(n).then((function(e){t.loading=!1;var n=e.code,o=e.success,r=e.message;e.data;"200"===n&&o?(t.handleQuery(),t.$message({type:"success",message:"删除[".concat(a,"]成功！")})):t.$message({type:"error",message:r||"请求数据异常！"})})).catch((function(e){t.loading=!1,t.$message({type:"error",message:"请求异常！"}),console.log(e)}))}))},doRecoverSavePoint:function(e){this.$refs.recoverSavePoint.openDialog(e)},formatDateTime:function(e){return this.dayjs(e).format("YYYY-MM-DD HH:mm:ss")},getStatusDesc:function(e){switch(e){case-2:return"未知";case-1:return"失败";case 0:return"停止";case 1:return"运行中";case 2:return"启动中";case 3:return"提交成功";case"UNKNOWN":return"未知";case"FAIL":return"失败";case"STOP":return"停止";case"RUN":return"运行中";case"STARTING":return"启动中";case"SUCCESS":return"提交成功";default:return""}},getTaskTypeName:function(e){switch(e){case"SQL_STREAMING":return"SQL流任务";case"SQL_BATCH":return"SQL批任务";case"JAR":return"JAR包";default:return e}},getRouteTaskName:function(e,t){switch(e){case"create":switch(t){case"SQL_STREAMING":return"CreateSqlStreamingTask";case"SQL_BATCH":return"CreateSqlBatchTask";case"JAR":return"CreateJarTask";default:return""}case"update":switch(t){case"SQL_STREAMING":return"UpdateSqlStreamingTask";case"SQL_BATCH":return"UpdateSqlBatchTask";case"JAR":return"UpdateJarTask";default:return""}case"view":switch(t){case"SQL_STREAMING":return"ViewSqlStreamingTask";case"SQL_BATCH":return"ViewSqlBatchTask";case"JAR":return"ViewJarTask";default:return""}default:return""}}}},v=y,b=(n("bdf5"),Object(g["a"])(v,a,o,!1,null,"bdf75416",null));t["default"]=b.exports},7243:function(e,t,n){},8173:function(e,t,n){},b199:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return y}));var a=n("b775"),o=n("4328"),r=n.n(o);function s(e,t,n,o,s,i,l){return Object(a["a"])({url:"/listTask",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{pageNum:e,pageSize:t,jobName:n,jobId:o,jobType:s,status:i,open:l}})}function i(e){return Object(a["a"])({url:"/open",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function l(e){return Object(a["a"])({url:"/close",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function c(e){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function u(e){return Object(a["a"])({url:"/stop",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function d(e,t){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e,savepointId:t}})}function f(e){return Object(a["a"])({url:"/savepoint",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function p(e){return Object(a["a"])({url:"/copyConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function m(e){return Object(a["a"])({url:"/delete",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{id:e}})}function g(e){return Object(a["a"])({url:"/checkfSql",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:{flinkSql:e}})}function h(e){return Object(a["a"])({url:"/addConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:e})}function w(e){return Object(a["a"])({url:"/editConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:e})}function y(e){return Object(a["a"])({url:"/jobConfigHistoryPage",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return r.a.stringify(e)}],data:e})}},b820:function(e,t,n){"use strict";n("8173")},bdf5:function(e,t,n){"use strict";n("7243")}}]);