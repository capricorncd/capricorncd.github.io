import{r as x,j as a,P as k,a as D}from"./vendor-ab85753c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function z(){const r=navigator.userAgent;return["Mac68K","MacPPC","Macintosh","MacIntel"].some(t=>r.includes(t))}function L(r,t=250){let e,s;return function(...n){const c=this,g=+new Date;e&&e+t>g?(clearTimeout(s),s=setTimeout(()=>{e=g,r.apply(c,n)},t)):(e=g,r.apply(c,n))}}class N extends x.Component{render(){return a.jsxs("header",{children:[a.jsxs("h1",{className:"page-title-wrapper",children:["Capricorn",a.jsx("i",{children:"cd"})]}),a.jsx("a",{href:"https://github.com/capricorncd",target:"_blank",className:"github",rel:"noreferrer",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})]})}}function u(r,t=0,e=!1){const s=Math.random()*(r-t)+t;return e?Math.round(s):s}function j(r,t,e,s){return Math.sqrt(Math.pow(r-e,2)+Math.pow(t-s,2))}function S(r){const t=r instanceof Window?window.innerWidth:r.offsetWidth,e=r instanceof Window?window.innerHeight:r.offsetHeight;return{width:t,height:e}}class I{constructor(t){this.options=t;const{x:e,y:s,hue:i}=t;for(this.x=e,this.y=s,this.angle=u(Math.PI*2),this.speed=u(10,1),this.friction=.95,this.gravity=1,this.hue=u(i+20,i-20),this.brightness=u(80,50),this.alpha=1,this.decay=u(.03,.015),this.coordinates=[],this.coordinateCount=5;this.coordinateCount--;)this.coordinates.push([this.x,this.y])}draw(t){const{hue:e}=this.options,[s=0,i=0]=this.coordinates[this.coordinates.length-1];t.beginPath(),t.moveTo(s,i),t.lineTo(this.x,this.y),t.strokeStyle=`hsl(${e}, 100%, ${this.brightness}%, ${this.alpha})`,t.stroke()}update(t,e,s){this.draw(s),this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=0&&e.splice(t,1)}}class R{constructor(t){this.options=t;const{x:e,y:s,targetX:i,targetY:n}=t;for(this.x=e,this.y=s,this.startX=e,this.startY=s,this.targetX=i,this.targetY=n,this.distanceTarget=j(e,s,i,n),this.distanceTraveled=0,this.angle=Math.atan2(n-s,i-e),this.speed=2,this.acceleration=1.02,this.brightness=u(70,50),this.targetRadius=1,this.coordinateCount=3,this.coordinates=[];this.coordinateCount--;)this.coordinates.push([e,s]);this.hue=u(120,50)}draw(t){const[e=0,s=0]=this.coordinates[this.coordinates.length-1];t.beginPath(),t.moveTo(e,s),t.lineTo(this.x,this.y),t.strokeStyle=`hsl(${this.hue}, 100%, ${this.brightness}%)`,t.stroke(),t.beginPath(),t.arc(this.targetX,this.targetY,this.targetRadius,0,Math.PI*2),t.stroke()}update(t,e,s){this.draw(s),this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.targetRadius<8?this.targetRadius+=.2:this.targetRadius=1,this.speed*=this.acceleration;const i=Math.cos(this.angle)*this.speed,n=Math.sin(this.angle)*this.speed;this.distanceTraveled=j(this.startX,this.startY,this.x+i,this.y+n),this.distanceTraveled>=this.distanceTarget?(e.splice(t,1),this.createParticles()):(this.x+=i,this.y+=n)}createParticles(){const{targetX:t,targetY:e,particles:s}=this.options;let i=u(120,30,!0);for(;i--;)s.push(new I({x:t,y:e,hue:this.hue}))}}function P(r){const t=document.createElement("canvas"),e=t.getContext("2d");t.style.background="#000";const s=[],i=[];let{width:n,height:c}=S(r);t.width=n,t.height=c,window.addEventListener("resize",()=>{const l=S(r);n=l.width,c=l.height,t.width=n,t.height=c});function g(l,b){l=l??u(n);const C=new R({x:u(l+20,l-20),y:c,targetX:l,targetY:b??u(c/2),particles:i});s.push(C)}g();const h=20;let f=0;function y(){requestAnimationFrame(y),e.fillStyle="rgba(0, 0, 0, 0.5)",e.clearRect(0,0,t.width,t.height);let l=s.length;for(;l--;)s[l].update(l,s,e);let b=i.length;for(;b--;)i[b].update(b,i,e);f>h?(f=0,g()):f++}return t.addEventListener("mouseup",l=>{g(l.offsetX,l.offsetY)}),y(),t}class T extends x.Component{componentDidMount(){const t=document.querySelector(".banner-wrapper"),e=new P(t);e.style.background="transparent",t.appendChild(e)}render(){return a.jsxs("div",{className:"banner-wrapper",children:[a.jsx("h1",{children:"Thanks for your browsing!"}),this.props.children]})}}T.propTypes={children:k.node};class A extends x.Component{render(){return a.jsx("div",{className:"more-wrapper",children:a.jsxs("a",{href:"https://github.com/capricorncd",target:"_blank",rel:"noreferrer",children:["More Repositories",a.jsx("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",height:"24",children:a.jsx("path",{d:"M729.987756 534.448268 376.290155 888.145869c-18.73776 18.73776-49.092092 18.73776-67.828828 0s-18.73776-49.092092 0-67.828828l285.868773-285.868773L308.461327 248.579495c-18.73776-18.73776-18.73776-49.092092 0-67.828828s49.092092-18.73776 67.828828 0L729.987756 534.448268z","p-id":"1609",fill:"currentColor"})})]})})}}class _ extends x.Component{render(){return a.jsxs("footer",{children:["© 2016-",new Date().getFullYear()," Capricorncd. kaneoki1984@gmail.com / capricorncd@qq.com"]})}}const w="https://github.com/capricorncd/demos/tree/main/",o="https://capricorncd.github.io/",m="https://github.com/capricorncd/",p="https://www.npmjs.com/package/",v="https://npmcharts.com/compare/",d="https://img.shields.io/npm/",M=[{name:"image-process",url:m+"image-process-tools",desc:[{text:"A Image clipping or scaling, support local or same domain video file screenshot. It's implemented in canvas."},{tag:"Tags",text:"TypeScript/Vite/pnpm/Sass/Vue3.x(demo)"},{tag:"Demo",url:o+"image-process-tools/demo/"}],npm:[{url:v+"image-process?minimal=true",icon:d+"dm/image-process.svg?sanitize=true",alt:"Downloads"},{url:p+"image-process",icon:d+"v/image-process.svg?sanitize=true",alt:"Version"},{url:p+"image-process",icon:d+"l/image-process.svg?sanitize=true",alt:"License"}]},{name:"blockchain",coverBg:"linear-gradient(90deg, rgba(2,0,40,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",url:m+"blockchain",desc:[{text:"A blockchain is a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography."},{tag:"Tags",text:"TypeScript/React18/AntDesign/Vite"},{tag:"Demo",url:o+"demos/blockchain/"}]},{name:"Music Card",cover:"./static/music-card.jpg",url:o+"demos/music-card/",bgImgUrl:"./static/guitar.jpg",desc:[{text:"The music card that Web mini-program application in Smartphone App"},{tag:"Tags",text:"JavaScript/Vue2.x/Scss/Canvas/Webpack4"},{tag:"Demo",url:o+"demos/music-card/"},{tag:"Source",url:w+"music-card"}]},{name:"zx-calendar",cover:"./static/zx-calendar.png",url:m+"calendar#zx-calendar",desc:[{text:"zx-calendar, zx-vue-calendar (Vue2.x.x and Vue3.x.x), zx-react-calendar"},{tag:"Tags",text:"JavaScript/Vue.js/React.js/TypeScript/Scss/Webpack4"},{tag:"Demo",url:o+"calendar/dist/index.html"},{tag:"Vue2.x",url:o+"calendar/dist/vue.html"},{tag:"React",url:o+"calendar/dist/react.html"},{tag:"SolidJS",url:o+"calendar/dist/solid.html"}],npm:[{url:v+"zx-calendar?minimal=true",icon:d+"dm/zx-calendar.svg?sanitize=true",alt:"Downloads"},{url:p+"zx-calendar",icon:d+"v/zx-calendar.svg?sanitize=true",alt:"Version"},{url:p+"zx-calendar",icon:d+"l/zx-calendar.svg?sanitize=true",alt:"License"}]},{name:"zx-sml",coverBg:"linear-gradient(337deg, rgba(1,48,138,1) 0%, rgba(22,187,212,1) 76%)",url:m+"zx-sml",desc:[{text:"zx-sml is some static method library, which contains toSnakeCase, splitValue, getLocalStorage, formatDate, createElement, classNames and other methods. And zx-sml/nodejs is some tool functions used in the Nodejs environment, which contains getCommentsData, outputFile, mkdirSync and other methods. It is mainly used to obtain the comment information in the code, and then output it as a Markdown file."},{tag:"Tags",text:"TypeScript/Vite/Node.js"}],npm:[{url:v+"zx-sml?minimal=true",icon:d+"dm/zx-sml.svg?sanitize=true",alt:"Downloads"},{url:p+"zx-sml",icon:d+"v/zx-sml.svg?sanitize=true",alt:"Version"},{url:p+"zx-sml",icon:d+"l/zx-sml.svg?sanitize=true",alt:"License"}]},{name:"Tetris Game.(俄罗斯方块/テトリス)",cover:"./static/tetris.png",url:m+"tetris",desc:[{text:"Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. "},{tag:"Tags",text:"TypeScript/Sass/Webpack5/AudioContext"},{tag:"Play",url:o+"tetris/dist/index.html"},{tag:"Demo",url:o+"tetris/dist/index.html"}],npm:[{url:v+"zx-tetris?minimal=true",icon:d+"dm/zx-tetris.svg?sanitize=true",alt:"Downloads"},{url:p+"zx-tetris",icon:d+"v/zx-tetris.svg?sanitize=true",alt:"Version"},{url:p+"zx-tetris",icon:d+"l/zx-tetris.svg?sanitize=true",alt:"License"}]},{name:"sp-editor",cover:"./static/zx-editor.png",url:m+"zx-editor",desc:[{text:"The HTML document (rich text) editor in Smart phone browser or webview, supporting mixed layout, reference, headline, unordered list, font color, bold and italics."},{tag:"Tags",text:"TypeScript/Sass/npm/Vite"},{tag:"Demo",url:o+"zx-editor/demo"},{tag:"Source",url:m+"zx-editor"}],npm:[{url:v+"sp-editor?minimal=true",icon:d+"dm/sp-editor.svg?sanitize=true",alt:"Downloads"},{url:p+"sp-editor",icon:d+"v/sp-editor.svg?sanitize=true",alt:"Version"},{url:p+"sp-editor",icon:d+"l/sp-editor.svg?sanitize=true",alt:"License"}]},{name:"3D display of products",cover:"./static/three.png",url:o+"demos/three/index.html#/ClockObj",desc:[{text:"Developing 3D display pages for products in C4D and Three.js"},{tag:"Tags",text:"C4D/Three.js/React16/Scss/Webpack4"},{tag:"Demo",url:o+"demos/three/index.html#/ClockObj"},{tag:"Qiita",url:"https://qiita.com/capricorncd/items/881b22208521e2ae31a4"},{tag:"Source",url:w+"three"}]},{name:"School Circle Web Site",cover:"./static/app-site.jpg",url:o+"demos/app-website/",desc:[{text:"Listen,it's like falling in love"},{tag:"Tags",text:"Nuxt.js(Vue.js)/Sass/CSS3(animation)/HTML5"},{tag:"Demo",url:o+"demos/app-website/"},{tag:"Source",url:w+"app-website"}]},{name:"Web Audio",cover:"./static/web-audio.png",url:o+"demos/web-audio/",bgImgUrl:"./static/boy.jpg",desc:[{text:"Use AudioContext to achieve cool music playback effects  in the browser"},{tag:"Tags",text:"JavaScript/AudioContext/Canvas/Scss/Webpack5"},{tag:"Demo",url:o+"demos/web-audio/"},{tag:"Source",url:w+"web-audio"}]}];const V=["./static/akihabara.jpg","./static/akihabara2.jpg","./static/boy.jpg","./static/cat.jpg","./static/crow.jpg","./static/flower.jpg","./static/grass.jpg","./static/guitar.jpg","./static/miura-beach.jpg","./static/plum-bossom.jpg","./static/sakura2023.jpg","./static/train.jpg"];function E(r,t=!1){t&&(r=r.slice());for(let e=r.length-1;e>=0;e--){const s=Math.random()*(e+1)|0;e!==s&&([r[e],r[s]]=[r[s],r[e]])}return r}const O=E(V.filter(r=>!M.some(t=>t.bgImgUrl===r)));class U extends x.Component{constructor(t){super(t),this.onScroll=L(this._onScroll.bind(this)),this.isMacOS=z(),this.prevScrollY=0}_onScroll(t){const e=t.target.scrollTop;if(this.prevScrollY>e){const s=document.querySelector(".more-wrapper"),{top:i}=s.getBoundingClientRect();i<window.innerHeight&&(this.isMacOS?document.querySelector("#app").scrollTo(0,0):window.scrollTo(0,0))}this.prevScrollY=e}createNpmInfo(t){return t?a.jsx("p",{className:"npm-items",children:t.map((e,s)=>a.jsx("a",{href:e.url,target:"_blank",rel:"noreferrer",children:a.jsx("img",{src:e.icon,alt:e.alt})},s))}):null}createDescInfo(t,e){const s=[],i=t.find(h=>!h.tag&&h.text);i&&s.push(a.jsx("p",{children:i.text},"desc"));const n=t.find(h=>h.tag==="Tags");n&&s.push(a.jsxs("p",{className:"tags",children:[n.tag,": ",n.text]},"tags"));const c=t.filter(h=>h.url);c.some(h=>h.tag==="Source")||c.push({tag:"Source",url:e});const g=c.map((h,f)=>a.jsxs("a",{href:h.url,target:"_blank",rel:"noreferrer",children:["[",h.tag,"]"]},f));return s.push(a.jsx("p",{children:g},"urls")),s}render(){const t=M.map((e,s)=>a.jsxs(x.Fragment,{children:[a.jsx("div",{className:"img",style:{backgroundImage:`url(${e.bgImgUrl||O[s]||"https://source.unsplash.com/random?t="+s}`}}),a.jsx("div",{className:"title",children:a.jsx("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})}),a.jsxs("div",{className:"text",children:[this.createDescInfo(e.desc,e.url),this.createNpmInfo(e.npm)]})]},s));return a.jsx("section",{className:"parallax-scrolling-wrap",onScroll:this.onScroll,children:t})}}class W extends x.Component{componentDidMount(){if(z()){const t=document.querySelector("body"),e=t.className.split(/\s/).filter(s=>!!s);e.push("is-mac"),t.className=e.join(" ")}}render(){return a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsx(U,{}),a.jsx(A,{}),a.jsx(T,{children:a.jsx(_,{})})]})}}D.render(a.jsx(W,{}),document.querySelector("#app"));