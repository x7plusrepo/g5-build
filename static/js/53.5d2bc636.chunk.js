"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[53,6594],{372:function(t,e,r){var n=r(4836);e.Z=void 0;var o=n(r(5045)),i=r(6417),s=(0,o.default)((0,i.jsx)("path",{d:"M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}),"NotificationsActive");e.Z=s},4689:function(t,e,r){var n=r(4836);e.Z=void 0;var o=n(r(5045)),i=r(6417),s=(0,o.default)((0,i.jsx)("path",{d:"M20 18.69 7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"}),"NotificationsOff");e.Z=s},1511:function(t,e,r){r.d(e,{x:function(){return s}});var n=r(6178),o=r(7313),i=r(4883);function s(t){var e=(0,o.useContext)((0,i.K)()),r=t||e.client;return __DEV__?(0,n.kG)(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,n.kG)(!!r,31),r}},790:function(t,e,r){r.d(e,{D:function(){return c}});var n=r(6797),o=r(7313),i=r(345),s=r(3301),a=r(8112),u=r(4624),l=r(1511);function c(t,e){var r=(0,l.x)(null===e||void 0===e?void 0:e.client);(0,a.Vp)(t,a.n_.Mutation);var c=(0,o.useState)({called:!1,loading:!1,client:r}),h=c[0],p=c[1],d=(0,o.useRef)({result:h,mutationId:0,isMounted:!0,client:r,mutation:t,options:e});Object.assign(d.current,{client:r,options:e,mutation:t});var v=(0,o.useCallback)((function(t){void 0===t&&(t={});var e=d.current,r=e.client,o=e.options,a=e.mutation,l=(0,n.pi)((0,n.pi)({},o),{mutation:a});d.current.result.loading||l.ignoreResults||!d.current.isMounted||p(d.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var c=++d.current.mutationId,h=(0,i.J)(l,t);return r.mutate(h).then((function(e){var n,o,i,a=e.data,l=e.errors,v=l&&l.length>0?new u.c({graphQLErrors:l}):void 0;if(c===d.current.mutationId&&!h.ignoreResults){var f={called:!0,loading:!1,data:a,error:v,client:r};d.current.isMounted&&!(0,s.D)(d.current.result,f)&&p(d.current.result=f)}return null===(o=null===(n=d.current.options)||void 0===n?void 0:n.onCompleted)||void 0===o||o.call(n,e.data,h),null===(i=t.onCompleted)||void 0===i||i.call(t,e.data,h),e})).catch((function(e){var n,o,i,a;if(c===d.current.mutationId&&d.current.isMounted){var u={loading:!1,error:e,data:void 0,called:!0,client:r};(0,s.D)(d.current.result,u)||p(d.current.result=u)}if((null===(n=d.current.options)||void 0===n?void 0:n.onError)||h.onError)return null===(i=null===(o=d.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,e,h),null===(a=t.onError)||void 0===a||a.call(t,e,h),{data:void 0,errors:e};throw e}))}),[]),f=(0,o.useCallback)((function(){d.current.isMounted&&p({called:!1,loading:!1,client:r})}),[]);return(0,o.useEffect)((function(){return d.current.isMounted=!0,function(){d.current.isMounted=!1}}),[]),[v,(0,n.pi)({reset:f},h)]}},2668:function(t,e,r){r.d(e,{A:function(){return P},a:function(){return _}});var n=r(6797),o=r(6178),i=r(7313),s=r.t(i,2),a=r(4374),u=!1,l=s.useSyncExternalStore||function(t,e,r){var n=e();__DEV__&&!u&&n!==e()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=i.useState({inst:{value:n,getSnapshot:e}}),l=s[0].inst,h=s[1];return a.JC?i.useLayoutEffect((function(){Object.assign(l,{value:n,getSnapshot:e}),c(l)&&h({inst:l})}),[t,n,e]):Object.assign(l,{value:n,getSnapshot:e}),i.useEffect((function(){return c(l)&&h({inst:l}),t((function(){c(l)&&h({inst:l})}))}),[t]),n};function c(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(n){return!0}}var h=r(3301),p=r(345),d=r(4883),v=r(4624),f=r(3816),y=r(8112),b=r(1511),g=r(1088),m=r(267),k=r(3790),O=Object.prototype.hasOwnProperty;function _(t,e){return void 0===e&&(e=Object.create(null)),P((0,b.x)(e.client),t).useQuery(e)}function P(t,e){var r=(0,i.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new w(t,e,r.current));var n=r.current,o=(0,i.useState)(0),s=(o[0],o[1]);return n.forceUpdate=function(){s((function(t){return t+1}))},n}var w=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:f.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:f.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,y.Vp)(e,y.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,i.useContext)((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=l((0,i.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,h.D)(t.data,n.data)||e.setResult(n)},n=r.subscribe(t,(function o(i){var s=r.last;n.unsubscribe();try{r.resetLastResults(),n=r.subscribe(t,o)}finally{r.last=s}if(!O.call(i,"graphQLErrors"))throw i;var a=e.result;(!a||a&&a.loading||!(0,h.D)(i,a.error))&&e.setResult({data:a&&a.data,error:i,loading:!1,networkStatus:f.I.error})}));return function(){return n.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(n);var o=this.toQueryResult(n);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,h.D)(n,o)||(this.watchQueryOptions=n,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(p.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var s=i.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=i.initialFetchPolicy,l=void 0===u?a:u;Object.assign(i,{initialFetchPolicy:l,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,k.O)(t.errors)&&(e.error=new v.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:f.I.refetch}),this.observable.refetch())},t}()},8112:function(t,e,r){r.d(e,{Vp:function(){return a},n_:function(){return n}});var n,o=r(6178);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(n||(n={}));var i=new Map;function s(t){var e;switch(t){case n.Query:e="Query";break;case n.Mutation:e="Mutation";break;case n.Subscription:e="Subscription"}return e}function a(t,e){var r=function(t){var e,r,s=i.get(t);if(s)return s;__DEV__?(0,o.kG)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!t&&!!t.kind,32);for(var a=[],u=[],l=[],c=[],h=0,p=t.definitions;h<p.length;h++){var d=p[h];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":u.push(d);break;case"mutation":l.push(d);break;case"subscription":c.push(d)}}else a.push(d)}__DEV__?(0,o.kG)(!a.length||u.length||l.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!a.length||u.length||l.length||c.length,33),__DEV__?(0,o.kG)(u.length+l.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(u.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(u.length+l.length+c.length<=1,34),r=u.length?n.Query:n.Mutation,u.length||l.length||(r=n.Subscription);var v=u.length?u:l.length?l:c;__DEV__?(0,o.kG)(1===v.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(v.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===v.length,35);var f=v[0];e=f.variableDefinitions||[];var y={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:r,variables:e};return i.set(t,y),y}(t),a=s(e),u=s(r.type);__DEV__?(0,o.kG)(r.type===e,"Running a ".concat(a," requires a graphql ")+"".concat(a,", but a ").concat(u," was used instead.")):(0,o.kG)(r.type===e,36)}}}]);