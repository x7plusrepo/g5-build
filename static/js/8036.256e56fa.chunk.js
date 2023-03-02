"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8036,8912,8026],{9146:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(1413),o=(t(7313),t(168)),a=t(3115),c=t(1237),u=a.ZP.button(r||(r=(0,o.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),c.Z.rgbaBlack),s=t(6417),d=function(n){var e=n.label;return(0,s.jsx)(u,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m"};var l=d},1300:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o=t(1413),a=t(5987),c=(t(7313),t(168)),u=t(3115),s=u.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n"])),(function(n){return n.width?n.width:"50%"})),d=u.ZP.button(i||(i=(0,c.Z)(["\n  width: 90%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 5px 20px;\n  border-radius: 20px;\n  border: 2px solid #fff;\n  text-transform: uppercase;\n  background-color: transparent;\n"]))),l=t(6417),p=["label","width"],f=function(n){var e=n.label,t=n.width,r=(0,a.Z)(n,p);return(0,l.jsx)(s,{width:t,children:(0,l.jsx)(d,(0,o.Z)((0,o.Z)({},r),{},{children:e}))})};f.defaultProps={onClick:function(){}};var x=f},1677:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(1413),o=(t(7313),t(168)),a=t(3115),c=t(1237),u=a.ZP.button(r||(r=(0,o.Z)(["\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: ",";\n  padding: ",";\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:c.Z.primary})),s=t(6417),d=function(n){var e=n.label;return(0,s.jsx)(u,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var l=d},2262:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(1413),o=(t(7313),t(168)),a=t(3115),c=t(1237),u=a.ZP.button(r||(r=(0,o.Z)(["\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 5px;\n  height: fit-content;\n  color: ",";\n  margin: ",";\n  padding: ",";\n  font-weight: ",";\n  background-color: ",";\n"])),c.Z.black,(function(n){return n.margin}),(function(n){return n.padding}),(function(n){return n.fontWeight}),(function(n){return n.bgColor?n.bgColor:c.Z.secondary})),s=t(6417),d=function(n){var e=n.label;return(0,s.jsx)(u,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){},margin:"5px",padding:"3px 7px"};var l=d},6226:function(n,e,t){t.d(e,{Z:function(){return d}});t(7313);var r,i=t(1677),o=t(2262),a=t(168),c=t(3115).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  margin: 10px 10px 20px auto;\n"]))),u=t(6417),s=function(n){var e=n.updateLabel,t=n.cancelLabel,r=n.isDisabledUpdate,a=n.isDisabledCancel,s=n.onClickUpdate,d=n.onClickCancel;return(0,u.jsxs)(c,{children:[(0,u.jsx)(i.Z,{label:e,onClick:s,disabled:r}),(0,u.jsx)(o.Z,{disabled:a,label:t,margin:"0 0 0 10px",onClick:d})]})};s.defaultProps={updateLabel:"C\u1eadp nh\u1eadt",cancelLabel:"Hu\u1ef7",isDisabledUpdate:!1,isDisabledCancel:!1,onClickUpdate:function(){},onClickCancel:function(){}};var d=s},6947:function(n,e,t){t.d(e,{Z:function(){return p}});t(7313);var r,i,o=t(168),a=t(3115),c=a.ZP.div(r||(r=(0,o.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),u=a.ZP.p(i||(i=(0,o.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),s=t(3070),d=t(6417),l=function(n){var e=n.isError,t=n.errorMessage,r=e?"translateY(0)":"translateY(110%)";return(0,d.jsx)(c,{children:(0,d.jsx)(u,{isError:e,textTransform:r,children:t})})};l.defaultProps={isError:!1,errorMessage:s.ug.REQUIRED};var p=l},5291:function(n,e,t){t.d(e,{Z:function(){return f}});t(7313);var r,i,o,a=t(168),c=t(3115),u=c.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n  width: fit-content;\n  height: 25px;\n  margin: 0 5px 5px 0;\n  padding: 0 25px 0 5px;\n  display: inline-block;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n"]))),s=c.ZP.p(i||(i=(0,a.Z)(["\n  font-size: 12px;\n  line-height: 25px;\n"]))),d=c.ZP.p(o||(o=(0,a.Z)(["\n  top: 5px;\n  right: 5px;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  padding: 0 0 0 3px;\n  border-left: solid 1px #c4c4c4;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),l=t(6417),p=function(n){var e=n.itemLabel,t=n.beRemovedItem,r=n.handleRemove;return(0,l.jsxs)(u,{children:[(0,l.jsx)(s,{children:e}),(0,l.jsx)(d,{onClick:function(){return r(t)},children:"\u2715"})]})};p.defaultProps={itemLabel:"n/a",handleRemove:function(){}};var f=p},9673:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o=t(1413),a=(t(7313),t(2180)),c=t(6947),u=t(168),s=t(3115),d=t(1237),l=s.ZP.div(r||(r=(0,u.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"5px 0 0 5px"})),p=s.ZP.input(i||(i=(0,u.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),f=t(6417),x=function(n){var e=n.label,t=n.name,r=n.isError,i=n.errorMessage,u=n.register,s=n.validations,d=n.isInline,x=n.width,h=n.margin,g=d?"auto":x;return(0,f.jsxs)(l,{width:g,margin:h,children:[e&&(0,f.jsx)(a.Z,{label:e}),(0,f.jsx)(p,(0,o.Z)((0,o.Z)({},u(t,s)),n)),(0,f.jsx)(c.Z,{isError:r,errorMessage:i})]})};x.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){}};var h=x},8982:function(n,e,t){t.r(e),t.d(e,{default:function(){return Gn}});var r,i,o,a,c,u,s,d,l,p,f,x,h=t(4165),g=t(5987),b=t(5861),m=t(2982),Z=t(1413),v=t(885),j=t(7313),y=t(3222),w=t(5627),k=t(790),P=t(5414),S=t(1359),C=t(6069),E=t(6881),I=t(6879),O=t(1677),N=t(2262),D=(t(1300),t(9673)),L=t(2668),R=t(2180),z=t(5291),_=t(6947),M=t(6226),A=t(168),T=t(3115),U=T.ZP.div(r||(r=(0,A.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),Q=T.ZP.div(i||(i=(0,A.Z)(["\n  position: relative;\n  border-bottom: solid 1px #c4c4c4;\n  display: ",";\n"])),(function(n){return n.isSelectedOne?"none":"block"})),F=T.ZP.div(o||(o=(0,A.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),V=T.ZP.input(a||(a=(0,A.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),q=T.ZP.div(c||(c=(0,A.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),H=T.ZP.p(u||(u=(0,A.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),Y=T.ZP.div(s||(s=(0,A.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),J=T.ZP.div(d||(d=(0,A.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  padding: 20px;\n  overflow-y: auto;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay})),G=T.ZP.div(l||(l=(0,A.Z)(["\n  display: flex;\n  margin: 5px 0 0 0;\n  padding: 3px 10px;\n  justify-content: space-between;\n  border-bottom: solid 1px #c4c4c4;\n"]))),W=T.ZP.p(p||(p=(0,A.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),B=T.ZP.div(f||(f=(0,A.Z)(["\n  margin: 10px auto;\n"]))),X=T.ZP.input(x||(x=(0,A.Z)(["\n  display: none;\n"]))),K=t(2206),$=t(6417),nn=function(n){var e,t,r=n.addLabel,i=n.removeLabel,o=n.currentListLabel,a=n.initCurrentList,c=n.originalCurrentList,u=n.searchPlaceholder,s=n.checkIsDisabledAttribute,d=n.selectedItemAttributes,l=n.resultItemAttributes,p=n.searchGuide,f=n.handleUpdateAddNewList,x=n.handleUpdateRemoveList,g=n.searchQueryStatement,y=n.searchQueryPathName,w=n.emptySearchResultMessage,k=n.register,P=n.isError,S=n.errorMessage,E=n.fieldName,I=n.setFieldValue,N=n.clearFormErrors,D=n.validations,A=n.isSelectOne,T=(0,j.useState)(""),nn=(0,v.Z)(T,2),en=nn[0],tn=nn[1],rn=(0,L.a)(g,{variables:{query:{text:en||""}},skip:!en}),on=rn.data,an=rn.fetchMore,cn=on&&(null===(e=on[y])||void 0===e?void 0:e.edges)||[],un=on&&(null===(t=on[y])||void 0===t?void 0:t.pageInfo)||{},sn=un.hasNextPage,dn=(0,j.useState)([]),ln=(0,v.Z)(dn,2),pn=ln[0],fn=ln[1],xn=(0,j.useState)(!1),hn=(0,v.Z)(xn,2),gn=hn[0],bn=hn[1],mn=(0,j.useState)(a),Zn=(0,v.Z)(mn,2),vn=Zn[0],jn=Zn[1],yn=(0,j.useState)([]),wn=(0,v.Z)(yn,2),kn=wn[0],Pn=wn[1],Sn=(0,j.useState)(!1),Cn=(0,v.Z)(Sn,2),En=Cn[0],In=Cn[1],On=(0,j.useState)(!1),Nn=(0,v.Z)(On,2),Dn=Nn[0],Ln=Nn[1],Rn=(0,j.useState)(!1),zn=(0,v.Z)(Rn,2),_n=zn[0],Mn=zn[1],An=!!en,Tn=0===vn.length,Un=A&&1===pn.length,Qn=(0,j.useRef)(null),Fn=(0,j.useRef)(null),Vn=gn?1:0,qn=gn?"500px":"0",Hn=gn?"none":"block",Yn=gn?"block":"none",Jn=gn?"0 0 0 10px":"0 0 0 24px",Gn=gn?"30px":"calc(100% - 20px)",Wn=function(n){var e=1===vn.length;if(gn&&(bn(!1),tn("")),e)Mn(!0);else{Dn||Ln(!0);var t=(0,m.Z)(new Set([].concat((0,m.Z)(kn),[n])));Pn(t)}},Bn=function(n){var e=d.map((function(e){return(0,C.tO)(n,e)})),t="";return e.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,$.jsx)(z.Z,{itemLabel:t,beRemovedItem:n,handleRemove:Wn})},Xn=(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(R.Z,{label:o}),(0,$.jsx)(U,{children:vn.map((function(n,e){return(0,$.jsx)(j.Fragment,{children:Bn(n)},e)}))}),(0,$.jsx)(_.Z,{isError:_n})]}),Kn=function(n){var e=kn.filter((function(e){return JSON.stringify(e)!==JSON.stringify(n)})),t=[].concat((0,m.Z)(vn),[n]),r=0===e.length,i=t.length>1;r&&Ln(!1),i&&Mn(!1),Pn(e),jn(t)},$n=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(kn);case 2:(e=n.sent)&&e.data&&(Ln(!1),Pn([]),Mn(!1));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(n){var e=d.map((function(e){return(0,C.tO)(n,e)})),t="";return e.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,$.jsx)(z.Z,{itemLabel:t,beRemovedItem:n,handleRemove:Kn})},ee=(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(R.Z,{label:i}),(0,$.jsx)(U,{children:kn.map((function(n,e){return(0,$.jsx)(j.Fragment,{children:ne(n)},e)}))}),(0,$.jsx)(M.Z,{onClickUpdate:$n,onClickCancel:function(){Ln(!1),Pn([]),Mn(!1),jn(a)}})]}),te=function(n){var e=pn.filter((function(e){return JSON.stringify(e)!==JSON.stringify(n)}));fn(e)},re=pn.map((function(n,e){var t=d.map((function(e){return(0,C.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,$.jsx)(z.Z,{beRemovedItem:n,itemLabel:r,handleRemove:te},e)})),ie=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(pn);case 2:(e=n.sent)&&e.data&&(fn([]),In(!1),bn(!1),tn(""));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),oe=(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Y,{children:re}),En&&!!pn.length&&(0,$.jsx)(M.Z,{onClickUpdate:ie,onClickCancel:function(){fn([]),In(!1),bn(!1),tn("")}})]}),ae=(0,$.jsxs)($.Fragment,{children:[r&&(0,$.jsx)(R.Z,{label:r}),!!pn.length&&oe,(0,$.jsxs)(Q,{isSelectedOne:Un,children:[(0,$.jsx)(F,{onClick:function(){bn(!0),Qn.current&&Qn.current.focus()},searchinputmaskdisplay:Hn}),(0,$.jsxs)("div",{children:[(0,$.jsx)(V,{ref:Qn,value:en,disabled:!gn,placeholder:u,searchinputpadding:Jn,onChange:function(n){return tn(n.target.value)}}),(0,$.jsx)(q,{searchiconright:Gn,children:"\ud83d\udd0e"}),(0,$.jsx)(H,{upiconopacity:Vn,onClick:function(){bn(!1),tn("")},children:"\u2716"})]}),(0,$.jsxs)(J,{modalheight:qn,modaldisplay:Yn,children:[(0,$.jsx)(R.Z,{label:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm"}),function(){var n=cn&&0===cn.length,e=An?w:p;return n?(0,$.jsx)(G,{children:(0,$.jsx)(W,{children:e})}):cn.map((function(n,e){var t=function(n){if(Un)return!0;var e=(0,C.tO)(n,s),t=pn.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(n)}));return c.includes(e)||-1!==t}(n),r=l.map((function(e){return(0,C.tO)(n,e)})),i="";return r.forEach((function(n,e){i+=e>0?" - ".concat(n):n})),(0,$.jsxs)(G,{children:[(0,$.jsx)(W,{children:i}),(0,$.jsx)(O.Z,{label:"Ch\u1ecdn",size:"small",disabled:t,onClick:function(){return e=n,fn([].concat((0,m.Z)(pn),[e])),void(En||Tn||In(!0));var e}})]},e)}))}(),!!sn&&(0,$.jsx)(B,{children:(0,$.jsx)(O.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){an({variables:{cursor:un.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,K.d0)(y,t,n)}})}})})]})]}),(0,$.jsx)(_.Z,{isError:P,errorMessage:S})]});return(0,j.useEffect)((function(){I(E,pn),pn.length&&N(E)}),[pn,a]),(0,j.useEffect)((function(){var n=a.filter((function(n){return-1===kn.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(n)}))}));jn(n)}),[kn,a]),(0,j.useEffect)((function(){var n=function(n){Fn.current&&!Fn.current.contains(n.target)&&(bn(!1),tn(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[Fn]),(0,$.jsxs)("div",{style:{width:"100%"},ref:Fn,children:[!Tn&&Xn,Dn&&ee,!Dn&&ae,(0,$.jsx)(X,(0,Z.Z)({},k(E,D)))]})};nn.defaultProps={fieldName:"",isError:!1,validations:{},register:function(){},initCurrentList:[],originalCurrentList:[],setFieldValue:function(){},clearFormErrors:function(){},searchQueryPathName:"",resultItemAttributes:[],selectedItemAttributes:[],handleUpdateAddNewList:function(){},handleUpdateRemoveList:function(){},checkIsDisabledAttribute:"",currentListLabel:"Danh s\xe1ch hi\u1ec7n t\u1ea1i",addLabel:"",removeLabel:"Danh s\xe1ch s\u1ebd b\u1ecb xo\xe1",searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var en,tn=nn,rn=T.ZP.div(en||(en=(0,A.Z)(["\n  width: 100%;\n"]))),on=t(7123),an=function(n){var e=n.isSelectOne,t=n.fieldName,r=n.errors,i=n.register,o=n.setValue,a=n.clearErrors;return(0,$.jsx)(rn,{children:(0,$.jsx)(tn,{isSelectOne:e,searchGuide:"Nh\u1eadp m\xe3/t\xean \u0111\u1ec3 t\xecm ki\u1ebfm...",searchPlaceholder:"Nh\u1eadp m\xe3/t\xean \u0111\u1ec3 t\xecm ki\u1ebfm...",checkIsDisabledAttribute:"node.code",searchQueryStatement:on.i8,searchQueryPathName:"searchNormalProducts",resultItemAttributes:["node.code","node.name[0].showText","node.netUnitValue","node.unitString"],selectedItemAttributes:["node.code","node.name[0].showText","node.netUnitValue","node.unitString"],fieldName:t,register:i,setFieldValue:o,clearFormErrors:a,validations:{required:!0},isError:!!r[t]})})};an.defaultProps={isSelectOne:!1,fieldName:"fieldName",errors:{},register:function(){},setValue:function(){},clearErrors:function(){}};var cn,un,sn,dn,ln,pn,fn,xn,hn,gn,bn,mn,Zn,vn,jn,yn,wn,kn,Pn,Sn,Cn,En,In,On,Nn=t(9146),Dn=t(1237),Ln=T.ZP.div(cn||(cn=(0,A.Z)(["\n  font-size: 12px;\n  padding: 10px 0 120px;\n  background-color: ",";\n"])),Dn.Z.bgGray),Rn=T.ZP.div(un||(un=(0,A.Z)(["\n  margin: 20px 0;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),zn=T.ZP.p(sn||(sn=(0,A.Z)(["\n  width: 90px;\n  font-size: 12px;\n  max-width: 200px;\n"]))),_n=(T.ZP.input(dn||(dn=(0,A.Z)(["\n  width: 100%;\n"]))),T.ZP.div(ln||(ln=(0,A.Z)(["\n  display: flex;\n  margin: 15px auto;\n  width: fit-content;\n  justify-content: center;\n  border: solid 1px ",";\n"])),Dn.Z.primary),T.ZP.div(pn||(pn=(0,A.Z)(["\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  border-left: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.activeColor.textColor}),(function(n){return n.borderLeftColor}),(function(n){return n.activeColor.backgroundColor})),T.ZP.div(fn||(fn=(0,A.Z)(["\n  margin: 20px 10px;\n  position: relative;\n  background-color: #fff;\n  padding: 15px 10px 10px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"])))),Mn=T.ZP.img(xn||(xn=(0,A.Z)(["\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n  margin: 0 10px 0 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),An=T.ZP.div(hn||(hn=(0,A.Z)(["\n  padding: 10px 0 0;\n  position: relative;\n"]))),Tn=T.ZP.div(gn||(gn=(0,A.Z)(["\n  top: -10px;\n  right: -5px;\n  position: absolute;\n"]))),Un=(T.ZP.div(bn||(bn=(0,A.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgb(0 0 0 / 12%);\n"]))),T.ZP.div(mn||(mn=(0,A.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n"])))),Qn=T.ZP.div(Zn||(Zn=(0,A.Z)(["\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n"]))),Fn=T.ZP.p(vn||(vn=(0,A.Z)(["\n  font-weight: 700;\n"]))),Vn=(T.ZP.div(jn||(jn=(0,A.Z)(["\n  text-align: center;\n  width: ","%;\n"])),100/3),T.ZP.p(yn||(yn=(0,A.Z)(["\n  margin: 0 0 5px;\n"]))),T.ZP.span(wn||(wn=(0,A.Z)(["\n  color: #fff;\n  padding: 3px 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  background-color: ",";\n"])),(function(n){return n.backgroundColor})),T.ZP.div(kn||(kn=(0,A.Z)(["\n  display: flex;\n  padding: 0 0 2px;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"]))),T.ZP.p(Pn||(Pn=(0,A.Z)(["\n  margin: 5px 0;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  width: fit-content;\n  background-color: rgba(120, 120, 120, 0.5);\n"]))),T.ZP.div(Sn||(Sn=(0,A.Z)(["\n  top: 0;\n  right: 10px;\n  color: #777;\n  font-size: 20px;\n  cursor: pointer;\n  width: fit-content;\n  position: absolute;\n"]))),T.ZP.div(Cn||(Cn=(0,A.Z)(["\n  top: 20px;\n  z-index: 7;\n  right: 10px;\n  cursor: pointer;\n  padding: 5px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #fff;\n  display: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),(function(n){return n.display})),T.ZP.p(En||(En=(0,A.Z)(["\n  padding: 5px;\n  font-size: 12px;\n  &:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n  &:nth-child(3): {\n    color: red;\n  }\n"]))),T.ZP.input(In||(In=(0,A.Z)(["\n  width: 70px;\n  border: none;\n  margin: 0 5px;\n  text-align: right;\n  border-bottom: 1px solid #000;\n  color: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.textColor}))),qn=(T.ZP.div(On||(On=(0,A.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 35%;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),Dn.Z.rgbaBlack),t(3454)),Hn=t(2153),Yn=["__typename","_id"],Jn=function(n){var e,t,r=n.register,i=n.errors,o=n.productItem,a=n.selectedProducts,c=n.setSelectedProducts,u=o||{},s=u.importedQuantity,d=u.code,l=u.imgUri,p=u.name,f=u.netUnitValue,x=u.unitString,h=(0,j.useState)(s||0),g=(0,v.Z)(h,2),b=g[0],m=g[1],y=b>=0?Dn.Z.primary:Dn.Z.lightRed;return(0,$.jsx)(_n,{children:(0,$.jsxs)(An,{children:[(0,$.jsx)(Tn,{children:(0,$.jsx)(N.Z,{label:"Xo\xe1",onClick:function(){var n=a.filter((function(n){return n.code!==d}));c(n)}})}),(0,$.jsxs)(Un,{children:[(0,$.jsx)(Mn,{src:l}),(0,$.jsxs)("div",{style:{width:"100%"},children:[(0,$.jsx)(Un,{children:(0,$.jsxs)(P.Z,{fontSize:12,fontWeight:700,children:[d," - ",(0,E.Z)(p)]})}),(0,$.jsx)(Un,{children:(0,$.jsxs)(P.Z,{fontSize:12,fontStyle:"italic",children:[f,x]})})]})]}),(0,$.jsx)("hr",{}),(0,$.jsxs)(Un,{children:[(0,$.jsx)(zn,{children:"S\u1ed1 l\u01b0\u1ee3ng nh\u1eadp:"}),(0,$.jsxs)("div",{children:[(0,$.jsx)(N.Z,{label:"-",onClick:function(){var n=b-1;if(n>=0){m(n);var e=a.map((function(e){return e.code===d?(e.importedQuantity=n,e):e}));c(e)}}}),(0,$.jsx)(Vn,{min:0,type:"number",value:b,textColor:y,onChange:function(n){var e=parseInt(n.target.value,10),t=0===e||isNaN(e);if(e>0){m(e);var r=a.map((function(n){return n.code===d?(0,Z.Z)((0,Z.Z)({},n),{},{importedQuantity:e}):n}));c(r)}else if(t){m(0);var i=a.map((function(n){return n.code===d?(0,Z.Z)((0,Z.Z)({},n),{},{importedQuantity:0}):n}));c(i)}}}),(0,$.jsx)(O.Z,{label:"+",onClick:function(){var n=b+1;m(n);var e=a.map((function(e){return e.code===d?(0,Z.Z)((0,Z.Z)({},e),{},{importedQuantity:n}):e}));c(e)}})]})]}),(0,$.jsxs)(Un,{children:[(0,$.jsx)(zn,{children:"HSD:"}),(0,$.jsx)(D.Z,{type:"date",name:"".concat(d,".expirationDate"),register:r,isError:!(null===(e=i[d])||void 0===e||!e.expirationDate),validations:{required:!0}})]}),(0,$.jsxs)(Un,{children:[(0,$.jsx)(zn,{children:"NSX:"}),(0,$.jsx)(D.Z,{type:"date",name:"".concat(d,".dateOfManufacture"),register:r,isError:!(null===(t=i[d])||void 0===t||!t.dateOfManufacture),validations:{required:!0}})]})]})})},Gn=function(n){var e=(0,C.xE)(),t=(0,w.cI)({defaultValues:{importedDate:e}}),r=t.register,i=t.setValue,o=t.handleSubmit,a=t.formState.errors,c=(0,y.I0)(),u=(0,y.v9)((function(n){return n.authReducer})).viewerQuery,s=(0,j.useState)([]),d=(0,v.Z)(s,2),l=d[0],p=d[1],f=(0,j.useState)({node:u}),x=(0,v.Z)(f,2),Z=x[0],P=x[1];r("implementer",{required:!Z});var E=(0,k.D)(qn.qe,{refetchQueries:[{query:on.ze},"GET_WAREHOUSE_INVENTORY",{query:on.BQ},"GET_IMPORTED_PRODUCTS"]}),N=(0,v.Z)(E,1)[0],L=Z?(0,$.jsxs)(Un,{children:[(0,$.jsxs)(Fn,{children:[Z.node.fullName," -"," ",Z.node.phoneNumber]}),(0,$.jsx)(O.Z,{label:"\u0110\u1ed5i",onClick:function(){P(void 0),i("implementer",void 0)}})]}):(0,$.jsx)(S.Z,{isSelectOne:!0,notBeCustomer:!0,isError:!!a.implementer,onClickSelectResultItem:function(n){i("implementer",n),P(n)}}),R=(0,$.jsxs)(Rn,{children:[(0,$.jsxs)(Qn,{children:[(0,$.jsx)(zn,{children:"Ng\u01b0\u1eddi nh\u1eadp:"}),L]}),(0,$.jsxs)(Un,{children:[(0,$.jsx)(zn,{children:"Ng\xe0y nh\u1eadp:"}),(0,$.jsx)(D.Z,{type:"date",name:"importedDate",register:r,isError:!!a.importedDate,validations:{required:!0}})]})]}),z=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(e){var t,r,i,o,a,u,s,d,p,f,x,b,m,v,j;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(t=e.importedDate,r=[],i=0;i<l.length;i++)o=l[i],a=o.importedQuantity,u=o.orderNumber,s=o.code,d=o.netUnitValue,p=o.unitString,f=o.name,a&&(x=new Date(e[s].expirationDate).toISOString(),b=new Date(e[s].dateOfManufacture).toISOString(),m=f.map((function(n){n.__typename,n._id;return(0,g.Z)(n,Yn)})),v={quantity:a,orderNumber:u,productCode:s,netUnitValue:d,unitString:p,productName:m,expirationDate:x,dateOfManufacture:b},r.push(v));return j={beImportedProducts:r,implementerAccountId:Z.node._id,importedDate:new Date(t).toISOString()},n.next=6,N({variables:{data:j}});case 6:n.sent.data&&c((0,Hn.mm)());case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,$.jsxs)(Ln,{children:[R,l.map((function(n,e){return(0,$.jsx)(Jn,{errors:a,itemIndex:e,register:r,productItem:n,selectedProducts:l,setSelectedProducts:p},"".concat(n.code,"-").concat(e))})),(0,$.jsxs)(Un,{style:{margin:10},children:[(0,$.jsx)(zn,{style:{width:90},children:"S\u1ea3n ph\u1ea9m:"}),(0,$.jsx)(I.Z,{isSelectOne:!0,selectedList:l,searchBackgroundColor:Dn.Z.white,searchPlaceholder:"Ch\u1ecdn s\u1ea3n ph\u1ea9m mu\u1ed1n nh\u1eadp",onClickSelectResultItem:function(n){-1===l.findIndex((function(e){return e.code===n.node.code}))&&p([].concat((0,m.Z)(l),[n.node]))}})]}),(0,$.jsx)(Nn.Z,{label:"X\xe1c nh\u1eadn",onClick:o(z)})]})}},6881:function(n,e,t){var r=t(2163);e.Z=function(n){if(Array.isArray(n)){var e,t=n||[],i=r.t.getState().commonReducer,o=i&&(null===(e=i.activeLanguage)||void 0===e?void 0:e.locale)||"vi";return(t.find((function(n){return n&&n.locale===o}))||{}).showText||""}return""}},6069:function(n,e,t){t.d(e,{RX:function(){return a},dh:function(){return o},tO:function(){return i},xE:function(){return u},zZ:function(){return c}});var r=t(3070),i=function(n,e){if(e){for(var t=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,i=t.length;r<i;++r){var o=t[r];if(!(o in n))return;n=n[o]}return n}},o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(n),r=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),a=t.getHours(),c=t.getMinutes();return o=o<10?"0"+o:o,i=i<10?"0"+i:i,a=a<10?"0"+a:a,c=c<10?"0"+c:c,e?"".concat(o,"/").concat(i,"/").concat(r," - ").concat(a,":").concat(c):"".concat(o,"/").concat(i,"/").concat(r)},a=function(n,e,t){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:t,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},c=function(n,e){return isNaN(e)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(e,10)).join(" "):n},u=function(n){var e=(n||{}).getTimeTogether,t=new Date,r=function(){var n=t.getHours();return n>9?n:"0".concat(n)}(),i=function(){var n=t.getMinutes();return n>9?n:"0".concat(n)}(),o=function(){var n=t.getDate();return n>9?n:"0".concat(n)}(),a=function(){var n=t.getMonth()+1;return n>9?n:"0".concat(n)}(),c=t.getFullYear(),u="".concat(c,"-").concat(a,"-").concat(o),s="".concat(c,"-").concat(a,"-").concat(o,"T").concat(r,":").concat(i);return e?s:u}},2206:function(n,e,t){t.d(e,{FM:function(){return a},d0:function(){return o}});var r=t(4942),i=t(2982);function o(n,e,t){var o=e[n],a=o.edges,c=o.pageInfo;return a.length?(0,r.Z)({},n,{__typename:t[n].__typename,edges:[].concat((0,i.Z)(t[n].edges),(0,i.Z)(a)),pageInfo:c}):t}function a(n,e,t,o,a,c,u){var s=o[n],d=s.edges,l=s.pageInfo,p=[],f=!1;if(t.data){var x=t.data[e],h={node:x},g=!a||a(x);f=g,g&&(p=u?u(d,x):c?[h].concat((0,i.Z)(d)):[].concat((0,i.Z)(d),[h]))}return f?(0,r.Z)({},n,{__typename:o[n].__typename,edges:p,pageInfo:l}):o}},5987:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3366);function i(n,e){if(null==n)return{};var t,i,o=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}},3306:function(n,e,t){t.d(e,{t:function(){return s}});var r=t(6797),i=t(7313),o=t(345),a=t(2668),c=t(1511),u=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function s(n,e){var t=(0,a.A)((0,c.x)(e&&e.client),n),s=(0,i.useRef)(),d=s.current?(0,o.J)(e,s.current):e,l=t.useQuery((0,r.pi)((0,r.pi)({},d),{skip:!s.current})),p=l.observable.options.initialFetchPolicy||t.getDefaultFetchPolicy(),f=Object.assign(l,{called:!!s.current}),x=(0,i.useMemo)((function(){for(var n={},e=function(e){var r=f[e];n[e]=function(){return s.current||(s.current=Object.create(null),t.forceUpdate()),r.apply(this,arguments)}},r=0,i=u;r<i.length;r++){e(i[r])}return n}),[]);return Object.assign(f,x),[(0,i.useCallback)((function(n){s.current=n?(0,r.pi)((0,r.pi)({},n),{fetchPolicy:n.fetchPolicy||p}):{fetchPolicy:p};var e=t.asyncUpdate().then((function(n){return Object.assign(n,x)}));return e.catch((function(){})),e}),[]),f]}}}]);