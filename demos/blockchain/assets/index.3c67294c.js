import{r as h,j as e,u as B,a,B as d,b as H,N as F,c as v,D as x,S,I as b,d as C,A as J,U as V,R as K,e as k,F as j,f as E,P as G,L as O,H as U,O as q,g as Y,h as z}from"./vendor.b70633a6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const A={isAuthenticated:!1,signIn(t){A.isAuthenticated=!0,setTimeout(t,100)},signOut(t){A.isAuthenticated=!1,setTimeout(t,100)}},M=h.exports.createContext(null);function $({children:t}){const[n,o]=h.exports.useState(null),s={user:n,signIn:(l,p)=>A.signIn(()=>{o(l),p()}),signOut:l=>A.signOut(()=>{o(null),l()})};return e(M.Provider,{value:s,children:t})}function T(){return h.exports.useContext(M)}function Q(){const t=T(),n=B();return t!=null&&t.user?a("p",{children:["Welcome ",t.user,"!"," ",e(d,{onClick:()=>{t.signOut(()=>n("/"))},children:"Sign out"})]}):e("p",{children:"You are not logged in."})}function X({children:t}){const n=T(),o=H();return n.user?t:e(F,{to:"/login",state:{from:o},replace:!0})}function w(t){return String(t).padStart(5,"0")}function P(t,n){localStorage.setItem(t,JSON.stringify(n))}function I(t,n){try{const o=localStorage.getItem(t);return o?JSON.parse(o):n}catch{return n}}const L="_chains",N="_transactions",R="acb",D={hash:R,transactions:[]},W=h.exports.createContext(null);function Z(t){const[n,o]=h.exports.useState(I(N,[])),[c,r]=h.exports.useState(I(L,[D]));h.exports.useEffect(()=>{P(N,n)},[n]),h.exports.useEffect(()=>{P(L,c)},[c]);function s(i){o([...n,{id:new Date().getTime().toString(16),name:i}])}function l(){const i=c[c.length-1],f={hash:v.exports.SHA256(i.hash+JSON.stringify(n.map(y=>y.id))).toString(),transactions:n.map(y=>y.id)};r([...c,f]),o([])}function p(){const i=[...c],u=i.shift(),f=Array.from({length:Math.ceil(Math.random()*5)}).map(()=>Math.random().toString(16).replace("0.",""));if(!i.length)i.push({hash:v.exports.SHA256(u.hash+JSON.stringify(f)).toString(),transactions:f});else{const y=Math.max(0,Math.floor(Math.random()*i.length));i[y].transactions=f}r([u,...i])}const g=h.exports.useMemo(()=>c.every((i,u)=>u===0?i.hash===R:v.exports.SHA256(c[u-1].hash+JSON.stringify(i.transactions)).toString()===i.hash),[c]);function m(){r([D])}return e(W.Provider,{value:{transactions:n,addTransaction:s,blocks:c.slice(1),writeToBlockchain:l,tamper:p,isValid:g,clearAllBlockchain:m},children:t.children})}function _(){return h.exports.useContext(W)}function ee(){const t=h.exports.useRef(null),[n,o]=h.exports.useState(""),c=_();if(!c)return null;const{addTransaction:r,writeToBlockchain:s,transactions:l,tamper:p,blocks:g,clearAllBlockchain:m}=c;return a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e(x,{children:"Operate"}),a(S,{direction:"vertical",align:"center",style:{maxWidth:"100%",overflow:"hidden"},children:[a(b.Group,{compact:!0,style:{width:"320px",maxWidth:"100%"},children:[e(b,{value:n,ref:t,style:{width:"calc(100% - 136px)"},placeholder:"Please enter transaction name",onChange:i=>o(i.currentTarget.value),onPressEnter:()=>{!n||(r(n),o(""))}}),e(d,{style:{width:"136px"},type:"primary",disabled:!n,onClick:()=>{r(n),o("")},children:"Add transaction"})]}),a(S,{children:[e(d,{type:"primary",disabled:!l.length,onClick:()=>s(),children:"Write to the blockchain"}),e(d,{type:"primary",disabled:!g.length,danger:!0,onClick:()=>p(),children:"Tamper"})]})]}),e(x,{children:"Transactions that are not on the blockchain"}),e("ul",{children:l.map((i,u)=>a("li",{children:[i.id,": ",i.name]},u))}),e(x,{children:"Transactions already on the blockchain"}),e("ul",{children:g.map((i,u)=>a("li",{children:[i.hash,": ",i.transactions.join(", ")]},u))}),e(S,{children:e(d,{type:"primary",danger:!0,disabled:!g.length,onClick:()=>m(),children:"Clear all blockchain"})})]})}function te(){const t=_();return t?a(S,{direction:"vertical",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a(S,{size:"large",children:[e(C,{title:"Transactions that are not on the chain",value:w(t.transactions.length)}),e(C,{title:"Transactions that have been on the chain",value:w(t.blocks.length)})]}),e(J,{message:`Transaction is ${t.isValid?"normal":"abnormal"}`,type:t.isValid?"success":"error",showIcon:!0})]}):null}function ne(){return a(Z,{children:[e(x,{children:e("h2",{children:"Blockchain"})}),e(te,{}),e(ee,{}),e(x,{children:"README"}),a("section",{style:{textAlign:"center"},children:["A blockchain is a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.",e("a",{href:"https://en.wikipedia.org/wiki/Blockchain",target:"_blank",children:"https://en.wikipedia.org/wiki/Blockchain"})]})]})}function re(){var s,l;const t=B(),n=H(),o=T(),c=((l=(s=n.state)==null?void 0:s.from)==null?void 0:l.pathname)||"/";function r(p){p.preventDefault();const m=new FormData(p.currentTarget).get("username");o.signIn(m,()=>{t(c,{replace:!0})})}return a("div",{children:[a("p",{children:["You must log in to view the page at ",c]}),e("form",{onSubmit:r,children:a(b.Group,{compact:!0,style:{width:"300px",maxWidth:"100%"},children:[e(b,{placeholder:"Please enter any string",name:"username",prefix:e(V,{}),defaultValue:"capricorncd",style:{width:"calc(100% - 80px)"}}),e(d,{type:"primary",htmlType:"submit",style:{width:"80px"},children:"Login"})]})})]})}const{Content:ie,Footer:oe}=E;function ae(){return e($,{children:e(K,{children:a(k,{element:e(se,{}),children:[e(k,{path:"/",element:e(le,{})}),e(k,{path:"/login",element:e(re,{})}),e(k,{path:"/Blockchain",element:e(ne,{})}),e(k,{path:"/protected",element:e(X,{children:e(ce,{})})})]})})})}function ce(){const[t,n]=h.exports.useState(0);return a(j,{children:[e("h2",{children:"Protected Page"}),a(d,{onClick:()=>n(o=>o+1),children:["count is: ",t]})]})}function se(){const t=B();return a(E,{style:{minHeight:"100vh"},children:[e(G,{ghost:!1,title:"React18 Hooks Typescript Vite",subTitle:"Ant Design",extra:[e(O,{to:"/protected",children:e(d,{children:"Protected Page"})},"protected"),e(O,{to:"/blockchain",children:e(d,{type:"primary",children:"Blockchain"})},"blockchain")],backIcon:e(U,{}),onBack:()=>t("/")}),a(ie,{style:{padding:"24px"},children:[e(Q,{}),e(q,{})]}),a(oe,{style:{textAlign:"center"},children:["\xA92022 Created by"," ",e(d,{type:"link",href:"https://github.com/capricorncd",target:"_blank",style:{padding:0},children:"Capricorncd"}),"."]})]})}function le(){return a("main",{children:[e("h2",{children:"Welcome to the homepage!"}),e("p",{style:{textAlign:"center"},children:e("img",{src:"https://source.unsplash.com/random",className:"App-logo",alt:"logo",style:{maxWidth:"100%"}})})]})}Y(document.getElementById("root")).render(e(h.exports.StrictMode,{children:e(z,{children:e(ae,{})})}));