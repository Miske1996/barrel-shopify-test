import{h as s,o as N,C as R,r as q,c as pe,a as B}from"./preact.4b3dbaf5.js";import{a as G,c as le}from"./preact-redux.esm.03ebc624.js";import{c as ce}from"./index.8731960a.js";import{g as fe,a as de}from"./_commonjsHelpers.de833af9.js";import he from"./sidebar-facet.37184dfa.js";import me from"./sidebar-menu-item.66cb8bbb.js";import{IconArrowB as ye}from"./icons.b6e800bb.js";import"./index.3d5aa0a7.js";import"./actions.239c985f.js";import"./connectors.1a4f22f2.js";import"./index.4dec3c6a.js";import"./util.0ea43082.js";import"./index.08ff3111.js";import"./form-elements.240f432f.js";var Y={},K={exports:{}},ge="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ve=ge,_e=ve;function Z(){}function J(){}J.resetWarningCache=Z;var be=function(){function e(n,o,i,a,u,d){if(d!==_e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:Z};return r.PropTypes=r,r};K.exports=be();var Pe=K.exports;const A=fe(Pe);var Q="15.1.0",T="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),X=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,b=typeof Symbol<"u"&&Symbol.for?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",Ce={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},I=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,j={},ee=!1;try{ee=!1}catch{}function Ne(){return null}var f=s("a",null).constructor;f.prototype.$$typeof=X;f.prototype.preactCompatUpgraded=!1;f.prototype.preactCompatNormalized=!1;Object.defineProperty(f.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0});Object.defineProperty(f.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var W=N.event;N.event=function(e){return W&&(e=W(e)),e.persist=Object,e.nativeEvent=e,e};var H=N.vnode;N.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,r=e.attributes=e.attributes==null?{}:p({},e.attributes);typeof t=="function"?(t[b]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&String(e.children)===""&&(e.children=void 0),e.children&&(r.children=e.children),e.preactCompatNormalized||M(e),Se(e)):(e.children&&String(e.children)===""&&(e.children=void 0),e.children&&(r.children=e.children),r.defaultValue&&(!r.value&&r.value!==0&&(r.value=r.defaultValue),delete r.defaultValue),Ee(e,r))}H&&H(e)};function Se(e){var t=e.nodeName,r=e.attributes;e.attributes={},t.defaultProps&&p(e.attributes,t.defaultProps),r&&p(e.attributes,r)}function Ee(e,t){var r,n,o;if(t){for(o in t)if(r=I.test(o))break;if(r){n=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(n[I.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function y(e,t,r){var n=t&&t._preactCompatRendered&&t._preactCompatRendered.base;n&&n.parentNode!==t&&(n=null),!n&&t&&(n=t.firstElementChild);for(var o=t.childNodes.length;o--;)t.childNodes[o]!==n&&t.removeChild(t.childNodes[o]);var i=q(e,t,n);return t&&(t._preactCompatRendered=i&&(i._component||{base:i})),typeof r=="function"&&r(),i&&i._component||i}var $=function(){};$.prototype.getChildContext=function(){return this.props.context};$.prototype.render=function(e){return e.children[0]};function x(e,t,r,n){var o=s($,{context:e.context},t),i=y(o,r),a=i._component||i.base;return n&&n.call(a,i),a}function Te(e){x(this,e.vnode,e.container)}function te(e,t){return s(Te,{vnode:e,container:t})}function re(e){var t=e._preactCompatRendered&&e._preactCompatRendered.base;return t&&t.parentNode===e?(q(s(Ne),e,t),!0):!1}var ne=[],m={map:function(e,t,r){return e==null?null:(e=m.toArray(e),r&&r!==e&&(t=t.bind(r)),e.map(t))},forEach:function(e,t,r){if(e==null)return null;e=m.toArray(e),r&&r!==e&&(t=t.bind(r)),e.forEach(t)},count:function(e){return e&&e.length||0},only:function(e){if(e=m.toArray(e),e.length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return e==null?[]:ne.concat(e)}},g;function k(e){return S.bind(null,e)}var D={};for(var O=T.length;O--;)D[T[O]]=k(T[O]);function oe(e,t){for(var r=t||0;r<e.length;r++){var n=e[r];Array.isArray(n)?oe(n):n&&typeof n=="object"&&!E(n)&&(n.props&&n.type||n.attributes&&n.nodeName||n.children)&&(e[r]=S(n.type||n.nodeName,n.props||n.attributes,n.children))}}function Oe(e){return typeof e=="function"&&!(e.prototype&&e.prototype.render)}function we(e){return U({displayName:e.displayName||e.name,render:function(){return e(this.props,this.context)}})}function Re(e){var t=e[b];return t?t===!0?e:t:(t=we(e),Object.defineProperty(t,b,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,b,{configurable:!0,value:t}),t)}function S(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return oe(e,2),M(s.apply(void 0,e))}function M(e){e.preactCompatNormalized=!0,xe(e),Oe(e.nodeName)&&(e.nodeName=Re(e.nodeName));var t=e.attributes.ref,r=t&&typeof t;return g&&(r==="string"||r==="number")&&(e.attributes.ref=Ae(t,g)),$e(e),e}function ie(e,t){for(var r=[],n=arguments.length-2;n-- >0;)r[n]=arguments[n+2];if(!E(e))return e;var o=e.attributes||e.props,i=s(e.nodeName||e.type,p({},o),e.children||o&&o.children),a=[i,t];return r&&r.length?a.push(r):t&&t.children&&a.push(t.children),M(pe.apply(void 0,a))}function E(e){return e&&(e instanceof f||e.$$typeof===X)}function Ae(e,t){return t._refProxies[e]||(t._refProxies[e]=function(r){t&&t.refs&&(t.refs[e]=r,r===null&&(delete t._refProxies[e],t=null))})}function $e(e){var t=e.nodeName,r=e.attributes;if(!(!r||typeof t!="string")){var n={};for(var o in r)n[o.toLowerCase()]=o;if(n.ondoubleclick&&(r.ondblclick=r[n.ondoubleclick],delete r[n.ondoubleclick]),n.onchange&&(t==="textarea"||t.toLowerCase()==="input"&&!/^fil|che|rad/i.test(r.type))){var i=n.oninput||"oninput";r[i]||(r[i]=C([r[i],r[n.onchange]]),delete r[n.onchange])}}}function xe(e){var t=e.attributes||(e.attributes={});V.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",V)}var V={configurable:!0,get:function(){return this.class},set:function(e){this.class=e}};function p(e,t){for(var r=arguments,n=1,o=void 0;n<arguments.length;n++)if(o=r[n])for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);return e}function L(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1}function ae(e){return e&&(e.base||e.nodeType===1&&e)||null}function P(){}function U(e){function t(r,n){Me(this),c.call(this,r,n,j),se.call(this,r,n)}return e=p({constructor:t},e),e.mixins&&De(e,ke(e.mixins)),e.statics&&p(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps.call(t)),P.prototype=c.prototype,t.prototype=p(new P,e),t.displayName=e.displayName||"Component",t}function ke(e){for(var t={},r=0;r<e.length;r++){var n=e[r];for(var o in n)n.hasOwnProperty(o)&&typeof n[o]=="function"&&(t[o]||(t[o]=[])).push(n[o])}return t}function De(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=C(t[r].concat(e[r]||ne),r==="getDefaultProps"||r==="getInitialState"||r==="getChildContext"))}function Me(e){for(var t in e){var r=e[t];typeof r=="function"&&!r.__bound&&!Ce.hasOwnProperty(t)&&((e[t]=r.bind(e)).__bound=!0)}}function Ue(e,t,r){if(typeof t=="string"&&(t=e.constructor.prototype[t]),typeof t=="function")return t.apply(e,r)}function C(e,t){return function(){for(var r=arguments,n=this,o,i=0;i<e.length;i++){var a=Ue(n,e[i],r);if(t&&a!=null){o||(o={});for(var u in a)a.hasOwnProperty(u)&&(o[u]=a[u])}else typeof a<"u"&&(o=a)}return o}}function se(e,t){w.call(this,e,t),this.componentWillReceiveProps=C([w,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=C([w,Ie,this.render||"render",We])}function w(e,t){if(e){var r=e.children;if(r&&Array.isArray(r)&&r.length===1&&(typeof r[0]=="string"||typeof r[0]=="function"||r[0]instanceof f)&&(e.children=r[0],e.children&&typeof e.children=="object"&&(e.children.length=1,e.children[0]=e.children)),ee){var n=typeof this=="function"?this:this.constructor,o=this.propTypes||n.propTypes,i=this.displayName||n.name;o&&A.checkPropTypes(o,e,"prop",i)}}}function Ie(e){g=this}function We(){g===this&&(g=null)}function c(e,t,r){R.call(this,e,t),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},r!==j&&se.call(this,e,t)}p(c.prototype=new R,{constructor:c,isReactComponent:{},replaceState:function(e,t){var r=this;this.setState(e,t);for(var n in r.state)n in e||delete r.state[n]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}});function v(e,t){c.call(this,e,t)}P.prototype=c.prototype;v.prototype=new P;v.prototype.isPureReactComponent=!0;v.prototype.shouldComponentUpdate=function(e,t){return L(this.props,e)||L(this.state,t)};function ue(e){e()}var He={version:Q,DOM:D,PropTypes:A,Children:m,render:y,hydrate:y,createClass:U,createContext:G,createPortal:te,createFactory:k,createElement:S,cloneElement:ie,createRef:B,isValidElement:E,findDOMNode:ae,unmountComponentAtNode:re,Component:c,PureComponent:v,unstable_renderSubtreeIntoContainer:x,unstable_batchedUpdates:ue,__spread:p};const Ve=Object.freeze(Object.defineProperty({__proto__:null,Children:m,Component:c,DOM:D,PropTypes:A,PureComponent:v,__spread:p,cloneElement:ie,createClass:U,createContext:G,createElement:S,createFactory:k,createPortal:te,createRef:B,default:He,findDOMNode:ae,hydrate:y,isValidElement:E,render:y,unmountComponentAtNode:re,unstable_batchedUpdates:ue,unstable_renderSubtreeIntoContainer:x,version:Q},Symbol.toStringTag,{value:"Module"})),Le=de(Ve);Object.defineProperty(Y,"__esModule",{value:!0});var Fe=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ze=Le,h=qe(ze);function qe(e){return e&&e.__esModule?e:{default:e}}function Be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ge(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ye(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Ke=function(e){Ye(t,e);function t(r){Be(this,t);var n=Ge(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r)),o=n.props,i=o.duration,a=i===void 0?400:i,u=o.easing,d=u===void 0?"ease-in-out":u,l=o.open,_=l===void 0?!1:l;return n.transition="height "+a+"ms "+d,n.state={height:_?"auto":0,transition:"none",closed:!_},n}return Fe(t,[{key:"componentDidUpdate",value:function(n){var o=this,i=n.open,a=this.props.open,u=this.state.rerender;if(a!==i){this[a?"open":"close"]();return}u&&setTimeout(function(){o.setHeight()},50)}},{key:"close",value:function(){this.setState({height:this.inner.offsetHeight,transition:this.transition,rerender:!0})}},{key:"open",value:function(){this.setState({transition:this.transition,closed:!1,rerender:!0})}},{key:"setHeight",value:function(){var n=this.props.open;this.setState({height:n?this.inner.offsetHeight:0,rerender:!1})}},{key:"handleTransitionEnd",value:function(){this.props.open?this.setState({height:"auto"}):this.setState({closed:!0})}},{key:"render",value:function(){var n=this,o=this.props.children,i=this.state,a=i.height,u=i.closed,d={height:a,overflow:"hidden"};return["transition","WebkitTransition","msTransition"].map(function(l){return d[l]=n.transition}),h.default.createElement("div",null,h.default.createElement("div",{style:d,onTransitionEnd:function(){return n.handleTransitionEnd()}},h.default.createElement("div",{ref:function(_){return n.inner=_}},h.default.createElement("div",{style:{display:u?"none":"block"}},o))))}}]),t}(h.default.Component),Ze=Y.default=Ke,F,z;const Je=({filters:e})=>({filters:e});let ct=(F=le(Je),F(z=class extends R{constructor(t){super(t),this.setState({open:!0})}toggleAccordion(){this.setState({open:!this.state.open})}render(){const{list:t,title:r,filter:n=!1,price:o=!1}=this.props,{open:i}=this.state;return s("div",{class:`plp__sidebar__group${n?"--filter":""}`},s("h4",{class:"rel p1 pointer",onClick:()=>this.toggleAccordion()},r,s("i",{class:ce("accordion__caret dropdown__icon",{"is-open":i}),dangerouslySetInnerHTML:{__html:ye}})),s(Ze,{open:i},t.length&&s("ul",{class:`plp__sidebar__group__ul${n?"--filter":""}`},t.map(a=>n?s(he,{group:r,facet:a}):s(me,{item:a})))))}})||z);export{ct as default};