function WR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wa={},qR={get exports(){return Wa},set exports(t){Wa=t}},Fh={},C={},GR={get exports(){return C},set exports(t){C=t}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),KR=Symbol.for("react.portal"),QR=Symbol.for("react.fragment"),YR=Symbol.for("react.strict_mode"),XR=Symbol.for("react.profiler"),JR=Symbol.for("react.provider"),ZR=Symbol.for("react.context"),eN=Symbol.for("react.forward_ref"),tN=Symbol.for("react.suspense"),nN=Symbol.for("react.memo"),rN=Symbol.for("react.lazy"),V_=Symbol.iterator;function iN(t){return t===null||typeof t!="object"?null:(t=V_&&t[V_]||t["@@iterator"],typeof t=="function"?t:null)}var SE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IE=Object.assign,TE={};function Po(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||SE}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kE(){}kE.prototype=Po.prototype;function Tg(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||SE}var kg=Tg.prototype=new kE;kg.constructor=Tg;IE(kg,Po.prototype);kg.isPureReactComponent=!0;var B_=Array.isArray,xE=Object.prototype.hasOwnProperty,xg={current:null},RE={key:!0,ref:!0,__self:!0,__source:!0};function NE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xE.call(e,r)&&!RE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:xg.current}}function sN(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function oN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var z_=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oN(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case KR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wf(o,0):r,B_(i)?(n="",t!=null&&(n=t.replace(z_,"$&/")+"/"),Ju(i,e,n,"",function(u){return u})):i!=null&&(Rg(i)&&(i=sN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(z_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",B_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wf(s,a);o+=Ju(s,e,n,l,i)}else if(l=iN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wf(s,a++),o+=Ju(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wu(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Zu={transition:null},lN={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:xg};ae.Children={map:wu,forEach:function(t,e,n){wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wu(t,function(){e++}),e},toArray:function(t){return wu(t,function(e){return e})||[]},only:function(t){if(!Rg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Po;ae.Fragment=QR;ae.Profiler=XR;ae.PureComponent=Tg;ae.StrictMode=YR;ae.Suspense=tN;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lN;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xE.call(e,l)&&!RE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:ZR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JR,_context:t},t.Consumer=t};ae.createElement=NE;ae.createFactory=function(t){var e=NE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:eN,render:t}};ae.isValidElement=Rg;ae.lazy=function(t){return{$$typeof:rN,_payload:{_status:-1,_result:t},_init:aN}};ae.memo=function(t,e){return{$$typeof:nN,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ae.useContext=function(t){return Wt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ae.useId=function(){return Wt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ae.useRef=function(t){return Wt.current.useRef(t)};ae.useState=function(t){return Wt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Wt.current.useTransition()};ae.version="18.2.0";(function(t){t.exports=ae})(GR);const vn=HR(C),kp=WR({__proto__:null,default:vn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uN=C,cN=Symbol.for("react.element"),hN=Symbol.for("react.fragment"),dN=Object.prototype.hasOwnProperty,fN=uN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pN={key:!0,ref:!0,__self:!0,__source:!0};function AE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dN.call(e,r)&&!pN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cN,type:t,key:s,ref:o,props:i,_owner:fN.current}}Fh.Fragment=hN;Fh.jsx=AE;Fh.jsxs=AE;(function(t){t.exports=Fh})(qR);const Ng=Wa.Fragment,w=Wa.jsx,j=Wa.jsxs;var xp={},Rp={},mN={get exports(){return Rp},set exports(t){Rp=t}},hn={},Np={},gN={get exports(){return Np},set exports(t){Np=t}},bE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,H){var Q=b.length;b.push(H);e:for(;0<Q;){var Ce=Q-1>>>1,O=b[Ce];if(0<i(O,H))b[Ce]=H,b[Q]=O,Q=Ce;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var H=b[0],Q=b.pop();if(Q!==H){b[0]=Q;e:for(var Ce=0,O=b.length,$=O>>>1;Ce<$;){var F=2*(Ce+1)-1,Y=b[F],S=F+1,le=b[S];if(0>i(Y,Q))S<O&&0>i(le,Y)?(b[Ce]=le,b[S]=Q,Ce=S):(b[Ce]=Y,b[F]=Q,Ce=F);else if(S<O&&0>i(le,Q))b[Ce]=le,b[S]=Q,Ce=S;else break e}}return H}function i(b,H){var Q=b.sortIndex-H.sortIndex;return Q!==0?Q:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,m=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=b)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(b){if(y=!1,v(b),!m)if(n(l)!==null)m=!0,tr(T);else{var H=n(u);H!==null&&$t(E,H.startTime-b)}}function T(b,H){m=!1,y&&(y=!1,g(D),D=-1),p=!0;var Q=d;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||b&&!nt());){var Ce=h.callback;if(typeof Ce=="function"){h.callback=null,d=h.priorityLevel;var O=Ce(h.expirationTime<=H);H=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),v(H)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var F=n(u);F!==null&&$t(E,F.startTime-H),$=!1}return $}finally{h=null,d=Q,p=!1}}var A=!1,M=null,D=-1,se=5,G=-1;function nt(){return!(t.unstable_now()-G<se)}function Ye(){if(M!==null){var b=t.unstable_now();G=b;var H=!0;try{H=M(!0,b)}finally{H?ft():(A=!1,M=null)}}else A=!1}var ft;if(typeof f=="function")ft=function(){f(Ye)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,Ct=en.port2;en.port1.onmessage=Ye,ft=function(){Ct.postMessage(null)}}else ft=function(){_(Ye,0)};function tr(b){M=b,A||(A=!0,ft())}function $t(b,H){D=_(function(){b(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,tr(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var Q=d;d=H;try{return b()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Q=d;d=b;try{return H()}finally{d=Q}},t.unstable_scheduleCallback=function(b,H,Q){var Ce=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ce+Q:Ce):Q=Ce,b){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Q+O,b={id:c++,callback:H,priorityLevel:b,startTime:Q,expirationTime:O,sortIndex:-1},Q>Ce?(b.sortIndex=Q,e(u,b),n(l)===null&&b===n(u)&&(y?(g(D),D=-1):y=!0,$t(E,Q-Ce))):(b.sortIndex=O,e(l,b),m||p||(m=!0,tr(T))),b},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(b){var H=d;return function(){var Q=d;d=H;try{return b.apply(this,arguments)}finally{d=Q}}}})(bE);(function(t){t.exports=bE})(gN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PE=C,ln=Np;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var DE=new Set,Ha={};function ds(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(Ha[t]=e,t=0;t<e.length;t++)DE.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=Object.prototype.hasOwnProperty,yN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j_={},W_={};function vN(t){return Ap.call(W_,t)?!0:Ap.call(j_,t)?!1:yN.test(t)?W_[t]=!0:(j_[t]=!0,!1)}function _N(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wN(t,e,n,r){if(e===null||typeof e>"u"||_N(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ag=/[\-:]([a-z])/g;function bg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ag,bg);wt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ag,bg);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ag,bg);wt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pg(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wN(e,n,i,r)&&(n=null),r||i===null?vN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=PE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eu=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Dg=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),OE=Symbol.for("react.provider"),LE=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),Lg=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),ME=Symbol.for("react.offscreen"),H_=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=H_&&t[H_]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Ef;function pa(t){if(Ef===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ef=e&&e[1]||""}return`
`+Ef+t}var Cf=!1;function Sf(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function EN(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Sf(t.type,!1),t;case 11:return t=Sf(t.type.render,!1),t;case 1:return t=Sf(t.type,!0),t;default:return""}}function Op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Rs:return"Portal";case bp:return"Profiler";case Dg:return"StrictMode";case Pp:return"Suspense";case Dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case LE:return(t.displayName||"Context")+".Consumer";case OE:return(t._context.displayName||"Context")+".Provider";case Og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lg:return e=t.displayName||null,e!==null?e:Op(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Op(t(e))}catch{}}return null}function CN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Op(e);case 8:return e===Dg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $E(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SN(t){var e=$E(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=SN(t))}function FE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$E(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function q_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UE(t,e){e=e.checked,e!=null&&Pg(t,"checked",e,!1)}function Mp(t,e){UE(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$p(t,e.type,n):e.hasOwnProperty("defaultValue")&&$p(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function G_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $p(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(ma(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function VE(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Q_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function BE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Up(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?BE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Su,zE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Su=Su||document.createElement("div"),Su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IN=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){IN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function jE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function WE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TN=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vp(t,e){if(e){if(TN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Bp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=null;function Mg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jp=null,qs=null,Gs=null;function Y_(t){if(t=$l(t)){if(typeof jp!="function")throw Error(x(280));var e=t.stateNode;e&&(e=jh(e),jp(t.stateNode,t.type,e))}}function HE(t){qs?Gs?Gs.push(t):Gs=[t]:qs=t}function qE(){if(qs){var t=qs,e=Gs;if(Gs=qs=null,Y_(t),e)for(t=0;t<e.length;t++)Y_(e[t])}}function GE(t,e){return t(e)}function KE(){}var If=!1;function QE(t,e,n){if(If)return t(e,n);If=!0;try{return GE(t,e,n)}finally{If=!1,(qs!==null||Gs!==null)&&(KE(),qE())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var r=jh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Wp=!1;if(yr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Wp=!1}function kN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,wc=null,Ec=!1,Hp=null,xN={onError:function(t){Ta=!0,wc=t}};function RN(t,e,n,r,i,s,o,a,l){Ta=!1,wc=null,kN.apply(xN,arguments)}function NN(t,e,n,r,i,s,o,a,l){if(RN.apply(this,arguments),Ta){if(Ta){var u=wc;Ta=!1,wc=null}else throw Error(x(198));Ec||(Ec=!0,Hp=u)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function YE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function X_(t){if(fs(t)!==t)throw Error(x(188))}function AN(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return X_(i),t;if(s===r)return X_(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function XE(t){return t=AN(t),t!==null?JE(t):null}function JE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=JE(t);if(e!==null)return e;t=t.sibling}return null}var ZE=ln.unstable_scheduleCallback,J_=ln.unstable_cancelCallback,bN=ln.unstable_shouldYield,PN=ln.unstable_requestPaint,We=ln.unstable_now,DN=ln.unstable_getCurrentPriorityLevel,$g=ln.unstable_ImmediatePriority,eC=ln.unstable_UserBlockingPriority,Cc=ln.unstable_NormalPriority,ON=ln.unstable_LowPriority,tC=ln.unstable_IdlePriority,Uh=null,qn=null;function LN(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Uh,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:FN,MN=Math.log,$N=Math.LN2;function FN(t){return t>>>=0,t===0?32:31-(MN(t)/$N|0)|0}var Iu=64,Tu=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ga(a):(s&=o,s!==0&&(r=ga(s)))}else o=n&~i,o!==0?r=ga(o):s!==0&&(r=ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function UN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=UN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nC(){var t=Iu;return Iu<<=1,!(Iu&4194240)&&(Iu=64),t}function Tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function BN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function rC(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iC,Ug,sC,oC,aC,Gp=!1,ku=[],Gr=null,Kr=null,Qr=null,Ka=new Map,Qa=new Map,Or=[],zN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z_(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$l(e),e!==null&&Ug(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jN(t,e,n,r,i){switch(e){case"focusin":return Gr=ta(Gr,t,e,n,r,i),!0;case"dragenter":return Kr=ta(Kr,t,e,n,r,i),!0;case"mouseover":return Qr=ta(Qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,ta(Ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qa.set(s,ta(Qa.get(s)||null,t,e,n,r,i)),!0}return!1}function lC(t){var e=Mi(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=YE(n),e!==null){t.blockedOn=e,aC(t.priority,function(){sC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zp=r,n.target.dispatchEvent(r),zp=null}else return e=$l(n),e!==null&&Ug(e),t.blockedOn=n,!1;e.shift()}return!0}function e0(t,e,n){ec(t)&&n.delete(e)}function WN(){Gp=!1,Gr!==null&&ec(Gr)&&(Gr=null),Kr!==null&&ec(Kr)&&(Kr=null),Qr!==null&&ec(Qr)&&(Qr=null),Ka.forEach(e0),Qa.forEach(e0)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,Gp||(Gp=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,WN)))}function Ya(t){function e(i){return na(i,t)}if(0<ku.length){na(ku[0],t);for(var n=1;n<ku.length;n++){var r=ku[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gr!==null&&na(Gr,t),Kr!==null&&na(Kr,t),Qr!==null&&na(Qr,t),Ka.forEach(e),Qa.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)lC(n),n.blockedOn===null&&Or.shift()}var Ks=Rr.ReactCurrentBatchConfig,Ic=!0;function HN(t,e,n,r){var i=_e,s=Ks.transition;Ks.transition=null;try{_e=1,Vg(t,e,n,r)}finally{_e=i,Ks.transition=s}}function qN(t,e,n,r){var i=_e,s=Ks.transition;Ks.transition=null;try{_e=4,Vg(t,e,n,r)}finally{_e=i,Ks.transition=s}}function Vg(t,e,n,r){if(Ic){var i=Kp(t,e,n,r);if(i===null)Lf(t,e,r,Tc,n),Z_(t,r);else if(jN(i,t,e,n,r))r.stopPropagation();else if(Z_(t,r),e&4&&-1<zN.indexOf(t)){for(;i!==null;){var s=$l(i);if(s!==null&&iC(s),s=Kp(t,e,n,r),s===null&&Lf(t,e,r,Tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lf(t,e,r,null,n)}}var Tc=null;function Kp(t,e,n,r){if(Tc=null,t=Mg(r),t=Mi(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=YE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function uC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DN()){case $g:return 1;case eC:return 4;case Cc:case ON:return 16;case tC:return 536870912;default:return 16}default:return 16}}var Br=null,Bg=null,tc=null;function cC(){if(tc)return tc;var t,e=Bg,n=e.length,r,i="value"in Br?Br.value:Br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xu(){return!0}function t0(){return!1}function dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xu:t0,this.isPropagationStopped=t0,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xu)},persist:function(){},isPersistent:xu}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zg=dn(Do),Ml=Me({},Do,{view:0,detail:0}),GN=dn(Ml),kf,xf,ra,Vh=Me({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(kf=t.screenX-ra.screenX,xf=t.screenY-ra.screenY):xf=kf=0,ra=t),kf)},movementY:function(t){return"movementY"in t?t.movementY:xf}}),n0=dn(Vh),KN=Me({},Vh,{dataTransfer:0}),QN=dn(KN),YN=Me({},Ml,{relatedTarget:0}),Rf=dn(YN),XN=Me({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),JN=dn(XN),ZN=Me({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eA=dn(ZN),tA=Me({},Do,{data:0}),r0=dn(tA),nA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iA[t])?!!e[t]:!1}function jg(){return sA}var oA=Me({},Ml,{key:function(t){if(t.key){var e=nA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jg,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aA=dn(oA),lA=Me({},Vh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i0=dn(lA),uA=Me({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jg}),cA=dn(uA),hA=Me({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),dA=dn(hA),fA=Me({},Vh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pA=dn(fA),mA=[9,13,27,32],Wg=yr&&"CompositionEvent"in window,ka=null;yr&&"documentMode"in document&&(ka=document.documentMode);var gA=yr&&"TextEvent"in window&&!ka,hC=yr&&(!Wg||ka&&8<ka&&11>=ka),s0=String.fromCharCode(32),o0=!1;function dC(t,e){switch(t){case"keyup":return mA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function yA(t,e){switch(t){case"compositionend":return fC(e);case"keypress":return e.which!==32?null:(o0=!0,s0);case"textInput":return t=e.data,t===s0&&o0?null:t;default:return null}}function vA(t,e){if(As)return t==="compositionend"||!Wg&&dC(t,e)?(t=cC(),tc=Bg=Br=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hC&&e.locale!=="ko"?null:e.data;default:return null}}var _A={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_A[t.type]:e==="textarea"}function pC(t,e,n,r){HE(r),e=kc(e,"onChange"),0<e.length&&(n=new zg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,Xa=null;function wA(t){TC(t,0)}function Bh(t){var e=Ds(t);if(FE(e))return t}function EA(t,e){if(t==="change")return e}var mC=!1;if(yr){var Nf;if(yr){var Af="oninput"in document;if(!Af){var l0=document.createElement("div");l0.setAttribute("oninput","return;"),Af=typeof l0.oninput=="function"}Nf=Af}else Nf=!1;mC=Nf&&(!document.documentMode||9<document.documentMode)}function u0(){xa&&(xa.detachEvent("onpropertychange",gC),Xa=xa=null)}function gC(t){if(t.propertyName==="value"&&Bh(Xa)){var e=[];pC(e,Xa,t,Mg(t)),QE(wA,e)}}function CA(t,e,n){t==="focusin"?(u0(),xa=e,Xa=n,xa.attachEvent("onpropertychange",gC)):t==="focusout"&&u0()}function SA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bh(Xa)}function IA(t,e){if(t==="click")return Bh(e)}function TA(t,e){if(t==="input"||t==="change")return Bh(e)}function kA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:kA;function Ja(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ap.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function c0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function h0(t,e){var n=c0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=c0(n)}}function yC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vC(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xA(t){var e=vC(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yC(n.ownerDocument.documentElement,n)){if(r!==null&&Hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=h0(n,s);var o=h0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RA=yr&&"documentMode"in document&&11>=document.documentMode,bs=null,Qp=null,Ra=null,Yp=!1;function d0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yp||bs==null||bs!==_c(r)||(r=bs,"selectionStart"in r&&Hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ra&&Ja(Ra,r)||(Ra=r,r=kc(Qp,"onSelect"),0<r.length&&(e=new zg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function Ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},bf={},_C={};yr&&(_C=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function zh(t){if(bf[t])return bf[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _C)return bf[t]=e[n];return t}var wC=zh("animationend"),EC=zh("animationiteration"),CC=zh("animationstart"),SC=zh("transitionend"),IC=new Map,f0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){IC.set(t,e),ds(e,[t])}for(var Pf=0;Pf<f0.length;Pf++){var Df=f0[Pf],NA=Df.toLowerCase(),AA=Df[0].toUpperCase()+Df.slice(1);Ii(NA,"on"+AA)}Ii(wC,"onAnimationEnd");Ii(EC,"onAnimationIteration");Ii(CC,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(SC,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function p0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NN(r,e,void 0,t),t.currentTarget=null}function TC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}}}if(Ec)throw t=Hp,Ec=!1,Hp=null,t}function xe(t,e){var n=e[tm];n===void 0&&(n=e[tm]=new Set);var r=t+"__bubble";n.has(r)||(kC(e,t,2,!1),n.add(r))}function Of(t,e,n){var r=0;e&&(r|=4),kC(n,t,r,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Nu]){t[Nu]=!0,DE.forEach(function(n){n!=="selectionchange"&&(bA.has(n)||Of(n,!1,t),Of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,Of("selectionchange",!1,e))}}function kC(t,e,n,r){switch(uC(e)){case 1:var i=HN;break;case 4:i=qN;break;default:i=Vg}n=i.bind(null,e,n,t),i=void 0,!Wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}QE(function(){var u=s,c=Mg(n),h=[];e:{var d=IC.get(t);if(d!==void 0){var p=zg,m=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":p=aA;break;case"focusin":m="focus",p=Rf;break;case"focusout":m="blur",p=Rf;break;case"beforeblur":case"afterblur":p=Rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=QN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cA;break;case wC:case EC:case CC:p=JN;break;case SC:p=dA;break;case"scroll":p=GN;break;case"wheel":p=pA;break;case"copy":case"cut":case"paste":p=eA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=i0}var y=(e&4)!==0,_=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=Ga(f,g),E!=null&&y.push(el(f,E,v)))),_)break;f=f.return}0<y.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==zp&&(m=n.relatedTarget||n.fromElement)&&(Mi(m)||m[vr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Mi(m):null,m!==null&&(_=fs(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=n0,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=i0,E="onPointerLeave",g="onPointerEnter",f="pointer"),_=p==null?d:Ds(p),v=m==null?d:Ds(m),d=new y(E,f+"leave",p,n,c),d.target=_,d.relatedTarget=v,E=null,Mi(c)===u&&(y=new y(g,f+"enter",m,n,c),y.target=v,y.relatedTarget=_,E=y),_=E,p&&m)t:{for(y=p,g=m,f=0,v=y;v;v=Ss(v))f++;for(v=0,E=g;E;E=Ss(E))v++;for(;0<f-v;)y=Ss(y),f--;for(;0<v-f;)g=Ss(g),v--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ss(y),g=Ss(g)}y=null}else y=null;p!==null&&m0(h,d,p,y,!1),m!==null&&_!==null&&m0(h,_,m,y,!0)}}e:{if(d=u?Ds(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=EA;else if(a0(d))if(mC)T=TA;else{T=SA;var A=CA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=IA);if(T&&(T=T(t,u))){pC(h,T,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&$p(d,"number",d.value)}switch(A=u?Ds(u):window,t){case"focusin":(a0(A)||A.contentEditable==="true")&&(bs=A,Qp=u,Ra=null);break;case"focusout":Ra=Qp=bs=null;break;case"mousedown":Yp=!0;break;case"contextmenu":case"mouseup":case"dragend":Yp=!1,d0(h,n,c);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":d0(h,n,c)}var M;if(Wg)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else As?dC(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(hC&&n.locale!=="ko"&&(As||D!=="onCompositionStart"?D==="onCompositionEnd"&&As&&(M=cC()):(Br=c,Bg="value"in Br?Br.value:Br.textContent,As=!0)),A=kc(u,D),0<A.length&&(D=new r0(D,t,null,n,c),h.push({event:D,listeners:A}),M?D.data=M:(M=fC(n),M!==null&&(D.data=M)))),(M=gA?yA(t,n):vA(t,n))&&(u=kc(u,"onBeforeInput"),0<u.length&&(c=new r0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=M))}TC(h,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ga(t,n),s!=null&&r.unshift(el(t,s,i)),s=Ga(t,e),s!=null&&r.push(el(t,s,i))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function m0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ga(n,s),l!=null&&o.unshift(el(n,l,a))):i||(l=Ga(n,s),l!=null&&o.push(el(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PA=/\r\n?/g,DA=/\u0000|\uFFFD/g;function g0(t){return(typeof t=="string"?t:""+t).replace(PA,`
`).replace(DA,"")}function Au(t,e,n){if(e=g0(e),g0(t)!==e&&n)throw Error(x(425))}function xc(){}var Xp=null,Jp=null;function Zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var em=typeof setTimeout=="function"?setTimeout:void 0,OA=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(t){return y0.resolve(null).then(t).catch(MA)}:em;function MA(t){setTimeout(function(){throw t})}function Mf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function v0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Oo,tl="__reactProps$"+Oo,vr="__reactContainer$"+Oo,tm="__reactEvents$"+Oo,$A="__reactListeners$"+Oo,FA="__reactHandles$"+Oo;function Mi(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=v0(t);t!==null;){if(n=t[Bn])return n;t=v0(t)}return e}t=n,n=t.parentNode}return null}function $l(t){return t=t[Bn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function jh(t){return t[tl]||null}var nm=[],Os=-1;function Ti(t){return{current:t}}function Re(t){0>Os||(t.current=nm[Os],nm[Os]=null,Os--)}function ke(t,e){Os++,nm[Os]=t.current,t.current=e}var fi={},Ot=Ti(fi),Xt=Ti(!1),Xi=fi;function so(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function Rc(){Re(Xt),Re(Ot)}function _0(t,e,n){if(Ot.current!==fi)throw Error(x(168));ke(Ot,e),ke(Xt,n)}function xC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,CN(t)||"Unknown",i));return Me({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Xi=Ot.current,ke(Ot,t),ke(Xt,Xt.current),!0}function w0(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=xC(t,e,Xi),r.__reactInternalMemoizedMergedChildContext=t,Re(Xt),Re(Ot),ke(Ot,t)):Re(Xt),ke(Xt,n)}var or=null,Wh=!1,$f=!1;function RC(t){or===null?or=[t]:or.push(t)}function UA(t){Wh=!0,RC(t)}function ki(){if(!$f&&or!==null){$f=!0;var t=0,e=_e;try{var n=or;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Wh=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),ZE($g,ki),i}finally{_e=e,$f=!1}}return null}var Ls=[],Ms=0,Ac=null,bc=0,pn=[],mn=0,Ji=null,ar=1,lr="";function Pi(t,e){Ls[Ms++]=bc,Ls[Ms++]=Ac,Ac=t,bc=e}function NC(t,e,n){pn[mn++]=ar,pn[mn++]=lr,pn[mn++]=Ji,Ji=t;var r=ar;t=lr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-bn(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function qg(t){t.return!==null&&(Pi(t,1),NC(t,1,0))}function Gg(t){for(;t===Ac;)Ac=Ls[--Ms],Ls[Ms]=null,bc=Ls[--Ms],Ls[Ms]=null;for(;t===Ji;)Ji=pn[--mn],pn[mn]=null,lr=pn[--mn],pn[mn]=null,ar=pn[--mn],pn[mn]=null}var sn=null,nn=null,Ae=!1,Rn=null;function AC(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function E0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,nn=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,nn=null,!0):!1;default:return!1}}function rm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function im(t){if(Ae){var e=nn;if(e){var n=e;if(!E0(t,e)){if(rm(t))throw Error(x(418));e=Yr(n.nextSibling);var r=sn;e&&E0(t,e)?AC(r,n):(t.flags=t.flags&-4097|2,Ae=!1,sn=t)}}else{if(rm(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ae=!1,sn=t}}}function C0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function bu(t){if(t!==sn)return!1;if(!Ae)return C0(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zp(t.type,t.memoizedProps)),e&&(e=nn)){if(rm(t))throw bC(),Error(x(418));for(;e;)AC(t,e),e=Yr(e.nextSibling)}if(C0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=sn?Yr(t.stateNode.nextSibling):null;return!0}function bC(){for(var t=nn;t;)t=Yr(t.nextSibling)}function oo(){nn=sn=null,Ae=!1}function Kg(t){Rn===null?Rn=[t]:Rn.push(t)}var VA=Rr.ReactCurrentBatchConfig;function kn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Pc=Ti(null),Dc=null,$s=null,Qg=null;function Yg(){Qg=$s=Dc=null}function Xg(t){var e=Pc.current;Re(Pc),t._currentValue=e}function sm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Dc=t,Qg=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Qg!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Dc===null)throw Error(x(308));$s=t,Dc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var $i=null;function Jg(t){$i===null?$i=[t]:$i.push(t)}function PC(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jg(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Zg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function DC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,Jg(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fg(t,n)}}function S0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,r){var i=t.updateQueue;Dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=Me({},h,d);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=h}}function I0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var OC=new PE.Component().refs;function om(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hh={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Zr(t),s=pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Pn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Zr(t),s=pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Pn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=Zr(t),i=pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xr(t,i,r),e!==null&&(Pn(e,t,r,n),rc(e,t,r))}};function T0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,r)||!Ja(i,s):!0}function LC(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(i=Jt(e)?Xi:Ot.current,r=e.contextTypes,s=(r=r!=null)?so(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function k0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hh.enqueueReplaceState(e,e.state,null)}function am(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=OC,Zg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=En(s):(s=Jt(e)?Xi:Ot.current,i.context=so(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(om(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hh.enqueueReplaceState(i,i.state,null),Oc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===OC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function x0(t){var e=t._init;return e(t._payload)}function MC(t){function e(g,f){if(t){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=ei(g,f),g.index=0,g.sibling=null,g}function s(g,f,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,v,E){return f===null||f.tag!==6?(f=Wf(v,g.mode,E),f.return=g,f):(f=i(f,v),f.return=g,f)}function l(g,f,v,E){var T=v.type;return T===Ns?c(g,f,v.props.children,E,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&x0(T)===f.type)?(E=i(f,v.props),E.ref=ia(g,f,v),E.return=g,E):(E=uc(v.type,v.key,v.props,null,g.mode,E),E.ref=ia(g,f,v),E.return=g,E)}function u(g,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Hf(v,g.mode,E),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function c(g,f,v,E,T){return f===null||f.tag!==7?(f=Wi(v,g.mode,E,T),f.return=g,f):(f=i(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wf(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eu:return v=uc(f.type,f.key,f.props,null,g.mode,v),v.ref=ia(g,null,f),v.return=g,v;case Rs:return f=Hf(f,g.mode,v),f.return=g,f;case Pr:var E=f._init;return h(g,E(f._payload),v)}if(ma(f)||Zo(f))return f=Wi(f,g.mode,v,null),f.return=g,f;Pu(g,f)}return null}function d(g,f,v,E){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eu:return v.key===T?l(g,f,v,E):null;case Rs:return v.key===T?u(g,f,v,E):null;case Pr:return T=v._init,d(g,f,T(v._payload),E)}if(ma(v)||Zo(v))return T!==null?null:c(g,f,v,E,null);Pu(g,v)}return null}function p(g,f,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(f,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Eu:return g=g.get(E.key===null?v:E.key)||null,l(f,g,E,T);case Rs:return g=g.get(E.key===null?v:E.key)||null,u(f,g,E,T);case Pr:var A=E._init;return p(g,f,v,A(E._payload),T)}if(ma(E)||Zo(E))return g=g.get(v)||null,c(f,g,E,T,null);Pu(f,E)}return null}function m(g,f,v,E){for(var T=null,A=null,M=f,D=f=0,se=null;M!==null&&D<v.length;D++){M.index>D?(se=M,M=null):se=M.sibling;var G=d(g,M,v[D],E);if(G===null){M===null&&(M=se);break}t&&M&&G.alternate===null&&e(g,M),f=s(G,f,D),A===null?T=G:A.sibling=G,A=G,M=se}if(D===v.length)return n(g,M),Ae&&Pi(g,D),T;if(M===null){for(;D<v.length;D++)M=h(g,v[D],E),M!==null&&(f=s(M,f,D),A===null?T=M:A.sibling=M,A=M);return Ae&&Pi(g,D),T}for(M=r(g,M);D<v.length;D++)se=p(M,g,D,v[D],E),se!==null&&(t&&se.alternate!==null&&M.delete(se.key===null?D:se.key),f=s(se,f,D),A===null?T=se:A.sibling=se,A=se);return t&&M.forEach(function(nt){return e(g,nt)}),Ae&&Pi(g,D),T}function y(g,f,v,E){var T=Zo(v);if(typeof T!="function")throw Error(x(150));if(v=T.call(v),v==null)throw Error(x(151));for(var A=T=null,M=f,D=f=0,se=null,G=v.next();M!==null&&!G.done;D++,G=v.next()){M.index>D?(se=M,M=null):se=M.sibling;var nt=d(g,M,G.value,E);if(nt===null){M===null&&(M=se);break}t&&M&&nt.alternate===null&&e(g,M),f=s(nt,f,D),A===null?T=nt:A.sibling=nt,A=nt,M=se}if(G.done)return n(g,M),Ae&&Pi(g,D),T;if(M===null){for(;!G.done;D++,G=v.next())G=h(g,G.value,E),G!==null&&(f=s(G,f,D),A===null?T=G:A.sibling=G,A=G);return Ae&&Pi(g,D),T}for(M=r(g,M);!G.done;D++,G=v.next())G=p(M,g,D,G.value,E),G!==null&&(t&&G.alternate!==null&&M.delete(G.key===null?D:G.key),f=s(G,f,D),A===null?T=G:A.sibling=G,A=G);return t&&M.forEach(function(Ye){return e(g,Ye)}),Ae&&Pi(g,D),T}function _(g,f,v,E){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Eu:e:{for(var T=v.key,A=f;A!==null;){if(A.key===T){if(T=v.type,T===Ns){if(A.tag===7){n(g,A.sibling),f=i(A,v.props.children),f.return=g,g=f;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&x0(T)===A.type){n(g,A.sibling),f=i(A,v.props),f.ref=ia(g,A,v),f.return=g,g=f;break e}n(g,A);break}else e(g,A);A=A.sibling}v.type===Ns?(f=Wi(v.props.children,g.mode,E,v.key),f.return=g,g=f):(E=uc(v.type,v.key,v.props,null,g.mode,E),E.ref=ia(g,f,v),E.return=g,g=E)}return o(g);case Rs:e:{for(A=v.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Hf(v,g.mode,E),f.return=g,g=f}return o(g);case Pr:return A=v._init,_(g,f,A(v._payload),E)}if(ma(v))return m(g,f,v,E);if(Zo(v))return y(g,f,v,E);Pu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,v),f.return=g,g=f):(n(g,f),f=Wf(v,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return _}var ao=MC(!0),$C=MC(!1),Fl={},Gn=Ti(Fl),nl=Ti(Fl),rl=Ti(Fl);function Fi(t){if(t===Fl)throw Error(x(174));return t}function ey(t,e){switch(ke(rl,e),ke(nl,t),ke(Gn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Up(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Up(e,t)}Re(Gn),ke(Gn,e)}function lo(){Re(Gn),Re(nl),Re(rl)}function FC(t){Fi(rl.current);var e=Fi(Gn.current),n=Up(e,t.type);e!==n&&(ke(nl,t),ke(Gn,n))}function ty(t){nl.current===t&&(Re(Gn),Re(nl))}var Pe=Ti(0);function Lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ff=[];function ny(){for(var t=0;t<Ff.length;t++)Ff[t]._workInProgressVersionPrimary=null;Ff.length=0}var ic=Rr.ReactCurrentDispatcher,Uf=Rr.ReactCurrentBatchConfig,Zi=0,Le=null,Xe=null,st=null,Mc=!1,Na=!1,il=0,BA=0;function It(){throw Error(x(321))}function ry(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function iy(t,e,n,r,i,s){if(Zi=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?HA:qA,t=n(r,i),Na){s=0;do{if(Na=!1,il=0,25<=s)throw Error(x(301));s+=1,st=Xe=null,e.updateQueue=null,ic.current=GA,t=n(r,i)}while(Na)}if(ic.current=$c,e=Xe!==null&&Xe.next!==null,Zi=0,st=Xe=Le=null,Mc=!1,e)throw Error(x(300));return t}function sy(){var t=il!==0;return il=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Le.memoizedState=st=t:st=st.next=t,st}function Cn(){if(Xe===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=st===null?Le.memoizedState:st.next;if(e!==null)st=e,Xe=t;else{if(t===null)throw Error(x(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},st===null?Le.memoizedState=st=t:st=st.next=t}return st}function sl(t,e){return typeof e=="function"?e(t):e}function Vf(t){var e=Cn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Le.lanes|=c,es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ln(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bf(t){var e=Cn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function UC(){}function VC(t,e){var n=Le,r=Cn(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,oy(jC.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,ol(9,zC.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(x(349));Zi&30||BC(n,e,i)}return i}function BC(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zC(t,e,n,r){e.value=n,e.getSnapshot=r,WC(e)&&HC(t)}function jC(t,e,n){return n(function(){WC(e)&&HC(t)})}function WC(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function HC(t){var e=_r(t,1);e!==null&&Pn(e,t,1,-1)}function R0(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=WA.bind(null,Le,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qC(){return Cn().memoizedState}function sc(t,e,n,r){var i=Vn();Le.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function qh(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&ry(r,o.deps)){i.memoizedState=ol(e,n,s,r);return}}Le.flags|=t,i.memoizedState=ol(1|e,n,s,r)}function N0(t,e){return sc(8390656,8,t,e)}function oy(t,e){return qh(2048,8,t,e)}function GC(t,e){return qh(4,2,t,e)}function KC(t,e){return qh(4,4,t,e)}function QC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YC(t,e,n){return n=n!=null?n.concat([t]):null,qh(4,4,QC.bind(null,e,t),n)}function ay(){}function XC(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JC(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZC(t,e,n){return Zi&21?(Ln(n,e)||(n=nC(),Le.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function zA(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Uf.transition;Uf.transition={};try{t(!1),e()}finally{_e=n,Uf.transition=r}}function eS(){return Cn().memoizedState}function jA(t,e,n){var r=Zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tS(t))nS(e,n);else if(n=PC(t,e,n,r),n!==null){var i=zt();Pn(n,t,r,i),rS(n,e,r)}}function WA(t,e,n){var r=Zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tS(t))nS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,o)){var l=e.interleaved;l===null?(i.next=i,Jg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=PC(t,e,i,r),n!==null&&(i=zt(),Pn(n,t,r,i),rS(n,e,r))}}function tS(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function nS(t,e){Na=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fg(t,n)}}var $c={readContext:En,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},HA={readContext:En,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:N0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sc(4194308,4,QC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return sc(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jA.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:R0,useDebugValue:ay,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=R0(!1),e=t[0];return t=zA.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Vn();if(Ae){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),lt===null)throw Error(x(349));Zi&30||BC(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,N0(jC.bind(null,r,s,t),[t]),r.flags|=2048,ol(9,zC.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=lt.identifierPrefix;if(Ae){var n=lr,r=ar;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qA={readContext:En,useCallback:XC,useContext:En,useEffect:oy,useImperativeHandle:YC,useInsertionEffect:GC,useLayoutEffect:KC,useMemo:JC,useReducer:Vf,useRef:qC,useState:function(){return Vf(sl)},useDebugValue:ay,useDeferredValue:function(t){var e=Cn();return ZC(e,Xe.memoizedState,t)},useTransition:function(){var t=Vf(sl)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:UC,useSyncExternalStore:VC,useId:eS,unstable_isNewReconciler:!1},GA={readContext:En,useCallback:XC,useContext:En,useEffect:oy,useImperativeHandle:YC,useInsertionEffect:GC,useLayoutEffect:KC,useMemo:JC,useReducer:Bf,useRef:qC,useState:function(){return Bf(sl)},useDebugValue:ay,useDeferredValue:function(t){var e=Cn();return Xe===null?e.memoizedState=t:ZC(e,Xe.memoizedState,t)},useTransition:function(){var t=Bf(sl)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:UC,useSyncExternalStore:VC,useId:eS,unstable_isNewReconciler:!1};function uo(t,e){try{var n="",r=e;do n+=EN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KA=typeof WeakMap=="function"?WeakMap:Map;function iS(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uc||(Uc=!0,vm=r),lm(t,e)},n}function sS(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lm(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lb.bind(null,t,e,n),e.then(t,t))}function b0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function P0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var QA=Rr.ReactCurrentOwner,Qt=!1;function Ut(t,e,n,r){e.child=t===null?$C(e,null,n,r):ao(e,t.child,n,r)}function D0(t,e,n,r,i){n=n.render;var s=e.ref;return Qs(e,i),r=iy(t,e,n,r,s,i),n=sy(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wr(t,e,i)):(Ae&&n&&qg(e),e.flags|=1,Ut(t,e,r,i),e.child)}function O0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!my(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,r)&&t.ref===e.ref)return wr(t,e,i)}return e.flags|=1,t=ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ja(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,wr(t,e,i)}return um(t,e,n,r,i)}function aS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Us,tn),tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Us,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Us,tn),tn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Us,tn),tn|=r;return Ut(t,e,i,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function um(t,e,n,r,i){var s=Jt(n)?Xi:Ot.current;return s=so(e,s),Qs(e,i),n=iy(t,e,n,r,s,i),r=sy(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wr(t,e,i)):(Ae&&r&&qg(e),e.flags|=1,Ut(t,e,n,i),e.child)}function L0(t,e,n,r,i){if(Jt(n)){var s=!0;Nc(e)}else s=!1;if(Qs(e,i),e.stateNode===null)oc(t,e),LC(e,n,r),am(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Jt(n)?Xi:Ot.current,u=so(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&k0(e,o,r,u),Dr=!1;var d=e.memoizedState;o.state=d,Oc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xt.current||Dr?(typeof c=="function"&&(om(e,n,c,r),l=e.memoizedState),(a=Dr||T0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,DC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Jt(n)?Xi:Ot.current,l=so(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&k0(e,o,r,l),Dr=!1,d=e.memoizedState,o.state=d,Oc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||Xt.current||Dr?(typeof p=="function"&&(om(e,n,p,r),m=e.memoizedState),(u=Dr||T0(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return cm(t,e,n,r,s,i)}function cm(t,e,n,r,i,s){lS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&w0(e,n,!1),wr(t,e,s);r=e.stateNode,QA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&w0(e,n,!0),e.child}function uS(t){var e=t.stateNode;e.pendingContext?_0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_0(t,e.context,!1),ey(t,e.containerInfo)}function M0(t,e,n,r,i){return oo(),Kg(i),e.flags|=256,Ut(t,e,n,r),e.child}var hm={dehydrated:null,treeContext:null,retryLane:0};function dm(t){return{baseLanes:t,cachePool:null,transitions:null}}function cS(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Pe,i&1),t===null)return im(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qh(o,r,0,null),t=Wi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dm(n),e.memoizedState=hm,t):ly(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ei(a,s):(s=Wi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hm,r}return s=t.child,t=s.sibling,r=ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ly(t,e){return e=Qh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Du(t,e,n,r){return r!==null&&Kg(r),ao(e,t.child,null,n),t=ly(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zf(Error(x(422))),Du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qh({mode:"visible",children:r.children},i,0,null),s=Wi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=dm(o),e.memoizedState=hm,s);if(!(e.mode&1))return Du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=zf(s,r,void 0),Du(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),Pn(r,t,i,-1))}return py(),r=zf(Error(x(421))),Du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ub.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nn=Yr(i.nextSibling),sn=e,Ae=!0,Rn=null,t!==null&&(pn[mn++]=ar,pn[mn++]=lr,pn[mn++]=Ji,ar=t.id,lr=t.overflow,Ji=e),e=ly(e,r.children),e.flags|=4096,e)}function $0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sm(t.return,e,n)}function jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$0(t,n,e);else if(t.tag===19)$0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jf(e,!0,n,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XA(t,e,n){switch(e.tag){case 3:uS(e),oo();break;case 5:FC(e);break;case 1:Jt(e.type)&&Nc(e);break;case 4:ey(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?cS(t,e,n):(ke(Pe,Pe.current&1),t=wr(t,e,n),t!==null?t.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return wr(t,e,n)}var dS,fm,fS,pS;dS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fm=function(){};fS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(Gn.current);var s=null;switch(n){case"input":i=Lp(t,i),r=Lp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Fp(t,i),r=Fp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xc)}Vp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pS=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JA(t,e,n){var r=e.pendingProps;switch(Gg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Jt(e.type)&&Rc(),Tt(e),null;case 3:return r=e.stateNode,lo(),Re(Xt),Re(Ot),ny(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Em(Rn),Rn=null))),fm(t,e),Tt(e),null;case 5:ty(e);var i=Fi(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Tt(e),null}if(t=Fi(Gn.current),bu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bn]=e,r[tl]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<ya.length;i++)xe(ya[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":q_(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":K_(r,s),xe("invalid",r)}Vp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,a,t),i=["children",""+a]):Ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Cu(r),G_(r,s,!0);break;case"textarea":Cu(r),Q_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=BE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bn]=e,t[tl]=r,dS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bp(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ya.length;i++)xe(ya[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":q_(t,r),i=Lp(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),xe("invalid",t);break;case"textarea":K_(t,r),i=Fp(t,r),xe("invalid",t);break;default:i=r}Vp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?WE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qa(t,l):typeof l=="number"&&qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&Pg(t,s,l,o))}switch(n){case"input":Cu(t),G_(t,r,!1);break;case"textarea":Cu(t),Q_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Fi(rl.current),Fi(Gn.current),bu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=e,e.stateNode=r}return Tt(e),null;case 13:if(Re(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&nn!==null&&e.mode&1&&!(e.flags&128))bC(),oo(),e.flags|=98560,s=!1;else if(s=bu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Bn]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else Rn!==null&&(Em(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ze===0&&(Ze=3):py())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return lo(),fm(t,e),t===null&&Za(e.stateNode.containerInfo),Tt(e),null;case 10:return Xg(e.type._context),Tt(e),null;case 17:return Jt(e.type)&&Rc(),Tt(e),null;case 19:if(Re(Pe),s=e.memoizedState,s===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lc(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&We()>co&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return Tt(e),null}else 2*We()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=We(),e.sibling=null,n=Pe.current,ke(Pe,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return fy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function ZA(t,e){switch(Gg(e),e.tag){case 1:return Jt(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Re(Xt),Re(Ot),ny(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ty(e),null;case 13:if(Re(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Pe),null;case 4:return lo(),null;case 10:return Xg(e.type._context),null;case 22:case 23:return fy(),null;case 24:return null;default:return null}}var Ou=!1,Rt=!1,eb=typeof WeakSet=="function"?WeakSet:Set,U=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function pm(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var F0=!1;function tb(t,e){if(Xp=Ic,t=vC(),Hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jp={focusedElem:t,selectionRange:n},Ic=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,_=m.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:kn(e.type,y),_);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){Fe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return m=F0,F0=!1,m}function Aa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pm(e,n,s)}i=i.next}while(i!==r)}}function Gh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[tl],delete e[tm],delete e[$A],delete e[FA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function U0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}function ym(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ym(t,e,n),t=t.sibling;t!==null;)ym(t,e,n),t=t.sibling}var yt=null,xn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)yS(t,e,n),n=n.sibling}function yS(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Uh,n)}catch{}switch(n.tag){case 5:Rt||Fs(n,e);case 6:var r=yt,i=xn;yt=null,Ar(t,e,n),yt=r,xn=i,yt!==null&&(xn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(xn?(t=yt,n=n.stateNode,t.nodeType===8?Mf(t.parentNode,n):t.nodeType===1&&Mf(t,n),Ya(t)):Mf(yt,n.stateNode));break;case 4:r=yt,i=xn,yt=n.stateNode.containerInfo,xn=!0,Ar(t,e,n),yt=r,xn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pm(n,e,o),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!Rt&&(Fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Ar(t,e,n),Rt=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function V0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eb),e.forEach(function(r){var i=cb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,xn=!1;break e;case 3:yt=a.stateNode.containerInfo,xn=!0;break e;case 4:yt=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(yt===null)throw Error(x(160));yS(s,o,i),yt=null,xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vS(e,t),e=e.sibling}function vS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Un(t),r&4){try{Aa(3,t,t.return),Gh(3,t)}catch(y){Fe(t,t.return,y)}try{Aa(5,t,t.return)}catch(y){Fe(t,t.return,y)}}break;case 1:Tn(e,t),Un(t),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(Tn(e,t),Un(t),r&512&&n!==null&&Fs(n,n.return),t.flags&32){var i=t.stateNode;try{qa(i,"")}catch(y){Fe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&UE(i,s),Bp(a,o);var u=Bp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?WE(i,h):c==="dangerouslySetInnerHTML"?zE(i,h):c==="children"?qa(i,h):Pg(i,c,h,u)}switch(a){case"input":Mp(i,s);break;case"textarea":VE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hs(i,!!s.multiple,s.defaultValue,!0):Hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[tl]=s}catch(y){Fe(t,t.return,y)}}break;case 6:if(Tn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Fe(t,t.return,y)}}break;case 3:if(Tn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(y){Fe(t,t.return,y)}break;case 4:Tn(e,t),Un(t);break;case 13:Tn(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hy=We())),r&4&&V0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||c,Tn(e,t),Rt=u):Tn(e,t),Un(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:Aa(4,d,d.return);break;case 1:Fs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Fe(r,n,y)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){z0(h);continue}}p!==null?(p.return=d,U=p):z0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jE("display",o))}catch(y){Fe(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Fe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),Un(t),r&4&&V0(t);break;case 21:break;default:Tn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qa(i,""),r.flags&=-33);var s=U0(t);ym(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=U0(t);gm(t,a,o);break;default:throw Error(x(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nb(t,e,n){U=t,_S(t)}function _S(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ou;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=Ou;var u=Rt;if(Ou=o,(Rt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?j0(i):l!==null?(l.return=o,U=l):j0(i);for(;s!==null;)U=s,_S(s),s=s.sibling;U=i,Ou=a,Rt=u}B0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):B0(t)}}function B0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Gh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&I0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}I0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ya(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Rt||e.flags&512&&mm(e)}catch(d){Fe(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function z0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function j0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gh(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Fe(e,i,l)}}var s=e.return;try{mm(e)}catch(l){Fe(e,s,l)}break;case 5:var o=e.return;try{mm(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var rb=Math.ceil,Fc=Rr.ReactCurrentDispatcher,uy=Rr.ReactCurrentOwner,_n=Rr.ReactCurrentBatchConfig,he=0,lt=null,Ge=null,vt=0,tn=0,Us=Ti(0),Ze=0,al=null,es=0,Kh=0,cy=0,ba=null,Gt=null,hy=0,co=1/0,ir=null,Uc=!1,vm=null,Jr=null,Lu=!1,zr=null,Vc=0,Pa=0,_m=null,ac=-1,lc=0;function zt(){return he&6?We():ac!==-1?ac:ac=We()}function Zr(t){return t.mode&1?he&2&&vt!==0?vt&-vt:VA.transition!==null?(lc===0&&(lc=nC()),lc):(t=_e,t!==0||(t=window.event,t=t===void 0?16:uC(t.type)),t):1}function Pn(t,e,n,r){if(50<Pa)throw Pa=0,_m=null,Error(x(185));Ll(t,n,r),(!(he&2)||t!==lt)&&(t===lt&&(!(he&2)&&(Kh|=n),Ze===4&&Lr(t,vt)),Zt(t,r),n===1&&he===0&&!(e.mode&1)&&(co=We()+500,Wh&&ki()))}function Zt(t,e){var n=t.callbackNode;VN(t,e);var r=Sc(t,t===lt?vt:0);if(r===0)n!==null&&J_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&J_(n),e===1)t.tag===0?UA(W0.bind(null,t)):RC(W0.bind(null,t)),LA(function(){!(he&6)&&ki()}),n=null;else{switch(rC(r)){case 1:n=$g;break;case 4:n=eC;break;case 16:n=Cc;break;case 536870912:n=tC;break;default:n=Cc}n=xS(n,wS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wS(t,e){if(ac=-1,lc=0,he&6)throw Error(x(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Sc(t,t===lt?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bc(t,r);else{e=r;var i=he;he|=2;var s=CS();(lt!==t||vt!==e)&&(ir=null,co=We()+500,ji(t,e));do try{ob();break}catch(a){ES(t,a)}while(1);Yg(),Fc.current=s,he=i,Ge!==null?e=0:(lt=null,vt=0,e=Ze)}if(e!==0){if(e===2&&(i=qp(t),i!==0&&(r=i,e=wm(t,i))),e===1)throw n=al,ji(t,0),Lr(t,r),Zt(t,We()),n;if(e===6)Lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ib(i)&&(e=Bc(t,r),e===2&&(s=qp(t),s!==0&&(r=s,e=wm(t,s))),e===1))throw n=al,ji(t,0),Lr(t,r),Zt(t,We()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Di(t,Gt,ir);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=hy+500-We(),10<e)){if(Sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=em(Di.bind(null,t,Gt,ir),e);break}Di(t,Gt,ir);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rb(r/1960))-r,10<r){t.timeoutHandle=em(Di.bind(null,t,Gt,ir),r);break}Di(t,Gt,ir);break;case 5:Di(t,Gt,ir);break;default:throw Error(x(329))}}}return Zt(t,We()),t.callbackNode===n?wS.bind(null,t):null}function wm(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(ji(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&Em(e)),t}function Em(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function ib(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~cy,e&=~Kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function W0(t){if(he&6)throw Error(x(327));Ys();var e=Sc(t,0);if(!(e&1))return Zt(t,We()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var r=qp(t);r!==0&&(e=r,n=wm(t,r))}if(n===1)throw n=al,ji(t,0),Lr(t,e),Zt(t,We()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Di(t,Gt,ir),Zt(t,We()),null}function dy(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(co=We()+500,Wh&&ki())}}function ts(t){zr!==null&&zr.tag===0&&!(he&6)&&Ys();var e=he;he|=1;var n=_n.transition,r=_e;try{if(_n.transition=null,_e=1,t)return t()}finally{_e=r,_n.transition=n,he=e,!(he&6)&&ki()}}function fy(){tn=Us.current,Re(Us)}function ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OA(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rc();break;case 3:lo(),Re(Xt),Re(Ot),ny();break;case 5:ty(r);break;case 4:lo();break;case 13:Re(Pe);break;case 19:Re(Pe);break;case 10:Xg(r.type._context);break;case 22:case 23:fy()}n=n.return}if(lt=t,Ge=t=ei(t.current,null),vt=tn=e,Ze=0,al=null,cy=Kh=es=0,Gt=ba=null,$i!==null){for(e=0;e<$i.length;e++)if(n=$i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$i=null}return t}function ES(t,e){do{var n=Ge;try{if(Yg(),ic.current=$c,Mc){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mc=!1}if(Zi=0,st=Xe=Le=null,Na=!1,il=0,uy.current=null,n===null||n.return===null){Ze=1,al=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=b0(o);if(p!==null){p.flags&=-257,P0(p,o,a,s,e),p.mode&1&&A0(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){A0(s,u,e),py();break e}l=Error(x(426))}}else if(Ae&&a.mode&1){var _=b0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),P0(_,o,a,s,e),Kg(uo(l,a));break e}}s=l=uo(l,a),Ze!==4&&(Ze=2),ba===null?ba=[s]:ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=iS(s,l,e);S0(s,g);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Jr===null||!Jr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=sS(s,a,e);S0(s,E);break e}}s=s.return}while(s!==null)}IS(n)}catch(T){e=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function CS(){var t=Fc.current;return Fc.current=$c,t===null?$c:t}function py(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),lt===null||!(es&268435455)&&!(Kh&268435455)||Lr(lt,vt)}function Bc(t,e){var n=he;he|=2;var r=CS();(lt!==t||vt!==e)&&(ir=null,ji(t,e));do try{sb();break}catch(i){ES(t,i)}while(1);if(Yg(),he=n,Fc.current=r,Ge!==null)throw Error(x(261));return lt=null,vt=0,Ze}function sb(){for(;Ge!==null;)SS(Ge)}function ob(){for(;Ge!==null&&!bN();)SS(Ge)}function SS(t){var e=kS(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?IS(t):Ge=e,uy.current=null}function IS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZA(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ge=null;return}}else if(n=JA(n,e,tn),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Ze===0&&(Ze=5)}function Di(t,e,n){var r=_e,i=_n.transition;try{_n.transition=null,_e=1,ab(t,e,n,r)}finally{_n.transition=i,_e=r}return null}function ab(t,e,n,r){do Ys();while(zr!==null);if(he&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BN(t,s),t===lt&&(Ge=lt=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lu||(Lu=!0,xS(Cc,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=_e;_e=1;var a=he;he|=4,uy.current=null,tb(t,n),vS(n,t),xA(Jp),Ic=!!Xp,Jp=Xp=null,t.current=n,nb(n),PN(),he=a,_e=o,_n.transition=s}else t.current=n;if(Lu&&(Lu=!1,zr=t,Vc=i),s=t.pendingLanes,s===0&&(Jr=null),LN(n.stateNode),Zt(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uc)throw Uc=!1,t=vm,vm=null,t;return Vc&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===_m?Pa++:(Pa=0,_m=t):Pa=0,ki(),null}function Ys(){if(zr!==null){var t=rC(Vc),e=_n.transition,n=_e;try{if(_n.transition=null,_e=16>t?16:t,zr===null)var r=!1;else{if(t=zr,zr=null,Vc=0,he&6)throw Error(x(331));var i=he;for(he|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Aa(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(mS(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,U=v;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gh(9,a)}}catch(T){Fe(a,a.return,T)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(he=i,ki(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Uh,t)}catch{}r=!0}return r}finally{_e=n,_n.transition=e}}return!1}function H0(t,e,n){e=uo(n,e),e=iS(t,e,1),t=Xr(t,e,1),e=zt(),t!==null&&(Ll(t,1,e),Zt(t,e))}function Fe(t,e,n){if(t.tag===3)H0(t,t,n);else for(;e!==null;){if(e.tag===3){H0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=uo(n,t),t=sS(e,t,1),e=Xr(e,t,1),t=zt(),e!==null&&(Ll(e,1,t),Zt(e,t));break}}e=e.return}}function lb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(vt&n)===n&&(Ze===4||Ze===3&&(vt&130023424)===vt&&500>We()-hy?ji(t,0):cy|=n),Zt(t,e)}function TS(t,e){e===0&&(t.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var n=zt();t=_r(t,e),t!==null&&(Ll(t,e,n),Zt(t,n))}function ub(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TS(t,n)}function cb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),TS(t,n)}var kS;kS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,XA(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,Ae&&e.flags&1048576&&NC(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oc(t,e),t=e.pendingProps;var i=so(e,Ot.current);Qs(e,n),i=iy(null,e,r,t,i,n);var s=sy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zg(e),i.updater=Hh,e.stateNode=i,i._reactInternals=e,am(e,r,t,n),e=cm(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&qg(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=db(r),t=kn(r,t),i){case 0:e=um(null,e,r,t,n);break e;case 1:e=L0(null,e,r,t,n);break e;case 11:e=D0(null,e,r,t,n);break e;case 14:e=O0(null,e,r,kn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),um(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),L0(t,e,r,i,n);case 3:e:{if(uS(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,DC(t,e),Oc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=uo(Error(x(423)),e),e=M0(t,e,r,n,i);break e}else if(r!==i){i=uo(Error(x(424)),e),e=M0(t,e,r,n,i);break e}else for(nn=Yr(e.stateNode.containerInfo.firstChild),sn=e,Ae=!0,Rn=null,n=$C(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===i){e=wr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return FC(e),t===null&&im(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zp(r,i)?o=null:s!==null&&Zp(r,s)&&(e.flags|=32),lS(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&im(e),null;case 13:return cS(t,e,n);case 4:return ey(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ao(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),D0(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Pc,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!Xt.current){e=wr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=pr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qs(e,n),i=En(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),O0(t,e,r,i,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),oc(t,e),e.tag=1,Jt(r)?(t=!0,Nc(e)):t=!1,Qs(e,n),LC(e,r,i),am(e,r,i,n),cm(null,e,r,!0,t,n);case 19:return hS(t,e,n);case 22:return aS(t,e,n)}throw Error(x(156,e.tag))};function xS(t,e){return ZE(t,e)}function hb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,r){return new hb(t,e,n,r)}function my(t){return t=t.prototype,!(!t||!t.isReactComponent)}function db(t){if(typeof t=="function")return my(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Og)return 11;if(t===Lg)return 14}return 2}function ei(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")my(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Wi(n.children,i,s,e);case Dg:o=8,i|=8;break;case bp:return t=gn(12,n,e,i|2),t.elementType=bp,t.lanes=s,t;case Pp:return t=gn(13,n,e,i),t.elementType=Pp,t.lanes=s,t;case Dp:return t=gn(19,n,e,i),t.elementType=Dp,t.lanes=s,t;case ME:return Qh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case OE:o=10;break e;case LE:o=9;break e;case Og:o=11;break e;case Lg:o=14;break e;case Pr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=gn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wi(t,e,n,r){return t=gn(7,t,r,e),t.lanes=n,t}function Qh(t,e,n,r){return t=gn(22,t,r,e),t.elementType=ME,t.lanes=n,t.stateNode={isHidden:!1},t}function Wf(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function Hf(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gy(t,e,n,r,i,s,o,a,l){return t=new fb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zg(s),t}function pb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function RS(t){if(!t)return fi;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Jt(n))return xC(t,n,e)}return e}function NS(t,e,n,r,i,s,o,a,l){return t=gy(n,r,!0,t,i,s,o,a,l),t.context=RS(null),n=t.current,r=zt(),i=Zr(n),s=pr(r,i),s.callback=e??null,Xr(n,s,i),t.current.lanes=i,Ll(t,i,r),Zt(t,r),t}function Yh(t,e,n,r){var i=e.current,s=zt(),o=Zr(i);return n=RS(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(i,e,o),t!==null&&(Pn(t,i,o,s),rc(t,i,o)),o}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function q0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yy(t,e){q0(t,e),(t=t.alternate)&&q0(t,e)}function mb(){return null}var AS=typeof reportError=="function"?reportError:function(t){console.error(t)};function vy(t){this._internalRoot=t}Xh.prototype.render=vy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Yh(t,e,null,null)};Xh.prototype.unmount=vy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Yh(null,t,null,null)}),e[vr]=null}};function Xh(t){this._internalRoot=t}Xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=oC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&lC(t)}};function _y(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function G0(){}function gb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zc(o);s.call(u)}}var o=NS(e,r,t,0,null,!1,!1,"",G0);return t._reactRootContainer=o,t[vr]=o.current,Za(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zc(l);a.call(u)}}var l=gy(t,0,!1,null,null,!1,!1,"",G0);return t._reactRootContainer=l,t[vr]=l.current,Za(t.nodeType===8?t.parentNode:t),ts(function(){Yh(e,l,n,r)}),l}function Zh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zc(o);a.call(l)}}Yh(e,o,t,i)}else o=gb(n,e,t,i,r);return zc(o)}iC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Fg(e,n|1),Zt(e,We()),!(he&6)&&(co=We()+500,ki()))}break;case 13:ts(function(){var r=_r(t,1);if(r!==null){var i=zt();Pn(r,t,1,i)}}),yy(t,1)}};Ug=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=zt();Pn(e,t,134217728,n)}yy(t,134217728)}};sC=function(t){if(t.tag===13){var e=Zr(t),n=_r(t,e);if(n!==null){var r=zt();Pn(n,t,e,r)}yy(t,e)}};oC=function(){return _e};aC=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};jp=function(t,e,n){switch(e){case"input":if(Mp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jh(r);if(!i)throw Error(x(90));FE(r),Mp(r,i)}}}break;case"textarea":VE(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};GE=dy;KE=ts;var yb={usingClientEntryPoint:!1,Events:[$l,Ds,jh,HE,qE,dy]},oa={findFiberByHostInstance:Mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vb={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=XE(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Uh=Mu.inject(vb),qn=Mu}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yb;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_y(e))throw Error(x(200));return pb(t,e,null,n)};hn.createRoot=function(t,e){if(!_y(t))throw Error(x(299));var n=!1,r="",i=AS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gy(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,Za(t.nodeType===8?t.parentNode:t),new vy(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=XE(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return ts(t)};hn.hydrate=function(t,e,n){if(!Jh(e))throw Error(x(200));return Zh(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!_y(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=AS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=NS(e,null,t,1,n??null,i,!1,s,o),t[vr]=e.current,Za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xh(e)};hn.render=function(t,e,n){if(!Jh(e))throw Error(x(200));return Zh(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Jh(t))throw Error(x(40));return t._reactRootContainer?(ts(function(){Zh(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};hn.unstable_batchedUpdates=dy;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jh(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Zh(t,e,n,!1,r)};hn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=hn})(mN);var K0=Rp;xp.createRoot=K0.createRoot,xp.hydrateRoot=K0.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Lo(e)},Lo=function(t){return new Error("Firebase Database ("+bS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_b=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_b(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new wb;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(t){const e=PS(t);return wy.encodeByteArray(e,!0)},jc=function(t){return DS(t).replace(/\./g,"")},Wc=function(t){try{return wy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){return OS(void 0,t)}function OS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cb(n)||(t[n]=OS(t[n],e[n]));return t}function Cb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=()=>Sb().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wc(t[1]);return e&&JSON.parse(e)},ed=()=>{try{return Ib()||Tb()||kb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LS=t=>{var e,n;return(n=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ey=t=>{const e=LS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xb=()=>{var t;return(t=ed())===null||t===void 0?void 0:t.config},MS=t=>{var e;return(e=ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jc(JSON.stringify(n)),jc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function Rb(){var t;const e=(t=ed())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ab(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FS(){return bS.NODE_ADMIN===!0}function bb(){try{return typeof indexedDB=="object"}catch{return!1}}function Pb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Db,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ul.prototype.create)}}class Ul{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ob(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,a,r)}}function Ob(t,e){return t.replace(Lb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ll(Wc(s[0])||""),n=ll(Wc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Mb=function(t){const e=US(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$b=function(t){const e=US(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ho(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Q0(s)&&Q0(o)){if(!Gc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function va(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ub(t,e){const n=new Vb(t,e);return n.subscribe.bind(n)}class Vb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qf),i.error===void 0&&(i.error=qf),i.complete===void 0&&(i.complete=qf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qf(){}function fo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},td=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hb(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wb(t){return t===Oi?void 0:t}function Hb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Gb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Kb=fe.INFO,Qb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nd{constructor(e){this.name=e,this._logLevel=Kb,this._logHandler=Yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Xb=(t,e)=>e.some(n=>t instanceof n);let Y0,X0;function Jb(){return Y0||(Y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zb(){return X0||(X0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VS=new WeakMap,Cm=new WeakMap,BS=new WeakMap,Gf=new WeakMap,Iy=new WeakMap;function eP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VS.set(n,t)}).catch(()=>{}),Iy.set(e,t),e}function tP(t){if(Cm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cm.set(t,e)}let Sm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nP(t){Sm=t(Sm)}function rP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kf(this),e,...n);return BS.set(r,e.sort?e.sort():[e]),ti(r)}:Zb().includes(t)?function(...e){return t.apply(Kf(this),e),ti(VS.get(this))}:function(...e){return ti(t.apply(Kf(this),e))}}function iP(t){return typeof t=="function"?rP(t):(t instanceof IDBTransaction&&tP(t),Xb(t,Jb())?new Proxy(t,Sm):t)}function ti(t){if(t instanceof IDBRequest)return eP(t);if(Gf.has(t))return Gf.get(t);const e=iP(t);return e!==t&&(Gf.set(t,e),Iy.set(e,t)),e}const Kf=t=>Iy.get(t);function sP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ti(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ti(o.result),l.oldVersion,l.newVersion,ti(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oP=["get","getKey","getAll","getAllKeys","count"],aP=["put","add","delete","clear"],Qf=new Map;function J0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qf.get(e))return Qf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qf.set(e,s),s}nP(t=>({...t,get:(e,n,r)=>J0(e,n)||t.get(e,n,r),has:(e,n)=>!!J0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Im="@firebase/app",Z0="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new nd("@firebase/app"),cP="@firebase/app-compat",hP="@firebase/analytics-compat",dP="@firebase/analytics",fP="@firebase/app-check-compat",pP="@firebase/app-check",mP="@firebase/auth",gP="@firebase/auth-compat",yP="@firebase/database",vP="@firebase/database-compat",_P="@firebase/functions",wP="@firebase/functions-compat",EP="@firebase/installations",CP="@firebase/installations-compat",SP="@firebase/messaging",IP="@firebase/messaging-compat",TP="@firebase/performance",kP="@firebase/performance-compat",xP="@firebase/remote-config",RP="@firebase/remote-config-compat",NP="@firebase/storage",AP="@firebase/storage-compat",bP="@firebase/firestore",PP="@firebase/firestore-compat",DP="firebase",OP="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="[DEFAULT]",LP={[Im]:"fire-core",[cP]:"fire-core-compat",[dP]:"fire-analytics",[hP]:"fire-analytics-compat",[pP]:"fire-app-check",[fP]:"fire-app-check-compat",[mP]:"fire-auth",[gP]:"fire-auth-compat",[yP]:"fire-rtdb",[vP]:"fire-rtdb-compat",[_P]:"fire-fn",[wP]:"fire-fn-compat",[EP]:"fire-iid",[CP]:"fire-iid-compat",[SP]:"fire-fcm",[IP]:"fire-fcm-compat",[TP]:"fire-perf",[kP]:"fire-perf-compat",[xP]:"fire-rc",[RP]:"fire-rc-compat",[NP]:"fire-gcs",[AP]:"fire-gcs-compat",[bP]:"fire-fst",[PP]:"fire-fst-compat","fire-js":"fire-js",[DP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map,km=new Map;function MP(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(km.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;km.set(e,t);for(const n of Kc.values())MP(n,t);return!0}function Vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ni=new Ul("app","Firebase",$P);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=OP;function zS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ni.create("bad-app-name",{appName:String(i)});if(n||(n=xb()),!n)throw ni.create("no-options");const s=Kc.get(i);if(s){if(Gc(n,s.options)&&Gc(r,s.config))return s;throw ni.create("duplicate-app",{appName:i})}const o=new qb(i);for(const l of km.values())o.addComponent(l);const a=new FP(n,r,o);return Kc.set(i,a),a}function rd(t=Tm){const e=Kc.get(t);if(!e&&t===Tm)return zS();if(!e)throw ni.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=LP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}pi(new Er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="firebase-heartbeat-database",VP=1,ul="firebase-heartbeat-store";let Yf=null;function jS(){return Yf||(Yf=sP(UP,VP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ul)}}}).catch(t=>{throw ni.create("idb-open",{originalErrorMessage:t.message})})),Yf}async function BP(t){try{return(await jS()).transaction(ul).objectStore(ul).get(WS(t))}catch(e){if(e instanceof Jn)ns.warn(e.message);else{const n=ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function ew(t,e){try{const r=(await jS()).transaction(ul,"readwrite");return await r.objectStore(ul).put(e,WS(t)),r.done}catch(n){if(n instanceof Jn)ns.warn(n.message);else{const r=ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function WS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=1024,jP=30*24*60*60*1e3;class WP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=jP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tw(),{heartbeatsToSend:n,unsentEntries:r}=HP(this._heartbeatsCache.heartbeats),i=jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tw(){return new Date().toISOString().substring(0,10)}function HP(t,e=zP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bb()?Pb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ew(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ew(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nw(t){return jc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){pi(new Er("platform-logger",e=>new lP(e),"PRIVATE")),pi(new Er("heartbeat",e=>new WP(e),"PRIVATE")),wn(Im,Z0,t),wn(Im,Z0,"esm2017"),wn("fire-js","")}GP("");function Ty(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function HS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KP=HS,qS=new Ul("auth","Firebase",HS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new nd("@firebase/auth");function cc(t,...e){rw.logLevel<=fe.ERROR&&rw.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw ky(t,...e)}function Kn(t,...e){return ky(t,...e)}function QP(t,e,n){const r=Object.assign(Object.assign({},KP()),{[e]:n});return new Ul("auth","Firebase",r).create(e,{appName:t.name})}function ky(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qS.create(t,...e)}function q(t,e,...n){if(!t)throw ky(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function Cr(t,e){t||ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Map;function cr(t){Cr(t instanceof Function,"Expected a class definition");let e=iw.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iw.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t,e){const n=Vl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gc(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function XP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JP(){return sw()==="http:"||sw()==="https:"}function sw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JP()||Nb()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Sy()||$S()}get(){return ZP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Bl(3e4,6e4);function zl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $o(t,e,n,r,i={}){return KS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),GS.fetch()(QS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tD),e);try{const i=new rD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $u(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QP(t,c,u);Mn(t,c)}}catch(i){if(i instanceof Jn)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function jl(t,e,n,r,i={}){const s=await $o(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function QS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xy(t.config,i):`${t.config.apiScheme}://${i}`}class rD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),nD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){return $o(t,"POST","/v1/accounts:delete",e)}async function sD(t,e){return $o(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oD(t,e=!1){const n=ce(t),r=await n.getIdToken(e),i=Ry(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Da(Xf(i.auth_time)),issuedAtTime:Da(Xf(i.iat)),expirationTime:Da(Xf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xf(t){return Number(t)*1e3}function Ry(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wc(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aD(t){const e=Ry(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&lD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,sD(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dD(s.providerUserInfo):[],a=hD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new YS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function cD(t){const e=ce(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dD(t){return t.map(e=>{var{providerId:n}=e,r=Ty(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e){const n=await KS(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=QS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",GS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cl;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cl,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ty(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new YS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oD(this,e)}reload(){return cD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await po(this,iD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:A,stsTokenManager:M}=n;q(v&&M,e,"internal-error");const D=cl.fromJSON(this.name,M);q(typeof v=="string",e,"internal-error"),br(h,e.name),br(d,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof T=="boolean",e,"internal-error"),br(p,e.name),br(m,e.name),br(y,e.name),br(_,e.name),br(g,e.name),br(f,e.name);const se=new Hi({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:D,createdAt:g,lastLoginAt:f});return A&&Array.isArray(A)&&(se.providerData=A.map(G=>Object.assign({},G))),_&&(se._redirectEventId=_),se}static async _fromIdTokenResponse(e,n,r=!1){const i=new cl;i.updateFromServerResponse(n);const s=new Hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qc(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XS.type="NONE";const ow=XS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hc(this.userKey,i.apiKey,s),this.fullPersistenceKey=hc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(cr(ow),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||cr(ow);const o=hc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Hi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nI(e))return"Blackberry";if(rI(e))return"Webos";if(Ny(e))return"Safari";if((e.includes("chrome/")||ZS(e))&&!e.includes("edge/"))return"Chrome";if(tI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JS(t=Lt()){return/firefox\//i.test(t)}function Ny(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZS(t=Lt()){return/crios\//i.test(t)}function eI(t=Lt()){return/iemobile/i.test(t)}function tI(t=Lt()){return/android/i.test(t)}function nI(t=Lt()){return/blackberry/i.test(t)}function rI(t=Lt()){return/webos/i.test(t)}function id(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pD(t=Lt()){var e;return id(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mD(){return Ab()&&document.documentMode===10}function iI(t=Lt()){return id(t)||tI(t)||rI(t)||nI(t)||/windows phone/i.test(t)||eI(t)}function gD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e=[]){let n;switch(t){case"Browser":n=aw(Lt());break;case"Worker":n=`${aw(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lw(this),this.idTokenSubscription=new lw(this),this.beforeStateQueue=new yD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ce(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ul("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wl(t){return ce(t)}class lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ub(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _D(t,e,n){const r=Wl(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=oI(e),{host:o,port:a}=wD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ED()}function oI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wD(t){const e=oI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uw(o)}}}function uw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ED(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function CD(t,e){return $o(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e){return jl(t,"POST","/v1/accounts:signInWithPassword",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",zl(t,e))}async function TD(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Ay{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return SD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ID(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TD(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e){return jl(t,"POST","/v1/accounts:signInWithIdp",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="http://localhost";class rs extends Ay{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ty(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:kD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RD(t){const e=va(_a(t)).link,n=e?va(_a(e)).deep_link_id:null,r=va(_a(t)).deep_link_id;return(r?va(_a(r)).link:null)||r||n||e||t}class by{constructor(e){var n,r,i,s,o,a;const l=va(_a(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=xD((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RD(e);try{return new by(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,n){return hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=by.parseLink(n);return q(r,"argument-error"),hl._fromEmailAndCode(e,r.code,r.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends aI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Hl{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Hl{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com";Fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Hl{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(t,e){return jl(t,"POST","/v1/accounts:signUp",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hi._fromIdTokenResponse(e,r,i),o=cw(r);return new is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cw(r);return new is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yc(e,n,r,i)}}function lI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,r):s})}async function AD(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await po(t,lI(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Ry(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){const r="signIn",i=await lI(t,r,e),s=await is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PD(t,e){return uI(Wl(t),e)}async function DD(t,e,n){const r=Wl(t),i=await ND(r,{returnSecureToken:!0,email:e,password:n}),s=await is._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function OD(t,e,n){return PD(ce(t),Fo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e){return $o(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ce(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await po(r,LD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $D(t,e,n,r){return ce(t).onIdTokenChanged(e,n,r)}function FD(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}function UD(t,e,n,r){return ce(t).onAuthStateChanged(e,n,r)}function VD(t){return ce(t).signOut()}const Xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(){const t=Lt();return Ny(t)||id(t)}const zD=1e3,jD=10;class hI extends cI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BD()&&gD(),this.fallbackToPolling=iI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hI.type="LOCAL";const WD=hI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends cI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dI.type="SESSION";const fI=dI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await HD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Py("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function GD(t){Qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function KD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YD(){return pI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebaseLocalStorageDb",XD=1,Jc="firebaseLocalStorage",gI="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function od(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function JD(){const t=indexedDB.deleteDatabase(mI);return new ql(t).toPromise()}function Rm(){const t=indexedDB.open(mI,XD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:gI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await JD(),e(await Rm()))})})}async function hw(t,e,n){const r=od(t,!0).put({[gI]:e,value:n});return new ql(r).toPromise()}async function ZD(t,e){const n=od(t,!1).get(e),r=await new ql(n).toPromise();return r===void 0?null:r.value}function dw(t,e){const n=od(t,!0).delete(e);return new ql(n).toPromise()}const eO=800,tO=3;class yI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sd._getInstance(YD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KD(),!this.activeServiceWorker)return;this.sender=new qD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await hw(e,Xc,"1"),await dw(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=od(i,!1).getAll();return new ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yI.type="LOCAL";const nO=yI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iO(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rO().appendChild(r)})}function sO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e){return e?cr(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends Ay{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aO(t){return uI(t.auth,new Dy(t),t.bypassAuthState)}function lO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),bD(n,new Dy(t),t.bypassAuthState)}async function uO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),AD(n,new Dy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aO;case"linkViaPopup":case"linkViaRedirect":return uO;case"reauthViaPopup":case"reauthViaRedirect":return lO;default:Mn(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new Bl(2e3,1e4);class Vs extends vI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Py();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cO.get())};e()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="pendingRedirect",dc=new Map;class dO extends vI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dc.get(this.auth._key());if(!e){try{const r=await fO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dc.set(this.auth._key(),e)}return this.bypassAuthState||dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fO(t,e){const n=gO(e),r=mO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pO(t,e){dc.set(t._key(),e)}function mO(t){return cr(t._redirectPersistence)}function gO(t){return hc(hO,t.config.apiKey,t.name)}async function yO(t,e,n=!1){const r=Wl(t),i=oO(r,e),o=await new dO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=10*60*1e3;class _O{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_I(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vO&&this.cachedEventUids.clear(),this.cachedEventUids.has(fw(e))}saveEventToCache(e){this.cachedEventUids.add(fw(e)),this.lastProcessedEventTime=Date.now()}}function fw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t,e={}){return $o(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SO=/^https?/;async function IO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EO(t);for(const n of e)try{if(TO(n))return}catch{}Mn(t,"unauthorized-domain")}function TO(t){const e=xm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SO.test(n))return!1;if(CO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=new Bl(3e4,6e4);function pw(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xO(t){return new Promise((e,n)=>{var r,i,s;function o(){pw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pw(),n(Kn(t,"network-request-failed"))},timeout:kO.get()})}if(!((i=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qn().gapi)===null||s===void 0)&&s.load)o();else{const a=sO("iframefcb");return Qn()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},iO(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fc=null,e})}let fc=null;function RO(t){return fc=fc||xO(t),fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=new Bl(5e3,15e3),AO="__/auth/iframe",bO="emulator/auth/iframe",PO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OO(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xy(e,bO):`https://${t.config.authDomain}/${AO}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=DO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mo(r).slice(1)}`}async function LO(t){const e=await RO(t),n=Qn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:OO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=Qn().setTimeout(()=>{s(o)},NO.get());function l(){Qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$O=500,FO=600,UO="_blank",VO="http://localhost";class mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BO(t,e,n,r=$O,i=FO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Lt().toLowerCase();n&&(a=ZS(u)?UO:n),JS(u)&&(e=e||VO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(pD(u)&&a!=="_self")return zO(e||"",a),new mw(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new mw(h)}function zO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="__/auth/handler",WO="emulator/auth/handler";function gw(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof aI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Hl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HO(t)}?${Mo(a).slice(1)}`}function HO({config:t}){return t.emulator?xy(t,WO):`https://${t.authDomain}/${jO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="webStorageSupport";class qO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fI,this._completeRedirectFn=yO,this._overrideRedirectResult=pO}async _openPopup(e,n,r,i){var s;Cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gw(e,n,r,xm(),i);return BO(e,o,Py())}async _openRedirect(e,n,r,i){return await this._originValidation(e),GD(gw(e,n,r,xm(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LO(e),r=new _O(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jf,{type:Jf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jf];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iI()||Ny()||id()}}const GO=qO;var yw="@firebase/auth",vw="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YO(t){pi(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sI(t)},c=new vD(a,l,u);return XP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pi(new Er("auth-internal",e=>{const n=Wl(e.getProvider("auth").getImmediate());return(r=>new KO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(yw,vw,QO(t)),wn(yw,vw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=5*60,JO=MS("authIdTokenMaxAge")||XO;let _w=null;const ZO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JO)return;const i=n==null?void 0:n.token;_w!==i&&(_w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eL(t=rd()){const e=Vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YP(t,{popupRedirectResolver:GO,persistence:[nO,WD,fI]}),r=MS("authTokenSyncURL");if(r){const s=ZO(r);FD(n,s,()=>s(n.currentUser)),$D(n,o=>s(o))}const i=LS("auth");return i&&_D(n,`http://${i}`),n}YO("Browser");var tL="firebase",nL="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(tL,nL,"app");const ww="@firebase/database",Ew="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wI="";function rL(t){wI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ll(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iL(e)}}catch{}return new sL},Ui=EI("localStorage"),Nm=EI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new nd("@firebase/database"),oL=function(){let t=1;return function(){return t++}}(),CI=function(t){const e=zb(t),n=new Fb;n.update(e);const r=n.digest();return wy.encodeByteArray(r)},Gl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gl.apply(null,r):typeof r=="object"?e+=Je(r):e+=r,e+=" "}return e};let qi=null,Cw=!0;const aL=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zs.logLevel=fe.VERBOSE,qi=Zs.log.bind(Zs),e&&Nm.set("logging_enabled",!0)):typeof t=="function"?qi=t:(qi=null,Nm.remove("logging_enabled"))},at=function(...t){if(Cw===!0&&(Cw=!1,qi===null&&Nm.get("logging_enabled")===!0&&aL(!0)),qi){const e=Gl.apply(null,t);qi(e)}},Kl=function(t){return function(...e){at(t,...e)}},Am=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gl(...t);Zs.error(e)},Sr=function(...t){const e=`FIREBASE FATAL ERROR: ${Gl(...t)}`;throw Zs.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+Gl(...t);Zs.warn(e)},lL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ad=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mo="[MIN_NAME]",ss="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===mo||e===ss)return-1;if(e===mo||t===ss)return 1;{const n=Sw(t),r=Sw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cL=function(t,e){return t===e?0:t<e?-1:1},aa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},Oy=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Je(e[r]),n+=":",n+=Oy(t[e[r]]);return n+="}",n},SI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const II=function(t){N(!ad(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},hL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const pL=new RegExp("^-?(0*)\\d{1,10}$"),mL=-2147483648,gL=2147483647,Sw=function(t){if(pL.test(t)){const e=Number(t);if(e>=mL&&e<=gL)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},yL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="5",TI="v",kI="s",xI="r",RI="f",NI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AI="ls",bI="p",bm="ac",PI="websocket",DI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function LI(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===PI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===DI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wL(t)&&(n.ns=t.namespace);const i=[];return ct(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Eb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={},ep={};function My(t){const e=t.toString();return Zf[e]||(Zf[e]=new EL),Zf[e]}function CL(t,e){const n=t.toString();return ep[n]||(ep[n]=e()),ep[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Uo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="start",IL="close",TL="pLPCommand",kL="pRTLPCB",MI="id",$I="pw",FI="ser",xL="cb",RL="seg",NL="ts",AL="d",bL="dframe",UI=1870,VI=30,PL=UI-VI,DL=25e3,OL=3e4;class Bs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kl(e),this.stats_=My(n),this.urlFn=l=>(this.appCheckToken&&(l[bm]=this.appCheckToken),LI(n,DI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OL)),uL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $y((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Iw)this.id=a,this.password=l;else if(o===IL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Iw]="t",r[FI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[TI]=Ly,this.transportSessionId&&(r[kI]=this.transportSessionId),this.lastSessionId&&(r[AI]=this.lastSessionId),this.applicationId&&(r[bI]=this.applicationId),this.appCheckToken&&(r[bm]=this.appCheckToken),typeof location<"u"&&location.hostname&&NI.test(location.hostname)&&(r[xI]=RI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bs.forceAllow_=!0}static forceDisallow(){Bs.forceDisallow_=!0}static isAvailable(){return Bs.forceAllow_?!0:!Bs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hL()&&!dL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=DS(n),i=SI(r,PL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[bL]="t",r[MI]=e,r[$I]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $y{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oL(),window[TL+this.uniqueCallbackIdentifier]=e,window[kL+this.uniqueCallbackIdentifier]=n,this.myIFrame=$y.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){at("frame writing exception"),a.stack&&at(a.stack),at(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[MI]=this.myID,e[$I]=this.myPW,e[FI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VI+r.length<=UI;){const o=this.pendingSegs.shift();r=r+"&"+RL+i+"="+o.seg+"&"+NL+i+"="+o.ts+"&"+AL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(DL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=16384,ML=45e3;let Zc=null;typeof MozWebSocket<"u"?Zc=MozWebSocket:typeof WebSocket<"u"&&(Zc=WebSocket);class Nn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kl(this.connId),this.stats_=My(n),this.connURL=Nn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[TI]=Ly,typeof location<"u"&&location.hostname&&NI.test(location.hostname)&&(o[xI]=RI),n&&(o[kI]=n),r&&(o[AI]=r),i&&(o[bm]=i),s&&(o[bI]=s),LI(e,PI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ui.set("previous_websocket_failure",!0);try{let r;FS(),this.mySock=new Zc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zc!==null&&!Nn.forceDisallow_}static previouslyFailed(){return Ui.isInMemoryStorage||Ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ll(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SI(n,LL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ML))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bs,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nn&&Nn.isAvailable();let r=n&&!Nn.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nn];else{const i=this.transports_=[];for(const s of dl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);dl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=6e4,FL=5e3,UL=10*1024,VL=100*1024,tp="t",Tw="d",BL="s",kw="r",zL="e",xw="o",Rw="a",Nw="n",Aw="p",jL="h";class WL{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kl("c:"+this.id+":"),this.transportManager_=new dl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tp in e){const n=e[tp];n===Rw?this.upgradeIfSecondaryHealthy_():n===kw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=aa("t",e),r=aa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Aw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=aa("t",e),r=aa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=aa(tp,e);if(Tw in e){const r=e[Tw];if(n===jL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Nw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BL?this.onConnectionShutdown_(r):n===kw?this.onReset_(r):n===zL?Am("Server Error: "+r):n===xw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Am("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ly!==r&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($L))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Aw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends zI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eh}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=32,Pw=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new we("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mi(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function Fy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function De(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Vt(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return Vt(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qL(t,e){const n=fl(t,0),r=fl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ms(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Uy(t,e){if(mi(t)!==mi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mi(t)>mi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class GL{constructor(e,n){this.errorPrefix_=n,this.parts_=fl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=td(this.parts_[r]);WI(this)}}function KL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=td(e),WI(t)}function QL(t){const e=t.parts_.pop();t.byteLength_-=td(e),t.parts_.length>0&&(t.byteLength_-=1)}function WI(t){if(t.byteLength_>Pw)throw new Error(t.errorPrefix_+"has a key path longer than "+Pw+" bytes ("+t.byteLength_+").");if(t.parts_.length>bw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bw+") or object contains a cycle "+Li(t))}function Li(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends zI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vy}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=1e3,YL=60*5*1e3,Dw=30*1e3,XL=1.3,JL=3e4,ZL="server_kill",Ow=3;class mr extends BI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mr.nextPersistentConnectionId_++,this.log_=Kl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=la,this.maxReconnectDelay_=YL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!FS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&eh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Je(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;mr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const r=ho(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$b(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Am("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=la,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=la,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JL&&(this.reconnectDelay_=la),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new WL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{jt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZL)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jt(h),l())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hc(this.interruptReasons_)&&(this.reconnectDelay_=la,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Oy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ow&&(this.reconnectDelay_=Dw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ow&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wI.replace(/\./g,"-")]=1,Sy()?e["framework.cordova"]=1:$S()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=eh.getInstance().currentlyOnline();return Hc(this.interruptReasons_)&&e}}mr.nextPersistentConnectionId_=0;mr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(mo,e),i=new ie(mo,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;class HI extends ld{static get __EMPTY_NODE(){return Fu}static set __EMPTY_NODE(e){Fu=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw Lo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(ss,Fu)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Fu)}toString(){return".key"}}const to=new HI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??Yt.EMPTY_NODE,this.right=s??Yt.EMPTY_NODE}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class eM{copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,n=Yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Uu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Uu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Uu(this.root_,null,this.comparator_,!0,e)}}Yt.EMPTY_NODE=new eM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t,e){return ms(t.name,e.name)}function By(t,e){return ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm;function nM(t){Pm=t}const qI=function(t){return typeof t=="number"?"number:"+II(t):"string:"+t},GI=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else N(t===Pm||t.isEmpty(),"priority of unexpected type.");N(t===Pm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lw;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GI(this.priorityNode_)}static set __childrenNodeConstructor(e){Lw=e}static get __childrenNodeConstructor(){return Lw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ne(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||mi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=II(this.value_):e+=this.value_,this.lazyHash_=CI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KI,QI;function rM(t){KI=t}function iM(t){QI=t}class sM extends ld{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(ss,new rt("[PRIORITY-POST]",QI))}makePost(e,n){const r=KI(e);return new ie(n,new rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new sM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=Math.log(2);class aM{constructor(e){const n=s=>parseInt(Math.log(s)/oM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const th=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new ot(d,h.node,ot.BLACK,null,null);{const p=parseInt(c/2,10)+l,m=i(l,p),y=i(p+1,u);return h=t[p],d=n?n(h):h,new ot(d,h.node,ot.BLACK,m,y)}},s=function(l){let u=null,c=null,h=t.length;const d=function(m,y){const _=h-m,g=h;h-=m;const f=i(_+1,g),v=t[_],E=n?n(v):v;p(new ot(E,v.node,y,null,f))},p=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));y?d(_,ot.BLACK):(d(_,ot.BLACK),d(_,ot.RED))}return c},o=new aM(t.length),a=s(o);return new Yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;const Is={};class hr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Is&&Oe,"ChildrenNode.ts has not been loaded"),np=np||new hr({".priority":Is},{".priority":Oe}),np}get(e){const n=ho(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Yt?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==to,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=th(r,e.getCompare()):a=Is;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new hr(c,u)}addToIndexes(e,n){const r=qc(this.indexes_,(i,s)=>{const o=ho(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),th(a,o.getCompare())}else return Is;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new hr(r,this.indexSet_)}removeFromIndexes(e,n){const r=qc(this.indexes_,i=>{if(i===Is)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new hr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GI(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ua||(ua=new W(new Yt(By),null,hr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ua}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ua:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ua:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{N(ne(e)!==".priority"||mi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qI(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":CI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ql?-1:0}withIndex(e){if(e===to||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===to||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),i=n.getIterator(Oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===to?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lM extends W{constructor(){super(new Yt(By),W.EMPTY_NODE,hr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ql=new lM;Object.defineProperties(ie,{MIN:{value:new ie(mo,W.EMPTY_NODE)},MAX:{value:new ie(ss,Ql)}});HI.__EMPTY_NODE=W.EMPTY_NODE;rt.__childrenNodeConstructor=W;nM(Ql);iM(Ql);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=!0;function Ue(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,Ue(e))}if(!(t instanceof Array)&&uM){const n=[];let r=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return W.EMPTY_NODE;const s=th(n,tM,o=>o.name,By);if(r){const o=th(n,Oe.getCompare());return new W(s,Ue(e),new hr({".priority":o},{".priority":Oe}))}else return new W(s,Ue(e),hr.Default)}else{let n=W.EMPTY_NODE;return ct(t,(r,i)=>{if(Zn(t,r)&&r.substring(0,1)!=="."){const s=Ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ue(e))}}rM(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM extends ld{constructor(e){super(),this.indexPath_=e,N(!re(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}makePost(e,n){const r=Ue(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ql);return new ie(ss,e)}toString(){return fl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM extends ld{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ms(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Ue(e);return new ie(n,r)}toString(){return".value"}}const dM=new hM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){return{type:"value",snapshotNode:t}}function go(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ml(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(pl(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(go(n,r)):o.trackChildChange(ml(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(pl(i,s))}),n.isLeafNode()||n.forEachChild(Oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ml(i,s,o))}else r.trackChildChange(go(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.indexedFilter_=new zy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gl.getStartPost_(e),this.endPost_=gl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Oe,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new ie(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ml(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(pl(n,h));const y=a.updateImmediateChild(n,W.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(go(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(pl(u.name,u.node)),s.trackChildChange(go(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mo}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new jy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mM(t){return t.loadsAllData()?new zy(t.getIndex()):t.hasLimit()?new pM(t):new gl(t)}function Mw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===dM?n="$value":t.index_===to?n="$key":(N(t.index_ instanceof cM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $w(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends BI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Kl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=nh.getListenId_(e,r),a={};this.listens_[o]=a;const l=Mw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ho(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=nh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Mw(e._queryParams),r=e._path.toString(),i=new zn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ll(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return{value:null,children:new Map}}function Vo(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,rh());const i=t.children.get(r);e=Se(e),Vo(i,e,n)}}function Dm(t,e){if(re(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Oe,(r,i)=>{Vo(t,new we(r),i)}),Dm(t,e)}}else if(t.children.size>0){const n=ne(e);return e=Se(e),t.children.has(n)&&Dm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Om(t,e,n){t.value!==null?n(e,t.value):yM(t,(r,i)=>{const s=new we(e.toString()+"/"+r);Om(i,s,n)})}function yM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=10*1e3,_M=30*1e3,wM=5*60*1e3;class EM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vM(e);const r=Fw+(_M-Fw)*Math.random();Oa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ct(e,(i,s)=>{s>0&&Zn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oa(this.reportStats_.bind(this),Math.floor(Math.random()*2*wM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function Wy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=An.ACK_USER_WRITE,this.source=Wy()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new ih(pe(),n,this.revert)}}else return N(ne(this.path)===e,"operationForChild called for unrelated child."),new ih(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.source=e,this.path=n,this.type=An.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new yl(this.source,pe()):new yl(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=An.OVERWRITE}operationForChild(e){return re(this.path)?new os(this.source,pe(),this.snap.getImmediateChild(e)):new os(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=An.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new os(this.source,pe(),n.value):new yo(this.source,pe(),n)}else return N(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fM(o.childName,o.snapshotNode))}),ca(t,i,"child_removed",e,r,n),ca(t,i,"child_added",e,r,n),ca(t,i,"child_moved",s,r,n),ca(t,i,"child_changed",e,r,n),ca(t,i,"value",e,r,n),i}function ca(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>TM(t,a,l)),o.forEach(a=>{const l=IM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function IM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function TM(t,e,n){if(e.childName==null||n.childName==null)throw Lo("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){return{eventCache:t,serverCache:e}}function La(t,e,n,r){return ud(new gi(e,n,r),t.serverCache)}function XI(t,e,n,r){return ud(t.eventCache,new gi(e,n,r))}function sh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function as(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp;const kM=()=>(rp||(rp=new Yt(cL)),rp);class Ie{constructor(e,n=kM()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return ct(e,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(re(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:De(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Ie(null)}}set(e,n){if(re(e))return new Ie(n,this.children);{const r=ne(e),s=(this.children.get(r)||new Ie(null)).set(Se(e),n),o=this.children.insert(r,s);return new Ie(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ie(null):new Ie(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(re(e))return n;{const r=ne(e),s=(this.children.get(r)||new Ie(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ie(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(De(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),De(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),De(n,i),r):new Ie(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.writeTree_=e}static empty(){return new Dn(new Ie(null))}}function Ma(t,e,n){if(re(e))return new Dn(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Vt(i,e);return s=s.updateChild(o,n),new Dn(t.writeTree_.set(i,s))}else{const i=new Ie(n),s=t.writeTree_.setTree(e,i);return new Dn(s)}}}function Lm(t,e,n){let r=t;return ct(n,(i,s)=>{r=Ma(r,De(e,i),s)}),r}function Uw(t,e){if(re(e))return Dn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Dn(n)}}function Mm(t,e){return gs(t,e)!=null}function gs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Vt(n.path,e)):null}function Vw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function ri(t,e){if(re(e))return t;{const n=gs(t,e);return n!=null?new Dn(new Ie(n)):new Dn(t.writeTree_.subtree(e))}}function $m(t){return t.writeTree_.isEmpty()}function vo(t,e){return JI(pe(),t.writeTree_,e)}function JI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=JI(De(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(De(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){return nT(e,t)}function xM(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ma(t.visibleWrites,e,n)),t.lastWriteId=r}function RM(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Lm(t.visibleWrites,e,n),t.lastWriteId=r}function NM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function AM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bM(a,r.path)?i=!1:yn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return PM(t),!0;if(r.snap)t.visibleWrites=Uw(t.visibleWrites,r.path);else{const a=r.children;ct(a,l=>{t.visibleWrites=Uw(t.visibleWrites,De(r.path,l))})}return!0}else return!1}function bM(t,e){if(t.snap)return yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yn(De(t.path,n),e))return!0;return!1}function PM(t){t.visibleWrites=ZI(t.allWrites,DM,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DM(t){return t.visible}function ZI(t,e,n){let r=Dn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)yn(n,o)?(a=Vt(n,o),r=Ma(r,a,s.snap)):yn(o,n)&&(a=Vt(o,n),r=Ma(r,pe(),s.snap.getChild(a)));else if(s.children){if(yn(n,o))a=Vt(n,o),r=Lm(r,a,s.children);else if(yn(o,n))if(a=Vt(o,n),re(a))r=Lm(r,pe(),s.children);else{const l=ho(s.children,ne(a));if(l){const u=l.getChild(Se(a));r=Ma(r,pe(),u)}}}else throw Lo("WriteRecord should have .snap or .children")}}return r}function eT(t,e,n,r,i){if(!r&&!i){const s=gs(t.visibleWrites,e);if(s!=null)return s;{const o=ri(t.visibleWrites,e);if($m(o))return n;if(n==null&&!Mm(o,pe()))return null;{const a=n||W.EMPTY_NODE;return vo(o,a)}}}else{const s=ri(t.visibleWrites,e);if(!i&&$m(s))return n;if(!i&&n==null&&!Mm(s,pe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(yn(u.path,e)||yn(e,u.path))},a=ZI(t.allWrites,o,e),l=n||W.EMPTY_NODE;return vo(a,l)}}}function OM(t,e,n){let r=W.EMPTY_NODE;const i=gs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ri(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=vo(ri(s,new we(o)),a);r=r.updateImmediateChild(o,l)}),Vw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ri(t.visibleWrites,e);return Vw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LM(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=De(e,n);if(Mm(t.visibleWrites,s))return null;{const o=ri(t.visibleWrites,s);return $m(o)?i.getChild(n):vo(o,i.getChild(n))}}function MM(t,e,n,r){const i=De(e,n),s=gs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ri(t.visibleWrites,i);return vo(o,r.getNode().getImmediateChild(n))}else return null}function $M(t,e){return gs(t.visibleWrites,e)}function FM(t,e,n,r,i,s,o){let a;const l=ri(t.visibleWrites,e),u=gs(l,pe());if(u!=null)a=u;else if(n!=null)a=vo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function UM(){return{visibleWrites:Dn.empty(),allWrites:[],lastWriteId:-1}}function oh(t,e,n,r){return eT(t.writeTree,t.treePath,e,n,r)}function Gy(t,e){return OM(t.writeTree,t.treePath,e)}function Bw(t,e,n,r){return LM(t.writeTree,t.treePath,e,n,r)}function ah(t,e){return $M(t.writeTree,De(t.treePath,e))}function VM(t,e,n,r,i,s){return FM(t.writeTree,t.treePath,e,n,r,i,s)}function Ky(t,e,n){return MM(t.writeTree,t.treePath,e,n)}function tT(t,e){return nT(De(t.treePath,e),t.writeTree)}function nT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ml(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,go(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ml(r,e.snapshotNode,i.oldSnap));else throw Lo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rT=new zM;class Qy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ky(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:as(this.viewCache_),s=VM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t){return{filter:t}}function WM(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HM(t,e,n,r,i){const s=new BM;let o,a;if(n.type===An.OVERWRITE){const u=n;u.source.fromUser?o=Fm(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=lh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===An.MERGE){const u=n;u.source.fromUser?o=GM(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Um(t,e,u.path,u.children,r,i,a,s))}else if(n.type===An.ACK_USER_WRITE){const u=n;u.revert?o=YM(t,e,u.path,r,i,s):o=KM(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===An.LISTEN_COMPLETE)o=QM(t,e,n.path,r,s);else throw Lo("Unknown operation type: "+n.type);const l=s.getChanges();return qM(e,o,l),{viewCache:o,changes:l}}function qM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(YI(sh(e)))}}function iT(t,e,n,r,i,s){const o=e.eventCache;if(ah(r,n)!=null)return e;{let a,l;if(re(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=as(e),c=u instanceof W?u:W.EMPTY_NODE,h=Gy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=oh(r,as(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ne(n);if(u===".priority"){N(mi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=Bw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Se(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Bw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Ky(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return La(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function lh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=ne(n);if(!l.isCompleteForPath(n)&&mi(n)>1)return e;const m=Se(n),_=l.getNode().getImmediateChild(p).updateChild(m,r);p===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),p,_,m,rT,null)}const h=XI(e,u,l.isFullyInitialized()||re(n),c.filtersNodes()),d=new Qy(i,h,s);return iT(t,h,n,i,d,a)}function Fm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Qy(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=La(e,u,!0,t.filter.filtersNodes());else{const h=ne(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=La(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Se(n),p=a.getNode().getImmediateChild(h);let m;if(re(d))m=r;else{const y=c.getCompleteChild(h);y!=null?Fy(d)===".priority"&&y.getChild(jI(d)).isEmpty()?m=y:m=y.updateChild(d,r):m=W.EMPTY_NODE}if(p.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,c,o);l=La(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function zw(t,e){return t.eventCache.isCompleteForChild(e)}function GM(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=De(n,l);zw(e,ne(c))&&(a=Fm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=De(n,l);zw(e,ne(c))||(a=Fm(t,a,c,u,i,s,o))}),a}function jw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Um(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;re(n)?u=r:u=new Ie(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=jw(t,p,d);l=lh(t,l,new we(h),m,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),y=jw(t,m,d);l=lh(t,l,new we(h),y,i,s,o,a)}}),l}function KM(t,e,n,r,i,s,o){if(ah(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return lh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new Ie(null);return l.getNode().forEachChild(to,(c,h)=>{u=u.set(new we(c),h)}),Um(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ie(null);return r.foreach((c,h)=>{const d=De(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Um(t,e,n,u,i,s,a,o)}}function QM(t,e,n,r,i){const s=e.serverCache,o=XI(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return iT(t,o,n,r,rT,i)}function YM(t,e,n,r,i,s){let o;if(ah(r,n)!=null)return e;{const a=new Qy(r,e,i),l=e.eventCache.getNode();let u;if(re(n)||ne(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=oh(r,as(e));else{const h=e.serverCache.getNode();N(h instanceof W,"serverChildren would be complete if leaf node"),c=Gy(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ne(n);let h=Ky(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Se(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,W.EMPTY_NODE,Se(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oh(r,as(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ah(r,pe())!=null,La(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zy(r.getIndex()),s=mM(r);this.processor_=jM(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),c=new gi(l,o.isFullyInitialized(),i.filtersNodes()),h=new gi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ud(h,c),this.eventGenerator_=new CM(this.query_)}get query(){return this.query_}}function JM(t){return t.viewCache_.serverCache.getNode()}function ZM(t){return sh(t.viewCache_)}function e2(t,e){const n=as(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Ww(t){return t.eventRegistrations_.length===0}function t2(t,e){t.eventRegistrations_.push(e)}function Hw(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qw(t,e,n,r){e.type===An.MERGE&&e.source.queryId!==null&&(N(as(t.viewCache_),"We should always have a full cache before handling merges"),N(sh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=HM(t.processor_,i,e,n,r);return WM(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function n2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(s,o)=>{r.push(go(s,o))}),n.isFullyInitialized()&&r.push(YI(n.getNode())),sT(t,r,n.getNode(),e)}function sT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return SM(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;class oT{constructor(){this.views=new Map}}function r2(t){N(!uh,"__referenceConstructor has already been defined"),uh=t}function i2(){return N(uh,"Reference.ts has not been loaded"),uh}function s2(t){return t.views.size===0}function Yy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),qw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qw(o,e,n,r));return s}}function aT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=oh(n,i?r:null),l=!1;a?l=!0:r instanceof W?(a=Gy(n,r),l=!1):(a=W.EMPTY_NODE,l=!1);const u=ud(new gi(a,l,!1),new gi(r,i,!1));return new XM(e,u)}return o}function o2(t,e,n,r,i,s){const o=aT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),t2(o,n),n2(o,n)}function a2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=yi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Hw(u,n,r)),Ww(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Hw(l,n,r)),Ww(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!yi(t)&&s.push(new(i2())(e._repo,e._path)),{removed:s,events:o}}function lT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ii(t,e){let n=null;for(const r of t.views.values())n=n||e2(r,e);return n}function uT(t,e){if(e._queryParams.loadsAllData())return hd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cT(t,e){return uT(t,e)!=null}function yi(t){return hd(t)!=null}function hd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;function l2(t){N(!ch,"__referenceConstructor has already been defined"),ch=t}function u2(){return N(ch,"Reference.ts has not been loaded"),ch}let c2=1;class Gw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=UM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hT(t,e,n,r,i){return xM(t.pendingWriteTree_,e,n,r,i),i?Bo(t,new os(Wy(),e,n)):[]}function h2(t,e,n,r){RM(t.pendingWriteTree_,e,n,r);const i=Ie.fromObject(n);return Bo(t,new yo(Wy(),e,i))}function jr(t,e,n=!1){const r=NM(t.pendingWriteTree_,e);if(AM(t.pendingWriteTree_,e)){let s=new Ie(null);return r.snap!=null?s=s.set(pe(),!0):ct(r.children,o=>{s=s.set(new we(o),!0)}),Bo(t,new ih(r.path,s,n))}else return[]}function Yl(t,e,n){return Bo(t,new os(Hy(),e,n))}function d2(t,e,n){const r=Ie.fromObject(n);return Bo(t,new yo(Hy(),e,r))}function f2(t,e){return Bo(t,new yl(Hy(),e))}function p2(t,e,n){const r=Jy(t,n);if(r){const i=Zy(r),s=i.path,o=i.queryId,a=Vt(s,e),l=new yl(qy(o),a);return ev(t,s,l)}else return[]}function hh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cT(o,e))){const l=a2(o,e,n,r);s2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>yi(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=y2(d);for(let m=0;m<p.length;++m){const y=p[m],_=y.query,g=mT(t,y);t.listenProvider_.startListening($a(_),vl(t,_),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening($a(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(dd(d));t.listenProvider_.stopListening($a(d),p)}))}v2(t,u)}return a}function dT(t,e,n,r){const i=Jy(t,r);if(i!=null){const s=Zy(i),o=s.path,a=s.queryId,l=Vt(o,e),u=new os(qy(a),l,n);return ev(t,o,u)}else return[]}function m2(t,e,n,r){const i=Jy(t,r);if(i){const s=Zy(i),o=s.path,a=s.queryId,l=Vt(o,e),u=Ie.fromObject(n),c=new yo(qy(a),l,u);return ev(t,o,c)}else return[]}function Vm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const m=Vt(d,i);s=s||ii(p,m),o=o||yi(p)});let a=t.syncPointTree_.get(i);a?(o=o||yi(a),s=s||ii(a,pe())):(a=new oT,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const y=ii(m,pe());y&&(s=s.updateImmediateChild(p,y))}));const u=cT(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=dd(e);N(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=_2();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=cd(t.pendingWriteTree_,i);let h=o2(a,e,n,c,s,l);if(!u&&!o&&!r){const d=uT(a,e);h=h.concat(w2(t,e,d))}return h}function Xy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Vt(o,e),u=ii(a,l);if(u)return u});return eT(i,e,s,n,!0)}function g2(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const h=Vt(u,n);r=r||ii(c,h)});let i=t.syncPointTree_.get(n);i?r=r||ii(i,pe()):(i=new oT,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new gi(r,!0,!1):null,a=cd(t.pendingWriteTree_,e._path),l=aT(i,e,a,s?o.getNode():W.EMPTY_NODE,s);return ZM(l)}function Bo(t,e){return fT(e,t.syncPointTree_,null,cd(t.pendingWriteTree_,pe()))}function fT(t,e,n,r){if(re(t.path))return pT(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=ii(i,pe()));let s=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=tT(r,o);s=s.concat(fT(a,l,u,c))}return i&&(s=s.concat(Yy(i,t,r,n))),s}}function pT(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=ii(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tT(r,o),c=t.operationForChild(o);c&&(s=s.concat(pT(c,a,l,u)))}),i&&(s=s.concat(Yy(i,t,r,n))),s}function mT(t,e){const n=e.query,r=vl(t,n);return{hashFn:()=>(JM(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?p2(t,n._path,r):f2(t,n._path);{const s=fL(i,n);return hh(t,n,null,s)}}}}function vl(t,e){const n=dd(e);return t.queryToTagMap.get(n)}function dd(t){return t._path.toString()+"$"+t._queryIdentifier}function Jy(t,e){return t.tagToQueryMap.get(e)}function Zy(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function ev(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=cd(t.pendingWriteTree_,e);return Yy(r,n,i,null)}function y2(t){return t.fold((e,n,r)=>{if(n&&yi(n))return[hd(n)];{let i=[];return n&&(i=lT(n)),ct(r,(s,o)=>{i=i.concat(o)}),i}})}function $a(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(u2())(t._repo,t._path):t}function v2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function _2(){return c2++}function w2(t,e,n){const r=e._path,i=vl(t,e),s=mT(t,n),o=t.listenProvider_.startListening($a(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!yi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!re(u)&&c&&yi(c))return[hd(c).query];{let d=[];return c&&(d=d.concat(lT(c).map(p=>p.query))),ct(h,(p,m)=>{d=d.concat(m)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening($a(c),vl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tv(n)}node(){return this.node_}}class nv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new nv(this.syncTree_,n)}node(){return Xy(this.syncTree_,this.path_)}}const E2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kw=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return S2(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},S2=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},gT=function(t,e,n,r){return rv(e,new nv(n,t),r)},yT=function(t,e,n){return rv(t,new tv(e),n)};function rv(t,e,n){const r=t.getPriority().val(),i=Kw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Kw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new rt(a,Ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new rt(i))),o.forEachChild(Oe,(a,l)=>{const u=rv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sv(t,e){let n=e instanceof we?e:new we(e),r=t,i=ne(n);for(;i!==null;){const s=ho(r.node.children,i)||{children:{},childCount:0};r=new iv(i,r,s),n=Se(n),i=ne(n)}return r}function zo(t){return t.node.value}function vT(t,e){t.node.value=e,Bm(t)}function _T(t){return t.node.childCount>0}function I2(t){return zo(t)===void 0&&!_T(t)}function fd(t,e){ct(t.node.children,(n,r)=>{e(new iv(n,t,r))})}function wT(t,e,n,r){n&&!r&&e(t),fd(t,i=>{wT(i,e,!0,r)}),n&&r&&e(t)}function T2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xl(t){return new we(t.parent===null?t.name:Xl(t.parent)+"/"+t.name)}function Bm(t){t.parent!==null&&k2(t.parent,t.name,t)}function k2(t,e,n){const r=I2(n),i=Zn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Bm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=/[\[\].#$\/\u0000-\u001F\u007F]/,R2=/[\[\].#$\u0000-\u001F\u007F]/,ip=10*1024*1024,ov=function(t){return typeof t=="string"&&t.length!==0&&!x2.test(t)},ET=function(t){return typeof t=="string"&&t.length!==0&&!R2.test(t)},N2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ET(t)},CT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ad(t)||t&&typeof t=="object"&&Zn(t,".sv")},dh=function(t,e,n,r){r&&e===void 0||pd(fo(t,"value"),e,n)},pd=function(t,e,n){const r=n instanceof we?new GL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Li(r));if(typeof e=="function")throw new Error(t+"contains a function "+Li(r)+" with contents = "+e.toString());if(ad(e))throw new Error(t+"contains "+e.toString()+" "+Li(r));if(typeof e=="string"&&e.length>ip/3&&td(e)>ip)throw new Error(t+"contains a string greater than "+ip+" utf8 bytes "+Li(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ov(o)))throw new Error(t+" contains an invalid key ("+o+") "+Li(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KL(r,o),pd(t,a,r),QL(r)}),i&&s)throw new Error(t+' contains ".value" child '+Li(r)+" in addition to actual children.")}},A2=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=fl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ov(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qL);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&yn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ST=function(t,e,n,r){if(r&&e===void 0)return;const i=fo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ct(e,(o,a)=>{const l=new we(o);if(pd(i,a,De(n,l)),Fy(l)===".priority"&&!CT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),A2(i,s)},b2=function(t,e,n){if(!(n&&e===void 0)){if(ad(e))throw new Error(fo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!CT(e))throw new Error(fo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},IT=function(t,e,n,r){if(!(r&&n===void 0)&&!ET(n))throw new Error(fo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),IT(t,e,n,r)},zs=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},D2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ov(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!N2(n))throw new Error(fo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function md(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Uy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function TT(t,e,n){md(t,n),kT(t,r=>Uy(r,e))}function Sn(t,e,n){md(t,n),kT(t,r=>yn(r,e)||yn(e,r))}function kT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(L2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function L2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qi&&at("event: "+n.toString()),Uo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="repo_interrupt",$2=25;class F2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rh(),this.transactionQueueTree_=new iv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U2(t,e,n){if(t.stats_=My(t.repoInfo_),t.forceRestClient_||yL())t.server_=new nh(t.repoInfo_,(r,i,s,o)=>{Qw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new mr(t.repoInfo_,e,(r,i,s,o)=>{Qw(t,r,i,s,o)},r=>{Yw(t,r)},r=>{V2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CL(t.repoInfo_,()=>new EM(t.stats_,t.server_)),t.infoData_=new gM,t.infoSyncTree_=new Gw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Yl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),av(t,"connected",!1),t.serverSyncTree_=new Gw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Sn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xT(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gd(t){return E2({timestamp:xT(t)})}function Qw(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=qc(n,u=>Ue(u));o=m2(t.serverSyncTree_,s,l,i)}else{const l=Ue(n);o=dT(t.serverSyncTree_,s,l,i)}else if(r){const l=qc(n,u=>Ue(u));o=d2(t.serverSyncTree_,s,l)}else{const l=Ue(n);o=Yl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_o(t,s)),Sn(t.eventQueue_,a,o)}function Yw(t,e){av(t,"connected",e),e===!1&&W2(t)}function V2(t,e){ct(e,(n,r)=>{av(t,n,r)})}function av(t,e,n){const r=new we("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(r,i);const s=Yl(t.infoSyncTree_,r,i);Sn(t.eventQueue_,r,s)}function lv(t){return t.nextWriteId_++}function B2(t,e,n){const r=g2(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ue(i).withIndex(e._queryParams.getIndex());Vm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Yl(t.serverSyncTree_,e._path,s);else{const a=vl(t.serverSyncTree_,e);o=dT(t.serverSyncTree_,e._path,s,a)}return Sn(t.eventQueue_,e._path,o),hh(t.serverSyncTree_,e,n,null,!0),s},i=>(Jl(t,"get for query "+Je(e)+" failed: "+i),Promise.reject(new Error(i))))}function z2(t,e,n,r,i){Jl(t,"set",{path:e.toString(),value:n,priority:r});const s=gd(t),o=Ue(n,r),a=Xy(t.serverSyncTree_,e),l=yT(o,a,s),u=lv(t),c=hT(t.serverSyncTree_,e,l,u,!0);md(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const m=d==="ok";m||jt("set at "+e+" failed: "+d);const y=jr(t.serverSyncTree_,u,!m);Sn(t.eventQueue_,e,y),vi(t,i,d,p)});const h=cv(t,e);_o(t,h),Sn(t.eventQueue_,h,[])}function j2(t,e,n,r){Jl(t,"update",{path:e.toString(),value:n});let i=!0;const s=gd(t),o={};if(ct(n,(a,l)=>{i=!1,o[a]=gT(De(e,a),Ue(l),t.serverSyncTree_,s)}),i)at("update() called with empty data.  Don't do anything."),vi(t,r,"ok",void 0);else{const a=lv(t),l=h2(t.serverSyncTree_,e,o,a);md(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const h=u==="ok";h||jt("update at "+e+" failed: "+u);const d=jr(t.serverSyncTree_,a,!h),p=d.length>0?_o(t,e):e;Sn(t.eventQueue_,p,d),vi(t,r,u,c)}),ct(n,u=>{const c=cv(t,De(e,u));_o(t,c)}),Sn(t.eventQueue_,e,[])}}function W2(t){Jl(t,"onDisconnectEvents");const e=gd(t),n=rh();Om(t.onDisconnect_,pe(),(i,s)=>{const o=gT(i,s,t.serverSyncTree_,e);Vo(n,i,o)});let r=[];Om(n,pe(),(i,s)=>{r=r.concat(Yl(t.serverSyncTree_,i,s));const o=cv(t,i);_o(t,o)}),t.onDisconnect_=rh(),Sn(t.eventQueue_,pe(),r)}function H2(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Dm(t.onDisconnect_,e),vi(t,n,r,i)})}function Xw(t,e,n,r){const i=Ue(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Vo(t.onDisconnect_,e,i),vi(t,r,s,o)})}function q2(t,e,n,r,i){const s=Ue(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Vo(t.onDisconnect_,e,s),vi(t,i,o,a)})}function G2(t,e,n,r){if(Hc(n)){at("onDisconnect().update() called with empty data.  Don't do anything."),vi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&ct(n,(o,a)=>{const l=Ue(a);Vo(t.onDisconnect_,De(e,o),l)}),vi(t,r,i,s)})}function K2(t,e,n){let r;ne(e._path)===".info"?r=Vm(t.infoSyncTree_,e,n):r=Vm(t.serverSyncTree_,e,n),TT(t.eventQueue_,e._path,r)}function zm(t,e,n){let r;ne(e._path)===".info"?r=hh(t.infoSyncTree_,e,n):r=hh(t.serverSyncTree_,e,n),TT(t.eventQueue_,e._path,r)}function Q2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(M2)}function Jl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),at(n,...e)}function vi(t,e,n,r){e&&Uo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function RT(t,e,n){return Xy(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function uv(t,e=t.transactionQueueTree_){if(e||yd(t,e),zo(e)){const n=AT(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Y2(t,Xl(e),n)}else _T(e)&&fd(e,n=>{uv(t,n)})}function Y2(t,e,n){const r=n.map(u=>u.currentWriteId),i=RT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Vt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Jl(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(jr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();yd(t,sv(t.transactionQueueTree_,e)),uv(t,t.transactionQueueTree_),Sn(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Uo(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{jt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}_o(t,e)}},o)}function _o(t,e){const n=NT(t,e),r=Xl(n),i=AT(t,n);return X2(t,i,r),r}function X2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Vt(n,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(jr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$2)c=!0,h="maxretry",i=i.concat(jr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=RT(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){pd("transaction failed: Data returned ",p,l.path);let m=Ue(p);typeof p=="object"&&p!=null&&Zn(p,".priority")||(m=m.updatePriority(d.getPriority()));const _=l.currentWriteId,g=gd(t),f=yT(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=f,l.currentWriteId=lv(t),o.splice(o.indexOf(_),1),i=i.concat(hT(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(jr(t.serverSyncTree_,_,!0))}else c=!0,h="nodata",i=i.concat(jr(t.serverSyncTree_,l.currentWriteId,!0))}Sn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}yd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Uo(r[a]);uv(t,t.transactionQueueTree_)}function NT(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&zo(r)===void 0;)r=sv(r,n),e=Se(e),n=ne(e);return r}function AT(t,e){const n=[];return bT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function bT(t,e,n){const r=zo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fd(e,i=>{bT(t,i,n)})}function yd(t,e){const n=zo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,vT(e,n.length>0?n:void 0)}fd(e,r=>{yd(t,r)})}function cv(t,e){const n=Xl(NT(t,e)),r=sv(t.transactionQueueTree_,e);return T2(r,i=>{sp(t,i)}),sp(t,r),wT(r,i=>{sp(t,i)}),n}function sp(t,e){const n=zo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?vT(e,void 0):n.length=s+1,Sn(t.eventQueue_,Xl(e),i);for(let o=0;o<r.length;o++)Uo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Z2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jw=function(t,e){const n=e$(t),r=n.namespace;n.domain==="firebase.com"&&Sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},e$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=J2(t.substring(c,h)));const d=Z2(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t$=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Zw.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zw.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class DT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new zn;return H2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){zs("OnDisconnect.remove",this._path);const e=new zn;return Xw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){zs("OnDisconnect.set",this._path),dh("OnDisconnect.set",e,this._path,!1);const n=new zn;return Xw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){zs("OnDisconnect.setWithPriority",this._path),dh("OnDisconnect.setWithPriority",e,this._path,!1),b2("OnDisconnect.setWithPriority",n,!1);const r=new zn;return q2(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){zs("OnDisconnect.update",this._path),ST("OnDisconnect.update",e,this._path,!1);const n=new zn;return G2(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:Fy(this._path)}get ref(){return new er(this._repo,this._path)}get _queryIdentifier(){const e=$w(this._queryParams),n=Oy(e);return n==="{}"?"default":n}get _queryObject(){return $w(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof dv))return!1;const n=this._repo===e._repo,r=Uy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+HL(this._path)}}class er extends dv{constructor(e,n){super(e,n,new jy,!1)}get parent(){const e=jI(this._path);return e===null?null:new er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),r=ls(this.ref,e);return new wo(this._node.getChild(n),r,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new wo(i,ls(this.ref,r),Oe)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function si(t,e){return t=ce(t),t._checkNotDeleted("ref"),e!==void 0?ls(t._root,e):t._root}function ls(t,e){return t=ce(t),ne(t._path)===null?P2("child","path",e,!1):IT("child","path",e,!1),new er(t._repo,De(t._path,e))}function e1(t){return t=ce(t),new n$(t._repo,t._path)}function r$(t,e){t=ce(t),zs("push",t._path),dh("push",e,t._path,!0);const n=xT(t._repo),r=t$(n),i=ls(t,r),s=ls(t,r);let o;return e!=null?o=fv(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fv(t,e){t=ce(t),zs("set",t._path),dh("set",e,t._path,!1);const n=new zn;return z2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function i$(t,e){ST("update",e,t._path,!1);const n=new zn;return j2(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function s$(t){t=ce(t);const e=new hv(()=>{}),n=new Zl(e);return B2(t._repo,t,n).then(r=>new wo(r,new er(t._repo,t._path),t._queryParams.getIndex()))}class Zl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new PT("value",this,new wo(e.snapshotNode,new er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DT(this,e,n):null}matches(e){return e instanceof Zl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DT(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=ls(new er(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new PT(e.type,this,new wo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function OT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{zm(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new hv(n,s||void 0),a=e==="value"?new Zl(o):new vd(e,o);return K2(t._repo,t,a),()=>zm(t._repo,t,a)}function LT(t,e,n,r){return OT(t,"value",e,n,r)}function o$(t,e,n,r){return OT(t,"child_changed",e,n,r)}function MT(t,e,n){let r=null;const i=n?new hv(n):null;e==="value"?r=new Zl(i):e&&(r=new vd(e,i)),zm(t._repo,t,r)}function a$(t,...e){let n=ce(t);for(const r of e)n=r._apply(n);return n}r2(er);l2(er);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$="FIREBASE_DATABASE_EMULATOR_HOST",jm={};let u$=!1;function c$(t,e,n,r){t.repoInfo_=new OI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function h$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[l$]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Jw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new eo(eo.OWNER):new _L(t.name,t.options,e);D2("Invalid Firebase Database URL",o),re(o.path)||Sr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=f$(a,t,c,new vL(t.name,n));return new p$(h,t)}function d$(t,e){const n=jm[e];(!n||n[t.key]!==t)&&Sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Q2(t),delete n[t.key]}function f$(t,e,n,r){let i=jm[e.name];i||(i={},jm[e.name]=i);let s=i[t.toURLString()];return s&&Sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new F2(t,u$,n,r),i[t.toURLString()]=s,s}class p${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new er(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sr("Cannot call "+e+" on a deleted database.")}}function m$(t=rd(),e){const n=Vl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ey("database");r&&g$(n,...r)}return n}function g$(t,e,n,r={}){t=ce(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Sr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new eo(eo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Cy(r.mockUserToken,t.app.options.projectId);s=new eo(o)}c$(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y$(t){rL(ps),pi(new Er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return h$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wn(ww,Ew,t),wn(ww,Ew,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v$={".sv":"timestamp"};function _$(){return v$}mr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};y$();var w$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,pv=pv||{},X=w$||self;function fh(){}function _d(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function E$(t){return Object.prototype.hasOwnProperty.call(t,op)&&t[op]||(t[op]=++C$)}var op="closure_uid_"+(1e9*Math.random()>>>0),C$=0;function S$(t,e,n){return t.call.apply(t.bind,arguments)}function I$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=S$:bt=I$,bt.apply(null,arguments)}function Vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xi(){this.s=this.s,this.o=this.o}var T$=0;xi.prototype.s=!1;xi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),T$!=0)&&E$(this)};xi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function t1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_d(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var k$=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",fh,e),X.removeEventListener("test",fh,e)}catch{}return t}();function ph(t){return/^[\s\xa0]*$/.test(t)}var n1=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ap(t,e){return t<e?-1:t>e?1:0}function wd(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function jn(t){return wd().indexOf(t)!=-1}function gv(t){return gv[" "](t),t}gv[" "]=fh;function x$(t){var e=A$;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var R$=jn("Opera"),Eo=jn("Trident")||jn("MSIE"),FT=jn("Edge"),Wm=FT||Eo,UT=jn("Gecko")&&!(wd().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge"))&&!(jn("Trident")||jn("MSIE"))&&!jn("Edge"),N$=wd().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge");function VT(){var t=X.document;return t?t.documentMode:void 0}var mh;e:{var lp="",up=function(){var t=wd();if(UT)return/rv:([^\);]+)(\)|;)/.exec(t);if(FT)return/Edge\/([\d\.]+)/.exec(t);if(Eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(N$)return/WebKit\/(\S+)/.exec(t);if(R$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(up&&(lp=up?up[1]:""),Eo){var cp=VT();if(cp!=null&&cp>parseFloat(lp)){mh=String(cp);break e}}mh=lp}var A$={};function b$(){return x$(function(){let t=0;const e=n1(String(mh)).split("."),n=n1("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ap(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ap(i[2].length==0,s[2].length==0)||ap(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Hm;if(X.document&&Eo){var r1=VT();Hm=r1||parseInt(mh,10)||void 0}else Hm=void 0;var P$=Hm;function _l(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(UT){e:{try{gv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:D$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_l.X.h.call(this)}}Et(_l,Pt);var D$={2:"touch",3:"pen",4:"mouse"};_l.prototype.h=function(){_l.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tu="closure_listenable_"+(1e6*Math.random()|0),O$=0;function L$(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++O$,this.ba=this.ea=!1}function Ed(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BT(t){const e={};for(const n in t)e[n]=t[n];return e}const i1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<i1.length;s++)n=i1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cd(t){this.src=t,this.g={},this.h=0}Cd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Gm(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new L$(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function qm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$T(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ed(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var vv="closure_lm_"+(1e6*Math.random()|0),hp={};function jT(t,e,n,r,i){if(r&&r.once)return HT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jT(t,e[s],n,r,i);return null}return n=Ev(n),t&&t[tu]?t.N(e,n,eu(r)?!!r.capture:!!r,i):WT(t,e,n,!1,r,i)}function WT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=eu(i)?!!i.capture:!!i,a=wv(t);if(a||(t[vv]=a=new Cd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=M$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(GT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function M$(){function t(n){return e.call(t.src,t.listener,n)}const e=$$;return t}function HT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)HT(t,e[s],n,r,i);return null}return n=Ev(n),t&&t[tu]?t.O(e,n,eu(r)?!!r.capture:!!r,i):WT(t,e,n,!0,r,i)}function qT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qT(t,e[s],n,r,i);else r=eu(r)?!!r.capture:!!r,n=Ev(n),t&&t[tu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Gm(s,n,r,i),-1<n&&(Ed(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gm(e,n,r,i)),(n=-1<t?e[t]:null)&&_v(n))}function _v(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[tu])qm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(GT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wv(e))?(qm(n,t),n.h==0&&(n.src=null,e[vv]=null)):Ed(t)}}}function GT(t){return t in hp?hp[t]:hp[t]="on"+t}function $$(t,e){if(t.ba)t=!0;else{e=new _l(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&_v(t),t=n.call(r,e)}return t}function wv(t){return t=t[vv],t instanceof Cd?t:null}var dp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ev(t){return typeof t=="function"?t:(t[dp]||(t[dp]=function(e){return t.handleEvent(e)}),t[dp])}function ht(){xi.call(this),this.i=new Cd(this),this.P=this,this.I=null}Et(ht,xi);ht.prototype[tu]=!0;ht.prototype.removeEventListener=function(t,e,n,r){qT(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),zT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bu(o,r,!0,e)&&i}if(o=e.g=t,i=Bu(o,r,!0,e)&&i,i=Bu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bu(o,r,!1,e)&&i}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ed(n[r]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&qm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cv=X.JSON.stringify;function F$(){var t=YT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class U${constructor(){this.h=this.g=null}add(e,n){const r=KT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var KT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new V$,t=>t.reset());class V${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function B$(t){X.setTimeout(()=>{throw t},0)}function QT(t,e){Km||z$(),Qm||(Km(),Qm=!0),YT.add(t,e)}var Km;function z$(){var t=X.Promise.resolve(void 0);Km=function(){t.then(j$)}}var Qm=!1,YT=new U$;function j$(){for(var t;t=F$();){try{t.h.call(t.g)}catch(n){B$(n)}var e=KT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qm=!1}function Sd(t,e){ht.call(this),this.h=t||1,this.g=e||X,this.j=bt(this.lb,this),this.l=Date.now()}Et(Sd,ht);V=Sd.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(Sv(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sv(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Sd.X.M.call(this),Sv(this),delete this.g};function Iv(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function XT(t){t.g=Iv(()=>{t.g=null,t.i&&(t.i=!1,XT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class W$ extends xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:XT(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wl(t){xi.call(this),this.h=t,this.g={}}Et(wl,xi);var s1=[];function JT(t,e,n,r){Array.isArray(n)||(n&&(s1[0]=n.toString()),n=s1);for(var i=0;i<n.length;i++){var s=jT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ZT(t){yv(t.g,function(e,n){this.g.hasOwnProperty(n)&&_v(e)},t),t.g={}}wl.prototype.M=function(){wl.X.M.call(this),ZT(this)};wl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Id(){this.g=!0}Id.prototype.Aa=function(){this.g=!1};function H$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function q$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function js(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+K$(t,n)+(r?" "+r:"")})}function G$(t,e){t.info(function(){return"TIMEOUT: "+e})}Id.prototype.info=function(){};function K$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cv(n)}catch{return e}}var ys={},o1=null;function Td(){return o1=o1||new ht}ys.Pa="serverreachability";function ek(t){Pt.call(this,ys.Pa,t)}Et(ek,Pt);function El(t){const e=Td();_t(e,new ek(e))}ys.STAT_EVENT="statevent";function tk(t,e){Pt.call(this,ys.STAT_EVENT,t),this.stat=e}Et(tk,Pt);function Bt(t){const e=Td();_t(e,new tk(e,t))}ys.Qa="timingevent";function nk(t,e){Pt.call(this,ys.Qa,t),this.size=e}Et(nk,Pt);function nu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var kd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Tv(){}Tv.prototype.h=null;function a1(t){return t.h||(t.h=t.i())}function ik(){}var ru={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function kv(){Pt.call(this,"d")}Et(kv,Pt);function xv(){Pt.call(this,"c")}Et(xv,Pt);var Ym;function xd(){}Et(xd,Tv);xd.prototype.g=function(){return new XMLHttpRequest};xd.prototype.i=function(){return{}};Ym=new xd;function iu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new wl(this),this.O=Q$,t=Wm?125:void 0,this.T=new Sd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sk}function sk(){this.i=null,this.g="",this.h=!1}var Q$=45e3,Xm={},gh={};V=iu.prototype;V.setTimeout=function(t){this.O=t};function Jm(t,e,n){t.K=1,t.v=Nd(Ir(e)),t.s=n,t.P=!0,ok(t,null)}function ok(t,e){t.F=Date.now(),su(t),t.A=Ir(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),pk(n.i,"t",r),t.C=0,n=t.l.H,t.h=new sk,t.g=Lk(t.l,n?e:null,!t.s),0<t.N&&(t.L=new W$(bt(t.La,t,t.g),t.N)),JT(t.S,t.g,"readystatechange",t.ib),e=t.H?BT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),El(),H$(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&dr(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const c=dr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Wm||this.g&&(this.h.h||this.g.fa()||h1(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?El(3):El(2)),Rd(this);var n=this.g.aa();this.Y=n;t:if(ak(this)){var r=h1(this.g);t="";var i=r.length,s=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vi(this),Fa(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,q$(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ph(a)){var u=a;break t}}u=null}if(n=u)js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zm(this,n);else{this.i=!1,this.o=3,Bt(12),Vi(this),Fa(this);break e}}this.P?(lk(this,c,o),Wm&&this.i&&c==3&&(JT(this.S,this.T,"tick",this.hb),this.T.start())):(js(this.j,this.m,o,null),Zm(this,o)),c==4&&Vi(this),this.i&&!this.I&&(c==4?bk(this.l,this):(this.i=!1,su(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),Vi(this),Fa(this)}}}catch{}finally{}};function ak(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lk(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Y$(t,n),i==gh){e==4&&(t.o=4,Bt(14),r=!1),js(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xm){t.o=4,Bt(15),js(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else js(t.j,t.m,i,null),Zm(t,i);ak(t)&&i!=gh&&i!=Xm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ov(e),e.K=!0,Bt(11))):(js(t.j,t.m,n,"[Invalid Chunked Response]"),Vi(t),Fa(t))}V.hb=function(){if(this.g){var t=dr(this.g),e=this.g.fa();this.C<e.length&&(Rd(this),lk(this,t,e),this.i&&t!=4&&su(this))}};function Y$(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gh:(n=Number(e.substring(n,r)),isNaN(n)?Xm:(r+=1,r+n>e.length?gh:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,Vi(this)};function su(t){t.V=Date.now()+t.O,uk(t,t.O)}function uk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=nu(bt(t.gb,t),e)}function Rd(t){t.B&&(X.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(G$(this.j,this.A),this.K!=2&&(El(),Bt(17)),Vi(this),this.o=2,Fa(this)):uk(this,this.V-t)};function Fa(t){t.l.G==0||t.I||bk(t.l,t)}function Vi(t){Rd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Sv(t.T),ZT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||eg(n.h,t))){if(!t.J&&eg(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_h(n),Pd(n);else break e;Dv(n),Bt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=nu(bt(n.cb,n),6e3));if(1>=yk(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bi(n,11)}else if((t.J||n.g==t)&&_h(n),!ph(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rv(s,s.h),s.h=null))}if(r.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,be(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Ok(r,r.H?r.ka:null,r.V),o.J){vk(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Rd(a),su(a)),r.g=o}else Nk(r);0<n.i.length&&Dd(n)}else u[0]!="stop"&&u[0]!="close"||Bi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bi(n,7):Pv(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}El(4)}catch{}}function X$(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function J$(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_d(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ck(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_d(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=J$(t),r=X$(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var hk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z$(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=e!==void 0?e:t.h,yh(this,t.j),this.s=t.s,this.g=t.g,vh(this,t.m),this.l=t.l,e=t.i;var n=new Cl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),l1(this,n),this.o=t.o}else t&&(n=String(t).match(hk))?(this.h=!!e,yh(this,n[1]||"",!0),this.s=wa(n[2]||""),this.g=wa(n[3]||"",!0),vh(this,n[4]),this.l=wa(n[5]||"",!0),l1(this,n[6]||"",!0),this.o=wa(n[7]||"")):(this.h=!!e,this.i=new Cl(null,this.h))}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ea(e,u1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ea(e,u1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ea(n,n.charAt(0)=="/"?nF:tF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ea(n,iF)),t.join("")};function Ir(t){return new Gi(t)}function yh(t,e,n){t.j=n?wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function l1(t,e,n){e instanceof Cl?(t.i=e,sF(t.i,t.h)):(n||(e=Ea(e,rF)),t.i=new Cl(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Nd(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var u1=/[#\/\?@]/g,tF=/[#\?:]/g,nF=/[#\?]/g,rF=/[#\?@]/g,iF=/#/g;function Cl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&Z$(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Cl.prototype;V.add=function(t,e){Ri(this),this.i=null,t=jo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dk(t,e){Ri(t),e=jo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fk(t,e){return Ri(t),e=jo(t,e),t.g.has(e)}V.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.oa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.W=function(t){Ri(this);let e=[];if(typeof t=="string")fk(this,t)&&(e=e.concat(this.g.get(jo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Ri(this),this.i=null,t=jo(this,t),fk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pk(t,e,n){dk(t,e),0<n.length&&(t.i=null,t.g.set(jo(t,e),mv(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function jo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sF(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dk(this,r),pk(this,i,n))},t)),t.j=e}var oF=class{constructor(e,n){this.h=e,this.g=n}};function mk(t){this.l=t||aF,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aF=10;function gk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yk(t){return t.h?1:t.g?t.g.size:0}function eg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rv(t,e){t.g?t.g.add(e):t.h=e}function vk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mk.prototype.cancel=function(){if(this.i=_k(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _k(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mv(t.i)}function Nv(){}Nv.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Nv.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function lF(){this.g=new Nv}function uF(t,e,n){const r=n||"";try{ck(t,function(i,s){let o=i;eu(i)&&(o=Cv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cF(t,e){const n=new Id;if(X.Image){const r=new Image;r.onload=Vu(zu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(zu,n,r,"TestLoadImage: error",!1,e),r.onabort=Vu(zu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(zu,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ou(t){this.l=t.ac||null,this.j=t.jb||!1}Et(ou,Tv);ou.prototype.g=function(){return new Ad(this.l,this.j)};ou.prototype.i=function(t){return function(){return t}}({});function Ad(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Av,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Ad,ht);var Av=0;V=Ad.prototype;V.open=function(t,e){if(this.readyState!=Av)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sl(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,au(this)),this.readyState=Av};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sl(this)),this.g&&(this.readyState=3,Sl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wk(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wk(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?au(this):Sl(this),this.readyState==3&&wk(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,au(this))};V.Ua=function(t){this.g&&(this.response=t,au(this))};V.ga=function(){this.g&&au(this)};function au(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sl(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ad.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hF=X.JSON.parse;function Ve(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ek,this.K=this.L=!1}Et(Ve,ht);var Ek="",dF=/^https?$/i,fF=["POST","PUT"];V=Ve.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ym.g(),this.C=this.u?a1(this.u):a1(Ym),this.g.onreadystatechange=bt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){c1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=$T(fF,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ik(this),0<this.B&&((this.K=pF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.qa,this)):this.A=Iv(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){c1(this,s)}};function pF(t){return Eo&&b$()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof pv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function c1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ck(t),bd(t)}function Ck(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),bd(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bd(this,!0)),Ve.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Sk(this):this.fb())};V.fb=function(){Sk(this)};function Sk(t){if(t.h&&typeof pv<"u"&&(!t.C[1]||dr(t)!=4||t.aa()!=2)){if(t.v&&dr(t)==4)Iv(t.Ha,0,t);else if(_t(t,"readystatechange"),dr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(hk)[1]||null;if(!i&&X.self&&X.self.location){var s=X.self.location.protocol;i=s.substr(0,s.length-1)}r=!dF.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<dr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ck(t)}}finally{bd(t)}}}}function bd(t,e){if(t.g){Ik(t);const n=t.g,r=t.C[0]?fh:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ik(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function dr(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hF(e)}};function h1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ek:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tk(t){let e="";return yv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Tk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function ha(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kk(t){this.Ca=0,this.i=[],this.j=new Id,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ha("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ha("baseRetryDelayMs",5e3,t),this.bb=ha("retryDelaySeedMs",1e4,t),this.$a=ha("forwardChannelMaxRetries",2,t),this.ta=ha("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mk(t&&t.concurrentRequestLimit),this.Fa=new lF,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=kk.prototype;V.ma=8;V.G=1;function Pv(t){if(xk(t),t.G==3){var e=t.U++,n=Ir(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),lu(t,n),e=new iu(t,t.j,e,void 0),e.K=2,e.v=Nd(Ir(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lk(e.l,null),e.g.da(e.v)),e.F=Date.now(),su(e)}Dk(t)}function Pd(t){t.g&&(Ov(t),t.g.cancel(),t.g=null)}function xk(t){Pd(t),t.u&&(X.clearTimeout(t.u),t.u=null),_h(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Dd(t){gk(t.h)||t.m||(t.m=!0,QT(t.Ja,t),t.C=0)}function mF(t,e){return yk(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=nu(bt(t.Ja,t,e),Pk(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new iu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=BT(s),zT(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rk(this,i,e),n=Ir(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),lu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Tk(s)))+"&"+e:this.o&&bv(n,this.o,s)),Rv(this.h,i),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),i.Z=!0,Jm(i,n,null)):Jm(i,n,e),this.G=2}}else this.G==3&&(t?d1(this,t):this.i.length==0||gk(this.h)||d1(this))};function d1(t,e){var n;e?n=e.m:n=t.U++;const r=Ir(t.F);be(r,"SID",t.I),be(r,"RID",n),be(r,"AID",t.T),lu(t,r),t.o&&t.s&&bv(r,t.o,t.s),n=new iu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rk(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rv(t.h,n),Jm(n,r,e)}function lu(t,e){t.ia&&yv(t.ia,function(n,r){be(e,r,n)}),t.l&&ck({},function(n,r){be(e,r,n)})}function Rk(t,e,n){n=Math.min(t.i.length,n);var r=t.l?bt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{uF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Nk(t){t.g||t.u||(t.Z=1,QT(t.Ia,t),t.A=0)}function Dv(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=nu(bt(t.Ia,t),Pk(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,Ak(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=nu(bt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Bt(10),Pd(this),Ak(this))};function Ov(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Ak(t){t.g=new iu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ir(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),lu(t,e),t.o&&t.s&&bv(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nd(Ir(e)),n.s=null,n.P=!0,ok(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Pd(this),Dv(this),Bt(19))};function _h(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function bk(t,e){var n=null;if(t.g==e){_h(t),Ov(t),t.g=null;var r=2}else if(eg(t.h,e))n=e.D,vk(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Td(),_t(r,new nk(r,n)),Dd(t)}else Nk(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&mF(t,e)||r==2&&Dv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Bi(t,5);break;case 4:Bi(t,10);break;case 3:Bi(t,6);break;default:Bi(t,2)}}}function Pk(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=bt(t.kb,t);n||(n=new Gi("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||yh(n,"https"),Nd(n)),cF(n.toString(),r)}else Bt(2);t.G=0,t.l&&t.l.va(e),Dk(t),xk(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function Dk(t){if(t.G=0,t.la=[],t.l){const e=_k(t.h);(e.length!=0||t.i.length!=0)&&(t1(t.la,e),t1(t.la,t.i),t.h.i.length=0,mv(t.i),t.i.length=0),t.l.ua()}}function Ok(t,e,n){var r=n instanceof Gi?Ir(n):new Gi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),vh(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gi(null,void 0);r&&yh(s,r),e&&(s.g=e),i&&vh(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&be(r,n,e),be(r,"VER",t.ma),lu(t,r),r}function Lk(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new ou({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function Mk(){}V=Mk.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function wh(){if(Eo&&!(10<=Number(P$)))throw Error("Environmental error: no available transport.")}wh.prototype.g=function(t,e){return new un(t,e)};function un(t,e){ht.call(this),this.g=new kk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ph(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ph(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wo(this)}Et(un,ht);un.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Bt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ok(t,null,t.V),Dd(t)};un.prototype.close=function(){Pv(this.g)};un.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cv(t),t=n);e.i.push(new oF(e.ab++,t)),e.G==3&&Dd(e)};un.prototype.M=function(){this.g.l=null,delete this.j,Pv(this.g),delete this.g,un.X.M.call(this)};function $k(t){kv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et($k,kv);function Fk(){xv.call(this),this.status=1}Et(Fk,xv);function Wo(t){this.g=t}Et(Wo,Mk);Wo.prototype.xa=function(){_t(this.g,"a")};Wo.prototype.wa=function(t){_t(this.g,new $k(t))};Wo.prototype.va=function(t){_t(this.g,new Fk)};Wo.prototype.ua=function(){_t(this.g,"b")};wh.prototype.createWebChannel=wh.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;kd.NO_ERROR=0;kd.TIMEOUT=8;kd.HTTP_ERROR=6;rk.COMPLETE="complete";ik.EventType=ru;ru.OPEN="a";ru.CLOSE="b";ru.ERROR="c";ru.MESSAGE="d";ht.prototype.listen=ht.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var gF=function(){return new wh},yF=function(){return Td()},fp=kd,vF=rk,_F=ys,f1={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wF=ou,ju=ik,EF=Ve;const p1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new nd("@firebase/firestore");function m1(){return us.logLevel}function B(t,...e){if(us.logLevel<=fe.DEBUG){const n=e.map(Lv);us.debug(`Firestore (${Ho}): ${t}`,...n)}}function Tr(t,...e){if(us.logLevel<=fe.ERROR){const n=e.map(Lv);us.error(`Firestore (${Ho}): ${t}`,...n)}}function Eh(t,...e){if(us.logLevel<=fe.WARN){const n=e.map(Lv);us.warn(`Firestore (${Ho}): ${t}`,...n)}}function Lv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function Ne(t,e){t||K()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let L=class extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uk=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},CF=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}},SF=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},IF=class{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new Uk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new xt(e)}},TF=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},kF=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new TF(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},xF=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},RF=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.T=n.token,new xF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vk=class{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}};function ye(t,e){return t<e?-1:t>e?1:0}function Co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new et(0,0))}static max(){return new Z(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Il{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const AF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Il{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return AF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Te.fromString(e))}static fromName(e){return new z(Te.fromString(e).popFirst(5))}static empty(){return new z(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Te(e.slice()))}}function bF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new _i(i,z.empty(),e)}function PF(t){return new _i(t.readTime,t.key,-1)}class _i{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _i(Z.min(),z.empty(),-1)}static max(){return new _i(Z.max(),z.empty(),-1)}}function DF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==OF)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Mv.ct=-1;function Od(t){return t==null}function Ch(t){return t===0&&1/t==-1/0}function MF(t){return typeof t=="number"&&Number.isInteger(t)&&!Ch(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt=class tg{constructor(e,n){this.comparator=e,this.root=n||oi.EMPTY}insert(e,n){return new tg(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oi.BLACK,null,null))}remove(e){return new tg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}};class Wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let oi=class nr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nr.RED,this.left=i??nr.EMPTY,this.right=s??nr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}};oi.EMPTY=null,oi.RED=!0,oi.BLACK=!1;oi.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new oi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new y1(this.data.getIterator())}getIteratorFrom(e){return new y1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}let y1=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=class ng{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new ng([])}unionWith(e){let n=new tt(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ng(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $F=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn=class rg{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $F("Invalid base64 string: "+i):i}}(e);return new rg(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new rg(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};cn.EMPTY_BYTE_STRING=new cn("");const FF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=FF.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function So(t){return typeof t=="string"?cn.fromBase64String(t):cn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zk(t){const e=t.mapValue.fields.__previous_value__;return $v(e)?zk(e):e}function Tl(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UF=class{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}};class kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$v(t)?4:VF(t)?9007199254740991:10:K()}function Xn(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tl(t).isEqual(Tl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wi(r.timestampValue),o=wi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return So(r.bytesValue).isEqual(So(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return qe(r.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(r.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return qe(r.integerValue)===qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=qe(r.doubleValue),o=qe(i.doubleValue);return s===o?Ch(s)===Ch(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Co(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(g1(s)!==g1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function xl(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function Io(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=qe(i.integerValue||i.doubleValue),a=qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return v1(t.timestampValue,e.timestampValue);case 4:return v1(Tl(t),Tl(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,s){const o=So(i),a=So(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ye(o[l],a[l]);if(u!==0)return u}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ye(qe(i.latitude),qe(s.latitude));return o!==0?o:ye(qe(i.longitude),qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Io(o[l],a[l]);if(u)return u}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Hu.mapValue&&s===Hu.mapValue)return 0;if(i===Hu.mapValue)return 1;if(s===Hu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ye(a[c],u[c]);if(h!==0)return h;const d=Io(o[a[c]],l[u[c]]);if(d!==0)return d}return ye(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function v1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=wi(t),r=wi(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function To(t){return ig(t)}function ig(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?So(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ig(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ig(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function Sh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sg(t){return!!t&&"integerValue"in t}function Fv(t){return!!t&&"arrayValue"in t}function _1(t){return!!t&&"nullValue"in t}function w1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pc(t){return!!t&&"mapValue"in t}function Ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(n)}setAll(e){let n=At.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(Ua(this.value))}}function jk(t){const e=[];return vs(t.fields,(n,r)=>{const i=new At([n]);if(pc(r)){const s=jk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,Z.min(),Z.min(),Z.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,Z.min(),Z.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,Z.min(),Z.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.position=e,this.inclusive=n}}function E1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n="asc"){this.field=e,this.dir=n}}function BF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{}class Ke extends Wk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jF(e,n,r):n==="array-contains"?new qF(e,r):n==="in"?new GF(e,r):n==="not-in"?new KF(e,r):n==="array-contains-any"?new QF(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WF(e,r):new HF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Io(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $n extends Wk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new $n(e,n)}matches(e){return Hk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Hk(t){return t.op==="and"}function qk(t){return zF(t)&&Hk(t)}function zF(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function og(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+To(t.value);if(qk(t))return t.filters.map(e=>og(e)).join(",");{const e=t.filters.map(n=>og(n)).join(",");return`${t.op}(${e})`}}function Gk(t,e){return t instanceof Ke?function(n,r){return r instanceof Ke&&n.op===r.op&&n.field.isEqual(r.field)&&Xn(n.value,r.value)}(t,e):t instanceof $n?function(n,r){return r instanceof $n&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Gk(s,r.filters[o]),!0):!1}(t,e):void K()}function Kk(t){return t instanceof Ke?function(e){return`${e.field.canonicalString()} ${e.op} ${To(e.value)}`}(t):t instanceof $n?function(e){return e.op.toString()+" {"+e.getFilters().map(Kk).join(" ,")+"}"}(t):"Filter"}class jF extends Ke{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class WF extends Ke{constructor(e,n){super(e,"in",n),this.keys=Qk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HF extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Qk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class qF extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fv(n)&&xl(n.arrayValue,this.value)}}class GF extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class KF extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class QF extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function S1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YF(t,e,n,r,i,s,o)}function Uv(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>og(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ft=n}return e.ft}function Vv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C1(t.startAt,e.startAt)&&C1(t.endAt,e.endAt)}function ag(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function XF(t,e,n,r,i,s,o,a){return new Ni(t,e,n,r,i,s,o,a)}function Ld(t){return new Ni(t)}function I1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Md(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zv(t){return t.collectionGroup!==null}function Ki(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=Md(e),r=Bv(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new no(n)),e.dt.push(new no(At.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new no(At.keyField(),s))}}}return e.dt}function kr(t){const e=ee(t);if(!e.wt)if(e.limitType==="F")e.wt=S1(e.path,e.collectionGroup,Ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ki(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new no(s.field,o))}const r=e.endAt?new ko(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ko(e.startAt.position,e.startAt.inclusive):null;e.wt=S1(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function lg(t,e){e.getFirstInequalityField(),Md(t);const n=t.filters.concat([e]);return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ih(t,e,n){return new Ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $d(t,e){return Vv(kr(t),kr(e))&&t.limitType===e.limitType}function Yk(t){return`${Uv(kr(t))}|lt:${t.limitType}`}function ug(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Kk(r)).join(", ")}]`),Od(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),`Target(${n})`}(kr(t))}; limitType=${t.limitType})`}function Fd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ki(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=E1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ki(n),r)||n.endAt&&!function(i,s,o){const a=E1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ki(n),r))}(t,e)}function JF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xk(t){return(e,n)=>{let r=!1;for(const i of Ki(t)){const s=ZF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZF(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Io(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU=new Mt(z.comparator);function xr(){return eU}const Jk=new Mt(z.comparator);function Ca(...t){let e=Jk;for(const n of t)e=e.insert(n.key,n);return e}function Zk(t){let e=Jk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zi(){return Va()}function ex(){return Va()}function Va(){return new qo(t=>t.toString(),(t,e)=>t.isEqual(e))}const tU=new Mt(z.comparator),nU=new tt(z.comparator);function oe(...t){let e=nU;for(const n of t)e=e.add(n);return e}const rU=new tt(ye);function tx(){return rU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ch(e)?"-0":e}}function rx(t){return{integerValue:""+t}}function iU(t,e){return MF(e)?rx(e):nx(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this._=void 0}}function sU(t,e,n){return t instanceof Rl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Nl?sx(t,e):t instanceof Al?ox(t,e):function(r,i){const s=ix(r,i),o=T1(s)+T1(r._t);return sg(s)&&sg(r._t)?rx(o):nx(r.serializer,o)}(t,e)}function oU(t,e,n){return t instanceof Nl?sx(t,e):t instanceof Al?ox(t,e):n}function ix(t,e){return t instanceof Th?sg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Rl extends Ud{}class Nl extends Ud{constructor(e){super(),this.elements=e}}function sx(t,e){const n=ax(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Al extends Ud{constructor(e){super(),this.elements=e}}function ox(t,e){let n=ax(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class Th extends Ud{constructor(e,n){super(),this.serializer=e,this._t=n}}function T1(t){return qe(t.integerValue||t.doubleValue)}function ax(t){return Fv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e,n){this.field=e,this.transform=n}}function lU(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Nl&&r instanceof Nl||n instanceof Al&&r instanceof Al?Co(n.elements,r.elements,Xn):n instanceof Th&&r instanceof Th?Xn(n._t,r._t):n instanceof Rl&&r instanceof Rl}(t.transform,e.transform)}class uU{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vd{}function lx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jv(t.key,On.none()):new hu(t.key,t.data,On.none());{const n=t.data,r=Kt.empty();let i=new tt(At.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new Wn(i.toArray()),On.none())}}function cU(t,e,n){t instanceof hu?function(r,i,s){const o=r.value.clone(),a=x1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(r,i,s){if(!mc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=x1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ux(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ba(t,e,n,r){return t instanceof hu?function(i,s,o,a){if(!mc(i.precondition,s))return o;const l=i.value.clone(),u=R1(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(i,s,o,a){if(!mc(i.precondition,s))return o;const l=R1(i.fieldTransforms,a,s),u=s.data;return u.setAll(ux(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return mc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function hU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ix(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function k1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Co(n,r,(i,s)=>lU(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hu extends Vd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Vd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ux(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x1(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oU(o,a,n[i]))}return r}function R1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sU(s,o,e))}return r}class jv extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dU extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ex();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=lx(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(n,r)=>k1(n,r))&&Co(this.baseMutations,e.baseMutations,(n,r)=>k1(n,r))}}class Wv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=tU;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ue;function gU(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function cx(t){if(t===void 0)return Tr("GRPC error has no .code"),I.UNKNOWN;switch(t){case He.OK:return I.OK;case He.CANCELLED:return I.CANCELLED;case He.UNKNOWN:return I.UNKNOWN;case He.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case He.INTERNAL:return I.INTERNAL;case He.UNAVAILABLE:return I.UNAVAILABLE;case He.UNAUTHENTICATED:return I.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case He.NOT_FOUND:return I.NOT_FOUND;case He.ALREADY_EXISTS:return I.ALREADY_EXISTS;case He.PERMISSION_DENIED:return I.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case He.ABORTED:return I.ABORTED;case He.OUT_OF_RANGE:return I.OUT_OF_RANGE;case He.UNIMPLEMENTED:return I.UNIMPLEMENTED;case He.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(ue=He||(He={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return qu}static getOrCreateInstance(){return qu===null&&(qu=new Hv),qu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let qu=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,du.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bd(Z.min(),i,tx(),xr(),oe())}}class du{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new du(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class hx{constructor(e,n){this.targetId=e,this.Et=n}}class dx{constructor(e,n,r=cn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class N1{constructor(){this.At=0,this.Rt=b1(),this.vt=cn.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=oe(),n=oe(),r=oe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new du(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=b1()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class yU{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=xr(),this.qt=A1(),this.Ut=new tt(ye)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(ag(o))if(i===0){const a=new z(o.path);this.Qt(r,a,Nt.newNoDocument(a,Z.min()))}else Ne(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Hv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&ag(a.target)){const l=new z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Nt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=oe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Bd(e,n,this.Ut,this.Lt,r);return this.Lt=xr(),this.qt=A1(),this.Ut=new tt(ye),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new N1,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new tt(ye),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new N1),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function A1(){return new Mt(z.comparator)}function b1(){return new Mt(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_U=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wU=(()=>({and:"AND",or:"OR"}))();class EU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CU(t,e){return kh(t,e.toTimestamp())}function Yn(t){return Ne(!!t),Z.fromTimestamp(function(e){const n=wi(e);return new et(n.seconds,n.nanos)}(t))}function qv(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function px(t){const e=Te.fromString(t);return Ne(vx(e)),e}function cg(t,e){return qv(t.databaseId,e.path)}function pp(t,e){const n=px(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(mx(n))}function hg(t,e){return qv(t.databaseId,e)}function SU(t){const e=px(t);return e.length===4?Te.emptyPath():mx(e)}function dg(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mx(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P1(t,e,n){return{name:cg(t,e),fields:n.value.mapValue.fields}}function IU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ne(u===void 0||typeof u=="string"),cn.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),cn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:cx(l.code);return new L(u,l.message||"")}(o);n=new dx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pp(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):Z.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new gc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pp(t,r.document),s=r.readTime?Yn(r.readTime):Z.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pp(t,r.document),s=r.removedTargetIds||[];n=new gc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new mU(i),o=r.targetId;n=new hx(o,s)}}return n}function TU(t,e){let n;if(e instanceof hu)n={update:P1(t,e.key,e.value)};else if(e instanceof jv)n={delete:cg(t,e.key)};else if(e instanceof Ai)n={update:P1(t,e.key,e.data),updateMask:OU(e.fieldMask)};else{if(!(e instanceof dU))return K();n={verify:cg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Rl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Nl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Al)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Th)return{fieldPath:s.field.canonicalString(),increment:o._t};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:CU(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function kU(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yn(r.updateTime):Yn(i);return s.isEqual(Z.min())&&(s=Yn(i)),new uU(s,r.transformResults||[])}(n,e))):[]}function xU(t,e){return{documents:[hg(t,e.path)]}}function RU(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return yx($n.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ks(c.field),direction:bU(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Od(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function NU(t){let e=SU(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=gx(c);return h instanceof $n&&qk(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new no(xs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Od(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new ko(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new ko(d,h)}(n.endAt)),XF(e,i,o,s,a,"F",l,u)}function AU(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gx(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xs(e.unaryFilter.field);return Ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xs(e.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(e.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xs(e.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ke.create(xs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $n.create(e.compositeFilter.filters.map(n=>gx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function bU(t){return vU[t]}function PU(t){return _U[t]}function DU(t){return wU[t]}function ks(t){return{fieldPath:t.canonicalString()}}function xs(t){return At.fromServerFormat(t.fieldPath)}function yx(t){return t instanceof Ke?function(e){if(e.op==="=="){if(w1(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NAN"}};if(_1(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(w1(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NAN"}};if(_1(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(e.field),op:PU(e.op),value:e.value}}}(t):t instanceof $n?function(e){const n=e.getFilters().map(r=>yx(r));return n.length===1?n[0]:{compositeFilter:{op:DU(e.op),filters:n}}}(t):K()}function OU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=cn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e){this.se=e}}function MU(t){const e=NU({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(){this.He=new FU}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(_i.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class FU{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new xo(0)}static bn(){return new xo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(){this.changes=new qo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ba(r.mutation,i,Wn.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ca();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xr();const o=Va(),a=Va();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ai)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ba(c.mutation,u,c.mutation.getFieldMask(),et.now())):o.set(u.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new VU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Va();let i=new Mt((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ex();c.forEach(d=>{if(!s.has(d)){const p=lx(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(zi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,oe())).next(c=>({batchId:a,changes:Zk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ca();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Ni(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Nt.newInvalidDocument(u)))});let o=Ca();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ba(u.mutation,l,Wn.empty(),et.now()),Fd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:MU(r.bundledQuery),readTime:Yn(r.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(){this.overlays=new Mt(z.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=zi(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Mt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=zi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=zi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pU(n,r));let s=this.ts.get(n);s===void 0&&(s=oe(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.es=new tt(it.ns),this.ss=new tt(it.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new it(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new it(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new z(new Te([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new z(new Te([])),r=new it(n,e),i=new it(n,e+1);let s=oe();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return z.comparator(e.key,n.key)||ye(e.ds,n.ds)}static rs(e,n){return ye(e.ds,n.ds)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new tt(it.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fU(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ye);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),R.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new it(new z(s),0);let a=new tt(ye);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return R.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new it(n,0),i=this._s.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(e){this.Ts=e,this.docs=new Mt(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xr();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DF(PF(c),r)<=0||(i.has(c.key)||Fd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Es(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qU(this)}getSize(e){return R.resolve(this.size)}}class qU extends UU{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e){this.persistence=e,this.As=new qo(n=>Uv(n),Vv),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gv,this.targetCount=0,this.bs=xo.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new xo(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Mv(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new GU(this),this.indexManager=new $U,this.remoteDocumentCache=function(r){return new HU(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new LU(n),this.xs=new zU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new WU(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new QU(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class QU extends LF{constructor(e){super(),this.currentSequenceNumber=e}}class Kv{constructor(e){this.persistence=e,this.$s=new Gv,this.Ms=null}static Fs(e){return new Kv(e)}get Bs(){if(this.Ms)return this.Ms;throw K()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,r=>{const i=z.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(I1(n))return R.resolve(null);let r=kr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=kr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Ih(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return I1(n)||i.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(m1()<=fe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ug(n)),this.Fi(e,o,n,bF(i,-1)))})}$i(e,n){let r=new tt(Xk(e));return n.forEach((i,s)=>{Fd(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return m1()<=fe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ug(n)),this.xi.getDocumentsMatchingQuery(e,n,_i.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Mt(ye),this.qi=new qo(s=>Uv(s),Vv),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BU(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function JU(t,e,n,r){return new XU(t,e,n,r)}async function _x(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZU(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const y=l.docVersions.get(p);Ne(y!==null),m.version.compareTo(y)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wx(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function e3(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(cn.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(m,y,_){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,c)&&a.push(n.Ds.updateTargetData(s,p))});let l=xr(),u=oe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(t3(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(Z.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function t3(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function n3(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function r3(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Qi(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function fg(t,e,n){const r=ee(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!cu(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function D1(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ee(a),h=c.qi.get(u);return h!==void 0?R.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,kr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(i3(r,JF(e),a),{documents:a,Wi:s})))}function i3(t,e,n){let r=t.Ui.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class O1{constructor(){this.activeTargetIds=tx()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s3{constructor(){this.Br=new O1,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new O1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu=null;function mp(){return Gu===null?Gu=268435456+Math.round(2147483648*Math.random()):Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class u3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=mp(),a=this.ao(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(B("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Eh("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=a3[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=mp();return new Promise((o,a)=>{const l=new EF;l.setWithCredentials(!0),l.listenOnce(vF.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fp.NO_ERROR:const c=l.getResponseJson();B(kt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case fp.TIMEOUT:B(kt,`RPC '${e}' ${s} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case fp.HTTP_ERROR:const h=l.getStatus();if(B(kt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(p.status);a(new L(m,p.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B(kt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(kt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=mp(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gF(),a=yF(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new wF({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");B(kt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new l3({Wr:y=>{d?B(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(B(kt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),B(kt,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},Hr:()=>c.close()}),m=(y,_,g)=>{y.listen(_,f=>{try{g(f)}catch(v){setTimeout(()=>{throw v},0)}})};return m(c,ju.EventType.OPEN,()=>{d||B(kt,`RPC '${e}' stream ${i} transport opened.`)}),m(c,ju.EventType.CLOSE,()=>{d||(d=!0,B(kt,`RPC '${e}' stream ${i} transport closed`),p.so())}),m(c,ju.EventType.ERROR,y=>{d||(d=!0,Eh(kt,`RPC '${e}' stream ${i} transport errored:`,y),p.so(new L(I.UNAVAILABLE,"The operation could not be completed")))}),m(c,ju.EventType.MESSAGE,y=>{var _;if(!d){const g=y.data[0];Ne(!!g);const f=g,v=f.error||((_=f[0])===null||_===void 0?void 0:_.error);if(v){B(kt,`RPC '${e}' stream ${i} received error:`,v);const E=v.status;let T=function(M){const D=He[M];if(D!==void 0)return cx(D)}(E),A=v.message;T===void 0&&(T=I.INTERNAL,A="Unknown error status: "+E+" with message "+v.message),d=!0,p.so(new L(T,A)),c.close()}else B(kt,`RPC '${e}' stream ${i} received:`,g),p.io(g)}}),m(a,_F.STAT_EVENT,y=>{y.stat===f1.PROXY?B(kt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===f1.NOPROXY&&B(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function gp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return new EU(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Ex(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c3 extends Cx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=IU(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Yn(s.readTime):Z.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=dg(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=ag(a)?{documents:xU(i,a)}:{query:RU(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=fx(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=kh(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=AU(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=dg(this.serializer),n.removeTarget=e,this.Fo(n)}}class h3 extends Cx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=kU(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.Zo(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=dg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TU(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class f3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Tr(n),this.ru=!1):B("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{_s(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.du.add(4),await fu(l),l.mu.set("Unknown"),l.du.delete(4),await jd(l)}(this))})}),this.mu=new f3(r,i)}}async function jd(t){if(_s(t))for(const e of t.wu)await e(!0)}async function fu(t){for(const e of t.wu)await e(!1)}function Sx(t,e){const n=ee(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Jv(n)?Xv(n):Go(n).No()&&Yv(n,e))}function Ix(t,e){const n=ee(t),r=Go(n);n.fu.delete(e),r.No()&&Tx(n,e),n.fu.size===0&&(r.No()?r.$o():_s(n)&&n.mu.set("Unknown"))}function Yv(t,e){t.gu.Ot(e.targetId),Go(t).jo(e)}function Tx(t,e){t.gu.Ot(e),Go(t).Wo(e)}function Xv(t){t.gu=new yU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Go(t).start(),t.mu.ou()}function Jv(t){return _s(t)&&!Go(t).xo()&&t.fu.size>0}function _s(t){return ee(t).du.size===0}function kx(t){t.gu=void 0}async function m3(t){t.fu.forEach((e,n)=>{Yv(t,e)})}async function g3(t,e){kx(t),Jv(t)?(t.mu.au(e),Xv(t)):t.mu.set("Unknown")}async function y3(t,e,n){if(t.mu.set("Online"),e instanceof dx&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xh(t,r)}else if(e instanceof gc?t.gu.Kt(e):e instanceof hx?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const r=await wx(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(cn.EMPTY_BYTE_STRING,l.snapshotVersion)),Tx(i,a);const u=new Qi(l.target,a,1,l.sequenceNumber);Yv(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await xh(t,r)}}async function xh(t,e,n){if(!cu(e))throw e;t.du.add(1),await fu(t),t.mu.set("Offline"),n||(n=()=>wx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await jd(t)})}function xx(t,e){return e().catch(n=>xh(t,n,e))}async function Wd(t){const e=ee(t),n=Ei(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;v3(e);)try{const i=await n3(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,_3(e,i)}catch(i){await xh(e,i)}Rx(e)&&Nx(e)}function v3(t){return _s(t)&&t.lu.length<10}function _3(t,e){t.lu.push(e);const n=Ei(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Rx(t){return _s(t)&&!Ei(t).xo()&&t.lu.length>0}function Nx(t){Ei(t).start()}async function w3(t){Ei(t).tu()}async function E3(t){const e=Ei(t);for(const n of t.lu)e.Yo(n.mutations)}async function C3(t,e,n){const r=t.lu.shift(),i=Wv.from(r,e,n);await xx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wd(t)}async function S3(t,e){e&&Ei(t).Jo&&await async function(n,r){if(i=r.code,gU(i)&&i!==I.ABORTED){const s=n.lu.shift();Ei(n).Oo(),await xx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Wd(n)}var i}(t,e),Rx(t)&&Nx(t)}async function M1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=_s(n);n.du.add(3),await fu(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await jd(n)}async function I3(t,e){const n=ee(t);e?(n.du.delete(2),await jd(n)):e||(n.du.add(2),await fu(n),n.mu.set("Unknown"))}function Go(t){return t.yu||(t.yu=function(e,n,r){const i=ee(e);return i.nu(),new c3(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:m3.bind(null,t),Zr:g3.bind(null,t),zo:y3.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Jv(t)?Xv(t):t.mu.set("Unknown")):(await t.yu.stop(),kx(t))})),t.yu}function Ei(t){return t.pu||(t.pu=function(e,n,r){const i=ee(e);return i.nu(),new h3(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:w3.bind(null,t),Zr:S3.bind(null,t),Xo:E3.bind(null,t),Zo:C3.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Wd(t)):(await t.pu.stop(),t.lu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function e_(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),cu(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Ca(),this.sortedSet=new Mt(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.Iu=new Mt(z.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):K():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(){this.Eu=void 0,this.listeners=[]}}class k3{constructor(){this.queries=new qo(e=>Yk(e),$d),this.onlineState="Unknown",this.Au=new Set}}async function t_(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new T3),i)try{s.Eu=await n.onListen(r)}catch(o){const a=e_(o,`Initialization of query '${ug(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&r_(n)}async function n_(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function x3(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&r_(n)}function R3(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function r_(t){t.Au.forEach(e=>{e.next()})}class i_{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.key=e}}class bx{constructor(e){this.key=e}}class N3{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=oe(),this.mutatedKeys=oe(),this.Ku=Xk(e),this.Gu=new ro(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new $1,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Fd(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(r.track({type:3,doc:p}),_=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.Ku(p,l)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(h)-p(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Ro(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new $1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=oe(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new bx(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new Ax(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=oe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ro.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class A3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b3{constructor(e){this.key=e,this.ec=!1}}class P3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new qo(a=>Yk(a),$d),this.ic=new Map,this.rc=new Set,this.oc=new Mt(z.comparator),this.uc=new Map,this.cc=new Gv,this.ac={},this.hc=new Map,this.lc=xo.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function D3(t,e){const n=j3(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await r3(n.localStore,kr(e));n.isPrimaryClient&&Sx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await O3(n,e,r,a==="current",o.resumeToken)}return i}async function O3(t,e,n,r,i){t.dc=(h,d,p)=>async function(m,y,_,g){let f=y.view.zu(_);f.Mi&&(f=await D1(m.localStore,y.query,!1).then(({documents:T})=>y.view.zu(T,f)));const v=g&&g.targetChanges.get(y.targetId),E=y.view.applyChanges(f,m.isPrimaryClient,v);return U1(m,y.targetId,E.Yu),E.snapshot}(t,h,d,p);const s=await D1(t.localStore,e,!0),o=new N3(e,s.Wi),a=o.zu(s.documents),l=du.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);U1(t,n,u.Yu);const c=new A3(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function L3(t,e){const n=ee(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!$d(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ix(n.remoteStore,r.targetId),pg(n,r.targetId)}).catch(uu)):(pg(n,r.targetId),await fg(n.localStore,r.targetId,!0))}async function M3(t,e,n){const r=W3(t);try{const i=await function(s,o){const a=ee(s),l=et.now(),u=o.reduce((d,p)=>d.add(p.key),oe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=xr(),m=oe();return a.Ki.getEntries(d,u).next(y=>{p=y,p.forEach((_,g)=>{g.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{c=y;const _=[];for(const g of o){const f=hU(g,c.get(g.key).overlayedDocument);f!=null&&_.push(new Ai(g.key,f,jk(f.value.mapValue),On.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Zk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Mt(ye)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await pu(r,i.changes),await Wd(r.remoteStore)}catch(i){const s=e_(i,"Failed to persist write");n.reject(s)}}async function Px(t,e){const n=ee(t);try{const r=await e3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ne(o.ec):i.removedDocuments.size>0&&(Ne(o.ec),o.ec=!1))}),await pu(n,r,e)}catch(r){await uu(r)}}function F1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&r_(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $3(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Mt(z.comparator);o=o.insert(s,Nt.newNoDocument(s,Z.min()));const a=oe().add(s),l=new Bd(Z.min(),new Map,new tt(ye),o,a);await Px(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),s_(r)}else await fg(r.localStore,e,!1).then(()=>pg(r,e,n)).catch(uu)}async function F3(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await ZU(n.localStore,e);Ox(n,r,null),Dx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pu(n,i)}catch(i){await uu(i)}}async function U3(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ne(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ox(r,e,n),Dx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pu(r,i)}catch(i){await uu(i)}}function Dx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Ox(t,e,n){const r=ee(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function pg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||Lx(t,r)})}function Lx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ix(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),s_(t))}function U1(t,e,n){for(const r of n)r instanceof Ax?(t.cc.addReference(r.key,e),V3(t,r)):r instanceof bx?(B("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Lx(t,r.key)):K()}function V3(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(r),s_(t))}function s_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new z(Te.fromString(e)),r=t.lc.next();t.uc.set(r,new b3(n)),t.oc=t.oc.insert(n,r),Sx(t.remoteStore,new Qi(kr(Ld(n.path)),r,2,Mv.ct))}}async function pu(t,e,n){const r=ee(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Qv.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!cu(c))throw c;B("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,m)}}}(r.localStore,s))}async function B3(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await _x(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pu(n,r.Qi)}}function z3(t,e){const n=ee(t),r=n.uc.get(e);if(r&&r.ec)return oe().add(r.key);{let i=oe();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function j3(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Px.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$3.bind(null,e),e.nc.zo=x3.bind(null,e.eventManager),e.nc.wc=R3.bind(null,e.eventManager),e}function W3(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=F3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=U3.bind(null,e),e}class V1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JU(this.persistence,new YU,e.initialUser,this.serializer)}createPersistence(e){return new KU(Kv.Fs,this.serializer)}createSharedClientState(e){return new s3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=B3.bind(null,this.syncEngine),await I3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new k3}createDatastore(e){const n=zd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new u3(i));var i;return function(s,o,a,l){return new d3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>F1(this.syncEngine,a,0),o=L1.D()?new L1:new o3,new p3(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new P3(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);B("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fu(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=Vk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=e_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yp(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _x(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K3(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>M1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>M1(e.remoteStore,s)),t._onlineComponents=e}function G3(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function K3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await yp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!G3(n))throw n;Eh("Error using user provided cache. Falling back to memory cache: "+n),await yp(t,new V1)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await yp(t,new V1);return t._offlineComponents}async function Mx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await B1(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await B1(t,new H3))),t._onlineComponents}function Q3(t){return Mx(t).then(e=>e.syncEngine)}async function Rh(t){const e=await Mx(t),n=e.eventManager;return n.onListen=D3.bind(null,e.syncEngine),n.onUnlisten=L3.bind(null,e.syncEngine),n}function Y3(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new o_({next:h=>{s.enqueueAndForget(()=>n_(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new L(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new L(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new i_(Ld(o.path),u,{includeMetadataChanges:!0,xu:!0});return t_(i,c)}(await Rh(t),t.asyncQueue,e,n,r)),r.promise}function X3(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new o_({next:h=>{s.enqueueAndForget(()=>n_(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new i_(o,u,{includeMetadataChanges:!0,xu:!0});return t_(i,c)}(await Rh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J3(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j1(t){if(!z.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function W1(t){if(z.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Z3(t,e){if(e<=0)throw new L(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,J3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CF;switch(n.type){case"firstParty":return new kF(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=z1.get(e);n&&(B("ComponentProvider","Removing Datastore"),z1.delete(e),n.terminate())}(this),Promise.resolve()}}function e4(t,e,n,r={}){var i;const s=(t=on(t,qd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Eh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=xt.MOCK_USER;else{o=Cy(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new xt(l)}t._authCredentials=new SF(new Uk(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class ai extends Fn{constructor(e,n,r){super(e,n,Ld(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new z(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function an(t,e,...n){if(t=ce(t),$x("collection","path",e),t instanceof qd){const r=Te.fromString(e,...n);return W1(r),new ai(t,null,r)}{if(!(t instanceof Dt||t instanceof ai))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return W1(r),new ai(t.firestore,null,r)}}function Ci(t,e,...n){if(t=ce(t),arguments.length===1&&(e=Vk.A()),$x("doc","path",e),t instanceof qd){const r=Te.fromString(e,...n);return j1(r),new Dt(t,null,new z(r))}{if(!(t instanceof Dt||t instanceof ai))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return j1(r),new Dt(t.firestore,t instanceof ai?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ex(this,"async_queue_retry"),this.qc=()=>{const n=gp();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=gp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=gp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new gr;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!cu(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Zv.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&K()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function q1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Si extends qd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fx(this),this._firestoreClient.terminate()}}function n4(t,e){const n=typeof t=="object"?t:rd(),r=typeof t=="string"?t:e||"(default)",i=Vl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ey("firestore");s&&e4(i,...s)}return i}function Gd(t){return t._firestoreClient||Fx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new UF(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new q3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this._byteString=e}static fromBase64String(e){try{return new No(cn.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new No(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=/^__.*__$/;class i4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new hu(e,this.data,n,this.fieldTransforms)}}class Ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Vx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class l_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new l_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Nh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Vx(this.Yc)&&r4.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class s4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zd(e)}ua(e,n,r,i=!1){return new l_({Yc:e,methodName:n,oa:r,path:At.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yd(t){const e=t._freezeSettings(),n=zd(t._databaseId);return new s4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o4(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);c_("Data must be an object, but it was:",o,r);const a=zx(r,o);let l,u;if(s.merge)l=new Wn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=mg(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Wx(c,d)||c.push(d)}l=new Wn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new i4(new Kt(a),l,u)}class Xd extends Qd{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xd}}class u_ extends Qd{_toFieldTransform(e){return new aU(e.path,new Rl)}isEqual(e){return e instanceof u_}}function a4(t,e,n,r){const i=t.ua(1,e,n);c_("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();vs(r,(l,u)=>{const c=h_(e,l,n);u=ce(u);const h=i.na(c);if(u instanceof Xd)s.push(c);else{const d=mu(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wn(s);return new Ux(o,a,i.fieldTransforms)}function l4(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[mg(e,r,n)],l=[i];if(s.length%2!=0)throw new L(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(mg(e,s[d])),l.push(s[d+1]);const u=[],c=Kt.empty();for(let d=a.length-1;d>=0;--d)if(!Wx(u,a[d])){const p=a[d];let m=l[d];m=ce(m);const y=o.na(p);if(m instanceof Xd)u.push(p);else{const _=mu(m,y);_!=null&&(u.push(p),c.set(p,_))}}const h=new Wn(u);return new Ux(c,h,o.fieldTransforms)}function Bx(t,e,n,r=!1){return mu(n,t.ua(r?4:3,e))}function mu(t,e){if(jx(t=ce(t)))return c_("Unsupported field value:",e,t),zx(t,e);if(t instanceof Qd)return function(n,r){if(!Vx(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=mu(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iU(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=et.fromDate(n);return{timestampValue:kh(r.serializer,i)}}if(n instanceof et){const i=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kh(r.serializer,i)}}if(n instanceof a_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof No)return{bytesValue:fx(r.serializer,n._byteString)};if(n instanceof Dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Hd(n)}`)}(t,e)}function zx(t,e){const n={};return Bk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,i)=>{const s=mu(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof a_||t instanceof No||t instanceof Dt||t instanceof Qd)}function c_(t,e,n){if(!jx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hd(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function mg(t,e,n){if((e=ce(e))instanceof Kd)return e._internalPath;if(typeof e=="string")return h_(t,e);throw Nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const u4=new RegExp("[~\\*/\\[\\]]");function h_(t,e,n){if(e.search(u4)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kd(...e.split("."))._internalPath}catch{throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function Wx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c4 extends d_{data(){return super.data()}}function Jd(t,e){return typeof e=="string"?h_(t,e):e instanceof Kd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f_{}class gu extends f_{}function Wr(t,e,...n){let r=[];e instanceof f_&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof p_).length,o=i.filter(a=>a instanceof Zd).length;if(s>1||s>0&&o>0)throw new L(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zd extends gu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zd(e,n,r)}_apply(e){const n=this._parse(e);return Gx(e._query,n),new Fn(e.firestore,e.converter,lg(e._query,n))}_parse(e){const n=Yd(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){K1(c,u);const d=[];for(const p of c)d.push(G1(a,i,p));h={arrayValue:{values:d}}}else h=G1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||K1(c,u),h=Bx(o,s,c,u==="in"||u==="not-in");return Ke.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Hr(t,e,n){const r=e,i=Jd("where",t);return Zd._create(i,r,n)}class p_ extends f_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new p_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Gx(s,a),s=lg(s,a)}(e._query,n),new Fn(e.firestore,e.converter,lg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class m_ extends gu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new m_(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new L(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new no(i,s);return function(a,l){if(Bv(a)===null){const u=Md(a);u!==null&&Kx(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ni(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function g_(t,e="asc"){const n=e,r=Jd("orderBy",t);return m_._create(r,n)}class y_ extends gu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new y_(e,n,r)}_apply(e){return new Fn(e.firestore,e.converter,Ih(e._query,this._limit,this._limitType))}}function h4(t){return Z3("limit",t),y_._create("limit",t,"F")}class v_ extends gu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new v_(e,n,r)}_apply(e){const n=qx(e,this.type,this._docOrFields,this._inclusive);return new Fn(e.firestore,e.converter,function(r,i){return new Ni(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function d4(...t){return v_._create("startAt",t,!0)}class __ extends gu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new __(e,n,r)}_apply(e){const n=qx(e,this.type,this._docOrFields,this._inclusive);return new Fn(e.firestore,e.converter,function(r,i){return new Ni(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function f4(...t){return __._create("endAt",t,!0)}function qx(t,e,n,r){if(n[0]=ce(n[0]),n[0]instanceof d_)return function(i,s,o,a,l){if(!a)throw new L(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Ki(i))if(c.field.isKeyField())u.push(Sh(s,a.key));else{const h=a.data.field(c.field);if($v(h))throw new L(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new L(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new ko(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Yd(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new L(I.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const m=u[p];if(h[p].field.isKeyField()){if(typeof m!="string")throw new L(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof m}`);if(!zv(s)&&m.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${m}' contains a slash.`);const y=s.path.child(Te.fromString(m));if(!z.isDocumentKey(y))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const _=new z(y);d.push(Sh(o,_))}else{const y=Bx(a,l,m);d.push(y)}}return new ko(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function G1(t,e,n){if(typeof(n=ce(n))=="string"){if(n==="")throw new L(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zv(e)&&n.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!z.isDocumentKey(r))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sh(t,new z(r))}if(n instanceof Dt)return Sh(t,n._key);throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hd(n)}.`)}function K1(t,e){if(!Array.isArray(t)||t.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gx(t,e){if(e.isInequality()){const r=Md(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new L(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Bv(t);s!==null&&Kx(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Kx(t,e,n){if(!n.isEqual(e))throw new L(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class p4{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(So(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return vs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new a_(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tl(e));default:return null}}convertTimestamp(e){const n=wi(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Ne(vx(r));const i=new kl(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qx extends d_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yc extends Qx{data(e={}){return super.data(e)}}class Yx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yc(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new yc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new yc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:g4(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t){t=on(t,Dt);const e=on(t.firestore,Si);return Y3(Gd(e),t._key).then(n=>Zx(e,t,n))}class w_ extends p4{constructor(e){super(),this.firestore=e}convertBytes(e){return new No(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function Ko(t){t=on(t,Fn);const e=on(t.firestore,Si),n=Gd(e),r=new w_(e);return Hx(t._query),X3(n,t._query).then(i=>new Yx(e,r,t,i))}function ef(t,e,n){t=on(t,Dt);const r=on(t.firestore,Si),i=m4(t.converter,e,n);return E_(r,[o4(Yd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,On.none())])}function Xx(t,e,n,...r){t=on(t,Dt);const i=on(t.firestore,Si),s=Yd(i);let o;return o=typeof(e=ce(e))=="string"||e instanceof Kd?l4(s,"updateDoc",t._key,e,n,r):a4(s,"updateDoc",t._key,e),E_(i,[o.toMutation(t._key,On.exists(!0))])}function v4(t){return E_(on(t.firestore,Si),[new jv(t._key,On.none())])}function Jx(t,...e){var n,r,i;t=ce(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||q1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(q1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Dt)u=on(t.firestore,Si),c=Ld(t._key.path),l={next:h=>{e[o]&&e[o](Zx(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=on(t,Fn);u=on(h.firestore,Si),c=h._query;const d=new w_(u);l={next:p=>{e[o]&&e[o](new Yx(u,d,h,p))},error:e[o+1],complete:e[o+2]},Hx(t._query)}return function(h,d,p,m){const y=new o_(m),_=new i_(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>t_(await Rh(h),_)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>n_(await Rh(h),_))}}(Gd(u),c,a,l)}function E_(t,e){return function(n,r){const i=new gr;return n.asyncQueue.enqueueAndForget(async()=>M3(await Q3(n),r,i)),i.promise}(Gd(t),e)}function Zx(t,e,n){const r=n.docs.get(e._key),i=new w_(t);return new Qx(t,i,e._key,r,new Sa(n.hasPendingWrites,n.fromCache),e.converter)}function C_(){return new u_("serverTimestamp")}(function(t,e=!0){(function(n){Ho=n})(ps),pi(new Er("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Si(new IF(n.getProvider("auth-internal")),new RF(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wn(p1,"3.10.0",t),wn(p1,"3.10.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="firebasestorage.googleapis.com",tR="storageBucket",_4=2*60*1e3,w4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Jn{constructor(e,n,r=0){super(vp(e),`Firebase Storage: ${n} (${vp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function vp(t){return"storage/"+t}function S_(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Be.UNKNOWN,t)}function E4(t){return new ze(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function C4(t){return new ze(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function S4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Be.UNAUTHENTICATED,t)}function I4(){return new ze(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function T4(t){return new ze(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function k4(){return new ze(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function x4(){return new ze(Be.CANCELED,"User canceled the upload/download.")}function R4(t){return new ze(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function N4(t){return new ze(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function A4(){return new ze(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tR+"' property when initializing the app?")}function b4(){return new ze(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function P4(){return new ze(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function D4(t){return new ze(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gg(t){return new ze(Be.INVALID_ARGUMENT,t)}function nR(){return new ze(Be.APP_DELETED,"The Firebase app was deleted.")}function O4(t){return new ze(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function za(t,e){return new ze(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function da(t){throw new ze(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw N4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===eR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],A=T.regex.exec(e);if(A){const M=A[T.indices.bucket];let D=A[T.indices.path];D||(D=""),r=new rn(M,D),T.postModify(r);break}}if(r==null)throw R4(e);return r}}class L4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function d(){s&&clearTimeout(s)}function p(_,...g){if(u){d();return}if(_){d(),c.call(null,_,...g);return}if(l()||o){d(),c.call(null,_,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let m=!1;function y(_){m||(m=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function $4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t){return t!==void 0}function U4(t){return typeof t=="object"&&!Array.isArray(t)}function I_(t){return typeof t=="string"||t instanceof String}function Q1(t){return T_()&&t instanceof Blob}function T_(){return typeof Blob<"u"&&!Rb()}function Y1(t,e,n,r){if(r<e)throw gg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ku(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yi.NO_ERROR,l=s.getStatus();if(!a||V4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Yi.ABORT;r(!1,new Ku(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ku(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());F4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=S_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?nR():x4();o(l)}else{const l=k4();o(l)}};this.canceled_?n(!1,new Ku(!1,null,!0)):this.backoffId_=M4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ku{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function z4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function j4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function H4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function q4(t,e,n,r,i,s,o=!0){const a=rR(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return W4(u,e),z4(u,n),j4(u,s),H4(u,r),new B4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function K4(...t){const e=G4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(T_())return new Blob(t);throw new ze(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Q4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(t){if(typeof atob>"u")throw D4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _p{constructor(e,n){this.data=e,this.contentType=n||null}}function X4(t,e){switch(t){case Hn.RAW:return new _p(iR(e));case Hn.BASE64:case Hn.BASE64URL:return new _p(sR(t,e));case Hn.DATA_URL:return new _p(Z4(e),eV(e))}throw S_()}function iR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function J4(t){let e;try{e=decodeURIComponent(t)}catch{throw za(Hn.DATA_URL,"Malformed data URL.")}return iR(e)}function sR(t,e){switch(t){case Hn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw za(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Hn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw za(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Y4(e)}catch(i){throw i.message.includes("polyfill")?i:za(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class oR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw za(Hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Z4(t){const e=new oR(t);return e.base64?sR(Hn.BASE64,e.rest):J4(e.rest)}function eV(t){return new oR(t).contentType}function tV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){let r=0,i="";Q1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q1(this.data_)){const r=this.data_,i=Q4(r,e,n);return i===null?null:new Vr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vr(r,!0)}}static getBlob(...e){if(T_()){const n=e.map(r=>r instanceof Vr?r.data_:r);return new Vr(K4.apply(null,n))}else{const n=e.map(o=>I_(o)?X4(Hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Vr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){let e;try{e=JSON.parse(t)}catch{return null}return U4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function lR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t,e){return e}class Ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||iV}}let Qu=null;function sV(t){return!I_(t)||t.length<2?t:lR(t)}function uR(){if(Qu)return Qu;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(s,o){return sV(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ft("size");return i.xform=r,t.push(i),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),Qu=t,Qu}function oV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return oV(r,t),r}function cR(t,e,n){const r=aR(e);return r===null?null:aV(t,r,n)}function lV(t,e,n,r){const i=aR(e);if(i===null||!I_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=k_(d,n,r),m=rR({alt:"media",token:u});return p+m})[0]}function uV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class hR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){if(!t)throw S_()}function cV(t,e){function n(r,i){const s=cR(t,i,e);return dR(s!==null),s}return n}function hV(t,e){function n(r,i){const s=cR(t,i,e);return dR(s!==null),lV(s,i,t.host,t._protocol)}return n}function fR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=I4():i=S4():n.getStatus()===402?i=C4(t.bucket):n.getStatus()===403?i=T4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function dV(t){const e=fR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=E4(t.path)),s.serverResponse=i.serverResponse,s}return n}function fV(t,e,n){const r=e.fullServerUrl(),i=k_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hR(i,s,hV(t,n),o);return a.errorHandler=dV(e),a}function pV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=pV(null,e)),r}function gV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=mV(e,r,i),c=uV(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Vr.getBlob(h,r,d);if(p===null)throw b4();const m={name:u.fullPath},y=k_(s,t.host,t._protocol),_="POST",g=t.maxUploadRetryTime,f=new hR(y,_,cV(t,n),g);return f.urlParams=m,f.headers=o,f.body=p.uploadData(),f.errorHandler=fR(e),f}class yV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw da("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw da("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw da("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw da("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw da("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vV extends yV{initXhr(){this.xhr_.responseType="text"}}function pR(){return new vV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lR(this._location.path)}get storage(){return this._service}get parent(){const e=nV(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw O4(e)}}function _V(t,e,n){t._throwIfRoot("uploadBytes");const r=gV(t.storage,t._location,uR(),new Vr(e,!0),n);return t.storage.makeRequestWithTokens(r,pR).then(i=>({metadata:i,ref:t}))}function wV(t){t._throwIfRoot("getDownloadURL");const e=fV(t.storage,t._location,uR());return t.storage.makeRequestWithTokens(e,pR).then(n=>{if(n===null)throw P4();return n})}function EV(t,e){const n=rV(t._location.path,e),r=new rn(t._location.bucket,n);return new hs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){return/^[A-Za-z]+:\/\//.test(t)}function SV(t,e){return new hs(t,e)}function mR(t,e){if(t instanceof x_){const n=t;if(n._bucket==null)throw A4();const r=new hs(n,n._bucket);return e!=null?mR(r,e):r}else return e!==void 0?EV(t,e):t}function IV(t,e){if(e&&CV(e)){if(t instanceof x_)return SV(t,e);throw gg("To use ref(service, url), the first argument must be a Storage instance.")}else return mR(t,e)}function X1(t,e){const n=e==null?void 0:e[tR];return n==null?null:rn.makeFromBucketSpec(n,t)}function TV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Cy(i,t.app.options.projectId))}class x_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=eR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_4,this._maxUploadRetryTime=w4,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=X1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=X1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new L4(nR());{const o=q4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const J1="@firebase/storage",Z1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="storage";function yR(t,e,n){return t=ce(t),_V(t,e,n)}function vR(t){return t=ce(t),wV(t)}function Ah(t,e){return t=ce(t),IV(t,e)}function kV(t=rd(),e){t=ce(t);const r=Vl(t,gR).getImmediate({identifier:e}),i=Ey("storage");return i&&xV(r,...i),r}function xV(t,e,n,r={}){TV(t,e,n,r)}function RV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new x_(n,r,i,e,ps)}function NV(){pi(new Er(gR,RV,"PUBLIC").setMultipleInstances(!0)),wn(J1,Z1,""),wn(J1,Z1,"esm2017")}NV();const AV={apiKey:"AIzaSyCYzMUQ0hrULQHe9nXjQHY_bj0_AghdGQ0",authDomain:"reactmessanger-e9292.firebaseapp.com",databaseURL:"https://reactmessanger-e9292-default-rtdb.europe-west1.firebasedatabase.app",projectId:"reactmessanger-e9292",storageBucket:"reactmessanger-e9292.appspot.com",messagingSenderId:"192549448953",appId:"1:192549448953:web:f7118478f706635a6e4628"},tf=zS(AV),bh=kV(tf),ut=n4(tf),li=m$(tf),nf=eL(tf),ws=C.createContext(),bV=({children:t,setIsLoading:e})=>{const[n,r]=C.useState(null);return C.useEffect(()=>UD(nf,s=>{r(s),e(!1)}),[]),w(ws.Provider,{value:{currentUser:n},children:t})};function PV(){return w("div",{children:"Preloader"})}/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bl.apply(this,arguments)}var qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qr||(qr={}));const eE="popstate";function DV(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Es(i.location.hash.substr(1));return yg("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Ph(s))}function r(i,s){rf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return LV(e,n,r,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OV(){return Math.random().toString(36).substr(2,8)}function tE(t,e){return{usr:t.state,key:t.key,idx:e}}function yg(t,e,n,r){return n===void 0&&(n=null),bl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Es(e):e,{state:n,key:e&&e.key||r||OV()})}function Ph(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LV(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(bl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=qr.Pop;let _=c(),g=_==null?null:_-u;u=_,l&&l({action:a,location:y.location,delta:g})}function d(_,g){a=qr.Push;let f=yg(y.location,_,g);n&&n(f,_),u=c()+1;let v=tE(f,u),E=y.createHref(f);try{o.pushState(v,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(_,g){a=qr.Replace;let f=yg(y.location,_,g);n&&n(f,_),u=c();let v=tE(f,u),E=y.createHref(f);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function m(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:Ph(_);return Qe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(eE,h),l=_,()=>{i.removeEventListener(eE,h),l=null}},createHref(_){return e(i,_)},createURL:m,encodeLocation(_){let g=m(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(_){return o.go(_)}};return y}var nE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nE||(nE={}));function MV(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Es(e):e,i=R_(r.pathname||"/",n);if(i==null)return null;let s=_R(t);$V(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qV(s[a],QV(i));return o}function _R(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ui([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_R(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:WV(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of wR(s.path))i(s,o,l)}),e}function wR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wR(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function $V(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HV(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FV=/^:\w+$/,UV=3,VV=2,BV=1,zV=10,jV=-2,rE=t=>t==="*";function WV(t,e){let n=t.split("/"),r=n.length;return n.some(rE)&&(r+=jV),e&&(r+=VV),n.filter(i=>!rE(i)).reduce((i,s)=>i+(FV.test(s)?UV:s===""?BV:zV),r)}function HV(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qV(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=GV({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ui([i,c.pathname]),pathnameBase:ZV(ui([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ui([i,c.pathnameBase]))}return s}function GV(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KV(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=YV(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function KV(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QV(t){try{return decodeURI(t)}catch(e){return rf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YV(t,e){try{return decodeURIComponent(t)}catch(n){return rf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function R_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XV(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Es(t):t;return{pathname:n?n.startsWith("/")?n:JV(n,e):e,search:eB(r),hash:tB(i)}}function JV(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ER(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function CR(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Es(t):(i=bl({},t),Qe(!i.pathname||!i.pathname.includes("?"),wp("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),wp("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),wp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=XV(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ui=t=>t.join("/").replace(/\/\/+/g,"/"),ZV=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eB=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tB=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nB(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rB(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const iB=typeof Object.is=="function"?Object.is:rB,{useState:sB,useEffect:oB,useLayoutEffect:aB,useDebugValue:lB}=kp;function uB(t,e,n){const r=e(),[{inst:i},s]=sB({inst:{value:r,getSnapshot:e}});return aB(()=>{i.value=r,i.getSnapshot=e,Ep(i)&&s({inst:i})},[t,r,e]),oB(()=>(Ep(i)&&s({inst:i}),t(()=>{Ep(i)&&s({inst:i})})),[t]),lB(r),r}function Ep(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!iB(n,r)}catch{return!0}}function cB(t,e,n){return e()}const hB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dB=!hB,fB=dB?cB:uB;"useSyncExternalStore"in kp&&(t=>t.useSyncExternalStore)(kp);const SR=C.createContext(null),sf=C.createContext(null),Qo=C.createContext(null),of=C.createContext(null),bi=C.createContext({outlet:null,matches:[]}),IR=C.createContext(null);function vg(){return vg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vg.apply(this,arguments)}function pB(t,e){let{relative:n}=e===void 0?{}:e;Yo()||Qe(!1);let{basename:r,navigator:i}=C.useContext(Qo),{hash:s,pathname:o,search:a}=N_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ui([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yo(){return C.useContext(of)!=null}function yu(){return Yo()||Qe(!1),C.useContext(of).location}function af(){Yo()||Qe(!1);let{basename:t,navigator:e}=C.useContext(Qo),{matches:n}=C.useContext(bi),{pathname:r}=yu(),i=JSON.stringify(ER(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=CR(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ui([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const mB=C.createContext(null);function gB(t){let e=C.useContext(bi).outlet;return e&&C.createElement(mB.Provider,{value:t},e)}function yB(){let{matches:t}=C.useContext(bi),e=t[t.length-1];return e?e.params:{}}function N_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(bi),{pathname:i}=yu(),s=JSON.stringify(ER(r).map(o=>o.pathnameBase));return C.useMemo(()=>CR(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vB(t,e){Yo()||Qe(!1);let{navigator:n}=C.useContext(Qo),r=C.useContext(sf),{matches:i}=C.useContext(bi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=yu(),u;if(e){var c;let y=typeof e=="string"?Es(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Qe(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=MV(t,{pathname:d}),m=CB(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ui([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:ui([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&m?C.createElement(of.Provider,{value:{location:vg({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:qr.Pop}},m):m}function _B(){let t=kB(),e=nB(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class wB extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(bi.Provider,{value:this.props.routeContext},C.createElement(IR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EB(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(SR);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(bi.Provider,{value:e},r)}function CB(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Qe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=C.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=C.createElement(_B,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=C.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),C.createElement(EB,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?C.createElement(wB,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var iE;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(iE||(iE={}));var Dh;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Dh||(Dh={}));function SB(t){let e=C.useContext(sf);return e||Qe(!1),e}function IB(t){let e=C.useContext(bi);return e||Qe(!1),e}function TB(t){let e=IB(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function kB(){var t;let e=C.useContext(IR),n=SB(Dh.UseRouteError),r=TB(Dh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TR(t){let{to:e,replace:n,state:r,relative:i}=t;Yo()||Qe(!1);let s=C.useContext(sf),o=af();return C.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function A_(t){return gB(t.context)}function rr(t){Qe(!1)}function xB(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qr.Pop,navigator:s,static:o=!1}=t;Yo()&&Qe(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Es(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,m=C.useMemo(()=>{let y=R_(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return m==null?null:C.createElement(Qo.Provider,{value:l},C.createElement(of.Provider,{children:n,value:m}))}function RB(t){let{children:e,location:n}=t,r=C.useContext(SR),i=r&&!e?r.router.routes:_g(e);return vB(i,n)}var sE;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(sE||(sE={}));new Promise(()=>{});function _g(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,_g(r.props.children,s));return}r.type!==rr&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_g(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oh(){return Oh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oh.apply(this,arguments)}function kR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function NB(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AB(t,e){return t.button===0&&(!e||e==="_self")&&!NB(t)}const bB=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],PB=["aria-current","caseSensitive","className","end","style","to","children"];function DB(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=DV({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(xB,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const OB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LB=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b_=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=kR(e,bB),{basename:d}=C.useContext(Qo),p,m=!1;if(typeof u=="string"&&LB.test(u)&&(p=u,OB)){let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=R_(v.pathname,d);v.origin===f.origin&&E!=null?u=E+v.search+v.hash:m=!0}let y=pB(u,{relative:i}),_=MB(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||_(f)}return C.createElement("a",Oh({},h,{href:p||y,onClick:m||s?r:g,ref:n,target:l}))}),sr=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=kR(e,PB),h=N_(l,{relative:c.relative}),d=yu(),p=C.useContext(sf),{navigator:m}=C.useContext(Qo),y=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,_=d.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(_=_.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let f=_===y||!o&&_.startsWith(y)&&_.charAt(y.length)==="/",v=g!=null&&(g===y||!o&&g.startsWith(y)&&g.charAt(y.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:v}):T=[s,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:f,isPending:v}):a;return C.createElement(b_,Oh({},c,{"aria-current":E,className:T,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:f,isPending:v}):u)});var oE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(oE||(oE={}));var aE;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(aE||(aE={}));function MB(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=af(),l=yu(),u=N_(t,{relative:o});return C.useCallback(c=>{if(AB(c,n)){c.preventDefault();let h=r!==void 0?r:Ph(l)===Ph(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const $B=()=>w("div",{className:"Home",children:"Ну кто прочитал тот: Грустный Ершковый Йод"});var Pl={},FB={get exports(){return Pl},set exports(t){Pl=t}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,P_=dt?Symbol.for("react.element"):60103,D_=dt?Symbol.for("react.portal"):60106,lf=dt?Symbol.for("react.fragment"):60107,uf=dt?Symbol.for("react.strict_mode"):60108,cf=dt?Symbol.for("react.profiler"):60114,hf=dt?Symbol.for("react.provider"):60109,df=dt?Symbol.for("react.context"):60110,O_=dt?Symbol.for("react.async_mode"):60111,ff=dt?Symbol.for("react.concurrent_mode"):60111,pf=dt?Symbol.for("react.forward_ref"):60112,mf=dt?Symbol.for("react.suspense"):60113,UB=dt?Symbol.for("react.suspense_list"):60120,gf=dt?Symbol.for("react.memo"):60115,yf=dt?Symbol.for("react.lazy"):60116,VB=dt?Symbol.for("react.block"):60121,BB=dt?Symbol.for("react.fundamental"):60117,zB=dt?Symbol.for("react.responder"):60118,jB=dt?Symbol.for("react.scope"):60119;function fn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case P_:switch(t=t.type,t){case O_:case ff:case lf:case cf:case uf:case mf:return t;default:switch(t=t&&t.$$typeof,t){case df:case pf:case yf:case gf:case hf:return t;default:return e}}case D_:return e}}}function xR(t){return fn(t)===ff}Ee.AsyncMode=O_;Ee.ConcurrentMode=ff;Ee.ContextConsumer=df;Ee.ContextProvider=hf;Ee.Element=P_;Ee.ForwardRef=pf;Ee.Fragment=lf;Ee.Lazy=yf;Ee.Memo=gf;Ee.Portal=D_;Ee.Profiler=cf;Ee.StrictMode=uf;Ee.Suspense=mf;Ee.isAsyncMode=function(t){return xR(t)||fn(t)===O_};Ee.isConcurrentMode=xR;Ee.isContextConsumer=function(t){return fn(t)===df};Ee.isContextProvider=function(t){return fn(t)===hf};Ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===P_};Ee.isForwardRef=function(t){return fn(t)===pf};Ee.isFragment=function(t){return fn(t)===lf};Ee.isLazy=function(t){return fn(t)===yf};Ee.isMemo=function(t){return fn(t)===gf};Ee.isPortal=function(t){return fn(t)===D_};Ee.isProfiler=function(t){return fn(t)===cf};Ee.isStrictMode=function(t){return fn(t)===uf};Ee.isSuspense=function(t){return fn(t)===mf};Ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===lf||t===ff||t===cf||t===uf||t===mf||t===UB||typeof t=="object"&&t!==null&&(t.$$typeof===yf||t.$$typeof===gf||t.$$typeof===hf||t.$$typeof===df||t.$$typeof===pf||t.$$typeof===BB||t.$$typeof===zB||t.$$typeof===jB||t.$$typeof===VB)};Ee.typeOf=fn;(function(t){t.exports=Ee})(FB);function WB(t){function e(O,$,F,Y,S){for(var le=0,P=0,$e=0,me=0,ve,te,pt=0,qt=0,de,St=de=ve=0,ge=0,mt=0,Xo=0,gt=0,_u=F.length,Jo=_u-1,In,J="",je="",vf="",_f="",Nr;ge<_u;){if(te=F.charCodeAt(ge),ge===Jo&&P+me+$e+le!==0&&(P!==0&&(te=P===47?10:47),me=$e=le=0,_u++,Jo++),P+me+$e+le===0){if(ge===Jo&&(0<mt&&(J=J.replace(d,"")),0<J.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:J+=F.charAt(ge)}te=59}switch(te){case 123:for(J=J.trim(),ve=J.charCodeAt(0),de=1,gt=++ge;ge<_u;){switch(te=F.charCodeAt(ge)){case 123:de++;break;case 125:de--;break;case 47:switch(te=F.charCodeAt(ge+1)){case 42:case 47:e:{for(St=ge+1;St<Jo;++St)switch(F.charCodeAt(St)){case 47:if(te===42&&F.charCodeAt(St-1)===42&&ge+2!==St){ge=St+1;break e}break;case 10:if(te===47){ge=St+1;break e}}ge=St}}break;case 91:te++;case 40:te++;case 34:case 39:for(;ge++<Jo&&F.charCodeAt(ge)!==te;);}if(de===0)break;ge++}switch(de=F.substring(gt,ge),ve===0&&(ve=(J=J.replace(h,"").trim()).charCodeAt(0)),ve){case 64:switch(0<mt&&(J=J.replace(d,"")),te=J.charCodeAt(1),te){case 100:case 109:case 115:case 45:mt=$;break;default:mt=tr}if(de=e($,mt,de,te,S+1),gt=de.length,0<b&&(mt=n(tr,J,Xo),Nr=a(3,de,mt,$,ft,Ye,gt,te,S,Y),J=mt.join(""),Nr!==void 0&&(gt=(de=Nr.trim()).length)===0&&(te=0,de="")),0<gt)switch(te){case 115:J=J.replace(A,o);case 100:case 109:case 45:de=J+"{"+de+"}";break;case 107:J=J.replace(f,"$1 $2"),de=J+"{"+de+"}",de=Ct===1||Ct===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=J+de,Y===112&&(de=(je+=de,""))}else de="";break;default:de=e($,n($,J,Xo),de,Y,S+1)}vf+=de,de=Xo=mt=St=ve=0,J="",te=F.charCodeAt(++ge);break;case 125:case 59:if(J=(0<mt?J.replace(d,""):J).trim(),1<(gt=J.length))switch(St===0&&(ve=J.charCodeAt(0),ve===45||96<ve&&123>ve)&&(gt=(J=J.replace(" ",":")).length),0<b&&(Nr=a(1,J,$,O,ft,Ye,je.length,Y,S,Y))!==void 0&&(gt=(J=Nr.trim()).length)===0&&(J="\0\0"),ve=J.charCodeAt(0),te=J.charCodeAt(1),ve){case 0:break;case 64:if(te===105||te===99){_f+=J+F.charAt(ge);break}default:J.charCodeAt(gt-1)!==58&&(je+=i(J,ve,te,J.charCodeAt(2)))}Xo=mt=St=ve=0,J="",te=F.charCodeAt(++ge)}}switch(te){case 13:case 10:P===47?P=0:1+ve===0&&Y!==107&&0<J.length&&(mt=1,J+="\0"),0<b*Q&&a(0,J,$,O,ft,Ye,je.length,Y,S,Y),Ye=1,ft++;break;case 59:case 125:if(P+me+$e+le===0){Ye++;break}default:switch(Ye++,In=F.charAt(ge),te){case 9:case 32:if(me+le+P===0)switch(pt){case 44:case 58:case 9:case 32:In="";break;default:te!==32&&(In=" ")}break;case 0:In="\\0";break;case 12:In="\\f";break;case 11:In="\\v";break;case 38:me+P+le===0&&(mt=Xo=1,In="\f"+In);break;case 108:if(me+P+le+en===0&&0<St)switch(ge-St){case 2:pt===112&&F.charCodeAt(ge-3)===58&&(en=pt);case 8:qt===111&&(en=qt)}break;case 58:me+P+le===0&&(St=ge);break;case 44:P+$e+me+le===0&&(mt=1,In+="\r");break;case 34:case 39:P===0&&(me=me===te?0:me===0?te:me);break;case 91:me+P+$e===0&&le++;break;case 93:me+P+$e===0&&le--;break;case 41:me+P+le===0&&$e--;break;case 40:if(me+P+le===0){if(ve===0)switch(2*pt+3*qt){case 533:break;default:ve=1}$e++}break;case 64:P+$e+me+le+St+de===0&&(de=1);break;case 42:case 47:if(!(0<me+le+$e))switch(P){case 0:switch(2*te+3*F.charCodeAt(ge+1)){case 235:P=47;break;case 220:gt=ge,P=42}break;case 42:te===47&&pt===42&&gt+2!==ge&&(F.charCodeAt(gt+2)===33&&(je+=F.substring(gt,ge+1)),In="",P=0)}}P===0&&(J+=In)}qt=pt,pt=te,ge++}if(gt=je.length,0<gt){if(mt=$,0<b&&(Nr=a(2,je,mt,O,ft,Ye,gt,Y,S,Y),Nr!==void 0&&(je=Nr).length===0))return _f+je+vf;if(je=mt.join(",")+"{"+je+"}",Ct*en!==0){switch(Ct!==2||s(je,2)||(en=0),en){case 111:je=je.replace(E,":-moz-$1")+je;break;case 112:je=je.replace(v,"::-webkit-input-$1")+je.replace(v,"::-moz-$1")+je.replace(v,":-ms-input-$1")+je}en=0}}return _f+je+vf}function n(O,$,F){var Y=$.trim().split(_);$=Y;var S=Y.length,le=O.length;switch(le){case 0:case 1:var P=0;for(O=le===0?"":O[0]+" ";P<S;++P)$[P]=r(O,$[P],F).trim();break;default:var $e=P=0;for($=[];P<S;++P)for(var me=0;me<le;++me)$[$e++]=r(O[me]+" ",Y[P],F).trim()}return $}function r(O,$,F){var Y=$.charCodeAt(0);switch(33>Y&&(Y=($=$.trim()).charCodeAt(0)),Y){case 38:return $.replace(g,"$1"+O.trim());case 58:return O.trim()+$.replace(g,"$1"+O.trim());default:if(0<1*F&&0<$.indexOf("\f"))return $.replace(g,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+$}function i(O,$,F,Y){var S=O+";",le=2*$+3*F+4*Y;if(le===944){O=S.indexOf(":",9)+1;var P=S.substring(O,S.length-1).trim();return P=S.substring(0,O).trim()+P+";",Ct===1||Ct===2&&s(P,1)?"-webkit-"+P+P:P}if(Ct===0||Ct===2&&!s(S,1))return S;switch(le){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(nt,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return P=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+S+"-ms-flex-pack"+P+S;case 1005:return m.test(S)?S.replace(p,":-webkit-")+S.replace(p,":-moz-")+S:S;case 1e3:switch(P=S.substring(13).trim(),$=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt($)){case 226:P=S.replace(T,"tb");break;case 232:P=S.replace(T,"tb-rl");break;case 220:P=S.replace(T,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+P+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch($=(S=O).length-10,P=(S.charCodeAt($)===33?S.substring(0,$):S).substring(O.indexOf(":",7)+1).trim(),le=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:S=S.replace(P,"-webkit-"+P)+";"+S;break;case 207:case 102:S=S.replace(P,"-webkit-"+(102<le?"inline-":"")+"box")+";"+S.replace(P,"-webkit-"+P)+";"+S.replace(P,"-ms-"+P+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return P=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+P+"-ms-flex-"+P+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(D,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(D,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(G.test(O)===!0)return(P=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),$,F,Y).replace(":fill-available",":stretch"):S.replace(P,"-webkit-"+P)+S.replace(P,"-moz-"+P.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,F+Y===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+S}return S}function s(O,$){var F=O.indexOf($===1?":":"{"),Y=O.substring(0,$!==3?F:10);return F=O.substring(F+1,O.length-1),H($!==2?Y:Y.replace(se,"$1"),F,$)}function o(O,$){var F=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return F!==$+";"?F.replace(M," or ($1)").substring(4):"("+$+")"}function a(O,$,F,Y,S,le,P,$e,me,ve){for(var te=0,pt=$,qt;te<b;++te)switch(qt=$t[te].call(c,O,pt,F,Y,S,le,P,$e,me,ve)){case void 0:case!1:case!0:case null:break;default:pt=qt}if(pt!==$)return pt}function l(O){switch(O){case void 0:case null:b=$t.length=0;break;default:if(typeof O=="function")$t[b++]=O;else if(typeof O=="object")for(var $=0,F=O.length;$<F;++$)l(O[$]);else Q=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(H=null,O?typeof O!="function"?Ct=1:(Ct=2,H=O):Ct=0),u}function c(O,$){var F=O;if(33>F.charCodeAt(0)&&(F=F.trim()),Ce=F,F=[Ce],0<b){var Y=a(-1,$,F,F,ft,Ye,0,0,0,0);Y!==void 0&&typeof Y=="string"&&($=Y)}var S=e(tr,F,$,0,0);return 0<b&&(Y=a(-2,S,F,F,ft,Ye,S.length,0,0,0),Y!==void 0&&(S=Y)),Ce="",en=0,Ye=ft=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,_=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,D=/-self|flex-/g,se=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,nt=/([^-])(image-set\()/,Ye=1,ft=1,en=0,Ct=1,tr=[],$t=[],b=0,H=null,Q=0,Ce="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var HB={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qB(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var GB=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lE=qB(function(t){return GB.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),L_=Pl,KB={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QB={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},RR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M_={};M_[L_.ForwardRef]=YB;M_[L_.Memo]=RR;function uE(t){return L_.isMemo(t)?RR:M_[t.$$typeof]||KB}var XB=Object.defineProperty,JB=Object.getOwnPropertyNames,cE=Object.getOwnPropertySymbols,ZB=Object.getOwnPropertyDescriptor,ez=Object.getPrototypeOf,hE=Object.prototype;function NR(t,e,n){if(typeof e!="string"){if(hE){var r=ez(e);r&&r!==hE&&NR(t,r,n)}var i=JB(e);cE&&(i=i.concat(cE(e)));for(var s=uE(t),o=uE(e),a=0;a<i.length;++a){var l=i[a];if(!QB[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=ZB(e,l);try{XB(t,l,u)}catch{}}}}return t}var tz=NR;function fr(){return(fr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var dE=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},wg=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Pl.typeOf(t)},Lh=Object.freeze([]),ci=Object.freeze({});function Dl(t){return typeof t=="function"}function fE(t){return t.displayName||t.name||"Component"}function $_(t){return t&&typeof t.styledComponentId=="string"}var Ao=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",F_=typeof window<"u"&&"HTMLElement"in window,nz=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function vu(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var rz=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&vu(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),vc=new Map,Mh=new Map,ja=1,Yu=function(t){if(vc.has(t))return vc.get(t);for(;Mh.has(ja);)ja++;var e=ja++;return vc.set(t,e),Mh.set(e,t),e},iz=function(t){return Mh.get(t)},sz=function(t,e){e>=ja&&(ja=e+1),vc.set(t,e),Mh.set(e,t)},oz="style["+Ao+'][data-styled-version="5.3.9"]',az=new RegExp("^"+Ao+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lz=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uz=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(az);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(sz(u,l),lz(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},cz=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},AR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ao))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ao,"active"),r.setAttribute("data-styled-version","5.3.9");var o=cz();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},hz=function(){function t(n){var r=this.element=AR(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}vu(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),dz=function(){function t(n){var r=this.element=AR(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),fz=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),pE=F_,pz={isServer:!F_,useCSSOMInjection:!nz},bR=function(){function t(n,r,i){n===void 0&&(n=ci),r===void 0&&(r={}),this.options=fr({},pz,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&F_&&pE&&(pE=!1,function(s){for(var o=document.querySelectorAll(oz),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ao)!=="active"&&(uz(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Yu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(fr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new fz(o):s?new hz(o):new dz(o),new rz(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Yu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Yu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Yu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=iz(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ao+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),mz=/(a)(d)/gi,mE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Eg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=mE(e%52)+n;return(mE(e%52)+n).replace(mz,"$1-$2")}var Ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},PR=function(t){return Ws(5381,t)};function gz(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Dl(n)&&!$_(n))return!1}return!0}var yz=PR("5.3.9"),vz=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gz(e),this.componentId=n,this.baseHash=Ws(yz,n),this.baseStyle=r,bR.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=bo(this.rules,e,n,r).join(""),a=Eg(Ws(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ws(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var m=bo(p,e,n,r),y=Array.isArray(m)?m.join(""):m;c=Ws(c,y+d),h+=y}}if(h){var _=Eg(c>>>0);if(!n.hasNameForId(i,_)){var g=r(h,"."+_,void 0,i);n.insertRules(i,_,g)}s.push(_)}}return s.join(" ")},t}(),_z=/^\s*\/\/.*$/gm,wz=[":","[",".","#"];function Ez(t){var e,n,r,i,s=t===void 0?ci:t,o=s.options,a=o===void 0?ci:o,l=s.plugins,u=l===void 0?Lh:l,c=new WB(a),h=[],d=function(y){function _(g){if(g)try{y(g+"}")}catch{}}return function(g,f,v,E,T,A,M,D,se,G){switch(g){case 1:if(se===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(D===0)return f+"/*|*/";break;case 3:switch(D){case 102:case 112:return y(v[0]+f),"";default:return f+(G===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(y){h.push(y)}),p=function(y,_,g){return _===0&&wz.indexOf(g[n.length])!==-1||g.match(i)?y:"."+e};function m(y,_,g,f){f===void 0&&(f="&");var v=y.replace(_z,""),E=_&&g?g+" "+_+" { "+v+" }":v;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!_?"":_,E)}return c.use([].concat(u,[function(y,_,g){y===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},d,function(y){if(y===-2){var _=h;return h=[],_}}])),m.hash=u.length?u.reduce(function(y,_){return _.name||vu(15),Ws(y,_.name)},5381).toString():"",m}var DR=vn.createContext();DR.Consumer;var OR=vn.createContext(),Cz=(OR.Consumer,new bR),Cg=Ez();function Sz(){return C.useContext(DR)||Cz}function Iz(){return C.useContext(OR)||Cg}var Tz=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Cg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return vu(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Cg),this.name+e.hash},t}(),kz=/([A-Z])/,xz=/([A-Z])/g,Rz=/^ms-/,Nz=function(t){return"-"+t.toLowerCase()};function gE(t){return kz.test(t)?t.replace(xz,Nz).replace(Rz,"-ms-"):t}var yE=function(t){return t==null||t===!1||t===""};function bo(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=bo(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(yE(t))return"";if($_(t))return"."+t.styledComponentId;if(Dl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return bo(l,e,n,r)}var u;return t instanceof Tz?n?(t.inject(n,r),t.getName(r)):t:wg(t)?function c(h,d){var p,m,y=[];for(var _ in h)h.hasOwnProperty(_)&&!yE(h[_])&&(Array.isArray(h[_])&&h[_].isCss||Dl(h[_])?y.push(gE(_)+":",h[_],";"):wg(h[_])?y.push.apply(y,c(h[_],_)):y.push(gE(_)+": "+(p=_,(m=h[_])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in HB?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var vE=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function LR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Dl(t)||wg(t)?vE(bo(dE(Lh,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:vE(bo(dE(t,n)))}var Az=function(t,e,n){return n===void 0&&(n=ci),t.theme!==n.theme&&t.theme||e||n.theme},bz=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pz=/(^-|-$)/g;function Cp(t){return t.replace(bz,"-").replace(Pz,"")}var Dz=function(t){return Eg(PR(t)>>>0)};function Xu(t){return typeof t=="string"&&!0}var Sg=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},Oz=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function Lz(t,e,n){var r=t[n];Sg(e)&&Sg(r)?MR(r,e):t[n]=e}function MR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Sg(o))for(var a in o)Oz(a)&&Lz(t,o[a],a)}return t}var $R=vn.createContext();$R.Consumer;var Sp={};function FR(t,e,n){var r=$_(t),i=!Xu(t),s=e.attrs,o=s===void 0?Lh:s,a=e.componentId,l=a===void 0?function(f,v){var E=typeof f!="string"?"sc":Cp(f);Sp[E]=(Sp[E]||0)+1;var T=E+"-"+Dz("5.3.9"+E+Sp[E]);return v?v+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Xu(f)?"styled."+f:"Styled("+fE(f)+")"}(t):u,h=e.displayName&&e.componentId?Cp(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,E){return t.shouldForwardProp(f,v,E)&&e.shouldForwardProp(f,v,E)}:t.shouldForwardProp);var m,y=new vz(n,h,r?t.componentStyle:void 0),_=y.isStatic&&o.length===0,g=function(f,v){return function(E,T,A,M){var D=E.attrs,se=E.componentStyle,G=E.defaultProps,nt=E.foldedComponentIds,Ye=E.shouldForwardProp,ft=E.styledComponentId,en=E.target,Ct=function(Y,S,le){Y===void 0&&(Y=ci);var P=fr({},S,{theme:Y}),$e={};return le.forEach(function(me){var ve,te,pt,qt=me;for(ve in Dl(qt)&&(qt=qt(P)),qt)P[ve]=$e[ve]=ve==="className"?(te=$e[ve],pt=qt[ve],te&&pt?te+" "+pt:te||pt):qt[ve]}),[P,$e]}(Az(T,C.useContext($R),G)||ci,T,D),tr=Ct[0],$t=Ct[1],b=function(Y,S,le,P){var $e=Sz(),me=Iz(),ve=S?Y.generateAndInjectStyles(ci,$e,me):Y.generateAndInjectStyles(le,$e,me);return ve}(se,M,tr),H=A,Q=$t.$as||T.$as||$t.as||T.as||en,Ce=Xu(Q),O=$t!==T?fr({},T,{},$t):T,$={};for(var F in O)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?$.as=O[F]:(Ye?Ye(F,lE,Q):!Ce||lE(F))&&($[F]=O[F]));return T.style&&$t.style!==T.style&&($.style=fr({},T.style,{},$t.style)),$.className=Array.prototype.concat(nt,ft,b!==ft?b:null,T.className,$t.className).filter(Boolean).join(" "),$.ref=H,C.createElement(Q,$)}(m,f,v,_)};return g.displayName=c,(m=vn.forwardRef(g)).attrs=d,m.componentStyle=y,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Lh,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(f){var v=e.componentId,E=function(A,M){if(A==null)return{};var D,se,G={},nt=Object.keys(A);for(se=0;se<nt.length;se++)D=nt[se],M.indexOf(D)>=0||(G[D]=A[D]);return G}(e,["componentId"]),T=v&&v+"-"+(Xu(f)?f:Cp(fE(f)));return FR(f,fr({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?MR({},t.defaultProps,f):f}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&tz(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Ig=function(t){return function e(n,r,i){if(i===void 0&&(i=ci),!Pl.isValidElementType(r))return vu(1,String(r));var s=function(){return n(r,i,LR.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,fr({},i,{},o))},s.attrs=function(o){return e(n,r,fr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(FR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Ig[t]=Ig(t)});const k=Ig;var UR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_E=vn.createContext&&vn.createContext(UR),hi=globalThis&&globalThis.__assign||function(){return hi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},hi.apply(this,arguments)},Mz=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function VR(t){return t&&t.map(function(e,n){return vn.createElement(e.tag,hi({key:n},e.attr),VR(e.child))})}function Cs(t){return function(e){return vn.createElement($z,hi({attr:hi({},t.attr)},e),VR(t.child))}}function $z(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Mz(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),vn.createElement("svg",hi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:hi(hi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&vn.createElement("title",null,s),t.children)};return _E!==void 0?vn.createElement(_E.Consumer,null,function(n){return e(n)}):e(UR)}function Fz(t){return Cs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Bell_On"},child:[{tag:"path",attr:{d:"M18.79,15.34a2.087,2.087,0,0,0-1.26-.61V10.19a5.5,5.5,0,0,0-1.62-3.91,5.826,5.826,0,0,0-2.15-1.33V4.89a1.8,1.8,0,0,0-1.61-1.81,1.749,1.749,0,0,0-1.91,1.75v.12a5.547,5.547,0,0,0-3.77,5.24v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.121,2.121,0,0,0,2.12-2.12v-.53A2.1,2.1,0,0,0,18.79,15.34Zm-.38,2.03a1.118,1.118,0,0,1-1.12,1.12H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19a4.555,4.555,0,0,1,3.24-4.34.729.729,0,0,0,.53-.71V4.83a.735.735,0,0,1,.25-.56.744.744,0,0,1,.51-.2h.07a.807.807,0,0,1,.69.82v.25a.729.729,0,0,0,.53.71A4.668,4.668,0,0,1,15.2,6.99a4.468,4.468,0,0,1,1.33,3.2v4.76a.8.8,0,0,0,.22.55.773.773,0,0,0,.54.22,1.127,1.127,0,0,1,1.12,1.12Z"}}]}]})(t)}function Uz(t){return Cs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Login"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"}}]}]}]})(t)}function Vz(t){return Cs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"}}]}]}]})(t)}function BR(t){return Cs({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(t)}function Bz(t){return Cs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Settings"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"}},{tag:"path",attr:{d:"M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"}}]}]}]})(t)}const zz=({currentUser:t})=>w(jz,{children:j(Wz,{children:[w(Hz,{children:"GayProject"}),w(qz,{children:j(Gz,{children:[w(Ts,{children:w(sr,{to:"/",children:"Home"})}),w(Ts,{children:w(sr,{to:"/dashboard",children:"Dashboard"})}),w(Ts,{children:w(sr,{to:"/projects",children:"Projects"})}),w(Ts,{children:w(sr,{to:"/tasks",children:"Tasks"})}),w(Ts,{children:w(sr,{to:"/bugtracker",children:"Bugtracker"})}),w(Ts,{children:w(sr,{className:t?"online":null,to:"/messenger",children:"Messenger"})})]})}),j(Kz,{children:[w(fa,{children:w(BR,{size:25})}),w(fa,{children:w(Bz,{size:25})}),w(fa,{children:w(Fz,{size:25})}),t&&w(fa,{children:w("img",{src:t.photoURL,alt:"RELOAD?"})}),t&&w(fa,{onClick:()=>VD(nf),children:w(Vz,{size:40})}),!t&&w(sr,{to:"/login",children:w(Uz,{size:40})})]})]})}),jz=k.header`
  background-color: var(--colors-bg);
`,Wz=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100px;
  justify-content: space-between;
  border-bottom: 2px solid var(--colors-lines-bg);
  margin-bottom: 10px;
`,Hz=k.div`
  padding: 20px 30px;
  font-size: 24px;
`,qz=k.nav`
  flex: 1;
`,Gz=k.ul`
  display: flex;
  flex-direction: row;
`,Ts=k.li`
  font-size: 16px;
  font-weight: var(--fw-normal);
  a {
    padding: 10px;
    margin-right: 10px;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 10px;
    &.active {
      background-color: var(--colors-ui-style);
      color: var(--colors-text-style);
    }
    &:hover {
      background-color: var(--colors-ui-style);
      color: var(--colors-text-style);
    }
  }
  .online::before {
    content: "";
    position: relative;
    top: -2px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--colors-status-online);
    margin-right: 8px;
  }
`,Kz=k.div`
  display: flex;
  align-items: center;
  float: right;
  align-items: center;
  padding: 20px 30px;
`,fa=k.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 30px;
  }
`,Qz=()=>{const{currentUser:t}=C.useContext(ws);return j(Yz,{children:[w(zz,{currentUser:t}),w(Xz,{children:w(A_,{})})]})},Yz=k.div`
  display: flex;
  flex-direction: column;
  min-height: 99vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`,Xz=k.main`
  flex-grow: 1;
`,Jz=async(t,e)=>await DD(nf,t,e),Zz=async(t,e,n)=>e?(await yR(Ah(bh,t),e),await vR(Ah(bh,t))):`https://ui-avatars.com/api/?background=random&name=${n}`,e5=async(t,{displayName:e,photoURL:n})=>{await MD(t,{displayName:e,photoURL:n})},t5=async(t,e)=>{await ef(Ci(ut,`users/${t}`),e)},n5=async(t,e)=>await OD(nf,t,e),r5=async()=>{const t=an(ut,"users");return+(await Ko(t)).size},i5=()=>{const t=af(),e=C.useRef(),n=C.useRef();return j(s5,{children:[w(wE,{type:"email",ref:e,placeholder:"email"}),w(wE,{type:"password",ref:n,placeholder:"password"}),w(o5,{onClick:async()=>{const i=e.current.value.trim(),s=n.current.value.trim();await n5(i,s),t("/")},children:"Sign in"})]})},s5=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,wE=k.input`
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,o5=k.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`,a5=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`,l5=k.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`,u5=k(b_)`
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`,c5=()=>j(a5,{children:[w(l5,{children:"Login"}),w(i5,{}),w(u5,{to:"/register",children:"or Register"})]}),h5=()=>{const t=af(),[e,n]=C.useState({displayName:"",email:"",password:"",file:void 0}),r=async()=>{const{displayName:i,email:s,password:o,file:a}=e;if(!i||!s||!o){alert("Какой-то пункт пустой");return}const l=await Jz(s,o),u=await Zz(s,a,i),c=await r5();await e5(l.user,{displayName:i,photoURL:u}),await t5(l.user.uid,{displayName:i,email:s,photoURL:u,uid:l.user.uid,userId:c+1,displayNameLower:i.toLowerCase()}),n({displayName:"",email:"",password:"",file:void 0}),t("/")};return j(d5,{children:[w(Ip,{type:"text",placeholder:"Display name",value:e.displayName,onChange:i=>n({...e,displayName:i.target.value})}),w(Ip,{type:"email",placeholder:"Email",value:e.email,onChange:i=>n({...e,email:i.target.value})}),w(Ip,{type:"password",placeholder:"Password",value:e.password,onChange:i=>n({...e,password:i.target.value})}),w(f5,{htmlFor:"file",children:w("span",{children:"Choose a photo"})}),w("input",{style:{display:"none"},type:"file",id:"file",onChange:i=>n({...e,file:i.target.files[0]})}),w(p5,{onClick:r,type:"submit",children:"Sign up"})]})},d5=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`,Ip=k.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 20rem;
  font-size: 1rem;
`,f5=k.label`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
  font-size: 1rem;
`,p5=k.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: #0077ff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005ae6;
  }
`,m5=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`,g5=k.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`,y5=k(b_)`
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`,v5=()=>j(m5,{children:[w(g5,{children:"Register"}),w(h5,{}),w(y5,{to:"/login",children:"or Login"})]}),_5=()=>w("div",{children:"DashboardPage"}),w5=()=>w("div",{children:"ProjectsPage"}),E5=()=>w("div",{children:"TasksPage"}),C5=()=>w("div",{children:"ReportingPage"}),U_=C.createContext(),S5=({children:t})=>{const[e,n]=C.useState([]),[r,i]=C.useState([]),s=C.useCallback((a,l)=>{n(a),i(l)},[]),o=C.useCallback(()=>{i(void 0)});return C.useEffect(()=>(document.body.addEventListener("click",o),()=>{document.body.removeEventListener("click",o)}),[o]),w(U_.Provider,{value:{setContextMenu:s},children:j(Ng,{children:[!!r&&w(I5,{style:{left:r[0],top:r[1]},open:!!r,children:e.map(a=>w(T5,{onClick:a.onClick,onMouseEnter:a.onMouseEnter,onMouseLeave:a.onMouseEnter,children:a.name},a.name))}),t]})})},I5=k.ul`
  position: absolute;
  border: 1px solid var(--colors-lines-bg);
  border-radius: 4px;
  padding: 8px;
  background-color: var(--colors-bg);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  min-width: 80px;
  transition: height 0.3s, opacity 0.3s;
  height: 0;
  opacity: 0;
  overflow: hidden;

  ${({open:t})=>t&&LR`
      height: auto;
      opacity: 1;
    `}
`,T5=k.li`
  position: relative;
  padding: 5px;
  font-size: 18px;
  color: var(--colors-text-style);
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`,$h=t=>{const e=new Date(t),n=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");return`${n}:${r}`};async function k5(t){const e=Ci(ut,`users/${t}`);return(await y4(e)).data()}const x5=({dialog:t,user:e})=>{const[n,r]=C.useState(null),i=t.group;return C.useEffect(()=>{const s=t.users.find(a=>a!==e.uid);async function o(){const a=await k5(s);r(a)}o()},[t]),w(R5,{children:w(sr,{to:"/messenger/"+(i?t.groupId:n&&n.username||n&&n.userId),children:j(N5,{children:[j(b5,{children:[w(L5,{children:w("img",{src:i?t.avatar:n&&n.photoURL,alt:"photo"})}),j(O5,{children:[w(P5,{children:i?t.name:n&&n.displayName}),w("div",{children:t.lastAt?$h(t.lastAt.toDate()):$h(new Date)})]}),w(D5,{children:i?void 0:n&&n.username})]}),w(A5,{children:t.lastMessage})]})})})},R5=k.div`
  border-bottom: none;
  a {
    &.active {
      display: block;
      background-color: var(--colors-bg-active);
      border-left: solid 4px var(--colors-style);
    }
  }
`,N5=k.div`
  padding: 10px 0;
`,A5=k.div`
  color: var(--colors-text);
  margin: 15px 30px;
  padding: 1px 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`,b5=k.div`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
`,P5=k.div`
  flex: 1;
  font-weight: var(--fw-normal);
`,D5=k.div`
  grid-area: username;
  color: var(--colors-text);
`,O5=k.div`
  grid-area: column;
  display: flex;
`,L5=k.div`
  grid-area: avatar;
  img {
    width: 43px;
    height: 43px;
    border-radius: 20px;
  }
`;k.div``;const M5=({currentUser:t})=>{const[e,n]=C.useState([]);C.useEffect(()=>{const i=a$(an(ut,"dialogs"),Hr("users","array-contains",t.uid),g_("lastAt","desc"),h4(50)),s=Jx(i,o=>{const a=[];o.forEach(l=>{const u=l.data();a.push(u)}),n(a)});return()=>s()},[t]);const r=C.useMemo(()=>e,[e]);return w($5,{children:r.map(i=>w(x5,{user:t,dialog:i},i.id))})},$5=k.div`
  height: 60vh;
  max-height: 100vh;
  overflow: auto;
`,F5=({showUsers:t})=>{const{currentUser:e}=C.useContext(ws);return w(U5,{view:!t,children:w(M5,{currentUser:e})})},U5=k.div`
  display: ${({view:t})=>t?"block":"none"};
`,V5=({setStep:t,setActive:e,groupData:n,setGroupData:r})=>j(B5,{children:[j(z5,{children:[w("input",{type:"text",placeholder:"Name Group",value:n.nameGroup,onChange:i=>r({...n,nameGroup:i.target.value})}),w("label",{htmlFor:"file",children:w("span",{children:"IMG"})}),w("input",{type:"file",id:"file",onChange:i=>r({...n,file:i.target.files[0]})})]}),j(j5,{children:[w("button",{className:"cancel-btn",type:"button",onClick:()=>e(!1),children:"Cancel"}),w("button",{className:"submit-btn",onClick:()=>t(2),type:"submit",children:"Next"})]})]}),B5=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,z5=k.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type="text"] {
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    flex: 1;
  }

  label {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    color: #333;
    font-weight: 500;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  #file {
    display: none;
  }
`,j5=k.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    background-color: #e6e6e6;
    color: #333;
    margin-right: 10px;
  }

  .submit-btn {
    background-color: #6b96f6;
    color: #fff;
  }
`,W5=async t=>{const e=Wr(an(ut,"users"),Hr("uid","!=",t));return await Ko(e)},H5=async(t,e,n)=>t?(await yR(Ah(bh,e),t),await vR(Ah(bh,e))):`https://ui-avatars.com/api/?background=random&name=${n}`,q5=async()=>{const t=an(ut,"dialogs");return-(await Ko(t)).size},G5=async(t,e,n)=>{const r=e.uid;let i=await q5(),s=t.nameGroup.trim()===""?`Group ${i}`:t.nameGroup;if(n.length<=2)return;const o=Ci(an(ut,"dialogs")),a=await H5(t.file,o.id,t.nameGroup),l=C_();await ef(o,{avatar:a,users:n,group:!0,name:s,lastMessage:"Dialog Created",owner:r,id:o.id,lastAt:l,groupId:--i})},K5=({user:t,setSelectedUsers:e,selectedUsers:n})=>j(Q5,{onClick:()=>{e(i=>n.includes(t.uid)?i.filter(s=>s!==t.uid):[...i,t.uid])},children:[w(J5,{children:w("img",{src:t.photoURL,alt:"photo"})}),w(X5,{children:t.displayName}),n.includes(t.uid)&&w(Y5,{children:"Selected"})]}),Q5=k.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`,Y5=k.div`
  background-color: #6b96f6;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
`,X5=k.div`
  font-weight: bold;
  margin-right: 8px;
`,J5=k.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Z5=({setActive:t,setStep:e,currentUser:n,groupData:r})=>{const[i,s]=C.useState([]),[o,a]=C.useState(!1),[l,u]=C.useState([n.uid]);return C.useEffect(()=>{(async()=>{a(!0);try{const d=(await W5(n.uid)).docs.map(p=>p.data());s(d)}catch{}finally{a(!1)}})()},[n]),j(ej,{children:[o&&w("p",{children:"Loading users..."}),!o&&w(tj,{children:i.map(c=>w(K5,{setSelectedUsers:u,selectedUsers:l,user:c},c.uid))}),j(nj,{children:[w("button",{onClick:()=>t(!1),children:"Cancel"}),w("button",{onClick:()=>e(1),children:"Back"}),w("button",{onClick:()=>{G5(r,n,l),t(!1)},children:"Create Group"})]})]})},ej=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`,tj=k.div`
  height: 60vh;
  max-height: 100vh;
  overflow: auto;
`,nj=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #6b96f6;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #5086d6;
    }
  }
`;const zR=({active:t,setActive:e,children:n})=>w("div",{className:t?"modal active":"modal",onClick:()=>e(!1),children:w("div",{className:t?"modal-container active":"modal-container",onClick:r=>r.stopPropagation(),children:n})});function rj(t){return Cs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400L100 256l144-144M120 256h292"}}]})(t)}function ij(t){return Cs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"}},{tag:"path",attr:{d:"M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"}}]})(t)}const sj=()=>{const{currentUser:t}=C.useContext(ws),[e,n]=C.useState(!1),[r,i]=C.useState(1),[s,o]=C.useState({file:void 0,nameGroup:""});return j(Ng,{children:[w(oj,{className:"create",onClick:()=>{o({file:void 0,nameGroup:""}),i(1),n(!0)},children:w(ij,{size:30})}),j(zR,{active:e,setActive:n,children:[r===1&&w(V5,{setGroupData:o,setActive:n,setStep:i,groupData:s}),r===2&&w(Z5,{setActive:n,currentUser:t,setStep:i,groupData:s})]})]})},oj=k.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
`,aj=async t=>{if(!t)return[];const e=t.toLowerCase(),n=Wr(an(ut,"users"),g_("displayNameLower"),d4(e),f4(e+""));return await Ko(n)},lj=({user:t})=>w(sr,{to:"/messenger/"+(t.username||t.userId),children:w(uj,{children:j(cj,{children:[w(pj,{children:w("img",{src:t.photoURL,alt:"photo"})}),w(fj,{children:w(hj,{children:t.displayName})}),t.username&&w(dj,{children:t.username})]})})}),uj=k.div`
  border: solid 1px var(--colors-lines);
  padding: 10px 0;
`,cj=k.div`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
`,hj=k.div`
  flex: 1;
  font-weight: var(--fw-normal);
`,dj=k.div`
  grid-area: username;
  color: var(--colors-text);
`,fj=k.div`
  grid-area: column;
`,pj=k.div`
  grid-area: avatar;
  img {
    width: 43px;
    height: 43px;
    border-radius: 20px;
  }
`,mj=({currentUser:t,setShowUsers:e,showUsers:n})=>{const[r,i]=C.useState(""),[s,o]=C.useState([]),a=async()=>{o([]),(await aj(r)).forEach(c=>{const h=c.data();h.uid!==t.uid&&o(d=>[...d,h])})};return j(gj,{children:[j(yj,{children:[j(_j,{children:[!n&&w(BR,{size:30}),n&&w(rj,{onMouseDown:()=>{e(!1),i(""),o([])},size:30})]}),w(vj,{onMouseDown:()=>e(!0),type:"text",placeholder:"Search",onKeyDown:u=>{u.code==="Enter"&&a()},onChange:u=>{i(u.target.value)},value:r})]}),n&&j(Ej,{children:[j(wj,{children:["Result search ",s.length]}),s.map(u=>w(lj,{user:u},u.uid))]})]})},gj=k.div`
  margin: 12px 20px;
`,yj=k.div`
  display: flex;
  flex-direction: row;
  border: solid 1px var(--colors-lines);
  border-radius: 8px;
  padding: 12px 10px;
  margin-bottom: 10px;
`,vj=k.input`
  font-size: 16px;
  width: 90%;
  border-radius: 8px;
  margin-left: 10px;
`,_j=k.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
`,wj=k.div`
  padding: 20px;
  font-size: 20px;
  font-weight: var(--fw-normal);
`,Ej=k.div`
  height: 100%;
  height: 60vh;
  max-height: 100vh;
  overflow: auto;
`,Cj=({setShowUsers:t,showUsers:e})=>{const{currentUser:n}=C.useContext(ws);return w(mj,{showUsers:e,setShowUsers:t,currentUser:n})},Sj=()=>{const[t,e]=C.useState(!1);return j(Ij,{children:[j(Tj,{children:[j(kj,{children:[w(xj,{children:"Messages"}),w(sj,{})]}),w(Cj,{showUsers:t,setShowUsers:e})]}),w(F5,{showUsers:t})]})},Ij=k.div`
  width: 100%;
  border-start-start-radius: 10px;
  border: solid 1px var(--colors-lines);
`,Tj=k.div`
  display: flex;
  flex-direction: column;
`,kj=k.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
`,xj=k.div`
  font-size: 20px;
  font-weight: var(--fw-normal);
`,Tp=async t=>(await Ko(t)).docs.map(e=>e.data()),Rj=async(t,e,n)=>{if(!t)return;const r=an(ut,"dialogs"),i=async()=>{let a=null;+t?a=Wr(an(ut,"users"),Hr("userId","==",+t)):a=Wr(an(ut,"users"),Hr("username","==",t));const l=await Tp(a);return l[0]?(n([l[0]]),await s(l[0].uid)):null},s=async a=>{const l=Wr(r,Hr("users","in",[[e.uid,a],[a,e.uid]]));return(await Tp(l))[0]},o=async()=>{const a=Wr(r,Hr("groupId","==",+t)),l=await Tp(a);return!l[0]||!l[0].users.includes(e.uid)?null:(Nj(e,l[0],n),l[0])};return+t<0?o():i()},Nj=async(t,e,n)=>{const r=e.users.filter(o=>o!==t.uid),i=[t];(await Ko(Wr(an(ut,"users"),Hr("uid","in",r)))).forEach(o=>{if(o.exists()){const a=o.data();i.push(a)}}),n(i)},Aj=async(t,e,n)=>{fv(si(li,"dialogs/"+t.id+"/"+e.uid),{input:n})},bj=async(t,e,n)=>{const r=n?Date.now():null,i=si(li,"dialogs/"+t.id+"/typing"),s=ls(i,e.uid);await i$(s,{uid:e.uid,lastTyping:r})},Pj=async(t,e)=>{var i;return t&&((i=(await s$(si(li,"dialogs/"+t.id+"/"+e.uid))).val())==null?void 0:i.input)||""},jR=async t=>{for(const e of t)await v4(Ci(ut,"messages",e))},Dj=async(t,e)=>{await Xx(Ci(ut,"messages",t),{text:e,editedMessage:!0})},Oj=async(t,e)=>{const n=C_(),r=Ci(an(ut,"dialogs"));return await ef(r,{users:[t,e],lastAt:n,id:r.id}),console.log(`Dialog ${r.id} (createDialog)`),r.id},Lj=async({fromId:t,text:e},n)=>{const r=C_(),i=Ci(an(ut,"messages"));await ef(i,{id:i.id,fromId:t,dialogId:n,text:e,attachment:[!1],createdAt:r,seenMessage:[t]}),console.log(`Message ${i.id} (sendMessage)`),Xx(Ci(ut,"dialogs",n),{lastMessage:e,lastAt:r})},Mj=({message:t,setActive:e,active:n})=>{const r=C.useRef(),[i,s]=C.useState("");return C.useEffect(()=>{s(t.text)},[n]),j($j,{children:[w(Fj,{children:w("input",{type:"text",ref:r,value:i,onChange:o=>{s(o.target.value)}})}),j(Uj,{children:[w("button",{className:"cancel-btn",type:"button",onClick:()=>e(!1),children:"Cancel"}),w("button",{className:"submit-btn",onClick:()=>{Dj(t.id,i),e(!1)},type:"submit",children:"Edit"})]})]})},$j=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,Fj=k.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type="text"] {
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    flex: 1;
  }

  label {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    color: #333;
    font-weight: 500;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  #file {
    display: none;
  }
`,Uj=k.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    background-color: #e6e6e6;
    color: #333;
    margin-right: 10px;
  }

  .submit-btn {
    background-color: #6b96f6;
    color: #fff;
  }
`,Vj=({isFromSender:t,message:e,containerRef:n,currentUser:r,setSelectedMessage:i,selectedMessage:s})=>{const{setContextMenu:o}=C.useContext(U_),[a,l]=C.useState(!1);C.useLayoutEffect(()=>{const d=n.current;d.scrollHeight-d.clientHeight<=d.scrollTop+440&&d.scrollTo({top:d.scrollHeight,behavior:"smooth"})},[e]);const u=C.useMemo(()=>[{name:"Copy",onClick:()=>{const d=document.createElement("textarea");d.value=e.text,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d)}},{name:"Select",onClick:()=>{i(d=>d.includes(e.id)?d.filter(p=>p!==e.id):[...d,e.id])}},{name:"Delete",onClick:()=>{jR([e.id])}},e.fromId===r.uid&&{name:"Edit",onClick:()=>{l(!0)}},e.seenMessage[0]===r.uid&&e.seenMessage[1]&&{name:"Seen",onClick:()=>{setSeenListVisible(!0)}}].filter(Boolean),[e]),c=C.useCallback(d=>{d.preventDefault();const{clientX:p,clientY:m}=d;o(u,[p,m])},[u]),h=s.includes(e.id);return j(Bj,{onContextMenu:c,isFromSender:t,edit:e.editedMessage,className:h?"selected":"",onClick:s.length>=1?()=>{i(d=>d.includes(e.id)?d.filter(p=>p!==e.id):[...d,e.id])}:void 0,children:[j(zj,{isFromSender:t,children:[e.text,j(Hj,{isFromSender:t,children:[e.editedMessage&&w(qj,{isFromSender:t,children:"edited"}),w(jj,{isFromSender:t,children:e.createdAt?$h(e.createdAt.toDate()):$h(new Date)}),t&&j(Wj,{isFromSender:t,children:[e.seenMessage.length>1?"✔":"","✔"]})]})]}),w(zR,{active:a,setActive:l,children:w(Mj,{message:e,active:a,setActive:l})})]})},Bj=k.div`
  position: relative;
  min-width: ${({edit:t})=>t?"100px":"65px"};
  max-width: 425px;
  color: ${({isFromSender:t})=>t?"var(--colors-ui-style)":"var(--colors-text)"};
  background-color: ${({isFromSender:t})=>t?"var(--colors-style)":"var(--colors-message-to-bg)"};
  width: max-content;
  border-radius: 10px;
  word-wrap: break-word;
  padding: 10px 15px 20px 15px;
  padding-right: 0;
  margin-bottom: 20px;
  &.selected {
    background-color: blue;
  }
`,zj=k.div`
  margin-right: 20px;
  flex-grow: 1;
  overflow-wrap: break-word;
`,jj=k.span`
  color: ${({isFromSender:t})=>t?"var(--colors-ui-style)":"var(--colors-text)"};
  font-size: 12px;
  padding: 0 5px;
`,Wj=k.span`
  color: blue;
  font-size: 12px;
`,Hj=k.span`
  display: flex;
  position: absolute;
  bottom: 3px;
  right: 5px;
`,qj=k.span`
  color: ${({isFromSender:t})=>t?"var(--colors-ui-style)":"var(--colors-text)"};
  font-size: 12px;
`,Gj=({messageGroup:t,currentUser:e,usersDialog:n,containerRef:r,setSelectedMessage:i,selectedMessage:s})=>{const{setContextMenu:o}=C.useContext(U_),a=t.fromId===e.uid,l=n.find(c=>c.uid===t.fromId),u=C.useMemo(()=>[{name:"Select",onClick:()=>{}}],[]);return C.useCallback(c=>{c.preventDefault();const{clientX:h,clientY:d}=c;o(u,[h,d])},[u]),w(Kj,{children:j(Yj,{isFromSender:a,children:[j(Qj,{children:[j(Zj,{children:[!a&&w(Xj,{src:l&&l.photoURL}),w(Jj,{})]}),!a&&w(EE,{isFromSender:a,children:l&&l.displayName}),a&&w(EE,{isFromSender:a,children:"You"})]}),t.messages.map(c=>w(Vj,{selectedMessage:s,setSelectedMessage:i,currentUser:e,containerRef:r,isFromSender:a,message:c,sender:l},c.id))]})})},Kj=k.div`
  padding: 5px 50px;
`,Qj=k.div`
  position: relative;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas: "avatar column";
  align-items: end;
`,Yj=k.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isFromSender:t})=>t?"flex-end":"flex-start"};
`,Xj=k.img`
  width: 43px;
  height: 43px;
  border-radius: 20px;
  position: relative;
  right: 50px;
  top: 20px;
