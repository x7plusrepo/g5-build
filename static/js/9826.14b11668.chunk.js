"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9826,790],{3454:function(n,t,e){e.d(t,{$E:function(){return an},Am:function(){return In},BQ:function(){return $n},CS:function(){return mn},EJ:function(){return Fn},GG:function(){return On},Gb:function(){return Ln},Iv:function(){return Rn},JS:function(){return _n},Nv:function(){return en},PA:function(){return ln},Q7:function(){return Nn},SB:function(){return Mn},Sz:function(){return un},UM:function(){return fn},WP:function(){return hn},Xu:function(){return Tn},Yh:function(){return wn},aD:function(){return vn},aF:function(){return on},cG:function(){return nn},d4:function(){return dn},dF:function(){return En},e9:function(){return Pn},eQ:function(){return X},gF:function(){return Cn},ik:function(){return Un},jT:function(){return An},jb:function(){return Sn},l9:function(){return bn},mh:function(){return Dn},mz:function(){return qn},oj:function(){return rn},ou:function(){return sn},qe:function(){return Wn},rF:function(){return cn},sY:function(){return pn},u7:function(){return Zn},vK:function(){return yn},ym:function(){return tn}});var r,a,o,i,u,d,c,s,P,D,l,h,O,p,I,m,$,E,T,_,w,A,U,R,C,f,b,N,F,Z,W,M,v,S,y,q,L,B,g,Y,G,k,H,V,j,x,z,Q=e(168),J=e(9237),K=e(9384),X=(0,J.Ps)(r||(r=(0,Q.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),K.Ts),nn=(0,J.Ps)(a||(a=(0,Q.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),K.Od),tn=(0,J.Ps)(o||(o=(0,Q.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),K.Od,K.Sh),en=((0,J.Ps)(i||(i=(0,Q.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),K.Sh,K.Od),(0,J.Ps)(u||(u=(0,Q.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),rn=(0,J.Ps)(d||(d=(0,Q.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),an=(0,J.Ps)(c||(c=(0,Q.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),K.Sh),on=((0,J.Ps)(s||(s=(0,Q.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,J.Ps)(P||(P=(0,Q.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),K.Y4)),un=((0,J.Ps)(D||(D=(0,Q.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),K.Y4),(0,J.Ps)(l||(l=(0,Q.Z)(["\n  mutation MARK_AS_READ_ALL_NOTIFICATION {\n    markAsReadAllNotification\n  }\n"])))),dn=((0,J.Ps)(h||(h=(0,Q.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),K.Y4),(0,J.Ps)(O||(O=(0,Q.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL)),cn=(0,J.Ps)(p||(p=(0,Q.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL),sn=(0,J.Ps)(I||(I=(0,Q.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL),Pn=(0,J.Ps)(m||(m=(0,Q.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL),Dn=(0,J.Ps)($||($=(0,Q.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL),ln=(0,J.Ps)(E||(E=(0,Q.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),K.dL),hn=(0,J.Ps)(T||(T=(0,Q.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),On=(0,J.Ps)(_||(_=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),pn=(0,J.Ps)(w||(w=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),In=(0,J.Ps)(A||(A=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),mn=(0,J.Ps)(U||(U=(0,Q.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),$n=(0,J.Ps)(R||(R=(0,Q.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),En=(0,J.Ps)(C||(C=(0,Q.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),K.MM),Tn=(0,J.Ps)(f||(f=(0,Q.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),K.xC),_n=(0,J.Ps)(b||(b=(0,Q.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),K.xC),wn=(0,J.Ps)(N||(N=(0,Q.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),K.xC),An=(0,J.Ps)(F||(F=(0,Q.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),K.xC),Un=(0,J.Ps)(Z||(Z=(0,Q.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),K.l3),Rn=(0,J.Ps)(W||(W=(0,Q.Z)(["\n  mutation UPDATE_DEBT($data: UpdateDebtInput!, $where: DebtWhereUniqueInput!) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),K.l3),Cn=((0,J.Ps)(M||(M=(0,Q.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),K.l3),(0,J.Ps)(v||(v=(0,Q.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),K.l3)),fn=(0,J.Ps)(S||(S=(0,Q.Z)(["\n  mutation IMPORT_DEBTS($data: ImportOldDebtsInput!) {\n    importDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),K.l3),bn=(0,J.Ps)(y||(y=(0,Q.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),K.UW),Nn=(0,J.Ps)(q||(q=(0,Q.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),K.UW),Fn=(0,J.Ps)(L||(L=(0,Q.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),Zn=(0,J.Ps)(B||(B=(0,Q.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),Wn=(0,J.Ps)(g||(g=(0,Q.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),K.mD),Mn=(0,J.Ps)(Y||(Y=(0,Q.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),K.zY),vn=(0,J.Ps)(G||(G=(0,Q.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),K.N7),Sn=((0,J.Ps)(k||(k=(0,Q.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),K.zY),(0,J.Ps)(H||(H=(0,Q.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),K.zY),(0,J.Ps)(V||(V=(0,Q.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),K.mD)),yn=(0,J.Ps)(j||(j=(0,Q.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),K.ms),qn=(0,J.Ps)(x||(x=(0,Q.Z)(["\n  mutation UPDATE_WAREHOUSE_BALANCE_PRODUCT(\n    $data: UpdateWarehouseBalanceProductInput!\n    $where: WarehouseBalanceProductWhereUniqueInput!\n  ) {\n    updateWarehouseBalanceProduct(data: $data, where: $where) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),K.ms),Ln=(0,J.Ps)(z||(z=(0,Q.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),K.lH)},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),a=e(7313),o=e(345),i=e(3301),u=e(8112),d=e(4624),c=e(1511);function s(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,a.useState)({called:!1,loading:!1,client:e}),P=s[0],D=s[1],l=(0,a.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(l.current,{client:e,options:t,mutation:n});var h=(0,a.useCallback)((function(n){void 0===n&&(n={});var t=l.current,e=t.client,a=t.options,u=t.mutation,c=(0,r.pi)((0,r.pi)({},a),{mutation:u});l.current.result.loading||c.ignoreResults||!l.current.isMounted||D(l.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++l.current.mutationId,P=(0,o.J)(c,n);return e.mutate(P).then((function(t){var r,a,o,u=t.data,c=t.errors,h=c&&c.length>0?new d.c({graphQLErrors:c}):void 0;if(s===l.current.mutationId&&!P.ignoreResults){var O={called:!0,loading:!1,data:u,error:h,client:e};l.current.isMounted&&!(0,i.D)(l.current.result,O)&&D(l.current.result=O)}return null===(a=null===(r=l.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,t.data,P),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data,P),t})).catch((function(t){var r,a,o,u;if(s===l.current.mutationId&&l.current.isMounted){var d={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(l.current.result,d)||D(l.current.result=d)}if((null===(r=l.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(o=null===(a=l.current.options)||void 0===a?void 0:a.onError)||void 0===o||o.call(a,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),O=(0,a.useCallback)((function(){l.current.isMounted&&D({called:!1,loading:!1,client:e})}),[]);return(0,a.useEffect)((function(){return l.current.isMounted=!0,function(){l.current.isMounted=!1}}),[]),[h,(0,r.pi)({reset:O},P)]}}}]);