"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[2183],{2183:function(e,i,r){r.r(i),r.d(i,{default:function(){return R}});var n,t,s,a,o,l,d,c=r(4165),p=r(1413),g=r(5861),h=r(885),u=r(7313),x=r(5627),m=r(3222),Z=r(790),j=(r(1677),r(5222)),b=r(8987),f=r(9146),y=r(9673),v=(r(8243),r(3182)),w=(r(2399),r(7532)),D=(r(1300),r(6947)),E=r(168),q=r(3115),N=r(1237),S=q.ZP.div(n||(n=(0,E.Z)(["\n  font-size: 12px;\n  padding: 10px 5px 120px;\n"]))),C=q.ZP.div(t||(t=(0,E.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 5px 0 15px;\n"]))),W=q.ZP.div(s||(s=(0,E.Z)(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n  margin: 5px 0 15px;\n  justify-content: space-between;\n"]))),k=q.ZP.div(a||(a=(0,E.Z)(["\n  width: 100px;\n"]))),T=(q.ZP.input(o||(o=(0,E.Z)(["\n  width: 60%;\n"]))),q.ZP.div(l||(l=(0,E.Z)(["\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  padding: 10px 35%;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),N.Z.rgbaBlack),q.ZP.p(d||(d=(0,E.Z)(["\n  font-weight: 600;\n  color: ",";\n"])),N.Z.lightBlack)),U=r(3454),I=r(7123),V=r(2153),B=r(3070),M=r(6881),P=r(6417),R=function(e){var i=(e.productItem||{}).productInfo||{},r=i._id,n=i.name,t=i.code,s=i.price,a=i.netUnitValue,o=i.unitString,l=i.categories,d=i.quantityWarning,E=i.expirationDateWarning,q=i.labelCodes,N=i.shortDescription,R=i.detailDescription,_=i.isSold,O=(0,M.Z)(n),A=l&&l[0]||"",H=q&&q[0]||"",z=(0,M.Z)(N),Q=(0,M.Z)(R),G=(0,x.cI)({defaultValues:{code:t,name:O,netUnitValue:a,unitString:o,price:s,quantityWarning:d,expirationDateWarning:E,categories:A,labelCodes:H,shortDescription:z}}),K=G.register,L=G.setValue,X=(G.clearErrors,G.handleSubmit),Y=G.formState.errors,F=(0,m.I0)(),J=(0,u.useRef)(null),$=(0,u.useState)(""),ee=(0,h.Z)($,2),ie=ee[0],re=ee[1],ne=(0,Z.D)(U.Q7,{refetchQueries:[{query:I.ze},"GET_WAREHOUSE_INVENTORY",{query:I.BQ},"GET_IMPORTED_PRODUCTS"]}),te=(0,h.Z)(ne,1)[0],se=function(){var e=(0,g.Z)((0,c.Z)().mark((function e(i){var n,l,g,h,u,x,m,Z,j,b,f,y,v;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.code,l=i.name,g=i.netUnitValue,h=i.unitString,u=i.price,x=i.quantityWarning,m=i.expirationDateWarning,Z=i.categories,j=i.labelCodes,b=i.shortDescription,f=J.current.getContent(),y=(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({isSold:_},ie&&{imgUri:ie}),n!==t&&{code:n}),l!==O&&{name:[{showText:l,locale:"vi"}]}),Number(g)!==a&&{netUnitValue:Number(g)}),h!==o&&{unitString:h}),Number(u)!==s&&{price:Number(u)}),Number(x)!==d&&{quantityWarning:Number(x)}),Number(m)!==E&&{expirationDateWarning:Number(m)}),Z!==A&&{categories:[Z]}),j!==H&&{labelCodes:[j]}),b!==z&&{shortDescription:[{showText:b,locale:"vi"}]}),f!==Q&&{detailDescription:[{showText:f,locale:"vi"}]}),!!!Object.keys(y).length){e.next=10;break}return v={productId:r},e.next=8,te({variables:{data:y,where:v}});case 8:e.sent.data&&F((0,V.mm)());case 10:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){ie&&L("imgUri",ie)}),[ie]),(0,P.jsxs)(S,{children:[(0,P.jsxs)(j.Z,{children:[!_&&(0,P.jsxs)(W,{children:[(0,P.jsx)(y.Z,{name:"code",width:"30%",register:K,isError:!!Y.code,validations:{required:!0},placeholder:"M\xe3 s\u1ea3n ph\u1ea9m"}),(0,P.jsx)(y.Z,{name:"name",width:"70%",register:K,margin:"5px 0 5px 20px",isError:!!Y.name,validations:{required:!0},placeholder:"T\xean s\u1ea3n ph\u1ea9m"})]}),!_&&(0,P.jsxs)(W,{children:[(0,P.jsx)(y.Z,{min:0,width:"30%",type:"number",name:"netUnitValue",register:K,isError:!!Y.netUnitValue,validations:{required:!0,min:0},errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0",placeholder:"Kh\u1ed1i l\u01b0\u1ee3ng t\u1ecbnh"}),(0,P.jsx)(v.Z,{height:"27px",name:"unitString",register:K,customerWidth:"50px",isError:!!Y.unitString,validations:{required:!0},options:B.ZD}),(0,P.jsx)(y.Z,{min:0,name:"price",width:"48%",type:"number",textAlign:"right",register:K,isError:!!Y.price,validations:{required:!0,min:0},errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0",placeholder:"\u0110\u01a1n gi\xe1"}),"\u0111"]}),!_&&(0,P.jsxs)(W,{children:[(0,P.jsx)(y.Z,{name:"categories",register:K,isError:!!Y.categories,validations:{required:!0},placeholder:"Danh m\u1ee5c"}),(0,P.jsx)(y.Z,{name:"labelCodes",register:K,margin:"5px 0 5px 20px",placeholder:"Nh\xe3n s\u1ea3n ph\u1ea9m"})]}),_&&(0,P.jsxs)(W,{children:[(0,P.jsx)(y.Z,{min:0,name:"price",width:"47%",type:"number",textAlign:"right",margin:"0 5px 0 0",register:K,isError:!!Y.price,validations:{required:!0,min:0},errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0",placeholder:"\u0110\u01a1n gi\xe1"}),(0,P.jsx)("p",{children:"\u0111"}),(0,P.jsx)(y.Z,{width:"46%",name:"labelCodes",margin:"0 0 0 30px",register:K,placeholder:"Nh\xe3n s\u1ea3n ph\u1ea9m"})]})]}),(0,P.jsx)(T,{children:"C\u1ea2NH B\xc1O KHI"}),(0,P.jsxs)(j.Z,{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)("p",{style:{width:125},children:"Tr\u01b0\u1edbc khi h\u1ebft h\u1ea1n"}),":",(0,P.jsx)(y.Z,{min:0,width:"70px",type:"number",textAlign:"right",register:K,name:"expirationDateWarning",isError:!!Y.expirationDateWarning,validations:{required:!0,min:0},errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0"}),(0,P.jsx)("p",{children:"\u2002ng\xe0y"})]}),(0,P.jsxs)(C,{children:[(0,P.jsx)("p",{style:{width:125},children:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u1ea1t t\u1ed1i thi\u1ec3u"}),":",(0,P.jsx)(y.Z,{min:0,width:"70px",type:"number",textAlign:"right",register:K,name:"quantityWarning",isError:!!Y.quantityWarning,validations:{required:!0,min:0},errorMessage:"*B\u1eaft bu\u1ed9c \u2265 0"}),(0,P.jsx)("p",{children:"\u2002s\u1ea3n ph\u1ea9m"})]})]}),(0,P.jsxs)(j.Z,{children:[(0,P.jsx)(C,{children:(0,P.jsx)(y.Z,{maxlength:"70",padding:"10px",margin:"0 0 15px",fontStyle:"italic",register:K,name:"shortDescription",isError:!!Y.shortDescription,validations:{required:!0,maxLength:50},errorMessage:"*Tr\u01b0\u1eddng b\u1eaft bu\u1ed9c d\u01b0\u1edbi 50 k\xfd t\u1ef1",placeholder:"C\xf4ng d\u1ee5ng s\u1ea3n ph\u1ea9m..."})}),(0,P.jsxs)(C,{style:{alignItems:"flex-start"},children:[(0,P.jsxs)("div",{style:{marginTop:10},children:[(0,P.jsx)(k,{children:"\u1ea2nh s\u1ea3n ph\u1ea9m:"}),(0,P.jsx)(D.Z,{isError:!!Y.imgUri})]}),(0,P.jsx)(w.Z,{setResizedImageUri:re})]}),(0,P.jsx)(k,{children:"M\xf4 t\u1ea3 chi ti\u1ebft:"}),(0,P.jsx)(b.Z,{editorRef:J,initValue:Q})]}),(0,P.jsx)(f.Z,{label:"X\xc1C NH\u1eacN",onClick:X(se)})]})}}}]);