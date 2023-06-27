"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4816],{4816:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,i,a,o,c,s,d,u,l,p,x=r(4165),h=r(5861),f=r(885),Z=r(7313),g=r(790),m=r(2668),v=r(1359),j=r(1677),C=r(5222),b=r(2262),w=r(7851),P=r(168),y=r(3115),k=r(1237),A=y.ZP.div(t||(t=(0,P.Z)(["\n  font-size: 12px;\n  padding: 10px 5px 120px;\n"]))),I=y.ZP.p(i||(i=(0,P.Z)(["\n  font-weight: 700;\n"]))),N=y.ZP.p(a||(a=(0,P.Z)(["\n  font-weight: 700;\n  color: ",";\n"])),k.Z.primary),S=y.ZP.p(o||(o=(0,P.Z)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  color: ",";\n"])),k.Z.secondary),_=y.ZP.p(c||(c=(0,P.Z)(["\n  font-style: italic;\n  color: ",";\n"])),k.Z.secondary),q=y.ZP.div(s||(s=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n"]))),D=(y.ZP.div(d||(d=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),y.ZP.div(u||(u=(0,P.Z)(["\n  margin: 5px 10px 5px 0;\n  cursor: pointer;\n  width: fit-content;\n"])))),O=y.ZP.div(l||(l=(0,P.Z)(["\n  width: 70%;\n  margin: 0 5px;\n"]))),T=y.ZP.div(p||(p=(0,P.Z)(["\n  width: 25px;\n  height: 25px;\n  margin: 0 5px 0 0;\n  border-radius: 50%;\n  border: solid 1px ",";\n  background-color: ",";\n  & > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n"])),k.Z.secondary,k.Z.rgbaPrimary),z=r(7123),B=r(3454),E=(r(3070),r(6417)),F=function(n){var e=n.customerData,r=n.staffAccount,t=e||{},i=t._id,a=t.idCode,o=t.fullName,c=t.address,s=(0,g.D)(B.$E,{refetchQueries:[{query:z.q6},"GET_ACCOUNTS"]}),d=(0,f.Z)(s,1)[0],u=(0,Z.useState)(!1),l=(0,f.Z)(u,2),p=l[0],m=l[1],w=(0,Z.useState)(void 0),P=(0,f.Z)(w,2),y=P[0],k=P[1],A=y?(0,E.jsxs)(I,{children:[null===y||void 0===y?void 0:y.fullName," - ",null===y||void 0===y?void 0:y.phoneNumber," ",(0,E.jsx)(j.Z,{label:"\u0110\u1ed5i",onClick:function(){return k(void 0)}})]}):(0,E.jsx)(O,{children:(0,E.jsx)(v.Z,{isSelectOne:!0,notBeCustomer:!0,selectedList:[r],onClickSelectResultItem:function(n){var e=n&&n.node;k(e)}})}),S=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(){var e,r,t,a,o,c;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(e=y||{})._id,t=e.managerAccountId,a=e.directorAccountId,o={accountId:i},c={staffAccountId:r,managerAccountId:t,directorAccountId:a},n.next=5,d({variables:{data:c,where:o}});case 5:n.sent.data&&(m(!1),k(void 0));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,E.jsxs)(C.Z,{children:[(0,E.jsxs)(q,{children:[(0,E.jsx)(I,{children:o}),(0,E.jsxs)(_,{children:["\u2002- ",a]})]}),(0,E.jsx)(_,{children:c}),(0,E.jsxs)(q,{children:[(0,E.jsx)(D,{children:(0,E.jsx)(N,{onClick:function(){return m(!0)},children:"\u2b95 Chuy\u1ec3n"})}),p&&(0,E.jsx)(E.Fragment,{children:A})]}),p&&y&&(0,E.jsxs)("div",{children:[(0,E.jsx)(j.Z,{label:"X\xc1C NH\u1eacN",fontWeight:"700",padding:"5px 10px",onClick:S}),(0,E.jsx)(b.Z,{label:"HU\u1ef6",fontWeight:"700",padding:"5px 10px",onClick:function(){return m(!1)}})]})]})},H=function(n){var e=(0,Z.useState)(""),r=(0,f.Z)(e,2),t=r[0],i=r[1],a=(0,m.a)(z.q6,{variables:{filter:{text:t,notBeCustomer:!0}}}).data,o=a&&a.accounts.edges||[];return(0,E.jsxs)(A,{children:[(0,E.jsx)(w.Z,{placeholder:"T\xecm theo t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(n){return i(n.target.value)}}),o.map((function(n,e){var r=n.node,t=r.avatarImage,i=r.fullName,a=r.inChargeOfCustomers;return(0,E.jsxs)(Z.Fragment,{children:[!!a.length&&(0,E.jsxs)(q,{children:[(0,E.jsx)(T,{children:(0,E.jsx)("img",{src:t||"https://picsum.photos/50",alt:"avatar-img"})}),(0,E.jsx)(S,{children:i})]}),a&&a.map((function(n,r){return(0,E.jsx)(F,{customerData:n,staffAccount:o[e]},r)}))]},e)}))]})}},7851:function(n,e,r){r.d(e,{Z:function(){return f}});var t,i,a=r(1413),o=r(5987),c=(r(7313),r(168)),s=r(3115),d=r(1237),u=s.ZP.div(t||(t=(0,c.Z)(["\n  font-size: 12px;\n  margin: ",";\n"])),(function(n){return n.margin})),l=s.ZP.input(i||(i=(0,c.Z)(["\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 20px;\n  border: 1px solid ",";\n  &:focus {\n    outline: none;\n  }\n"])),d.Z.secondary),p=r(6417),x=["margin"],h=function(n){var e=n.margin,r=(0,o.Z)(n,x);return(0,p.jsx)(u,{margin:e,children:(0,p.jsx)(l,(0,a.Z)({},r))})};h.defaultProps={margin:"10px 0 20px",placeholder:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm..."};var f=h}}]);