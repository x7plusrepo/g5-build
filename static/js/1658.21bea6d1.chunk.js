/*! For license information please see 1658.21bea6d1.chunk.js.LICENSE.txt */
(self.webpackChunkproject_g5=self.webpackChunkproject_g5||[]).push([[1658],{1658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var i,r,o,s,a,c,d=n(2982),u=n(885),h=n(7313),l=n(2790),f=n.n(l),p=n(3222),v=n(2153),g=n(168),m=n(3115),y=n(7648),S=n(1237),M=m.ZP.div(i||(i=(0,g.Z)(["\n  font-size: 12px;\n"]))),b=m.ZP.p(r||(r=(0,g.Z)(["\n  font-weight: 600;\n  margin: 0 0 0 50px;\n  color: ",";\n"])),S.Z.white),U=m.ZP.div(o||(o=(0,g.Z)(["\n  left: 0;\n  width: 100%;\n  bottom: 20px;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n"]))),w=(0,m.ZP)(y.Z)(s||(s=(0,g.Z)(["\n  margin: 0 50px 0 0;\n  color: ",";\n"])),S.Z.lightWhite),x=m.ZP.div(a||(a=(0,g.Z)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  border-radius: 30px;\n  justify-content: center;\n  background-color: ",";\n"])),S.Z.white),j=m.ZP.div(c||(c=(0,g.Z)(["\n  width: 26px;\n  height: 26px;\n  border-radius: 26px;\n  border: 1px solid ",";\n"])),S.Z.lightBlack),O=n(6417),C=function(e){var t=e.tookImages,n=e.setTookImages,i=(0,p.I0)(),r=h.useRef(null),o=(0,h.useState)(t||[]),s=(0,u.Z)(o,2),a=s[0],c=s[1],l=(0,h.useState)({facingMode:{exact:"environment"}}),g=(0,u.Z)(l,2),m=g[0],y=g[1],S=h.useCallback((function(){var e,t=[null===r||void 0===r||null===(e=r.current)||void 0===e?void 0:e.getScreenshot()].concat((0,d.Z)(a));c(t),n(t)}),[r,null===a||void 0===a?void 0:a.length,c]);return(0,O.jsxs)(M,{children:[(0,O.jsx)(f(),{width:"100%",height:"100%",audio:!1,ref:r,screenshotQuality:.7,screenshotFormat:"image/webp",videoConstraints:m}),(0,O.jsxs)(U,{children:[(0,O.jsx)(w,{fontSize:"small",onClick:function(){var e;null!==m&&void 0!==m&&null!==(e=m.facingMode)&&void 0!==e&&e.exact?y({facingMode:"user"}):y({facingMode:{exact:"environment"}})}}),(0,O.jsx)(x,{onClick:S,children:(0,O.jsx)(j,{})}),(0,O.jsx)(b,{onClick:function(){return i((0,v.CV)())},children:"Xong"})]})]})};C.defaultProps={};var k=C},2790:function(e,t,n){var i;i=function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(e,t,n){"use strict";n.r(t);var i=n("react"),r=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function a(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}"undefined"!==typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(n,i){t.call(navigator,e,n,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}));var c=function(e){function t(t){var n=e.call(this,t)||this;return n.canvas=null,n.ctx=null,n.requestUserMediaId=0,n.unmounted=!1,n.state={hasUserMedia:!1},n}return r(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;this.unmounted=!1,a()?(e.hasUserMedia||this.requestUserMedia(),t.children&&"function"!=typeof t.children&&console.warn("children must be a function")):t.onUserMediaError("getUserMedia not supported")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(a()){var n=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),i=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),r=e.minScreenshotWidth!==t.minScreenshotWidth,o=e.minScreenshotHeight!==t.minScreenshotHeight;(i||r||o)&&(this.canvas=null,this.ctx=null),(n||i)&&(this.stopAndCleanup(),this.requestUserMedia())}else t.onUserMediaError("getUserMedia not supported")},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map((function(t){e.removeTrack(t),t.stop()})),e.getAudioTracks().map((function(t){e.removeTrack(t),t.stop()}))):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,n=this.props;if(!t.hasUserMedia)return null;var i=this.getCanvas(e);return i&&i.toDataURL(n.screenshotFormat,n.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,n=this.props;if(!this.video)return null;if(!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var i=this.video.videoWidth,r=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var o=i/r;r=(i=n.minScreenshotWidth||this.video.clientWidth)/o,n.minScreenshotHeight&&r<n.minScreenshotHeight&&(i=(r=n.minScreenshotHeight)*o)}this.canvas=document.createElement("canvas"),this.canvas.width=(null===e||void 0===e?void 0:e.width)||i,this.canvas.height=(null===e||void 0===e?void 0:e.height)||r,this.ctx=this.canvas.getContext("2d")}var s=this.ctx,a=this.canvas;return s&&a&&(a.width=(null===e||void 0===e?void 0:e.width)||a.width,a.height=(null===e||void 0===e?void 0:e.height)||a.height,n.mirrored&&(s.translate(a.width,0),s.scale(-1,1)),s.imageSmoothingEnabled=n.imageSmoothing,s.drawImage(this.video,0,0,(null===e||void 0===e?void 0:e.width)||a.width,(null===e||void 0===e?void 0:e.height)||a.height),n.mirrored&&(s.scale(-1,1),s.translate(-a.width,0))),a},t.prototype.requestUserMedia=function(){var e=this,n=this.props,i=function(i,r){var o={video:"undefined"===typeof r||r};n.audio&&(o.audio="undefined"===typeof i||i),e.requestUserMediaId++;var s=e.requestUserMediaId;navigator.mediaDevices.getUserMedia(o).then((function(n){e.unmounted||s!==e.requestUserMediaId?t.stopMediaStream(n):e.handleUserMedia(null,n)})).catch((function(t){e.handleUserMedia(t)}))};if("mediaDevices"in navigator)i(n.audioConstraints,n.videoConstraints);else{var r=function(e){return{optional:[{sourceId:e}]}},o=function(e){var t=e.deviceId;return"string"===typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===typeof t&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(e){var t=null,s=null;e.forEach((function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(s=e.id)}));var a=o(n.audioConstraints);a&&(t=a);var c=o(n.videoConstraints);c&&(s=c),i(r(t),r(s))}))}},t.prototype.handleUserMedia=function(e,t){var n=this.props;if(e||!t)return this.setState({hasUserMedia:!1}),void n.onUserMediaError(e);this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(i){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}n.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,n=this.props,r=n.audio,a=(n.forceScreenshotSourceSize,n.onUserMedia,n.onUserMediaError,n.screenshotFormat,n.screenshotQuality,n.minScreenshotWidth,n.minScreenshotHeight,n.audioConstraints,n.videoConstraints,n.imageSmoothing,n.mirrored),c=n.style,d=void 0===c?{}:c,u=n.children,h=s(n,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),l=a?o(o({},d),{transform:(d.transform||"")+" scaleX(-1)"}):d,f={getScreenshot:this.getScreenshot.bind(this)};return i.createElement(i.Fragment,null,i.createElement("video",o({autoPlay:!0,src:t.src,muted:!r,playsInline:!0,ref:function(t){e.video=t},style:l},h)),u&&u(f))},t.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(i.Component);t.default=c},react:function(t,n){t.exports=e}}).default},e.exports=i(n(7313))}}]);