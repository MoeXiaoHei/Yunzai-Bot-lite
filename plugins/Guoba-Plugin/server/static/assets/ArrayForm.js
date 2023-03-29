import{a as e,b as a,p as n,Q as t,r,G as i,w as l,e as o,o as s,i as u,j as d,k as p,aj as m,m as c,f as v,h as f,R as j,F as x,U as y,bB as g}from"./index.js";import{B as h}from"./BasicForm.js";import"./index5.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index9.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./index2.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";const b=a({name:"ArrayForm",components:{BasicForm:h},props:{card:n.object.isRequired.type,form:n.object.isRequired.type,value:n.array.def((()=>[]))},emits:["redo","submit"],setup(e,{emit:a}){const{prefixCls:n}=t("array-form"),{createMessage:o}=g(),s=r(e.value),u=i((()=>{var a,n;return null!=(n=null==(a=e.card)?void 0:a.addBtnText)?n:"新增"}));function d(){return e=this,a=null,n=function*(){return s.value.filter((e=>!(null==e||""==e)))},new Promise(((t,r)=>{var i=e=>{try{o(n.next(e))}catch(a){r(a)}},l=e=>{try{o(n.throw(e))}catch(a){r(a)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,l);o((n=n.apply(e,a)).next())}));var e,a,n}return l((()=>e.value),(()=>s.value=e.value)),{emit:a,prefixCls:n,innerValue:s,addBtnText:u,onAdd:function(){var a;let n=null==(a=e.card)?void 0:a.lengthMax;null!=n&&s.value.length>=n?o.warn(`最多只能添加${n}个`):s.value.push("")},onRemove:function(a){var n;let t=null==(n=e.card)?void 0:n.lengthMin;null!=t&&s.value.length<=t?o.warn(`至少要留${t}个`):s.value.splice(a,1)},onSubmit:function(){var n;(null==(n=e.form)?void 0:n.actions)||(e.form.actions={validate:d}),a("submit",e.form)}}}}),w={style:{color:"#333333"}},C={class:"array-box"},k={class:"array-item"},B={style:{"text-align":"center"}},F=m("span",null,"保存",-1);var _=e(b,[["render",function(e,a,n,t,r,i){const l=o("icon"),g=o("a-tooltip"),h=o("a-input"),b=o("a-button"),_=o("a-popconfirm"),R=o("a-spin"),A=o("a-card");return s(),u(A,{title:e.card.title,class:y([e.prefixCls]),bordered:!1},{extra:d((()=>[p(g,{title:"刷新"},{default:d((()=>[p(l,{icon:"ant-design:redo",style:{cursor:"pointer"},onClick:a[0]||(a[0]=()=>e.emit("redo",e.form))})])),_:1})])),default:d((()=>[p(R,{spinning:e.form.loading},{default:d((()=>[m("div",w,c(e.card.desc),1),m("div",C,[(s(!0),v(x,null,f(e.innerValue,((a,n)=>(s(),v("div",k,[p(h,{value:e.innerValue[n],"onUpdate:value":a=>e.innerValue[n]=a,style:{"max-width":"880px"}},null,8,["value","onUpdate:value"]),e.card.allowDel?(s(),u(_,{key:0,title:"确定要删除吗？",onConfirm:()=>e.onRemove(n)},{default:d((()=>[p(b,{type:"primary","pre-icon":"ant-design:minus",size:"small",shape:"circle",danger:""})])),_:2},1032,["onConfirm"])):j("",!0)])))),256)),e.card.allowAdd?(s(),u(b,{key:0,type:"link","pre-icon":"ant-design:plus",size:"small",onClick:e.onAdd},{default:d((()=>[m("span",null,c(e.addBtnText),1)])),_:1},8,["onClick"])):j("",!0)]),m("div",B,[p(b,{type:"primary","pre-icon":"ant-design:save",onClick:e.onSubmit},{default:d((()=>[F])),_:1},8,["onClick"])])])),_:1},8,["spinning"])])),_:1},8,["title","class"])}]]);export{_ as default};