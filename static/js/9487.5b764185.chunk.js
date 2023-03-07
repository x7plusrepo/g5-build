"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9487],{1677:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(1413),i=(t(7313),t(168)),o=t(3115),d=t(1237),u=o.ZP.button(r||(r=(0,i.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:d.Z.primary})),c=t(6417),s=function(n){var e=n.label;return(0,c.jsx)(u,(0,a.Z)((0,a.Z)({},n),{},{children:e}))};s.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var p=s},6947:function(n,e,t){t.d(e,{Z:function(){return h}});t(7313);var r,a,i=t(168),o=t(3115),d=o.ZP.div(r||(r=(0,i.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),u=o.ZP.p(a||(a=(0,i.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),c=t(3070),s=t(6417),p=function(n){var e=n.isError,t=n.errorMessage,r=e?"translateY(0)":"translateY(110%)";return(0,s.jsx)(d,{children:(0,s.jsx)(u,{isError:e,textTransform:r,children:t})})};p.defaultProps={isError:!1,errorMessage:c.ug.REQUIRED};var h=p},2180:function(n,e,t){t.d(e,{Z:function(){return d}});t(7313);var r,a=t(168),i=t(3115).ZP.p(r||(r=(0,a.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),o=t(6417),d=function(n){var e=n.label;return(0,o.jsx)(i,{children:e})}},9673:function(n,e,t){t.d(e,{Z:function(){return f}});var r,a,i=t(1413),o=(t(7313),t(2180)),d=t(6947),u=t(168),c=t(3115),s=t(1237),p=c.ZP.div(r||(r=(0,u.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),h=c.ZP.input(a||(a=(0,u.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),s.Z.lightWhite,s.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),l=t(6417),m=function(n){var e=n.label,t=n.name,r=n.isError,a=n.errorMessage,u=n.register,c=n.validations,s=n.isInline,m=n.width,f=n.margin,P=s?"auto":m;return(0,l.jsxs)(p,{width:P,margin:f,children:[e&&(0,l.jsx)(o.Z,{label:e}),(0,l.jsx)(h,(0,i.Z)((0,i.Z)({},u(t,c)),n)),(0,l.jsx)(d.Z,{isError:r,errorMessage:a})]})};m.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var f=m},7532:function(n,e,t){t.d(e,{Z:function(){return f}});var r,a,i,o=t(885),d=t(7313),u=t(168),c=t(3115),s=c.ZP.div(r||(r=(0,u.Z)(["\n  padding: ",";\n"])),(function(n){return n.padding})),p=c.ZP.input(a||(a=(0,u.Z)(["\n  width: 100%;\n"]))),h=c.ZP.img(i||(i=(0,u.Z)(["\n  display: block;\n  margin: 10px 0 0;\n"]))),l=t(6417),m=function(n){var e=n.padding,t=n.maxPixel,r=n.setResizedImageUri,a=(0,d.useRef)(null),i=(0,d.useState)(""),u=(0,o.Z)(i,2),c=u[0],m=u[1];return(0,l.jsxs)(s,{padding:e,children:[(0,l.jsx)(p,{type:"file",ref:a,placeholder:"Ch\u1ecdn \u1ea3nh",onChange:function(n){var e=new FileReader,a=new Image,i=document.getElementById("canvas"),o=i.getContext("2d");n.target.files[0]&&(e.readAsDataURL(n.target.files[0]),e.onload=function(n){a.src=n.target.result},a.onload=function(){i.width=t,i.height=i.width*(a.height/a.width);var n=document.createElement("canvas"),e=n.getContext("2d");n.width=i.width,n.height=i.height,e.drawImage(a,0,0,n.width,n.height),o.drawImage(n,0,0,n.width,n.height,0,0,n.width,n.height);var d=i.toDataURL("image/webp");m(d),r(d)})}}),(0,l.jsx)("canvas",{id:"canvas",style:{display:"none"}}),(0,l.jsx)(h,{src:c})]})};m.defaultProps={maxPixel:500,padding:"10px 10px 0",setResizedImageUri:function(){}};var f=m},9487:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,i,o,d,u,c,s,p,h=t(4165),l=t(1413),m=t(5861),f=t(885),P=t(7313),g=t(5627),x=(t(3222),t(2668)),D=t(790),w=t(1677),O=t(9673),Z=t(7532),E=t(168),b=t(3115),I=t(1237),$=b.ZP.div(r||(r=(0,E.Z)(["\n  width: 100%;\n  display: flex;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  padding: ",";\n"])),(function(n){return n.height}),(function(n){return n.padding})),C=b.ZP.div(a||(a=(0,E.Z)(["\n  padding: 10px;\n  border-radius: 4px;\n  margin: 0 auto 20px;\n  background-color: #fff;\n  height: ",";\n  overflow: ",";\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n  @media (max-width: 768px) {\n    max-width: 365px;\n  }\n"])),(function(n){return n.height}),(function(n){return n.overflow})),T=b.ZP.div(i||(i=(0,E.Z)(["\n  display: flex;\n  min-width: 280px;\n  align-items: center;\n"]))),y=b.ZP.img(o||(o=(0,E.Z)(["\n  width: 90px;\n  height: 60px;\n  object-fit: contain;\n  margin: 5px 15px 0 0;\n"]))),A=b.ZP.div(d||(d=(0,E.Z)(["\n  height: 15px;\n  margin: 5px 0 0;\n  overflow: hidden;\n"]))),R=b.ZP.p(u||(u=(0,E.Z)(["\n  font-size: 11px;\n  font-style: italic;\n  color: ",";\n  transform: ",";\n"])),(function(n){return n.textColor}),(function(n){return n.transform})),_=b.ZP.p(c||(c=(0,E.Z)(["\n  font-weight: 700;\n  margin: 10px 0 5px;\n"]))),U=b.ZP.span(s||(s=(0,E.Z)(["\n  width: 45px;\n  display: inline-block;\n"]))),v=b.ZP.input(p||(p=(0,E.Z)(["\n  cursor: pointer;\n  margin: 7px 4px 7px 0;\n"]))),N=t(7123),j=t(3454),F=t(3070),S=t(6417),W=F.Re.MONEY_AND_WEIGHT,L=F.Re.MONEY_AND_QUANTITY,q=function(n){var e=(0,g.cI)({defaultValues:{}}),t=e.register,r=e.setValue,a=e.handleSubmit,i=e.formState.errors,o=(0,x.a)(N.bV,{onCompleted:function(n){var e=n&&n.global||{},t=e.companyName,a=e.companyHotline,i=e.companyAddress,o=e.companySlogan,d=e.companyLogo,u=e.reportTrackingMode;r("companyName",t),r("companyHotline",a),r("companyAddress",i),r("companySlogan",o),r("companyLogo",d),H(u)},fetchPolicy:"cache-and-network"}),d=o.data,u=d&&d.global||{},c=u.companyName,s=u.companyHotline,p=u.companyAddress,E=u.companySlogan,b=u.companyLogo,F=(0,P.useState)(""),q=(0,f.Z)(F,2),M=q[0],H=q[1],k={content:"",textColor:"",transform:"translateY(100%)"},Y=(0,P.useState)(k),z=(0,f.Z)(Y,2),B=z[0],G=z[1],V=(0,P.useState)(""),Q=(0,f.Z)(V,2),K=Q[0],X=Q[1],J=(0,P.useState)(!1),nn=(0,f.Z)(J,2),en=nn[0],tn=nn[1],rn=en?{overflow:"",height:"100%"}:{overflow:"hidden",height:B.content?"180px":"160px"},an=en?{padding:"20px 0 0",height:"fit-content"}:{padding:"25% 0 0",height:"80vh"},on=M===W,dn=(0,D.D)(j.eQ,{refetchQueries:[{query:N.bV},"GET_GLOBAL_DATA"]}),un=(0,f.Z)(dn,1)[0],cn=function(n){var e=n.target.value;G(k),H(e)},sn=function(){var n=(0,m.Z)((0,h.Z)().mark((function n(e){var t,r,a,i,o,d;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.companyName,r=e.companyHotline,a=e.companyAddress,i=e.companySlogan,o=(0,l.Z)((0,l.Z)({companyName:t,companyHotline:r,companyAddress:a,companySlogan:i},K&&{companyLogo:K}),{},{reportTrackingMode:M}),n.next=4,un({variables:{data:o}});case 4:d=n.sent,X(""),tn(!1),d.data?G({transform:"translateY(0)",textColor:I.Z.green,content:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"}):G({transform:"translateY(0)",textColor:I.Z.lightRed,content:"H\u1ec7 th\u1ed1ng \u0111ang b\u1ea3o tr\xec. Vui l\xf2ng quay l\u1ea1i sau!"});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,S.jsx)($,{height:an.height,padding:an.padding,children:(0,S.jsxs)(C,{height:rn.height,overflow:rn.overflow,children:[(0,S.jsx)(_,{children:c}),(0,S.jsxs)(T,{children:[(0,S.jsx)(y,{src:b}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("p",{children:[(0,S.jsx)(U,{children:"Hotline"}),": ",s]}),(0,S.jsxs)("p",{children:[(0,S.jsx)(U,{children:"Slogan"}),": ",E]}),(0,S.jsxs)("p",{children:[(0,S.jsx)(U,{children:"\u0110\u1ecba ch\u1ec9"}),": ",p]})]})]}),!en&&!!B.content&&(0,S.jsx)(A,{children:(0,S.jsx)(R,{transform:B.transform,textColor:B.textColor,children:B.content})}),!en&&(0,S.jsx)(w.Z,{label:"C\u1eacP NH\u1eacT",fontWeight:"700",padding:"5px 10px",margin:"15px 0 10px",onClick:function(){return tn(!0)}}),(0,S.jsx)("hr",{}),(0,S.jsx)(_,{children:"C\u1eadp nh\u1eadt th\xf4ng tin c\xf4ng ty:"}),(0,S.jsx)(O.Z,{margin:"0",padding:"5px",name:"companyName",register:t,isError:!!i.companyName,validations:{required:!0},placeholder:"C\u1eadp nh\u1eadt t\xean c\xf4ng ty"}),(0,S.jsx)(O.Z,{margin:"0",padding:"5px",name:"companyHotline",register:t,isError:!!i.companyHotline,validations:{required:!0},placeholder:"C\u1eadp nh\u1eadt s\u1ed1 hotline"}),(0,S.jsx)(O.Z,{margin:"0",padding:"5px",name:"companyAddress",register:t,isError:!!i.companyAddress,validations:{required:!0},placeholder:"C\u1eadp nh\u1eadt \u0111\u1ecba ch\u1ec9 c\xf4ng ty"}),(0,S.jsx)(O.Z,{margin:"5px 0 0",padding:"5px",name:"companySlogan",register:t,isError:!!i.companySlogan,validations:{required:!0},placeholder:"C\u1eadp nh\u1eadt slogan c\xf4ng ty"}),(0,S.jsx)(_,{children:"Logo c\xf4ng ty:"}),(0,S.jsx)(Z.Z,{maxPixel:200,padding:"5px 0 0",setResizedImageUri:X}),(0,S.jsx)(_,{children:"Ch\u1ebf \u0111\u1ed9 theo d\xf5i:"}),(0,S.jsxs)(T,{children:[(0,S.jsx)(v,{type:"radio",value:L,checked:!on,onChange:cn}),(0,S.jsx)("p",{children:"Doanh s\u1ed1 ti\u1ec1n & S\u1ed1 l\u01b0\u1ee3ng"})]}),(0,S.jsxs)(T,{children:[(0,S.jsx)(v,{type:"radio",value:W,checked:on,onChange:cn}),(0,S.jsx)("p",{children:"Doanh s\u1ed1 ti\u1ec1n & S\u1ea3n l\u01b0\u1ee3ng"})]}),(0,S.jsx)("hr",{}),(0,S.jsx)(w.Z,{label:"X\xc1C NH\u1eacN",fontWeight:"700",margin:"10px 0 0",padding:"5px 10px",onClick:a(sn)})]})})};q.defaultProps={};var M=q},3454:function(n,e,t){t.d(e,{$E:function(){return K},CK:function(){return wn},GG:function(){return dn},Gb:function(){return bn},JS:function(){return sn},Nv:function(){return V},PA:function(){return an},Q7:function(){return gn},WP:function(){return on},Xu:function(){return cn},Yh:function(){return pn},aF:function(){return X},cG:function(){return B},d4:function(){return J},dF:function(){return un},e9:function(){return tn},eQ:function(){return z},gF:function(){return mn},ik:function(){return ln},jT:function(){return hn},jb:function(){return Zn},l9:function(){return Pn},mh:function(){return rn},oj:function(){return Q},ou:function(){return en},qe:function(){return xn},rF:function(){return nn},uh:function(){return fn},us:function(){return Dn},vK:function(){return En},xd:function(){return On},ym:function(){return G}});var r,a,i,o,d,u,c,s,p,h,l,m,f,P,g,x,D,w,O,Z,E,b,I,$,C,T,y,A,R,_,U,v,N,j,F,S,W,L,q,M,H=t(168),k=t(9237),Y=t(9384),z=(0,k.Ps)(r||(r=(0,H.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),Y.Ts),B=(0,k.Ps)(a||(a=(0,H.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),Y.Od),G=(0,k.Ps)(i||(i=(0,H.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),Y.Od,Y.Sh),V=((0,k.Ps)(o||(o=(0,H.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),Y.Sh,Y.Od),(0,k.Ps)(d||(d=(0,H.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),Q=(0,k.Ps)(u||(u=(0,H.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),K=(0,k.Ps)(c||(c=(0,H.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),Y.Sh),X=((0,k.Ps)(s||(s=(0,H.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,k.Ps)(p||(p=(0,H.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4)),J=((0,k.Ps)(h||(h=(0,H.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,k.Ps)(l||(l=(0,H.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,k.Ps)(m||(m=(0,H.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL)),nn=(0,k.Ps)(f||(f=(0,H.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),en=(0,k.Ps)(P||(P=(0,H.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),tn=(0,k.Ps)(g||(g=(0,H.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),rn=(0,k.Ps)(x||(x=(0,H.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),an=(0,k.Ps)(D||(D=(0,H.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),on=(0,k.Ps)(w||(w=(0,H.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),dn=(0,k.Ps)(O||(O=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),un=(0,k.Ps)(Z||(Z=(0,H.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),cn=(0,k.Ps)(E||(E=(0,H.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),sn=(0,k.Ps)(b||(b=(0,H.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),pn=(0,k.Ps)(I||(I=(0,H.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),hn=(0,k.Ps)($||($=(0,H.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),ln=(0,k.Ps)(C||(C=(0,H.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),mn=((0,k.Ps)(T||(T=(0,H.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,k.Ps)(y||(y=(0,H.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,k.Ps)(A||(A=(0,H.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3)),fn=(0,k.Ps)(R||(R=(0,H.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),Pn=(0,k.Ps)(_||(_=(0,H.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),gn=(0,k.Ps)(U||(U=(0,H.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),xn=((0,k.Ps)(v||(v=(0,H.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,k.Ps)(N||(N=(0,H.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,k.Ps)(j||(j=(0,H.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD)),Dn=(0,k.Ps)(F||(F=(0,H.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),wn=(0,k.Ps)(S||(S=(0,H.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),On=(0,k.Ps)(W||(W=(0,H.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),Zn=(0,k.Ps)(L||(L=(0,H.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD),En=(0,k.Ps)(q||(q=(0,H.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),Y.ms),bn=(0,k.Ps)(M||(M=(0,H.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),Y.lH)}}]);