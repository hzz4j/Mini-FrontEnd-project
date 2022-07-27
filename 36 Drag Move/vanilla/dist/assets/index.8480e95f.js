const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};x();function v(){const e=document.createElement("div");return e.classList.add("indicator"),e.innerHTML=`
   <svg viewBox="0 0 32 32">
       <rect height="4" width="4" y="4" x="0"/>
       <rect height="4" width="4" y="12" x="0"/>
       <rect height="4" width="4" y="20" x="0"/>
       <rect height="4" width="4" y="28" x="0"/>
       <rect height="4" width="4" y="4" x="8"/>
       <rect height="4" width="4" y="12" x="8"/>
       <rect height="4" width="4" y="20" x="8"/>
       <rect height="4" width="4" y="28" x="8"/>
       <rect height="4" width="4" y="4" x="16"/>
       <rect height="4" width="4" y="12" x="16"/>
       <rect height="4" width="4" y="20" x="16"/>
       <rect height="4" width="4" y="28" x="16"/>
       <rect height="4" width="4" y="4" x="24"/>
       <rect height="4" width="4" y="12" x="24"/>
       <rect height="4" width="4" y="20" x="24"/>
       <rect height="4" width="4" y="28" x="24"/>
   </svg>
   
   `,e}function d(e,i,l){let o=e+i;return o<=0?0:o>l?l:o}function u(e){return+getComputedStyle(e).getPropertyValue("width").replace("px","")}function f(e){return+getComputedStyle(e).getPropertyValue("height").replace("px","")}function w(e){const i=e.parentElement;e.appendChild(v()),e.addEventListener("mousedown",p),e.addEventListener("mouseup",y);let l,o,t=u(i)-u(e),r,s,a=f(i)-f(e),c;function p(n){e.style.position||(console.log(e.offsetLeft,e.offsetTop),e.style.left=e.offsetLeft-10+"px",e.style.top=e.offsetTop-10+"px"),l=n.clientX,r=n.clientY,o=+e.style.left.replace("px",""),s=+e.style.top.replace("px",""),document.addEventListener("mousemove",h),c=!0}function h(n){if(!c)return;e.style.position="absolute";let g=n.clientX-l,m=n.clientY-r;e.style.left=`${d(o,g,t)}px`,e.style.top=`${d(s,m,a)}px`}function y(){c=!1,document.removeEventListener("mousemove",h)}}const L=document.querySelectorAll(".content");L.forEach(e=>w(e));
