import{_ as c,h as f,o as m,c as u,b as e,i as _,v as i,j as g,u as b,p as h,a as v,r as w,e as d,d as p,w as x}from"./index.13d54dcd.js";import{u as V}from"./useAuth.5e898741.js";const n=o=>(h("data-v-08810811"),o=o(),v(),o),y={class:"form__inputs"},$={class:"input__item"},I=n(()=>e("label",{for:"name"},"Nombre:",-1)),R={class:"input__item"},E=n(()=>e("label",{for:"lastname"},"Apellidos:",-1)),j={class:"input__item"},k=n(()=>e("label",{for:"user"},"Email:",-1)),C={class:"input__item"},N=n(()=>e("label",{for:"user"},"Contrase\xF1a:",-1)),S=n(()=>e("div",{class:"form__actions"},[e("button",{class:"action__register",type:"submit"}," Registrarme ")],-1)),U={__name:"FormRegister",setup(o){const{registerUser:r}=V(),t=f({name:"",lastname:"",email:"",password:""});return(l,s)=>(m(),u("form",{class:"form",onSubmit:s[4]||(s[4]=g(a=>b(r)(t),["prevent"]))},[e("div",y,[e("div",$,[I,_(e("input",{type:"text",name:"name",placeholder:"Ej: Jose","onUpdate:modelValue":s[0]||(s[0]=a=>t.name=a)},null,512),[[i,t.name]])]),e("div",R,[E,_(e("input",{type:"text",name:"lastname",placeholder:"Ej: Navarro","onUpdate:modelValue":s[1]||(s[1]=a=>t.lastname=a)},null,512),[[i,t.lastname]])]),e("div",j,[k,_(e("input",{type:"text",name:"user",placeholder:"Ej: prueba@ejemplo.com","onUpdate:modelValue":s[2]||(s[2]=a=>t.email=a)},null,512),[[i,t.email]])]),e("div",C,[N,_(e("input",{type:"password",name:"password",placeholder:"Contrase\xF1a","onUpdate:modelValue":s[3]||(s[3]=a=>t.password=a)},null,512),[[i,t.password]])])]),S],32))}},B=c(U,[["__scopeId","data-v-08810811"]]);const F=o=>(h("data-v-305bbd34"),o=o(),v(),o),A={class:"login"},M={class:"login__container"},T=F(()=>e("header",{class:"login__header"},[e("h2",{class:"header__title"},"\xBFEs tu primera visita?"),e("p",{class:"header__paragraph"},"Crea una cuenta para continuar")],-1)),D={class:"login__footer"},J={class:"footer__paragraph"},Y={__name:"RegisterView",setup(o){return(r,t)=>{const l=w("router-link");return m(),u("section",A,[e("article",M,[T,d(B),e("footer",D,[e("p",J,[p("\xBFYa tienes una cuenta? "),d(l,{to:{name:"login"},class:"footer__link"},{default:x(()=>[p(" Inicia sesi\xF3n ")]),_:1})])])])])}}},G=c(Y,[["__scopeId","data-v-305bbd34"]]);export{G as default};
