"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[7912],{5414:function(t,e,r){r.d(e,{Z:function(){return R}});var o=r(3366),i=r(7462),n=r(7313),s=r(3061),a=r(2982),u=r(3019),l=r(3103),h=["sx"];function c(t){var e,r=t.sx,n=function(t){var e={systemProps:{},otherProps:{}};return Object.keys(t).forEach((function(r){l.Gc[r]?e.systemProps[r]=t[r]:e.otherProps[r]=t[r]})),e}((0,o.Z)(t,h)),s=n.systemProps,c=n.otherProps;return e=Array.isArray(r)?[s].concat((0,a.Z)(r)):"function"===typeof r?function(){var t=r.apply(void 0,arguments);return(0,u.P)(t)?(0,i.Z)({},s,t):s}:(0,i.Z)({},s,r),(0,i.Z)({},c,{sx:e})}var p=r(1921),d=r(6749),y=r(3729),v=r(8170),f=r(7430),b=r(2298);function g(t){return(0,b.Z)("MuiTypography",t)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(6417),O=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],P=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e["align".concat((0,v.Z)(r.align))],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({margin:0},r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=n.forwardRef((function(t,e){var r=(0,y.Z)({props:t,name:"MuiTypography"}),n=function(t){return w[t]||t}(r.color),a=c((0,i.Z)({},r,{color:n})),u=a.align,l=void 0===u?"inherit":u,h=a.className,d=a.component,f=a.gutterBottom,b=void 0!==f&&f,R=a.noWrap,Q=void 0!==R&&R,S=a.paragraph,C=void 0!==S&&S,E=a.variant,_=void 0===E?"body1":E,D=a.variantMapping,Z=void 0===D?k:D,q=(0,o.Z)(a,O),F=(0,i.Z)({},a,{align:l,color:n,className:h,component:d,gutterBottom:b,noWrap:Q,paragraph:C,variant:_,variantMapping:Z}),M=d||(C?"p":Z[_]||k[_])||"span",x=function(t){var e=t.align,r=t.gutterBottom,o=t.noWrap,i=t.paragraph,n=t.variant,s=t.classes,a={root:["root",n,"inherit"!==t.align&&"align".concat((0,v.Z)(e)),r&&"gutterBottom",o&&"noWrap",i&&"paragraph"]};return(0,p.Z)(a,g,s)}(F);return(0,m.jsx)(P,(0,i.Z)({as:M,ref:e,ownerState:F,className:(0,s.Z)(x.root,h)},q))}))},2668:function(t,e,r){r.d(e,{A:function(){return w},a:function(){return k}});var o=r(6797),i=r(6178),n=r(7313),s=r.t(n,2),a=r(4374),u=!1,l=s.useSyncExternalStore||function(t,e,r){var o=e();__DEV__&&!u&&o!==e()&&(u=!0,__DEV__&&i.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=n.useState({inst:{value:o,getSnapshot:e}}),l=s[0].inst,c=s[1];return a.JC?n.useLayoutEffect((function(){Object.assign(l,{value:o,getSnapshot:e}),h(l)&&c({inst:l})}),[t,o,e]):Object.assign(l,{value:o,getSnapshot:e}),n.useEffect((function(){return h(l)&&c({inst:l}),t((function(){h(l)&&c({inst:l})}))}),[t]),o};function h(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(o){return!0}}var c=r(3301),p=r(345),d=r(4883),y=r(4624),v=r(3816),f=r(8112),b=r(1511),g=r(1088),m=r(267),O=r(3790),P=Object.prototype.hasOwnProperty;function k(t,e){return void 0===e&&(e=Object.create(null)),w((0,b.x)(e.client),t).useQuery(e)}function w(t,e){var r=(0,n.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new R(t,e,r.current));var o=r.current,i=(0,n.useState)(0),s=(i[0],i[1]);return o.forceUpdate=function(){s((function(t){return t+1}))},o}var R=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,f.Vp)(e,f.n_.Query);var o=r&&r.result,i=o&&o.data;i&&(this.previousData=i)}return t.prototype.forceUpdate=function(){__DEV__&&i.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,n.useContext)((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),o=l((0,n.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,o=r.getCurrentResult();t&&t.loading===o.loading&&t.networkStatus===o.networkStatus&&(0,c.D)(t.data,o.data)||e.setResult(o)},o=r.subscribe(t,(function i(n){var s=r.last;o.unsubscribe();try{r.resetLastResults(),o=r.subscribe(t,i)}finally{r.last=s}if(!P.call(n,"graphQLErrors"))throw n;var a=e.result;(!a||a&&a.loading||!(0,c.D)(n,a.error))&&e.setResult({data:a&&a.data,error:n,loading:!1,networkStatus:v.I.error})}));return function(){return o.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(o);var i=this.toQueryResult(o);return!i.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(i)})),this.asyncResolveFns.clear()),i},t.prototype.useOptions=function(e){var r,o=this.createWatchQueryOptions(this.queryHookOptions=e),i=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(i)&&(0,c.D)(o,i)||(this.watchQueryOptions=o,i&&this.observable&&(this.optionsToIgnoreOnce.delete(i),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(p.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,i=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,o._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),n=Object.assign(i,{query:this.query});if(!this.renderPromises||"network-only"!==n.fetchPolicy&&"cache-and-network"!==n.fetchPolicy||(n.fetchPolicy="cache-first"),n.variables||(n.variables={}),r){var s=n.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=n.initialFetchPolicy,l=void 0===u?a:u;Object.assign(n,{initialFetchPolicy:l,fetchPolicy:"standby"})}else n.fetchPolicy||(n.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return n},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,n.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&i.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,i=(t.partial,(0,o._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,o.pi)((0,o.pi)((0,o.pi)({data:r},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,O.O)(t.errors)&&(e.error=new y.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},t}()}}]);