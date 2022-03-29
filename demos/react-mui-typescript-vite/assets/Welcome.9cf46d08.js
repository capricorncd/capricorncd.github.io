var v=Object.defineProperty;var s=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(t,a,r)=>a in t?v(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,p=(t,a)=>{for(var r in a||(a={}))S.call(a,r)&&u(t,r,a[r]);if(s)for(var r of s(a))w.call(a,r)&&u(t,r,a[r]);return t};import{R as e,G as n,B as m,T as o,n as i,r as k,o as T,q as C,A as I,v as R,w as d,F as D,C as F,L,x as A,y as B}from"./vendor.1a85c71d.js";import{u as W}from"./index.aa3fd5dd.js";var q="./assets/logo.f6be9505.svg";const g={textShadow:"0 2px 3px rgba(0, 0, 0, 0.1), 0 -2px 3px rgba(0, 0, 0, 0.1), 2px 0px 3px rgba(0, 0, 0, 0.1), -2px 0 3px rgba(0, 0, 0, 0.1)"};function M(){return e.createElement(n,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:t=>t.palette.mode==="light"?t.palette.grey[50]:t.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",alignItems:"center",height:"100vh"}},e.createElement(m,{color:"primary.contrastText",sx:{m:3,height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}},e.createElement("div",null,e.createElement("img",{src:q,width:"180",height:"180",alt:"logo",style:{filter:"drop-shadow(0 0 3px  rgba(0,0,0,0.3))"}})),e.createElement(o,{variant:"h2",component:"div",align:"center",gutterBottom:!0,sx:g},"React-MUI-TypeScript-Vite"),e.createElement(o,{align:"center",sx:g},"This is a management system developed by React, Material UI, TypeScript and Vite.")))}function P(t){const a=new Date().getFullYear();return e.createElement(o,p({variant:"body2",color:"text.secondary",align:"center"},t),"Copyright \xA9 ",a," ",e.createElement(i,{color:"inherit",href:"https://github.com/capricorncd",target:"_blank"},"Capricorncd"),". kaneoki1984@gmail.com")}const h="remember";function U(){const[t,a]=k.exports.useState(!1),r=T(),x=C(),E=W(),{from:b}=x.state||{from:{pathname:"/home"}},y=async c=>{if(c.preventDefault(),t)return;a(!0);const l=new FormData(c.currentTarget),f={email:l.get("email"),password:l.get("password"),remember:!!l.get(h)};try{await E.signIn(f),r.replace(b)}catch{a(!1)}};return e.createElement(m,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(I,{sx:{m:1,bgcolor:"secondary.main"}},e.createElement(R,null)),e.createElement(o,{component:"h1",variant:"h5"},"Sign in"),e.createElement(o,{variant:"body2",color:"text.secondary"},"Sign in on the internal platform"),e.createElement(m,{component:"form",noValidate:!0,onSubmit:y,sx:{mt:1}},e.createElement(d,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:"kaneoki1984@gmail.com"}),e.createElement(d,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:"123456"}),e.createElement(D,{control:e.createElement(F,{name:"remember",value:h,color:"primary"}),label:"Remember me"}),e.createElement(L,{type:"submit",loading:t,fullWidth:!0,variant:"contained",size:"large",sx:{mt:3,mb:2}},"Sign In"),e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:!0},e.createElement(i,{href:"#",variant:"body2"},"Forgot password?")),e.createElement(n,{item:!0},e.createElement(i,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),e.createElement(P,{sx:{mt:15}})))}function H(){return e.createElement(n,{container:!0,component:"main",sx:{height:"100vh"}},e.createElement(A,null),e.createElement(M,null),e.createElement(n,{item:!0,xs:12,sm:8,md:5,component:B,elevation:6,square:!0},e.createElement(U,null)))}export{H as default};
