"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9826,2190,8047,8550,9590,2369],{3454:function(n,t,e){e.d(t,{$E:function(){return z},CK:function(){return _n},GG:function(){return un},Gb:function(){return Tn},JS:function(){return sn},Nv:function(){return j},PA:function(){return an},Q7:function(){return On},WP:function(){return on},Xu:function(){return dn},Yh:function(){return ln},aF:function(){return J},cG:function(){return H},d4:function(){return X},dF:function(){return cn},e9:function(){return en},eQ:function(){return x},gF:function(){return Pn},ik:function(){return pn},jT:function(){return hn},jb:function(){return fn},l9:function(){return mn},mh:function(){return rn},oj:function(){return K},ou:function(){return tn},qe:function(){return $n},rF:function(){return nn},uh:function(){return Dn},us:function(){return En},vK:function(){return wn},xd:function(){return In},ym:function(){return Q}});var r,a,o,i,u,c,d,s,l,h,p,P,D,m,O,$,E,_,I,f,w,T,b,C,R,A,U,v,g,N,F,y,Z,W,q,M,S,k,G,L,Y=e(168),V=e(9237),B=e(9384),x=(0,V.Ps)(r||(r=(0,Y.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),B.Ts),H=(0,V.Ps)(a||(a=(0,Y.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),B.Od),Q=(0,V.Ps)(o||(o=(0,Y.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),B.Od,B.Sh),j=((0,V.Ps)(i||(i=(0,Y.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),B.Sh,B.Od),(0,V.Ps)(u||(u=(0,Y.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),K=(0,V.Ps)(c||(c=(0,Y.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),z=(0,V.Ps)(d||(d=(0,Y.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),B.Sh),J=((0,V.Ps)(s||(s=(0,Y.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,V.Ps)(l||(l=(0,Y.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),B.Y4)),X=((0,V.Ps)(h||(h=(0,Y.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),B.Y4),(0,V.Ps)(p||(p=(0,Y.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),B.Y4),(0,V.Ps)(P||(P=(0,Y.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL)),nn=(0,V.Ps)(D||(D=(0,Y.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL),tn=(0,V.Ps)(m||(m=(0,Y.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL),en=(0,V.Ps)(O||(O=(0,Y.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL),rn=(0,V.Ps)($||($=(0,Y.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL),an=(0,V.Ps)(E||(E=(0,Y.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),B.dL),on=(0,V.Ps)(_||(_=(0,Y.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),B.MM),un=(0,V.Ps)(I||(I=(0,Y.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),B.MM),cn=(0,V.Ps)(f||(f=(0,Y.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),B.MM),dn=(0,V.Ps)(w||(w=(0,Y.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),B.xC),sn=(0,V.Ps)(T||(T=(0,Y.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),B.xC),ln=(0,V.Ps)(b||(b=(0,Y.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),B.xC),hn=(0,V.Ps)(C||(C=(0,Y.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),B.xC),pn=(0,V.Ps)(R||(R=(0,Y.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),B.l3),Pn=((0,V.Ps)(A||(A=(0,Y.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),B.l3),(0,V.Ps)(U||(U=(0,Y.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),B.l3),(0,V.Ps)(v||(v=(0,Y.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),B.l3)),Dn=(0,V.Ps)(g||(g=(0,Y.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),B.l3),mn=(0,V.Ps)(N||(N=(0,Y.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),B.UW),On=(0,V.Ps)(F||(F=(0,Y.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),B.UW),$n=((0,V.Ps)(y||(y=(0,Y.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,V.Ps)(Z||(Z=(0,Y.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,V.Ps)(W||(W=(0,Y.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),B.mD)),En=(0,V.Ps)(q||(q=(0,Y.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),B.zY),_n=(0,V.Ps)(M||(M=(0,Y.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),B.zY),In=(0,V.Ps)(S||(S=(0,Y.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),B.zY),fn=(0,V.Ps)(k||(k=(0,Y.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),B.mD),wn=(0,V.Ps)(G||(G=(0,Y.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),B.ms),Tn=(0,V.Ps)(L||(L=(0,Y.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),B.lH)},1511:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6178),a=e(7313),o=e(4883);function i(n){var t=(0,a.useContext)((0,o.K)()),e=n||t.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),a=e(7313),o=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,a.useState)({called:!1,loading:!1,client:e}),l=s[0],h=s[1],p=(0,a.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var P=(0,a.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,a=t.options,u=t.mutation,d=(0,r.pi)((0,r.pi)({},a),{mutation:u});p.current.result.loading||d.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++p.current.mutationId,l=(0,o.J)(d,n);return e.mutate(l).then((function(t){var r,a,o,u=t.data,d=t.errors,P=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===p.current.mutationId&&!l.ignoreResults){var D={called:!0,loading:!1,data:u,error:P,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,D)&&h(p.current.result=D)}return null===(a=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,t.data,l),null===(o=n.onCompleted)||void 0===o||o.call(n,t.data,l),t})).catch((function(t){var r,a,o,u;if(s===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(o=null===(a=p.current.options)||void 0===a?void 0:a.onError)||void 0===o||o.call(a,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),D=(0,a.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,a.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[P,(0,r.pi)({reset:D},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return r}});var r,a=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(r||(r={}));var o=new Map;function i(n){var t;switch(n){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=o.get(n);if(i)return i;__DEV__?(0,a.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,a.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],d=[],s=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":d.push(p);break;case"subscription":s.push(p)}}else u.push(p)}__DEV__?(0,a.kG)(!u.length||c.length||d.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,a.kG)(!u.length||c.length||d.length||s.length,33),__DEV__?(0,a.kG)(c.length+d.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(c.length+d.length+s.length<=1,34),e=c.length?r.Query:r.Mutation,c.length||d.length||(e=r.Subscription);var P=c.length?c:d.length?d:s;__DEV__?(0,a.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(1===P.length,35);var D=P[0];t=D.variableDefinitions||[];var m={name:D.name&&"Name"===D.name.kind?D.name.value:"data",type:e,variables:t};return o.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,a.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,a.kG)(e.type===t,36)}}}]);