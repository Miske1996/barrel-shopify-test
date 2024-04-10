import{decodeQueryString as ae}from"./util.c203a9b9.js";import{reducer as ue}from"./reducers.50529dae.js";import le from"./defaults.ba35ef38.js";var S={};function N(e,t){for(var i in t)e[i]=t[i];return e}function O(e,t){e&&(typeof e=="function"?e(t):e.current=t)}var oe=typeof Promise=="function"?Promise.resolve().then.bind(Promise.resolve()):setTimeout,ce=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Q=[];function J(e){!e._dirty&&(e._dirty=!0)&&Q.push(e)==1&&(S.debounceRendering||oe)(pe)}function pe(){for(var e;e=Q.pop();)e._dirty&&$(e)}function de(e,t,i){return typeof t=="string"||typeof t=="number"?e.splitText!==void 0:typeof t.nodeName=="string"?!e._componentConstructor&&K(e,t.nodeName):i||e._componentConstructor===t.nodeName}function K(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function X(e){var t=N({},e.attributes);t.children=e.children;var i=e.nodeName.defaultProps;if(i!==void 0)for(var r in i)t[r]===void 0&&(t[r]=i[r]);return t}function be(e,t){var i=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return i.normalizedNodeName=e,i}function F(e){var t=e.parentNode;t&&t.removeChild(e)}function V(e,t,i,r,n){if(t==="className"&&(t="class"),t!=="key")if(t==="ref")O(i,null),O(r,e);else if(t==="class"&&!n)e.className=r||"";else if(t==="style"){if((!r||typeof r=="string"||typeof i=="string")&&(e.style.cssText=r||""),r&&typeof r=="object"){if(typeof i!="string")for(var f in i)f in r||(e.style[f]="");for(var f in r)e.style[f]=typeof r[f]=="number"&&ce.test(f)===!1?r[f]+"px":r[f]}}else if(t==="dangerouslySetInnerHTML")r&&(e.innerHTML=r.__html||"");else if(t[0]=="o"&&t[1]=="n"){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?i||e.addEventListener(t,G,s):e.removeEventListener(t,G,s),(e._listeners||(e._listeners={}))[t]=r}else if(t!=="list"&&t!=="type"&&!n&&t in e){try{e[t]=r??""}catch{}(r==null||r===!1)&&t!="spellcheck"&&e.removeAttribute(t)}else{var a=n&&t!==(t=t.replace(/^xlink:?/,""));r==null||r===!1?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):typeof r!="function"&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}}function G(e){return this._listeners[e.type](S.event&&S.event(e)||e)}var Y=[],R=0,C=!1,k=!1;function Z(){for(var e;e=Y.shift();)S.afterMount&&S.afterMount(e),e.componentDidMount&&e.componentDidMount()}function he(e,t,i,r,n,f){R++||(C=n!=null&&n.ownerSVGElement!==void 0,k=e!=null&&!("__preactattr_"in e));var s=m(e,t,i,r,f);return n&&s.parentNode!==n&&n.appendChild(s),--R||(k=!1,f||Z()),s}function m(e,t,i,r,n){var f=e,s=C;if((t==null||typeof t=="boolean")&&(t=""),typeof t=="string"||typeof t=="number")return e&&e.splitText!==void 0&&e.parentNode&&(!e._component||n)?e.nodeValue!=t&&(e.nodeValue=t):(f=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(f,e),T(e,!0))),f.__preactattr_=!0,f;var a=t.nodeName;if(typeof a=="function")return _e(e,t,i,r);if(C=a==="svg"?!0:a==="foreignObject"?!1:C,a=String(a),(!e||!K(e,a))&&(f=be(a,C),e)){for(;e.firstChild;)f.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(f,e),T(e,!0)}var l=f.firstChild,p=f.__preactattr_,b=t.children;if(p==null){p=f.__preactattr_={};for(var h=f.attributes,d=h.length;d--;)p[h[d].name]=h[d].value}return!k&&b&&b.length===1&&typeof b[0]=="string"&&l!=null&&l.splitText!==void 0&&l.nextSibling==null?l.nodeValue!=b[0]&&(l.nodeValue=b[0]):(b&&b.length||l!=null)&&ye(f,b,i,r,k||p.dangerouslySetInnerHTML!=null),ve(f,t.attributes,p),C=s,f}function ye(e,t,i,r,n){var f=e.childNodes,s=[],a={},l=0,p=0,b=f.length,h=0,d=t?t.length:0,g,x,o,y,u;if(b!==0)for(var c=0;c<b;c++){var _=f[c],w=_.__preactattr_,v=d&&w?_._component?_._component.__key:w.key:null;v!=null?(l++,a[v]=_):(w||(_.splitText!==void 0?!n||_.nodeValue.trim():n))&&(s[h++]=_)}if(d!==0)for(var c=0;c<d;c++){y=t[c],u=null;var v=y.key;if(v!=null)l&&a[v]!==void 0&&(u=a[v],a[v]=void 0,l--);else if(p<h){for(g=p;g<h;g++)if(s[g]!==void 0&&de(x=s[g],y,n)){u=x,s[g]=void 0,g===h-1&&h--,g===p&&p++;break}}u=m(u,y,i,r),o=f[c],u&&u!==e&&u!==o&&(o==null?e.appendChild(u):u===o.nextSibling?F(o):e.insertBefore(u,o))}if(l)for(var c in a)a[c]!==void 0&&T(a[c],!1);for(;p<=h;)(u=s[h--])!==void 0&&T(u,!1)}function T(e,t){var i=e._component;i?B(i):(e.__preactattr_!=null&&O(e.__preactattr_.ref,null),(t===!1||e.__preactattr_==null)&&F(e),ee(e))}function ee(e){for(e=e.lastChild;e;){var t=e.previousSibling;T(e,!0),e=t}}function ve(e,t,i){var r;for(r in i)!(t&&t[r]!=null)&&i[r]!=null&&V(e,r,i[r],i[r]=void 0,C);for(r in t)r!=="children"&&r!=="innerHTML"&&(!(r in i)||t[r]!==(r==="value"||r==="checked"?e[r]:i[r]))&&V(e,r,i[r],i[r]=t[r],C)}var E=[];function te(e,t,i){var r,n=E.length;for(e.prototype&&e.prototype.render?(r=new e(t,i),W.call(r,t,i)):(r=new W(t,i),r.constructor=e,r.render=ge);n--;)if(E[n].constructor===e)return r.nextBase=E[n].nextBase,E.splice(n,1),r;return r}function ge(e,t,i){return this.constructor(e,i)}function M(e,t,i,r,n){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,typeof e.constructor.getDerivedStateFromProps>"u"&&(!e.base||n?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,i!==0&&(i===1||S.syncComponentUpdates!==!1||!e.base?$(e,1,n):J(e)),O(e.__ref,e))}function $(e,t,i,r){if(!e._disable){var n=e.props,f=e.state,s=e.context,a=e.prevProps||n,l=e.prevState||f,p=e.prevContext||s,b=e.base,h=e.nextBase,d=b||h,g=e._component,x=!1,o=p,y,u,c;if(e.constructor.getDerivedStateFromProps&&(f=N(N({},f),e.constructor.getDerivedStateFromProps(n,f)),e.state=f),b&&(e.props=a,e.state=l,e.context=p,t!==2&&e.shouldComponentUpdate&&e.shouldComponentUpdate(n,f,s)===!1?x=!0:e.componentWillUpdate&&e.componentWillUpdate(n,f,s),e.props=n,e.state=f,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){y=e.render(n,f,s),e.getChildContext&&(s=N(N({},s),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(o=e.getSnapshotBeforeUpdate(a,l));var _=y&&y.nodeName,w,v;if(typeof _=="function"){var L=X(y);u=g,u&&u.constructor===_&&L.key==u.__key?M(u,L,1,s,!1):(w=u,e._component=u=te(_,L,s),u.nextBase=u.nextBase||h,u._parentComponent=e,M(u,L,0,s,!1),$(u,1,i,!0)),v=u.base}else c=d,w=g,w&&(c=e._component=null),(d||t===1)&&(c&&(c._component=null),v=he(c,y,s,i||!b,d&&d.parentNode,!0));if(d&&v!==d&&u!==g){var I=d.parentNode;I&&v!==I&&(I.replaceChild(v,d),w||(d._component=null,T(d,!1)))}if(w&&B(w),e.base=v,v&&!r){for(var D=e,A=e;A=A._parentComponent;)(D=A).base=v;v._component=D,v._componentConstructor=D.constructor}}for(!b||i?Y.push(e):x||(e.componentDidUpdate&&e.componentDidUpdate(a,l,o),S.afterUpdate&&S.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);!R&&!r&&Z()}}function _e(e,t,i,r){for(var n=e&&e._component,f=n,s=e,a=n&&e._componentConstructor===t.nodeName,l=a,p=X(t);n&&!l&&(n=n._parentComponent);)l=n.constructor===t.nodeName;return n&&l&&(!r||n._component)?(M(n,p,3,i,r),e=n.base):(f&&!a&&(B(f),e=s=null),n=te(t.nodeName,p,i),e&&!n.nextBase&&(n.nextBase=e,s=null),M(n,p,1,i,r),e=n.base,s&&e!==s&&(s._component=null,T(s,!1))),e}function B(e){S.beforeUnmount&&S.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var i=e._component;i?B(i):t&&(t.__preactattr_!=null&&O(t.__preactattr_.ref,null),e.nextBase=t,F(t),E.push(e),ee(t)),O(e.__ref,null)}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}N(W.prototype,{setState:function(t,i){this.prevState||(this.prevState=this.state),this.state=N(N({},this.state),typeof t=="function"?t(this.state,this.props):t),i&&this._renderCallbacks.push(i),J(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),$(this,2)},render:function(){}});function re(e){var t=function(r){var n=r.dispatch,f=r.getState;return function(s){return function(a){return typeof a=="function"?a(n,f,e):s(a)}}};return t}var ie=re();ie.withExtraArgument=re;const we=ie;var Se=typeof global=="object"&&global&&global.Object===Object&&global;const xe=Se;var Ce=typeof self=="object"&&self&&self.Object===Object&&self,Ne=xe||Ce||Function("return this")();const Te=Ne;var je=Te.Symbol;const U=je;var ne=Object.prototype,Oe=ne.hasOwnProperty,Pe=ne.toString,P=U?U.toStringTag:void 0;function Ee(e){var t=Oe.call(e,P),i=e[P];try{e[P]=void 0;var r=!0}catch{}var n=Pe.call(e);return r&&(t?e[P]=i:delete e[P]),n}var Le=Object.prototype,ke=Le.toString;function Me(e){return ke.call(e)}var Ue="[object Null]",$e="[object Undefined]",z=U?U.toStringTag:void 0;function Be(e){return e==null?e===void 0?$e:Ue:z&&z in Object(e)?Ee(e):Me(e)}function Ie(e,t){return function(i){return e(t(i))}}var De=Ie(Object.getPrototypeOf,Object);const Ae=De;function Re(e){return e!=null&&typeof e=="object"}var We="[object Object]",Fe=Function.prototype,Ve=Object.prototype,fe=Fe.toString,Ge=Ve.hasOwnProperty,ze=fe.call(Object);function He(e){if(!Re(e)||Be(e)!=We)return!1;var t=Ae(e);if(t===null)return!0;var i=Ge.call(t,"constructor")&&t.constructor;return typeof i=="function"&&i instanceof i&&fe.call(i)==ze}function qe(e){var t,i=e.Symbol;return typeof i=="function"?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}var j;typeof self<"u"?j=self:typeof window<"u"?j=window:typeof global<"u"?j=global:typeof module<"u"?j=module:j=Function("return this")();var Qe=qe(j);const H=Qe;var q={INIT:"@@redux/INIT"};function se(e,t,i){var r;if(typeof t=="function"&&typeof i>"u"&&(i=t,t=void 0),typeof i<"u"){if(typeof i!="function")throw new Error("Expected the enhancer to be a function.");return i(se)(e,t)}if(typeof e!="function")throw new Error("Expected the reducer to be a function.");var n=e,f=t,s=[],a=s,l=!1;function p(){a===s&&(a=s.slice())}function b(){return f}function h(o){if(typeof o!="function")throw new Error("Expected listener to be a function.");var y=!0;return p(),a.push(o),function(){if(y){y=!1,p();var c=a.indexOf(o);a.splice(c,1)}}}function d(o){if(!He(o))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof o.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=n(f,o)}finally{l=!1}for(var y=s=a,u=0;u<y.length;u++){var c=y[u];c()}return o}function g(o){if(typeof o!="function")throw new Error("Expected the nextReducer to be a function.");n=o,d({type:q.INIT})}function x(){var o,y=h;return o={subscribe:function(c){if(typeof c!="object")throw new TypeError("Expected the observer to be an object.");function _(){c.next&&c.next(b())}_();var w=y(_);return{unsubscribe:w}}},o[H]=function(){return this},o}return d({type:q.INIT}),r={dispatch:d,subscribe:h,getState:b,replaceReducer:g},r[H]=x,r}function Je(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,n){return function(){return r(n.apply(void 0,arguments))}})}var Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};function Xe(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return function(n,f,s){var a=r(n,f,s),l=a.dispatch,p=[],b={getState:a.getState,dispatch:function(d){return l(d)}};return p=t.map(function(h){return h(b)}),l=Je.apply(void 0,p)(a.dispatch),Ke({},a,{dispatch:l})}}}let Ye=Object.assign({},le,ae());const tt=se(ue,Ye,Xe(we),window.devToolsExtension&&window.devToolsExtension());export{tt as default};
//# sourceMappingURL=store.b5c238de.js.map
