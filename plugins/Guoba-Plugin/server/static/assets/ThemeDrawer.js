var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&o(e,n,t[n]);return e},s=(e,t,n)=>new Promise(((i,r)=>{var a=e=>{try{l(n.next(e))}catch(t){r(t)}},o=e=>{try{l(n.throw(e))}catch(t){r(t)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,o);l((n=n.apply(e,t)).next())}));import{a as u,B as m}from"./index31.js";import{b as p,z as c,Q as d,eM as f,r as y,G as g,x as j,e as v,o as h,i as w,j as x,k as _,aj as b,e4 as k,R as O,m as P,a0 as C,a1 as L,l as N,bB as S,u as $}from"./index.js";import{u as B}from"./index2.js";/* empty css      *//* empty css                                                      */import{c as I,d as M,p as T,e as F}from"./miao.api.js";import R from"./ThemeConfigModal.js";import"./index11.js";import"./ArrowLeftOutlined.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./base64Conver.js";import"./BasicForm.js";import"./index5.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index9.js";import"./useFormItem.js";import"./transButton.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";import"./miao.data.js";import"./lodash.default.js";import"./throttle.js";import"./merge.js";const D={style:{"margin-bottom":"8px"}},z=N("新增皮肤"),E={class:"theme-desc"},q=["src"],A=p({__name:"ThemeDrawer",props:{themeNames:Array},emits:["register","reload","update:themeNames"],setup(e,{emit:i}){const r=e,a=c(),{prefixCls:o}=d("miao-plugin-theme-drawer"),{createMessage:p,createConfirm:N}=S(),{createPrompt:A}=$(),W=f(),G=y(),J=y(!1),Q=y([]),[H,{closeDrawer:K,setDrawerProps:U}]=u((function(){te()})),[V,X]=B(),Y=g((()=>{let e={width:document.body.clientWidth>=768?700:"100%",title:"喵喵帮助皮肤",confirmLoading:j(J)};var i;return i=l(l(l({},j(a)),e),r),t(i,n({onOk:ne,onCancel:ne,onRegister:H}))}));let Z={};function ee(e,t="main"){let n=Z[e]||1;return`/api/plugin/miao/help/theme/$s?token=${W.liteToken}&themeName=${e}&_v=${n}`.replace("$s",t)}function te(){return s(this,null,(function*(){try{oe(!0),Q.value=yield I();let e=Q.value.map((e=>e.name));i("update:themeNames",e)}finally{oe(!1)}}))}function ne(){K()}let ie=null;function re(){return G.value.value="",G.value.click(),new Promise((e=>{let t=!1,n=()=>{setTimeout((()=>{t||e(null)}),500)},i=i=>{t||(t=!0,window.removeEventListener("focus",n),e(i))};window.addEventListener("focus",n),ie=function(e){return s(this,null,(function*(){var t;let n=null==(t=null==e?void 0:e.target)?void 0:t.files;n&&n.length<=0?i(null):i(n[0])}))}}))}function ae(){A({title:"新增皮肤",required:!0,placeholder:"请输入皮肤名称",okText:"确定并选择底图",onOk(e){return s(this,null,(function*(){let t=yield re();if(!t)return Promise.reject("未选择底图");yield M(e,t),yield te()}))}})}function oe(e){J.value=e,U({confirmLoading:e})}function le(e){"function"==typeof ie&&(ie(e),ie=null)}function se(e){return[{event:"change",text:"修改配置",icon:"ant-design:edit",onClick(){X.openModal(!0,e)}},{event:"changePic",text:"更改底图",icon:"akar-icons:image",onClick(){return s(this,null,(function*(){try{oe(!0);let t=yield re();if(t){yield T(e.name,t);let n=Z[e.name]||1;Z[e.name]=++n}}finally{oe(!1)}}))}},{event:"delete",text:"删除皮肤",icon:"ant-design:delete",onClick(){N({title:"删除",iconType:"warning",content:`确定要删除“${e.name}”吗？删除后不可恢复！`,onOk:()=>function(e){return s(this,null,(function*(){try{if("default"===e.name)return void p.warn("默认皮肤不可删除");oe(!0),yield F(e.name),yield te()}finally{oe(!1)}}))}(e)})}}]}return(e,t)=>{const n=v("a-button"),i=v("a-col"),r=v("a-row"),a=v("a-list-item-meta"),l=v("a-list-item"),s=v("a-list"),u=v("a-spin");return h(),w(j(m),C(L(j(Y))),{default:x((()=>[_(u,{wrapperClassName:`${j(o)} p-2`,spinning:J.value},{default:x((()=>[b("div",D,[_(n,{type:"primary",preIcon:"ant-design:plus",onClick:ae},{default:x((()=>[z])),_:1})]),_(s,{size:"large",bordered:"",dataSource:Q.value},{renderItem:x((({item:e})=>[_(l,null,{actions:x((()=>["default"!==e.name?(h(),w(j(k),{key:0,trigger:["click"],dropMenuList:se(e)},{default:x((()=>[_(n,{type:"primary",shape:"circle",preIcon:"ant-design:setting"})])),_:2},1032,["dropMenuList"])):O("",!0)])),default:x((()=>[_(a,{title:e.name},{description:x((()=>[b("div",E,[_(r,{type:"flex",gutter:8},{default:x((()=>[_(i,{style:{width:"150px"}},{default:x((()=>[b("img",{src:ee(e.name),alt:"皮肤底图"},null,8,q)])),_:2},1024),_(i,{style:{flex:"1"}},{default:x((()=>[b("pre",null,P(JSON.stringify(e.style,null,2)),1)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["dataSource"])])),_:1},8,["wrapperClassName","spinning"]),_(R,{onRegister:j(V),onSuccess:te},null,8,["onRegister"]),b("input",{ref_key:"uploadBgRef",ref:G,type:"file",name:"upload-bg",accept:"image/bmp,image/jpeg,image/png",onChange:le,style:{display:"none"}},null,544)])),_:1},16)}}});export{A as default};
