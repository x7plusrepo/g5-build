"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[5988,9146],{9146:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r,i=t(1413),o=(t(7313),t(168)),a=t(3115),s=t(1237),l=a.ZP.button(r||(r=(0,o.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),s.Z.rgbaBlack),c=t(6417),d=function(n){var e=n.label;return(0,c.jsx)(l,(0,i.Z)((0,i.Z)({},n),{},{children:e}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var u=d},6781:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,o,a,s=t(4165),l=t(1413),c=t(5861),d=t(885),u=t(7313),h=t(3222),f=t(5627),p=t(790),x=t(341),g=t(1359),m=t(6881),b=t(1677),j=t(5222),v=t(6069),Z=t(9673),w=t(9146),y=t(3454),N=t(2153),S=t(5164),C=t(168),k=t(3115),A=k.ZP.div(r||(r=(0,C.Z)(["\n  font-size: 12px;\n  padding: 10px 0 120px;\n"]))),I=k.ZP.div(i||(i=(0,C.Z)(["\n  display: flex;\n  width: ",";\n  margin: ",";\n  justify-content: ",";\n  align-items: ",";\n"])),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.justifyContent}),(function(n){return n.alignItems||"center"})),E=k.ZP.p(o||(o=(0,C.Z)(["\n  color: ",";\n  width: ",";\n  margin: ",";\n  font-size: ",";\n  font-style: ",";\n  font-weight: ",";\n"])),(function(n){return n.color}),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.fontSize}),(function(n){return n.fontStyle}),(function(n){return n.fontWeight})),P=k.ZP.span(a||(a=(0,C.Z)(["\n  display: inline-block;\n  color: ",";\n  width: ",";\n  margin: ",";\n  font-size: ",";\n  font-style: ",";\n  font-weight: ",";\n"])),(function(n){return n.color}),(function(n){return n.width}),(function(n){return n.margin}),(function(n){return n.fontSize}),(function(n){return n.fontStyle}),(function(n){return n.fontWeight})),O=t(6417),D=function(n){var e=n.account||{},t=e._id,r=e.idCode,i=e.fullName,o=e.phoneNumber,a=e.saleStaffInfo,x=(0,f.cI)({defaultValues:{idCode:r,fullName:i,phoneNumber:o,staffAccount:a}}),m=x.register,v=x.setValue,C=x.clearErrors,k=x.handleSubmit,A=x.formState.errors;m("staffAccount",{required:!0});var P=(0,h.I0)(),D=(0,u.useState)(a),M=(0,d.Z)(D,2),q=M[0],z=M[1],B=q?(0,O.jsxs)(I,{justifyContent:"space-between",children:[(0,O.jsxs)(E,{children:[q.fullName," - ",q.phoneNumber]}),(0,O.jsx)(b.Z,{label:"\u0110\u1ed5i",onClick:function(){z(void 0),v("staffAccount",void 0)}})]}):(0,O.jsx)(g.Z,{isSelectOne:!0,notBeCustomer:!0,width:"calc(100% - 125px)",notEmptyManager:!0,isError:!!A.staffAccount,onClickSelectResultItem:function(n){C("staffAccount"),z(n.node),v("staffAccount",n.node)}}),_=(0,p.D)(y.kQ,{onError:function(){setTimeout((function(){P((0,S.S4)())}),500);var n={title:"L\u1ed7i",children:(0,O.jsx)("p",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i tr\xf9ng v\u1edbi m\u1ed9t kh\xe1ch c\xf3 trong danh s\xe1ch. Vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb h\u1ec7 th\u1ed1ng!"})};P((0,N.om)(n))}}),H=(0,d.Z)(_,1)[0],W=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){var c,d,u,h,f,p,x,g,m,b,j,v,Z,w,y;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return P((0,S.S$)()),c=e.idCode,d=e.password,u=e.fullName,h=e.phoneNumber,f=e.applyingDiscount,p=e.debtOverdueDays,x=e.staffAccount,m=(g=x||{})._id,b=g.managerAccountId,j=g.directorAccountId,v=(a||{})._id,Z=v!==m,w=(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({password:d,applyingDiscount:Number(f),debtOverdueDays:Number(p)},c.trim()!==r&&{idCode:c}),u.trim()!==i&&{fullName:u}),h.trim()!==o&&{phoneNumber:h}),Z&&{staffAccountId:m,managerAccountId:b,directorAccountId:j}),n.next=8,H({variables:{data:w,where:{accountId:t}}});case 8:n.sent.data&&(y={title:"C\u1eadp nh\u1eadt lead",children:(0,O.jsx)("p",{children:"C\u1eadp nh\u1eadt lead th\xe0nh c\xf4ng!"})},P((0,S.S4)()),P((0,N.om)(y)),P((0,N.Ay)()));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(j.Z,{margin:"0 5px",children:[(0,O.jsxs)(I,{children:[(0,O.jsx)(Z.Z,{width:"30%",name:"idCode",margin:"0",register:m,isError:!!A.idCode,validations:{required:!0},placeholder:"M\xe3 kh\xe1ch h\xe0ng"}),(0,O.jsx)(Z.Z,{width:"70%",name:"fullName",margin:"5px 0 5px 20px",register:m,isError:!!A.fullName,validations:{required:!0},placeholder:"H\u1ecd t\xean Kh\xe1ch h\xe0ng"})]}),(0,O.jsxs)(I,{children:[(0,O.jsx)(Z.Z,{name:"phoneNumber",register:m,margin:"5px 10px 0 0",isError:!!A.phoneNumber,placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",errorMessage:"*Ch\u1ec9 g\u1ed3m 10 s\u1ed1",validations:{required:!0,pattern:{value:/^[0-9]{10}$/}}}),(0,O.jsx)(Z.Z,{name:"password",type:"password",register:m,margin:"5px 0 0 10px",placeholder:"M\u1eadt kh\u1ea9u",isError:!!A.password,validations:{required:!0}})]}),(0,O.jsxs)(I,{margin:"10px 0",children:[(0,O.jsx)(E,{width:"125px",children:"Gi\xe1 t\xednh tr\xean ho\xe1 \u0111\u01a1n"}),":",(0,O.jsx)(Z.Z,{min:0,width:"70px",type:"number",textAlign:"right",register:m,name:"applyingDiscount",validations:{required:!0,min:0},isError:!!A.applyingDiscount,errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0"}),(0,O.jsx)(E,{width:"100px",margin:"0 5px",children:"% B\u1ea3ng gi\xe1"})]}),(0,O.jsxs)(I,{children:[(0,O.jsx)(E,{width:"125px",children:"Th\u1eddi h\u1ea1n n\u1ee3"}),":",(0,O.jsx)(Z.Z,{min:0,width:"70px",type:"number",textAlign:"right",register:m,margin:"5px 5px 0 5px",name:"debtOverdueDays",validations:{required:!0,min:0},isError:!!A.debtOverdueDays,errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0"}),(0,O.jsx)("p",{children:"ng\xe0y"})]}),(0,O.jsxs)(I,{margin:"15px 0 0",children:[(0,O.jsx)(E,{width:"125px",children:"Ph\u1ee5 tr\xe1ch"}),":\u2002",B]})]}),(0,O.jsx)(w.default,{label:"CHUY\u1ec2N \u0110\u1ed4I",onClick:k(W)})]})},M=function(n){var e=n.account,t=e||{},r=t.idCode,i=t.address,o=t.fullName,a=t.location,s=t.avatarImage,l=t.addressNote,c=t.dateOfBirth,d=t.phoneNumber,u=t.leadGroupInfo,h=a||{},f=h.province,p=h.district,g=h.commune,b="".concat((0,m.Z)(null===g||void 0===g?void 0:g.label)," - ").concat((0,m.Z)(null===p||void 0===p?void 0:p.label)," - ").concat((0,m.Z)(null===f||void 0===f?void 0:f.label)),Z=null!==f&&void 0!==f&&f.label?b:i||l,w=u||{},y=(w.label,w.colorCode);return(0,O.jsxs)(A,{children:[(0,O.jsxs)(j.Z,{borderRadius:"none",children:[(0,O.jsxs)(I,{children:[(0,O.jsx)(x.Z,{fullName:o,avatarUri:s}),(0,O.jsx)(E,{fontWeight:"600",margin:"0 5px",color:y,children:o})]}),(0,O.jsxs)(E,{margin:"5px 0",children:[(0,O.jsx)(P,{width:"65px",fontStyle:"italic",children:"M\xe3"}),":\u2002",r]}),(0,O.jsxs)(E,{margin:"5px 0",children:[(0,O.jsx)(P,{width:"65px",fontStyle:"italic",children:"\u0110\u1ecba ch\u1ec9"}),":\u2002",Z]}),(0,O.jsxs)(E,{margin:"5px 0",children:[(0,O.jsx)(P,{width:"65px",fontStyle:"italic",children:"Ng\xe0y sinh"}),":\u2002",(0,v.dh)(c)]}),(0,O.jsxs)(E,{margin:"5px 0",children:[(0,O.jsx)(P,{width:"65px",fontStyle:"italic",children:"\u0110i\u1ec7n tho\u1ea1i"}),":\u2002",d]})]}),(0,O.jsx)(D,{account:e})]})};M.defaultProps={};var q=M},9673:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o=t(1413),a=(t(7313),t(2180)),s=t(6947),l=t(168),c=t(3115),d=t(1237),u=c.ZP.div(r||(r=(0,l.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.margin?n.margin:"0 0 0 5px"})),h=c.ZP.input(i||(i=(0,l.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.padding}),(function(n){return n.lineHeight}),d.Z.lightWhite,d.Z.secondary,(function(n){return n.fontStyle?n.fontStyle:""}),(function(n){return n.textAlign?n.textAlign:"left"})),f=t(6417),p=function(n){var e=n.label,t=n.name,r=n.isError,i=n.errorMessage,l=n.register,c=n.validations,d=n.isInline,p=n.width,x=n.margin,g=d?"auto":p;return(0,f.jsxs)(u,{width:g,margin:x,children:[e&&(0,f.jsx)(a.Z,{label:e}),(0,f.jsx)(h,(0,o.Z)((0,o.Z)({},l(t,c)),n)),(0,f.jsx)(s.Z,{isError:r,errorMessage:i})]})};p.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var x=p},5987:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3366);function i(n,e){if(null==n)return{};var t,i,o=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}}}]);