`,EE=k.div`
  padding-right: 20px;
  grid-area: column;
  position: relative;
  top: -5px;
  right: ${({isFromSender:t})=>t?"-10px":"40px"};
`,Jj=k.div``,Zj=k.div`
  position: relative;
  grid-area: avatar;
`,e8=({setSelectedMessage:t,dialog:e,currentUser:n,usersDialog:r,selectedMessage:i})=>{const[s,o]=C.useState([]),[a,l]=C.useState(!1),[u,c]=C.useState({value:10}),h=C.useRef(),d=C.useRef(),p=C.useMemo(()=>s.slice(0,u.value).reverse().reduce((y,_)=>{const g=y.length-1,f=y[g];return!f||f.fromId!==_.fromId?y.push({id:_.id,fromId:_.fromId,messages:[_]}):f.messages.push(_),y},[]),[s,u.value]);return C.useEffect(()=>{if(!e){o([]),l(!0);return}const m=e.id,y=Wr(an(ut,"messages"),Hr("dialogId","==",m),g_("createdAt","desc")),_=Jx(y,g=>{const f=[];g.forEach(v=>{const E=v.data();f.push(E)}),o(f)});return l(!0),()=>_()},[e]),C.useEffect(()=>{c({value:10});const m={root:null,rootMargin:"0px",threshold:1},y=new IntersectionObserver(([_],g)=>{_.isIntersecting&&(c(v=>({...v,value:v.value+10})),h.current.scrollTo({top:60}))},m);return y.observe(d.current),()=>{y.disconnect()}},[e]),C.useEffect(()=>{const m=h.current;setTimeout(()=>{m.scrollTo({top:m.scrollHeight})},1e3)},[e]),j(t8,{selectedMessage:i,ref:h,children:[!a&&w("p",{children:"Loading"}),w(n8,{ref:d}),a&&p.map(m=>w(Gj,{selectedMessage:i,setSelectedMessage:t,containerRef:h,messageGroup:m,usersDialog:r,currentUser:n},m.id))]})},t8=k.div`
  padding: 2px 30px;
  height: ${({selectedMessage:t})=>t?"53vh":"60vh"};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
  scroll-behavior: auto;
