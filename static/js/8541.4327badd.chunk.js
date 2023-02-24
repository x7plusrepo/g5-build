"use strict";(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[8541],{5954:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5045)),i=n(6417),u=(0,a.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=u},8627:function(e,t,n){function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},7332:function(e,t,n){n.d(t,{vh:function(){return a},yJ:function(){return r}});Math.pow(10,8);var r=6e4,a=36e5},3511:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3601);function a(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var i=n(4800);function u(e){(0,i.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}var o=864e5;function c(e,t){(0,i.Z)(2,arguments);var n=u(e),r=u(t),c=n.getTime()-a(n),l=r.getTime()-a(r);return Math.round((c-l)/o)}function l(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function s(e,t){(0,i.Z)(2,arguments);var n=(0,r.Z)(e),a=(0,r.Z)(t),u=l(n,a),o=Math.abs(c(n,a));n.setDate(n.getDate()-u*o);var s=Number(l(n,a)===-u),f=u*(o-s);return 0===f?0:f}},3532:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(3601),a=n(4800);function i(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e),i=(0,r.Z)(t);return n.getTime()<i.getTime()}},514:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7332),a=n(4800),i=n(8627);function u(e,t){var n;(0,a.Z)(1,arguments);var r=(0,i.Z)(null!==(n=null===t||void 0===t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var u,o=f(e);if(o.date){var c=g(o.date,r);u=d(c.restDateString,c.year)}if(!u||isNaN(u.getTime()))return new Date(NaN);var l,s=u.getTime(),v=0;if(o.time&&(v=h(o.time),isNaN(v)))return new Date(NaN);if(!o.timezone){var m=new Date(s+v),D=new Date(0);return D.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),D.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),D}return l=N(o.timezone),isNaN(l)?new Date(NaN):new Date(s+v+l)}var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e){var t,n={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=o.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function g(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return new Date(NaN);var n=e.match(c);if(!n)return new Date(NaN);var r=!!n[4],a=v(n[1]),i=v(n[2])-1,u=v(n[3]),o=v(n[4]),l=v(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,o,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,o,l):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(D[t]||(p(e)?29:28))}(t,i,u)&&function(e,t){return t>=1&&t<=(p(e)?366:365)}(t,a)?(s.setUTCFullYear(t,i,Math.max(a,u)),s):new Date(NaN)}function v(e){return e?parseInt(e):1}function h(e){var t=e.match(l);if(!t)return NaN;var n=m(t[1]),a=m(t[2]),i=m(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,i)?n*r.vh+a*r.yJ+1e3*i:NaN}function m(e){return e&&parseFloat(e.replace(",","."))||0}function N(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?n*(a*r.vh+i*r.yJ):NaN}var D=[31,null,31,30,31,30,31,31,30,31,30,31];function p(e){return e%400===0||e%4===0&&e%100!==0}},3306:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(6797),a=n(7313),i=n(345),u=n(2668),o=n(1511),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function l(e,t){var n=(0,u.A)((0,o.x)(t&&t.client),e),l=(0,a.useRef)(),s=l.current?(0,i.J)(t,l.current):t,f=n.useQuery((0,r.pi)((0,r.pi)({},s),{skip:!l.current})),g=f.observable.options.initialFetchPolicy||n.getDefaultFetchPolicy(),d=Object.assign(f,{called:!!l.current}),v=(0,a.useMemo)((function(){for(var e={},t=function(t){var r=d[t];e[t]=function(){return l.current||(l.current=Object.create(null),n.forceUpdate()),r.apply(this,arguments)}},r=0,a=c;r<a.length;r++){t(a[r])}return e}),[]);return Object.assign(d,v),[(0,a.useCallback)((function(e){l.current=e?(0,r.pi)((0,r.pi)({},e),{fetchPolicy:e.fetchPolicy||g}):{fetchPolicy:g};var t=n.asyncUpdate().then((function(e){return Object.assign(e,v)}));return t.catch((function(){})),t}),[]),d]}}}]);