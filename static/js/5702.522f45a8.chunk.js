"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[5702,8550,9590,2369,9373],{2447:function(n,t,e){e.d(t,{Z:function(){return z}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x=e(885),m=e(7313),g=e(3222),O=e(2669),E=e(6618),D=e(6881),T=e(6069),v=e(6524),I=e(6173),Z=e(168),C=e(3115),b=e(1237),w=(C.ZP.div(r||(r=(0,Z.Z)(["\n  padding: 0;\n  font-size: 12px;\n"]))),C.ZP.div(o||(o=(0,Z.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),C.ZP.div(i||(i=(0,Z.Z)([""]))),C.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),b.Z.primary),C.ZP.div(u||(u=(0,Z.Z)(["\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),C.ZP.div(c||(c=(0,Z.Z)(["\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  margin: ",";\n  cursor: ",";\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"])),(function(n){return n.customerMargin}),(function(n){return n.canApproveDiscountPromotion?"pointer":"auto"}))),_=C.ZP.div(d||(d=(0,Z.Z)([""]))),R=(C.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  margin: 10px 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),C.ZP.span(l||(l=(0,Z.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  color: ",";\n"])),b.Z.secondary)),$=C.ZP.p(p||(p=(0,Z.Z)(["\n  font-size: 12px;\n  width: fit-content;\n  font-style: italic;\n  color: ",";\n"])),b.Z.secondary),y=C.ZP.div(f||(f=(0,Z.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),N=C.ZP.div(h||(h=(0,Z.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),A=C.ZP.div(P||(P=(0,Z.Z)(["\n  padding: 3px 5px;\n  font-size: 12px;\n  &:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n"]))),U=e(2153),F=e(3070),j=e(7119),S=e(6417),M=F.fH.MONEY_FIXED_VALUE,k=F.fH.MONEY_PERCENT_OF_ORDER_VALUE,L=F.fH.MONEY_PERCENT_OF_DIFFERENCE_ORDER_VALUE,W=F.fH.MONEY_ORDER_QUANTITY,Y=F.fH.MONEY_DIFFERENCE_ORDER_QUANTITY,q=F.fH.MONEY_ORDER_WEIGHT,K=F.fH.MONEY_DIFFERENCE_ORDER_WEIGHT,H=(0,m.lazy)((function(){return e.e(7471).then(e.bind(e,7471))})),V=function(n){var t,e=n.customerMargin,r=n.discountPromotionItem,o=(0,g.I0)(),i=((0,g.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions.includes(j.gz.CAN_APPROVE_DISCOUNT_PROMOTION),a=(0,m.useRef)(null),u=(0,m.useState)(!1),c=(0,x.Z)(u,2),d=c[0],s=c[1],l=d?"block":"none",p=r||{},f=p._id,h=(p.code,p.typeCode),P=p.startTime,Z=p.endTime,C=p.title,b=p.conditions,V=p.detail,z=p.payWhenCreateOrder,B=V.moneyMethodCode,Q=V.products,G=V.value,J=V.giftDescription,X=V.paymentTypeCode,nn=h===F.t_.OTHER,tn=(0,T.dh)(P),en=(0,T.dh)(Z),rn=C&&(null===(t=C[0])||void 0===t?void 0:t.showText),on=z?"Tr\u1ea3 ngay khi \u0111\u1eb7t h\xe0ng":"Tr\u1ea3 sau",an=function(n,t){var e=1===n.length,r=function(){switch(t){case F.rh.MONEY_ACHIEVE_TYPE:return"\u0111";case F.rh.QUANTITY_ACHIEVE_TYPE:return"sp";case F.rh.WEIGHT_ACHIEVE_TYPE:return"".concat(n[0].netUnitValue).concat(n[0].unitString)}}(),o=function(n,t){var o=n.minRequireValue,i=(n.productInfo||{}).name;e||"".concat(t+1,". ");return(0,S.jsxs)("p",{children:[(0,S.jsx)(R,{children:"- Khi mua"})," ",(0,D.Z)(i)," - S\u1ed1 l\u01b0\u1ee3ng: \u2265 ",o," (",r,")"," "]})};return n.map((function(n,t){return(0,S.jsx)(m.Fragment,{children:o(n,t)},t)}))},un=(0,S.jsx)(S.Fragment,{children:b.map((function(n,t){var e=n.products,r=n.productConditionType,o=n.minTotalRequireValue,i=(0,T.RX)(r,e[0].netUnitValue,e[0].unitString);return(0,S.jsxs)(m.Fragment,{children:[an(e,r),(0,S.jsxs)("p",{children:["T\u1ed5ng ",i.type," c\u1ea7n \u0111\u1ea1t: ",o," ",i.unit]}),(0,S.jsx)("hr",{})]},t)}))}),cn=(0,S.jsx)(S.Fragment,{children:function(){var n=[M,k,L,W,Y,q,K];switch(X){case F.ad.MONEY_TYPE:var t=n.find((function(n){return n.value===B}));return"T\u1eb7ng/CKKM: ".concat(function(n){if(n.value===M.value)return"Ti\u1ec1n m\u1eb7t ".concat(G.toLocaleString()," \u0111");var t=n.value.includes("percent_of")?"%":"\u0111";return"Ti\u1ec1n = ".concat(G.toLocaleString()).concat(t)+n.label.slice(12)}(t));case F.ad.GIFT_TYPE:return"T\u1eb7ng/CKKM: ".concat(J," tr\u1ecb gi\xe1 ").concat(G.toLocaleString()," \u0111");case F.ad.TAX_OFFSET:return"C\u1ea5n tr\u1eeb: ".concat(J," ").concat(G.toLocaleString()," \u0111");case F.ad.PRODUCT_TYPE:return function(n){var t=1===n.length,e=function(n,e){var r,o=n.code,i=n.quantity,a=(n.productInfo||{}).name,u=t?"T\u1eb7ng/CKKM:":"".concat(e+1,". ");return(0,S.jsxs)("p",{children:[u,"T\u1eb7ng ",i," ",o," - ",a&&(null===(r=a[0])||void 0===r?void 0:r.showText)]})};return(0,S.jsxs)(S.Fragment,{children:[!t&&(0,S.jsx)("p",{children:"T\u1eb7ng/CKKM:"}),n.map((function(n,t){return(0,S.jsx)(m.Fragment,{children:e(n,t)},t)}))]})}(Q);default:return null}}()}),dn=(0,S.jsx)(N,{display:l,ref:a,children:(0,S.jsx)(A,{onClick:function(){var n={title:"Tr\u1ea3 CK/KM cho ch\u01b0\u01a1ng tr\xecnh d\u1ea1ng kh\xe1c",children:(0,S.jsx)(m.Suspense,{fallback:(0,S.jsx)(I.default,{}),children:(0,S.jsx)(v.default,{discountPromotionId:f})})};o((0,U.dn)(n))},children:"Tr\u1ea3 CK/KM"})}),sn=(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(y,{onClick:function(){return s(!d)},children:(0,S.jsx)(E.Z,{})}),dn]});return(0,m.useEffect)((function(){var n=function(n){a.current&&!a.current.contains(n.target)&&s(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[a]),(0,S.jsxs)(w,{customerMargin:e,canApproveDiscountPromotion:i,children:[nn&&sn,(0,S.jsxs)(_,{onClick:function(){if(i){var n={title:"Chi ti\u1ebft chi\u1ebft kh\u1ea5u/khuy\u1ebfn m\u1ea1i",children:(0,S.jsx)(m.Suspense,{fallback:(0,S.jsx)(I.default,{}),children:(0,S.jsx)(H,{discountPromotionItem:r})})};o((0,U.FV)(n))}},children:[(0,S.jsxs)(O.Z,{fontSize:12,fontWeight:700,children:[tn," - ",en,": ",rn]}),un,cn,(0,S.jsx)($,{children:on})]})]})};V.defaultProps={customerMargin:"15px 10px"};var z=V},9373:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x,m,g,O=e(2982),E=e(1413),D=e(885),T=e(7313),v=e(3222),I=e(1677),Z=e(2262),C=e(1300),b=e(2447),w=e(168),_=e(3115),R=e(1237),$=_.ZP.div(r||(r=(0,w.Z)(["\n  font-size: 12px;\n  padding: 20px 20px 50px;\n"]))),y=_.ZP.div(o||(o=(0,w.Z)([""]))),N=_.ZP.img(i||(i=(0,w.Z)(["\n  width: 100%;\n"]))),A=_.ZP.div(a||(a=(0,w.Z)(["\n  width: 100%;\n"]))),U=_.ZP.h3(u||(u=(0,w.Z)(["\n  font-weight: 600;\n"]))),F=_.ZP.p(c||(c=(0,w.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  text-decoration: line-through;\n"]))),j=_.ZP.p(d||(d=(0,w.Z)(["\n  font-weight: 600;\n  color: ",";\n"])),R.Z.primary),S=_.ZP.div(s||(s=(0,w.Z)(["\n  margin: 20px 0;\n"]))),M=_.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  margin: 15px auto;\n  justify-content: center;\n  border: solid 1px ",";\n"])),R.Z.primary),k=_.ZP.div(p||(p=(0,w.Z)(["\n  width: 50%;\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),L=_.ZP.div(f||(f=(0,w.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),R.Z.rgbaBlack),W=_.ZP.div(h||(h=(0,w.Z)(["\n  width: 50%;\n  color: #fff;\n  display: flex;\n  font-size: 15px;\n  font-weight: 600;\n  align-items: center;\n  justify-content: flex-start;\n"]))),Y=_.ZP.div(P||(P=(0,w.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n"]))),q=_.ZP.h3(x||(x=(0,w.Z)(["\n  margin: 5px 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: ",";\n"])),R.Z.secondary),K=(_.ZP.div(m||(m=(0,w.Z)(["\n  padding: 10px;\n  cursor: pointer;\n  margin: 0 0 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),_.ZP.h5(g||(g=(0,w.Z)(["\n  font-weight: 700;\n"]))),e(2153)),H=e(3070),V=e(5222),z=e(6417),B=function(n){var t=n.productItem,e=t.detailDescription,r=t.discountPromotions,o=[{code:"discount_promotion",label:"Chi\u1ebft kh\u1ea5u/Khuy\u1ebfn m\u1ea1i"},{code:"detail_description",label:"M\xf4 t\u1ea3 chi ti\u1ebft"}],i=(0,T.useState)(o[0]),a=(0,D.Z)(i,2),u=a[0],c=a[1],d=(0,T.useRef)(null),s=function(n){return n.code===u.code?{backgroundColor:R.Z.primary,textColor:"#fff"}:{backgroundColor:"transparent",textColor:""}},l=(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(q,{children:"CKKM li\xean quan:"}),!r.length&&(0,z.jsx)(V.Z,{children:(0,z.jsx)("p",{children:"Hi\u1ec7n kh\xf4ng c\xf3 CK/KM n\xe0o li\xean quan"})}),r.map((function(n,t){return(0,z.jsx)(b.Z,{discountPromotionItem:n,customerMargin:"margin: 0"},t)}))]}),p=u.code===o[0].code?l:null;return(0,T.useEffect)((function(){var n,t=e&&(null===(n=e[0])||void 0===n?void 0:n.showText);d.current&&(d.current.innerHTML=t)}),[]),(0,T.useEffect)((function(){var n=u.code===o[1].code?"block":"none";d.current&&(d.current.style.display=n)}),[u.code]),(0,z.jsxs)(S,{children:[(0,z.jsx)(M,{children:o.map((function(n,t){return(0,z.jsx)(k,{activeColor:s(n),onClick:function(){return c(n)},borderLeftColor:t>0?R.Z.primary:"transparent",children:n.label},t)}))}),p,(0,z.jsx)("div",{ref:d})]})},Q=function(n){var t=n.productItem,e=n.selectedProducts,r=n.setSelectedProducts,o=t.code,i=t.name,a=t.price,u=t.imgUri,c=t.shortDescription,d=1-.01*((0,v.v9)((function(n){return n.authReducer})).viewerQuery||{}).applyingDiscount,s=e.find((function(n){return n.code===o})),l=s&&s.orderQty||0,p=(0,v.I0)(),f=(0,T.useState)(l),h=(0,D.Z)(f,2),P=h[0],x=h[1];return(0,z.jsxs)($,{children:[(0,z.jsxs)(y,{children:[(0,z.jsx)(N,{src:u,alt:"product-detail"}),(0,z.jsxs)(A,{children:[(0,z.jsxs)(U,{children:[o," - ",i[0].showText]}),(0,z.jsxs)(F,{children:[a.toLocaleString(),"\u0111"]}),(0,z.jsxs)(j,{children:[(a*d).toLocaleString(),"\u0111"]}),(0,z.jsx)("hr",{}),(0,z.jsx)("p",{children:c[0].showText})]})]}),(0,z.jsx)(B,{productItem:t}),(0,z.jsxs)(L,{children:[(0,z.jsxs)(W,{children:[(0,z.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u1eb7t: "}),(0,z.jsx)(Z.Z,{onClick:function(){var n=P-1;if(n>0&&s){x(n);var t=e.map((function(t){return t.code===o?(t.orderQty=n,t):t}));r(t),localStorage.setItem(H.B,JSON.stringify(t))}else if(0===n&&s){x(n);var i=e.filter((function(n){return n.code!==o}));r(i),localStorage.setItem(H.B,JSON.stringify(i))}},label:"-"}),(0,z.jsx)("input",{min:0,type:"number",value:P,onChange:function(n){var i=parseInt(n.target.value,10),a=0===i||isNaN(i);if(i>0&&s){x(i);var u=e.map((function(n){return n.code===o?(n.orderQty=i,n):n}));r(u),localStorage.setItem(H.B,JSON.stringify(u))}else if(i>0&&!s){x(i);var c=(0,E.Z)((0,E.Z)({},t),{},{orderQty:i}),d=[].concat((0,O.Z)(e),[c]);r(d),localStorage.setItem(H.B,JSON.stringify(d))}else if(a&&s){x(0);var l=e.filter((function(n){return n.code!==o}));r(l),localStorage.setItem(H.B,JSON.stringify(l))}},style:{width:50,margin:"0 5px",padding:"0 0 0 7px"}}),(0,z.jsx)(I.Z,{label:"+",onClick:function(){var n=P+1;if(x(n),s){var i=e.map((function(t){return t.code===o?(t.orderQty=n,t):t}));r(i),localStorage.setItem(H.B,JSON.stringify(i))}else{var a=(0,E.Z)((0,E.Z)({},t),{},{orderQty:n}),u=[].concat((0,O.Z)(e),[a]);r(u),localStorage.setItem(H.B,JSON.stringify(u))}}})]}),(0,z.jsx)(Y,{children:(0,z.jsx)(C.Z,{label:"OK",onClick:function(){p((0,K.Ay)())}})})]})]})};Q.defaultProps={productItem:{},selectedProducts:[],setSelectedProducts:function(){}};var G=Q},3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return nn},JS:function(){return en},Nv:function(){return H},WP:function(){return X},Xu:function(){return tn},Yh:function(){return rn},aF:function(){return z},cG:function(){return q},d4:function(){return B},e9:function(){return J},gF:function(){return un},ik:function(){return an},jT:function(){return on},jb:function(){return hn},l9:function(){return dn},oj:function(){return V},qe:function(){return sn},rF:function(){return Q},uh:function(){return cn},us:function(){return ln},vK:function(){return Pn},xd:function(){return fn},xi:function(){return G},ym:function(){return K}});var r,o,i,a,u,c,d,s,l,p,f,h,P,x,m,g,O,E,D,T,v,I,Z,C,b,w,_,R,$,y,N,A,U,F,j,S,M,k,L=e(168),W=e(9237),Y=e(9384),q=(0,W.Ps)(r||(r=(0,L.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),Y.Od),K=(0,W.Ps)(o||(o=(0,L.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),Y.Od,Y.Sh),H=((0,W.Ps)(i||(i=(0,L.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),Y.Sh,Y.Od),(0,W.Ps)(a||(a=(0,L.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),V=(0,W.Ps)(u||(u=(0,L.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),z=((0,W.Ps)(c||(c=(0,L.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),Y.Sh),(0,W.Ps)(d||(d=(0,L.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,W.Ps)(s||(s=(0,L.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4)),B=((0,W.Ps)(l||(l=(0,L.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,W.Ps)(p||(p=(0,L.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,W.Ps)(f||(f=(0,L.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL)),Q=(0,W.Ps)(h||(h=(0,L.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),G=(0,W.Ps)(P||(P=(0,L.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),J=(0,W.Ps)(x||(x=(0,L.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),X=((0,W.Ps)(m||(m=(0,L.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),(0,W.Ps)(g||(g=(0,L.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),(0,W.Ps)(O||(O=(0,L.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM)),nn=(0,W.Ps)(E||(E=(0,L.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),tn=((0,W.Ps)(D||(D=(0,L.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),(0,W.Ps)(T||(T=(0,L.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC)),en=(0,W.Ps)(v||(v=(0,L.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),rn=(0,W.Ps)(I||(I=(0,L.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),on=(0,W.Ps)(Z||(Z=(0,L.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),an=(0,W.Ps)(C||(C=(0,L.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),un=((0,W.Ps)(b||(b=(0,L.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,W.Ps)(w||(w=(0,L.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,W.Ps)(_||(_=(0,L.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3)),cn=(0,W.Ps)(R||(R=(0,L.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),dn=(0,W.Ps)($||($=(0,L.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),sn=((0,W.Ps)(y||(y=(0,L.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),(0,W.Ps)(N||(N=(0,L.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,W.Ps)(A||(A=(0,L.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,W.Ps)(U||(U=(0,L.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD)),ln=(0,W.Ps)(F||(F=(0,L.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),pn=(0,W.Ps)(j||(j=(0,L.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),fn=(0,W.Ps)(S||(S=(0,L.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),hn=(0,W.Ps)(M||(M=(0,L.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD),Pn=(0,W.Ps)(k||(k=(0,L.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),Y.ms)},6881:function(n,t,e){var r=e(2163);t.Z=function(n){if(Array.isArray(n)){var t,e=n||[],o=r.t.getState().commonReducer,i=o&&(null===(t=o.activeLanguage)||void 0===t?void 0:t.locale)||"vi";return(e.find((function(n){return n&&n.locale===i}))||{}).showText||""}return""}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),o=e(7313),i=e(345),a=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),l=s[0],p=s[1],f=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(f.current,{client:e,options:t,mutation:n});var h=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=f.current,e=t.client,o=t.options,u=t.mutation,d=(0,r.pi)((0,r.pi)({},o),{mutation:u});f.current.result.loading||d.ignoreResults||!f.current.isMounted||p(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++f.current.mutationId,l=(0,i.J)(d,n);return e.mutate(l).then((function(t){var r,o,i,u=t.data,d=t.errors,h=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===f.current.mutationId&&!l.ignoreResults){var P={called:!0,loading:!1,data:u,error:h,client:e};f.current.isMounted&&!(0,a.D)(f.current.result,P)&&p(f.current.result=P)}return null===(o=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(i=n.onCompleted)||void 0===i||i.call(n,t.data,l),t})).catch((function(t){var r,o,i,u;if(s===f.current.mutationId&&f.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,a.D)(f.current.result,c)||p(f.current.result=c)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(i=null===(o=f.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),P=(0,o.useCallback)((function(){f.current.isMounted&&p({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[h,(0,r.pi)({reset:P},l)]}}}]);