var e=(e,t,m)=>new Promise(((o,a)=>{var s=e=>{try{i(m.next(e))}catch(t){a(t)}},r=e=>{try{i(m.throw(e))}catch(t){a(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,r);i((m=m.apply(e,t)).next())}));import{B as t}from"./BasicForm.js";import{b as m,bD as o,H as a,q as s,e as r,o as i,i as l,j as n,k as d,x as p,l as u,w as h}from"./index.js";import{a as j,B as c}from"./index31.js";import{s as f}from"./miao.data.js";import g from"./ThemeConfigForm.js";import"./index5.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index9.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./index2.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";import"./index11.js";import"./ArrowLeftOutlined.js";import"./lodash.default.js";import"./throttle.js";import"./merge.js";import"./miao.api.js";import"./base64Conver.js";const b=u("关闭"),y=m({__name:"SettingDrawer",props:{model:{type:Object,default:()=>({})},themeName:String,themeNames:Array,themeStyle:Object,debugThemeName:String},emits:["register","update:model","update:themeStyle","update:debugThemeName"],setup(m,{emit:u}){const y=m,[x,{setDrawerProps:w,closeDrawer:N}]=j(),[S,{getFieldsValue:C,setFieldsValue:F,updateSchema:v}]=o({schemas:f,labelWidth:120,labelAlign:"right",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:19},showActionButtonGroup:!1,baseColProps:{span:24}}),A=window.innerWidth>=600?"600px":"100%";function T(t,m){return e(this,null,(function*(){S(t),yield function(){return e(this,null,(function*(){let e=[];yield v({field:"themeSet",componentProps:{onChange(t){t?Array.isArray(e)&&e.length>0?F({theme:e}):F({theme:["default"]}):(e=C().theme,F({theme:"all"}))}}}),h((()=>y.themeNames),(e=>{Array.isArray(e)||(e=[]),0===e.length&&(e=["default"]);let t=e.map((e=>({label:e,value:e})));v([{field:"theme",componentProps:{options:t}},{field:"themeExclude",componentProps:{options:t}}])}),{deep:!0,immediate:!0})}))}(),yield F(y.model),h((()=>y.model),(()=>F(y.model))),h(m,P,{immediate:!0})}))}function P(e){e.themeSet="all"!==e.theme,u("update:model",e)}return a((()=>{w({visible:!0}),s((()=>N()))})),(e,o)=>{const a=r("a-col"),s=r("a-button"),h=r("a-row");return i(),l(p(c),{title:"高级设置",width:p(A),placement:"left",showFooter:"",maskStyle:{backgroundColor:"rgba(0,0,0,0.2)"},onRegister:p(x)},{footer:n((()=>[d(h,{type:"flex",justify:"space-between"},{default:n((()=>[d(a),d(a,null,{default:n((()=>[d(s,{onClick:p(N)},{default:n((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})])),default:n((()=>[d(p(t),{onRegister:T}),d(g,{model:m.themeStyle,themeName:m.themeName,debugThemeName:m.debugThemeName,themeNames:m.themeNames,"onUpdate:model":o[0]||(o[0]=e=>u("update:themeStyle",e)),"onUpdate:debugThemeName":o[1]||(o[1]=e=>u("update:debugThemeName",e))},null,8,["model","themeName","debugThemeName","themeNames"])])),_:1},8,["width","maskStyle","onRegister"])}}});export{y as default};
