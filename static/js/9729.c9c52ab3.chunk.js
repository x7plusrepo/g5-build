"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9729,8322,5987],{6881:function(t,e,r){var n=r(2163);e.Z=function(t){if(Array.isArray(t)){var e,r=t||[],o=n.t.getState().commonReducer,a=o&&(null===(e=o.activeLanguage)||void 0===e?void 0:e.locale)||"vi";return(r.find((function(t){return t&&t.locale===a}))||{}).showText||""}return""}},6069:function(t,e,r){r.d(e,{Bu:function(){return p},RX:function(){return u},_O:function(){return g},dh:function(){return s},hz:function(){return c},mr:function(){return f},tO:function(){return i},xE:function(){return h},zZ:function(){return l}});var n=r(2982),o=r(1237),a=r(3070),i=function(t,e){if(e){for(var r=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0,o=r.length;n<o;++n){var a=r[n];if(!(a in t))return;t=t[a]}return t}},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Date(t),n=r.getFullYear(),o=r.getMonth()+1,a=r.getDate(),i=r.getHours(),s=r.getMinutes();return a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,s=s<10?"0"+s:s,e?"".concat(a,"/").concat(o,"/").concat(n," - ").concat(i,":").concat(s):"".concat(a,"/").concat(o,"/").concat(n)},c=function(t){var e=t.isoString,r=t.includeTime,n=new Date(e),o=n.getFullYear(),a=n.getMonth()+1,i=n.getDate(),s=n.getHours(),c=n.getMinutes();return i=i<10?"0"+i:i,a=a<10?"0"+a:a,s=s<10?"0"+s:s,c=c<10?"0"+c:c,r?"".concat(o,"-").concat(a,"-").concat(i,"T").concat(s,":").concat(c):"".concat(o,"-").concat(a,"-").concat(i)},u=function(t,e,r){switch(t){case a.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case a.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case a.rh.WEIGHT_ACHIEVE_TYPE:return{unit:r,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},l=function(t,e){return isNaN(e)?t:"string"===typeof t?t.split(" ").slice(0,parseInt(e,10)).join(" "):t},h=function(t){var e=(t||{}).getTimeTogether,r=new Date,n=function(){var t=r.getHours();return t>9?t:"0".concat(t)}(),o=function(){var t=r.getMinutes();return t>9?t:"0".concat(t)}(),a=function(){var t=r.getDate();return t>9?t:"0".concat(t)}(),i=function(){var t=r.getMonth()+1;return t>9?t:"0".concat(t)}(),s=r.getFullYear(),c="".concat(s,"-").concat(i,"-").concat(a),u="".concat(s,"-").concat(i,"-").concat(a,"T").concat(n,":").concat(o);return e?u:c},f=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},d=function(t){var e=1,r="";return t===a.mZ.G&&(e=.001,r="kg"),t===a.mZ.KG&&(e=.001,r="t\u1ea5n"),t===a.mZ.ML&&(e=.001,r="l\xedt"),t===a.mZ.MG&&(e=1e-6,r="kg"),{weightCoefficient:e,weightShowUnit:r}},p=function(t){for(var e=t.chartData,r=void 0===e?[]:e,a=t.startOfTimeRange,i=(r&&r[0]||{}).unitString,s=d(void 0===i?"":i),c=s.weightCoefficient,u=s.weightShowUnit,l=new Date(a),h=l.getFullYear(),f=l.getMonth(),p=[],g=[],y=[],b=[],v=function(t){var e=r[t],o=e._id,a=e.totalMoney,i=e.totalQuantity,s=e.totalWeight,c=o||{},u=c.orderYear,l=c.orderMonth,d=c.productCode,v=c.productCategories,m=c.customerInfo,O=c.staffInfo,k=c.managerInfo,w=(m||{}).fullName,Z=(O||{}).fullName,C=(k||{}).fullName,P=d||v||w||Z||C||"";-1===p.findIndex((function(t){return t===P}))&&(p=[].concat((0,n.Z)(p),[P]));var S={totalMoney:a,totalQuantity:i,totalWeight:s,label:P};u===h?l===f?g=[].concat((0,n.Z)(g),[S]):y=[].concat((0,n.Z)(y),[S]):0===f&&11===l?y=[].concat((0,n.Z)(y),[S]):b=[].concat((0,n.Z)(b),[S])},m=0;m<r.length;m++)v(m);for(var O=[],k=[],w=[],Z=[],C=[],P=[],S=[],Q=[],E=[],_=function(t){var e=p[t],r=g.find((function(t){return t.label===e})),o=y.find((function(t){return t.label===e})),a=b.find((function(t){return t.label===e})),i=r||{},s=i.totalMoney,u=i.totalQuantity,l=i.totalWeight,h=o||{},f=h.totalMoney,d=h.totalQuantity,v=h.totalWeight,m=a||{},_=m.totalMoney,D=m.totalQuantity,R=m.totalWeight;O=[].concat((0,n.Z)(O),[s/1e6||0]),k=[].concat((0,n.Z)(k),[u||0]),w=[].concat((0,n.Z)(w),[l*c||0]),Z=[].concat((0,n.Z)(Z),[f/1e6||0]),C=[].concat((0,n.Z)(C),[d/1e6||0]),P=[].concat((0,n.Z)(P),[v*c||0]),S=[].concat((0,n.Z)(S),[_/1e6||0]),Q=[].concat((0,n.Z)(Q),[D||0]),E=[].concat((0,n.Z)(E),[R*c||0])},D=0;D<p.length;D++)_(D);var R=function(){var t=f+1;return t>9?t:"0".concat(t)}(),M=0===f?"Th\xe1ng 12 - N\u0103m "+(h-1):"Th\xe1ng "+(f>9?f:"0".concat(f))+" - N\u0103m "+h,T=function(){var t=0;return O.forEach((function(e){return t+=e})),t.toLocaleString()}(),I=function(){var t=0;return w.forEach((function(e){return t+=e})),t.toLocaleString()}(),N=[{label:"Th\xe1ng "+R+" - N\u0103m "+h,data:O,backgroundColor:o.Z.rgbaPrimary},{label:M,data:Z,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+R+" - N\u0103m "+(h-1),data:S,backgroundColor:o.Z.purple}],F=[{label:"Th\xe1ng "+R+" - N\u0103m "+h,data:k,backgroundColor:o.Z.rgbaPrimary},{label:M,data:C,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+R+" - N\u0103m "+(h-1),data:Q,backgroundColor:o.Z.purple}],H=[{label:"Th\xe1ng "+R+" - N\u0103m "+h,data:w,backgroundColor:o.Z.rgbaPrimary},{label:M,data:P,backgroundColor:o.Z.chartGreen},{label:"Th\xe1ng "+R+" - N\u0103m "+(h-1),data:E,backgroundColor:o.Z.purple}];return{monthWeightShowUnit:u,totalMonthMoney:T,totalMonthWeight:I,chartLabels:p,moneyDatasets:N,quantityDatasets:F,weightDatasets:H}},g=function(t){for(var e=t.chartData,r=t.startOfTimeRange,a=(e&&e[0]||{}).unitString,i=d(void 0===a?"":a),s=i.weightCoefficient,c=i.weightShowUnit,u=r?new Date(r).getFullYear():(new Date).getFullYear(),l=[],h=[],f=[],p=function(t){var r=e[t],o=r._id,a=r.totalMoney,i=r.totalQuantity,s=r.totalWeight,c=o||{},d=c.orderYear,p=c.productCode,g=c.customerInfo,y=c.staffInfo,b=c.managerInfo,v=(g||{}).fullName,m=(y||{}).fullName,O=(b||{}).fullName,k=p||v||m||O||"";-1===l.findIndex((function(t){return t===k}))&&(l=[].concat((0,n.Z)(l),[k]));var w={totalMoney:a,totalQuantity:i,totalWeight:s,label:k};d===u?h=[].concat((0,n.Z)(h),[w]):f=[].concat((0,n.Z)(f),[w])},g=0;g<e.length;g++)p(g);for(var y=[],b=[],v=[],m=[],O=[],k=[],w=function(t){var e=l[t],r=h.find((function(t){return t.label===e})),o=f.find((function(t){return t.label===e})),a=r||{},i=a.totalMoney,c=a.totalQuantity,u=a.totalWeight,d=o||{},p=d.totalMoney,g=d.totalQuantity,w=d.totalWeight;y=[].concat((0,n.Z)(y),[i/1e6||0]),b=[].concat((0,n.Z)(b),[c||0]),v=[].concat((0,n.Z)(v),[u*s||0]),m=[].concat((0,n.Z)(m),[p/1e6||0]),O=[].concat((0,n.Z)(O),[g||0]),k=[].concat((0,n.Z)(k),[w*s||0])},Z=0;Z<l.length;Z++)w(Z);var C=function(){var t=0;return y.forEach((function(e){return t+=e})),t.toLocaleString()}(),P=function(){var t=0;return v.forEach((function(e){return t+=e})),t.toLocaleString()}(),S=[{label:"N\u0103m "+u,data:y,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:m,backgroundColor:o.Z.chartGreen}],Q=[{label:"N\u0103m "+u,data:b,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:O,backgroundColor:o.Z.chartGreen}],E=[{label:"N\u0103m "+u,data:v,backgroundColor:o.Z.rgbaPrimary},{label:"N\u0103m "+(u-1),data:k,backgroundColor:o.Z.chartGreen}];return{yearWeightShowUnit:c,totalYearMoney:C,totalYearWeight:P,chartLabels:l,moneyDatasets:S,quantityDatasets:Q,weightDatasets:E}}},2206:function(t,e,r){r.d(e,{FM:function(){return i},d0:function(){return a}});var n=r(4942),o=r(2982);function a(t,e,r){var a=e[t],i=a.edges,s=a.pageInfo;return i.length?(0,n.Z)({},t,{__typename:r[t].__typename,edges:[].concat((0,o.Z)(r[t].edges),(0,o.Z)(i)),pageInfo:s}):r}function i(t,e,r,a,i,s,c){var u=a[t],l=u.edges,h=u.pageInfo,f=[],d=!1;if(r.data){var p=r.data[e],g={node:p},y=!i||i(p);d=y,y&&(f=c?c(l,p):s?[g].concat((0,o.Z)(l)):[].concat((0,o.Z)(l),[g]))}return d?(0,n.Z)({},t,{__typename:a[t].__typename,edges:f,pageInfo:h}):a}},5987:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(3366);function o(t,e){if(null==t)return{};var r,o,a=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}},2668:function(t,e,r){r.d(e,{A:function(){return Z},a:function(){return w}});var n=r(6797),o=r(6178),a=r(7313),i=r.t(a,2),s=r(4374),c=!1,u=i.useSyncExternalStore||function(t,e,r){var n=e();__DEV__&&!c&&n!==e()&&(c=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var i=a.useState({inst:{value:n,getSnapshot:e}}),u=i[0].inst,h=i[1];return s.JC?a.useLayoutEffect((function(){Object.assign(u,{value:n,getSnapshot:e}),l(u)&&h({inst:u})}),[t,n,e]):Object.assign(u,{value:n,getSnapshot:e}),a.useEffect((function(){return l(u)&&h({inst:u}),t((function(){l(u)&&h({inst:u})}))}),[t]),n};function l(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(n){return!0}}var h=r(3301),f=r(345),d=r(4883),p=r(4624),g=r(3816),y=r(8112),b=r(1511),v=r(1088),m=r(267),O=r(3790),k=Object.prototype.hasOwnProperty;function w(t,e){return void 0===e&&(e=Object.create(null)),Z((0,b.x)(e.client),t).useQuery(e)}function Z(t,e){var r=(0,a.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new C(t,e,r.current));var n=r.current,o=(0,a.useState)(0),i=(o[0],o[1]);return n.forceUpdate=function(){i((function(t){return t+1}))},n}var C=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(s.sy?WeakSet:Set),this.ssrDisabledResult=(0,v.J)({loading:!0,data:void 0,error:void 0,networkStatus:g.I.loading}),this.skipStandbyResult=(0,v.J)({loading:!1,data:void 0,error:void 0,networkStatus:g.I.ready}),this.toQueryResultCache=new(s.mr?WeakMap:Map),(0,y.Vp)(e,y.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,a.useContext)((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=u((0,a.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,h.D)(t.data,n.data)||e.setResult(n)},n=r.subscribe(t,(function o(a){var i=r.last;n.unsubscribe();try{r.resetLastResults(),n=r.subscribe(t,o)}finally{r.last=i}if(!k.call(a,"graphQLErrors"))throw a;var s=e.result;(!s||s&&s.loading||!(0,h.D)(a,s.error))&&e.setResult({data:s&&s.data,error:a,loading:!1,networkStatus:g.I.error})}));return function(){return n.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(n);var o=this.toQueryResult(n);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,h.D)(n,o)||(this.watchQueryOptions=n,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(f.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),a=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==a.fetchPolicy&&"cache-and-network"!==a.fetchPolicy||(a.fetchPolicy="cache-first"),a.variables||(a.variables={}),r){var i=a.fetchPolicy,s=void 0===i?this.getDefaultFetchPolicy():i,c=a.initialFetchPolicy,u=void 0===c?s:c;Object.assign(a,{initialFetchPolicy:u,fetchPolicy:"standby"})}else a.fetchPolicy||(a.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return a},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,a.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,O.O)(t.errors)&&(e.error=new p.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:g.I.refetch}),this.observable.refetch())},t}()}}]);