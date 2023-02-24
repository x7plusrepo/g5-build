"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6256,1450,8550,9590,2369],{3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return en},JS:function(){return on},Nv:function(){return j},PA:function(){return nn},WP:function(){return tn},Xu:function(){return an},Yh:function(){return un},aF:function(){return H},cG:function(){return B},d4:function(){return z},dF:function(){return rn},e9:function(){return X},gF:function(){return sn},ik:function(){return cn},jT:function(){return dn},jb:function(){return In},l9:function(){return ln},mh:function(){return Q},oj:function(){return G},ou:function(){return J},qe:function(){return hn},rF:function(){return K},uh:function(){return Pn},us:function(){return Dn},vK:function(){return mn},xd:function(){return On},ym:function(){return V}});var r,a,o,i,u,d,c,s,P,l,h,D,p,O,I,m,$,E,T,w,_,f,R,C,U,A,b,F,N,Z,v,g,W,y,M,S,q,L,Y=e(168),k=e(9237),x=e(9384),B=(0,k.Ps)(r||(r=(0,Y.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),x.Od),V=(0,k.Ps)(a||(a=(0,Y.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),x.Od,x.Sh),j=((0,k.Ps)(o||(o=(0,Y.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),x.Sh,x.Od),(0,k.Ps)(i||(i=(0,Y.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),G=(0,k.Ps)(u||(u=(0,Y.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),H=((0,k.Ps)(d||(d=(0,Y.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),x.Sh),(0,k.Ps)(c||(c=(0,Y.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,k.Ps)(s||(s=(0,Y.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4)),z=((0,k.Ps)(P||(P=(0,Y.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4),(0,k.Ps)(l||(l=(0,Y.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4),(0,k.Ps)(h||(h=(0,Y.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL)),K=(0,k.Ps)(D||(D=(0,Y.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),J=(0,k.Ps)(p||(p=(0,Y.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),X=(0,k.Ps)(O||(O=(0,Y.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),Q=(0,k.Ps)(I||(I=(0,Y.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),nn=(0,k.Ps)(m||(m=(0,Y.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),tn=(0,k.Ps)($||($=(0,Y.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM),en=(0,k.Ps)(E||(E=(0,Y.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM),rn=(0,k.Ps)(T||(T=(0,Y.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM),an=(0,k.Ps)(w||(w=(0,Y.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),on=(0,k.Ps)(_||(_=(0,Y.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),un=(0,k.Ps)(f||(f=(0,Y.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),dn=(0,k.Ps)(R||(R=(0,Y.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),cn=(0,k.Ps)(C||(C=(0,Y.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),sn=((0,k.Ps)(U||(U=(0,Y.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),(0,k.Ps)(A||(A=(0,Y.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),(0,k.Ps)(b||(b=(0,Y.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3)),Pn=(0,k.Ps)(F||(F=(0,Y.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),ln=(0,k.Ps)(N||(N=(0,Y.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),x.UW),hn=((0,k.Ps)(Z||(Z=(0,Y.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),x.UW),(0,k.Ps)(v||(v=(0,Y.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,k.Ps)(g||(g=(0,Y.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,k.Ps)(W||(W=(0,Y.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),x.mD)),Dn=(0,k.Ps)(y||(y=(0,Y.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),pn=(0,k.Ps)(M||(M=(0,Y.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),On=(0,k.Ps)(S||(S=(0,Y.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),In=(0,k.Ps)(q||(q=(0,Y.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),x.mD),mn=(0,k.Ps)(L||(L=(0,Y.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),x.ms)},2206:function(n,t,e){e.d(t,{FM:function(){return i},d0:function(){return o}});var r=e(4942),a=e(2982);function o(n,t,e){var o=t[n],i=o.edges,u=o.pageInfo;return i.length?(0,r.Z)({},n,{__typename:e[n].__typename,edges:[].concat((0,a.Z)(e[n].edges),(0,a.Z)(i)),pageInfo:u}):e}function i(n,t,e,o,i,u,d){var c=o[n],s=c.edges,P=c.pageInfo,l=[],h=!1;if(e.data){var D=e.data[t],p={node:D},O=!i||i(D);h=O,O&&(l=d?d(s,D):u?[p].concat((0,a.Z)(s)):[].concat((0,a.Z)(s),[p]))}return h?(0,r.Z)({},n,{__typename:o[n].__typename,edges:l,pageInfo:P}):o}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),a=e(7313),o=e(345),i=e(3301),u=e(8112),d=e(4624),c=e(1511);function s(n,t){var e=(0,c.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,a.useState)({called:!1,loading:!1,client:e}),P=s[0],l=s[1],h=(0,a.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var D=(0,a.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,a=t.options,u=t.mutation,c=(0,r.pi)((0,r.pi)({},a),{mutation:u});h.current.result.loading||c.ignoreResults||!h.current.isMounted||l(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++h.current.mutationId,P=(0,o.J)(c,n);return e.mutate(P).then((function(t){var r,a,o,u=t.data,c=t.errors,D=c&&c.length>0?new d.c({graphQLErrors:c}):void 0;if(s===h.current.mutationId&&!P.ignoreResults){var p={called:!0,loading:!1,data:u,error:D,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,p)&&l(h.current.result=p)}return null===(a=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,t.data,P),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data,P),t})).catch((function(t){var r,a,o,u;if(s===h.current.mutationId&&h.current.isMounted){var d={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,d)||l(h.current.result=d)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(o=null===(a=h.current.options)||void 0===a?void 0:a.onError)||void 0===o||o.call(a,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),p=(0,a.useCallback)((function(){h.current.isMounted&&l({called:!1,loading:!1,client:e})}),[]);return(0,a.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[D,(0,r.pi)({reset:p},P)]}}}]);