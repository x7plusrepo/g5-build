"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8322,5987],{6881:function(t,n,a){var e=a(2163);n.Z=function(t){if(Array.isArray(t)){var n,a=t||[],o=e.t.getState().commonReducer,r=o&&(null===(n=o.activeLanguage)||void 0===n?void 0:n.locale)||"vi";return(a.find((function(t){return t&&t.locale===r}))||{}).showText||""}return""}},6069:function(t,n,a){a.d(n,{Bu:function(){return b},RX:function(){return l},_O:function(){return m},dh:function(){return u},hz:function(){return i},mr:function(){return h},tO:function(){return c},xE:function(){return g},zZ:function(){return f}});var e=a(2982),o=a(1237),r=a(3070),c=function(t,n){if(n){for(var a=(n=(n=n.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),e=0,o=a.length;e<o;++e){var r=a[e];if(!(r in t))return;t=t[r]}return t}},u=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(t),e=a.getFullYear(),o=a.getMonth()+1,r=a.getDate(),c=a.getHours(),u=a.getMinutes();return r=r<10?"0"+r:r,o=o<10?"0"+o:o,c=c<10?"0"+c:c,u=u<10?"0"+u:u,n?"".concat(r,"/").concat(o,"/").concat(e," - ").concat(c,":").concat(u):"".concat(r,"/").concat(o,"/").concat(e)},i=function(t){var n=t.isoString,a=t.includeTime,e=new Date(n),o=e.getFullYear(),r=e.getMonth()+1,c=e.getDate(),u=e.getHours(),i=e.getMinutes();return c=c<10?"0"+c:c,r=r<10?"0"+r:r,u=u<10?"0"+u:u,i=i<10?"0"+i:i,a?"".concat(o,"-").concat(r,"-").concat(c,"T").concat(u,":").concat(i):"".concat(o,"-").concat(r,"-").concat(c)},l=function(t,n,a){switch(t){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:a,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},f=function(t,n){return isNaN(n)?t:"string"===typeof t?t.split(" ").slice(0,parseInt(n,10)).join(" "):t},g=function(t){var n=(t||{}).getTimeTogether,a=new Date,e=function(){var t=a.getHours();return t>9?t:"0".concat(t)}(),o=function(){var t=a.getMinutes();return t>9?t:"0".concat(t)}(),r=function(){var t=a.getDate();return t>9?t:"0".concat(t)}(),c=function(){var t=a.getMonth()+1;return t>9?t:"0".concat(t)}(),u=a.getFullYear(),i="".concat(u,"-").concat(c,"-").concat(r),l="".concat(u,"-").concat(c,"-").concat(r,"T").concat(e,":").concat(o);return n?l:i},h=function(){for(var t="#",n=0;n<6;n++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},d=function(t){var n=1,a="";return t===r.mZ.G&&(n=.001,a="kg"),t===r.mZ.KG&&(n=.001,a="t\u1ea5n"),t===r.mZ.ML&&(n=.001,a="l\xedt"),t===r.mZ.MG&&(n=1e-6,a="kg"),{weightCoefficient:n,weightShowUnit:a}},b=function(t){for(var n=t.chartData,a=void 0===n?[]:n,r=t.startOfTimeRange,c=(a&&a[0]||{}).unitString,u=d(void 0===c?"":c),i=u.weightCoefficient,l=u.weightShowUnit,f=new Date(r),g=f.getFullYear(),h=f.getMonth(),b=[],m=[],s=[],Z=[],y=function(t){var n=a[t],o=n._id,r=n.totalMoney,c=n.totalQuantity,u=n.totalWeight,i=o||{},l=i.orderYear,f=i.orderMonth,d=i.productCode,y=i.productCategories,v=i.customerInfo,p=i.staffInfo,C=i.managerInfo,M=(v||{}).fullName,w=(p||{}).fullName,N=(C||{}).fullName,T=d||y||M||w||N||"";-1===b.findIndex((function(t){return t===T}))&&(b=[].concat((0,e.Z)(b),[T]));var k={totalMoney:r,totalQuantity:c,totalWeight:u,label:T};l===g?f===h?m=[].concat((0,e.Z)(m),[k]):s=[].concat((0,e.Z)(s),[k]):0===h&&11===f?s=[].concat((0,e.Z)(s),[k]):Z=[].concat((0,e.Z)(Z),[k])},v=0;v<a.length;v++)y(v);for(var p=[],C=[],M=[],w=[],N=[],T=[],k=[],I=[],_=[],D=function(t){var n=b[t],a=m.find((function(t){return t.label===n})),o=s.find((function(t){return t.label===n})),r=Z.find((function(t){return t.label===n})),c=a||{},u=c.totalMoney,l=c.totalQuantity,f=c.totalWeight,g=o||{},h=g.totalMoney,d=g.totalQuantity,y=g.totalWeight,v=r||{},D=v.totalMoney,E=v.totalQuantity,S=v.totalWeight;p=[].concat((0,e.Z)(p),[u/1e6||0]),C=[].concat((0,e.Z)(C),[l||0]),M=[].concat((0,e.Z)(M),[f*i||0]),w=[].concat((0,e.Z)(w),[h/1e6||0]),N=[].concat((0,e.Z)(N),[d/1e6||0]),T=[].concat((0,e.Z)(T),[y*i||0]),k=[].concat((0,e.Z)(k),[D/1e6||0]),I=[].concat((0,e.Z)(I),[E||0]),_=[].concat((0,e.Z)(_),[S*i||0])},E=0;E<b.length;E++)D(E);var S=function(){var t=h+1;return t>9?t:"0".concat(t)}(),Y=0===h?"Th\xe1ng 12 - N\u0103m "+(g-1):"Th\xe1ng "+(h>9?h:"0".concat(h))+" - N\u0103m "+g,W=function(){var t=0;return p.forEach((function(n){return t+=n})),t.toLocaleString()}(),P=function(){var t=0;return M.forEach((function(n){return t+=n})),t.toLocaleString()}(),O=[{label:"Th\xe1ng "+S+" - N\u0103m "+g,data:p,backgroundColor:o.Z.rgbaPrimary},{label:Y,data:w,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+S+" - N\u0103m "+(g-1),data:k,backgroundColor:o.Z.purple}],G=[{label:"Th\xe1ng "+S+" - N\u0103m "+g,data:C,backgroundColor:o.Z.rgbaPrimary},{label:Y,data:N,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+S+" - N\u0103m "+(g-1),data:I,backgroundColor:o.Z.purple}],Q=[{label:"Th\xe1ng "+S+" - N\u0103m "+g,data:M,backgroundColor:o.Z.rgbaPrimary},{label:Y,data:T,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+S+" - N\u0103m "+(g-1),data:_,backgroundColor:o.Z.purple}];return{monthWeightShowUnit:l,totalMonthMoney:W,totalMonthWeight:P,chartLabels:b,moneyDatasets:O,quantityDatasets:G,weightDatasets:Q}},m=function(t){for(var n=t.chartData,a=t.startOfTimeRange,r=(n&&n[0]||{}).unitString,c=d(void 0===r?"":r),u=c.weightCoefficient,i=c.weightShowUnit,l=a?new Date(a).getFullYear():(new Date).getFullYear(),f=[],g=[],h=[],b=function(t){var a=n[t],o=a._id,r=a.totalMoney,c=a.totalQuantity,u=a.totalWeight,i=o||{},d=i.orderYear,b=i.productCode,m=i.customerInfo,s=i.staffInfo,Z=i.managerInfo,y=(m||{}).fullName,v=(s||{}).fullName,p=(Z||{}).fullName,C=b||y||v||p||"";-1===f.findIndex((function(t){return t===C}))&&(f=[].concat((0,e.Z)(f),[C]));var M={totalMoney:r,totalQuantity:c,totalWeight:u,label:C};d===l?g=[].concat((0,e.Z)(g),[M]):h=[].concat((0,e.Z)(h),[M])},m=0;m<n.length;m++)b(m);for(var s=[],Z=[],y=[],v=[],p=[],C=[],M=function(t){var n=f[t],a=g.find((function(t){return t.label===n})),o=h.find((function(t){return t.label===n})),r=a||{},c=r.totalMoney,i=r.totalQuantity,l=r.totalWeight,d=o||{},b=d.totalMoney,m=d.totalQuantity,M=d.totalWeight;s=[].concat((0,e.Z)(s),[c/1e6||0]),Z=[].concat((0,e.Z)(Z),[i||0]),y=[].concat((0,e.Z)(y),[l*u||0]),v=[].concat((0,e.Z)(v),[b/1e6||0]),p=[].concat((0,e.Z)(p),[m||0]),C=[].concat((0,e.Z)(C),[M*u||0])},w=0;w<f.length;w++)M(w);var N=function(){var t=0;return s.forEach((function(n){return t+=n})),t.toLocaleString()}(),T=function(){var t=0;return y.forEach((function(n){return t+=n})),t.toLocaleString()}(),k=[{label:"N\u0103m "+l,data:s,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:v,backgroundColor:o.Z.chartGreen}],I=[{label:"N\u0103m "+l,data:Z,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:p,backgroundColor:o.Z.chartGreen}],_=[{label:"N\u0103m "+l,data:y,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:C,backgroundColor:o.Z.chartGreen}];return{yearWeightShowUnit:i,totalYearMoney:N,totalYearWeight:T,chartLabels:f,moneyDatasets:k,quantityDatasets:I,weightDatasets:_}}},2206:function(t,n,a){a.d(n,{FM:function(){return c},d0:function(){return r}});var e=a(4942),o=a(2982);function r(t,n,a){var r=n[t],c=r.edges,u=r.pageInfo;return c.length?(0,e.Z)({},t,{__typename:a[t].__typename,edges:[].concat((0,o.Z)(a[t].edges),(0,o.Z)(c)),pageInfo:u}):a}function c(t,n,a,r,c,u,i){var l=r[t],f=l.edges,g=l.pageInfo,h=[],d=!1;if(a.data){var b=a.data[n],m={node:b},s=!c||c(b);d=s,s&&(h=i?i(f,b):u?[m].concat((0,o.Z)(f)):[].concat((0,o.Z)(f),[m]))}return d?(0,e.Z)({},t,{__typename:r[t].__typename,edges:h,pageInfo:g}):r}},5987:function(t,n,a){a.d(n,{Z:function(){return o}});var e=a(3366);function o(t,n){if(null==t)return{};var a,o,r=(0,e.Z)(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)a=c[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}}}]);