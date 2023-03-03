"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8550,9590,2369],{3454:function(n,t,e){e.d(t,{CK:function(){return In},GG:function(){return on},Gb:function(){return wn},JS:function(){return cn},Nv:function(){return K},OD:function(){return V},PA:function(){return rn},WP:function(){return an},Xu:function(){return dn},Yh:function(){return sn},aF:function(){return J},cG:function(){return x},d4:function(){return X},dF:function(){return un},e9:function(){return tn},gF:function(){return hn},ik:function(){return ln},jT:function(){return Pn},jb:function(){return En},l9:function(){return On},mh:function(){return en},oj:function(){return z},ou:function(){return nn},qe:function(){return pn},rF:function(){return Q},uh:function(){return Dn},us:function(){return $n},vK:function(){return Tn},xd:function(){return mn},ym:function(){return j}});var r,a,o,i,u,d,c,s,P,l,h,D,O,p,$,I,m,E,T,w,R,_,C,f,A,U,b,N,F,Z,v,W,M,y,S,q,g,L,Y,B,k=e(168),G=e(9237),H=e(9384),V=(0,G.Ps)(r||(r=(0,k.Z)(["\n  mutation UPDATE_REPORT_TRACKING_MODE($data: UpdateReportTrackingModeInput!) {\n    updateReportTrackingMode(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),H.Ts),x=(0,G.Ps)(a||(a=(0,k.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),H.Od),j=(0,G.Ps)(o||(o=(0,k.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),H.Od,H.Sh),K=((0,G.Ps)(i||(i=(0,k.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),H.Sh,H.Od),(0,G.Ps)(u||(u=(0,k.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),z=(0,G.Ps)(d||(d=(0,k.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),J=((0,G.Ps)(c||(c=(0,k.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),H.Sh),(0,G.Ps)(s||(s=(0,k.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,G.Ps)(P||(P=(0,k.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),H.Y4)),X=((0,G.Ps)(l||(l=(0,k.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),H.Y4),(0,G.Ps)(h||(h=(0,k.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),H.Y4),(0,G.Ps)(D||(D=(0,k.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL)),Q=(0,G.Ps)(O||(O=(0,k.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL),nn=(0,G.Ps)(p||(p=(0,k.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL),tn=(0,G.Ps)($||($=(0,k.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL),en=(0,G.Ps)(I||(I=(0,k.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL),rn=(0,G.Ps)(m||(m=(0,k.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),H.dL),an=(0,G.Ps)(E||(E=(0,k.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),H.MM),on=(0,G.Ps)(T||(T=(0,k.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),H.MM),un=(0,G.Ps)(w||(w=(0,k.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),H.MM),dn=(0,G.Ps)(R||(R=(0,k.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),H.xC),cn=(0,G.Ps)(_||(_=(0,k.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),H.xC),sn=(0,G.Ps)(C||(C=(0,k.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),H.xC),Pn=(0,G.Ps)(f||(f=(0,k.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),H.xC),ln=(0,G.Ps)(A||(A=(0,k.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),H.l3),hn=((0,G.Ps)(U||(U=(0,k.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),H.l3),(0,G.Ps)(b||(b=(0,k.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),H.l3),(0,G.Ps)(N||(N=(0,k.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),H.l3)),Dn=(0,G.Ps)(F||(F=(0,k.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),H.l3),On=(0,G.Ps)(Z||(Z=(0,k.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),H.UW),pn=((0,G.Ps)(v||(v=(0,k.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),H.UW),(0,G.Ps)(W||(W=(0,k.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,G.Ps)(M||(M=(0,k.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,G.Ps)(y||(y=(0,k.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),H.mD)),$n=(0,G.Ps)(S||(S=(0,k.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),H.zY),In=(0,G.Ps)(q||(q=(0,k.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),H.zY),mn=(0,G.Ps)(g||(g=(0,k.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),H.zY),En=(0,G.Ps)(L||(L=(0,k.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),H.mD),Tn=(0,G.Ps)(Y||(Y=(0,k.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),H.ms),wn=(0,G.Ps)(B||(B=(0,k.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),H.lH)},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),a=e(7313),o=e(345),i=e(3301),u=e(8112),d=e(4624),c=e(1511);function s(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,a.useState)({called:!1,loading:!1,client:e}),P=s[0],l=s[1],h=(0,a.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var D=(0,a.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,a=t.options,u=t.mutation,c=(0,r.pi)((0,r.pi)({},a),{mutation:u});h.current.result.loading||c.ignoreResults||!h.current.isMounted||l(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++h.current.mutationId,P=(0,o.J)(c,n);return e.mutate(P).then((function(t){var r,a,o,u=t.data,c=t.errors,D=c&&c.length>0?new d.c({graphQLErrors:c}):void 0;if(s===h.current.mutationId&&!P.ignoreResults){var O={called:!0,loading:!1,data:u,error:D,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,O)&&l(h.current.result=O)}return null===(a=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,t.data,P),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data,P),t})).catch((function(t){var r,a,o,u;if(s===h.current.mutationId&&h.current.isMounted){var d={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,d)||l(h.current.result=d)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(o=null===(a=h.current.options)||void 0===a?void 0:a.onError)||void 0===o||o.call(a,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),O=(0,a.useCallback)((function(){h.current.isMounted&&l({called:!1,loading:!1,client:e})}),[]);return(0,a.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[D,(0,r.pi)({reset:O},P)]}}}]);