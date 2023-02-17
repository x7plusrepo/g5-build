"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[1690],{4214:function(n,t,e){e.d(t,{Z:function(){return P}});var r,o=e(1413),i=(e(7313),e(168)),a=e(3115),u=e(1237),d=a.ZP.button(r||(r=(0,i.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 3px 7px;\n  border-radius: 5px;\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),u.Z.rgbaLightRed,u.Z.lightRed),c=e(6417),s=function(n){var t=n.label;return(0,c.jsx)(d,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};s.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var P=s},1300:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o,i=e(1413),a=(e(7313),e(168)),u=e(3115),d=u.ZP.div(r||(r=(0,a.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n"]))),c=u.ZP.button(o||(o=(0,a.Z)(["\n  width: 80%;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 20px;\n  border-radius: 20px;\n  border: 2px solid #fff;\n  text-transform: uppercase;\n  background-color: transparent;\n"]))),s=e(6417),P=function(n){var t=n.label;return(0,s.jsx)(d,{children:(0,s.jsx)(c,(0,i.Z)((0,i.Z)({},n),{},{children:t}))})};P.defaultProps={onClick:function(){}};var l=P},2397:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o,i=e(1413),a=(e(7313),e(168)),u=e(3115),d=u.ZP.div(r||(r=(0,a.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n"]))),c=u.ZP.button(o||(o=(0,a.Z)(["\n  color: #fff;\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 20px;\n  text-transform: uppercase;\n  background-color: transparent;\n"]))),s=e(6417),P=function(n){var t=n.label;return(0,s.jsx)(d,{children:(0,s.jsx)(c,(0,i.Z)((0,i.Z)({},n),{},{children:t}))})};P.defaultProps={onClick:function(){}};var l=P},2262:function(n,t,e){e.d(t,{Z:function(){return P}});var r,o=e(1413),i=(e(7313),e(168)),a=e(3115),u=e(1237),d=a.ZP.button(r||(r=(0,i.Z)(["\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 3px 7px;\n  border-radius: 5px;\n  height: fit-content;\n  margin: ",";\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.bgColor?n.bgColor:u.Z.rgbaSecondary}),u.Z.secondary),c=e(6417),s=function(n){var t=n.label;return(0,c.jsx)(d,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};s.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var P=s},9881:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,o,i,a=e(1413),u=e(885),d=e(7313),c=e(3222),s=e(3306),P=e(2668),l=e(9829),D=e(3867),p=e(2206),f=e(168),h=e(3115),O=e(1237),b=h.ZP.div(r||(r=(0,f.Z)(["\n  font-size: 12px;\n  margin: 20px 0 120px;\n"]))),m=h.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),O.Z.primary),I=h.ZP.div(i||(i=(0,f.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),T=e(7123),_=e(3163),E=e(6417),C=function(n){var t=n.initCustomerAccount,e=n.customerAccountId,r=n.startOfTimeRange,o=n.endOfTimeRange,i=t&&t.node||{},f=i._id,h=i.fullName,C=[{code:"all",label:"T\u1ea5t c\u1ea3"},{code:"pay_immediately",label:"Tr\u1ea3 ngay"},{code:"paid",label:"\u0110\xe3 tr\u1ea3"},{code:"waiting_for_pay",label:"Ch\u01b0a tr\u1ea3"},{code:"reached",label:"\u0110\xe3 \u0111\u1ea1t"},{code:"reaching",label:"\u0110ang ch\u1ea1y"},{code:"unreached",label:"Kh\xf4ng \u0111\u1ea1t"}],Z=((0,c.v9)((function(n){return n.authReducer})).viewerQuery||{})._id,R=(0,d.useState)(C[0]),U=(0,u.Z)(R,2),w=U[0],$=U[1],A=(0,d.useState)("2012/01/01"),N=(0,u.Z)(A,2),y=N[0],F=N[1],S=(0,d.useState)("2100/01/01"),x=(0,u.Z)(S,2),g=x[0],v=x[1],W=(0,d.useState)(f),B=(0,u.Z)(W,2),M=B[0],L=B[1],k=t?y:r,q=t?g:o,j=t?M:e,Y=w.code===C[2].code||w.code===C[3].code||w.code===C[4].code,z=(0,s.t)(T.hM,{fetchPolicy:"cache-and-network"}),V=(0,u.Z)(z,2),H=V[0],G=V[1],K=G.data,Q=G.subscribeToMore,X=K&&K.discountPromotionDiaries.edges||[],J=function(){switch(w.code){case C[1].code:return{payWhenCreateOrder:!0};case C[2].code:return{isPaid:!0};case C[3].code:return{unPayYet:!0};case C[4].code:return{isReached:!0};case C[5].code:return{availableOnly:!0};case C[6].code:return{unReachedOnly:!0};default:return{}}}(),nn=(0,a.Z)((0,a.Z)({startOfTimeRange:new Date(k),endOfTimeRange:new Date(q)},J),j&&{customerAccountId:j}),tn=(0,P.a)(T.Kr,{variables:{filter:nn},skip:Y}).data,en=tn&&tn.discountPromotions.edges||[],rn=function(n){return n.code===w.code?{backgroundColor:O.Z.primary,textColor:"#fff"}:{backgroundColor:"transparent",textColor:""}},on=Y?(0,E.jsx)(E.Fragment,{children:X.map((function(n,t){var e=n.node,r=e.discountPromotionInfo,o=e.reachedCount,i=e.totalBePaidMoneyValue,a={diaryCount:o,diaryInfo:n.node,totalBePaidMoneyValue:i};return(0,E.jsx)(D.Z,{discountPromotionItem:r,customerDiaryInfo:a},t)}))}):(0,E.jsx)(E.Fragment,{children:en.map((function(n,t){return(0,E.jsx)(D.Z,{discountPromotionItem:n.node,customerDiaryInfo:n.node.customerDiaryInfo},t)}))});return(0,d.useEffect)((function(){if(Y){var n=(0,a.Z)({startOfTimeRange:new Date(k),endOfTimeRange:new Date(q)},nn);H({variables:{filter:n}})}}),[w.code]),(0,d.useEffect)((function(){var n=function(n){var t=n||{},e=t.customerAccountId,r=t.staffAccountId,o=t.managerAccountId,i=t.directorAccountId;return Z===e||Z===r||Z===o||Z===i},t=Q({document:_.VL,updateQuery:function(t,e){var r=e.subscriptionData;return(0,p.FM)("discountPromotionDiaries","addedNewDiscountPromotionDiary",r,t,n,!0)}});return function(){return t()}}),[Q]),(0,E.jsxs)(b,{children:[!!t&&(0,E.jsx)(l.Z,{inputStartTime:y,setInputStartTime:F,inputEndTime:g,setInputEndTime:v,onClickSelectResultItem:function(n){var t=(n&&n.node||{})._id;L(t),F("2012/01/01"),v("2100/01/01")},searchPlaceholder:h,showSelectAllButton:!1,canSearchCustomer:!0}),(0,E.jsx)(m,{children:C.map((function(n,t){return(0,E.jsx)(I,{activeColor:rn(n),onClick:function(){return $(n)},borderLeftColor:t>0?O.Z.primary:"transparent",children:n.label},t)}))}),on]})};C.defaultProps={};var Z=C},3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return en},JS:function(){return on},Nv:function(){return z},PA:function(){return nn},WP:function(){return tn},Xu:function(){return rn},Yh:function(){return an},aF:function(){return H},cG:function(){return j},d4:function(){return G},e9:function(){return X},gF:function(){return cn},ik:function(){return dn},jT:function(){return un},jb:function(){return hn},l9:function(){return Pn},mh:function(){return J},oj:function(){return V},qe:function(){return ln},rF:function(){return K},uh:function(){return sn},us:function(){return Dn},vK:function(){return On},xd:function(){return fn},xi:function(){return Q},ym:function(){return Y}});var r,o,i,a,u,d,c,s,P,l,D,p,f,h,O,b,m,I,T,_,E,C,Z,R,U,w,$,A,N,y,F,S,x,g,v,W,B,M,L=e(168),k=e(9237),q=e(9384),j=(0,k.Ps)(r||(r=(0,L.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),q.Od),Y=(0,k.Ps)(o||(o=(0,L.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),q.Od,q.Sh),z=((0,k.Ps)(i||(i=(0,L.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),q.Sh,q.Od),(0,k.Ps)(a||(a=(0,L.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),V=(0,k.Ps)(u||(u=(0,L.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),H=((0,k.Ps)(d||(d=(0,L.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),q.Sh),(0,k.Ps)(c||(c=(0,L.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,k.Ps)(s||(s=(0,L.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),q.Y4)),G=((0,k.Ps)(P||(P=(0,L.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),q.Y4),(0,k.Ps)(l||(l=(0,L.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),q.Y4),(0,k.Ps)(D||(D=(0,L.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL)),K=(0,k.Ps)(p||(p=(0,L.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL),Q=(0,k.Ps)(f||(f=(0,L.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL),X=(0,k.Ps)(h||(h=(0,L.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL),J=(0,k.Ps)(O||(O=(0,L.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL),nn=(0,k.Ps)(b||(b=(0,L.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),q.dL),tn=(0,k.Ps)(m||(m=(0,L.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),q.MM),en=(0,k.Ps)(I||(I=(0,L.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),q.MM),rn=((0,k.Ps)(T||(T=(0,L.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),q.MM),(0,k.Ps)(_||(_=(0,L.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),q.xC)),on=(0,k.Ps)(E||(E=(0,L.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),q.xC),an=(0,k.Ps)(C||(C=(0,L.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),q.xC),un=(0,k.Ps)(Z||(Z=(0,L.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),q.xC),dn=(0,k.Ps)(R||(R=(0,L.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),q.l3),cn=((0,k.Ps)(U||(U=(0,L.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),q.l3),(0,k.Ps)(w||(w=(0,L.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),q.l3),(0,k.Ps)($||($=(0,L.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),q.l3)),sn=(0,k.Ps)(A||(A=(0,L.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),q.l3),Pn=(0,k.Ps)(N||(N=(0,L.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),q.UW),ln=((0,k.Ps)(y||(y=(0,L.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),q.UW),(0,k.Ps)(F||(F=(0,L.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,k.Ps)(S||(S=(0,L.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,k.Ps)(x||(x=(0,L.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),q.mD)),Dn=(0,k.Ps)(g||(g=(0,L.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),q.zY),pn=(0,k.Ps)(v||(v=(0,L.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),q.zY),fn=(0,k.Ps)(W||(W=(0,L.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),q.zY),hn=(0,k.Ps)(B||(B=(0,L.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),q.mD),On=(0,k.Ps)(M||(M=(0,L.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),q.ms)},3163:function(n,t,e){e.d(t,{Fb:function(){return U},I4:function(){return _},PP:function(){return w},VL:function(){return R},hv:function(){return E},uB:function(){return C},uF:function(){return Z}});var r,o,i,a,u,d,c,s,P,l,D,p,f,h,O,b,m=e(168),I=e(9237),T=e(9384),_=(0,I.Ps)(r||(r=(0,m.Z)(["\n  subscription SUB_ADDED_NOTIFICATION {\n    addedNewNotification {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),T.Y4),E=(0,I.Ps)(o||(o=(0,m.Z)(["\n  subscription SUB_ADDED_ORDER {\n    addedNewOrder {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),T.dL),C=(0,I.Ps)(i||(i=(0,m.Z)(["\n  subscription SUB_UPDATED_ORDER {\n    updatedAnOrder {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),T.dL),Z=(0,I.Ps)(a||(a=(0,m.Z)(["\n  subscription SUB_ADDED_DISCOUNT_PROMOTION {\n    addedNewDiscountPromotion {\n      ...basicDiscountPromotionFields\n      customerDiaryInfo {\n        diaryCount\n        diaryInfo {\n          ...basicDiscountPromotionDiaryFields\n        }\n        totalBePaidMoneyValue\n      }\n    }\n  }\n  ","\n  ","\n"])),T.MM,T.xC),R=((0,I.Ps)(u||(u=(0,m.Z)(["\n  subscription SUB_UPDATED_DISCOUNT_PROMOTION {\n    updatedDiscountPromotion {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),T.MM),(0,I.Ps)(d||(d=(0,m.Z)(["\n  subscription SUB_ADDED_DISCOUNT_PROMOTION_DIARY {\n    addedNewDiscountPromotionDiary {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),T.xC)),U=((0,I.Ps)(c||(c=(0,m.Z)(["\n  subscription SUB_UPDATED_DISCOUNT_PROMOTION_DIARY {\n    updatedDiscountPromotionDiary {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),T.xC),(0,I.Ps)(s||(s=(0,m.Z)(["\n  subscription SUB_ADDED_DEBT {\n    addedNewDebt {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),T.l3)),w=((0,I.Ps)(P||(P=(0,m.Z)(["\n  subscription SUB_UPDATED_DEBT {\n    updatedDebt {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),T.l3),(0,I.Ps)(l||(l=(0,m.Z)(["\n  subscription SUB_ADDED_PRODUCT {\n    addedNewProduct {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),T.UW));(0,I.Ps)(D||(D=(0,m.Z)(["\n  subscription SUB_UPDATED_PRODUCT {\n    updatedProduct {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),T.UW),(0,I.Ps)(p||(p=(0,m.Z)(["\n  subscription SUB_IMPORTED_PRODUCTS {\n    importedProducts {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),T.UW),(0,I.Ps)(f||(f=(0,m.Z)(["\n  subscription SUB_DESTROYED_PRODUCT {\n    destroyedProduct {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),T.zY),(0,I.Ps)(h||(h=(0,m.Z)(["\n  subscription SUB_UPDATED_DESTROYED_PRODUCT {\n    updatedDestroyedProduct {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),T.zY),(0,I.Ps)(O||(O=(0,m.Z)(["\n  subscription SUB_ADDED_WAREHOUSE_BALANCE {\n    addedWarehouseBalance {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),T.ms),(0,I.Ps)(b||(b=(0,m.Z)(["\n  subscription SUB_ADDED_WAREHOUSE_BALANCE_DIARY {\n    addedWarehouseBalanceDiary {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),T.lH)}}]);