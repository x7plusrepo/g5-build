"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8762],{1677:function(n,t,r){r.d(t,{Z:function(){return g}});var a,o=r(1413),e=(r(7313),r(168)),c=r(3115),i=r(1237),u=c.ZP.button(a||(a=(0,e.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:i.Z.primary})),l=r(6417),f=function(n){var t=n.label;return(0,l.jsx)(u,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};f.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var g=f},2262:function(n,t,r){r.d(t,{Z:function(){return g}});var a,o=r(1413),e=(r(7313),r(168)),c=r(3115),i=r(1237),u=c.ZP.button(a||(a=(0,e.Z)(["\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 5px;\n  height: fit-content;\n  color: ",";\n  margin: ",";\n  padding: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),i.Z.black,(function(n){return n.margin}),(function(n){return n.padding}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:i.Z.secondary})),l=r(6417),f=function(n){var t=n.label;return(0,l.jsx)(u,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};f.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){},margin:"5px",padding:"3px 7px"};var g=f},3354:function(n,t,r){r.d(t,{Z:function(){return u}});var a,o=r(1413),e=(r(7313),r(168)),c=r(3115).ZP.div(a||(a=(0,e.Z)(["\n  width: 100%;\n  margin: 10px 0;\n  background-color: #fff;\n  padding: 20px 10px 20px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),i=r(6417),u=function(n){var t=n.children;return(0,i.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:t}))}},6947:function(n,t,r){r.d(t,{Z:function(){return d}});r(7313);var a,o,e=r(168),c=r(3115),i=c.ZP.div(a||(a=(0,e.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),u=c.ZP.p(o||(o=(0,e.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),l=r(3070),f=r(6417),g=function(n){var t=n.isError,r=n.errorMessage,a=t?"translateY(0)":"translateY(110%)";return(0,f.jsx)(i,{children:(0,f.jsx)(u,{isError:t,textTransform:a,children:r})})};g.defaultProps={isError:!1,errorMessage:l.ug.REQUIRED};var d=g},6069:function(n,t,r){r.d(t,{Bu:function(){return p},EJ:function(){return b},RX:function(){return l},_O:function(){return s},dh:function(){return i},hz:function(){return u},mr:function(){return d},tO:function(){return c},xE:function(){return g},zZ:function(){return f}});var a=r(2982),o=r(1237),e=r(3070),c=function(n,t){if(t){for(var r=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,o=r.length;a<o;++a){var e=r[a];if(!(e in n))return;n=n[e]}return n}},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Date(n),a=r.getFullYear(),o=r.getMonth()+1,e=r.getDate(),c=r.getHours(),i=r.getMinutes();return e=e<10?"0"+e:e,o=o<10?"0"+o:o,c=c<10?"0"+c:c,i=i<10?"0"+i:i,t?"".concat(e,"/").concat(o,"/").concat(a," - ").concat(c,":").concat(i):"".concat(e,"/").concat(o,"/").concat(a)},u=function(n){var t=n.isoString,r=n.includeTime,a=new Date(t),o=a.getFullYear(),e=a.getMonth()+1,c=a.getDate(),i=a.getHours(),u=a.getMinutes();return c=c<10?"0"+c:c,e=e<10?"0"+e:e,i=i<10?"0"+i:i,u=u<10?"0"+u:u,r?"".concat(o,"-").concat(e,"-").concat(c,"T").concat(i,":").concat(u):"".concat(o,"-").concat(e,"-").concat(c)},l=function(n,t,r){switch(n){case e.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case e.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case e.rh.WEIGHT_ACHIEVE_TYPE:return{unit:r,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},f=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n},g=function(n){var t=(n||{}).getTimeTogether,r=new Date,a=function(){var n=r.getHours();return n>9?n:"0".concat(n)}(),o=function(){var n=r.getMinutes();return n>9?n:"0".concat(n)}(),e=function(){var n=r.getDate();return n>9?n:"0".concat(n)}(),c=function(){var n=r.getMonth()+1;return n>9?n:"0".concat(n)}(),i=r.getFullYear(),u="".concat(i,"-").concat(c,"-").concat(e),l="".concat(i,"-").concat(c,"-").concat(e,"T").concat(a,":").concat(o);return t?l:u},d=function(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},h=function(n){var t=1,r="";return n===e.mZ.G&&(t=.001,r="kg"),n===e.mZ.KG&&(t=.001,r="t\u1ea5n"),n===e.mZ.ML&&(t=.001,r="l\xedt"),n===e.mZ.MG&&(t=1e-6,r="kg"),{weightCoefficient:t,weightShowUnit:r}},p=function(n){for(var t=n.chartData,r=void 0===t?[]:t,e=n.startOfTimeRange,c=(r&&r[0]||{}).unitString,i=h(void 0===c?"":c),u=i.weightCoefficient,l=i.weightShowUnit,f=new Date(e),g=f.getFullYear(),d=f.getMonth(),p=[],s=[],b=[],Z=[],m=function(n){var t=r[n],o=t._id,e=t.totalMoney,c=t.totalQuantity,i=t.totalWeight,u=o||{},l=u.orderYear,f=u.orderMonth,h=u.productCode,m=u.productCategories,v=u.customerInfo,x=u.staffInfo,y=u.managerInfo,C=(v||{}).fullName,w=(x||{}).fullName,M=(y||{}).fullName,k=h||m||C||w||M||"";-1===p.findIndex((function(n){return n===k}))&&(p=[].concat((0,a.Z)(p),[k]));var N={totalMoney:e,totalQuantity:c,totalWeight:i,label:k};l===g?f===d?s=[].concat((0,a.Z)(s),[N]):b=[].concat((0,a.Z)(b),[N]):0===d&&11===f?b=[].concat((0,a.Z)(b),[N]):Z=[].concat((0,a.Z)(Z),[N])},v=0;v<r.length;v++)m(v);for(var x=[],y=[],C=[],w=[],M=[],k=[],N=[],E=[],T=[],_=function(n){var t=p[n],r=s.find((function(n){return n.label===t})),o=b.find((function(n){return n.label===t})),e=Z.find((function(n){return n.label===t})),c=r||{},i=c.totalMoney,l=c.totalQuantity,f=c.totalWeight,g=o||{},d=g.totalMoney,h=g.totalQuantity,m=g.totalWeight,v=e||{},_=v.totalMoney,D=v.totalQuantity,I=v.totalWeight;x=[].concat((0,a.Z)(x),[i/1e6||0]),y=[].concat((0,a.Z)(y),[l||0]),C=[].concat((0,a.Z)(C),[f*u||0]),w=[].concat((0,a.Z)(w),[d/1e6||0]),M=[].concat((0,a.Z)(M),[h/1e6||0]),k=[].concat((0,a.Z)(k),[m*u||0]),N=[].concat((0,a.Z)(N),[_/1e6||0]),E=[].concat((0,a.Z)(E),[D||0]),T=[].concat((0,a.Z)(T),[I*u||0])},D=0;D<p.length;D++)_(D);var I=function(){var n=d+1;return n>9?n:"0".concat(n)}(),P=0===d?"Th\xe1ng 12 - N\u0103m "+(g-1):"Th\xe1ng "+(d>9?d:"0".concat(d))+" - N\u0103m "+g,Y=function(){var n=0;return x.forEach((function(t){return n+=t})),n.toLocaleString()}(),S=function(){var n=0;return C.forEach((function(t){return n+=t})),n.toLocaleString()}(),W=[{label:"Th\xe1ng "+I+" - N\u0103m "+g,data:x,backgroundColor:o.Z.rgbaPrimary},{label:P,data:w,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(g-1),data:N,backgroundColor:o.Z.purple}],Q=[{label:"Th\xe1ng "+I+" - N\u0103m "+g,data:y,backgroundColor:o.Z.rgbaPrimary},{label:P,data:M,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(g-1),data:E,backgroundColor:o.Z.purple}],G=[{label:"Th\xe1ng "+I+" - N\u0103m "+g,data:C,backgroundColor:o.Z.rgbaPrimary},{label:P,data:k,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(g-1),data:T,backgroundColor:o.Z.purple}];return{monthWeightShowUnit:l,totalMonthMoney:Y,totalMonthWeight:S,chartLabels:p,moneyDatasets:W,quantityDatasets:Q,weightDatasets:G}},s=function(n){for(var t=n.chartData,r=n.startOfTimeRange,e=(t&&t[0]||{}).unitString,c=h(void 0===e?"":e),i=c.weightCoefficient,u=c.weightShowUnit,l=r?new Date(r).getFullYear():(new Date).getFullYear(),f=[],g=[],d=[],p=function(n){var r=t[n],o=r._id,e=r.totalMoney,c=r.totalQuantity,i=r.totalWeight,u=o||{},h=u.orderYear,p=u.productCode,s=u.customerInfo,b=u.staffInfo,Z=u.managerInfo,m=(s||{}).fullName,v=(b||{}).fullName,x=(Z||{}).fullName,y=p||m||v||x||"";-1===f.findIndex((function(n){return n===y}))&&(f=[].concat((0,a.Z)(f),[y]));var C={totalMoney:e,totalQuantity:c,totalWeight:i,label:y};h===l?g=[].concat((0,a.Z)(g),[C]):d=[].concat((0,a.Z)(d),[C])},s=0;s<t.length;s++)p(s);for(var b=[],Z=[],m=[],v=[],x=[],y=[],C=function(n){var t=f[n],r=g.find((function(n){return n.label===t})),o=d.find((function(n){return n.label===t})),e=r||{},c=e.totalMoney,u=e.totalQuantity,l=e.totalWeight,h=o||{},p=h.totalMoney,s=h.totalQuantity,C=h.totalWeight;b=[].concat((0,a.Z)(b),[c/1e6||0]),Z=[].concat((0,a.Z)(Z),[u||0]),m=[].concat((0,a.Z)(m),[l*i||0]),v=[].concat((0,a.Z)(v),[p/1e6||0]),x=[].concat((0,a.Z)(x),[s||0]),y=[].concat((0,a.Z)(y),[C*i||0])},w=0;w<f.length;w++)C(w);var M=function(){var n=0;return b.forEach((function(t){return n+=t})),n.toLocaleString()}(),k=function(){var n=0;return m.forEach((function(t){return n+=t})),n.toLocaleString()}(),N=[{label:"N\u0103m "+l,data:b,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:v,backgroundColor:o.Z.chartGreen}],E=[{label:"N\u0103m "+l,data:Z,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:x,backgroundColor:o.Z.chartGreen}],T=[{label:"N\u0103m "+l,data:m,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:y,backgroundColor:o.Z.chartGreen}];return{yearWeightShowUnit:u,totalYearMoney:M,totalYearWeight:k,chartLabels:f,moneyDatasets:N,quantityDatasets:E,weightDatasets:T}},b=function(n){for(var t=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=window.atob(t),a=new Uint8Array(r.length),o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}},2206:function(n,t,r){r.d(t,{FM:function(){return c},d0:function(){return e}});var a=r(4942),o=r(2982);function e(n,t,r){var e=t[n],c=e.edges,i=e.pageInfo;return c.length?(0,a.Z)({},n,{__typename:r[n].__typename,edges:[].concat((0,o.Z)(r[n].edges),(0,o.Z)(c)),pageInfo:i}):r}function c(n,t,r,e,c,i,u){var l=e[n],f=l.edges,g=l.pageInfo,d=[],h=!1;if(r.data){var p=r.data[t],s={node:p},b=!c||c(p);h=b,b&&(d=u?u(f,p):i?[s].concat((0,o.Z)(f)):[].concat((0,o.Z)(f),[s]))}return h?(0,a.Z)({},n,{__typename:e[n].__typename,edges:d,pageInfo:g}):e}}}]);