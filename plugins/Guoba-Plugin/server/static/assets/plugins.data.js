import{p as t,g as e}from"./guoba.js";import{k as a}from"./index.js";const d=[{title:"插件标题",dataIndex:"title",width:200},{title:"插件名称",dataIndex:"name",width:200,customRender:({record:t})=>t.link?a("a",{href:t.link,target:"_blank"},[t.name]):t.name},{title:"插件作者",dataIndex:"author",width:180,customRender:({record:e})=>t(e)},{title:"插件说明",dataIndex:"description",align:"left"},{title:"状态",dataIndex:"installed",align:"left",width:240,customRender:({record:t})=>e(t,8)}];export{d as columns};