import{o as O}from"./index.ed2b1b1e.js";import"./_commonjsHelpers.725317a4.js";var H=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},q=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Object.create(null);function a(i,c){return e[i]=e[i]||[],e[i].push(c),this}function o(i,c){return c._once=!0,a(i,c),this}function n(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return c?e[i].splice(e[i].indexOf(c),1):delete e[i],this}function u(i){for(var c=this,l=arguments.length,v=Array(l>1?l-1:0),f=1;f<l;f++)v[f-1]=arguments[f];var g=e[i]&&e[i].slice();return g&&g.forEach(function(m){m._once&&n(i,m),m.apply(c,v)}),this}return H({},s,{on:a,once:o,off:n,emit:u})},F=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l(),e=void 0,a=void 0,o=void 0,n={normal:t.normal||"data-normal",retina:t.retina||"data-retina",srcset:t.srcset||"data-srcset",threshold:t.threshold||0},u=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),i=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,c=q({handlers:x,check:p,update:w});return c;function l(){return window.scrollY||window.pageYOffset}function v(){s=l(),f()}function f(){e||(window.requestAnimationFrame(function(){return p()}),e=!0)}function g(r){return r.getBoundingClientRect().top+s}function m(r){var d=s,h=d+o,b=g(r),L=b+r.offsetHeight,A=n.threshold/100*o;return L>=d-A&&b<=h+A}function j(r){if(c.emit("src:before",r),u&&r.hasAttribute(n.srcset))r.setAttribute("srcset",r.getAttribute(n.srcset));else{var d=i>1&&r.getAttribute(n.retina);r.setAttribute("src",d||r.getAttribute(n.normal))}c.emit("src:after",r),[n.normal,n.retina,n.srcset].forEach(function(h){return r.removeAttribute(h)}),w()}function x(r){var d=r?"addEventListener":"removeEventListener";return["scroll","resize"].forEach(function(h){return window[d](h,v)}),this}function p(){return o=window.innerHeight,a.forEach(function(r){return m(r)&&j(r)}),e=!1,this}function w(){return a=Array.prototype.slice.call(document.querySelectorAll("["+n.normal+"]")),this}};const S=F;let y=!1;for(let t in document.documentElement.style)if(/object(?:-f|F)it$/.test(t)){y=!0;break}const E=S({normal:"data-normal",retina:"data-retina",srcset:"data-srcset",threshold:0});E.on("src:before",t=>{O(t,"load",s=>{t.parentNode.classList.add("is-loaded")})});const I=t=>{const s=t.clientHeight/t.clientWidth,e=t.querySelectorAll("img,video");t.style.overflow="hidden";for(var a=0;a<e.length;a++){let o=e[a],n=o.clientHeight/o.clientWidth,u=o.getAttribute("data-js-class");o.className=o.className.replace(u,u+"--shim"),setTimeout(()=>{},10),n<s&&(o.style.maxWidth="100%"),n>=s&&(o.style.maxHeight="100%")}},B=t=>{E.update().check().handlers(!0),!y&&I(t)};export{B as default};
//# sourceMappingURL=image.383c585e.js.map
