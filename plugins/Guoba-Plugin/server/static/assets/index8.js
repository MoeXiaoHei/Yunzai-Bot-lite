import{b as t,Q as s,r as e,am as i,o as r,i as o,j as p,aj as a,k as n,x as m,e as j}from"./index.js";import d from"./TermsOfService.js";import l from"./TransferBox.js";import"./Step1.js";import"./hooks.js";import"./BasicForm.js";import"./index5.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index9.js";import"./useFormItem.js";/* empty css      */import"./transButton.js";import"./index2.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index6.js";import"./uniqBy.js";import"./lodash.default.js";import"./throttle.js";import"./merge.js";import"./Step1-1.js";/* empty css                                                      */import"./ModeBox.js";import"./StepBtn.js";import"./Step1-2.js";import"./Step1-3.js";import"./Step1-4.js";import"./common.js";import"./Step2.js";const u={class:"transfer-container"},c=t({__name:"index",setup(t){const{prefixCls:c}=s("guoba-v2-update"),x=e(!1),f=e(!1),_=e("加载中"),v=e(!1);function S(){x.value=!0}return window.innerWidth<=768&&(v.value=!0),i("prefixCls",c),i("isMobile",v),i("setPageLoading",(function(t,s){f.value=t,_.value=s||"加载中"})),(t,s)=>{const e=j("a-card"),i=j("a-spin");return r(),o(i,{spinning:f.value,tip:_.value,"wrapper-class-name":m(c)},{default:p((()=>[a("div",u,[n(e,{class:"box-card",title:"迁移云崽"},{default:p((()=>[x.value?(r(),o(l,{key:1})):(r(),o(d,{key:0,onOk:S}))])),_:1})])])),_:1},8,["spinning","tip","wrapper-class-name"])}}});export{c as default};