"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[570],{9829:function(n,t,e){e.d(t,{Z:function(){return A}});var r,o,i,s,a,u,c,l,d,p,h,f,b,v=e(885),g=e(7313),y=e(2668),x=e(3222),m=e(1677),k=e(6069),w=e(3354),P=e(2206),Z=e(168),O=e(3115),E=e(1237),R=(O.ZP.div(r||(r=(0,Z.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),O.ZP.div(o||(o=(0,Z.Z)(["\n  position: relative;\n  margin: 0 0 12px;\n"])))),C=(O.ZP.div(i||(i=(0,Z.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),O.ZP.div(s||(s=(0,Z.Z)(["\n  position: relative;\n  display: inline-block;\n  border-bottom: solid 1px #c4c4c4;\n"])))),j=O.ZP.input(a||(a=(0,Z.Z)(["\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  color: ",";\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),E.Z.lightBlack,(function(n){return n.searchinputpadding})),S=O.ZP.div(u||(u=(0,Z.Z)(["\n  top: 1px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),Q=O.ZP.p(c||(c=(0,Z.Z)(["\n  top: 1px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),T=(O.ZP.div(l||(l=(0,Z.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),O.ZP.div(d||(d=(0,Z.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  padding: 20px;\n  overflow-y: auto;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),_=O.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  margin: 5px 0 0 0;\n  padding: 3px 10px;\n  justify-content: space-between;\n  // border-bottom: solid 1px #c4c4c4;\n"]))),I=O.ZP.p(h||(h=(0,Z.Z)(["\n  color: #777;\n  margin: 10px;\n  font-size: 12px;\n"]))),D=O.ZP.div(f||(f=(0,Z.Z)(["\n  margin: 10px auto;\n"]))),M=O.ZP.input(b||(b=(0,Z.Z)(["\n  border: none;\n  margin: 0 12px 0 12px;\n  padding: 1px 5px;\n  font-size: 12px;\n  font-weight: 300;\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),E.Z.secondary),q=e(7123),H=e(3070),F=e(6947),N=e(6417),z=function(n){var t,e,r,o,i=n.isError,s=n.children,a=n.showDateTimeInputs,u=n.showSelectAllButton,c=n.searchPlaceholder,l=(n.searchGuide,n.onClickSelectResultItem),d=(n.emptySearchResultMessage,n.inputStartTime),p=n.setInputStartTime,h=n.inputEndTime,f=n.setInputEndTime,b=["node.fullName","node.address","node.phoneNumber"],Z=((0,x.v9)((function(n){return n.authReducer})).viewerQuery||{}).roles.includes(H.If.CUSTOMER),O=(0,g.useState)(""),E=(0,v.Z)(O,2),z=E[0],A=E[1],U=(0,y.a)(q.q6,{variables:{filter:{text:z}},skip:!z}),V=U.data,Y=U.fetchMore,G=V&&(null===(t=V.accounts)||void 0===t?void 0:t.edges)||[],L=V&&(null===(e=V.accounts)||void 0===e?void 0:e.pageInfo)||{},K=L.hasNextPage,W=(0,g.useState)({node:{fullName:""}}),B=(0,v.Z)(W,2),J=B[0],X=B[1],$=z||J&&(null===(r=J.node)||void 0===r?void 0:r.fullName)||"",nn=(0,g.useState)(!1),tn=(0,v.Z)(nn,2),en=tn[0],rn=tn[1],on=(0,g.useRef)(null),sn=(0,g.useRef)(null),an=en?1:0,un=en?"500px":"0",cn=en?"block":"none",ln=en?"0 0 0 10px":"0 0 0 24px",dn=en?"25px":"calc(100% - 18px)",pn=function(n){rn(!1),A(""),l(n),X(n)},hn=(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(R,{children:[(0,N.jsxs)("div",{children:["Kh\xe1ch h\xe0ng:"," ",(0,N.jsxs)(C,{onClick:function(){rn(!0),X({node:{}}),on.current&&on.current.focus()},children:[(0,N.jsx)(j,{ref:on,value:$,placeholder:J.node.fullName||c,searchinputpadding:ln,onChange:function(n){return A(n.target.value)}}),(0,N.jsx)(S,{searchiconright:dn,children:"\ud83d\udd0e"}),(0,N.jsx)(Q,{upiconopacity:an,onClick:function(){rn(!1),A("")},children:"\u2716"})]}),(null===(o=J.node)||void 0===o?void 0:o.fullName)&&u&&(0,N.jsx)(m.Z,{label:"T\u1ea5t c\u1ea3",onClick:function(){return pn({node:{}})}})]}),(0,N.jsx)(F.Z,{isError:i}),(0,N.jsxs)(T,{ref:sn,modalheight:un,modaldisplay:cn,children:[(0,N.jsx)(_,{children:(0,N.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"})}),function(){var n=G&&0===G.length;return n?null:G.map((function(n,t){var e=b.map((function(t){return(0,k.tO)(n,t)})),r="";return e.forEach((function(n,t){r+=t>0?" - ".concat(n):n})),(0,N.jsxs)(_,{children:[(0,N.jsx)(I,{children:r}),(0,N.jsx)(m.Z,{label:"Ch\u1ecdn",onClick:function(){return pn(n)}})]},t)}))}(),!!K&&(0,N.jsx)(D,{children:(0,N.jsx)(m.Z,{label:"T\u1ea3i th\xeam",onClick:function(){Y({variables:{cursor:L.endCursor},updateQuery:function(n,t){var e=t.fetchMoreResult;return(0,P.d0)("searchNormalProducts",e,n)}})}})})]})]})});return(0,g.useEffect)((function(){var n=function(n){sn.current&&!sn.current.contains(n.target)&&(rn(!1),A(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[sn]),(0,N.jsxs)(w.Z,{style:{marginBottom:20},children:[!Z&&hn,a&&(0,N.jsxs)("div",{children:["Th\u1eddi gian:"," ",(0,N.jsx)(M,{type:"date",value:d,onChange:function(n){return p(n.target.value)}})," ","-"," ",(0,N.jsx)(M,{type:"date",value:h,onChange:function(n){return f(n.target.value)}})]}),s&&s]})};z.defaultProps={inputStartTime:"",inputEndTime:"",setInputEndTime:function(){},setInputStartTime:function(){},onClickSelectResultItem:function(){},isError:!1,showDateTimeInputs:!0,showSelectAllButton:!0,searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u v\xe0o \xf4 tr\xean \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var A=z},3354:function(n,t,e){e.d(t,{Z:function(){return u}});var r,o=e(1413),i=(e(7313),e(168)),s=e(3115).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  margin: 10px 0;\n  background-color: #fff;\n  padding: 25px 10px 25px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),a=e(6417),u=function(n){var t=n.children;return(0,a.jsx)(s,(0,o.Z)((0,o.Z)({},n),{},{children:t}))}},6947:function(n,t,e){e.d(t,{Z:function(){return p}});e(7313);var r,o,i=e(168),s=e(3115),a=s.ZP.div(r||(r=(0,i.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),u=s.ZP.p(o||(o=(0,i.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),c=e(3070),l=e(6417),d=function(n){var t=n.isError,e=n.errorMessage,r=t?"translateY(0)":"translateY(110%)";return(0,l.jsx)(a,{children:(0,l.jsx)(u,{isError:t,textTransform:r,children:e})})};d.defaultProps={isError:!1,errorMessage:c.ug.REQUIRED};var p=d},2180:function(n,t,e){e.d(t,{Z:function(){return a}});e(7313);var r,o=e(168),i=e(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),s=e(6417),a=function(n){var t=n.label;return(0,s.jsx)(i,{children:t})}},9673:function(n,t,e){e.d(t,{Z:function(){return b}});var r,o,i=e(1413),s=(e(7313),e(2180)),a=e(6947),u=e(168),c=e(3115),l=e(1237),d=c.ZP.div(r||(r=(0,u.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"5px 0 0 5px"})),p=c.ZP.input(o||(o=(0,u.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  padding: 2px 5px;\n  font-weight: 300;\n  text-align: ",";\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.textAlign?n.textAlign:"left"}),l.Z.secondary),h=e(6417),f=function(n){var t=n.label,e=n.name,r=n.isError,o=n.errorMessage,u=n.register,c=n.validations,l=n.isInline,f=n.width,b=n.margin,v=l?"auto":f;return(0,h.jsxs)(d,{width:v,margin:b,children:[t&&(0,h.jsx)(s.Z,{label:t}),(0,h.jsx)(p,(0,i.Z)((0,i.Z)({},u(e,c)),n)),(0,h.jsx)(a.Z,{isError:r,errorMessage:o})]})};f.defaultProps={type:"text",validations:{},register:function(){}};var b=f},6069:function(n,t,e){e.d(t,{RX:function(){return s},dh:function(){return i},tO:function(){return o},zZ:function(){return a}});var r=e(3070),o=function(n,t){if(t){for(var e=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=e.length;r<o;++r){var i=e[r];if(!(i in n))return;n=n[i]}return n}},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),r=e.getFullYear(),o=e.getMonth()+1,i=e.getDate(),s=e.getHours(),a=e.getMinutes();return i=i<10?"0"+i:i,o=o<10?"0"+o:o,s=s<10?"0"+s:s,a=a<10?"0"+a:a,t?"".concat(i,"/").concat(o,"/").concat(r," - ").concat(s,":").concat(a):"".concat(i,"/").concat(o,"/").concat(r)},s=function(n,t,e){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"T\u1ed5ng ti\u1ec1n"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"sp",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:"".concat(t).concat(e),type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},a=function(n,t){return isNaN(t)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(t,10)).join(" "):n}},2206:function(n,t,e){e.d(t,{d0:function(){return i}});var r=e(4942),o=e(2982);function i(n,t,e){var i=t[n],s=i.edges,a=i.pageInfo;return s.length?(0,r.Z)({},n,{__typename:e[n].__typename,edges:[].concat((0,o.Z)(e[n].edges),(0,o.Z)(s)),pageInfo:a}):e}},2668:function(n,t,e){e.d(t,{A:function(){return P},a:function(){return w}});var r=e(6797),o=e(6178),i=e(7313),s=e.t(i,2),a=e(4374),u=!1,c=s.useSyncExternalStore||function(n,t,e){var r=t();__DEV__&&!u&&r!==t()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=i.useState({inst:{value:r,getSnapshot:t}}),c=s[0].inst,d=s[1];return a.JC?i.useLayoutEffect((function(){Object.assign(c,{value:r,getSnapshot:t}),l(c)&&d({inst:c})}),[n,r,t]):Object.assign(c,{value:r,getSnapshot:t}),i.useEffect((function(){return l(c)&&d({inst:c}),n((function(){l(c)&&d({inst:c})}))}),[n]),r};function l(n){var t=n.value,e=n.getSnapshot;try{return t!==e()}catch(r){return!0}}var d=e(3301),p=e(345),h=e(4883),f=e(4624),b=e(3816),v=e(8112),g=e(1511),y=e(1088),x=e(267),m=e(3790),k=Object.prototype.hasOwnProperty;function w(n,t){return void 0===t&&(t=Object.create(null)),P((0,g.x)(t.client),n).useQuery(t)}function P(n,t){var e=(0,i.useRef)();e.current&&n===e.current.client&&t===e.current.query||(e.current=new Z(n,t,e.current));var r=e.current,o=(0,i.useState)(0),s=(o[0],o[1]);return r.forceUpdate=function(){s((function(n){return n+1}))},r}var Z=function(){function n(n,t,e){this.client=n,this.query=t,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,y.J)({loading:!0,data:void 0,error:void 0,networkStatus:b.I.loading}),this.skipStandbyResult=(0,y.J)({loading:!1,data:void 0,error:void 0,networkStatus:b.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,v.Vp)(t,v.n_.Query);var r=e&&e.result,o=r&&r.data;o&&(this.previousData=o)}return n.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},n.prototype.asyncUpdate=function(){var n=this;return new Promise((function(t){n.asyncResolveFns.add(t),n.optionsToIgnoreOnce.add(n.watchQueryOptions),n.forceUpdate()}))},n.prototype.useQuery=function(n){var t=this;this.renderPromises=(0,i.useContext)((0,h.K)()).renderPromises,this.useOptions(n);var e=this.useObservableQuery(),r=c((0,i.useCallback)((function(){if(t.renderPromises)return function(){};var n=function(){var n=t.result,r=e.getCurrentResult();n&&n.loading===r.loading&&n.networkStatus===r.networkStatus&&(0,d.D)(n.data,r.data)||t.setResult(r)},r=e.subscribe(n,(function o(i){var s=e.last;r.unsubscribe();try{e.resetLastResults(),r=e.subscribe(n,o)}finally{e.last=s}if(!k.call(i,"graphQLErrors"))throw i;var a=t.result;(!a||a&&a.loading||!(0,d.D)(i,a.error))&&t.setResult({data:a&&a.data,error:i,loading:!1,networkStatus:b.I.error})}));return function(){return r.unsubscribe()}}),[e,this.renderPromises,this.client.disableNetworkFetches]),(function(){return t.getCurrentResult()}),(function(){return t.getCurrentResult()}));this.unsafeHandlePartialRefetch(r);var o=this.toQueryResult(r);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(n){return n(o)})),this.asyncResolveFns.clear()),o},n.prototype.useOptions=function(t){var e,r=this.createWatchQueryOptions(this.queryHookOptions=t),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,d.D)(r,o)||(this.watchQueryOptions=r,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||n.prototype.onCompleted,this.onError=t.onError||n.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},n.prototype.getObsQueryOptions=function(){var n=[],t=this.client.defaultOptions.watchQuery;return t&&n.push(t),this.queryHookOptions.defaultOptions&&n.push(this.queryHookOptions.defaultOptions),n.push((0,x.o)(this.observable&&this.observable.options,this.watchQueryOptions)),n.reduce(p.J)},n.prototype.createWatchQueryOptions=function(n){var t;void 0===n&&(n={});var e=n.skip,o=(n.ssr,n.onCompleted,n.onError,n.defaultOptions,(0,r._T)(n,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),e){var s=i.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=i.initialFetchPolicy,c=void 0===u?a:u;Object.assign(i,{initialFetchPolicy:c,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},n.prototype.getDefaultFetchPolicy=function(){var n,t;return(null===(n=this.queryHookOptions.defaultOptions)||void 0===n?void 0:n.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},n.prototype.onCompleted=function(n){},n.prototype.onError=function(n){},n.prototype.useObservableQuery=function(){var n=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:n.refetch.bind(n),reobserve:n.reobserve.bind(n),fetchMore:n.fetchMore.bind(n),updateQuery:n.updateQuery.bind(n),startPolling:n.startPolling.bind(n),stopPolling:n.stopPolling.bind(n),subscribeToMore:n.subscribeToMore.bind(n)}}),[n]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(n),n.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(n)),n},n.prototype.setResult=function(n){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=n,this.forceUpdate(),this.handleErrorOrCompleted(n)},n.prototype.handleErrorOrCompleted=function(n){var t=this;n.loading||Promise.resolve().then((function(){n.error?t.onError(n.error):n.data&&t.onCompleted(n.data)})).catch((function(n){__DEV__&&o.kG.warn(n)}))},n.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},n.prototype.toQueryResult=function(n){var t=this.toQueryResultCache.get(n);if(t)return t;var e=n.data,o=(n.partial,(0,r._T)(n,["data","partial"]));return this.toQueryResultCache.set(n,t=(0,r.pi)((0,r.pi)((0,r.pi)({data:e},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,m.O)(n.errors)&&(t.error=new f.c({graphQLErrors:n.errors})),t},n.prototype.unsafeHandlePartialRefetch=function(n){!n.partial||!this.queryHookOptions.partialRefetch||n.loading||n.data&&0!==Object.keys(n.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(n,{loading:!0,networkStatus:b.I.refetch}),this.observable.refetch())},n}()}}]);