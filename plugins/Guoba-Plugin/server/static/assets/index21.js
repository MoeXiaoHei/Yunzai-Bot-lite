import{b as t,G as e,c as n,r as a,w as o,I as l,_ as r,k as u,au as c,aD as s,b5 as i,aG as v,aH as f,fK as p,aw as d,av as y,d1 as b,c$ as m,fL as g,az as x,d2 as h,d3 as S,K as w,aK as C}from"./index.js";function O(t){var e,n=t.prefixCls,a=t.value,o=t.current,l=t.offset,r=void 0===l?0:l;return r&&(e={position:"absolute",top:"".concat(r,"00%"),left:0}),u("p",{style:e,class:c("".concat(n,"-only-unit"),{current:o})},[a])}function N(t,e,n){for(var a=t,o=0;(a+10)%10!==e;)a+=n,o+=n;return o}var j=t({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(t){var c=e((function(){return Number(t.value)})),s=e((function(){return Math.abs(t.count)})),i=n({prevValue:c.value,prevCount:s.value}),v=function(){i.prevValue=c.value,i.prevCount=s.value},f=a();return o(c,(function(){clearTimeout(f.value),f.value=setTimeout((function(){v()}),1e3)}),{flush:"post"}),l((function(){clearTimeout(f.value)})),function(){var e,n={},a=c.value;if(i.prevValue===a||Number.isNaN(a)||Number.isNaN(i.prevValue))e=[O(r(r({},t),{current:!0}))],n={transition:"none"};else{e=[];for(var o=a+10,l=[],f=a;f<=o;f+=1)l.push(f);var p=l.findIndex((function(t){return t%10===i.prevValue}));e=l.map((function(e,n){var a=e%10;return O(r(r({},t),{value:a,offset:n-p,current:n===p}))}));var d=i.prevCount<s.value?1:-1;n={transform:"translateY(".concat(-N(i.prevValue,a,d),"00%)")}}return u("span",{class:"".concat(t.prefixCls,"-only"),style:n,onTransitionend:function(){return v()}},[e])}}}),T=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n},P=t({name:"ScrollNumber",inheritAttrs:!1,props:{prefixCls:String,count:f.any,component:String,title:f.any,show:Boolean},setup:function(t,e){var n=e.attrs,a=e.slots,o=s("scroll-number",t).prefixCls;return function(){var e,l=r(r({},t),n);l.prefixCls;var s=l.count,f=l.title;l.show;var p=l.component,d=void 0===p?"sup":p,y=l.class,b=l.style,m=T(l,["prefixCls","count","title","show","component","class","style"]),g=r(r({},m),{style:b,"data-show":t.show,class:c(o.value,y),title:f}),x=s;if(s&&Number(s)%1==0){var h=String(s).split("");x=h.map((function(t,e){return u(j,{prefixCls:o.value,count:Number(s),value:t,key:h.length-e},null)}))}b&&b.borderColor&&(g.style=r(r({},b),{boxShadow:"0 0 0 1px ".concat(b.borderColor," inset")}));var S=i(null===(e=a.default)||void 0===e?void 0:e.call(a));return S&&S.length?v(S,{class:c("".concat(o.value,"-custom-component"))},!1):u(d,g,{default:function(){return[x]}})}}});function k(t){return-1!==p.indexOf(t)}var A=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n},B=t({name:"ABadgeRibbon",inheritAttrs:!1,props:{prefix:String,color:{type:String},text:f.any,placement:{type:String,default:"end"}},slots:["text"],setup:function(t,n){var a=n.attrs,o=n.slots,l=s("ribbon",t),c=l.prefixCls,i=l.direction,v=e((function(){return k(t.color)})),f=e((function(){var e;return[c.value,"".concat(c.value,"-placement-").concat(t.placement),(e={},y(e,"".concat(c.value,"-rtl"),"rtl"===i.value),y(e,"".concat(c.value,"-color-").concat(t.color),v.value),e)]}));return function(){var e,n,l=a.class,s=a.style,i=A(a,["class","style"]),p={},y={};return t.color&&!v.value&&(p.background=t.color,y.color=t.color),u("div",d({class:"".concat(c.value,"-wrapper")},i),[null===(e=o.default)||void 0===e?void 0:e.call(o),u("div",{class:[f.value,l],style:r(r({},p),s)},[u("span",{class:"".concat(c.value,"-text")},[t.text||(null===(n=o.text)||void 0===n?void 0:n.call(o))]),u("div",{class:"".concat(c.value,"-corner"),style:y},null)])])}}}),I=t({name:"ABadge",Ribbon:B,inheritAttrs:!1,props:{count:f.any,showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:f.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String},slots:["text","count"],setup:function(t,n){var l=n.slots,i=n.attrs,f=s("badge",t),p=f.prefixCls,O=f.direction,N=e((function(){return t.count>t.overflowCount?"".concat(t.overflowCount,"+"):t.count})),j=e((function(){return null!==t.status&&void 0!==t.status||null!==t.color&&void 0!==t.color})),T=e((function(){return"0"===N.value||0===N.value})),A=e((function(){return t.dot&&!T.value})),B=e((function(){return A.value?"":N.value})),I=e((function(){return(null===B.value||void 0===B.value||""===B.value||T.value&&!t.showZero)&&!A.value})),V=a(t.count),_=a(B.value),z=a(A.value);o([function(){return t.count},B,A],(function(){I.value||(V.value=t.count,_.value=B.value,z.value=A.value)}),{immediate:!0});var K=e((function(){var e;return y(e={},"".concat(p.value,"-status-dot"),j.value),y(e,"".concat(p.value,"-status-").concat(t.status),!!t.status),y(e,"".concat(p.value,"-status-").concat(t.color),k(t.color)),e})),R=e((function(){return t.color&&!k(t.color)?{background:t.color}:{}})),E=e((function(){var e;return y(e={},"".concat(p.value,"-dot"),z.value),y(e,"".concat(p.value,"-count"),!z.value),y(e,"".concat(p.value,"-count-sm"),"small"===t.size),y(e,"".concat(p.value,"-multiple-words"),!z.value&&_.value&&_.value.toString().length>1),y(e,"".concat(p.value,"-status-").concat(t.status),!!t.status),y(e,"".concat(p.value,"-status-").concat(t.color),k(t.color)),e}));return function(){var e,n,a,o=t.offset,s=t.title,f=t.color,N=i.style,T=b(l,t,"text"),A=p.value,B=V.value,z=m(null===(n=l.default)||void 0===n?void 0:n.call(l));z=z.length?z:null;var G=!(I.value&&!l.count),Z=function(){if(!o)return r({},N);var t={marginTop:g(o[1])?"".concat(o[1],"px"):o[1]};return"rtl"===O.value?t.left="".concat(parseInt(o[0],10),"px"):t.right="".concat(-parseInt(o[0],10),"px"),r(r({},t),N)}(),D=null!=s?s:"string"==typeof B||"number"==typeof B?B:void 0,H=G||!T?null:u("span",{class:"".concat(A,"-status-text")},[T]),L="object"===x(B)||void 0===B&&l.count?v(null!=B?B:null===(a=l.count)||void 0===a?void 0:a.call(l),{style:Z},!1):null,M=c(A,(y(e={},"".concat(A,"-status"),j.value),y(e,"".concat(A,"-not-a-wrapper"),!z),y(e,"".concat(A,"-rtl"),"rtl"===O.value),e),i.class);if(!z&&j.value){var Y=Z.color;return u("span",d(d({},i),{},{class:M,style:Z}),[u("span",{class:K.value,style:R.value},null),u("span",{style:{color:Y},class:"".concat(A,"-status-text")},[T])])}var $=h(z?"".concat(A,"-zoom"):"",{appear:!1}),q=r(r({},Z),t.numberStyle);return f&&!k(f)&&((q=q||{}).background=f),u("span",d(d({},i),{},{class:M}),[z,u(S,$,{default:function(){return[w(u(P,{prefixCls:t.scrollNumberPrefixCls,show:G,class:E.value,count:_.value,title:D,style:q,key:"scrollNumber"},{default:function(){return[L]}}),[[C,G]])]}}),H])}}});export{I as B,B as R};