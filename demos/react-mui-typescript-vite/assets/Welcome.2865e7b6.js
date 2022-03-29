var W=Object.defineProperty;var C=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&B(e,a,t[a]);if(C)for(var a of C(t))D.call(t,a)&&B(e,a,t[a]);return e};import{R as n,G as g,B as y,T as u,n as z,o as U,s as S,f as _,_ as p,q as x,r as h,v as A,w,x as q,y as c,z as N,A as O,L,E as V,J as G,K as H,M as X,N as $,F as J,C as K,O as Q,Q as Y}from"./vendor.9870e94a.js";import{u as Z}from"./index.c412ac3d.js";var tt="./assets/logo.f6be9505.svg";const k={textShadow:"0 2px 3px rgba(0, 0, 0, 0.1), 0 -2px 3px rgba(0, 0, 0, 0.1), 2px 0px 3px rgba(0, 0, 0, 0.1), -2px 0 3px rgba(0, 0, 0, 0.1)"};function et(){return n.createElement(g,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:e=>e.palette.mode==="light"?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",alignItems:"center",height:"100vh"}},n.createElement(y,{color:"primary.contrastText",sx:{m:3,height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}},n.createElement("div",null,n.createElement("img",{src:tt,width:"180",height:"180",alt:"logo",style:{filter:"drop-shadow(0 0 3px  rgba(0,0,0,0.3))"}})),n.createElement(u,{variant:"h2",component:"div",align:"center",gutterBottom:!0,sx:k},"React-MUI-TypeScript-Vite"),n.createElement(u,{align:"center",sx:k},"This is a management system developed by React, Material UI, TypeScript and Vite.")))}function nt(e){return U("MuiLoadingButton",e)}const at=z("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var o=at;const ot=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],it=e=>{const{loading:t,loadingPosition:a,classes:i}=e,s={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${x(a)}`],endIcon:[t&&`endIconLoading${x(a)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${x(a)}`]},l=N(s,nt,i);return p({},i,l)},rt=e=>e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"&&e!=="classes",st=S(_,{shouldForwardProp:e=>rt(e)||e==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${o.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${o.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})(({ownerState:e,theme:t})=>p({[`& .${o.startIconLoadingStart}, & .${o.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},e.loadingPosition==="center"&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${o.loading}`]:{color:"transparent"}},e.loadingPosition==="start"&&e.fullWidth&&{[`& .${o.startIconLoadingStart}, & .${o.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},e.loadingPosition==="end"&&e.fullWidth&&{[`& .${o.startIconLoadingStart}, & .${o.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),T=S("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.loadingIndicator,t[`loadingIndicator${x(a.loadingPosition)}`]]}})(({theme:e,ownerState:t})=>p({position:"absolute",visibility:"visible",display:"flex"},t.loadingPosition==="start"&&(t.variant==="outlined"||t.variant==="contained")&&{left:t.size==="small"?10:14},t.loadingPosition==="start"&&t.variant==="text"&&{left:6},t.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:e.palette.action.disabled},t.loadingPosition==="end"&&(t.variant==="outlined"||t.variant==="contained")&&{right:t.size==="small"?10:14},t.loadingPosition==="end"&&t.variant==="text"&&{right:6},t.loadingPosition==="start"&&t.fullWidth&&{position:"relative",left:-10},t.loadingPosition==="end"&&t.fullWidth&&{position:"relative",right:-10})),lt=h.exports.forwardRef(function(t,a){const i=A({props:t,name:"MuiLoadingButton"}),{children:s,disabled:l=!1,id:f,loading:r=!1,loadingIndicator:d,loadingPosition:b="center",variant:I="text"}=i,M=w(i,ot),P=q(f),E=d!=null?d:c.exports.jsx(O,{"aria-labelledby":P,color:"inherit",size:16}),m=p({},i,{disabled:l,loading:r,loadingIndicator:E,loadingPosition:b,variant:I}),v=it(m);return c.exports.jsx(st,p({disabled:l||r,id:P,ref:a},M,{variant:I,classes:v,ownerState:m,children:m.loadingPosition==="end"?c.exports.jsxs(h.exports.Fragment,{children:[s,r&&c.exports.jsx(T,{className:v.loadingIndicator,ownerState:m,children:E})]}):c.exports.jsxs(h.exports.Fragment,{children:[r&&c.exports.jsx(T,{className:v.loadingIndicator,ownerState:m,children:E}),s]})}))});var dt=lt;function ct(e){const t=new Date().getFullYear();return n.createElement(u,R({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright \xA9 ",t," ",n.createElement(L,{color:"inherit",href:"https://github.com/capricorncd",target:"_blank"},"Capricorncd"),". kaneoki1984@gmail.com")}const F="remember";function gt(){const[e,t]=h.exports.useState(!1),a=V(),i=G(),s=Z(),{from:l}=i.state||{from:{pathname:"/home"}},f=async r=>{if(r.preventDefault(),e)return;t(!0);const d=new FormData(r.currentTarget),b={email:d.get("email"),password:d.get("password"),remember:!!d.get(F)};try{await s.signIn(b),a.replace(l)}catch{t(!1)}};return n.createElement(y,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement(H,{sx:{m:1,bgcolor:"secondary.main"}},n.createElement(X,null)),n.createElement(u,{component:"h1",variant:"h5"},"Sign in"),n.createElement(u,{variant:"body2",color:"text.secondary"},"Sign in on the internal platform"),n.createElement(y,{component:"form",noValidate:!0,onSubmit:f,sx:{mt:1}},n.createElement($,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:"kaneoki1984@gmail.com"}),n.createElement($,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:"123456"}),n.createElement(J,{control:n.createElement(K,{name:"remember",value:F,color:"primary"}),label:"Remember me"}),n.createElement(dt,{type:"submit",loading:e,fullWidth:!0,variant:"contained",size:"large",sx:{mt:3,mb:2}},"Sign In"),n.createElement(g,{container:!0},n.createElement(g,{item:!0,xs:!0},n.createElement(L,{href:"#",variant:"body2"},"Forgot password?")),n.createElement(g,{item:!0},n.createElement(L,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),n.createElement(ct,{sx:{mt:15}})))}function xt(){return n.createElement(g,{container:!0,component:"main",sx:{height:"100vh"}},n.createElement(Q,null),n.createElement(et,null),n.createElement(g,{item:!0,xs:12,sm:8,md:5,component:Y,elevation:6,square:!0},n.createElement(gt,null)))}export{xt as default};
