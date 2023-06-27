"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[760,9146],{9146:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,o=t(1413),i=(t(7313),t(168)),s=t(3115),a=t(1237),c=s.ZP.button(r||(r=(0,i.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),a.Z.rgbaBlack),u=t(6417),d=function(n){var e=n.label;return(0,u.jsx)(c,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},760:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r=t(4165),o=t(5861),i=t(2982),s=t(885),a=t(1413),c=t(7313),u=t(8627),d=t(3601),l=t(4800);function f(n,e){(0,l.Z)(2,arguments);var t=(0,d.Z)(n),r=(0,u.Z)(e);return isNaN(r)?new Date(NaN):r?(t.setDate(t.getDate()+r),t):t}var p,x,m,h,g,b,Z,y,v,j,w=t(5627),S=t(3222),N=t(790),k=t(1359),_=t(5222),D=t(2262),P=t(9673),E=t(2399),T=t(9146),A=t(168),C=t(3115),O=t(1237),I=C.ZP.div(p||(p=(0,A.Z)(["\n  font-size: 12px;\n  padding: 10px 5px 120px;\n"]))),M=C.ZP.p(x||(x=(0,A.Z)(["\n  margin: 5px 0 0;\n  font-weight: 700;\n"]))),q=C.ZP.div(m||(m=(0,A.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n"]))),V=C.ZP.div(h||(h=(0,A.Z)(["\n  display: flex;\n  margin: 0 0 5px;\n  align-items: center;\n  justify-content: space-between;\n"]))),B=C.ZP.div(g||(g=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 15px;\n"]))),G=C.ZP.div(b||(b=(0,A.Z)(["\n  width: 100px;\n"]))),z=(C.ZP.input(Z||(Z=(0,A.Z)(["\n  width: 60%;\n"]))),C.ZP.div(y||(y=(0,A.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 35%;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),O.Z.rgbaBlack),C.ZP.p(v||(v=(0,A.Z)(["\n  font-weight: 700;\n  margin: 30px 0 0;\n  text-transform: uppercase;\n  color: ",";\n"])),O.Z.secondary)),R=C.ZP.input(j||(j=(0,A.Z)(["\n  margin: 0 5px 0 0;\n"]))),L=t(5164),U=t(2153),X=t(3454),Y=t(7123),F=t(3070),H=t(6417),J=function(n){var e,t,r,o=n.watch,i=n.errors,s=n.register,c=n.account,u=n.removeSelectedAccount,d=o("customers.".concat(c.node._id,".isOldDebt")),l=o("customers.".concat(c.node._id,".moneyValue")),f=Number(l)<0;return(0,H.jsxs)(_.Z,{children:[(0,H.jsxs)(V,{children:[(0,H.jsxs)(M,{children:[c.node.fullName," - ",c.node.idCode]}),(0,H.jsx)(D.Z,{label:"Xo\xe1",margin:"5px 0 0",onClick:function(){return u(c)}})]}),(0,H.jsxs)(q,{children:[(0,H.jsx)(R,(0,a.Z)({type:"checkbox"},s("customers.".concat(c.node._id,".isOldDebt")))),(0,H.jsx)("p",{children:"C\xf4ng n\u1ee3 c\u0169"})]}),(0,H.jsxs)(V,{children:[(0,H.jsxs)(B,{children:[(0,H.jsx)("p",{children:"S\u1ed1 ti\u1ec1n:"}),(0,H.jsx)(P.Z,{width:"120px",type:"number",margin:"0 5px",textAlign:"right",register:s,name:"customers.".concat(c.node._id,".moneyValue"),isError:!!i.customers&&!(null===(e=i.customers[c.node._id])||void 0===e||!e.moneyValue),errorMessage:"*Tr\u01b0\u1eddng b\u1eaft bu\u1ed9c \u2260 0",validations:{required:!0,pattern:{value:/[^0]+/}}}),(0,H.jsx)("p",{children:"\u0111"})]}),d&&f&&(0,H.jsxs)(B,{children:[(0,H.jsx)("p",{children:"Tu\u1ed5i:"}),(0,H.jsx)(P.Z,{min:1,width:"70px",type:"number",margin:"0 5px",register:s,name:"customers.".concat(c.node._id,".debtYearOld"),isError:!!i.customers&&!(null===(t=i.customers[c.node._id])||void 0===t||!t.debtYearOld),validations:{required:!0,min:1},style:{textAlign:"right"},errorMessage:"*B\u1eaft bu\u1ed9c > 0"}),(0,H.jsx)("p",{children:"ng\xe0y"})]})]}),(0,H.jsx)(E.Z,{register:s,placeholder:"L\xfd do...",name:"customers.".concat(c.node._id,".note"),isError:!!i.customers&&!(null===(r=i.customers[c.node._id])||void 0===r||!r.note),validations:{required:!0}})]})},K=function(n){var e=(0,w.cI)({defaultValues:{}}),t=e.watch,a=e.register,u=e.setValue,d=e.handleSubmit,l=e.formState.errors,p=(0,S.I0)(),x=(0,N.D)(X.UM,{refetchQueries:[{query:Y.JH},"GET_DEBT_STATISTICAL",{query:Y.cX},"GET_DEBTS",{query:Y.f},"GET_IN_CHARGE_OF_CUSTOMERS"]}),m=(0,s.Z)(x,1)[0],h=(0,c.useState)([]),g=(0,s.Z)(h,2),b=g[0],Z=g[1];a("selectedAccounts",{required:!b.length});var y=function(n){var e=b.filter((function(e){return e.node.phoneNumber!==n.node.phoneNumber}));Z(e)},v=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a,c,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(p((0,L.S$)()),t=e.customers,o=[],a=function(){var n=(0,s.Z)(u[c],2),e=n[0],t=n[1],r=b.findIndex((function(n){return n.node._id===e})),a=t.note,d=t.moneyValue,l=t.debtYearOld,p=t.isOldDebt,x=Number(d),m=x<0&&p&&l?-l:0,h=f(new Date,m);x&&-1!==r&&(o=[].concat((0,i.Z)(o),[{note:a,isOldDebt:!!p,customerAccountId:e,moneyValue:Number(d),createdAt:h}]))},c=0,u=Object.entries(t);c<u.length;c++)a();return d={customers:o},n.next=8,m({variables:{data:d}});case 8:n.sent.data&&(setTimeout((function(){p((0,L.S4)())}),500),p((0,U.mm)()));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,H.jsxs)(I,{children:[!!b.length&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{children:"Danh s\xe1ch kh\xe1ch h\xe0ng:"}),b.map((function(n,e){return(0,H.jsx)(J,{watch:t,errors:l,account:n,setValue:u,register:a,removeSelectedAccount:y},n.node._id)}))]}),(0,H.jsxs)(B,{children:[(0,H.jsx)(G,{children:"Kh\xe1ch h\xe0ng:"}),(0,H.jsx)(k.Z,{selectedList:b,roles:[F.If.CUSTOMER],isError:!!l.selectedAccounts,searchBackgroundColor:O.Z.white,onClickSelectResultItem:function(n){if(-1===b.findIndex((function(e){return e.node.phoneNumber===n.node.phoneNumber}))){var e=[].concat((0,i.Z)(b),[n]);Z(e)}},searchPlaceholder:"T\xecm ki\u1ebfm kh\xe1ch h\xe0ng"})]}),(0,H.jsx)(T.default,{label:"X\xe1c nh\u1eadn",onClick:d(v)})]})}},2399:function(n,e,t){t.d(e,{Z:function(){return m}});var r,o,i=t(1413),s=(t(7313),t(2180)),a=t(6947),c=t(168),u=t(3115),d=t(1237),l=u.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  margin: 5px 0 0 0;\n"]))),f=u.ZP.textarea(o||(o=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  padding: 5px;\n  font-size: 12px;\n  font-weight: 300;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),p=t(6417),x=function(n){var e=n.label,t=n.name,r=n.isError,o=n.errorMessage,c=n.register,u=n.validations;return(0,p.jsxs)(l,{children:[e&&(0,p.jsx)(s.Z,{label:e}),(0,p.jsx)(f,(0,i.Z)((0,i.Z)({},c(t,u)),n)),(0,p.jsx)(a.Z,{isError:r,errorMessage:o})]})};x.defaultProps={type:"text",validations:{},register:function(){}};var m=x},4800:function(n,e,t){function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}t.d(e,{Z:function(){return r}})},8627:function(n,e,t){function r(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}t.d(e,{Z:function(){return r}})},3601:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(4800);function o(n){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(n){(0,r.Z)(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===o(n)&&"[object Date]"===e?new Date(n.getTime()):"number"===typeof n||"[object Number]"===e?new Date(n):("string"!==typeof n&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);