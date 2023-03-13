"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[468],{9146:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(1413),o=(t(7313),t(168)),a=t(3115),c=t(1237),d=a.ZP.button(r||(r=(0,o.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),c.Z.rgbaBlack),s=t(6417),l=function(n){var e=n.label;return(0,s.jsx)(d,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};l.defaultProps={label:"N\xfat b\u1ea5m"};var u=l},6524:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,a,c,d,s,l=t(4165),u=t(5861),p=t(885),x=t(7313),h=t(5627),f=t(3222),g=t(790),m=t(5222),Z=t(9146),v=t(9673),b=t(1359),j=t(1677),y=t(168),T=t(3115),C=t(1237),E=T.ZP.div(r||(r=(0,y.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),P=T.ZP.p(i||(i=(0,y.Z)(["\n  font-weight: 700;\n"]))),w=T.ZP.div(o||(o=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 15px;\n"]))),S=T.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=T.ZP.div(c||(c=(0,y.Z)(["\n  width: 100px;\n"]))),_=(T.ZP.input(d||(d=(0,y.Z)(["\n  width: 60%;\n"]))),T.ZP.div(s||(s=(0,y.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),C.Z.rgbaBlack),t(3454)),O=t(2153),k=t(3070),A=t(6417),N=function(n){var e=n.discountPromotionId,t=(0,h.cI)({defaultValues:{}}),r=t.register,i=t.setValue,o=t.clearErrors,a=t.handleSubmit,c=t.formState.errors,d=(0,f.I0)(),s=(0,x.useState)(void 0),y=(0,p.Z)(s,2),T=y[0],C=y[1];r("customer",{required:!T});var N=(0,g.D)(_.Xu),D=(0,p.Z)(N,1)[0],M=(0,g.D)(_.JS),R=(0,p.Z)(M,1)[0],V=T?(0,A.jsxs)(S,{style:{width:"100%"},children:[(0,A.jsxs)(P,{children:[T.fullName," - ",T.phoneNumber]}),(0,A.jsx)(j.Z,{label:"\u0110\u1ed5i",onClick:function(){C(void 0),i("customer",void 0)}})]}):(0,A.jsx)(b.Z,{isSelectOne:!0,isError:!!c.customer,roles:[k.If.CUSTOMER],onClickSelectResultItem:function(n){o("customer"),C(n.node),i("customer",n.node)}}),F=function(){var n=(0,u.Z)((0,l.Z)().mark((function n(t){var r,i,o,a,c,s,u,p,x,h;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.customer,i=t.paidAt,o=t.bePaidMoneyValue,a=r._id,c=r.staffAccountId,s=r.managerAccountId,u=r.directorAccountId,!e){n.next=11;break}return p={paidAt:new Date(i).toISOString(),customerAccountId:a,staffAccountId:c,managerAccountId:s,directorAccountId:u},x={discountPromotionId:e},n.next=7,R({variables:{data:p,where:x}});case 7:n.sent.data&&d((0,O.mm)()),n.next=16;break;case 11:return h={paidAt:new Date(i).toISOString(),bePaidMoneyValue:Number(o),customerAccountId:a,staffAccountId:c,managerAccountId:s,directorAccountId:u},n.next=14,D({variables:{data:h}});case 14:n.sent.data&&d((0,O.mm)());case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsxs)(E,{children:[(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(w,{children:[(0,A.jsx)(I,{children:"Kh\xe1ch h\xe0ng:"}),V]}),(0,A.jsxs)(w,{children:[(0,A.jsx)(I,{children:"Ng\xe0y tr\u1ea3:"}),(0,A.jsx)(v.Z,{type:"datetime-local",name:"paidAt",register:r,validations:{required:!0},isError:!!c.paidAt})]}),!e&&(0,A.jsxs)(w,{children:[(0,A.jsx)(I,{children:"S\u1ed1 ti\u1ec1n:"}),(0,A.jsx)(v.Z,{type:"number",textAlign:"right",name:"bePaidMoneyValue",register:r,validations:{required:!0},isError:!!c.bePaidMoneyValue}),(0,A.jsx)("span",{style:{marginLeft:10},children:"\u0111"})]})]}),(0,A.jsx)(Z.Z,{label:"X\xe1c nh\u1eadn",onClick:a(F)})]})}},468:function(n,e,t){t.d(e,{Z:function(){return Ge}});var r,i,o,a,c,d,s,l,u,p,x,h,f,g,m,Z,v,b,j,y,T,C,E,P,w,S,I,_,O,k,A,N,D,M,R,V,F,q,K,U,H,Y=t(885),G=t(4165),z=t(5861),L=t(7313),X=t(790),B=t(3222),W=t(514),Q=t(3532),J=t(3511),$=t(5954),nn=t(6618),en=t(7522),tn=t(1997),rn=t(750),on=t(6524),an=t(6173),cn=t(4214),dn=t(1677),sn=t(2262),ln=t(2982),un=t(1413),pn=t(5627),xn=t(4641),hn=t(9673),fn=t(3182),gn=t(5222),mn=(t(2399),t(1300)),Zn=t(2397),vn=t(6879),bn=t(1359),jn=t(6881),yn=t(6069),Tn=t(6947),Cn=t(168),En=t(3115),Pn=t(1237),wn=En.ZP.div(r||(r=(0,Cn.Z)(["\n  font-size: 12px;\n  padding: 10px 5px 120px;\n"]))),Sn=En.ZP.div(i||(i=(0,Cn.Z)(["\n  width: 100%;\n  display: flex;\n  margin: 5px 0 10px;\n  align-items: center;\n"]))),In=En.ZP.div(o||(o=(0,Cn.Z)(["\n  margin: 20px 0 0;\n"]))),_n=En.ZP.span(a||(a=(0,Cn.Z)(["\n  font-weight: 700;\n"]))),On=En.ZP.div(c||(c=(0,Cn.Z)(["\n  left: 0;\n  top: -30px;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  align-items: center;\n"]))),kn=En.ZP.p(d||(d=(0,Cn.Z)(["\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n"])),Pn.Z.lightBlack),An=En.ZP.select(s||(s=(0,Cn.Z)(["\n  border: none;\n  padding: 0 5px;\n  margin: 0 0 0 10px;\n  text-align: center;\n  background-color: transparent;\n  color: ",";\n  border-bottom: 1px solid ",";\n  &:focus {\n    outline: none;\n  }\n"])),Pn.Z.luckyGrey,Pn.Z.luckyGrey),Nn=En.ZP.select(l||(l=(0,Cn.Z)(["\n  top: -2px;\n  left: 90px;\n  border: none;\n  text-align: center;\n  position: absolute;\n  padding: 0 3px 0 0;\n  margin: 2px 5px 0 0;\n  background-color: transparent;\n  color: ",";\n  border-bottom: 1px solid ",";\n  &:focus {\n    outline: none;\n  }\n"])),Pn.Z.luckyGrey,Pn.Z.secondary),Dn=En.ZP.select(u||(u=(0,Cn.Z)(["\n  width: 100%;\n  border: none;\n  margin: 10px 0 0;\n  background-color: transparent;\n  color: ",";\n  border-bottom: 1px solid ",";\n  &:focus {\n    outline: none;\n  }\n"])),Pn.Z.luckyGrey,Pn.Z.secondary),Mn=En.ZP.div(p||(p=(0,Cn.Z)(["\n  display: flex;\n  margin: 10px 0;\n  justify-content: space-between;\n"]))),Rn=En.ZP.div(x||(x=(0,Cn.Z)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),Vn=En.ZP.div(h||(h=(0,Cn.Z)(["\n  width: 40%;\n"]))),Fn=(En.ZP.input(f||(f=(0,Cn.Z)(["\n  width: 60%;\n"]))),En.ZP.input(g||(g=(0,Cn.Z)(["\n  width: 30px;\n  border: none;\n  margin: 0 5px;\n  text-align: right;\n  padding: 0 0 0 5px;\n  border-bottom: 1px solid ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),Pn.Z.secondary)),qn=En.ZP.div(m||(m=(0,Cn.Z)(["\n  position: relative;\n"]))),Kn=En.ZP.div(Z||(Z=(0,Cn.Z)(["\n  right: -5px;\n  bottom: 0px;\n  position: absolute;\n"]))),Un=En.ZP.input(v||(v=(0,Cn.Z)(["\n  width: 50px;\n  border: none;\n  text-align: right;\n  padding: 0 0 0 5px;\n  border-bottom: 1px solid ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),Pn.Z.secondary),Hn=En.ZP.div(b||(b=(0,Cn.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),Pn.Z.rgbaBlack),Yn=En.ZP.textarea(j||(j=(0,Cn.Z)(["\n  border: none;\n  width: 100%;\n  height: 25px;\n  font-style: italic;\n  &:focus {\n    outline: none;\n  }\n"]))),Gn=t(2153),zn=t(7123),Ln=t(3454),Xn=t(3070),Bn=t(6417),Wn=Xn.rh.QUANTITY_ACHIEVE_TYPE,Qn=Xn.rh.WEIGHT_ACHIEVE_TYPE,Jn=Xn.rh.MONEY_ACHIEVE_TYPE,$n=Xn.ad.GIFT_TYPE,ne=Xn.ad.MONEY_TYPE,ee=Xn.ad.PRODUCT_TYPE,te=Xn.fH.MONEY_FIXED_VALUE,re=Xn.fH.MONEY_PERCENT_OF_ORDER_VALUE,ie=Xn.fH.MONEY_PERCENT_OF_DIFFERENCE_ORDER_VALUE,oe=Xn.fH.MONEY_ORDER_QUANTITY,ae=Xn.fH.MONEY_DIFFERENCE_ORDER_QUANTITY,ce=Xn.fH.MONEY_ORDER_WEIGHT,de=Xn.fH.MONEY_DIFFERENCE_ORDER_WEIGHT,se="buy_products",le="other",ue="buy_any_product",pe="buy_simultaneously_products",xe=[{value:Wn,label:"T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng t\u1ed1i thi\u1ec3u \u0111\u1ea1t"},{value:Qn,label:"T\u1ed5ng kh\u1ed1i l\u01b0\u1ee3ng t\u1ed1i thi\u1ec3u \u0111\u1ea1t"},{value:Jn,label:"T\u1ed5ng ti\u1ec1n t\u1ed1i thi\u1ec3u \u0111\u1ea1t"}],he=function(n){var e=n.buyProductConditions,t=n.confirmAddNewCondition,r=n.isSelectedBuyAnyProduct,i=n.setIsAddingProductCondition,o=(0,pn.cI)({defaultValues:{}}),a=o.register,c=o.setValue,d=(o.clearErrors,o.handleSubmit),s=o.formState.errors,l=(0,L.useState)([]),u=(0,Y.Z)(l,2),p=u[0],x=u[1],h=function(n){var e=n&&n.node||{},t=e.code,r=e.name,i=e.netUnitValue,o=e.unitString;return"".concat(t," - ").concat((0,jn.Z)(r)," (").concat(i).concat(o,")")};return(0,L.useEffect)((function(){x([])}),[r]),(0,Bn.jsxs)(Bn.Fragment,{children:[p.map((function(n,e){return(0,Bn.jsxs)(Mn,{children:[(0,Bn.jsx)(Sn,{children:(0,Bn.jsxs)("p",{children:[e+1,". ",h(n)]})}),(0,Bn.jsx)(sn.Z,{label:"Xo\xe1",margin:"0 0 0 10px",onClick:function(){return function(n){var e=p.filter((function(e){return e.node.code!==n.node.code}));x(e)}(n)}})]},e)})),(0,Bn.jsx)(Sn,{children:(0,Bn.jsx)(vn.Z,{isSelectOne:!0,selectedList:p,onClickSelectResultItem:function(n){if(-1===p.findIndex((function(e){return e.node.code===n.node.code}))){var e=r?0:1,t={node:(0,un.Z)((0,un.Z)({},n.node),{},{minRequireValue:e})};x([].concat((0,ln.Z)(p),[t]))}},searchPlaceholder:"B\u1ea5m ch\u1ecdn s\u1ea3n ph\u1ea9m"})}),(0,Bn.jsxs)(Sn,{style:{alignItems:"flex-end"},children:[(0,Bn.jsx)(fn.Z,{register:a,setFieldValue:c,name:"productConditionType",options:xe,isError:!!s.productConditionType,validations:{required:!0}}),(0,Bn.jsx)(hn.Z,{type:"number",width:"120px",textAlign:"right",lineHeight:"19px",register:a,name:"minTotalRequireValue",validations:{required:!0,min:1},isError:!!s.minTotalRequireValue,errorMessage:"*B\u1eaft bu\u1ed9c \u2265 1"})]}),(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(dn.Z,{label:"X\xe1c nh\u1eadn",onClick:d((function(n){if(p.length){var e=(new Date).toISOString(),r=n.productConditionType,i=n.minTotalRequireValue;t({products:p,productConditionType:r,minTotalRequireValue:i,code:e})}}))}),!!e.length&&(0,Bn.jsx)(sn.Z,{label:"Hu\u1ef7",onClick:function(){return i(!1)}})]})]})},fe=function(n){var e=n.condition,t=n.removeCondition,r=e.code,i=e.products,o=e.productConditionType,a=e.minTotalRequireValue,c=function(){var n=i[0].node.unitString;switch(o){case Jn:return{unitString:"\u0111",label:"ti\u1ec1n mua"};case Wn:return{unitString:"s\u1ea3n ph\u1ea9m",label:"s\u1ed1 l\u01b0\u1ee3ng"};case Qn:return{unitString:n,label:"kh\u1ed1i l\u01b0\u1ee3ng"};default:return""}}(),d=i.every((function(n){return 0===n.node.minRequireValue})),s=function(n,e){var t=n.node,r=t.minRequireValue,i=t.code,o=t.name,a=t.netUnitValue,c=t.unitString,d=(t.productInfo||{}).name;return r?(0,Bn.jsxs)("p",{children:[e+1,". ",i," - ",(0,jn.Z)(o||d)," (",a,c,")"]}):null},l=function(n,e){var t=n.node,r=t.code,i=t.name,o=t.netUnitValue,a=t.unitString;return(0,Bn.jsxs)(Sn,{children:[e+1,". ",r," - ",(0,jn.Z)(i)," (",o,a,")"]})},u=d?(0,Bn.jsx)(In,{children:i.map((function(n,e){return(0,Bn.jsx)(L.Fragment,{children:l(n,e)},e)}))}):(0,Bn.jsx)(In,{children:i.map((function(n,e){return(0,Bn.jsx)(Rn,{children:s(n,e)},e)}))});return(0,Bn.jsxs)(qn,{children:[u,(0,Bn.jsxs)("p",{children:["T\u1ed5ng ",c.label," \u0111\u1ea1t t\u1ed1i thi\u1ec3u:"," ",(0,Bn.jsx)(_n,{children:Number(a).toLocaleString()})," ",c.unitString]}),(0,Bn.jsx)("hr",{}),(0,Bn.jsx)(Kn,{children:(0,Bn.jsx)(sn.Z,{label:"Xo\xe1",onClick:function(){return t(r)}})})]})},ge=function(n){var e=n.promotionProducts,t=n.confirmAddPromotionProduct,r=n.setIsAddingPromotionProduct,i=(0,pn.cI)({defaultValues:{}}),o=(i.register,i.setValue,i.clearErrors,i.handleSubmit),a=(i.formState.errors,(0,L.useState)([])),c=(0,Y.Z)(a,2),d=c[0],s=c[1],l=function(n){var e=n&&n.node||{},t=e.code,r=e.name,i=e.netUnitValue,o=e.unitString;return"".concat(t," - ").concat(r[0].showText," (").concat(i).concat(o,")")};return(0,Bn.jsxs)(Bn.Fragment,{children:[d.map((function(n,e){var t;return(0,Bn.jsxs)(Mn,{children:[(0,Bn.jsx)(Sn,{children:(0,Bn.jsxs)("p",{children:[e+1,". T\u1eb7ng",(0,Bn.jsx)(Fn,{min:0,type:"number",name:n&&(null===(t=n.node)||void 0===t?void 0:t.code),value:d[e].node.quantity,onChange:function(n){return function(n,e){var t=Number(n.target.value);t>=1?(d[e].node.quantity=t,s((0,ln.Z)(d))):(d[e].node.quantity=1,s((0,ln.Z)(d)))}(n,e)}}),l(n)]})}),(0,Bn.jsx)(sn.Z,{label:"Xo\xe1",margin:"0 0 0 10px",onClick:function(){return function(n){var e=d.filter((function(e){return e.node.code!==n.node.code}));s(e)}(n)}})]},e)})),(0,Bn.jsx)(Sn,{children:(0,Bn.jsx)(vn.Z,{isSelectOne:!0,selectedList:[].concat((0,ln.Z)(e),(0,ln.Z)(d)),onClickSelectResultItem:function(n){if(-1===d.findIndex((function(e){return e.node.code===n.node.code}))){var e={node:(0,un.Z)((0,un.Z)({},n.node),{},{quantity:1})};s([].concat((0,ln.Z)(d),[e]))}},searchPlaceholder:"B\u1ea5m ch\u1ecdn s\u1ea3n ph\u1ea9m"})}),(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(dn.Z,{label:"X\xe1c nh\u1eadn",onClick:o((function(n){if(d.length){var e=d.filter((function(n){return n.node.quantity>0}));t(e)}}))}),!!e.length&&(0,Bn.jsx)(sn.Z,{label:"Hu\u1ef7",onClick:function(){return r(!1)}})]})]})},me=function(n){var e,t,r,i=n.register,o=n.errors,a=n.setValue,c=n.initDetail,d=n.clearErrors,s=n.conditionType,l=n.minAchieveTypes,u=c||{},p=u.value,x=u.giftDescription,h=u.moneyMethodCode,f=u.paymentTypeCode,g=u.products,m=function(){switch(s){case le:return[{value:ne,label:"Ti\u1ec1n"},{value:$n,label:"Hi\u1ec7n v\u1eadt"}];case se:return[{value:ne,label:"Ti\u1ec1n"},{value:ee,label:"S\u1ea3n ph\u1ea9m"}];default:return[{value:ne,label:"Ti\u1ec1n"},{value:$n,label:"Hi\u1ec7n v\u1eadt"},{value:ee,label:"S\u1ea3n ph\u1ea9m"}]}}(),Z=function(){var n=[te];return l.includes(Wn)&&(n=[].concat((0,ln.Z)(n),[oe,ae])),l.includes(Qn)&&(n=[].concat((0,ln.Z)(n),[ce,de])),l.includes(Jn)&&(n=[].concat((0,ln.Z)(n),[re,ie])),n}(),v=g.map((function(n){return{node:n}})),b=(0,L.useRef)(null),j=(0,L.useState)([]),y=(0,Y.Z)(j,2),T=y[0],C=y[1],E=(0,L.useState)(!1),P=(0,Y.Z)(E,2),w=P[0],S=P[1],I=(0,L.useState)(f||m[0].value),_=(0,Y.Z)(I,2),O=_[0],k=_[1],A=T.length>0,N=w||!A,D=Z.find((function(n){return n.value===h}))||{value:"",label:""},M=(0,L.useState)(D),R=(0,Y.Z)(M,2),V=R[0],F=R[1],q=(0,L.useState)(p||0),K=(0,Y.Z)(q,2),U=K[0],H=K[1],G=Z.length>1,z=O===ne,X=V&&V.label.slice(10),B=(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(Vn,{children:"M\xf4 t\u1ea3:"}),(0,Bn.jsx)(hn.Z,{placeholder:"T\xean hi\u1ec7n v\u1eadt",name:"detail.giftDescription",register:i,isError:!(null===(e=o.detail)||void 0===e||!e.giftDescription),validations:{required:!0}})]}),(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(Vn,{children:"Tr\u1ecb gi\xe1 (\u0111):"}),(0,Bn.jsx)(hn.Z,{type:"number",placeholder:"Tr\u1ecb gi\xe1",name:"detail.giftValue",register:i,isError:!(null===(t=o.detail)||void 0===t||!t.giftValue),validations:{required:!0}})]})]}),W=(0,Bn.jsx)(Bn.Fragment,{children:G&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsxs)(Dn,{value:V.value,onChange:function(n){var e=n.target.value,t=Z.find((function(n){return n.value===e}));F(t),a("detail.moneyMethodCode",e),d("detail.moneyMethodCode"),b.current.focus()},children:[(0,Bn.jsx)("option",{value:"",disabled:!0,children:"Ch\u1ecdn ph\u01b0\u01a1ng th\u1ee9c t\xednh"}),Z.map((function(n,e){return(0,Bn.jsx)("option",{value:n.value,children:n.label},e)}))]}),(0,Bn.jsx)(Tn.Z,{isError:!(null===(r=o.detail)||void 0===r||!r.moneyMethodCode)})]})}),Q=function(n,e){var t=n.node||{},r=t.code,i=t.name,o=t.netUnitValue,a=t.unitString,c=t.quantity;return(0,Bn.jsxs)("p",{children:[e+1,". T\u1eb7ng ",c," SP ",r," - ",(0,jn.Z)(i)," (",o,a,")"]})},J=(0,Bn.jsxs)(Bn.Fragment,{children:[A&&(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Rn,{children:(0,Bn.jsx)("p",{children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c t\u1eb7ng:"})}),T.map((function(n,e){return(0,Bn.jsxs)(Rn,{children:[Q(n,e),(0,Bn.jsx)(sn.Z,{label:"Xo\xe1",onClick:function(){return function(n){var e=T.filter((function(e){return e.node.code!==n.node.code}));C(e)}(n)}})]},e)})),!w&&(0,Bn.jsx)(xn.Z,{label:"+ Th\xeam s\u1ea3n ph\u1ea9m",onClick:function(){return S(!0)}})]}),N&&(0,Bn.jsx)(Bn.Fragment,{children:(0,Bn.jsx)(ge,{promotionProducts:T,setPromotionProducts:C,confirmAddPromotionProduct:function(n){var e=(0,ln.Z)(T);n.forEach((function(n){var t=n.node,r=t.code,i=t.quantity,o=e.findIndex((function(n){return n.node.code===r}));-1===o?e=[].concat((0,ln.Z)(e),[n]):o>=0&&(e=e.map((function(n,e){if(e===o){var t=n.node.quantity;return n.node.quantity=t+i,n}return n})))})),S(!1),C(e),a("detail.products",e)},setIsAddingPromotionProduct:S})})]}),$=function(){switch(O){case $n:return B;case ne:return W;case ee:return J;default:return null}}();return(0,L.useEffect)((function(){C(v||[]),a("detail.products",v||[]),a("detail.giftValue",p||void 0),a("detail.giftDescription",x||void 0),a("detail.moneyMethodValue",p||0),k(f||m[0].value),a("detail.paymentTypeCode",f||m[0].value)}),[s]),(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Nn,{value:O,onChange:function(n){var e=n.target.value;k(e),H(0),C([]),a("detail.paymentTypeCode",e),a("detail.products",[]),a("detail.moneyMethodValue",0),a("detail.giftValue",void 0),a("detail.giftDescription",void 0),e===ne?(F({value:"",label:""}),a("detail.moneyMethodCode",void 0)):a("detail.moneyMethodCode",void 0)},children:m.map((function(n,e){return(0,Bn.jsx)("option",{value:n.value,children:n.label},e)}))}),$,(0,Bn.jsx)(Sn,{style:{display:"flex-end"},children:z&&(0,Bn.jsxs)("p",{children:["Ti\u1ec1n ="," ",(0,Bn.jsx)(Un,{min:0,type:"number",value:U,ref:b,onChange:function(n){var e=n.target.value;Number(e)>=0&&(H(Number(e)),a("detail.moneyMethodValue",Number(e)))}})," ",X]})})]})},Ze=function(n){var e=n.discountPromotionItem,t=e._id,r=e.typeCode,i=e.title,o=e.payWhenCreateOrder,a=e.isApplyForAll,c=e.startTime,d=e.endTime,s=e.conditions,l=e.isBuyAnyProductOfConditions,u=e.detail,p=e.beAppliedAccountIds,x=e.beAppliedCustomers,h=e.note,f=e.otherConditionDescription,g=(0,yn.hz)({isoString:c}),m=(0,yn.hz)({isoString:d}),Z=s.map((function(n){var e=n.products.map((function(n){return{node:n}}));return(0,un.Z)((0,un.Z)({},n),{},{products:e})})),v=x.map((function(n){return{node:n}})),b=u.giftDescription,j=u.moneyMethodCode,y=(u.paymentTypeCode,u.products,u.value),T=(0,pn.cI)({defaultValues:{title:(0,jn.Z)(i),startTime:g,endTime:m,detail:{giftDescription:b,moneyMethodCode:j,giftValue:y},note:(0,jn.Z)(h),beAppliedAccounts:p,otherConditionDescription:f}}),C=T.watch,E=T.register,P=T.setValue,w=T.clearErrors,S=T.handleSubmit,I=T.formState.errors,_=(0,B.I0)(),O=window.innerWidth<=768?"\u0110I\u1ec0U KI\u1ec6N:":"\u0110I\u1ec0U KI\u1ec6N C\u1ea6N \u0110\u1ea0T:",k=(0,X.D)(Ln.GG,{refetchQueries:[{query:zn.Kr},"GET_DISCOUNT_PROMOTIONS"]}),A=(0,Y.Z)(k,1)[0],N=(0,X.D)(Ln.sY,{refetchQueries:[{query:zn.Kr},"GET_DISCOUNT_PROMOTIONS"]}),D=(0,Y.Z)(N,1)[0],M=(0,X.D)(Ln.Am,{refetchQueries:[{query:zn.Kr},"GET_DISCOUNT_PROMOTIONS"]}),R=(0,Y.Z)(M,1)[0],V=(0,L.useState)(a),F=(0,Y.Z)(V,2),q=F[0],K=F[1],U=(0,L.useState)(v),H=(0,Y.Z)(U,2),W=H[0],Q=H[1],J=(0,L.useState)(o),$=(0,Y.Z)(J,2),nn=$[0],en=$[1],tn=(0,L.useState)(Z),rn=(0,Y.Z)(tn,2),on=rn[0],an=rn[1],cn=r===le?le:l?ue:pe,dn=(0,L.useState)(cn),fn=(0,Y.Z)(dn,2),vn=fn[0],Tn=fn[1],Cn=(0,L.useState)(r),En=(0,Y.Z)(Cn,2),Pn=En[0],In=En[1],_n=(0,L.useState)(!1),Nn=(0,Y.Z)(_n,2),Dn=Nn[0],Mn=Nn[1];E("beAppliedAccounts",{required:!q});var Fn=on.map((function(n){return n.productConditionType})),qn=vn===ue,Kn=on.length>0,Un=Pn===se;E("detail.moneyMethodCode",{required:C("detail.paymentTypeCode")===ne});var Wn=(Dn||!Kn)&&Un,Qn=function(n){var e=on.filter((function(e){return e.code!==n}));an(e)},Jn=function(){var n=(0,z.Z)((0,G.Z)().mark((function n(e){var r,o,a,s,l,u,p,x,f,g,m,Z,v,b,j,y,T;return(0,G.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.title,o=e.note,a=e.detail,s=e.endTime,l=e.startTime,e.otherConditionDescription,a.giftDescription,u=a.giftValue,p=a.moneyMethodCode,x=a.moneyMethodValue,f=a.paymentTypeCode,g=a.products,m=void 0===g?[]:g,vn===ue,Number(u)||Number(x)||0,on.map((function(n){var e=n.products,t=n.minTotalRequireValue;return{productConditionType:n.productConditionType,products:e.map((function(n){var e=n.node;return{code:e.code,netUnitValue:e.netUnitValue,unitString:e.unitString,minRequireValue:e.minRequireValue}})),minTotalRequireValue:Number(t)}})),W.map((function(n){return n.node._id})),m.map((function(n){var e=n.node;return{code:e.code,price:e.price,netUnitValue:e.netUnitValue,unitString:e.unitString,quantity:e.quantity}})),p||(Pn===le?f===ne?te.value:p:void 0),Z=[],v={discountPromotionId:t},b=(0,un.Z)((0,un.Z)({},r!==(0,jn.Z)(i)&&{title:[{showText:r,locale:"vi"}]}),o!==(0,jn.Z)(h)&&{note:[{showText:o,locale:"vi"}]}),!!!Object.keys(b).length){n.next=17;break}return n.next=15,A({variables:{data:b,where:v}});case 15:j=n.sent,Z=[].concat((0,ln.Z)(Z),[j]);case 17:if(!(new Date(l).toISOString()!==new Date(c).toISOString())){n.next=25;break}return y={newStartTime:new Date(l).toISOString()},n.next=22,D({variables:{data:y,where:v}});case 22:if(n.sent.data){n.next=25;break}return n.abrupt("return",alert("Update startTime wrong!"));case 25:if(!(new Date(s).toISOString()!==new Date(d).toISOString())){n.next=34;break}return console.log("isNewEndTime"),T={newEndTime:new Date(s).toISOString()},n.next=31,R({variables:{data:T,where:v}});case 31:if(n.sent.data){n.next=34;break}return n.abrupt("return",alert("Update endTime wrong!"));case 34:_((0,Gn.Ay)());case 35:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),$n=(0,Bn.jsxs)(Bn.Fragment,{children:[!!W.length&&W.map((function(n,e){return(0,Bn.jsxs)(Rn,{children:[(0,Bn.jsxs)("p",{children:[e+1,". ",n.node.fullName]}),(0,Bn.jsx)(sn.Z,{label:"Xo\xe1",onClick:function(){return function(n){var e=W.filter((function(e){return e.node._id!==n.node._id}));Q(e),P("beAppliedAccounts",e)}(n)}})]},e)})),(0,Bn.jsx)(bn.Z,{selectedList:W,roles:[Xn.If.CUSTOMER],isError:!!I.beAppliedAccounts,onClickSelectResultItem:function(n){if(-1===W.findIndex((function(e){return e.node._id===n.node._id}))){var e=[].concat((0,ln.Z)(W),[n]);Q(e),P("beAppliedAccounts",e),w("beAppliedAccounts")}},searchPlaceholder:"T\xecm ki\u1ebfm kh\xe1ch h\xe0ng"})]}),ee=Kn?(0,Bn.jsxs)(Bn.Fragment,{children:[on.map((function(n,e){return(0,Bn.jsx)(fe,{condition:n,removeCondition:Qn},e)})),!Dn&&(0,Bn.jsx)(xn.Z,{label:"+ Th\xeam \u0111i\u1ec1u ki\u1ec7n",onClick:function(){return Mn(!0)}})]}):null,re=(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(Vn,{children:"N\u1ed9i dung \u0111i\u1ec1u ki\u1ec7n:"}),(0,Bn.jsx)(hn.Z,{name:"otherConditionDescription",register:E,isError:!!I.otherConditionDescription,validations:{required:!0}})]}),ie=Un?ee:re;return(0,Bn.jsxs)(wn,{children:[(0,Bn.jsxs)(gn.Z,{children:[(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)(Vn,{style:{width:80},children:"T\xean CKKM:"}),(0,Bn.jsx)(hn.Z,{name:"title",register:E,isError:!!I.title,validations:{required:!0}})]}),(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)("input",{disabled:!0,type:"checkbox",checked:nn,onChange:function(){return en(!nn)}}),(0,Bn.jsx)("span",{children:"\u2002Tr\u1ea3 CKKM ngay khi \u0111\u1eb7t h\xe0ng"})]}),(0,Bn.jsxs)(Rn,{children:[(0,Bn.jsx)(Vn,{children:"Kh\xe1ch h\xe0ng:"}),(0,Bn.jsxs)(Sn,{style:{width:"fit-content"},children:[(0,Bn.jsx)("input",{type:"checkbox",checked:q,onChange:function(n){return function(n){var e=n.target.checked;K(e),e&&Q([])}(n)}}),(0,Bn.jsx)("span",{children:"\u2002\xc1p d\u1ee5ng cho t\u1ea5t c\u1ea3 KH"})]})]}),!q&&$n,(0,Bn.jsxs)(Sn,{children:[(0,Bn.jsx)("p",{children:"Th\u1eddi gian:"}),(0,Bn.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,Bn.jsx)(hn.Z,{type:"date",name:"startTime",register:E,isError:!!I.startTime,validations:{required:!0}}),(0,Bn.jsx)("p",{children:"\u2002- "}),(0,Bn.jsx)(hn.Z,{type:"date",name:"endTime",register:E,isError:!!I.endTime,validations:{required:!0}})]})]})]}),(0,Bn.jsxs)(gn.Z,{style:{marginTop:60},children:[(0,Bn.jsxs)(On,{children:[(0,Bn.jsx)(kn,{children:O}),(0,Bn.jsxs)(An,{value:vn,onChange:function(n){var e=n.target.value,t=e===pe||e===ue?se:e;an([]),Tn(e),In(t),Mn(!1),P("otherConditionDescription",void 0)},children:[(0,Bn.jsx)("option",{value:pe,children:"- Khi mua \u0110\u1ed3ng th\u1eddi S\u1ea3n ph\u1ea9m"}),(0,Bn.jsx)("option",{value:ue,children:"- Khi mua B\u1ea5t k\u1ef3 S\u1ea3n ph\u1ea9m"}),(0,Bn.jsx)("option",{value:le,children:"- Kh\xe1c"})]})]}),ie,Wn&&(0,Bn.jsx)(he,{buyProductConditions:on,confirmAddNewCondition:function(n){var e=[].concat((0,ln.Z)(on),[n]);Mn(!1),an(e)},isSelectedBuyAnyProduct:qn,setBuyProductConditions:an,setIsAddingProductCondition:Mn})]}),(0,Bn.jsx)(gn.Z,{title:"T\u1eb6NG/CKKM:",children:(0,Bn.jsx)(me,{errors:I,register:E,setValue:P,initDetail:u,clearErrors:w,conditionType:Pn,minAchieveTypes:Fn})}),(0,Bn.jsx)(gn.Z,{title:"GHI CH\xda",style:{padding:0},children:(0,Bn.jsx)(Yn,(0,un.Z)((0,un.Z)({},E("note")),{},{placeholder:"N\u1ed9i dung ghi ch\xfa (n\u1ebfu c\xf3)..."}))}),(0,Bn.jsxs)(Hn,{children:[(0,Bn.jsx)(Zn.Z,{label:"HU\u1ef6",onClick:function(){return _((0,Gn.Ay)())}}),(0,Bn.jsx)(mn.Z,{label:"X\xc1C NH\u1eacN",onClick:S(Jn)})]})]})},ve=(En.ZP.div(y||(y=(0,Cn.Z)(["\n  padding: 0;\n  font-size: 12px;\n"]))),En.ZP.div(T||(T=(0,Cn.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),En.ZP.div(C||(C=(0,Cn.Z)([""]))),En.ZP.div(E||(E=(0,Cn.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),Pn.Z.primary),En.ZP.div(P||(P=(0,Cn.Z)(["\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),En.ZP.div(w||(w=(0,Cn.Z)(["\n  position: relative;\n  border-radius: 4px;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  margin: ",";\n  cursor: ",";\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"])),(function(n){return n.customerMargin}),(function(n){return n.canApproveDiscountPromotion?"pointer":"auto"}))),be=En.ZP.div(S||(S=(0,Cn.Z)([""]))),je=(En.ZP.div(I||(I=(0,Cn.Z)(["\n  display: flex;\n  margin: 10px 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),En.ZP.div(_||(_=(0,Cn.Z)(["\n  margin: 5px 0 15px;\n"])))),ye=En.ZP.div(O||(O=(0,Cn.Z)(["\n  margin: 0 0 15px;\n"]))),Te=En.ZP.p(k||(k=(0,Cn.Z)(["\n  font-weight: 700;\n  color: ",";\n"])),Pn.Z.primary),Ce=En.ZP.p(A||(A=(0,Cn.Z)(["\n  font-weight: 700;\n"]))),Ee=En.ZP.span(N||(N=(0,Cn.Z)(["\n  font-weight: 500;\n"]))),Pe=En.ZP.span(D||(D=(0,Cn.Z)(["\n  font-weight: 700;\n"]))),we=En.ZP.span(M||(M=(0,Cn.Z)(["\n  font-weight: 500;\n  font-style: italic;\n  color: ",";\n"])),Pn.Z.black),Se=En.ZP.span(R||(R=(0,Cn.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  color: ",";\n"])),Pn.Z.secondary),Ie=En.ZP.p(V||(V=(0,Cn.Z)(["\n  margin: 5px 0 0;\n  font-size: 12px;\n  width: fit-content;\n  font-style: italic;\n  color: ",";\n"])),Pn.Z.primary),_e=En.ZP.div(F||(F=(0,Cn.Z)(["\n  display: flex;\n  algin-items: center;\n  justify-content: space-between;\n"]))),Oe=(En.ZP.div(q||(q=(0,Cn.Z)(["\n  bottom: 5px;\n  position: absolute;\n  right: ",";\n"])),(function(n){return n.right})),En.ZP.div(K||(K=(0,Cn.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"])))),ke=En.ZP.div(U||(U=(0,Cn.Z)(["\n  top: 20px;\n  right: 10px;\n  padding: 5px 10px 0;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),Ae=En.ZP.div(H||(H=(0,Cn.Z)(["\n  display: flex;\n  padding: 3px 7px;\n  margin: 10px 0 15px;\n  color: ",";\n  margin: ",";\n  & p {\n    margin: 0 5px;\n  }\n  &:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n"])),(function(n){return n.color}),(function(n){return n.margin})),Ne=t(7119),De=Xn.fH.MONEY_FIXED_VALUE,Me=Xn.fH.MONEY_PERCENT_OF_ORDER_VALUE,Re=Xn.fH.MONEY_PERCENT_OF_DIFFERENCE_ORDER_VALUE,Ve=Xn.fH.MONEY_ORDER_QUANTITY,Fe=Xn.fH.MONEY_DIFFERENCE_ORDER_QUANTITY,qe=Xn.fH.MONEY_ORDER_WEIGHT,Ke=Xn.fH.MONEY_DIFFERENCE_ORDER_WEIGHT,Ue=(0,L.lazy)((function(){return t.e(7471).then(t.bind(t,7471))})),He=function(n){var e=n.message,t=n.updateFunction,r=(0,B.I0)(),i=function(){var n=(0,z.Z)((0,G.Z)().mark((function n(){return(0,G.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:n.sent.data&&r((0,Gn._w)());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)("p",{style:{margin:10},children:e}),(0,Bn.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center"},children:[(0,Bn.jsx)(sn.Z,{label:"\u0110\xf3ng l\u1ea1i",onClick:function(){return r((0,Gn._w)())}}),(0,Bn.jsx)(cn.Z,{label:"X\xe1c nh\u1eadn",onClick:i})]})]})},Ye=function(n){var e,t=n.customerMargin,r=n.discountPromotionItem,i=(0,B.I0)(),o=(0,B.v9)((function(n){return n.authReducer})).viewerQuery,a=((0,B.v9)((function(n){return n.firstSubModalReducer})).visible,(o||{}).permissions),c=a.includes(Ne.gz.CAN_APPROVE_DISCOUNT_PROMOTION),d=a.includes(Ne.gz.CAN_DELETE_DISCOUNT_PROMOTION),s=(0,L.useRef)(null),l=(0,L.useState)(!1),u=(0,Y.Z)(l,2),p=u[0],x=u[1],h=p?"block":"none",f=r||{},g=f._id,m=(f.code,f.typeCode),Z=f.startTime,v=f.endTime,b=f.title,j=f.conditions,y=f.detail,T=f.isApproved,C=f.payWhenCreateOrder,E=f.isBuyAnyProductOfConditions,P=f.createdAt,w=y.moneyMethodCode,S=y.products,I=y.value,_=y.giftDescription,O=y.paymentTypeCode,k=(0,W.Z)(v),A=(0,Q.Z)(k,new Date),N=(0,J.Z)(new Date,new Date(P))<=1,D=d&&N,M=(0,X.D)(Ln.GG,{refetchQueries:[{query:zn.Kr},"GET_DISCOUNT_PROMOTIONS",{query:zn.hM},"GET_DISCOUNT_PROMOTION_DIARIES"]}),R=(0,Y.Z)(M,1)[0],V=(0,X.D)(Ln.dF,{refetchQueries:[{query:zn.Kr},"GET_DISCOUNT_PROMOTIONS",{query:zn.hM},"GET_DISCOUNT_PROMOTION_DIARIES"]}),F=(0,Y.Z)(V,1)[0],q=m===Xn.t_.OTHER,K=E?"Khi mua B\u1ea5t k\u1ef3 S\u1ea3n ph\u1ea9m":"Khi mua \u0110\u1ed3ng th\u1eddi S\u1ea3n ph\u1ea9m",U=(0,yn.dh)(Z),H=(0,yn.dh)(v),cn=b&&(null===(e=b[0])||void 0===e?void 0:e.showText),dn=C?"Tr\u1ea3 ngay khi \u0111\u1eb7t h\xe0ng":"Tr\u1ea3 sau",sn=function(n,e){var t=1===n.length,r=(function(){switch(e){case Xn.rh.MONEY_ACHIEVE_TYPE:return"\u0111";case Xn.rh.QUANTITY_ACHIEVE_TYPE:return"sp";case Xn.rh.WEIGHT_ACHIEVE_TYPE:"".concat(n[0].netUnitValue).concat(n[0].unitString)}}(),function(n,e){var r=n.code,i=(n.minRequireValue,(n.productInfo||{}).name);t||"".concat(e+1,". ");return(0,Bn.jsxs)("p",{children:["- ",r," - ",(0,jn.Z)(i)]})});return(0,Bn.jsx)(Bn.Fragment,{children:n.map((function(n,e){return(0,Bn.jsx)(L.Fragment,{children:r(n,e)},e)}))})},ln=(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(je,{children:(0,Bn.jsxs)(Ce,{children:["\u0110i\u1ec1u ki\u1ec7n:"," ",j&&!!j.length&&(0,Bn.jsx)(Ee,{children:K})]})}),j&&j.map((function(n,e){var t=n.products,r=n.productConditionType,i=n.minTotalRequireValue,o=(0,yn.RX)(r,t[0].netUnitValue,t[0].unitString);return(0,Bn.jsxs)(ye,{children:[sn(t,r),(0,Bn.jsxs)("p",{children:["T\u1ed5ng ",o.type," c\u1ea7n \u0111\u1ea1t: ",i," ",o.unit]})]},e)}))]}),un=(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)("hr",{})," ",function(){var n=[De,Me,Re,Ve,Fe,qe,Ke];switch(O){case Xn.ad.MONEY_TYPE:var e=n.find((function(n){return n.value===w}));return(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Pe,{children:"T\u1eb7ng/CKKM:"}),(0,Bn.jsx)("p",{children:function(n){if(n.value===De.value)return"Ti\u1ec1n m\u1eb7t ".concat(I.toLocaleString()," \u0111");var e=n.value.includes("percent_of")?"%":"\u0111";return"Ti\u1ec1n = ".concat(I.toLocaleString()).concat(e)+n.label.slice(12)}(e)})]});case Xn.ad.GIFT_TYPE:return(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Pe,{children:"T\u1eb7ng/CKKM:"}),(0,Bn.jsxs)("p",{children:[_," tr\u1ecb gi\xe1 ",I.toLocaleString()," \u0111"]})]});case Xn.ad.TAX_OFFSET:return"C\u1ea5n tr\u1eeb: ".concat(_," ").concat(I.toLocaleString()," \u0111");case Xn.ad.PRODUCT_TYPE:return function(n){var e=function(n,e){var t=n.code,r=n.quantity,i=(n.productInfo||{}).name;return(0,Bn.jsxs)("p",{children:[(0,Bn.jsx)(Se,{children:"- T\u1eb7ng"})," ",r," sp: ",t," - ",(0,jn.Z)(i)]})};return(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Pe,{children:"T\u1eb7ng/CKKM:"}),n.map((function(n,t){return(0,Bn.jsx)(L.Fragment,{children:e(n)},t)}))]})}(S);default:return null}}()]}),pn=c&&!A,xn=!T&&c,hn=pn||xn||q||D,fn=(0,Bn.jsxs)(ke,{display:h,ref:s,children:[xn&&(0,Bn.jsxs)(Ae,{onClick:function(){R({variables:{data:{isApproved:!0},where:{discountPromotionId:g}}})},children:[(0,Bn.jsx)(rn.Z,{fontSize:"small"}),(0,Bn.jsx)("p",{children:"Duy\u1ec7t CK/KM"})]}),pn&&(0,Bn.jsxs)(Ae,{color:Pn.Z.orange,onClick:function(){var n={title:"S\u1eeda CKKM",children:(0,Bn.jsx)(Ze,{discountPromotionItem:r})};i((0,Gn.FV)(n))},children:[(0,Bn.jsx)($.Z,{fontSize:"small"}),(0,Bn.jsx)("p",{children:"S\u1eeda CK/KM"})]}),q&&(0,Bn.jsxs)(Ae,{color:Pn.Z.green,onClick:function(){var n={title:"Tr\u1ea3 CK/KM cho ch\u01b0\u01a1ng tr\xecnh d\u1ea1ng kh\xe1c",children:(0,Bn.jsx)(L.Suspense,{fallback:(0,Bn.jsx)(an.default,{}),children:(0,Bn.jsx)(on.default,{discountPromotionId:g})})};i((0,Gn.dn)(n))},children:[(0,Bn.jsx)(en.Z,{fontSize:"small"}),(0,Bn.jsx)("p",{children:"Tr\u1ea3 CK/KM"})]}),D&&(0,Bn.jsxs)(Ae,{color:Pn.Z.lightRed,onClick:function(){var n={discountPromotionId:g},e={title:"X\xe1c nh\u1eadn xo\xe1",children:(0,Bn.jsx)(He,{message:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn duy\u1ec7t xo\xe1 CKKM n\xe0y?",updateFunction:(0,z.Z)((0,G.Z)().mark((function e(){var t;return(0,G.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({variables:{where:n}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))})};i((0,Gn.om)(e))},children:[(0,Bn.jsx)(tn.Z,{fontSize:"small"}),(0,Bn.jsx)("p",{children:"Xo\xe1 CK/KM"})]})]}),gn=(0,Bn.jsxs)(Bn.Fragment,{children:[(0,Bn.jsx)(Oe,{onClick:function(){return x(!p)},children:(0,Bn.jsx)(nn.Z,{})}),fn]});return(0,L.useEffect)((function(){var n=function(n){s.current&&!s.current.contains(n.target)&&x(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[s]),(0,Bn.jsxs)(ve,{customerMargin:t,canApproveDiscountPromotion:c,children:[hn&&gn,(0,Bn.jsxs)(be,{onClick:function(){if(c){var n={title:"Chi ti\u1ebft chi\u1ebft kh\u1ea5u/khuy\u1ebfn m\u1ea1i",children:(0,Bn.jsx)(L.Suspense,{fallback:(0,Bn.jsx)(an.default,{}),children:(0,Bn.jsx)(Ue,{discountPromotionItem:r})})};i((0,Gn.FV)(n))}},children:[(0,Bn.jsxs)(_e,{children:[(0,Bn.jsxs)(Te,{children:[U," - ",H,":"," ",(0,Bn.jsx)(we,{children:cn})]}),!T&&(0,Bn.jsx)(Se,{children:"Ch\u1edd duy\u1ec7t"})]}),ln,un,(0,Bn.jsx)(_e,{children:(0,Bn.jsx)(Ie,{children:dn})})]})]})};Ye.defaultProps={customerMargin:"15px 5px"};var Ge=Ye},5222:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o,a=t(1413),c=(t(7313),t(168)),d=t(3115),s=t(1237),l=d.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  margin: 0 0 20px;\n"]))),u=d.ZP.div(i||(i=(0,c.Z)(["\n  font-weight: 600;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),s.Z.lightBlack),p=d.ZP.div(o||(o=(0,c.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),x=t(6417),h=function(n){var e=n.title,t=n.children;return(0,x.jsxs)(l,(0,a.Z)((0,a.Z)({},n),{},{children:[(0,x.jsx)(u,{children:e}),(0,x.jsx)(p,{children:t})]}))}},3182:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o=t(1413),a=(t(7313),t(2180)),c=t(6947),d=t(168),s=t(3115),l=t(1237),u=s.ZP.div(r||(r=(0,d.Z)(["\n  height: 30px;\n  margin: 0 10px 0 5px;\n  width: ",";\n"])),(function(n){return n.customerWidth})),p=s.ZP.select(i||(i=(0,d.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: 4px 0 0;\n  height: ",";\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.height}),l.Z.secondary),x=t(6417),h=function(n){var e=n.label,t=n.options,r=n.name,i=n.placeholder,d=n.validations,s=n.register,l=n.isDisabled,h=n.isError,f=n.onChange,g=n.errorMessage,m=n.setFieldValue,Z=n.dependencyFieldName,v=n.customerWidth;return(0,x.jsxs)(u,{customerWidth:v,children:[e&&(0,x.jsx)(a.Z,{label:e}),(0,x.jsxs)(p,(0,o.Z)((0,o.Z)((0,o.Z)({},n),{},{disabled:l,onChange:function(n){f&&f(n),m&&(m(r,n.target.value),m(Z,void 0))}},s(r,d)),{},{children:[(0,x.jsx)("option",{value:"",disabled:!0,children:i}),t.map((function(n,e){return(0,x.jsx)("option",{value:n.value,children:n.label},e)}))]})),(0,x.jsx)(c.Z,{isError:h,errorMessage:g})]})};h.defaultProps={label:"",options:[],height:"27px",isDisabled:!1,name:"selectName",validations:{},customerWidth:"100%",register:function(){},setFieldValue:function(n){},dependencyFieldName:"",placeholder:"-- Vui l\xf2ng ch\u1ecdn --"};var f=h},9673:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o=t(1413),a=(t(7313),t(2180)),c=t(6947),d=t(168),s=t(3115),l=t(1237),u=s.ZP.div(r||(r=(0,d.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),p=s.ZP.input(i||(i=(0,d.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),l.Z.lightWhite,l.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),x=t(6417),h=function(n){var e=n.label,t=n.name,r=n.isError,i=n.errorMessage,d=n.register,s=n.validations,l=n.isInline,h=n.width,f=n.margin,g=l?"auto":h;return(0,x.jsxs)(u,{width:g,margin:f,children:[e&&(0,x.jsx)(a.Z,{label:e}),(0,x.jsx)(p,(0,o.Z)((0,o.Z)({},d(t,s)),n)),(0,x.jsx)(c.Z,{isError:r,errorMessage:i})]})};h.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var f=h},2399:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o=t(1413),a=(t(7313),t(2180)),c=t(6947),d=t(168),s=t(3115),l=t(1237),u=s.ZP.div(r||(r=(0,d.Z)(["\n  width: 100%;\n  margin: 5px 0 0 0;\n"]))),p=s.ZP.textarea(i||(i=(0,d.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  padding: 2px 5px;\n  font-weight: 300;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),l.Z.lightWhite,l.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),x=t(6417),h=function(n){var e=n.label,t=n.name,r=n.isError,i=n.errorMessage,d=n.register,s=n.validations;return(0,x.jsxs)(u,{children:[e&&(0,x.jsx)(a.Z,{label:e}),(0,x.jsx)(p,(0,o.Z)((0,o.Z)({},d(t,s)),n)),(0,x.jsx)(c.Z,{isError:r,errorMessage:i})]})};h.defaultProps={type:"text",validations:{},register:function(){}};var f=h}}]);