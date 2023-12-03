import{_ as c,o as _,c as h,w as a,f as l,a as e,J as n,K as f,L as i,M as g,N as w,O as x,P as y}from"./index.ef228992.js";import{Q as p}from"./QInput.a2bee355.js";import{Q as v}from"./QForm.810f22b8.js";import{Q}from"./QCardActions.bed2bb53.js";import{Q as b}from"./QPage.2fc420a1.js";import{a as m}from"./authenticate.bcdfbf4f.js";import"./use-key-composition.25c6204a.js";import"./axios.23aa70c0.js";import"./js.cookie.f93afda9.js";const q={name:"LoginPage",methods:{async login(){try{const s=await m.login(this.username,this.password);s&&(m.setUserLogged(s.data.token),this.$router.push("/Dashboard"))}catch(s){this.$q.notify({type:"negative",message:s.response.data.message})}}},data(){return{email:"",username:"",password:""}}},u=s=>(x("data-v-408f7875"),s=s(),y(),s),I={class:"column q-pa-lg"},V={class:"row"},k=u(()=>l("h4",{class:"text-h5 text-white q-my-md"},"Entrar ",-1)),C=u(()=>l("p",{class:"text-grey-6"},"Forgot your password?",-1));function S(s,t,P,B,o,d){return _(),h(b,{class:"window-height window-width row justify-center items-center"},{default:a(()=>[l("div",I,[l("div",V,[e(w,{square:"",class:"shadow-24",style:{width:"300px",height:"500px"}},{default:a(()=>[e(n,{class:"bg-dark",style:{width:"300px",height:"90px"}},{default:a(()=>[k]),_:1}),e(n,null,{default:a(()=>[e(v,{class:"q-px-sm q-pt-xl",onSubmit:f(d.login,["prevent"])},{default:a(()=>[e(p,{square:"",clearable:"",modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=r=>o.username=r),type:"email",label:"Usuario"},{prepend:a(()=>[e(i,{name:"person"})]),_:1},8,["modelValue"]),e(p,{square:"",clearable:"",modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=r=>o.password=r),type:"password",label:"Contrasena"},{prepend:a(()=>[e(i,{name:"lock"})]),_:1},8,["modelValue"])]),_:1},8,["onSubmit"])]),_:1}),e(Q,{class:"q-px-lg"},{default:a(()=>[e(g,{unelevated:"",size:"lg",color:"blue-4",class:"full-width text-white",label:"Enviar",onClick:t[2]||(t[2]=r=>d.login())})]),_:1}),e(n,{class:"text-center q-pa-sm"},{default:a(()=>[C]),_:1})]),_:1})])])]),_:1})}var D=c(q,[["render",S],["__scopeId","data-v-408f7875"]]);export{D as default};
