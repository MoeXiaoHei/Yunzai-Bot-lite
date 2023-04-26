var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))a.call(t,o)&&n(e,o,t[o]);return e},i=(e,s)=>t(e,o(s));import{s as c,b as u,Q as p,G as d,a as f,e as g,o as w,f as h,F as y,L as v,i as b,j as m,l as C,m as k,V as D,R as x,U as B,N as $,W as O,p as P,aj as S,k as j,S as T,r as F,z as _,a3 as L,x as V,a4 as H,eb as A,w as E,q as I,a2 as N,Z as M,J as R,$ as q,K as z,h as G,a0 as J,a1 as K,c as Q,a5 as U,a8 as W,a6 as Z,a7 as X,v as Y,a9 as ee}from"./index.js";import{D as te}from"./index11.js";import{A as oe}from"./ArrowLeftOutlined.js";const{t:se}=c(),le={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:se("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:se("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},ae=r({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},le);var ne=f(u({name:"BasicDrawerFooter",props:i(r({},le),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=p("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:d((()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}}))}}}),[["render",function(e,t,o,s,l,a){const n=g("a-button");return e.showFooter||e.$slots.footer?(w(),h("div",{key:0,class:B(e.prefixCls),style:$(e.getStyle)},[e.$slots.footer?v(e.$slots,"footer",{key:1}):(w(),h(y,{key:0},[v(e.$slots,"insertFooter"),e.showCancelBtn?(w(),b(n,D({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:m((()=>[C(k(e.cancelText),1)])),_:1},16,["onClick"])):x("",!0),v(e.$slots,"centerFooter"),e.showOkBtn?(w(),b(n,D({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:m((()=>[C(k(e.okText),1)])),_:1},16,["type","onClick","loading"])):x("",!0),v(e.$slots,"appendFooter")],64))],6)):x("",!0)}]]);const re=u({name:"BasicDrawerHeader",components:{BasicTitle:O,ArrowLeftOutlined:oe},props:{isDetail:P.bool,showDetailBack:P.bool,title:P.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:o}=p("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}}),ie={key:1};var ce=f(re,[["render",function(e,t,o,s,l,a){const n=g("BasicTitle"),r=g("ArrowLeftOutlined");return e.isDetail?(w(),h("div",{key:1,class:B([e.prefixCls,`${e.prefixCls}--detail`])},[S("span",{class:B(`${e.prefixCls}__twrap`)},[e.showDetailBack?(w(),h("span",{key:0,onClick:t[0]||(t[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[j(r,{class:B(`${e.prefixCls}__back`)},null,8,["class"])])):x("",!0),e.title?(w(),h("span",ie,k(e.title),1)):x("",!0)],2),S("span",{class:B(`${e.prefixCls}__toolbar`)},[v(e.$slots,"titleToolbar")],2)],2)):(w(),b(n,{key:0,class:B(e.prefixCls)},{default:m((()=>[v(e.$slots,"title"),C(" "+k(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))}]]);var ue=f(u({components:{Drawer:te,ScrollContainer:T,DrawerFooter:ne,DrawerHeader:ce},inheritAttrs:!1,props:ae,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const o=F(!1),s=_(),l=F(null),{t:a}=c(),{prefixVar:n,prefixCls:u}=p("basic-drawer"),f={setDrawerProps:function(e){l.value=L(V(l)||{},e),Reflect.has(e,"visible")&&(o.value=!!e.visible)},emitVisible:void 0},g=N();g&&t("register",f,g.uid);const w=d((()=>L(H(e),V(l)))),h=d((()=>{const e=i(r(r({placement:"right"},V(s)),V(w)),{visible:V(o)});e.title=void 0;const{isDetail:t,width:l,wrapClassName:a,getContainer:c}=e;if(t){l||(e.width="100%");const t=`${u}__detail`;e.class=a?`${a} ${t}`:t,c||(e.getContainer=`.${n}-layout-content`)}return e})),y=d((()=>r(r({},s),V(h)))),v=d((()=>{const{footerHeight:e,showFooter:t}=V(h);return t&&e?A(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),b=d((()=>({position:"relative",height:`calc(100% - ${V(v)})`}))),m=d((()=>{var e;return!!(null==(e=V(h))?void 0:e.loading)}));return E((()=>e.visible),((e,t)=>{e!==t&&(o.value=e)}),{deep:!0}),E((()=>o.value),(e=>{I((()=>{var o;t("visible-change",e),g&&(null==(o=f.emitVisible)||o.call(f,e,g.uid))}))})),{onClose:function(e){return s=this,l=null,a=function*(){const{closeFunc:s}=V(h);if(t("close",e),s&&M(s)){const e=yield s();o.value=!e}else o.value=!1},new Promise(((t,o)=>{var n=t=>{try{i(a.next(t))}catch(e){o(e)}},r=t=>{try{i(a.throw(t))}catch(e){o(e)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,r);i((a=a.apply(s,l)).next())}));var s,l,a},t:a,prefixCls:u,getMergeProps:w,getScrollContentStyle:b,getProps:h,getLoading:m,getBindValues:y,getFooterHeight:v,handleOk:function(){t("ok")}}}}),[["render",function(e,t,o,s,l,a){const n=g("DrawerHeader"),r=g("ScrollContainer"),i=g("DrawerFooter"),c=g("Drawer"),u=R("loading");return w(),b(c,D({class:e.prefixCls,onClose:e.onClose},e.getBindValues),q({default:m((()=>[z((w(),b(r,{style:$(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:m((()=>[v(e.$slots,"default")])),_:3},8,["style","loading-tip"])),[[u,e.getLoading]]),j(i,D(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),q({_:2},[G(Object.keys(e.$slots),(t=>({name:t,fn:m((o=>[v(e.$slots,t,J(K(o||{})))]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:m((()=>[v(e.$slots,"title")]))}:{name:"title",fn:m((()=>[j(n,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:m((()=>[v(e.$slots,"titleToolbar")])),_:3},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])}]]);const pe=Q({}),de=Q({});function fe(){if(!N())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=F(null),t=F(!1),o=F("");const s=()=>{const t=V(e);return t||X("useDrawer instance is undefined!"),t};return[function(s,l){W((()=>{e.value=null,t.value=null,pe[V(o)]=null})),V(t)&&Z()&&s===V(e)||(o.value=l,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{de[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:d((()=>de[~~V(o)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=s())||a.setDrawerProps({visible:e}),!t)return;if(l)return pe[V(o)]=null,void(pe[V(o)]=H(t));U(H(pe[V(o)]),H(t))||(pe[V(o)]=H(t))},closeDrawer:()=>{var e;null==(e=s())||e.setDrawerProps({visible:!1})}}]}const ge=e=>{const t=F(null),o=N(),s=F("");if(!N())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const e=V(t);if(e)return e;X("useDrawerInner instance is undefined!")};return Y((()=>{const t=pe[V(s)];t&&e&&M(e)&&I((()=>{e(t)}))})),[(e,l)=>{W((()=>{t.value=null})),s.value=l,t.value=e,null==o||o.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:d((()=>de[~~V(s)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]},we=ee(ue);export{we as B,ge as a,fe as u};