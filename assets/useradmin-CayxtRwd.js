import{n as x,D as A,o as i,q as I,E as w,t as v,u as f,v as t,A as _,B as n,F as r,G as k,H as y,C as c,_ as S}from"./index-kw_B4tjD.js";import{a as B}from"./axios-upsvKRUO.js";import{u as D}from"./user-CiBam94h.js";const E={style:{"background-color":"#000",width:"100vw",height:"100vh"}},z={class:"profile"},M={class:"info-item"},N={class:"info-item"},h={class:"info-item"},q={class:"info-item balance"},R={key:0,class:"message"},T={key:1,class:"modal"},F={class:"modal-content"},G={class:"info-item"},H={class:"info-item"},L={key:0,class:"message"},V="http://ponzs.com",P=x({__name:"useradmin",setup(j){const d=D(),$=A();d.isAuthenticated||$.push("/login");const a=i({email:"",steamId:"",nickname:"",balance:0}),o=i(""),m=i(!1),l=i({toEmail:"",amount:0}),p=i("");I(async()=>{try{const s=await B.get(`${V}/api/auth/profile`,{headers:{Authorization:`Bearer ${d.token}`}});a.value=s.data}catch{o.value="获取个人信息失败"}});const C=async()=>{try{const s=await B.put(`${V}/api/auth/update-profile`,{nickname:a.value.nickname},{headers:{Authorization:`Bearer ${d.token}`}});o.value="个人信息更新成功"}catch(s){s.response&&s.response.status===409?o.value="昵称已存在，请更换昵称":o.value="更新个人信息失败"}},U=async()=>{try{const s=await B.post(`${V}/api/auth/transfer`,l.value,{headers:{Authorization:`Bearer ${d.token}`}});p.value="转账成功",a.value.balance-=l.value.amount,m.value=!1}catch{p.value="转账失败"}};return(s,e)=>{const b=w("UButton"),g=w("UInput");return v(),f("div",E,[e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=t("br",null,null,-1)),e[17]||(e[17]=t("br",null,null,-1)),t("div",z,[e[14]||(e[14]=t("h2",null,"个人信息",-1)),t("form",{onSubmit:_(C,["prevent"])},[t("div",M,[e[4]||(e[4]=t("label",null,"邮箱:",-1)),t("span",null,n(a.value.email),1)]),t("div",N,[e[5]||(e[5]=t("label",null,"Steam ID:",-1)),t("span",null,n(a.value.steamId),1)]),t("div",h,[e[6]||(e[6]=t("label",null,"昵称:",-1)),t("span",null,n(a.value.nickname),1)]),t("div",q,[e[7]||(e[7]=t("label",null,"美金余额:",-1)),t("span",null,n(a.value.balance),1)]),r(b,{type:"submit"},{default:k(()=>e[8]||(e[8]=[y("刷新")])),_:1})],32),o.value?(v(),f("div",R,n(o.value),1)):c("",!0),r(b,{onClick:e[0]||(e[0]=u=>m.value=!0)},{default:k(()=>e[9]||(e[9]=[y("转账")])),_:1}),m.value?(v(),f("div",T,[t("div",F,[t("span",{class:"close",onClick:e[1]||(e[1]=u=>m.value=!1)},"×"),e[13]||(e[13]=t("h2",null,"转账",-1)),t("form",{onSubmit:_(U,["prevent"])},[t("div",G,[e[10]||(e[10]=t("label",null,"对方的账户邮箱:",-1)),r(g,{modelValue:l.value.toEmail,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value.toEmail=u),type:"email",required:""},null,8,["modelValue"])]),t("div",H,[e[11]||(e[11]=t("label",null,"转账金额:",-1)),r(g,{modelValue:l.value.amount,"onUpdate:modelValue":e[3]||(e[3]=u=>l.value.amount=u),type:"number",required:""},null,8,["modelValue"])]),r(b,{type:"submit"},{default:k(()=>e[12]||(e[12]=[y("转账")])),_:1})],32),p.value?(v(),f("div",L,n(p.value),1)):c("",!0)])])):c("",!0)])])}}}),Q=S(P,[["__scopeId","data-v-4e077a33"]]);export{Q as default};
