import{c as S}from"/build/_shared/chunk-FTZJJGLJ.js";import{a as v,b as z,c as l,i,n as I,p as d,q as L,s as R}from"/build/_shared/chunk-O6HLR5DN.js";import"/build/_shared/chunk-CWPSPNLQ.js";import{c as h,e as x,f as w,g as k,h as y}from"/build/_shared/chunk-7IASM5PO.js";import{d as r,f as c,g as React,h as e}from"/build/_shared/chunk-CQWWOTBI.js";e();e();var E=r(c());var j="/build/_assets/global-4XQ5MAGH.css";var M="/build/_assets/antd-ANAFTMUF.css";e();var t=r(c());e();var O=v.div`
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: url(https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bvo-updated-logo-2.png?v=1624107079);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  .ant-layout-header {
      background-color: #fff;
      display: flex;
      justify-content: space-between
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
      color: #000;
  }
  .ant-menu-item-active {
      color: #000;
      border-bottom: unset;
  }
  .ant-menu-item:active {
    background: unset;
    color: #000;
    border-bottom: unset;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
      border-bottom: unset!important
  }
  ${z.mobile`
    .ant-layout-header {
      padding: 0px 24px;
    }
  `}
`;var Z=r(R()),F=()=>{var b,u,m,g,f;let n=(0,t.useContext)(l),a=(m=(u=(b=n.sellerData)==null?void 0:b.other)==null?void 0:u.header)==null?void 0:m.header_data,{Header:s}=d,C=(0,Z.useMediaQuery)({query:"(max-device-width: 768px)"}),U=t.default.createElement(i,null,a==null?void 0:a.map((o,p)=>t.default.createElement(i.Item,{key:p},t.default.createElement("a",{href:o.link,target:"_blank"},o.item_name))));return t.default.createElement(O,null,t.default.createElement(d,null,t.default.createElement(s,{className:"header"},t.default.createElement("div",null,t.default.createElement("a",{href:(g=n==null?void 0:n.sellerData)==null?void 0:g.website_url,target:"_blank"},t.default.createElement("img",{src:(f=n==null?void 0:n.sellerData)==null?void 0:f.logo,width:80,height:50}))),t.default.createElement("div",null,C?t.default.createElement(I,{overlay:U,trigger:["click"]},t.default.createElement(S,{style:{fontSize:24}})):t.default.createElement(i,{theme:"light",mode:"horizontal"},a==null?void 0:a.map((o,p)=>t.default.createElement(i.Item,{key:p},t.default.createElement("a",{href:o.link,target:"_blank"},o.item_name))))))))},Y=F;e();var A=r(c()),D=(0,A.createContext)(null);var _=()=>[{rel:"stylesheet",href:M},{rel:"stylesheet",href:j}];var H=()=>({description:"Pickrr Tracking page",keywords:"remix, react, javascript"});function N(){let n=y();return React.createElement(X,null,React.createElement(l.Provider,{value:{sellerData:n.res}},React.createElement(B,null,React.createElement(h,null))))}function X({children:n,title:a}){let s=(0,E.useContext)(D);return React.createElement("html",{lang:"en"},React.createElement("head",null,React.createElement("meta",{charSet:"utf-8"}),React.createElement("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),a?React.createElement("title",null,a):null,React.createElement(w,null),typeof document=="undefined"?"__STYLES__":null,s,React.createElement(x,null)),React.createElement("body",null,React.createElement("div",{className:"container"}," ",n),React.createElement(k,null),!1))}function B({children:n}){return React.createElement(React.Fragment,null,React.createElement(Y,null),React.createElement("div",{className:"container"}," ",n))}function W({error:n}){return React.createElement(X,null,React.createElement(B,null,React.createElement("h1",null,"Error"),React.createElement("p",null,n.message),React.createElement(L,{status:"500",title:"500",subTitle:"Sorry, something went wrong.",extra:React.createElement("div",{style:{fontSize:"16px"}},"We apologize for the inconvenicence. Please reload the page and try again.",React.createElement("div",null,"If you continue to encounter this error contact our"," ",React.createElement("a",{href:"mailto:support@pickrr.com",target:"blank"},"pickrr support.")))})))}export{W as ErrorBoundary,N as default,_ as links,H as meta};
