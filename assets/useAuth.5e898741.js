import{k as h,l as r,m as g}from"./index.13d54dcd.js";const f=h("auth",()=>{const t=r("autenticating"),n=r(null),e=r(null),l=r(null);function u(s,o){t.value="autenticated",n.value=s,e.value=o,i(e.value,t.value,n.value)}function i(s,o,c){localStorage.setItem("idToken",s),localStorage.setItem("status",o),localStorage.setItem("user",JSON.stringify(c))}function a(){t.value="autenticated",n.value=null,e.value=null,l.value=null,localStorage.clear()}return{status:t,user:n,token:e,resfreshToken:l,getUserData:u,clearEntryes:a}}),m=()=>{const t="http://localhost:4000",n=f(),e=g();return{registerUser:async a=>{await fetch(`${t}/api/auth/register`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)}).then(s=>{s.ok&&e.push({name:"login"})})},loginUser:async a=>{await fetch(`${t}/api/auth`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)}).then(s=>{s.json().then(o=>{o.ok&&(n.getUserData(o.user,o.token),e.push({name:"platform"}))})})},logoutUser:()=>{e.push({name:"login"}),n.clearEntryes()}}};export{m as u};
