"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[5145,5987,2482],{1997:function(t,e,r){var n=r(4836);e.Z=void 0;var o=n(r(5045)),i=r(6417),s=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=s},4800:function(t,e,r){function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,{Z:function(){return n}})},3601:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(4800);function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){(0,n.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},5987:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(3366);function o(t,e){if(null==t)return{};var r,o,i=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},1511:function(t,e,r){r.d(e,{x:function(){return s}});var n=r(6178),o=r(7313),i=r(4883);function s(t){var e=(0,o.useContext)((0,i.K)()),r=t||e.client;return __DEV__?(0,n.kG)(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,n.kG)(!!r,31),r}},790:function(t,e,r){r.d(e,{D:function(){return c}});var n=r(6797),o=r(7313),i=r(345),s=r(3301),a=r(8112),u=r(4624),l=r(1511);function c(t,e){var r=(0,l.x)(null===e||void 0===e?void 0:e.client);(0,a.Vp)(t,a.n_.Mutation);var c=(0,o.useState)({called:!1,loading:!1,client:r}),p=c[0],h=c[1],d=(0,o.useRef)({result:p,mutationId:0,isMounted:!0,client:r,mutation:t,options:e});Object.assign(d.current,{client:r,options:e,mutation:t});var f=(0,o.useCallback)((function(t){void 0===t&&(t={});var e=d.current,r=e.client,o=e.options,a=e.mutation,l=(0,n.pi)((0,n.pi)({},o),{mutation:a});d.current.result.loading||l.ignoreResults||!d.current.isMounted||h(d.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var c=++d.current.mutationId,p=(0,i.J)(l,t);return r.mutate(p).then((function(e){var n,o,i,a=e.data,l=e.errors,f=l&&l.length>0?new u.c({graphQLErrors:l}):void 0;if(c===d.current.mutationId&&!p.ignoreResults){var v={called:!0,loading:!1,data:a,error:f,client:r};d.current.isMounted&&!(0,s.D)(d.current.result,v)&&h(d.current.result=v)}return null===(o=null===(n=d.current.options)||void 0===n?void 0:n.onCompleted)||void 0===o||o.call(n,e.data,p),null===(i=t.onCompleted)||void 0===i||i.call(t,e.data,p),e})).catch((function(e){var n,o,i,a;if(c===d.current.mutationId&&d.current.isMounted){var u={loading:!1,error:e,data:void 0,called:!0,client:r};(0,s.D)(d.current.result,u)||h(d.current.result=u)}if((null===(n=d.current.options)||void 0===n?void 0:n.onError)||p.onError)return null===(i=null===(o=d.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,e,p),null===(a=t.onError)||void 0===a||a.call(t,e,p),{data:void 0,errors:e};throw e}))}),[]),v=(0,o.useCallback)((function(){d.current.isMounted&&h({called:!1,loading:!1,client:r})}),[]);return(0,o.useEffect)((function(){return d.current.isMounted=!0,function(){d.current.isMounted=!1}}),[]),[f,(0,n.pi)({reset:v},p)]}},2668:function(t,e,r){r.d(e,{A:function(){return _},a:function(){return w}});var n=r(6797),o=r(6178),i=r(7313),s=r.t(i,2),a=r(4374),u=!1,l=s.useSyncExternalStore||function(t,e,r){var n=e();__DEV__&&!u&&n!==e()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=i.useState({inst:{value:n,getSnapshot:e}}),l=s[0].inst,p=s[1];return a.JC?i.useLayoutEffect((function(){Object.assign(l,{value:n,getSnapshot:e}),c(l)&&p({inst:l})}),[t,n,e]):Object.assign(l,{value:n,getSnapshot:e}),i.useEffect((function(){return c(l)&&p({inst:l}),t((function(){c(l)&&p({inst:l})}))}),[t]),n};function c(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(n){return!0}}var p=r(3301),h=r(345),d=r(4883),f=r(4624),v=r(3816),y=r(8112),b=r(1511),g=r(1088),m=r(267),O=r(3790),k=Object.prototype.hasOwnProperty;function w(t,e){return void 0===e&&(e=Object.create(null)),_((0,b.x)(e.client),t).useQuery(e)}function _(t,e){var r=(0,i.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new S(t,e,r.current));var n=r.current,o=(0,i.useState)(0),s=(o[0],o[1]);return n.forceUpdate=function(){s((function(t){return t+1}))},n}var S=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,y.Vp)(e,y.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,i.useContext)((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=l((0,i.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,p.D)(t.data,n.data)||e.setResult(n)},n=r.subscribe(t,(function o(i){var s=r.last;n.unsubscribe();try{r.resetLastResults(),n=r.subscribe(t,o)}finally{r.last=s}if(!k.call(i,"graphQLErrors"))throw i;var a=e.result;(!a||a&&a.loading||!(0,p.D)(i,a.error))&&e.setResult({data:a&&a.data,error:i,loading:!1,networkStatus:v.I.error})}));return function(){return n.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(n);var o=this.toQueryResult(n);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,p.D)(n,o)||(this.watchQueryOptions=n,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(h.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var s=i.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=i.initialFetchPolicy,l=void 0===u?a:u;Object.assign(i,{initialFetchPolicy:l,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,O.O)(t.errors)&&(e.error=new f.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},t}()},8112:function(t,e,r){r.d(e,{Vp:function(){return a},n_:function(){return n}});var n,o=r(6178);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(n||(n={}));var i=new Map;function s(t){var e;switch(t){case n.Query:e="Query";break;case n.Mutation:e="Mutation";break;case n.Subscription:e="Subscription"}return e}function a(t,e){var r=function(t){var e,r,s=i.get(t);if(s)return s;__DEV__?(0,o.kG)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!t&&!!t.kind,32);for(var a=[],u=[],l=[],c=[],p=0,h=t.definitions;p<h.length;p++){var d=h[p];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":u.push(d);break;case"mutation":l.push(d);break;case"subscription":c.push(d)}}else a.push(d)}__DEV__?(0,o.kG)(!a.length||u.length||l.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!a.length||u.length||l.length||c.length,33),__DEV__?(0,o.kG)(u.length+l.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(u.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(u.length+l.length+c.length<=1,34),r=u.length?n.Query:n.Mutation,u.length||l.length||(r=n.Subscription);var f=u.length?u:l.length?l:c;__DEV__?(0,o.kG)(1===f.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===f.length,35);var v=f[0];e=v.variableDefinitions||[];var y={name:v.name&&"Name"===v.name.kind?v.name.value:"data",type:r,variables:e};return i.set(t,y),y}(t),a=s(e),u=s(r.type);__DEV__?(0,o.kG)(r.type===e,"Running a ".concat(a," requires a graphql ")+"".concat(a,", but a ").concat(u," was used instead.")):(0,o.kG)(r.type===e,36)}}}]);