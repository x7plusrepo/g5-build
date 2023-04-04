"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7270],{1677:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o=e(1413),a=(e(7313),e(168)),i=e(3115),u=e(1237),c=i.ZP.button(r||(r=(0,a.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:u.Z.primary})),s=e(6417),d=function(n){var t=n.label;return(0,s.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},9485:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,o,a,i,u=e(4165),c=e(5861),s=e(885),d=e(7313),l=e(5627),h=e(3222),p=e(790),P=e(4695),m=e(1677),f=e(9673),D=e(168),O=e(3115),w=e(1237),E=O.ZP.div(r||(r=(0,D.Z)(["\n  height: 80vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=O.ZP.div(o||(o=(0,D.Z)(["\n  width: 70%;\n  margin: 0 auto;\n"]))),b=O.ZP.div(a||(a=(0,D.Z)(["\n  margin: 5px;\n  font-size: 12px;\n  overflow: hidden;\n"]))),_=O.ZP.p(i||(i=(0,D.Z)(["\n  color: ",";\n  transform: ",";\n"])),w.Z.lightRed,(function(n){return n.transform})),$=e(3454),g=e(8260),T=e(6417),v=function(n){var t=(0,l.cI)({defaultValues:{phoneNumber:"",password:""}}),e=t.register,r=t.setValue,o=t.setError,a=t.clearErrors,i=t.handleSubmit,D=t.formState.errors,O=(0,h.I0)(),w=(0,d.useState)(!1),v=(0,s.Z)(w,2),A=v[0],C=v[1],Z=A?"translateY(0)":"translateY(100%)",U=(0,p.D)($.ym,{onError:function(){return C(!0)}}),R=(0,s.Z)(U,1)[0],y=function(){var n=(0,c.Z)((0,u.Z)().mark((function n(t){var e,r,o,a,i,c,s,d;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.phoneNumber,r=t.password,o={phoneNumber:e,password:r},n.next=4,R({variables:{data:o}});case 4:(a=n.sent)&&a.data&&(i=a.data.login,c=i.account,s=i.accessToken,d={isAuthenticated:!0,viewerQuery:c},(0,g.uX)(s),O((0,P.CD)(d)));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),N=function(n){var t=n.target.name,e=n.target.value;C(!1),r(t,e),e?a(t):o(t)};return(0,T.jsx)("form",{onSubmit:i(y),children:(0,T.jsx)(E,{children:(0,T.jsxs)(I,{children:[(0,T.jsx)(f.Z,{type:"number",pattern:"[0-9]*",inputmode:"numeric",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phoneNumber",style:{height:30},register:e,onChange:N,isError:!!D.phoneNumber,validations:{required:!0}}),(0,T.jsx)(f.Z,{label:"M\u1eadt kh\u1ea9u",name:"password",type:"password",style:{height:30},register:e,isError:!!D.password,onChange:N,validations:{required:!0}}),(0,T.jsx)(b,{children:(0,T.jsx)(_,{transform:Z,children:"Sai s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ho\u1eb7c m\u1eadt kh\u1ea9u!"})}),(0,T.jsx)(m.Z,{fontWeight:"700",label:"\u0110\u0102NG NH\u1eacP",padding:"7px 15px",onClick:i(y)})]})})})}},6947:function(n,t,e){e.d(t,{Z:function(){return h}});e(7313);var r,o,a=e(168),i=e(3115),u=i.ZP.div(r||(r=(0,a.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),c=i.ZP.p(o||(o=(0,a.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),s=e(3070),d=e(6417),l=function(n){var t=n.isError,e=n.errorMessage,r=t?"translateY(0)":"translateY(110%)";return(0,d.jsx)(u,{children:(0,d.jsx)(c,{isError:t,textTransform:r,children:e})})};l.defaultProps={isError:!1,errorMessage:s.ug.REQUIRED};var h=l},2180:function(n,t,e){e.d(t,{Z:function(){return u}});e(7313);var r,o=e(168),a=e(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),i=e(6417),u=function(n){var t=n.label;return(0,i.jsx)(a,{children:t})}},9673:function(n,t,e){e.d(t,{Z:function(){return m}});var r,o,a=e(1413),i=(e(7313),e(2180)),u=e(6947),c=e(168),s=e(3115),d=e(1237),l=s.ZP.div(r||(r=(0,c.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),h=s.ZP.input(o||(o=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),p=e(6417),P=function(n){var t=n.label,e=n.name,r=n.isError,o=n.errorMessage,c=n.register,s=n.validations,d=n.isInline,P=n.width,m=n.margin,f=d?"auto":P;return(0,p.jsxs)(l,{width:f,margin:m,children:[t&&(0,p.jsx)(i.Z,{label:t}),(0,p.jsx)(h,(0,a.Z)((0,a.Z)({},c(e,s)),n)),(0,p.jsx)(u.Z,{isError:r,errorMessage:o})]})};P.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var m=P},3454:function(n,t,e){e.d(t,{$E:function(){return on},Am:function(){return Dn},BQ:function(){return wn},CS:function(){return On},EJ:function(){return Un},GG:function(){return mn},Gb:function(){return Wn},Iv:function(){return Tn},JS:function(){return bn},Nv:function(){return en},PA:function(){return pn},Q7:function(){return Zn},SB:function(){return Nn},Sz:function(){return un},UM:function(){return An},WP:function(){return Pn},Xu:function(){return In},Yh:function(){return _n},aD:function(){return xn},aF:function(){return an},cG:function(){return nn},d4:function(){return cn},dF:function(){return En},e9:function(){return ln},eQ:function(){return X},gF:function(){return vn},ik:function(){return gn},jT:function(){return $n},jb:function(){return Fn},l9:function(){return Cn},mh:function(){return hn},mz:function(){return Mn},oj:function(){return rn},ou:function(){return dn},qe:function(){return yn},rF:function(){return sn},sY:function(){return fn},u7:function(){return Rn},vK:function(){return Sn},ym:function(){return tn}});var r,o,a,i,u,c,s,d,l,h,p,P,m,f,D,O,w,E,I,b,_,$,g,T,v,A,C,Z,U,R,y,N,x,F,S,M,W,q,k,L,j,G,Y,B,V,H,z,Q=e(168),K=e(9237),J=e(9384),X=(0,K.Ps)(r||(r=(0,Q.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),J.Ts),nn=(0,K.Ps)(o||(o=(0,Q.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),J.Od),tn=(0,K.Ps)(a||(a=(0,Q.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),J.Od,J.Sh),en=((0,K.Ps)(i||(i=(0,Q.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),J.Sh,J.Od),(0,K.Ps)(u||(u=(0,Q.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),rn=(0,K.Ps)(c||(c=(0,Q.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),on=(0,K.Ps)(s||(s=(0,Q.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),J.Sh),an=((0,K.Ps)(d||(d=(0,Q.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,K.Ps)(l||(l=(0,Q.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4)),un=((0,K.Ps)(h||(h=(0,Q.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4),(0,K.Ps)(p||(p=(0,Q.Z)(["\n  mutation MARK_AS_READ_ALL_NOTIFICATION {\n    markAsReadAllNotification\n  }\n"])))),cn=((0,K.Ps)(P||(P=(0,Q.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4),(0,K.Ps)(m||(m=(0,Q.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL)),sn=(0,K.Ps)(f||(f=(0,Q.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),dn=(0,K.Ps)(D||(D=(0,Q.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),ln=(0,K.Ps)(O||(O=(0,Q.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),hn=(0,K.Ps)(w||(w=(0,Q.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),pn=(0,K.Ps)(E||(E=(0,Q.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),Pn=(0,K.Ps)(I||(I=(0,Q.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),mn=(0,K.Ps)(b||(b=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),fn=(0,K.Ps)(_||(_=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),Dn=(0,K.Ps)($||($=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),On=(0,K.Ps)(g||(g=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),wn=(0,K.Ps)(T||(T=(0,Q.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),En=(0,K.Ps)(v||(v=(0,Q.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),In=(0,K.Ps)(A||(A=(0,Q.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),bn=(0,K.Ps)(C||(C=(0,Q.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),_n=(0,K.Ps)(Z||(Z=(0,Q.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),$n=(0,K.Ps)(U||(U=(0,Q.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),gn=(0,K.Ps)(R||(R=(0,Q.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),Tn=(0,K.Ps)(y||(y=(0,Q.Z)(["\n  mutation UPDATE_DEBT($data: UpdateDebtInput!, $where: DebtWhereUniqueInput!) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),vn=((0,K.Ps)(N||(N=(0,Q.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),(0,K.Ps)(x||(x=(0,Q.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3)),An=(0,K.Ps)(F||(F=(0,Q.Z)(["\n  mutation IMPORT_DEBTS($data: ImportOldDebtsInput!) {\n    importDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),Cn=(0,K.Ps)(S||(S=(0,Q.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),J.UW),Zn=(0,K.Ps)(M||(M=(0,Q.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),J.UW),Un=(0,K.Ps)(W||(W=(0,Q.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),Rn=(0,K.Ps)(q||(q=(0,Q.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),yn=(0,K.Ps)(k||(k=(0,Q.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),J.mD),Nn=(0,K.Ps)(L||(L=(0,Q.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),xn=(0,K.Ps)(j||(j=(0,Q.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),J.N7),Fn=((0,K.Ps)(G||(G=(0,Q.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),(0,K.Ps)(Y||(Y=(0,Q.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),(0,K.Ps)(B||(B=(0,Q.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),J.mD)),Sn=(0,K.Ps)(V||(V=(0,Q.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),J.ms),Mn=(0,K.Ps)(H||(H=(0,Q.Z)(["\n  mutation UPDATE_WAREHOUSE_BALANCE_PRODUCT(\n    $data: UpdateWarehouseBalanceProductInput!\n    $where: WarehouseBalanceProductWhereUniqueInput!\n  ) {\n    updateWarehouseBalanceProduct(data: $data, where: $where) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),J.ms),Wn=(0,K.Ps)(z||(z=(0,Q.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),J.lH)},5987:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(3366);function o(n,t){if(null==n)return{};var e,o,a=(0,r.Z)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}},1511:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6178),o=e(7313),a=e(4883);function i(n){var t=(0,o.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return d}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),s=e(1511);function d(n,t){var e=(0,s.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:e}),l=d[0],h=d[1],p=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var P=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,o=t.options,u=t.mutation,s=(0,r.pi)((0,r.pi)({},o),{mutation:u});p.current.result.loading||s.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var d=++p.current.mutationId,l=(0,a.J)(s,n);return e.mutate(l).then((function(t){var r,o,a,u=t.data,s=t.errors,P=s&&s.length>0?new c.c({graphQLErrors:s}):void 0;if(d===p.current.mutationId&&!l.ignoreResults){var m={called:!0,loading:!1,data:u,error:P,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,m)&&h(p.current.result=m)}return null===(o=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var r,o,a,u;if(d===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(a=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),m=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[P,(0,r.pi)({reset:m},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function i(n){var t;switch(n){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],s=[],d=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":s.push(p);break;case"subscription":d.push(p)}}else u.push(p)}__DEV__?(0,o.kG)(!u.length||c.length||s.length||d.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||c.length||s.length||d.length,33),__DEV__?(0,o.kG)(c.length+s.length+d.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(d.length," ")+"subscriptions and ".concat(s.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(c.length+s.length+d.length<=1,34),e=c.length?r.Query:r.Mutation,c.length||s.length||(e=r.Subscription);var P=c.length?c:s.length?s:d;__DEV__?(0,o.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===P.length,35);var m=P[0];t=m.variableDefinitions||[];var f={name:m.name&&"Name"===m.name.kind?m.name.value:"data",type:e,variables:t};return a.set(n,f),f}(n),u=i(t),c=i(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);