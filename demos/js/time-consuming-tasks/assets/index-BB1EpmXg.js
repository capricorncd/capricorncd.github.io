(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();class p extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){const t=b(this,["links","github","color","background","title","shadow"],{github:"https://github.com/capricorncd",title:"Capricorncd"});this.root.appendChild(g(t)),this.root.appendChild(m())}attributeChangedCallback(t,n,o){console.log("attributeChangedCallback:",t,n,o)}}customElements.define("demo-header",p);function g(e){const{color:t,background:n,gap:o,links:r,github:i,title:s,position:d,shadow:l}=e,a=[];d&&a.push(`--dh-position: ${d}`),t&&a.push(`--dh-color: ${t}`),n&&a.push(`--dh-background: ${n}`),l&&a.push(`--dh-shadow: ${l}`),x(o)||a.push(`--hd-nav-gap: ${f(o)}`);const u=document.createElement("template");return u.innerHTML=`
    <header style="${a.join(";")}">
      <h1 class="title">${s}</h1>
      <div class="right-wrap">
        <nav>
          ${$(y(r||"[]"))}
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
  `,u.content}function m(){const e=document.createElement("style");return e.innerHTML=`
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
  `,e}function b(e,t,n={}){const o={};return t.forEach(r=>{o[r]=e.getAttribute(r)??n[r]}),o}function y(e,t){try{return JSON.parse(e)}catch{return t}}function w(e){return typeof e=="string"?/^-?\d+(\.\d+)?$/.test(e):typeof e=="number"}function x(e){return typeof e>"u"||e===null}function f(e,t="px"){return w(e)?`${e}${t}`:typeof e=="string"&&/\d+(\w+)?\s/.test(e)?e.split(/\s+/).map(n=>f(n,t)).join(" "):e}function $(e){const t=location.pathname;return e.map(n=>`<a class="${t.endsWith(n.path)?"current":""}" href="${n.path}" target="${n.target||"_self"}">${n.label}</a>`).join(`
`)}const C=16.6;function v(e){return new Promise(function(t,n){try{c(e,t)}catch(o){n(o)}})}function c(e,t){if(typeof requestIdleCallback=="function")requestIdleCallback(n=>{n.timeRemaining()>0?(e(),t()):c(e,t)});else{const n=Date.now();requestAnimationFrame(()=>{Date.now()-n<C?(e(),t()):c(e,t)})}}function h(e){return document.querySelector(e)}function L(e=50){return new Promise(t=>{setTimeout(()=>{t()},e)})}document.addEventListener("DOMContentLoaded",()=>{const e=h("button"),t=h("#totalTime"),n=async()=>{e.disabled=!0,t.innerText="--";const o=Date.now();v(async()=>{for(let r=0;r<100;r++)await L();t.innerText=`${Date.now()-o}ms`,e.disabled=!1})};e.addEventListener("click",n)});
