"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2360,2167],{6069:function(t,r,n){n.d(r,{RX:function(){return i},dh:function(){return e},tO:function(){return o},zZ:function(){return p}});var a=n(3070),o=function(t,r){if(r){for(var n=(r=(r=r.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,o=n.length;a<o;++a){var e=n[a];if(!(e in t))return;t=t[e]}return t}},e=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(t),a=n.getFullYear(),o=n.getMonth()+1,e=n.getDate(),i=n.getHours(),p=n.getMinutes();return e=e<10?"0"+e:e,o=o<10?"0"+o:o,i=i<10?"0"+i:i,p=p<10?"0"+p:p,r?"".concat(e,"/").concat(o,"/").concat(a," - ").concat(i,":").concat(p):"".concat(e,"/").concat(o,"/").concat(a)},i=function(t,r,n){switch(t){case a.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"T\u1ed5ng ti\u1ec1n"};case a.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"bao",type:"S\u1ed1 l\u01b0\u1ee3ng"};case a.rh.WEIGHT_ACHIEVE_TYPE:return{unit:"".concat(r).concat(n),type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},p=function(t,r){return isNaN(r)?t:"string"===typeof t?t.split(" ").slice(0,parseInt(r,10)).join(" "):t}},2206:function(t,r,n){n.d(r,{d0:function(){return e}});var a=n(4942),o=n(2982);function e(t,r,n){var e=r[t],i=e.edges,p=e.pageInfo;return i.length?(0,a.Z)({},t,{__typename:n[t].__typename,edges:[].concat((0,o.Z)(n[t].edges),(0,o.Z)(i)),pageInfo:p}):n}},2669:function(t,r,n){n.d(r,{Z:function(){return b}});var a=n(3366),o=n(7462),e=n(7313),i=n(3061),p=n(9028),c=n(1921),u=n(6749),g=n(3729),s=n(8170),h=n(7430),l=n(2298);function f(t){return(0,l.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(6417),y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var n=t.ownerState;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r["align".concat((0,s.Z)(n.align))],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((function(t){var r=t.theme,n=t.ownerState;return(0,o.Z)({margin:0},n.variant&&r.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e.forwardRef((function(t,r){var n=(0,g.Z)({props:t,name:"MuiTypography"}),e=function(t){return Z[t]||t}(n.color),u=(0,p.Z)((0,o.Z)({},n,{color:e})),h=u.align,l=void 0===h?"inherit":h,b=u.className,w=u.component,E=u.gutterBottom,P=void 0!==E&&E,_=u.noWrap,B=void 0!==_&&_,T=u.paragraph,x=void 0!==T&&T,M=u.variant,W=void 0===M?"body1":M,I=u.variantMapping,N=void 0===I?d:I,A=(0,a.Z)(u,y),C=(0,o.Z)({},u,{align:l,color:e,className:b,component:w,gutterBottom:P,noWrap:B,paragraph:x,variant:W,variantMapping:N}),S=w||(x?"p":N[W]||d[W])||"span",Y=function(t){var r=t.align,n=t.gutterBottom,a=t.noWrap,o=t.paragraph,e=t.variant,i=t.classes,p={root:["root",e,"inherit"!==t.align&&"align".concat((0,s.Z)(r)),n&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,c.Z)(p,f,i)}(C);return(0,v.jsx)(m,(0,o.Z)({as:S,ref:r,ownerState:C,className:(0,i.Z)(Y.root,b)},A))}))},9028:function(t,r,n){n.d(r,{Z:function(){return u}});var a=n(2982),o=n(7462),e=n(3366),i=n(3019),p=n(3103),c=["sx"];function u(t){var r,n=t.sx,u=function(t){var r={systemProps:{},otherProps:{}};return Object.keys(t).forEach((function(n){p.Gc[n]?r.systemProps[n]=t[n]:r.otherProps[n]=t[n]})),r}((0,e.Z)(t,c)),g=u.systemProps,s=u.otherProps;return r=Array.isArray(n)?[g].concat((0,a.Z)(n)):"function"===typeof n?function(){var t=n.apply(void 0,arguments);return(0,i.P)(t)?(0,o.Z)({},g,t):g}:(0,o.Z)({},g,n),(0,o.Z)({},s,{sx:r})}}}]);