import{d as e,p as a}from"./esm.js";import{a as t,b as l,r as s,e as o,o as i,i as d,j as n,aj as c,x as r,f as u,N as p,k as v,R as m,M as f,l as g,ah as b,ai as y}from"./index.js";const h=e=>(b("data-v-8cdd7b3a"),e=e(),y(),e),w={class:"frame"},k={key:1},x={class:"wrap"},L=h((()=>c("div",null,"替换",-1))),R={class:"wrap"},_=h((()=>c("input",{type:"file",id:"upload1",style:{display:"none"},name:"icon",accept:"image/bmp,image/jpeg,image/png"},null,-1))),j=g("选择图片"),I={key:0},B=g("确定"),U=h((()=>c("div",{class:"tip"},"请使图片尽量填满取景框",-1)));var A=t(l({__name:"IconUploader",props:{uploader:Object,iconB64List:Array},setup(t){const l=t,g=s(null),b=()=>{let e=document.getElementById("upload1");void 0===e.bind&&(e.bind=!0,e.addEventListener("change",(e=>{let a=e.target.files;if(0!==a.size){let e=a[0],t=new FileReader;t.readAsDataURL(e),t.onload=()=>{g.value=t.result}}}))),e.click()},y=()=>{let e=l.uploader.selected;a.getFile().then((a=>{let t=document.createElement("canvas");t.width=100,t.height=100;let s=new FileReader;s.onload=function(){let a=t.getContext("2d"),o=new Image;o.src=s.result,o.onload=function(){a.textAlign="center",a.font="bold 14px sans-serif",a.drawImage(o,0,0,80,80),a.fillText(e,40,95),l.iconB64List[e]=t.toDataURL(),g.value=null}},s.readAsDataURL(a)}))};return document.getElementById("upload1"),(a,l)=>{const s=o("a-button");return i(),d(r(f),{visible:t.uploader.show,"onUpdate:visible":l[0]||(l[0]=e=>t.uploader.show=e),width:"420px",closable:!1,footer:null},{default:n((()=>[c("div",w,[g.value?(i(),d(r(e),{key:0,boxStyle:{height:"300px",width:"100%",backgroundColor:"#f8f8f8"},img:g.value,options:{viewMode:1,dragMode:"move",aspectRatio:1}},null,8,["img"])):(i(),u("div",k,[c("div",x,[L,c("div",{class:"icon",style:p(`background: url(${t.iconB64List[t.uploader.selected]}) 0 0 no-repeat`)},null,4)])])),c("div",R,[_,v(s,{block:"",type:"info",onClick:b},{default:n((()=>[j])),_:1}),g.value?(i(),u("div",I,[v(s,{block:"",type:"success",onClick:y},{default:n((()=>[B])),_:1}),U])):m("",!0)])])])),_:1},8,["visible"])}}}),[["__scopeId","data-v-8cdd7b3a"]]);export{A as default};