`,n8=k.div`
  min-height: 10px;
  width: 100%;
  background-color: var(--colors-bg);
  margin-bottom: 40px;
`,r8=(t=500)=>{const e=C.useRef(null),n=(r,i=t)=>{clearTimeout(e.current),e.current=setTimeout(r,i)};return C.useEffect(()=>()=>clearTimeout(e.current),[]),n},i8=({currentUser:t,dialog:e,setUpdateDialog:n,usersDialog:r})=>{const i=r8(1e3),s=r.find(d=>d.uid!==t.uid),[o,a]=C.useState(""),[l,u]=C.useState(!1);C.useEffect(()=>{let d;if(l)return bj(e,t,l),d=setTimeout(()=>u(!1),3e3),()=>clearTimeout(d)},[l,e,t]),C.useEffect(()=>{async function d(){const p=await Pj(e,t);a(p)}d()},[e,t]);const c=async()=>{const d=o.trim();if(!d)return;const p=t.uid;let m="";e?m=e.id:(m=await Oj(p,s.uid),n([m])),Lj({fromId:p,text:d},m),a("")};return j(s8,{children:[w("input",{type:"text",placeholder:"Send Message",onKeyDown:d=>{d.key==="Enter"&&c()},onChange:d=>{a(d.target.value),u(!0),i(()=>Aj(e,t,d.target.value))},value:o}),w("button",{onClick:c,children:"Send"})]})},s8=k.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  input[type="text"] {
    flex: 1;
    padding: 10px;
    font-size: 16px;

    border: 1px solid var(--colors-lines);
    border-radius: 5px;
    margin-right: 10px;
  }
  button {
    padding: 10px 15px;
    background-color: var(--colors-style);
    color: var(--colors-ui-style);
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: var(--colors-style-hover);
      color: var(--colors-text);
    }
  }
`,o8=({dialog:t,usersDialog:e,currentUser:n,group:r})=>{const[i,s]=C.useState(!1),[o,a]=C.useState({});return C.useEffect(()=>{if(r||(a(e.find(c=>c.uid!==n.uid)),!o))return;const l=si(li,"users/"+o.uid+"/connections"),u=c=>{if(c.exists()){const h=c.val();console.log(h),s(!!h)}else console.log("false"),s(!1)};return LT(l,u),()=>{s(!1),a({}),MT(l,u)}},[t,e]),!r&&!o?w("div",{children:"Choice dialog"}):j(a8,{children:[j(l8,{children:[w(u8,{children:w("img",{src:r?t.avatar:o&&o.photoURL,alt:"photo"})}),j(c8,{children:[w(h8,{children:r?t.name:o&&o.displayName}),r?null:w(d8,{status:i,children:w("div",{className:"online",children:i?"online":"offline"})})]}),w(g8,{children:r?void 0:o&&o.username})]}),j(y8,{children:[w(f8,{children:"Call"}),w(p8,{children:"Archive"}),w(m8,{children:"View profile"})]})]})},a8=k.div`
  flex-basis: 100px;
  border-bottom: solid 1px var(--colors-lines);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,l8=k.div`
  flex: 1;
  margin: 18px 22px;
  display: grid;
  grid-template-columns: 73px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
  align-items: center;
