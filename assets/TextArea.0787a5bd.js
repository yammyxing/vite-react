import{A as we,_ as k,X as L,Y as j,U as M,o as G,c as C,d as p,T as B,t as Ce,m as ze,x as P,e as Y,g as ie,S as se,r as Ae,$ as Ne,a as Ie,b as le}from"./index.df08cca9.js";import{r as c,c as F}from"./react-venders.8db805b0.js";import{R as Ee,u as _e}from"./focus.5d5ba7d9.js";import{s as Re}from"./index.e8c4f864.js";var Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},Fe=Te,ue=function(f,i){return c.exports.createElement(we,k(k({},f),{},{ref:i,icon:Fe}))};ue.displayName="CheckOutlined";var Ge=c.exports.forwardRef(ue);var ke=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Pe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],q={},w;function Ve(a){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=a.getAttribute("id")||a.getAttribute("data-reactid")||a.getAttribute("name");if(f&&q[i])return q[i];var n=window.getComputedStyle(a),e=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),o=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),t=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),r=Pe.map(function(s){return"".concat(s,":").concat(n.getPropertyValue(s))}).join(";"),l={sizingStyle:r,paddingSize:o,borderSize:t,boxSizing:e};return f&&i&&(q[i]=l),l}function $e(a){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;w||(w=document.createElement("textarea"),w.setAttribute("tab-index","-1"),w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),a.getAttribute("wrap")?w.setAttribute("wrap",a.getAttribute("wrap")):w.removeAttribute("wrap");var e=Ve(a,f),o=e.paddingSize,t=e.borderSize,r=e.boxSizing,l=e.sizingStyle;w.setAttribute("style","".concat(l,";").concat(ke)),w.value=a.value||a.placeholder||"";var s=Number.MIN_SAFE_INTEGER,u=Number.MAX_SAFE_INTEGER,d=w.scrollHeight,m;if(r==="border-box"?d+=t:r==="content-box"&&(d-=o),i!==null||n!==null){w.value=" ";var h=w.scrollHeight-o;i!==null&&(s=h*i,r==="border-box"&&(s=s+o+t),d=Math.max(s,d)),n!==null&&(u=h*n,r==="border-box"&&(u=u+o+t),m=d>u?"":"hidden",d=Math.min(u,d))}return{height:d,minHeight:s,maxHeight:u,overflowY:m,resize:"none"}}var _;(function(a){a[a.NONE=0]="NONE",a[a.RESIZING=1]="RESIZING",a[a.RESIZED=2]="RESIZED"})(_||(_={}));var Oe=function(a){L(i,a);var f=j(i);function i(n){var e;return M(this,i),e=f.call(this,n),e.nextFrameActionId=void 0,e.resizeFrameId=void 0,e.textArea=void 0,e.saveTextArea=function(o){e.textArea=o},e.handleResize=function(o){var t=e.state.resizeStatus,r=e.props,l=r.autoSize,s=r.onResize;t===_.NONE&&(typeof s=="function"&&s(o),l&&e.resizeOnNextFrame())},e.resizeOnNextFrame=function(){cancelAnimationFrame(e.nextFrameActionId),e.nextFrameActionId=requestAnimationFrame(e.resizeTextarea)},e.resizeTextarea=function(){var o=e.props.autoSize;if(!(!o||!e.textArea)){var t=o.minRows,r=o.maxRows,l=$e(e.textArea,!1,t,r);e.setState({textareaStyles:l,resizeStatus:_.RESIZING},function(){cancelAnimationFrame(e.resizeFrameId),e.resizeFrameId=requestAnimationFrame(function(){e.setState({resizeStatus:_.RESIZED},function(){e.resizeFrameId=requestAnimationFrame(function(){e.setState({resizeStatus:_.NONE}),e.fixFirefoxAutoScroll()})})})})}},e.renderTextArea=function(){var o=e.props,t=o.prefixCls,r=t===void 0?"rc-textarea":t,l=o.autoSize,s=o.onResize,u=o.className,d=o.disabled,m=e.state,h=m.textareaStyles,x=m.resizeStatus,v=G(e.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),b=C(r,u,p({},"".concat(r,"-disabled"),d));"value"in v&&(v.value=v.value||"");var S=k(k(k({},e.props.style),h),x===_.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return c.exports.createElement(Ee,{onResize:e.handleResize,disabled:!(l||s)},c.exports.createElement("textarea",F({},v,{className:b,style:S,ref:e.saveTextArea})))},e.state={textareaStyles:{},resizeStatus:_.NONE},e}return B(i,[{key:"componentDidUpdate",value:function(e){(e.value!==this.props.value||!Re(e.autoSize,this.props.autoSize))&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,o=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,o)}}catch{}}},{key:"render",value:function(){return this.renderTextArea()}}]),i}(c.exports.Component),De=function(a){L(i,a);var f=j(i);function i(n){var e;M(this,i),e=f.call(this,n),e.resizableTextArea=void 0,e.focus=function(){e.resizableTextArea.textArea.focus()},e.saveTextArea=function(t){e.resizableTextArea=t},e.handleChange=function(t){var r=e.props.onChange;e.setValue(t.target.value,function(){e.resizableTextArea.resizeTextarea()}),r&&r(t)},e.handleKeyDown=function(t){var r=e.props,l=r.onPressEnter,s=r.onKeyDown;t.keyCode===13&&l&&l(t),s&&s(t)};var o=typeof n.value=="undefined"||n.value===null?n.defaultValue:n.value;return e.state={value:o},e}return B(i,[{key:"setValue",value:function(e,o){"value"in this.props||this.setState({value:e},o)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return c.exports.createElement(Oe,F({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),i}(c.exports.Component);function ce(a,f,i,n,e){var o;return C(a,(o={},p(o,"".concat(a,"-sm"),i==="small"),p(o,"".concat(a,"-lg"),i==="large"),p(o,"".concat(a,"-disabled"),n),p(o,"".concat(a,"-rtl"),e==="rtl"),p(o,"".concat(a,"-borderless"),!f),o))}function X(a){return!!(a.prefix||a.suffix||a.allowClear)}var Le=Ce("text","input");function Z(a){return!!(a.addonBefore||a.addonAfter)}var je=function(a){L(i,a);var f=j(i);function i(){var n;return M(this,i),n=f.apply(this,arguments),n.containerRef=c.exports.createRef(),n.onInputMouseUp=function(e){var o;if((o=n.containerRef.current)===null||o===void 0?void 0:o.contains(e.target)){var t=n.props.triggerFocus;t==null||t()}},n}return B(i,[{key:"renderClearIcon",value:function(e){var o,t=this.props,r=t.allowClear,l=t.value,s=t.disabled,u=t.readOnly,d=t.handleReset,m=t.suffix;if(!r)return null;var h=!s&&!u&&l,x="".concat(e,"-clear-icon");return c.exports.createElement(ze,{onClick:d,onMouseDown:function(b){return b.preventDefault()},className:C((o={},p(o,"".concat(x,"-hidden"),!h),p(o,"".concat(x,"-has-suffix"),!!m),o),x),role:"button"})}},{key:"renderSuffix",value:function(e){var o=this.props,t=o.suffix,r=o.allowClear;return t||r?c.exports.createElement("span",{className:"".concat(e,"-suffix")},this.renderClearIcon(e),t):null}},{key:"renderLabeledIcon",value:function(e,o){var t,r=this.props,l=r.focused,s=r.value,u=r.prefix,d=r.className,m=r.size,h=r.suffix,x=r.disabled,v=r.allowClear,b=r.direction,S=r.style,N=r.readOnly,z=r.bordered,A=r.hidden;if(!X(this.props))return P(o,{value:s});var W=this.renderSuffix(e),K=u?c.exports.createElement("span",{className:"".concat(e,"-prefix")},u):null,$=C("".concat(e,"-affix-wrapper"),(t={},p(t,"".concat(e,"-affix-wrapper-focused"),l),p(t,"".concat(e,"-affix-wrapper-disabled"),x),p(t,"".concat(e,"-affix-wrapper-sm"),m==="small"),p(t,"".concat(e,"-affix-wrapper-lg"),m==="large"),p(t,"".concat(e,"-affix-wrapper-input-with-clear-btn"),h&&v&&s),p(t,"".concat(e,"-affix-wrapper-rtl"),b==="rtl"),p(t,"".concat(e,"-affix-wrapper-readonly"),N),p(t,"".concat(e,"-affix-wrapper-borderless"),!z),p(t,"".concat(d),!Z(this.props)&&d),t));return c.exports.createElement("span",{ref:this.containerRef,className:$,style:S,onMouseUp:this.onInputMouseUp,hidden:A},K,P(o,{style:null,value:s,className:ce(e,z,m,x)}),W)}},{key:"renderInputWithLabel",value:function(e,o){var t,r=this.props,l=r.addonBefore,s=r.addonAfter,u=r.style,d=r.size,m=r.className,h=r.direction,x=r.hidden;if(!Z(this.props))return o;var v="".concat(e,"-group"),b="".concat(v,"-addon"),S=l?c.exports.createElement("span",{className:b},l):null,N=s?c.exports.createElement("span",{className:b},s):null,z=C("".concat(e,"-wrapper"),v,p({},"".concat(v,"-rtl"),h==="rtl")),A=C("".concat(e,"-group-wrapper"),(t={},p(t,"".concat(e,"-group-wrapper-sm"),d==="small"),p(t,"".concat(e,"-group-wrapper-lg"),d==="large"),p(t,"".concat(e,"-group-wrapper-rtl"),h==="rtl"),t),m);return c.exports.createElement("span",{className:A,style:u,hidden:x},c.exports.createElement("span",{className:z},S,P(o,{style:null}),N))}},{key:"renderTextAreaWithClearIcon",value:function(e,o){var t,r=this.props,l=r.value,s=r.allowClear,u=r.className,d=r.style,m=r.direction,h=r.bordered,x=r.hidden;if(!s)return P(o,{value:l});var v=C("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(t={},p(t,"".concat(e,"-affix-wrapper-rtl"),m==="rtl"),p(t,"".concat(e,"-affix-wrapper-borderless"),!h),p(t,"".concat(u),!Z(this.props)&&u),t));return c.exports.createElement("span",{className:v,style:d,hidden:x},P(o,{style:null,value:l}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this.props,o=e.prefixCls,t=e.inputType,r=e.element;return t===Le[0]?this.renderTextAreaWithClearIcon(o,r):this.renderInputWithLabel(o,this.renderLabeledIcon(o,r))}}]),i}(c.exports.Component),de=je;function Q(a){return typeof a=="undefined"||a===null?"":String(a)}function V(a,f,i,n){if(!!i){var e=f;if(f.type==="click"){var o=a.cloneNode(!0);e=Object.create(f,{target:{value:o},currentTarget:{value:o}}),o.value="",i(e);return}if(n!==void 0){e=Object.create(f,{target:{value:a},currentTarget:{value:a}}),a.value=n,i(e);return}i(e)}}function fe(a,f){if(!!a){a.focus(f);var i=f||{},n=i.cursor;if(n){var e=a.value.length;switch(n){case"start":a.setSelectionRange(0,0);break;case"end":a.setSelectionRange(e,e);break;default:a.setSelectionRange(0,e)}}}}var pe=function(a){L(i,a);var f=j(i);function i(n){var e;M(this,i),e=f.call(this,n),e.direction="ltr",e.focus=function(t){fe(e.input,t)},e.saveClearableInput=function(t){e.clearableInput=t},e.saveInput=function(t){e.input=t},e.onFocus=function(t){var r=e.props.onFocus;e.setState({focused:!0},e.clearPasswordValueAttribute),r==null||r(t)},e.onBlur=function(t){var r=e.props.onBlur;e.setState({focused:!1},e.clearPasswordValueAttribute),r==null||r(t)},e.handleReset=function(t){e.setValue("",function(){e.focus()}),V(e.input,t,e.props.onChange)},e.renderInput=function(t,r,l){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=e.props,d=u.className,m=u.addonBefore,h=u.addonAfter,x=u.size,v=u.disabled,b=u.htmlSize,S=G(e.props,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType","bordered","htmlSize","showCount"]);return c.exports.createElement("input",F({autoComplete:s.autoComplete},S,{onChange:e.handleChange,onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:e.handleKeyDown,className:C(ce(t,l,x||r,v,e.direction),p({},d,d&&!m&&!h)),ref:e.saveInput,size:b}))},e.clearPasswordValueAttribute=function(){e.removePasswordTimeout=setTimeout(function(){e.input&&e.input.getAttribute("type")==="password"&&e.input.hasAttribute("value")&&e.input.removeAttribute("value")})},e.handleChange=function(t){e.setValue(t.target.value,e.clearPasswordValueAttribute),V(e.input,t,e.props.onChange)},e.handleKeyDown=function(t){var r=e.props,l=r.onPressEnter,s=r.onKeyDown;l&&t.keyCode===13&&l(t),s==null||s(t)},e.renderShowCountSuffix=function(t){var r=e.state.value,l=e.props,s=l.maxLength,u=l.suffix,d=l.showCount,m=Number(s)>0;if(u||d){var h=Y(Q(r)).length,x=null;return ie(d)==="object"?x=d.formatter({count:h,maxLength:s}):x="".concat(h).concat(m?" / ".concat(s):""),c.exports.createElement(c.exports.Fragment,null,!!d&&c.exports.createElement("span",{className:C("".concat(t,"-show-count-suffix"),p({},"".concat(t,"-show-count-has-suffix"),!!u))},x),u)}return null},e.renderComponent=function(t){var r=t.getPrefixCls,l=t.direction,s=t.input,u=e.state,d=u.value,m=u.focused,h=e.props,x=h.prefixCls,v=h.bordered,b=v===void 0?!0:v,S=r("input",x);e.direction=l;var N=e.renderShowCountSuffix(S);return c.exports.createElement(se.Consumer,null,function(z){return c.exports.createElement(de,F({size:z},e.props,{prefixCls:S,inputType:"input",value:Q(d),element:e.renderInput(S,z,b,s),handleReset:e.handleReset,ref:e.saveClearableInput,direction:l,focused:m,triggerFocus:e.focus,bordered:b,suffix:N}))})};var o=typeof n.value=="undefined"?n.defaultValue:n.value;return e.state={value:o,focused:!1,prevValue:n.value},e}return B(i,[{key:"componentDidMount",value:function(){this.clearPasswordValueAttribute()}},{key:"componentDidUpdate",value:function(){}},{key:"getSnapshotBeforeUpdate",value:function(e){return X(e)!==X(this.props)&&Ae(this.input!==document.activeElement,"Input","When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"),null}},{key:"componentWillUnmount",value:function(){this.removePasswordTimeout&&clearTimeout(this.removePasswordTimeout)}},{key:"blur",value:function(){this.input.blur()}},{key:"setSelectionRange",value:function(e,o,t){this.input.setSelectionRange(e,o,t)}},{key:"select",value:function(){this.input.select()}},{key:"setValue",value:function(e,o){this.props.value===void 0?this.setState({value:e},o):o==null||o()}},{key:"render",value:function(){return c.exports.createElement(Ne,null,this.renderComponent)}}],[{key:"getDerivedStateFromProps",value:function(e,o){var t=o.prevValue,r={prevValue:e.value};return(e.value!==void 0||t!==e.value)&&(r.value=e.value),e.disabled&&(r.focused=!1),r}}]),i}(c.exports.Component);pe.defaultProps={type:"text"};var Ye=pe,Me=globalThis&&globalThis.__rest||function(a,f){var i={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&f.indexOf(n)<0&&(i[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,n=Object.getOwnPropertySymbols(a);e<n.length;e++)f.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(a,n[e])&&(i[n[e]]=a[n[e]]);return i};function J(a,f){return Y(a||"").slice(0,f).join("")}var Be=c.exports.forwardRef(function(a,f){var i,n=a.prefixCls,e=a.bordered,o=e===void 0?!0:e,t=a.showCount,r=t===void 0?!1:t,l=a.maxLength,s=a.className,u=a.style,d=a.size,m=a.onCompositionStart,h=a.onCompositionEnd,x=a.onChange,v=Me(a,["prefixCls","bordered","showCount","maxLength","className","style","size","onCompositionStart","onCompositionEnd","onChange"]),b=c.exports.useContext(Ie),S=b.getPrefixCls,N=b.direction,z=c.exports.useContext(se),A=c.exports.useRef(null),W=c.exports.useRef(null),K=c.exports.useState(!1),$=le(K,2),ee=$[0],te=$[1],ve=_e(v.defaultValue,{value:v.value}),re=le(ve,2),ae=re[0],me=re[1],he=v.hidden,U=function(y,g){v.value===void 0&&(me(y),g==null||g())},O=Number(l)>0,xe=function(y){te(!0),m==null||m(y)},ge=function(y){te(!1);var g=y.currentTarget.value;O&&(g=J(g,l)),g!==ae&&(U(g),V(y.currentTarget,y,x,g)),h==null||h(y)},be=function(y){var g=y.target.value;!ee&&O&&(g=J(g,l)),U(g),V(y.currentTarget,y,x,g)},ye=function(y){var g,R;U("",function(){var T;(T=A.current)===null||T===void 0||T.focus()}),V((R=(g=A.current)===null||g===void 0?void 0:g.resizableTextArea)===null||R===void 0?void 0:R.textArea,y,x)},I=S("input",n);c.exports.useImperativeHandle(f,function(){var E;return{resizableTextArea:(E=A.current)===null||E===void 0?void 0:E.resizableTextArea,focus:function(g){var R,T;fe((T=(R=A.current)===null||R===void 0?void 0:R.resizableTextArea)===null||T===void 0?void 0:T.textArea,g)},blur:function(){var g;return(g=A.current)===null||g===void 0?void 0:g.blur()}}});var Se=c.exports.createElement(De,F({},G(v,["allowClear"]),{className:C((i={},p(i,"".concat(I,"-borderless"),!o),p(i,s,s&&!r),p(i,"".concat(I,"-sm"),z==="small"||d==="small"),p(i,"".concat(I,"-lg"),z==="large"||d==="large"),i)),style:r?void 0:u,prefixCls:I,onCompositionStart:xe,onChange:be,onCompositionEnd:ge,ref:A})),D=Q(ae);!ee&&O&&(v.value===null||v.value===void 0)&&(D=J(D,l));var ne=c.exports.createElement(de,F({},v,{prefixCls:I,direction:N,inputType:"text",value:D,element:Se,handleReset:ye,ref:W,bordered:o,style:r?void 0:u}));if(r){var oe=Y(D).length,H="";return ie(r)==="object"?H=r.formatter({count:oe,maxLength:l}):H="".concat(oe).concat(O?" / ".concat(l):""),c.exports.createElement("div",{hidden:he,className:C("".concat(I,"-textarea"),p({},"".concat(I,"-textarea-rtl"),N==="rtl"),"".concat(I,"-textarea-show-count"),s),style:u,"data-count":H},ne)}return ne}),qe=Be;export{Ge as C,Ye as I,qe as T};
