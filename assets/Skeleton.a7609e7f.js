import{c as d,e as G,d as m,$ as E,o as z,g as J}from"./index.df08cca9.js";import{r,c as x}from"./react-venders.8db805b0.js";var K=function(e){var a=e.prefixCls,v=e.className,l=e.width,c=e.style;return r.exports.createElement("h3",{className:d(a,v),style:x({width:l},c)})},O=K,Q=function(e){var a=function(t){var i=e.width,f=e.rows,C=f===void 0?2:f;if(Array.isArray(i))return i[t];if(C-1===t)return i},v=e.prefixCls,l=e.className,c=e.style,u=e.rows,s=G(Array(u)).map(function(o,t){return r.exports.createElement("li",{key:t,style:{width:a(t)}})});return r.exports.createElement("ul",{className:d(v,l),style:c},s)},R=Q,T=function(e){var a,v,l=e.prefixCls,c=e.className,u=e.style,s=e.size,o=e.shape,t=d((a={},m(a,"".concat(l,"-lg"),s==="large"),m(a,"".concat(l,"-sm"),s==="small"),a)),i=d((v={},m(v,"".concat(l,"-circle"),o==="circle"),m(v,"".concat(l,"-square"),o==="square"),m(v,"".concat(l,"-round"),o==="round"),v)),f=typeof s=="number"?{width:s,height:s,lineHeight:"".concat(s,"px")}:{};return r.exports.createElement("span",{className:d(l,t,i,c),style:x(x({},f),u)})},h=T,A=function(e){var a=function(l){var c=l.getPrefixCls,u=e.prefixCls,s=e.className,o=e.active,t=c("skeleton",u),i=z(e,["prefixCls","className"]),f=d(t,"".concat(t,"-element"),m({},"".concat(t,"-active"),o),s);return r.exports.createElement("div",{className:f},r.exports.createElement(h,x({prefixCls:"".concat(t,"-avatar")},i)))};return r.exports.createElement(E,null,a)};A.defaultProps={size:"default",shape:"circle"};var U=A,M=function(e){var a=function(l){var c,u=l.getPrefixCls,s=e.prefixCls,o=e.className,t=e.active,i=e.block,f=i===void 0?!1:i,C=u("skeleton",s),P=z(e,["prefixCls"]),S=d(C,"".concat(C,"-element"),(c={},m(c,"".concat(C,"-active"),t),m(c,"".concat(C,"-block"),f),c),o);return r.exports.createElement("div",{className:S},r.exports.createElement(h,x({prefixCls:"".concat(C,"-button")},P)))};return r.exports.createElement(E,null,a)};M.defaultProps={size:"default"};var V=M,j=function(e){var a=function(l){var c=l.getPrefixCls,u=e.prefixCls,s=e.className,o=e.active,t=c("skeleton",u),i=z(e,["prefixCls"]),f=d(t,"".concat(t,"-element"),m({},"".concat(t,"-active"),o),s);return r.exports.createElement("div",{className:f},r.exports.createElement(h,x({prefixCls:"".concat(t,"-input")},i)))};return r.exports.createElement(E,null,a)};j.defaultProps={size:"default"};var X=j,Y="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Z=function(e){var a=function(l){var c=l.getPrefixCls,u=e.prefixCls,s=e.className,o=e.style,t=c("skeleton",u),i=d(t,"".concat(t,"-element"),s);return r.exports.createElement("div",{className:i},r.exports.createElement("div",{className:d("".concat(t,"-image"),s),style:o},r.exports.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(t,"-image-svg")},r.exports.createElement("path",{d:Y,className:"".concat(t,"-image-path")}))))};return r.exports.createElement(E,null,a)},ee=Z;function q(n){return n&&J(n)==="object"?n:{}}function te(n,e){return n&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function re(n,e){return!n&&e?{width:"38%"}:n&&e?{width:"50%"}:{}}function ae(n,e){var a={};return(!n||!e)&&(a.width="61%"),!n&&e?a.rows=3:a.rows=2,a}var p=function(e){var a=function(l){var c=l.getPrefixCls,u=l.direction,s=e.prefixCls,o=e.loading,t=e.className,i=e.style,f=e.children,C=e.avatar,P=e.title,S=e.paragraph,W=e.active,H=e.round,g=c("skeleton",s);if(o||!("loading"in e)){var k,N=!!C,y=!!P,w=!!S,I;if(N){var L=x(x({prefixCls:"".concat(g,"-avatar")},te(y,w)),q(C));I=r.exports.createElement("div",{className:"".concat(g,"-header")},r.exports.createElement(h,L))}var b;if(y||w){var B;if(y){var _=x(x({prefixCls:"".concat(g,"-title")},re(N,w)),q(P));B=r.exports.createElement(O,_)}var $;if(w){var D=x(x({prefixCls:"".concat(g,"-paragraph")},ae(N,y)),q(S));$=r.exports.createElement(R,D)}b=r.exports.createElement("div",{className:"".concat(g,"-content")},B,$)}var F=d(g,(k={},m(k,"".concat(g,"-with-avatar"),N),m(k,"".concat(g,"-active"),W),m(k,"".concat(g,"-rtl"),u==="rtl"),m(k,"".concat(g,"-round"),H),k),t);return r.exports.createElement("div",{className:F,style:i},I,b)}return f};return r.exports.createElement(E,null,a)};p.defaultProps={avatar:!1,title:!0,paragraph:!0};p.Button=V;p.Avatar=U;p.Input=X;p.Image=ee;var se=p;export{se as S};
