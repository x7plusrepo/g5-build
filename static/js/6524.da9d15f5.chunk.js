"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6524],{9146:function(n,e,r){r.d(e,{Z:function(){return l}});var t,i=r(1413),o=(r(7313),r(168)),a=r(3115),c=r(1237),s=a.ZP.button(t||(t=(0,o.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),c.Z.rgbaBlack),d=r(6417),u=function(n){var e=n.label;return(0,d.jsx)(s,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};u.defaultProps={label:"N\xfat b\u1ea5m"};var l=u},6524:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t,i,o,a,c,s,d,u=r(4165),l=r(5861),p=r(885),x=r(7313),h=r(5627),f=r(3222),g=r(790),b=r(5222),m=r(9146),Z=r(9673),v=r(1359),k=r(1677),w=r(168),j=r(3115),P=r(1237),y=j.ZP.div(t||(t=(0,w.Z)(["\n  font-size: 12px;\n  padding: 10px 10px 120px;\n"]))),I=j.ZP.p(i||(i=(0,w.Z)(["\n  font-weight: 700;\n"]))),A=j.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 15px;\n"]))),S=j.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),C=j.ZP.div(c||(c=(0,w.Z)(["\n  width: 100px;\n"]))),E=(j.ZP.input(s||(s=(0,w.Z)(["\n  width: 60%;\n"]))),j.ZP.div(d||(d=(0,w.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),P.Z.rgbaBlack),r(3454)),z=r(2153),M=r(6417),N=function(n){var e=n.discountPromotionId,r=(0,h.cI)({defaultValues:{}}),t=r.register,i=r.setValue,o=r.clearErrors,a=r.handleSubmit,c=r.formState.errors,s=(0,f.I0)(),d=(0,x.useState)(void 0),w=(0,p.Z)(d,2),j=w[0],P=w[1];t("customer",{required:!j});var N=(0,g.D)(E.Xu),R=(0,p.Z)(N,1)[0],q=(0,g.D)(E.JS),V=(0,p.Z)(q,1)[0],O=j?(0,M.jsxs)(S,{style:{width:"100%"},children:[(0,M.jsxs)(I,{children:[j.fullName," - ",j.phoneNumber]}),(0,M.jsx)(k.Z,{label:"\u0110\u1ed5i",onClick:function(){P(void 0),i("customer",void 0)}})]}):(0,M.jsx)(v.Z,{isSelectOne:!0,isError:!!c.customer,onClickSelectResultItem:function(n){o("customer"),P(n.node),i("customer",n.node)}}),B=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(r){var t,i,o,a,c,d,l,p,x,h;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=r.customer,i=r.paidAt,o=r.bePaidMoneyValue,a=t._id,c=t.staffAccountId,d=t.managerAccountId,l=t.directorAccountId,!e){n.next=11;break}return p={paidAt:new Date(i).toISOString(),customerAccountId:a,staffAccountId:c,managerAccountId:d,directorAccountId:l},x={discountPromotionId:e},n.next=7,V({variables:{data:p,where:x}});case 7:n.sent.data&&s((0,z.mm)()),n.next=16;break;case 11:return h={paidAt:new Date(i).toISOString(),bePaidMoneyValue:Number(o),customerAccountId:a,staffAccountId:c,managerAccountId:d,directorAccountId:l},n.next=14,R({variables:{data:h}});case 14:n.sent.data&&s((0,z.mm)());case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,M.jsxs)(y,{children:[(0,M.jsxs)(b.Z,{children:[(0,M.jsxs)(A,{children:[(0,M.jsx)(C,{children:"Kh\xe1ch h\xe0ng:"}),O]}),(0,M.jsxs)(A,{children:[(0,M.jsx)(C,{children:"Ng\xe0y tr\u1ea3:"}),(0,M.jsx)(Z.Z,{type:"datetime-local",name:"paidAt",register:t,validations:{required:!0},isError:!!c.paidAt})]}),!e&&(0,M.jsxs)(A,{children:[(0,M.jsx)(C,{children:"S\u1ed1 ti\u1ec1n:"}),(0,M.jsx)(Z.Z,{type:"number",textAlign:"right",name:"bePaidMoneyValue",register:t,validations:{required:!0},isError:!!c.bePaidMoneyValue}),(0,M.jsx)("span",{style:{marginLeft:10},children:"\u0111"})]})]}),(0,M.jsx)(m.Z,{label:"X\xe1c nh\u1eadn",onClick:a(B)})]})}},5222:function(n,e,r){r.d(e,{Z:function(){return h}});var t,i,o,a=r(1413),c=(r(7313),r(168)),s=r(3115),d=r(1237),u=s.ZP.div(t||(t=(0,c.Z)(["\n  position: relative;\n"]))),l=s.ZP.div(i||(i=(0,c.Z)(["\n  font-weight: 600;\n  margin: 0 0 3px;\n  color: ",";\n  text-transform: uppercase;\n"])),d.Z.goosefeatherGray),p=s.ZP.div(o||(o=(0,c.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),x=r(6417),h=function(n){var e=n.title,r=n.children;return(0,x.jsxs)(u,(0,a.Z)((0,a.Z)({},n),{},{children:[(0,x.jsx)(l,{children:e}),(0,x.jsx)(p,{children:r})]}))}},1359:function(n,e,r){r.d(e,{Z:function(){return D}});var t,i,o,a,c,s,d,u,l,p,x,h,f,g=r(1413),b=r(885),m=r(7313),Z=r(2668),v=r(1677),k=r(6069),w=r(2206),j=r(6947),P=r(168),y=r(3115),I=r(1237),A=y.ZP.div(t||(t=(0,P.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),S=(y.ZP.div(i||(i=(0,P.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),y.ZP.div(o||(o=(0,P.Z)(["\n  position: relative;\n  border-bottom: solid 1px #c4c4c4;\n"])))),C=(y.ZP.div(a||(a=(0,P.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),y.ZP.input(c||(c=(0,P.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding}))),E=y.ZP.div(s||(s=(0,P.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),z=y.ZP.p(d||(d=(0,P.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),M=(y.ZP.div(u||(u=(0,P.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),y.ZP.div(l||(l=(0,P.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),N=y.ZP.div(p||(p=(0,P.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),I.Z.secondary,I.Z.rgbaPrimary),R=y.ZP.p(x||(x=(0,P.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),q=y.ZP.div(h||(h=(0,P.Z)(["\n  margin: 10px auto;\n"]))),V=(y.ZP.input(f||(f=(0,P.Z)(["\n  display: none;\n"]))),r(7123)),O=r(6417),B=function(n){var e,r,t=n.roles,i=n.notBeCustomer,o=n.isError,a=n.isSelectOne,c=n.searchPlaceholder,s=(n.searchGuide,n.onClickSelectResultItem),d=(n.emptySearchResultMessage,["node.fullName","node.address","node.phoneNumber"]),u=(0,m.useState)(""),l=(0,b.Z)(u,2),p=l[0],x=l[1],h=(0,Z.a)(V.q6,{variables:{filter:(0,g.Z)((0,g.Z)({text:p},t&&{roles:t}),i&&{notBeCustomer:i})},skip:!p}),f=h.data,P=h.fetchMore,y=f&&(null===(e=f.accounts)||void 0===e?void 0:e.edges)||[],I=f&&(null===(r=f.accounts)||void 0===r?void 0:r.pageInfo)||{},B=I.hasNextPage,D=(0,m.useState)(!1),G=(0,b.Z)(D,2),K=G[0],L=G[1],_=(0,m.useRef)(null),Q=(0,m.useRef)(null),X=K?1:0,F=K?"500px":"0",J=K?"block":"none",T=K?"0 0 0 10px":"0 0 0 24px",W=K?"30px":"calc(100% - 20px)",H=function(n){s(n),a&&L(!1)},U=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(S,{children:[(0,O.jsxs)("div",{onClick:function(){L(!0),_.current&&_.current.focus()},children:[(0,O.jsx)(C,{ref:_,value:p,disabled:!K,placeholder:c,searchinputpadding:T,onChange:function(n){return x(n.target.value)}}),(0,O.jsx)(E,{searchiconright:W,children:"\ud83d\udd0e"}),(0,O.jsx)(z,{upiconopacity:X,onClick:function(){L(!1),x("")},children:"\u2716"})]}),(0,O.jsxs)(M,{modalheight:F,modaldisplay:J,children:[(0,O.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),function(){var n=y&&0===y.length;return n?null:y.map((function(n,e){var r=d.map((function(e){return(0,k.tO)(n,e)})),t="";return r.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,O.jsx)(N,{onClick:function(){return H(n)},children:(0,O.jsx)(R,{children:t})},e)}))}(),!!B&&(0,O.jsx)(q,{children:(0,O.jsx)(v.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){P({variables:{cursor:I.endCursor},updateQuery:function(n,e){var r=e.fetchMoreResult;return(0,w.d0)("accounts",r,n)}})}})})]})]}),(0,O.jsx)(j.Z,{isError:o})]});return(0,m.useEffect)((function(){var n=function(n){Q.current&&!Q.current.contains(n.target)&&(L(!1),x(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[Q]),(0,O.jsx)(A,{ref:Q,children:U})};B.defaultProps={searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var D=B},2180:function(n,e,r){r.d(e,{Z:function(){return c}});r(7313);var t,i=r(168),o=r(3115).ZP.p(t||(t=(0,i.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),a=r(6417),c=function(n){var e=n.label;return(0,a.jsx)(o,{children:e})}},9673:function(n,e,r){r.d(e,{Z:function(){return f}});var t,i,o=r(1413),a=(r(7313),r(2180)),c=r(6947),s=r(168),d=r(3115),u=r(1237),l=d.ZP.div(t||(t=(0,s.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"5px 0 0 5px"})),p=d.ZP.input(i||(i=(0,s.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  padding: 2px 5px;\n  font-weight: 300;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),u.Z.lightWhite,u.Z.secondary,(function(n){return n.textAlign?n.textAlign:"left"})),x=r(6417),h=function(n){var e=n.label,r=n.name,t=n.isError,i=n.errorMessage,s=n.register,d=n.validations,u=n.isInline,h=n.width,f=n.margin,g=u?"auto":h;return(0,x.jsxs)(l,{width:g,margin:f,children:[e&&(0,x.jsx)(a.Z,{label:e}),(0,x.jsx)(p,(0,o.Z)((0,o.Z)({},s(r,d)),n)),(0,x.jsx)(c.Z,{isError:t,errorMessage:i})]})};h.defaultProps={type:"text",validations:{},register:function(){}};var f=h}}]);