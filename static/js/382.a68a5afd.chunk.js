"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[382,790,4311],{4214:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(1413),i=(t(7313),t(168)),c=t(3115),a=t(1237),u=c.ZP.button(r||(r=(0,i.Z)(["\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin}),(function(n){return n.padding}),(function(n){return n.fontWeight}),a.Z.lightRed),s=t(6417),d=function(n){var e=n.label;return(0,s.jsx)(u,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};d.defaultProps={margin:"5px",label:"N\xfat b\u1ea5m",onClick:function(){},padding:"2px 7px"};var l=d},2262:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(1413),i=(t(7313),t(168)),c=t(3115),a=t(1237),u=c.ZP.button(r||(r=(0,i.Z)(["\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 5px;\n  height: fit-content;\n  color: ",";\n  margin: ",";\n  padding: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),a.Z.black,(function(n){return n.margin}),(function(n){return n.padding}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:a.Z.secondary})),s=t(6417),d=function(n){var e=n.label;return(0,s.jsx)(u,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){},margin:"5px",padding:"3px 7px"};var l=d},658:function(n,e,t){var r=t(1413),o=t(885),i=t(7313),c=t(2668),a=t(3222),u=t(1677),s=t(6069),d=t(3354),l=t(6947),p=t(2206),f=t(3302),h=t(7123),x=t(3070),g=t(6417),v=function(n){var e,t,v,m,Z,b=n.isError,E=n.children,w=n.showDateTimeInputs,y=n.showSelectAllButton,C=n.searchPlaceholder,R=(n.searchGuide,n.onClickSelectResultItem),_=(n.emptySearchResultMessage,n.inputStartTime),j=n.setInputStartTime,k=n.inputEndTime,S=n.setInputEndTime,O=n.canSearchCustomer,A=n.noOwnAccountFilter,P=n.printSection,T=(0,s.SB)(),D=["node.fullName","node.address","node.phoneNumber"],N=((0,a.v9)((function(n){return n.authReducer})).viewerQuery||{}).roles,I=N.includes(x.If.CUSTOMER)||N.includes(x.If.STAFF_OF_CUSTOMER),z=(0,i.useState)(""),M=(0,o.Z)(z,2),F=M[0],B=M[1],L=(0,c.a)(h.q6,{variables:{filter:(0,r.Z)({text:F||"a",roles:[x.If.CUSTOMER]},A&&{noOwnAccountFilter:A})}}),H=L.data,G=L.fetchMore,W=H&&(null===(e=H.accounts)||void 0===e?void 0:e.edges)||[],V=H&&(null===(t=H.accounts)||void 0===t?void 0:t.pageInfo)||{},Q=V.hasNextPage,U=(0,i.useState)({node:{fullName:""}}),q=(0,o.Z)(U,2),X=q[0],Y=q[1],K=F||X&&(null===(v=X.node)||void 0===v?void 0:v.fullName)||"",J=(0,i.useState)(!1),$=(0,o.Z)(J,2),nn=$[0],en=$[1],tn=(0,i.useRef)(null),rn=(0,i.useRef)(null),on=nn?1:0,cn=nn?"500px":"0",an=nn?"block":"none",un=nn?"0 0 0 10px":"0 0 0 24px",sn=nn?"25px":"calc(100% - 18px)",dn=function(n){en(!1),B(""),R(n),Y(n)},ln=(0,g.jsx)(g.Fragment,{children:!I&&O&&(0,g.jsxs)(f.IH,{children:[(0,g.jsxs)(f.HE,{children:["Kh\xe1ch h\xe0ng:"," ",(0,g.jsxs)(f.p5,{onClick:function(){en(!0),Y({node:{}}),tn.current&&tn.current.focus()},children:[(0,g.jsx)(f.GB,{ref:tn,value:K,placeholder:X.node.fullName||C,searchinputpadding:un,onChange:function(n){return B(n.target.value)}}),(0,g.jsx)(f.tv,{searchiconright:sn,children:"\ud83d\udd0e"}),(0,g.jsx)(f.E5,{upiconopacity:on,onClick:function(){en(!1),B("")},children:"\u2716"})]}),(null===(m=X.node)||void 0===m?void 0:m.fullName)&&y&&(0,g.jsx)(u.Z,{label:"T\u1ea5t c\u1ea3",onClick:function(){return dn({node:{}})}}),!T&&(null===(Z=X.node)||void 0===Z?void 0:Z.fullName)&&(0,g.jsx)(f.su,{children:P})]}),(0,g.jsx)(l.Z,{isError:b}),(0,g.jsxs)(f.c4,{ref:rn,modalheight:cn,modaldisplay:an,children:[(0,g.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),function(){var n=W&&0===W.length;return n?null:W.map((function(n,e){var t=D.map((function(e){return(0,s.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,g.jsx)(f._K,{children:(0,g.jsx)(f.o8,{onClick:function(){return dn(n)},children:r})},e)}))}(),!!Q&&(0,g.jsx)(f.jl,{children:(0,g.jsx)(u.Z,{label:"T\u1ea3i th\xeam",onClick:function(){G({variables:{cursor:V.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,p.d0)("searchNormalProducts",t,n)}})}})})]})]})});return(0,i.useEffect)((function(){var n=function(n){rn.current&&!rn.current.contains(n.target)&&(en(!1),B(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[rn]),(0,g.jsxs)(d.Z,{style:{marginBottom:20},children:[!I&&ln,w&&(0,g.jsxs)("div",{children:["Th\u1eddi gian:"," ",(0,g.jsx)(f.wi,{type:"date",value:_,onChange:function(n){return j(n.target.value)}})," ","-"," ",(0,g.jsx)(f.wi,{type:"date",value:k,onChange:function(n){return S(n.target.value)}})]}),E&&E]})};v.defaultProps={inputStartTime:"",inputEndTime:"",setInputEndTime:function(){},setInputStartTime:function(){},onClickSelectResultItem:function(){},isError:!1,showDateTimeInputs:!0,showSelectAllButton:!0,searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u v\xe0o \xf4 tr\xean \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"},e.Z=v},3302:function(n,e,t){t.d(e,{E5:function(){return j},GB:function(){return R},HE:function(){return w},IH:function(){return E},_K:function(){return S},c4:function(){return k},jl:function(){return A},o8:function(){return O},p5:function(){return C},su:function(){return y},tv:function(){return _},wi:function(){return P}});var r,o,i,c,a,u,s,d,l,p,f,h,x,g,v,m=t(168),Z=t(3115),b=t(1237),E=(Z.ZP.div(r||(r=(0,m.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),Z.ZP.div(o||(o=(0,m.Z)(["\n  position: relative;\n  margin: 0 0 12px;\n"])))),w=(Z.ZP.div(i||(i=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),Z.ZP.div(c||(c=(0,m.Z)(["\n  position: relative;\n"])))),y=Z.ZP.div(a||(a=(0,m.Z)(["\n  top: 0;\n  right: 0;\n  position: absolute;\n"]))),C=Z.ZP.div(u||(u=(0,m.Z)(["\n  position: relative;\n  display: inline-block;\n  border-bottom: solid 1px #c4c4c4;\n"]))),R=Z.ZP.input(s||(s=(0,m.Z)(["\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  color: ",";\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),b.Z.lightBlack,(function(n){return n.searchinputpadding})),_=Z.ZP.div(d||(d=(0,m.Z)(["\n  top: 1px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),j=Z.ZP.p(l||(l=(0,m.Z)(["\n  top: 1px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),k=(Z.ZP.div(p||(p=(0,m.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),Z.ZP.div(f||(f=(0,m.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),S=Z.ZP.div(h||(h=(0,m.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: 1px solid ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),b.Z.bgGray,b.Z.rgbaPrimary),O=Z.ZP.p(x||(x=(0,m.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),A=Z.ZP.div(g||(g=(0,m.Z)(["\n  margin: 10px auto;\n"]))),P=Z.ZP.input(v||(v=(0,m.Z)(["\n  border: none;\n  margin: 0 12px 0 12px;\n  padding: 1px 5px;\n  font-size: 12px;\n  font-weight: 300;\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n  @media (max-width: 768px) {\n    width: 100px;\n    margin: 0 5px 0 5px;\n  }\n"])),b.Z.secondary)},3354:function(n,e,t){t.d(e,{Z:function(){return u}});var r,o=t(1413),i=(t(7313),t(168)),c=t(3115).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  margin: 10px 0;\n  background-color: #fff;\n  padding: 20px 10px 20px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),a=t(6417),u=function(n){var e=n.children;return(0,a.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:e}))}},382:function(n,e,t){t.r(e),t.d(e,{default:function(){return In}});var r,o,i,c,a,u,s,d,l,p,f,h,x,g,v,m,Z,b,E,w=t(1413),y=t(2982),C=t(4165),R=t(5861),_=t(885),j=t(7313),k=t(1156),S=t(8589),O=t(790),A=t(3306),P=t(2668),T=t(3222),D=t(6618),N=t(8728),I=t(1997),z=t(3745),M=t(750),F=t(2961),B=t(643),L=t(6173),H=t(4641),G=t(4214),W=t(2262),V=t(6069),Q=t(658),U=t(2206),q=t(168),X=t(3115),Y=t(1237),K=X.ZP.div(r||(r=(0,q.Z)(["\n  font-size: 12px;\n  padding: 50px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),J=X.ZP.div(o||(o=(0,q.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  font-size: 15px;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  & h5 {\n    font-size: 13px;\n    font-weight: 700;\n  }\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),$=X.ZP.div(i||(i=(0,q.Z)(["\n  padding: 0 5px;\n  font-size: 12px;\n"]))),nn=(X.ZP.div(c||(c=(0,q.Z)(["\n  margin: 20px;\n  font-size: 12px;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),X.ZP.div(a||(a=(0,q.Z)(["\n  display: flex;\n  margin: 0 0 10px;\n  align-items: center;\n"]))),X.ZP.div(u||(u=(0,q.Z)(["\n  width: 150px;\n"]))),X.ZP.p(s||(s=(0,q.Z)(["\n  margin: 20px 5px;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: ",";\n"])),Y.Z.lightBlack)),en=X.ZP.span(d||(d=(0,q.Z)(["\n  font-size: 13px;\n  font-weight: 700;\n  color: ",";\n"])),Y.Z.primary),tn=X.ZP.div(l||(l=(0,q.Z)(["\n  display: flex;\n  margin: 30px auto;\n  width: fit-content;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n"]))),rn=X.ZP.div(p||(p=(0,q.Z)(["\n  display: flex;\n  cursor: pointer;\n  padding: 5px 7px;\n  text-align: center;\n  align-items: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n  @media (max-width: 768px) {\n    padding: 3px 4px;\n  }\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),on=(X.ZP.span(f||(f=(0,q.Z)(["\n  cursor: pointer;\n  text-align: center;\n  margin: 0 3px 0;\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.activeStyle.textColor}),(function(n){return n.activeStyle.fontWeight})),X.ZP.div(h||(h=(0,q.Z)(["\n  margin: 20px 0;\n  cursor: pointer;\n  border-radius: 4px;\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"])))),cn=X.ZP.div(x||(x=(0,q.Z)([""]))),an=X.ZP.div(g||(g=(0,q.Z)(["\n  display: flex;\n  margin: 10px 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),un=X.ZP.p(v||(v=(0,q.Z)(["\n  font-size: 12px;\n  font-style: italic;\n  color: ",";\n"])),Y.Z.secondary),sn=X.ZP.p(m||(m=(0,q.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: ",";\n"])),Y.Z.primary),dn=X.ZP.div(Z||(Z=(0,q.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),ln=X.ZP.div(b||(b=(0,q.Z)(["\n  top: 15px;\n  right: 10px;\n  padding: 0 10px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),pn=X.ZP.div(E||(E=(0,q.Z)(["\n  display: flex;\n  padding: 0 15px;\n  color: ",";\n  margin: ",";\n"])),(function(n){return n.color}),(function(n){return n.margin})),fn=t(2153),hn=t(5164),xn=t(3454),gn=t(3163),vn=t(7123),mn=t(3070),Zn=t(7119),bn=t(6417),En=Zn.gz.CAN_APPROVE_DEBT_FOR_ORDER,wn=Zn.gz.CAN_APPROVE_ANY_ORDER,yn=Zn.gz.CAN_APPROVE_SPECIAL_ORDER,Cn=Zn.gz.CAN_CONFIRM_SHIPPED_OUT_ORDER,Rn=Zn.gz.CAN_CONFIRM_HANDED_OVER_ORDER,_n=Zn.gz.CAN_CREATE_NORMAL_SPECIAL_ORDER_FOR_ANYONE,jn=Zn.gz.CAN_CREATE_ORDER_FOR_OWN_CUSTOMERS,kn=Zn.gz.CAN_CANCEL_ORDER_BEFORE_BE_APPROVED,Sn=Zn.gz.CAN_CANCEL_ANY_ORDER_BEFORE_BE_HANDED_OVER,On=Zn.gz.CAN_DELETE_CANCELED_ORDER,An=(0,j.lazy)((function(){return t.e(3991).then(t.bind(t,3938))})),Pn=(0,j.lazy)((function(){return Promise.all([t.e(3222),t.e(468),t.e(5632),t.e(1094)]).then(t.bind(t,7715))})),Tn=function(n){var e=n.orderId,t=(0,T.I0)(),r=(0,O.D)(xn.mh,{refetchQueries:[{query:vn.fB},"GET_ORDERS"]}),o=(0,_.Z)(r,1)[0],i=function(){var n=(0,R.Z)((0,C.Z)().mark((function n(){var r;return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={orderId:e},n.next=3,o({variables:{where:r}});case 3:n.sent.data&&t((0,fn._w)());case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)("p",{style:{margin:10},children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n hu\u1ef7 \u0111\u01a1n h\xe0ng n\xe0y?"}),(0,bn.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center"},children:[(0,bn.jsx)(W.Z,{label:"\u0110\xd3NG L\u1ea0I",fontWeight:"700",padding:"5px 10px",onClick:function(){return t((0,fn._w)())}}),(0,bn.jsx)(G.Z,{label:"X\xc1C NH\u1eacN",fontWeight:"700",padding:"5px 10px",onClick:i})]})]})},Dn=function(n){var e=n.message,t=n.updateFunction,r=(0,T.I0)(),o=function(){var n=(0,R.Z)((0,C.Z)().mark((function n(){return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:n.sent.data&&r((0,fn._w)());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)("p",{style:{margin:10},children:e}),(0,bn.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center"},children:[(0,bn.jsx)(W.Z,{label:"\u0110\xd3NG L\u1ea0I",fontWeight:"700",padding:"5px 10px",onClick:function(){return r((0,fn._w)())}}),(0,bn.jsx)(G.Z,{label:"X\xc1C NH\u1eacN",fontWeight:"700",padding:"5px 10px",onClick:o})]})]})},Nn=function(n){var e,t,r=n.orderItem,o=n.isNotAllActiveTab,i=n.isStockChecking,c=n.isWarehouseBalancing,a=r&&r.node||{},u=a._id,s=a.code,d=a.products,l=a.discountValue,p=a.createdAt,f=a.isApprovedDebt,h=a.isApproved,x=a.isShippedOut,g=a.isHandedOver,v=a.isCanceled,m=a.isSpecialOrder,Z=a.isApprovedSpecialOrder,b={orderId:u},E=((0,T.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions,w=void 0===E?[]:E,k=w.includes(En),S=w.includes(wn),P=w.includes(Cn),H=w.includes(Rn),G=w.some((function(n){return n===kn})),W=w.includes(Sn),Q=w.includes(yn),U=w.includes(On),q=(0,A.t)(vn.T4,{fetchPolicy:"cache-and-network"}),X=(0,_.Z)(q,1)[0],K=(0,O.D)(xn.rF,{refetchQueries:[{query:vn.fB},"GET_ORDERS"]}),J=(0,_.Z)(K,1)[0],$=(0,O.D)(xn.e9,{refetchQueries:[{query:vn.fB},"GET_ORDERS"]}),nn=(0,_.Z)($,1)[0],en=(0,O.D)(xn.ou,{refetchQueries:[{query:vn.fB},"GET_ORDERS"]}),tn=(0,_.Z)(en,1)[0],rn=(0,O.D)(xn.PA,{refetchQueries:[{query:vn.fB},"GET_ORDERS"]}),gn=(0,_.Z)(rn,1)[0],mn=function(){if(d&&d.length){var n=0;return d.forEach((function(e){var t=e.orderQty,r=e.price;n+=t*r*(1-l/100)})),n.toLocaleString()}return 0}(),Zn=!1,_n=!1,jn="",An=v?(_n=U,"\u0110\xe3 hu\u1ef7"):f?!f||h||c?h&&!x?(Zn=!i&&W,P&&!i&&(jn="Xu\u1ea5t kho",t=(0,bn.jsx)(F.Z,{fontSize:"small"}),e=function(){J({variables:{data:{isShippedOut:!0},where:b}})}),"\u0110\xe3 x\xe1c nh\u1eadn, ch\u1edd xu\u1ea5t kho"):x&&!g?(Zn=!i&&W,t=(0,bn.jsx)(B.Z,{fontSize:"small"}),H&&!c&&(jn="\u0110\xe3 giao",e=function(){return tn({variables:{where:b}})}),"\u0110\xe3 xu\u1ea5t kho, ch\u1edd giao"):g?(_n=U,"\u0110\xe3 nh\u1eadn h\xe0ng"):void 0:(Zn=G||W,S&&(jn="X\xe1c nh\u1eadn",t=(0,bn.jsx)(M.Z,{fontSize:"small"}),e=function(){J({variables:{data:{isApproved:!0},where:b}})}),"Ch\u1edd x\xe1c nh\u1eadn"):(jn="Duy\u1ec7t",t=(0,bn.jsx)(N.Z,{fontSize:"small"}),m&&!Z?(Zn=Q||W,Q&&(e=function(){var n={title:"X\xe1c nh\u1eadn duy\u1ec7t",children:(0,bn.jsx)(Dn,{message:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn duy\u1ec7t \u0111\u01a1n h\xe0ng n\xe0y?",updateFunction:(0,R.Z)((0,C.Z)().mark((function n(){var e;return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn({variables:{where:b}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))})};Nn((0,fn.om)(n))}),"Ch\u1edd duy\u1ec7t \u0110\u01a1n \u0111\u1eb7c bi\u1ec7t"):(Zn=G||W,k&&(jn="Duy\u1ec7t",e=function(){var n={title:"X\xe1c nh\u1eadn duy\u1ec7t",children:(0,bn.jsx)(Dn,{message:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn duy\u1ec7t \u0111\u01a1n h\xe0ng n\xe0y?",updateFunction:(0,R.Z)((0,C.Z)().mark((function n(){var e;return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J({variables:{data:{isApprovedDebt:!0},where:b}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))})};Nn((0,fn.om)(n))}),"Ch\u1edd duy\u1ec7t c\xf4ng n\u1ee3")),Nn=(0,T.I0)(),In=(0,j.useRef)(null),zn=(0,j.useState)(!1),Mn=(0,_.Z)(zn,2),Fn=Mn[0],Bn=Mn[1],Ln=Fn?"block":"none",Hn=function(){var n=(0,R.Z)((0,C.Z)().mark((function n(){var e,t,r;return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Nn((0,hn.S$)()),n.next=3,X({variables:{where:b}});case 3:e=n.sent,setTimeout((function(){Nn((0,hn.S4)())}),500),e&&e.data&&(t=e.data.order,r={title:"Chi ti\u1ebft \u0111\u01a1n h\xe0ng",children:(0,bn.jsx)(j.Suspense,{fallback:(0,bn.jsx)(L.default,{}),children:(0,bn.jsx)(Pn,{orderItem:t,isStockChecking:i,isWarehouseBalancing:c})})},Nn((0,fn.dn)(r)));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Gn=[].concat((0,y.Z)(e?[1]:[]),(0,y.Z)(Zn?[2]:[]),(0,y.Z)(_n?[3]:[])).length,Wn=Gn>1?"10px 0 20px":"10px 0",Vn=Gn>1?"18px 0 10px":"10px 0",Qn=!!e||Zn||_n,Un=function(){var n=(0,R.Z)((0,C.Z)().mark((function n(){return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,gn({variables:{where:b}});case 2:n.sent.data&&Bn(!1);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),qn=(0,bn.jsxs)(ln,{display:Ln,ref:In,children:[!!e&&(0,bn.jsxs)(pn,{margin:Wn,color:Y.Z.orange,onClick:e,children:[t,(0,bn.jsxs)("p",{children:["\u2002",jn]})]}),Zn&&(0,bn.jsxs)(pn,{margin:Vn,color:Y.Z.lightRed,onClick:function(){var n={title:"X\xe1c nh\u1eadn hu\u1ef7 \u0111\u01a1n h\xe0ng",children:(0,bn.jsx)(Tn,{orderId:u})};Nn((0,fn.om)(n))},children:[(0,bn.jsx)(z.Z,{fontSize:"small"}),(0,bn.jsx)("p",{children:"\u2002Hu\u1ef7 \u0111\u01a1n"})]}),_n&&(0,bn.jsxs)(pn,{margin:"10px 0 10px",color:Y.Z.lightRed,onClick:Un,children:[(0,bn.jsx)(I.Z,{fontSize:"small"}),(0,bn.jsx)("p",{children:"\u2002Xo\xe1 \u0111\u01a1n"})]})]});return(0,j.useEffect)((function(){var n=function(n){In.current&&!In.current.contains(n.target)&&Bn(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[In]),(0,bn.jsxs)(on,{children:[Qn&&o&&(0,bn.jsx)(dn,{onClick:function(){return Bn(!Fn)},children:(0,bn.jsx)(D.Z,{})}),qn,(0,bn.jsxs)(cn,{onClick:Hn,children:[(0,bn.jsxs)(an,{children:[(0,bn.jsx)("p",{style:{fontWeight:700},children:(0,V.dh)(p,!0)}),(0,bn.jsx)("p",{children:s})]}),(0,bn.jsxs)(an,{children:[(0,bn.jsx)(un,{children:An}),(0,bn.jsxs)(sn,{children:[mn,"\u0111"]})]})]})]})},In=function(n){var e=n.isDisplay,t=(0,T.I0)(),r=(0,T.v9)((function(n){return n.authReducer})).viewerQuery||{},o=r._id,i=r.roles,c=r.permissions,a=void 0===c?[]:c,u=r.customerStaffPermissions,s=void 0===u?[]:u,d=r.fatherChildrenAccountIds,l=r.reportTrackingMode,p=i.includes(mn.If.STAFF_OF_CUSTOMER),f=s.length?s.includes(Zn.Fl.CREATE_AND_MANAGE_ORDERS):a.some((function(n){return n===jn||n===_n})),h=a.includes(Zn.gz.CAN_VIEW_OWN_CUSTOMERS_ORDERS)||a.includes(Zn.gz.CAN_VIEW_ALL_ORDERS),x=i&&0===i.length,g=a.includes(wn),v=a.includes(En),m=a.includes(yn),Z=a.includes(Cn),b=a.includes(Rn),E=i.includes(mn.If.CUSTOMER)||i.includes(mn.If.STAFF_OF_CUSTOMER),C=p?d[0]:E?o:void 0,R=mn.s_.NORMAL_ORDER,O=mn.s_.SPECIAL_ORDER,A=mn.s_.PROMOTION_PAYMENT,D=mn.s_.WAITTING_FOR_DEBT_APPROVE,N=mn.s_.WAITTING_FOR_APPROVE,I=mn.s_.WAITTING_FOR_SHIP_OUT,z=mn.s_.WAITTING_FOR_HAND_OVER,M=mn.s_.HANDED_OVER,F=mn.s_.CANCELED,B=E||!x,G=g||B,W=g||v||m||B,q=g||v||m||B,X=g||Z||B,on=g||Z||b||B,cn=g||b||B,an=g||B,un=[].concat((0,y.Z)(G?[{code:"all",label:"T\u1ea5t c\u1ea3"}]:[]),(0,y.Z)(W?[{code:D,label:"Duy\u1ec7t"}]:[]),(0,y.Z)(q?[{code:N,label:"X\xe1c nh\u1eadn"}]:[]),(0,y.Z)(X?[{code:I,label:"Ch\u1edd xu\u1ea5t"}]:[]),(0,y.Z)(on?[{code:z,label:"Ch\u1edd giao"}]:[]),(0,y.Z)(cn?[{code:M,label:"\u0110\xe3 giao"}]:[]),(0,y.Z)(an?[{code:F,label:"\u0110\xe3 hu\u1ef7"}]:[])),sn=(0,j.useState)(un[0]),dn=(0,_.Z)(sn,2),ln=dn[0],pn=dn[1],hn=ln&&"all"!==ln.code,xn=new Date,kn=(0,k.Z)(xn),Sn=(0,S.Z)(xn),On=(0,j.useState)(void 0),Pn=(0,_.Z)(On,2),Tn=Pn[0],Dn=Pn[1],In=(0,j.useState)(void 0),zn=(0,_.Z)(In,2),Mn=zn[0],Fn=zn[1],Bn=(0,j.useState)(C),Ln=(0,_.Z)(Bn,2),Hn=Ln[0],Gn=Ln[1],Wn=hn?ln.code:void 0,Vn=function(){var n=ln&&ln.code;if(!B&&(n===D||n===N))return[].concat((0,y.Z)(g?[R,O,A]:[]),(0,y.Z)(v?[R]:[]),(0,y.Z)(m?[O,A]:[]))}(),Qn=(0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)({},Tn&&{startOfTimeRange:new Date(Tn)}),Mn&&{endOfTimeRange:new Date(Mn)}),Hn&&{customerAccountId:Hn}),Wn&&{orderStatus:Wn}),Vn&&{orderTypeCodes:Vn}),Un=(0,P.a)(vn.fB,{variables:{filter:Qn},fetchPolicy:"cache-and-network",skip:!un.length}),qn=Un.data,Xn=Un.loading,Yn=Un.subscribeToMore,Kn=Un.fetchMore,Jn=(0,P.a)(vn.pf,{variables:{filter:(0,w.Z)({startOfTimeRange:kn,endOfTimeRange:Sn,isMonthReportType:!0},E&&{ofCustomerAccountIds:[C]})},fetchPolicy:"cache-and-network"}).data,$n=Jn&&Jn.salesReportOfProductGroups||[],ne=(0,V.Bu)({chartData:$n,startOfTimeRange:kn}),ee=ne.monthWeightShowUnit,te=ne.totalMonthMoney,re=ne.totalMonthWeight,oe=ne.totalMonthQuantity,ie=function(){var n=l===mn.Re.MONEY_AND_QUANTITY;return{showText:n?oe:re,unit:n?"sp":ee||""}}(),ce=qn&&qn.orders.edges||[],ae=qn&&qn.orders.pageInfo||{},ue=ae.hasNextPage,se=(0,P.a)(vn.bV,{fetchPolicy:"cache-and-network"}),de=se.data,le=se.subscribeToMore,pe=de&&de.global||{},fe=pe.isStockChecking,he=pe.isWarehouseBalancing,xe=function(n){return n.code===ln.code?{backgroundColor:Y.Z.primary,textColor:"#fff"}:{backgroundColor:Y.Z.white,textColor:""}};return(0,j.useEffect)((function(){var n=function(n){var t=document.getElementById(mn.pD.ORDERS);(t&&t.getBoundingClientRect().bottom)<=window.innerHeight&&ue&&!Xn&&e&&Kn({variables:{cursor:ae.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,U.d0)("orders",t,n)}})};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[ue,e]),(0,j.useEffect)((function(){var n=le({document:gn.Po,updateQuery:function(n,e){var t=e.subscriptionData;if(t)return{global:t.data.updatedGlobalData}}});return function(){return n()}}),[le]),(0,j.useEffect)((function(){var n=function(n){var e=n||{},t=e.customerAccountId,r=e.staffAccountId,i=e.managerAccountId,c=e.directorAccountId;return o===t||o===r||o===i||o===c},e=Yn({document:gn.hv,updateQuery:function(e,t){var r=t.subscriptionData;return(0,U.FM)("orders","addedNewOrder",r,e,n,!0)}});return function(){return e()}}),[Yn]),(0,j.useEffect)((function(){var n=function(n){var e=n||{},t=e.customerAccountId,r=e.staffAccountId,i=e.managerAccountId,c=e.directorAccountId;return o===t||o===r||o===i||o===c},e=function(n,e){var t=e.code,r=n.findIndex((function(n){return n.node.code===t}));return-1!==r?n.map((function(n,t){return t===r?{node:e}:n})):[].concat((0,y.Z)(n),[{node:e}])},t=Yn({document:gn.uB,updateQuery:function(t,r){var o=r.subscriptionData;return(0,U.FM)("orders","updatedAnOrder",o,t,n,!0,e)}});return function(){return t()}}),[Yn]),(0,bn.jsxs)(K,{isDisplay:e,id:mn.pD.ORDERS,children:[(0,bn.jsxs)(J,{children:[(0,bn.jsx)("h5",{children:"QU\u1ea2N L\xdd \u0110\u01a0N H\xc0NG"}),f&&(0,bn.jsx)(H.Z,{onClick:function(){var n={title:"CH\u1eccN S\u1ea2N PH\u1ea8M",children:(0,bn.jsx)(j.Suspense,{fallback:(0,bn.jsx)(L.default,{}),children:(0,bn.jsx)(An,{})})};t((0,fn.dn)(n))},label:"+ \u0110\u1eb7t h\xe0ng"})]}),G&&B&&(0,bn.jsxs)(nn,{children:["DOANH S\u1ed0 TH\xc1NG N\xc0Y:"," ",(0,bn.jsx)(en,{children:ie.showText})," ",ie.unit," -"," ",(0,bn.jsx)(en,{children:te})," tri\u1ec7u \u0111\u1ed3ng"]}),(0,bn.jsx)(Q.Z,{inputEndTime:Mn,setInputEndTime:Fn,inputStartTime:Tn,setInputStartTime:Dn,onClickSelectResultItem:function(n){var e=(n&&n.node)._id;Gn(e),Dn(void 0),Fn(void 0)},searchPlaceholder:"T\u1ea5t c\u1ea3",canSearchCustomer:h}),(0,bn.jsx)(tn,{children:un.map((function(n,e){return(0,bn.jsx)(rn,{activeColor:xe(n),onClick:function(){return pn(n)},borderLeftColor:e>0?Y.Z.primary:"transparent",children:n.label},e)}))}),(0,bn.jsx)($,{children:ce.map((function(n,e){return(0,bn.jsx)(Nn,{orderItem:n,isStockChecking:fe,isNotAllActiveTab:hn,isWarehouseBalancing:he},e)}))})]})}},750:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"}),"AddTask");e.Z=c},8728:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=c},1997:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=c},3745:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");e.Z=c},643:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping");e.Z=c},6618:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");e.Z=c},2961:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5045)),i=t(6417),c=(0,o.default)((0,i.jsx)("path",{d:"M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v.06C3.7 6.46 1 9.42 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"}),"MoveUp");e.Z=c},4800:function(n,e,t){function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}t.d(e,{Z:function(){return r}})},8589:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3601),o=t(4800);function i(n){(0,o.Z)(1,arguments);var e=(0,r.Z)(n),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}},1156:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3601),o=t(4800);function i(n){(0,o.Z)(1,arguments);var e=(0,r.Z)(n);return e.setDate(1),e.setHours(0,0,0,0),e}},3601:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4800);function o(n){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(n){(0,r.Z)(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===o(n)&&"[object Date]"===e?new Date(n.getTime()):"number"===typeof n||"[object Number]"===e?new Date(n):("string"!==typeof n&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},790:function(n,e,t){t.d(e,{D:function(){return d}});var r=t(6797),o=t(7313),i=t(345),c=t(3301),a=t(8112),u=t(4624),s=t(1511);function d(n,e){var t=(0,s.x)(null===e||void 0===e?void 0:e.client);(0,a.Vp)(n,a.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:t}),l=d[0],p=d[1],f=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(f.current,{client:t,options:e,mutation:n});var h=(0,o.useCallback)((function(n){void 0===n&&(n={});var e=f.current,t=e.client,o=e.options,a=e.mutation,s=(0,r.pi)((0,r.pi)({},o),{mutation:a});f.current.result.loading||s.ignoreResults||!f.current.isMounted||p(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var d=++f.current.mutationId,l=(0,i.J)(s,n);return t.mutate(l).then((function(e){var r,o,i,a=e.data,s=e.errors,h=s&&s.length>0?new u.c({graphQLErrors:s}):void 0;if(d===f.current.mutationId&&!l.ignoreResults){var x={called:!0,loading:!1,data:a,error:h,client:t};f.current.isMounted&&!(0,c.D)(f.current.result,x)&&p(f.current.result=x)}return null===(o=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,e.data,l),null===(i=n.onCompleted)||void 0===i||i.call(n,e.data,l),e})).catch((function(e){var r,o,i,a;if(d===f.current.mutationId&&f.current.isMounted){var u={loading:!1,error:e,data:void 0,called:!0,client:t};(0,c.D)(f.current.result,u)||p(f.current.result=u)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(i=null===(o=f.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,e,l),null===(a=n.onError)||void 0===a||a.call(n,e,l),{data:void 0,errors:e};throw e}))}),[]),x=(0,o.useCallback)((function(){f.current.isMounted&&p({called:!1,loading:!1,client:t})}),[]);return(0,o.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[h,(0,r.pi)({reset:x},l)]}}}]);