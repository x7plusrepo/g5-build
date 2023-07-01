"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9027,4641],{4641:function(n,e,r){r.d(e,{Z:function(){return u}});var t,i=r(1413),o=(r(7313),r(168)),a=r(3115),l=r(1237),c=a.ZP.button(t||(t=(0,o.Z)(["\n  padding: 0;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  color: ",";\n  background-color: transparent;\n  margin: ",";\n"])),l.Z.primary,(function(n){return n.margin||"5px 0"})),s=r(6417),d=function(n){var e=n.label;return(0,s.jsx)(c,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};d.defaultProps={onClick:function(){}};var u=d},9027:function(n,e,r){r.r(e),r.d(e,{default:function(){return W}});var t,i,o,a,l,c=r(4165),s=r(5861),d=r(885),u=r(2982),p=r(7313),f=r(3222),h=r(2668),x=r(790),b=r(6173),g=r(4641),m=r(168),j=r(3115),k=r(1237),y=j.ZP.div(t||(t=(0,m.Z)(["\n  padding: 33px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),v=j.ZP.div(i||(i=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  & h5 {\n    font-size: 13px;\n    font-weight: 700;\n  }\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),C=j.ZP.div(o||(o=(0,m.Z)(["\n  margin: 15px 0 0;\n  padding: 0 0 15px;\n"]))),Z=j.ZP.div(a||(a=(0,m.Z)(["\n  margin: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  margin: -9px 0px 0px;\n  background-color: ",";\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid ",";\n  @media (min-width: 1200px) {\n    width: 50%;\n  }\n"])),k.Z.ivoryEgg,k.Z.secondary),_=j.ZP.div(l||(l=(0,m.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500;\n  text-align: center;\n  position: relative;\n  text-transform: uppercase;\n  width: ",";\n  color: ",";\n  border-bottom: 2px solid ",";\n"])),(function(n){return"".concat(100/n.itemQty,"%")}),(function(n){return n.activeColor.textColor}),(function(n){return n.activeColor.borderColor})),P=r(2153),S=r(5164),w=r(3454),E=r(3163),z=r(7119),A=r(7123),R=r(6417),D=(0,p.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(6853)]).then(r.bind(r,6853))})),O=(0,p.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(2785)]).then(r.bind(r,2785))})),N=(0,p.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(1879),r.e(8404),r.e(2121)]).then(r.bind(r,1625))})),T=(0,p.lazy)((function(){return Promise.all([r.e(7385),r.e(4157)]).then(r.bind(r,4157))})),U=(0,p.lazy)((function(){return Promise.all([r.e(7385),r.e(7946)]).then(r.bind(r,7946))})),H=(0,p.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(1879),r.e(3681),r.e(8404),r.e(7153)]).then(r.bind(r,5547))})),Q=(0,p.lazy)((function(){return Promise.all([r.e(5627),r.e(3681),r.e(1020),r.e(8322)]).then(r.bind(r,653))})),W=function(n){var e=n.isDisplay,r=((0,f.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions,t=void 0===r?[]:r,i=z.gz.DESTROY_PRODUCT,o=z.gz.IMPORT_RETURN_PRODUCT,a=z.gz.APPROVE_DESTROY_PRODUCT,l=z.gz.CAN_EXCUTE_WAREHOUSE_BALANCE,m=z.gz.CAN_VIEW_WAREHOUSE_BALANCE_DIARIES,j=z.gz.CAN_APPROVE_WAREHOUSE_BALANCE,W=t.includes(a),B=t.includes(m),I=t.includes(j),L=[{label:"T\u1ed3n kho",code:"inventory"},{label:"\u0110\xe3 nh\u1eadp",code:"imported_products"}].concat((0,u.Z)(W?[{label:"\u0110\xe3 b\u1ecf",code:"destroy_damaged"}]:[]),(0,u.Z)(B||I?[{label:"Nh\u1eadt k\xfd",code:"warehouse_balance_diary"}]:[])),V=(0,f.I0)(),F=(0,p.useState)(L[0]),K=(0,d.Z)(F,2),M=K[0],Y=K[1],G="destroy_damaged"===M.code,X="warehouse_balance_diary"===M.code,$=t.includes(o),q=t.includes(i),J=t.includes(l),nn=(0,h.a)(A.bV,{fetchPolicy:"cache-and-network"}),en=nn.data,rn=nn.subscribeToMore,tn=en&&en.global||{},on=tn.isStockChecking,an=tn.isWarehouseBalancing,ln=(0,x.D)(w.eQ),cn=(0,d.Z)(ln,1)[0],sn=function(n){return n.code===M.code?{textColor:k.Z.primary,borderColor:k.Z.primary}:{borderColor:"transparent"}},dn=function(){switch(M.code){case"inventory":return(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(D,{isDisplay:e,tabCode:"inventory"})});case"imported_products":return(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(O,{})});case"destroy_damaged":return(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(T,{})});case"warehouse_balance_diary":return(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(U,{isStockChecking:on,isWarehouseBalancing:an})});default:return null}}(),un=function(){var n={title:"Nh\u1eadp h\xe0ng v\xe0o kho",children:(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(N,{})})};V((0,P.dn)(n))},pn=function(){var n={title:"Hu\u1ef7 h\xe0ng h\u1ecfng",children:(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(H,{})})};V((0,P.dn)(n))},fn=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return V((0,S.S$)()),n.next=3,cn({variables:{data:{isStartStockChecking:!0}}});case 3:setTimeout((function(){V((0,S.S4)())}),500),e={title:"Ki\u1ec3m kho",customCloseAction:function(){cn({variables:{data:{isStartStockChecking:!1}}})},children:(0,R.jsx)(p.Suspense,{fallback:(0,R.jsx)(b.default,{}),children:(0,R.jsx)(Q,{})})},V((0,P.dn)(e));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),hn=G?(0,R.jsx)(R.Fragment,{children:q&&(0,R.jsx)(g.Z,{label:"+ Hu\u1ef7 h\xe0ng h\u1ecfng",onClick:pn})}):X?(0,R.jsx)(R.Fragment,{children:J&&!on&&(0,R.jsx)(g.Z,{label:"+ Ki\u1ec3m kho",onClick:fn})}):(0,R.jsx)(R.Fragment,{children:$&&(0,R.jsx)(g.Z,{label:"+ Nh\u1eadp h\xe0ng v\xe0o kho",onClick:un})});return(0,p.useEffect)((function(){var n=rn({document:E.Po,updateQuery:function(n,e){var r=e.subscriptionData;if(r)return{global:r.data.updatedGlobalData}}});return function(){return n()}}),[rn]),(0,R.jsxs)(y,{isDisplay:e,children:[(0,R.jsxs)(v,{children:[(0,R.jsx)("h5",{children:"QU\u1ea2N L\xdd KHO"}),hn]}),(0,R.jsxs)(C,{children:[(0,R.jsx)(Z,{children:L.map((function(n,e){return(0,R.jsx)(_,{itemQty:L.length,activeColor:sn(n),onClick:function(){return Y(n)},children:n.label},e)}))}),dn]})]})}}}]);