"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[1450,9826,6256,2190,8047],{3454:function(n,t,e){e.d(t,{$E:function(){return en},Am:function(){return hn},BQ:function(){return On},CS:function(){return pn},GG:function(){return Dn},Gb:function(){return vn},Iv:function(){return wn},JS:function(){return $n},Nv:function(){return nn},PA:function(){return sn},Q7:function(){return Rn},SB:function(){return bn},WP:function(){return Pn},Xu:function(){return mn},Yh:function(){return En},aD:function(){return Nn},aF:function(){return rn},cG:function(){return K},d4:function(){return on},dF:function(){return In},e9:function(){return dn},eQ:function(){return J},gF:function(){return Un},ik:function(){return _n},jT:function(){return Tn},jb:function(){return Fn},l9:function(){return An},mh:function(){return cn},oj:function(){return tn},ou:function(){return un},qe:function(){return Cn},rF:function(){return an},sY:function(){return ln},uh:function(){return fn},vK:function(){return Zn},ym:function(){return X}});var r,o,a,i,u,d,c,s,P,D,l,h,p,O,I,m,$,E,T,_,w,U,f,A,R,C,b,N,F,Z,v,M,W,y,S,g,q,L,B,Y,G,V,k,H,j,x=e(168),Q=e(9237),z=e(9384),J=(0,Q.Ps)(r||(r=(0,x.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),z.Ts),K=(0,Q.Ps)(o||(o=(0,x.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),z.Od),X=(0,Q.Ps)(a||(a=(0,x.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),z.Od,z.Sh),nn=((0,Q.Ps)(i||(i=(0,x.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),z.Sh,z.Od),(0,Q.Ps)(u||(u=(0,x.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),tn=(0,Q.Ps)(d||(d=(0,x.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),en=(0,Q.Ps)(c||(c=(0,x.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),z.Sh),rn=((0,Q.Ps)(s||(s=(0,x.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,Q.Ps)(P||(P=(0,x.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4)),on=((0,Q.Ps)(D||(D=(0,x.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,Q.Ps)(l||(l=(0,x.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,Q.Ps)(h||(h=(0,x.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL)),an=(0,Q.Ps)(p||(p=(0,x.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),un=(0,Q.Ps)(O||(O=(0,x.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),dn=(0,Q.Ps)(I||(I=(0,x.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),cn=(0,Q.Ps)(m||(m=(0,x.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),sn=(0,Q.Ps)($||($=(0,x.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),Pn=(0,Q.Ps)(E||(E=(0,x.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),Dn=(0,Q.Ps)(T||(T=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),ln=(0,Q.Ps)(_||(_=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),hn=(0,Q.Ps)(w||(w=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),pn=(0,Q.Ps)(U||(U=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),On=(0,Q.Ps)(f||(f=(0,x.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),In=(0,Q.Ps)(A||(A=(0,x.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),mn=(0,Q.Ps)(R||(R=(0,x.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),$n=(0,Q.Ps)(C||(C=(0,x.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),En=(0,Q.Ps)(b||(b=(0,x.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),Tn=(0,Q.Ps)(N||(N=(0,x.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),_n=(0,Q.Ps)(F||(F=(0,x.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),wn=(0,Q.Ps)(Z||(Z=(0,x.Z)(["\n  mutation UPDATE_DEBT($data: UpdateDebtInput!, $where: DebtWhereUniqueInput!) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),Un=((0,Q.Ps)(v||(v=(0,x.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),(0,Q.Ps)(M||(M=(0,x.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3)),fn=(0,Q.Ps)(W||(W=(0,x.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),An=(0,Q.Ps)(y||(y=(0,x.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),Rn=(0,Q.Ps)(S||(S=(0,x.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),Cn=((0,Q.Ps)(g||(g=(0,x.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,Q.Ps)(q||(q=(0,x.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,Q.Ps)(L||(L=(0,x.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),bn=(0,Q.Ps)(B||(B=(0,x.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),Nn=(0,Q.Ps)(Y||(Y=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),z.N7),Fn=((0,Q.Ps)(G||(G=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,Q.Ps)(V||(V=(0,x.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,Q.Ps)(k||(k=(0,x.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),Zn=(0,Q.Ps)(H||(H=(0,x.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),z.ms),vn=(0,Q.Ps)(j||(j=(0,x.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),z.lH)},2206:function(n,t,e){e.d(t,{FM:function(){return i},d0:function(){return a}});var r=e(4942),o=e(2982);function a(n,t,e){var a=t[n],i=a.edges,u=a.pageInfo;return i.length?(0,r.Z)({},n,{__typename:e[n].__typename,edges:[].concat((0,o.Z)(e[n].edges),(0,o.Z)(i)),pageInfo:u}):e}function i(n,t,e,a,i,u,d){var c=a[n],s=c.edges,P=c.pageInfo,D=[],l=!1;if(e.data){var h=e.data[t],p={node:h},O=!i||i(h);l=O,O&&(D=d?d(s,h):u?[p].concat((0,o.Z)(s)):[].concat((0,o.Z)(s),[p]))}return l?(0,r.Z)({},n,{__typename:a[n].__typename,edges:D,pageInfo:P}):a}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),d=e(4624),c=e(1511);function s(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),P=s[0],D=s[1],l=(0,o.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(l.current,{client:e,options:t,mutation:n});var h=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=l.current,e=t.client,o=t.options,u=t.mutation,c=(0,r.pi)((0,r.pi)({},o),{mutation:u});l.current.result.loading||c.ignoreResults||!l.current.isMounted||D(l.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++l.current.mutationId,P=(0,a.J)(c,n);return e.mutate(P).then((function(t){var r,o,a,u=t.data,c=t.errors,h=c&&c.length>0?new d.c({graphQLErrors:c}):void 0;if(s===l.current.mutationId&&!P.ignoreResults){var p={called:!0,loading:!1,data:u,error:h,client:e};l.current.isMounted&&!(0,i.D)(l.current.result,p)&&D(l.current.result=p)}return null===(o=null===(r=l.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,P),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,P),t})).catch((function(t){var r,o,a,u;if(s===l.current.mutationId&&l.current.isMounted){var d={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(l.current.result,d)||D(l.current.result=d)}if((null===(r=l.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(a=null===(o=l.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),p=(0,o.useCallback)((function(){l.current.isMounted&&D({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return l.current.isMounted=!0,function(){l.current.isMounted=!1}}),[]),[h,(0,r.pi)({reset:p},P)]}}}]);