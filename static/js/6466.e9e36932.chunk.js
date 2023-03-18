"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6466],{6466:function(n,t,e){e.r(t),e.d(t,{default:function(){return Cn}});var i,r,o,s,c,d,l,a,h,x,p,u,g,j,f,m,Z,y,P,v,b,w,S,T,C,W,D,M,N=e(1413),k=e(885),I=e(7313),K=e(3295),H=e.n(K),L=e(324),z=e(2668),A=e(6881),V=e(168),R=e(3115),B=e(1237),O=(R.ZP.div(i||(i=(0,V.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),R.ZP.div(r||(r=(0,V.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 30px 30px 10px 50px;\n"])))),U=R.ZP.div(o||(o=(0,V.Z)(["\n  margin: 0 70px 0 0;\n  & img {\n    width: 120px;\n    heigth: 70px;\n    object-fit: contain;\n  }\n"]))),E=R.ZP.div(s||(s=(0,V.Z)(["\n  align-items: center;\n"]))),G=R.ZP.p(c||(c=(0,V.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  margin: 40px 0 30px;\n"]))),Q=R.ZP.div(d||(d=(0,V.Z)(["\n  margin: 10px 50px;\n"]))),_=R.ZP.table(l||(l=(0,V.Z)(["\n  width: 90%;\n  margin: 20px auto;\n  border: 1px solid black;\n  & th,\n  td {\n    padding: 5px 10px;\n    border: 1px solid black;\n  }\n"]))),q=R.ZP.p(a||(a=(0,V.Z)(["\n  width: ",";\n  margin: ",";\n  max-width: ",";\n  font-weight: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.maxWidth}),(function(n){return n.fontWeight})),F=R.ZP.p(h||(h=(0,V.Z)(["\n  text-align: right;\n  margin: ",";\n  font-weight: ",";\n  font-style: ",";\n"])),(function(n){return n.margin}),(function(n){return n.fontWeight}),(function(n){return n.fontStyle})),Y=R.ZP.p(x||(x=(0,V.Z)(["\n  text-align: center;\n  font-weight: ",";\n"])),(function(n){return n.fontWeight})),J=R.ZP.p(p||(p=(0,V.Z)(["\n  font-style: italic;\n"]))),X=(R.ZP.p(u||(u=(0,V.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 23px;\n  color: ",";\n"])),B.Z.primary),R.ZP.div(g||(g=(0,V.Z)(["\n  display: flex;\n  margin: 30px 50px;\n"])))),$=e(7123),nn=e(6069),tn=e(6417),en=function(n){n.orderId;var t=n.itemIndex,e=n.productItem,i=(n.viewerQuery,n.updateOrder,n.canUpdateOrder,n.orderedProducts,n.setOrderedProducts,n.isPromotionProduct,e||{}),r=i.orderQty,o=i.code,s=i.name,c=(i.imgUri,i.price),d=(i.quantity,i.netUnitValue),l=i.unitString,a=(i.productInfo,c.toLocaleString()),h="".concat(o," - ").concat((0,A.Z)(s)),x=r.toLocaleString(),p=(r*c).toLocaleString();return(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{children:(0,tn.jsx)(Y,{children:t})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(q,{maxWidth:"250px",children:h})}),(0,tn.jsx)("td",{children:(0,tn.jsxs)(F,{children:[d,l]})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:x})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:a})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:p})})]})},rn=I.forwardRef((function(n,t){var e=n.printOrderData||{},i=e.orderItem,r=e.orderStatus,o=e.totalOrder,s=e.discountMoneyValue,c=e.orderDiscountValue,d=e.totalDiscountPromotionMoney,l=e.totalHaveToPayValue,a=e.saleStaffInfo,h=e.customerInfo,x=i||{},p=x.code,u=x.products,g=x.createdAt,j=(a||{}).fullName,f=h||{},m=f.fullName,Z=f.address,y=f.phoneNumber,P=(0,z.a)($.bV,{fetchPolicy:"cache-and-network"}).data,v=P&&P.global||{},b=v.companyLogo,w=v.companyName,S=v.companyAddress,T=v.companyHotline,C=v.companyTaxCode,W=v.companyEmail,D=v.companyWebsiteAddress,M=u.map((function(n,t){return(0,tn.jsx)(en,{itemIndex:t+1,productItem:n},t)}));return(0,tn.jsxs)("div",{ref:t,children:[(0,tn.jsx)("style",{children:"@page {size: A4;}"}),(0,tn.jsxs)(O,{children:[(0,tn.jsx)(U,{children:(0,tn.jsx)("img",{src:b,alt:"company-logo"})}),(0,tn.jsxs)(E,{children:[(0,tn.jsx)("p",{children:w}),(0,tn.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",S]}),(0,tn.jsxs)("p",{children:["MST: ",C," - Hotline: ",T]}),(0,tn.jsxs)("p",{children:["Website: ",D," - Email: ",W]})]})]}),(0,tn.jsx)("hr",{}),(0,tn.jsx)(G,{children:"PHI\u1ebeU MUA H\xc0NG"}),(0,tn.jsxs)(Q,{children:[(0,tn.jsxs)("p",{children:["M\xe3 \u0111\u01a1n: ",p," - Ng\xe0y \u0111\u1eb7t: ",(0,nn.dh)(g)]}),(0,tn.jsxs)("p",{children:["Kh\xe1ch h\xe0ng: ",m," - S\u0110T: ",y]}),(0,tn.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",Z]}),(0,tn.jsxs)("p",{children:["Ph\u1ee5 tr\xe1ch: ",j]}),(0,tn.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i: ",r]})]}),(0,tn.jsxs)(_,{children:[(0,tn.jsx)("thead",{children:(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("th",{children:(0,tn.jsx)(Y,{fontWeight:700,children:"STT"})}),(0,tn.jsx)("th",{children:(0,tn.jsx)(q,{fontWeight:700,children:"M\xe3 - T\xean h\xe0ng"})}),(0,tn.jsx)("th",{children:(0,tn.jsx)(F,{fontWeight:700,children:"\u0110\u01a1n v\u1ecb"})}),(0,tn.jsx)("th",{children:(0,tn.jsx)(F,{fontWeight:700,children:"S\u1ed1 l\u01b0\u1ee3ng"})}),(0,tn.jsx)("th",{children:(0,tn.jsx)(F,{fontWeight:700,children:"\u0110\u01a1n gi\xe1"})}),(0,tn.jsx)("th",{children:(0,tn.jsx)(F,{fontWeight:700,children:"Th\xe0nh ti\u1ec1n (\u0111\u1ed3ng)"})})]})}),(0,tn.jsxs)("tbody",{children:[M,(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{colSpan:5,children:(0,tn.jsx)(Y,{children:"C\u1ed9ng ti\u1ec1n"})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:o.toLocaleString()})})]}),(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{colSpan:5,children:(0,tn.jsxs)(Y,{children:["CK tr\xean H\u0110 (",c,"%)"]})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:0!==Number(s)?s:0})})]}),!!d&&(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{colSpan:5,children:(0,tn.jsx)(Y,{children:"Ti\u1ec1n t\u1eb7ng ngay"})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{children:d.toLocaleString()})})]}),(0,tn.jsxs)("tr",{children:[(0,tn.jsx)("td",{colSpan:5,children:(0,tn.jsx)(Y,{fontWeight:700,children:"T\u1ed5ng thanh to\xe1n"})}),(0,tn.jsx)("td",{children:(0,tn.jsx)(F,{fontWeight:700,children:l.toLocaleString()})})]})]})]}),(0,tn.jsxs)(F,{margin:"0 50px",fontStyle:"italic",children:["Ng\xe0y ... th\xe1ng ... n\u0103m ",(new Date).getFullYear()]}),(0,tn.jsxs)(X,{children:[(0,tn.jsxs)("div",{children:[(0,tn.jsx)(q,{width:"150px",fontWeight:700,children:"Ng\u01b0\u1eddi l\u1eadp"}),(0,tn.jsx)(J,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,tn.jsxs)("div",{children:[(0,tn.jsx)(q,{width:"150px",fontWeight:700,children:"Ng\u01b0\u1eddi nh\u1eadn"}),(0,tn.jsx)(J,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,tn.jsxs)("div",{children:[(0,tn.jsx)(q,{width:"150px",fontWeight:700,children:"Th\u1ee7 kho"}),(0,tn.jsx)(J,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,tn.jsxs)("div",{children:[(0,tn.jsx)(q,{width:"150px",fontWeight:700,children:"K\u1ebf to\xe1n"}),(0,tn.jsx)(J,{children:"(K\xfd, h\u1ecd t\xean)"})]}),(0,tn.jsxs)("div",{children:[(0,tn.jsx)(q,{fontWeight:700,children:"Gi\xe1m \u0111\u1ed1c"}),(0,tn.jsx)(J,{children:"(K\xfd, \u0111\xf3ng d\u1ea5u)"})]})]})]})})),on=(R.ZP.div(j||(j=(0,V.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),R.ZP.div(f||(f=(0,V.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 30px 30px 10px 50px;\n"])))),sn=R.ZP.div(m||(m=(0,V.Z)(["\n  margin: 0 70px 0 0;\n  & img {\n    width: 120px;\n    heigth: 70px;\n    object-fit: contain;\n  }\n"]))),cn=R.ZP.div(Z||(Z=(0,V.Z)(["\n  align-items: center;\n"]))),dn=function(n){var t=(0,z.a)($.bV,{fetchPolicy:"cache-and-network"}).data,e=t&&t.global||{},i=e.companyLogo,r=e.companyName,o=e.companyAddress,s=e.companyHotline,c=e.companyTaxCode,d=e.companyEmail,l=e.companyWebsiteAddress;return(0,tn.jsxs)(on,{children:[(0,tn.jsx)(sn,{children:(0,tn.jsx)("img",{src:i,alt:"company-logo"})}),(0,tn.jsxs)(cn,{children:[(0,tn.jsx)("p",{children:r}),(0,tn.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",o]}),(0,tn.jsxs)("p",{children:["MST: ",c," - Hotline: ",s]}),(0,tn.jsxs)("p",{children:["Website: ",l," - Email: ",d]})]})]})},ln=e(468),an=R.ZP.p(y||(y=(0,V.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  margin: 40px 0 30px;\n"]))),hn=R.ZP.div(P||(P=(0,V.Z)(["\n  margin: 10px 40px;\n"]))),xn=I.forwardRef((function(n,t){var e=n.printDiscountPromotionsData||{},i=e.discountsPromotions,r=void 0===i?[]:i,o=e.selectedCustomer,s=void 0===o?{}:o,c=s.fullName,d=s.phoneNumber,l=c?"".concat(c," - S\u0110T: ").concat(d):"T\u1ea5t c\u1ea3 KH (ph\u1ee5 tr\xe1ch)";return(0,tn.jsxs)("div",{ref:t,children:[(0,tn.jsx)("style",{children:"@page {size: A4;}"}),(0,tn.jsx)(dn,{}),(0,tn.jsx)("hr",{}),(0,tn.jsx)(an,{children:"DANH S\xc1CH CKKM"}),(0,tn.jsx)(hn,{children:(0,tn.jsxs)("p",{children:["C\u1ee7a kh\xe1ch h\xe0ng: ",l]})}),r.map((function(n,t){return(0,tn.jsx)(ln.Z,{customerMargin:"10px 40px",discountPromotionItem:n.node},t)}))]})})),pn=e(6233),un=R.ZP.p(v||(v=(0,V.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  margin: 40px 0 30px;\n"]))),gn=R.ZP.div(b||(b=(0,V.Z)(["\n  margin: 10px 30px;\n"]))),jn=R.ZP.span(w||(w=(0,V.Z)(["\n  width: 150px;\n  display: inline-block;\n"]))),fn=I.forwardRef((function(n,t){var e=n.printDiscountPromotionReportData||{},i=e.discountPromotionReports,r=void 0===i?[]:i,o=e.selectedCustomer,s=void 0===o?{}:o,c=e.subTotalTaxOffsetMoneyValue,d=void 0===c?0:c,l=e.subTotalCashMoneyValue,a=void 0===l?0:l,h=e.subTotalGiftMoneyValue,x=void 0===h?0:h,p=e.subTotalProducMoneyValue,u=void 0===p?0:p,g=e.totalMoneyValue,j=void 0===g?0:g,f=s.fullName,m=s.phoneNumber,Z=f?"".concat(f," - S\u0110T: ").concat(m):"Ch\u01b0a ch\u1ecdn KH n\xe0o";return(0,tn.jsxs)("div",{ref:t,children:[(0,tn.jsx)("style",{children:"@page {size: A4;}"}),(0,tn.jsx)(dn,{}),(0,tn.jsx)("hr",{}),(0,tn.jsx)(un,{children:"B\xc1O C\xc1O CKKM"}),(0,tn.jsxs)(gn,{children:[(0,tn.jsxs)("p",{children:["Kh\xe1ch h\xe0ng: ",Z]}),(0,tn.jsxs)("p",{children:[(0,tn.jsx)(jn,{children:"Ti\u1ec1n m\u1eb7t"}),":"," ",a.toLocaleString()," \u0111"]}),(0,tn.jsxs)("p",{children:[(0,tn.jsx)(jn,{children:"Hi\u1ec7n v\u1eadt"}),":"," ",x.toLocaleString()," \u0111"]}),(0,tn.jsxs)("p",{children:[(0,tn.jsx)(jn,{children:"S\u1ea3n ph\u1ea9m t\u1eb7ng"}),":"," ",u.toLocaleString()," \u0111"]}),(0,tn.jsxs)("p",{children:[(0,tn.jsx)(jn,{children:"C\u1ea5n tr\u1eeb thu\u1ebf"}),":"," ",d.toLocaleString()," \u0111"]}),(0,tn.jsxs)("p",{children:[(0,tn.jsx)(jn,{children:"T\u1ed5ng gi\xe1 tr\u1ecb"}),":"," ",(0,tn.jsx)("span",{style:{fontWeight:700},children:j.toLocaleString()})," ","\u0111"]})]}),r.map((function(n,t){return(0,tn.jsx)(pn.Z,{reportItem:n,customerMargin:"0 30px"},t)}))]})})),mn=e(3867),Zn=R.ZP.p(S||(S=(0,V.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  margin: 40px 0 30px;\n"]))),yn=R.ZP.div(T||(T=(0,V.Z)(["\n  margin: 10px 30px;\n"]))),Pn=I.forwardRef((function(n,t){var e=n.printDiscountPromotionTrackingData||{},i=e.diariesData,r=void 0===i?[]:i,o=e.selectedCustomer,s=void 0===o?{}:o,c=s.fullName,d=s.phoneNumber,l=c?"".concat(c," - S\u0110T: ").concat(d):"Ch\u01b0a ch\u1ecdn KH n\xe0o",a=r.map((function(n,t){var e=n.node||{},i=e.discountPromotionInfo,r=e.reachedCount,o=e.totalBePaidMoneyValue,s={diaryCount:r,diaryInfo:n.node,totalBePaidMoneyValue:o},c=(n.node||{}).customerDiaryInfo,d=i||n.node,l=i?s:c;return(0,tn.jsx)(mn.Z,{customerMargin:"10px 30px",customerDiaryInfo:l,discountPromotionItem:d},t)}));return(0,tn.jsxs)("div",{ref:t,children:[(0,tn.jsx)("style",{children:"@page {size: A4;}"}),(0,tn.jsx)(dn,{}),(0,tn.jsx)("hr",{}),(0,tn.jsx)(Zn,{children:"THEO D\xd5I CKKM"}),(0,tn.jsx)(yn,{children:(0,tn.jsxs)("p",{children:["C\u1ee7a kh\xe1ch h\xe0ng: ",l]})}),a]})})),vn=R.ZP.div(C||(C=(0,V.Z)(["\n  position: relative;\n"]))),bn=R.ZP.div(W||(W=(0,V.Z)(["\n  display: none;\n"]))),wn=R.ZP.button(D||(D=(0,V.Z)(["\n  border: none;\n  display: flex;\n  cursor: pointer;\n  font-size: 12px;\n  align-items: center;\n  color: ",";\n  background-color: transparent;\n  margin: ",";\n"])),B.Z.primary,(function(n){return n.margin})),Sn=R.ZP.p(M||(M=(0,V.Z)(["\n  width: 100px;\n  font-size: 10px;\n  text-align: right;\n  position: absolute;\n  right: ",";\n  bottom: ",";\n"])),(function(n){return n.loadingRightBottom.right}),(function(n){return n.loadingRightBottom.bottom})),Tn=function(n){var t=n.printOrderData,e=n.customerButtonMargin,i=n.printDiscountPromotionsData,r=n.printDiscountPromotionTrackingData,o=n.printDiscountPromotionReportData,s=e?{right:"0",bottom:"-15px"}:{right:"10px",bottom:"-10px"},c=I.useRef(null),d=I.useRef(null),l=I.useState(!1),a=(0,k.Z)(l,2),h=a[0],x=a[1],p=I.useState("old boring text"),u=(0,k.Z)(p,2),g=u[0],j=u[1],f=I.useCallback((function(){}),[]),m=I.useCallback((function(){}),[]),Z=I.useCallback((function(){return x(!0),j("Loading new text..."),new Promise((function(n){d.current=n,setTimeout((function(){x(!1),j("New, Updated Text!"),n()}),2e3)}))}),[x,j]);I.useEffect((function(){"New, Updated Text!"===g&&"function"===typeof d.current&&d.current()}),[d.current,g]);var y=I.useCallback((function(){return c.current}),[c.current]),P=I.useCallback((function(){return(0,tn.jsxs)(wn,{margin:e,children:["IN ",(0,tn.jsx)(L.Z,{style:{fontSize:18,marginLeft:3}})]})}),[]),v=t?(0,tn.jsx)(rn,(0,N.Z)({ref:c},n)):i?(0,tn.jsx)(xn,(0,N.Z)({ref:c},n)):r?(0,tn.jsx)(Pn,(0,N.Z)({ref:c},n)):o?(0,tn.jsx)(fn,(0,N.Z)({ref:c},n)):null;return(0,tn.jsxs)(vn,{children:[(0,tn.jsx)(H(),{removeAfterPrint:!0,documentTitle:"G5 Printing",content:y,trigger:P,onAfterPrint:f,onBeforePrint:m,onBeforeGetContent:Z}),h&&(0,tn.jsx)(Sn,{loadingRightBottom:s,children:"Chu\u1ea9n b\u1ecb in..."}),(0,tn.jsx)(bn,{children:v})]})};Tn.defaultProps={customerButtonMargin:"20px 15px 30px auto"};var Cn=Tn}}]);