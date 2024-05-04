(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();class p extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){console.log(`Custom element ${this.nodeName} added to page.`);const t=m(this,["links","github","color","background","title","shadow"],{github:"https://github.com/capricorncd",title:"Capricorncd"});this.root.appendChild(f(t)),this.root.appendChild(g())}disconnectedCallback(){console.log(`Custom element ${this.nodeName} removed from page.`)}adoptedCallback(){console.log(`Custom element ${this.nodeName} moved to new page.`)}attributeChangedCallback(t,o,i){console.log(`${this.nodeName} attributeChangedCallback:`,t,o,i)}}customElements.define("demo-header",p);function f(e){const{color:t,background:o,gap:i,links:n,github:r,title:a,position:c,shadow:d}=e,s=[];c&&s.push(`--dh-position: ${c}`),t&&s.push(`--dh-color: ${t}`),o&&s.push(`--dh-background: ${o}`),d&&s.push(`--dh-shadow: ${d}`),v(i)||s.push(`--hd-nav-gap: ${u(i)}`);const l=document.createElement("template");return l.innerHTML=`
    <header style="${s.join(";")}">
      <h1 class="title">${a}</h1>
      <div class="right-wrap">
        <nav>
          ${w(y(n||"[]"))}
        </nav>
        <a class="icon-github" href="${r}" target="_blank">
          <svg width="28" height="28" viewBox="0 0 16 16" version="1.1"
          aria-hidden="true">
            <path fill-rule="evenodd" fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
            </path>
          </svg>
        </a>
      </div>
    </header>
  `,l.content}function g(){const e=document.createElement("style");return e.innerHTML=`
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
  `,e}function m(e,t,o={}){const i={};return t.forEach(n=>{i[n]=e.getAttribute(n)??o[n]}),i}function y(e,t){try{return JSON.parse(e)}catch{return t}}function b(e){return typeof e=="string"?/^-?\d+(\.\d+)?$/.test(e):typeof e=="number"}function v(e){return typeof e>"u"||e===null}function u(e,t="px"){return b(e)?`${e}${t}`:typeof e=="string"&&/\d+(\w+)?\s/.test(e)?e.split(/\s+/).map(o=>u(o,t)).join(" "):e}function w(e){const t=location.pathname;return e.map(o=>`<a class="${t.endsWith(o.path)?"current":""}" href="${o.path}" target="${o.target||"_self"}">${o.label}</a>`).join(`
`)}/*!
 * @zx-libs/utils version 0.0.5
 * Author: Capricorncd<capricorncd@qq.com>
 * Homepage: https://github.com/capricorncd/zx-libs/libs/utils#readme
 * Released on: 2024-04-30 20:19:27 (GMT+0900)
 *//*!
 * date-utils-2020 v1.1.1
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2024/04/02 21:28:40 GMT+0900
 */function x(e,t=0){return Array.prototype.slice.call(e,t)}function h(e,t=document){return e?e instanceof HTMLElement?e:t.querySelector(e):null}function $(e,t=document){return x(t.querySelectorAll(e))}document.addEventListener("DOMContentLoaded",()=>{$(".content").forEach(o=>{o.innerHTML=`<div>
    <p>The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.</p>
  <p>Note: The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes.</p>
  <pre><code>querySelector(selectors)</code></pre>
  <p>Parameters selectors. A string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.</p>
  </div>`});const e=h(".btn-js"),t=h(".btn-js ~ .content");console.log(e,t),e.addEventListener("mouseenter",()=>{t.style.height="auto";const{height:o}=t.getBoundingClientRect();t.style.height=0,t.offsetHeight,t.style.height=o+"px"}),e.addEventListener("mouseleave",()=>{t.style.height=0})});
