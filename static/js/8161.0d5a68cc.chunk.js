"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8161],{9146:function(n,e,r){r.d(e,{Z:function(){return l}});var t,o=r(1413),i=(r(7313),r(168)),c=r(3115),a=r(1237),s=c.ZP.button(t||(t=(0,i.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),a.Z.rgbaBlack),u=r(6417),d=function(n){var e=n.label;return(0,u.jsx)(s,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m"};var l=d},760:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t=r(4165),o=r(5861),i=r(2982),c=r(885),a=r(1413),s=r(7313),u=r(8627),d=r(3601),l=r(4800);function p(n,e){(0,l.Z)(2,arguments);var r=(0,d.Z)(n),t=(0,u.Z)(e);return isNaN(t)?new Date(NaN):t?(r.setDate(r.getDate()+t),r):r}var f,h,x,g,b,m,Z,v,y,j,w=r(5627),k=r(3222),P=r(790),S=r(1359),N=r(5222),O=r(2262),C=r(9673),E=r(2399),_=r(9146),D=r(168),T=r(3115),A=r(1237),I=T.ZP.div(f||(f=(0,D.Z)(["\n  font-size: 12px;\n  padding: 10px 5px 120px;\n"]))),M=T.ZP.p(h||(h=(0,D.Z)(["\n  margin: 5px 0 0;\n  font-weight: 700;\n"]))),R=T.ZP.div(x||(x=(0,D.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n"]))),B=T.ZP.div(g||(g=(0,D.Z)(["\n  display: flex;\n  margin: 0 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),q=T.ZP.div(b||(b=(0,D.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 15px;\n"]))),z=T.ZP.div(m||(m=(0,D.Z)(["\n  width: 100px;\n"]))),V=(T.ZP.input(Z||(Z=(0,D.Z)(["\n  width: 60%;\n"]))),T.ZP.div(v||(v=(0,D.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 35%;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),A.Z.rgbaBlack),T.ZP.p(y||(y=(0,D.Z)(["\n  font-weight: 700;\n  margin: 30px 0 0;\n  text-transform: uppercase;\n  color: ",";\n"])),A.Z.secondary)),F=T.ZP.input(j||(j=(0,D.Z)(["\n  margin: 0 5px 0 0;\n"]))),G=r(5164),L=r(2153),Q=r(3454),U=r(7123),K=r(3070),X=r(6417),Y=function(n){var e,r,t,o=n.watch,i=n.errors,c=n.register,s=n.account,u=n.removeSelectedAccount,d=o("customers.".concat(s.node._id,".isOldDebt")),l=o("customers.".concat(s.node._id,".moneyValue")),p=Number(l)<0;return(0,X.jsxs)(N.Z,{children:[(0,X.jsxs)(B,{children:[(0,X.jsxs)(M,{children:[s.node.fullName," - ",s.node.idCode]}),(0,X.jsx)(O.Z,{label:"Xo\xe1",margin:"5px 0 0",onClick:function(){return u(s)}})]}),(0,X.jsxs)(R,{children:[(0,X.jsx)(F,(0,a.Z)({type:"checkbox"},c("customers.".concat(s.node._id,".isOldDebt")))),(0,X.jsx)("p",{children:"C\xf4ng n\u1ee3 c\u0169"})]}),(0,X.jsxs)(B,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)("p",{children:"S\u1ed1 ti\u1ec1n:"}),(0,X.jsx)(C.Z,{width:"120px",type:"number",margin:"0 5px",textAlign:"right",register:c,name:"customers.".concat(s.node._id,".moneyValue"),isError:!!i.customers&&!(null===(e=i.customers[s.node._id])||void 0===e||!e.moneyValue),errorMessage:"*Tr\u01b0\u1eddng b\u1eaft bu\u1ed9c \u2260 0",validations:{required:!0,pattern:{value:/[^0]+/}}}),(0,X.jsx)("p",{children:"\u0111"})]}),d&&p&&(0,X.jsxs)(q,{children:[(0,X.jsx)("p",{children:"Tu\u1ed5i:"}),(0,X.jsx)(C.Z,{min:1,width:"70px",type:"number",margin:"0 5px",register:c,name:"customers.".concat(s.node._id,".debtYearOld"),isError:!!i.customers&&!(null===(r=i.customers[s.node._id])||void 0===r||!r.debtYearOld),validations:{required:!0,min:1},style:{textAlign:"right"},errorMessage:"*B\u1eaft bu\u1ed9c > 0"}),(0,X.jsx)("p",{children:"ng\xe0y"})]})]}),(0,X.jsx)(E.Z,{register:c,placeholder:"L\xfd do...",name:"customers.".concat(s.node._id,".note"),isError:!!i.customers&&!(null===(t=i.customers[s.node._id])||void 0===t||!t.note),validations:{required:!0}})]})},H=function(n){var e=(0,w.cI)({defaultValues:{}}),r=e.watch,a=e.register,u=e.setValue,d=e.handleSubmit,l=e.formState.errors,f=(0,k.I0)(),h=(0,P.D)(Q.UM,{refetchQueries:[{query:U.JH},"GET_DEBT_STATISTICAL",{query:U.cX},"GET_DEBTS",{query:U.f},"GET_IN_CHARGE_OF_CUSTOMERS"]}),x=(0,c.Z)(h,1)[0],g=(0,s.useState)([]),b=(0,c.Z)(g,2),m=b[0],Z=b[1];a("selectedAccounts",{required:!m.length});var v=function(n){var e=m.filter((function(e){return e.node.phoneNumber!==n.node.phoneNumber}));Z(e)},y=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,a,s,u,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(f((0,G.S$)()),r=e.customers,o=[],a=function(){var n=(0,c.Z)(u[s],2),e=n[0],r=n[1],t=m.findIndex((function(n){return n.node._id===e})),a=r.note,d=r.moneyValue,l=r.debtYearOld,f=r.isOldDebt,h=Number(d),x=h<0&&f&&l?-l:0,g=p(new Date,x);h&&-1!==t&&(o=[].concat((0,i.Z)(o),[{note:a,isOldDebt:!!f,customerAccountId:e,moneyValue:Number(d),createdAt:g}]))},s=0,u=Object.entries(r);s<u.length;s++)a();return d={customers:o},n.next=8,x({variables:{data:d}});case 8:n.sent.data&&(setTimeout((function(){f((0,G.S4)())}),500),f((0,L.mm)()));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,X.jsxs)(I,{children:[!!m.length&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(V,{children:"Danh s\xe1ch kh\xe1ch h\xe0ng:"}),m.map((function(n,e){return(0,X.jsx)(Y,{watch:r,errors:l,account:n,setValue:u,register:a,removeSelectedAccount:v},n.node._id)}))]}),(0,X.jsxs)(q,{children:[(0,X.jsx)(z,{children:"Kh\xe1ch h\xe0ng:"}),(0,X.jsx)(S.Z,{selectedList:m,roles:[K.If.CUSTOMER],isError:!!l.selectedAccounts,searchBackgroundColor:A.Z.white,onClickSelectResultItem:function(n){if(-1===m.findIndex((function(e){return e.node.phoneNumber===n.node.phoneNumber}))){var e=[].concat((0,i.Z)(m),[n]);Z(e)}},searchPlaceholder:"T\xecm ki\u1ebfm kh\xe1ch h\xe0ng"})]}),(0,X.jsx)(_.Z,{label:"X\xe1c nh\u1eadn",onClick:d(y)})]})}},5222:function(n,e,r){r.d(e,{Z:function(){return h}});var t,o,i,c=r(1413),a=(r(7313),r(168)),s=r(3115),u=r(1237),d=s.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  margin: 0 0 20px;\n"]))),l=s.ZP.div(o||(o=(0,a.Z)(["\n  font-weight: 600;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),u.Z.lightBlack),p=s.ZP.div(i||(i=(0,a.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),f=r(6417),h=function(n){var e=n.title,r=n.children;return(0,f.jsxs)(d,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,f.jsx)(l,{children:e}),(0,f.jsx)(p,{children:r})]}))}},1359:function(n,e,r){r.d(e,{Z:function(){return Q}});var t,o,i,c,a,s,u,d,l,p,f,h,x,g,b,m=r(4165),Z=r(5861),v=r(1413),y=r(885),j=r(7313),w=r(3306),k=r(1677),P=r(6069),S=r(2206),N=r(6947),O=r(168),C=r(3115),E=r(1237),_=C.ZP.div(t||(t=(0,O.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),D=(C.ZP.div(o||(o=(0,O.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),C.ZP.div(i||(i=(0,O.Z)(["\n  position: relative;\n"])))),T=(C.ZP.div(c||(c=(0,O.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),C.ZP.div(a||(a=(0,O.Z)(["\n  margin-top: 10px;\n  border-bottom: solid 1px #c4c4c4;\n  & input {\n    background-color: ",";\n  }\n"])),(function(n){return n.searchBackground}))),A=C.ZP.input(s||(s=(0,O.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),I=C.ZP.div(u||(u=(0,O.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),M=C.ZP.p(d||(d=(0,O.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),R=(C.ZP.div(l||(l=(0,O.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),C.ZP.div(p||(p=(0,O.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),B=C.ZP.div(f||(f=(0,O.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),E.Z.secondary,E.Z.rgbaPrimary),q=C.ZP.p(h||(h=(0,O.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),z=C.ZP.div(x||(x=(0,O.Z)(["\n  margin: 10px auto;\n"]))),V=(C.ZP.input(g||(g=(0,O.Z)(["\n  display: none;\n"]))),C.ZP.div(b||(b=(0,O.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),E.Z.lightRed)),F=r(7123),G=r(6417),L=function(n){var e,r=n.roles,t=n.notBeCustomer,o=n.isError,i=n.isSelectOne,c=n.searchPlaceholder,a=(n.searchGuide,n.onClickSelectResultItem),s=n.emptySearchResultMessage,u=n.selectedList,d=n.noOwnAccountFilter,l=n.searchBackgroundColor,p=["node.fullName","node.address","node.phoneNumber"],f=(0,j.useState)(""),h=(0,y.Z)(f,2),x=h[0],g=h[1],b=(0,j.useState)([]),O=(0,y.Z)(b,2),C=O[0],L=O[1],Q=(0,w.t)(F.q6,{variables:{filter:(0,v.Z)((0,v.Z)((0,v.Z)({text:x||"a"},r&&{roles:r}),t&&{notBeCustomer:t}),d&&{noOwnAccountFilter:d})},fetchPolicy:"cache-and-network"}),U=(0,y.Z)(Q,2),K=U[0],X=U[1],Y=X.data,H=X.fetchMore,J=Y&&(null===(e=Y.accounts)||void 0===e?void 0:e.pageInfo)||{},W=J.hasNextPage,$=C&&0===C.length,nn=(0,j.useState)(!1),en=(0,y.Z)(nn,2),rn=en[0],tn=en[1],on=!!x,cn=(0,j.useRef)(null),an=(0,j.useRef)(null),sn=rn?1:0,un=rn?"500px":"0",dn=rn&&!$?"block":"none",ln=rn?"0 0 0 10px":"0 0 0 24px",pn=rn?"30px":"calc(100% - 20px)",fn=l||E.Z.lightWhite,hn=function(n){a(n),i&&tn(!1)},xn=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(D,{children:[(0,G.jsxs)(T,{onClick:function(){tn(!0),cn.current&&cn.current.focus()},searchBackground:fn,children:[(0,G.jsx)(A,{ref:cn,value:x,placeholder:c,searchinputpadding:ln,onChange:function(n){return g(n.target.value)}}),(0,G.jsx)(I,{searchiconright:pn,children:"\ud83d\udd0e"}),(0,G.jsx)(M,{upiconopacity:sn,onClick:function(){tn(!1),g("")},children:"\u2716"})]}),(0,G.jsxs)(R,{modalheight:un,modaldisplay:dn,children:[(0,G.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),$?null:C.map((function(n,e){var r=p.map((function(e){return(0,P.tO)(n,e)})),t="";return r.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,G.jsx)(B,{onClick:function(){return hn(n)},children:(0,G.jsx)(q,{children:t})},e)})),!!W&&(0,G.jsx)(z,{children:(0,G.jsx)(k.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){H({variables:{cursor:J.endCursor},updateQuery:function(n,e){var r=e.fetchMoreResult;return(0,S.d0)("accounts",r,n)}})}})})]})]}),(0,G.jsx)(N.Z,{isError:o})]});return(0,j.useEffect)((function(){var n=function(n){an.current&&!an.current.contains(n.target)&&(tn(!1),g(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[an]),(0,j.useEffect)((function(){var n=function(){var n=(0,Z.Z)((0,m.Z)().mark((function n(){var e,r,t,o;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K();case 2:r=n.sent,t=r&&(null===(e=r.data.accounts)||void 0===e?void 0:e.edges)||[],o=t.filter((function(n){var e=(n||{}).node.phoneNumber;return-1===u.findIndex((function(n){var r=n||{},t=r.node,o=r.phoneNumber;return t?t.phoneNumber===e:o===e}))})),L(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[u,x]),(0,G.jsxs)("div",{style:{width:"100%"},ref:an,children:[(0,G.jsx)(_,{ref:an,children:xn}),on&&!C.length&&(0,G.jsx)(V,{children:s})]})};L.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var Q=L},2399:function(n,e,r){r.d(e,{Z:function(){return x}});var t,o,i=r(1413),c=(r(7313),r(2180)),a=r(6947),s=r(168),u=r(3115),d=r(1237),l=u.ZP.div(t||(t=(0,s.Z)(["\n  width: 100%;\n  margin: 5px 0 0 0;\n"]))),p=u.ZP.textarea(o||(o=(0,s.Z)(["\n  width: 100%;\n  border: none;\n  padding: 5px;\n  font-size: 12px;\n  font-weight: 300;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),f=r(6417),h=function(n){var e=n.label,r=n.name,t=n.isError,o=n.errorMessage,s=n.register,u=n.validations;return(0,f.jsxs)(l,{children:[e&&(0,f.jsx)(c.Z,{label:e}),(0,f.jsx)(p,(0,i.Z)((0,i.Z)({},s(r,u)),n)),(0,f.jsx)(a.Z,{isError:t,errorMessage:o})]})};h.defaultProps={type:"text",validations:{},register:function(){}};var x=h},4800:function(n,e,r){function t(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,{Z:function(){return t}})},8627:function(n,e,r){function t(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}r.d(e,{Z:function(){return t}})},3601:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(4800);function o(n){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(n){(0,t.Z)(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===o(n)&&"[object Date]"===e?new Date(n.getTime()):"number"===typeof n||"[object Number]"===e?new Date(n):("string"!==typeof n&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},5987:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(3366);function o(n,e){if(null==n)return{};var r,o,i=(0,t.Z)(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}},3306:function(n,e,r){r.d(e,{t:function(){return u}});var t=r(6797),o=r(7313),i=r(345),c=r(2668),a=r(1511),s=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function u(n,e){var r=(0,c.A)((0,a.x)(e&&e.client),n),u=(0,o.useRef)(),d=u.current?(0,i.J)(e,u.current):e,l=r.useQuery((0,t.pi)((0,t.pi)({},d),{skip:!u.current})),p=l.observable.options.initialFetchPolicy||r.getDefaultFetchPolicy(),f=Object.assign(l,{called:!!u.current}),h=(0,o.useMemo)((function(){for(var n={},e=function(e){var t=f[e];n[e]=function(){return u.current||(u.current=Object.create(null),r.forceUpdate()),t.apply(this,arguments)}},t=0,o=s;t<o.length;t++){e(o[t])}return n}),[]);return Object.assign(f,h),[(0,o.useCallback)((function(n){u.current=n?(0,t.pi)((0,t.pi)({},n),{fetchPolicy:n.fetchPolicy||p}):{fetchPolicy:p};var e=r.asyncUpdate().then((function(n){return Object.assign(n,h)}));return e.catch((function(){})),e}),[]),f]}}}]);