const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-1-DYTeAnAh.js","./react-BxeDFYiH.js","./storybook-core-8-CdRCItHa.js","./vendor-B_g8Myz2.js","./storybook-core-7-CniraXKt.js","./storybook-core-3-DULQi2uk.js","./react-dom-DJXVN0S0.js","./iframe-7GZqwdl_.js","./storybook-core-1-DypmmRD_.js","./storybook-core-5-Ci0vTrrj.js","./iframe-BqmYbLRM.css"])))=>i.map(i=>d[i]);
import{v as wt,d as lt,i as W}from"./vendor-B_g8Myz2.js";import{_ as dt}from"./iframe-7GZqwdl_.js";import{i as St}from"./storybook-instrumenter-6-LfnBK72e.js";import"./storybook-instrumenter-15-DkasNAnx.js";import{R as M,r as Tt}from"./react-1-DYTeAnAh.js";import{H as At,A as Rt,C as Mt,D as Lt}from"./storybook-blocks-RZe1NJUc.js";import{r as kt,u as Bt}from"./react-dom-DJXVN0S0.js";const{addons:Pt}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Dt}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:L}=__STORYBOOK_MODULE_GLOBAL__;var It="storybook/actions",Ct=`${It}/action-event`,jt={depth:10,clearOnStoryChange:!0,limit:50},pt=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:pt(o,e)},Yt=t=>!!(typeof t=="object"&&t&&pt(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),Ht=t=>{if(Yt(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o?.value;return typeof n=="object"&&n?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},Gt=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?wt():Date.now().toString(36)+Math.random().toString(36).substring(2);function N(t,e={}){let o={...jt,...e},n=function(...i){if(e.implicit){let m=("__STORYBOOK_PREVIEW__"in L?L.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(m){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,b=new Dt({phase:m.phase,name:t,deprecated:u});if(u)console.warn(b);else throw b}}let r=Pt.getChannel(),a=Gt(),l=5,d=i.map(Ht),p=i.length>1?d:d[0],s={id:a,count:0,data:{name:t,args:p},options:{...o,maxDepth:l+(o.depth||3),allowFunction:o.allowFunction||!1}};r.emit(Ct,s)};return n.isAction=!0,n.implicit=e.implicit,n}var st=(t,e)=>typeof e[t]>"u"&&!(t in e),Ft=t=>{let{initialArgs:e,argTypes:o,id:n,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!o)return{};let r=new RegExp(i.argTypesRegex);return Object.entries(o).filter(([a])=>!!r.test(a)).reduce((a,[l,d])=>(st(l,e)&&(a[l]=N(l,{implicit:!0,id:n})),a),{})},Kt=t=>{let{initialArgs:e,argTypes:o,parameters:{actions:n}}=t;return n?.disable||!o?{}:Object.entries(o).filter(([i,r])=>!!r.action).reduce((i,[r,a])=>(st(r,e)&&(i[r]=N(typeof a.action=="string"?a.action:r)),i),{})},Wt=[Kt,Ft],J=!1,zt=t=>{let{parameters:{actions:e}}=t;if(!e?.disable&&!J&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in L&&typeof L.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=L.__STORYBOOK_TEST_ON_MOCK_CALL__;o((n,i)=>{let r=n.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>r.startsWith(a)))&&N(r)(i)}),J=!0}},Ut=[zt];const co=Object.freeze(Object.defineProperty({__proto__:null,argsEnhancers:Wt,loaders:Ut},Symbol.toStringTag,{value:"Module"}));var Nt=Object.defineProperty,Xt=(t,e)=>{for(var o in e)Nt(t,o,{get:e[o],enumerable:!0})},Vt={};Xt(Vt,{parameters:()=>ut});var qt=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((t,e)=>{let[o,n]=e;return n.excludeFromDocsStories&&(t[o]=!0),t},{}),ut={docs:{renderer:async()=>{let{DocsRenderer:t}=await dt(()=>Promise.resolve().then(()=>ao),void 0,import.meta.url);return new t},stories:{filter:t=>(t.tags||[]).filter(e=>qt[e]).length===0&&!t.parameters.docs?.disable}}};const bo=Object.freeze(Object.defineProperty({__proto__:null,parameters:ut},Symbol.toStringTag,{value:"Module"})),{useEffect:C,useMemo:D}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Zt}=__STORYBOOK_MODULE_GLOBAL__,{logger:Jt}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var y="backgrounds",mt={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:O,window:Qt}=Zt,ft=()=>!!Qt?.matchMedia("(prefers-reduced-motion: reduce)")?.matches,j=t=>{(Array.isArray(t)?t:[t]).forEach(te)},te=t=>{let e=O.getElementById(t);e&&e.parentElement?.removeChild(e)},gt=(t,e)=>{let o=O.getElementById(t);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let n=O.createElement("style");n.setAttribute("id",t),n.innerHTML=e,O.head.appendChild(n)}},ct=(t,e,o)=>{let n=O.getElementById(t);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let i=O.createElement("style");i.setAttribute("id",t),i.innerHTML=e;let r=`addon-backgrounds-grid${o?`-docs-${o}`:""}`,a=O.getElementById(r);a?a.parentElement?.insertBefore(i,a):O.head.appendChild(i)}},ee={cellSize:100,cellAmount:10,opacity:.8},Q="addon-backgrounds",tt="addon-backgrounds-grid",oe=ft()?"":"transition: background-color 0.3s;",ie=(t,e)=>{let{globals:o,parameters:n,viewMode:i,id:r}=e,{options:a=mt,disable:l,grid:d=ee}=n[y]||{},p=o[y]||{},s=p.value,m=s?a[s]:void 0,u=m?.value||"transparent",b=p.grid||!1,$=!!m&&!l,S=i==="docs"?`#anchor--${r} .docs-story`:".sb-show-main",k=i==="docs"?`#anchor--${r} .docs-story`:".sb-show-main",H=n.layout===void 0||n.layout==="padded",B=i==="docs"?20:H?16:0,{cellAmount:E,cellSize:c,opacity:v,offsetX:w=B,offsetY:x=B}=d,G=i==="docs"?`${Q}-docs-${r}`:`${Q}-color`,Z=i==="docs"?r:null;C(()=>{let K=`
    ${S} {
      background: ${u} !important;
      ${oe}
      }`;if(!$){j(G);return}ct(G,K,Z)},[S,G,Z,$,u]);let F=i==="docs"?`${tt}-docs-${r}`:`${tt}`;return C(()=>{if(!b){j(F);return}let K=[`${c*E}px ${c*E}px`,`${c*E}px ${c*E}px`,`${c}px ${c}px`,`${c}px ${c}px`].join(", "),vt=`
        ${k} {
          background-size: ${K} !important;
          background-position: ${w}px ${x}px, ${w}px ${x}px, ${w}px ${x}px, ${w}px ${x}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${v}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${v/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v/2}) 1px, transparent 1px) !important;
        }
      `;gt(F,vt)},[E,c,k,F,b,w,x,v]),t()},ne=(t,e=[],o)=>{if(t==="transparent")return"transparent";if(e.find(i=>i.value===t)||t)return t;let n=e.find(i=>i.name===o);if(n)return n.value;if(o){let i=e.map(r=>r.name).join(", ");Jt.warn(lt`
        Backgrounds Addon: could not find the default color "${o}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `)}return"transparent"},re=(t,e)=>{let{globals:o,parameters:n}=e,i=o[y]?.value,r=n[y],a=D(()=>r.disable?"transparent":ne(i,r.values,r.default),[r,i]),l=D(()=>a&&a!=="transparent",[a]),d=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=D(()=>`
      ${d} {
        background: ${a} !important;
        ${ft()?"":"transition: background-color 0.3s;"}
      }
    `,[a,d]);return C(()=>{let s=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!l){j(s);return}ct(s,p,e.viewMode==="docs"?e.id:null)},[l,p,e]),t()},ae=(t,e)=>{let{globals:o,parameters:n}=e,i=n[y].grid,r=o[y]?.grid===!0&&i.disable!==!0,{cellAmount:a,cellSize:l,opacity:d}=i,p=e.viewMode==="docs",s=n.layout===void 0||n.layout==="padded"?16:0,m=i.offsetX??(p?20:s),u=i.offsetY??(p?20:s),b=D(()=>{let $=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",S=[`${l*a}px ${l*a}px`,`${l*a}px ${l*a}px`,`${l}px ${l}px`,`${l}px ${l}px`].join(", ");return`
      ${$} {
        background-size: ${S} !important;
        background-position: ${m}px ${u}px, ${m}px ${u}px, ${m}px ${u}px, ${m}px ${u}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${d}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${d}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${d/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${d/2}) 1px, transparent 1px) !important;
      }
    `},[l]);return C(()=>{let $=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!r){j($);return}gt($,b)},[r,b,e]),t()},le=globalThis.FEATURES?.backgroundsStoryGlobals?[ie]:[ae,re],de={[y]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!globalThis.FEATURES?.backgroundsStoryGlobals&&{values:Object.values(mt)}}},pe={[y]:{value:void 0,grid:!1}},se=globalThis.FEATURES?.backgroundsStoryGlobals?pe:{[y]:null};const ho=Object.freeze(Object.defineProperty({__proto__:null,decorators:le,initialGlobals:se,parameters:de},Symbol.toStringTag,{value:"Module"}));var ue="viewport",me={[ue]:{value:void 0,isRotated:!1}},fe={viewport:"reset",viewportRotated:!1},ge=globalThis.FEATURES?.viewportStoryGlobals?me:fe;const $o=Object.freeze(Object.defineProperty({__proto__:null,initialGlobals:ge},Symbol.toStringTag,{value:"Module"})),{useEffect:et}=__STORYBOOK_MODULE_PREVIEW_API__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var ce="measureEnabled";function bt(){let t=g.document.documentElement,e=Math.max(t.scrollHeight,t.offsetHeight);return{width:Math.max(t.scrollWidth,t.offsetWidth),height:e}}function be(){let t=g.document.createElement("canvas");t.id="storybook-addon-measure";let e=t.getContext("2d");W(e!=null);let{width:o,height:n}=bt();return z(t,e,{width:o,height:n}),t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.zIndex="2147483647",t.style.pointerEvents="none",g.document.body.appendChild(t),{canvas:t,context:e,width:o,height:n}}function z(t,e,{width:o,height:n}){t.style.width=`${o}px`,t.style.height=`${n}px`;let i=g.window.devicePixelRatio;t.width=Math.floor(o*i),t.height=Math.floor(n*i),e.scale(i,i)}var f={};function he(){f.canvas||(f=be())}function ht(){f.context&&f.context.clearRect(0,0,f.width??0,f.height??0)}function $e(t){ht(),t(f.context)}function _e(){W(f.canvas),W(f.context),z(f.canvas,f.context,{width:0,height:0});let{width:t,height:e}=bt();z(f.canvas,f.context,{width:t,height:e}),f.width=t,f.height=e}function ye(){f.canvas&&(ht(),f.canvas.parentNode?.removeChild(f.canvas),f={})}var T={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},_=6;function ot(t,{x:e,y:o,w:n,h:i,r}){e=e-n/2,o=o-i/2,n<2*r&&(r=n/2),i<2*r&&(r=i/2),t.beginPath(),t.moveTo(e+r,o),t.arcTo(e+n,o,e+n,o+i,r),t.arcTo(e+n,o+i,e,o+i,r),t.arcTo(e,o+i,e,o,r),t.arcTo(e,o,e+n,o,r),t.closePath()}function xe(t,{padding:e,border:o,width:n,height:i,top:r,left:a}){let l=n-o.left-o.right-e.left-e.right,d=i-e.top-e.bottom-o.top-o.bottom,p=a+o.left+e.left,s=r+o.top+e.top;return t==="top"?p+=l/2:t==="right"?(p+=l,s+=d/2):t==="bottom"?(p+=l/2,s+=d):t==="left"?s+=d/2:t==="center"&&(p+=l/2,s+=d/2),{x:p,y:s}}function Oe(t,e,{margin:o,border:n,padding:i},r,a){let l=u=>0,d=0,p=0,s=a?1:.5,m=a?r*2:0;return t==="padding"?l=u=>i[u]*s+m:t==="border"?l=u=>i[u]+n[u]*s+m:t==="margin"&&(l=u=>i[u]+n[u]+o[u]*s+m),e==="top"?p=-l("top"):e==="right"?d=l("right"):e==="bottom"?p=l("bottom"):e==="left"&&(d=-l("left")),{offsetX:d,offsetY:p}}function Ee(t,e){return Math.abs(t.x-e.x)<Math.abs(t.w+e.w)/2&&Math.abs(t.y-e.y)<Math.abs(t.h+e.h)/2}function ve(t,e,o){return t==="top"?e.y=o.y-o.h-_:t==="right"?e.x=o.x+o.w/2+_+e.w/2:t==="bottom"?e.y=o.y+o.h+_:t==="left"&&(e.x=o.x-o.w/2-_-e.w/2),{x:e.x,y:e.y}}function $t(t,e,{x:o,y:n,w:i,h:r},a){return ot(t,{x:o,y:n,w:i,h:r,r:3}),t.fillStyle=`${T[e]}dd`,t.fill(),t.strokeStyle=T[e],t.stroke(),t.fillStyle=T.text,t.fillText(a,o,n),ot(t,{x:o,y:n,w:i,h:r,r:3}),t.fillStyle=`${T[e]}dd`,t.fill(),t.strokeStyle=T[e],t.stroke(),t.fillStyle=T.text,t.fillText(a,o,n),{x:o,y:n,w:i,h:r}}function _t(t,e){t.font="600 12px monospace",t.textBaseline="middle",t.textAlign="center";let o=t.measureText(e),n=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,i=o.width+_*2,r=n+_*2;return{w:i,h:r}}function we(t,e,{type:o,position:n="center",text:i},r,a=!1){let{x:l,y:d}=xe(n,e),{offsetX:p,offsetY:s}=Oe(o,n,e,_+1,a);l+=p,d+=s;let{w:m,h:u}=_t(t,i);if(r&&Ee({x:l,y:d,w:m,h:u},r)){let b=ve(n,{x:l,y:d,w:m},r);l=b.x,d=b.y}return $t(t,o,{x:l,y:d,w:m,h:u},i)}function Se(t,{w:e,h:o}){let n=e*.5+_,i=o*.5+_;return{offsetX:(t.x==="left"?-1:1)*n,offsetY:(t.y==="top"?-1:1)*i}}function Te(t,e,{type:o,text:n}){let{floatingAlignment:i,extremities:r}=e,a=r[i.x],l=r[i.y],{w:d,h:p}=_t(t,n),{offsetX:s,offsetY:m}=Se(i,{w:d,h:p});return a+=s,l+=m,$t(t,o,{x:a,y:l,w:d,h:p},n)}function R(t,e,o,n){let i=[];o.forEach((r,a)=>{let l=n&&r.position==="center"?Te(t,e,r):we(t,e,r,i[a-1],n);i[a]=l})}function Ae(t,e,o,n){let i=o.reduce((r,a)=>(Object.prototype.hasOwnProperty.call(r,a.position)||(r[a.position]=[]),r[a.position]?.push(a),r),{});i.top&&R(t,e,i.top,n),i.right&&R(t,e,i.right,n),i.bottom&&R(t,e,i.bottom,n),i.left&&R(t,e,i.left,n),i.center&&R(t,e,i.center,n)}var Y={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},it=30;function h(t){return parseInt(t.replace("px",""),10)}function A(t){return Number.isInteger(t)?t:t.toFixed(2)}function X(t){return t.filter(e=>e.text!==0&&e.text!=="0")}function Re(t){let e={top:g.window.scrollY,bottom:g.window.scrollY+g.window.innerHeight,left:g.window.scrollX,right:g.window.scrollX+g.window.innerWidth},o={top:Math.abs(e.top-t.top),bottom:Math.abs(e.bottom-t.bottom),left:Math.abs(e.left-t.left),right:Math.abs(e.right-t.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}function Me(t){let e=g.getComputedStyle(t),{top:o,left:n,right:i,bottom:r,width:a,height:l}=t.getBoundingClientRect(),{marginTop:d,marginBottom:p,marginLeft:s,marginRight:m,paddingTop:u,paddingBottom:b,paddingLeft:$,paddingRight:S,borderBottomWidth:k,borderTopWidth:H,borderLeftWidth:B,borderRightWidth:E}=e;o=o+g.window.scrollY,n=n+g.window.scrollX,r=r+g.window.scrollY,i=i+g.window.scrollX;let c={top:h(d),bottom:h(p),left:h(s),right:h(m)},v={top:h(u),bottom:h(b),left:h($),right:h(S)},w={top:h(H),bottom:h(k),left:h(B),right:h(E)},x={top:o-c.top,bottom:r+c.bottom,left:n-c.left,right:i+c.right};return{margin:c,padding:v,border:w,top:o,left:n,bottom:r,right:i,width:a,height:l,extremities:x,floatingAlignment:Re(x)}}function Le(t,{margin:e,width:o,height:n,top:i,left:r,bottom:a,right:l}){let d=n+e.bottom+e.top;t.fillStyle=Y.margin,t.fillRect(r,i-e.top,o,e.top),t.fillRect(l,i-e.top,e.right,d),t.fillRect(r,a,o,e.bottom),t.fillRect(r-e.left,i-e.top,e.left,d);let p=[{type:"margin",text:A(e.top),position:"top"},{type:"margin",text:A(e.right),position:"right"},{type:"margin",text:A(e.bottom),position:"bottom"},{type:"margin",text:A(e.left),position:"left"}];return X(p)}function ke(t,{padding:e,border:o,width:n,height:i,top:r,left:a,bottom:l,right:d}){let p=n-o.left-o.right,s=i-e.top-e.bottom-o.top-o.bottom;t.fillStyle=Y.padding,t.fillRect(a+o.left,r+o.top,p,e.top),t.fillRect(d-e.right-o.right,r+e.top+o.top,e.right,s),t.fillRect(a+o.left,l-e.bottom-o.bottom,p,e.bottom),t.fillRect(a+o.left,r+e.top+o.top,e.left,s);let m=[{type:"padding",text:e.top,position:"top"},{type:"padding",text:e.right,position:"right"},{type:"padding",text:e.bottom,position:"bottom"},{type:"padding",text:e.left,position:"left"}];return X(m)}function Be(t,{border:e,width:o,height:n,top:i,left:r,bottom:a,right:l}){let d=n-e.top-e.bottom;t.fillStyle=Y.border,t.fillRect(r,i,o,e.top),t.fillRect(r,a-e.bottom,o,e.bottom),t.fillRect(r,i+e.top,e.left,d),t.fillRect(l-e.right,i+e.top,e.right,d);let p=[{type:"border",text:e.top,position:"top"},{type:"border",text:e.right,position:"right"},{type:"border",text:e.bottom,position:"bottom"},{type:"border",text:e.left,position:"left"}];return X(p)}function Pe(t,{padding:e,border:o,width:n,height:i,top:r,left:a}){let l=n-o.left-o.right-e.left-e.right,d=i-e.top-e.bottom-o.top-o.bottom;return t.fillStyle=Y.content,t.fillRect(a+o.left+e.left,r+o.top+e.top,l,d),[{type:"content",position:"center",text:`${A(l)} x ${A(d)}`}]}function De(t){return e=>{if(t&&e){let o=Me(t),n=Le(e,o),i=ke(e,o),r=Be(e,o),a=Pe(e,o),l=o.width<=it*3||o.height<=it;Ae(e,o,[...a,...i,...r,...n],l)}}}function Ie(t){$e(De(t))}var Ce=(t,e)=>{let o=g.document.elementFromPoint(t,e),n=i=>{if(i&&i.shadowRoot){let r=i.shadowRoot.elementFromPoint(t,e);return i.isEqualNode(r)?i:r.shadowRoot?n(r):r}return i};return n(o)||o},nt,P={x:0,y:0};function rt(t,e){nt=Ce(t,e),Ie(nt)}var je=(t,e)=>{let{measureEnabled:o}=e.globals;return et(()=>{let n=i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),P.x=i.clientX,P.y=i.clientY})};return document.addEventListener("pointermove",n),()=>{document.removeEventListener("pointermove",n)}},[]),et(()=>{let n=r=>{window.requestAnimationFrame(()=>{r.stopPropagation(),rt(r.clientX,r.clientY)})},i=()=>{window.requestAnimationFrame(()=>{_e()})};return e.viewMode==="story"&&o&&(document.addEventListener("pointerover",n),he(),window.addEventListener("resize",i),rt(P.x,P.y)),()=>{window.removeEventListener("resize",i),ye()}},[o,e.viewMode]),t()},Ye=[je],He={[ce]:!1};const _o=Object.freeze(Object.defineProperty({__proto__:null,decorators:Ye,initialGlobals:He},Symbol.toStringTag,{value:"Module"})),{useMemo:Ge,useEffect:Fe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:I}=__STORYBOOK_MODULE_GLOBAL__;var yt="outline",at=t=>{(Array.isArray(t)?t:[t]).forEach(Ke)},Ke=t=>{let e=typeof t=="string"?t:t.join(""),o=I.document.getElementById(e);o&&o.parentElement&&o.parentElement.removeChild(o)},We=(t,e)=>{let o=I.document.getElementById(t);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let n=I.document.createElement("style");n.setAttribute("id",t),n.innerHTML=e,I.document.head.appendChild(n)}};function ze(t){return lt`
    ${t} body {
      outline: 1px solid #2980b9 !important;
    }

    ${t} article {
      outline: 1px solid #3498db !important;
    }

    ${t} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${t} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${t} section {
      outline: 1px solid #66b8da !important;
    }

    ${t} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${t} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${t} h1 {
      outline: 1px solid #162544 !important;
    }

    ${t} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${t} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${t} h4 {
      outline: 1px solid #449baf !important;
    }

    ${t} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${t} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${t} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${t} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${t} div {
      outline: 1px solid #036cdb !important;
    }

    ${t} p {
      outline: 1px solid #ac050b !important;
    }

    ${t} hr {
      outline: 1px solid #ff063f !important;
    }

    ${t} pre {
      outline: 1px solid #850440 !important;
    }

    ${t} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${t} ol {
      outline: 1px solid #ff050c !important;
    }

    ${t} ul {
      outline: 1px solid #d90416 !important;
    }

    ${t} li {
      outline: 1px solid #d90416 !important;
    }

    ${t} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${t} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${t} dd {
      outline: 1px solid #e80174 !important;
    }

    ${t} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${t} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${t} table {
      outline: 1px solid #00cc99 !important;
    }

    ${t} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} thead {
      outline: 1px solid #98daca !important;
    }

    ${t} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${t} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${t} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${t} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${t} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${t} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${t} button {
      outline: 1px solid #da8301 !important;
    }

    ${t} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${t} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${t} form {
      outline: 1px solid #d23600 !important;
    }

    ${t} input {
      outline: 1px solid #fca600 !important;
    }

    ${t} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${t} label {
      outline: 1px solid #ee8900 !important;
    }

    ${t} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${t} meter {
      outline: 1px solid #e8630c !important;
    }

    ${t} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${t} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${t} output {
      outline: 1px solid #ff9619 !important;
    }

    ${t} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${t} select {
      outline: 1px solid #e26e0f !important;
    }

    ${t} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${t} details {
      outline: 1px solid #33848f !important;
    }

    ${t} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${t} command {
      outline: 1px solid #438da1 !important;
    }

    ${t} menu {
      outline: 1px solid #449da6 !important;
    }

    ${t} del {
      outline: 1px solid #bf0000 !important;
    }

    ${t} ins {
      outline: 1px solid #400000 !important;
    }

    ${t} img {
      outline: 1px solid #22746b !important;
    }

    ${t} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} embed {
      outline: 1px solid #98daca !important;
    }

    ${t} object {
      outline: 1px solid #00cc99 !important;
    }

    ${t} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} video {
      outline: 1px solid #6ee866 !important;
    }

    ${t} audio {
      outline: 1px solid #027353 !important;
    }

    ${t} source {
      outline: 1px solid #012426 !important;
    }

    ${t} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${t} track {
      outline: 1px solid #59a600 !important;
    }

    ${t} map {
      outline: 1px solid #7be500 !important;
    }

    ${t} area {
      outline: 1px solid #305900 !important;
    }

    ${t} a {
      outline: 1px solid #ff62ab !important;
    }

    ${t} em {
      outline: 1px solid #800b41 !important;
    }

    ${t} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${t} i {
      outline: 1px solid #803156 !important;
    }

    ${t} b {
      outline: 1px solid #cc1169 !important;
    }

    ${t} u {
      outline: 1px solid #ff0430 !important;
    }

    ${t} s {
      outline: 1px solid #f805e3 !important;
    }

    ${t} small {
      outline: 1px solid #d107b2 !important;
    }

    ${t} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${t} q {
      outline: 1px solid #240018 !important;
    }

    ${t} cite {
      outline: 1px solid #64003c !important;
    }

    ${t} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${t} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${t} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${t} time {
      outline: 1px solid #d6606d !important;
    }

    ${t} code {
      outline: 1px solid #e04251 !important;
    }

    ${t} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${t} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${t} var {
      outline: 1px solid #d90047 !important;
    }

    ${t} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${t} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${t} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${t} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${t} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${t} rp {
      outline: 1px solid #803e49 !important;
    }

    ${t} span {
      outline: 1px solid #cc2643 !important;
    }

    ${t} br {
      outline: 1px solid #db687d !important;
    }

    ${t} wbr {
      outline: 1px solid #db175b !important;
    }`}var Ue=(t,e)=>{let{globals:o}=e,n=[!0,"true"].includes(o[yt]),i=e.viewMode==="docs",r=Ge(()=>ze(i?'[data-story-block="true"]':".sb-show-main"),[e]);return Fe(()=>{let a=i?`addon-outline-docs-${e.id}`:"addon-outline";return n?We(a,r):at(a),()=>{at(a)}},[n,r,e]),t()},Ne=[Ue],Xe={[yt]:!1};const yo=Object.freeze(Object.defineProperty({__proto__:null,decorators:Ne,initialGlobals:Xe},Symbol.toStringTag,{value:"Module"})),{STORY_CHANGED:Ve}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:qe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Ze}=__STORYBOOK_MODULE_GLOBAL__;var xt="storybook/highlight",Ot="storybookHighlight",Je=`${xt}/add`,Qe=`${xt}/reset`,{document:U}=Ze,to=(t="#FF4785",e="dashed")=>`
  outline: 2px ${e} ${t};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,V=qe.getChannel(),eo=t=>{let e=Ot;q();let o=Array.from(new Set(t.elements)),n=U.createElement("style");n.setAttribute("id",e),n.innerHTML=o.map(i=>`${i}{
          ${to(t.color,t.style)}
         }`).join(" "),U.head.appendChild(n)},q=()=>{let t=Ot,e=U.getElementById(t);e&&e.parentNode?.removeChild(e)};V.on(Ve,q);V.on(Qe,q);V.on(Je,eo);const xo=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var oo=St({step:(t,e,o)=>e(o)},{intercept:!0}).step,io={throwPlayFunctionExceptions:!1};const Oo=Object.freeze(Object.defineProperty({__proto__:null,parameters:io,runStep:oo},Symbol.toStringTag,{value:"Module"}));var Et={code:Mt,a:Rt,...At},no=class extends Tt.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:M.createElement(M.Fragment,null,e)}},ro=class{constructor(){this.render=async(t,e,o)=>{let n={...Et,...e?.components},i=Lt;return new Promise((r,a)=>{dt(async()=>{const{MDXProvider:l}=await import("./react-1-DYTeAnAh.js").then(d=>d.i);return{MDXProvider:l}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).then(({MDXProvider:l})=>kt(M.createElement(no,{showException:a,key:Math.random()},M.createElement(l,{components:n},M.createElement(i,{context:t,docsParameter:e}))),o)).then(()=>r())})},this.unmount=t=>{Bt(t)}}};const ao=Object.freeze(Object.defineProperty({__proto__:null,DocsRenderer:ro,defaultComponents:Et},Symbol.toStringTag,{value:"Module"}));export{bo as a,ho as b,$o as c,_o as d,yo as e,xo as f,Oo as g,co as p};
