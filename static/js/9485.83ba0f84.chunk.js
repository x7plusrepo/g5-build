"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9485,9826,2190,8047,1677,8550,9590,2369,7570],{1677:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o=e(1413),a=(e(7313),e(168)),i=e(3115),u=e(1237),c=i.ZP.button(r||(r=(0,a.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  background-color: ",";\n"])),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.bgColor?n.bgColor:u.Z.primary})),s=e(6417),d=function(n){var t=n.label;return(0,s.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},9485:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r,o,a=e(4165),i=e(5861),u=e(885),c=(e(7313),e(5627)),s=e(3222),d=e(790),l=e(4695),p=e(1677),h=e(9673),P=e(168),f=e(3115),m=f.ZP.div(r||(r=(0,P.Z)(["\n  height: 80vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),D=f.ZP.div(o||(o=(0,P.Z)(["\n  width: 50%;\n  margin: 0 auto;\n"]))),O=e(3454),b=e(8260),w=e(3070),g=e(6417),E=function(n){var t=(0,c.cI)({defaultValues:{phoneNumber:"",password:""}}),e=t.register,r=t.handleSubmit,o=t.formState.errors,P=(0,s.I0)(),f=(0,d.D)(O.ym),E=(0,u.Z)(f,1)[0],I=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var e,r,o,i,u,c,s,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.phoneNumber,r=t.password,o={phoneNumber:e,password:r},n.next=4,E({variables:{data:o}});case 4:(i=n.sent)&&i.data&&(u=i.data.login,c=u.account,s=u.accessToken,d={isAuthenticated:!0,viewerQuery:c},localStorage.setItem(w.$Q,s),(0,b.uX)(s),P((0,l.CD)(d)));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,g.jsx)("form",{onSubmit:r(I),children:(0,g.jsx)(m,{children:(0,g.jsxs)(D,{children:[(0,g.jsx)(h.Z,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phoneNumber",style:{height:30},register:e,isError:!!o.phoneNumber,validations:{required:!0}}),(0,g.jsx)(h.Z,{label:"M\u1eadt kh\u1ea9u",name:"password",type:"password",style:{height:30},register:e,isError:!!o.password,validations:{required:!0}}),(0,g.jsx)(p.Z,{label:"\u0110\u0103ng nh\u1eadp",padding:"5px 15px",onClick:r(I)})]})})})}},6947:function(n,t,e){e.d(t,{Z:function(){return p}});e(7313);var r,o,a=e(168),i=e(3115),u=i.ZP.div(r||(r=(0,a.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),c=i.ZP.p(o||(o=(0,a.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),s=e(3070),d=e(6417),l=function(n){var t=n.isError,e=n.errorMessage,r=t?"translateY(0)":"translateY(110%)";return(0,d.jsx)(u,{children:(0,d.jsx)(c,{isError:t,textTransform:r,children:e})})};l.defaultProps={isError:!1,errorMessage:s.ug.REQUIRED};var p=l},2180:function(n,t,e){e.d(t,{Z:function(){return u}});e(7313);var r,o=e(168),a=e(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),i=e(6417),u=function(n){var t=n.label;return(0,i.jsx)(a,{children:t})}},9673:function(n,t,e){e.d(t,{Z:function(){return f}});var r,o,a=e(1413),i=(e(7313),e(2180)),u=e(6947),c=e(168),s=e(3115),d=e(1237),l=s.ZP.div(r||(r=(0,c.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"5px 0 0 5px"})),p=s.ZP.input(o||(o=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  padding: 2px 5px;\n  font-weight: 300;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),d.Z.lightWhite,d.Z.secondary,(function(n){return n.textAlign?n.textAlign:"left"})),h=e(6417),P=function(n){var t=n.label,e=n.name,r=n.isError,o=n.errorMessage,c=n.register,s=n.validations,d=n.isInline,P=n.width,f=n.margin,m=d?"auto":P;return(0,h.jsxs)(l,{width:m,margin:f,children:[t&&(0,h.jsx)(i.Z,{label:t}),(0,h.jsx)(p,(0,a.Z)((0,a.Z)({},c(e,s)),n)),(0,h.jsx)(u.Z,{isError:r,errorMessage:o})]})};P.defaultProps={type:"text",validations:{},register:function(){}};var f=P},3454:function(n,t,e){e.d(t,{CK:function(){return Pn},GG:function(){return en},JS:function(){return on},Nv:function(){return V},PA:function(){return nn},WP:function(){return tn},Xu:function(){return rn},Yh:function(){return an},aF:function(){return z},cG:function(){return G},d4:function(){return H},e9:function(){return X},gF:function(){return sn},ik:function(){return cn},jT:function(){return un},jb:function(){return mn},l9:function(){return ln},mh:function(){return J},oj:function(){return Q},ou:function(){return K},qe:function(){return pn},rF:function(){return B},uh:function(){return dn},us:function(){return hn},vK:function(){return Dn},xd:function(){return fn},ym:function(){return Y}});var r,o,a,i,u,c,s,d,l,p,h,P,f,m,D,O,b,w,g,E,I,$,_,v,T,C,Z,R,A,U,x,y,N,F,k,M,S,q,W=e(168),j=e(9237),L=e(9384),G=(0,j.Ps)(r||(r=(0,W.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),L.Od),Y=(0,j.Ps)(o||(o=(0,W.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),L.Od,L.Sh),V=((0,j.Ps)(a||(a=(0,W.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),L.Sh,L.Od),(0,j.Ps)(i||(i=(0,W.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),Q=(0,j.Ps)(u||(u=(0,W.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),z=((0,j.Ps)(c||(c=(0,W.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),L.Sh),(0,j.Ps)(s||(s=(0,W.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,j.Ps)(d||(d=(0,W.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),L.Y4)),H=((0,j.Ps)(l||(l=(0,W.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),L.Y4),(0,j.Ps)(p||(p=(0,W.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),L.Y4),(0,j.Ps)(h||(h=(0,W.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL)),B=(0,j.Ps)(P||(P=(0,W.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL),K=(0,j.Ps)(f||(f=(0,W.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL),X=(0,j.Ps)(m||(m=(0,W.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL),J=(0,j.Ps)(D||(D=(0,W.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL),nn=(0,j.Ps)(O||(O=(0,W.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),L.dL),tn=(0,j.Ps)(b||(b=(0,W.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),L.MM),en=(0,j.Ps)(w||(w=(0,W.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),L.MM),rn=((0,j.Ps)(g||(g=(0,W.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),L.MM),(0,j.Ps)(E||(E=(0,W.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),L.xC)),on=(0,j.Ps)(I||(I=(0,W.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),L.xC),an=(0,j.Ps)($||($=(0,W.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),L.xC),un=(0,j.Ps)(_||(_=(0,W.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),L.xC),cn=(0,j.Ps)(v||(v=(0,W.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),L.l3),sn=((0,j.Ps)(T||(T=(0,W.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),L.l3),(0,j.Ps)(C||(C=(0,W.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),L.l3),(0,j.Ps)(Z||(Z=(0,W.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),L.l3)),dn=(0,j.Ps)(R||(R=(0,W.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),L.l3),ln=(0,j.Ps)(A||(A=(0,W.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),L.UW),pn=((0,j.Ps)(U||(U=(0,W.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),L.UW),(0,j.Ps)(x||(x=(0,W.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,j.Ps)(y||(y=(0,W.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,j.Ps)(N||(N=(0,W.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),L.mD)),hn=(0,j.Ps)(F||(F=(0,W.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),L.zY),Pn=(0,j.Ps)(k||(k=(0,W.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),L.zY),fn=(0,j.Ps)(M||(M=(0,W.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),L.zY),mn=(0,j.Ps)(S||(S=(0,W.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),L.mD),Dn=(0,j.Ps)(q||(q=(0,W.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),L.ms)},1511:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6178),o=e(7313),a=e(4883);function i(n){var t=(0,o.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return d}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),s=e(1511);function d(n,t){var e=(0,s.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:e}),l=d[0],p=d[1],h=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(h.current,{client:e,options:t,mutation:n});var P=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=h.current,e=t.client,o=t.options,u=t.mutation,s=(0,r.pi)((0,r.pi)({},o),{mutation:u});h.current.result.loading||s.ignoreResults||!h.current.isMounted||p(h.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var d=++h.current.mutationId,l=(0,a.J)(s,n);return e.mutate(l).then((function(t){var r,o,a,u=t.data,s=t.errors,P=s&&s.length>0?new c.c({graphQLErrors:s}):void 0;if(d===h.current.mutationId&&!l.ignoreResults){var f={called:!0,loading:!1,data:u,error:P,client:e};h.current.isMounted&&!(0,i.D)(h.current.result,f)&&p(h.current.result=f)}return null===(o=null===(r=h.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var r,o,a,u;if(d===h.current.mutationId&&h.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(h.current.result,c)||p(h.current.result=c)}if((null===(r=h.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(a=null===(o=h.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),f=(0,o.useCallback)((function(){h.current.isMounted&&p({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return h.current.isMounted=!0,function(){h.current.isMounted=!1}}),[]),[P,(0,r.pi)({reset:f},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function i(n){var t;switch(n){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],s=[],d=[],l=0,p=n.definitions;l<p.length;l++){var h=p[l];if("FragmentDefinition"!==h.kind){if("OperationDefinition"===h.kind)switch(h.operation){case"query":c.push(h);break;case"mutation":s.push(h);break;case"subscription":d.push(h)}}else u.push(h)}__DEV__?(0,o.kG)(!u.length||c.length||s.length||d.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||c.length||s.length||d.length,33),__DEV__?(0,o.kG)(c.length+s.length+d.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(d.length," ")+"subscriptions and ".concat(s.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(c.length+s.length+d.length<=1,34),e=c.length?r.Query:r.Mutation,c.length||s.length||(e=r.Subscription);var P=c.length?c:s.length?s:d;__DEV__?(0,o.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===P.length,35);var f=P[0];t=f.variableDefinitions||[];var m={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:e,variables:t};return a.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);