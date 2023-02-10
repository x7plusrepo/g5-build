"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6835,8550,1450,9590,2369,9373],{2447:function(n,t,e){e.d(t,{Z:function(){return V}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x=e(885),m=e(7313),g=e(3222),E=e(2669),O=e(6618),v=e(6881),Z=e(6069),I=e(6524),T=e(6173),D=e(168),C=e(3115),_=e(1237),b=(C.ZP.div(r||(r=(0,D.Z)(["\n  padding: 0;\n  font-size: 12px;\n"]))),C.ZP.div(o||(o=(0,D.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),C.ZP.div(i||(i=(0,D.Z)([""]))),C.ZP.div(a||(a=(0,D.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),_.Z.primary),C.ZP.div(u||(u=(0,D.Z)(["\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),C.ZP.div(c||(c=(0,D.Z)(["\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  margin: ",";\n  cursor: ",";\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"])),(function(n){return n.customerMargin}),(function(n){return n.canApproveDiscountPromotion?"pointer":"auto"}))),w=C.ZP.div(d||(d=(0,D.Z)([""]))),R=(C.ZP.div(s||(s=(0,D.Z)(["\n  display: flex;\n  margin: 10px 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),C.ZP.span(l||(l=(0,D.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  color: ",";\n"])),_.Z.secondary)),y=C.ZP.p(p||(p=(0,D.Z)(["\n  font-size: 12px;\n  width: fit-content;\n  font-style: italic;\n  color: ",";\n"])),_.Z.secondary),$=C.ZP.div(f||(f=(0,D.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),N=C.ZP.div(h||(h=(0,D.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),A=C.ZP.div(P||(P=(0,D.Z)(["\n  padding: 3px 5px;\n  font-size: 12px;\n  &:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n"]))),U=e(2153),j=e(3070),F=e(7119),S=e(6417),M=j.fH.MONEY_FIXED_VALUE,Y=j.fH.MONEY_PERCENT_OF_ORDER_VALUE,k=j.fH.MONEY_PERCENT_OF_DIFFERENCE_ORDER_VALUE,L=j.fH.MONEY_ORDER_QUANTITY,W=j.fH.MONEY_DIFFERENCE_ORDER_QUANTITY,q=j.fH.MONEY_ORDER_WEIGHT,H=j.fH.MONEY_DIFFERENCE_ORDER_WEIGHT,K=(0,m.lazy)((function(){return e.e(7471).then(e.bind(e,7471))})),z=function(n){var t,e=n.customerMargin,r=n.discountPromotionItem,o=(0,g.I0)(),i=((0,g.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions.includes(F.gz.CAN_APPROVE_DISCOUNT_PROMOTION),a=(0,m.useRef)(null),u=(0,m.useState)(!1),c=(0,x.Z)(u,2),d=c[0],s=c[1],l=d?"block":"none",p=r||{},f=p._id,h=(p.code,p.typeCode),P=p.startTime,D=p.endTime,C=p.title,_=p.conditions,z=p.detail,V=p.payWhenCreateOrder,B=z.moneyMethodCode,Q=z.products,G=z.value,J=z.giftDescription,X=z.paymentTypeCode,nn=h===j.t_.OTHER,tn=(0,Z.dh)(P),en=(0,Z.dh)(D),rn=C&&(null===(t=C[0])||void 0===t?void 0:t.showText),on=V?"Tr\u1ea3 ngay khi \u0111\u1eb7t h\xe0ng":"Tr\u1ea3 sau",an=function(n,t){var e=1===n.length,r=function(){switch(t){case j.rh.MONEY_ACHIEVE_TYPE:return"\u0111";case j.rh.QUANTITY_ACHIEVE_TYPE:return"sp";case j.rh.WEIGHT_ACHIEVE_TYPE:return"".concat(n[0].netUnitValue).concat(n[0].unitString)}}(),o=function(n,t){var o=n.minRequireValue,i=(n.productInfo||{}).name;e||"".concat(t+1,". ");return(0,S.jsxs)("p",{children:[(0,S.jsx)(R,{children:"- Khi mua"})," ",(0,v.Z)(i)," - S\u1ed1 l\u01b0\u1ee3ng: \u2265 ",o," (",r,")"," "]})};return n.map((function(n,t){return(0,S.jsx)(m.Fragment,{children:o(n,t)},t)}))},un=(0,S.jsx)(S.Fragment,{children:_.map((function(n,t){var e=n.products,r=n.productConditionType,o=n.minTotalRequireValue,i=(0,Z.RX)(r,e[0].netUnitValue,e[0].unitString);return(0,S.jsxs)(m.Fragment,{children:[an(e,r),(0,S.jsxs)("p",{children:["T\u1ed5ng ",i.type," c\u1ea7n \u0111\u1ea1t: ",o," ",i.unit]}),(0,S.jsx)("hr",{})]},t)}))}),cn=(0,S.jsx)(S.Fragment,{children:function(){var n=[M,Y,k,L,W,q,H];switch(X){case j.ad.MONEY_TYPE:var t=n.find((function(n){return n.value===B}));return"T\u1eb7ng/CKKM: ".concat(function(n){if(n.value===M.value)return"Ti\u1ec1n m\u1eb7t ".concat(G.toLocaleString()," \u0111");var t=n.value.includes("percent_of")?"%":"\u0111";return"Ti\u1ec1n = ".concat(G.toLocaleString()).concat(t)+n.label.slice(12)}(t));case j.ad.GIFT_TYPE:return"T\u1eb7ng/CKKM: ".concat(J," tr\u1ecb gi\xe1 ").concat(G.toLocaleString()," \u0111");case j.ad.TAX_OFFSET:return"C\u1ea5n tr\u1eeb: ".concat(J," ").concat(G.toLocaleString()," \u0111");case j.ad.PRODUCT_TYPE:return function(n){var t=1===n.length,e=function(n,e){var r,o=n.code,i=n.quantity,a=(n.productInfo||{}).name,u=t?"T\u1eb7ng/CKKM:":"".concat(e+1,". ");return(0,S.jsxs)("p",{children:[u,"T\u1eb7ng ",i," ",o," - ",a&&(null===(r=a[0])||void 0===r?void 0:r.showText)]})};return(0,S.jsxs)(S.Fragment,{children:[!t&&(0,S.jsx)("p",{children:"T\u1eb7ng/CKKM:"}),n.map((function(n,t){return(0,S.jsx)(m.Fragment,{children:e(n,t)},t)}))]})}(Q);default:return null}}()}),dn=(0,S.jsx)(N,{display:l,ref:a,children:(0,S.jsx)(A,{onClick:function(){var n={title:"Tr\u1ea3 CK/KM cho ch\u01b0\u01a1ng tr\xecnh d\u1ea1ng kh\xe1c",children:(0,S.jsx)(m.Suspense,{fallback:(0,S.jsx)(T.default,{}),children:(0,S.jsx)(I.default,{discountPromotionId:f})})};o((0,U.dn)(n))},children:"Tr\u1ea3 CK/KM"})}),sn=(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)($,{onClick:function(){return s(!d)},children:(0,S.jsx)(O.Z,{})}),dn]});return(0,m.useEffect)((function(){var n=function(n){a.current&&!a.current.contains(n.target)&&s(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[a]),(0,S.jsxs)(b,{customerMargin:e,canApproveDiscountPromotion:i,children:[nn&&sn,(0,S.jsxs)(w,{onClick:function(){if(i){var n={title:"Chi ti\u1ebft chi\u1ebft kh\u1ea5u/khuy\u1ebfn m\u1ea1i",children:(0,S.jsx)(m.Suspense,{fallback:(0,S.jsx)(T.default,{}),children:(0,S.jsx)(K,{discountPromotionItem:r})})};o((0,U.FV)(n))}},children:[(0,S.jsxs)(E.Z,{fontSize:12,fontWeight:700,children:[tn," - ",en,": ",rn]}),un,cn,(0,S.jsx)(y,{children:on})]})]})};z.defaultProps={customerMargin:"15px 10px"};var V=z},9373:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x,m,g,E=e(2982),O=e(1413),v=e(885),Z=e(7313),I=e(3222),T=e(1677),D=e(2262),C=e(1300),_=e(2447),b=e(168),w=e(3115),R=e(1237),y=w.ZP.div(r||(r=(0,b.Z)(["\n  font-size: 12px;\n  padding: 20px 20px 50px;\n"]))),$=w.ZP.div(o||(o=(0,b.Z)([""]))),N=w.ZP.img(i||(i=(0,b.Z)(["\n  width: 100%;\n"]))),A=w.ZP.div(a||(a=(0,b.Z)(["\n  width: 100%;\n"]))),U=w.ZP.h3(u||(u=(0,b.Z)(["\n  font-weight: 600;\n"]))),j=w.ZP.p(c||(c=(0,b.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  text-decoration: line-through;\n"]))),F=w.ZP.p(d||(d=(0,b.Z)(["\n  font-weight: 600;\n  color: ",";\n"])),R.Z.primary),S=w.ZP.div(s||(s=(0,b.Z)(["\n  margin: 20px 0;\n"]))),M=w.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  margin: 15px auto;\n  justify-content: center;\n  border: solid 1px ",";\n"])),R.Z.primary),Y=w.ZP.div(p||(p=(0,b.Z)(["\n  width: 50%;\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),k=w.ZP.div(f||(f=(0,b.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),R.Z.rgbaBlack),L=w.ZP.div(h||(h=(0,b.Z)(["\n  width: 50%;\n  color: #fff;\n  display: flex;\n  font-size: 15px;\n  font-weight: 600;\n  align-items: center;\n  justify-content: flex-start;\n"]))),W=w.ZP.div(P||(P=(0,b.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n"]))),q=w.ZP.h3(x||(x=(0,b.Z)(["\n  margin: 5px 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: ",";\n"])),R.Z.secondary),H=(w.ZP.div(m||(m=(0,b.Z)(["\n  padding: 10px;\n  cursor: pointer;\n  margin: 0 0 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),w.ZP.h5(g||(g=(0,b.Z)(["\n  font-weight: 700;\n"]))),e(2153)),K=e(3070),z=e(5222),V=e(6417),B=function(n){var t=n.productItem,e=t.detailDescription,r=t.discountPromotions,o=[{code:"discount_promotion",label:"Chi\u1ebft kh\u1ea5u/Khuy\u1ebfn m\u1ea1i"},{code:"detail_description",label:"M\xf4 t\u1ea3 chi ti\u1ebft"}],i=(0,Z.useState)(o[0]),a=(0,v.Z)(i,2),u=a[0],c=a[1],d=(0,Z.useRef)(null),s=function(n){return n.code===u.code?{backgroundColor:R.Z.primary,textColor:"#fff"}:{backgroundColor:"transparent",textColor:""}},l=(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(q,{children:"CKKM li\xean quan:"}),!r.length&&(0,V.jsx)(z.Z,{children:(0,V.jsx)("p",{children:"Hi\u1ec7n kh\xf4ng c\xf3 CK/KM n\xe0o li\xean quan"})}),r.map((function(n,t){return(0,V.jsx)(_.Z,{discountPromotionItem:n,customerMargin:"0 0 15px"},t)}))]}),p=u.code===o[0].code?l:null;return(0,Z.useEffect)((function(){var n,t=e&&(null===(n=e[0])||void 0===n?void 0:n.showText);d.current&&(d.current.innerHTML=t)}),[]),(0,Z.useEffect)((function(){var n=u.code===o[1].code?"block":"none";d.current&&(d.current.style.display=n)}),[u.code]),(0,V.jsxs)(S,{children:[(0,V.jsx)(M,{children:o.map((function(n,t){return(0,V.jsx)(Y,{activeColor:s(n),onClick:function(){return c(n)},borderLeftColor:t>0?R.Z.primary:"transparent",children:n.label},t)}))}),p,(0,V.jsx)("div",{ref:d})]})},Q=function(n){var t=n.productItem,e=n.selectedProducts,r=n.setSelectedProducts,o=t.code,i=t.name,a=t.price,u=t.imgUri,c=t.shortDescription,d=1-.01*((0,I.v9)((function(n){return n.authReducer})).viewerQuery||{}).applyingDiscount,s=e.find((function(n){return n.code===o})),l=s&&s.orderQty||0,p=(0,I.I0)(),f=(0,Z.useState)(l),h=(0,v.Z)(f,2),P=h[0],x=h[1];return(0,V.jsxs)(y,{children:[(0,V.jsxs)($,{children:[(0,V.jsx)(N,{src:u,alt:"product-detail"}),(0,V.jsxs)(A,{children:[(0,V.jsxs)(U,{children:[o," - ",i[0].showText]}),(0,V.jsxs)(j,{children:[a.toLocaleString(),"\u0111"]}),(0,V.jsxs)(F,{children:[(a*d).toLocaleString(),"\u0111"]}),(0,V.jsx)("hr",{}),(0,V.jsx)("p",{children:c[0].showText})]})]}),(0,V.jsx)(B,{productItem:t}),(0,V.jsxs)(k,{children:[(0,V.jsxs)(L,{children:[(0,V.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u1eb7t: "}),(0,V.jsx)(D.Z,{onClick:function(){var n=P-1;if(n>0&&s){x(n);var t=e.map((function(t){return t.code===o?(t.orderQty=n,t):t}));r(t),localStorage.setItem(K.B,JSON.stringify(t))}else if(0===n&&s){x(n);var i=e.filter((function(n){return n.code!==o}));r(i),localStorage.setItem(K.B,JSON.stringify(i))}},label:"-"}),(0,V.jsx)("input",{min:0,type:"number",value:P,onChange:function(n){var i=parseInt(n.target.value,10),a=0===i||isNaN(i);if(i>0&&s){x(i);var u=e.map((function(n){return n.code===o?(n.orderQty=i,n):n}));r(u),localStorage.setItem(K.B,JSON.stringify(u))}else if(i>0&&!s){x(i);var c=(0,O.Z)((0,O.Z)({},t),{},{orderQty:i}),d=[].concat((0,E.Z)(e),[c]);r(d),localStorage.setItem(K.B,JSON.stringify(d))}else if(a&&s){x(0);var l=e.filter((function(n){return n.code!==o}));r(l),localStorage.setItem(K.B,JSON.stringify(l))}},style:{width:50,margin:"0 5px",padding:"0 0 0 7px"}}),(0,V.jsx)(T.Z,{label:"+",onClick:function(){var n=P+1;if(x(n),s){var i=e.map((function(t){return t.code===o?(t.orderQty=n,t):t}));r(i),localStorage.setItem(K.B,JSON.stringify(i))}else{var a=(0,O.Z)((0,O.Z)({},t),{},{orderQty:n}),u=[].concat((0,E.Z)(e),[a]);r(u),localStorage.setItem(K.B,JSON.stringify(u))}}})]}),(0,V.jsx)(W,{children:(0,V.jsx)(C.Z,{label:"OK",onClick:function(){p((0,H.Ay)())}})})]})]})};Q.defaultProps={productItem:{},selectedProducts:[],setSelectedProducts:function(){}};var G=Q},6947:function(n,t,e){e.d(t,{Z:function(){return p}});e(7313);var r,o,i=e(168),a=e(3115),u=a.ZP.div(r||(r=(0,i.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),c=a.ZP.p(o||(o=(0,i.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),d=e(3070),s=e(6417),l=function(n){var t=n.isError,e=n.errorMessage,r=t?"translateY(0)":"translateY(110%)";return(0,s.jsx)(u,{children:(0,s.jsx)(c,{isError:t,textTransform:r,children:e})})};l.defaultProps={isError:!1,errorMessage:d.ug.REQUIRED};var p=l},3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return nn},JS:function(){return en},Nv:function(){return K},WP:function(){return X},Xu:function(){return tn},Yh:function(){return rn},aF:function(){return V},cG:function(){return q},d4:function(){return B},e9:function(){return J},gF:function(){return un},ik:function(){return an},jT:function(){return on},jb:function(){return hn},l9:function(){return dn},oj:function(){return z},qe:function(){return sn},rF:function(){return Q},uh:function(){return cn},us:function(){return ln},vK:function(){return Pn},xd:function(){return fn},xi:function(){return G},ym:function(){return H}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x,m,g,E,O,v,Z,I,T,D,C,_,b,w,R,y,$,N,A,U,j,F,S,M,Y,k=e(168),L=e(9237),W=e(9384),q=(0,L.Ps)(r||(r=(0,k.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),W.Od),H=(0,L.Ps)(o||(o=(0,k.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),W.Od,W.Sh),K=((0,L.Ps)(i||(i=(0,k.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),W.Sh,W.Od),(0,L.Ps)(a||(a=(0,k.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),z=(0,L.Ps)(u||(u=(0,k.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),V=((0,L.Ps)(c||(c=(0,k.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),W.Sh),(0,L.Ps)(d||(d=(0,k.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,L.Ps)(s||(s=(0,k.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),W.Y4)),B=((0,L.Ps)(l||(l=(0,k.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),W.Y4),(0,L.Ps)(p||(p=(0,k.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),W.Y4),(0,L.Ps)(f||(f=(0,k.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL)),Q=(0,L.Ps)(h||(h=(0,k.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL),G=(0,L.Ps)(P||(P=(0,k.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL),J=(0,L.Ps)(x||(x=(0,k.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL),X=((0,L.Ps)(m||(m=(0,k.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL),(0,L.Ps)(g||(g=(0,k.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),W.dL),(0,L.Ps)(E||(E=(0,k.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),W.MM)),nn=(0,L.Ps)(O||(O=(0,k.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),W.MM),tn=((0,L.Ps)(v||(v=(0,k.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),W.MM),(0,L.Ps)(Z||(Z=(0,k.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),W.xC)),en=(0,L.Ps)(I||(I=(0,k.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),W.xC),rn=(0,L.Ps)(T||(T=(0,k.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),W.xC),on=(0,L.Ps)(D||(D=(0,k.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),W.xC),an=(0,L.Ps)(C||(C=(0,k.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),W.l3),un=((0,L.Ps)(_||(_=(0,k.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),W.l3),(0,L.Ps)(b||(b=(0,k.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),W.l3),(0,L.Ps)(w||(w=(0,k.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),W.l3)),cn=(0,L.Ps)(R||(R=(0,k.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),W.l3),dn=(0,L.Ps)(y||(y=(0,k.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),W.UW),sn=((0,L.Ps)($||($=(0,k.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),W.UW),(0,L.Ps)(N||(N=(0,k.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,L.Ps)(A||(A=(0,k.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,L.Ps)(U||(U=(0,k.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),W.mD)),ln=(0,L.Ps)(j||(j=(0,k.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),W.zY),pn=(0,L.Ps)(F||(F=(0,k.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),W.zY),fn=(0,L.Ps)(S||(S=(0,k.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),W.zY),hn=(0,L.Ps)(M||(M=(0,k.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),W.mD),Pn=(0,L.Ps)(Y||(Y=(0,k.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),W.ms)},6881:function(n,t,e){var r=e(2163);t.Z=function(n){if(Array.isArray(n)){var t,e=n||[],o=r.t.getState().commonReducer,i=o&&(null===(t=o.activeLanguage)||void 0===t?void 0:t.locale)||"vi";return(e.find((function(n){return n&&n.locale===i}))||{}).showText||""}return""}},6069:function(n,t,e){e.d(t,{RX:function(){return a},dh:function(){return i},tO:function(){return o},zZ:function(){return u}});var r=e(3070),o=function(n,t){if(t){for(var e=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=e.length;r<o;++r){var i=e[r];if(!(i in n))return;n=n[i]}return n}},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),r=e.getFullYear(),o=e.getMonth()+1,i=e.getDate(),a=e.getHours(),u=e.getMinutes();return i=i<10?"0"+i:i,o=o<10?"0"+o:o,a=a<10?"0"+a:a,u=u<10?"0"+u:u,t?"".concat(i,"/").concat(o,"/").concat(r," - ").concat(a,":").concat(u):"".concat(i,"/").concat(o,"/").concat(r)},a=function(n,t,e){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"T\u1ed5ng ti\u1ec1n"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"sp",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:"".concat(t).concat(e),type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},u=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n}},2206:function(n,t,e){e.d(t,{FM:function(){return a},d0:function(){return i}});var r=e(4942),o=e(2982);function i(n,t,e){var i=t[n],a=i.edges,u=i.pageInfo;return a.length?(0,r.Z)({},n,{__typename:e[n].__typename,edges:[].concat((0,o.Z)(e[n].edges),(0,o.Z)(a)),pageInfo:u}):e}function a(n,t,e,i,a,u){var c=i[n],d=c.edges,s=c.pageInfo,l=[],p=!1;if(e.data){var f=e.data[t],h={node:f},P=!a||a(f);p=P,P&&(l=u?[h].concat((0,o.Z)(d)):[].concat((0,o.Z)(d),[h]))}return p?(0,r.Z)({},n,{__typename:i[n].__typename,edges:l,pageInfo:s}):i}},6618:function(n,t,e){var r=e(4836);t.Z=void 0;var o=r(e(5045)),i=e(6417),a=(0,o.default)((0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=a},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),o=e(7313),i=e(345),a=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),l=s[0],p=s[1],f=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(f.current,{client:e,options:t,mutation:n});var h=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=f.current,e=t.client,o=t.options,u=t.mutation,d=(0,r.pi)((0,r.pi)({},o),{mutation:u});f.current.result.loading||d.ignoreResults||!f.current.isMounted||p(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++f.current.mutationId,l=(0,i.J)(d,n);return e.mutate(l).then((function(t){var r,o,i,u=t.data,d=t.errors,h=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===f.current.mutationId&&!l.ignoreResults){var P={called:!0,loading:!1,data:u,error:h,client:e};f.current.isMounted&&!(0,a.D)(f.current.result,P)&&p(f.current.result=P)}return null===(o=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(i=n.onCompleted)||void 0===i||i.call(n,t.data,l),t})).catch((function(t){var r,o,i,u;if(s===f.current.mutationId&&f.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,a.D)(f.current.result,c)||p(f.current.result=c)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(i=null===(o=f.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),P=(0,o.useCallback)((function(){f.current.isMounted&&p({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[h,(0,r.pi)({reset:P},l)]}}}]);