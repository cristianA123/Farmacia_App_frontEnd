import{_ as p,h as v,o as u,c as m,b as e,i as r,v as c,j as f,u as b,p as h,a as g,r as w,e as l,d,w as x}from"./index.bab77bf1.js";import{u as I}from"./useAuth.247de097.js";const n=o=>(h("data-v-53a1d2b9"),o=o(),g(),o),V={class:"form__inputs"},$={class:"input__item"},y=n(()=>e("label",{for:"user"},"Email:",-1)),L={class:"input__item"},k=n(()=>e("label",{for:"user"},"Contrase\xF1a:",-1)),S=n(()=>e("div",{class:"form__actions"},[e("button",{class:"action__login",type:"submit"}," Iniciar sesi\xF3n ")],-1)),C={__name:"FormLogin",setup(o){const{loginUser:_}=I(),s=v({email:"",password:""});return console.log(s),(i,t)=>(u(),m("form",{class:"form",onSubmit:t[2]||(t[2]=f(a=>b(_)(s),["prevent"]))},[e("div",V,[e("div",$,[y,r(e("input",{type:"text",name:"user",placeholder:"Direcci\xF3n de correo electr\xF3nico","onUpdate:modelValue":t[0]||(t[0]=a=>s.email=a)},null,512),[[c,s.email]])]),e("div",L,[k,r(e("input",{type:"password",name:"password",placeholder:"Contrase\xF1a","onUpdate:modelValue":t[1]||(t[1]=a=>s.password=a)},null,512),[[c,s.password]])])]),S],32))}},N=p(C,[["__scopeId","data-v-53a1d2b9"]]);const B=o=>(h("data-v-4b29b568"),o=o(),g(),o),F={class:"login"},U={class:"login__container"},D=B(()=>e("header",{class:"login__header"},[e("h2",{class:"header__title"},"Hola de nuevo"),e("p",{class:"header__paragraph"},"Ingresa con tu cuenta para continuar")],-1)),E={class:"login__footer"},M={class:"footer__paragraph"},T={__name:"LoginView",setup(o){return(_,s)=>{const i=w("router-link");return u(),m("section",F,[e("article",U,[D,l(N),e("footer",E,[e("p",M,[d("\xBFNo tienes una cuenta? "),l(i,{to:{name:"register"},class:"footer__link"},{default:x(()=>[d(" Reg\xEDstrate ")]),_:1})])])])])}}},H=p(T,[["__scopeId","data-v-4b29b568"]]);export{H as default};