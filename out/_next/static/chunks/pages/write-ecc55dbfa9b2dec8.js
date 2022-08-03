(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{3484:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/write",function(){return c(9660)}])},9660:function(a,b,c){"use strict";function d(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}c.r(b),c.d(b,{default:function(){return aA}});var e=c(5893),f=c(7294),g=c(166),h=c(7375),i=c(7242),j=c(9703),k=c(6450),l=c(894);function m(){return(m=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function n(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var o=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],q=(0,i.eC)("FormControl"),r=q[0],s=q[1],t=s,u=(0,k.kr)({strict:!1,name:"FormControlContext"}),v=u[0],w=u[1],x=(0,i.Gp)(function(a,b){var c,d,e,g,l,q,s,t,u,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N=(0,i.jC)("Form",a),O=(d=(c=(0,i.Lr)(a)).id,e=c.isRequired,g=c.isInvalid,l=c.isDisabled,q=c.isReadOnly,s=n(c,o),t=(0,h.Me)(),u=d||"field-"+t,w=u+"-label",x=u+"-feedback",y=u+"-helptext",z=f.useState(!1),A=z[0],B=z[1],C=f.useState(!1),D=C[0],E=C[1],F=(0,h.kt)(),G=F[0],H=F[1],I=f.useCallback(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),m({id:y},a,{ref:(0,k.lq)(b,function(a){a&&E(!0)})})},[y]),J=f.useCallback(function(a,b){var c,d;return void 0===a&&(a={}),void 0===b&&(b=null),m({},a,{ref:b,"data-focus":(0,j.PB)(G),"data-disabled":(0,j.PB)(l),"data-invalid":(0,j.PB)(g),"data-readonly":(0,j.PB)(q),id:null!=(c=a.id)?c:w,htmlFor:null!=(d=a.htmlFor)?d:u})},[u,l,G,g,q,w]),K=f.useCallback(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),m({id:x},a,{ref:(0,k.lq)(b,function(a){a&&B(!0)}),"aria-live":"polite"})},[x]),L=f.useCallback(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),m({},a,s,{ref:b,role:"group"})},[s]),M=f.useCallback(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),m({},a,{ref:b,role:"presentation","aria-hidden":!0,children:a.children||"*"})},[]),{isRequired:!!e,isInvalid:!!g,isReadOnly:!!q,isDisabled:!!l,isFocused:!!G,onFocus:H.on,onBlur:H.off,hasFeedbackText:A,setHasFeedbackText:B,hasHelpText:D,setHasHelpText:E,id:u,labelId:w,feedbackId:x,helpTextId:y,htmlProps:s,getHelpTextProps:I,getErrorMessageProps:K,getRootProps:L,getLabelProps:J,getRequiredIndicatorProps:M}),P=O.getRootProps;O.htmlProps;var Q=n(O,p),R=(0,j.cx)("chakra-form-control",a.className);return f.createElement(v,{value:Q},f.createElement(r,{value:N},f.createElement(i.m$.div,m({},P({},b),{className:R,__css:N.container}))))});j.Ts&&(x.displayName="FormControl");var y=(0,i.Gp)(function(a,b){var c=w(),d=s(),e=(0,j.cx)("chakra-form__helper-text",a.className);return f.createElement(i.m$.div,m({},null==c?void 0:c.getHelpTextProps(a,b),{__css:d.helperText,className:e}))});j.Ts&&(y.displayName="FormHelperText");var z=["isDisabled","isInvalid","isReadOnly","isRequired"],A=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"],B=(0,i.eC)("FormError"),C=B[0],D=B[1],E=(0,i.Gp)(function(a,b){var c=(0,i.jC)("FormError",a),d=(0,i.Lr)(a),e=w();return null!=e&&e.isInvalid?f.createElement(C,{value:c},f.createElement(i.m$.div,m({},null==e?void 0:e.getErrorMessageProps(d,b),{className:(0,j.cx)("chakra-form__error-message",a.className),__css:m({display:"flex",alignItems:"center"},c.text)}))):null});j.Ts&&(E.displayName="FormErrorMessage");var F=(0,i.Gp)(function(a,b){var c=D(),d=w();if(!(null!=d&&d.isInvalid))return null;var e=(0,j.cx)("chakra-form__error-icon",a.className);return f.createElement(l.ZP,m({ref:b,"aria-hidden":!0},a,{__css:c.icon,className:e}),f.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))});j.Ts&&(F.displayName="FormErrorIcon");var G=["className","children","requiredIndicator","optionalIndicator"],H=(0,i.Gp)(function(a,b){var c,d=(0,i.mq)("FormLabel",a),e=(0,i.Lr)(a);e.className;var g=e.children,h=e.requiredIndicator,k=void 0===h?f.createElement(I,null):h,l=e.optionalIndicator,o=n(e,G),p=w(),q=null!=(c=null==p?void 0:p.getLabelProps(o,b))?c:m({ref:b},o);return f.createElement(i.m$.label,m({},q,{className:(0,j.cx)("chakra-form__label",e.className),__css:m({display:"block",textAlign:"start"},d)}),g,null!=p&&p.isRequired?k:void 0===l?null:l)});j.Ts&&(H.displayName="FormLabel");var I=(0,i.Gp)(function(a,b){var c=w(),d=t();if(!(null!=c&&c.isRequired))return null;var e=(0,j.cx)("chakra-form__required-indicator",a.className);return f.createElement(i.m$.span,m({},null==c?void 0:c.getRequiredIndicatorProps(a,b),{__css:d.requiredIndicator,className:e}))});function J(){return(J=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function K(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}j.Ts&&(I.displayName="RequiredIndicator");var L=["htmlSize"],M=(0,i.Gp)(function(a,b){var c,d,e,g,h,k,l,o,p,q,r,s,t,u,v,x,y,B,C,D,E,F,G,H,I=a.htmlSize,M=K(a,L),N=(0,i.jC)("Input",M),O=(0,i.Lr)(M),P=(D=(C=(c=B=O,h=w(),k=c.id,l=c.disabled,o=c.readOnly,p=c.required,q=c.isRequired,r=c.isInvalid,s=c.isReadOnly,t=c.isDisabled,u=c.onFocus,v=c.onBlur,x=n(c,A),y=c["aria-describedby"]?[c["aria-describedby"]]:[],null!=h&&h.hasFeedbackText&&null!=h&&h.isInvalid&&y.push(h.feedbackId),null!=h&&h.hasHelpText&&y.push(h.helpTextId),m({},x,{"aria-describedby":y.join(" ")||void 0,id:null!=k?k:null==h?void 0:h.id,isDisabled:null!=(d=null!=l?l:t)?d:null==h?void 0:h.isDisabled,isReadOnly:null!=(e=null!=o?o:s)?e:null==h?void 0:h.isReadOnly,isRequired:null!=(g=null!=p?p:q)?g:null==h?void 0:h.isRequired,isInvalid:null!=r?r:null==h?void 0:h.isInvalid,onFocus:(0,j.v0)(null==h?void 0:h.onFocus,u),onBlur:(0,j.v0)(null==h?void 0:h.onBlur,v)}))).isDisabled,E=C.isInvalid,F=C.isReadOnly,G=C.isRequired,H=n(C,z),m({},H,{disabled:D,readOnly:F,required:G,"aria-invalid":(0,j.Qm)(E),"aria-required":(0,j.Qm)(G),"aria-readonly":(0,j.Qm)(F)})),Q=(0,j.cx)("chakra-input",a.className);return f.createElement(i.m$.input,J({size:I},P,{__css:N.field,ref:b,className:Q}))});j.Ts&&(M.displayName="Input"),M.id="Input";var N=["children","className"],O=(0,i.eC)("InputGroup"),P=O[0],Q=O[1],R=(0,i.Gp)(function(a,b){var c=(0,i.jC)("Input",a),d=(0,i.Lr)(a),e=d.children,g=d.className,h=K(d,N),l=(0,j.cx)("chakra-input__group",g),m={},n=(0,k.WR)(e),o=c.field;n.forEach(function(a){var b,d;c&&(o&&"InputLeftElement"===a.type.id&&(m.paddingStart=null!=(b=o.height)?b:o.h),o&&"InputRightElement"===a.type.id&&(m.paddingEnd=null!=(d=o.height)?d:o.h),"InputRightAddon"===a.type.id&&(m.borderEndRadius=0),"InputLeftAddon"===a.type.id&&(m.borderStartRadius=0))});var p=n.map(function(b){var c,d,e=(0,j.YU)({size:(null==(c=b.props)?void 0:c.size)||a.size,variant:(null==(d=b.props)?void 0:d.variant)||a.variant});return"Input"!==b.type.id?f.cloneElement(b,e):f.cloneElement(b,Object.assign(e,m,b.props))});return f.createElement(i.m$.div,J({className:l,ref:b,__css:{width:"100%",display:"flex",position:"relative"}},h),f.createElement(P,{value:c},p))});j.Ts&&(R.displayName="InputGroup");var S=["placement"],T={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},U=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),V=(0,i.Gp)(function(a,b){var c,d=a.placement,e=K(a,S),g=null!=(c=T[void 0===d?"left":d])?c:{},h=Q();return f.createElement(U,J({ref:b},e,{__css:J({},h.addon,g)}))});j.Ts&&(V.displayName="InputAddon");var W=(0,i.Gp)(function(a,b){return f.createElement(V,J({ref:b,placement:"left"},a,{className:(0,j.cx)("chakra-input__left-addon",a.className)}))});j.Ts&&(W.displayName="InputLeftAddon"),W.id="InputLeftAddon";var X=(0,i.Gp)(function(a,b){return f.createElement(V,J({ref:b,placement:"right"},a,{className:(0,j.cx)("chakra-input__right-addon",a.className)}))});j.Ts&&(X.displayName="InputRightAddon"),X.id="InputRightAddon";var Y=["placement"],Z=["className"],$=["className"],_=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),aa=(0,i.Gp)(function(a,b){var c,d,e,g=a.placement,h=K(a,Y),i=Q(),j=i.field,k="left"===(void 0===g?"left":g)?"insetStart":"insetEnd",l=J(((e={})[k]="0",e.width=null!=(c=null==j?void 0:j.height)?c:null==j?void 0:j.h,e.height=null!=(d=null==j?void 0:j.height)?d:null==j?void 0:j.h,e.fontSize=null==j?void 0:j.fontSize,e),i.element);return f.createElement(_,J({ref:b,__css:l},h))});aa.id="InputElement",j.Ts&&(aa.displayName="InputElement");var ab=(0,i.Gp)(function(a,b){var c=a.className,d=K(a,Z),e=(0,j.cx)("chakra-input__left-element",c);return f.createElement(aa,J({ref:b,placement:"left",className:e},d))});ab.id="InputLeftElement",j.Ts&&(ab.displayName="InputLeftElement");var ac=(0,i.Gp)(function(a,b){var c=a.className,d=K(a,$),e=(0,j.cx)("chakra-input__right-element",c);return f.createElement(aa,J({ref:b,placement:"right",className:e},d))});ac.id="InputRightElement",j.Ts&&(ac.displayName="InputRightElement");var ad=c(8554),ae=c.n(ad),af=c(9238);function ag(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function ah(){return(ah=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var ai=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],aj=(0,k.kr)({strict:!1,name:"ButtonGroupContext"}),ak=aj[0],al=aj[1],am=(0,i.Gp)(function(a,b){var c=a.size,d=a.colorScheme,e=a.variant,g=a.className,h=a.spacing,k=a.isAttached,l=a.isDisabled,m=ag(a,ai),n=(0,j.cx)("chakra-button__group",g),o=f.useMemo(function(){return{size:c,colorScheme:d,variant:e,isDisabled:l}},[c,d,e,l]),p={display:"inline-flex"};return p=k?ah({},p,{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):ah({},p,{"& > *:not(style) ~ *:not(style)":{marginStart:void 0===h?"0.5rem":h}}),f.createElement(ak,{value:o},f.createElement(i.m$.div,ah({ref:b,role:"group",__css:p,className:n,"data-attached":k?"":void 0},m)))});j.Ts&&(am.displayName="ButtonGroup");var an=["label","placement","spacing","children","className","__css"],ao=function(a){var b=a.label,c=a.placement,d=a.spacing,e=void 0===d?"0.5rem":d,g=a.children,h=void 0===g?f.createElement(af.$,{color:"currentColor",width:"1em",height:"1em"}):g,k=a.className,l=a.__css,m=ag(a,an),n=(0,j.cx)("chakra-button__spinner",k),o="start"===c?"marginEnd":"marginStart",p=f.useMemo(function(){var a;return ah(((a={display:"flex",alignItems:"center",position:b?"relative":"absolute"})[o]=b?e:0,a.fontSize="1em",a.lineHeight="normal",a),l)},[l,b,o,e]);return f.createElement(i.m$.div,ah({className:n},m,{__css:p}),h)};j.Ts&&(ao.displayName="ButtonSpinner");var ap=["children","className"],aq=function(a){var b=a.children,c=a.className,d=ag(a,ap),e=f.isValidElement(b)?f.cloneElement(b,{"aria-hidden":!0,focusable:!1}):b,g=(0,j.cx)("chakra-button__icon",c);return f.createElement(i.m$.span,ah({display:"inline-flex",alignSelf:"center",flexShrink:0},d,{className:g}),e)};j.Ts&&(aq.displayName="ButtonIcon");var ar=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],as=(0,i.Gp)(function(a,b){var c,d,e,g,k,l=al(),m=(0,i.mq)("Button",ah({},l,a)),n=(0,i.Lr)(a),o=n.isDisabled,p=void 0===o?null==l?void 0:l.isDisabled:o,q=n.isLoading,r=n.isActive,s=n.children,t=n.leftIcon,u=n.rightIcon,v=n.loadingText,w=n.iconSpacing,x=void 0===w?"0.5rem":w,y=n.type,z=n.spinner,A=n.spinnerPlacement,B=void 0===A?"start":A,C=n.className,D=n.as,E=ag(n,ar),F=f.useMemo(function(){var a,b=ae()({},null!=(a=null==m?void 0:m["_focus"])?a:{},{zIndex:1});return ah({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},m,!!l&&{_focus:b})},[m,l]),G=(c=D,e=(d=f.useState(!c))[0],g=d[1],k=f.useCallback(function(a){a&&g("BUTTON"===a.tagName)},[]),{ref:k,type:e?"button":void 0}),H=G.ref,I=G.type,J={rightIcon:u,leftIcon:t,iconSpacing:x,children:s};return f.createElement(i.m$.button,ah({disabled:p||q,ref:(0,h.qq)(b,H),as:D,type:null!=y?y:I,"data-active":(0,j.PB)(r),"data-loading":(0,j.PB)(q),__css:F,className:(0,j.cx)("chakra-button",C)},E),q&&"start"===B&&f.createElement(ao,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:x},z),q?v||f.createElement(i.m$.span,{opacity:0},f.createElement(at,J)):f.createElement(at,J),q&&"end"===B&&f.createElement(ao,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:x},z))});function at(a){var b=a.leftIcon,c=a.rightIcon,d=a.children,e=a.iconSpacing;return f.createElement(f.Fragment,null,b&&f.createElement(aq,{marginEnd:e},b),d,c&&f.createElement(aq,{marginStart:e},c))}j.Ts&&(as.displayName="Button");var au=["icon","children","isRound","aria-label"],av=(0,i.Gp)(function(a,b){var c=a.icon,d=a.children,e=a.isRound,g=a["aria-label"],h=ag(a,au),i=c||d,j=f.isValidElement(i)?f.cloneElement(i,{"aria-hidden":!0,focusable:!1}):null;return f.createElement(as,ah({padding:"0",borderRadius:e?"full":void 0,ref:b,"aria-label":g},h),j)});function aw(){var a=d(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return aw=function(){return a},a}function ax(){var a=d(["\n  width: 70vw;\n  height: 80vh;\n  border: 1px solid black;\n"]);return ax=function(){return a},a}j.Ts&&(av.displayName="IconButton");var ay=g.Z.div(aw()),az=g.Z.div(ax()),aA=function(){var a=(0,f.useState)(""),b=a[0],c=a[1],d=(0,f.useCallback)(function(a){c(a.target.value)},[]);return(0,e.jsx)(ay,{children:(0,e.jsxs)(az,{children:[(0,e.jsx)(M,{value:b,onChange:d}),(0,e.jsx)(as,{children:"작성완료"})]})})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=3484)}),_N_E=a.O()}])