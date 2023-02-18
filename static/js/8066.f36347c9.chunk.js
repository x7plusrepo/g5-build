"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8066,1677],{1677:function(n,e,t){t.d(e,{Z:function(){return d}});var r,o=t(1413),a=(t(7313),t(168)),i=t(3115),c=t(1237),s=i.ZP.button(r||(r=(0,a.Z)(["\n  margin: 5px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: ",";\n  font-size: ",";\n  background-color: ",";\n"])),(function(n){return n.padding?n.padding:"3px 7px"}),(function(n){return n.fontSize?"".concat(n.fontSize,"px"):"12px"}),(function(n){return n.bgColor?n.bgColor:c.Z.primary})),l=t(6417),u=function(n){var e=n.label;return(0,l.jsx)(s,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};u.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var d=u},2262:function(n,e,t){t.d(e,{Z:function(){return d}});var r,o=t(1413),a=(t(7313),t(168)),i=t(3115),c=t(1237),s=i.ZP.button(r||(r=(0,a.Z)(["\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 3px 7px;\n  border-radius: 5px;\n  height: fit-content;\n  margin: ",";\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.margin?n.margin:"5px"}),(function(n){return n.bgColor?n.bgColor:c.Z.rgbaSecondary}),c.Z.secondary),l=t(6417),u=function(n){var e=n.label;return(0,l.jsx)(s,(0,o.Z)((0,o.Z)({},n),{},{children:e}))};u.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var d=u},3354:function(n,e,t){t.d(e,{Z:function(){return s}});var r,o=t(1413),a=(t(7313),t(168)),i=t(3115).ZP.div(r||(r=(0,a.Z)(["\n  width: 100%;\n  margin: 10px 0;\n  background-color: #fff;\n  padding: 25px 10px 25px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),c=t(6417),s=function(n){var e=n.children;return(0,c.jsx)(i,(0,o.Z)((0,o.Z)({},n),{},{children:e}))}},5222:function(n,e,t){t.d(e,{Z:function(){return f}});var r,o,a,i=t(1413),c=(t(7313),t(168)),s=t(3115),l=t(1237),u=s.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  margin: 0 0 30px;\n"]))),d=s.ZP.div(o||(o=(0,c.Z)(["\n  font-weight: 600;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  color: ",";\n"])),l.Z.lightBlack),p=s.ZP.div(a||(a=(0,c.Z)(["\n  padding: 10px;\n  margin: 0 0 20px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),\n    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n"]))),h=t(6417),f=function(n){var e=n.title,t=n.children;return(0,h.jsxs)(u,(0,i.Z)((0,i.Z)({},n),{},{children:[(0,h.jsx)(d,{children:e}),(0,h.jsx)(p,{children:t})]}))}},8066:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,a,i,c,s=t(2982),l=t(1413),u=t(885),d=t(7313),p=t(2668),h=t(3222),f=t(1156),x=t(8589),g=t(6879),Z=t(6881),v=t(2262),b=t(1359),m=t(5273),j=t(5743),k=t(5222),y=t(168),P=t(3115),w=t(1237),C=P.ZP.div(r||(r=(0,y.Z)(["\n  // font-size: 12px;\n  // padding: 10px 10px 120px;\n"]))),S=P.ZP.span(o||(o=(0,y.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: ",";\n"])),w.Z.primary),N=P.ZP.p(a||(a=(0,y.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n"])),w.Z.secondary),R=P.ZP.div(i||(i=(0,y.Z)(["\n  display: flex;\n  margin: 0 30px 0 0;\n"]))),T=P.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  margin: 15px 0;\n"]))),I=t(3070),E=t(6417);m.kL.register(m.uw,m.f$,m.ZL,m.Dx,m.u,m.De);var O=function(n){for(var e=n.chartData,t=n.reportType,r=n.startOfTimeRange,o="quantity"===I.VP,a=r?new Date(r).getFullYear():(new Date).getFullYear(),i=[],c=[],l=[],p=function(n){var t=e[n],r=t._id,o=t.totalMoney,u=t.totalQuantity,d=t.totalWeight,p=r||{},h=p.orderYear,f=p.productCode,x=p.customerInfo,g=p.staffInfo,Z=p.managerInfo,v=(x||{}).fullName,b=(g||{}).fullName,m=(Z||{}).fullName,j=f||v||b||m||"";-1===i.findIndex((function(n){return n===j}))&&(i=[].concat((0,s.Z)(i),[j]));var k={totalMoney:o,totalQuantity:u,totalWeight:d,label:j};h===a?c=[].concat((0,s.Z)(c),[k]):l=[].concat((0,s.Z)(l),[k])},h=0;h<e.length;h++)p(h);for(var f=[],x=[],g=[],Z=[],v=[],b=[],m=function(n){var e=i[n],t=c.find((function(n){return n.label===e})),r=l.find((function(n){return n.label===e})),o=t||{},a=o.totalMoney,u=o.totalQuantity,d=o.totalWeight,p=r||{},h=p.totalMoney,m=p.totalQuantity,j=p.totalWeight;f=[].concat((0,s.Z)(f),[a||0]),x=[].concat((0,s.Z)(x),[u||0]),g=[].concat((0,s.Z)(g),[d||0]),Z=[].concat((0,s.Z)(Z),[h||0]),v=[].concat((0,s.Z)(v),[m||0]),b=[].concat((0,s.Z)(b),[j||0])},y=0;y<i.length;y++)m(y);var P=[{label:"N\u0103m "+a,data:f,backgroundColor:w.Z.rgbaPrimary},{label:"N\u0103m "+(a-1),data:Z,backgroundColor:w.Z.chartGreen}],O=[{label:"N\u0103m "+a,data:o?x:g,backgroundColor:w.Z.rgbaPrimary},{label:"N\u0103m "+(a-1),data:o?v:b,backgroundColor:w.Z.chartGreen}],_=(0,d.useState)([P[0]]),D=(0,u.Z)(_,2),M=D[0],z=D[1],A=(0,d.useState)([O[0]]),F=(0,u.Z)(A,2),L=F[0],Q=F[1],H=(0,d.useState)(!1),W=(0,u.Z)(H,2),G=W[0],Y=W[1],K=(0,d.useState)(!1),q=(0,u.Z)(K,2),B=q[0],V=q[1],U={labels:i,datasets:M},$={labels:i,datasets:L},X=function(){var n=0;return f.forEach((function(e){return n+=e})),n.toLocaleString()}(),J={responsive:!0,plugins:{legend:{position:"top"}}},nn=(0,E.jsx)(j.$Q,{options:J,data:U}),en=(0,E.jsx)(j.$Q,{options:J,data:$});return(0,d.useEffect)((function(){z([P[0]]),Q([O[0]])}),[e]),(0,d.useEffect)((function(){Y(!1),V(!1)}),[t]),(0,E.jsxs)(C,{children:[(0,E.jsx)(N,{children:"B\xc1O C\xc1O DOANH S\u1ed0 TI\u1ec0N"}),(0,E.jsxs)(k.Z,{children:[(0,E.jsxs)("p",{children:["T\u1ed5ng doanh s\u1ed1 :"," ",(0,E.jsxs)(S,{children:[X," \u0111"]})]}),(0,E.jsx)(T,{children:(0,E.jsxs)(R,{children:[(0,E.jsx)("input",{type:"checkbox",checked:G,onChange:function(n){var e=n.target.checked;z(e?P:[P[0]]),Y(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi c\xf9ng k\u1ef3 n\u0103m ngo\xe1i"})]})}),nn]}),(0,E.jsx)(N,{children:"B\xc1O C\xc1O DOANH S\u1ed0 THEO S\u1ea2N L\u01af\u1ee2NG CHI TI\u1ebeT"}),(0,E.jsxs)(k.Z,{children:[(0,E.jsx)(T,{children:(0,E.jsxs)(R,{children:[(0,E.jsx)("input",{type:"checkbox",checked:B,onChange:function(n){var e=n.target.checked;Q(e?O:[O[0]]),V(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi c\xf9ng k\u1ef3 n\u0103m ngo\xe1i"})]})}),en]})]})};O.defaultProps={};var _,D,M,z,A,F=O,L=P.ZP.div(_||(_=(0,y.Z)(["\n  // font-size: 12px;\n  // padding: 10px 10px 120px;\n"]))),Q=P.ZP.span(D||(D=(0,y.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: ",";\n"])),w.Z.primary),H=P.ZP.p(M||(M=(0,y.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n"])),w.Z.secondary),W=P.ZP.div(z||(z=(0,y.Z)(["\n  display: flex;\n  margin: 0 30px 0 0;\n"]))),G=P.ZP.div(A||(A=(0,y.Z)(["\n  display: flex;\n  margin: 15px 0;\n"])));m.kL.register(m.uw,m.f$,m.ZL,m.Dx,m.u,m.De);var Y=function(n){for(var e=n.chartData,t=n.reportType,r=n.startOfTimeRange,o="quantity"===I.VP,a=new Date(r),i=a.getFullYear(),c=a.getMonth(),l=[],p=[],h=[],f=[],x=function(n){var t=e[n],r=t._id,o=t.totalMoney,a=t.totalQuantity,u=t.totalWeight,d=r||{},x=d.orderYear,g=d.orderMonth,Z=d.productCode;-1===l.findIndex((function(n){return n===Z}))&&(l=[].concat((0,s.Z)(l),[Z]));var v={totalMoney:o,totalQuantity:a,totalWeight:u,label:Z};x===i?g===c?p=[].concat((0,s.Z)(p),[v]):h=[].concat((0,s.Z)(h),[v]):0===c&&11===g?h=[].concat((0,s.Z)(h),[v]):f=[].concat((0,s.Z)(f),[v])},g=0;g<e.length;g++)x(g);for(var Z=[],v=[],b=[],m=[],y=[],P=[],C=[],S=[],N=[],R=function(n){var e=l[n],t=p.find((function(n){return n.label===e})),r=h.find((function(n){return n.label===e})),o=f.find((function(n){return n.label===e})),a=t||{},i=a.totalMoney,c=a.totalQuantity,u=a.totalWeight,d=r||{},x=d.totalMoney,g=d.totalQuantity,j=d.totalWeight,k=o||{},w=k.totalMoney,R=k.totalQuantity,T=k.totalWeight;Z=[].concat((0,s.Z)(Z),[i||0]),v=[].concat((0,s.Z)(v),[c||0]),b=[].concat((0,s.Z)(b),[u||0]),m=[].concat((0,s.Z)(m),[x||0]),y=[].concat((0,s.Z)(y),[g||0]),P=[].concat((0,s.Z)(P),[j||0]),C=[].concat((0,s.Z)(C),[w||0]),S=[].concat((0,s.Z)(S),[R||0]),N=[].concat((0,s.Z)(N),[T||0])},T=0;T<l.length;T++)R(T);var O=c+1,_=0===c?"Th\xe1ng 12 - N\u0103m "+(i-1):"Th\xe1ng "+c+" - N\u0103m "+i,D=[{label:"Th\xe1ng "+O+" - N\u0103m "+i,data:Z,backgroundColor:w.Z.rgbaPrimary},{label:_,data:m,backgroundColor:w.Z.chartGreen},{label:"Th\xe1ng "+O+" - N\u0103m "+(i-1),data:C,backgroundColor:w.Z.purple}],M=[{label:"Th\xe1ng "+O+" - N\u0103m "+i,data:o?v:b,backgroundColor:w.Z.rgbaPrimary},{label:_,data:o?y:P,backgroundColor:w.Z.chartGreen},{label:"Th\xe1ng "+O+" - N\u0103m "+(i-1),data:o?S:N,backgroundColor:w.Z.purple}],z=function(){var n=0;return Z.forEach((function(e){return n+=e})),n.toLocaleString()}(),A=(0,d.useState)([D[0]]),F=(0,u.Z)(A,2),Y=F[0],K=F[1],q=(0,d.useState)([M[0]]),B=(0,u.Z)(q,2),V=B[0],U=B[1],$=(0,d.useState)(!1),X=(0,u.Z)($,2),J=X[0],nn=X[1],en=(0,d.useState)(!1),tn=(0,u.Z)(en,2),rn=tn[0],on=tn[1],an=(0,d.useState)(!1),cn=(0,u.Z)(an,2),sn=cn[0],ln=cn[1],un=(0,d.useState)(!1),dn=(0,u.Z)(un,2),pn=dn[0],hn=dn[1],fn={labels:l,datasets:Y},xn={labels:l,datasets:V},gn={indexAxis:"y",responsive:!0,plugins:{legend:{position:"top"}}},Zn=(0,E.jsx)(j.$Q,{options:gn,data:fn}),vn=(0,E.jsx)(j.$Q,{options:gn,data:xn});return(0,d.useEffect)((function(){K([D[0]]),U([M[0]])}),[e]),(0,d.useEffect)((function(){nn(!1),ln(!1),on(!1),hn(!1)}),[t]),(0,E.jsxs)(L,{children:[(0,E.jsx)(H,{children:"B\xc1O C\xc1O DOANH S\u1ed0 TI\u1ec0N"}),(0,E.jsxs)(k.Z,{children:[(0,E.jsxs)("p",{children:["T\u1ed5ng doanh s\u1ed1 :"," ",(0,E.jsxs)(Q,{children:[z," \u0111"]})]}),(0,E.jsxs)(G,{children:[(0,E.jsxs)(W,{children:[(0,E.jsx)("input",{type:"checkbox",checked:J,onChange:function(n){var e=n.target.checked;if(e){var t=(0,s.Z)(Y),r=Y.length;t[1]=D[1],2===r&&(t[2]=Y[1]),K(t)}else{var o=(0,s.Z)(Y);o.splice(1,1),K(o)}nn(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi th\xe1ng tr\u01b0\u1edbc"})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)("input",{type:"checkbox",checked:sn,onChange:function(n){var e=n.target.checked;if(e){if(-1===Y.findIndex((function(n){return n.backgroundColor===w.Z.purple}))){var t=[].concat((0,s.Z)(Y),[D[2]]);K(t)}}else{var r=(0,s.Z)(Y);r=r.filter((function(n){return n.backgroundColor!==w.Z.purple})),K(r)}ln(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi c\xf9ng k\u1ef3 n\u0103m ngo\xe1i"})]})]}),Zn]}),(0,E.jsx)(H,{children:"B\xc1O C\xc1O DOANH S\u1ed0 THEO S\u1ea2N L\u01af\u1ee2NG CHI TI\u1ebeT"}),(0,E.jsxs)(k.Z,{children:[(0,E.jsxs)(G,{children:[(0,E.jsxs)(W,{children:[(0,E.jsx)("input",{type:"checkbox",checked:rn,onChange:function(n){var e=n.target.checked;if(e){var t=(0,s.Z)(V),r=V.length;t[1]=M[1],2===r&&(t[2]=V[1]),U(t)}else{var o=(0,s.Z)(V);o.splice(1,1),U(o)}on(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi th\xe1ng tr\u01b0\u1edbc"})]}),(0,E.jsxs)(W,{children:[(0,E.jsx)("input",{type:"checkbox",checked:pn,onChange:function(n){var e=n.target.checked;if(e){if(-1===V.findIndex((function(n){return n.backgroundColor===w.Z.purple}))){var t=[].concat((0,s.Z)(V),[M[2]]);U(t)}}else{var r=(0,s.Z)(V);r=r.filter((function(n){return n.backgroundColor!==w.Z.purple})),U(r)}hn(e)}}),(0,E.jsx)("span",{children:"\u2002So v\u1edbi c\xf9ng k\u1ef3 n\u0103m ngo\xe1i"})]})]}),vn]})]})};Y.defaultProps={};var K,q,B,V,U,$,X,J,nn,en,tn,rn,on,an=Y,cn=t(3354),sn=t(3182),ln=P.ZP.div(K||(K=(0,y.Z)(["\n  font-size: 12px;\n  padding: 50px 0 120px;\n  display: ",";\n"])),(function(n){return n.isDisplay?"block":"none"})),un=P.ZP.div(q||(q=(0,y.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 7;\n  width: 100%;\n  display: flex;\n  font-size: 16px;\n  position: fixed;\n  padding: 10px 10px;\n  margin: 0 0 10px 0;\n  align-items: center;\n  background-color: #fff;\n  justify-content: space-between;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  @media (min-width: 1200px) {\n    left: 25%;\n    width: 50%;\n  }\n"]))),dn=P.ZP.div(B||(B=(0,y.Z)(["\n  padding: 20px 10px;\n"]))),pn=P.ZP.div(V||(V=(0,y.Z)(["\n  display: flex;\n  margin: 0 0 10px;\n  align-items: center;\n"]))),hn=P.ZP.div(U||(U=(0,y.Z)(["\n  display: flex;\n  margin: 10px 0 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),fn=P.ZP.p($||($=(0,y.Z)(["\n  width: 75px;\n  font-size: 12px;\n"]))),xn=(P.ZP.div(X||(X=(0,y.Z)(["\n  text-align: center;\n"]))),P.ZP.span(J||(J=(0,y.Z)(["\n  padding: 1px 5px;\n  font-weight: 700;\n  font-size: 15px;\n  border-radius: 3px;\n  color: ",";\n"])),w.Z.primary),P.ZP.p(nn||(nn=(0,y.Z)(["\n  margin: 20px 10px 0;\n  font-weight: 700;\n  color: ",";\n"])),w.Z.lightBlack)),gn=(P.ZP.p(en||(en=(0,y.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n"]))),P.ZP.div(tn||(tn=(0,y.Z)(["\n  display: flex;\n  margin: 0 30px 0 0;\n"]))),P.ZP.div(rn||(rn=(0,y.Z)(["\n  display: flex;\n  margin: 15px 0;\n"]))),P.ZP.input(on||(on=(0,y.Z)(["\n  border: none;\n  padding: 1px 5px;\n  margin: 0 10px;\n  font-size: 12px;\n  font-weight: 300;\n  border-bottom: 1px solid ",";\n"])),w.Z.secondary)),Zn=t(7123),vn=t(7119),bn=function(n){var e=n.isDisplay,t=(0,h.v9)((function(n){return n.authReducer})).viewerQuery,r=t||{},o=r.roles,a=r.permissions,i=o.includes(I.If.CUSTOMER)||o.includes(I.If.STAFF_OF_CUSTOMER),c=i?[t]:[],m=o.includes(I.If.DIRECTOR)||o.includes(I.If.MANAGER),j=a.includes(vn.gz.CAN_VIEW_REPORT_OF_ALL_STAFFS_CUSTOMERS),k=new Date,y=(0,f.Z)(k),P=(0,x.Z)(k),w=function(){var n=k.getMonth()+1,e=n>9?n:"0"+n,t=k.getFullYear();return"".concat(t,"-").concat(e)}(),C=m||j?I.R6:[I.R6[0],I.R6[1]],S=(0,d.useState)(C[0].value),N=(0,u.Z)(S,2),R=N[0],T=N[1],O=(0,d.useState)(""),_=(0,u.Z)(O,2),D=_[0],M=_[1],z=(0,d.useState)(""),A=(0,u.Z)(z,2),L=A[0],Q=A[1],H=(0,d.useState)(w),W=(0,u.Z)(H,2),G=W[0],Y=W[1],K=(0,d.useState)(c),q=(0,u.Z)(K,2),B=q[0],V=q[1],U=(0,d.useState)([]),$=(0,u.Z)(U,2),X=$[0],J=$[1],nn=(0,d.useState)([]),en=(0,u.Z)(nn,2),tn=en[0],rn=en[1],on=(0,d.useState)([]),bn=(0,u.Z)(on,2),mn=bn[0],jn=bn[1],kn=(0,d.useState)(void 0),yn=(0,u.Z)(kn,2),Pn=yn[0],wn=yn[1],Cn=Pn?[Pn]:[I.If.SALES_STAFF,I.If.MANAGER],Sn=new Date(G),Nn="".concat(Sn.getMonth()+1,"/").concat(Sn.getFullYear()),Rn=R===I.R6[0].value,Tn=R===I.R6[1].value,In=R===I.R6[2].value,En=R===I.R6[3].value,On=!i&&Rn,_n=Rn?"1":"",Dn=[{value:"all",label:"T\u1ea5t c\u1ea3"},{value:I.If.CUSTOMER,label:"".concat(_n," Kh\xe1ch h\xe0ng")},{value:I.If.SALES_STAFF,label:"".concat(_n," Nh\xe2n vi\xean")}],Mn=(0,d.useState)(Dn[0].value),zn=(0,u.Z)(Mn,2),An=zn[0],Fn=zn[1],Ln="all"!==An,Qn=Ln?An:void 0,Hn=D?new Date(D):y,Wn=L?new Date(L):P,Gn=(0,f.Z)(new Date(G)),Yn=(0,x.Z)(new Date(G)),Kn=Rn?Gn:Hn,qn=Rn?Yn:Wn,Bn=B.length>0,Vn=X.length>0,Un=tn.length>0,$n=mn.length>0,Xn=Bn&&1===B.length?"c\u1ee7a ".concat(B[0].fullName):"",Jn=B.map((function(n){return n._id})),ne=X.map((function(n){return n.code})),ee=(0,p.a)(Zn.ES,{variables:{filter:(0,l.Z)((0,l.Z)({startOfTimeRange:Kn,endOfTimeRange:qn,isMonthReportType:Rn},Bn&&{ofAccountIds:Jn}),Vn&&{ofProductCodes:ne})},fetchPolicy:"cache-and-network"}).data,te=tn.map((function(n){return n._id})),re=(0,p.a)(Zn._c,{variables:{filter:(0,l.Z)({startOfTimeRange:Hn,endOfTimeRange:Wn},Un&&{ofCustomerAccountIds:te})},fetchPolicy:"cache-and-network"}).data,oe=Pn===I.If.MANAGER,ae=mn.map((function(n){return n._id})),ie=(0,p.a)(Zn.tH,{variables:{filter:(0,l.Z)((0,l.Z)({startOfTimeRange:Hn,endOfTimeRange:Wn},$n&&{ofStaffAccountIds:ae}),oe&&{isManagerRole:oe})},fetchPolicy:"cache-and-network"}).data,ce=ee&&ee.salesReportOfProducts||[],se=ie&&ie.salesReportOfStaffs||[],le=re&&re.salesReportOfCustomers||[],ue=function(){switch(R){case C[0].value:return{name:"K\u1ebft qu\u1ea3 doanh s\u1ed1 th\xe1ng ".concat(Nn," ").concat(Xn),chartData:[]};case C[1].value:return{name:"K\u1ebft qu\u1ea3 b\xe1n 1 S\u1ea3n ph\u1ea9m ho\u1eb7c Nh\xf3m s\u1ea3n ph\u1ea9m",chartData:ce};case C[2].value:return{name:"So s\xe1nh k\u1ebft qu\u1ea3 b\xe1n h\xe0ng c\u1ee7a Nh\xe2n vi\xean/Kh\xe1ch h\xe0ng",chartData:se};case C[3].value:return{name:"So s\xe1nh k\u1ebft qu\u1ea3 b\xe1n h\xe0ng c\u1ee7a Nh\xe2n vi\xean/Kh\xe1ch h\xe0ng",chartData:le};default:return null}}(),de=Rn?(0,E.jsx)(an,{reportType:R,chartData:ce,startOfTimeRange:Gn}):(0,E.jsx)(F,{reportType:R,startOfTimeRange:D,chartData:ue.chartData}),pe=(0,E.jsxs)(pn,{children:[(0,E.jsx)("p",{children:"C\u1ee7a:"}),(0,E.jsx)(sn.Z,{customerWidth:"180px",options:Dn,onChange:function(n){return function(n){Fn(n.target.value),V([])}(n)}}),Ln&&(0,E.jsx)(b.Z,{roles:[Qn],isSelectOne:Rn,selectedList:B,onClickSelectResultItem:function(n){var e=n&&n.node;-1===B.findIndex((function(n){return n._id===e._id}))&&V([e])}})]}),he=(0,E.jsxs)(E.Fragment,{children:[Vn&&(0,E.jsx)("p",{children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m \u0111\xe3 ch\u1ecdn:"}),X.map((function(n,e){return(0,E.jsxs)(hn,{children:[(0,E.jsxs)("p",{children:[e+1,". ",n.code," - ",(0,Z.Z)(n.name)]}),(0,E.jsx)(v.Z,{label:"Xo\xe1",onClick:function(){return function(n){var e=X.filter((function(e){return e.code!==n.code}));J(e)}(n)}})]},e)})),(0,E.jsxs)(pn,{children:[(0,E.jsx)(fn,{children:"S\u1ea3n ph\u1ea9m:"}),(0,E.jsx)(g.Z,{selectedList:X,onClickSelectResultItem:function(n){var e=n&&n.node;if(-1===X.findIndex((function(n){return n.code===e.code}))){var t=[].concat((0,s.Z)(X),[e]);J(t)}}})]})]}),fe=(0,E.jsxs)(E.Fragment,{children:[!!mn.length&&(0,E.jsx)("p",{children:"Danh s\xe1ch nh\xe2n vi\xean \u0111\xe3 ch\u1ecdn:"}),mn.map((function(n,e){return(0,E.jsxs)(hn,{children:[(0,E.jsxs)("p",{children:[e+1,". ",n.fullName," - ",n.phoneNumber]}),(0,E.jsx)(v.Z,{label:"Xo\xe1",onClick:function(){return function(n){var e=mn.filter((function(e){return e._id!==n._id}));jn(e),0===e.length&&wn(void 0)}(n)}})]},e)})),(0,E.jsxs)(pn,{children:[(0,E.jsx)(fn,{style:{width:90},children:"Nh\xe2n vi\xean:"}),(0,E.jsx)(b.Z,{roles:Cn,selectedList:mn,onClickSelectResultItem:function(n){var e=n&&n.node;if(-1===mn.findIndex((function(n){return n._id===e._id}))){var t=[].concat((0,s.Z)(mn),[e]);if(jn(t),!Pn){var r=e.roles;wn(r[0])}}}})]})]}),xe=(0,E.jsxs)(E.Fragment,{children:[!!tn.length&&(0,E.jsx)("p",{children:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 ch\u1ecdn:"}),tn.map((function(n,e){return(0,E.jsxs)(hn,{children:[(0,E.jsxs)("p",{children:[e+1,". ",n.fullName," - ",n.phoneNumber]}),(0,E.jsx)(v.Z,{label:"Xo\xe1",onClick:function(){return function(n){var e=tn.filter((function(e){return e._id!==n._id}));rn(e)}(n)}})]},e)})),(0,E.jsxs)(pn,{children:[(0,E.jsx)(fn,{style:{width:90},children:"Kh\xe1ch h\xe0ng:"}),(0,E.jsx)(b.Z,{selectedList:tn,roles:[I.If.CUSTOMER],onClickSelectResultItem:function(n){var e=n&&n.node;if(-1===tn.findIndex((function(n){return n._id===e._id}))){var t=[].concat((0,s.Z)(tn),[e]);rn(t)}}})]})]}),ge=(0,E.jsxs)(pn,{children:["Th\u1eddi gian:"," ",(0,E.jsx)(gn,{type:"date",value:D,onChange:function(n){return M(n.target.value)}})," ","-"," ",(0,E.jsx)(gn,{type:"date",value:L,onChange:function(n){return Q(n.target.value)}})]}),Ze=(0,E.jsxs)(pn,{children:["Th\u1eddi gian:"," ",(0,E.jsx)(gn,{type:"month",value:G,onChange:function(n){return Y(n.target.value)}})]});return(0,E.jsxs)(ln,{isDisplay:e,children:[(0,E.jsx)(un,{children:(0,E.jsx)("h5",{children:"B\xc1O C\xc1O KINH DOANH"})}),(0,E.jsxs)(cn.Z,{children:[(0,E.jsxs)(pn,{children:[(0,E.jsx)(fn,{children:"B\xe1o c\xe1o:"}),(0,E.jsx)(sn.Z,{value:R,options:C,onChange:function(n){return function(n){var e=n.target.value;T(e),V([]),M(""),Q(""),J([]),Fn(Dn[0].value)}(n)}})]}),!Rn&&Tn&&he,In&&fe,En&&xe,Rn&&Ze,!Rn&&ge,On&&pe]}),(0,E.jsx)(xn,{children:ue.name}),(0,E.jsx)(dn,{children:de})]})}},1359:function(n,e,t){t.d(e,{Z:function(){return W}});var r,o,a,i,c,s,l,u,d,p,h,f,x,g,Z=t(4165),v=t(5861),b=t(1413),m=t(885),j=t(7313),k=t(3306),y=t(1677),P=t(6069),w=t(2206),C=t(6947),S=t(168),N=t(3115),R=t(1237),T=N.ZP.div(r||(r=(0,S.Z)(["\n  width: 100%;\n  margin: 12px 0 0;\n"]))),I=(N.ZP.div(o||(o=(0,S.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),N.ZP.div(a||(a=(0,S.Z)(["\n  position: relative;\n  border-bottom: solid 1px #c4c4c4;\n"])))),E=(N.ZP.div(i||(i=(0,S.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),N.ZP.input(c||(c=(0,S.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding}))),O=N.ZP.div(s||(s=(0,S.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),_=N.ZP.p(l||(l=(0,S.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),D=(N.ZP.div(u||(u=(0,S.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),N.ZP.div(d||(d=(0,S.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  min-width: 280px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),M=N.ZP.div(p||(p=(0,S.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: solid 1px ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),R.Z.secondary,R.Z.rgbaPrimary),z=N.ZP.p(h||(h=(0,S.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),A=N.ZP.div(f||(f=(0,S.Z)(["\n  margin: 10px auto;\n"]))),F=(N.ZP.input(x||(x=(0,S.Z)(["\n  display: none;\n"]))),N.ZP.div(g||(g=(0,S.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),R.Z.lightRed)),L=t(7123),Q=t(6417),H=function(n){var e,t=n.roles,r=n.notBeCustomer,o=n.isError,a=n.isSelectOne,i=n.searchPlaceholder,c=(n.searchGuide,n.onClickSelectResultItem),s=n.emptySearchResultMessage,l=n.selectedList,u=["node.fullName","node.address","node.phoneNumber"],d=(0,j.useState)(""),p=(0,m.Z)(d,2),h=p[0],f=p[1],x=(0,j.useState)([]),g=(0,m.Z)(x,2),S=g[0],N=g[1],R=(0,k.t)(L.q6,{variables:{filter:(0,b.Z)((0,b.Z)({text:h||"a"},t&&{roles:t}),r&&{notBeCustomer:r})},fetchPolicy:"cache-and-network"}),H=(0,m.Z)(R,2),W=H[0],G=H[1],Y=G.data,K=G.fetchMore,q=Y&&(null===(e=Y.accounts)||void 0===e?void 0:e.pageInfo)||{},B=q.hasNextPage,V=S&&0===S.length,U=(0,j.useState)(!1),$=(0,m.Z)(U,2),X=$[0],J=$[1],nn=!!h,en=(0,j.useRef)(null),tn=(0,j.useRef)(null),rn=X?1:0,on=X?"500px":"0",an=X&&!V?"block":"none",cn=X?"0 0 0 10px":"0 0 0 24px",sn=X?"30px":"calc(100% - 20px)",ln=function(n){c(n),a&&J(!1)},un=(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(I,{children:[(0,Q.jsxs)("div",{onClick:function(){J(!0),en.current&&en.current.focus()},children:[(0,Q.jsx)(E,{ref:en,value:h,disabled:!X,placeholder:i,searchinputpadding:cn,onChange:function(n){return f(n.target.value)}}),(0,Q.jsx)(O,{searchiconright:sn,children:"\ud83d\udd0e"}),(0,Q.jsx)(_,{upiconopacity:rn,onClick:function(){J(!1),f("")},children:"\u2716"})]}),(0,Q.jsxs)(D,{modalheight:on,modaldisplay:an,children:[(0,Q.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),V?null:S.map((function(n,e){var t=u.map((function(e){return(0,P.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,Q.jsx)(M,{onClick:function(){return ln(n)},children:(0,Q.jsx)(z,{children:r})},e)})),!!B&&(0,Q.jsx)(A,{children:(0,Q.jsx)(y.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){K({variables:{cursor:q.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,w.d0)("accounts",t,n)}})}})})]})]}),(0,Q.jsx)(C.Z,{isError:o})]});return(0,j.useEffect)((function(){var n=function(n){tn.current&&!tn.current.contains(n.target)&&(J(!1),f(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[tn]),(0,j.useEffect)((function(){var n=function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var e,t,r,o;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W();case 2:t=n.sent,r=t&&(null===(e=t.data.accounts)||void 0===e?void 0:e.edges)||[],o=r.filter((function(n){var e=(n||{}).node.phoneNumber;return-1===l.findIndex((function(n){var t=n||{},r=t.node,o=t.phoneNumber;return r?r.phoneNumber===e:o===e}))})),N(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[l,h]),(0,Q.jsxs)("div",{style:{width:"100%"},ref:tn,children:[(0,Q.jsx)(T,{ref:tn,children:un}),nn&&!S.length&&(0,Q.jsx)(F,{children:s})]})};H.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var W=H},6879:function(n,e,t){t.d(e,{Z:function(){return H}});var r,o,a,i,c,s,l,u,d,p,h,f,x,g,Z=t(4165),v=t(5861),b=t(885),m=t(7313),j=t(3306),k=t(1677),y=t(6069),P=t(2206),w=t(168),C=t(3115),S=t(1237),N=(C.ZP.div(r||(r=(0,w.Z)(["\n  margin: 0;\n  border-radius: 3px;\n  padding: 5px 5px 1px;\n  border: solid 1px #c4c4c4;\n"]))),C.ZP.div(o||(o=(0,w.Z)(["\n  position: relative;\n"])))),R=(C.ZP.div(a||(a=(0,w.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  display: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchinputmaskdisplay})),C.ZP.div(i||(i=(0,w.Z)(["\n  margin-top: 10px;\n  border-bottom: solid 1px #c4c4c4;\n"])))),T=C.ZP.input(c||(c=(0,w.Z)(["\n  color: #777;\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  padding: ",";\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.searchinputpadding})),I=C.ZP.div(s||(s=(0,w.Z)(["\n  top: 5px;\n  height: 100%;\n  position: absolute;\n  right: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.searchiconright})),E=C.ZP.p(l||(l=(0,w.Z)(["\n  top: 5px;\n  right: 10px;\n  height: 100%;\n  position: absolute;\n  transition: all 0.5s;\n  opacity: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.upiconopacity})),O=(C.ZP.div(u||(u=(0,w.Z)(["\n  margin: 0;\n  width: 100%;\n  border-radius: 3px;\n  margin: 0 0 3px 0;\n  padding: 5px 7px 2px;\n  border: solid 1px #c4c4c4;\n  background-color: #f7f7f7;\n"]))),C.ZP.div(d||(d=(0,w.Z)(["\n  left: 0;\n  top: 30px;\n  z-index: 7;\n  width: 100%;\n  height: 300px;\n  overflow-y: auto;\n  padding: 20px 10px;\n  position: absolute;\n  border-radius: 3px;\n  transition: all 0.5s;\n  background-color: #fff;\n  border: solid 1px #f7f7f7;\n  display: ",";\n  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background: #ccc;\n  }\n  &::-webkit-scrollbar-track:hover {\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #999;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background: #transparent;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #transparent;\n    }\n  }\n"])),(function(n){return n.modaldisplay}))),_=C.ZP.div(p||(p=(0,w.Z)(["\n  padding: 3px 0;\n  cursor: pointer;\n  margin: 7px 0 0;\n  border-bottom: 1px solid ",";\n  &:hover {\n    padding: 3px 10px;\n    background-color: ",";\n  }\n"])),S.Z.bgGray,S.Z.rgbaPrimary),D=C.ZP.p(h||(h=(0,w.Z)(["\n  color: #777;\n  font-size: 12px;\n"]))),M=C.ZP.div(f||(f=(0,w.Z)(["\n  margin: 10px auto;\n"]))),z=(C.ZP.input(x||(x=(0,w.Z)(["\n  display: none;\n"]))),C.ZP.div(g||(g=(0,w.Z)(["\n  margin: -10px 0 0;\n  color: ",";\n"])),S.Z.lightRed)),A=t(7123),F=t(6947),L=t(6417),Q=function(n){var e,t=n.isSelectOne,r=n.isError,o=n.searchPlaceholder,a=(n.searchGuide,n.onClickSelectResultItem),i=n.emptySearchResultMessage,c=n.selectedList,s=["node.code","node.name[0].showText"],l=(0,m.useState)(""),u=(0,b.Z)(l,2),d=u[0],p=u[1],h=(0,m.useState)([]),f=(0,b.Z)(h,2),x=f[0],g=f[1],w=(0,j.t)(A.tT,{variables:{filter:{text:d||"a"}}}),C=(0,b.Z)(w,2),S=C[0],Q=C[1],H=Q.data,W=Q.fetchMore,G=H&&(null===(e=H.products)||void 0===e?void 0:e.pageInfo)||{},Y=G.hasNextPage,K=x&&0===x.length,q=(0,m.useState)(!1),B=(0,b.Z)(q,2),V=B[0],U=B[1],$=!!d,X=(0,m.useRef)(null),J=(0,m.useRef)(null),nn=V?1:0,en=V?"500px":"0",tn=V&&!K?"block":"none",rn=V?"0 0 0 10px":"0 0 0 24px",on=V?"30px":"calc(100% - 20px)",an=function(n){a(n),t&&U(!1)},cn=(0,L.jsxs)(N,{children:[(0,L.jsxs)(R,{onClick:function(){U(!0),X.current&&X.current.focus()},children:[(0,L.jsx)(T,{ref:X,value:d,disabled:!V,placeholder:o,searchinputpadding:rn,onChange:function(n){return p(n.target.value)}}),(0,L.jsx)(I,{searchiconright:on,children:"\ud83d\udd0e"}),(0,L.jsx)(E,{upiconopacity:nn,onClick:function(){U(!1),p("")},children:"\u2716"})]}),(0,L.jsx)(F.Z,{isError:r}),(0,L.jsxs)(O,{modalheight:en,modaldisplay:tn,children:[(0,L.jsx)("p",{children:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm:"}),K?null:x.map((function(n,e){var t=s.map((function(e){return(0,y.tO)(n,e)})),r="";return t.forEach((function(n,e){r+=e>0?" - ".concat(n):n})),(0,L.jsx)(_,{onClick:function(){return an(n)},children:(0,L.jsx)(D,{children:r})},e)})),!!Y&&(0,L.jsx)(M,{children:(0,L.jsx)(k.Z,{size:"small",label:"T\u1ea3i th\xeam",onClick:function(){W({variables:{cursor:G.endCursor},updateQuery:function(n,e){var t=e.fetchMoreResult;return(0,P.d0)("products",t,n)}})}})})]})]});return(0,m.useEffect)((function(){var n=function(n){J.current&&!J.current.contains(n.target)&&(U(!1),p(""))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[J]),(0,m.useEffect)((function(){var n=function(){var n=(0,v.Z)((0,Z.Z)().mark((function n(){var e,t,r,o;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S();case 2:t=n.sent,r=t&&(null===(e=t.data.products)||void 0===e?void 0:e.edges)||[],o=r.filter((function(n){var e=(n||{}).node.code;return-1===c.findIndex((function(n){var t=n||{},r=t.node,o=t.code;return r?r.code===e:o===e}))})),g(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[c,d]),(0,L.jsxs)("div",{style:{width:"100%"},ref:J,children:[cn,$&&!x.length&&(0,L.jsx)(z,{children:i})]})};Q.defaultProps={selectedList:[],searchQueryPathName:"",onClickSelectResultItem:function(){},searchPlaceholder:"Click \u0111\u1ec3 t\xecm ki\u1ebfm...",searchGuide:"Nh\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm ki\u1ebfm...",emptySearchResultMessage:"Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\xe0o"};var H=Q},6947:function(n,e,t){t.d(e,{Z:function(){return p}});t(7313);var r,o,a=t(168),i=t(3115),c=i.ZP.div(r||(r=(0,a.Z)(["\n  height: 14px;\n  overflow: hidden;\n"]))),s=i.ZP.p(o||(o=(0,a.Z)(["\n  color: #dc3545;\n  font-size: 10px;\n  line-height: 10px;\n  transition: all 0.5s;\n  margin: 3px 0 0 5px;\n  transform: ",";\n  opacity: ",";\n"])),(function(n){return n.textTransform}),(function(n){return n.isError?1:0})),l=t(3070),u=t(6417),d=function(n){var e=n.isError,t=n.errorMessage,r=e?"translateY(0)":"translateY(110%)";return(0,u.jsx)(c,{children:(0,u.jsx)(s,{isError:e,textTransform:r,children:t})})};d.defaultProps={isError:!1,errorMessage:l.ug.REQUIRED};var p=d},2180:function(n,e,t){t.d(e,{Z:function(){return c}});t(7313);var r,o=t(168),a=t(3115).ZP.p(r||(r=(0,o.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),i=t(6417),c=function(n){var e=n.label;return(0,i.jsx)(a,{children:e})}},3182:function(n,e,t){t.d(e,{Z:function(){return x}});var r,o,a=t(1413),i=(t(7313),t(2180)),c=t(6947),s=t(168),l=t(3115),u=t(1237),d=l.ZP.div(r||(r=(0,s.Z)(["\n  height: 30px;\n  margin: 0 10px 0 5px;\n  width: ",";\n"])),(function(n){return n.customerWidth})),p=l.ZP.select(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 27px;\n  border: none;\n  font-size: 13px;\n  font-weight: 300;\n  border-bottom: 1px solid ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n"])),u.Z.secondary),h=t(6417),f=function(n){var e=n.label,t=n.options,r=n.name,o=n.placeholder,s=n.validations,l=n.register,u=n.isDisabled,f=n.isError,x=n.onChange,g=n.errorMessage,Z=n.setFieldValue,v=n.dependencyFieldName,b=n.customerWidth;return(0,h.jsxs)(d,{customerWidth:b,children:[e&&(0,h.jsx)(i.Z,{label:e}),(0,h.jsxs)(p,(0,a.Z)((0,a.Z)({disabled:u,onChange:function(n){x&&x(n),Z&&(Z(r,n.target.value),Z(v,void 0))}},l(r,s)),{},{children:[(0,h.jsxs)("option",{value:"",disabled:!0,children:["--",o,"--"]}),t.map((function(n,e){return(0,h.jsx)("option",{value:n.value,children:n.label},e)}))]})),(0,h.jsx)(c.Z,{isError:f,errorMessage:g})]})};f.defaultProps={label:"",options:[],isDisabled:!1,name:"selectName",validations:{},customerWidth:"100%",register:function(){},setFieldValue:function(n){},dependencyFieldName:"",placeholder:"Vui l\xf2ng ch\u1ecdn..."};var x=f},6881:function(n,e,t){var r=t(2163);e.Z=function(n){if(Array.isArray(n)){var e,t=n||[],o=r.t.getState().commonReducer,a=o&&(null===(e=o.activeLanguage)||void 0===e?void 0:e.locale)||"vi";return(t.find((function(n){return n&&n.locale===a}))||{}).showText||""}return""}},6069:function(n,e,t){t.d(e,{RX:function(){return i},dh:function(){return a},tO:function(){return o},zZ:function(){return c}});var r=t(3070),o=function(n,e){if(e){for(var t=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=t.length;r<o;++r){var a=t[r];if(!(a in n))return;n=n[a]}return n}},a=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(n),r=t.getFullYear(),o=t.getMonth()+1,a=t.getDate(),i=t.getHours(),c=t.getMinutes();return a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,c=c<10?"0"+c:c,e?"".concat(a,"/").concat(o,"/").concat(r," - ").concat(i,":").concat(c):"".concat(a,"/").concat(o,"/").concat(r)},i=function(n,e,t){switch(n){case r.rh.MONEY_ACHIEVE_TYPE:return{unit:"\u0111",type:"Ti\u1ec1n mua"};case r.rh.QUANTITY_ACHIEVE_TYPE:return{unit:"SP",type:"S\u1ed1 l\u01b0\u1ee3ng"};case r.rh.WEIGHT_ACHIEVE_TYPE:return{unit:t,type:"Kh\u1ed1i l\u01b0\u1ee3ng"}}},c=function(n,e){return isNaN(e)?n:"string"===typeof n?n.split(" ").slice(0,parseInt(e,10)).join(" "):n}},2206:function(n,e,t){t.d(e,{FM:function(){return i},d0:function(){return a}});var r=t(4942),o=t(2982);function a(n,e,t){var a=e[n],i=a.edges,c=a.pageInfo;return i.length?(0,r.Z)({},n,{__typename:t[n].__typename,edges:[].concat((0,o.Z)(t[n].edges),(0,o.Z)(i)),pageInfo:c}):t}function i(n,e,t,a,i,c,s){var l=a[n],u=l.edges,d=l.pageInfo,p=[],h=!1;if(t.data){var f=t.data[e],x={node:f},g=!i||i(f);h=g,g&&(p=s?s(u,f):c?[x].concat((0,o.Z)(u)):[].concat((0,o.Z)(u),[x]))}return h?(0,r.Z)({},n,{__typename:a[n].__typename,edges:p,pageInfo:d}):a}}}]);