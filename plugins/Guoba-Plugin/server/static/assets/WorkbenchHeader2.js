import{b as s,p as e,bv as t,G as a,e as l,o as r,f as n,k as o,x as c,aj as d,m as i}from"./index.js";import{t as x,w as m}from"./common.js";const u={class:"lg:flex"},f={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},p={class:"md:text-lg text-md"},v={class:"text-secondary"},g={class:"flex flex-1 justify-end md:mt-0 mt-4"},j={class:"flex flex-col justify-center text-right"},y=d("span",{class:"text-secondary"}," Cookie用户数 ",-1),h={class:"text-2xl"},b={class:"flex flex-col justify-center text-right md:mx-16 mx-12"},k=d("span",{class:"text-secondary"}," 群聊数量 ",-1),C={class:"text-2xl"},q={class:"flex flex-col justify-center text-right md:mr-10 mr-4"},w=d("span",{class:"text-secondary"}," 好友数量 ",-1),$={class:"text-2xl"},G=s({__name:"WorkbenchHeader",props:{data:e.object.isRequired,weather:e.string.isRequired},setup(s){const e=s,G=t(),I=a((()=>G.getUserInfo)),R=a((()=>{var s;if(!I.value)return"loading…";let e=x(),t=m();return`${e}，${null==(s=I.value)?void 0:s.realName}，${t}`})),_=a((()=>{let{weather:s}=e;return s||"loading…"}));return(e,t)=>{const a=l("GAvatar");return r(),n("div",u,[o(a,{id:c(I).userId,qs:100,size:60,class:"!mx-auto !block"},null,8,["id"]),d("div",f,[d("h1",p,i(c(R)),1),d("span",v,i(c(_)),1)]),d("div",g,[d("div",j,[y,d("span",h,i(s.data.cookieCount),1)]),d("div",b,[k,d("span",C,i(s.data.groupCount),1)]),d("div",q,[w,d("span",$,i(s.data.friendCount),1)])])])}}});export{G as default};