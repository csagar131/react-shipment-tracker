import{a as m,e as u,f as p,g as c,h as i,i as f,j as g,k as C}from"/build/_shared/chunk-LLYXLU6I.js";import{c as s,s as T}from"/build/_shared/chunk-O6HLR5DN.js";import"/build/_shared/chunk-CWPSPNLQ.js";import{d}from"/build/_shared/chunk-7IASM5PO.js";import{d as l,f as y,g as React,h as t}from"/build/_shared/chunk-CQWWOTBI.js";t();t();t();var r=l(y());var k=l(T());var w=()=>{let n=(0,r.useContext)(s),[a,x]=(0,r.useState)(""),{other:o}=n.sellerData,b=n.sellerData.other.footer,h=e=>{(e.keyCode===13||e.which===13)&&e.target.blur()},D=(0,k.useMediaQuery)({query:"(max-device-width: 768px)"});return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,null,r.default.createElement("div",{style:{padding:`${D?"8px":""}`}},r.default.createElement(i,null,r.default.createElement("div",{className:"title"},"Welcome to Pickrr Tracking !"),r.default.createElement(p,{className:"subtitle"}," Track Your Order"),r.default.createElement("div",{className:"support-text"},"You can find tracking ID in the email and SMS alerts you received from us upon order confirmation."),r.default.createElement("div",{className:"input-button-container"},r.default.createElement(u,{placeholder:"Enter Tracking ID (Comma separated if multiple)",onChange:e=>{x(e.target.value)},enterbutton:"Track",size:"large",onKeyDown:h,value:a,allowClear:!0}),r.default.createElement(d,{to:`/tracking/${a}`,state:o,className:"track-order-button-link"},r.default.createElement(f,{type:"primary"},"Track Order")))),r.default.createElement("div",null,r.default.createElement("img",{src:o==null?void 0:o.banner.url,alt:"brand-img",style:{margin:"16px 0",border:"1px solid tranparent",borderRadius:"10px",width:"100%"}}))),r.default.createElement(i,{style:{padding:"0",background:"transparent"}},r.default.createElement(C,{brandUIData:o}),r.default.createElement(g,{footerData:b,context:n}))),r.default.createElement(c,{src:"https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg"}))},v=w;function S(){return React.createElement(v,null)}var M=S;export{M as default};