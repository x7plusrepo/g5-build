"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4455,3961,5987],{6881:function(t,e,r){var s=r(2163);e.Z=function(t){if(Array.isArray(t)){var e,r=t||[],o=s.t.getState().commonReducer,n=o&&(null===(e=o.activeLanguage)||void 0===e?void 0:e.locale)||"vi";return(r.find((function(t){return t&&t.locale===n}))||{}).showText||""}return""}},2206:function(t,e,r){r.d(e,{FM:function(){return i},d0:function(){return n}});var s=r(4942),o=r(2982);function n(t,e,r){var n=e[t],i=n.edges,a=n.pageInfo;return i.length?(0,s.Z)({},t,{__typename:r[t].__typename,edges:[].concat((0,o.Z)(r[t].edges),(0,o.Z)(i)),pageInfo:a}):r}function i(t,e,r,n,i,a,u){var l=n[t],c=l.edges,h=l.pageInfo,p=[],d=!1;if(r.data){var f=r.data[e],y={node:f},v=!i||i(f);d=v,v&&(p=u?u(c,f):a?[y].concat((0,o.Z)(c)):[].concat((0,o.Z)(c),[y]))}return d?(0,s.Z)({},t,{__typename:n[t].__typename,edges:p,pageInfo:h}):n}},5987:function(t,e,r){r.d(e,{Z:function(){return o}});var s=r(3366);function o(t,e){if(null==t)return{};var r,o,n=(0,s.Z)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}},2668:function(t,e,r){r.d(e,{A:function(){return w},a:function(){return m}});var s=r(6797),o=r(6178),n=r(7313),i=r.t(n,2),a=r(4374),u=!1,l=i.useSyncExternalStore||function(t,e,r){var s=e();__DEV__&&!u&&s!==e()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var i=n.useState({inst:{value:s,getSnapshot:e}}),l=i[0].inst,h=i[1];return a.JC?n.useLayoutEffect((function(){Object.assign(l,{value:s,getSnapshot:e}),c(l)&&h({inst:l})}),[t,s,e]):Object.assign(l,{value:s,getSnapshot:e}),n.useEffect((function(){return c(l)&&h({inst:l}),t((function(){c(l)&&h({inst:l})}))}),[t]),s};function c(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(s){return!0}}var h=r(3301),p=r(345),d=r(4883),f=r(4624),y=r(3816),v=r(8112),b=r(1511),g=r(1088),O=r(267),k=r(3790),P=Object.prototype.hasOwnProperty;function m(t,e){return void 0===e&&(e=Object.create(null)),w((0,b.x)(e.client),t).useQuery(e)}function w(t,e){var r=(0,n.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new R(t,e,r.current));var s=r.current,o=(0,n.useState)(0),i=(o[0],o[1]);return s.forceUpdate=function(){i((function(t){return t+1}))},s}var R=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,v.Vp)(e,v.n_.Query);var s=r&&r.result,o=s&&s.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,n.useContext)((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),s=l((0,n.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,s=r.getCurrentResult();t&&t.loading===s.loading&&t.networkStatus===s.networkStatus&&(0,h.D)(t.data,s.data)||e.setResult(s)},s=r.subscribe(t,(function o(n){var i=r.last;s.unsubscribe();try{r.resetLastResults(),s=r.subscribe(t,o)}finally{r.last=i}if(!P.call(n,"graphQLErrors"))throw n;var a=e.result;(!a||a&&a.loading||!(0,h.D)(n,a.error))&&e.setResult({data:a&&a.data,error:n,loading:!1,networkStatus:y.I.error})}));return function(){return s.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(s);var o=this.toQueryResult(s);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,s=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,h.D)(s,o)||(this.watchQueryOptions=s,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,O.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(p.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,s._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),n=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==n.fetchPolicy&&"cache-and-network"!==n.fetchPolicy||(n.fetchPolicy="cache-first"),n.variables||(n.variables={}),r){var i=n.fetchPolicy,a=void 0===i?this.getDefaultFetchPolicy():i,u=n.initialFetchPolicy,l=void 0===u?a:u;Object.assign(n,{initialFetchPolicy:l,fetchPolicy:"standby"})}else n.fetchPolicy||(n.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return n},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,n.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,s._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,s.pi)((0,s.pi)((0,s.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,k.O)(t.errors)&&(e.error=new f.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:y.I.refetch}),this.observable.refetch())},t}()}}]);