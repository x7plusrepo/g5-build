"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7675],{16:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var o,a,r,i,c,u,l,s,g,p,d,f,h,m,b=e(885),x=e(7313),v=e(3222),Z=e(9829),y=e(6580),k=e(168),C=e(3115),w=e(1237),_=C.ZP.div(o||(o=(0,k.Z)(["\n  padding: 0;\n  font-size: 12px;\n"]))),S=(C.ZP.div(a||(a=(0,k.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),C.ZP.div(r||(r=(0,k.Z)(["\n  margin: 45px 0 0;\n"])))),M=(C.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  text-align: right;\n  align-items: center;\n  margin: 40px 10px 15px;\n  justify-content: flex-end;\n"]))),C.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),w.Z.primary),C.ZP.div(u||(u=(0,k.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),C.ZP.div(l||(l=(0,k.Z)(["\n  margin: 20px 10px;\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),C.ZP.div(s||(s=(0,k.Z)([""]))),C.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  margin: 10px 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),C.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),C.ZP.p(d||(d=(0,k.Z)(["\n  margin: 5px 0;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 24px;\n  border-radius: 5px;\n  width: fit-content;\n  color: ",";\n"])),w.Z.primary),C.ZP.div(f||(f=(0,k.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),C.ZP.div(h||(h=(0,k.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),C.ZP.span(m||(m=(0,k.Z)(["\n  margin: 5px;\n  font-size: 12px;\n"]))),e(2153)),T=e(3070),D=e(6173),P=e(7119),E=e(6417),N=(0,x.lazy)((function(){return Promise.all([e.e(5627),e.e(3222),e.e(1879),e.e(468),e.e(5632),e.e(9211),e.e(6068)]).then(e.bind(e,9881))})),I=function(n){var t=(0,v.I0)(),e=(0,v.v9)((function(n){return n.authReducer})).viewerQuery||{},o=e._id,a=e.roles,r=e.permissions,i=void 0===r?[]:r,c=e.fatherChildrenAccountIds,u=a.includes(T.If.CUSTOMER)||a.includes(T.If.STAFF_OF_CUSTOMER),l=a.includes(T.If.STAFF_OF_CUSTOMER)?c[0]:u?o:void 0,s=(i.includes(P.gz.CAN_ADD_OLD_DEBTS),(0,x.useState)("2012/01/01")),g=(0,b.Z)(s,2),p=g[0],d=g[1],f=(0,x.useState)("2100/01/01"),h=(0,b.Z)(f,2),m=h[0],k=h[1],C=(0,x.useState)(l),w=(0,b.Z)(C,2),I=w[0],G=w[1],A=(0,x.useState)({}),Y=(0,b.Z)(A,2),j=Y[0],O=Y[1],Q=(0,x.useState)(void 0),W=(0,b.Z)(Q,2),F=W[0],R=W[1],q=function(n){var e={title:"Theo d\xf5i CK/KM c\u1ee7a kh\xe1ch h\xe0ng",children:(0,E.jsx)(x.Suspense,{fallback:(0,E.jsx)(D.default,{}),children:(0,E.jsx)(N,{initCustomerAccount:n})})};t((0,M.dn)(e))},L=I?(0,E.jsx)(N,{setPrintSection:R,selectedCustomer:j,customerAccountId:I,startOfTimeRange:p,endOfTimeRange:m}):(0,E.jsx)(y.Z,{onClickCustomerItem:q});return(0,E.jsx)(_,{children:(0,E.jsxs)(S,{children:[(0,E.jsx)(Z.Z,{canSearchCustomer:!0,printSection:F,inputStartTime:p,setInputStartTime:d,inputEndTime:m,setInputEndTime:k,onClickSelectResultItem:function(n){var t=(n&&n.node||{})._id;G(t),d("2012/01/01"),k("2100/01/01"),O(n&&n.node)},searchPlaceholder:"T\u1ea5t c\u1ea3"}),L]})})}},6069:function(n,t,e){e.d(t,{Bu:function(){return f},EJ:function(){return m},Ok:function(){return b},RX:function(){return l},SB:function(){return x},_O:function(){return h},dh:function(){return c},hz:function(){return u},mr:function(){return p},tO:function(){return i},xE:function(){return g},zZ:function(){return s}});var o=e(2982),a=e(1237),r=e(3070),i=function(n,t){if(t){for(var e=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,a=e.length;o<a;++o){var r=e[o];if(!(r in n))return;n=n[r]}return n}},c=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),o=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),i=e.getHours(),c=e.getMinutes();return r=r<10?"0"+r:r,a=a<10?"0"+a:a,i=i<10?"0"+i:i,c=c<10?"0"+c:c,t?"".concat(r,"/").concat(a,"/").concat(o," - ").concat(i,":").concat(c):"".concat(r,"/").concat(a,"/").concat(o)},u=function(n){var t=n.isoString,e=n.includeTime,o=new Date(t),a=o.getFullYear(),r=o.getMonth()+1,i=o.getDate(),c=o.getHours(),u=o.getMinutes();return i=i<10?"0"+i:i,r=r<10?"0"+r:r,c=c<10?"0"+c:c,u=u<10?"0"+u:u,e?"".concat(a,"-").concat(r,"-").concat(i,"T").concat(c,":").concat(u):"".concat(a,"-").concat(r,"-").concat(i)},l=function(n,t,e){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:e,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},s=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n},g=function(n){var t=(n||{}).getTimeTogether,e=new Date,o=function(){var n=e.getHours();return n>9?n:"0".concat(n)}(),a=function(){var n=e.getMinutes();return n>9?n:"0".concat(n)}(),r=function(){var n=e.getDate();return n>9?n:"0".concat(n)}(),i=function(){var n=e.getMonth()+1;return n>9?n:"0".concat(n)}(),c=e.getFullYear(),u="".concat(c,"-").concat(i,"-").concat(r),l="".concat(c,"-").concat(i,"-").concat(r,"T").concat(o,":").concat(a);return t?l:u},p=function(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},d=function(n){var t=1,e="";return n===r.mZ.G&&(t=.001,e="kg"),n===r.mZ.KG&&(t=.001,e="t\u1ea5n"),n===r.mZ.ML&&(t=.001,e="l\xedt"),n===r.mZ.MG&&(t=1e-6,e="kg"),{weightCoefficient:t,weightShowUnit:e}},f=function(n){for(var t=n.chartData,e=void 0===t?[]:t,r=n.startOfTimeRange,i=(e&&e[0]||{}).unitString,c=d(void 0===i?"":i),u=c.weightCoefficient,l=c.weightShowUnit,s=new Date(r),g=s.getFullYear(),p=s.getMonth(),f=[],h=[],m=[],b=[],x=function(n){var t=e[n],a=t._id,r=t.totalMoney,i=t.totalQuantity,c=t.totalWeight,u=a||{},l=u.orderYear,s=u.orderMonth,d=u.productCode,x=u.productCategories,v=u.customerInfo,Z=u.staffInfo,y=u.managerInfo,k=(v||{}).fullName,C=(Z||{}).fullName,w=(y||{}).fullName,_=d||x||k||C||w||"";-1===f.findIndex((function(n){return n===_}))&&(f=[].concat((0,o.Z)(f),[_]));var S={totalMoney:r,totalQuantity:i,totalWeight:c,label:_};l===g?s===p?h=[].concat((0,o.Z)(h),[S]):m=[].concat((0,o.Z)(m),[S]):0===p&&11===s?m=[].concat((0,o.Z)(m),[S]):b=[].concat((0,o.Z)(b),[S])},v=0;v<e.length;v++)x(v);for(var Z=[],y=[],k=[],C=[],w=[],_=[],S=[],M=[],T=[],D=function(n){var t=f[n],e=h.find((function(n){return n.label===t})),a=m.find((function(n){return n.label===t})),r=b.find((function(n){return n.label===t})),i=e||{},c=i.totalMoney,l=i.totalQuantity,s=i.totalWeight,g=a||{},p=g.totalMoney,d=g.totalQuantity,x=g.totalWeight,v=r||{},D=v.totalMoney,P=v.totalQuantity,E=v.totalWeight;Z=[].concat((0,o.Z)(Z),[c/1e6||0]),y=[].concat((0,o.Z)(y),[l||0]),k=[].concat((0,o.Z)(k),[s*u||0]),C=[].concat((0,o.Z)(C),[p/1e6||0]),w=[].concat((0,o.Z)(w),[d/1e6||0]),_=[].concat((0,o.Z)(_),[x*u||0]),S=[].concat((0,o.Z)(S),[D/1e6||0]),M=[].concat((0,o.Z)(M),[P||0]),T=[].concat((0,o.Z)(T),[E*u||0])},P=0;P<f.length;P++)D(P);var E=function(){var n=p+1;return n>9?n:"0".concat(n)}(),N=0===p?"Th\xe1ng 12 - N\u0103m "+(g-1):"Th\xe1ng "+(p>9?p:"0".concat(p))+" - N\u0103m "+g,I=function(){var n=0;return Z.forEach((function(t){return n+=t})),n.toLocaleString()}(),G=function(){var n=0;return k.forEach((function(t){return n+=t})),n.toLocaleString()}(),A=[{label:"Th\xe1ng "+E+" - N\u0103m "+g,data:Z,backgroundColor:a.Z.rgbaPrimary},{label:N,data:C,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+E+" - N\u0103m "+(g-1),data:S,backgroundColor:a.Z.purple}],Y=[{label:"Th\xe1ng "+E+" - N\u0103m "+g,data:y,backgroundColor:a.Z.rgbaPrimary},{label:N,data:w,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+E+" - N\u0103m "+(g-1),data:M,backgroundColor:a.Z.purple}],j=[{label:"Th\xe1ng "+E+" - N\u0103m "+g,data:k,backgroundColor:a.Z.rgbaPrimary},{label:N,data:_,backgroundColor:a.Z.chartGreen},{label:"Th\xe1ng "+E+" - N\u0103m "+(g-1),data:T,backgroundColor:a.Z.purple}];return{monthWeightShowUnit:l,totalMonthMoney:I,totalMonthWeight:G,chartLabels:f,moneyDatasets:A,quantityDatasets:Y,weightDatasets:j}},h=function(n){for(var t=n.chartData,e=n.startOfTimeRange,r=(t&&t[0]||{}).unitString,i=d(void 0===r?"":r),c=i.weightCoefficient,u=i.weightShowUnit,l=e?new Date(e).getFullYear():(new Date).getFullYear(),s=[],g=[],p=[],f=function(n){var e=t[n],a=e._id,r=e.totalMoney,i=e.totalQuantity,c=e.totalWeight,u=a||{},d=u.orderYear,f=u.productCode,h=u.customerInfo,m=u.staffInfo,b=u.managerInfo,x=(h||{}).fullName,v=(m||{}).fullName,Z=(b||{}).fullName,y=f||x||v||Z||"";-1===s.findIndex((function(n){return n===y}))&&(s=[].concat((0,o.Z)(s),[y]));var k={totalMoney:r,totalQuantity:i,totalWeight:c,label:y};d===l?g=[].concat((0,o.Z)(g),[k]):p=[].concat((0,o.Z)(p),[k])},h=0;h<t.length;h++)f(h);for(var m=[],b=[],x=[],v=[],Z=[],y=[],k=function(n){var t=s[n],e=g.find((function(n){return n.label===t})),a=p.find((function(n){return n.label===t})),r=e||{},i=r.totalMoney,u=r.totalQuantity,l=r.totalWeight,d=a||{},f=d.totalMoney,h=d.totalQuantity,k=d.totalWeight;m=[].concat((0,o.Z)(m),[i/1e6||0]),b=[].concat((0,o.Z)(b),[u||0]),x=[].concat((0,o.Z)(x),[l*c||0]),v=[].concat((0,o.Z)(v),[f/1e6||0]),Z=[].concat((0,o.Z)(Z),[h||0]),y=[].concat((0,o.Z)(y),[k*c||0])},C=0;C<s.length;C++)k(C);var w=function(){var n=0;return m.forEach((function(t){return n+=t})),n.toLocaleString()}(),_=function(){var n=0;return x.forEach((function(t){return n+=t})),n.toLocaleString()}(),S=[{label:"N\u0103m "+l,data:m,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:v,backgroundColor:a.Z.chartGreen}],M=[{label:"N\u0103m "+l,data:b,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:Z,backgroundColor:a.Z.chartGreen}],T=[{label:"N\u0103m "+l,data:x,backgroundColor:a.Z.rgbaPrimary},{label:"N\u0103m "+(l-1),data:y,backgroundColor:a.Z.chartGreen}];return{yearWeightShowUnit:u,totalYearMoney:w,totalYearWeight:_,chartLabels:s,moneyDatasets:S,quantityDatasets:M,weightDatasets:T}},m=function(n){for(var t=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(t),o=new Uint8Array(e.length),a=0;a<e.length;++a)o[a]=e.charCodeAt(a);return o},b=function(n){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=e.length,a=0;a<n;)t+=e.charAt(Math.floor(Math.random()*o)),a+=1;return t},x=function(){var n=navigator.userAgent||window.opera;return!!/windows phone/i.test(n)||(!!/android/i.test(n)||!(!/iPad|iPhone|iPod/.test(n)||window.MSStream))}},1511:function(n,t,e){e.d(t,{x:function(){return i}});var o=e(6178),a=e(7313),r=e(4883);function i(n){var t=(0,a.useContext)((0,r.K)()),e=n||t.client;return __DEV__?(0,o.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!e,31),e}},8112:function(n,t,e){e.d(t,{Vp:function(){return c},n_:function(){return o}});var o,a=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(o||(o={}));var r=new Map;function i(n){var t;switch(n){case o.Query:t="Query";break;case o.Mutation:t="Mutation";break;case o.Subscription:t="Subscription"}return t}function c(n,t){var e=function(n){var t,e,i=r.get(n);if(i)return i;__DEV__?(0,a.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,a.kG)(!!n&&!!n.kind,32);for(var c=[],u=[],l=[],s=[],g=0,p=n.definitions;g<p.length;g++){var d=p[g];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":u.push(d);break;case"mutation":l.push(d);break;case"subscription":s.push(d)}}else c.push(d)}__DEV__?(0,a.kG)(!c.length||u.length||l.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,a.kG)(!c.length||u.length||l.length||s.length,33),__DEV__?(0,a.kG)(u.length+l.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(u.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(u.length+l.length+s.length<=1,34),e=u.length?o.Query:o.Mutation,u.length||l.length||(e=o.Subscription);var f=u.length?u:l.length?l:s;__DEV__?(0,a.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(1===f.length,35);var h=f[0];t=h.variableDefinitions||[];var m={name:h.name&&"Name"===h.name.kind?h.name.value:"data",type:e,variables:t};return r.set(n,m),m}(n),c=i(t),u=i(e.type);__DEV__?(0,a.kG)(e.type===t,"Running a ".concat(c," requires a graphql ")+"".concat(c,", but a ").concat(u," was used instead.")):(0,a.kG)(e.type===t,36)}}}]);