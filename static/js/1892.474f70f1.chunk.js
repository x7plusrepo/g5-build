"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[1892,8550,9590,2369],{3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return en},JS:function(){return an},Nv:function(){return G},PA:function(){return nn},WP:function(){return tn},Xu:function(){return rn},Yh:function(){return on},aF:function(){return H},cG:function(){return x},d4:function(){return z},e9:function(){return Q},gF:function(){return dn},ik:function(){return cn},jT:function(){return un},jb:function(){return Dn},l9:function(){return Pn},mh:function(){return X},oj:function(){return V},qe:function(){return ln},rF:function(){return J},uh:function(){return sn},us:function(){return hn},vK:function(){return $n},xd:function(){return On},xi:function(){return K},ym:function(){return B}});var r,a,o,i,u,c,d,s,P,l,h,p,O,D,$,I,m,E,f,T,w,C,R,b,_,U,A,F,N,v,Z,y,M,W,S,g,q,L,Y=e(168),j=e(9237),k=e(9384),x=(0,j.Ps)(r||(r=(0,Y.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),k.Od),B=(0,j.Ps)(a||(a=(0,Y.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),k.Od,k.Sh),G=((0,j.Ps)(o||(o=(0,Y.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),k.Sh,k.Od),(0,j.Ps)(i||(i=(0,Y.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),V=(0,j.Ps)(u||(u=(0,Y.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),H=((0,j.Ps)(c||(c=(0,Y.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),k.Sh),(0,j.Ps)(d||(d=(0,Y.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,j.Ps)(s||(s=(0,Y.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4)),z=((0,j.Ps)(P||(P=(0,Y.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4),(0,j.Ps)(l||(l=(0,Y.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),k.Y4),(0,j.Ps)(h||(h=(0,Y.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL)),J=(0,j.Ps)(p||(p=(0,Y.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),K=(0,j.Ps)(O||(O=(0,Y.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),Q=(0,j.Ps)(D||(D=(0,Y.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),X=(0,j.Ps)($||($=(0,Y.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),nn=(0,j.Ps)(I||(I=(0,Y.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),k.dL),tn=(0,j.Ps)(m||(m=(0,Y.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM),en=(0,j.Ps)(E||(E=(0,Y.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM),rn=((0,j.Ps)(f||(f=(0,Y.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),k.MM),(0,j.Ps)(T||(T=(0,Y.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC)),an=(0,j.Ps)(w||(w=(0,Y.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),on=(0,j.Ps)(C||(C=(0,Y.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),un=(0,j.Ps)(R||(R=(0,Y.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),k.xC),cn=(0,j.Ps)(b||(b=(0,Y.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),dn=((0,j.Ps)(_||(_=(0,Y.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),(0,j.Ps)(U||(U=(0,Y.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),(0,j.Ps)(A||(A=(0,Y.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3)),sn=(0,j.Ps)(F||(F=(0,Y.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),k.l3),Pn=(0,j.Ps)(N||(N=(0,Y.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),k.UW),ln=((0,j.Ps)(v||(v=(0,Y.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),k.UW),(0,j.Ps)(Z||(Z=(0,Y.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,j.Ps)(y||(y=(0,Y.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,j.Ps)(M||(M=(0,Y.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),k.mD)),hn=(0,j.Ps)(W||(W=(0,Y.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),pn=(0,j.Ps)(S||(S=(0,Y.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),On=(0,j.Ps)(g||(g=(0,Y.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),k.zY),Dn=(0,j.Ps)(q||(q=(0,Y.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),k.mD),$n=(0,j.Ps)(L||(L=(0,Y.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),k.ms)},3306:function(n,t,e){e.d(t,{t:function(){return d}});var r=e(6797),a=e(7313),o=e(345),i=e(2668),u=e(1511),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function d(n,t){var e=(0,i.A)((0,u.x)(t&&t.client),n),d=(0,a.useRef)(),s=d.current?(0,o.J)(t,d.current):t,P=e.useQuery((0,r.pi)((0,r.pi)({},s),{skip:!d.current})),l=P.observable.options.initialFetchPolicy||e.getDefaultFetchPolicy(),h=Object.assign(P,{called:!!d.current}),p=(0,a.useMemo)((function(){for(var n={},t=function(t){var r=h[t];n[t]=function(){return d.current||(d.current=Object.create(null),e.forceUpdate()),r.apply(this,arguments)}},r=0,a=c;r<a.length;r++){t(a[r])}return n}),[]);return Object.assign(h,p),[(0,a.useCallback)((function(n){d.current=n?(0,r.pi)((0,r.pi)({},n),{fetchPolicy:n.fetchPolicy||l}):{fetchPolicy:l};var t=e.asyncUpdate().then((function(n){return Object.assign(n,p)}));return t.catch((function(){})),t}),[]),h]}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),a=e(7313),o=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,a.useState)({called:!1,loading:!1,client:e}),P=s[0],l=s[1],h=(0,a.useRef)({result:P,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var p=(0,a.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,a=t.options,u=t.mutation,d=(0,r.pi)((0,r.pi)({},a),{mutation:u});h.current.result.loading||d.ignoreResults||!h.current.isMounted||l(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++h.current.mutationId,P=(0,o.J)(d,n);return e.mutate(P).then((function(t){var r,a,o,u=t.data,d=t.errors,p=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===h.current.mutationId&&!P.ignoreResults){var O={called:!0,loading:!1,data:u,error:p,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,O)&&l(h.current.result=O)}return null===(a=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,t.data,P),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data,P),t})).catch((function(t){var r,a,o,u;if(s===h.current.mutationId&&h.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,c)||l(h.current.result=c)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||P.onError)return null===(o=null===(a=h.current.options)||void 0===a?void 0:a.onError)||void 0===o||o.call(a,t,P),null===(u=n.onError)||void 0===u||u.call(n,t,P),{data:void 0,errors:t};throw t}))}),[]),O=(0,a.useCallback)((function(){h.current.isMounted&&l({called:!1,loading:!1,client:e})}),[]);return(0,a.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[p,(0,r.pi)({reset:O},P)]}}}]);