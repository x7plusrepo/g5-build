"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6084],{7062:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,s,l,c,u=t(4165),d=t(1413),h=t(5861),g=t(885),f=t(7313),p=t(3222),v=t(5627),x=t(2668),m=t(790),Z=t(6069),j=t(1359),b=t(4641),k=function(){var n=(0,f.useState)(!1),e=(0,g.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)([]),o=(0,g.Z)(i,2),a=o[0],s=o[1],l=function(n){var e,t,i=null===n||void 0===n||null===(e=n.coords)||void 0===e?void 0:e.latitude,o=null===n||void 0===n||null===(t=n.coords)||void 0===t?void 0:t.longitude,a="https://rsapi.goong.io/Geocode?latlng=".concat(i,",").concat(o,"&api_key=quhmmkZwSmXStActFm3t9poJjOR5EE5jXygR2pt7");fetch(a).then((function(n){return n.json()})).then((function(n){var e=n||{},t=e.status,i=e.results;"OK"===t&&(r(!1),s(i||[]))})).catch((function(n){return r(!1)}))};return{isLoading:t,reversedAddress:a,getCurrentLocation:function(){var n;null!==(n=navigator)&&void 0!==n&&n.geolocation&&(r(!0),navigator.geolocation.getCurrentPosition(l))}}},y=t(1677),S=t(5222),w=t(6947),C=t(3070),P=t(7123),I=t(3454),E=t(5164),O=t(2153),L=t(1237),q=t(168),z=t(3115),A=t(7648),T=z.ZP.div(r||(r=(0,q.Z)(["\n  font-size: 12px;\n  padding: 0 5px 120px;\n"]))),F=z.ZP.div(i||(i=(0,q.Z)(["\n  display: flex;\n  align-items: ",";\n"])),(function(n){return n.alignItems||"center"})),R=z.ZP.p(o||(o=(0,q.Z)(["\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin})),H=z.ZP.p(a||(a=(0,q.Z)(["\n  font-weight: 600;\n  margin: ",";\n"])),(function(n){return n.margin})),_=z.ZP.textarea(s||(s=(0,q.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  margin: 10px 0 0;\n  border-radius: 5px;\n  border: 1px solid ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),L.Z.rgbaGray),M=(z.ZP.div(l||(l=(0,q.Z)(["\n  background-color: #000;\n  height: 300px;\n"]))),(0,z.ZP)(A.Z)(c||(c=(0,q.Z)(["\n  cursor: pointer;\n  color: ",";\n"])),L.Z.brightBlue),t(6417)),V=(0,f.lazy)((function(){return t.e(9146).then(t.bind(t,9146))})),B=(0,f.lazy)((function(){return Promise.all([t.e(4660),t.e(9203)]).then(t.bind(t,9436))})),D=(0,f.lazy)((function(){return t.e(1658).then(t.bind(t,1658))})),K=function(n){var e,t=n.refetchConversations,r=(0,v.cI)({defaultValues:{}}),i=r.register,o=r.handleSubmit,a=r.formState.errors,s=(0,p.I0)(),l="images",c="customer",q=f.useState([]),z=(0,g.Z)(q,2),A=z[0],K=z[1],G=(0,f.useState)(!1),J=(0,g.Z)(G,2),N=J[0],X=J[1],U=(0,f.useState)(null),$=(0,g.Z)(U,2),Q=$[0],W=$[1],Y=k(),nn=Y.reversedAddress,en=Y.getCurrentLocation,tn=Y.isLoading,rn=(null===(e=nn[0])||void 0===e?void 0:e.formatted_address)||null,on=(Q||{}).fullName,an=(0,x.a)(P.bV).data,sn=an&&an.global||{},ln=sn.isRequiredTakePhoto,cn=sn.isRequiredLocationCheck;i(c,{required:!Q}),i(l,{required:!A.length&&ln}),i("location",{required:!rn&&cn});var un=Q?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R,{width:"70px",children:"Kh\xe1ch h\xe0ng"}),(0,M.jsxs)(H,{children:[": ",on]}),(0,M.jsx)(y.Z,{label:"\u0110\u1ed5i",onClick:function(){return W(null)}})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R,{width:"80px",children:"Kh\xe1ch h\xe0ng :"}),(0,M.jsx)(j.Z,{width:"90%",isSelectOne:!0,isError:!!a.customer,roles:[C.If.CUSTOMER,C.If.LEAD],onClickSelectResultItem:function(n){W(null===n||void 0===n?void 0:n.node)}})]}),dn=rn?(0,M.jsxs)(M.Fragment,{children:[rn,(0,M.jsx)(y.Z,{label:"C\u1eadp nh\u1eadt",onClick:en})]}):tn?"\u0110ang l\u1ea5y v\u1ecb tr\xed...":(0,M.jsx)(b.Z,{margin:"0",label:"L\u1ea5y v\u1ecb tr\xed hi\u1ec7n t\u1ea1i",disabled:tn,onClick:en}),hn=!!a.images&&!rn,gn=(0,m.D)(I.E1,{onError:function(){s((0,E.S4)()),s((0,O.AP)());var n={title:"L\u1ed7i",children:(0,M.jsx)("p",{children:"Hi\u1ec7n t\u1ea1i h\u1ec7 th\u1ed1ng \u0111ang b\u1ea3o tr\xec vui l\xf2ng quay l\u1ea1i sau!"})};s((0,O.om)(n))}}),fn=(0,g.Z)(gn,1)[0],pn=function(){var n=(0,h.Z)((0,u.Z)().mark((function n(e){var r,i,o,a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s((0,E.S$)()),r=e.content,i=(Q||{})._id,o=A.map((function(n){return(0,Z.tg)({imageSrc:n,canvasId:"conversation-canvas"})})),a=(0,d.Z)((0,d.Z)({},r&&{content:r}),{},{images:o,customerAccountId:i,location:rn}),n.next=7,fn({variables:{data:a}});case 7:n.sent.data&&(t(),s((0,E.S4)()),s((0,O.AP)()));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,M.jsxs)(T,{children:[(0,M.jsxs)(S.Z,{children:[(0,M.jsx)(F,{children:un}),(0,M.jsxs)(F,{alignItems:"flex-start",children:[(0,M.jsx)(R,{width:"70px",children:"\u0110\u1ecba \u0111i\u1ec3m"}),(0,M.jsxs)("div",{style:{width:"85%"},children:[(0,M.jsxs)(R,{children:[": ",dn]}),(0,M.jsx)(w.Z,{isError:hn,margin:"0 5px"})]})]}),(0,M.jsx)(_,(0,d.Z)((0,d.Z)({},i("content",{required:!ln&&!cn})),{},{placeholder:"Nh\u1eadp n\u1ed9i dung \u0111\xe3 trao \u0111\u1ed5i v\u1edbi kh\xe1ch h\xe0ng..."})),(0,M.jsx)(w.Z,{isError:!!a.content}),(0,M.jsx)("canvas",{id:"conversation-canvas",style:{display:"none"}}),!N&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(y.Z,{label:"+ Th\xeam \u1ea3nh",onClick:function(){var n={bodyHeight:"100%",showTopCloseButton:!1,children:(0,M.jsx)(f.Suspense,{fallback:null,children:(0,M.jsx)(D,{tookImages:A,setTookImages:K,setIsTakingPhotos:X})}),customBodyStyle:{padding:"0",width:"100%",backgroundColor:L.Z.black}};s((0,O.FJ)(n))}}),(0,M.jsx)(w.Z,{isError:!!a.images})]}),(0,M.jsx)(f.Suspense,{fallback:null,children:(0,M.jsx)(B,{mediaData:A})})]}),(0,M.jsx)(V,{label:"TH\xcaM M\u1edaI",onClick:o(pn)})]})};K.defaultProps={};var G=K},7648:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5045)),o=t(6417),a=(0,i.default)([(0,o.jsx)("path",{d:"M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-4 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"0"),(0,o.jsx)("path",{d:"m8.57.51 4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51zm2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48v2.95z"},"1")],"Cameraswitch");e.Z=a},5987:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3366);function i(n,e){if(null==n)return{};var t,i,o=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}}}]);