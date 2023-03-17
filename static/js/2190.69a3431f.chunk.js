"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2190,9826,8047,8550,9590,2369,9373],{3454:function(n,t,e){e.d(t,{$E:function(){return en},Am:function(){return Pn},BQ:function(){return mn},CS:function(){return Dn},GG:function(){return hn},Gb:function(){return gn},JS:function(){return _n},Nv:function(){return nn},PA:function(){return sn},Q7:function(){return Cn},SB:function(){return An},WP:function(){return ln},Xu:function(){return $n},Yh:function(){return In},aD:function(){return Rn},aF:function(){return on},cG:function(){return J},d4:function(){return rn},dF:function(){return On},e9:function(){return cn},eQ:function(){return K},gF:function(){return wn},ik:function(){return Tn},jT:function(){return En},jb:function(){return Nn},l9:function(){return bn},mh:function(){return dn},oj:function(){return tn},ou:function(){return un},qe:function(){return Un},rF:function(){return an},sY:function(){return pn},uh:function(){return fn},vK:function(){return vn},ym:function(){return X}});var o,r,a,i,u,c,d,s,l,h,p,P,D,m,O,$,_,I,E,T,w,f,b,C,U,A,R,N,v,g,F,y,M,Z,S,W,q,k,L,G,Y,B,V,H,Q,x=e(168),j=e(9237),z=e(9384),K=(0,j.Ps)(o||(o=(0,x.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),z.Ts),J=(0,j.Ps)(r||(r=(0,x.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),z.Od),X=(0,j.Ps)(a||(a=(0,x.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),z.Od,z.Sh),nn=((0,j.Ps)(i||(i=(0,x.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),z.Sh,z.Od),(0,j.Ps)(u||(u=(0,x.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),tn=(0,j.Ps)(c||(c=(0,x.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),en=(0,j.Ps)(d||(d=(0,x.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),z.Sh),on=((0,j.Ps)(s||(s=(0,x.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,j.Ps)(l||(l=(0,x.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4)),rn=((0,j.Ps)(h||(h=(0,x.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,j.Ps)(p||(p=(0,x.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,j.Ps)(P||(P=(0,x.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL)),an=(0,j.Ps)(D||(D=(0,x.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),un=(0,j.Ps)(m||(m=(0,x.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),cn=(0,j.Ps)(O||(O=(0,x.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),dn=(0,j.Ps)($||($=(0,x.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),sn=(0,j.Ps)(_||(_=(0,x.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),ln=(0,j.Ps)(I||(I=(0,x.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),hn=(0,j.Ps)(E||(E=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),pn=(0,j.Ps)(T||(T=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),Pn=(0,j.Ps)(w||(w=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),Dn=(0,j.Ps)(f||(f=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),mn=(0,j.Ps)(b||(b=(0,x.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),On=(0,j.Ps)(C||(C=(0,x.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),$n=(0,j.Ps)(U||(U=(0,x.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),_n=(0,j.Ps)(A||(A=(0,x.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),In=(0,j.Ps)(R||(R=(0,x.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),En=(0,j.Ps)(N||(N=(0,x.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),Tn=(0,j.Ps)(v||(v=(0,x.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),wn=((0,j.Ps)(g||(g=(0,x.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),(0,j.Ps)(F||(F=(0,x.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),(0,j.Ps)(y||(y=(0,x.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3)),fn=(0,j.Ps)(M||(M=(0,x.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),bn=(0,j.Ps)(Z||(Z=(0,x.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),Cn=(0,j.Ps)(S||(S=(0,x.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),Un=((0,j.Ps)(W||(W=(0,x.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,j.Ps)(q||(q=(0,x.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,j.Ps)(k||(k=(0,x.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),An=(0,j.Ps)(L||(L=(0,x.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),Rn=(0,j.Ps)(G||(G=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),z.N7),Nn=((0,j.Ps)(Y||(Y=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,j.Ps)(B||(B=(0,x.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,j.Ps)(V||(V=(0,x.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),vn=(0,j.Ps)(H||(H=(0,x.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),z.ms),gn=(0,j.Ps)(Q||(Q=(0,x.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),z.lH)},1511:function(n,t,e){e.d(t,{x:function(){return i}});var o=e(6178),r=e(7313),a=e(4883);function i(n){var t=(0,r.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,o.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return s}});var o=e(6797),r=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,r.useState)({called:!1,loading:!1,client:e}),l=s[0],h=s[1],p=(0,r.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var P=(0,r.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,r=t.options,u=t.mutation,d=(0,o.pi)((0,o.pi)({},r),{mutation:u});p.current.result.loading||d.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++p.current.mutationId,l=(0,a.J)(d,n);return e.mutate(l).then((function(t){var o,r,a,u=t.data,d=t.errors,P=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===p.current.mutationId&&!l.ignoreResults){var D={called:!0,loading:!1,data:u,error:P,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,D)&&h(p.current.result=D)}return null===(r=null===(o=p.current.options)||void 0===o?void 0:o.onCompleted)||void 0===r||r.call(o,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var o,r,a,u;if(s===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(o=p.current.options)||void 0===o?void 0:o.onError)||l.onError)return null===(a=null===(r=p.current.options)||void 0===r?void 0:r.onError)||void 0===a||a.call(r,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),D=(0,r.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,r.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[P,(0,o.pi)({reset:D},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return o}});var o,r=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(o||(o={}));var a=new Map;function i(n){var t;switch(n){case o.Query:t="Query";break;case o.Mutation:t="Mutation";break;case o.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,r.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,r.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],d=[],s=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":d.push(p);break;case"subscription":s.push(p)}}else u.push(p)}__DEV__?(0,r.kG)(!u.length||c.length||d.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,r.kG)(!u.length||c.length||d.length||s.length,33),__DEV__?(0,r.kG)(c.length+d.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(c.length+d.length+s.length<=1,34),e=c.length?o.Query:o.Mutation,c.length||d.length||(e=o.Subscription);var P=c.length?c:d.length?d:s;__DEV__?(0,r.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(1===P.length,35);var D=P[0];t=D.variableDefinitions||[];var m={name:D.name&&"Name"===D.name.kind?D.name.value:"data",type:e,variables:t};return a.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,r.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,r.kG)(e.type===t,36)}}}]);