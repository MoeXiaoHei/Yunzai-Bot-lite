import{b as s,bv as a,G as e,o as t,f as l,k as c,x,fg as n,aj as r,m as d,by as m}from"./index.js";import{h as f}from"./header.js";const i={class:"lg:flex"},o={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},p={class:"md:text-lg text-md"},v=r("span",{class:"text-secondary"}," 今日晴，20℃ - 32℃！ ",-1),u=m('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> 待办 </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> 项目 </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> 团队 </span><span class="text-2xl">300</span></div></div>',1),y=s({__name:"WorkbenchHeader",setup(s){const m=a(),y=e((()=>m.getUserInfo));return(s,a)=>(t(),l("div",i,[c(x(n),{src:x(y).avatar||x(f),size:72,class:"!mx-auto !block"},null,8,["src"]),r("div",o,[r("h1",p,"早安, "+d(x(y).realName)+", 开始您一天的工作吧！",1),v]),u]))}});export{y as default};
