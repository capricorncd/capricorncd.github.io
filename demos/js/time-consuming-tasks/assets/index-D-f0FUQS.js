(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();class m extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){const t=w(this,["links","github","color","background","title","shadow"],{github:"https://github.com/capricorncd",title:"Capricorncd"});this.root.appendChild(b(t)),this.root.appendChild(y())}attributeChangedCallback(t,n,r){console.log("attributeChangedCallback:",t,n,r)}}customElements.define("demo-header",m);function b(e){const{color:t,background:n,gap:r,links:o,github:i,title:s,position:a,shadow:d}=e,c=[];a&&c.push(`--dh-position: ${a}`),t&&c.push(`--dh-color: ${t}`),n&&c.push(`--dh-background: ${n}`),d&&c.push(`--dh-shadow: ${d}`),$(r)||c.push(`--hd-nav-gap: ${g(r)}`);const p=document.createElement("template");return p.innerHTML=`
    <header style="${c.join(";")}">
      <h1 class="title">${s}</h1>
      <div class="right-wrap">
        <nav>
          ${C(x(o||"[]"))}
        </nav>
        <a class="icon-github" href="${i}" target="_blank">
          <svg width="28" height="28" viewBox="0 0 16 16" version="1.1"
          aria-hidden="true">
            <path fill-rule="evenodd" fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
            </path>
          </svg>
        </a>
      </div>
    </header>
  `,p.content}function y(){const e=document.createElement("style");return e.innerHTML=`
    header {
      position: var(--dh-position, fixed);
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      box-shadow: var(--dh-shadow, 0 1px 3px rgba(0, 0, 0, 0.2));
      color: var(--dh-color, #fff);
      background: var(--dh-background, #333);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title {
      margin: 0 0 0 20px;
      padding: 0;
      line-height: 1;
      font-size: 1.5rem;
    }
    .right-wrap {
      display: flex;
      align-items: center;
    }
    nav a {
      text-decoration: none;
      font-size: 1rem;
      opacity: 0.7;
      color: inherit;
      margin-left: var(--hd-nav-gap, 10px);
    }
    nav a:hover {
      opacity: 1;
      text-decoration: underline;
    }
    nav a.current {
      text-decoration: underline;
      font-weight: bold;
    }
    .icon-github {
      text-decoration: none;
      margin: 0 20px;
      opacity: 0.7;
      color: inherit;
    }
    .icon-github:hover {
      opacity: 1;
    }
  `,e}function w(e,t,n={}){const r={};return t.forEach(o=>{r[o]=e.getAttribute(o)??n[o]}),r}function x(e,t){try{return JSON.parse(e)}catch{return t}}function v(e){return typeof e=="string"?/^-?\d+(\.\d+)?$/.test(e):typeof e=="number"}function $(e){return typeof e>"u"||e===null}function g(e,t="px"){return v(e)?`${e}${t}`:typeof e=="string"&&/\d+(\w+)?\s/.test(e)?e.split(/\s+/).map(n=>g(n,t)).join(" "):e}function C(e){const t=location.pathname;return e.map(n=>`<a class="${t.endsWith(n.path)?"current":""}" href="${n.path}" target="${n.target||"_self"}">${n.label}</a>`).join(`
`)}const E=16.6;function L(e){return new Promise(function(t,n){try{h(e,t)}catch(r){n(r)}})}function h(e,t){if(typeof requestIdleCallback=="function")requestIdleCallback(n=>{n.timeRemaining()>0?(e(),t()):h(e,t)});else{const n=Date.now();requestAnimationFrame(()=>{Date.now()-n<E?(e(),t()):h(e,t)})}}const u=new WeakMap;function f(e,t=100,n="red"){u.has(e)||u.set(e,[]);const r=u.get(e);if(r.length<t){const{x:o,y:i}=e.getBoundingClientRect();r.some(s=>s.x===o&&s.y===i)||(r.push({x:o,y:i}),k(o,i,n))}return{end(){return r.length>t}}}function k(e,t,n="red"){const r=document.createElement("div");r.className="dot",r.style.backgroundColor=n,r.style.left=`${e}px`,r.style.top=`${t}px`,document.querySelector("body").append(r)}function l(e){return document.querySelector(e)}function T(e=50){return new Promise(t=>{setTimeout(()=>{t()},e)})}document.addEventListener("DOMContentLoaded",()=>{const e=l("button"),t=l("#totalTime"),n=async()=>{e.disabled=!0,t.innerText="--";const a=Date.now();L(async()=>{for(let d=0;d<100;d++)await T();t.innerText=`${Date.now()-a}ms`,e.disabled=!1})};e.addEventListener("click",n),l(".ball").addEventListener("transitionstart",a=>{console.log(a)});const r=l(".ball"),o=l(".ball2"),i=l(".ball3");let s=setInterval(()=>{const a=f(r,200,"#999"),d=f(o,2e3,"#0ce831"),c=f(i,401,"#e8c30c");a.end()&&d.end()&&c.end()&&(clearInterval(s),s=null)},10);l(".ball2").addEventListener("transitionstart",a=>{console.log(a)}),l(".ball").addEventListener("transitionrun",a=>{console.log(a)})});