`,u8=k.div`
  grid-area: avatar;
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
`,c8=k.div`
  display: flex;
  grid-area: column;
  align-items: center;
`,h8=k.div`
  margin-right: 10px;
  font-weight: var(--fw-normal);
`,d8=k.div`
  position: relative;
  background-color: ${t=>t.status?"var(--colors-status-bg-online)":"var(--colors-status-bg-offline)"};
  padding: 5px;
  border-radius: 20px;
  color: ${t=>t.status?"var(--colors-status-online)":"var(--colors-status-offline)"};
  .online::before {
    content: "";
    position: relative;
    top: -1px;
    left: -4px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${t=>t.status?"var(--colors-status-online)":"var(--colors-status-offline)"};
    margin-left: 10px;
  }
`,f8=k.button`
  margin: 0 10px;
  border: solid 1px var(--colors-lines);
  padding: 15px 20px;
  border-radius: 15px;
  background-color: var(--colors-bg);
`,p8=k.button`
  background-color: var(--colors-ui-style);
  padding: 15px 20px;
  color: var(--colors-text-style);
  border-radius: 15px;
  margin-right: 10px;
`,m8=k.button`
  background-color: var(--colors-style);
  padding: 15px 30px;
  margin-right: 30px;
  border-radius: 15px;
  color: white;
