import{a as o,b as t,ap as e,T as n,eD as r,fu as a,G as s,o as i,i as u,j as l,k as c,s as d,ex as f,e as p}from"./index.js";import{B as m}from"./index21.js";var E=o(t({name:"ErrorAction",components:{Icon:e,Tooltip:n,Badge:m},setup(){const{t:o}=d(),{push:t}=r(),e=a();return{t:o,getCount:s((()=>e.getErrorLogListCount)),handleToErrorList:function(){t(f.ERROR_LOG_PAGE).then((()=>{e.setErrorLogListCount(0)}))}}}}),[["render",function(o,t,e,n,r,a){const s=p("Icon"),d=p("Badge"),f=p("Tooltip");return i(),u(f,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:l((()=>[c(d,{count:o.getCount,offset:[0,10],overflowCount:99},{default:l((()=>[c(s,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])}]]);export{E as default};