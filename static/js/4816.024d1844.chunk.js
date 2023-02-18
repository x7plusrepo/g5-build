"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4816,1677],{1677:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(1413),o=(t(7313),t(168)),s=t(3115),a=t(1237),u=s.ZP.button(r||(r=(0,o.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  background-color: ",";\n"])),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.bgColor?n.bgColor:a.Z.primary})),c=t(6417),l=function(n){var e=n.label;return(0,c.jsx)(u,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};l.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var d=l},4816:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,o,s,a,u,c,l,d,p,h=t(885),f=t(7313),v=t(2668),b=t(1359),g=t(1677),x=t(5222),y=t(7851),m=t(168),Z=t(3115),P=t(1237),k=Z.ZP.div(r||(r=(0,m.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),w=Z.ZP.p(i||(i=(0,m.Z)(["\n  font-weight: 700;\n"]))),O=Z.ZP.p(o||(o=(0,m.Z)(["\n  font-weight: 700;\n  color: ",";\n"])),P.Z.primary),j=Z.ZP.p(s||(s=(0,m.Z)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  color: ",";\n"])),P.Z.secondary),C=Z.ZP.p(a||(a=(0,m.Z)(["\n  font-style: italic;\n  color: ",";\n"])),P.Z.secondary),E=Z.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n"]))),R=(Z.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Z.ZP.div(l||(l=(0,m.Z)(["\n  cursor: pointer;\n  margin: 5px 0 0;\n  width: fit-content;\n"])))),S=Z.ZP.div(d||(d=(0,m.Z)(["\n  width: 200px;\n  margin: 0 5px;\n"]))),Q=Z.ZP.div(p||(p=(0,m.Z)(["\n  width: 25px;\n  height: 25px;\n  margin: 0 5px 0 0;\n  border-radius: 50%;\n  border: solid 1px ",";\n  background-color: ",";\n  & > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n"])),P.Z.secondary,P.Z.rgbaPrimary),_=t(7123),D=t(6417),I=function(n){var e=n.customerData||{},t=e.code,r=e.fullName,i=e.address,o=(0,f.useState)(!1),s=(0,h.Z)(o,2),a=s[0],u=s[1];return(0,D.jsxs)(x.Z,{children:[(0,D.jsxs)(E,{children:[(0,D.jsx)(w,{children:r}),(0,D.jsxs)(C,{children:["\u2002- ",t]})]}),(0,D.jsx)(C,{children:i}),(0,D.jsxs)(E,{children:[(0,D.jsx)(R,{children:(0,D.jsx)(O,{onClick:function(){return u(!0)},children:"\u2b95 Chuy\u1ec3n"})}),a&&(0,D.jsx)(S,{children:(0,D.jsx)(b.Z,{isSelectOne:!0})}),a&&(0,D.jsx)(g.Z,{label:"X\xc1C NH\u1eacN",onClick:function(){return u(!1)}})]})]})},F=function(n){var e=(0,f.useState)(""),t=(0,h.Z)(e,2),r=t[0],i=t[1],o=(0,v.a)(_.q6,{variables:{filter:{text:r}}}).data,s=o&&o.accounts.edges||[];return(0,D.jsxs)(k,{children:[(0,D.jsx)(y.Z,{placeholder:"T\xecm theo t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(n){return i(n.target.value)}}),s.map((function(n,e){var t=n.node,r=t.avatarImage,i=t.fullName,o=t.inChargeOfCustomers;return(0,D.jsxs)(f.Fragment,{children:[!!o.length&&(0,D.jsxs)(E,{children:[(0,D.jsx)(Q,{children:(0,D.jsx)("img",{src:r,alt:"avatar-img"})}),(0,D.jsx)(j,{children:i})]}),o&&o.map((function(n,e){return(0,D.jsx)(I,{customerData:n},e)}))]},e)}))]})}},5222:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o,s=t(1413),a=(t(7313),t(168)),u=t(3115),c=t(1237),l=u.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n  margin: 0 0 30px;\n"]))),d=u.ZP.div(i||(i=(0,a.Z)(["\n  font-weight: 600;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),c.Z.lightBlack),p=u.ZP.div(o||(o=(0,a.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),h=t(6417),f=function(n){var e=n.title,t=n.children;return(0,h.jsxs)(l,(0,s.Z)((0,s.Z)({},n),{},{children:[(0,h.jsx)(d,{children:e}),(0,h.jsx)(p,{children:t})]}))}},1359:function(n,e,t){t.d(e,{Z:function(){return L}});var r,i,o,s,a,u,c,l,d,p,h,f,v,b,g=t(4165),x=t(5861),y=t(1413),m=t(885),Z=t(7313),P=t(3306),k=t(1677),w=t(6069),O=t(2206),j=t(6947),C=t(168),E=t(3115),R=t(1237),S=E.ZP.div(r||(r=(0,C.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),Q=(E.ZP.div(i||(i=(0,C.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),E.ZP.div(o||(o=(0,C.Z)(["\n  position: relative;\n  border-bottom: solid 1px #c4c4c4;\n"])))),_=(E.ZP.div(s||(s=(0,C.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),E.ZP.input(a||(a=(0,C.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding}))),D=E.ZP.div(u||(u=(0,C.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),I=E.ZP.p(c||(c=(0,C.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),F=(E.ZP.div(l||(l=(0,C.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),E.ZP.div(d||(d=(0,C.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),T=E.ZP.div(p||(p=(0,C.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),R.Z.secondary,R.Z.rgbaPrimary),M=E.ZP.p(h||(h=(0,C.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),N=E.ZP.div(f||(f=(0,C.Z)(["\n  margin: 10px auto;\n"]))),q=(E.ZP.input(v||(v=(0,C.Z)(["\n  display: none;\n"]))),E.ZP.div(b||(b=(0,C.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),R.Z.lightRed)),H=t(7123),z=t(6417),U=function(n){var e,t=n.roles,r=n.notBeCustomer,i=n.isError,o=n.isSelectOne,s=n.searchPlaceholder,a=(n.searchGuide,n.onClickSelectResultItem),u=n.emptySearchResultMessage,c=n.selectedList,l=["node.fullName","node.address","node.phoneNumber"],d=(0,Z.useState)(""),p=(0,m.Z)(d,2),h=p[0],f=p[1],v=(0,Z.useState)([]),b=(0,m.Z)(v,2),C=b[0],E=b[1],R=(0,P.t)(H.q6,{variables:{filter:(0,y.Z)((0,y.Z)({text:h||"a"},t&&{roles:t}),r&&{notBeCustomer:r})},fetchPolicy:"cache-and-network"}),U=(0,m.Z)(R,2),L=U[0],V=U[1],Y=V.data,A=V.fetchMore,G=Y&&(null===(e=Y.accounts)||void 0===e?void 0:e.pageInfo)||{},J=G.hasNextPage,W=C&&0===C.length,K=(0,Z.useState)(!1),B=(0,m.Z)(K,2),X=B[0],$=B[1],nn=!!h,en=(0,Z.useRef)(null),tn=(0,Z.useRef)(null),rn=X?1:0,on=X?"500px":"0",sn=X&&!W?"block":"none",an=X?"0 0 0 10px":"0 0 0 24px",un=X?"30px":"calc(100% - 20px)",cn=function(n){a(n),o&&$(!1)},ln=(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Q,{children:[(0,z.jsxs)("div",{onClick:function(){$(!0),en.current&&en.current.focus()},children:[(0,z.jsx)(_,{ref:en,value:h,disabled:!X,placeholder:s,searchinputpadding:an,onChange:function(n){return f(n.target.value)}}),(0,z.jsx)(D,{searchiconright:un,children:"\ud83d\udd0e"}),(0,z.jsx)(I,{upiconopacity:rn,onClick:function(){$(!1),f("")},children:"\u2716"})]}),(0,z.jsxs)(F,{modalheight:on,modaldisplay:sn,children:[(0,z.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),W?null:C.map((function(n,e){var t=l.map((function(e){return(0,w.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,z.jsx)(T,{onClick:function(){return cn(n)},children:(0,z.jsx)(M,{children:r})},e)})),!!J&&(0,z.jsx)(N,{children:(0,z.jsx)(k.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){A({variables:{cursor:G.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,O.d0)("accounts",t,n)}})}})})]})]}),(0,z.jsx)(j.Z,{isError:i})]});return(0,Z.useEffect)((function(){var n=function(n){tn.current&&!tn.current.contains(n.target)&&($(!1),f(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[tn]),(0,Z.useEffect)((function(){var n=function(){var n=(0,x.Z)((0,g.Z)().mark((function n(){var e,t,r,i;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L();case 2:t=n.sent,r=t&&(null===(e=t.data.accounts)||void 0===e?void 0:e.edges)||[],i=r.filter((function(n){var e=(n||{}).node.phoneNumber;return-1===c.findIndex((function(n){var t=n||{},r=t.node,i=t.phoneNumber;return r?r.phoneNumber===e:i===e}))})),E(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[c,h]),(0,z.jsxs)("div",{style:{width:"100%"},ref:tn,children:[(0,z.jsx)(S,{ref:tn,children:ln}),nn&&!C.length&&(0,z.jsx)(q,{children:u})]})};U.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var L=U},6947:function(n,e,t){t.d(e,{Z:function(){return p}});t(7313);var r,i,o=t(168),s=t(3115),a=s.ZP.div(r||(r=(0,o.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),u=s.ZP.p(i||(i=(0,o.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),c=t(3070),l=t(6417),d=function(n){var e=n.isError,t=n.errorMessage,r=e?"translateY(0)":"translateY(110%)";return(0,l.jsx)(a,{children:(0,l.jsx)(u,{isError:e,textTransform:r,children:t})})};d.defaultProps={isError:!1,errorMessage:c.ug.REQUIRED};var p=d},7851:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o=t(1413),s=(t(7313),t(168)),a=t(3115),u=t(1237),c=a.ZP.div(r||(r=(0,s.Z)(["\n  margin: 10px 0 20px;\n  font-size: 12px;\n"]))),l=a.ZP.input(i||(i=(0,s.Z)(["\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 20px;\n  border: 1px solid ",";\n  &:focus {\n    outline: none;\n  }\n"])),u.Z.secondary),d=t(6417),p=function(n){return(0,d.jsx)(c,{children:(0,d.jsx)(l,(0,o.Z)({},n))})};p.defaultProps={placeholder:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm..."};var h=p},6069:function(n,e,t){t.d(e,{RX:function(){return s},dh:function(){return o},tO:function(){return i},zZ:function(){return a}});var r=t(3070),i=function(n,e){if(e){for(var t=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,i=t.length;r<i;++r){var o=t[r];if(!(o in n))return;n=n[o]}return n}},o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(n),r=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),s=t.getHours(),a=t.getMinutes();return o=o<10?"0"+o:o,i=i<10?"0"+i:i,s=s<10?"0"+s:s,a=a<10?"0"+a:a,e?"".concat(o,"/").concat(i,"/").concat(r," - ").concat(s,":").concat(a):"".concat(o,"/").concat(i,"/").concat(r)},s=function(n,e,t){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:t,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},a=function(n,e){return isNaN(e)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(e,10)).join(" "):n}},2206:function(n,e,t){t.d(e,{FM:function(){return s},d0:function(){return o}});var r=t(4942),i=t(2982);function o(n,e,t){var o=e[n],s=o.edges,a=o.pageInfo;return s.length?(0,r.Z)({},n,{__typename:t[n].__typename,edges:[].concat((0,i.Z)(t[n].edges),(0,i.Z)(s)),pageInfo:a}):t}function s(n,e,t,o,s,a,u){var c=o[n],l=c.edges,d=c.pageInfo,p=[],h=!1;if(t.data){var f=t.data[e],v={node:f},b=!s||s(f);h=b,b&&(p=u?u(l,f):a?[v].concat((0,i.Z)(l)):[].concat((0,i.Z)(l),[v]))}return h?(0,r.Z)({},n,{__typename:o[n].__typename,edges:p,pageInfo:d}):o}},3306:function(n,e,t){t.d(e,{t:function(){return c}});var r=t(6797),i=t(7313),o=t(345),s=t(2668),a=t(1511),u=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function c(n,e){var t=(0,s.A)((0,a.x)(e&&e.client),n),c=(0,i.useRef)(),l=c.current?(0,o.J)(e,c.current):e,d=t.useQuery((0,r.pi)((0,r.pi)({},l),{skip:!c.current})),p=d.observable.options.initialFetchPolicy||t.getDefaultFetchPolicy(),h=Object.assign(d,{called:!!c.current}),f=(0,i.useMemo)((function(){for(var n={},e=function(e){var r=h[e];n[e]=function(){return c.current||(c.current=Object.create(null),t.forceUpdate()),r.apply(this,arguments)}},r=0,i=u;r<i.length;r++){e(i[r])}return n}),[]);return Object.assign(h,f),[(0,i.useCallback)((function(n){c.current=n?(0,r.pi)((0,r.pi)({},n),{fetchPolicy:n.fetchPolicy||p}):{fetchPolicy:p};var e=t.asyncUpdate().then((function(n){return Object.assign(n,f)}));return e.catch((function(){})),e}),[]),h]}},2668:function(n,e,t){t.d(e,{A:function(){return k},a:function(){return P}});var r=t(6797),i=t(6178),o=t(7313),s=t.t(o,2),a=t(4374),u=!1,c=s.useSyncExternalStore||function(n,e,t){var r=e();__DEV__&&!u&&r!==e()&&(u=!0,__DEV__&&i.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=o.useState({inst:{value:r,getSnapshot:e}}),c=s[0].inst,d=s[1];return a.JC?o.useLayoutEffect((function(){Object.assign(c,{value:r,getSnapshot:e}),l(c)&&d({inst:c})}),[n,r,e]):Object.assign(c,{value:r,getSnapshot:e}),o.useEffect((function(){return l(c)&&d({inst:c}),n((function(){l(c)&&d({inst:c})}))}),[n]),r};function l(n){var e=n.value,t=n.getSnapshot;try{return e!==t()}catch(r){return!0}}var d=t(3301),p=t(345),h=t(4883),f=t(4624),v=t(3816),b=t(8112),g=t(1511),x=t(1088),y=t(267),m=t(3790),Z=Object.prototype.hasOwnProperty;function P(n,e){return void 0===e&&(e=Object.create(null)),k((0,g.x)(e.client),n).useQuery(e)}function k(n,e){var t=(0,o.useRef)();t.current&&n===t.current.client&&e===t.current.query||(t.current=new w(n,e,t.current));var r=t.current,i=(0,o.useState)(0),s=(i[0],i[1]);return r.forceUpdate=function(){s((function(n){return n+1}))},r}var w=function(){function n(n,e,t){this.client=n,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,x.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,x.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,b.Vp)(e,b.n_.Query);var r=t&&t.result,i=r&&r.data;i&&(this.previousData=i)}return n.prototype.forceUpdate=function(){__DEV__&&i.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},n.prototype.asyncUpdate=function(){var n=this;return new Promise((function(e){n.asyncResolveFns.add(e),n.optionsToIgnoreOnce.add(n.watchQueryOptions),n.forceUpdate()}))},n.prototype.useQuery=function(n){var e=this;this.renderPromises=(0,o.useContext)((0,h.K)()).renderPromises,this.useOptions(n);var t=this.useObservableQuery(),r=c((0,o.useCallback)((function(){if(e.renderPromises)return function(){};var n=function(){var n=e.result,r=t.getCurrentResult();n&&n.loading===r.loading&&n.networkStatus===r.networkStatus&&(0,d.D)(n.data,r.data)||e.setResult(r)},r=t.subscribe(n,(function i(o){var s=t.last;r.unsubscribe();try{t.resetLastResults(),r=t.subscribe(n,i)}finally{t.last=s}if(!Z.call(o,"graphQLErrors"))throw o;var a=e.result;(!a||a&&a.loading||!(0,d.D)(o,a.error))&&e.setResult({data:a&&a.data,error:o,loading:!1,networkStatus:v.I.error})}));return function(){return r.unsubscribe()}}),[t,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(r);var i=this.toQueryResult(r);return!i.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(n){return n(i)})),this.asyncResolveFns.clear()),i},n.prototype.useOptions=function(e){var t,r=this.createWatchQueryOptions(this.queryHookOptions=e),i=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(i)&&(0,d.D)(r,i)||(this.watchQueryOptions=r,i&&this.observable&&(this.optionsToIgnoreOnce.delete(i),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||n.prototype.onCompleted,this.onError=e.onError||n.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},n.prototype.getObsQueryOptions=function(){var n=[],e=this.client.defaultOptions.watchQuery;return e&&n.push(e),this.queryHookOptions.defaultOptions&&n.push(this.queryHookOptions.defaultOptions),n.push((0,y.o)(this.observable&&this.observable.options,this.watchQueryOptions)),n.reduce(p.J)},n.prototype.createWatchQueryOptions=function(n){var e;void 0===n&&(n={});var t=n.skip,i=(n.ssr,n.onCompleted,n.onError,n.defaultOptions,(0,r._T)(n,["skip","ssr","onCompleted","onError","defaultOptions"])),o=Object.assign(i,{query:this.query});if(!this.renderPromises||"network-only"!==o.fetchPolicy&&"cache-and-network"!==o.fetchPolicy||(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),t){var s=o.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=o.initialFetchPolicy,c=void 0===u?a:u;Object.assign(o,{initialFetchPolicy:c,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},n.prototype.getDefaultFetchPolicy=function(){var n,e;return(null===(n=this.queryHookOptions.defaultOptions)||void 0===n?void 0:n.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},n.prototype.onCompleted=function(n){},n.prototype.onError=function(n){},n.prototype.useObservableQuery=function(){var n=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,o.useMemo)((function(){return{refetch:n.refetch.bind(n),reobserve:n.reobserve.bind(n),fetchMore:n.fetchMore.bind(n),updateQuery:n.updateQuery.bind(n),startPolling:n.startPolling.bind(n),stopPolling:n.stopPolling.bind(n),subscribeToMore:n.subscribeToMore.bind(n)}}),[n]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(n),n.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(n)),n},n.prototype.setResult=function(n){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=n,this.forceUpdate(),this.handleErrorOrCompleted(n)},n.prototype.handleErrorOrCompleted=function(n){var e=this;n.loading||Promise.resolve().then((function(){n.error?e.onError(n.error):n.data&&e.onCompleted(n.data)})).catch((function(n){__DEV__&&i.kG.warn(n)}))},n.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},n.prototype.toQueryResult=function(n){var e=this.toQueryResultCache.get(n);if(e)return e;var t=n.data,i=(n.partial,(0,r._T)(n,["data","partial"]));return this.toQueryResultCache.set(n,e=(0,r.pi)((0,r.pi)((0,r.pi)({data:t},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,m.O)(n.errors)&&(e.error=new f.c({graphQLErrors:n.errors})),e},n.prototype.unsafeHandlePartialRefetch=function(n){!n.partial||!this.queryHookOptions.partialRefetch||n.loading||n.data&&0!==Object.keys(n.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(n,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},n}()}}]);