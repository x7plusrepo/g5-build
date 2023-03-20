"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2880],{2247:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var o,a,r,c,i,l,u,d,s,f,g,p,h,x,Z,m,v=e(885),b=e(1413),y=e(2982),C=e(7313),T=e(3222),j=e(2668),S=e(6881),M=e(9829),P=e(6580),k=e(6173),w=e(168),E=e(3115),I=e(1237),_=E.ZP.div(o||(o=(0,w.Z)(["\n  font-size: 12px;\n  padding: 5px 0 0;\n"]))),N=E.ZP.div(a||(a=(0,w.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),Y=E.ZP.div(r||(r=(0,w.Z)([""]))),D=(E.ZP.div(c||(c=(0,w.Z)(["\n  text-align: right;\n"]))),E.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),I.Z.primary),E.ZP.div(l||(l=(0,w.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),E.ZP.div(u||(u=(0,w.Z)(["\n  margin: 20px 10px;\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),E.ZP.div(d||(d=(0,w.Z)([""]))),E.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n"])))),F=E.ZP.div(f||(f=(0,w.Z)(["\n  text-align: center;\n"]))),O=(E.ZP.div(g||(g=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),E.ZP.p(p||(p=(0,w.Z)(["\n  padding: 0;\n  margin: 5px 0;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 5px;\n  color: ",";\n"])),I.Z.primary)),L=E.ZP.span(h||(h=(0,w.Z)(["\n  font-weight: 500;\n  font-style: italic;\n  color: ",";\n"])),I.Z.secondary),V=(E.ZP.div(x||(x=(0,w.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),E.ZP.div(Z||(Z=(0,w.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),E.ZP.span(m||(m=(0,w.Z)(["\n  margin: 5px;\n  font-size: 12px;\n"]))),e(7123)),A=e(3070),G=e(2153),W=e(6417),K=(0,C.lazy)((function(){return e.e(6260).then(e.bind(e,6260))})),R=function(n){var t=n.statisticalData,e=void 0===t?[]:t,o=n.setStatisticalInfo,a=(0,T.I0)(),r=e.find((function(n){return n._id.paymentTypeCode===A.ad.TAX_OFFSET})),c=e.find((function(n){return n._id.paymentTypeCode===A.ad.MONEY_TYPE})),i=e.find((function(n){return n._id.paymentTypeCode===A.ad.GIFT_TYPE})),l=e.find((function(n){return n._id.paymentTypeCode===A.ad.PRODUCT_TYPE})),u=r&&r.totalBePaidMoneyValue||0,d=c&&c.totalBePaidMoneyValue||0,s=i&&i.totalBePaidMoneyValue||0,f=l&&l.totalBePaidMoneyValue||0,g=u+d+s+f,p=function(){for(var n=(i||{}).promotionGifts,t=void 0===n?[]:n,e=[],o=function(n){var o=t[n],a=o.description,r=o.moneyValue,c=e.findIndex((function(n){return n.description===a}));if(-1===c)e=[].concat((0,y.Z)(e),[(0,b.Z)((0,b.Z)({},o),{},{totalMoneyValue:r,count:1})]);else{var i=e[c],l=i.count,u=i.totalMoneyValue;e[c].count=l+1,e[c].totalMoneyValue=u+r}},a=0;a<t.length;a++)o(a);return e}(),h=function(){for(var n=(l||{}).promotionProducts,t=(void 0===n?[]:n).flat(),e=[],o=function(n){var o=t[n],a=o.code,r=e.findIndex((function(n){return n.code===a}));if(-1===r)e=[].concat((0,y.Z)(e),[(0,b.Z)((0,b.Z)({},o),{},{count:1})]);else{var c=e[r].count;e[r].count=c+1}},a=0;a<t.length;a++)o(a);return e}();W.Fragment,p.map((function(n,t){return(0,W.jsxs)(D,{children:[(0,W.jsxs)("p",{children:["\u2002+ ",n.description," ",n.count," x"," ",n.moneyValue.toLocaleString()]}),(0,W.jsxs)("p",{children:[n.totalMoneyValue.toLocaleString()," \u0111"]})]},t)})),W.Fragment,h.map((function(n,t){var e;return(0,W.jsxs)(D,{children:[(0,W.jsxs)("p",{children:["\u2002+ ",(0,S.Z)(null===(e=n.productInfo)||void 0===e?void 0:e.name)," ",n.count," x"," ",n.price.toLocaleString()," \u0111"]}),(0,W.jsxs)("p",{children:[(n.price*n.count).toLocaleString()," \u0111"]})]},t)}));return(0,C.useEffect)((function(){o({subTotalTaxOffsetMoneyValue:u,subTotalCashMoneyValue:d,subTotalGiftMoneyValue:s,subTotalProducMoneyValue:f,totalMoneyValue:g})}),[e]),(0,W.jsxs)(N,{children:[(0,W.jsxs)(D,{children:[(0,W.jsx)("p",{children:"T\u1ed5ng gi\xe1 tr\u1ecb"}),(0,W.jsxs)(O,{children:[g.toLocaleString()," ",(0,W.jsx)(L,{children:"\u0111"})]})]}),(0,W.jsxs)(D,{children:[(0,W.jsxs)(F,{children:[(0,W.jsx)("p",{children:"Ti\u1ec1n m\u1eb7t"}),(0,W.jsxs)(O,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM ti\u1ec1n m\u1eb7t",children:(0,W.jsx)(C.Suspense,{fallback:(0,W.jsx)(k.default,{}),children:(0,W.jsx)(K,{paymentTypeCode:A.ad.MONEY_TYPE})})};a((0,G.dn)(n))},children:[d.toLocaleString()," ",(0,W.jsx)(L,{children:"\u0111"})]})]}),(0,W.jsxs)(F,{children:[(0,W.jsx)("p",{children:"Hi\u1ec7n v\u1eadt"}),(0,W.jsxs)(O,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,W.jsx)(C.Suspense,{fallback:(0,W.jsx)(k.default,{}),children:(0,W.jsx)(K,{paymentTypeCode:A.ad.GIFT_TYPE})})};a((0,G.dn)(n))},children:[s.toLocaleString()," ",(0,W.jsx)(L,{children:"\u0111"})]})]}),(0,W.jsxs)(F,{children:[(0,W.jsx)("p",{children:"S\u1ea3n ph\u1ea9m t\u1eb7ng"}),(0,W.jsxs)(O,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,W.jsx)(C.Suspense,{fallback:(0,W.jsx)(k.default,{}),children:(0,W.jsx)(K,{paymentTypeCode:A.ad.PRODUCT_TYPE})})};a((0,G.dn)(n))},children:[f.toLocaleString()," ",(0,W.jsx)(L,{children:"\u0111"})]})]}),(0,W.jsxs)(F,{children:[(0,W.jsx)("p",{children:"C\u1ea5n tr\u1eeb thu\u1ebf"}),(0,W.jsxs)(O,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,W.jsx)(C.Suspense,{fallback:(0,W.jsx)(k.default,{}),children:(0,W.jsx)(K,{paymentTypeCode:A.ad.TAX_OFFSET})})};a((0,G.dn)(n))},children:[u.toLocaleString()," ",(0,W.jsx)(L,{children:"\u0111"})]})]})]})]})},U=function(n){var t=(0,T.I0)(),e=(0,T.v9)((function(n){return n.authReducer})).viewerQuery||{},o=e._id,a=e.roles,r=e.fatherChildrenAccountIds,c=a.includes(A.If.CUSTOMER)||a.includes(A.If.STAFF_OF_CUSTOMER),i=a.includes(A.If.STAFF_OF_CUSTOMER)?r[0]:c?o:void 0,l=(0,C.useState)("2012/01/01"),u=(0,v.Z)(l,2),d=u[0],s=u[1],f=(0,C.useState)("2100/01/01"),g=(0,v.Z)(f,2),p=g[0],h=g[1],x=(0,C.useState)(i),Z=(0,v.Z)(x,2),m=Z[0],b=Z[1],y=(0,C.useState)({}),S=(0,v.Z)(y,2),w=S[0],E=S[1],I=(0,C.useState)({}),N=(0,v.Z)(I,2),D=N[0],F=N[1],O=(0,C.useState)(void 0),L=(0,v.Z)(O,2),U=L[0],B=L[1],Q={customerAccountId:m},H=(0,j.a)(V.Kw,{variables:{filter:Q},fetchPolicy:"cache-and-network"}).data,z=H&&H.discountPromotionStatistical||[],X=function(n){var e={title:"B\xe1o c\xe1o CK/KM c\u1ee7a kh\xe1ch h\xe0ng",children:(0,W.jsx)(C.Suspense,{fallback:(0,W.jsx)(k.default,{}),children:(0,W.jsx)(K,{initCustomerAccount:n})})};t((0,G.dn)(e))},q=m?(0,W.jsx)(K,{endOfTimeRange:p,statisticalInfo:D,setPrintSection:B,selectedCustomer:w,startOfTimeRange:d,customerAccountId:m}):(0,W.jsx)(P.Z,{onClickCustomerItem:X});return(0,W.jsx)(_,{children:(0,W.jsxs)(Y,{children:[(0,W.jsx)(M.Z,{canSearchCustomer:!0,searchPlaceholder:"T\u1ea5t c\u1ea3",printSection:U,inputEndTime:p,inputStartTime:d,setInputEndTime:h,setInputStartTime:s,onClickSelectResultItem:function(n){var t=(n&&n.node)._id;b(t),s("2012/01/01"),h("2100/01/01"),E(n&&n.node)}}),(0,W.jsx)(R,{statisticalData:z,setStatisticalInfo:F}),q]})})}},6881:function(n,t,e){var o=e(2163);t.Z=function(n){if(Array.isArray(n)){var t,e=n||[],a=o.t.getState().commonReducer,r=a&&(null===(t=a.activeLanguage)||void 0===t?void 0:t.locale)||"vi";return(e.find((function(n){return n&&n.locale===r}))||{}).showText||""}return""}},6069:function(n,t,e){e.d(t,{Bu:function(){return p},EJ:function(){return x},RX:function(){return u},_O:function(){return h},dh:function(){return i},hz:function(){return l},mr:function(){return f},tO:function(){return c},xE:function(){return s},zZ:function(){return d}});var o=e(2982),a=e(1237),r=e(3070),c=function(n,t){if(t){for(var e=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,a=e.length;o<a;++o){var r=e[o];if(!(r in n))return;n=n[r]}return n}},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),o=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),c=e.getHours(),i=e.getMinutes();return r=r<10?"0"+r:r,a=a<10?"0"+a:a,c=c<10?"0"+c:c,i=i<10?"0"+i:i,t?"".concat(r,"/").concat(a,"/").concat(o," - ").concat(c,":").concat(i):"".concat(r,"/").concat(a,"/").concat(o)},l=function(n){var t=n.isoString,e=n.includeTime,o=new Date(t),a=o.getFullYear(),r=o.getMonth()+1,c=o.getDate(),i=o.getHours(),l=o.getMinutes();return c=c<10?"0"+c:c,r=r<10?"0"+r:r,i=i<10?"0"+i:i,l=l<10?"0"+l:l,e?"".concat(a,"-").concat(r,"-").concat(c,"T").concat(i,":").concat(l):"".concat(a,"-").concat(r,"-").concat(c)},u=function(n,t,e){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:e,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},d=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n},s=function(n){var t=(n||{}).getTimeTogether,e=new Date,o=function(){var n=e.getHours();return n>9?n:"0".concat(n)}(),a=function(){var n=e.getMinutes();return n>9?n:"0".concat(n)}(),r=function(){var n=e.getDate();return n>9?n:"0".concat(n)}(),c=function(){var n=e.getMonth()+1;return n>9?n:"0".concat(n)}(),i=e.getFullYear(),l="".concat(i,"-").concat(c,"-").concat(r),u="".concat(i,"-").concat(c,"-").concat(r,"T").concat(o,":").concat(a);return t?u:l},f=function(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},g=function(n){var t=1,e="";return n===r.mZ.G&&(t=.001,e="kg"),n===r.mZ.KG&&(t=.001,e="t\u1ea5n"),n===r.mZ.ML&&(t=.001,e="l\xedt"),n===r.mZ.MG&&(t=1e-6,e="kg"),{weightCoefficient:t,weightShowUnit:e}},p=function(n){for(var t=n.chartData,e=void 0===t?[]:t,r=n.startOfTimeRange,c=(e&&e[0]||{}).unitString,i=g(void 0===c?"":c),l=i.weightCoefficient,u=i.weightShowUnit,d=new Date(r),s=d.getFullYear(),f=d.getMonth(),p=[],h=[],x=[],Z=[],m=function(n){var t=e[n],a=t._id,r=t.totalMoney,c=t.totalQuantity,i=t.totalWeight,l=a||{},u=l.orderYear,d=l.orderMonth,g=l.productCode,m=l.productCategories,v=l.customerInfo,b=l.staffInfo,y=l.managerInfo,C=(v||{}).fullName,T=(b||{}).fullName,j=(y||{}).fullName,S=g||m||C||T||j||"";-1===p.findIndex((function(n){return n===S}))&&(p=[].concat((0,o.Z)(p),[S]));var M={totalMoney:r,totalQuantity:c,totalWeight:i,label:S};u===s?d===f?h=[].concat((0,o.Z)(h),[M]):x=[].concat((0,o.Z)(x),[M]):0===f&&11===d?x=[].concat((0,o.Z)(x),[M]):Z=[].concat((0,o.Z)(Z),[M])},v=0;v<e.length;v++)m(v);for(var b=[],y=[],C=[],T=[],j=[],S=[],M=[],P=[],k=[],w=function(n){var t=p[n],e=h.find((function(n){return n.label===t})),a=x.find((function(n){return n.label===t})),r=Z.find((function(n){return n.label===t})),c=e||{},i=c.totalMoney,u=c.totalQuantity,d=c.totalWeight,s=a||{},f=s.totalMoney,g=s.totalQuantity,m=s.totalWeight,v=r||{},w=v.totalMoney,E=v.totalQuantity,I=v.totalWeight;b=[].concat((0,o.Z)(b),[i/1e6||0]),y=[].concat((0,o.Z)(y),[u||0]),C=[].concat((0,o.Z)(C),[d*l||0]),T=[].concat((0,o.Z)(T),[f/1e6||0]),j=[].concat((0,o.Z)(j),[g/1e6||0]),S=[].concat((0,o.Z)(S),[m*l||0]),M=[].concat((0,o.Z)(M),[w/1e6||0]),P=[].concat((0,o.Z)(P),[E||0]),k=[].concat((0,o.Z)(k),[I*l||0])},E=0;E<p.length;E++)w(E);var I=function(){var n=f+1;return n>9?n:"0".concat(n)}(),_=0===f?"Th\xe1ng 12 - N\u0103m "+(s-1):"Th\xe1ng "+(f>9?f:"0".concat(f))+" - N\u0103m "+s,N=function(){var n=0;return b.forEach((function(t){return n+=t})),n.toLocaleString()}(),Y=function(){var n=0;return C.forEach((function(t){return n+=t})),n.toLocaleString()}(),D=[{label:"Th\xe1ng "+I+" - N\u0103m "+s,data:b,backgroundColor:a.Z.rgbaPrimary},{label:_,data:T,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(s-1),data:M,backgroundColor:a.Z.purple}],F=[{label:"Th\xe1ng "+I+" - N\u0103m "+s,data:y,backgroundColor:a.Z.rgbaPrimary},{label:_,data:j,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(s-1),data:P,backgroundColor:a.Z.purple}],O=[{label:"Th\xe1ng "+I+" - N\u0103m "+s,data:C,backgroundColor:a.Z.rgbaPrimary},{label:_,data:S,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+I+" - N\u0103m "+(s-1),data:k,backgroundColor:a.Z.purple}];return{monthWeightShowUnit:u,totalMonthMoney:N,totalMonthWeight:Y,chartLabels:p,moneyDatasets:D,quantityDatasets:F,weightDatasets:O}},h=function(n){for(var t=n.chartData,e=n.startOfTimeRange,r=(t&&t[0]||{}).unitString,c=g(void 0===r?"":r),i=c.weightCoefficient,l=c.weightShowUnit,u=e?new Date(e).getFullYear():(new Date).getFullYear(),d=[],s=[],f=[],p=function(n){var e=t[n],a=e._id,r=e.totalMoney,c=e.totalQuantity,i=e.totalWeight,l=a||{},g=l.orderYear,p=l.productCode,h=l.customerInfo,x=l.staffInfo,Z=l.managerInfo,m=(h||{}).fullName,v=(x||{}).fullName,b=(Z||{}).fullName,y=p||m||v||b||"";-1===d.findIndex((function(n){return n===y}))&&(d=[].concat((0,o.Z)(d),[y]));var C={totalMoney:r,totalQuantity:c,totalWeight:i,label:y};g===u?s=[].concat((0,o.Z)(s),[C]):f=[].concat((0,o.Z)(f),[C])},h=0;h<t.length;h++)p(h);for(var x=[],Z=[],m=[],v=[],b=[],y=[],C=function(n){var t=d[n],e=s.find((function(n){return n.label===t})),a=f.find((function(n){return n.label===t})),r=e||{},c=r.totalMoney,l=r.totalQuantity,u=r.totalWeight,g=a||{},p=g.totalMoney,h=g.totalQuantity,C=g.totalWeight;x=[].concat((0,o.Z)(x),[c/1e6||0]),Z=[].concat((0,o.Z)(Z),[l||0]),m=[].concat((0,o.Z)(m),[u*i||0]),v=[].concat((0,o.Z)(v),[p/1e6||0]),b=[].concat((0,o.Z)(b),[h||0]),y=[].concat((0,o.Z)(y),[C*i||0])},T=0;T<d.length;T++)C(T);var j=function(){var n=0;return x.forEach((function(t){return n+=t})),n.toLocaleString()}(),S=function(){var n=0;return m.forEach((function(t){return n+=t})),n.toLocaleString()}(),M=[{label:"N\u0103m "+u,data:x,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:v,backgroundColor:a.Z.chartGreen}],P=[{label:"N\u0103m "+u,data:Z,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:b,backgroundColor:a.Z.chartGreen}],k=[{label:"N\u0103m "+u,data:m,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:y,backgroundColor:a.Z.chartGreen}];return{yearWeightShowUnit:l,totalYearMoney:j,totalYearWeight:S,chartLabels:d,moneyDatasets:M,quantityDatasets:P,weightDatasets:k}},x=function(n){for(var t=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(t),o=new Uint8Array(e.length),a=0;a<e.length;++a)o[a]=e.charCodeAt(a);return o}}}]);