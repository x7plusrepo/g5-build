"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[4304],{4641:function(n,r,t){t.d(r,{Z:function(){return s}});var o,e=t(1413),u=(t(7313),t(168)),i=t(3115),l=t(1237),a=i.ZP.button(o||(o=(0,u.Z)(["\n  padding: 0;\n  border: none;\n  margin: 5px 0;\n  font-size: 12px;\n  cursor: pointer;\n  color: ",";\n  background-color: transparent;\n"])),l.Z.primary),c=t(6417),d=function(n){var r=n.label;return(0,c.jsx)(a,(0,e.Z)((0,e.Z)({},n),{},{children:r}))};d.defaultProps={onClick:function(){}};var s=d},790:function(n,r,t){t.d(r,{D:function(){return d}});var o=t(6797),e=t(7313),u=t(345),i=t(3301),l=t(8112),a=t(4624),c=t(1511);function d(n,r){var t=(0,c.x)(null===r||void 0===r?void 0:r.client);(0,l.Vp)(n,l.n_.Mutation);var d=(0,e.useState)({called:!1,loading:!1,client:t}),s=d[0],v=d[1],p=(0,e.useRef)({result:s,mutationId:0,isMounted:!0,client:t,mutation:n,options:r});Object.assign(p.current,{client:t,options:r,mutation:n});var f=(0,e.useCallback)((function(n){void 0===n&&(n={});var r=p.current,t=r.client,e=r.options,l=r.mutation,c=(0,o.pi)((0,o.pi)({},e),{mutation:l});p.current.result.loading||c.ignoreResults||!p.current.isMounted||v(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var d=++p.current.mutationId,s=(0,u.J)(c,n);return t.mutate(s).then((function(r){var o,e,u,l=r.data,c=r.errors,f=c&&c.length>0?new a.c({graphQLErrors:c}):void 0;if(d===p.current.mutationId&&!s.ignoreResults){var g={called:!0,loading:!1,data:l,error:f,client:t};p.current.isMounted&&!(0,i.D)(p.current.result,g)&&v(p.current.result=g)}return null===(e=null===(o=p.current.options)||void 0===o?void 0:o.onCompleted)||void 0===e||e.call(o,r.data,s),null===(u=n.onCompleted)||void 0===u||u.call(n,r.data,s),r})).catch((function(r){var o,e,u,l;if(d===p.current.mutationId&&p.current.isMounted){var a={loading:!1,error:r,data:void 0,called:!0,client:t};(0,i.D)(p.current.result,a)||v(p.current.result=a)}if((null===(o=p.current.options)||void 0===o?void 0:o.onError)||s.onError)return null===(u=null===(e=p.current.options)||void 0===e?void 0:e.onError)||void 0===u||u.call(e,r,s),null===(l=n.onError)||void 0===l||l.call(n,r,s),{data:void 0,errors:r};throw r}))}),[]),g=(0,e.useCallback)((function(){p.current.isMounted&&v({called:!1,loading:!1,client:t})}),[]);return(0,e.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,o.pi)({reset:g},s)]}}}]);