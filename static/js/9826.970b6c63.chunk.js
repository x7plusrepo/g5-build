"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9826,2190,8047,8550,9590,2369],{3454:function(n,t,e){e.d(t,{$E:function(){return tn},Am:function(){return pn},BQ:function(){return Dn},CK:function(){return An},CS:function(){return Pn},GG:function(){return ln},Gb:function(){return gn},JS:function(){return $n},Nv:function(){return X},PA:function(){return dn},Q7:function(){return Cn},WP:function(){return sn},Xu:function(){return On},Yh:function(){return In},aF:function(){return en},cG:function(){return z},d4:function(){return on},dF:function(){return mn},e9:function(){return un},eQ:function(){return K},gF:function(){return Tn},ik:function(){return En},jT:function(){return _n},jb:function(){return Nn},l9:function(){return fn},mh:function(){return cn},oj:function(){return nn},ou:function(){return an},qe:function(){return bn},rF:function(){return rn},sY:function(){return hn},uh:function(){return wn},us:function(){return Un},vK:function(){return vn},xd:function(){return Rn},ym:function(){return J}});var o,r,a,i,u,c,d,s,l,h,p,P,D,m,O,$,I,_,E,T,w,f,C,b,U,A,R,N,v,g,F,y,M,Z,W,S,q,k,L,G,Y,B,V,x,H=e(168),Q=e(9237),j=e(9384),K=(0,Q.Ps)(o||(o=(0,H.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),j.Ts),z=(0,Q.Ps)(r||(r=(0,H.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),j.Od),J=(0,Q.Ps)(a||(a=(0,H.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),j.Od,j.Sh),X=((0,Q.Ps)(i||(i=(0,H.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),j.Sh,j.Od),(0,Q.Ps)(u||(u=(0,H.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),nn=(0,Q.Ps)(c||(c=(0,H.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),tn=(0,Q.Ps)(d||(d=(0,H.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),j.Sh),en=((0,Q.Ps)(s||(s=(0,H.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,Q.Ps)(l||(l=(0,H.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),j.Y4)),on=((0,Q.Ps)(h||(h=(0,H.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),j.Y4),(0,Q.Ps)(p||(p=(0,H.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),j.Y4),(0,Q.Ps)(P||(P=(0,H.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL)),rn=(0,Q.Ps)(D||(D=(0,H.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL),an=(0,Q.Ps)(m||(m=(0,H.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL),un=(0,Q.Ps)(O||(O=(0,H.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL),cn=(0,Q.Ps)($||($=(0,H.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL),dn=(0,Q.Ps)(I||(I=(0,H.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),j.dL),sn=(0,Q.Ps)(_||(_=(0,H.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),ln=(0,Q.Ps)(E||(E=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),hn=(0,Q.Ps)(T||(T=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),pn=(0,Q.Ps)(w||(w=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),Pn=(0,Q.Ps)(f||(f=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),Dn=(0,Q.Ps)(C||(C=(0,H.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),mn=(0,Q.Ps)(b||(b=(0,H.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),j.MM),On=(0,Q.Ps)(U||(U=(0,H.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),j.xC),$n=(0,Q.Ps)(A||(A=(0,H.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),j.xC),In=(0,Q.Ps)(R||(R=(0,H.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),j.xC),_n=(0,Q.Ps)(N||(N=(0,H.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),j.xC),En=(0,Q.Ps)(v||(v=(0,H.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),j.l3),Tn=((0,Q.Ps)(g||(g=(0,H.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),j.l3),(0,Q.Ps)(F||(F=(0,H.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),j.l3),(0,Q.Ps)(y||(y=(0,H.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),j.l3)),wn=(0,Q.Ps)(M||(M=(0,H.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),j.l3),fn=(0,Q.Ps)(Z||(Z=(0,H.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),j.UW),Cn=(0,Q.Ps)(W||(W=(0,H.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),j.UW),bn=((0,Q.Ps)(S||(S=(0,H.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,Q.Ps)(q||(q=(0,H.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,Q.Ps)(k||(k=(0,H.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),j.mD)),Un=(0,Q.Ps)(L||(L=(0,H.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),j.zY),An=(0,Q.Ps)(G||(G=(0,H.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),j.zY),Rn=(0,Q.Ps)(Y||(Y=(0,H.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),j.zY),Nn=(0,Q.Ps)(B||(B=(0,H.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),j.mD),vn=(0,Q.Ps)(V||(V=(0,H.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),j.ms),gn=(0,Q.Ps)(x||(x=(0,H.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),j.lH)},1511:function(n,t,e){e.d(t,{x:function(){return i}});var o=e(6178),r=e(7313),a=e(4883);function i(n){var t=(0,r.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,o.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return s}});var o=e(6797),r=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,r.useState)({called:!1,loading:!1,client:e}),l=s[0],h=s[1],p=(0,r.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var P=(0,r.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,r=t.options,u=t.mutation,d=(0,o.pi)((0,o.pi)({},r),{mutation:u});p.current.result.loading||d.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++p.current.mutationId,l=(0,a.J)(d,n);return e.mutate(l).then((function(t){var o,r,a,u=t.data,d=t.errors,P=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===p.current.mutationId&&!l.ignoreResults){var D={called:!0,loading:!1,data:u,error:P,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,D)&&h(p.current.result=D)}return null===(r=null===(o=p.current.options)||void 0===o?void 0:o.onCompleted)||void 0===r||r.call(o,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var o,r,a,u;if(s===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(o=p.current.options)||void 0===o?void 0:o.onError)||l.onError)return null===(a=null===(r=p.current.options)||void 0===r?void 0:r.onError)||void 0===a||a.call(r,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),D=(0,r.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,r.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[P,(0,o.pi)({reset:D},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return o}});var o,r=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(o||(o={}));var a=new Map;function i(n){var t;switch(n){case o.Query:t="Query";break;case o.Mutation:t="Mutation";break;case o.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,r.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,r.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],d=[],s=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":d.push(p);break;case"subscription":s.push(p)}}else u.push(p)}__DEV__?(0,r.kG)(!u.length||c.length||d.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,r.kG)(!u.length||c.length||d.length||s.length,33),__DEV__?(0,r.kG)(c.length+d.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(c.length+d.length+s.length<=1,34),e=c.length?o.Query:o.Mutation,c.length||d.length||(e=o.Subscription);var P=c.length?c:d.length?d:s;__DEV__?(0,r.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(1===P.length,35);var D=P[0];t=D.variableDefinitions||[];var m={name:D.name&&"Name"===D.name.kind?D.name.value:"data",type:e,variables:t};return a.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,r.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,r.kG)(e.type===t,36)}}}]);