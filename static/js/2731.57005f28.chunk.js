"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2731],{7062:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var r,i,o,a,s,c,u,l,d=e(4165),h=e(1413),f=e(5861),g=e(885),p=e(7313),m=e(3222),x=e(5627),v=e(2668),Z=e(790),j=e(6069),b=e(1359),y=e(4641),S=function(){var n=(0,p.useState)(!1),t=(0,g.Z)(n,2),e=t[0],r=t[1],i=(0,p.useState)([]),o=(0,g.Z)(i,2),a=o[0],s=o[1],c=function(n){var t,e,i=null===n||void 0===n||null===(t=n.coords)||void 0===t?void 0:t.latitude,o=null===n||void 0===n||null===(e=n.coords)||void 0===e?void 0:e.longitude,a="https://rsapi.goong.io/Geocode?latlng=".concat(i,",").concat(o,"&api_key=quhmmkZwSmXStActFm3t9poJjOR5EE5jXygR2pt7");fetch(a).then((function(n){return n.json()})).then((function(n){var t=n||{},e=t.status,i=t.results;"OK"===e&&(r(!1),s(i||[]))})).catch((function(n){return r(!1)}))};return{isLoading:e,reversedAddress:a,getCurrentLocation:function(){var n;null!==(n=navigator)&&void 0!==n&&n.geolocation&&(r(!0),navigator.geolocation.getCurrentPosition(c))}}},k=e(1677),w=e(5222),C=e(6947),P=e(3070),z=e(7123),I=e(3454),E=e(5164),O=e(2153),L=e(1237),q=e(168),A=e(3115),T=e(7648),R=A.ZP.div(r||(r=(0,q.Z)(["\n  font-size: 14px;\n  padding: 0 5px 120px;\n"]))),F=A.ZP.div(i||(i=(0,q.Z)(["\n  display: flex;\n  margin: ",";\n  width: ",";\n  align-items: ",";\n"])),(function(n){return n.margin}),(function(n){return n.width||"100%"}),(function(n){return n.alignItems||"center"})),H=A.ZP.p(o||(o=(0,q.Z)(["\n  width: ",";\n  margin: ",";\n  font-size: ",";\n  font-style: ",";\n  font-weight: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.fontSize}),(function(n){return n.fontStyle}),(function(n){return n.fontWeight})),_=A.ZP.span(a||(a=(0,q.Z)(["\n  display: inline-block;\n  width: ",";\n  margin: ",";\n  font-size: ",";\n  font-style: ",";\n  font-weight: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.fontSize}),(function(n){return n.fontStyle}),(function(n){return n.fontWeight})),M=A.ZP.p(s||(s=(0,q.Z)(["\n  font-weight: 600;\n  margin: ",";\n"])),(function(n){return n.margin})),V=A.ZP.textarea(c||(c=(0,q.Z)(["\n  width: 100%;\n  padding: 5px;\n  resize: auto;\n  height: 150px;\n  font-size: 13px;\n  margin: 10px 0 0;\n  border-radius: 5px;\n  text-align: justify;\n  border: 1px solid ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),L.Z.rgbaGray),W=(A.ZP.div(u||(u=(0,q.Z)(["\n  background-color: #000;\n  height: 300px;\n"]))),(0,A.ZP)(T.Z)(l||(l=(0,q.Z)(["\n  cursor: pointer;\n  color: ",";\n"])),L.Z.brightBlue),e(6417)),B=(0,p.lazy)((function(){return e.e(9146).then(e.bind(e,9146))})),D=(0,p.lazy)((function(){return Promise.all([e.e(4660),e.e(9203)]).then(e.bind(e,9436))})),G=(0,p.lazy)((function(){return e.e(1658).then(e.bind(e,1658))})),J=function(n){var t,e=n.refetchConversations,r=(0,x.cI)({defaultValues:{}}),i=r.register,o=r.handleSubmit,a=r.formState.errors,s=(0,m.I0)(),c="images",u="customer",l=p.useState([]),q=(0,g.Z)(l,2),A=q[0],T=q[1],J=(0,p.useState)(!1),K=(0,g.Z)(J,2),N=K[0],X=K[1],U=(0,p.useState)(null),$=(0,g.Z)(U,2),Q=$[0],Y=$[1],nn=S(),tn=nn.reversedAddress,en=nn.getCurrentLocation,rn=nn.isLoading,on=(null===(t=tn[0])||void 0===t?void 0:t.formatted_address)||null,an=(Q||{}).fullName,sn=(0,v.a)(z.bV).data,cn=sn&&sn.global||{},un=cn.isRequiredTakePhoto,ln=cn.isRequiredLocationCheck;i(u,{required:!Q}),i(c,{required:!A.length&&un}),i("location",{required:!on&&ln});var dn=Q?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(M,{children:an}),(0,W.jsx)(k.Z,{label:"\u0110\u1ed5i",onClick:function(){return Y(null)}})]}):(0,W.jsx)(b.Z,{isSelectOne:!0,width:"calc(100% - 80px)",isError:!!a.customer,roles:[P.If.CUSTOMER,P.If.LEAD],onClickSelectResultItem:function(n){Y(null===n||void 0===n?void 0:n.node)}}),hn=on?(0,W.jsxs)(W.Fragment,{children:[on,(0,W.jsx)(k.Z,{label:"C\u1eadp nh\u1eadt",onClick:en})]}):rn?"\u0110ang l\u1ea5y v\u1ecb tr\xed...":(0,W.jsx)(y.Z,{margin:"0",label:"L\u1ea5y v\u1ecb tr\xed hi\u1ec7n t\u1ea1i",disabled:rn,onClick:en}),fn=!!a.images&&!on,gn=(0,Z.D)(I.E1,{onError:function(){s((0,E.S4)()),s((0,O.AP)());var n={title:"L\u1ed7i",children:(0,W.jsx)("p",{children:"Hi\u1ec7n t\u1ea1i h\u1ec7 th\u1ed1ng \u0111ang b\u1ea3o tr\xec vui l\xf2ng quay l\u1ea1i sau!"})};s((0,O.om)(n))}}),pn=(0,g.Z)(gn,1)[0],mn=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(t){var r,i,o,a;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s((0,E.S$)()),r=t.content,i=(Q||{})._id,o=A.map((function(n){return(0,j.tg)({imageSrc:n,canvasId:"conversation-canvas"})})),a=(0,h.Z)((0,h.Z)({},r&&{content:r}),{},{images:o,customerAccountId:i,location:on}),n.next=7,pn({variables:{data:a}});case 7:n.sent.data&&(s((0,E.S4)()),s((0,O.mm)()),s((0,O.AP)()),e());case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,W.jsxs)(R,{children:[(0,W.jsxs)(w.Z,{children:[(0,W.jsxs)(F,{children:[(0,W.jsx)(H,{width:"80px",fontWeight:"600",children:"Kh\xe1ch h\xe0ng"}),(0,W.jsx)(H,{margin:"0 3px",children:":"}),dn]}),(0,W.jsxs)(H,{fontSize:"13px",children:[(0,W.jsx)(_,{width:"80px",fontWeight:"600",children:"\u0110\u1ecba \u0111i\u1ec3m"}),(0,W.jsx)(_,{margin:"0 3px 0 0",children:":"}),hn]}),(0,W.jsx)(C.Z,{isError:fn,margin:"0 0 0 88px"}),(0,W.jsx)(V,(0,h.Z)((0,h.Z)({},i("content",{required:!un&&!ln})),{},{placeholder:"Nh\u1eadp n\u1ed9i dung \u0111\xe3 trao \u0111\u1ed5i v\u1edbi kh\xe1ch h\xe0ng..."})),(0,W.jsx)(C.Z,{isError:!!a.content}),(0,W.jsx)("canvas",{id:"conversation-canvas",style:{display:"none"}}),!N&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(k.Z,{label:"+ Th\xeam \u1ea3nh",margin:"30px 0 0",onClick:function(){var n={bodyHeight:"100%",showTopCloseButton:!1,children:(0,W.jsx)(p.Suspense,{fallback:null,children:(0,W.jsx)(G,{tookImages:A,setTookImages:T,setIsTakingPhotos:X})}),customBodyStyle:{padding:"0",width:"100%",backgroundColor:L.Z.black}};s((0,O.FJ)(n))}}),(0,W.jsx)(C.Z,{isError:!!a.images})]}),(0,W.jsx)(p.Suspense,{fallback:null,children:(0,W.jsx)(D,{mediaData:A})})]}),(0,W.jsx)(B,{label:"TH\xcaM M\u1edaI",onClick:o(mn)})]})};J.defaultProps={};var K=J},7648:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5045)),o=e(6417),a=(0,i.default)([(0,o.jsx)("path",{d:"M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-4 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"0"),(0,o.jsx)("path",{d:"m8.57.51 4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51zm2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48v2.95z"},"1")],"Cameraswitch");t.Z=a},5987:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(3366);function i(n,t){if(null==n)return{};var e,i,o=(0,r.Z)(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}}}]);