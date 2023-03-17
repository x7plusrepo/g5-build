"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9027,4641],{4641:function(n,e,r){r.d(e,{Z:function(){return u}});var i,t=r(1413),o=(r(7313),r(168)),l=r(3115),a=r(1237),d=l.ZP.button(i||(i=(0,o.Z)(["\n  padding: 0;\n  border: none;\n  margin: 5px 0;\n  font-size: 12px;\n  cursor: pointer;\n  color: ",";\n  background-color: transparent;\n"])),a.Z.primary),s=r(6417),c=function(n){var e=n.label;return(0,s.jsx)(d,(0,t.Z)((0,t.Z)({},n),{},{children:e}))};c.defaultProps={onClick:function(){}};var u=c},9027:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var i,t,o,l,a,d=r(885),s=r(2982),c=r(7313),u=r(3222),p=r(6173),x=r(4641),h=r(168),f=r(3115),b=r(1237),g=f.ZP.div(i||(i=(0,h.Z)(["\n  padding: 33px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),j=f.ZP.div(t||(t=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  & h5 {\n    font-size: 13px;\n    font-weight: 700;\n  }\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),m=f.ZP.div(o||(o=(0,h.Z)(["\n  margin: 15px 0 0;\n  padding: 0 0 15px;\n"]))),y=f.ZP.div(l||(l=(0,h.Z)(["\n  margin: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  margin: -9px 0px 0px;\n  background-color: ",";\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid ",";\n  @media (min-width: 1200px) {\n    width: 50%;\n  }\n"])),b.Z.ivoryEgg,b.Z.secondary),_=f.ZP.div(a||(a=(0,h.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500;\n  text-align: center;\n  position: relative;\n  text-transform: uppercase;\n  width: ",";\n  color: ",";\n  border-bottom: 2px solid ",";\n"])),(function(n){return"".concat(100/n.itemQty,"%")}),(function(n){return n.activeColor.textColor}),(function(n){return n.activeColor.borderColor})),k=r(2153),v=r(7119),C=r(6417),Z=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(7912),r.e(6618),r.e(4173)]).then(r.bind(r,6853))})),P=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(7912),r.e(6618),r.e(7854)]).then(r.bind(r,2785))})),E=(0,c.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(7912),r.e(1879),r.e(3611),r.e(2121),r.e(8047)]).then(r.bind(r,1625))})),z=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(7912),r.e(4236)]).then(r.bind(r,4157))})),w=(0,c.lazy)((function(){return Promise.all([r.e(7385),r.e(7912),r.e(5777)]).then(r.bind(r,7946))})),A=(0,c.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(7912),r.e(1879),r.e(3681),r.e(3611),r.e(5547),r.e(8550)]).then(r.bind(r,5547))})),R=(0,c.lazy)((function(){return Promise.all([r.e(5627),r.e(3681),r.e(1020),r.e(2203)]).then(r.bind(r,653))})),S=function(n){var e=n.isDisplay,r=((0,u.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions,i=void 0===r?[]:r,t=v.gz.DESTROY_PRODUCT,o=v.gz.IMPORT_RETURN_PRODUCT,l=v.gz.APPROVE_DESTROY_PRODUCT,a=v.gz.CAN_EXCUTE_WAREHOUSE_BALANCE,h=v.gz.CAN_VIEW_WAREHOUSE_BALANCE_DIARIES,f=v.gz.CAN_APPROVE_WAREHOUSE_BALANCE,S=i.includes(l),O=i.includes(h),N=i.includes(f),D=[{label:"T\u1ed3n kho",code:"inventory"},{label:"\u0110\xe3 nh\u1eadp",code:"imported_products"}].concat((0,s.Z)(S?[{label:"\u0110\xe3 b\u1ecf",code:"destroy_damaged"}]:[]),(0,s.Z)(O||N?[{label:"Nh\u1eadt k\xfd",code:"warehouse_balance_diary"}]:[])),T=(0,u.I0)(),U=(0,c.useState)(D[0]),H=(0,d.Z)(U,2),I=H[0],L=H[1],Q="destroy_damaged"===I.code,W="warehouse_balance_diary"===I.code,B=i.includes(o),F=i.includes(t),K=i.includes(a),V=function(n){return n.code===I.code?{textColor:b.Z.primary,borderColor:b.Z.primary}:{borderColor:"transparent"}},Y=function(){switch(I.code){case"inventory":return(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(Z,{tabCode:"inventory"})});case"imported_products":return(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(P,{})});case"destroy_damaged":return(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(z,{})});case"warehouse_balance_diary":return(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(w,{})});default:return null}}(),M=function(){var n={title:"Nh\u1eadp h\xe0ng v\xe0o kho",children:(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(E,{})})};T((0,k.dn)(n))},X=function(){var n={title:"Hu\u1ef7 h\xe0ng h\u1ecfng",children:(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(A,{})})};T((0,k.dn)(n))},q=function(){var n={title:"Ki\u1ec3m kho",children:(0,C.jsx)(c.Suspense,{fallback:(0,C.jsx)(p.default,{}),children:(0,C.jsx)(R,{})})};T((0,k.dn)(n))},G=Q?(0,C.jsx)(C.Fragment,{children:F&&(0,C.jsx)(x.Z,{label:"+ Hu\u1ef7 h\xe0ng h\u1ecfng",onClick:X})}):W?(0,C.jsx)(C.Fragment,{children:K&&(0,C.jsx)(x.Z,{label:"+ Ki\u1ec3m kho",onClick:q})}):(0,C.jsx)(C.Fragment,{children:B&&(0,C.jsx)(x.Z,{label:"+ Nh\u1eadp h\xe0ng v\xe0o kho",onClick:M})});return(0,C.jsxs)(g,{isDisplay:e,children:[(0,C.jsxs)(j,{children:[(0,C.jsx)("h5",{children:"QU\u1ea2N L\xdd KHO"}),G]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(y,{children:D.map((function(n,e){return(0,C.jsx)(_,{itemQty:D.length,activeColor:V(n),onClick:function(){return L(n)},children:n.label},e)}))}),Y]})]})}}}]);