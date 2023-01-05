"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4350,7570,946,9826,900],{1677:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o=e(1413),a=(e(7313),e(168)),i=e(3115),u=e(1237),c=i.ZP.button(r||(r=(0,a.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 3px 7px;\n  border-radius: 5px;\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.bgColor?n.bgColor:u.Z.rgbaPrimary}),u.Z.primary),d=e(6417),s=function(n){var t=n.label;return(0,d.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};s.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=s},3454:function(n,t,e){e.d(t,{CK:function(){return pn},GG:function(){return nn},JS:function(){return en},Nv:function(){return j},WP:function(){return X},Xu:function(){return tn},Yh:function(){return rn},aF:function(){return H},cG:function(){return Y},d4:function(){return Q},e9:function(){return J},gF:function(){return un},ik:function(){return an},jT:function(){return on},jb:function(){return Pn},l9:function(){return dn},oj:function(){return B},qe:function(){return sn},rF:function(){return z},uh:function(){return cn},us:function(){return ln},vK:function(){return Dn},xd:function(){return hn},xi:function(){return K},ym:function(){return V}});var r,o,a,i,u,c,d,s,l,p,h,P,D,m,O,f,_,$,I,E,b,w,T,C,R,g,v,U,A,N,F,y,Z,k,M,q,S,W,L=e(168),G=e(9237),x=e(9384),Y=(0,G.Ps)(r||(r=(0,L.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),x.Od),V=(0,G.Ps)(o||(o=(0,L.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),x.Od,x.Sh),j=((0,G.Ps)(a||(a=(0,L.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),x.Sh,x.Od),(0,G.Ps)(i||(i=(0,L.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),B=(0,G.Ps)(u||(u=(0,L.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),H=((0,G.Ps)(c||(c=(0,L.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),x.Sh),(0,G.Ps)(d||(d=(0,L.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,G.Ps)(s||(s=(0,L.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4)),Q=((0,G.Ps)(l||(l=(0,L.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4),(0,G.Ps)(p||(p=(0,L.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),x.Y4),(0,G.Ps)(h||(h=(0,L.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL)),z=(0,G.Ps)(P||(P=(0,L.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),K=(0,G.Ps)(D||(D=(0,L.Z)(["\n  mutation CONFIRM_SHIPPED_OUT_ORDER($where: OrderWhereUniqueInput!) {\n    confirmShippedOutOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),J=(0,G.Ps)(m||(m=(0,L.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),X=((0,G.Ps)(O||(O=(0,L.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),(0,G.Ps)(f||(f=(0,L.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),x.dL),(0,G.Ps)(_||(_=(0,L.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM)),nn=(0,G.Ps)($||($=(0,L.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM),tn=((0,G.Ps)(I||(I=(0,L.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),x.MM),(0,G.Ps)(E||(E=(0,L.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC)),en=(0,G.Ps)(b||(b=(0,L.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),rn=(0,G.Ps)(w||(w=(0,L.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),on=(0,G.Ps)(T||(T=(0,L.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),x.xC),an=(0,G.Ps)(C||(C=(0,L.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),un=((0,G.Ps)(R||(R=(0,L.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),(0,G.Ps)(g||(g=(0,L.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),(0,G.Ps)(v||(v=(0,L.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3)),cn=(0,G.Ps)(U||(U=(0,L.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),x.l3),dn=(0,G.Ps)(A||(A=(0,L.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),x.UW),sn=((0,G.Ps)(N||(N=(0,L.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),x.UW),(0,G.Ps)(F||(F=(0,L.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,G.Ps)(y||(y=(0,L.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,G.Ps)(Z||(Z=(0,L.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),x.mD)),ln=(0,G.Ps)(k||(k=(0,L.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),pn=(0,G.Ps)(M||(M=(0,L.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),hn=(0,G.Ps)(q||(q=(0,L.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),x.zY),Pn=(0,G.Ps)(S||(S=(0,L.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),x.mD),Dn=(0,G.Ps)(W||(W=(0,L.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),x.ms)},1511:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6178),o=e(7313),a=e(4883);function i(n){var t=(0,o.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return s}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),l=s[0],p=s[1],h=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var P=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,o=t.options,u=t.mutation,d=(0,r.pi)((0,r.pi)({},o),{mutation:u});h.current.result.loading||d.ignoreResults||!h.current.isMounted||p(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++h.current.mutationId,l=(0,a.J)(d,n);return e.mutate(l).then((function(t){var r,o,a,u=t.data,d=t.errors,P=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===h.current.mutationId&&!l.ignoreResults){var D={called:!0,loading:!1,data:u,error:P,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,D)&&p(h.current.result=D)}return null===(o=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var r,o,a,u;if(s===h.current.mutationId&&h.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,c)||p(h.current.result=c)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(a=null===(o=h.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),D=(0,o.useCallback)((function(){h.current.isMounted&&p({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[P,(0,r.pi)({reset:D},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function i(n){var t;switch(n){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],d=[],s=[],l=0,p=n.definitions;l<p.length;l++){var h=p[l];if("FragmentDefinition"!==h.kind){if("OperationDefinition"===h.kind)switch(h.operation){case"query":c.push(h);break;case"mutation":d.push(h);break;case"subscription":s.push(h)}}else u.push(h)}__DEV__?(0,o.kG)(!u.length||c.length||d.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||c.length||d.length||s.length,33),__DEV__?(0,o.kG)(c.length+d.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(c.length+d.length+s.length<=1,34),e=c.length?r.Query:r.Mutation,c.length||d.length||(e=r.Subscription);var P=c.length?c:d.length?d:s;__DEV__?(0,o.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===P.length,35);var D=P[0];t=D.variableDefinitions||[];var m={name:D.name&&"Name"===D.name.kind?D.name.value:"data",type:e,variables:t};return a.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);