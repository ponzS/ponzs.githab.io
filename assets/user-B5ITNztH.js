import{af as r}from"./index-JDhQ3JDR.js";import{a as o}from"./axios-upsvKRUO.js";const l=r("auth",{state:()=>({token:localStorage.getItem("token")||"",user:null}),actions:{async login(t){try{const e=(await o.post("http://localhost:5001/auth/login",t)).data.access_token;this.token=e,localStorage.setItem("token",e);const a=await o.get("http://localhost:5001/auth/login",{headers:{Authorization:`Bearer ${e}`}});this.user=a.data}catch{throw new Error("登录失败")}},logout(){this.token="",this.user=null,localStorage.removeItem("token")}},getters:{isAuthenticated:t=>!!t.token,getUser:t=>t.user}});export{l as u};
