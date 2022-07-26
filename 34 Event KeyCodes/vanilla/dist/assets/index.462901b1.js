const i=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};i();const c=document.getElementById("container");window.addEventListener("keydown",t=>{c.innerHTML=`
        <div class="key">
            <span class="content">
            ${t.key===" "?t.code:t.key}
            </span>
            <small>event.key</small>
        </div>
        
        <div class="key">
            <span class="content">${t.keyCode}</span>
            <small>event.keyCode</small>
        </div>
        
        <div class="key">
            <span class="content">${t.code}</span>
            <small>event.code</small>
        </div>
    `,console.log(t)});
