(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();class b extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){console.log(`Custom element ${this.nodeName} added to page.`);const e=v(this,["links","github","color","background","title","shadow"],{github:"https://github.com/capricorncd/front-end-demos",title:"Capricorncd"});this.root.appendChild(y(e)),this.root.appendChild(w())}disconnectedCallback(){console.log(`Custom element ${this.nodeName} removed from page.`)}adoptedCallback(){console.log(`Custom element ${this.nodeName} moved to new page.`)}attributeChangedCallback(e,o,r){console.log(`${this.nodeName} attributeChangedCallback:`,e,o,r)}}customElements.define("demo-header",b);function y(t){const{color:e,background:o,gap:r,links:n,github:i,title:s,position:u,shadow:f}=t,d=[];u&&d.push(`--dh-position: ${u}`),e&&d.push(`--dh-color: ${e}`),o&&d.push(`--dh-background: ${o}`),f&&d.push(`--dh-shadow: ${f}`),M(r)||d.push(`--hd-nav-gap: ${g(r)}`);const p=document.createElement("template");return p.innerHTML=`
    <header style="${d.join(";")}">
      <h1 class="title">${s}</h1>
      <div class="right-wrap">
        <nav>
          ${C($(n||"[]"))}
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
  `,p.content}function w(){const t=document.createElement("style");return t.innerHTML=`
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
  `,t}function v(t,e,o={}){const r={};return e.forEach(n=>{r[n]=t.getAttribute(n)??o[n]}),r}function $(t,e){try{return JSON.parse(t)}catch{return e}}function x(t){return typeof t=="string"?/^-?\d+(\.\d+)?$/.test(t):typeof t=="number"}function M(t){return typeof t>"u"||t===null}function g(t,e="px"){return x(t)?`${t}${e}`:typeof t=="string"&&/\d+(\w+)?\s/.test(t)?t.split(/\s+/).map(o=>g(o,e)).join(" "):t}function C(t){const e=location.pathname;return t.map(o=>`<a class="${e.endsWith(o.path)?"current":""}" href="${o.path}" target="${o.target||"_self"}">${o.label}</a>`).join(`
`)}/*!
 * @zx-libs/utils version 0.0.1
 * Author: Capricorncd<capricorncd@qq.com>
 * Homepage: https://github.com/capricorncd/zx-libs/libs/utils#readme
 * Released on: 2024-04-21 17:05:23 (GMT+0900)
 */function m(t,e=document){return t?t instanceof HTMLElement?t:e.querySelector(t):null}let a,l=!1;function L(){const t=m("canvas");a=t.getContext("2d"),t.width=window.innerWidth*devicePixelRatio,t.height=(window.innerHeight-60)*devicePixelRatio,a.translate(t.width/2,t.height),a.scale(1,-1),l=!0,h(0,0,300,60,90),l=!1,m("button").addEventListener("click",()=>{l||(a.fillStyle="rgb(255, 255, 255)",a.fillRect(-t.width/2,0,t.width,t.height),l=!0,h(0,0,280,50,90),l=!1)})}function h(t,e,o,r,n){if(r<8&&Math.random()<.4||r<2){Math.random()<.8&&E(t,e,10);return}a.beginPath(),a.moveTo(t,e);const[i,s]=N(t,e,o,n);a.lineTo(i,s),a.strokeStyle="#333",a.lineWidth=r,a.lineCap="round",a.stroke(),h(i,s,c(o*.85),c(r*.75),c(n+Math.random()*30)),h(i,s,c(o*.85),c(r*.75),c(n-Math.random()*30))}function E(t,e,o,r=2){a.beginPath(),a.arc(t,e,o+Math.random()*30,0,r*Math.PI),a.fillStyle=`rgba(${204+Math.random()*50}, ${Math.random()*50}, ${102+Math.random()*25}, ${Math.random()})`,a.fill()}function c(t){return Math.floor(t)}function N(t,e,o,r){const n=r*Math.PI/180;return[t+c(o*Math.cos(n)),e+c(o*Math.sin(n))]}document.addEventListener("DOMContentLoaded",L);
