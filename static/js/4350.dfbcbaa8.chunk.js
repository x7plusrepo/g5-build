"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4350,9826],{1677:function(n,t,e){e.d(t,{Z:function(){return P}});var r,o=e(1413),a=(e(7313),e(168)),i=e(3115),u=e(1237),d=i.ZP.button(r||(r=(0,a.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  background-color: ",";\n"])),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.bgColor?n.bgColor:u.Z.primary})),c=e(6417),s=function(n){var t=n.label;return(0,c.jsx)(d,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};s.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var P=s},3454:function(n,t,e){e.d(t,{CK:function(){return ln},GG:function(){return nn},JS:function(){return en},Nv:function(){return z},WP:function(){return Q},Xu:function(){return tn},Yh:function(){return rn},aF:function(){return V},cG:function(){return j},d4:function(){return H},e9:function(){return X},gF:function(){return un},ik:function(){return an},jT:function(){return on},jb:function(){return pn},l9:function(){return cn},oj:function(){return G},qe:function(){return sn},rF:function(){return K},uh:function(){return dn},us:function(){return Pn},vK:function(){return Dn},xd:function(){return hn},xi:function(){return J},ym:function(){return B}});var r,o,a,i,u,d,c,s,P,l,h,p,D,O,$,m,I,E,T,f,w,C,R,_,b,U,A,N,F,Z,v,W,S,g,M,y,q,L,x=e(168),Y=e(9237),k=e(9384),j=(0,Y.Ps)(r||(r=(0,x.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),k.Od),B=(0,Y.Ps)(o||(o=(0,x.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),k.Od,k.Sh),z=((0,Y.Ps)(a||(a=(0,x.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),k.Sh,k.Od),(0,Y.Ps)(i||(i=(0,x.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),G=(0,Y.Ps)(u||(u=(0,x.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),V=((0,Y.Ps)(d||(d=(0,x.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),k.Sh),(0,Y.Ps)(c||(c=(0,x.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,Y.Ps)(s||(s=(0,x.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4)),H=((0,Y.Ps)(P||(P=(0,x.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4),(0,Y.Ps)(l||(l=(0,x.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4),(0,Y.Ps)(h||(h=(0,x.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL)),K=(0,Y.Ps)(p||(p=(0,x.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),J=(0,Y.Ps)(D||(D=(0,x.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),X=(0,Y.Ps)(O||(O=(0,x.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),Q=((0,Y.Ps)($||($=(0,x.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),(0,Y.Ps)(m||(m=(0,x.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),(0,Y.Ps)(I||(I=(0,x.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM)),nn=(0,Y.Ps)(E||(E=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM),tn=((0,Y.Ps)(T||(T=(0,x.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM),(0,Y.Ps)(f||(f=(0,x.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC)),en=(0,Y.Ps)(w||(w=(0,x.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),rn=(0,Y.Ps)(C||(C=(0,x.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),on=(0,Y.Ps)(R||(R=(0,x.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),an=(0,Y.Ps)(_||(_=(0,x.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),un=((0,Y.Ps)(b||(b=(0,x.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),(0,Y.Ps)(U||(U=(0,x.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),(0,Y.Ps)(A||(A=(0,x.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3)),dn=(0,Y.Ps)(N||(N=(0,x.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),cn=(0,Y.Ps)(F||(F=(0,x.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),k.UW),sn=((0,Y.Ps)(Z||(Z=(0,x.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),k.UW),(0,Y.Ps)(v||(v=(0,x.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,Y.Ps)(W||(W=(0,x.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,Y.Ps)(S||(S=(0,x.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),k.mD)),Pn=(0,Y.Ps)(g||(g=(0,x.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),ln=(0,Y.Ps)(M||(M=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),hn=(0,Y.Ps)(y||(y=(0,x.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),pn=(0,Y.Ps)(q||(q=(0,x.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),k.mD),Dn=(0,Y.Ps)(L||(L=(0,x.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),k.ms)},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),d=e(4624),c=e(1511);function s(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),P=s[0],l=s[1],h=(0,o.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var p=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,o=t.options,u=t.mutation,c=(0,r.pi)((0,r.pi)({},o),{mutation:u});h.current.result.loading||c.ignoreResults||!h.current.isMounted||l(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++h.current.mutationId,P=(0,a.J)(c,n);return e.mutate(P).then((function(t){var r,o,a,u=t.data,c=t.errors,p=c&&c.length>0?new d.c({graphQLErrors:c}):void 0;if(s===h.current.mutationId&&!P.ignoreResults){var D={called:!0,loading:!1,data:u,error:p,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,D)&&l(h.current.result=D)}return null===(o=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,P),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,P),t})).catch((function(t){var r,o,a,u;if(s===h.current.mutationId&&h.current.isMounted){var d={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,d)||l(h.current.result=d)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(a=null===(o=h.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),D=(0,o.useCallback)((function(){h.current.isMounted&&l({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[p,(0,r.pi)({reset:D},P)]}}}]);