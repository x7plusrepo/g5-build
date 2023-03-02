"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7110,9826,2190,8047,8912,8026,7484,1450,8550,6256,9590,2369],{1677:function(t,n,e){e.d(n,{Z:function(){return l}});var r,o=e(1413),i=(e(7313),e(168)),a=e(3115),u=e(1237),s=a.ZP.button(r||(r=(0,i.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(t){return t.margin?t.margin:"5px"}),(function(t){return t.padding?t.padding:"3px 7px"}),(function(t){return t.fontSize?"".concat(t.fontSize,"px"):"12px"}),(function(t){return t.fontWeight}),(function(t){return t.bgColor?t.bgColor:u.Z.primary})),c=e(6417),d=function(t){var n=t.label;return(0,c.jsx)(s,(0,o.Z)((0,o.Z)({},t),{},{children:n}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},3454:function(t,n,e){e.d(n,{CK:function(){return Pt},GG:function(){return rt},Gb:function(){return yt},JS:function(){return at},Nv:function(){return Y},PA:function(){return nt},WP:function(){return et},Xu:function(){return it},Yh:function(){return ut},aF:function(){return B},cG:function(){return x},d4:function(){return z},dF:function(){return ot},e9:function(){return X},gF:function(){return dt},ik:function(){return ct},jT:function(){return st},jb:function(){return Ot},l9:function(){return ht},mh:function(){return tt},oj:function(){return j},ou:function(){return K},qe:function(){return pt},rF:function(){return J},uh:function(){return lt},us:function(){return ft},vK:function(){return vt},xd:function(){return bt},ym:function(){return V}});var r,o,i,a,u,s,c,d,l,h,p,f,P,b,O,v,y,m,g,D,E,_,w,I,R,C,T,$,A,k,U,F,S,N,Z,q,M,W,Q,H=e(168),L=e(9237),G=e(9384),x=(0,L.Ps)(r||(r=(0,H.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),G.Od),V=(0,L.Ps)(o||(o=(0,H.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),G.Od,G.Sh),Y=((0,L.Ps)(i||(i=(0,H.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),G.Sh,G.Od),(0,L.Ps)(a||(a=(0,H.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),j=(0,L.Ps)(u||(u=(0,H.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),B=((0,L.Ps)(s||(s=(0,H.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),G.Sh),(0,L.Ps)(c||(c=(0,H.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,L.Ps)(d||(d=(0,H.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),G.Y4)),z=((0,L.Ps)(l||(l=(0,H.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),G.Y4),(0,L.Ps)(h||(h=(0,H.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),G.Y4),(0,L.Ps)(p||(p=(0,H.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL)),J=(0,L.Ps)(f||(f=(0,H.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL),K=(0,L.Ps)(P||(P=(0,H.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL),X=(0,L.Ps)(b||(b=(0,H.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL),tt=(0,L.Ps)(O||(O=(0,H.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL),nt=(0,L.Ps)(v||(v=(0,H.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),G.dL),et=(0,L.Ps)(y||(y=(0,H.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),G.MM),rt=(0,L.Ps)(m||(m=(0,H.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),G.MM),ot=(0,L.Ps)(g||(g=(0,H.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),G.MM),it=(0,L.Ps)(D||(D=(0,H.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),G.xC),at=(0,L.Ps)(E||(E=(0,H.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),G.xC),ut=(0,L.Ps)(_||(_=(0,H.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),G.xC),st=(0,L.Ps)(w||(w=(0,H.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),G.xC),ct=(0,L.Ps)(I||(I=(0,H.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),G.l3),dt=((0,L.Ps)(R||(R=(0,H.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),G.l3),(0,L.Ps)(C||(C=(0,H.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),G.l3),(0,L.Ps)(T||(T=(0,H.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),G.l3)),lt=(0,L.Ps)($||($=(0,H.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),G.l3),ht=(0,L.Ps)(A||(A=(0,H.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),G.UW),pt=((0,L.Ps)(k||(k=(0,H.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),G.UW),(0,L.Ps)(U||(U=(0,H.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,L.Ps)(F||(F=(0,H.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,L.Ps)(S||(S=(0,H.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),G.mD)),ft=(0,L.Ps)(N||(N=(0,H.Z)(["\n  mutation DESTROY_PRODUCT($data: DestroyedProductInput!) {\n    destroyProduct(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),G.zY),Pt=(0,L.Ps)(Z||(Z=(0,H.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),G.zY),bt=(0,L.Ps)(q||(q=(0,H.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),G.zY),Ot=(0,L.Ps)(M||(M=(0,H.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),G.mD),vt=(0,L.Ps)(W||(W=(0,H.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),G.ms),yt=(0,L.Ps)(Q||(Q=(0,H.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),G.lH)},6881:function(t,n,e){var r=e(2163);n.Z=function(t){if(Array.isArray(t)){var n,e=t||[],o=r.t.getState().commonReducer,i=o&&(null===(n=o.activeLanguage)||void 0===n?void 0:n.locale)||"vi";return(e.find((function(t){return t&&t.locale===i}))||{}).showText||""}return""}},6069:function(t,n,e){e.d(n,{RX:function(){return a},dh:function(){return i},tO:function(){return o},xE:function(){return s},zZ:function(){return u}});var r=e(3070),o=function(t,n){if(n){for(var e=(n=(n=n.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=e.length;r<o;++r){var i=e[r];if(!(i in t))return;t=t[i]}return t}},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(t),r=e.getFullYear(),o=e.getMonth()+1,i=e.getDate(),a=e.getHours(),u=e.getMinutes();return i=i<10?"0"+i:i,o=o<10?"0"+o:o,a=a<10?"0"+a:a,u=u<10?"0"+u:u,n?"".concat(i,"/").concat(o,"/").concat(r," - ").concat(a,":").concat(u):"".concat(i,"/").concat(o,"/").concat(r)},a=function(t,n,e){switch(t){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:e,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},u=function(t,n){return isNaN(n)?t:"string"===typeof t?t.split(" ").slice(0,parseInt(n,10)).join(" "):t},s=function(t){var n=(t||{}).getTimeTogether,e=new Date,r=function(){var t=e.getHours();return t>9?t:"0".concat(t)}(),o=function(){var t=e.getMinutes();return t>9?t:"0".concat(t)}(),i=function(){var t=e.getDate();return t>9?t:"0".concat(t)}(),a=function(){var t=e.getMonth()+1;return t>9?t:"0".concat(t)}(),u=e.getFullYear(),s="".concat(u,"-").concat(a,"-").concat(i),c="".concat(u,"-").concat(a,"-").concat(i,"T").concat(r,":").concat(o);return n?c:s}},2206:function(t,n,e){e.d(n,{FM:function(){return a},d0:function(){return i}});var r=e(4942),o=e(2982);function i(t,n,e){var i=n[t],a=i.edges,u=i.pageInfo;return a.length?(0,r.Z)({},t,{__typename:e[t].__typename,edges:[].concat((0,o.Z)(e[t].edges),(0,o.Z)(a)),pageInfo:u}):e}function a(t,n,e,i,a,u,s){var c=i[t],d=c.edges,l=c.pageInfo,h=[],p=!1;if(e.data){var f=e.data[n],P={node:f},b=!a||a(f);p=b,b&&(h=s?s(d,f):u?[P].concat((0,o.Z)(d)):[].concat((0,o.Z)(d),[P]))}return p?(0,r.Z)({},t,{__typename:i[t].__typename,edges:h,pageInfo:l}):i}},5987:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(3366);function o(t,n){if(null==t)return{};var e,o,i=(0,r.Z)(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},1511:function(t,n,e){e.d(n,{x:function(){return a}});var r=e(6178),o=e(7313),i=e(4883);function a(t){var n=(0,o.useContext)((0,i.K)()),e=t||n.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(t,n,e){e.d(n,{D:function(){return d}});var r=e(6797),o=e(7313),i=e(345),a=e(3301),u=e(8112),s=e(4624),c=e(1511);function d(t,n){var e=(0,c.x)(null===n||void 0===n?void 0:n.client);(0,u.Vp)(t,u.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:e}),l=d[0],h=d[1],p=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:t,options:n});Object.assign(p.current,{client:e,options:n,mutation:t});var f=(0,o.useCallback)((function(t){void 0===t&&(t={});var n=p.current,e=n.client,o=n.options,u=n.mutation,c=(0,r.pi)((0,r.pi)({},o),{mutation:u});p.current.result.loading||c.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var d=++p.current.mutationId,l=(0,i.J)(c,t);return e.mutate(l).then((function(n){var r,o,i,u=n.data,c=n.errors,f=c&&c.length>0?new s.c({graphQLErrors:c}):void 0;if(d===p.current.mutationId&&!l.ignoreResults){var P={called:!0,loading:!1,data:u,error:f,client:e};p.current.isMounted&&!(0,a.D)(p.current.result,P)&&h(p.current.result=P)}return null===(o=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,n.data,l),null===(i=t.onCompleted)||void 0===i||i.call(t,n.data,l),n})).catch((function(n){var r,o,i,u;if(d===p.current.mutationId&&p.current.isMounted){var s={loading:!1,error:n,data:void 0,called:!0,client:e};(0,a.D)(p.current.result,s)||h(p.current.result=s)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||l.onError)return null===(i=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,n,l),null===(u=t.onError)||void 0===u||u.call(t,n,l),{data:void 0,errors:n};throw n}))}),[]),P=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,r.pi)({reset:P},l)]}},2668:function(t,n,e){e.d(n,{A:function(){return E},a:function(){return D}});var r=e(6797),o=e(6178),i=e(7313),a=e.t(i,2),u=e(4374),s=!1,c=a.useSyncExternalStore||function(t,n,e){var r=n();__DEV__&&!s&&r!==n()&&(s=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var a=i.useState({inst:{value:r,getSnapshot:n}}),c=a[0].inst,l=a[1];return u.JC?i.useLayoutEffect((function(){Object.assign(c,{value:r,getSnapshot:n}),d(c)&&l({inst:c})}),[t,r,n]):Object.assign(c,{value:r,getSnapshot:n}),i.useEffect((function(){return d(c)&&l({inst:c}),t((function(){d(c)&&l({inst:c})}))}),[t]),r};function d(t){var n=t.value,e=t.getSnapshot;try{return n!==e()}catch(r){return!0}}var l=e(3301),h=e(345),p=e(4883),f=e(4624),P=e(3816),b=e(8112),O=e(1511),v=e(1088),y=e(267),m=e(3790),g=Object.prototype.hasOwnProperty;function D(t,n){return void 0===n&&(n=Object.create(null)),E((0,O.x)(n.client),t).useQuery(n)}function E(t,n){var e=(0,i.useRef)();e.current&&t===e.current.client&&n===e.current.query||(e.current=new _(t,n,e.current));var r=e.current,o=(0,i.useState)(0),a=(o[0],o[1]);return r.forceUpdate=function(){a((function(t){return t+1}))},r}var _=function(){function t(t,n,e){this.client=t,this.query=n,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(u.sy?WeakSet:Set),this.ssrDisabledResult=(0,v.J)({loading:!0,data:void 0,error:void 0,networkStatus:P.I.loading}),this.skipStandbyResult=(0,v.J)({loading:!1,data:void 0,error:void 0,networkStatus:P.I.ready}),this.toQueryResultCache=new(u.mr?WeakMap:Map),(0,b.Vp)(n,b.n_.Query);var r=e&&e.result,o=r&&r.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(n){t.asyncResolveFns.add(n),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var n=this;this.renderPromises=(0,i.useContext)((0,p.K)()).renderPromises,this.useOptions(t);var e=this.useObservableQuery(),r=c((0,i.useCallback)((function(){if(n.renderPromises)return function(){};var t=function(){var t=n.result,r=e.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,l.D)(t.data,r.data)||n.setResult(r)},r=e.subscribe(t,(function o(i){var a=e.last;r.unsubscribe();try{e.resetLastResults(),r=e.subscribe(t,o)}finally{e.last=a}if(!g.call(i,"graphQLErrors"))throw i;var u=n.result;(!u||u&&u.loading||!(0,l.D)(i,u.error))&&n.setResult({data:u&&u.data,error:i,loading:!1,networkStatus:P.I.error})}));return function(){return r.unsubscribe()}}),[e,this.renderPromises,this.client.disableNetworkFetches]),(function(){return n.getCurrentResult()}),(function(){return n.getCurrentResult()}));this.unsafeHandlePartialRefetch(r);var o=this.toQueryResult(r);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(n){var e,r=this.createWatchQueryOptions(this.queryHookOptions=n),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,l.D)(r,o)||(this.watchQueryOptions=r,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0)),this.onCompleted=n.onCompleted||t.prototype.onCompleted,this.onError=n.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],n=this.client.defaultOptions.watchQuery;return n&&t.push(n),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,y.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(h.J)},t.prototype.createWatchQueryOptions=function(t){var n;void 0===t&&(t={});var e=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,r._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),e){var a=i.fetchPolicy,u=void 0===a?this.getDefaultFetchPolicy():a,s=i.initialFetchPolicy,c=void 0===s?u:s;Object.assign(i,{initialFetchPolicy:c,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(n=this.observable)||void 0===n?void 0:n.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var t,n;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(n=this.client.defaultOptions.watchQuery)||void 0===n?void 0:n.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var n=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&n&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var n=this.result;n&&n.data&&(this.previousData=n.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var n=this;t.loading||Promise.resolve().then((function(){t.error?n.onError(t.error):t.data&&n.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var n=this.toQueryResultCache.get(t);if(n)return n;var e=t.data,o=(t.partial,(0,r._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,n=(0,r.pi)((0,r.pi)((0,r.pi)({data:e},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!n.error&&(0,m.O)(t.errors)&&(n.error=new f.c({graphQLErrors:t.errors})),n},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:P.I.refetch}),this.observable.refetch())},t}()},8112:function(t,n,e){e.d(n,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(r||(r={}));var i=new Map;function a(t){var n;switch(t){case r.Query:n="Query";break;case r.Mutation:n="Mutation";break;case r.Subscription:n="Subscription"}return n}function u(t,n){var e=function(t){var n,e,a=i.get(t);if(a)return a;__DEV__?(0,o.kG)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!t&&!!t.kind,32);for(var u=[],s=[],c=[],d=[],l=0,h=t.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":s.push(p);break;case"mutation":c.push(p);break;case"subscription":d.push(p)}}else u.push(p)}__DEV__?(0,o.kG)(!u.length||s.length||c.length||d.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||s.length||c.length||d.length,33),__DEV__?(0,o.kG)(s.length+c.length+d.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(s.length," queries, ").concat(d.length," ")+"subscriptions and ".concat(c.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(s.length+c.length+d.length<=1,34),e=s.length?r.Query:r.Mutation,s.length||c.length||(e=r.Subscription);var f=s.length?s:c.length?c:d;__DEV__?(0,o.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===f.length,35);var P=f[0];n=P.variableDefinitions||[];var b={name:P.name&&"Name"===P.name.kind?P.name.value:"data",type:e,variables:n};return i.set(t,b),b}(t),u=a(n),s=a(e.type);__DEV__?(0,o.kG)(e.type===n,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(s," was used instead.")):(0,o.kG)(e.type===n,36)}}}]);