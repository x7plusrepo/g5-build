"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9027,4641],{4641:function(n,e,r){r.d(e,{Z:function(){return u}});var i,t=r(1413),o=(r(7313),r(168)),l=r(3115),a=r(1237),d=l.ZP.button(i||(i=(0,o.Z)(["\n  padding: 0;\n  border: none;\n  margin: 5px 0;\n  font-size: 12px;\n  cursor: pointer;\n  color: ",";\n  background-color: transparent;\n"])),a.Z.primary),s=r(6417),c=function(n){var e=n.label;return(0,s.jsx)(d,(0,t.Z)((0,t.Z)({},n),{},{children:e}))};c.defaultProps={onClick:function(){}};var u=c},9027:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var i,t,o,l,a,d=r(885),s=r(2982),c=r(7313),u=r(3222),p=r(6173),x=r(4641),f=r(168),h=r(3115),b=r(1237),m=h.ZP.div(i||(i=(0,f.Z)(["\n  padding: 33px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),g=h.ZP.div(t||(t=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  & h5 {\n    font-size: 13px;\n    font-weight: 700;\n  }\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),j=h.ZP.div(o||(o=(0,f.Z)(["\n  margin: 15px 0 0;\n  padding: 0 0 15px;\n"]))),y=h.ZP.div(l||(l=(0,f.Z)(["\n  margin: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  margin: -9px 0px 0px;\n  background-color: ",";\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid ",";\n  @media (min-width: 1200px) {\n    width: 50%;\n  }\n"])),b.Z.ivoryEgg,b.Z.secondary),v=h.ZP.div(a||(a=(0,f.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500;\n  text-align: center;\n  position: relative;\n  text-transform: uppercase;\n  width: ",";\n  color: ",";\n  border-bottom: 2px solid ",";\n"])),(function(n){return"".concat(100/n.itemQty,"%")}),(function(n){return n.activeColor.textColor}),(function(n){return n.activeColor.borderColor})),Z=r(2153),k=r(7119),_=r(6417),C=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(6618),r.e(7912),r.e(4173)]).then(r.bind(r,6853))})),P=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(6618),r.e(7912),r.e(7854)]).then(r.bind(r,2785))})),w=(0,c.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(7912),r.e(1879),r.e(8036),r.e(8047)]).then(r.bind(r,8982))})),z=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(7912),r.e(228)]).then(r.bind(r,9327))})),E=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(6618),r.e(7912),r.e(5777)]).then(r.bind(r,7946))})),R=(0,c.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(6618),r.e(6919),r.e(2025)]).then(r.bind(r,6919))})),S=function(n){var e=n.isDisplay,r=((0,u.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions,i=void 0===r?[]:r,t=k.gz.IMPORT_RETURN_PRODUCT,o=k.gz.APPROVE_DESTROY_PRODUCT,l=k.gz.CAN_EXCUTE_WAREHOUSE_BALANCE,a=k.gz.CAN_VIEW_WAREHOUSE_BALANCE_DIARIES,f=i.includes(o),h=i.includes(a),S=[{label:"T\u1ed3n kho",code:"inventory"},{label:"\u0110\xe3 nh\u1eadp",code:"imported_products"}].concat((0,s.Z)(f?[{label:"\u0110\xe3 b\u1ecf",code:"destroy_damaged"}]:[]),(0,s.Z)(h?[{label:"Nh\u1eadt k\xfd",code:"warehouse_balance_diary"}]:[])),A=(0,u.I0)(),N=(0,c.useState)(S[0]),O=(0,d.Z)(N,2),D=O[0],T=O[1],U="warehouse_balance_diary"===D.code,I=i.includes(t),Q=i.includes(l),H=function(n){return n.code===D.code?{textColor:b.Z.primary,borderColor:b.Z.primary}:{borderColor:"transparent"}},K=function(){switch(D.code){case"inventory":return(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(C,{tabCode:"inventory"})});case"imported_products":return(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(P,{})});case"destroy_damaged":return(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(z,{})});case"warehouse_balance_diary":return(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(E,{})});default:return null}}(),L=U?(0,_.jsx)(_.Fragment,{children:Q&&(0,_.jsx)(x.Z,{label:"+ Ki\u1ec3m kho",onClick:function(){var n={title:"Ki\u1ec3m kho",children:(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(R,{})})};A((0,Z.dn)(n))}})}):(0,_.jsx)(_.Fragment,{children:I&&(0,_.jsx)(x.Z,{label:"+ Nh\u1eadp h\xe0ng v\xe0o kho",onClick:function(){var n={title:"Nh\u1eadp h\xe0ng v\xe0o kho",children:(0,_.jsx)(c.Suspense,{fallback:(0,_.jsx)(p.default,{}),children:(0,_.jsx)(w,{})})};A((0,Z.dn)(n))}})});return(0,_.jsxs)(m,{isDisplay:e,children:[(0,_.jsxs)(g,{children:[(0,_.jsx)("h5",{children:"QU\u1ea2N L\xdd KHO"}),L]}),(0,_.jsxs)(j,{children:[(0,_.jsx)(y,{children:S.map((function(n,e){return(0,_.jsx)(v,{itemQty:S.length,activeColor:H(n),onClick:function(){return T(n)},children:n.label},e)}))}),K]})]})}}}]);