"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[5103,6594],{3454:function(t,n,e){e.d(n,{$E:function(){return rt},Am:function(){return ft},BQ:function(){return bt},CS:function(){return Pt},GG:function(){return ht},Gb:function(){return Zt},Iv:function(){return wt},JS:function(){return Dt},Nv:function(){return nt},PA:function(){return lt},Q7:function(){return Tt},SB:function(){return $t},UM:function(){return _t},WP:function(){return dt},Xu:function(){return gt},Yh:function(){return Ot},aD:function(){return Rt},aF:function(){return ot},cG:function(){return X},d4:function(){return at},dF:function(){return mt},e9:function(){return st},eQ:function(){return K},gF:function(){return Et},ik:function(){return vt},jT:function(){return yt},jb:function(){return Ut},l9:function(){return It},mh:function(){return ct},mz:function(){return Nt},oj:function(){return et},ou:function(){return ut},qe:function(){return Ct},rF:function(){return it},sY:function(){return pt},vK:function(){return At},ym:function(){return tt}});var r,o,a,i,u,s,c,l,d,h,p,f,P,b,m,g,D,O,y,v,w,E,_,I,T,C,$,R,U,A,N,Z,S,k,M,F,W,q,Q,L,G,Y,H,B,V,j,x=e(168),z=e(9237),J=e(9384),K=(0,z.Ps)(r||(r=(0,x.Z)(["\n  mutation UPDATE_GLOBAL_DATA($data: UpdateGlobalDataInput!) {\n    updateGlobalData(data: $data) {\n      ...basicGlobalData\n    }\n  }\n  ","\n"])),J.Ts),X=(0,z.Ps)(o||(o=(0,x.Z)(["\n  mutation CREATE_ACCOUNT($data: CreateAccountInput!) {\n    createAccount(data: $data) {\n      ...basicAuthPayload\n    }\n  }\n  ","\n"])),J.Od),tt=(0,z.Ps)(a||(a=(0,x.Z)(["\n  mutation LOGIN($data: LoginInput!) {\n    login(data: $data) {\n      ...basicAuthPayload\n      account {\n        ...basicAccountFields\n      }\n    }\n  }\n  ","\n  ","\n"])),J.Od,J.Sh),nt=((0,z.Ps)(i||(i=(0,x.Z)(["\n  mutation REFRESH_TOKEN {\n    account {\n      ...basicAccountFields\n    }\n    refreshToken {\n      ...basicAuthPayload\n    }\n  }\n  ","\n  ","\n"])),J.Sh,J.Od),(0,z.Ps)(u||(u=(0,x.Z)(["\n  mutation LOGOUT {\n    logout\n  }\n"])))),et=(0,z.Ps)(s||(s=(0,x.Z)(["\n  mutation CHANGE_PASSWORD($data: ChangeAccountPasswordInput!) {\n    changePassword(data: $data)\n  }\n"]))),rt=(0,z.Ps)(c||(c=(0,x.Z)(["\n  mutation UPDATE_ACCOUNT(\n    $data: UpdateAccountInput!\n    $where: AccountWhereUniqueInput!\n  ) {\n    updateAccount(data: $data, where: $where) {\n      ...basicAccountFields\n    }\n  }\n  ","\n"])),J.Sh),ot=((0,z.Ps)(l||(l=(0,x.Z)(["\n  mutation DELETE_ACCOUNT($where: AccountWhereUniqueInput!) {\n    deleteAccount(where: $where)\n  }\n"]))),(0,z.Ps)(d||(d=(0,x.Z)(["\n  mutation CREATE_NOTIFICATION($data: CreateNotificationInput!) {\n    createNotification(data: $data) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4)),at=((0,z.Ps)(h||(h=(0,x.Z)(["\n  mutation UPDATE_NOTIFICATION(\n    $data: UpdateNotificationInput!\n    $where: NotificationWhereUniqueInput!\n  ) {\n    updateNotification(data: $data, where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4),(0,z.Ps)(p||(p=(0,x.Z)(["\n  mutation DELETE_NOTIFICATION($where: NotificationWhereUniqueInput!) {\n    deleteNotification(where: $where) {\n      ...basicNotificationFields\n    }\n  }\n  ","\n"])),J.Y4),(0,z.Ps)(f||(f=(0,x.Z)(["\n  mutation CREATE_ORDER($data: CreateOrderInput!) {\n    createOrder(data: $data) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL)),it=(0,z.Ps)(P||(P=(0,x.Z)(["\n  mutation UPDATE_ORDER(\n    $data: UpdateOrderInput!\n    $where: OrderWhereUniqueInput!\n  ) {\n    updateOrder(data: $data, where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),ut=(0,z.Ps)(b||(b=(0,x.Z)(["\n  mutation CONFIRM_HANDED_OVER_ORDER($where: OrderWhereUniqueInput!) {\n    confirmHandedOverOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),st=(0,z.Ps)(m||(m=(0,x.Z)(["\n  mutation APPROVE_SPECIAL_ORDER($where: OrderWhereUniqueInput!) {\n    approveSpecialOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),ct=(0,z.Ps)(g||(g=(0,x.Z)(["\n  mutation CANCEL_AN_ORDER($where: OrderWhereUniqueInput!) {\n    cancelAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),lt=(0,z.Ps)(D||(D=(0,x.Z)(["\n  mutation DELETE_AN_ORDER($where: OrderWhereUniqueInput!) {\n    deleteAnOrder(where: $where) {\n      ...basicOrderFields\n    }\n  }\n  ","\n"])),J.dL),dt=(0,z.Ps)(O||(O=(0,x.Z)(["\n  mutation CREATE_DISCOUNT_PROMOTION($data: CreateDiscountPromotionInput!) {\n    createDiscountPromotion(data: $data) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),ht=(0,z.Ps)(y||(y=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),pt=(0,z.Ps)(v||(v=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_START_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionStartTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),ft=(0,z.Ps)(w||(w=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_END_TIME(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionEndTime(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),Pt=(0,z.Ps)(E||(E=(0,x.Z)(["\n  mutation UPDATE_DISCOUNT_PROMOTION_BE_APPLIED_ACCOUNT_ID(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    updateDiscountPromotionBeAppliedAccountIds(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),bt=(0,z.Ps)(_||(_=(0,x.Z)(["\n  mutation RE_CALCULATE_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    reCalculateDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),mt=(0,z.Ps)(I||(I=(0,x.Z)(["\n  mutation DELETE_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    deleteDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionFields\n    }\n  }\n  ","\n"])),J.MM),gt=(0,z.Ps)(T||(T=(0,x.Z)(["\n  mutation CREATE_TAX_OFFSET($data: CreateDiscountPromotionDiaryInput!) {\n    createTaxOffset(data: $data) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),Dt=(0,z.Ps)(C||(C=(0,x.Z)(["\n  mutation CREATE_DIARY_FOR_DISCOUNT_PROMOTION_OTHER_TYPE_CONDITION(\n    $data: CreateDiscountPromotionDiaryInput!\n    $where: DiscountPromotionWhereUniqueInput!\n  ) {\n    createDiaryForDiscountPromotionOtherTypeCondition(\n      data: $data\n      where: $where\n    ) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),Ot=(0,z.Ps)($||($=(0,x.Z)(["\n  mutation CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $data: UpdateDiscountPromotionInput\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    confirmPaidDiscountPromotion(data: $data, where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),yt=(0,z.Ps)(R||(R=(0,x.Z)(["\n  mutation UNDO_CONFIRM_PAID_DISCOUNT_PROMOTION(\n    $where: DiscountPromotionDiaryWhereUniqueInput!\n  ) {\n    undoConfirmPaidDiscountPromotion(where: $where) {\n      ...basicDiscountPromotionDiaryFields\n    }\n  }\n  ","\n"])),J.xC),vt=(0,z.Ps)(U||(U=(0,x.Z)(["\n  mutation CREATE_RECEIPT($data: CreateDebtReceiptInput!) {\n    createReceipt(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),wt=(0,z.Ps)(A||(A=(0,x.Z)(["\n  mutation UPDATE_DEBT($data: UpdateDebtInput!, $where: DebtWhereUniqueInput!) {\n    updateDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),Et=((0,z.Ps)(N||(N=(0,x.Z)(["\n  mutation DELETE_DEBT($where: DebtWhereUniqueInput!) {\n    deleteDebt(data: $data, where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),(0,z.Ps)(Z||(Z=(0,x.Z)(["\n  mutation APPROVE_RECEIPT($where: DebtWhereUniqueInput!) {\n    approveReceipt(where: $where) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3)),_t=(0,z.Ps)(S||(S=(0,x.Z)(["\n  mutation IMPORT_DEBTS($data: ImportOldDebtsInput!) {\n    importDebts(data: $data) {\n      ...basicDebtFields\n    }\n  }\n  ","\n"])),J.l3),It=(0,z.Ps)(k||(k=(0,x.Z)(["\n  mutation CREATE_PRODUCT($data: CreateProductInput!) {\n    createProduct(data: $data) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),J.UW),Tt=(0,z.Ps)(M||(M=(0,x.Z)(["\n  mutation UPDATE_PRODUCT(\n    $data: UpdateProductInput!\n    $where: ProductWhereUniqueInput!\n  ) {\n    updateProduct(data: $data, where: $where) {\n      ...basicProductFields\n    }\n  }\n  ","\n"])),J.UW),Ct=((0,z.Ps)(F||(F=(0,x.Z)(["\n  mutation MOVE_PRODUCT_TO_TOP($where: ProductWhereUniqueInput!) {\n    moveProductToTop(where: $where)\n  }\n"]))),(0,z.Ps)(W||(W=(0,x.Z)(["\n  mutation DELETE_PRODUCT($where: ProductWhereUniqueInput!) {\n    deleteProduct(where: $where)\n  }\n"]))),(0,z.Ps)(q||(q=(0,x.Z)(["\n  mutation IMPORT_PRODUCTS($data: ImportProductsInput!) {\n    importProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),J.mD)),$t=(0,z.Ps)(Q||(Q=(0,x.Z)(["\n  mutation DESTROY_PRODUCTS($data: DestroyedProductsInput!) {\n    destroyProducts(data: $data) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),Rt=(0,z.Ps)(L||(L=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT_DIARY(\n    $where: DestroyProductDiaryWhereUniqueInput!\n  ) {\n    approveDestroyProductsDiary(where: $where) {\n      ...basicDestroyProductDiaryFields\n    }\n  }\n  ","\n"])),J.N7),Ut=((0,z.Ps)(G||(G=(0,x.Z)(["\n  mutation APPROVE_DESTROY_PRODUCT(\n    $data: ApproveDestroyProductInput!\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    approveDestroyProduct(data: $data, where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),(0,z.Ps)(Y||(Y=(0,x.Z)(["\n  mutation UNDO_APPROVE_DESTROY_PRODUCT(\n    $where: DestroyedProductWhereUniqueInput!\n  ) {\n    undoApproveDestroyProduct(where: $where) {\n      ...basicDestroyedProductFields\n    }\n  }\n  ","\n"])),J.zY),(0,z.Ps)(H||(H=(0,x.Z)(["\n  mutation RETURN_PRODUCTS($data: ReturnProductsInput!) {\n    returnProducts(data: $data) {\n      ...basicImportedProductFields\n    }\n  }\n  ","\n"])),J.mD)),At=(0,z.Ps)(B||(B=(0,x.Z)(["\n  mutation WAREHOUSE_BALANCE($data: WarehouseBalanceInput!) {\n    warehouseBalance(data: $data) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),J.ms),Nt=(0,z.Ps)(V||(V=(0,x.Z)(["\n  mutation UPDATE_WAREHOUSE_BALANCE_PRODUCT(\n    $data: UpdateWarehouseBalanceProductInput!\n    $where: WarehouseBalanceProductWhereUniqueInput!\n  ) {\n    updateWarehouseBalanceProduct(data: $data, where: $where) {\n      ...basicWarehouseBalanceFields\n    }\n  }\n  ","\n"])),J.ms),Zt=(0,z.Ps)(j||(j=(0,x.Z)(["\n  mutation APPROVE_WAREHOUSE_BALANCE(\n    $where: WarehouseBalanceDiaryWhereUniqueInput!\n  ) {\n    approveWarehouseBalanceDiary(where: $where) {\n      ...basicWarehouseBalanceDiaryFields\n    }\n  }\n  ","\n"])),J.lH)},6069:function(t,n,e){e.d(n,{Bu:function(){return f},EJ:function(){return b},Ok:function(){return m},RX:function(){return c},SB:function(){return g},_O:function(){return P},dh:function(){return u},hz:function(){return s},mr:function(){return h},tO:function(){return i},xE:function(){return d},zZ:function(){return l}});var r=e(2982),o=e(1237),a=e(3070),i=function(t,n){if(n){for(var e=(n=(n=n.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=e.length;r<o;++r){var a=e[r];if(!(a in t))return;t=t[a]}return"stockQtyByShippedOutOrders"===n?t&&t.toLocaleString()+"(sp)":t}},u=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(t),r=e.getFullYear(),o=e.getMonth()+1,a=e.getDate(),i=e.getHours(),u=e.getMinutes();return a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,u=u<10?"0"+u:u,n?"".concat(a,"/").concat(o,"/").concat(r," - ").concat(i,":").concat(u):"".concat(a,"/").concat(o,"/").concat(r)},s=function(t){var n=t.isoString,e=t.includeTime,r=new Date(n),o=r.getFullYear(),a=r.getMonth()+1,i=r.getDate(),u=r.getHours(),s=r.getMinutes();return i=i<10?"0"+i:i,a=a<10?"0"+a:a,u=u<10?"0"+u:u,s=s<10?"0"+s:s,e?"".concat(o,"-").concat(a,"-").concat(i,"T").concat(u,":").concat(s):"".concat(o,"-").concat(a,"-").concat(i)},c=function(t,n,e){switch(t){case a.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case a.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case a.rh.WEIGHT_ACHIEVE_TYPE:return{unit:e,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},l=function(t,n){return isNaN(n)?t:"string"===typeof t?t.split(" ").slice(0,parseInt(n,10)).join(" "):t},d=function(t){var n=(t||{}).getTimeTogether,e=new Date,r=function(){var t=e.getHours();return t>9?t:"0".concat(t)}(),o=function(){var t=e.getMinutes();return t>9?t:"0".concat(t)}(),a=function(){var t=e.getDate();return t>9?t:"0".concat(t)}(),i=function(){var t=e.getMonth()+1;return t>9?t:"0".concat(t)}(),u=e.getFullYear(),s="".concat(u,"-").concat(i,"-").concat(a),c="".concat(u,"-").concat(i,"-").concat(a,"T").concat(r,":").concat(o);return n?c:s},h=function(){for(var t="#",n=0;n<6;n++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},p=function(t){var n=1,e="";return t===a.mZ.G&&(n=.001,e="kg"),t===a.mZ.KG&&(n=.001,e="t\u1ea5n"),t===a.mZ.ML&&(n=.001,e="l\xedt"),t===a.mZ.MG&&(n=1e-6,e="kg"),{weightCoefficient:n,weightShowUnit:e}},f=function(t){for(var n=t.chartData,e=void 0===n?[]:n,a=t.startOfTimeRange,i=(e&&e[0]||{}).unitString,u=p(void 0===i?"":i),s=u.weightCoefficient,c=u.weightShowUnit,l=new Date(a),d=l.getFullYear(),h=l.getMonth(),f=[],P=[],b=[],m=[],g=function(t){var n=e[t],o=n._id,a=n.totalMoney,i=n.totalQuantity,u=n.totalWeight,s=o||{},c=s.orderYear,l=s.orderMonth,p=s.productCode,g=s.productCategories,D=s.customerInfo,O=s.staffInfo,y=s.managerInfo,v=(D||{}).fullName,w=(O||{}).fullName,E=(y||{}).fullName,_=p||g||v||w||E||"";-1===f.findIndex((function(t){return t===_}))&&(f=[].concat((0,r.Z)(f),[_]));var I={totalMoney:a,totalQuantity:i,totalWeight:u,label:_};c===d?l===h?P=[].concat((0,r.Z)(P),[I]):b=[].concat((0,r.Z)(b),[I]):0===h&&11===l?b=[].concat((0,r.Z)(b),[I]):m=[].concat((0,r.Z)(m),[I])},D=0;D<e.length;D++)g(D);for(var O=[],y=[],v=[],w=[],E=[],_=[],I=[],T=[],C=[],$=function(t){var n=f[t],e=P.find((function(t){return t.label===n})),o=b.find((function(t){return t.label===n})),a=m.find((function(t){return t.label===n})),i=e||{},u=i.totalMoney,c=i.totalQuantity,l=i.totalWeight,d=o||{},h=d.totalMoney,p=d.totalQuantity,g=d.totalWeight,D=a||{},$=D.totalMoney,R=D.totalQuantity,U=D.totalWeight;O=[].concat((0,r.Z)(O),[u/1e6||0]),y=[].concat((0,r.Z)(y),[c||0]),v=[].concat((0,r.Z)(v),[l*s||0]),w=[].concat((0,r.Z)(w),[h/1e6||0]),E=[].concat((0,r.Z)(E),[p/1e6||0]),_=[].concat((0,r.Z)(_),[g*s||0]),I=[].concat((0,r.Z)(I),[$/1e6||0]),T=[].concat((0,r.Z)(T),[R||0]),C=[].concat((0,r.Z)(C),[U*s||0])},R=0;R<f.length;R++)$(R);var U=function(){var t=h+1;return t>9?t:"0".concat(t)}(),A=0===h?"Th\xe1ng 12 - N\u0103m "+(d-1):"Th\xe1ng "+(h>9?h:"0".concat(h))+" - N\u0103m "+d,N=function(){var t=0;return O.forEach((function(n){return t+=n})),t.toLocaleString()}(),Z=function(){var t=0;return v.forEach((function(n){return t+=n})),t.toLocaleString()}(),S=[{label:"Th\xe1ng "+U+" - N\u0103m "+d,data:O,backgroundColor:o.Z.rgbaPrimary},{label:A,data:w,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(d-1),data:I,backgroundColor:o.Z.purple}],k=[{label:"Th\xe1ng "+U+" - N\u0103m "+d,data:y,backgroundColor:o.Z.rgbaPrimary},{label:A,data:E,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(d-1),data:T,backgroundColor:o.Z.purple}],M=[{label:"Th\xe1ng "+U+" - N\u0103m "+d,data:v,backgroundColor:o.Z.rgbaPrimary},{label:A,data:_,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+U+" - N\u0103m "+(d-1),data:C,backgroundColor:o.Z.purple}];return{monthWeightShowUnit:c,totalMonthMoney:N,totalMonthWeight:Z,chartLabels:f,moneyDatasets:S,quantityDatasets:k,weightDatasets:M}},P=function(t){for(var n=t.chartData,e=t.startOfTimeRange,a=(n&&n[0]||{}).unitString,i=p(void 0===a?"":a),u=i.weightCoefficient,s=i.weightShowUnit,c=e?new Date(e).getFullYear():(new Date).getFullYear(),l=[],d=[],h=[],f=function(t){var e=n[t],o=e._id,a=e.totalMoney,i=e.totalQuantity,u=e.totalWeight,s=o||{},p=s.orderYear,f=s.productCode,P=s.customerInfo,b=s.staffInfo,m=s.managerInfo,g=(P||{}).fullName,D=(b||{}).fullName,O=(m||{}).fullName,y=f||g||D||O||"";-1===l.findIndex((function(t){return t===y}))&&(l=[].concat((0,r.Z)(l),[y]));var v={totalMoney:a,totalQuantity:i,totalWeight:u,label:y};p===c?d=[].concat((0,r.Z)(d),[v]):h=[].concat((0,r.Z)(h),[v])},P=0;P<n.length;P++)f(P);for(var b=[],m=[],g=[],D=[],O=[],y=[],v=function(t){var n=l[t],e=d.find((function(t){return t.label===n})),o=h.find((function(t){return t.label===n})),a=e||{},i=a.totalMoney,s=a.totalQuantity,c=a.totalWeight,p=o||{},f=p.totalMoney,P=p.totalQuantity,v=p.totalWeight;b=[].concat((0,r.Z)(b),[i/1e6||0]),m=[].concat((0,r.Z)(m),[s||0]),g=[].concat((0,r.Z)(g),[c*u||0]),D=[].concat((0,r.Z)(D),[f/1e6||0]),O=[].concat((0,r.Z)(O),[P||0]),y=[].concat((0,r.Z)(y),[v*u||0])},w=0;w<l.length;w++)v(w);var E=function(){var t=0;return b.forEach((function(n){return t+=n})),t.toLocaleString()}(),_=function(){var t=0;return g.forEach((function(n){return t+=n})),t.toLocaleString()}(),I=[{label:"N\u0103m "+c,data:b,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(c-1),data:D,backgroundColor:o.Z.chartGreen}],T=[{label:"N\u0103m "+c,data:m,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(c-1),data:O,backgroundColor:o.Z.chartGreen}],C=[{label:"N\u0103m "+c,data:g,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(c-1),data:y,backgroundColor:o.Z.chartGreen}];return{yearWeightShowUnit:s,totalYearMoney:E,totalYearWeight:_,chartLabels:l,moneyDatasets:I,quantityDatasets:T,weightDatasets:C}},b=function(t){for(var n=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(n),r=new Uint8Array(e.length),o=0;o<e.length;++o)r[o]=e.charCodeAt(o);return r},m=function(t){for(var n="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=e.length,o=0;o<t;)n+=e.charAt(Math.floor(Math.random()*r)),o+=1;return n},g=function(){var t=navigator.userAgent||window.opera;return!!/windows phone/i.test(t)||(!!/android/i.test(t)||!(!/iPad|iPhone|iPod/.test(t)||window.MSStream))}},1511:function(t,n,e){e.d(n,{x:function(){return i}});var r=e(6178),o=e(7313),a=e(4883);function i(t){var n=(0,o.useContext)((0,a.K)()),e=t||n.client;return __DEV__?(0,r.kG)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!e,31),e}},790:function(t,n,e){e.d(n,{D:function(){return l}});var r=e(6797),o=e(7313),a=e(345),i=e(3301),u=e(8112),s=e(4624),c=e(1511);function l(t,n){var e=(0,c.x)(null===n||void 0===n?void 0:n.client);(0,u.Vp)(t,u.n_.Mutation);var l=(0,o.useState)({called:!1,loading:!1,client:e}),d=l[0],h=l[1],p=(0,o.useRef)({result:d,mutationId:0,isMounted:!0,client:e,mutation:t,options:n});Object.assign(p.current,{client:e,options:n,mutation:t});var f=(0,o.useCallback)((function(t){void 0===t&&(t={});var n=p.current,e=n.client,o=n.options,u=n.mutation,c=(0,r.pi)((0,r.pi)({},o),{mutation:u});p.current.result.loading||c.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:e});var l=++p.current.mutationId,d=(0,a.J)(c,t);return e.mutate(d).then((function(n){var r,o,a,u=n.data,c=n.errors,f=c&&c.length>0?new s.c({graphQLErrors:c}):void 0;if(l===p.current.mutationId&&!d.ignoreResults){var P={called:!0,loading:!1,data:u,error:f,client:e};p.current.isMounted&&!(0,i.D)(p.current.result,P)&&h(p.current.result=P)}return null===(o=null===(r=p.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,n.data,d),null===(a=t.onCompleted)||void 0===a||a.call(t,n.data,d),n})).catch((function(n){var r,o,a,u;if(l===p.current.mutationId&&p.current.isMounted){var s={loading:!1,error:n,data:void 0,called:!0,client:e};(0,i.D)(p.current.result,s)||h(p.current.result=s)}if((null===(r=p.current.options)||void 0===r?void 0:r.onError)||d.onError)return null===(a=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,n,d),null===(u=t.onError)||void 0===u||u.call(t,n,d),{data:void 0,errors:n};throw n}))}),[]),P=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:e})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,r.pi)({reset:P},d)]}},2668:function(t,n,e){e.d(n,{A:function(){return w},a:function(){return v}});var r=e(6797),o=e(6178),a=e(7313),i=e.t(a,2),u=e(4374),s=!1,c=i.useSyncExternalStore||function(t,n,e){var r=n();__DEV__&&!s&&r!==n()&&(s=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var i=a.useState({inst:{value:r,getSnapshot:n}}),c=i[0].inst,d=i[1];return u.JC?a.useLayoutEffect((function(){Object.assign(c,{value:r,getSnapshot:n}),l(c)&&d({inst:c})}),[t,r,n]):Object.assign(c,{value:r,getSnapshot:n}),a.useEffect((function(){return l(c)&&d({inst:c}),t((function(){l(c)&&d({inst:c})}))}),[t]),r};function l(t){var n=t.value,e=t.getSnapshot;try{return n!==e()}catch(r){return!0}}var d=e(3301),h=e(345),p=e(4883),f=e(4624),P=e(3816),b=e(8112),m=e(1511),g=e(1088),D=e(267),O=e(3790),y=Object.prototype.hasOwnProperty;function v(t,n){return void 0===n&&(n=Object.create(null)),w((0,m.x)(n.client),t).useQuery(n)}function w(t,n){var e=(0,a.useRef)();e.current&&t===e.current.client&&n===e.current.query||(e.current=new E(t,n,e.current));var r=e.current,o=(0,a.useState)(0),i=(o[0],o[1]);return r.forceUpdate=function(){i((function(t){return t+1}))},r}var E=function(){function t(t,n,e){this.client=t,this.query=n,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(u.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:P.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:P.I.ready}),this.toQueryResultCache=new(u.mr?WeakMap:Map),(0,b.Vp)(n,b.n_.Query);var r=e&&e.result,o=r&&r.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(n){t.asyncResolveFns.add(n),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var n=this;this.renderPromises=(0,a.useContext)((0,p.K)()).renderPromises,this.useOptions(t);var e=this.useObservableQuery(),r=c((0,a.useCallback)((function(){if(n.renderPromises)return function(){};var t=function(){var t=n.result,r=e.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,d.D)(t.data,r.data)||n.setResult(r)},r=e.subscribe(t,(function o(a){var i=e.last;r.unsubscribe();try{e.resetLastResults(),r=e.subscribe(t,o)}finally{e.last=i}if(!y.call(a,"graphQLErrors"))throw a;var u=n.result;(!u||u&&u.loading||!(0,d.D)(a,u.error))&&n.setResult({data:u&&u.data,error:a,loading:!1,networkStatus:P.I.error})}));return function(){return r.unsubscribe()}}),[e,this.renderPromises,this.client.disableNetworkFetches]),(function(){return n.getCurrentResult()}),(function(){return n.getCurrentResult()}));this.unsafeHandlePartialRefetch(r);var o=this.toQueryResult(r);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(n){var e,r=this.createWatchQueryOptions(this.queryHookOptions=n),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,d.D)(r,o)||(this.watchQueryOptions=r,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0)),this.onCompleted=n.onCompleted||t.prototype.onCompleted,this.onError=n.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],n=this.client.defaultOptions.watchQuery;return n&&t.push(n),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,D.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(h.J)},t.prototype.createWatchQueryOptions=function(t){var n;void 0===t&&(t={});var e=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,r._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),a=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==a.fetchPolicy&&"cache-and-network"!==a.fetchPolicy||(a.fetchPolicy="cache-first"),a.variables||(a.variables={}),e){var i=a.fetchPolicy,u=void 0===i?this.getDefaultFetchPolicy():i,s=a.initialFetchPolicy,c=void 0===s?u:s;Object.assign(a,{initialFetchPolicy:c,fetchPolicy:"standby"})}else a.fetchPolicy||(a.fetchPolicy=(null===(n=this.observable)||void 0===n?void 0:n.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return a},t.prototype.getDefaultFetchPolicy=function(){var t,n;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(n=this.client.defaultOptions.watchQuery)||void 0===n?void 0:n.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,a.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var n=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&n&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var n=this.result;n&&n.data&&(this.previousData=n.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var n=this;t.loading||Promise.resolve().then((function(){t.error?n.onError(t.error):t.data&&n.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var n=this.toQueryResultCache.get(t);if(n)return n;var e=t.data,o=(t.partial,(0,r._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,n=(0,r.pi)((0,r.pi)((0,r.pi)({data:e},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!n.error&&(0,O.O)(t.errors)&&(n.error=new f.c({graphQLErrors:t.errors})),n},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:P.I.refetch}),this.observable.refetch())},t}()},8112:function(t,n,e){e.d(n,{Vp:function(){return u},n_:function(){return r}});var r,o=e(6178);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function i(t){var n;switch(t){case r.Query:n="Query";break;case r.Mutation:n="Mutation";break;case r.Subscription:n="Subscription"}return n}function u(t,n){var e=function(t){var n,e,i=a.get(t);if(i)return i;__DEV__?(0,o.kG)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!t&&!!t.kind,32);for(var u=[],s=[],c=[],l=[],d=0,h=t.definitions;d<h.length;d++){var p=h[d];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":s.push(p);break;case"mutation":c.push(p);break;case"subscription":l.push(p)}}else u.push(p)}__DEV__?(0,o.kG)(!u.length||s.length||c.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!u.length||s.length||c.length||l.length,33),__DEV__?(0,o.kG)(s.length+c.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(s.length," queries, ").concat(l.length," ")+"subscriptions and ".concat(c.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(s.length+c.length+l.length<=1,34),e=s.length?r.Query:r.Mutation,s.length||c.length||(e=r.Subscription);var f=s.length?s:c.length?c:l;__DEV__?(0,o.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===f.length,35);var P=f[0];n=P.variableDefinitions||[];var b={name:P.name&&"Name"===P.name.kind?P.name.value:"data",type:e,variables:n};return a.set(t,b),b}(t),u=i(n),s=i(e.type);__DEV__?(0,o.kG)(e.type===n,"Running a ".concat(u," requires a graphql ")+"".concat(u,", but a ").concat(s," was used instead.")):(0,o.kG)(e.type===n,36)}}}]);