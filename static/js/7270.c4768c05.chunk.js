"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7270,9826,2190,8047,5987,8550,9590,2369],{1677:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o=e(1413),a=(e(7313),e(168)),i=e(3115),u=e(1237),c=i.ZP.button(r||(r=(0,a.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:u.Z.primary})),s=e(6417),d=function(n){var t=n.label;return(0,s.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:t}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},9485:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,o,a,i,u=e(4165),c=e(5861),s=e(885),d=e(7313),l=e(5627),h=e(3222),p=e(790),f=e(4695),P=e(1677),m=e(9673),D=e(168),O=e(3115),g=e(1237),b=O.ZP.div(r||(r=(0,D.Z)(["\n  height: 80vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),w=O.ZP.div(o||(o=(0,D.Z)(["\n  width: 70%;\n  margin: 0 auto;\n"]))),E=O.ZP.div(a||(a=(0,D.Z)(["\n  margin: 5px;\n  font-size: 12px;\n  overflow: hidden;\n"]))),$=O.ZP.p(i||(i=(0,D.Z)(["\n  color: ",";\n  transform: ",";\n"])),g.Z.lightRed,(function(n){return n.transform})),I=e(3454),v=e(8260),_=e(3070),Z=e(6417),T=function(n){var t=(0,l.cI)({defaultValues:{phoneNumber:"",password:""}}),e=t.register,r=t.setValue,o=t.setError,a=t.clearErrors,i=t.handleSubmit,D=t.formState.errors,O=(0,h.I0)(),g=(0,d.useState)(!1),T=(0,s.Z)(g,2),C=T[0],R=T[1],A=C?"translateY(0)":"translateY(100%)",y=(0,p.D)(I.ym,{onError:function(){return R(!0)}}),U=(0,s.Z)(y,1)[0],x=function(){var n=(0,c.Z)((0,u.Z)().mark((function n(t){var e,r,o,a,i,c,s,d;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.phoneNumber,r=t.password,o={phoneNumber:e,password:r},n.next=4,U({variables:{data:o}});case 4:(a=n.sent)&&a.data&&(i=a.data.login,c=i.account,s=i.accessToken,d={isAuthenticated:!0,viewerQuery:c},localStorage.setItem(_.$Q,s),(0,v.uX)(s),O((0,f.CD)(d)));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),N=function(n){var t=n.target.name,e=n.target.value;R(!1),r(t,e),e?a(t):o(t)};return(0,Z.jsx)("form",{onSubmit:i(x),children:(0,Z.jsx)(b,{children:(0,Z.jsxs)(w,{children:[(0,Z.jsx)(m.Z,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phoneNumber",style:{height:30},register:e,onChange:N,isError:!!D.phoneNumber,validations:{required:!0}}),(0,Z.jsx)(m.Z,{label:"M\u1eadt kh\u1ea9u",name:"password",type:"password",style:{height:30},register:e,isError:!!D.password,onChange:N,validations:{required:!0}}),(0,Z.jsx)(E,{children:(0,Z.jsx)($,{transform:A,children:"Sai t\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u!"})}),(0,Z.jsx)(P.Z,{fontWeight:"700",label:"\u0110\u0102NG NH\u1eacP",padding:"7px 15px",onClick:i(x)})]})})})}},6947:function(n,t,e){e.d(t,{Z:function(){return h}});e(7313);var r,o,a=e(168),i=e(3115),u=i.ZP.div(r||(r=(0,a.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),c=i.ZP.p(o||(o=(0,a.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),s=e(3070),d=e(6417),l=function(n){var t=n.isError,e=n.errorMessage,r=t?"translateY(0)":"translateY(110%)";return(0,d.jsx)(u,{children:(0,d.jsx)(c,{isError:t,textTransform:r,children:e})})};l.defaultProps={isError:!1,errorMessage:s.ug.REQUIRED};var h=l},2180:function(n,t,e){e.d(t,{Z:function(){return u}});e(7313);var r,o=e(168),a=e(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),i=e(6417),u=function(n){var t=n.label;return(0,i.jsx)(a,{children:t})}},9673:function(n,t,e){e.d(t,{Z:function(){return P}});var r,o,a=e(1413),i=(e(7313),e(2180)),u=e(6947),c=e(168),s=e(3115),d=e(1237),l=s.ZP.div(r||(r=(0,c.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),h=s.ZP.input(o||(o=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),p=e(6417),f=function(n){var t=n.label,e=n.name,r=n.isError,o=n.errorMessage,c=n.register,s=n.validations,d=n.isInline,f=n.width,P=n.margin,m=d?"auto":f;return(0,p.jsxs)(l,{width:m,margin:P,children:[t&&(0,p.jsx)(i.Z,{label:t}),(0,p.jsx)(h,(0,a.Z)((0,a.Z)({},c(e,s)),n)),(0,p.jsx)(u.Z,{isError:r,errorMessage:o})]})};f.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var P=f},3454:function(n,t,e){e.d(t,{$E:function(){return K},CK:function(){return bn},GG:function(){return un},Gb:function(){return In},JS:function(){return dn},Nv:function(){return Q},PA:function(){return on},Q7:function(){return Dn},WP:function(){return an},Xu:function(){return sn},Yh:function(){return ln},aF:function(){return X},cG:function(){return H},d4:function(){return J},dF:function(){return cn},e9:function(){return en},eQ:function(){return V},gF:function(){return fn},ik:function(){return pn},jT:function(){return hn},jb:function(){return En},l9:function(){return mn},mh:function(){return rn},oj:function(){return z},ou:function(){return tn},qe:function(){return On},rF:function(){return nn},uh:function(){return Pn},us:function(){return gn},vK:function(){return $n},xd:function(){return wn},ym:function(){return B}});var r,o,a,i,u,c,s,d,l,h,p,f,P,m,D,O,g,b,w,E,$,I,v,_,Z,T,C,R,A,y,U,x,N,F,S,k,W,M,q,j,G=e(168),L=e(9237),Y=e(9384),V=(0,L.Ps)(r||(r=(0,G.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),Y.Ts),H=(0,L.Ps)(o||(o=(0,G.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),Y.Od),B=(0,L.Ps)(a||(a=(0,G.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),Y.Od,Y.Sh),Q=((0,L.Ps)(i||(i=(0,G.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),Y.Sh,Y.Od),(0,L.Ps)(u||(u=(0,G.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),z=(0,L.Ps)(c||(c=(0,G.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),K=(0,L.Ps)(s||(s=(0,G.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),Y.Sh),X=((0,L.Ps)(d||(d=(0,G.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,L.Ps)(l||(l=(0,G.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4)),J=((0,L.Ps)(h||(h=(0,G.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,L.Ps)(p||(p=(0,G.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),Y.Y4),(0,L.Ps)(f||(f=(0,G.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL)),nn=(0,L.Ps)(P||(P=(0,G.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),tn=(0,L.Ps)(m||(m=(0,G.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),en=(0,L.Ps)(D||(D=(0,G.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),rn=(0,L.Ps)(O||(O=(0,G.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),on=(0,L.Ps)(g||(g=(0,G.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),Y.dL),an=(0,L.Ps)(b||(b=(0,G.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),un=(0,L.Ps)(w||(w=(0,G.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),cn=(0,L.Ps)(E||(E=(0,G.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),Y.MM),sn=(0,L.Ps)($||($=(0,G.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),dn=(0,L.Ps)(I||(I=(0,G.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),ln=(0,L.Ps)(v||(v=(0,G.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),hn=(0,L.Ps)(_||(_=(0,G.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),Y.xC),pn=(0,L.Ps)(Z||(Z=(0,G.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),fn=((0,L.Ps)(T||(T=(0,G.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,L.Ps)(C||(C=(0,G.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),(0,L.Ps)(R||(R=(0,G.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3)),Pn=(0,L.Ps)(A||(A=(0,G.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),Y.l3),mn=(0,L.Ps)(y||(y=(0,G.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),Dn=(0,L.Ps)(U||(U=(0,G.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),Y.UW),On=((0,L.Ps)(x||(x=(0,G.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,L.Ps)(N||(N=(0,G.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,L.Ps)(F||(F=(0,G.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD)),gn=(0,L.Ps)(S||(S=(0,G.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),bn=(0,L.Ps)(k||(k=(0,G.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),wn=(0,L.Ps)(W||(W=(0,G.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),Y.zY),En=(0,L.Ps)(M||(M=(0,G.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),Y.mD),$n=(0,L.Ps)(q||(q=(0,G.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),Y.ms),In=(0,L.Ps)(j||(j=(0,G.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),Y.lH)},5987:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(3366);function o(n,t){if(null==n)return{};var e,o,a=(0,r.Z)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}},1511:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6178),o=e(7313),a=e(4883);function i(n){var t=(0,o.useContext)((0,a.K)()),e=n||t.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return d}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),c=e(4624),s=e(1511);function d(n,t){var e=(0,s.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:e}),l=d[0],h=d[1],p=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var f=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,o=t.options,u=t.mutation,s=(0,r.pi)((0,r.pi)({},o),{mutation:u});p.current.result.loading||s.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var d=++p.current.mutationId,l=(0,a.J)(s,n);return e.mutate(l).then((function(t){var r,o,a,u=t.data,s=t.errors,f=s&&s.length>0?new c.c({graphQLErrors:s}):void 0;if(d===p.current.mutationId&&!l.ignoreResults){var P={called:!0,loading:!1,data:u,error:f,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,P)&&h(p.current.result=P)}return null===(o=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,l),null===(a=n.onCompleted)||void 0===a||a.call(n,t.data,l),t})).catch((function(t){var r,o,a,u;if(d===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(a=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),P=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,r.pi)({reset:P},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function i(n){var t;switch(n){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=a.get(n);if(i)return i;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],s=[],d=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":s.push(p);break;case"subscription":d.push(p)}}else u.push(p)}__DEV__?(0,o.kG)(!u.length||c.length||s.length||d.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||c.length||s.length||d.length,33),__DEV__?(0,o.kG)(c.length+s.length+d.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(d.length," ")+"subscriptions and ".concat(s.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(c.length+s.length+d.length<=1,34),e=c.length?r.Query:r.Mutation,c.length||s.length||(e=r.Subscription);var f=c.length?c:s.length?s:d;__DEV__?(0,o.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===f.length,35);var P=f[0];t=P.variableDefinitions||[];var m={name:P.name&&"Name"===P.name.kind?P.name.value:"data",type:e,variables:t};return a.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);