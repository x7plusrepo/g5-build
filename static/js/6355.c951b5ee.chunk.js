"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6355,2119,2049,3335,9826,2190,8047],{3454:function(n,t,e){e.d(t,{$E:function(){return en},Am:function(){return Pn},BQ:function(){return mn},CS:function(){return fn},GG:function(){return hn},Gb:function(){return Zn},JS:function(){return On},Nv:function(){return nn},PA:function(){return sn},Q7:function(){return $n},SB:function(){return vn},WP:function(){return ln},Xu:function(){return gn},Yh:function(){return bn},aD:function(){return An},aF:function(){return an},cG:function(){return J},d4:function(){return on},dF:function(){return Dn},e9:function(){return cn},eQ:function(){return K},gF:function(){return En},ik:function(){return In},jT:function(){return wn},jb:function(){return yn},l9:function(){return Tn},mh:function(){return dn},oj:function(){return tn},ou:function(){return un},qe:function(){return Cn},rF:function(){return rn},sY:function(){return pn},uh:function(){return _n},vK:function(){return Un},ym:function(){return X}});var a,o,r,i,u,c,d,s,l,h,p,P,f,m,D,g,O,b,w,I,E,_,T,$,C,v,A,y,U,Z,N,R,M,F,S,W,k,q,G,L,Y,Q,B,V,H,x=e(168),j=e(9237),z=e(9384),K=(0,j.Ps)(a||(a=(0,x.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),z.Ts),J=(0,j.Ps)(o||(o=(0,x.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),z.Od),X=(0,j.Ps)(r||(r=(0,x.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),z.Od,z.Sh),nn=((0,j.Ps)(i||(i=(0,x.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),z.Sh,z.Od),(0,j.Ps)(u||(u=(0,x.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),tn=(0,j.Ps)(c||(c=(0,x.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),en=(0,j.Ps)(d||(d=(0,x.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),z.Sh),an=((0,j.Ps)(s||(s=(0,x.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,j.Ps)(l||(l=(0,x.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4)),on=((0,j.Ps)(h||(h=(0,x.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,j.Ps)(p||(p=(0,x.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),z.Y4),(0,j.Ps)(P||(P=(0,x.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL)),rn=(0,j.Ps)(f||(f=(0,x.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),un=(0,j.Ps)(m||(m=(0,x.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),cn=(0,j.Ps)(D||(D=(0,x.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),dn=(0,j.Ps)(g||(g=(0,x.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),sn=(0,j.Ps)(O||(O=(0,x.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),z.dL),ln=(0,j.Ps)(b||(b=(0,x.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),hn=(0,j.Ps)(w||(w=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),pn=(0,j.Ps)(I||(I=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),Pn=(0,j.Ps)(E||(E=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),fn=(0,j.Ps)(_||(_=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),mn=(0,j.Ps)(T||(T=(0,x.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),Dn=(0,j.Ps)($||($=(0,x.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),z.MM),gn=(0,j.Ps)(C||(C=(0,x.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),On=(0,j.Ps)(v||(v=(0,x.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),bn=(0,j.Ps)(A||(A=(0,x.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),wn=(0,j.Ps)(y||(y=(0,x.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),z.xC),In=(0,j.Ps)(U||(U=(0,x.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),En=((0,j.Ps)(Z||(Z=(0,x.Z)(["\n  mutation UPDATE_DEBT(\n    $data: CreateDebtReceiptInput!\n    $where: DebtWhereUniqueInput!\n  ) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),(0,j.Ps)(N||(N=(0,x.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),(0,j.Ps)(R||(R=(0,x.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3)),_n=(0,j.Ps)(M||(M=(0,x.Z)(["\n  mutation IMPORT_OLD_DEBTS($data: ImportOldDebtsInput!) {\n    importOldDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),z.l3),Tn=(0,j.Ps)(F||(F=(0,x.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),$n=(0,j.Ps)(S||(S=(0,x.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),z.UW),Cn=((0,j.Ps)(W||(W=(0,x.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,j.Ps)(k||(k=(0,x.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,j.Ps)(q||(q=(0,x.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),vn=(0,j.Ps)(G||(G=(0,x.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),An=(0,j.Ps)(L||(L=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),z.N7),yn=((0,j.Ps)(Y||(Y=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,j.Ps)(Q||(Q=(0,x.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),z.zY),(0,j.Ps)(B||(B=(0,x.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),z.mD)),Un=(0,j.Ps)(V||(V=(0,x.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),z.ms),Zn=(0,j.Ps)(H||(H=(0,x.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),z.lH)},6069:function(n,t,e){e.d(t,{Bu:function(){return P},EJ:function(){return m},Ok:function(){return D},RX:function(){return d},SB:function(){return g},_O:function(){return f},dh:function(){return u},hz:function(){return c},mr:function(){return h},tO:function(){return i},xE:function(){return l},zZ:function(){return s}});var a=e(2982),o=e(1237),r=e(3070),i=function(n,t){if(t){for(var e=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,o=e.length;a<o;++a){var r=e[a];if(!(r in n))return;n=n[r]}return n}},u=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),a=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),i=e.getHours(),u=e.getMinutes();return r=r<10?"0"+r:r,o=o<10?"0"+o:o,i=i<10?"0"+i:i,u=u<10?"0"+u:u,t?"".concat(r,"/").concat(o,"/").concat(a," - ").concat(i,":").concat(u):"".concat(r,"/").concat(o,"/").concat(a)},c=function(n){var t=n.isoString,e=n.includeTime,a=new Date(t),o=a.getFullYear(),r=a.getMonth()+1,i=a.getDate(),u=a.getHours(),c=a.getMinutes();return i=i<10?"0"+i:i,r=r<10?"0"+r:r,u=u<10?"0"+u:u,c=c<10?"0"+c:c,e?"".concat(o,"-").concat(r,"-").concat(i,"T").concat(u,":").concat(c):"".concat(o,"-").concat(r,"-").concat(i)},d=function(n,t,e){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:e,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},s=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n},l=function(n){var t=(n||{}).getTimeTogether,e=new Date,a=function(){var n=e.getHours();return n>9?n:"0".concat(n)}(),o=function(){var n=e.getMinutes();return n>9?n:"0".concat(n)}(),r=function(){var n=e.getDate();return n>9?n:"0".concat(n)}(),i=function(){var n=e.getMonth()+1;return n>9?n:"0".concat(n)}(),u=e.getFullYear(),c="".concat(u,"-").concat(i,"-").concat(r),d="".concat(u,"-").concat(i,"-").concat(r,"T").concat(a,":").concat(o);return t?d:c},h=function(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},p=function(n){var t=1,e="";return n===r.mZ.G&&(t=.001,e="kg"),n===r.mZ.KG&&(t=.001,e="t\u1ea5n"),n===r.mZ.ML&&(t=.001,e="l\xedt"),n===r.mZ.MG&&(t=1e-6,e="kg"),{weightCoefficient:t,weightShowUnit:e}},P=function(n){for(var t=n.chartData,e=void 0===t?[]:t,r=n.startOfTimeRange,i=(e&&e[0]||{}).unitString,u=p(void 0===i?"":i),c=u.weightCoefficient,d=u.weightShowUnit,s=new Date(r),l=s.getFullYear(),h=s.getMonth(),P=[],f=[],m=[],D=[],g=function(n){var t=e[n],o=t._id,r=t.totalMoney,i=t.totalQuantity,u=t.totalWeight,c=o||{},d=c.orderYear,s=c.orderMonth,p=c.productCode,g=c.productCategories,O=c.customerInfo,b=c.staffInfo,w=c.managerInfo,I=(O||{}).fullName,E=(b||{}).fullName,_=(w||{}).fullName,T=p||g||I||E||_||"";-1===P.findIndex((function(n){return n===T}))&&(P=[].concat((0,a.Z)(P),[T]));var $={totalMoney:r,totalQuantity:i,totalWeight:u,label:T};d===l?s===h?f=[].concat((0,a.Z)(f),[$]):m=[].concat((0,a.Z)(m),[$]):0===h&&11===s?m=[].concat((0,a.Z)(m),[$]):D=[].concat((0,a.Z)(D),[$])},O=0;O<e.length;O++)g(O);for(var b=[],w=[],I=[],E=[],_=[],T=[],$=[],C=[],v=[],A=function(n){var t=P[n],e=f.find((function(n){return n.label===t})),o=m.find((function(n){return n.label===t})),r=D.find((function(n){return n.label===t})),i=e||{},u=i.totalMoney,d=i.totalQuantity,s=i.totalWeight,l=o||{},h=l.totalMoney,p=l.totalQuantity,g=l.totalWeight,O=r||{},A=O.totalMoney,y=O.totalQuantity,U=O.totalWeight;b=[].concat((0,a.Z)(b),[u/1e6||0]),w=[].concat((0,a.Z)(w),[d||0]),I=[].concat((0,a.Z)(I),[s*c||0]),E=[].concat((0,a.Z)(E),[h/1e6||0]),_=[].concat((0,a.Z)(_),[p/1e6||0]),T=[].concat((0,a.Z)(T),[g*c||0]),$=[].concat((0,a.Z)($),[A/1e6||0]),C=[].concat((0,a.Z)(C),[y||0]),v=[].concat((0,a.Z)(v),[U*c||0])},y=0;y<P.length;y++)A(y);var U=function(){var n=h+1;return n>9?n:"0".concat(n)}(),Z=0===h?"Th\xe1ng 12 - N\u0103m "+(l-1):"Th\xe1ng "+(h>9?h:"0".concat(h))+" - N\u0103m "+l,N=function(){var n=0;return b.forEach((function(t){return n+=t})),n.toLocaleString()}(),R=function(){var n=0;return I.forEach((function(t){return n+=t})),n.toLocaleString()}(),M=[{label:"Th\xe1ng "+U+" - N\u0103m "+l,data:b,backgroundColor:o.Z.rgbaPrimary},{label:Z,data:E,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(l-1),data:$,backgroundColor:o.Z.purple}],F=[{label:"Th\xe1ng "+U+" - N\u0103m "+l,data:w,backgroundColor:o.Z.rgbaPrimary},{label:Z,data:_,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(l-1),data:C,backgroundColor:o.Z.purple}],S=[{label:"Th\xe1ng "+U+" - N\u0103m "+l,data:I,backgroundColor:o.Z.rgbaPrimary},{label:Z,data:T,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(l-1),data:v,backgroundColor:o.Z.purple}];return{monthWeightShowUnit:d,totalMonthMoney:N,totalMonthWeight:R,chartLabels:P,moneyDatasets:M,quantityDatasets:F,weightDatasets:S}},f=function(n){for(var t=n.chartData,e=n.startOfTimeRange,r=(t&&t[0]||{}).unitString,i=p(void 0===r?"":r),u=i.weightCoefficient,c=i.weightShowUnit,d=e?new Date(e).getFullYear():(new Date).getFullYear(),s=[],l=[],h=[],P=function(n){var e=t[n],o=e._id,r=e.totalMoney,i=e.totalQuantity,u=e.totalWeight,c=o||{},p=c.orderYear,P=c.productCode,f=c.customerInfo,m=c.staffInfo,D=c.managerInfo,g=(f||{}).fullName,O=(m||{}).fullName,b=(D||{}).fullName,w=P||g||O||b||"";-1===s.findIndex((function(n){return n===w}))&&(s=[].concat((0,a.Z)(s),[w]));var I={totalMoney:r,totalQuantity:i,totalWeight:u,label:w};p===d?l=[].concat((0,a.Z)(l),[I]):h=[].concat((0,a.Z)(h),[I])},f=0;f<t.length;f++)P(f);for(var m=[],D=[],g=[],O=[],b=[],w=[],I=function(n){var t=s[n],e=l.find((function(n){return n.label===t})),o=h.find((function(n){return n.label===t})),r=e||{},i=r.totalMoney,c=r.totalQuantity,d=r.totalWeight,p=o||{},P=p.totalMoney,f=p.totalQuantity,I=p.totalWeight;m=[].concat((0,a.Z)(m),[i/1e6||0]),D=[].concat((0,a.Z)(D),[c||0]),g=[].concat((0,a.Z)(g),[d*u||0]),O=[].concat((0,a.Z)(O),[P/1e6||0]),b=[].concat((0,a.Z)(b),[f||0]),w=[].concat((0,a.Z)(w),[I*u||0])},E=0;E<s.length;E++)I(E);var _=function(){var n=0;return m.forEach((function(t){return n+=t})),n.toLocaleString()}(),T=function(){var n=0;return g.forEach((function(t){return n+=t})),n.toLocaleString()}(),$=[{label:"N\u0103m "+d,data:m,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(d-1),data:O,backgroundColor:o.Z.chartGreen}],C=[{label:"N\u0103m "+d,data:D,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(d-1),data:b,backgroundColor:o.Z.chartGreen}],v=[{label:"N\u0103m "+d,data:g,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(d-1),data:w,backgroundColor:o.Z.chartGreen}];return{yearWeightShowUnit:c,totalYearMoney:_,totalYearWeight:T,chartLabels:s,moneyDatasets:$,quantityDatasets:C,weightDatasets:v}},m=function(n){for(var t=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(t),a=new Uint8Array(e.length),o=0;o<e.length;++o)a[o]=e.charCodeAt(o);return a},D=function(n){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",a=e.length,o=0;o<n;)t+=e.charAt(Math.floor(Math.random()*a)),o+=1;return t},g=function(){var n=navigator.userAgent||window.opera;return!!/windows phone/i.test(n)||(!!/android/i.test(n)||!(!/iPad|iPhone|iPod/.test(n)||window.MSStream))}},1511:function(n,t,e){e.d(t,{x:function(){return i}});var a=e(6178),o=e(7313),r=e(4883);function i(n){var t=(0,o.useContext)((0,r.K)()),e=n||t.client;return __DEV__?(0,a.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,a.kG)(!!e,31),e}},790:function(n,t,e){e.d(t,{D:function(){return s}});var a=e(6797),o=e(7313),r=e(345),i=e(3301),u=e(8112),c=e(4624),d=e(1511);function s(n,t){var e=(0,d.x)(null===t||void 0===t?void 0:t.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:e}),l=s[0],h=s[1],p=(0,o.useRef)({result:l,mutationId:0,isMounted:!0,client:e,mutation:n,options:t});Object.assign(p.current,{client:e,options:t,mutation:n});var P=(0,o.useCallback)((function(n){void 0===n&&(n={});var t=p.current,e=t.client,o=t.options,u=t.mutation,d=(0,a.pi)((0,a.pi)({},o),{mutation:u});p.current.result.loading||d.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var s=++p.current.mutationId,l=(0,r.J)(d,n);return e.mutate(l).then((function(t){var a,o,r,u=t.data,d=t.errors,P=d&&d.length>0?new c.c({graphQLErrors:d}):void 0;if(s===p.current.mutationId&&!l.ignoreResults){var f={called:!0,loading:!1,data:u,error:P,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,f)&&h(p.current.result=f)}return null===(o=null===(a=p.current.options)||void 0===a?void 0:a.onCompleted)||void 0===o||o.call(a,t.data,l),null===(r=n.onCompleted)||void 0===r||r.call(n,t.data,l),t})).catch((function(t){var a,o,r,u;if(s===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,c)||h(p.current.result=c)}if((null===(a=p.current.options)||void 0===a?void 0:a.onError)||l.onError)return null===(r=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===r||r.call(o,t,l),null===(u=n.onError)||void 0===u||u.call(n,t,l),{data:void 0,errors:t};throw t}))}),[]),f=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[P,(0,a.pi)({reset:f},l)]}},8112:function(n,t,e){e.d(t,{Vp:function(){return u},n_:function(){return a}});var a,o=e(6178);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(a||(a={}));var r=new Map;function i(n){var t;switch(n){case a.Query:t="Query";break;case a.Mutation:t="Mutation";break;case a.Subscription:t="Subscription"}return t}function u(n,t){var e=function(n){var t,e,i=r.get(n);if(i)return i;__DEV__?(0,o.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!n&&!!n.kind,32);for(var u=[],c=[],d=[],s=[],l=0,h=n.definitions;l<h.length;l++){var p=h[l];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":c.push(p);break;case"mutation":d.push(p);break;case"subscription":s.push(p)}}else u.push(p)}__DEV__?(0,o.kG)(!u.length||c.length||d.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||c.length||d.length||s.length,33),__DEV__?(0,o.kG)(c.length+d.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(c.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(c.length+d.length+s.length<=1,34),e=c.length?a.Query:a.Mutation,c.length||d.length||(e=a.Subscription);var P=c.length?c:d.length?d:s;__DEV__?(0,o.kG)(1===P.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(P.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===P.length,35);var f=P[0];t=f.variableDefinitions||[];var m={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:e,variables:t};return r.set(n,m),m}(n),u=i(t),c=i(e.type);__DEV__?(0,o.kG)(e.type===t,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(c," was used instead.")):(0,o.kG)(e.type===t,36)}}}]);