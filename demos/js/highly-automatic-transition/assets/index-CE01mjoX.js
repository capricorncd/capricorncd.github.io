(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();/*!
 * @zx-libs/utils version 0.0.5
 * Author: Capricorncd<capricorncd@qq.com>
 * Homepage: https://github.com/capricorncd/zx-libs/libs/utils#readme
 * Released on: 2024-04-30 20:19:27 (GMT+0900)
 *//*!
 * date-utils-2020 v1.1.1
 * Author: Capricorncd
 * Repository: https://github.com/capricorncd/date-utils-2020#readme
 * Released on: 2024/04/02 21:28:40 GMT+0900
 */function l(r,e=0){return Array.prototype.slice.call(r,e)}function c(r,e=document){return r?r instanceof HTMLElement?r:e.querySelector(r):null}function u(r,e=document){return l(e.querySelectorAll(r))}document.addEventListener("DOMContentLoaded",()=>{u(".content").forEach(n=>{n.innerHTML=`<div>
    <p>The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.</p>
  <p>Note: The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes.</p>
  <pre><code>querySelector(selectors)</code></pre>
  <p>Parameters selectors. A string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.</p>
  </div>`});const r=c(".btn-js"),e=c(".btn-js ~ .content");console.log(r,e),r.addEventListener("mouseenter",()=>{e.style.height="auto";const{height:n}=e.getBoundingClientRect();e.style.height=0,e.offsetHeight,e.style.height=n+"px"}),r.addEventListener("mouseleave",()=>{e.style.height=0})});
