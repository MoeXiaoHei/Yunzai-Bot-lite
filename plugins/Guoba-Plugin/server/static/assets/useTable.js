var e=(e,t,a)=>new Promise(((o,l)=>{var n=e=>{try{r(a.next(e))}catch(t){l(t)}},s=e=>{try{r(a.throw(e))}catch(t){l(t)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,s);r((a=a.apply(e,t)).next())}));import{r as t,I as a,x as o,a6 as l,fI as n,w as s,a4 as r,a7 as i}from"./index.js";function c(c){const d=t(null),u=t(!1),g=t(null);let R;function w(){const e=o(d);return e||i("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[function(e,t){a((()=>{d.value=null,u.value=null})),o(u)&&l()&&e===o(d)||(d.value=e,g.value=t,c&&e.setProps(n(c)),u.value=!0,null==R||R(),R=s((()=>c),(()=>{c&&e.setProps(n(c))}),{immediate:!0,deep:!0}))},{reload:t=>e(this,null,(function*(){return yield w().reload(t)})),setProps:e=>{w().setProps(e)},redoHeight:()=>{w().redoHeight()},setLoading:e=>{w().setLoading(e)},getDataSource:()=>w().getDataSource(),getRawDataSource:()=>w().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const t=w().getColumns({ignoreIndex:e})||[];return r(t)},setColumns:e=>{w().setColumns(e)},setTableData:e=>w().setTableData(e),setPagination:e=>w().setPagination(e),deleteSelectRowByKey:e=>{w().deleteSelectRowByKey(e)},getSelectRowKeys:()=>r(w().getSelectRowKeys()),getSelectRows:()=>r(w().getSelectRows()),clearSelectedRowKeys:()=>{w().clearSelectedRowKeys()},setSelectedRowKeys:e=>{w().setSelectedRowKeys(e)},getPaginationRef:()=>w().getPaginationRef(),getSize:()=>r(w().getSize()),updateTableData:(e,t,a)=>w().updateTableData(e,t,a),deleteTableDataRecord:e=>w().deleteTableDataRecord(e),insertTableDataRecord:(e,t)=>w().insertTableDataRecord(e,t),updateTableDataRecord:(e,t)=>w().updateTableDataRecord(e,t),findTableDataRecord:e=>w().findTableDataRecord(e),getRowSelection:()=>r(w().getRowSelection()),getCacheColumns:()=>r(w().getCacheColumns()),getForm:()=>o(g),setShowPagination:t=>e(this,null,(function*(){w().setShowPagination(t)})),getShowPagination:()=>r(w().getShowPagination()),expandAll:()=>{w().expandAll()},expandRows:e=>{w().expandRows(e)},collapseAll:()=>{w().collapseAll()},scrollTo:e=>{w().scrollTo(e)}}]}export{c as u};
