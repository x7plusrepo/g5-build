"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[9300,2700,2367],{9300:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,i,o,u,a=e(1413),l=e(885),s=e(7313),c=e(3295),f=e.n(c),d=e(324),p=e(168),x=e(3115),h=e(1237),b=x.ZP.div(r||(r=(0,p.Z)(["\n  position: relative;\n"]))),g=x.ZP.div(i||(i=(0,p.Z)(["\n  display: none;\n"]))),m=x.ZP.button(o||(o=(0,p.Z)(["\n  border: none;\n  display: flex;\n  cursor: pointer;\n  font-size: 12px;\n  align-items: center;\n  color: ",";\n  background-color: transparent;\n  margin: ",";\n"])),h.Z.primary,(function(n){return n.margin})),j=x.ZP.p(u||(u=(0,p.Z)(["\n  width: 100px;\n  font-size: 10px;\n  text-align: right;\n  position: absolute;\n  right: ",";\n  bottom: ",";\n"])),(function(n){return n.loadingRightBottom.right}),(function(n){return n.loadingRightBottom.bottom})),Z=e(6417),k=(0,s.lazy)((function(){return e.e(8264).then(e.bind(e,8264))})),P=(0,s.lazy)((function(){return e.e(6281).then(e.bind(e,6281))})),y=(0,s.lazy)((function(){return Promise.all([e.e(5627),e.e(8484),e.e(1879),e.e(468),e.e(9763)]).then(e.bind(e,1785))})),D=(0,s.lazy)((function(){return e.e(2693).then(e.bind(e,2693))})),z=(0,s.lazy)((function(){return Promise.all([e.e(5627),e.e(8484),e.e(1879),e.e(468),e.e(8823),e.e(585)]).then(e.bind(e,8914))})),S=(0,s.lazy)((function(){return e.e(1205).then(e.bind(e,1205))})),B=(0,s.lazy)((function(){return e.e(4086).then(e.bind(e,4086))})),C=function(n){var t=n.printOrderData,e=n.printReportData,r=n.customerButtonMargin,i=n.printDestroyedProductsData,o=n.printDiscountPromotionsData,u=n.customLoadingMessageRightBottom,c=n.printDiscountPromotionReportData,p=n.printWarehouseBalanceProductsData,x=n.printDiscountPromotionTrackingData,h=u||(r?{right:"0",bottom:"-15px"}:{right:"10px",bottom:"-10px"}),C=s.useRef(null),v=s.useRef(null),R=s.useState(!1),w=(0,l.Z)(R,2),T=w[0],L=w[1],M=s.useState("old boring text"),N=(0,l.Z)(M,2),A=N[0],G=N[1],U=s.useCallback((function(){}),[]),_=s.useCallback((function(){}),[]),E=s.useCallback((function(){return L(!0),G("Loading new text..."),new Promise((function(n){v.current=n,setTimeout((function(){L(!1),G("New, Updated Text!"),n()}),2e3)}))}),[L,G]);s.useEffect((function(){"New, Updated Text!"===A&&"function"===typeof v.current&&v.current()}),[v.current,A]);var I=s.useCallback((function(){return C.current}),[C.current]),O=s.useCallback((function(){return(0,Z.jsxs)(m,{margin:r,children:["IN ",(0,Z.jsx)(d.Z,{style:{fontSize:18,marginLeft:3}})]})}),[]),W=t?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(k,(0,a.Z)({ref:C},n))}):i?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(P,(0,a.Z)({ref:C},n))}):o?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(y,(0,a.Z)({ref:C},n))}):x?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(z,(0,a.Z)({ref:C},n))}):p?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(S,(0,a.Z)({ref:C},n))}):c?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(D,(0,a.Z)({ref:C},n))}):e?(0,Z.jsx)(s.Suspense,{fallback:null,children:(0,Z.jsx)(B,(0,a.Z)({ref:C},n))}):null;return(0,Z.jsxs)(b,{children:[(0,Z.jsx)(f(),{removeAfterPrint:!0,documentTitle:"G5 Printing",content:I,trigger:O,onAfterPrint:U,onBeforePrint:_,onBeforeGetContent:E}),T&&(0,Z.jsx)(j,{loadingRightBottom:h,children:"Chu\u1ea9n b\u1ecb in..."}),(0,Z.jsx)(g,{children:W})]})};C.defaultProps={customerButtonMargin:"20px 15px 30px auto"};var v=C}}]);