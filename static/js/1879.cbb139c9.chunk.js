"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[1879],{1359:function(n,r,e){e.d(r,{Z:function(){return _}});var t,o,i,c,a,u,s,d,l,p,h,f,x,b,g,Z=e(4165),v=e(5861),m=e(1413),k=e(885),w=e(7313),P=e(3306),y=e(1677),j=e(6069),C=e(2206),S=e(6947),R=e(168),E=e(3115),z=e(1237),N=E.ZP.div(t||(t=(0,R.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),B=(E.ZP.div(o||(o=(0,R.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),E.ZP.div(i||(i=(0,R.Z)(["\n  position: relative;\n"])))),I=(E.ZP.div(c||(c=(0,R.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),E.ZP.div(a||(a=(0,R.Z)(["\n  margin-top: 10px;\n  border-bottom: solid 1px #c4c4c4;\n  & input {\n    background-color: ",";\n  }\n"])),(function(n){return n.searchBackground}))),L=E.ZP.input(u||(u=(0,R.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),M=E.ZP.div(s||(s=(0,R.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),O=E.ZP.p(d||(d=(0,R.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),q=(E.ZP.div(l||(l=(0,R.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),E.ZP.div(p||(p=(0,R.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),A=E.ZP.div(h||(h=(0,R.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),z.Z.secondary,z.Z.rgbaPrimary),G=E.ZP.p(f||(f=(0,R.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),K=E.ZP.div(x||(x=(0,R.Z)(["\n  margin: 10px auto;\n"]))),Q=(E.ZP.input(b||(b=(0,R.Z)(["\n  display: none;\n"]))),E.ZP.div(g||(g=(0,R.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),z.Z.lightRed)),T=e(7123),F=e(6417),W=function(n){var r,e=n.roles,t=n.notBeCustomer,o=n.isError,i=n.isSelectOne,c=n.searchPlaceholder,a=(n.searchGuide,n.onClickSelectResultItem),u=n.emptySearchResultMessage,s=n.selectedList,d=n.noOwnAccountFilter,l=n.searchBackgroundColor,p=["node.fullName","node.address","node.phoneNumber"],h=(0,w.useState)(""),f=(0,k.Z)(h,2),x=f[0],b=f[1],g=(0,w.useState)([]),R=(0,k.Z)(g,2),E=R[0],W=R[1],_=(0,P.t)(T.q6,{variables:{filter:(0,m.Z)((0,m.Z)((0,m.Z)({text:x||"a"},e&&{roles:e}),t&&{notBeCustomer:t}),d&&{noOwnAccountFilter:d})},fetchPolicy:"cache-and-network"}),Y=(0,k.Z)(_,2),D=Y[0],H=Y[1],J=H.data,U=H.fetchMore,V=J&&(null===(r=J.accounts)||void 0===r?void 0:r.pageInfo)||{},X=V.hasNextPage,$=E&&0===E.length,nn=(0,w.useState)(!1),rn=(0,k.Z)(nn,2),en=rn[0],tn=rn[1],on=!!x,cn=(0,w.useRef)(null),an=(0,w.useRef)(null),un=en?1:0,sn=en?"500px":"0",dn=en&&!$?"block":"none",ln=en?"0 0 0 10px":"0 0 0 24px",pn=en?"30px":"calc(100% - 20px)",hn=l||z.Z.lightWhite,fn=function(n){a(n),i&&tn(!1)},xn=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(B,{children:[(0,F.jsxs)(I,{onClick:function(){tn(!0),cn.current&&cn.current.focus()},searchBackground:hn,children:[(0,F.jsx)(L,{ref:cn,value:x,placeholder:c,searchinputpadding:ln,onChange:function(n){return b(n.target.value)}}),(0,F.jsx)(M,{searchiconright:pn,children:"\ud83d\udd0e"}),(0,F.jsx)(O,{upiconopacity:un,onClick:function(){tn(!1),b("")},children:"\u2716"})]}),(0,F.jsxs)(q,{modalheight:sn,modaldisplay:dn,children:[(0,F.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),$?null:E.map((function(n,r){var e=p.map((function(r){return(0,j.tO)(n,r)})),t="";return e.forEach((function(n,r){t+=r>0?" - ".concat(n):n})),(0,F.jsx)(A,{onClick:function(){return fn(n)},children:(0,F.jsx)(G,{children:t})},r)})),!!X&&(0,F.jsx)(K,{children:(0,F.jsx)(y.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){U({variables:{cursor:V.endCursor},updateQuery:function(n,r){var e=r.fetchMoreResult;return(0,C.d0)("accounts",e,n)}})}})})]})]}),(0,F.jsx)(S.Z,{isError:o})]});return(0,w.useEffect)((function(){var n=function(n){an.current&&!an.current.contains(n.target)&&(tn(!1),b(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[an]),(0,w.useEffect)((function(){var n=function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var r,e,t,o;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D();case 2:e=n.sent,t=e&&(null===(r=e.data.accounts)||void 0===r?void 0:r.edges)||[],o=t.filter((function(n){var r=(n||{}).node.phoneNumber;return-1===s.findIndex((function(n){var e=n||{},t=e.node,o=e.phoneNumber;return t?t.phoneNumber===r:o===r}))})),W(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[s,x]),(0,F.jsxs)("div",{style:{width:"100%"},ref:an,children:[(0,F.jsx)(N,{ref:an,children:xn}),on&&!E.length&&(0,F.jsx)(Q,{children:u})]})};W.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var _=W},6879:function(n,r,e){e.d(r,{Z:function(){return W}});var t,o,i,c,a,u,s,d,l,p,h,f,x,b,g,Z=e(4165),v=e(5861),m=e(885),k=e(7313),w=e(3306),P=e(1677),y=e(6069),j=e(6947),C=e(168),S=e(3115),R=e(1237),E=(S.ZP.div(t||(t=(0,C.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),S.ZP.div(o||(o=(0,C.Z)(["\n  position: relative;\n"])))),z=(S.ZP.div(i||(i=(0,C.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),S.ZP.div(c||(c=(0,C.Z)(["\n  margin-top: 10px;\n  border-bottom: solid 1px #c4c4c4;\n  & input {\n    background-color: ",";\n  }\n"])),(function(n){return n.searchBackground}))),N=S.ZP.input(a||(a=(0,C.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),B=S.ZP.div(u||(u=(0,C.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),I=S.ZP.p(s||(s=(0,C.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),L=(S.ZP.div(d||(d=(0,C.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),S.ZP.div(l||(l=(0,C.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),M=S.ZP.div(p||(p=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),O=S.ZP.div(h||(h=(0,C.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: 1px solid ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),R.Z.bgGray,R.Z.rgbaPrimary),q=S.ZP.p(f||(f=(0,C.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),A=S.ZP.div(x||(x=(0,C.Z)(["\n  margin: 10px auto;\n"]))),G=(S.ZP.input(b||(b=(0,C.Z)(["\n  display: none;\n"]))),S.ZP.div(g||(g=(0,C.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),R.Z.lightRed)),K=e(7123),Q=e(2206),T=e(6417),F=function(n){var r,e=n.isError,t=n.isSelectOne,o=(n.searchGuide,n.selectedList),i=n.showSelectAll,c=n.searchPlaceholder,a=n.searchBackgroundColor,u=n.onClickSelectResultItem,s=n.emptySearchResultMessage,d=n.onClickSelectAllProducts,l=["node.code","node.name[0].showText"],p=(0,k.useState)(""),h=(0,m.Z)(p,2),f=h[0],x=h[1],b=(0,k.useState)([]),g=(0,m.Z)(b,2),C=g[0],S=g[1],F=(0,w.t)(K.tT,{variables:{filter:{text:f||"a"}}}),W=(0,m.Z)(F,2),_=W[0],Y=W[1],D=Y.data,H=Y.fetchMore,J=(0,w.t)(K.Yc),U=(0,m.Z)(J,1)[0],V=D&&(null===(r=D.products)||void 0===r?void 0:r.pageInfo)||{},X=V.hasNextPage,$=C&&0===C.length,nn=(0,k.useState)(!1),rn=(0,m.Z)(nn,2),en=rn[0],tn=rn[1],on=!!f,cn=(0,k.useRef)(null),an=(0,k.useRef)(null),un=en?1:0,sn=en?"500px":"0",dn=en&&!$?"block":"none",ln=en?"0 0 0 10px":"0 0 0 24px",pn=en?"30px":"calc(100% - 20px)",hn=a||R.Z.lightWhite,fn=function(n){u(n),t&&tn(!1)},xn=function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var r;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return tn(!1),n.next=3,U();case 3:return r=n.sent,n.abrupt("return",r&&r.data.allProducts||[]);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),bn=(0,T.jsxs)(E,{children:[(0,T.jsxs)(z,{searchBackground:hn,onClick:function(){tn(!0),cn.current&&cn.current.focus()},children:[(0,T.jsx)(N,{ref:cn,value:f,placeholder:c,searchinputpadding:ln,onChange:function(n){return x(n.target.value)}}),(0,T.jsx)(B,{searchiconright:pn,children:"\ud83d\udd0e"}),(0,T.jsx)(I,{upiconopacity:un,onClick:function(){tn(!1),x("")},children:"\u2716"})]}),(0,T.jsx)(j.Z,{isError:e}),(0,T.jsxs)(L,{modalheight:sn,modaldisplay:dn,children:[(0,T.jsxs)(M,{children:[(0,T.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),i&&(0,T.jsx)(P.Z,{label:"Ch\u1ecdn t\u1ea5t c\u1ea3",onClick:function(){return d(xn)}})]}),$?null:C.map((function(n,r){var e=l.map((function(r){return(0,y.tO)(n,r)})),t="";return e.forEach((function(n,r){t+=r>0?" - ".concat(n):n})),(0,T.jsx)(O,{onClick:function(){return fn(n)},children:(0,T.jsx)(q,{children:t})},r)})),!!X&&(0,T.jsx)(A,{children:(0,T.jsx)(P.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){H({variables:{cursor:V.endCursor},updateQuery:function(n,r){var e=r.fetchMoreResult;return(0,Q.d0)("products",e,n)}})}})})]})]});return(0,k.useEffect)((function(){var n=function(n){an.current&&!an.current.contains(n.target)&&(tn(!1),x(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[an]),(0,k.useEffect)((function(){var n=function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var r,e,t,i;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_();case 2:e=n.sent,t=e&&(null===(r=e.data.products)||void 0===r?void 0:r.edges)||[],i=t.filter((function(n){var r=(n||{}).node.code;return-1===o.findIndex((function(n){var e=n||{},t=e.node,o=e.code;return t?t.code===r:o===r}))})),S(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[o,f]),(0,T.jsxs)("div",{style:{width:"100%"},ref:an,children:[bn,on&&!C.length&&(0,T.jsx)(G,{children:s})]})};F.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},onClickSelectAllProducts:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var W=F},2180:function(n,r,e){e.d(r,{Z:function(){return a}});e(7313);var t,o=e(168),i=e(3115).ZP.p(t||(t=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),c=e(6417),a=function(n){var r=n.label;return(0,c.jsx)(i,{children:r})}}}]);