`,g8=k.div``,y8=k.div`
  display: flex;
  align-items: center;
  float: right;
  align-items: center;
  padding: 20px 30px;
`,v8=({dialog:t,currentUser:e,usersDialog:n})=>{const[r,i]=C.useState([]);C.useEffect(()=>{if(!t)return;const o=si(li,"dialogs/"+t.id+"/typing"),a=l=>{const u=l.val();i(c=>!u||u.uid===e.uid?c:c.some(h=>h.uid===u.uid)?c.map(h=>h.uid===u.uid?{...h,lastTyping:u.lastTyping}:h):[...c,u])};return o$(o,a),()=>{MT(o,a)}},[t]),C.useEffect(()=>{const o=r.map(a=>setTimeout(()=>{i(l=>l.filter(u=>u.uid!==a.uid))},4e3));return()=>{o.forEach(a=>clearTimeout(a))}},[r]);const s=o=>n.find(l=>l.uid===o).displayName;return j("div",{children:[r.length===0&&w("p",{}),r.length===1&&j("p",{children:[s(r[0].uid)," is typing..."]}),r.length>1&&w("p",{children:"Several people are typing..."})]})},_8=({selectedMessage:t,setSelectedMessage:e})=>j(w8,{children:[w(E8,{onClick:()=>{jR(t),e([])},children:"Delete"}),w(C8,{children:"Forward"})]}),w8=k.div`
  display: flex;
  align-items: center;
  float: right;
  align-items: center;
  padding: 10px 15px;
  justify-content: space-evenly;
  background-color: var(--colors-status-offline);
