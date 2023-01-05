"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2292],{6226:function(n,e,t){t.d(e,{Z:function(){return u}});t(7313);var r,i=t(1677),o=t(2262),a=t(168),s=t(3115).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  margin: 10px 10px 20px auto;\n"]))),c=t(6417),l=function(n){var e=n.updateLabel,t=n.cancelLabel,r=n.isDisabledUpdate,a=n.isDisabledCancel,l=n.onClickUpdate,u=n.onClickCancel;return(0,c.jsxs)(s,{children:[(0,c.jsx)(i.Z,{label:e,onClick:l,disabled:r}),(0,c.jsx)(o.Z,{disabled:a,label:t,margin:"0 0 0 10px",onClick:u})]})};l.defaultProps={updateLabel:"C\u1eadp nh\u1eadt",cancelLabel:"Hu\u1ef7",isDisabledUpdate:!1,isDisabledCancel:!1,onClickUpdate:function(){},onClickCancel:function(){}};var u=l},2180:function(n,e,t){t.d(e,{Z:function(){return s}});t(7313);var r,i=t(168),o=t(3115).ZP.p(r||(r=(0,i.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),a=t(6417),s=function(n){var e=n.label;return(0,a.jsx)(o,{children:e})}},5291:function(n,e,t){t.d(e,{Z:function(){return f}});t(7313);var r,i,o,a=t(168),s=t(3115),c=s.ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n  width: fit-content;\n  height: 25px;\n  margin: 0 5px 5px 0;\n  padding: 0 25px 0 5px;\n  display: inline-block;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n"]))),l=s.ZP.p(i||(i=(0,a.Z)(["\n  font-size: 12px;\n  line-height: 25px;\n"]))),u=s.ZP.p(o||(o=(0,a.Z)(["\n  top: 5px;\n  right: 5px;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  padding: 0 0 0 3px;\n  border-left: solid 1px #c4c4c4;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),d=t(6417),p=function(n){var e=n.itemLabel,t=n.beRemovedItem,r=n.handleRemove;return(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{children:e}),(0,d.jsx)(u,{onClick:function(){return r(t)},children:"\u2715"})]})};p.defaultProps={itemLabel:"n/a",handleRemove:function(){}};var f=p},1839:function(n,e,t){t.d(e,{Z:function(){return V}});var r,i,o,a,s,c,l,u,d,p,f,h,x=t(1413),b=t(4165),g=t(5861),v=t(2982),m=t(885),Z=t(7313),k=t(2668),j=t(2180),w=t(5291),y=t(6947),C=t(6226),P=t(6069),L=t(168),S=t(3115),E=S.ZP.div(r||(r=(0,L.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),I=S.ZP.div(i||(i=(0,L.Z)(["\n  position: relative;\n  border-bottom: solid 1px #c4c4c4;\n  display: ",";\n"])),(function(n){return n.isSelectedOne?"none":"block"})),N=S.ZP.div(o||(o=(0,L.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),O=S.ZP.input(a||(a=(0,L.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),R=S.ZP.div(s||(s=(0,L.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),A=S.ZP.p(c||(c=(0,L.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),F=S.ZP.div(l||(l=(0,L.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),U=S.ZP.div(u||(u=(0,L.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  padding: 20px;\n  overflow-y: auto;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay})),z=S.ZP.div(d||(d=(0,L.Z)(["\n  display: flex;\n  margin: 5px 0 0 0;\n  padding: 3px 10px;\n  justify-content: space-between;\n  border-bottom: solid 1px #c4c4c4;\n"]))),D=S.ZP.p(p||(p=(0,L.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),J=S.ZP.div(f||(f=(0,L.Z)(["\n  margin: 10px auto;\n"]))),M=S.ZP.input(h||(h=(0,L.Z)(["\n  display: none;\n"]))),Q=t(2206),q=t(1677),G=t(6417),K=function(n){var e,t,r=n.addLabel,i=n.removeLabel,o=n.currentListLabel,a=n.initCurrentList,s=n.originalCurrentList,c=n.searchPlaceholder,l=n.checkIsDisabledAttribute,u=n.selectedItemAttributes,d=n.resultItemAttributes,p=n.searchGuide,f=n.handleUpdateAddNewList,h=n.handleUpdateRemoveList,L=n.searchQueryStatement,S=n.searchQueryPathName,K=n.emptySearchResultMessage,V=n.register,_=n.isError,H=n.errorMessage,T=n.fieldName,B=n.setFieldValue,W=n.clearFormErrors,X=n.validations,Y=n.isSelectOne,$=(0,Z.useState)(""),nn=(0,m.Z)($,2),en=nn[0],tn=nn[1],rn=(0,k.a)(L,{variables:{query:{text:en||""}},skip:!en}),on=rn.data,an=rn.fetchMore,sn=on&&(null===(e=on[S])||void 0===e?void 0:e.edges)||[],cn=on&&(null===(t=on[S])||void 0===t?void 0:t.pageInfo)||{},ln=cn.hasNextPage,un=(0,Z.useState)([]),dn=(0,m.Z)(un,2),pn=dn[0],fn=dn[1],hn=(0,Z.useState)(!1),xn=(0,m.Z)(hn,2),bn=xn[0],gn=xn[1],vn=(0,Z.useState)(a),mn=(0,m.Z)(vn,2),Zn=mn[0],kn=mn[1],jn=(0,Z.useState)([]),wn=(0,m.Z)(jn,2),yn=wn[0],Cn=wn[1],Pn=(0,Z.useState)(!1),Ln=(0,m.Z)(Pn,2),Sn=Ln[0],En=Ln[1],In=(0,Z.useState)(!1),Nn=(0,m.Z)(In,2),On=Nn[0],Rn=Nn[1],An=(0,Z.useState)(!1),Fn=(0,m.Z)(An,2),Un=Fn[0],zn=Fn[1],Dn=!!en,Jn=0===Zn.length,Mn=Y&&1===pn.length,Qn=(0,Z.useRef)(null),qn=(0,Z.useRef)(null),Gn=bn?1:0,Kn=bn?"500px":"0",Vn=bn?"none":"block",_n=bn?"block":"none",Hn=bn?"0 0 0 10px":"0 0 0 24px",Tn=bn?"30px":"calc(100% - 20px)",Bn=function(n){var e=1===Zn.length;if(bn&&(gn(!1),tn("")),e)zn(!0);else{On||Rn(!0);var t=(0,v.Z)(new Set([].concat((0,v.Z)(yn),[n])));Cn(t)}},Wn=function(n){var e=u.map((function(e){return(0,P.tO)(n,e)})),t="";return e.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,G.jsx)(w.Z,{itemLabel:t,beRemovedItem:n,handleRemove:Bn})},Xn=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(j.Z,{label:o}),(0,G.jsx)(E,{children:Zn.map((function(n,e){return(0,G.jsx)(Z.Fragment,{children:Wn(n)},e)}))}),(0,G.jsx)(y.Z,{isError:Un})]}),Yn=function(n){var e=yn.filter((function(e){return JSON.stringify(e)!==JSON.stringify(n)})),t=[].concat((0,v.Z)(Zn),[n]),r=0===e.length,i=t.length>1;r&&Rn(!1),i&&zn(!1),Cn(e),kn(t)},$n=function(){var n=(0,g.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h(yn);case 2:(e=n.sent)&&e.data&&(Rn(!1),Cn([]),zn(!1));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(n){var e=u.map((function(e){return(0,P.tO)(n,e)})),t="";return e.forEach((function(n,e){t+=e>0?" - ".concat(n):n})),(0,G.jsx)(w.Z,{itemLabel:t,beRemovedItem:n,handleRemove:Yn})},ee=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(j.Z,{label:i}),(0,G.jsx)(E,{children:yn.map((function(n,e){return(0,G.jsx)(Z.Fragment,{children:ne(n)},e)}))}),(0,G.jsx)(C.Z,{onClickUpdate:$n,onClickCancel:function(){Rn(!1),Cn([]),zn(!1),kn(a)}})]}),te=function(n){var e=pn.filter((function(e){return JSON.stringify(e)!==JSON.stringify(n)}));fn(e)},re=pn.map((function(n,e){var t=u.map((function(e){return(0,P.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,G.jsx)(w.Z,{beRemovedItem:n,itemLabel:r,handleRemove:te},e)})),ie=function(){var n=(0,g.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(pn);case 2:(e=n.sent)&&e.data&&(fn([]),En(!1),gn(!1),tn(""));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),oe=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(F,{children:re}),Sn&&!!pn.length&&(0,G.jsx)(C.Z,{onClickUpdate:ie,onClickCancel:function(){fn([]),En(!1),gn(!1),tn("")}})]}),ae=(0,G.jsxs)(G.Fragment,{children:[r&&(0,G.jsx)(j.Z,{label:r}),!!pn.length&&oe,(0,G.jsxs)(I,{isSelectedOne:Mn,children:[(0,G.jsx)(N,{onClick:function(){gn(!0),Qn.current&&Qn.current.focus()},searchinputmaskdisplay:Vn}),(0,G.jsxs)("div",{children:[(0,G.jsx)(O,{ref:Qn,value:en,disabled:!bn,placeholder:c,searchinputpadding:Hn,onChange:function(n){return tn(n.target.value)}}),(0,G.jsx)(R,{searchiconright:Tn,children:"\ud83d\udd0e"}),(0,G.jsx)(A,{upiconopacity:Gn,onClick:function(){gn(!1),tn("")},children:"\u2716"})]}),(0,G.jsxs)(U,{modalheight:Kn,modaldisplay:_n,children:[(0,G.jsx)(j.Z,{label:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm"}),function(){var n=sn&&0===sn.length,e=Dn?K:p;return n?(0,G.jsx)(z,{children:(0,G.jsx)(D,{children:e})}):sn.map((function(n,e){var t=function(n){if(Mn)return!0;var e=(0,P.tO)(n,l),t=pn.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(n)}));return s.includes(e)||-1!==t}(n),r=d.map((function(e){return(0,P.tO)(n,e)})),i="";return r.forEach((function(n,e){i+=e>0?" - ".concat(n):n})),(0,G.jsxs)(z,{children:[(0,G.jsx)(D,{children:i}),(0,G.jsx)(q.Z,{label:"Ch\u1ecdn",size:"small",disabled:t,onClick:function(){return e=n,fn([].concat((0,v.Z)(pn),[e])),void(Sn||Jn||En(!0));var e}})]},e)}))}(),!!ln&&(0,G.jsx)(J,{children:(0,G.jsx)(q.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){an({variables:{cursor:cn.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,Q.d0)(S,t,n)}})}})})]})]}),(0,G.jsx)(y.Z,{isError:_,errorMessage:H})]});return(0,Z.useEffect)((function(){B(T,pn),pn.length&&W(T)}),[pn,a]),(0,Z.useEffect)((function(){var n=a.filter((function(n){return-1===yn.findIndex((function(e){return JSON.stringify(e)===JSON.stringify(n)}))}));kn(n)}),[yn,a]),(0,Z.useEffect)((function(){var n=function(n){qn.current&&!qn.current.contains(n.target)&&(gn(!1),tn(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[qn]),(0,G.jsxs)("div",{style:{width:"100%"},ref:qn,children:[!Jn&&Xn,On&&ee,!On&&ae,(0,G.jsx)(M,(0,x.Z)({},V(T,X)))]})};K.defaultProps={fieldName:"",isError:!1,validations:{},register:function(){},initCurrentList:[],originalCurrentList:[],setFieldValue:function(){},clearFormErrors:function(){},searchQueryPathName:"",resultItemAttributes:[],selectedItemAttributes:[],handleUpdateAddNewList:function(){},handleUpdateRemoveList:function(){},checkIsDisabledAttribute:"",currentListLabel:"Danh s\xe1ch hi\u1ec7n t\u1ea1i",addLabel:"",removeLabel:"Danh s\xe1ch s\u1ebd b\u1ecb xo\xe1",searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var V=K},9673:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o=t(1413),a=(t(7313),t(2180)),s=t(6947),c=t(168),l=t(3115),u=t(1237),d=l.ZP.div(r||(r=(0,c.Z)(["\n  height: 26px;\n  margin: 5px 0 0 5px;\n  display: inline-block;\n  width: ",";\n"])),(function(n){return n.isInline?"auto":"100%"})),p=l.ZP.input(i||(i=(0,c.Z)(["\n  width: 100%;\n  border: none;\n  padding: 2px 5px;\n  font-size: 12px;\n  font-weight: 300;\n  text-align: ",";\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.textAlign?n.textAlign:"left"}),u.Z.secondary),f=t(6417),h=function(n){var e=n.label,t=n.name,r=n.isError,i=n.errorMessage,c=n.register,l=n.validations,u=n.isInline;return(0,f.jsxs)(d,{isInline:u,children:[e&&(0,f.jsx)(a.Z,{label:e}),(0,f.jsx)(p,(0,o.Z)((0,o.Z)({},c(t,l)),n)),(0,f.jsx)(s.Z,{isError:r,errorMessage:i})]})};h.defaultProps={type:"text",validations:{},register:function(){}};var x=h}}]);