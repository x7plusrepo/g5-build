"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7658],{2247:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var i,o,r,a,c,s,l,u,d,p,x,h,f,g,v,m,y=e(885),j=e(1413),Z=e(2982),b=e(7313),k=e(3222),_=e(2668),C=e(324),P=e(6881),T=e(9829),S=e(6580),M=e(4641),w=e(6173),E=e(168),V=e(3115),G=e(1237),I=V.ZP.div(i||(i=(0,E.Z)(["\n  padding: 0;\n  font-size: 12px;\n"]))),D=V.ZP.div(o||(o=(0,E.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),K=V.ZP.div(r||(r=(0,E.Z)([""]))),L=(V.ZP.div(a||(a=(0,E.Z)(["\n  text-align: right;\n"]))),V.ZP.div(c||(c=(0,E.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),G.Z.primary),V.ZP.div(s||(s=(0,E.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),V.ZP.div(l||(l=(0,E.Z)(["\n  margin: 20px 10px;\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),V.ZP.div(u||(u=(0,E.Z)([""]))),V.ZP.div(d||(d=(0,E.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n"])))),O=V.ZP.div(p||(p=(0,E.Z)(["\n  text-align: center;\n"]))),Y=(V.ZP.div(x||(x=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),V.ZP.p(h||(h=(0,E.Z)(["\n  padding: 0;\n  margin: 5px 0;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 5px;\n  color: ",";\n"])),G.Z.primary)),A=V.ZP.span(f||(f=(0,E.Z)(["\n  font-weight: 500;\n  font-style: italic;\n  color: ",";\n"])),G.Z.secondary),z=(V.ZP.div(g||(g=(0,E.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),V.ZP.div(v||(v=(0,E.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),V.ZP.span(m||(m=(0,E.Z)(["\n  margin: 5px;\n  font-size: 12px;\n"]))),e(7123)),F=e(3070),B=e(2153),R=e(6417),q=(0,b.lazy)((function(){return e.e(4495).then(e.bind(e,4495))})),Q=function(n){var t=n.statisticalData,e=void 0===t?[]:t,i=(0,k.I0)(),o=e.find((function(n){return n._id.paymentTypeCode===F.ad.TAX_OFFSET})),r=e.find((function(n){return n._id.paymentTypeCode===F.ad.MONEY_TYPE})),a=e.find((function(n){return n._id.paymentTypeCode===F.ad.GIFT_TYPE})),c=e.find((function(n){return n._id.paymentTypeCode===F.ad.PRODUCT_TYPE})),s=o&&o.totalBePaidMoneyValue||0,l=r&&r.totalBePaidMoneyValue||0,u=a&&a.totalBePaidMoneyValue||0,d=c&&c.totalBePaidMoneyValue||0,p=s+l+u+d,x=function(){for(var n=(a||{}).promotionGifts,t=void 0===n?[]:n,e=[],i=function(n){var i=t[n],o=i.description,r=i.moneyValue,a=e.findIndex((function(n){return n.description===o}));if(-1===a)e=[].concat((0,Z.Z)(e),[(0,j.Z)((0,j.Z)({},i),{},{totalMoneyValue:r,count:1})]);else{var c=e[a],s=c.count,l=c.totalMoneyValue;e[a].count=s+1,e[a].totalMoneyValue=l+r}},o=0;o<t.length;o++)i(o);return e}(),h=function(){for(var n=(c||{}).promotionProducts,t=(void 0===n?[]:n).flat(),e=[],i=function(n){var i=t[n],o=i.code,r=e.findIndex((function(n){return n.code===o}));if(-1===r)e=[].concat((0,Z.Z)(e),[(0,j.Z)((0,j.Z)({},i),{},{count:1})]);else{var a=e[r].count;e[r].count=a+1}},o=0;o<t.length;o++)i(o);return e}();R.Fragment,x.map((function(n,t){return(0,R.jsxs)(L,{children:[(0,R.jsxs)("p",{children:["\u2002+ ",n.description," ",n.count," x"," ",n.moneyValue.toLocaleString()]}),(0,R.jsxs)("p",{children:[n.totalMoneyValue.toLocaleString()," \u0111"]})]},t)})),R.Fragment,h.map((function(n,t){var e;return(0,R.jsxs)(L,{children:[(0,R.jsxs)("p",{children:["\u2002+ ",(0,P.Z)(null===(e=n.productInfo)||void 0===e?void 0:e.name)," ",n.count," x"," ",n.price.toLocaleString()," \u0111"]}),(0,R.jsxs)("p",{children:[(n.price*n.count).toLocaleString()," \u0111"]})]},t)}));return(0,R.jsxs)(D,{children:[(0,R.jsxs)(L,{children:[(0,R.jsx)("p",{children:"T\u1ed5ng gi\xe1 tr\u1ecb"}),(0,R.jsxs)(Y,{children:[p.toLocaleString()," ",(0,R.jsx)(A,{children:"\u0111"})]})]}),(0,R.jsxs)(L,{children:[(0,R.jsxs)(O,{children:[(0,R.jsx)("p",{children:"Ti\u1ec1n m\u1eb7t"}),(0,R.jsxs)(Y,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM ti\u1ec1n m\u1eb7t",children:(0,R.jsx)(b.Suspense,{fallback:(0,R.jsx)(w.default,{}),children:(0,R.jsx)(q,{paymentTypeCode:F.ad.MONEY_TYPE})})};i((0,B.dn)(n))},children:[l.toLocaleString()," ",(0,R.jsx)(A,{children:"\u0111"})]})]}),(0,R.jsxs)(O,{children:[(0,R.jsx)("p",{children:"Hi\u1ec7n v\u1eadt"}),(0,R.jsxs)(Y,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,R.jsx)(b.Suspense,{fallback:(0,R.jsx)(w.default,{}),children:(0,R.jsx)(q,{paymentTypeCode:F.ad.GIFT_TYPE})})};i((0,B.dn)(n))},children:[u.toLocaleString()," ",(0,R.jsx)(A,{children:"\u0111"})]})]}),(0,R.jsxs)(O,{children:[(0,R.jsx)("p",{children:"S\u1ea3n ph\u1ea9m t\u1eb7ng"}),(0,R.jsxs)(Y,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,R.jsx)(b.Suspense,{fallback:(0,R.jsx)(w.default,{}),children:(0,R.jsx)(q,{paymentTypeCode:F.ad.PRODUCT_TYPE})})};i((0,B.dn)(n))},children:[d.toLocaleString()," ",(0,R.jsx)(A,{children:"\u0111"})]})]}),(0,R.jsxs)(O,{children:[(0,R.jsx)("p",{children:"C\u1ea5n tr\u1eeb thu\u1ebf"}),(0,R.jsxs)(Y,{onClick:function(){var n={title:"B\xe1o c\xe1o CK/KM hi\u1ec7n v\u1eadt",children:(0,R.jsx)(b.Suspense,{fallback:(0,R.jsx)(w.default,{}),children:(0,R.jsx)(q,{paymentTypeCode:F.ad.TAX_OFFSET})})};i((0,B.dn)(n))},children:[s.toLocaleString()," ",(0,R.jsx)(A,{children:"\u0111"})]})]})]})]})},H=function(n){var t=(0,k.I0)(),e=(0,k.v9)((function(n){return n.authReducer})).viewerQuery||{},i=e._id,o=e.roles.includes(F.If.CUSTOMER)?i:"",r=(0,b.useState)("2012/01/01"),a=(0,y.Z)(r,2),c=a[0],s=a[1],l=(0,b.useState)("2100/01/01"),u=(0,y.Z)(l,2),d=u[0],p=u[1],x=(0,b.useState)(o),h=(0,y.Z)(x,2),f=h[0],g=h[1],v={customerAccountId:f},m=(0,_.a)(z.Kw,{variables:{filter:v}}).data,j=m&&m.discountPromotionStatistical||[],Z=function(n){var e={title:"B\xe1o c\xe1o CK/KM c\u1ee7a kh\xe1ch h\xe0ng",children:(0,R.jsx)(b.Suspense,{fallback:(0,R.jsx)(w.default,{}),children:(0,R.jsx)(q,{initCustomerAccount:n})})};t((0,B.dn)(e))},P=f?(0,R.jsx)(q,{customerAccountId:f,startOfTimeRange:c,endOfTimeRange:d}):(0,R.jsx)(S.Z,{onClickCustomerItem:Z});return(0,R.jsx)(I,{children:(0,R.jsxs)(K,{children:[(0,R.jsx)("div",{style:{textAlign:"right",margin:"12px 15px 15px"},children:(0,R.jsx)(M.Z,{label:(0,R.jsxs)(R.Fragment,{children:["IN ",(0,R.jsx)(C.Z,{style:{fontSize:18}})]})})}),(0,R.jsx)(T.Z,{inputStartTime:c,setInputStartTime:s,inputEndTime:d,setInputEndTime:p,onClickSelectResultItem:function(n){var t=(n&&n.node)._id;g(t),s("2012/01/01"),p("2100/01/01")},searchPlaceholder:"T\u1ea5t c\u1ea3"}),(0,R.jsx)(Q,{statisticalData:j}),P]})})}},6881:function(n,t,e){var i=e(2163);t.Z=function(n){if(Array.isArray(n)){var t,e=n||[],o=i.t.getState().commonReducer,r=o&&(null===(t=o.activeLanguage)||void 0===t?void 0:t.locale)||"vi";return(e.find((function(n){return n&&n.locale===r}))||{}).showText||""}return""}},324:function(n,t,e){var i=e(4836);t.Z=void 0;var o=i(e(5045)),r=e(6417),a=(0,o.default)((0,r.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.Z=a},1511:function(n,t,e){e.d(t,{x:function(){return a}});var i=e(6178),o=e(7313),r=e(4883);function a(n){var t=(0,o.useContext)((0,r.K)()),e=n||t.client;return __DEV__?(0,i.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,i.kG)(!!e,31),e}},8112:function(n,t,e){e.d(t,{Vp:function(){return c},n_:function(){return i}});var i,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(i||(i={}));var r=new Map;function a(n){var t;switch(n){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function c(n,t){var e=function(n){var t,e,a=r.get(n);if(a)return a;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var c=[],s=[],l=[],u=[],d=0,p=n.definitions;d<p.length;d++){var x=p[d];if("FragmentDefinition"!==x.kind){if("OperationDefinition"===x.kind)switch(x.operation){case"query":s.push(x);break;case"mutation":l.push(x);break;case"subscription":u.push(x)}}else c.push(x)}__DEV__?(0,o.kG)(!c.length||s.length||l.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!c.length||s.length||l.length||u.length,33),__DEV__?(0,o.kG)(s.length+l.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(s.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(s.length+l.length+u.length<=1,34),e=s.length?i.Query:i.Mutation,s.length||l.length||(e=i.Subscription);var h=s.length?s:l.length?l:u;__DEV__?(0,o.kG)(1===h.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(h.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===h.length,35);var f=h[0];t=f.variableDefinitions||[];var g={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:e,variables:t};return r.set(n,g),g}(n),c=a(t),s=a(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(c," requires a graphql ")+"".concat(c,", but a ").concat(s," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);