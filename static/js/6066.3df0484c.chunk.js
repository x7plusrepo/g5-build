"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[6066,9146],{9146:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var i,a=t(1413),r=(t(7313),t(168)),o=t(3115),l=t(1237),s=o.ZP.button(i||(i=(0,r.Z)(["\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  color: #fff;\n  border: none;\n  display: flex;\n  padding: 10px;\n  position: fixed;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 15px 20px;\n  align-items: center;\n  text-transform: uppercase;\n  justify-content: space-around;\n  background-color: ",";\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"])),l.Z.rgbaBlack),c=t(6417),d=function(e){var n=e.label;return(0,c.jsx)(s,(0,a.Z)((0,a.Z)({},e),{},{children:n}))};d.defaultProps={label:"N\xfat b\u1ea5m",onClick:function(){}};var u=d},6066:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var i,a,r,o,l,s=t(4165),c=t(1413),d=t(5861),u=t(2982),h=t(885),p=t(7313),f=t(5627),g=t(3222),m=t(790),x=t(1359),b=t(5222),v=t(2262),w=t(8987),Z=t(9673),k=t(9146),j=t(7532),y=t(168),_=t(3115),S=_.ZP.div(i||(i=(0,y.Z)(["\n  font-size: 12px;\n  padding: 10px 0 120px;\n"]))),C=_.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 0;\n"]))),I=_.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n  justify-content: space-between;\n"]))),P=_.ZP.div(o||(o=(0,y.Z)(["\n  width: 70px;\n"]))),N=_.ZP.div(l||(l=(0,y.Z)(["\n  margin: 10px;\n  background-color: #fff;\n"]))),R=t(5164),A=t(2153),E=t(7123),M=t(3454),T=t(3070),q=t(6417),z=function(e){var n=(0,f.cI)({defaultValues:{}}),t=n.register,i=(n.setValue,n.setError),a=n.clearErrors,r=n.handleSubmit,o=n.formState.errors,l=(0,g.I0)(),y=(0,p.useRef)(null),_=(0,p.useState)(!1),z=(0,h.Z)(_,2),D=z[0],V=z[1],F=(0,p.useState)(!1),U=(0,h.Z)(F,2),L=U[0],G=U[1],H=(0,p.useState)(!1),O=(0,h.Z)(H,2),K=O[0],B=O[1],Y=(0,p.useState)(""),Q=(0,h.Z)(Y,2),W=Q[0],X=Q[1],$=(0,m.D)(M.aF,{refetchQueries:[{query:E.VZ},"GET_NOTIFICATIONS"]}),J=(0,h.Z)($,1)[0],ee=(0,p.useState)([]),ne=(0,h.Z)(ee,2),te=ne[0],ie=ne[1];t("selectedAccounts",{required:!D&&!L&&!K&&!te.length});var ae=function(){var e=(0,d.Z)((0,s.Z)().mark((function e(n){var t,i,a,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,R.S$)()),t=n.title,i=te.map((function(e){return e.node._id})),a=y.current.getContent(),r=function(){var e=[];return K&&(e=[T.If.SALES_STAFF]),L&&(e=[].concat((0,u.Z)(e),[T.If.CUSTOMER])),e}(),o=(0,c.Z)({typeCode:"news",isForAllAccounts:D,title:[{showText:t,locale:"vi"}],content:[{showText:a,locale:"vi"}],beReceivedAccountIds:i,beReceivedRoles:r},W&&{imgUri:W}),e.next=8,J({variables:{data:o}});case 8:e.sent.data&&(setTimeout((function(){l((0,R.S4)())}),500),l((0,A.mm)()));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,q.jsxs)(S,{children:[(0,q.jsxs)(b.Z,{children:[(0,q.jsxs)(C,{children:[(0,q.jsx)(P,{children:"Ti\xeau \u0111\u1ec1:"}),(0,q.jsx)(Z.Z,{name:"title",register:t,isError:!!o.title,validations:{required:!0}})]}),!L&&!K&&(0,q.jsxs)(C,{children:[(0,q.jsx)("input",{type:"checkbox",checked:D,onChange:function(e){te.length&&ie([]),G(!1),B(!1),V(!D)}}),(0,q.jsx)("p",{children:"\u2002G\u1eedi cho t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi"})]}),!D&&!L&&(0,q.jsxs)(C,{children:[(0,q.jsx)("input",{type:"checkbox",checked:K,onChange:function(e){te.length&&ie([]),B(!K)}}),(0,q.jsx)("p",{children:"\u2002G\u1eedi cho t\u1ea5t c\u1ea3 NVKD"})]}),!D&&!K&&(0,q.jsxs)(C,{children:[(0,q.jsx)("input",{type:"checkbox",checked:L,onChange:function(e){te.length&&ie([]),G(!L)}}),(0,q.jsx)("p",{children:"\u2002G\u1eedi cho t\u1ea5t c\u1ea3 Kh\xe1ch h\xe0ng"})]}),!D&&!L&&!K&&(0,q.jsxs)(q.Fragment,{children:[!!te.length&&(0,q.jsx)(C,{children:"Danh s\xe1ch ng\u01b0\u1eddi nh\u1eadn:"}),te.map((function(e,n){return(0,q.jsxs)(I,{children:[(0,q.jsxs)("p",{children:[n+1,". ",e.node.fullName," -"," ",e.node.phoneNumber," - ",e.node.address]}),(0,q.jsx)(v.Z,{label:"Xo\xe1",onClick:function(){return function(e){var n=te.filter((function(n){return n.node.phoneNumber!==e.node.phoneNumber}));ie(n),0===n.length&&i("selectedAccounts")}(e)}})]},n)})),(0,q.jsx)(x.Z,{selectedList:te,isError:!!o.selectedAccounts,onClickSelectResultItem:function(e){if(-1===te.findIndex((function(n){return n.node.phoneNumber===e.node.phoneNumber}))){var n=[].concat((0,u.Z)(te),[e]);ie(n),a("selectedAccounts")}},searchPlaceholder:"Ch\u1ecdn ng\u01b0\u1eddi s\u1ebd nh\u1eadn th\xf4ng b\xe1o"})]})]}),(0,q.jsxs)(N,{children:[(0,q.jsx)(w.Z,{editorRef:y,placeholder:"N\u1ed9i dung th\xf4ng b\xe1o"}),(0,q.jsx)(C,{style:{margin:10},children:(0,q.jsx)("p",{children:"\u1ea2nh c\u1ee7a th\xf4ng b\xe1o:"})}),(0,q.jsx)(j.Z,{setResizedImageUri:X})]}),(0,q.jsx)(k.default,{label:"G\u1eedi",onClick:r(ae)})]})}},8987:function(e,n,t){t.d(n,{Z:function(){return s}});t(7313);var i=t(7155),a=t(6417),r=window.matchMedia("(prefers-color-scheme: dark)").matches,o=function(e){var n=e.editorRef,t=e.initialValue,o=e.placeholder;return(0,a.jsx)(i.M,{apiKey:"yel23pvjfocsjnw7gyo8q7soxq14drlhhyjk46gstvymozel",onInit:function(e,t){return n.current=t},initialValue:t,init:{height:350,selector:"textarea#full-featured",branding:!1,plugins:"print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textpattern noneditable help charmap quickbars emoticons",menubar:!0,toolbar:"undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent | forecolor backcolor casechange | fontselect fontsizeselect formatselect | removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",autosave_ask_before_unload:!0,autosave_interval:"30s",autosave_prefix:"{path}{query}-{id}-",autosave_restore_when_empty:!1,autosave_retention:"2m",image_advtab:!0,link_list:[{title:"My page 1",value:"https://www.tiny.cloud"},{title:"My page 2",value:"http://www.moxiecode.com"}],image_list:[{title:"My page 1",value:"https://www.tiny.cloud"},{title:"My page 2",value:"http://www.moxiecode.com"}],image_class_list:[{title:"None",value:""},{title:"Some class",value:"class-name"}],importcss_append:!0,templates:[{title:"New Table",description:"creates a new table",content:'<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'},{title:"Starting my story",description:"A cure for writers block",content:"Once upon a time..."},{title:"New list with dates",description:"New List with dates",content:'<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'}],template_cdate_format:"[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",template_mdate_format:"[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",image_caption:!0,quickbars_selection_toolbar:"bold italic | quicklink h2 h3 blockquote quickimage quicktable",noneditable_noneditable_class:"mceNonEditable",toolbar_mode:"sliding",spellchecker_ignore_list:["Ephox","Moxiecode"],contextmenu:"link image table configurepermanentpen",skin:r?"oxide-dark":"oxide",content_css:r?"dark":"default",placeholder:o||"",content_style:"body {font-size: 12pt;}"}})},l=function(e){var n=e.initValue,t=(e.title,e.editorRef),i=e.placeholder;return(0,a.jsx)("div",{style:{marginTop:10},children:(0,a.jsx)(o,{editorRef:t,initialValue:n,placeholder:i})})};l.defaultProps={initValue:"",placeholder:"Nh\u1eadp n\u1ed9i dung..."};var s=l},2180:function(e,n,t){t.d(n,{Z:function(){return l}});t(7313);var i,a=t(168),r=t(3115).ZP.p(i||(i=(0,a.Z)(["\n  font-size: 13px;\n  font-weight: 500;\n"]))),o=t(6417),l=function(e){var n=e.label;return(0,o.jsx)(r,{children:n})}},9673:function(e,n,t){t.d(n,{Z:function(){return g}});var i,a,r=t(1413),o=(t(7313),t(2180)),l=t(6947),s=t(168),c=t(3115),d=t(1237),u=c.ZP.div(i||(i=(0,s.Z)(["\n  height: 26px;\n  display: inline-block;\n  width: ",";\n  margin: ",";\n"])),(function(e){return e.width?e.width:"100%"}),(function(e){return e.margin?e.margin:"0 0 0 5px"})),h=c.ZP.input(a||(a=(0,s.Z)(["\n  width: 100%;\n  border: none;\n  font-size: 12px;\n  font-weight: 300;\n  padding: ",";\n  line-height: ",";\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  font-style: ",";\n  text-align: ",";\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(e){return e.padding}),(function(e){return e.lineHeight}),d.Z.lightWhite,d.Z.secondary,(function(e){return e.fontStyle?e.fontStyle:""}),(function(e){return e.textAlign?e.textAlign:"left"})),p=t(6417),f=function(e){var n=e.label,t=e.name,i=e.isError,a=e.errorMessage,s=e.register,c=e.validations,d=e.isInline,f=e.width,g=e.margin,m=d?"auto":f;return(0,p.jsxs)(u,{width:m,margin:g,children:[n&&(0,p.jsx)(o.Z,{label:n}),(0,p.jsx)(h,(0,r.Z)((0,r.Z)({},s(t,c)),e)),(0,p.jsx)(l.Z,{isError:i,errorMessage:a})]})};f.defaultProps={type:"text",validations:{},padding:"2px 5px",register:function(){},lineHeight:"20px"};var g=f},7532:function(e,n,t){t.d(n,{Z:function(){return g}});var i,a,r,o=t(885),l=t(7313),s=t(168),c=t(3115),d=c.ZP.div(i||(i=(0,s.Z)(["\n  padding: ",";\n"])),(function(e){return e.padding})),u=c.ZP.input(a||(a=(0,s.Z)(["\n  width: 100%;\n"]))),h=c.ZP.img(r||(r=(0,s.Z)(["\n  display: block;\n  margin: 10px 0 0;\n"]))),p=t(6417),f=function(e){var n=e.padding,t=e.maxPixel,i=e.setResizedImageUri,a=(0,l.useRef)(null),r=(0,l.useState)(""),s=(0,o.Z)(r,2),c=s[0],f=s[1];return(0,p.jsxs)(d,{padding:n,children:[(0,p.jsx)(u,{type:"file",ref:a,placeholder:"Ch\u1ecdn \u1ea3nh",onChange:function(e){var n=new FileReader,a=new Image,r=document.getElementById("canvas"),o=r.getContext("2d");e.target.files[0]&&(n.readAsDataURL(e.target.files[0]),n.onload=function(e){a.src=e.target.result},a.onload=function(){r.width=t,r.height=r.width*(a.height/a.width);var e=document.createElement("canvas"),n=e.getContext("2d");e.width=r.width,e.height=r.height,n.drawImage(a,0,0,e.width,e.height),o.drawImage(e,0,0,e.width,e.height,0,0,e.width,e.height);var l=r.toDataURL("image/webp");f(l),i(l)})}}),(0,p.jsx)("canvas",{id:"canvas",style:{display:"none"}}),(0,p.jsx)(h,{src:c})]})};f.defaultProps={maxPixel:500,padding:"10px 10px 0",setResizedImageUri:function(){}};var g=f}}]);