"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[5783,8550,9590,2369],{9146:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(1413),i=(t(7313),t(168)),a=t(3115),u=t(1237),c=a.ZP.button(r||(r=(0,i.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),u.Z.rgbaBlack),d=t(6417),s=function(n){var e=n.label;return(0,d.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};s.defaultProps={label:"N\xfat b\u1ea5m"};var l=s},6524:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,i,a,u,c,d,s=t(4165),l=t(5861),p=t(885),h=t(7313),f=t(5627),m=t(3222),P=t(790),b=t(5222),x=t(9146),g=t(9673),Z=t(1359),v=t(1677),w=t(168),O=t(3115),D=t(1237),I=O.ZP.div(r||(r=(0,w.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),E=O.ZP.p(o||(o=(0,w.Z)(["\n  font-weight: 700;\n"]))),$=O.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 15px;\n"]))),A=O.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),y=O.ZP.div(u||(u=(0,w.Z)(["\n  width: 100px;\n"]))),C=(O.ZP.input(c||(c=(0,w.Z)(["\n  width: 60%;\n"]))),O.ZP.div(d||(d=(0,w.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),D.Z.rgbaBlack),t(3454)),T=t(2153),R=t(3070),_=t(6417),U=function(n){var e=n.discountPromotionId,t=(0,f.cI)({defaultValues:{}}),r=t.register,o=t.setValue,i=t.clearErrors,a=t.handleSubmit,u=t.formState.errors,c=(0,m.I0)(),d=(0,h.useState)(void 0),w=(0,p.Z)(d,2),O=w[0],D=w[1];r("customer",{required:!O});var U=(0,P.D)(C.Xu),N=(0,p.Z)(U,1)[0],k=(0,P.D)(C.JS),j=(0,p.Z)(k,1)[0],F=O?(0,_.jsxs)(A,{style:{width:"100%"},children:[(0,_.jsxs)(E,{children:[O.fullName," - ",O.phoneNumber]}),(0,_.jsx)(v.Z,{label:"\u0110\u1ed5i",onClick:function(){D(void 0),o("customer",void 0)}})]}):(0,_.jsx)(Z.Z,{isSelectOne:!0,isError:!!u.customer,roles:[R.If.CUSTOMER],onClickSelectResultItem:function(n){i("customer"),D(n.node),o("customer",n.node)}}),S=function(){var n=(0,l.Z)((0,s.Z)().mark((function n(t){var r,o,i,a,u,d,l,p,h,f;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.customer,o=t.paidAt,i=t.bePaidMoneyValue,a=r._id,u=r.staffAccountId,d=r.managerAccountId,l=r.directorAccountId,!e){n.next=11;break}return p={paidAt:new Date(o).toISOString(),customerAccountId:a,staffAccountId:u,managerAccountId:d,directorAccountId:l},h={discountPromotionId:e},n.next=7,j({variables:{data:p,where:h}});case 7:n.sent.data&&c((0,T.mm)()),n.next=16;break;case 11:return f={paidAt:new Date(o).toISOString(),bePaidMoneyValue:Number(i),customerAccountId:a,staffAccountId:u,managerAccountId:d,directorAccountId:l},n.next=14,N({variables:{data:f}});case 14:n.sent.data&&c((0,T.mm)());case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)(I,{children:[(0,_.jsxs)(b.Z,{children:[(0,_.jsxs)($,{children:[(0,_.jsx)(y,{children:"Kh\xe1ch h\xe0ng:"}),F]}),(0,_.jsxs)($,{children:[(0,_.jsx)(y,{children:"Ng\xe0y tr\u1ea3:"}),(0,_.jsx)(g.Z,{type:"datetime-local",name:"paidAt",register:r,validations:{required:!0},isError:!!u.paidAt})]}),!e&&(0,_.jsxs)($,{children:[(0,_.jsx)(y,{children:"S\u1ed1 ti\u1ec1n:"}),(0,_.jsx)(g.Z,{type:"number",textAlign:"right",name:"bePaidMoneyValue",register:r,validations:{required:!0},isError:!!u.bePaidMoneyValue}),(0,_.jsx)("span",{style:{marginLeft:10},children:"\u0111"})]})]}),(0,_.jsx)(x.Z,{label:"X\xe1c nh\u1eadn",onClick:a(S)})]})}},5222:function(n,e,t){t.d(e,{Z:function(){return f}});var r,o,i,a=t(1413),u=(t(7313),t(168)),c=t(3115),d=t(1237),s=c.ZP.div(r||(r=(0,u.Z)(["\n  position: relative;\n  margin: 0 0 20px;\n"]))),l=c.ZP.div(o||(o=(0,u.Z)(["\n  font-weight: 600;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),d.Z.lightBlack),p=c.ZP.div(i||(i=(0,u.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),h=t(6417),f=function(n){var e=n.title,t=n.children;return(0,h.jsxs)(s,(0,a.Z)((0,a.Z)({},n),{},{children:[(0,h.jsx)(l,{children:e}),(0,h.jsx)(p,{children:t})]}))}},1359:function(n,e,t){t.d(e,{Z:function(){return V}});var r,o,i,a,u,c,d,s,l,p,h,f,m,P,b,x=t(4165),g=t(5861),Z=t(1413),v=t(885),w=t(7313),O=t(3306),D=t(1677),I=t(6069),E=t(2206),$=t(6947),A=t(168),y=t(3115),C=t(1237),T=y.ZP.div(r||(r=(0,A.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),R=(y.ZP.div(o||(o=(0,A.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),y.ZP.div(i||(i=(0,A.Z)(["\n  position: relative;\n"])))),_=(y.ZP.div(a||(a=(0,A.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),y.ZP.div(u||(u=(0,A.Z)(["\n  margin-top: 10px;\n  border-bottom: solid 1px #c4c4c4;\n  background-color: ",";\n"])),(function(n){return n.searchBackground}))),U=y.ZP.input(c||(c=(0,A.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),N=y.ZP.div(d||(d=(0,A.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),k=y.ZP.p(s||(s=(0,A.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),j=(y.ZP.div(l||(l=(0,A.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),y.ZP.div(p||(p=(0,A.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),F=y.ZP.div(h||(h=(0,A.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),C.Z.secondary,C.Z.rgbaPrimary),S=y.ZP.p(f||(f=(0,A.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),M=y.ZP.div(m||(m=(0,A.Z)(["\n  margin: 10px auto;\n"]))),W=(y.ZP.input(P||(P=(0,A.Z)(["\n  display: none;\n"]))),y.ZP.div(b||(b=(0,A.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),C.Z.lightRed)),q=t(7123),L=t(6417),B=function(n){var e,t=n.roles,r=n.notBeCustomer,o=n.isError,i=n.isSelectOne,a=n.searchPlaceholder,u=(n.searchGuide,n.onClickSelectResultItem),c=n.emptySearchResultMessage,d=n.selectedList,s=n.noOwnAccountFilter,l=n.searchBackgroundColor,p=["node.fullName","node.address","node.phoneNumber"],h=(0,w.useState)(""),f=(0,v.Z)(h,2),m=f[0],P=f[1],b=(0,w.useState)([]),A=(0,v.Z)(b,2),y=A[0],C=A[1],B=(0,O.t)(q.q6,{variables:{filter:(0,Z.Z)((0,Z.Z)((0,Z.Z)({text:m||"a"},t&&{roles:t}),r&&{notBeCustomer:r}),s&&{noOwnAccountFilter:s})},fetchPolicy:"cache-and-network"}),V=(0,v.Z)(B,2),z=V[0],G=V[1],Y=G.data,H=G.fetchMore,K=Y&&(null===(e=Y.accounts)||void 0===e?void 0:e.pageInfo)||{},Q=K.hasNextPage,J=y&&0===y.length,X=(0,w.useState)(!1),nn=(0,v.Z)(X,2),en=nn[0],tn=nn[1],rn=!!m,on=(0,w.useRef)(null),an=(0,w.useRef)(null),un=en?1:0,cn=en?"500px":"0",dn=en&&!J?"block":"none",sn=en?"0 0 0 10px":"0 0 0 24px",ln=en?"30px":"calc(100% - 20px)",pn=l||"transparent",hn=function(n){u(n),i&&tn(!1)},fn=(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(R,{children:[(0,L.jsxs)(_,{onClick:function(){tn(!0),on.current&&on.current.focus()},searchBackground:pn,children:[(0,L.jsx)(U,{ref:on,value:m,disabled:!en,placeholder:a,searchinputpadding:sn,onChange:function(n){return P(n.target.value)}}),(0,L.jsx)(N,{searchiconright:ln,children:"\ud83d\udd0e"}),(0,L.jsx)(k,{upiconopacity:un,onClick:function(){tn(!1),P("")},children:"\u2716"})]}),(0,L.jsxs)(j,{modalheight:cn,modaldisplay:dn,children:[(0,L.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),J?null:y.map((function(n,e){var t=p.map((function(e){return(0,I.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,L.jsx)(F,{onClick:function(){return hn(n)},children:(0,L.jsx)(S,{children:r})},e)})),!!Q&&(0,L.jsx)(M,{children:(0,L.jsx)(D.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){H({variables:{cursor:K.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,E.d0)("accounts",t,n)}})}})})]})]}),(0,L.jsx)($.Z,{isError:o})]});return(0,w.useEffect)((function(){var n=function(n){an.current&&!an.current.contains(n.target)&&(tn(!1),P(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[an]),(0,w.useEffect)((function(){var n=function(){var n=(0,g.Z)((0,x.Z)().mark((function n(){var e,t,r,o;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z();case 2:t=n.sent,r=t&&(null===(e=t.data.accounts)||void 0===e?void 0:e.edges)||[],o=r.filter((function(n){var e=(n||{}).node.phoneNumber;return-1===d.findIndex((function(n){var t=n||{},r=t.node,o=t.phoneNumber;return r?r.phoneNumber===e:o===e}))})),C(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[d,m]),(0,L.jsxs)("div",{style:{width:"100%"},ref:an,children:[(0,L.jsx)(T,{ref:an,children:fn}),rn&&!y.length&&(0,L.jsx)(W,{children:c})]})};B.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var V=B},2180:function(n,e,t){t.d(e,{Z:function(){return u}});t(7313);var r,o=t(168),i=t(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),a=t(6417),u=function(n){var e=n.label;return(0,a.jsx)(i,{children:e})}},9673:function(n,e,t){t.d(e,{Z:function(){return m}});var r,o,i=t(1413),a=(t(7313),t(2180)),u=t(6947),c=t(168),d=t(3115),s=t(1237),l=d.ZP.div(r||(r=(0,c.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),p=d.ZP.input(o||(o=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),s.Z.lightWhite,s.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),h=t(6417),f=function(n){var e=n.label,t=n.name,r=n.isError,o=n.errorMessage,c=n.register,d=n.validations,s=n.isInline,f=n.width,m=n.margin,P=s?"auto":f;return(0,h.jsxs)(l,{width:P,margin:m,children:[e&&(0,h.jsx)(a.Z,{label:e}),(0,h.jsx)(p,(0,i.Z)((0,i.Z)({},c(t,d)),n)),(0,h.jsx)(u.Z,{isError:r,errorMessage:o})]})};f.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var m=f},3454:function(n,e,t){t.d(e,{$E:function(){return Q},CK:function(){return gn},GG:function(){return un},Gb:function(){return On},JS:function(){return sn},Nv:function(){return H},PA:function(){return on},WP:function(){return an},Xu:function(){return dn},Yh:function(){return ln},aF:function(){return J},cG:function(){return G},d4:function(){return X},dF:function(){return cn},e9:function(){return tn},eQ:function(){return z},gF:function(){return fn},ik:function(){return hn},jT:function(){return pn},jb:function(){return vn},l9:function(){return Pn},mh:function(){return rn},oj:function(){return K},ou:function(){return en},qe:function(){return bn},rF:function(){return nn},uh:function(){return mn},us:function(){return xn},vK:function(){return wn},xd:function(){return Zn},ym:function(){return Y}});var r,o,i,a,u,c,d,s,l,p,h,f,m,P,b,x,g,Z,v,w,O,D,I,E,$,A,y,C,T,R,_,U,N,k,j,F,S,M,W,q,L=t(168),B=t(9237),V=t(9384),z=(0,B.Ps)(r||(r=(0,L.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),V.Ts),G=(0,B.Ps)(o||(o=(0,L.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),V.Od),Y=(0,B.Ps)(i||(i=(0,L.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),V.Od,V.Sh),H=((0,B.Ps)(a||(a=(0,L.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),V.Sh,V.Od),(0,B.Ps)(u||(u=(0,L.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),K=(0,B.Ps)(c||(c=(0,L.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),Q=(0,B.Ps)(d||(d=(0,L.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),V.Sh),J=((0,B.Ps)(s||(s=(0,L.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,B.Ps)(l||(l=(0,L.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),V.Y4)),X=((0,B.Ps)(p||(p=(0,L.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),V.Y4),(0,B.Ps)(h||(h=(0,L.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),V.Y4),(0,B.Ps)(f||(f=(0,L.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL)),nn=(0,B.Ps)(m||(m=(0,L.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL),en=(0,B.Ps)(P||(P=(0,L.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL),tn=(0,B.Ps)(b||(b=(0,L.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL),rn=(0,B.Ps)(x||(x=(0,L.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL),on=(0,B.Ps)(g||(g=(0,L.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),V.dL),an=(0,B.Ps)(Z||(Z=(0,L.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),V.MM),un=(0,B.Ps)(v||(v=(0,L.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),V.MM),cn=(0,B.Ps)(w||(w=(0,L.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),V.MM),dn=(0,B.Ps)(O||(O=(0,L.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),V.xC),sn=(0,B.Ps)(D||(D=(0,L.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),V.xC),ln=(0,B.Ps)(I||(I=(0,L.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),V.xC),pn=(0,B.Ps)(E||(E=(0,L.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),V.xC),hn=(0,B.Ps)($||($=(0,L.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),V.l3),fn=((0,B.Ps)(A||(A=(0,L.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),V.l3),(0,B.Ps)(y||(y=(0,L.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),V.l3),(0,B.Ps)(C||(C=(0,L.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),V.l3)),mn=(0,B.Ps)(T||(T=(0,L.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),V.l3),Pn=(0,B.Ps)(R||(R=(0,L.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),V.UW),bn=((0,B.Ps)(_||(_=(0,L.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),V.UW),(0,B.Ps)(U||(U=(0,L.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,B.Ps)(N||(N=(0,L.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,B.Ps)(k||(k=(0,L.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),V.mD)),xn=(0,B.Ps)(j||(j=(0,L.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),V.zY),gn=(0,B.Ps)(F||(F=(0,L.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),V.zY),Zn=(0,B.Ps)(S||(S=(0,L.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),V.zY),vn=(0,B.Ps)(M||(M=(0,L.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),V.mD),wn=(0,B.Ps)(W||(W=(0,L.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),V.ms),On=(0,B.Ps)(q||(q=(0,L.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),V.lH)},5987:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(3366);function o(n,e){if(null==n)return{};var t,o,i=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}},3306:function(n,e,t){t.d(e,{t:function(){return d}});var r=t(6797),o=t(7313),i=t(345),a=t(2668),u=t(1511),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function d(n,e){var t=(0,a.A)((0,u.x)(e&&e.client),n),d=(0,o.useRef)(),s=d.current?(0,i.J)(e,d.current):e,l=t.useQuery((0,r.pi)((0,r.pi)({},s),{skip:!d.current})),p=l.observable.options.initialFetchPolicy||t.getDefaultFetchPolicy(),h=Object.assign(l,{called:!!d.current}),f=(0,o.useMemo)((function(){for(var n={},e=function(e){var r=h[e];n[e]=function(){return d.current||(d.current=Object.create(null),t.forceUpdate()),r.apply(this,arguments)}},r=0,o=c;r<o.length;r++){e(o[r])}return n}),[]);return Object.assign(h,f),[(0,o.useCallback)((function(n){d.current=n?(0,r.pi)((0,r.pi)({},n),{fetchPolicy:n.fetchPolicy||p}):{fetchPolicy:p};var e=t.asyncUpdate().then((function(n){return Object.assign(n,f)}));return e.catch((function(){})),e}),[]),h]}},790:function(n,e,t){t.d(e,{D:function(){return s}});var r=t(6797),o=t(7313),i=t(345),a=t(3301),u=t(8112),c=t(4624),d=t(1511);function s(n,e){var t=(0,d.x)(null===e||void 0===e?void 0:e.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:t}),l=s[0],p=s[1],h=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(h.current,{client:t,options:e,mutation:n});var f=(0,o.useCallback)((function(n){void 0===n&&(n={});var e=h.current,t=e.client,o=e.options,u=e.mutation,d=(0,r.pi)((0,r.pi)({},o),{mutation:u});h.current.result.loading||d.ignoreResults||!h.current.isMounted||p(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var s=++h.current.mutationId,l=(0,i.J)(d,n);return t.mutate(l).then((function(e){var r,o,i,u=e.data,d=e.errors,f=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===h.current.mutationId&&!l.ignoreResults){var m={called:!0,loading:!1,data:u,error:f,client:t};h.current.isMounted&&!(0,a.D)(h.current.result,m)&&p(h.current.result=m)}return null===(o=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,e.data,l),null===(i=n.onCompleted)||void 0===i||i.call(n,e.data,l),e})).catch((function(e){var r,o,i,u;if(s===h.current.mutationId&&h.current.isMounted){var c={loading:!1,error:e,data:void 0,called:!0,client:t};(0,a.D)(h.current.result,c)||p(h.current.result=c)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(i=null===(o=h.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,e,l),null===(u=n.onError)||void 0===u||u.call(n,e,l),{data:void 0,errors:e};throw e}))}),[]),m=(0,o.useCallback)((function(){h.current.isMounted&&p({called:!1,loading:!1,client:t})}),[]);return(0,o.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[f,(0,r.pi)({reset:m},l)]}}}]);