`,E8=k.button`
  margin: 0 10px;
  border: solid 1px var(--colors-lines);
  padding: 15px 20px;
  border-radius: 15px;
  background-color: var(--colors-bg);
`,C8=k.button`
  background-color: var(--colors-ui-style);
  padding: 15px 20px;
  color: var(--colors-text-style);
  border-radius: 15px;
  margin-right: 10px;
`,S8=k.div``,I8=()=>{const{currentUser:t}=C.useContext(ws),{id:e}=yB(),[n,r]=C.useState(null),[i,s]=C.useState([]),[o,a]=C.useState(!1),[l,u]=C.useState([]),[c,h]=C.useState(!0),[d,p]=C.useState([]);return C.useEffect(()=>{(async()=>{try{const y=await Rj(e,t,s);r(y),y&&a(y.group)}catch(y){console.error(y)}finally{h(!1)}})(),p([]),h(!0)},[e,l]),C.useEffect(()=>{console.log(d)},[d]),j(S8,{children:[w(T8,{children:!c&&w(o8,{group:o,usersDialog:i,dialog:n,currentUser:t,setIsLoading:h})}),j(x8,{onContextMenu:m=>m.preventDefault(),children:[d.length>=1&&w(k8,{children:w(_8,{selectedMessage:d,setSelectedMessage:p})}),!c&&j(Ng,{children:[w(e8,{selectedMessage:d,setSelectedMessage:p,dialog:n,currentUser:t,usersDialog:i}),w(v8,{currentUser:t,dialog:n,usersDialog:i}),w(i8,{currentUser:t,setUpdateDialog:u,dialog:n,usersDialog:i,updateDialog:l})]}),c&&w("div",{children:"Loading..."})]})]})},T8=k.div`
  display: flex;
  flex-direction: column;
