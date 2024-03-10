import{r as $,h as f,d as c,o as a,c as i,w as u,n as p,M as m,a as n,b as d,t as T,_ as v,e as h,u as C,f as b}from"./index-C9nF0tpT.js";function B(l,o,e){const s=$(!1);return{open(){s.value=!0},close(){s.value=!1},get component(){return f(l,{...e,visible:s.value,scheduler:o})}}}function _(l){const o={};return{add(e,s,t){const r=B(s,l,t);return o[e]=r,this},open(e){o[e].open()},close(e){o[e].close()},closeAll(){for(const e of Object.values(o))e.close()},get component(){return{render(){return Object.values(o).map(e=>e.component)}}}}}function y(){const l={};let o=null,e=null,s=null;return{add(t,r){if(l[t])throw new Error(`A ${String(t)} named scheduler handler already exists.`);return l[t]=r,this},beforeEach(t){return e=t,this},afterEach(t){return s=t,this},execute(t,...r){e==null||e(...r),l[t](...r),s==null||s(...r)},onEnd(t){return o=t,this},end(...t){e==null||e(...t),o==null||o(...t),s==null||s(...t)}}}const M=c({__name:"TestA",props:{visible:{type:Boolean},msg:{},scheduler:{}},setup(l){const o=l;return(e,s)=>(a(),i(m,{title:"Test Modal A",class:p(e.$style.root),"model-value":o.visible},{footer:u(()=>[n("button",{onClick:s[0]||(s[0]=t=>e.scheduler.execute("openTestB","Show B"))},"Show B"),n("button",{onClick:s[1]||(s[1]=t=>e.scheduler.execute("openTestD","Show D"))},"Show D"),n("button",{onClick:s[2]||(s[2]=t=>e.scheduler.end())},"Close")]),default:u(()=>[d(" Some text for this modal. "+T(e.msg)+" ",1)]),_:1},8,["class","model-value"]))}}),S="_root_2m4e9_1",k={root:S},A={$style:k},g=v(M,[["__cssModules",A]]),w=c({__name:"TestB",props:{visible:{type:Boolean},msg:{},scheduler:{}},setup(l){return(o,e)=>(a(),i(m,{title:"Test Modal B",class:p(o.$style.root),"model-value":o.visible},{footer:u(()=>[n("button",{onClick:e[0]||(e[0]=s=>o.scheduler.execute("openTestA","Show A"))},"Back"),n("button",{onClick:e[1]||(e[1]=s=>o.scheduler.execute("openTestC","Open TestC"))},"Open TestC"),n("button",{onClick:e[2]||(e[2]=s=>o.scheduler.end("Close B"))},"Close")]),default:u(()=>[d(" Some text for this modal. "+T(o.msg)+" ",1)]),_:1},8,["class","model-value"]))}}),D="_root_8oipq_1",O={root:D},V={$style:O},G=v(w,[["__cssModules",V]]),N=c({__name:"TestC",props:{visible:{type:Boolean},msg:{},scheduler:{}},setup(l){return(o,e)=>(a(),i(m,{title:"Test Modal C",class:p(o.$style.root),"model-value":o.visible},{footer:u(()=>[n("button",{onClick:e[0]||(e[0]=s=>o.scheduler.execute("openTestB","Show B"))},"Back"),n("button",{onClick:e[1]||(e[1]=s=>o.scheduler.end("Close C"))},"Close")]),default:u(()=>[d(" Some text for this modal. "+T(o.msg)+" ",1)]),_:1},8,["class","model-value"]))}}),j="_root_1gacs_1",q={root:j},x={$style:q},z=v(N,[["__cssModules",x]]),P=c({__name:"TestD",props:{visible:{type:Boolean},msg:{},scheduler:{}},setup(l){return(o,e)=>(a(),i(m,{title:"Test Modal D",class:p(o.$style.root),"model-value":o.visible},{footer:u(()=>[n("button",{onClick:e[0]||(e[0]=s=>o.scheduler.execute("openTestA","Show A"))},"Back"),n("button",{onClick:e[1]||(e[1]=s=>o.scheduler.end("Close D"))},"Close")]),default:u(()=>[d(" Some text for this modal. "+T(o.msg)+" ",1)]),_:1},8,["class","model-value"]))}}),E="_root_1qpya_1",F={root:E},I={$style:F},J=v(P,[["__cssModules",I]]);function K(){const l=y(),o=_(l);return o.add("TestA",g,{msg:"Message Props"}).add("TestB",G).add("TestC",z).add("TestD",J),l.beforeEach(()=>{o.closeAll()}).add("openTestA",()=>{o.open("TestA")}).add("openTestB",()=>{o.open("TestB")}).add("openTestD",()=>{o.open("TestD")}).add("openTestC",()=>{o.open("TestC")}),{scheduler:l,get component(){return o.component}}}const L=n("h1",null,[d(" This is an "),n("i",null,[n("b",null,"useSchedulerController")]),d(" page ")],-1),R={__name:"SchedulerView",setup(l){const{scheduler:o,component:e}=K();return(s,t)=>(a(),h("main",null,[L,n("button",{onClick:t[0]||(t[0]=r=>C(o).execute("openTestA"))},"Show Modal TestA"),b(C(e))]))}};export{R as default};
