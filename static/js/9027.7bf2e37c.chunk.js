"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9027,4641],{4641:function(n,e,r){r.d(e,{Z:function(){return u}});var t,o=r(1413),i=(r(7313),r(168)),l=r(3115),a=r(1237),d=l.ZP.button(t||(t=(0,i.Z)(["\n  padding: 0;\n  border: none;\n  margin: 5px 0;\n  font-size: 12px;\n  color: ",";\n  background-color: transparent;\n"])),a.Z.primary),s=r(6417),c=function(n){var e=n.label;return(0,s.jsx)(d,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};c.defaultProps={onClick:function(){}};var u=c},9027:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o,i,l,a,d=r(885),s=r(7313),c=r(3222),u=r(6173),p=r(4641),f=r(168),x=r(3115),h=r(1237),b=x.ZP.div(t||(t=(0,f.Z)(["\n  padding: 33px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),j=x.ZP.div(o||(o=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),g=x.ZP.div(i||(i=(0,f.Z)(["\n  margin: 15px 0 0;\n  padding: 0 0 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n"]))),y=x.ZP.div(l||(l=(0,f.Z)(["\n  margin: 0;\n  display: flex;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n"])),h.Z.ivoryEgg,h.Z.secondary),m=x.ZP.div(a||(a=(0,f.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  font-size: 12px;\n  width: ","%;\n  text-align: center;\n  position: relative;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: ",";\n  border-bottom: 2px solid ",";\n"])),100/3,(function(n){return n.activeColor.textColor}),(function(n){return n.activeColor.borderColor})),v=r(2153),Z=r(7119),k=r(6417),C=(0,s.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(4234),r.e(6853)]).then(r.bind(r,6853))})),P=(0,s.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(4234),r.e(2785)]).then(r.bind(r,2785))})),w=(0,s.lazy)((function(){return Promise.all([r.e(5627),r.e(7385),r.e(5957),r.e(5542),r.e(4429),r.e(6357),r.e(8047)]).then(r.bind(r,6357))})),_=(0,s.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(790),r.e(228)]).then(r.bind(r,9327))})),z=(0,s.lazy)((function(){return Promise.all([r.e(7385),r.e(5957),r.e(7946)]).then(r.bind(r,7946))})),S=function(n){var e=n.isDisplay,r=[{label:"T\u1ed3n kho",code:"inventory"},{label:"\u0110\xe3 nh\u1eadp",code:"imported_products"},{label:"\u0110\xe3 b\u1ecf",code:"destroy_damaged"},{label:"Nh\u1eadt k\xfd",code:"warehouse_balance_diary"}],t=(0,c.I0)(),o=(0,s.useState)(r[0]),i=(0,d.Z)(o,2),l=i[0],a=i[1],f=((0,c.v9)((function(n){return n.authReducer})).viewerQuery||{}).permissions,x=void 0===f?[]:f,S=Z.gz.IMPORT_RETURN_PRODUCT,N=x.includes(S),R=function(n){return n.code===l.code?{textColor:h.Z.primary,borderColor:h.Z.primary}:{borderColor:"transparent"}},D=function(){switch(l.code){case"inventory":return(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(u.default,{}),children:(0,k.jsx)(C,{tabCode:"inventory"})});case"imported_products":return(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(u.default,{}),children:(0,k.jsx)(P,{})});case"destroy_damaged":return(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(u.default,{}),children:(0,k.jsx)(_,{})});case"warehouse_balance_diary":return(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(u.default,{}),children:(0,k.jsx)(z,{})});default:return null}}();return(0,k.jsxs)(b,{isDisplay:e,children:[(0,k.jsxs)(j,{children:[(0,k.jsx)("h5",{children:"QU\u1ea2N L\xdd KHO"}),N&&(0,k.jsx)(p.Z,{label:"+ Nh\u1eadp h\xe0ng v\xe0o kho",onClick:function(){var n={title:"Nh\u1eadp h\xe0ng v\xe0o kho",children:(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(u.default,{}),children:(0,k.jsx)(w,{})})};t((0,v.dn)(n))}})]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(y,{children:r.map((function(n,e){return(0,k.jsx)(m,{activeColor:R(n),onClick:function(){return a(n)},children:n.label},e)}))}),D]})]})}}}]);