`,k8=k.div`
  display: flex;
  flex-direction: column;
`,x8=k.div`
  display: flex;
  flex-direction: column;
`,R8=()=>w(N8,{children:w(I8,{})}),N8=k.div`
  width: 100%;
  border-start-end-radius: 10px;
  border: solid 1px var(--colors-lines);
`,CE=()=>j(A8,{children:[w(b8,{children:"All messages"}),w(S5,{children:j(P8,{children:[w(Sj,{}),w(R8,{})]})})]}),A8=k.div`
  display: flex;
  flex-direction: column;
`,b8=k.div`
  font-size: 32px;
  padding: 25px 0px 10px 25px;
  font-weight: var(--fw-normal);
  margin-bottom: 35px;
`,P8=k.article`
  display: grid;
  grid-template-columns: 28.8% 71.2%;
  width: 100%;
`,D8=({isAuth:t})=>t?w(TR,{to:"/"}):w(A_,{}),O8=async t=>{if(!t)return;const e=si(li,`users/${t.uid}/connections`),n=si(li,`users/${t.uid}/lastOnline`),r=si(li,".info/connected");LT(r,i=>{if(i.val()===!0){const s=r$(e);e1(s).remove(),fv(s,!0),e1(n).set(_$())}})},L8=({isAuth:t})=>t?w(A_,{}):w(TR,{to:"/login"}),M8=[{path:"dashboard",component:_5},{path:"projects",component:w5},{path:"tasks",component:E5},{path:"bugtracker",component:C5},{path:"messenger",component:CE},{path:"messenger/:id",component:CE}],$8=()=>{const{currentUser:t}=C.useContext(ws);return O8(t),w(DB,{children:w(RB,{children:j(rr,{path:"/",element:w(Qz,{}),children:[w(rr,{index:!0,element:w($B,{})}),j(rr,{element:w(D8,{isAuth:t}),children:[w(rr,{path:"register",element:w(v5,{})}),w(rr,{path:"login",element:w(c5,{})})]}),w(rr,{element:w(L8,{isAuth:t}),children:M8.map(e=>{const n=e.component,r=e.path;return w(rr,{path:r,element:w(n,{})},r)})}),w(rr,{path:"*",element:w("div",{children:"Not Found"})})]})})})},F8=()=>{const[t,e]=C.useState(!0);return j(bV,{setIsLoading:e,children:[t&&w(PV,{}),!t&&w($8,{})]})};xp.createRoot(document.getElementById("root")).render(w(F8,{}));
