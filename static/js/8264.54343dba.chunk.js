"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8264],{6346:function(n,i,t){t.d(i,{Z:function(){return j}});t(7313);var e,r,d,c,l=t(168),h=t(3115),s=(h.ZP.div(e||(e=(0,l.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),h.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 30px 30px 10px 50px;\n"])))),o=h.ZP.div(d||(d=(0,l.Z)(["\n  margin: 0 70px 0 0;\n  & img {\n    width: 120px;\n    heigth: 70px;\n    object-fit: contain;\n  }\n"]))),x=h.ZP.div(c||(c=(0,l.Z)(["\n  align-items: center;\n"]))),a=t(3070),p=t(6417),j=function(n){var i=localStorage.getItem(a.pP),t=i&&JSON.parse(i)||{},e=t.companyLogo,r=t.companyName,d=t.companyAddress,c=t.companyHotline,l=t.companyTaxCode,h=t.companyEmail,j=t.companyWebsiteAddress;return(0,p.jsxs)(s,{children:[(0,p.jsx)(o,{children:(0,p.jsx)("img",{src:e,alt:"company-logo"})}),(0,p.jsxs)(x,{children:[(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",d]}),(0,p.jsxs)("p",{children:["MST: ",l," - Hotline: ",c]}),(0,p.jsxs)("p",{children:["Website: ",j," - Email: ",h]})]})]})}},8264:function(n,i,t){t.r(i),t.d(i,{default:function(){return A}});var e,r,d,c,l,h,s,o,x,a,p,j,g,u=t(7313),f=t(6346),m=t(6881),v=t(168),Z=t(3115),y=t(1237),P=(Z.ZP.div(e||(e=(0,v.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),Z.ZP.div(r||(r=(0,v.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 30px 30px 10px 50px;\n"]))),Z.ZP.div(d||(d=(0,v.Z)(["\n  margin: 0 70px 0 0;\n  & img {\n    width: 120px;\n    heigth: 70px;\n    object-fit: contain;\n  }\n"]))),Z.ZP.div(c||(c=(0,v.Z)(["\n  align-items: center;\n"]))),Z.ZP.p(l||(l=(0,v.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  margin: 40px 0 30px;\n"])))),S=Z.ZP.div(h||(h=(0,v.Z)(["\n  margin: 10px 50px;\n"]))),W=Z.ZP.table(s||(s=(0,v.Z)(["\n  width: 90%;\n  margin: 20px auto;\n  border: 1px solid black;\n  & th,\n  td {\n    padding: 5px 10px;\n    border: 1px solid black;\n  }\n"]))),w=Z.ZP.p(o||(o=(0,v.Z)(["\n  width: ",";\n  margin: ",";\n  max-width: ",";\n  font-weight: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.maxWidth}),(function(n){return n.fontWeight})),b=Z.ZP.p(x||(x=(0,v.Z)(["\n  text-align: right;\n  margin: ",";\n  font-weight: ",";\n  font-style: ",";\n"])),(function(n){return n.margin}),(function(n){return n.fontWeight}),(function(n){return n.fontStyle})),I=Z.ZP.p(a||(a=(0,v.Z)(["\n  text-align: center;\n  font-weight: ",";\n"])),(function(n){return n.fontWeight})),T=Z.ZP.p(p||(p=(0,v.Z)(["\n  font-style: italic;\n"]))),N=(Z.ZP.p(j||(j=(0,v.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 23px;\n  color: ",";\n"])),y.Z.primary),Z.ZP.div(g||(g=(0,v.Z)(["\n  display: flex;\n  margin: 30px 50px;\n"])))),k=t(6069),K=t(6417),L=function(n){var i,t,e=n.itemIndex,r=n.productItem,d=n.isPromotionProduct,c=r||{},l=c.orderQty,h=c.quantity,s=c.code,o=c.name,x=c.price,a=c.netUnitValue,p=c.unitString,j=c.productInfo||{},g=j.name,u=(j.quantityWarning,j.stockQtyByApprovedOrders,j.stockQtyByShippedOutOrders,d?0:null===x||void 0===x?void 0:x.toLocaleString()),f="".concat(s," - ").concat((0,m.Z)(o||g)),v=null===(i=l||h||0)||void 0===i?void 0:i.toLocaleString(),Z=d?0:null===(t=l*x)||void 0===t?void 0:t.toLocaleString();return(0,K.jsxs)("tr",{children:[(0,K.jsx)("td",{children:(0,K.jsx)(I,{children:e})}),(0,K.jsx)("td",{children:(0,K.jsx)(w,{maxWidth:"250px",children:f})}),(0,K.jsx)("td",{children:(0,K.jsxs)(b,{children:[a,p]})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:v})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:u})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:Z})})]})},A=u.forwardRef((function(n,i){var t=n.printOrderData||{},e=t.orderItem,r=t.orderStatus,d=t.totalOrder,c=t.discountMoneyValue,l=t.orderDiscountValue,h=t.totalDiscountPromotionMoney,s=t.totalHaveToPayValue,o=t.saleStaffInfo,x=t.customerInfo,a=e||{},p=a.code,j=a.products,g=a.promotionProducts,u=a.createdAt,m=(o||{}).fullName,v=x||{},Z=v.fullName,y=v.address,A=v.phoneNumber,H=j.map((function(n,i){return(0,K.jsx)(L,{itemIndex:i+1,productItem:n},i)})),M=g.map((function(n,i){return(0,K.jsx)(L,{isPromotionProduct:!0,productItem:n,itemIndex:i+1},i)}));return(0,K.jsxs)("div",{ref:i,children:[(0,K.jsx)("style",{children:"@page {size: A4;}"}),(0,K.jsx)(f.Z,{}),(0,K.jsx)("hr",{}),(0,K.jsx)(P,{children:"PHI\u1ebeU MUA H\xc0NG"}),(0,K.jsxs)(S,{children:[(0,K.jsxs)("p",{children:["M\xe3 \u0111\u01a1n: ",p," - Ng\xe0y \u0111\u1eb7t: ",(0,k.dh)(u)]}),(0,K.jsxs)("p",{children:["Kh\xe1ch h\xe0ng: ",Z," - S\u0110T: ",A]}),(0,K.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",y]}),(0,K.jsxs)("p",{children:["Ph\u1ee5 tr\xe1ch: ",m]}),(0,K.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i: ",r]})]}),(0,K.jsxs)(W,{children:[(0,K.jsx)("thead",{children:(0,K.jsxs)("tr",{children:[(0,K.jsx)("th",{children:(0,K.jsx)(I,{fontWeight:700,children:"STT"})}),(0,K.jsx)("th",{children:(0,K.jsx)(w,{fontWeight:700,children:"M\xe3 - T\xean h\xe0ng"})}),(0,K.jsx)("th",{children:(0,K.jsx)(b,{fontWeight:700,children:"\u0110\u01a1n v\u1ecb"})}),(0,K.jsx)("th",{children:(0,K.jsx)(b,{fontWeight:700,children:"S\u1ed1 l\u01b0\u1ee3ng"})}),(0,K.jsx)("th",{children:(0,K.jsx)(b,{fontWeight:700,children:"\u0110\u01a1n gi\xe1"})}),(0,K.jsx)("th",{children:(0,K.jsx)(b,{fontWeight:700,children:"Th\xe0nh ti\u1ec1n (\u0111\u1ed3ng)"})})]})}),(0,K.jsxs)("tbody",{children:[H,!(null===g||void 0===g||!g.length)&&(0,K.jsx)("tr",{children:(0,K.jsx)("td",{colSpan:6,children:(0,K.jsx)(w,{fontWeight:"700",children:"S\u1ea3n ph\u1ea9m t\u1eb7ng:"})})}),!(null===g||void 0===g||!g.length)&&M,(0,K.jsxs)("tr",{children:[(0,K.jsx)("td",{colSpan:5,children:(0,K.jsx)(I,{children:"C\u1ed9ng ti\u1ec1n"})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:null===d||void 0===d?void 0:d.toLocaleString()})})]}),(0,K.jsxs)("tr",{children:[(0,K.jsx)("td",{colSpan:5,children:(0,K.jsxs)(I,{children:["CK tr\xean H\u0110 (",l,"%)"]})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:0!==Number(c)?c:0})})]}),!!h&&(0,K.jsxs)("tr",{children:[(0,K.jsx)("td",{colSpan:5,children:(0,K.jsx)(I,{children:"Ti\u1ec1n t\u1eb7ng ngay"})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{children:null===h||void 0===h?void 0:h.toLocaleString()})})]}),(0,K.jsxs)("tr",{children:[(0,K.jsx)("td",{colSpan:5,children:(0,K.jsx)(I,{fontWeight:700,children:"T\u1ed5ng thanh to\xe1n"})}),(0,K.jsx)("td",{children:(0,K.jsx)(b,{fontWeight:700,children:null===s||void 0===s?void 0:s.toLocaleString()})})]})]})]}),(0,K.jsxs)(b,{margin:"0 50px",fontStyle:"italic",children:["Ng\xe0y ... th\xe1ng ... n\u0103m ",(new Date).getFullYear()]}),(0,K.jsxs)(N,{children:[(0,K.jsxs)("div",{children:[(0,K.jsx)(w,{width:"150px",fontWeight:700,children:"Ng\u01b0\u1eddi l\u1eadp"}),(0,K.jsx)(T,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,K.jsxs)("div",{children:[(0,K.jsx)(w,{width:"150px",fontWeight:700,children:"Ng\u01b0\u1eddi nh\u1eadn"}),(0,K.jsx)(T,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,K.jsxs)("div",{children:[(0,K.jsx)(w,{width:"150px",fontWeight:700,children:"Th\u1ee7 kho"}),(0,K.jsx)(T,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,K.jsxs)("div",{children:[(0,K.jsx)(w,{width:"150px",fontWeight:700,children:"K\u1ebf to\xe1n"}),(0,K.jsx)(T,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,K.jsxs)("div",{children:[(0,K.jsx)(w,{fontWeight:700,children:"Gi\xe1m \u0111\u1ed1c"}),(0,K.jsx)(T,{children:"(K\xfd, \u0111\xf3ng d\u1ea5u)"})]})]})]})}))}}]);