(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();class u extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){const r=g(this,["links","github","color","background","title","shadow"],{github:"https://github.com/capricorncd",title:"Capricorncd"});this.root.appendChild(p(r)),this.root.appendChild(f())}attributeChangedCallback(r,n,i){console.log("attributeChangedCallback:",r,n,i)}}customElements.define("demo-header",u);function p(e){const{color:r,background:n,gap:i,links:t,github:o,title:a,position:c,shadow:d}=e,s=[];c&&s.push(`--dh-position: ${c}`),r&&s.push(`--dh-color: ${r}`),n&&s.push(`--dh-background: ${n}`),d&&s.push(`--dh-shadow: ${d}`),y(i)||s.push(`--hd-nav-gap: ${h(i)}`);const l=document.createElement("template");return l.innerHTML=`
    <header style="${s.join(";")}">
      <h1 class="title">${a}</h1>
      <div class="right-wrap">
        <nav>
          ${x(m(t||"[]"))}
        </nav>
        <a class="icon-github" href="${o}" target="_blank">
          <svg width="28" height="28" viewBox="0 0 16 16" version="1.1"
          aria-hidden="true">
            <path fill-rule="evenodd" fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
            </path>
          </svg>
        </a>
      </div>
    </header>
  `,l.content}function f(){const e=document.createElement("style");return e.innerHTML=`
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
      font-family: system-ui;
    }
    .title {
      margin: 0 0 0 20px;
      padding: 0;
      line-height: 1;
      font-size: 1.5rem;
      font-weight: 500;
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
  `,e}function g(e,r,n={}){const i={};return r.forEach(t=>{i[t]=e.getAttribute(t)??n[t]}),i}function m(e,r){try{return JSON.parse(e)}catch{return r}}function b(e){return typeof e=="string"?/^-?\d+(\.\d+)?$/.test(e):typeof e=="number"}function y(e){return typeof e>"u"||e===null}function h(e,r="px"){return b(e)?`${e}${r}`:typeof e=="string"&&/\d+(\w+)?\s/.test(e)?e.split(/\s+/).map(n=>h(n,r)).join(" "):e}function x(e){const r=location.pathname;return e.map(n=>`<a class="${r.endsWith(n.path)?"current":""}" href="${n.path}" target="${n.target||"_self"}">${n.label}</a>`).join(`
`)}
