import{C as _,h as e}from"./preact.4b3dbaf5.js";import{c as d}from"./preact-redux.esm.03ebc624.js";import{c as m}from"./index.8731960a.js";import{changeCollection as b,toggleSidebar as h}from"./actions.239c985f.js";import l from"./sidebar-group.0407c4b9.js";import"./index.3d5aa0a7.js";import"./_commonjsHelpers.de833af9.js";import"./connectors.1a4f22f2.js";import"./index.4dec3c6a.js";import"./util.0ea43082.js";import"./index.08ff3111.js";import"./sidebar-facet.37184dfa.js";import"./form-elements.240f432f.js";import"./icons.b6e800bb.js";import"./sidebar-menu-item.66cb8bbb.js";var c,n;const f=({menu:r,collection:i,filters:p,sidebarVisible:s})=>({menu:r,collection:i,filters:p,sidebarVisible:s}),g=r=>({changeCollection:i=>{r(b(i))},toggleSidebar:i=>{r(h(i))}});let R=(c=d(f,g),c(n=class extends _{render(){let{menu:i,changeCollection:p,toggleSidebar:s,sidebarVisible:a,collection:u,filters:o}=this.props;return e("div",{class:m("plp__sidebar",{"is-hidden":a})},e("div",{class:"plp__sidebar__section--shop-by"},e("h4",{class:"h4 plp__sidebar__header"},"Shop By:"),i&&i.map(t=>e(l,{title:t.title,list:t.links}))),e("div",{class:"plp__sidebar__section--filters"},e("h4",{class:"h4 plp__sidebar__header"},"Refine By:"),o&&Object.keys(o).map(t=>e(l,{title:t,list:o[t],filter:!0})),e(l,{title:"Price",list:[],filter:!0,price:!0})),e("div",{class:"plp__sidebar__actions"},e("a",{class:"plp__sidebar__actions__btn btn is-black align-c",onClick:t=>s(!a)},"Apply Filters")))}})||n);export{R as default};
