import{i as H,j as s,h as v,k as _,l as O,m as Q,n as S,p as g,q as E,s as I,t as R,g as L,u as W,v as A,x as j,y as k,z as U,A as D,B as G,C as K,D as J,E as X,F as B,G as V,H as Y}from"./index.ef228992.js";import{Q as P}from"./QResizeObserver.cd8220d8.js";var le=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const i=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:i.value},_(m.default))}}),ne=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const i=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:i.value,role:"toolbar"},_(m.default))}}),ae=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:i}){const{proxy:{$q:n}}=L(),t=O(R,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const r=S(parseInt(e.heightHint,10)),u=S(!0),p=s(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),h=s(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return u.value===!0?r.value:0;const l=r.value-t.scroll.value.position;return l>0?l:0}),d=s(()=>e.modelValue!==!0||p.value===!0&&u.value!==!0),x=s(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),z=s(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=s(()=>{const l=t.rows.value.top,y={};return l[0]==="l"&&t.left.space===!0&&(y[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(y[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function c(l,y){t.update("header",l,y)}function w(l,y){l.value!==y&&(l.value=y)}function b({height:l}){w(r,l),c("size",l)}function $(l){x.value===!0&&w(u,!0),i("focusin",l)}g(()=>e.modelValue,l=>{c("space",l),w(u,!0),t.animate()}),g(h,l=>{c("offset",l)}),g(()=>e.reveal,l=>{l===!1&&w(u,e.modelValue)}),g(u,l=>{t.animate(),i("reveal",l)}),g(t.scroll,l=>{e.reveal===!0&&w(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const T={};return t.instances.header=T,e.modelValue===!0&&c("size",r.value),c("space",e.modelValue),c("offset",h.value),E(()=>{t.instances.header===T&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const l=I(m.default,[]);return e.elevated===!0&&l.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(v(P,{debounce:0,onResize:b})),v("header",{class:z.value,style:q.value,onFocusin:$},l)}}}),ie=H({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:i}}=L(),n=O(R,Q);if(n===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;W(A,!0);const t=s(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>v("div",{class:"q-page-container",style:t.value},_(m.default))}}),re=H({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:i}){const{proxy:{$q:n}}=L(),t=O(R,Q);if(t===Q)return console.error("QFooter needs to be child of QLayout"),Q;const r=S(parseInt(e.heightHint,10)),u=S(!0),p=S(j.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=s(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),d=s(()=>t.isContainer.value===!0?t.containerHeight.value:p.value),x=s(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?r.value:0;const o=t.scroll.value.position+d.value+r.value-t.height.value;return o>0?o:0}),z=s(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),q=s(()=>e.modelValue===!0&&z.value===!0&&e.reveal===!0),c=s(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(z.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),w=s(()=>{const o=t.rows.value.bottom,f={};return o[0]==="l"&&t.left.space===!0&&(f[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),o[2]==="r"&&t.right.space===!0&&(f[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),f});function b(o,f){t.update("footer",o,f)}function $(o,f){o.value!==f&&(o.value=f)}function T({height:o}){$(r,o),b("size",o)}function l(){if(e.reveal!==!0)return;const{direction:o,position:f,inflectionPoint:C}=t.scroll.value;$(u,o==="up"||f-C<100||t.height.value-d.value-f-r.value<300)}function y(o){q.value===!0&&$(u,!0),i("focusin",o)}g(()=>e.modelValue,o=>{b("space",o),$(u,!0),t.animate()}),g(x,o=>{b("offset",o)}),g(()=>e.reveal,o=>{o===!1&&$(u,e.modelValue)}),g(u,o=>{t.animate(),i("reveal",o)}),g([r,t.scroll,t.height],l),g(()=>n.screen.height,o=>{t.isContainer.value!==!0&&$(p,o)});const a={};return t.instances.footer=a,e.modelValue===!0&&b("size",r.value),b("space",e.modelValue),b("offset",x.value),E(()=>{t.instances.footer===a&&(t.instances.footer=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const o=k(m.default,[v(P,{debounce:0,onResize:T})]);return e.elevated===!0&&o.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v("footer",{class:c.value,style:w.value,onFocusin:y},o)}}});const{passive:N}=K,Z=["both","horizontal","vertical"];var ee=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Z.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:m}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,r;g(()=>e.scrollTarget,()=>{h(),p()});function u(){n!==null&&n();const z=Math.max(0,J(t)),q=X(t),c={top:z-i.position.top,left:q-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:z,left:q},i.directionChanged=i.direction!==w,i.delta=c,i.directionChanged===!0&&(i.direction=w,i.inflectionPoint=i.position),m("scroll",{...i})}function p(){t=G(r,e.scrollTarget),t.addEventListener("scroll",d,N),d(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",d,N),t=void 0)}function d(z){if(z===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[q,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{c(q),n=null}}}const{proxy:x}=L();return g(()=>x.$q.lang.rtl,u),U(()=>{r=x.$el.parentNode,p()}),E(()=>{n!==null&&n(),h()}),Object.assign(x,{trigger:d,getPosition:()=>i}),D}}),ue=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:i}){const{proxy:{$q:n}}=L(),t=S(null),r=S(n.screen.height),u=S(e.container===!0?0:n.screen.width),p=S({position:0,direction:"down",inflectionPoint:0}),h=S(0),d=S(j.value===!0?0:B()),x=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=s(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),q=s(()=>d.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),c=s(()=>d.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function w(a){if(e.container===!0||document.qScrollPrevented!==!0){const o={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};p.value=o,e.onScroll!==void 0&&i("scroll",o)}}function b(a){const{height:o,width:f}=a;let C=!1;r.value!==o&&(C=!0,r.value=o,e.onScrollHeight!==void 0&&i("scrollHeight",o),T()),u.value!==f&&(C=!0,u.value=f),C===!0&&e.onResize!==void 0&&i("resize",a)}function $({height:a}){h.value!==a&&(h.value=a,T())}function T(){if(e.container===!0){const a=r.value>h.value?B():0;d.value!==a&&(d.value=a)}}let l=null;const y={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:t,height:r,containerHeight:h,scrollbarWidth:d,totalWidth:s(()=>u.value+d.value),rows:s(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:V({size:0,offset:0,space:!1}),right:V({size:300,offset:0,space:!1}),footer:V({size:0,offset:0,space:!1}),left:V({size:300,offset:0,space:!1}),scroll:p,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,o,f){y[a][o]=f}};if(W(R,y),B()>0){let f=function(){a=null,o.classList.remove("hide-scrollbar")},C=function(){if(a===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(f,300)},F=function(M){a!==null&&M==="remove"&&(clearTimeout(a),f()),window[`${M}EventListener`]("resize",C)},a=null;const o=document.body;g(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),Y(()=>{F("remove")})}return()=>{const a=k(m.default,[v(ee,{onScroll:w}),v(P,{onResize:b})]),o=v("div",{class:x.value,style:z.value,ref:e.container===!0?void 0:t,tabindex:-1},a);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:t},[v(P,{onResize:$}),v("div",{class:"absolute-full",style:q.value},[v("div",{class:"scroll",style:c.value},[o])])]):o}}}),se="/assets/SIGLER.2332a1b1.jpeg";export{ue as Q,se as _,ne as a,le as b,ae as c,ie as d,re as e};
