const $o=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};$o();function Or(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Uo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ho=Or(Uo);function di(e){return!!e||e===""}function Er(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?Yo(r):Er(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(Q(e))return e}}const Bo=/;(?![^(]*\))/g,Wo=/:(.+)/;function Yo(e){const t={};return e.split(Bo).forEach(n=>{if(n){const r=n.split(Wo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pr(e){let t="";if(Z(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Pr(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y={},pt=[],xe=()=>{},Ko=()=>!1,qo=/^on[^a-z]/,wn=e=>qo.test(e),Ir=e=>e.startsWith("onUpdate:"),re=Object.assign,Tr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xo=Object.prototype.hasOwnProperty,D=(e,t)=>Xo.call(e,t),L=Array.isArray,St=e=>_n(e)==="[object Map]",Vo=e=>_n(e)==="[object Set]",R=e=>typeof e=="function",Z=e=>typeof e=="string",Sr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",mi=e=>Q(e)&&R(e.then)&&R(e.catch),Jo=Object.prototype.toString,_n=e=>Jo.call(e),Go=e=>_n(e).slice(8,-1),Zo=e=>_n(e)==="[object Object]",Nr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qo=/-(\w)/g,Ie=kn(e=>e.replace(Qo,(t,n)=>n?n.toUpperCase():"")),es=/\B([A-Z])/g,yt=kn(e=>e.replace(es,"-$1").toLowerCase()),An=kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Un=kn(e=>e?`on${An(e)}`:""),zt=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ma;const ns=()=>ma||(ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class rs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function as(e,t=Ce){t&&t.active&&t.effects.push(e)}const Mr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pi=e=>(e.w&qe)>0,hi=e=>(e.n&qe)>0,is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];pi(a)&&!hi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Zn=new WeakMap;let Pt=0,qe=1;const Qn=30;let ge;const tt=Symbol(""),er=Symbol("");class Fr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,as(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Ye=!0,qe=1<<++Pt,Pt<=Qn?is(this):pa(this),this.fn()}finally{Pt<=Qn&&os(this),qe=1<<--Pt,ge=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(pa(this),this.onStop&&this.onStop(),this.active=!1)}}function pa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const gi=[];function xt(){gi.push(Ye),Ye=!1}function wt(){const e=gi.pop();Ye=e===void 0?!0:e}function ue(e,t,n){if(Ye&&ge){let r=Zn.get(e);r||Zn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Mr()),vi(a)}}function vi(e,t){let n=!1;Pt<=Qn?hi(e)||(e.n|=qe,n=!pi(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Zn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Nr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),St(e)&&s.push(o.get(er)));break;case"delete":L(e)||(s.push(o.get(tt)),St(e)&&s.push(o.get(er)));break;case"set":St(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&tr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);tr(Mr(l))}}function tr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&ha(r);for(const r of n)r.computed||ha(r)}function ha(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ss=Or("__proto__,__v_isRef,__isVue"),bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sr)),ls=Rr(),fs=Rr(!1,!0),cs=Rr(!0),ga=us();function us(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){xt();const r=U(this)[t].apply(this,n);return wt(),r}}),e}function Rr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Es:ki:t?_i:wi).get(r))return r;const o=L(r);if(!e&&o&&D(ga,a))return Reflect.get(ga,a,i);const s=Reflect.get(r,a,i);return(Sr(a)?bi.has(a):ss(a))||(e||ue(r,"get",a),t)?s:G(s)?o&&Nr(a)?s:s.value:Q(s)?e?Ai(s):zr(s):s}}const ds=yi(),ms=yi(!0);function yi(e=!1){return function(n,r,a,i){let o=n[r];if(Dt(o)&&G(o)&&!G(a))return!1;if(!e&&!Dt(a)&&(nr(a)||(a=U(a),o=U(o)),!L(n)&&G(o)&&!G(a)))return o.value=a,!0;const s=L(n)&&Nr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?zt(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function ps(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function hs(e,t){const n=Reflect.has(e,t);return(!Sr(t)||!bi.has(t))&&ue(e,"has",t),n}function gs(e){return ue(e,"iterate",L(e)?"length":tt),Reflect.ownKeys(e)}const xi={get:ls,set:ds,deleteProperty:ps,has:hs,ownKeys:gs},vs={get:cs,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=re({},xi,{get:fs,set:ms}),Lr=e=>e,Cn=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=Cn(a),s=r?Lr:n?$r:$t;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Gt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Zt(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",tt),Reflect.get(e,"size",e)}function va(e){e=U(e);const t=U(this);return Cn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function ba(e,t){t=U(t);const n=U(this),{has:r,get:a}=Cn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?zt(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function ya(e){const t=U(this),{has:n,get:r}=Cn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function xa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Qt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Lr:e?$r:$t;return!e&&ue(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function en(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=St(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Lr:t?$r:$t;return!t&&ue(i,"iterate",l?er:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function ys(){const e={get(i){return Jt(this,i)},get size(){return Zt(this)},has:Gt,add:va,set:ba,delete:ya,clear:xa,forEach:Qt(!1,!1)},t={get(i){return Jt(this,i,!1,!0)},get size(){return Zt(this)},has:Gt,add:va,set:ba,delete:ya,clear:xa,forEach:Qt(!1,!0)},n={get(i){return Jt(this,i,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Qt(!0,!1)},r={get(i){return Jt(this,i,!0,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=en(i,!1,!1),n[i]=en(i,!0,!1),t[i]=en(i,!1,!0),r[i]=en(i,!0,!0)}),[e,n,t,r]}const[xs,ws,_s,ks]=ys();function jr(e,t){const n=t?e?ks:_s:e?ws:xs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const As={get:jr(!1,!1)},Cs={get:jr(!1,!0)},Os={get:jr(!0,!1)},wi=new WeakMap,_i=new WeakMap,ki=new WeakMap,Es=new WeakMap;function Ps(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Is(e){return e.__v_skip||!Object.isExtensible(e)?0:Ps(Go(e))}function zr(e){return Dt(e)?e:Dr(e,!1,xi,As,wi)}function Ts(e){return Dr(e,!1,bs,Cs,_i)}function Ai(e){return Dr(e,!0,vs,Os,ki)}function Dr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Is(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ht(e){return Dt(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function nr(e){return!!(e&&e.__v_isShallow)}function Ci(e){return ht(e)||Dt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Oi(e){return cn(e,"__v_skip",!0),e}const $t=e=>Q(e)?zr(e):e,$r=e=>Q(e)?Ai(e):e;function Ei(e){Ye&&ge&&(e=U(e),vi(e.dep||(e.dep=Mr())))}function Pi(e,t){e=U(e),e.dep&&tr(e.dep)}function G(e){return!!(e&&e.__v_isRef===!0)}function Bn(e){return Ss(e,!1)}function Ss(e,t){return G(e)?e:new Ns(e,t)}class Ns{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:$t(t)}get value(){return Ei(this),this._value}set value(t){t=this.__v_isShallow?t:U(t),zt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:$t(t),Pi(this))}}function Ms(e){return G(e)?e.value:e}const Fs={get:(e,t,n)=>Ms(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return G(a)&&!G(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ii(e){return ht(e)?e:new Proxy(e,Fs)}class Rs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Fr(t,()=>{this._dirty||(this._dirty=!0,Pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ei(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ls(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=xe):(r=e.get,a=e.set),new Rs(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){On(i,t,n)}return a}function we(e,t,n,r){if(R(e)){const i=Ke(e,t,n,r);return i&&mi(i)&&i.catch(o=>{On(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function On(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}js(e,n,a,r)}function js(e,t,n,r=!0){console.error(e)}let un=!1,rr=!1;const ce=[];let Me=0;const Nt=[];let It=null,ft=0;const Mt=[];let Be=null,ct=0;const Ti=Promise.resolve();let Ur=null,ar=null;function zs(e){const t=Ur||Ti;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=Me+1,n=ce.length;for(;t<n;){const r=t+n>>>1;Ut(ce[r])<e?t=r+1:n=r}return t}function Si(e){(!ce.length||!ce.includes(e,un&&e.allowRecurse?Me+1:Me))&&e!==ar&&(e.id==null?ce.push(e):ce.splice(Ds(e.id),0,e),Ni())}function Ni(){!un&&!rr&&(rr=!0,Ur=Ti.then(Ri))}function $s(e){const t=ce.indexOf(e);t>Me&&ce.splice(t,1)}function Mi(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ni()}function Us(e){Mi(e,It,Nt,ft)}function Hs(e){Mi(e,Be,Mt,ct)}function En(e,t=null){if(Nt.length){for(ar=t,It=[...new Set(Nt)],Nt.length=0,ft=0;ft<It.length;ft++)It[ft]();It=null,ft=0,ar=null,En(e,t)}}function Fi(e){if(En(),Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>Ut(n)-Ut(r)),ct=0;ct<Be.length;ct++)Be[ct]();Be=null,ct=0}}const Ut=e=>e.id==null?1/0:e.id;function Ri(e){rr=!1,un=!0,En(e),ce.sort((n,r)=>Ut(n)-Ut(r));const t=xe;try{for(Me=0;Me<ce.length;Me++){const n=ce[Me];n&&n.active!==!1&&Ke(n,null,14)}}finally{Me=0,ce.length=0,Fi(),un=!1,Ur=null,(ce.length||Nt.length||Mt.length)&&Ri(e)}}function Bs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(ts))}let s,l=r[s=Un(t)]||r[s=Un(Ie(t))];!l&&i&&(l=r[s=Un(yt(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function Li(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Li(u,t,!0);d&&(s=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):re(o,i),r.set(e,o),o)}function Pn(e,t){return!e||!wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,yt(t))||D(e,t))}let Ee=null,In=null;function dn(e){const t=Ee;return Ee=e,In=e&&e.type.__scopeId||null,t}function Ws(e){In=e}function Ys(){In=null}function Ks(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ta(-1);const i=dn(t),o=e(...a);return dn(i),r._d&&Ta(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Wn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:F,inheritAttrs:j}=e;let S,y;const O=dn(e);try{if(n.shapeFlag&4){const z=a||r;S=Oe(d.call(z,z,m,i,C,b,F)),y=l}else{const z=t;S=Oe(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:qs(l)}}catch(z){Ft.length=0,On(z,e,1),S=ne(Ht)}let N=S;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:W}=N;z.length&&W&7&&(o&&z.some(Ir)&&(y=Xs(y,o)),N=vt(N,y))}return n.dirs&&(N=vt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,dn(O),S}const qs=e=>{let t;for(const n in e)(n==="class"||n==="style"||wn(n))&&((t||(t={}))[n]=e[n]);return t},Xs=(e,t)=>{const n={};for(const r in e)(!Ir(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Pn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?wa(r,o,u):!0:!!o;return!1}function wa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Pn(n,i))return!0}return!1}function Js({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Gs=e=>e.__isSuspense;function Zs(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Hs(e)}function Qs(e,t){if(J){let n=J.provides;const r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function Yn(e,t,n=!1){const r=J||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const _a={};function rn(e,t,n){return ji(e,t,n)}function ji(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=J;let l,u=!1,d=!1;if(G(e)?(l=()=>e.value,u=nr(e)):ht(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(y=>ht(y)||nr(y)),l=()=>e.map(y=>{if(G(y))return y.value;if(ht(y))return ut(y);if(R(y))return Ke(y,s,2)})):R(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[b])}:l=xe,t&&r){const y=l;l=()=>ut(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Wt)return b=xe,t?n&&we(t,s,3,[l(),d?[]:void 0,b]):l(),xe;let C=d?[]:_a;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((O,N)=>zt(O,C[N])):zt(y,C)))&&(m&&m(),we(t,s,3,[y,C===_a?void 0:C,b]),C=y)}else S.run()};F.allowRecurse=!!t;let j;a==="sync"?j=F:a==="post"?j=()=>se(F,s&&s.suspense):j=()=>Us(F);const S=new Fr(l,j);return t?n?F():C=S.run():a==="post"?se(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Tr(s.scope.effects,S)}}function el(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?zi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=J;bt(this);const s=ji(a,i.bind(r),n);return o?bt(o):nt(),s}function zi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),G(e))ut(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(Vo(e)||St(e))e.forEach(n=>{ut(n,t)});else if(Zo(e))for(const n in e)ut(e[n],t);return e}function Kt(e){return R(e)?{setup:e,name:e.name}:e}const an=e=>!!e.type.__asyncLoader,Di=e=>e.type.__isKeepAlive;function tl(e,t){$i(e,"a",t)}function nl(e,t){$i(e,"da",t)}function $i(e,t,n=J){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Tn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Di(a.parent.vnode)&&rl(r,t,n,a),a=a.parent}}function rl(e,t,n,r){const a=Tn(t,e,r,!0);Hi(()=>{Tr(r[t],a)},n)}function Tn(e,t,n=J,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;xt(),bt(n);const s=we(t,n,e,o);return nt(),wt(),s});return r?a.unshift(i):a.push(i),i}}const ze=e=>(t,n=J)=>(!Wt||e==="sp")&&Tn(e,t,n),al=ze("bm"),Ui=ze("m"),il=ze("bu"),ol=ze("u"),sl=ze("bum"),Hi=ze("um"),ll=ze("sp"),fl=ze("rtg"),cl=ze("rtc");function ul(e,t=J){Tn("ec",e,t)}function Je(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(xt(),we(l,n,8,[e.el,s,e,t]),wt())}}const Bi="components";function dl(e,t){return pl(Bi,e,!0,t)||e}const ml=Symbol();function pl(e,t,n=!0,r=!1){const a=Ee||J;if(a){const i=a.type;if(e===Bi){const s=Kl(i,!1);if(s&&(s===t||s===Ie(t)||s===An(Ie(t))))return i}const o=ka(a[e]||i[e],t)||ka(a.appContext[e],t);return!o&&r?i:o}}function ka(e,t){return e&&(e[t]||e[Ie(t)]||e[An(Ie(t))])}const ir=e=>e?no(e)?Yr(e)||e.proxy:ir(e.parent):null,mn=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ir(e.parent),$root:e=>ir(e.root),$emit:e=>e.emit,$options:e=>Yi(e),$forceUpdate:e=>e.f||(e.f=()=>Si(e.update)),$nextTick:e=>e.n||(e.n=zs.bind(e.proxy)),$watch:e=>el.bind(e)}),hl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];or&&(o[t]=0)}}const d=mn[t];let m,b;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(mn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let or=!0;function gl(e){const t=Yi(e),n=e.proxy,r=e.ctx;or=!1,t.beforeCreate&&Aa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:F,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:N,unmounted:z,render:W,renderTracked:ee,renderTriggered:le,errorCaptured:_e,serverPrefetch:ae,expose:kt,inheritAttrs:it,components:At,directives:Xt,filters:sa}=t;if(u&&vl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];R(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);Q(V)&&(e.data=zr(V))}if(or=!0,i)for(const V in i){const K=i[V],Te=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):xe,zn=!R(K)&&R(K.set)?K.set.bind(n):xe,Ct=me({get:Te,set:zn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:ot=>Ct.value=ot})}if(s)for(const V in s)Wi(s[V],r,n,V);if(l){const V=R(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{Qs(K,V[K])})}d&&Aa(d,e,"c");function ie(V,K){L(K)?K.forEach(Te=>V(Te.bind(n))):K&&V(K.bind(n))}if(ie(al,m),ie(Ui,b),ie(il,C),ie(ol,F),ie(tl,j),ie(nl,S),ie(ul,_e),ie(cl,ee),ie(fl,le),ie(sl,O),ie(Hi,z),ie(ll,ae),L(kt))if(kt.length){const V=e.exposed||(e.exposed={});kt.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});W&&e.render===xe&&(e.render=W),it!=null&&(e.inheritAttrs=it),At&&(e.components=At),Xt&&(e.directives=Xt)}function vl(e,t,n=xe,r=!1){L(e)&&(e=sr(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=Yn(i.from||a,i.default,!0):o=Yn(i.from||a):o=Yn(i),G(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Aa(e,t,n){we(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wi(e,t,n,r){const a=r.includes(".")?zi(n,r):()=>n[r];if(Z(e)){const i=t[e];R(i)&&rn(a,i)}else if(R(e))rn(a,e.bind(n));else if(Q(e))if(L(e))e.forEach(i=>Wi(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&rn(a,i,e)}}function Yi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>pn(l,u,o,!0)),pn(l,t,o)),i.set(t,l),l}function pn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&pn(e,i,n,!0),a&&a.forEach(o=>pn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=bl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const bl={data:Ca,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Ze,directives:Ze,watch:xl,provide:Ca,inject:yl};function Ca(e,t){return t?e?function(){return re(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function yl(e,t){return Ze(sr(e),sr(t))}function sr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?re(re(Object.create(null),e),t):t}function xl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function wl(e,t,n,r=!1){const a={},i={};cn(i,Sn,1),e.propsDefaults=Object.create(null),Ki(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ts(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function _l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Pn(e.emitsOptions,b))continue;const C=t[b];if(l)if(D(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const F=Ie(b);a[F]=lr(l,s,F,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{Ki(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=yt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=lr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function Ki(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nn(l))continue;const u=t[l];let d;a&&D(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Pn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=lr(a,l,m,u[m],e,!D(u,m))}}return o}function lr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(bt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===yt(n))&&(r=!0))}return r}function qi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,C]=qi(m,t,!0);re(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,pt),pt;if(L(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Oa(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Ie(d);if(Oa(m)){const b=i[d],C=o[m]=L(b)||R(b)?{type:b}:b;if(C){const F=Ia(Boolean,C.type),j=Ia(String,C.type);C[0]=F>-1,C[1]=j<0||F<j,(F>-1||D(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Oa(e){return e[0]!=="$"}function Ea(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Pa(e,t){return Ea(e)===Ea(t)}function Ia(e,t){return L(t)?t.findIndex(n=>Pa(n,e)):R(t)&&Pa(t,e)?0:-1}const Xi=e=>e[0]==="_"||e==="$stable",Hr=e=>L(e)?e.map(Oe):[Oe(e)],kl=(e,t,n)=>{if(t._n)return t;const r=Ks((...a)=>Hr(t(...a)),n);return r._c=!1,r},Vi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Xi(a))continue;const i=e[a];if(R(i))t[a]=kl(a,i,r);else if(i!=null){const o=Hr(i);t[a]=()=>o}}},Ji=(e,t)=>{const n=Hr(t);e.slots.default=()=>n},Al=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),cn(t,"_",n)):Vi(t,e.slots={})}else e.slots={},t&&Ji(e,t);cn(e.slots,Sn,1)},Cl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(re(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Vi(t,a)),o=t}else t&&(Ji(e,t),o={default:1});if(i)for(const s in a)!Xi(s)&&!(s in o)&&delete a[s]};function Gi(){return{app:null,config:{isNativeTag:Ko,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function El(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=Gi(),o=new Set;let s=!1;const l=i.app={_uid:Ol++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Xl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=ne(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Yr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function fr(e,t,n,r,a=!1){if(L(e)){e.forEach((b,C)=>fr(b,t&&(L(t)?t[C]:t),n,r,a));return}if(an(r)&&!a)return;const i=r.shapeFlag&4?Yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,D(m,u)&&(m[u]=null)):G(u)&&(u.value=null)),R(l))Ke(l,s,12,[o,d]);else{const b=Z(l),C=G(l);if(b||C){const F=()=>{if(e.f){const j=b?d[l]:l.value;a?L(j)&&Tr(j,i):L(j)?j.includes(i)||j.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,se(F,n)):F()}}}const se=Zs;function Pl(e){return Il(e)}function Il(e,t){const n=ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=xe,cloneNode:F,insertStaticContent:j}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Et(f,c)&&(g=Vt(f),$e(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:E}=c;switch(v){case Br:y(f,c,p,g);break;case Ht:O(f,c,p,g);break;case Kn:f==null&&N(c,p,g,k);break;case Ne:Xt(f,c,p,g,h,w,k,x,_);break;default:E&1?ee(f,c,p,g,h,w,k,x,_):E&6?sa(f,c,p,g,h,w,k,x,_):(E&64||E&128)&&v.process(f,c,p,g,h,w,k,x,_,st)}P!=null&&h&&fr(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},z=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},ee=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,w,k,x,_):kt(f,c,h,w,k,x,_)},le=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:E,shapeFlag:I,transition:M,patchFlag:$,dirs:H}=f;if(f.el&&F!==void 0&&$===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),I&8?d(_,f.children):I&16&&ae(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),H&&Je(f,null,g,"created"),E){for(const q in E)q!=="value"&&!nn(q)&&i(_,q,null,E[q],w,f.children,g,h,Se);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ae(v,g,f)}_e(_,f,f.scopeId,k,g)}H&&Je(f,null,g,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;B&&M.beforeEnter(_),r(_,c,p),((v=E&&E.onVnodeMounted)||B||H)&&se(()=>{v&&Ae(v,g,f),B&&M.enter(_),H&&Je(f,null,g,"mounted")},h)},_e=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let w=0;w<g.length;w++)C(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;_e(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ae=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?We(f[v]):Oe(f[v]);S(null,P,c,p,g,h,w,k,x)}},kt=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const E=f.props||Y,I=c.props||Y;let M;p&&Ge(p,!1),(M=I.onVnodeBeforeUpdate)&&Ae(M,p,c,f),P&&Je(c,f,p,"beforeUpdate"),p&&Ge(p,!0);const $=h&&c.type!=="foreignObject";if(v?it(f.dynamicChildren,v,x,p,g,$,w):k||Te(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)At(x,c,E,I,p,g,h);else if(_&2&&E.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",E.style,I.style,h),_&8){const H=c.dynamicProps;for(let B=0;B<H.length;B++){const q=H[B],pe=E[q],lt=I[q];(lt!==pe||q==="value")&&i(x,q,pe,lt,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&At(x,c,E,I,p,g,h);((M=I.onVnodeUpdated)||P)&&se(()=>{M&&Ae(M,p,c,f),P&&Je(c,f,p,"updated")},g)},it=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Ne||!Et(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},At=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(nn(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==Y)for(const x in p)!nn(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Xt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ae(c.children,p,P,h,w,k,x,_)):E>0&&E&64&&I&&f.dynamicChildren?(it(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&Zi(f,c,!0)):Te(f,c,p,P,h,w,k,x,_)},sa=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):jn(c,p,g,h,w,k,_):ie(f,c,_)},jn=(f,c,p,g,h,w,k)=>{const x=f.component=Ul(f,g,h);if(Di(f)&&(x.ctx.renderer=st),Hl(x),x.asyncDep){if(h&&h.registerDep(x,V),!f.el){const _=x.subTree=ne(Ht);O(null,_,c,p)}return}V(x,f,c,p,h,w,k)},ie=(f,c,p)=>{const g=c.component=f.component;if(Vs(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,$s(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:E,u:I,parent:M,vnode:$}=f,H=P,B;Ge(f,!1),P?(P.el=$.el,K(f,P,k)):P=$,E&&Hn(E),(B=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(B,M,P,$),Ge(f,!0);const q=Wn(f),pe=f.subTree;f.subTree=q,S(pe,q,m(pe.el),Vt(pe),f,h,w),P.el=q.el,H===null&&Js(f,q.el),I&&se(I,h),(B=P.props&&P.props.onVnodeUpdated)&&se(()=>Ae(B,M,P,$),h)}else{let P;const{el:E,props:I}=c,{bm:M,m:$,parent:H}=f,B=an(c);if(Ge(f,!1),M&&Hn(M),!B&&(P=I&&I.onVnodeBeforeMount)&&Ae(P,H,c),Ge(f,!0),E&&$n){const q=()=>{f.subTree=Wn(f),$n(E,f.subTree,f,h,null)};B?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Wn(f);S(null,q,p,g,f,h,w),c.el=q.el}if($&&se($,h),!B&&(P=I&&I.onVnodeMounted)){const q=c;se(()=>Ae(P,H,q),h)}(c.shapeFlag&256||H&&an(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&se(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Fr(x,()=>Si(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ge(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,_l(f,c.props,g,p),Cl(f,c.children,p),xt(),En(void 0,f.update),wt()},Te=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Ct(v,E,p,g,h,w,k,x,_);return}else if(I&256){zn(v,E,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),E!==v&&d(p,E)):P&16?M&16?Ct(v,E,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&ae(E,p,g,h,w,k,x,_))},zn=(f,c,p,g,h,w,k,x,_)=>{f=f||pt,c=c||pt;const v=f.length,P=c.length,E=Math.min(v,P);let I;for(I=0;I<E;I++){const M=c[I]=_?We(c[I]):Oe(c[I]);S(f[I],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,E):ae(c,p,g,h,w,k,x,_,E)},Ct=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let E=f.length-1,I=P-1;for(;v<=E&&v<=I;){const M=f[v],$=c[v]=_?We(c[v]):Oe(c[v]);if(Et(M,$))S(M,$,p,null,h,w,k,x,_);else break;v++}for(;v<=E&&v<=I;){const M=f[E],$=c[I]=_?We(c[I]):Oe(c[I]);if(Et(M,$))S(M,$,p,null,h,w,k,x,_);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,$=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?We(c[v]):Oe(c[v]),p,$,h,w,k,x,_),v++}}else if(v>I)for(;v<=E;)$e(f[v],h,w,!0),v++;else{const M=v,$=v,H=new Map;for(v=$;v<=I;v++){const fe=c[v]=_?We(c[v]):Oe(c[v]);fe.key!=null&&H.set(fe.key,v)}let B,q=0;const pe=I-$+1;let lt=!1,ca=0;const Ot=new Array(pe);for(v=0;v<pe;v++)Ot[v]=0;for(v=M;v<=E;v++){const fe=f[v];if(q>=pe){$e(fe,h,w,!0);continue}let ke;if(fe.key!=null)ke=H.get(fe.key);else for(B=$;B<=I;B++)if(Ot[B-$]===0&&Et(fe,c[B])){ke=B;break}ke===void 0?$e(fe,h,w,!0):(Ot[ke-$]=v+1,ke>=ca?ca=ke:lt=!0,S(fe,c[ke],p,null,h,w,k,x,_),q++)}const ua=lt?Tl(Ot):pt;for(B=ua.length-1,v=pe-1;v>=0;v--){const fe=$+v,ke=c[fe],da=fe+1<P?c[fe+1].el:g;Ot[v]===0?S(null,ke,p,da,h,w,k,x,_):lt&&(B<0||v!==ua[B]?ot(ke,p,da,2):B--)}}},ot=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ot(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,st);return}if(k===Ne){r(w,c,p);for(let E=0;E<_.length;E++)ot(_[E],c,p,g);r(f.anchor,c,p);return}if(k===Kn){z(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),se(()=>x.enter(w),h);else{const{leave:E,delayLeave:I,afterLeave:M}=x,$=()=>r(w,c,p),H=()=>{E(w,()=>{$(),M&&M()})};I?I(w,$,H):H()}else r(w,c,p)},$e=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:E,dirs:I}=f;if(x!=null&&fr(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,$=!an(f);let H;if($&&(H=k&&k.onVnodeBeforeUnmount)&&Ae(H,c,f),P&6)Do(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Je(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,st,g):v&&(w!==Ne||E>0&&E&64)?Se(v,c,p,!1,!0):(w===Ne&&E&384||!h&&P&16)&&Se(_,c,p),g&&la(f)}($&&(H=k&&k.onVnodeUnmounted)||M)&&se(()=>{H&&Ae(H,c,f),M&&Je(f,null,c,"unmounted")},p)},la=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Ne){zo(p,g);return}if(c===Kn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},zo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Do=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&Hn(g),h.stop(),w&&(w.active=!1,$e(k,f,c,p)),x&&se(x,c),se(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)$e(f[k],c,p,g,h)},Vt=f=>f.shapeFlag&6?Vt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),fa=(f,c,p)=>{f==null?c._vnode&&$e(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Fi(),c._vnode=f},st={p:S,um:$e,m:ot,r:la,mt:jn,mc:ae,pc:Te,pbc:it,n:Vt,o:e};let Dn,$n;return t&&([Dn,$n]=t(st)),{render:fa,hydrate:Dn,createApp:El(fa,Dn)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Zi(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||Zi(o,s))}}function Tl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Sl=e=>e.__isTeleport,Ne=Symbol(void 0),Br=Symbol(void 0),Ht=Symbol(void 0),Kn=Symbol(void 0),Ft=[];let be=null;function Qi(e=!1){Ft.push(be=e?null:[])}function Nl(){Ft.pop(),be=Ft[Ft.length-1]||null}let Bt=1;function Ta(e){Bt+=e}function eo(e){return e.dynamicChildren=Bt>0?be||pt:null,Nl(),Bt>0&&be&&be.push(e),e}function Ml(e,t,n,r,a,i){return eo(he(e,t,n,r,a,i,!0))}function Fl(e,t,n,r,a){return eo(ne(e,t,n,r,a,!0))}function cr(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Sn="__vInternal",to=({key:e})=>e!=null?e:null,on=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||G(e)||R(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function he(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&to(t),ref:t&&on(t),scopeId:In,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Wr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Bt>0&&!o&&be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&be.push(l),l}const ne=Rl;function Rl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ml)&&(e=Ht),cr(e)){const s=vt(e,t,!0);return n&&Wr(s,n),Bt>0&&!i&&be&&(s.shapeFlag&6?be[be.indexOf(e)]=s:be.push(s)),s.patchFlag|=-2,s}if(ql(e)&&(e=e.__vccOpts),t){t=Ll(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=Pr(s)),Q(l)&&(Ci(l)&&!L(l)&&(l=re({},l)),t.style=Er(l))}const o=Z(e)?1:Gs(e)?128:Sl(e)?64:Q(e)?4:R(e)?2:0;return he(e,t,n,r,a,o,i,!0)}function Ll(e){return e?Ci(e)||Sn in e?re({},e):e:null}function vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&to(s),ref:t&&t.ref?n&&a?L(a)?a.concat(on(t)):[a,on(t)]:on(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor}}function jl(e=" ",t=0){return ne(Br,null,e,t)}function Oe(e){return e==null||typeof e=="boolean"?ne(Ht):L(e)?ne(Ne,null,e.slice()):typeof e=="object"?We(e):ne(Br,null,String(e))}function We(e){return e.el===null||e.memo?e:vt(e)}function Wr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Wr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Sn in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[jl(t)]):n=8);e.children=t,e.shapeFlag|=n}function zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pr([t.class,r.class]));else if(a==="style")t.style=Er([t.style,r.style]);else if(wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}const Dl=Gi();let $l=0;function Ul(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Dl,i={uid:$l++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qi(r,a),emitsOptions:Li(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Bs.bind(null,i),e.ce&&e.ce(i),i}let J=null;const bt=e=>{J=e,e.scope.on()},nt=()=>{J&&J.scope.off(),J=null};function no(e){return e.vnode.shapeFlag&4}let Wt=!1;function Hl(e,t=!1){Wt=t;const{props:n,children:r}=e.vnode,a=no(e);wl(e,n,a,t),Al(e,r);const i=a?Bl(e,t):void 0;return Wt=!1,i}function Bl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Oi(new Proxy(e.ctx,hl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Yl(e):null;bt(e),xt();const i=Ke(r,e,0,[e.props,a]);if(wt(),nt(),mi(i)){if(i.then(nt,nt),t)return i.then(o=>{Sa(e,o,t)}).catch(o=>{On(o,e,0)});e.asyncDep=i}else Sa(e,i,t)}else ro(e,t)}function Sa(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ii(t)),ro(e,n)}let Na;function ro(e,t,n){const r=e.type;if(!e.render){if(!t&&Na&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=re(re({isCustomElement:i,delimiters:s},o),l);r.render=Na(a,u)}}e.render=r.render||xe}bt(e),xt(),gl(e),wt(),nt()}function Wl(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function Yl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Wl(e))},slots:e.slots,emit:e.emit,expose:t}}function Yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ii(Oi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)}}))}function Kl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function ql(e){return R(e)&&"__vccOpts"in e}const me=(e,t)=>Ls(e,t,Wt);function ao(e,t,n){const r=arguments.length;return r===2?Q(t)&&!L(t)?cr(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cr(n)&&(n=[n]),ne(e,t,n))}const Xl="3.2.37",Vl="http://www.w3.org/2000/svg",Qe=typeof document<"u"?document:null,Ma=Qe&&Qe.createElement("template"),Jl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(Vl,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ma.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ma.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zl(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)ur(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&ur(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Fa=/\s*!important$/;function ur(e,t,n){if(L(n))n.forEach(r=>ur(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ql(e,t);Fa.test(n)?e.setProperty(yt(r),n.replace(Fa,""),"important"):e[r]=n}}const Ra=["Webkit","Moz","ms"],qn={};function Ql(e,t){const n=qn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return qn[t]=r;r=An(r);for(let a=0;a<Ra.length;a++){const i=Ra[a]+r;if(i in e)return qn[t]=i}return t}const La="http://www.w3.org/1999/xlink";function ef(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(La,t.slice(6,t.length)):e.setAttributeNS(La,t,n);else{const i=Ho(t);n==null||i&&!di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=di(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[io,nf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let dr=0;const rf=Promise.resolve(),af=()=>{dr=0},of=()=>dr||(rf.then(af),dr=io());function sf(e,t,n,r){e.addEventListener(t,n,r)}function lf(e,t,n,r){e.removeEventListener(t,n,r)}function ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=cf(t);if(r){const u=i[t]=uf(r,a);sf(e,s,u,l)}else o&&(lf(e,s,o,l),i[t]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function cf(e){let t;if(ja.test(e)){t={};let n;for(;n=e.match(ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[yt(e.slice(2)),t]}function uf(e,t){const n=r=>{const a=r.timeStamp||io();(nf||a>=n.attached-1)&&we(df(r,n.value),t,5,[r])};return n.value=e,n.attached=of(),n}function df(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const za=/^on[a-z]/,mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Gl(e,r,a):t==="style"?Zl(e,n,r):wn(t)?Ir(t)||ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pf(e,t,r,a))?tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ef(e,t,r,a))};function pf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&za.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||za.test(t)&&Z(n)?!1:t in e}const hf=re({patchProp:mf},Jl);let Da;function gf(){return Da||(Da=Pl(hf))}const vf=(...e)=>{const t=gf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=bf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function bf(e){return Z(e)?document.querySelector(e):e}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function $a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$a(Object(n),!0).forEach(function(r){wf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$a(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hn(e){return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn(e)}function yf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ua(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xf(e,t,n){return t&&Ua(e.prototype,t),n&&Ua(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kr(e,t){return kf(e)||Cf(e,t)||oo(e,t)||Ef()}function Nn(e){return _f(e)||Af(e)||oo(e)||Of()}function _f(e){if(Array.isArray(e))return mr(e)}function kf(e){if(Array.isArray(e))return e}function Af(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function oo(e,t){if(!!e){if(typeof e=="string")return mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mr(e,t)}}function mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Of(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ef(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},qr={},so={},lo=null,fo={mark:Ha,measure:Ha};try{typeof window<"u"&&(qr=window),typeof document<"u"&&(so=document),typeof MutationObserver<"u"&&(lo=MutationObserver),typeof performance<"u"&&(fo=performance)}catch{}var Pf=qr.navigator||{},Ba=Pf.userAgent,Wa=Ba===void 0?"":Ba,Xe=qr,X=so,Ya=lo,tn=fo;Xe.document;var De=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",co=~Wa.indexOf("MSIE")||~Wa.indexOf("Trident/"),Re="___FONT_AWESOME___",pr=16,uo="fa",mo="svg-inline--fa",rt="data-fa-i2svg",hr="data-fa-pseudo-element",If="data-fa-pseudo-element-pending",Xr="data-prefix",Vr="data-icon",Ka="fontawesome-i2svg",Tf="async",Sf=["HTML","HEAD","STYLE","SCRIPT"],po=function(){try{return!0}catch{return!1}}(),Jr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},gn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ho={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Nf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Mf=/fa[srltdbk]?[\-\ ]/,go="fa-layers-text",Ff=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Rf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},vo=[1,2,3,4,5,6,7,8,9,10],Lf=vo.concat([11,12,13,14,15,16,17,18,19,20]),jf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zf=[].concat(Nn(Object.keys(gn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(vo.map(function(e){return"".concat(e,"x")})).concat(Lf.map(function(e){return"w-".concat(e)})),bo=Xe.FontAwesomeConfig||{};function Df(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $f(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Uf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uf.forEach(function(e){var t=Kr(e,2),n=t[0],r=t[1],a=$f(Df(n));a!=null&&(bo[r]=a)})}var Hf={familyPrefix:uo,styleDefault:"solid",replacementClass:mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rt=A(A({},Hf),bo);Rt.autoReplaceSvg||(Rt.observeMutations=!1);var T={};Object.keys(Rt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Rt[e]=n,sn.forEach(function(r){return r(T)})},get:function(){return Rt[e]}})});Xe.FontAwesomeConfig=T;var sn=[];function Bf(e){return sn.push(e),function(){sn.splice(sn.indexOf(e),1)}}var He=pr,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wf(e){if(!(!e||!De)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Yf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var e=12,t="";e-- >0;)t+=Yf[Math.random()*62|0];return t}function _t(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gr(e){return e.classList?_t(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function yo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(yo(e[n]),'" ')},"").trim()}function Mn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zr(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function qf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Xf(e){var t=e.transform,n=e.width,r=n===void 0?pr:n,a=e.height,i=a===void 0?pr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&co?l+="translate(".concat(t.x/He-r/2,"em, ").concat(t.y/He-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/He,"em), calc(-50% + ").concat(t.y/He,"em)) "):l+="translate(".concat(t.x/He,"em, ").concat(t.y/He,"em) "),l+="scale(".concat(t.size/He*(t.flipX?-1:1),", ").concat(t.size/He*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Vf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xo(){var e=uo,t=mo,n=T.familyPrefix,r=T.replacementClass,a=Vf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var qa=!1;function Xn(){T.autoAddCss&&!qa&&(Wf(xo()),qa=!0)}var Jf={mixout:function(){return{dom:{css:xo,insertCss:Xn}}},hooks:function(){return{beforeDOMElementCreation:function(){Xn()},beforeI2svg:function(){Xn()}}}},Le=Xe||{};Le[Re]||(Le[Re]={});Le[Re].styles||(Le[Re].styles={});Le[Re].hooks||(Le[Re].hooks={});Le[Re].shims||(Le[Re].shims=[]);var ye=Le[Re],wo=[],Gf=function e(){X.removeEventListener("DOMContentLoaded",e),vn=1,wo.map(function(t){return t()})},vn=!1;De&&(vn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),vn||X.addEventListener("DOMContentLoaded",Gf));function Zf(e){!De||(vn?setTimeout(e,0):wo.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?yo(e):"<".concat(t," ").concat(Kf(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Xa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Vn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qf(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ec(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function gr(e){var t=ec(e);return t.length===1?t[0].toString(16):null}function tc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Va(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function vr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Va(t);typeof ye.hooks.addPack=="function"&&!a?ye.hooks.addPack(e,Va(t)):ye.styles[e]=A(A({},ye.styles[e]||{}),i),e==="fas"&&vr("fa",t)}var Lt=ye.styles,nc=ye.shims,rc=Object.values(ho),Qr=null,_o={},ko={},Ao={},Co={},Oo={},ac=Object.keys(Jr);function ic(e){return~zf.indexOf(e)}function oc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ic(a)?a:null}var Eo=function(){var t=function(i){return Vn(Lt,function(o,s,l){return o[l]=Vn(s,i,{}),o},{})};_o=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Oo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Vn(nc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ao=r.names,Co=r.unicodes,Qr=Fn(T.styleDefault)};Bf(function(e){Qr=Fn(e.styleDefault)});Eo();function ea(e,t){return(_o[e]||{})[t]}function sc(e,t){return(ko[e]||{})[t]}function dt(e,t){return(Oo[e]||{})[t]}function Po(e){return Ao[e]||{prefix:null,iconName:null}}function lc(e){var t=Co[e],n=ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return Qr}var ta=function(){return{prefix:null,iconName:null,rest:[]}};function Fn(e){var t=Jr[e],n=gn[e]||gn[t],r=e in ye.styles?e:null;return n||r||null}function Rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=oc(T.familyPrefix,s);if(Lt[s]?(s=rc.includes(s)?Nf[s]:s,a=s,o.prefix=s):ac.indexOf(s)>-1?(a=s,o.prefix=Fn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Po(o.iconName):{},d=dt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ta());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var fc=function(){function e(){yf(this,e),this.definitions={}}return xf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),vr(s,o[s]);var l=ho[s];l&&vr(l,o[s]),Eo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Ja=[],mt={},gt={},cc=Object.keys(gt);function uc(e,t){var n=t.mixoutsTo;return Ja=e,mt={},Object.keys(gt).forEach(function(r){cc.indexOf(r)===-1&&delete gt[r]}),Ja.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){mt[o]||(mt[o]=[]),mt[o].push(i[o])})}r.provides&&r.provides(gt)}),n}function br(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=dt(n,t)||t,Xa(Io.definitions,n,t)||Xa(ye.styles,n,t)}var Io=new fc,dc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,at("noAuto")},mc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(at("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Zf(function(){hc({autoReplaceSvgRoot:n}),at("watch",t)})}},pc={icon:function(t){if(t===null)return null;if(hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Fn(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(Mf))){var a=Rn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:dt(i,t)||t}}}},de={noAuto:dc,config:T,dom:mc,parse:pc,library:Io,findIconDefinition:yr,toHtml:qt},hc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ye.styles).length>0||T.autoFetchSvg)&&De&&T.autoReplaceSvg&&de.dom.i2svg({node:r})};function Ln(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Zr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Mn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function na(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,F=r.found?r:n,j=F.width,S=F.height,y=a==="fak",O=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};C&&(N.attributes[rt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Yt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),ee=r.found&&n.found?je("generateAbstractMask",W)||{children:[],attributes:{}}:je("generateAbstractIcon",W)||{children:[],attributes:{}},le=ee.children,_e=ee.attributes;return W.children=le,W.attributes=_e,s?vc(W):gc(W)}function Ga(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[rt]="");var d=A({},o.styles);Zr(a)&&(d.transform=Xf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Mn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function bc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Mn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Jn=ye.styles;function xr(e){var t=e[0],n=e[1],r=e.slice(4),a=Kr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yc={found:!1,width:512,height:512};function xc(e,t){!po&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Po(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Jn[t]&&Jn[t][e]){var o=Jn[t][e];return r(xr(o))}xc(e,t),r(A(A({},yc),{},{icon:T.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var Za=function(){},_r=T.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:Za,measure:Za},Tt='FA "6.1.2"',wc=function(t){return _r.mark("".concat(Tt," ").concat(t," begins")),function(){return To(t)}},To=function(t){_r.mark("".concat(Tt," ").concat(t," ends")),_r.measure("".concat(Tt," ").concat(t),"".concat(Tt," ").concat(t," begins"),"".concat(Tt," ").concat(t," ends"))},ra={begin:wc,end:To},ln=function(){};function Qa(e){var t=e.getAttribute?e.getAttribute(rt):null;return typeof t=="string"}function _c(e){var t=e.getAttribute?e.getAttribute(Xr):null,n=e.getAttribute?e.getAttribute(Vr):null;return t&&n}function kc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Ac(){if(T.autoReplaceSvg===!0)return fn.replace;var e=fn[T.autoReplaceSvg];return e||fn.replace}function Cc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Oc(e){return X.createElement(e)}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Cc:Oc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(So(o,{ceFn:r}))}),a}function Ec(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(So(a),n)}),n.getAttribute(rt)===null&&T.keepOriginalSource){var r=X.createComment(Ec(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Gr(n).indexOf(T.replacementClass))return fn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(rt,""),n.innerHTML=o}};function ei(e){e()}function No(e,t){var n=typeof t=="function"?t:ln;if(e.length===0)n();else{var r=ei;T.mutateApproach===Tf&&(r=Xe.requestAnimationFrame||ei),r(function(){var a=Ac(),i=ra.begin("mutate");e.map(a),i(),n()})}}var aa=!1;function Mo(){aa=!0}function kr(){aa=!1}var bn=null;function ti(e){if(!!Ya&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?ln:t,r=e.nodeCallback,a=r===void 0?ln:r,i=e.pseudoElementsCallback,o=i===void 0?ln:i,s=e.observeMutationsRoot,l=s===void 0?X:s;bn=new Ya(function(u){if(!aa){var d=Ve();_t(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Qa(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Qa(m.target)&&~jf.indexOf(m.attributeName))if(m.attributeName==="class"&&_c(m.target)){var b=Rn(Gr(m.target)),C=b.prefix,F=b.iconName;m.target.setAttribute(Xr,C||d),F&&m.target.setAttribute(Vr,F)}else kc(m.target)&&a(m.target)})}}),De&&bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pc(){!bn||bn.disconnect()}function Ic(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Tc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rn(Gr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=sc(a.prefix,e.innerText)||ea(a.prefix,gr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Sc(e){var t=_t(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Yt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Sc(e),s=br("parseNodeAttributes",{},e),l=t.styleParser?Ic(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mc=ye.styles;function Fo(e){var t=T.autoReplaceSvg==="nest"?ni(e,{styleParser:!1}):ni(e);return~t.extra.classes.indexOf(go)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ka,"-").concat(m))},a=function(m){return n.remove("".concat(Ka,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Jr):Object.keys(Mc);i.includes("fa")||i.push("fa");var o=[".".concat(go,":not([").concat(rt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=_t(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ra.begin("onTree"),u=s.reduce(function(d,m){try{var b=Fo(m);b&&d.push(b)}catch(C){po||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){No(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Fc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fo(e).then(function(n){n&&No([n],t)})}function Rc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:yr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Lc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,F=C===void 0?null:C,j=n.classes,S=j===void 0?[]:j,y=n.attributes,O=y===void 0?{}:y,N=n.styles,z=N===void 0?{}:N;if(!!t){var W=t.prefix,ee=t.iconName,le=t.icon;return Ln(A({type:"icon"},t),function(){return at("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?O["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Yt()):(O["aria-hidden"]="true",O.focusable="false")),na({icons:{main:xr(le),mask:l?xr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ee,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:O,styles:z,classes:S}})})}},jc={mixout:function(){return{icon:Rc(Lc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ri,n.nodeCallback=Fc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ri(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,F){Promise.all([wr(a,s),d.iconName?wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=Kr(j,2),y=S[0],O=S[1];C([n,na({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Mn(s);l.length>0&&(a.style=l);var u;return Zr(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},zc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ln({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},Dc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Ln({type:"counter",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),bc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},$c={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return Ln({type:"text",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Ga({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Nn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(co){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ga({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Uc=new RegExp('"',"ug"),ai=[1105920,1112319];function Hc(e){var t=e.replace(Uc,""),n=tc(t,0),r=n>=ai[0]&&n<=ai[1],a=t.length===2?t[0]===t[1]:!1;return{value:gr(a?t[0]:t),isSecondary:r||a}}function ii(e,t){var n="".concat(If).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=_t(e.children),o=i.filter(function(ee){return ee.getAttribute(hr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ff),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gn[l[2].toLowerCase()]:Rf[u],C=Hc(m),F=C.value,j=C.isSecondary,S=l[0].startsWith("FontAwesome"),y=ea(b,F),O=y;if(S){var N=lc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Xr)!==b||o.getAttribute(Vr)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var z=Nc(),W=z.extra;W.attributes[hr]=t,wr(y,b).then(function(ee){var le=na(A(A({},z),{},{icons:{main:ee,mask:ta()},prefix:b,iconName:O,extra:W,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=le.map(function(ae){return qt(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bc(e){return Promise.all([ii(e,"::before"),ii(e,"::after")])}function Wc(e){return e.parentNode!==document.head&&!~Sf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function oi(e){if(!!De)return new Promise(function(t,n){var r=_t(e.querySelectorAll("*")).filter(Wc).map(Bc),a=ra.begin("searchPseudoElements");Mo(),Promise.all(r).then(function(){a(),kr(),t()}).catch(function(){a(),kr(),n()})})}var Yc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&oi(a)}}},si=!1,Kc={mixout:function(){return{dom:{unwatch:function(){Mo(),si=!0}}}},hooks:function(){return{bootstrap:function(){ti(br("mutationObserverCallbacks",{}))},noAuto:function(){Pc()},watch:function(n){var r=n.observeMutationsRoot;si?kr():ti(br("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},li=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},qc={mixout:function(){return{parse:{transform:function(n){return li(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=li(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},Gn={x:0,y:0,width:"100%",height:"100%"};function fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xc(e){return e.tag==="g"?e.children:[e]}var Vc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rn(a.split(" ").map(function(o){return o.trim()})):ta();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=qf({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Gn),{},{fill:"white"})},j=d.children?{children:d.children.map(fi)}:{},S={tag:"g",attributes:A({},C.inner),children:[fi(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},j))]},y={tag:"g",attributes:A({},C.outer),children:[S]},O="mask-".concat(s||Yt()),N="clip-".concat(s||Yt()),z={tag:"mask",attributes:A(A({},Gn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Xc(b)},z]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},Gn)}),{children:r,attributes:a}}}},Jc={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zc=[Jf,jc,zc,Dc,$c,Yc,Kc,qc,Vc,Jc,Gc];uc(Zc,{mixoutsTo:de});de.noAuto;var Ro=de.config,Qc=de.library;de.dom;var yn=de.parse;de.findIconDefinition;de.toHtml;var eu=de.icon;de.layer;var tu=de.text;de.counter;/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var nu={prefix:"fab",iconName:"bilibili",icon:[512,512,[],"e3d9","M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z"]},ru={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"]},au={prefix:"fab",iconName:"weibo",icon:[512,512,[],"f18a","M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8 .3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4 .6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"]};function ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ci(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ou(e,t){if(e==null)return{};var n=iu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ar(e){return su(e)||lu(e)||fu(e)||cu()}function su(e){if(Array.isArray(e))return Cr(e)}function lu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fu(e,t){if(!!e){if(typeof e=="string")return Cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cr(e,t)}}function Cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo={exports:{}};(function(e){(function(t){var n=function(y,O,N){if(!u(O)||m(O)||b(O)||C(O)||l(O))return O;var z,W=0,ee=0;if(d(O))for(z=[],ee=O.length;W<ee;W++)z.push(n(y,O[W],N));else{z={};for(var le in O)Object.prototype.hasOwnProperty.call(O,le)&&(z[y(le,N)]=n(y,O[le],N))}return z},r=function(y,O){O=O||{};var N=O.separator||"_",z=O.split||/(?=[A-Z])/;return y.split(z).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},j=function(y,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?y:function(z,W){return N(z,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(j(a,O),y)},decamelizeKeys:function(y,O){return n(j(o,O),y,O)},pascalizeKeys:function(y,O){return n(j(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(uu)})(Lo);var du=Lo.exports,mu=["class","style"];function pu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=du.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ia(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=hu(d);break;case"style":l.style=pu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ou(n,mu);return ao(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var jo=!1;try{jo=!0}catch{}function gu(){if(!jo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oe({},e,t):{}}function vu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},oe(t,"fa-".concat(e.size),e.size!==null),oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),oe(t,"fa-pull-".concat(e.pull),e.pull!==null),oe(t,"fa-swap-opacity",e.swapOpacity),oe(t,"fa-bounce",e.bounce),oe(t,"fa-shake",e.shake),oe(t,"fa-beat",e.beat),oe(t,"fa-fade",e.fade),oe(t,"fa-beat-fade",e.beatFade),oe(t,"fa-flash",e.flash),oe(t,"fa-spin-pulse",e.spinPulse),oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ui(e){if(e&&xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(yn.icon)return yn.icon(e);if(e===null)return null;if(xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bu=Kt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return ui(t.icon)}),i=me(function(){return jt("classes",vu(t))}),o=me(function(){return jt("transform",typeof t.transform=="string"?yn.transform(t.transform):t.transform)}),s=me(function(){return jt("mask",ui(t.mask))}),l=me(function(){return eu(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});rn(l,function(d){if(!d)return gu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=me(function(){return l.value?ia(l.value.abstract[0],{},r):null});return function(){return u.value}}});Kt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ro.familyPrefix,i=me(function(){return["".concat(a,"-layers")].concat(Ar(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ao("div",{class:i.value},r.default?r.default():[])}}});Kt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ro.familyPrefix,i=me(function(){return jt("classes",[].concat(Ar(t.counter?["".concat(a,"-layers-counter")]:[]),Ar(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=me(function(){return jt("transform",typeof t.transform=="string"?yn.transform(t.transform):t.transform)}),s=me(function(){var u=tu(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=me(function(){return ia(s.value,{},r)});return function(){return l.value}}});Qc.add(ru,au,nu);const oa=e=>(Ws("data-v-59bed2d6"),e=e(),Ys(),e),yu={class:"container"},xu={class:"item"},wu=oa(()=>he("span",null,"Bilibili Subscribers",-1)),_u={class:"item"},ku=oa(()=>he("span",null,"Weibo Followers",-1)),Au={class:"item"},Cu=oa(()=>he("span",null,"Tiktok Fans",-1)),Ou=Kt({__name:"IncrementCounter",setup(e){const t=Bn(null),n=Bn(null),r=Bn(null);return Ui(()=>{var i,o,s;[{el:t.value,target:+((i=t.value)==null?void 0:i.getAttribute("data-target"))},{el:n.value,target:+((o=n.value)==null?void 0:o.getAttribute("data-target"))},{el:r.value,target:+((s=r.value)==null?void 0:s.getAttribute("data-target"))}].forEach(l=>{let u=l.target/200,d=0;const m=()=>{d+=u,d<l.target?(l.el.textContent=d.toString(),setTimeout(m,1)):l.el.textContent=l.target.toString()};m()})}),(a,i)=>{const o=dl("font-awesome-icon");return Qi(),Ml("div",yu,[he("div",xu,[ne(o,{icon:"fa-brands fa-bilibili",class:"icon"}),he("p",{class:"counter","data-target":"12000",ref_key:"bilibili",ref:t},null,512),wu]),he("div",_u,[ne(o,{icon:"fa-brands fa-weibo",class:"icon"}),he("p",{class:"counter","data-target":"5000",ref_key:"weibo",ref:n},null,512),ku]),he("div",Au,[ne(o,{icon:"fa-brands fa-tiktok",class:"icon"}),he("p",{class:"counter","data-target":"23000",ref_key:"tiktok",ref:r},null,512),Cu])])}}});const Eu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Pu=Eu(Ou,[["__scopeId","data-v-59bed2d6"]]),Iu=Kt({__name:"App",setup(e){return(t,n)=>(Qi(),Fl(Pu))}});vf(Iu).component("font-awesome-icon",bu).mount("#app");
