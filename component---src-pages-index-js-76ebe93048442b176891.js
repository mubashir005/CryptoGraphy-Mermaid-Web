"use strict";(self.webpackChunkcryptography_website=self.webpackChunkcryptography_website||[]).push([[678],{8749:function(e,t,n){var a=n(7294);t.Z=e=>{let{info:t}=e;return a.createElement("div",{className:"info-box",id:"info-box",style:{display:t.title?"block":"none"}},a.createElement("h4",null,t.title),a.createElement("p",null,t.text),a.createElement("p",{style:{fontSize:"12px",color:"#6c757d"}},a.createElement("a",{href:t.link,style:{color:"#007bff"}},"Click for more details")))}},8161:function(e,t,n){var a=n(7294),l=n(4160);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement("div",{className:"top-menu"},a.createElement("div",{className:"menu-items"},a.createElement(l.rU,{to:"/",className:"menu-item"},"Home"),a.createElement("div",{className:"menu-item dropdown",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},"Topics",a.createElement("div",{className:"dropdown-content "+(e?"open":"")},a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Main Flow Chart"),a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Chapter 1"),a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Chapter 2"),a.createElement(l.rU,{to:"/chapter-3",className:"dropdown-item"},"Chapter 3"),a.createElement(l.rU,{to:"/chapter-4",className:"dropdown-item"},"Chapter 4"),a.createElement(l.rU,{to:"/chapter-5",className:"dropdown-item"},"Chapter 5"),a.createElement(l.rU,{to:"/chapter-6",className:"dropdown-item"},"Chapter 6"),a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Chapter 7"),a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Chapter 8"),a.createElement(l.rU,{to:"/chapter-1",className:"dropdown-item"},"Chapter 9"))),a.createElement(l.rU,{to:"/examples",className:"menu-item"},"Examples"),a.createElement(l.rU,{to:"/about",className:"menu-item"},"About"),a.createElement(l.rU,{to:"/contact",className:"menu-item"},"Contact")))}},6558:function(e,t,n){n.r(t);var a=n(7294),l=n(7896),o=n(8749),r=n(8161),c=n(7541);t.default=e=>{var t,n,i,s,m,d,u;let{data:p}=e;const E=(0,l.useLocation)(),{0:v,1:h}=(0,a.useState)({title:"",text:"",link:""}),{0:f,1:y}=(0,a.useState)((null==p||null===(t=p.allMdx)||void 0===t||null===(n=t.nodes)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.body)||""),{0:N,1:w}=(0,a.useState)((null==p||null===(s=p.allMdx)||void 0===s||null===(m=s.nodes)||void 0===m||null===(d=m[0])||void 0===d||null===(u=d.frontmatter)||void 0===u?void 0:u.infoData)||[]),x=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e,t,n,a,l,o,r;y((null==p||null===(e=p.allMdx)||void 0===e||null===(t=e.nodes)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.body)||""),w((null==p||null===(a=p.allMdx)||void 0===a||null===(l=a.nodes)||void 0===l||null===(o=l[0])||void 0===o||null===(r=o.frontmatter)||void 0===r?void 0:r.infoData)||"")}),[p]),(0,a.useEffect)((()=>{(async()=>{try{x.current&&!x.current.hasAttribute("data-processed")&&(c.N.initialize({startOnLoad:!1}),x.current.removeAttribute("data-processed"),await new Promise((e=>setTimeout(e,0))),c.N.init(void 0,x.current),x.current.setAttribute("data-processed","true"))}catch(e){console.error("Mermaid initialization error:",e)}})()}),[f,E.pathname]),(0,a.useEffect)((()=>{setTimeout((()=>{document.querySelectorAll(".hoverNode,.highlighted-node").forEach((e=>{e.addEventListener("mouseover",(t=>{const n=e.textContent.trim(),a=N.find((e=>e.id===n));if(a){h(a);const e=document.getElementById("info-box");e&&(e.style.display="block",e.style.left=`${t.clientX+15}px`,e.style.top=`${t.clientY+15}px`)}})),e.addEventListener("mousemove",(e=>{const t=document.getElementById("info-box");t&&(t.style.left=`${e.clientX+15}px`,t.style.top=`${e.clientY+15}px`)})),e.addEventListener("mouseout",(()=>{h({title:"",text:"",link:""});const e=document.getElementById("info-box");e&&(e.style.display="none")})),e.addEventListener("click",(()=>{const t=e.textContent.trim(),n=N.find((e=>e.id===t));null!=n&&n.link&&(window.location.href=n.link)}))}))}),200)}),[N]);return a.createElement("div",{key:E.pathname},a.createElement(r.Z,null),a.createElement("div",{className:"flowchart-container"},a.createElement("h1",{style:{textAlign:"center",marginBottom:"20px"}},"Markdown Flowchart"),a.createElement("div",{className:"mermaid-wrapper"},f?a.createElement("div",{className:"mermaid",ref:x},f.replace("```mermaid","").replace("```","").trim()):a.createElement("p",{style:{textAlign:"center"}},"No content available.")),a.createElement(o.Z,{info:v})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-76ebe93048442b176891.js.map