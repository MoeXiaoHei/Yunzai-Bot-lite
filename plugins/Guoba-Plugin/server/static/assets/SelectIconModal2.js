import{a as e,b as a,r as l,fV as i,w as t,v as s,G as o,e as u,o as n,f as v,k as c,j as r,aj as d,i as p,bg as m,N as f,x as b,F as h,h as g,U as y,l as B,m as w,fj as x,M as k,fW as L,bB as _,ah as j,ai as C}from"./index.js";import M from"./IconUploader2.js";import"./esm.js";const R=e=>(j("data-v-4c6a2dc7"),e=e(),C(),e),U=[B(" 选择图标 "),R((()=>d("span",{class:"tip"},"按住这里可拖动",-1)))],A={class:"icon-view-wrap"},I={class:"icon-view"},S=["onClick"],$=B("添加10个空图标");var N=e(a({__name:"SelectIconModal",props:{visible:Boolean,cell:Object,iconB64List:Array},emits:["update:visible"],setup(e,{emit:a}){const j=e,{createMessage:C}=_(),R=l(!1),N=l({show:!1,selected:null}),V=()=>{a("update:visible",!1)},z=()=>{R.value=!R.value,R.value&&L.info("请点击想要替换的图标")},D=l(null),{x:F,y:G,isDragging:O}=i(D),T=l(0),W=l(0),q=l(!1),E=l(0),H=l(0),J=l(0),K=l(0),P=l({left:0,right:0,top:0,bottom:0});t([F,G],(()=>{if(!q.value){T.value=F.value,W.value=G.value;const e=document.body.getBoundingClientRect(),a=D.value.getBoundingClientRect();P.value.right=e.width-a.width,P.value.bottom=e.height-a.height,J.value=E.value,K.value=H.value}q.value=!0})),t(O,(()=>{O||(q.value=!1)})),s((()=>{q.value&&(E.value=J.value+Math.min(Math.max(P.value.left,F.value),P.value.right)-T.value,H.value=K.value+Math.min(Math.max(P.value.top,G.value),P.value.bottom)-W.value)}));const Q=o((()=>({transform:`translate(${E.value}px, ${H.value}px)`})));function X(){let e=j.iconB64List,a=!1;for(let l=1;l<e.length;l++)if(!e[l]){a=!0;break}a?C.warn("仍有未利用的空白图标，无法继续添加"):e.push(...Array(10).fill(""))}return(l,i)=>{const t=u("a-button"),s=u("a-space");return n(),v(h,null,[c(b(k),{visible:e.visible,"onUpdate:visible":i[0]||(i[0]=e=>x(visible)?visible.value=e:null),onCancel:V,width:"420px",closable:!1,footer:null,mask:!1},{title:r((()=>[d("div",{ref_key:"modalTitleRef",ref:D,style:{width:"100%",cursor:"move"}},U,512)])),modalRender:r((({originVNode:e})=>[d("div",{style:f(b(Q))},[(n(),p(m(e)))],4)])),default:r((()=>[d("div",A,[d("div",I,[(n(!0),v(h,null,g(new Array(e.iconB64List.length-1).toString().split(","),((l,i)=>(n(),v("div",{class:y(R.value?"edit-icon":"medium-icon"),style:f({background:`url(${e.iconB64List[i+1]}) 0 0 no-repeat`,backgroundSize:"50px 50px"}),onClick:e=>{return l=i,void(R.value?(N.value.show=!0,N.value.selected=l+1):(j.cell.icon=l+1,a("update:visible",!1)));var l}},null,14,S)))),256)),c(s,{class:"add-icon",style:{padding:"10px",width:"100%"}},{default:r((()=>[c(t,{type:R.value?"danger":"success",onClick:z},{default:r((()=>[B(w(R.value?"完成":"替换图标"),1)])),_:1},8,["type"]),c(t,{type:"primary",onClick:X},{default:r((()=>[$])),_:1})])),_:1})])])])),_:1},8,["visible"]),c(M,{uploader:N.value,iconB64List:e.iconB64List,"onUpdate:iconB64List":i[1]||(i[1]=e=>x(iconB64List)?iconB64List.value=e:null)},null,8,["uploader","iconB64List"])],64)}}}),[["__scopeId","data-v-4c6a2dc7"]]);export{N as default};
