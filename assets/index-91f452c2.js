function pR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Aa={},gR={get exports(){return Aa},set exports(t){Aa=t}},Ch={},I={},yR={get exports(){return I},set exports(t){I=t}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),vR=Symbol.for("react.portal"),_R=Symbol.for("react.fragment"),wR=Symbol.for("react.strict_mode"),ER=Symbol.for("react.profiler"),SR=Symbol.for("react.provider"),CR=Symbol.for("react.context"),IR=Symbol.for("react.forward_ref"),TR=Symbol.for("react.suspense"),kR=Symbol.for("react.memo"),xR=Symbol.for("react.lazy"),f_=Symbol.iterator;function RR(t){return t===null||typeof t!="object"?null:(t=f_&&t[f_]||t["@@iterator"],typeof t=="function"?t:null)}var Y1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X1=Object.assign,J1={};function wo(t,e,n){this.props=t,this.context=e,this.refs=J1,this.updater=n||Y1}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z1(){}Z1.prototype=wo.prototype;function ig(t,e,n){this.props=t,this.context=e,this.refs=J1,this.updater=n||Y1}var sg=ig.prototype=new Z1;sg.constructor=ig;X1(sg,wo.prototype);sg.isPureReactComponent=!0;var p_=Array.isArray,eE=Object.prototype.hasOwnProperty,og={current:null},tE={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eE.call(e,r)&&!tE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:El,type:t,key:s,ref:o,props:i,_owner:og.current}}function NR(t,e){return{$$typeof:El,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ag(t){return typeof t=="object"&&t!==null&&t.$$typeof===El}function AR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var m_=/\/+/g;function Jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AR(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case El:case vR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jd(o,0):r,p_(i)?(n="",t!=null&&(n=t.replace(m_,"$&/")+"/"),Uu(i,e,n,"",function(u){return u})):i!=null&&(ag(i)&&(i=NR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(m_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",p_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jd(s,a);o+=Uu(s,e,n,l,i)}else if(l=RR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jd(s,a++),o+=Uu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Vu={transition:null},PR={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:og};ae.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!ag(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=wo;ae.Fragment=_R;ae.Profiler=ER;ae.PureComponent=ig;ae.StrictMode=wR;ae.Suspense=TR;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=X1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=og.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)eE.call(e,l)&&!tE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:El,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:CR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SR,_context:t},t.Consumer=t};ae.createElement=nE;ae.createFactory=function(t){var e=nE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:IR,render:t}};ae.isValidElement=ag;ae.lazy=function(t){return{$$typeof:xR,_payload:{_status:-1,_result:t},_init:bR}};ae.memo=function(t,e){return{$$typeof:kR,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return Bt.current.useCallback(t,e)};ae.useContext=function(t){return Bt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Bt.current.useEffect(t,e)};ae.useId=function(){return Bt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Bt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};ae.useRef=function(t){return Bt.current.useRef(t)};ae.useState=function(t){return Bt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Bt.current.useTransition()};ae.version="18.2.0";(function(t){t.exports=ae})(yR);const rn=mR(I),sp=pR({__proto__:null,default:rn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DR=I,OR=Symbol.for("react.element"),LR=Symbol.for("react.fragment"),MR=Object.prototype.hasOwnProperty,$R=DR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FR={key:!0,ref:!0,__self:!0,__source:!0};function rE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MR.call(e,r)&&!FR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OR,type:t,key:s,ref:o,props:i,_owner:$R.current}}Ch.Fragment=LR;Ch.jsx=rE;Ch.jsxs=rE;(function(t){t.exports=Ch})(gR);const UR=Aa.Fragment,w=Aa.jsx,X=Aa.jsxs;var op={},ap={},VR={get exports(){return ap},set exports(t){ap=t}},cn={},lp={},BR={get exports(){return lp},set exports(t){lp=t}},iE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,W){var K=b.length;b.push(W);e:for(;0<K;){var Ee=K-1>>>1,O=b[Ee];if(0<i(O,W))b[Ee]=W,b[K]=O,K=Ee;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var W=b[0],K=b.pop();if(K!==W){b[0]=K;e:for(var Ee=0,O=b.length,$=O>>>1;Ee<$;){var F=2*(Ee+1)-1,Q=b[F],S=F+1,le=b[S];if(0>i(Q,K))S<O&&0>i(le,Q)?(b[Ee]=le,b[S]=K,Ee=S):(b[Ee]=Q,b[F]=K,Ee=F);else if(S<O&&0>i(le,K))b[Ee]=le,b[S]=K,Ee=S;else break e}}return W}function i(b,W){var K=b.sortIndex-W.sortIndex;return K!==0?K:b.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=b)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(b){if(y=!1,v(b),!g)if(n(l)!==null)g=!0,Xn(T);else{var W=n(u);W!==null&&Mt(E,W.startTime-b)}}function T(b,W){g=!1,y&&(y=!1,m(D),D=-1),p=!0;var K=d;try{for(v(W),h=n(l);h!==null&&(!(h.expirationTime>W)||b&&!et());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,d=h.priorityLevel;var O=Ee(h.expirationTime<=W);W=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),v(W)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var F=n(u);F!==null&&Mt(E,F.startTime-W),$=!1}return $}finally{h=null,d=K,p=!1}}var A=!1,M=null,D=-1,se=5,q=-1;function et(){return!(t.unstable_now()-q<se)}function Ke(){if(M!==null){var b=t.unstable_now();q=b;var W=!0;try{W=M(!0,b)}finally{W?ut():(A=!1,M=null)}}else A=!1}var ut;if(typeof f=="function")ut=function(){f(Ke)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,_t=Zt.port2;Zt.port1.onmessage=Ke,ut=function(){_t.postMessage(null)}}else ut=function(){_(Ke,0)};function Xn(b){M=b,A||(A=!0,ut())}function Mt(b,W){D=_(function(){b(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Xn(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var K=d;d=W;try{return b()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,W){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var K=d;d=b;try{return W()}finally{d=K}},t.unstable_scheduleCallback=function(b,W,K){var Ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ee+K:Ee):K=Ee,b){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,b={id:c++,callback:W,priorityLevel:b,startTime:K,expirationTime:O,sortIndex:-1},K>Ee?(b.sortIndex=K,e(u,b),n(l)===null&&b===n(u)&&(y?(m(D),D=-1):y=!0,Mt(E,K-Ee))):(b.sortIndex=O,e(l,b),g||p||(g=!0,Xn(T))),b},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(b){var W=d;return function(){var K=d;d=W;try{return b.apply(this,arguments)}finally{d=K}}}})(iE);(function(t){t.exports=iE})(BR);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sE=I,an=lp;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oE=new Set,ba={};function is(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(ba[t]=e,t=0;t<e.length;t++)oE.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),up=Object.prototype.hasOwnProperty,zR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g_={},y_={};function jR(t){return up.call(y_,t)?!0:up.call(g_,t)?!1:zR.test(t)?y_[t]=!0:(g_[t]=!0,!1)}function WR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HR(t,e,n,r){if(e===null||typeof e>"u"||WR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lg=/[\-:]([a-z])/g;function ug(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lg,ug);yt[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lg,ug);yt[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lg,ug);yt[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cg(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HR(e,n,i,r)&&(n=null),r||i===null?jR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ir=sE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),dp=Symbol.for("react.suspense_list"),fg=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),uE=Symbol.for("react.offscreen"),v_=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=v_&&t[v_]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Zd;function ea(t){if(Zd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zd=e&&e[1]||""}return`
`+Zd+t}var ef=!1;function tf(t,e){if(!t||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function qR(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=tf(t.type,!1),t;case 11:return t=tf(t.type.render,!1),t;case 1:return t=tf(t.type,!0),t;default:return""}}function fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case _s:return"Portal";case cp:return"Profiler";case hg:return"StrictMode";case hp:return"Suspense";case dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lE:return(t.displayName||"Context")+".Consumer";case aE:return(t._context.displayName||"Context")+".Provider";case dg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fg:return e=t.displayName||null,e!==null?e:fp(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return fp(t(e))}catch{}}return null}function GR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fp(e);case 8:return e===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KR(t){var e=cE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=KR(t))}function hE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pp(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function __(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dE(t,e){e=e.checked,e!=null&&cg(t,"checked",e,!1)}function mp(t,e){dE(t,e);var n=ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gp(t,e.type,n):e.hasOwnProperty("defaultValue")&&gp(t,e.type,ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function w_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gp(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ta(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ii(n)}}function fE(t,e){var n=ii(e.value),r=ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function S_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,mE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QR=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){QR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function gE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function yE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YR=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(t,e){if(e){if(YR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function wp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ep=null;function pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sp=null,$s=null,Fs=null;function C_(t){if(t=Il(t)){if(typeof Sp!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Rh(e),Sp(t.stateNode,t.type,e))}}function vE(t){$s?Fs?Fs.push(t):Fs=[t]:$s=t}function _E(){if($s){var t=$s,e=Fs;if(Fs=$s=null,C_(t),e)for(t=0;t<e.length;t++)C_(e[t])}}function wE(t,e){return t(e)}function EE(){}var nf=!1;function SE(t,e,n){if(nf)return t(e,n);nf=!0;try{return wE(t,e,n)}finally{nf=!1,($s!==null||Fs!==null)&&(EE(),_E())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var r=Rh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Cp=!1;if(fr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Cp=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Cp=!1}function XR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ha=!1,ac=null,lc=!1,Ip=null,JR={onError:function(t){ha=!0,ac=t}};function ZR(t,e,n,r,i,s,o,a,l){ha=!1,ac=null,XR.apply(JR,arguments)}function eN(t,e,n,r,i,s,o,a,l){if(ZR.apply(this,arguments),ha){if(ha){var u=ac;ha=!1,ac=null}else throw Error(k(198));lc||(lc=!0,Ip=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function I_(t){if(ss(t)!==t)throw Error(k(188))}function tN(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return I_(i),t;if(s===r)return I_(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function IE(t){return t=tN(t),t!==null?TE(t):null}function TE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=TE(t);if(e!==null)return e;t=t.sibling}return null}var kE=an.unstable_scheduleCallback,T_=an.unstable_cancelCallback,nN=an.unstable_shouldYield,rN=an.unstable_requestPaint,ze=an.unstable_now,iN=an.unstable_getCurrentPriorityLevel,mg=an.unstable_ImmediatePriority,xE=an.unstable_UserBlockingPriority,uc=an.unstable_NormalPriority,sN=an.unstable_LowPriority,RE=an.unstable_IdlePriority,Ih=null,jn=null;function oN(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Ih,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:uN,aN=Math.log,lN=Math.LN2;function uN(t){return t>>>=0,t===0?32:31-(aN(t)/lN|0)|0}var hu=64,du=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=na(a):(s&=o,s!==0&&(r=na(s)))}else o=n&~i,o!==0?r=na(o):s!==0&&(r=na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-An(e),i=1<<n,r|=t[n],e&=~i;return r}function cN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-An(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function NE(){var t=hu;return hu<<=1,!(hu&4194240)&&(hu=64),t}function rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function dN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-An(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-An(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function AE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bE,yg,PE,DE,OE,kp=!1,fu=[],zr=null,jr=null,Wr=null,Oa=new Map,La=new Map,Pr=[],fN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k_(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function Bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Il(e),e!==null&&yg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pN(t,e,n,r,i){switch(e){case"focusin":return zr=Bo(zr,t,e,n,r,i),!0;case"dragenter":return jr=Bo(jr,t,e,n,r,i),!0;case"mouseover":return Wr=Bo(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,Bo(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,La.set(s,Bo(La.get(s)||null,t,e,n,r,i)),!0}return!1}function LE(t){var e=Ti(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=CE(n),e!==null){t.blockedOn=e,OE(t.priority,function(){PE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ep=r,n.target.dispatchEvent(r),Ep=null}else return e=Il(n),e!==null&&yg(e),t.blockedOn=n,!1;e.shift()}return!0}function x_(t,e,n){Bu(t)&&n.delete(e)}function mN(){kp=!1,zr!==null&&Bu(zr)&&(zr=null),jr!==null&&Bu(jr)&&(jr=null),Wr!==null&&Bu(Wr)&&(Wr=null),Oa.forEach(x_),La.forEach(x_)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,kp||(kp=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,mN)))}function Ma(t){function e(i){return zo(i,t)}if(0<fu.length){zo(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zr!==null&&zo(zr,t),jr!==null&&zo(jr,t),Wr!==null&&zo(Wr,t),Oa.forEach(e),La.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)LE(n),n.blockedOn===null&&Pr.shift()}var Us=Ir.ReactCurrentBatchConfig,hc=!0;function gN(t,e,n,r){var i=_e,s=Us.transition;Us.transition=null;try{_e=1,vg(t,e,n,r)}finally{_e=i,Us.transition=s}}function yN(t,e,n,r){var i=_e,s=Us.transition;Us.transition=null;try{_e=4,vg(t,e,n,r)}finally{_e=i,Us.transition=s}}function vg(t,e,n,r){if(hc){var i=xp(t,e,n,r);if(i===null)pf(t,e,r,dc,n),k_(t,r);else if(pN(i,t,e,n,r))r.stopPropagation();else if(k_(t,r),e&4&&-1<fN.indexOf(t)){for(;i!==null;){var s=Il(i);if(s!==null&&bE(s),s=xp(t,e,n,r),s===null&&pf(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pf(t,e,r,null,n)}}var dc=null;function xp(t,e,n,r){if(dc=null,t=pg(r),t=Ti(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=CE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function ME(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iN()){case mg:return 1;case xE:return 4;case uc:case sN:return 16;case RE:return 536870912;default:return 16}default:return 16}}var Ur=null,_g=null,zu=null;function $E(){if(zu)return zu;var t,e=_g,n=e.length,r,i="value"in Ur?Ur.value:Ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function R_(){return!1}function hn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:R_,this.isPropagationStopped=R_,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=hn(Eo),Cl=Oe({},Eo,{view:0,detail:0}),vN=hn(Cl),sf,of,jo,Th=Oe({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(sf=t.screenX-jo.screenX,of=t.screenY-jo.screenY):of=sf=0,jo=t),sf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),N_=hn(Th),_N=Oe({},Th,{dataTransfer:0}),wN=hn(_N),EN=Oe({},Cl,{relatedTarget:0}),af=hn(EN),SN=Oe({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),CN=hn(SN),IN=Oe({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TN=hn(IN),kN=Oe({},Eo,{data:0}),A_=hn(kN),xN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NN[t])?!!e[t]:!1}function Eg(){return AN}var bN=Oe({},Cl,{key:function(t){if(t.key){var e=xN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(t){return t.type==="keypress"?ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PN=hn(bN),DN=Oe({},Th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=hn(DN),ON=Oe({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),LN=hn(ON),MN=Oe({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),$N=hn(MN),FN=Oe({},Th,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UN=hn(FN),VN=[9,13,27,32],Sg=fr&&"CompositionEvent"in window,da=null;fr&&"documentMode"in document&&(da=document.documentMode);var BN=fr&&"TextEvent"in window&&!da,FE=fr&&(!Sg||da&&8<da&&11>=da),P_=String.fromCharCode(32),D_=!1;function UE(t,e){switch(t){case"keyup":return VN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function VE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function zN(t,e){switch(t){case"compositionend":return VE(e);case"keypress":return e.which!==32?null:(D_=!0,P_);case"textInput":return t=e.data,t===P_&&D_?null:t;default:return null}}function jN(t,e){if(Es)return t==="compositionend"||!Sg&&UE(t,e)?(t=$E(),zu=_g=Ur=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return FE&&e.locale!=="ko"?null:e.data;default:return null}}var WN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WN[t.type]:e==="textarea"}function BE(t,e,n,r){vE(r),e=fc(e,"onChange"),0<e.length&&(n=new wg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,$a=null;function HN(t){JE(t,0)}function kh(t){var e=Is(t);if(hE(e))return t}function qN(t,e){if(t==="change")return e}var zE=!1;if(fr){var lf;if(fr){var uf="oninput"in document;if(!uf){var L_=document.createElement("div");L_.setAttribute("oninput","return;"),uf=typeof L_.oninput=="function"}lf=uf}else lf=!1;zE=lf&&(!document.documentMode||9<document.documentMode)}function M_(){fa&&(fa.detachEvent("onpropertychange",jE),$a=fa=null)}function jE(t){if(t.propertyName==="value"&&kh($a)){var e=[];BE(e,$a,t,pg(t)),SE(HN,e)}}function GN(t,e,n){t==="focusin"?(M_(),fa=e,$a=n,fa.attachEvent("onpropertychange",jE)):t==="focusout"&&M_()}function KN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kh($a)}function QN(t,e){if(t==="click")return kh(e)}function YN(t,e){if(t==="input"||t==="change")return kh(e)}function XN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:XN;function Fa(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!up.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function $_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function F_(t,e){var n=$_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$_(n)}}function WE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?WE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function HE(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JN(t){var e=HE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&WE(n.ownerDocument.documentElement,n)){if(r!==null&&Cg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=F_(n,s);var o=F_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZN=fr&&"documentMode"in document&&11>=document.documentMode,Ss=null,Rp=null,pa=null,Np=!1;function U_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||Ss==null||Ss!==oc(r)||(r=Ss,"selectionStart"in r&&Cg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&Fa(pa,r)||(pa=r,r=fc(Rp,"onSelect"),0<r.length&&(e=new wg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},cf={},qE={};fr&&(qE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function xh(t){if(cf[t])return cf[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qE)return cf[t]=e[n];return t}var GE=xh("animationend"),KE=xh("animationiteration"),QE=xh("animationstart"),YE=xh("transitionend"),XE=new Map,V_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){XE.set(t,e),is(e,[t])}for(var hf=0;hf<V_.length;hf++){var df=V_[hf],eA=df.toLowerCase(),tA=df[0].toUpperCase()+df.slice(1);fi(eA,"on"+tA)}fi(GE,"onAnimationEnd");fi(KE,"onAnimationIteration");fi(QE,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(YE,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function B_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eN(r,e,void 0,t),t.currentTarget=null}function JE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;B_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;B_(i,a,u),s=l}}}if(lc)throw t=Ip,lc=!1,Ip=null,t}function ke(t,e){var n=e[Op];n===void 0&&(n=e[Op]=new Set);var r=t+"__bubble";n.has(r)||(ZE(e,t,2,!1),n.add(r))}function ff(t,e,n){var r=0;e&&(r|=4),ZE(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[gu]){t[gu]=!0,oE.forEach(function(n){n!=="selectionchange"&&(nA.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,ff("selectionchange",!1,e))}}function ZE(t,e,n,r){switch(ME(e)){case 1:var i=gN;break;case 4:i=yN;break;default:i=vg}n=i.bind(null,e,n,t),i=void 0,!Cp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}SE(function(){var u=s,c=pg(n),h=[];e:{var d=XE.get(t);if(d!==void 0){var p=wg,g=t;switch(t){case"keypress":if(ju(n)===0)break e;case"keydown":case"keyup":p=PN;break;case"focusin":g="focus",p=af;break;case"focusout":g="blur",p=af;break;case"beforeblur":case"afterblur":p=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=N_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LN;break;case GE:case KE:case QE:p=CN;break;case YE:p=$N;break;case"scroll":p=vN;break;case"wheel":p=UN;break;case"copy":case"cut":case"paste":p=TN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=b_}var y=(e&4)!==0,_=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=Da(f,m),E!=null&&y.push(Va(f,E,v)))),_)break;f=f.return}0<y.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ep&&(g=n.relatedTarget||n.fromElement)&&(Ti(g)||g[pr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Ti(g):null,g!==null&&(_=ss(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=N_,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=b_,E="onPointerLeave",m="onPointerEnter",f="pointer"),_=p==null?d:Is(p),v=g==null?d:Is(g),d=new y(E,f+"leave",p,n,c),d.target=_,d.relatedTarget=v,E=null,Ti(c)===u&&(y=new y(m,f+"enter",g,n,c),y.target=v,y.relatedTarget=_,E=y),_=E,p&&g)t:{for(y=p,m=g,f=0,v=y;v;v=ps(v))f++;for(v=0,E=m;E;E=ps(E))v++;for(;0<f-v;)y=ps(y),f--;for(;0<v-f;)m=ps(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=ps(y),m=ps(m)}y=null}else y=null;p!==null&&z_(h,d,p,y,!1),g!==null&&_!==null&&z_(h,_,g,y,!0)}}e:{if(d=u?Is(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=qN;else if(O_(d))if(zE)T=YN;else{T=KN;var A=GN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=QN);if(T&&(T=T(t,u))){BE(h,T,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&gp(d,"number",d.value)}switch(A=u?Is(u):window,t){case"focusin":(O_(A)||A.contentEditable==="true")&&(Ss=A,Rp=u,pa=null);break;case"focusout":pa=Rp=Ss=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,U_(h,n,c);break;case"selectionchange":if(ZN)break;case"keydown":case"keyup":U_(h,n,c)}var M;if(Sg)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Es?UE(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(FE&&n.locale!=="ko"&&(Es||D!=="onCompositionStart"?D==="onCompositionEnd"&&Es&&(M=$E()):(Ur=c,_g="value"in Ur?Ur.value:Ur.textContent,Es=!0)),A=fc(u,D),0<A.length&&(D=new A_(D,t,null,n,c),h.push({event:D,listeners:A}),M?D.data=M:(M=VE(n),M!==null&&(D.data=M)))),(M=BN?zN(t,n):jN(t,n))&&(u=fc(u,"onBeforeInput"),0<u.length&&(c=new A_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=M))}JE(h,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Da(t,n),s!=null&&r.unshift(Va(t,s,i)),s=Da(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function z_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Da(n,s),l!=null&&o.unshift(Va(n,l,a))):i||(l=Da(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rA=/\r\n?/g,iA=/\u0000|\uFFFD/g;function j_(t){return(typeof t=="string"?t:""+t).replace(rA,`
`).replace(iA,"")}function yu(t,e,n){if(e=j_(e),j_(t)!==e&&n)throw Error(k(425))}function pc(){}var Ap=null,bp=null;function Pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dp=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,oA=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(t){return W_.resolve(null).then(t).catch(aA)}:Dp;function aA(t){setTimeout(function(){throw t})}function mf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ma(e)}function Hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function H_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Un="__reactFiber$"+So,Ba="__reactProps$"+So,pr="__reactContainer$"+So,Op="__reactEvents$"+So,lA="__reactListeners$"+So,uA="__reactHandles$"+So;function Ti(t){var e=t[Un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H_(t);t!==null;){if(n=t[Un])return n;t=H_(t)}return e}t=n,n=t.parentNode}return null}function Il(t){return t=t[Un]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Rh(t){return t[Ba]||null}var Lp=[],Ts=-1;function pi(t){return{current:t}}function Re(t){0>Ts||(t.current=Lp[Ts],Lp[Ts]=null,Ts--)}function Te(t,e){Ts++,Lp[Ts]=t.current,t.current=e}var si={},Dt=pi(si),Qt=pi(!1),zi=si;function Xs(t,e){var n=t.type.contextTypes;if(!n)return si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function mc(){Re(Qt),Re(Dt)}function q_(t,e,n){if(Dt.current!==si)throw Error(k(168));Te(Dt,e),Te(Qt,n)}function eS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,GR(t)||"Unknown",i));return Oe({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||si,zi=Dt.current,Te(Dt,t),Te(Qt,Qt.current),!0}function G_(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=eS(t,e,zi),r.__reactInternalMemoizedMergedChildContext=t,Re(Qt),Re(Dt),Te(Dt,t)):Re(Qt),Te(Qt,n)}var nr=null,Nh=!1,gf=!1;function tS(t){nr===null?nr=[t]:nr.push(t)}function cA(t){Nh=!0,tS(t)}function mi(){if(!gf&&nr!==null){gf=!0;var t=0,e=_e;try{var n=nr;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nr=null,Nh=!1}catch(i){throw nr!==null&&(nr=nr.slice(t+1)),kE(mg,mi),i}finally{_e=e,gf=!1}}return null}var ks=[],xs=0,yc=null,vc=0,fn=[],pn=0,ji=null,rr=1,ir="";function Ei(t,e){ks[xs++]=vc,ks[xs++]=yc,yc=t,vc=e}function nS(t,e,n){fn[pn++]=rr,fn[pn++]=ir,fn[pn++]=ji,ji=t;var r=rr;t=ir;var i=32-An(r)-1;r&=~(1<<i),n+=1;var s=32-An(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rr=1<<32-An(e)+i|n<<i|r,ir=s+t}else rr=1<<s|n<<i|r,ir=t}function Ig(t){t.return!==null&&(Ei(t,1),nS(t,1,0))}function Tg(t){for(;t===yc;)yc=ks[--xs],ks[xs]=null,vc=ks[--xs],ks[xs]=null;for(;t===ji;)ji=fn[--pn],fn[pn]=null,ir=fn[--pn],fn[pn]=null,rr=fn[--pn],fn[pn]=null}var sn=null,tn=null,Ae=!1,kn=null;function rS(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function K_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=Hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:rr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function Mp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $p(t){if(Ae){var e=tn;if(e){var n=e;if(!K_(t,e)){if(Mp(t))throw Error(k(418));e=Hr(n.nextSibling);var r=sn;e&&K_(t,e)?rS(r,n):(t.flags=t.flags&-4097|2,Ae=!1,sn=t)}}else{if(Mp(t))throw Error(k(418));t.flags=t.flags&-4097|2,Ae=!1,sn=t}}}function Q_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function vu(t){if(t!==sn)return!1;if(!Ae)return Q_(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pp(t.type,t.memoizedProps)),e&&(e=tn)){if(Mp(t))throw iS(),Error(k(418));for(;e;)rS(t,e),e=Hr(e.nextSibling)}if(Q_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=Hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?Hr(t.stateNode.nextSibling):null;return!0}function iS(){for(var t=tn;t;)t=Hr(t.nextSibling)}function Js(){tn=sn=null,Ae=!1}function kg(t){kn===null?kn=[t]:kn.push(t)}var hA=Ir.ReactCurrentBatchConfig;function In(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _c=pi(null),wc=null,Rs=null,xg=null;function Rg(){xg=Rs=wc=null}function Ng(t){var e=_c.current;Re(_c),t._currentValue=e}function Fp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){wc=t,xg=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(xg!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(wc===null)throw Error(k(308));Rs=t,wc.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var ki=null;function Ag(t){ki===null?ki=[t]:ki.push(t)}function sS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ag(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function bg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ag(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function Wu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}function Y_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Oe({},h,d);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=h}}function X_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var aS=new sE.Component().refs;function Up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Kr(t),s=cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(bn(e,t,i,r),Wu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=Kr(t),s=cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(bn(e,t,i,r),Wu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=Kr(t),i=cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(bn(e,t,r,n),Wu(e,t,r))}};function J_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,s):!0}function lS(t,e,n){var r=!1,i=si,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=Yt(e)?zi:Dt.current,r=e.contextTypes,s=(r=r!=null)?Xs(t,i):si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Z_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function Vp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=aS,bg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=Yt(e)?zi:Dt.current,i.context=Xs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Up(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ah.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===aS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e0(t){var e=t._init;return e(t._payload)}function uS(t){function e(m,f){if(t){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Qr(m,f),m.index=0,m.sibling=null,m}function s(m,f,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,E){return f===null||f.tag!==6?(f=Cf(v,m.mode,E),f.return=m,f):(f=i(f,v),f.return=m,f)}function l(m,f,v,E){var T=v.type;return T===ws?c(m,f,v.props.children,E,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&e0(T)===f.type)?(E=i(f,v.props),E.ref=Wo(m,f,v),E.return=m,E):(E=Yu(v.type,v.key,v.props,null,m.mode,E),E.ref=Wo(m,f,v),E.return=m,E)}function u(m,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=If(v,m.mode,E),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,E,T){return f===null||f.tag!==7?(f=Li(v,m.mode,E,T),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cf(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lu:return v=Yu(f.type,f.key,f.props,null,m.mode,v),v.ref=Wo(m,null,f),v.return=m,v;case _s:return f=If(f,m.mode,v),f.return=m,f;case Ar:var E=f._init;return h(m,E(f._payload),v)}if(ta(f)||Uo(f))return f=Li(f,m.mode,v,null),f.return=m,f;_u(m,f)}return null}function d(m,f,v,E){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return v.key===T?l(m,f,v,E):null;case _s:return v.key===T?u(m,f,v,E):null;case Ar:return T=v._init,d(m,f,T(v._payload),E)}if(ta(v)||Uo(v))return T!==null?null:c(m,f,v,E,null);_u(m,v)}return null}function p(m,f,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case lu:return m=m.get(E.key===null?v:E.key)||null,l(f,m,E,T);case _s:return m=m.get(E.key===null?v:E.key)||null,u(f,m,E,T);case Ar:var A=E._init;return p(m,f,v,A(E._payload),T)}if(ta(E)||Uo(E))return m=m.get(v)||null,c(f,m,E,T,null);_u(f,E)}return null}function g(m,f,v,E){for(var T=null,A=null,M=f,D=f=0,se=null;M!==null&&D<v.length;D++){M.index>D?(se=M,M=null):se=M.sibling;var q=d(m,M,v[D],E);if(q===null){M===null&&(M=se);break}t&&M&&q.alternate===null&&e(m,M),f=s(q,f,D),A===null?T=q:A.sibling=q,A=q,M=se}if(D===v.length)return n(m,M),Ae&&Ei(m,D),T;if(M===null){for(;D<v.length;D++)M=h(m,v[D],E),M!==null&&(f=s(M,f,D),A===null?T=M:A.sibling=M,A=M);return Ae&&Ei(m,D),T}for(M=r(m,M);D<v.length;D++)se=p(M,m,D,v[D],E),se!==null&&(t&&se.alternate!==null&&M.delete(se.key===null?D:se.key),f=s(se,f,D),A===null?T=se:A.sibling=se,A=se);return t&&M.forEach(function(et){return e(m,et)}),Ae&&Ei(m,D),T}function y(m,f,v,E){var T=Uo(v);if(typeof T!="function")throw Error(k(150));if(v=T.call(v),v==null)throw Error(k(151));for(var A=T=null,M=f,D=f=0,se=null,q=v.next();M!==null&&!q.done;D++,q=v.next()){M.index>D?(se=M,M=null):se=M.sibling;var et=d(m,M,q.value,E);if(et===null){M===null&&(M=se);break}t&&M&&et.alternate===null&&e(m,M),f=s(et,f,D),A===null?T=et:A.sibling=et,A=et,M=se}if(q.done)return n(m,M),Ae&&Ei(m,D),T;if(M===null){for(;!q.done;D++,q=v.next())q=h(m,q.value,E),q!==null&&(f=s(q,f,D),A===null?T=q:A.sibling=q,A=q);return Ae&&Ei(m,D),T}for(M=r(m,M);!q.done;D++,q=v.next())q=p(M,m,D,q.value,E),q!==null&&(t&&q.alternate!==null&&M.delete(q.key===null?D:q.key),f=s(q,f,D),A===null?T=q:A.sibling=q,A=q);return t&&M.forEach(function(Ke){return e(m,Ke)}),Ae&&Ei(m,D),T}function _(m,f,v,E){if(typeof v=="object"&&v!==null&&v.type===ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:e:{for(var T=v.key,A=f;A!==null;){if(A.key===T){if(T=v.type,T===ws){if(A.tag===7){n(m,A.sibling),f=i(A,v.props.children),f.return=m,m=f;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&e0(T)===A.type){n(m,A.sibling),f=i(A,v.props),f.ref=Wo(m,A,v),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}v.type===ws?(f=Li(v.props.children,m.mode,E,v.key),f.return=m,m=f):(E=Yu(v.type,v.key,v.props,null,m.mode,E),E.ref=Wo(m,f,v),E.return=m,m=E)}return o(m);case _s:e:{for(A=v.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=If(v,m.mode,E),f.return=m,m=f}return o(m);case Ar:return A=v._init,_(m,f,A(v._payload),E)}if(ta(v))return g(m,f,v,E);if(Uo(v))return y(m,f,v,E);_u(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=Cf(v,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return _}var Zs=uS(!0),cS=uS(!1),Tl={},Wn=pi(Tl),za=pi(Tl),ja=pi(Tl);function xi(t){if(t===Tl)throw Error(k(174));return t}function Pg(t,e){switch(Te(ja,e),Te(za,t),Te(Wn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vp(e,t)}Re(Wn),Te(Wn,e)}function eo(){Re(Wn),Re(za),Re(ja)}function hS(t){xi(ja.current);var e=xi(Wn.current),n=vp(e,t.type);e!==n&&(Te(za,t),Te(Wn,n))}function Dg(t){za.current===t&&(Re(Wn),Re(za))}var Pe=pi(0);function Sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yf=[];function Og(){for(var t=0;t<yf.length;t++)yf[t]._workInProgressVersionPrimary=null;yf.length=0}var Hu=Ir.ReactCurrentDispatcher,vf=Ir.ReactCurrentBatchConfig,Wi=0,De=null,Qe=null,rt=null,Cc=!1,ma=!1,Wa=0,dA=0;function Et(){throw Error(k(321))}function Lg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Mg(t,e,n,r,i,s){if(Wi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?gA:yA,t=n(r,i),ma){s=0;do{if(ma=!1,Wa=0,25<=s)throw Error(k(301));s+=1,rt=Qe=null,e.updateQueue=null,Hu.current=vA,t=n(r,i)}while(ma)}if(Hu.current=Ic,e=Qe!==null&&Qe.next!==null,Wi=0,rt=Qe=De=null,Cc=!1,e)throw Error(k(300));return t}function $g(){var t=Wa!==0;return Wa=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?De.memoizedState=rt=t:rt=rt.next=t,rt}function En(){if(Qe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=rt===null?De.memoizedState:rt.next;if(e!==null)rt=e,Qe=t;else{if(t===null)throw Error(k(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},rt===null?De.memoizedState=rt=t:rt=rt.next=t}return rt}function Ha(t,e){return typeof e=="function"?e(t):e}function _f(t){var e=En(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,De.lanes|=c,Hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wf(t){var e=En(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dS(){}function fS(t,e){var n=De,r=En(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,Fg(gS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,qa(9,mS.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(k(349));Wi&30||pS(n,e,i)}return i}function pS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mS(t,e,n,r){e.value=n,e.getSnapshot=r,yS(e)&&vS(t)}function gS(t,e,n){return n(function(){yS(e)&&vS(t)})}function yS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function vS(t){var e=mr(t,1);e!==null&&bn(e,t,1,-1)}function t0(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=mA.bind(null,De,t),[e.memoizedState,t]}function qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _S(){return En().memoizedState}function qu(t,e,n,r){var i=Fn();De.flags|=t,i.memoizedState=qa(1|e,n,void 0,r===void 0?null:r)}function bh(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Lg(r,o.deps)){i.memoizedState=qa(e,n,s,r);return}}De.flags|=t,i.memoizedState=qa(1|e,n,s,r)}function n0(t,e){return qu(8390656,8,t,e)}function Fg(t,e){return bh(2048,8,t,e)}function wS(t,e){return bh(4,2,t,e)}function ES(t,e){return bh(4,4,t,e)}function SS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CS(t,e,n){return n=n!=null?n.concat([t]):null,bh(4,4,SS.bind(null,e,t),n)}function Ug(){}function IS(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function TS(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kS(t,e,n){return Wi&21?(Dn(n,e)||(n=NE(),De.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function fA(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=vf.transition;vf.transition={};try{t(!1),e()}finally{_e=n,vf.transition=r}}function xS(){return En().memoizedState}function pA(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},RS(t))NS(e,n);else if(n=sS(t,e,n,r),n!==null){var i=Vt();bn(n,t,r,i),AS(n,e,r)}}function mA(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(RS(t))NS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ag(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=sS(t,e,i,r),n!==null&&(i=Vt(),bn(n,t,r,i),AS(n,e,r))}}function RS(t){var e=t.alternate;return t===De||e!==null&&e===De}function NS(t,e){ma=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}var Ic={readContext:wn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},gA={readContext:wn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:n0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qu(4194308,4,SS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return qu(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pA.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:t0,useDebugValue:Ug,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=t0(!1),e=t[0];return t=fA.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Fn();if(Ae){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),ot===null)throw Error(k(349));Wi&30||pS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,n0(gS.bind(null,r,s,t),[t]),r.flags|=2048,qa(9,mS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=ot.identifierPrefix;if(Ae){var n=ir,r=rr;n=(r&~(1<<32-An(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yA={readContext:wn,useCallback:IS,useContext:wn,useEffect:Fg,useImperativeHandle:CS,useInsertionEffect:wS,useLayoutEffect:ES,useMemo:TS,useReducer:_f,useRef:_S,useState:function(){return _f(Ha)},useDebugValue:Ug,useDeferredValue:function(t){var e=En();return kS(e,Qe.memoizedState,t)},useTransition:function(){var t=_f(Ha)[0],e=En().memoizedState;return[t,e]},useMutableSource:dS,useSyncExternalStore:fS,useId:xS,unstable_isNewReconciler:!1},vA={readContext:wn,useCallback:IS,useContext:wn,useEffect:Fg,useImperativeHandle:CS,useInsertionEffect:wS,useLayoutEffect:ES,useMemo:TS,useReducer:wf,useRef:_S,useState:function(){return wf(Ha)},useDebugValue:Ug,useDeferredValue:function(t){var e=En();return Qe===null?e.memoizedState=t:kS(e,Qe.memoizedState,t)},useTransition:function(){var t=wf(Ha)[0],e=En().memoizedState;return[t,e]},useMutableSource:dS,useSyncExternalStore:fS,useId:xS,unstable_isNewReconciler:!1};function to(t,e){try{var n="",r=e;do n+=qR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _A=typeof WeakMap=="function"?WeakMap:Map;function bS(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,Xp=r),Bp(t,e)},n}function PS(t,e,n){n=cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bp(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function r0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _A;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DA.bind(null,t,e,n),e.then(t,t))}function i0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function s0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var wA=Ir.ReactCurrentOwner,qt=!1;function Ft(t,e,n,r){e.child=t===null?cS(e,null,n,r):Zs(e,t.child,n,r)}function o0(t,e,n,r,i){n=n.render;var s=e.ref;return Vs(e,i),r=Mg(t,e,n,r,s,i),n=$g(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ae&&n&&Ig(e),e.flags|=1,Ft(t,e,r,i),e.child)}function a0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,DS(t,e,s,r,i)):(t=Yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return gr(t,e,i)}return e.flags|=1,t=Qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function DS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fa(s,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,gr(t,e,i)}return zp(t,e,n,r,i)}function OS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(As,en),en|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(As,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(As,en),en|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(As,en),en|=r;return Ft(t,e,i,n),e.child}function LS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zp(t,e,n,r,i){var s=Yt(n)?zi:Dt.current;return s=Xs(e,s),Vs(e,i),n=Mg(t,e,n,r,s,i),r=$g(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gr(t,e,i)):(Ae&&r&&Ig(e),e.flags|=1,Ft(t,e,n,i),e.child)}function l0(t,e,n,r,i){if(Yt(n)){var s=!0;gc(e)}else s=!1;if(Vs(e,i),e.stateNode===null)Gu(t,e),lS(e,n,r),Vp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=Yt(n)?zi:Dt.current,u=Xs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Z_(e,o,r,u),br=!1;var d=e.memoizedState;o.state=d,Ec(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Qt.current||br?(typeof c=="function"&&(Up(e,n,c,r),l=e.memoizedState),(a=br||J_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,oS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:In(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=Yt(n)?zi:Dt.current,l=Xs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Z_(e,o,r,l),br=!1,d=e.memoizedState,o.state=d,Ec(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Qt.current||br?(typeof p=="function"&&(Up(e,n,p,r),g=e.memoizedState),(u=br||J_(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return jp(t,e,n,r,s,i)}function jp(t,e,n,r,i,s){LS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&G_(e,n,!1),gr(t,e,s);r=e.stateNode,wA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):Ft(t,e,a,s),e.memoizedState=r.state,i&&G_(e,n,!0),e.child}function MS(t){var e=t.stateNode;e.pendingContext?q_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&q_(t,e.context,!1),Pg(t,e.containerInfo)}function u0(t,e,n,r,i){return Js(),kg(i),e.flags|=256,Ft(t,e,n,r),e.child}var Wp={dehydrated:null,treeContext:null,retryLane:0};function Hp(t){return{baseLanes:t,cachePool:null,transitions:null}}function $S(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Pe,i&1),t===null)return $p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oh(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hp(n),e.memoizedState=Wp,t):Vg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return EA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wp,r}return s=t.child,t=s.sibling,r=Qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vg(t,e){return e=Oh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wu(t,e,n,r){return r!==null&&kg(r),Zs(e,t.child,null,n),t=Vg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ef(Error(k(422))),wu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oh({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=Hp(o),e.memoizedState=Wp,s);if(!(e.mode&1))return wu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Ef(s,r,void 0),wu(t,e,o,r)}if(a=(o&t.childLanes)!==0,qt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mr(t,i),bn(r,t,i,-1))}return qg(),r=Ef(Error(k(421))),wu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=Hr(i.nextSibling),sn=e,Ae=!0,kn=null,t!==null&&(fn[pn++]=rr,fn[pn++]=ir,fn[pn++]=ji,rr=t.id,ir=t.overflow,ji=e),e=Vg(e,r.children),e.flags|=4096,e)}function c0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fp(t.return,e,n)}function Sf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function FS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c0(t,n,e);else if(t.tag===19)c0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sf(e,!0,n,null,s);break;case"together":Sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SA(t,e,n){switch(e.tag){case 3:MS(e),Js();break;case 5:hS(e);break;case 1:Yt(e.type)&&gc(e);break;case 4:Pg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(_c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?$S(t,e,n):(Te(Pe,Pe.current&1),t=gr(t,e,n),t!==null?t.sibling:null);Te(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return FS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,OS(t,e,n)}return gr(t,e,n)}var US,qp,VS,BS;US=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qp=function(){};VS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(Wn.current);var s=null;switch(n){case"input":i=pp(t,i),r=pp(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=yp(t,i),r=yp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}_p(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};BS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CA(t,e,n){var r=e.pendingProps;switch(Tg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Yt(e.type)&&mc(),St(e),null;case 3:return r=e.stateNode,eo(),Re(Qt),Re(Dt),Og(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(em(kn),kn=null))),qp(t,e),St(e),null;case 5:Dg(e);var i=xi(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)VS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return St(e),null}if(t=xi(Wn.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Un]=e,r[Ba]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)ke(ra[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":__(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":E_(r,s),ke("invalid",r)}_p(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",""+a]):ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":uu(r),w_(r,s,!0);break;case"textarea":uu(r),S_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Un]=e,t[Ba]=r,US(t,e,!1,!1),e.stateNode=t;e:{switch(o=wp(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)ke(ra[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":__(t,r),i=pp(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ke("invalid",t);break;case"textarea":E_(t,r),i=yp(t,r),ke("invalid",t);break;default:i=r}_p(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&cg(t,s,l,o))}switch(n){case"input":uu(t),w_(t,r,!1);break;case"textarea":uu(t),S_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)BS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=xi(ja.current),xi(Wn.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Un]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=e,e.stateNode=r}return St(e),null;case 13:if(Re(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&tn!==null&&e.mode&1&&!(e.flags&128))iS(),Js(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Un]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else kn!==null&&(em(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Xe===0&&(Xe=3):qg())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return eo(),qp(t,e),t===null&&Ua(e.stateNode.containerInfo),St(e),null;case 10:return Ng(e.type._context),St(e),null;case 17:return Yt(e.type)&&mc(),St(e),null;case 19:if(Re(Pe),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sc(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>no&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return St(e),null}else 2*ze()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Pe.current,Te(Pe,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Hg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function IA(t,e){switch(Tg(e),e.tag){case 1:return Yt(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),Re(Qt),Re(Dt),Og(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dg(e),null;case 13:if(Re(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Pe),null;case 4:return eo(),null;case 10:return Ng(e.type._context),null;case 22:case 23:return Hg(),null;case 24:return null;default:return null}}var Eu=!1,Tt=!1,TA=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Gp(t,e,n){try{n()}catch(r){Me(t,e,r)}}var h0=!1;function kA(t,e){if(Ap=hc,t=HE(),Cg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bp={focusedElem:t,selectionRange:n},hc=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),_);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Me(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return g=h0,h0=!1,g}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gp(e,n,s)}i=i.next}while(i!==r)}}function Ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zS(t){var e=t.alternate;e!==null&&(t.alternate=null,zS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Un],delete e[Ba],delete e[Op],delete e[lA],delete e[uA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jS(t){return t.tag===5||t.tag===3||t.tag===4}function d0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(Qp(t,e,n),t=t.sibling;t!==null;)Qp(t,e,n),t=t.sibling}function Yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yp(t,e,n),t=t.sibling;t!==null;)Yp(t,e,n),t=t.sibling}var ft=null,Tn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)WS(t,e,n),n=n.sibling}function WS(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Ih,n)}catch{}switch(n.tag){case 5:Tt||Ns(n,e);case 6:var r=ft,i=Tn;ft=null,Rr(t,e,n),ft=r,Tn=i,ft!==null&&(Tn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(Tn?(t=ft,n=n.stateNode,t.nodeType===8?mf(t.parentNode,n):t.nodeType===1&&mf(t,n),Ma(t)):mf(ft,n.stateNode));break;case 4:r=ft,i=Tn,ft=n.stateNode.containerInfo,Tn=!0,Rr(t,e,n),ft=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!Tt&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,Rr(t,e,n),Tt=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function f0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TA),e.forEach(function(r){var i=LA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,Tn=!1;break e;case 3:ft=a.stateNode.containerInfo,Tn=!0;break e;case 4:ft=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(ft===null)throw Error(k(160));WS(s,o,i),ft=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HS(e,t),e=e.sibling}function HS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),$n(t),r&4){try{ga(3,t,t.return),Ph(3,t)}catch(y){Me(t,t.return,y)}try{ga(5,t,t.return)}catch(y){Me(t,t.return,y)}}break;case 1:Cn(e,t),$n(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(Cn(e,t),$n(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var i=t.stateNode;try{Pa(i,"")}catch(y){Me(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dE(i,s),wp(a,o);var u=wp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?yE(i,h):c==="dangerouslySetInnerHTML"?mE(i,h):c==="children"?Pa(i,h):cg(i,c,h,u)}switch(a){case"input":mp(i,s);break;case"textarea":fE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(i,!!s.multiple,s.defaultValue,!0):Ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ba]=s}catch(y){Me(t,t.return,y)}}break;case 6:if(Cn(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Me(t,t.return,y)}}break;case 3:if(Cn(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){Me(t,t.return,y)}break;case 4:Cn(e,t),$n(t);break;case 13:Cn(e,t),$n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jg=ze())),r&4&&f0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(u=Tt)||c,Cn(e,t),Tt=u):Cn(e,t),$n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:ga(4,d,d.return);break;case 1:Ns(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Me(r,n,y)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){m0(h);continue}}p!==null?(p.return=d,U=p):m0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gE("display",o))}catch(y){Me(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Me(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),$n(t),r&4&&f0(t);break;case 21:break;default:Cn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jS(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pa(i,""),r.flags&=-33);var s=d0(t);Yp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=d0(t);Qp(t,a,o);break;default:throw Error(k(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xA(t,e,n){U=t,qS(t)}function qS(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=Eu;var u=Tt;if(Eu=o,(Tt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?g0(i):l!==null?(l.return=o,U=l):g0(i);for(;s!==null;)U=s,qS(s),s=s.sibling;U=i,Eu=a,Tt=u}p0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):p0(t)}}function p0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||Ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&X_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}X_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Tt||e.flags&512&&Kp(e)}catch(d){Me(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function m0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function g0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ph(4,e)}catch(l){Me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Me(e,i,l)}}var s=e.return;try{Kp(e)}catch(l){Me(e,s,l)}break;case 5:var o=e.return;try{Kp(e)}catch(l){Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var RA=Math.ceil,Tc=Ir.ReactCurrentDispatcher,Bg=Ir.ReactCurrentOwner,gn=Ir.ReactCurrentBatchConfig,ce=0,ot=null,He=null,pt=0,en=0,As=pi(0),Xe=0,Ga=null,Hi=0,Dh=0,zg=0,ya=null,Wt=null,jg=0,no=1/0,er=null,kc=!1,Xp=null,Gr=null,Su=!1,Vr=null,xc=0,va=0,Jp=null,Ku=-1,Qu=0;function Vt(){return ce&6?ze():Ku!==-1?Ku:Ku=ze()}function Kr(t){return t.mode&1?ce&2&&pt!==0?pt&-pt:hA.transition!==null?(Qu===0&&(Qu=NE()),Qu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:ME(t.type)),t):1}function bn(t,e,n,r){if(50<va)throw va=0,Jp=null,Error(k(185));Sl(t,n,r),(!(ce&2)||t!==ot)&&(t===ot&&(!(ce&2)&&(Dh|=n),Xe===4&&Dr(t,pt)),Xt(t,r),n===1&&ce===0&&!(e.mode&1)&&(no=ze()+500,Nh&&mi()))}function Xt(t,e){var n=t.callbackNode;hN(t,e);var r=cc(t,t===ot?pt:0);if(r===0)n!==null&&T_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&T_(n),e===1)t.tag===0?cA(y0.bind(null,t)):tS(y0.bind(null,t)),oA(function(){!(ce&6)&&mi()}),n=null;else{switch(AE(r)){case 1:n=mg;break;case 4:n=xE;break;case 16:n=uc;break;case 536870912:n=RE;break;default:n=uc}n=eC(n,GS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GS(t,e){if(Ku=-1,Qu=0,ce&6)throw Error(k(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var r=cc(t,t===ot?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rc(t,r);else{e=r;var i=ce;ce|=2;var s=QS();(ot!==t||pt!==e)&&(er=null,no=ze()+500,Oi(t,e));do try{bA();break}catch(a){KS(t,a)}while(1);Rg(),Tc.current=s,ce=i,He!==null?e=0:(ot=null,pt=0,e=Xe)}if(e!==0){if(e===2&&(i=Tp(t),i!==0&&(r=i,e=Zp(t,i))),e===1)throw n=Ga,Oi(t,0),Dr(t,r),Xt(t,ze()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!NA(i)&&(e=Rc(t,r),e===2&&(s=Tp(t),s!==0&&(r=s,e=Zp(t,s))),e===1))throw n=Ga,Oi(t,0),Dr(t,r),Xt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Si(t,Wt,er);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=jg+500-ze(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dp(Si.bind(null,t,Wt,er),e);break}Si(t,Wt,er);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-An(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RA(r/1960))-r,10<r){t.timeoutHandle=Dp(Si.bind(null,t,Wt,er),r);break}Si(t,Wt,er);break;case 5:Si(t,Wt,er);break;default:throw Error(k(329))}}}return Xt(t,ze()),t.callbackNode===n?GS.bind(null,t):null}function Zp(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Oi(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&em(e)),t}function em(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function NA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~zg,e&=~Dh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),r=1<<n;t[n]=-1,e&=~r}}function y0(t){if(ce&6)throw Error(k(327));Bs();var e=cc(t,0);if(!(e&1))return Xt(t,ze()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var r=Tp(t);r!==0&&(e=r,n=Zp(t,r))}if(n===1)throw n=Ga,Oi(t,0),Dr(t,e),Xt(t,ze()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Wt,er),Xt(t,ze()),null}function Wg(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(no=ze()+500,Nh&&mi())}}function qi(t){Vr!==null&&Vr.tag===0&&!(ce&6)&&Bs();var e=ce;ce|=1;var n=gn.transition,r=_e;try{if(gn.transition=null,_e=1,t)return t()}finally{_e=r,gn.transition=n,ce=e,!(ce&6)&&mi()}}function Hg(){en=As.current,Re(As)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sA(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Tg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:eo(),Re(Qt),Re(Dt),Og();break;case 5:Dg(r);break;case 4:eo();break;case 13:Re(Pe);break;case 19:Re(Pe);break;case 10:Ng(r.type._context);break;case 22:case 23:Hg()}n=n.return}if(ot=t,He=t=Qr(t.current,null),pt=en=e,Xe=0,Ga=null,zg=Dh=Hi=0,Wt=ya=null,ki!==null){for(e=0;e<ki.length;e++)if(n=ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ki=null}return t}function KS(t,e){do{var n=He;try{if(Rg(),Hu.current=Ic,Cc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Wi=0,rt=Qe=De=null,ma=!1,Wa=0,Bg.current=null,n===null||n.return===null){Xe=1,Ga=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=i0(o);if(p!==null){p.flags&=-257,s0(p,o,a,s,e),p.mode&1&&r0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){r0(s,u,e),qg();break e}l=Error(k(426))}}else if(Ae&&a.mode&1){var _=i0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),s0(_,o,a,s,e),kg(to(l,a));break e}}s=l=to(l,a),Xe!==4&&(Xe=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=bS(s,l,e);Y_(s,m);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gr===null||!Gr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=PS(s,a,e);Y_(s,E);break e}}s=s.return}while(s!==null)}XS(n)}catch(T){e=T,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function QS(){var t=Tc.current;return Tc.current=Ic,t===null?Ic:t}function qg(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||!(Hi&268435455)&&!(Dh&268435455)||Dr(ot,pt)}function Rc(t,e){var n=ce;ce|=2;var r=QS();(ot!==t||pt!==e)&&(er=null,Oi(t,e));do try{AA();break}catch(i){KS(t,i)}while(1);if(Rg(),ce=n,Tc.current=r,He!==null)throw Error(k(261));return ot=null,pt=0,Xe}function AA(){for(;He!==null;)YS(He)}function bA(){for(;He!==null&&!nN();)YS(He)}function YS(t){var e=ZS(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?XS(t):He=e,Bg.current=null}function XS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IA(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,He=null;return}}else if(n=CA(n,e,en),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Xe===0&&(Xe=5)}function Si(t,e,n){var r=_e,i=gn.transition;try{gn.transition=null,_e=1,PA(t,e,n,r)}finally{gn.transition=i,_e=r}return null}function PA(t,e,n,r){do Bs();while(Vr!==null);if(ce&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dN(t,s),t===ot&&(He=ot=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Su||(Su=!0,eC(uc,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=_e;_e=1;var a=ce;ce|=4,Bg.current=null,kA(t,n),HS(n,t),JN(bp),hc=!!Ap,bp=Ap=null,t.current=n,xA(n),rN(),ce=a,_e=o,gn.transition=s}else t.current=n;if(Su&&(Su=!1,Vr=t,xc=i),s=t.pendingLanes,s===0&&(Gr=null),oN(n.stateNode),Xt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=Xp,Xp=null,t;return xc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Jp?va++:(va=0,Jp=t):va=0,mi(),null}function Bs(){if(Vr!==null){var t=AE(xc),e=gn.transition,n=_e;try{if(gn.transition=null,_e=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,xc=0,ce&6)throw Error(k(331));var i=ce;for(ce|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:ga(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(zS(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,U=v;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ph(9,a)}}catch(T){Me(a,a.return,T)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(ce=i,mi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Ih,t)}catch{}r=!0}return r}finally{_e=n,gn.transition=e}}return!1}function v0(t,e,n){e=to(n,e),e=bS(t,e,1),t=qr(t,e,1),e=Vt(),t!==null&&(Sl(t,1,e),Xt(t,e))}function Me(t,e,n){if(t.tag===3)v0(t,t,n);else for(;e!==null;){if(e.tag===3){v0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=to(n,t),t=PS(e,t,1),e=qr(e,t,1),t=Vt(),e!==null&&(Sl(e,1,t),Xt(e,t));break}}e=e.return}}function DA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(pt&n)===n&&(Xe===4||Xe===3&&(pt&130023424)===pt&&500>ze()-jg?Oi(t,0):zg|=n),Xt(t,e)}function JS(t,e){e===0&&(t.mode&1?(e=du,du<<=1,!(du&130023424)&&(du=4194304)):e=1);var n=Vt();t=mr(t,e),t!==null&&(Sl(t,e,n),Xt(t,n))}function OA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JS(t,n)}function LA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),JS(t,n)}var ZS;ZS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,SA(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Ae&&e.flags&1048576&&nS(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gu(t,e),t=e.pendingProps;var i=Xs(e,Dt.current);Vs(e,n),i=Mg(null,e,r,t,i,n);var s=$g();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bg(e),i.updater=Ah,e.stateNode=i,i._reactInternals=e,Vp(e,r,t,n),e=jp(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Ig(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$A(r),t=In(r,t),i){case 0:e=zp(null,e,r,t,n);break e;case 1:e=l0(null,e,r,t,n);break e;case 11:e=o0(null,e,r,t,n);break e;case 14:e=a0(null,e,r,In(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),zp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),l0(t,e,r,i,n);case 3:e:{if(MS(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,oS(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=to(Error(k(423)),e),e=u0(t,e,r,n,i);break e}else if(r!==i){i=to(Error(k(424)),e),e=u0(t,e,r,n,i);break e}else for(tn=Hr(e.stateNode.containerInfo.firstChild),sn=e,Ae=!0,kn=null,n=cS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),r===i){e=gr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return hS(e),t===null&&$p(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pp(r,i)?o=null:s!==null&&Pp(r,s)&&(e.flags|=32),LS(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&$p(e),null;case 13:return $S(t,e,n);case 4:return Pg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),o0(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(_c,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Qt.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=cr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vs(e,n),i=wn(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=In(r,e.pendingProps),i=In(r.type,i),a0(t,e,r,i,n);case 15:return DS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Gu(t,e),e.tag=1,Yt(r)?(t=!0,gc(e)):t=!1,Vs(e,n),lS(e,r,i),Vp(e,r,i,n),jp(null,e,r,!0,t,n);case 19:return FS(t,e,n);case 22:return OS(t,e,n)}throw Error(k(156,e.tag))};function eC(t,e){return kE(t,e)}function MA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new MA(t,e,n,r)}function Gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $A(t){if(typeof t=="function")return Gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dg)return 11;if(t===fg)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Li(n.children,i,s,e);case hg:o=8,i|=8;break;case cp:return t=mn(12,n,e,i|2),t.elementType=cp,t.lanes=s,t;case hp:return t=mn(13,n,e,i),t.elementType=hp,t.lanes=s,t;case dp:return t=mn(19,n,e,i),t.elementType=dp,t.lanes=s,t;case uE:return Oh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aE:o=10;break e;case lE:o=9;break e;case dg:o=11;break e;case fg:o=14;break e;case Ar:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Oh(t,e,n,r){return t=mn(22,t,r,e),t.elementType=uE,t.lanes=n,t.stateNode={isHidden:!1},t}function Cf(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function If(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kg(t,e,n,r,i,s,o,a,l){return t=new FA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bg(s),t}function UA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tC(t){if(!t)return si;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Yt(n))return eS(t,n,e)}return e}function nC(t,e,n,r,i,s,o,a,l){return t=Kg(n,r,!0,t,i,s,o,a,l),t.context=tC(null),n=t.current,r=Vt(),i=Kr(n),s=cr(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,Sl(t,i,r),Xt(t,r),t}function Lh(t,e,n,r){var i=e.current,s=Vt(),o=Kr(i);return n=tC(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(bn(t,i,o,s),Wu(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qg(t,e){_0(t,e),(t=t.alternate)&&_0(t,e)}function VA(){return null}var rC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yg(t){this._internalRoot=t}Mh.prototype.render=Yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Lh(t,e,null,null)};Mh.prototype.unmount=Yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){Lh(null,t,null,null)}),e[pr]=null}};function Mh(t){this._internalRoot=t}Mh.prototype.unstable_scheduleHydration=function(t){if(t){var e=DE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&LE(t)}};function Xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function w0(){}function BA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Nc(o);s.call(u)}}var o=nC(e,r,t,0,null,!1,!1,"",w0);return t._reactRootContainer=o,t[pr]=o.current,Ua(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Nc(l);a.call(u)}}var l=Kg(t,0,!1,null,null,!1,!1,"",w0);return t._reactRootContainer=l,t[pr]=l.current,Ua(t.nodeType===8?t.parentNode:t),qi(function(){Lh(e,l,n,r)}),l}function Fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nc(o);a.call(l)}}Lh(e,o,t,i)}else o=BA(n,e,t,i,r);return Nc(o)}bE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(gg(e,n|1),Xt(e,ze()),!(ce&6)&&(no=ze()+500,mi()))}break;case 13:qi(function(){var r=mr(t,1);if(r!==null){var i=Vt();bn(r,t,1,i)}}),Qg(t,1)}};yg=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Vt();bn(e,t,134217728,n)}Qg(t,134217728)}};PE=function(t){if(t.tag===13){var e=Kr(t),n=mr(t,e);if(n!==null){var r=Vt();bn(n,t,e,r)}Qg(t,e)}};DE=function(){return _e};OE=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Sp=function(t,e,n){switch(e){case"input":if(mp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rh(r);if(!i)throw Error(k(90));hE(r),mp(r,i)}}}break;case"textarea":fE(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};wE=Wg;EE=qi;var zA={usingClientEntryPoint:!1,Events:[Il,Is,Rh,vE,_E,Wg]},qo={findFiberByHostInstance:Ti,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jA={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=IE(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||VA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ih=Cu.inject(jA),jn=Cu}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zA;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xg(e))throw Error(k(200));return UA(t,e,null,n)};cn.createRoot=function(t,e){if(!Xg(t))throw Error(k(299));var n=!1,r="",i=rC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kg(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Yg(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=IE(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return qi(t)};cn.hydrate=function(t,e,n){if(!$h(e))throw Error(k(200));return Fh(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!Xg(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nC(e,null,t,1,n??null,i,!1,s,o),t[pr]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mh(e)};cn.render=function(t,e,n){if(!$h(e))throw Error(k(200));return Fh(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!$h(t))throw Error(k(40));return t._reactRootContainer?(qi(function(){Fh(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};cn.unstable_batchedUpdates=Wg;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$h(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Fh(t,e,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=cn})(VR);var E0=ap;op.createRoot=E0.createRoot,op.hydrateRoot=E0.hydrateRoot;/**
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
 */const iC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw Co(e)},Co=function(t){return new Error("Firebase Database ("+iC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const sC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new HA;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oC=function(t){const e=sC(t);return Jg.encodeByteArray(e,!0)},Ac=function(t){return oC(t).replace(/\./g,"")},bc=function(t){try{return Jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qA(t){return aC(void 0,t)}function aC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!GA(n)||(t[n]=aC(t[n],e[n]));return t}function GA(t){return t!=="__proto__"}/**
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
 */function KA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QA=()=>KA().__FIREBASE_DEFAULTS__,YA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bc(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return QA()||YA()||XA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lC=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zg=t=>{const e=lC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JA=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config},uC=t=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),a].join(".")}/**
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
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ny(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function ZA(){var t;const e=(t=Uh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tb(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hC(){return iC.NODE_ADMIN===!0}function nb(){try{return typeof indexedDB=="object"}catch{return!1}}function rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ib="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kl.prototype.create)}}class kl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,r)}}function sb(t,e){return t.replace(ob,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ob=/\{\$([^}]+)}/g;/**
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
 */function Ka(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
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
 */const dC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ka(bc(s[0])||""),n=Ka(bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ab=function(t){const e=dC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lb=function(t){const e=dC(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ro(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Dc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(S0(s)&&S0(o)){if(!Dc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S0(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cb(t,e){const n=new hb(t,e);return n.subscribe.bind(n)}class hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tf(){}function fC(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class pb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ey;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gb(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mb(t){return t===Ci?void 0:t}function gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const vb={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},_b=de.INFO,wb={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Eb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bh{constructor(e){this.name=e,this._logLevel=_b,this._logHandler=Eb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Sb=(t,e)=>e.some(n=>t instanceof n);let C0,I0;function Cb(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return I0||(I0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pC=new WeakMap,nm=new WeakMap,mC=new WeakMap,kf=new WeakMap,ry=new WeakMap;function Tb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pC.set(n,t)}).catch(()=>{}),ry.set(e,t),e}function kb(t){if(nm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nm.set(t,e)}let rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xb(t){rm=t(rm)}function Rb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xf(this),e,...n);return mC.set(r,e.sort?e.sort():[e]),Yr(r)}:Ib().includes(t)?function(...e){return t.apply(xf(this),e),Yr(pC.get(this))}:function(...e){return Yr(t.apply(xf(this),e))}}function Nb(t){return typeof t=="function"?Rb(t):(t instanceof IDBTransaction&&kb(t),Sb(t,Cb())?new Proxy(t,rm):t)}function Yr(t){if(t instanceof IDBRequest)return Tb(t);if(kf.has(t))return kf.get(t);const e=Nb(t);return e!==t&&(kf.set(t,e),ry.set(e,t)),e}const xf=t=>ry.get(t);function Ab(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bb=["get","getKey","getAll","getAllKeys","count"],Pb=["put","add","delete","clear"],Rf=new Map;function T0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Pb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rf.set(e,s),s}xb(t=>({...t,get:(e,n,r)=>T0(e,n)||t.get(e,n,r),has:(e,n)=>!!T0(e,n)||t.has(e,n)}));/**
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
 */class Db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const im="@firebase/app",k0="0.9.7";/**
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
 */const Gi=new Bh("@firebase/app"),Lb="@firebase/app-compat",Mb="@firebase/analytics-compat",$b="@firebase/analytics",Fb="@firebase/app-check-compat",Ub="@firebase/app-check",Vb="@firebase/auth",Bb="@firebase/auth-compat",zb="@firebase/database",jb="@firebase/database-compat",Wb="@firebase/functions",Hb="@firebase/functions-compat",qb="@firebase/installations",Gb="@firebase/installations-compat",Kb="@firebase/messaging",Qb="@firebase/messaging-compat",Yb="@firebase/performance",Xb="@firebase/performance-compat",Jb="@firebase/remote-config",Zb="@firebase/remote-config-compat",eP="@firebase/storage",tP="@firebase/storage-compat",nP="@firebase/firestore",rP="@firebase/firestore-compat",iP="firebase",sP="9.19.1";/**
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
 */const sm="[DEFAULT]",oP={[im]:"fire-core",[Lb]:"fire-core-compat",[$b]:"fire-analytics",[Mb]:"fire-analytics-compat",[Ub]:"fire-app-check",[Fb]:"fire-app-check-compat",[Vb]:"fire-auth",[Bb]:"fire-auth-compat",[zb]:"fire-rtdb",[jb]:"fire-rtdb-compat",[Wb]:"fire-fn",[Hb]:"fire-fn-compat",[qb]:"fire-iid",[Gb]:"fire-iid-compat",[Kb]:"fire-fcm",[Qb]:"fire-fcm-compat",[Yb]:"fire-perf",[Xb]:"fire-perf-compat",[Jb]:"fire-rc",[Zb]:"fire-rc-compat",[eP]:"fire-gcs",[tP]:"fire-gcs-compat",[nP]:"fire-fst",[rP]:"fire-fst-compat","fire-js":"fire-js",[iP]:"fire-js-all"};/**
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
 */const Oc=new Map,om=new Map;function aP(t,e){try{t.container.addComponent(e)}catch(n){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(om.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;om.set(e,t);for(const n of Oc.values())aP(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xr=new kl("app","Firebase",lP);/**
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
 */class uP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const os=sP;function gC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xr.create("bad-app-name",{appName:String(i)});if(n||(n=JA()),!n)throw Xr.create("no-options");const s=Oc.get(i);if(s){if(Dc(n,s.options)&&Dc(r,s.config))return s;throw Xr.create("duplicate-app",{appName:i})}const o=new yb(i);for(const l of om.values())o.addComponent(l);const a=new uP(n,r,o);return Oc.set(i,a),a}function zh(t=sm){const e=Oc.get(t);if(!e&&t===sm)return gC();if(!e)throw Xr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=oP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}oi(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cP="firebase-heartbeat-database",hP=1,Qa="firebase-heartbeat-store";let Nf=null;function yC(){return Nf||(Nf=Ab(cP,hP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qa)}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function dP(t){try{return(await yC()).transaction(Qa).objectStore(Qa).get(vC(t))}catch(e){if(e instanceof Yn)Gi.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(n.message)}}}async function x0(t,e){try{const r=(await yC()).transaction(Qa,"readwrite");return await r.objectStore(Qa).put(e,vC(t)),r.done}catch(n){if(n instanceof Yn)Gi.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(r.message)}}}function vC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fP=1024,pP=30*24*60*60*1e3;class mP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=R0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=pP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=R0(),{heartbeatsToSend:n,unsentEntries:r}=gP(this._heartbeatsCache.heartbeats),i=Ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function R0(){return new Date().toISOString().substring(0,10)}function gP(t,e=fP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nb()?rb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N0(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vP(t){oi(new yr("platform-logger",e=>new Db(e),"PRIVATE")),oi(new yr("heartbeat",e=>new mP(e),"PRIVATE")),yn(im,k0,t),yn(im,k0,"esm2017"),yn("fire-js","")}vP("");function iy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _C(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=_C,wC=new kl("auth","Firebase",_C());/**
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
 */const A0=new Bh("@firebase/auth");function Xu(t,...e){A0.logLevel<=de.ERROR&&A0.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function On(t,...e){throw sy(t,...e)}function Hn(t,...e){return sy(t,...e)}function wP(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new kl("auth","Firebase",r).create(e,{appName:t.name})}function sy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wC.create(t,...e)}function H(t,e,...n){if(!t)throw sy(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xu(e),new Error(e)}function vr(t,e){t||sr(e)}/**
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
 */const b0=new Map;function or(t){vr(t instanceof Function,"Expected a class definition");let e=b0.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b0.set(t,e),e)}/**
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
 */function EP(t,e){const n=xl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dc(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function SP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CP(){return P0()==="http:"||P0()==="https:"}function P0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CP()||eb()||"connection"in navigator)?navigator.onLine:!0}function TP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=ny()||cC()}get(){return IP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oy(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class EC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xP=new Rl(3e4,6e4);function Nl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function To(t,e,n,r,i={}){return SC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),EC.fetch()(CC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function SC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kP),e);try{const i=new RP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Iu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Iu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wP(t,c,u);On(t,c)}}catch(i){if(i instanceof Yn)throw i;On(t,"network-request-failed",{message:String(i)})}}async function Al(t,e,n,r,i={}){const s=await To(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function CC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?oy(t.config,i):`${t.config.apiScheme}://${i}`}class RP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),xP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function NP(t,e){return To(t,"POST","/v1/accounts:delete",e)}async function AP(t,e){return To(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bP(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=ay(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_a(Af(i.auth_time)),issuedAtTime:_a(Af(i.iat)),expirationTime:_a(Af(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Af(t){return Number(t)*1e3}function ay(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const i=bc(n);return i?JSON.parse(i):(Xu("Failed to decode base64 JWT payload"),null)}catch(i){return Xu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PP(t){const e=ay(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&DP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class IC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await io(t,AP(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$P(s.providerUserInfo):[],a=MP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new IC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function LP(t){const e=ye(t);await Lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $P(t){return t.map(e=>{var{providerId:n}=e,r=iy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FP(t,e){const n=await SC(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=CC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",EC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ya;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ya,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
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
 */function Nr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=iy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await io(this,NP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:A,stsTokenManager:M}=n;H(v&&M,e,"internal-error");const D=Ya.fromJSON(this.name,M);H(typeof v=="string",e,"internal-error"),Nr(h,e.name),Nr(d,e.name),H(typeof E=="boolean",e,"internal-error"),H(typeof T=="boolean",e,"internal-error"),Nr(p,e.name),Nr(g,e.name),Nr(y,e.name),Nr(_,e.name),Nr(m,e.name),Nr(f,e.name);const se=new Mi({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:D,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(se.providerData=A.map(q=>Object.assign({},q))),_&&(se._redirectEventId=_),se}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ya;i.updateFromServerResponse(n);const s=new Mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lc(s),s}}/**
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
 */class TC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TC.type="NONE";const D0=TC;/**
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
 */function Ju(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(or(D0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||or(D0);const o=Ju(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Mi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zs(s,e,r))}}/**
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
 */function O0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AC(e))return"Blackberry";if(bC(e))return"Webos";if(ly(e))return"Safari";if((e.includes("chrome/")||xC(e))&&!e.includes("edge/"))return"Chrome";if(NC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kC(t=Ot()){return/firefox\//i.test(t)}function ly(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xC(t=Ot()){return/crios\//i.test(t)}function RC(t=Ot()){return/iemobile/i.test(t)}function NC(t=Ot()){return/android/i.test(t)}function AC(t=Ot()){return/blackberry/i.test(t)}function bC(t=Ot()){return/webos/i.test(t)}function jh(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=Ot()){var e;return jh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VP(){return tb()&&document.documentMode===10}function PC(t=Ot()){return jh(t)||NC(t)||bC(t)||AC(t)||/windows phone/i.test(t)||RC(t)}function BP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function DC(t,e=[]){let n;switch(t){case"Browser":n=O0(Ot());break;case"Worker":n=`${O0(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class zP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class jP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new L0(this),this.idTokenSubscription=new L0(this),this.beforeStateQueue=new zP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ye(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bl(t){return ye(t)}class L0{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function WP(t,e,n){const r=bl(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=OC(e),{host:o,port:a}=HP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qP()}function OC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HP(t){const e=OC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:M0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:M0(o)}}}function M0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function GP(t,e){return To(t,"POST","/v1/accounts:update",e)}/**
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
 */async function KP(t,e){return Al(t,"POST","/v1/accounts:signInWithPassword",Nl(t,e))}/**
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
 */async function QP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",Nl(t,e))}async function YP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",Nl(t,e))}/**
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
 */class Xa extends uy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return KP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QP(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return GP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YP(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function js(t,e){return Al(t,"POST","/v1/accounts:signInWithIdp",Nl(t,e))}/**
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
 */const XP="http://localhost";class Ki extends uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=iy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ki(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:XP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
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
 */function JP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZP(t){const e=ia(sa(t)).link,n=e?ia(sa(e)).deep_link_id:null,r=ia(sa(t)).deep_link_id;return(r?ia(sa(r)).link:null)||r||n||e||t}class cy{constructor(e){var n,r,i,s,o,a;const l=ia(sa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=JP((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZP(e);try{return new cy(n)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return Xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cy.parseLink(n);return H(r,"argument-error"),Xa._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class LC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pl extends LC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Pl{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Lr extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ki._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Pl{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class $r extends Pl{constructor(){super("twitter.com")}static credential(e,n){return Ki._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */async function eD(t,e){return Al(t,"POST","/v1/accounts:signUp",Nl(t,e))}/**
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
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mi._fromIdTokenResponse(e,r,i),o=$0(r);return new Qi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$0(r);return new Qi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mc extends Yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mc(e,n,r,i)}}function MC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(t,s,e,r):s})}async function tD(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
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
 */async function nD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await io(t,MC(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=ay(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Qi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
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
 */async function $C(t,e,n=!1){const r="signIn",i=await MC(t,r,e),s=await Qi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rD(t,e){return $C(bl(t),e)}async function iD(t,e,n){const r=bl(t),i=await eD(r,{returnSecureToken:!0,email:e,password:n}),s=await Qi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function sD(t,e,n){return rD(ye(t),ko.credential(e,n))}/**
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
 */async function oD(t,e){return To(t,"POST","/v1/accounts:update",e)}/**
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
 */async function aD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await io(r,oD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lD(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function uD(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function cD(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function hD(t){return ye(t).signOut()}const $c="__sak";/**
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
 */class FC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dD(){const t=Ot();return ly(t)||jh(t)}const fD=1e3,pD=10;class UC extends FC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dD()&&BP(),this.fallbackToPolling=PC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}UC.type="LOCAL";const mD=UC;/**
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
 */class VC extends FC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}VC.type="SESSION";const BC=VC;/**
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
 */function gD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await gD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
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
 */function hy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qn(){return window}function vD(t){qn().location.href=t}/**
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
 */function zC(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function _D(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ED(){return zC()?self:null}/**
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
 */const jC="firebaseLocalStorageDb",SD=1,Fc="firebaseLocalStorage",WC="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hh(t,e){return t.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function CD(){const t=indexedDB.deleteDatabase(jC);return new Dl(t).toPromise()}function lm(){const t=indexedDB.open(jC,SD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fc,{keyPath:WC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fc)?e(r):(r.close(),await CD(),e(await lm()))})})}async function F0(t,e,n){const r=Hh(t,!0).put({[WC]:e,value:n});return new Dl(r).toPromise()}async function ID(t,e){const n=Hh(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function U0(t,e){const n=Hh(t,!0).delete(e);return new Dl(n).toPromise()}const TD=800,kD=3;class HC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(ED()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _D(),!this.activeServiceWorker)return;this.sender=new yD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await F0(e,$c,"1"),await U0(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>F0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ID(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>U0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hh(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HC.type="LOCAL";const xD=HC;/**
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
 */function RD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ND(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RD().appendChild(r)})}function AD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rl(3e4,6e4);/**
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
 */function bD(t,e){return e?or(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dy extends uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PD(t){return $C(t.auth,new dy(t),t.bypassAuthState)}function DD(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),nD(n,new dy(t),t.bypassAuthState)}async function OD(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),tD(n,new dy(t),t.bypassAuthState)}/**
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
 */class qC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PD;case"linkViaPopup":case"linkViaRedirect":return OD;case"reauthViaPopup":case"reauthViaRedirect":return DD;default:On(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LD=new Rl(2e3,1e4);class bs extends qC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=hy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,LD.get())};e()}}bs.currentPopupAction=null;/**
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
 */const MD="pendingRedirect",Zu=new Map;class $D extends qC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zu.get(this.auth._key());if(!e){try{const r=await FD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zu.set(this.auth._key(),e)}return this.bypassAuthState||Zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FD(t,e){const n=BD(e),r=VD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UD(t,e){Zu.set(t._key(),e)}function VD(t){return or(t._redirectPersistence)}function BD(t){return Ju(MD,t.config.apiKey,t.name)}async function zD(t,e,n=!1){const r=bl(t),i=bD(r,e),o=await new $D(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jD=10*60*1e3;class WD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!GC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jD&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(e))}saveEventToCache(e){this.cachedEventUids.add(V0(e)),this.lastProcessedEventTime=Date.now()}}function V0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function GC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GC(t);default:return!1}}/**
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
 */async function qD(t,e={}){return To(t,"GET","/v1/projects",e)}/**
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
 */const GD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KD=/^https?/;async function QD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qD(t);for(const n of e)try{if(YD(n))return}catch{}On(t,"unauthorized-domain")}function YD(t){const e=am(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KD.test(n))return!1;if(GD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const XD=new Rl(3e4,6e4);function B0(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JD(t){return new Promise((e,n)=>{var r,i,s;function o(){B0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{B0(),n(Hn(t,"network-request-failed"))},timeout:XD.get()})}if(!((i=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qn().gapi)===null||s===void 0)&&s.load)o();else{const a=AD("iframefcb");return qn()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},ND(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ec=null,e})}let ec=null;function ZD(t){return ec=ec||JD(t),ec}/**
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
 */const eO=new Rl(5e3,15e3),tO="__/auth/iframe",nO="emulator/auth/iframe",rO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sO(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oy(e,nO):`https://${t.config.authDomain}/${tO}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=iO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function oO(t){const e=await ZD(t),n=qn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:sO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=qn().setTimeout(()=>{s(o)},eO.get());function l(){qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lO=500,uO=600,cO="_blank",hO="http://localhost";class z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dO(t,e,n,r=lO,i=uO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ot().toLowerCase();n&&(a=xC(u)?cO:n),kC(u)&&(e=e||hO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(UP(u)&&a!=="_self")return fO(e||"",a),new z0(null);const h=window.open(e||"",a,c);H(h,t,"popup-blocked");try{h.focus()}catch{}return new z0(h)}function fO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pO="__/auth/handler",mO="emulator/auth/handler";function j0(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof LC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Pl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${gO(t)}?${Io(a).slice(1)}`}function gO({config:t}){return t.emulator?oy(t,mO):`https://${t.authDomain}/${pO}`}/**
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
 */const bf="webStorageSupport";class yO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BC,this._completeRedirectFn=zD,this._overrideRedirectResult=UD}async _openPopup(e,n,r,i){var s;vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=j0(e,n,r,am(),i);return dO(e,o,hy())}async _openRedirect(e,n,r,i){return await this._originValidation(e),vD(j0(e,n,r,am(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oO(e),r=new WD(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bf,{type:bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bf];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PC()||ly()||jh()}}const vO=yO;var W0="@firebase/auth",H0="0.22.0";/**
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
 */class _O{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EO(t){oi(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DC(t)},c=new jP(a,l,u);return SP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new yr("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(r=>new _O(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(W0,H0,wO(t)),yn(W0,H0,"esm2017")}/**
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
 */const SO=5*60,CO=uC("authIdTokenMaxAge")||SO;let q0=null;const IO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CO)return;const i=n==null?void 0:n.token;q0!==i&&(q0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TO(t=zh()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EP(t,{popupRedirectResolver:vO,persistence:[xD,mD,BC]}),r=uC("authTokenSyncURL");if(r){const s=IO(r);uD(n,s,()=>s(n.currentUser)),lD(n,o=>s(o))}const i=lC("auth");return i&&WP(n,`http://${i}`),n}EO("Browser");var kO="firebase",xO="9.19.1";/**
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
 */yn(kO,xO,"app");const G0="@firebase/database",K0="0.14.4";/**
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
 */let KC="";function RO(t){KC=t}/**
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
 */class NO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ka(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class AO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const QC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NO(e)}}catch{}return new AO},Ri=QC("localStorage"),um=QC("sessionStorage");/**
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
 */const Ws=new Bh("@firebase/database"),bO=function(){let t=1;return function(){return t++}}(),YC=function(t){const e=fb(t),n=new ub;n.update(e);const r=n.digest();return Jg.encodeByteArray(r)},Ol=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ol.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let $i=null,Q0=!0;const PO=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ws.logLevel=de.VERBOSE,$i=Ws.log.bind(Ws),e&&um.set("logging_enabled",!0)):typeof t=="function"?$i=t:($i=null,um.remove("logging_enabled"))},kt=function(...t){if(Q0===!0&&(Q0=!1,$i===null&&um.get("logging_enabled")===!0&&PO(!0)),$i){const e=Ol.apply(null,t);$i(e)}},Ll=function(t){return function(...e){kt(t,...e)}},cm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ol(...t);Ws.error(e)},_r=function(...t){const e=`FIREBASE FATAL ERROR: ${Ol(...t)}`;throw Ws.error(e),new Error(e)},on=function(...t){const e="FIREBASE WARNING: "+Ol(...t);Ws.warn(e)},DO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&on("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},XC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},so="[MIN_NAME]",Yi="[MAX_NAME]",xo=function(t,e){if(t===e)return 0;if(t===so||e===Yi)return-1;if(e===so||t===Yi)return 1;{const n=Y0(t),r=Y0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LO=function(t,e){return t===e?0:t<e?-1:1},Go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},fy=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=fy(t[e[r]]);return n+="}",n},JC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ZC=function(t){N(!XC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},MO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$O=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function FO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const UO=new RegExp("^-?(0*)\\d{1,10}$"),VO=-2147483648,BO=2147483647,Y0=function(t){if(UO.test(t)){const e=Number(t);if(e>=VO&&e<=BO)return e}return null},Ml=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw on("Exception was thrown by user callback.",n),e},Math.floor(0))}},zO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){on(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',on(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
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
 */const py="5",eI="v",tI="s",nI="r",rI="f",iI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sI="ls",oI="p",hm="ac",aI="websocket",lI="long_polling";/**
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
 */class uI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cI(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===aI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HO(t)&&(n.ns=t.namespace);const i=[];return Jt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class qO{constructor(){this.counters_={}}incrementCounter(e,n=1){Tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qA(this.counters_)}}/**
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
 */const Pf={},Df={};function my(t){const e=t.toString();return Pf[e]||(Pf[e]=new qO),Pf[e]}function GO(t,e){const n=t.toString();return Df[n]||(Df[n]=e()),Df[n]}/**
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
 */class KO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ml(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const X0="start",QO="close",YO="pLPCommand",XO="pRTLPCB",hI="id",dI="pw",fI="ser",JO="cb",ZO="seg",eL="ts",tL="d",nL="dframe",pI=1870,mI=30,rL=pI-mI,iL=25e3,sL=3e4;class Ps{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ll(e),this.stats_=my(n),this.urlFn=l=>(this.appCheckToken&&(l[hm]=this.appCheckToken),cI(n,lI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sL)),OO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===X0)this.id=a,this.password=l;else if(o===QO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[X0]="t",r[fI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[eI]=py,this.transportSessionId&&(r[tI]=this.transportSessionId),this.lastSessionId&&(r[sI]=this.lastSessionId),this.applicationId&&(r[oI]=this.applicationId),this.appCheckToken&&(r[hm]=this.appCheckToken),typeof location<"u"&&location.hostname&&iI.test(location.hostname)&&(r[nI]=rI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MO()&&!$O()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oC(n),i=JC(r,rL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nL]="t",r[hI]=e,r[dI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bO(),window[YO+this.uniqueCallbackIdentifier]=e,window[XO+this.uniqueCallbackIdentifier]=n,this.myIFrame=gy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){kt("frame writing exception"),a.stack&&kt(a.stack),kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hI]=this.myID,e[dI]=this.myPW,e[fI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mI+r.length<=pI;){const o=this.pendingSegs.shift();r=r+"&"+ZO+i+"="+o.seg+"&"+eL+i+"="+o.ts+"&"+tL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const oL=16384,aL=45e3;let Uc=null;typeof MozWebSocket<"u"?Uc=MozWebSocket:typeof WebSocket<"u"&&(Uc=WebSocket);class xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ll(this.connId),this.stats_=my(n),this.connURL=xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[eI]=py,typeof location<"u"&&location.hostname&&iI.test(location.hostname)&&(o[nI]=rI),n&&(o[tI]=n),r&&(o[sI]=r),i&&(o[hm]=i),s&&(o[oI]=s),cI(e,aI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ri.set("previous_websocket_failure",!0);try{let r;hC(),this.mySock=new Uc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uc!==null&&!xn.forceDisallow_}static previouslyFailed(){return Ri.isInMemoryStorage||Ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ka(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=JC(n,oL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
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
 */class Ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ps,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||on("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const i=this.transports_=[];for(const s of Ja.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
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
 */const lL=6e4,uL=5e3,cL=10*1024,hL=100*1024,Of="t",J0="d",dL="s",Z0="r",fL="e",ew="o",tw="a",nw="n",rw="p",pL="h";class mL{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ll("c:"+this.id+":"),this.transportManager_=new Ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Of in e){const n=e[Of];n===tw?this.upgradeIfSecondaryHealthy_():n===Z0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ew&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Go(Of,e);if(J0 in e){const r=e[J0];if(n===pL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dL?this.onConnectionShutdown_(r):n===Z0?this.onReset_(r):n===fL?cm("Server Error: "+r):n===ew?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),py!==r&&on("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class gI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class yI{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vc extends yI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ny()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vc}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const iw=32,sw=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new Se("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ai(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function vI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _I(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function Ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Se(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return Gt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yy(t,e){if(ai(t)!==ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ai(t)>ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yL{constructor(e,n){this.errorPrefix_=n,this.parts_=_I(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vh(this.parts_[r]);EI(this)}}function vL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vh(e),EI(t)}function _L(t){const e=t.parts_.pop();t.byteLength_-=Vh(e),t.parts_.length>0&&(t.byteLength_-=1)}function EI(t){if(t.byteLength_>sw)throw new Error(t.errorPrefix_+"has a key path longer than "+sw+" bytes ("+t.byteLength_+").");if(t.parts_.length>iw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iw+") or object contains a cycle "+Ii(t))}function Ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vy extends yI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vy}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ko=1e3,wL=60*5*1e3,ow=30*1e3,EL=1.3,SL=3e4,CL="server_kill",aw=3;class hr extends gI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hr.nextPersistentConnectionId_++,this.log_=Ll("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ko,this.maxReconnectDelay_=wL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(st(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ey,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;hr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tr(e,"w")){const r=ro(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();on(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ow)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ab(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cm("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SL&&(this.reconnectDelay_=Ko),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?kt("getToken() completed but was canceled"):(kt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new mL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{on(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(CL)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&on(h),l())}}}interrupt(e){kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tm(this.interruptReasons_)&&(this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aw&&(this.reconnectDelay_=ow,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+KC.replace(/\./g,"-")]=1,ny()?e["framework.cordova"]=1:cC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vc.getInstance().currentlyOnline();return tm(this.interruptReasons_)&&e}}hr.nextPersistentConnectionId_=0;hr.nextConnectionId_=0;/**
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
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
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
 */class qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(so,e),i=new ne(so,n);return this.compare(r,i)!==0}minPost(){return ne.MIN}}/**
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
 */let Tu;class SI extends qh{static get __EMPTY_NODE(){return Tu}static set __EMPTY_NODE(e){Tu=e}compare(e,n){return xo(e.name,n.name)}isDefinedOn(e){throw Co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Yi,Tu)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Tu)}toString(){return".key"}}const qs=new SI;/**
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
 */class ku{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Kt.EMPTY_NODE,this.right=s??Kt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Kt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class IL{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,n=Kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ku(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ku(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ku(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ku(this.root_,null,this.comparator_,!0,e)}}Kt.EMPTY_NODE=new IL;/**
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
 */function TL(t,e){return xo(t.name,e.name)}function _y(t,e){return xo(t,e)}/**
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
 */let dm;function kL(t){dm=t}const CI=function(t){return typeof t=="number"?"number:"+ZC(t):"string:"+t},II=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tr(e,".sv"),"Priority must be a string or number.")}else N(t===dm||t.isEmpty(),"priority of unexpected type.");N(t===dm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lw;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),II(this.priorityNode_)}static set __childrenNodeConstructor(e){lw=e}static get __childrenNodeConstructor(){return lw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ZC(this.value_):e+=this.value_,this.lazyHash_=YC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let TI,kI;function xL(t){TI=t}function RL(t){kI=t}class NL extends qh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Yi,new tt("[PRIORITY-POST]",kI))}makePost(e,n){const r=TI(e);return new ne(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new NL;/**
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
 */const AL=Math.log(2);class bL{constructor(e){const n=s=>parseInt(Math.log(s)/AL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new it(d,h.node,it.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),y=i(p+1,u);return h=t[p],d=n?n(h):h,new it(d,h.node,it.BLACK,g,y)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,y){const _=h-g,m=h;h-=g;const f=i(_+1,m),v=t[_],E=n?n(v):v;p(new it(E,v.node,y,null,f))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));y?d(_,it.BLACK):(d(_,it.BLACK),d(_,it.RED))}return c},o=new bL(t.length),a=s(o);return new Kt(r||e,a)};/**
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
 */let Lf;const ms={};class ar{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(ms&&$e,"ChildrenNode.ts has not been loaded"),Lf=Lf||new ar({".priority":ms},{".priority":$e}),Lf}get(e){const n=ro(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Kt?n:null}hasIndex(e){return Tr(this.indexSet_,e.toString())}addIndex(e,n){N(e!==qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ne.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Bc(r,e.getCompare()):a=ms;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new ar(c,u)}addToIndexes(e,n){const r=Pc(this.indexes_,(i,s)=>{const o=ro(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===ms)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Bc(a,o.getCompare())}else return ms;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pc(this.indexes_,i=>{if(i===ms)return i;{const s=n.get(e.name);return s?i.remove(new ne(e.name,s)):i}});return new ar(r,this.indexSet_)}}/**
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
 */let Qo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&II(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qo||(Qo=new j(new Kt(_y),null,ar.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qo:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=re(e);if(r===null)return n;{N(re(e)!==".priority"||ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CI(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":YC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ne(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$l?-1:0}withIndex(e){if(e===qs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PL extends j{constructor(){super(new Kt(_y),j.EMPTY_NODE,ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const $l=new PL;Object.defineProperties(ne,{MIN:{value:new ne(so,j.EMPTY_NODE)},MAX:{value:new ne(Yi,$l)}});SI.__EMPTY_NODE=j.EMPTY_NODE;tt.__childrenNodeConstructor=j;kL($l);RL($l);/**
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
 */const DL=!0;function xt(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,xt(e))}if(!(t instanceof Array)&&DL){const n=[];let r=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Bc(n,TL,o=>o.name,_y);if(r){const o=Bc(n,$e.getCompare());return new j(s,xt(e),new ar({".priority":o},{".priority":$e}))}else return new j(s,xt(e),ar.Default)}else{let n=j.EMPTY_NODE;return Jt(t,(r,i)=>{if(Tr(t,r)&&r.substring(0,1)!=="."){const s=xt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xt(e))}}xL(xt);/**
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
 */class OL extends qh{constructor(e){super(),this.indexPath_=e,N(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}makePost(e,n){const r=xt(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,$l);return new ne(Yi,e)}toString(){return _I(this.indexPath_,0).join("/")}}/**
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
 */class LL extends qh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=xt(e);return new ne(n,r)}toString(){return".value"}}const ML=new LL;/**
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
 */function xI(t){return{type:"value",snapshotNode:t}}function oo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Za(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function el(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $L(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Za(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(oo(n,r)):o.trackChildChange(el(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Za(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(el(i,s,o))}else r.trackChildChange(oo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class tl{constructor(e){this.indexedFilter_=new wy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tl.getStartPost_(e),this.endPost_=tl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ne(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new ne(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class FL{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new tl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ne(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new ne(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(el(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Za(n,h));const y=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(oo(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Za(u.name,u.node)),s.trackChildChange(oo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Ey{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:so}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Ey;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UL(t){return t.loadsAllData()?new wy(t.getIndex()):t.hasLimit()?new FL(t):new tl(t)}function uw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===ML?n="$value":t.index_===qs?n="$key":(N(t.index_ instanceof OL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=st(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+st(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=st(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
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
 */class zc extends gI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ll("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=zc.getListenId_(e,r),a={};this.listens_[o]=a;const l=uw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ro(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=zc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=uw(e._queryParams),r=e._path.toString(),i=new ey;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Io(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ka(a.responseText)}catch{on("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&on("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class VL{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jc(){return{value:null,children:new Map}}function RI(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,jc());const i=t.children.get(r);e=Ce(e),RI(i,e,n)}}function fm(t,e,n){t.value!==null?n(e,t.value):BL(t,(r,i)=>{const s=new Se(e.toString()+"/"+r);fm(i,s,n)})}function BL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class zL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hw=10*1e3,jL=30*1e3,WL=5*60*1e3;class HL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zL(e);const r=hw+(jL-hw)*Math.random();wa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Jt(e,(i,s)=>{s>0&&Tr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wa(this.reportStats_.bind(this),Math.floor(Math.random()*2*WL))}}/**
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
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function NI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nn.ACK_USER_WRITE,this.source=NI()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Wc(fe(),n,this.revert)}}else return N(re(this.path)===e,"operationForChild called for unrelated child."),new Wc(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class nl{constructor(e,n){this.source=e,this.path=n,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new nl(this.source,fe()):new nl(this.source,Ce(this.path))}}/**
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
 */class Xi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nn.OVERWRITE}operationForChild(e){return ie(this.path)?new Xi(this.source,fe(),this.snap.getImmediateChild(e)):new Xi(this.source,Ce(this.path),this.snap)}}/**
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
 */class rl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Xi(this.source,fe(),n.value):new rl(this.source,fe(),n)}else return N(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rl(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ji{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class qL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($L(o.childName,o.snapshotNode))}),Yo(t,i,"child_removed",e,r,n),Yo(t,i,"child_added",e,r,n),Yo(t,i,"child_moved",s,r,n),Yo(t,i,"child_changed",e,r,n),Yo(t,i,"value",e,r,n),i}function Yo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>QL(t,a,l)),o.forEach(a=>{const l=KL(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function KL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QL(t,e,n){if(e.childName==null||n.childName==null)throw Co("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Gh(t,e){return{eventCache:t,serverCache:e}}function Ea(t,e,n,r){return Gh(new Ji(e,n,r),t.serverCache)}function AI(t,e,n,r){return Gh(t.eventCache,new Ji(e,n,r))}function pm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mf;const YL=()=>(Mf||(Mf=new Kt(LO)),Mf);class xe{constructor(e,n=YL()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return Jt(e,(r,i)=>{n=n.set(new Se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ie(e))return null;{const r=re(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Ye(new Se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new xe(null)}}set(e,n){if(ie(e))return new xe(n,this.children);{const r=re(e),s=(this.children.get(r)||new xe(null)).set(Ce(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const r=re(e),s=(this.children.get(r)||new xe(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ie(e))return null;{const s=re(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const i=re(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Ye(n,i),r):new xe(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new xe(null))}}function Sa(t,e,n){if(ie(e))return new Pn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Gt(i,e);return s=s.updateChild(o,n),new Pn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new Pn(s)}}}function dw(t,e,n){let r=t;return Jt(n,(i,s)=>{r=Sa(r,Ye(e,i),s)}),r}function fw(t,e){if(ie(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Pn(n)}}function mm(t,e){return as(t,e)!=null}function as(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function pw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new ne(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ne(r,i.value))}),e}function Jr(t,e){if(ie(e))return t;{const n=as(t,e);return n!=null?new Pn(new xe(n)):new Pn(t.writeTree_.subtree(e))}}function gm(t){return t.writeTree_.isEmpty()}function ao(t,e){return bI(fe(),t.writeTree_,e)}function bI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=bI(Ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ye(t,".priority"),r)),n}}/**
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
 */function Iy(t,e){return LI(e,t)}function XL(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Sa(t.visibleWrites,e,n)),t.lastWriteId=r}function JL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&e2(a,r.path)?i=!1:Rn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return t2(t),!0;if(r.snap)t.visibleWrites=fw(t.visibleWrites,r.path);else{const a=r.children;Jt(a,l=>{t.visibleWrites=fw(t.visibleWrites,Ye(r.path,l))})}return!0}else return!1}function e2(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(Ye(t.path,n),e))return!0;return!1}function t2(t){t.visibleWrites=PI(t.allWrites,n2,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function n2(t){return t.visible}function PI(t,e,n){let r=Pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Rn(n,o)?(a=Gt(n,o),r=Sa(r,a,s.snap)):Rn(o,n)&&(a=Gt(o,n),r=Sa(r,fe(),s.snap.getChild(a)));else if(s.children){if(Rn(n,o))a=Gt(n,o),r=dw(r,a,s.children);else if(Rn(o,n))if(a=Gt(o,n),ie(a))r=dw(r,fe(),s.children);else{const l=ro(s.children,re(a));if(l){const u=l.getChild(Ce(a));r=Sa(r,fe(),u)}}}else throw Co("WriteRecord should have .snap or .children")}}return r}function DI(t,e,n,r,i){if(!r&&!i){const s=as(t.visibleWrites,e);if(s!=null)return s;{const o=Jr(t.visibleWrites,e);if(gm(o))return n;if(n==null&&!mm(o,fe()))return null;{const a=n||j.EMPTY_NODE;return ao(o,a)}}}else{const s=Jr(t.visibleWrites,e);if(!i&&gm(s))return n;if(!i&&n==null&&!mm(s,fe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Rn(u.path,e)||Rn(e,u.path))},a=PI(t.allWrites,o,e),l=n||j.EMPTY_NODE;return ao(a,l)}}}function r2(t,e,n){let r=j.EMPTY_NODE;const i=as(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jr(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=ao(Jr(s,new Se(o)),a);r=r.updateImmediateChild(o,l)}),pw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jr(t.visibleWrites,e);return pw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function i2(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ye(e,n);if(mm(t.visibleWrites,s))return null;{const o=Jr(t.visibleWrites,s);return gm(o)?i.getChild(n):ao(o,i.getChild(n))}}function s2(t,e,n,r){const i=Ye(e,n),s=as(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jr(t.visibleWrites,i);return ao(o,r.getNode().getImmediateChild(n))}else return null}function o2(t,e){return as(t.visibleWrites,e)}function a2(t,e,n,r,i,s,o){let a;const l=Jr(t.visibleWrites,e),u=as(l,fe());if(u!=null)a=u;else if(n!=null)a=ao(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function l2(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Hc(t,e,n,r){return DI(t.writeTree,t.treePath,e,n,r)}function Ty(t,e){return r2(t.writeTree,t.treePath,e)}function mw(t,e,n,r){return i2(t.writeTree,t.treePath,e,n,r)}function qc(t,e){return o2(t.writeTree,Ye(t.treePath,e))}function u2(t,e,n,r,i,s){return a2(t.writeTree,t.treePath,e,n,r,i,s)}function ky(t,e,n){return s2(t.writeTree,t.treePath,e,n)}function OI(t,e){return LI(Ye(t.treePath,e),t.writeTree)}function LI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class c2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,el(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Za(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,oo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,el(r,e.snapshotNode,i.oldSnap));else throw Co("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class h2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const MI=new h2;class xy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ji(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ky(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),s=u2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function d2(t){return{filter:t}}function f2(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function p2(t,e,n,r,i){const s=new c2;let o,a;if(n.type===Nn.OVERWRITE){const u=n;u.source.fromUser?o=ym(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ie(u.path),o=Gc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Nn.MERGE){const u=n;u.source.fromUser?o=g2(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=vm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Nn.ACK_USER_WRITE){const u=n;u.revert?o=_2(t,e,u.path,r,i,s):o=y2(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Nn.LISTEN_COMPLETE)o=v2(t,e,n.path,r,s);else throw Co("Unknown operation type: "+n.type);const l=s.getChanges();return m2(e,o,l),{viewCache:o,changes:l}}function m2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=pm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xI(pm(e)))}}function $I(t,e,n,r,i,s){const o=e.eventCache;if(qc(r,n)!=null)return e;{let a,l;if(ie(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zi(e),c=u instanceof j?u:j.EMPTY_NODE,h=Ty(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Hc(r,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=re(n);if(u===".priority"){N(ai(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=mw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Ce(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=mw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=ky(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Ea(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Gc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ie(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&ai(n)>1)return e;const g=Ce(n),_=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),p,_,g,MI,null)}const h=AI(e,u,l.isFullyInitialized()||ie(n),c.filtersNodes()),d=new xy(i,h,s);return $I(t,h,n,i,d,a)}function ym(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new xy(i,e,s);if(ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ea(e,u,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ea(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),p=a.getNode().getImmediateChild(h);let g;if(ie(d))g=r;else{const y=c.getCompleteChild(h);y!=null?vI(d)===".priority"&&y.getChild(wI(d)).isEmpty()?g=y:g=y.updateChild(d,r):g=j.EMPTY_NODE}if(p.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=Ea(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gw(t,e){return t.eventCache.isCompleteForChild(e)}function g2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ye(n,l);gw(e,re(c))&&(a=ym(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ye(n,l);gw(e,re(c))||(a=ym(t,a,c,u,i,s,o))}),a}function yw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ie(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=yw(t,p,d);l=Gc(t,l,new Se(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),y=yw(t,g,d);l=Gc(t,l,new Se(h),y,i,s,o,a)}}),l}function y2(t,e,n,r,i,s,o){if(qc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Gc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ie(n)){let u=new xe(null);return l.getNode().forEachChild(qs,(c,h)=>{u=u.set(new Se(c),h)}),vm(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,h)=>{const d=Ye(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),vm(t,e,n,u,i,s,a,o)}}function v2(t,e,n,r,i){const s=e.serverCache,o=AI(e,s.getNode(),s.isFullyInitialized()||ie(n),s.isFiltered());return $I(t,o,n,r,MI,i)}function _2(t,e,n,r,i,s){let o;if(qc(r,n)!=null)return e;{const a=new xy(r,e,i),l=e.eventCache.getNode();let u;if(ie(n)||re(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Hc(r,Zi(e));else{const h=e.serverCache.getNode();N(h instanceof j,"serverChildren would be complete if leaf node"),c=Ty(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=re(n);let h=ky(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,Ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hc(r,Zi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||qc(r,fe())!=null,Ea(e,u,o,t.filter.filtersNodes())}}/**
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
 */class w2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wy(r.getIndex()),s=UL(r);this.processor_=d2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new Ji(l,o.isFullyInitialized(),i.filtersNodes()),h=new Ji(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gh(h,c),this.eventGenerator_=new qL(this.query_)}get query(){return this.query_}}function E2(t){return t.viewCache_.serverCache.getNode()}function S2(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function vw(t){return t.eventRegistrations_.length===0}function C2(t,e){t.eventRegistrations_.push(e)}function _w(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ww(t,e,n,r){e.type===Nn.MERGE&&e.source.queryId!==null&&(N(Zi(t.viewCache_),"We should always have a full cache before handling merges"),N(pm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=p2(t.processor_,i,e,n,r);return f2(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,FI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function I2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(oo(s,o))}),n.isFullyInitialized()&&r.push(xI(n.getNode())),FI(t,r,n.getNode(),e)}function FI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return GL(t.eventGenerator_,e,n,i)}/**
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
 */let Kc;class T2{constructor(){this.views=new Map}}function k2(t){N(!Kc,"__referenceConstructor has already been defined"),Kc=t}function x2(){return N(Kc,"Reference.ts has not been loaded"),Kc}function R2(t){return t.views.size===0}function Ry(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),ww(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ww(o,e,n,r));return s}}function N2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Hc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Ty(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=Gh(new Ji(a,l,!1),new Ji(r,i,!1));return new w2(e,u)}return o}function A2(t,e,n,r,i,s){const o=N2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),C2(o,n),I2(o,n)}function b2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=li(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(_w(u,n,r)),vw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(_w(l,n,r)),vw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!li(t)&&s.push(new(x2())(e._repo,e._path)),{removed:s,events:o}}function UI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Gs(t,e){let n=null;for(const r of t.views.values())n=n||S2(r,e);return n}function VI(t,e){if(e._queryParams.loadsAllData())return Kh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function BI(t,e){return VI(t,e)!=null}function li(t){return Kh(t)!=null}function Kh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qc;function P2(t){N(!Qc,"__referenceConstructor has already been defined"),Qc=t}function D2(){return N(Qc,"Reference.ts has not been loaded"),Qc}let O2=1;class Ew{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=l2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function L2(t,e,n,r,i){return XL(t.pendingWriteTree_,e,n,r,i),i?Fl(t,new Xi(NI(),e,n)):[]}function Ds(t,e,n=!1){const r=JL(t.pendingWriteTree_,e);if(ZL(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(fe(),!0):Jt(r.children,o=>{s=s.set(new Se(o),!0)}),Fl(t,new Wc(r.path,s,n))}else return[]}function Qh(t,e,n){return Fl(t,new Xi(Sy(),e,n))}function M2(t,e,n){const r=xe.fromObject(n);return Fl(t,new rl(Sy(),e,r))}function $2(t,e){return Fl(t,new nl(Sy(),e))}function F2(t,e,n){const r=Ny(t,n);if(r){const i=Ay(r),s=i.path,o=i.queryId,a=Gt(s,e),l=new nl(Cy(o),a);return by(t,s,l)}else return[]}function _m(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||BI(o,e))){const l=b2(o,e,n,r);R2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>li(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=B2(d);for(let g=0;g<p.length;++g){const y=p[g],_=y.query,m=HI(t,y);t.listenProvider_.startListening(Ca(_),Yc(t,_),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ca(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(Yh(d));t.listenProvider_.stopListening(Ca(d),p)}))}z2(t,u)}return a}function U2(t,e,n,r){const i=Ny(t,r);if(i!=null){const s=Ay(i),o=s.path,a=s.queryId,l=Gt(o,e),u=new Xi(Cy(a),l,n);return by(t,o,u)}else return[]}function V2(t,e,n,r){const i=Ny(t,r);if(i){const s=Ay(i),o=s.path,a=s.queryId,l=Gt(o,e),u=xe.fromObject(n),c=new rl(Cy(a),l,u);return by(t,o,c)}else return[]}function Sw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=Gt(d,i);s=s||Gs(p,g),o=o||li(p)});let a=t.syncPointTree_.get(i);a?(o=o||li(a),s=s||Gs(a,fe())):(a=new T2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const y=Gs(g,fe());y&&(s=s.updateImmediateChild(p,y))}));const u=BI(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Yh(e);N(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=j2();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=Iy(t.pendingWriteTree_,i);let h=A2(a,e,n,c,s,l);if(!u&&!o&&!r){const d=VI(a,e);h=h.concat(W2(t,e,d))}return h}function zI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Gt(o,e),u=Gs(a,l);if(u)return u});return DI(i,e,s,n,!0)}function Fl(t,e){return jI(e,t.syncPointTree_,null,Iy(t.pendingWriteTree_,fe()))}function jI(t,e,n,r){if(ie(t.path))return WI(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=Gs(i,fe()));let s=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=OI(r,o);s=s.concat(jI(a,l,u,c))}return i&&(s=s.concat(Ry(i,t,r,n))),s}}function WI(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=Gs(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=OI(r,o),c=t.operationForChild(o);c&&(s=s.concat(WI(c,a,l,u)))}),i&&(s=s.concat(Ry(i,t,r,n))),s}function HI(t,e){const n=e.query,r=Yc(t,n);return{hashFn:()=>(E2(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?F2(t,n._path,r):$2(t,n._path);{const s=FO(i,n);return _m(t,n,null,s)}}}}function Yc(t,e){const n=Yh(e);return t.queryToTagMap.get(n)}function Yh(t){return t._path.toString()+"$"+t._queryIdentifier}function Ny(t,e){return t.tagToQueryMap.get(e)}function Ay(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function by(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Iy(t.pendingWriteTree_,e);return Ry(r,n,i,null)}function B2(t){return t.fold((e,n,r)=>{if(n&&li(n))return[Kh(n)];{let i=[];return n&&(i=UI(n)),Jt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ca(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(D2())(t._repo,t._path):t}function z2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Yh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function j2(){return O2++}function W2(t,e,n){const r=e._path,i=Yc(t,e),s=HI(t,n),o=t.listenProvider_.startListening(Ca(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!li(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!ie(u)&&c&&li(c))return[Kh(c).query];{let d=[];return c&&(d=d.concat(UI(c).map(p=>p.query))),Jt(h,(p,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ca(c),Yc(t,c))}}return o}/**
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
 */class Py{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Py(n)}node(){return this.node_}}class Dy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new Dy(this.syncTree_,n)}node(){return zI(this.syncTree_,this.path_)}}const H2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cw=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return q2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return G2(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},q2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},G2=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},K2=function(t,e,n,r){return Oy(e,new Dy(n,t),r)},Q2=function(t,e,n){return Oy(t,new Py(e),n)};function Oy(t,e,n){const r=t.getPriority().val(),i=Cw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Cw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,xt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild($e,(a,l)=>{const u=Oy(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Ly{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function My(t,e){let n=e instanceof Se?e:new Se(e),r=t,i=re(n);for(;i!==null;){const s=ro(r.node.children,i)||{children:{},childCount:0};r=new Ly(i,r,s),n=Ce(n),i=re(n)}return r}function Ro(t){return t.node.value}function qI(t,e){t.node.value=e,wm(t)}function GI(t){return t.node.childCount>0}function Y2(t){return Ro(t)===void 0&&!GI(t)}function Xh(t,e){Jt(t.node.children,(n,r)=>{e(new Ly(n,t,r))})}function KI(t,e,n,r){n&&!r&&e(t),Xh(t,i=>{KI(i,e,!0,r)}),n&&r&&e(t)}function X2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ul(t){return new Se(t.parent===null?t.name:Ul(t.parent)+"/"+t.name)}function wm(t){t.parent!==null&&J2(t.parent,t.name,t)}function J2(t,e,n){const r=Y2(n),i=Tr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wm(t))}/**
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
 */const Z2=/[\[\].#$\/\u0000-\u001F\u007F]/,eM=/[\[\].#$\u0000-\u001F\u007F]/,$f=10*1024*1024,QI=function(t){return typeof t=="string"&&t.length!==0&&!Z2.test(t)},YI=function(t){return typeof t=="string"&&t.length!==0&&!eM.test(t)},tM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YI(t)},XI=function(t,e,n){const r=n instanceof Se?new yL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ii(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ii(r)+" with contents = "+e.toString());if(XC(e))throw new Error(t+"contains "+e.toString()+" "+Ii(r));if(typeof e=="string"&&e.length>$f/3&&Vh(e)>$f)throw new Error(t+"contains a string greater than "+$f+" utf8 bytes "+Ii(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Jt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!QI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ii(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vL(r,o),XI(t,a,r),_L(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ii(r)+" in addition to actual children.")}},JI=function(t,e,n,r){if(!(r&&n===void 0)&&!YI(n))throw new Error(fC(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),JI(t,e,n,r)},rM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!QI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tM(n))throw new Error(fC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class iM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function eT(t,e,n){ZI(t,n),tT(t,r=>yy(r,e))}function ls(t,e,n){ZI(t,n),tT(t,r=>Rn(r,e)||Rn(e,r))}function tT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$i&&kt("event: "+n.toString()),Ml(r)}}}/**
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
 */const oM="repo_interrupt",aM=25;class lM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jc(),this.transactionQueueTree_=new Ly,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uM(t,e,n){if(t.stats_=my(t.repoInfo_),t.forceRestClient_||zO())t.server_=new zc(t.repoInfo_,(r,i,s,o)=>{Iw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new hr(t.repoInfo_,e,(r,i,s,o)=>{Iw(t,r,i,s,o)},r=>{Tw(t,r)},r=>{hM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GO(t.repoInfo_,()=>new HL(t.stats_,t.server_)),t.infoData_=new VL,t.infoSyncTree_=new Ew({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Qh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$y(t,"connected",!1),t.serverSyncTree_=new Ew({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ls(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cM(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nT(t){return H2({timestamp:cM(t)})}function Iw(t,e,n,r,i){t.dataUpdateCount++;const s=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Pc(n,u=>xt(u));o=V2(t.serverSyncTree_,s,l,i)}else{const l=xt(n);o=U2(t.serverSyncTree_,s,l,i)}else if(r){const l=Pc(n,u=>xt(u));o=M2(t.serverSyncTree_,s,l)}else{const l=xt(n);o=Qh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Uy(t,s)),ls(t.eventQueue_,a,o)}function Tw(t,e){$y(t,"connected",e),e===!1&&fM(t)}function hM(t,e){Jt(e,(n,r)=>{$y(t,n,r)})}function $y(t,e,n){const r=new Se("/.info/"+e),i=xt(n);t.infoData_.updateSnapshot(r,i);const s=Qh(t.infoSyncTree_,r,i);ls(t.eventQueue_,r,s)}function dM(t){return t.nextWriteId_++}function fM(t){rT(t,"onDisconnectEvents");const e=nT(t),n=jc();fm(t.onDisconnect_,fe(),(i,s)=>{const o=K2(i,s,t.serverSyncTree_,e);RI(n,i,o)});let r=[];fm(n,fe(),(i,s)=>{r=r.concat(Qh(t.serverSyncTree_,i,s));const o=vM(t,i);Uy(t,o)}),t.onDisconnect_=jc(),ls(t.eventQueue_,fe(),r)}function pM(t,e,n){let r;re(e._path)===".info"?r=Sw(t.infoSyncTree_,e,n):r=Sw(t.serverSyncTree_,e,n),eT(t.eventQueue_,e._path,r)}function kw(t,e,n){let r;re(e._path)===".info"?r=_m(t.infoSyncTree_,e,n):r=_m(t.serverSyncTree_,e,n),eT(t.eventQueue_,e._path,r)}function mM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oM)}function rT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),kt(n,...e)}function iT(t,e,n){return zI(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Fy(t,e=t.transactionQueueTree_){if(e||Jh(t,e),Ro(e)){const n=oT(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gM(t,Ul(e),n)}else GI(e)&&Xh(e,n=>{Fy(t,n)})}function gM(t,e,n){const r=n.map(u=>u.currentWriteId),i=iT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Gt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{rT(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ds(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Jh(t,My(t.transactionQueueTree_,e)),Fy(t,t.transactionQueueTree_),ls(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Ml(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{on("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Uy(t,e)}},o)}function Uy(t,e){const n=sT(t,e),r=Ul(n),i=oT(t,n);return yM(t,i,r),r}function yM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Gt(n,l.path);let c=!1,h;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aM)c=!0,h="maxretry",i=i.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else{const d=iT(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){XI("transaction failed: Data returned ",p,l.path);let g=xt(p);typeof p=="object"&&p!=null&&Tr(p,".priority")||(g=g.updatePriority(d.getPriority()));const _=l.currentWriteId,m=nT(t),f=Q2(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=f,l.currentWriteId=dM(t),o.splice(o.indexOf(_),1),i=i.concat(L2(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Ds(t.serverSyncTree_,_,!0))}else c=!0,h="nodata",i=i.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0))}ls(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Jh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ml(r[a]);Fy(t,t.transactionQueueTree_)}function sT(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&Ro(r)===void 0;)r=My(r,n),e=Ce(e),n=re(e);return r}function oT(t,e){const n=[];return aT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aT(t,e,n){const r=Ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xh(e,i=>{aT(t,i,n)})}function Jh(t,e){const n=Ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,qI(e,n.length>0?n:void 0)}Xh(e,r=>{Jh(t,r)})}function vM(t,e){const n=Ul(sT(t,e)),r=My(t.transactionQueueTree_,e);return X2(r,i=>{Ff(t,i)}),Ff(t,r),KI(r,i=>{Ff(t,i)}),n}function Ff(t,e){const n=Ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ds(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?qI(e,void 0):n.length=s+1,ls(t.eventQueue_,Ul(e),i);for(let o=0;o<r.length;o++)Ml(r[o])}}/**
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
 */function _M(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):on(`Invalid query segment '${n}' in query '${t}'`)}return e}const xw=function(t,e){const n=EM(t),r=n.namespace;n.domain==="firebase.com"&&_r(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_r("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Se(n.pathString)}},EM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=_M(t.substring(c,h)));const d=wM(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class lT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class uT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class SM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ie(this._path)?null:vI(this._path)}get ref(){return new kr(this._repo,this._path)}get _queryIdentifier(){const e=cw(this._queryParams),n=fy(e);return n==="{}"?"default":n}get _queryObject(){return cw(this._queryParams)}isEqual(e){if(e=ye(e),!(e instanceof Vy))return!1;const n=this._repo===e._repo,r=yy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gL(this._path)}}class kr extends Vy{constructor(e,n){super(e,n,new Ey,!1)}get parent(){const e=wI(this._path);return e===null?null:new kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class il{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),r=Xc(this.ref,e);return new il(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new il(i,Xc(this.ref,r),$e)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function CM(t,e){return t=ye(t),t._checkNotDeleted("ref"),e!==void 0?Xc(t._root,e):t._root}function Xc(t,e){return t=ye(t),re(t._path)===null?nM("child","path",e,!1):JI("child","path",e,!1),new kr(t._repo,Ye(t._path,e))}class By{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lT("value",this,new il(e.snapshotNode,new kr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new uT(this,e,n):null}matches(e){return e instanceof By?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zy{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new uT(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Xc(new kr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new lT(e.type,this,new il(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zy?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function IM(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{kw(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new SM(n,s||void 0),a=e==="value"?new By(o):new zy(e,o);return pM(t._repo,t,a),()=>kw(t._repo,t,a)}function TM(t,e,n,r){return IM(t,"value",e,n,r)}function kM(t,...e){let n=ye(t);for(const r of e)n=r._apply(n);return n}k2(kr);P2(kr);/**
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
 */const xM="FIREBASE_DATABASE_EMULATOR_HOST",Em={};let RM=!1;function NM(t,e,n,r){t.repoInfo_=new uI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function AM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||_r("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[xM]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=xw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Hs(Hs.OWNER):new WO(t.name,t.options,e);rM("Invalid Firebase Database URL",o),ie(o.path)||_r("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PM(a,t,c,new jO(t.name,n));return new DM(h,t)}function bM(t,e){const n=Em[e];(!n||n[t.key]!==t)&&_r(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mM(t),delete n[t.key]}function PM(t,e,n,r){let i=Em[e.name];i||(i={},Em[e.name]=i);let s=i[t.toURLString()];return s&&_r("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new lM(t,RM,n,r),i[t.toURLString()]=s,s}class DM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kr(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_r("Cannot call "+e+" on a deleted database.")}}function OM(t=zh(),e){const n=xl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Zg("database");r&&LM(n,...r)}return n}function LM(t,e,n,r={}){t=ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_r("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&_r('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Hs(Hs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ty(r.mockUserToken,t.app.options.projectId);s=new Hs(o)}NM(i,e,n,s)}/**
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
 */function MM(t){RO(os),oi(new yr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return AM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(G0,K0,t),yn(G0,K0,"esm2017")}hr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MM();var $M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,jy=jy||{},Y=$M||self;function Jc(){}function Zh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FM(t){return Object.prototype.hasOwnProperty.call(t,Uf)&&t[Uf]||(t[Uf]=++UM)}var Uf="closure_uid_"+(1e9*Math.random()>>>0),UM=0;function VM(t,e,n){return t.call.apply(t.bind,arguments)}function BM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=VM:At=BM,At.apply(null,arguments)}function xu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gi(){this.s=this.s,this.o=this.o}var zM=0;gi.prototype.s=!1;gi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zM!=0)&&FM(this)};gi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var jM=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Jc,e),Y.removeEventListener("test",Jc,e)}catch{}return t}();function Zc(t){return/^[\s\xa0]*$/.test(t)}var Nw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vf(t,e){return t<e?-1:t>e?1:0}function ed(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Vn(t){return ed().indexOf(t)!=-1}function Hy(t){return Hy[" "](t),t}Hy[" "]=Jc;function WM(t){var e=GM;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var HM=Vn("Opera"),lo=Vn("Trident")||Vn("MSIE"),hT=Vn("Edge"),Sm=hT||lo,dT=Vn("Gecko")&&!(ed().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),qM=ed().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function fT(){var t=Y.document;return t?t.documentMode:void 0}var eh;e:{var Bf="",zf=function(){var t=ed();if(dT)return/rv:([^\);]+)(\)|;)/.exec(t);if(hT)return/Edge\/([\d\.]+)/.exec(t);if(lo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qM)return/WebKit\/(\S+)/.exec(t);if(HM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zf&&(Bf=zf?zf[1]:""),lo){var jf=fT();if(jf!=null&&jf>parseFloat(Bf)){eh=String(jf);break e}}eh=Bf}var GM={};function KM(){return WM(function(){let t=0;const e=Nw(String(eh)).split("."),n=Nw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vf(i[2].length==0,s[2].length==0)||Vf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Cm;if(Y.document&&lo){var Aw=fT();Cm=Aw||parseInt(eh,10)||void 0}else Cm=void 0;var QM=Cm;function sl(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dT){e:{try{Hy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sl.X.h.call(this)}}vt(sl,bt);var YM={2:"touch",3:"pen",4:"mouse"};sl.prototype.h=function(){sl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bl="closure_listenable_"+(1e6*Math.random()|0),XM=0;function JM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++XM,this.ba=this.ea=!1}function td(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pT(t){const e={};for(const n in t)e[n]=t[n];return e}const bw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<bw.length;s++)n=bw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nd(t){this.src=t,this.g={},this.h=0}nd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tm(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new JM(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Im(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=cT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(td(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Gy="closure_lm_"+(1e6*Math.random()|0),Wf={};function gT(t,e,n,r,i){if(r&&r.once)return vT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gT(t,e[s],n,r,i);return null}return n=Yy(n),t&&t[Bl]?t.N(e,n,Vl(r)?!!r.capture:!!r,i):yT(t,e,n,!1,r,i)}function yT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vl(i)?!!i.capture:!!i,a=Qy(t);if(a||(t[Gy]=a=new nd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZM(){function t(n){return e.call(t.src,t.listener,n)}const e=e$;return t}function vT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vT(t,e[s],n,r,i);return null}return n=Yy(n),t&&t[Bl]?t.O(e,n,Vl(r)?!!r.capture:!!r,i):yT(t,e,n,!0,r,i)}function _T(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_T(t,e[s],n,r,i);else r=Vl(r)?!!r.capture:!!r,n=Yy(n),t&&t[Bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tm(s,n,r,i),-1<n&&(td(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tm(e,n,r,i)),(n=-1<t?e[t]:null)&&Ky(n))}function Ky(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Bl])Im(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qy(e))?(Im(n,t),n.h==0&&(n.src=null,e[Gy]=null)):td(t)}}}function wT(t){return t in Wf?Wf[t]:Wf[t]="on"+t}function e$(t,e){if(t.ba)t=!0;else{e=new sl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ky(t),t=n.call(r,e)}return t}function Qy(t){return t=t[Gy],t instanceof nd?t:null}var Hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yy(t){return typeof t=="function"?t:(t[Hf]||(t[Hf]=function(e){return t.handleEvent(e)}),t[Hf])}function at(){gi.call(this),this.i=new nd(this),this.P=this,this.I=null}vt(at,gi);at.prototype[Bl]=!0;at.prototype.removeEventListener=function(t,e,n,r){_T(this,t,e,n,r)};function mt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),mT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ru(o,r,!0,e)&&i}if(o=e.g=t,i=Ru(o,r,!0,e)&&i,i=Ru(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ru(o,r,!1,e)&&i}at.prototype.M=function(){if(at.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)td(n[r]);delete t.g[e],t.h--}}this.I=null};at.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ru(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Im(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xy=Y.JSON.stringify;function t$(){var t=CT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class n${constructor(){this.h=this.g=null}add(e,n){const r=ET.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ET=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new r$,t=>t.reset());class r${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function i$(t){Y.setTimeout(()=>{throw t},0)}function ST(t,e){km||s$(),xm||(km(),xm=!0),CT.add(t,e)}var km;function s$(){var t=Y.Promise.resolve(void 0);km=function(){t.then(o$)}}var xm=!1,CT=new n$;function o$(){for(var t;t=t$();){try{t.h.call(t.g)}catch(n){i$(n)}var e=ET;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xm=!1}function rd(t,e){at.call(this),this.h=t||1,this.g=e||Y,this.j=At(this.lb,this),this.l=Date.now()}vt(rd,at);V=rd.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mt(this,"tick"),this.ca&&(Jy(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jy(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){rd.X.M.call(this),Jy(this),delete this.g};function Zy(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function IT(t){t.g=Zy(()=>{t.g=null,t.i&&(t.i=!1,IT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class a$ extends gi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:IT(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ol(t){gi.call(this),this.h=t,this.g={}}vt(ol,gi);var Pw=[];function TT(t,e,n,r){Array.isArray(n)||(n&&(Pw[0]=n.toString()),n=Pw);for(var i=0;i<n.length;i++){var s=gT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kT(t){qy(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ky(e)},t),t.g={}}ol.prototype.M=function(){ol.X.M.call(this),kT(this)};ol.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function id(){this.g=!0}id.prototype.Aa=function(){this.g=!1};function l$(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function u$(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+h$(t,n)+(r?" "+r:"")})}function c$(t,e){t.info(function(){return"TIMEOUT: "+e})}id.prototype.info=function(){};function h$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xy(n)}catch{return e}}var us={},Dw=null;function sd(){return Dw=Dw||new at}us.Pa="serverreachability";function xT(t){bt.call(this,us.Pa,t)}vt(xT,bt);function al(t){const e=sd();mt(e,new xT(e))}us.STAT_EVENT="statevent";function RT(t,e){bt.call(this,us.STAT_EVENT,t),this.stat=e}vt(RT,bt);function Ut(t){const e=sd();mt(e,new RT(e,t))}us.Qa="timingevent";function NT(t,e){bt.call(this,us.Qa,t),this.size=e}vt(NT,bt);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var od={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},AT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ev(){}ev.prototype.h=null;function Ow(t){return t.h||(t.h=t.i())}function bT(){}var jl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tv(){bt.call(this,"d")}vt(tv,bt);function nv(){bt.call(this,"c")}vt(nv,bt);var Rm;function ad(){}vt(ad,ev);ad.prototype.g=function(){return new XMLHttpRequest};ad.prototype.i=function(){return{}};Rm=new ad;function Wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ol(this),this.O=d$,t=Sm?125:void 0,this.T=new rd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new PT}function PT(){this.i=null,this.g="",this.h=!1}var d$=45e3,Nm={},th={};V=Wl.prototype;V.setTimeout=function(t){this.O=t};function Am(t,e,n){t.K=1,t.v=ud(wr(e)),t.s=n,t.P=!0,DT(t,null)}function DT(t,e){t.F=Date.now(),Hl(t),t.A=wr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),BT(n.i,"t",r),t.C=0,n=t.l.H,t.h=new PT,t.g=lk(t.l,n?e:null,!t.s),0<t.N&&(t.L=new a$(At(t.La,t,t.g),t.N)),TT(t.S,t.g,"readystatechange",t.ib),e=t.H?pT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),al(),l$(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&lr(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const c=lr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Sm||this.g&&(this.h.h||this.g.fa()||Fw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?al(3):al(2)),ld(this);var n=this.g.aa();this.Y=n;t:if(OT(this)){var r=Fw(this.g);t="";var i=r.length,s=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ni(this),Ia(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,u$(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zc(a)){var u=a;break t}}u=null}if(n=u)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bm(this,n);else{this.i=!1,this.o=3,Ut(12),Ni(this),Ia(this);break e}}this.P?(LT(this,c,o),Sm&&this.i&&c==3&&(TT(this.S,this.T,"tick",this.hb),this.T.start())):(Os(this.j,this.m,o,null),bm(this,o)),c==4&&Ni(this),this.i&&!this.I&&(c==4?ik(this.l,this):(this.i=!1,Hl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),Ni(this),Ia(this)}}}catch{}finally{}};function OT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function LT(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=f$(t,n),i==th){e==4&&(t.o=4,Ut(14),r=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nm){t.o=4,Ut(15),Os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Os(t.j,t.m,i,null),bm(t,i);OT(t)&&i!=th&&i!=Nm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),uv(e),e.K=!0,Ut(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),Ni(t),Ia(t))}V.hb=function(){if(this.g){var t=lr(this.g),e=this.g.fa();this.C<e.length&&(ld(this),LT(this,t,e),this.i&&t!=4&&Hl(this))}};function f$(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?th:(n=Number(e.substring(n,r)),isNaN(n)?Nm:(r+=1,r+n>e.length?th:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,Ni(this)};function Hl(t){t.V=Date.now()+t.O,MT(t,t.O)}function MT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zl(At(t.gb,t),e)}function ld(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(c$(this.j,this.A),this.K!=2&&(al(),Ut(17)),Ni(this),this.o=2,Ia(this)):MT(this,this.V-t)};function Ia(t){t.l.G==0||t.I||ik(t.l,t)}function Ni(t){ld(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jy(t.T),kT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pm(n.h,t))){if(!t.J&&Pm(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ih(n),dd(n);else break e;lv(n),Ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zl(At(n.cb,n),6e3));if(1>=WT(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ai(n,11)}else if((t.J||n.g==t)&&ih(n),!Zc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rv(s,s.h),s.h=null))}if(r.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,be(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=ak(r,r.H?r.ka:null,r.V),o.J){HT(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ld(a),Hl(a)),r.g=o}else nk(r);0<n.i.length&&fd(n)}else u[0]!="stop"&&u[0]!="close"||Ai(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ai(n,7):av(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}al(4)}catch{}}function p$(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function m$(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $T(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=m$(t),r=p$(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g$(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fi){this.h=e!==void 0?e:t.h,nh(this,t.j),this.s=t.s,this.g=t.g,rh(this,t.m),this.l=t.l,e=t.i;var n=new ll;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lw(this,n),this.o=t.o}else t&&(n=String(t).match(FT))?(this.h=!!e,nh(this,n[1]||"",!0),this.s=oa(n[2]||""),this.g=oa(n[3]||"",!0),rh(this,n[4]),this.l=oa(n[5]||"",!0),Lw(this,n[6]||"",!0),this.o=oa(n[7]||"")):(this.h=!!e,this.i=new ll(null,this.h))}Fi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(aa(e,Mw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(aa(e,Mw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(aa(n,n.charAt(0)=="/"?_$:v$,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",aa(n,E$)),t.join("")};function wr(t){return new Fi(t)}function nh(t,e,n){t.j=n?oa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lw(t,e,n){e instanceof ll?(t.i=e,S$(t.i,t.h)):(n||(e=aa(e,w$)),t.i=new ll(e,t.h))}function be(t,e,n){t.i.set(e,n)}function ud(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function aa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,y$),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function y$(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mw=/[#\/\?@]/g,v$=/[#\?:]/g,_$=/[#\?]/g,w$=/[#\?@]/g,E$=/#/g;function ll(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new Map,t.h=0,t.i&&g$(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=ll.prototype;V.add=function(t,e){yi(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UT(t,e){yi(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function VT(t,e){return yi(t),e=No(t,e),t.g.has(e)}V.forEach=function(t,e){yi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.oa=function(){yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.W=function(t){yi(this);let e=[];if(typeof t=="string")VT(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return yi(this),this.i=null,t=No(this,t),VT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function BT(t,e,n){UT(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),Wy(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function S$(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UT(this,r),BT(this,i,n))},t)),t.j=e}var C$=class{constructor(e,n){this.h=e,this.g=n}};function zT(t){this.l=t||I$,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var I$=10;function jT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function WT(t){return t.h?1:t.g?t.g.size:0}function Pm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rv(t,e){t.g?t.g.add(e):t.h=e}function HT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zT.prototype.cancel=function(){if(this.i=qT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wy(t.i)}function iv(){}iv.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};iv.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function T$(){this.g=new iv}function k$(t,e,n){const r=n||"";try{$T(t,function(i,s){let o=i;Vl(i)&&(o=Xy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function x$(t,e){const n=new id;if(Y.Image){const r=new Image;r.onload=xu(Nu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xu(Nu,n,r,"TestLoadImage: error",!1,e),r.onabort=xu(Nu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xu(Nu,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ql(t){this.l=t.ac||null,this.j=t.jb||!1}vt(ql,ev);ql.prototype.g=function(){return new cd(this.l,this.j)};ql.prototype.i=function(t){return function(){return t}}({});function cd(t,e){at.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(cd,at);var sv=0;V=cd.prototype;V.open=function(t,e){if(this.readyState!=sv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ul(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gl(this)),this.readyState=sv};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ul(this)),this.g&&(this.readyState=3,ul(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;GT(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function GT(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gl(this):ul(this),this.readyState==3&&GT(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Gl(this))};V.Ua=function(t){this.g&&(this.response=t,Gl(this))};V.ga=function(){this.g&&Gl(this)};function Gl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ul(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ul(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var R$=Y.JSON.parse;function Fe(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=KT,this.K=this.L=!1}vt(Fe,at);var KT="",N$=/^https?$/i,A$=["POST","PUT"];V=Fe.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Rm.g(),this.C=this.u?Ow(this.u):Ow(Rm),this.g.onreadystatechange=At(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){$w(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=cT(A$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{XT(this),0<this.B&&((this.K=b$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.qa,this)):this.A=Zy(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$w(this,s)}};function b$(t){return lo&&KM()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof jy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function $w(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,QT(t),hd(t)}function QT(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),hd(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hd(this,!0)),Fe.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?YT(this):this.fb())};V.fb=function(){YT(this)};function YT(t){if(t.h&&typeof jy<"u"&&(!t.C[1]||lr(t)!=4||t.aa()!=2)){if(t.v&&lr(t)==4)Zy(t.Ha,0,t);else if(mt(t,"readystatechange"),lr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(FT)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!N$.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<lr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",QT(t)}}finally{hd(t)}}}}function hd(t,e){if(t.g){XT(t);const n=t.g,r=t.C[0]?Jc:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function XT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function lr(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),R$(e)}};function Fw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case KT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JT(t){let e="";return qy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ov(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Xo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ZT(t){this.Ca=0,this.i=[],this.j=new id,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xo("baseRetryDelayMs",5e3,t),this.bb=Xo("retryDelaySeedMs",1e4,t),this.$a=Xo("forwardChannelMaxRetries",2,t),this.ta=Xo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zT(t&&t.concurrentRequestLimit),this.Fa=new T$,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=ZT.prototype;V.ma=8;V.G=1;function av(t){if(ek(t),t.G==3){var e=t.U++,n=wr(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),Kl(t,n),e=new Wl(t,t.j,e,void 0),e.K=2,e.v=ud(wr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=lk(e.l,null),e.g.da(e.v)),e.F=Date.now(),Hl(e)}ok(t)}function dd(t){t.g&&(uv(t),t.g.cancel(),t.g=null)}function ek(t){dd(t),t.u&&(Y.clearTimeout(t.u),t.u=null),ih(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function fd(t){jT(t.h)||t.m||(t.m=!0,ST(t.Ja,t),t.C=0)}function P$(t,e){return WT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zl(At(t.Ja,t,e),sk(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Wl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=pT(s),mT(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tk(this,i,e),n=wr(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),Kl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(JT(s)))+"&"+e:this.o&&ov(n,this.o,s)),rv(this.h,i),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),i.Z=!0,Am(i,n,null)):Am(i,n,e),this.G=2}}else this.G==3&&(t?Uw(this,t):this.i.length==0||jT(this.h)||Uw(this))};function Uw(t,e){var n;e?n=e.m:n=t.U++;const r=wr(t.F);be(r,"SID",t.I),be(r,"RID",n),be(r,"AID",t.T),Kl(t,r),t.o&&t.s&&ov(r,t.o,t.s),n=new Wl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tk(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rv(t.h,n),Am(n,r,e)}function Kl(t,e){t.ia&&qy(t.ia,function(n,r){be(e,r,n)}),t.l&&$T({},function(n,r){be(e,r,n)})}function tk(t,e,n){n=Math.min(t.i.length,n);var r=t.l?At(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{k$(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function nk(t){t.g||t.u||(t.Z=1,ST(t.Ia,t),t.A=0)}function lv(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zl(At(t.Ia,t),sk(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,rk(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zl(At(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ut(10),dd(this),rk(this))};function uv(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function rk(t){t.g=new Wl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wr(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),Kl(t,e),t.o&&t.s&&ov(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ud(wr(e)),n.s=null,n.P=!0,DT(n,t)}V.cb=function(){this.v!=null&&(this.v=null,dd(this),lv(this),Ut(19))};function ih(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function ik(t,e){var n=null;if(t.g==e){ih(t),uv(t),t.g=null;var r=2}else if(Pm(t.h,e))n=e.D,HT(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=sd(),mt(r,new NT(r,n)),fd(t)}else nk(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&P$(t,e)||r==2&&lv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ai(t,5);break;case 4:Ai(t,10);break;case 3:Ai(t,6);break;default:Ai(t,2)}}}function sk(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ai(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=At(t.kb,t);n||(n=new Fi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||nh(n,"https"),ud(n)),x$(n.toString(),r)}else Ut(2);t.G=0,t.l&&t.l.va(e),ok(t),ek(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function ok(t){if(t.G=0,t.la=[],t.l){const e=qT(t.h);(e.length!=0||t.i.length!=0)&&(Rw(t.la,e),Rw(t.la,t.i),t.h.i.length=0,Wy(t.i),t.i.length=0),t.l.ua()}}function ak(t,e,n){var r=n instanceof Fi?wr(n):new Fi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),rh(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fi(null,void 0);r&&nh(s,r),e&&(s.g=e),i&&rh(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&be(r,n,e),be(r,"VER",t.ma),Kl(t,r),r}function lk(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Fe(new ql({jb:!0})):new Fe(t.ra),e.Ka(t.H),e}function uk(){}V=uk.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function sh(){if(lo&&!(10<=Number(QM)))throw Error("Environmental error: no available transport.")}sh.prototype.g=function(t,e){return new ln(t,e)};function ln(t,e){at.call(this),this.g=new ZT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Zc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ao(this)}vt(ln,at);ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ak(t,null,t.V),fd(t)};ln.prototype.close=function(){av(this.g)};ln.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xy(t),t=n);e.i.push(new C$(e.ab++,t)),e.G==3&&fd(e)};ln.prototype.M=function(){this.g.l=null,delete this.j,av(this.g),delete this.g,ln.X.M.call(this)};function ck(t){tv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(ck,tv);function hk(){nv.call(this),this.status=1}vt(hk,nv);function Ao(t){this.g=t}vt(Ao,uk);Ao.prototype.xa=function(){mt(this.g,"a")};Ao.prototype.wa=function(t){mt(this.g,new ck(t))};Ao.prototype.va=function(t){mt(this.g,new hk)};Ao.prototype.ua=function(){mt(this.g,"b")};sh.prototype.createWebChannel=sh.prototype.g;ln.prototype.send=ln.prototype.u;ln.prototype.open=ln.prototype.m;ln.prototype.close=ln.prototype.close;od.NO_ERROR=0;od.TIMEOUT=8;od.HTTP_ERROR=6;AT.COMPLETE="complete";bT.EventType=jl;jl.OPEN="a";jl.CLOSE="b";jl.ERROR="c";jl.MESSAGE="d";at.prototype.listen=at.prototype.N;Fe.prototype.listenOnce=Fe.prototype.O;Fe.prototype.getLastError=Fe.prototype.Oa;Fe.prototype.getLastErrorCode=Fe.prototype.Ea;Fe.prototype.getStatus=Fe.prototype.aa;Fe.prototype.getResponseJson=Fe.prototype.Sa;Fe.prototype.getResponseText=Fe.prototype.fa;Fe.prototype.send=Fe.prototype.da;Fe.prototype.setWithCredentials=Fe.prototype.Ka;var D$=function(){return new sh},O$=function(){return sd()},qf=od,L$=AT,M$=us,Vw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$$=ql,Au=bT,F$=Fe;const Bw="@firebase/firestore";/**
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
 */let It=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let bo="9.19.0";/**
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
 */const es=new Bh("@firebase/firestore");function zw(){return es.logLevel}function B(t,...e){if(es.logLevel<=de.DEBUG){const n=e.map(cv);es.debug(`Firestore (${bo}): ${t}`,...n)}}function Er(t,...e){if(es.logLevel<=de.ERROR){const n=e.map(cv);es.error(`Firestore (${bo}): ${t}`,...n)}}function oh(t,...e){if(es.logLevel<=de.WARN){const n=e.map(cv);es.warn(`Firestore (${bo}): ${t}`,...n)}}function cv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function Ne(t,e){t||G()}function ee(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let L=class extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let dr=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
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
 */let dk=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},U$=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}},V$=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},B$=class{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new dk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new It(e)}},z$=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},j$=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new z$(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}},W$=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},H$=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.T=n.token,new W$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function q$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */let fk=class{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=q$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}};function ge(t,e){return t<e?-1:t>e?1:0}function uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Je(0,0))}static max(){return new Z(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends cl{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const G$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends cl{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return G$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ie.fromString(e))}static fromName(e){return new z(Ie.fromString(e).popFirst(5))}static empty(){return new z(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ie(e.slice()))}}function K$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new ui(i,z.empty(),e)}function Q$(t){return new ui(t.readTime,t.key,-1)}class ui{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ui(Z.min(),z.empty(),-1)}static max(){return new ui(Z.max(),z.empty(),-1)}}function Y$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const X$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ql(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==X$)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Yl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}hv.ct=-1;function pd(t){return t==null}function ah(t){return t===0&&1/t==-1/0}function Z$(t){return typeof t=="number"&&Number.isInteger(t)&&!ah(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Lt=class Dm{constructor(e,n){this.comparator=e,this.root=n||Zr.EMPTY}insert(e,n){return new Dm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zr.BLACK,null,null))}remove(e){return new Dm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}};class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let Zr=class Jn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Jn.RED,this.left=i??Jn.EMPTY,this.right=s??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Jn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Jn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}};Zr.EMPTY=null,Zr.RED=!0,Zr.BLACK=!1;Zr.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Zr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ww(this.data.getIterator())}getIteratorFrom(e){return new Ww(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}let Ww=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
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
 */let Bn=class Om{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Om([])}unionWith(e){let n=new Ze(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Om(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */let eF=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
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
 */let un=class Lm{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new eF("Invalid base64 string: "+i):i}}(e);return new Lm(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Lm(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};un.EMPTY_BYTE_STRING=new un("");const tF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=tF.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function co(t){return typeof t=="string"?un.fromBase64String(t):un.fromUint8Array(t)}/**
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
 */function dv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mk(t){const e=t.mapValue.fields.__previous_value__;return dv(e)?mk(e):e}function hl(t){const e=ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */let nF=class{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}};class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dv(t)?4:rF(t)?9007199254740991:10:G()}function Qn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hl(t).isEqual(hl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ci(r.timestampValue),o=ci(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return co(r.bytesValue).isEqual(co(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return We(r.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(r.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return We(r.integerValue)===We(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=We(r.doubleValue),o=We(i.doubleValue);return s===o?ah(s)===ah(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(jw(s)!==jw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Qn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function fl(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=We(i.integerValue||i.doubleValue),a=We(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hw(t.timestampValue,e.timestampValue);case 4:return Hw(hl(t),hl(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,s){const o=co(i),a=co(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ge(o[l],a[l]);if(u!==0)return u}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ge(We(i.latitude),We(s.latitude));return o!==0?o:ge(We(i.longitude),We(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ho(o[l],a[l]);if(u)return u}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Pu.mapValue&&s===Pu.mapValue)return 0;if(i===Pu.mapValue)return 1;if(s===Pu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ge(a[c],u[c]);if(h!==0)return h;const d=ho(o[a[c]],l[u[c]]);if(d!==0)return d}return ge(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Hw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ci(t),r=ci(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function fo(t){return Mm(t)}function Mm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ci(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?co(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Mm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Mm(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function lh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $m(t){return!!t&&"integerValue"in t}function fv(t){return!!t&&"arrayValue"in t}function qw(t){return!!t&&"nullValue"in t}function Gw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tc(t){return!!t&&"mapValue"in t}function Ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=Nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(Ta(this.value))}}function gk(t){const e=[];return cs(t.fields,(n,r)=>{const i=new Nt([n]);if(tc(r)){const s=gk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bn(e)}/**
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
 */class Rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,Z.min(),Z.min(),Z.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,Z.min(),Z.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,Z.min(),Z.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class po{constructor(e,n){this.position=e,this.inclusive=n}}function Kw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function iF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yk{}class qe extends yk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oF(e,n,r):n==="array-contains"?new uF(e,r):n==="in"?new cF(e,r):n==="not-in"?new hF(e,r):n==="array-contains-any"?new dF(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aF(e,r):new lF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ho(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ln extends yk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ln(e,n)}matches(e){return vk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vk(t){return t.op==="and"}function _k(t){return sF(t)&&vk(t)}function sF(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Fm(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(_k(t))return t.filters.map(e=>Fm(e)).join(",");{const e=t.filters.map(n=>Fm(n)).join(",");return`${t.op}(${e})`}}function wk(t,e){return t instanceof qe?function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&Qn(n.value,r.value)}(t,e):t instanceof Ln?function(n,r){return r instanceof Ln&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&wk(s,r.filters[o]),!0):!1}(t,e):void G()}function Ek(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${fo(e.value)}`}(t):t instanceof Ln?function(e){return e.op.toString()+" {"+e.getFilters().map(Ek).join(" ,")+"}"}(t):"Filter"}class oF extends qe{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class aF extends qe{constructor(e,n){super(e,"in",n),this.keys=Sk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lF extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Sk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class uF extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fv(n)&&fl(n.arrayValue,this.value)}}class cF extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class hF extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class dF extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
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
 */class fF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Yw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fF(t,e,n,r,i,s,o)}function pv(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.ft=n}return e.ft}function mv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qw(t.startAt,e.startAt)&&Qw(t.endAt,e.endAt)}function Um(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function pF(t,e,n,r,i,s,o,a){return new vi(t,e,n,r,i,s,o,a)}function md(t){return new vi(t)}function Xw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function yv(t){return t.collectionGroup!==null}function Ui(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=gd(e),r=gv(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ks(n)),e.dt.push(new Ks(Nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ks(Nt.keyField(),s))}}}return e.dt}function Sr(t){const e=ee(t);if(!e.wt)if(e.limitType==="F")e.wt=Yw(e.path,e.collectionGroup,Ui(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ui(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ks(s.field,o))}const r=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e.wt=Yw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Vm(t,e){e.getFirstInequalityField(),gd(t);const n=t.filters.concat([e]);return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uh(t,e,n){return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yd(t,e){return mv(Sr(t),Sr(e))&&t.limitType===e.limitType}function Ck(t){return`${pv(Sr(t))}|lt:${t.limitType}`}function Bm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ek(r)).join(", ")}]`),pd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),`Target(${n})`}(Sr(t))}; limitType=${t.limitType})`}function vd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ui(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Kw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ui(n),r)||n.endAt&&!function(i,s,o){const a=Kw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ui(n),r))}(t,e)}function mF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ik(t){return(e,n)=>{let r=!1;for(const i of Ui(t)){const s=gF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gF(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ho(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pk(this.inner)}size(){return this.innerSize}}/**
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
 */const yF=new Lt(z.comparator);function Cr(){return yF}const Tk=new Lt(z.comparator);function la(...t){let e=Tk;for(const n of t)e=e.insert(n.key,n);return e}function kk(t){let e=Tk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return ka()}function xk(){return ka()}function ka(){return new Po(t=>t.toString(),(t,e)=>t.isEqual(e))}const vF=new Lt(z.comparator),_F=new Ze(z.comparator);function oe(...t){let e=_F;for(const n of t)e=e.add(n);return e}const wF=new Ze(ge);function Rk(){return wF}/**
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
 */function Nk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(e)?"-0":e}}function Ak(t){return{integerValue:""+t}}function EF(t,e){return Z$(e)?Ak(e):Nk(t,e)}/**
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
 */class _d{constructor(){this._=void 0}}function SF(t,e,n){return t instanceof pl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ml?Pk(t,e):t instanceof gl?Dk(t,e):function(r,i){const s=bk(r,i),o=Jw(s)+Jw(r._t);return $m(s)&&$m(r._t)?Ak(o):Nk(r.serializer,o)}(t,e)}function CF(t,e,n){return t instanceof ml?Pk(t,e):t instanceof gl?Dk(t,e):n}function bk(t,e){return t instanceof ch?$m(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class pl extends _d{}class ml extends _d{constructor(e){super(),this.elements=e}}function Pk(t,e){const n=Ok(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class gl extends _d{constructor(e){super(),this.elements=e}}function Dk(t,e){let n=Ok(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class ch extends _d{constructor(e,n){super(),this.serializer=e,this._t=n}}function Jw(t){return We(t.integerValue||t.doubleValue)}function Ok(t){return fv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class IF{constructor(e,n){this.field=e,this.transform=n}}function TF(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ml&&r instanceof ml||n instanceof gl&&r instanceof gl?uo(n.elements,r.elements,Qn):n instanceof ch&&r instanceof ch?Qn(n._t,r._t):n instanceof pl&&r instanceof pl}(t.transform,e.transform)}class kF{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wd{}function Lk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $k(t.key,Gn.none()):new Xl(t.key,t.data,Gn.none());{const n=t.data,r=Ht.empty();let i=new Ze(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Bn(i.toArray()),Gn.none())}}function xF(t,e,n){t instanceof Xl?function(r,i,s){const o=r.value.clone(),a=e1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(r,i,s){if(!nc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=e1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Mk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function xa(t,e,n,r){return t instanceof Xl?function(i,s,o,a){if(!nc(i.precondition,s))return o;const l=i.value.clone(),u=t1(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(i,s,o,a){if(!nc(i.precondition,s))return o;const l=t1(i.fieldTransforms,a,s),u=s.data;return u.setAll(Mk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return nc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function RF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bk(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Zw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&uo(n,r,(i,s)=>TF(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xl extends wd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends wd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function e1(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CF(o,a,n[i]))}return r}function t1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SF(s,o,e))}return r}class $k extends wd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NF extends wd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Lk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>Zw(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>Zw(n,r))}}class vv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=vF;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vv(e,n,r,i)}}/**
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
 */class bF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PF{constructor(e){this.count=e}}/**
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
 */var je,ue;function DF(t){switch(t){default:return G();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Fk(t){if(t===void 0)return Er("GRPC error has no .code"),C.UNKNOWN;switch(t){case je.OK:return C.OK;case je.CANCELLED:return C.CANCELLED;case je.UNKNOWN:return C.UNKNOWN;case je.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case je.INTERNAL:return C.INTERNAL;case je.UNAVAILABLE:return C.UNAVAILABLE;case je.UNAUTHENTICATED:return C.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case je.NOT_FOUND:return C.NOT_FOUND;case je.ALREADY_EXISTS:return C.ALREADY_EXISTS;case je.PERMISSION_DENIED:return C.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case je.ABORTED:return C.ABORTED;case je.OUT_OF_RANGE:return C.OUT_OF_RANGE;case je.UNIMPLEMENTED:return C.UNIMPLEMENTED;case je.DATA_LOSS:return C.DATA_LOSS;default:return G()}}(ue=je||(je={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _v{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Du}static getOrCreateInstance(){return Du===null&&(Du=new _v),Du}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Du=null;/**
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
 */class Ed{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ed(Z.min(),i,Rk(),Cr(),oe())}}class Jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jl(r,n,oe(),oe(),oe())}}/**
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
 */class rc{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class Uk{constructor(e,n){this.targetId=e,this.Et=n}}class Vk{constructor(e,n,r=un.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class n1{constructor(){this.At=0,this.Rt=i1(),this.vt=un.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=oe(),n=oe(),r=oe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Jl(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=i1()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class OF{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Cr(),this.qt=r1(),this.Ut=new Ze(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Um(o))if(i===0){const a=new z(o.path);this.Qt(r,a,Rt.newNoDocument(a,Z.min()))}else Ne(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=_v.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Um(a.target)){const l=new z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Rt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=oe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ed(e,n,this.Ut,this.Lt,r);return this.Lt=Cr(),this.qt=r1(),this.Ut=new Ze(ge),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new n1,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ze(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new n1),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function r1(){return new Lt(z.comparator)}function i1(){return new Lt(z.comparator)}/**
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
 */const LF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$F=(()=>({and:"AND",or:"OR"}))();class FF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UF(t,e){return hh(t,e.toTimestamp())}function Kn(t){return Ne(!!t),Z.fromTimestamp(function(e){const n=ci(e);return new Je(n.seconds,n.nanos)}(t))}function wv(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zk(t){const e=Ie.fromString(t);return Ne(qk(e)),e}function zm(t,e){return wv(t.databaseId,e.path)}function Gf(t,e){const n=zk(e);if(n.get(1)!==t.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(jk(n))}function jm(t,e){return wv(t.databaseId,e)}function VF(t){const e=zk(t);return e.length===4?Ie.emptyPath():jk(e)}function Wm(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jk(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function s1(t,e,n){return{name:zm(t,e),fields:n.value.mapValue.fields}}function BF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ne(u===void 0||typeof u=="string"),un.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),un.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:Fk(l.code);return new L(u,l.message||"")}(o);n=new Vk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gf(t,r.document.name),s=Kn(r.document.updateTime),o=r.document.createTime?Kn(r.document.createTime):Z.min(),a=new Ht({mapValue:{fields:r.document.fields}}),l=Rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new rc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gf(t,r.document),s=r.readTime?Kn(r.readTime):Z.min(),o=Rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gf(t,r.document),s=r.removedTargetIds||[];n=new rc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new PF(i),o=r.targetId;n=new Uk(o,s)}}return n}function zF(t,e){let n;if(e instanceof Xl)n={update:s1(t,e.key,e.value)};else if(e instanceof $k)n={delete:zm(t,e.key)};else if(e instanceof _i)n={update:s1(t,e.key,e.data),updateMask:XF(e.fieldMask)};else{if(!(e instanceof NF))return G();n={verify:zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof pl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ml)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ch)return{fieldPath:s.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:UF(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function jF(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Kn(r.updateTime):Kn(i);return s.isEqual(Z.min())&&(s=Kn(i)),new kF(s,r.transformResults||[])}(n,e))):[]}function WF(t,e){return{documents:[jm(t,e.path)]}}function HF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Hk(Ln.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ys(c.field),direction:KF(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||pd(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qF(t){let e=VF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Wk(c);return h instanceof Ln&&_k(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ks(vs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,pd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new po(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new po(d,h)}(n.endAt)),pF(e,i,o,s,a,"F",l,u)}function GF(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vs(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=vs(e.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(e.unaryFilter.field);return qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(vs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ln.create(e.compositeFilter.filters.map(n=>Wk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function KF(t){return LF[t]}function QF(t){return MF[t]}function YF(t){return $F[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return Nt.fromServerFormat(t.fieldPath)}function Hk(t){return t instanceof qe?function(e){if(e.op==="=="){if(Gw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NAN"}};if(qw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NAN"}};if(qw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(e.field),op:QF(e.op),value:e.value}}}(t):t instanceof Ln?function(e){const n=e.getFilters().map(r=>Hk(r));return n.length===1?n[0]:{compositeFilter:{op:YF(e.op),filters:n}}}(t):G()}function XF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vi{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=un.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class JF{constructor(e){this.se=e}}function ZF(t){const e=qF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uh(e,e.limit,"L"):e}/**
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
 */class eU{constructor(){this.He=new tU}addToCollectionParentIndex(e,n){return this.He.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(ui.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class tU{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ie.comparator)).toArray()}}/**
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
 */class mo{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new mo(0)}static bn(){return new mo(-1)}}/**
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
 */class nU{constructor(){this.changes=new Po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class iU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xa(r.mutation,i,Bn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Cr();const o=ka(),a=ka();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof _i)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),xa(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,Bn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new rU(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new Lt((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=xk();c.forEach(d=>{if(!s.has(d)){const p=Lk(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(bi());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,oe())).next(c=>({batchId:a,changes:kk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=la();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new vi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Rt.newInvalidDocument(u)))});let o=la();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&xa(u.mutation,l,Bn.empty(),Je.now()),vd(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class sU{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Kn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:ZF(r.bundledQuery),readTime:Kn(r.readTime)}}(n)),x.resolve()}}/**
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
 */class oU{constructor(){this.overlays=new Lt(z.comparator),this.ts=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Lt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bF(n,r));let s=this.ts.get(n);s===void 0&&(s=oe(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
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
 */class Ev{constructor(){this.es=new Ze(nt.ns),this.ss=new Ze(nt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new nt(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new nt(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new z(new Ie([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new z(new Ie([])),r=new nt(n,e),i=new nt(n,e+1);let s=oe();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return z.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||z.comparator(e.key,n.key)}}/**
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
 */class aU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ze(nt.ns)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ge);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),x.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new nt(new z(s),0);let a=new Ze(ge);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),x.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return x.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new nt(n,0),i=this._s.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lU{constructor(e){this.Ts=e,this.docs=new Lt(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Y$(Q$(c),r)<=0||(i.has(c.key)||vd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Es(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uU(this)}getSize(e){return x.resolve(this.size)}}class uU extends nU{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class cU{constructor(e){this.persistence=e,this.As=new Po(n=>pv(n),mv),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ev,this.targetCount=0,this.bs=mo.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),x.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Sn(n),x.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.vs.containsKey(n))}}/**
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
 */class hU{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new hv(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new cU(this),this.indexManager=new eU,this.remoteDocumentCache=function(r){return new lU(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new JF(n),this.xs=new sU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new aU(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new dU(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return x.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class dU extends J${constructor(e){super(),this.currentSequenceNumber=e}}class Sv{constructor(e){this.persistence=e,this.$s=new Ev,this.Ms=null}static Fs(e){return new Sv(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),x.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Bs,r=>{const i=z.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return x.or([()=>x.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Cv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cv(e,n.fromCache,r,i)}}/**
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
 */class fU{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Xw(n))return x.resolve(null);let r=Sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=uh(n,null,"F"),r=Sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,uh(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return Xw(n)||i.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(zw()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bm(n)),this.Fi(e,o,n,K$(i,-1)))})}$i(e,n){let r=new Ze(Ik(e));return n.forEach((i,s)=>{vd(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return zw()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Bm(n)),this.xi.getDocumentsMatchingQuery(e,n,ui.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class pU{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Lt(ge),this.qi=new Po(s=>pv(s),mv),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iU(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function mU(t,e,n,r){return new pU(t,e,n,r)}async function Gk(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function gU(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=l.docVersions.get(p);Ne(y!==null),g.version.compareTo(y)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Kk(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function yU(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(un.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,c)&&a.push(n.Ds.updateTargetData(s,p))});let l=Cr(),u=oe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(vU(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(Z.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function vU(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function _U(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wU(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Vi(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Hm(t,e,n){const r=ee(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yl(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function o1(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ee(a),h=c.qi.get(u);return h!==void 0?x.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(EU(r,mF(e),a),{documents:a,Wi:s})))}function EU(t,e,n){let r=t.Ui.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class a1{constructor(){this.activeTargetIds=Rk()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SU{constructor(){this.Br=new a1,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new a1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CU{qr(e){}shutdown(){}}/**
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
 */class l1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ou=null;function Kf(){return Ou===null?Ou=268435456+Math.round(2147483648*Math.random()):Ou++,"0x"+Ou.toString(16)}/**
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
 */const IU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TU{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ct="WebChannelConnection";class kU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Kf(),a=this.ao(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(B("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw oh("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=IU[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Kf();return new Promise((o,a)=>{const l=new F$;l.setWithCredentials(!0),l.listenOnce(L$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qf.NO_ERROR:const c=l.getResponseJson();B(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case qf.TIMEOUT:B(Ct,`RPC '${e}' ${s} timed out`),a(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case qf.HTTP_ERROR:const h=l.getStatus();if(B(Ct,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(_)>=0?_:C.UNKNOWN}(p.status);a(new L(g,p.message))}else a(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(C.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(Ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(Ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Kf(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D$(),a=O$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new $$({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");B(Ct,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new TU({Wr:y=>{d?B(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(B(Ct,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),B(Ct,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},Hr:()=>c.close()}),g=(y,_,m)=>{y.listen(_,f=>{try{m(f)}catch(v){setTimeout(()=>{throw v},0)}})};return g(c,Au.EventType.OPEN,()=>{d||B(Ct,`RPC '${e}' stream ${i} transport opened.`)}),g(c,Au.EventType.CLOSE,()=>{d||(d=!0,B(Ct,`RPC '${e}' stream ${i} transport closed`),p.so())}),g(c,Au.EventType.ERROR,y=>{d||(d=!0,oh(Ct,`RPC '${e}' stream ${i} transport errored:`,y),p.so(new L(C.UNAVAILABLE,"The operation could not be completed")))}),g(c,Au.EventType.MESSAGE,y=>{var _;if(!d){const m=y.data[0];Ne(!!m);const f=m,v=f.error||((_=f[0])===null||_===void 0?void 0:_.error);if(v){B(Ct,`RPC '${e}' stream ${i} received error:`,v);const E=v.status;let T=function(M){const D=je[M];if(D!==void 0)return Fk(D)}(E),A=v.message;T===void 0&&(T=C.INTERNAL,A="Unknown error status: "+E+" with message "+v.message),d=!0,p.so(new L(T,A)),c.close()}else B(Ct,`RPC '${e}' stream ${i} received:`,m),p.io(m)}}),g(a,M$.STAT_EVENT,y=>{y.stat===Vw.PROXY?B(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Vw.NOPROXY&&B(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Qf(){return typeof document<"u"?document:null}/**
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
 */function Sd(t){return new FF(t,!0)}/**
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
 */class Qk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Yk{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Qk(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xU extends Yk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=BF(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Kn(s.readTime):Z.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Wm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Um(a)?{documents:WF(i,a)}:{query:HF(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Bk(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=hh(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=GF(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Wm(this.serializer),n.removeTarget=e,this.Fo(n)}}class RU extends Yk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=jF(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.Zo(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Wm(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zF(this.serializer,r))};this.Fo(n)}}/**
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
 */class NU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(C.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class AU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Er(n),this.ru=!1):B("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class bU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{hs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.du.add(4),await Zl(l),l.mu.set("Unknown"),l.du.delete(4),await Cd(l)}(this))})}),this.mu=new AU(r,i)}}async function Cd(t){if(hs(t))for(const e of t.wu)await e(!0)}async function Zl(t){for(const e of t.wu)await e(!1)}function Xk(t,e){const n=ee(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),kv(n)?Tv(n):Do(n).No()&&Iv(n,e))}function Jk(t,e){const n=ee(t),r=Do(n);n.fu.delete(e),r.No()&&Zk(n,e),n.fu.size===0&&(r.No()?r.$o():hs(n)&&n.mu.set("Unknown"))}function Iv(t,e){t.gu.Ot(e.targetId),Do(t).jo(e)}function Zk(t,e){t.gu.Ot(e),Do(t).Wo(e)}function Tv(t){t.gu=new OF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Do(t).start(),t.mu.ou()}function kv(t){return hs(t)&&!Do(t).xo()&&t.fu.size>0}function hs(t){return ee(t).du.size===0}function ex(t){t.gu=void 0}async function PU(t){t.fu.forEach((e,n)=>{Iv(t,e)})}async function DU(t,e){ex(t),kv(t)?(t.mu.au(e),Tv(t)):t.mu.set("Unknown")}async function OU(t,e,n){if(t.mu.set("Online"),e instanceof Vk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dh(t,r)}else if(e instanceof rc?t.gu.Kt(e):e instanceof Uk?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const r=await Kk(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(un.EMPTY_BYTE_STRING,l.snapshotVersion)),Zk(i,a);const u=new Vi(l.target,a,1,l.sequenceNumber);Iv(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await dh(t,r)}}async function dh(t,e,n){if(!Yl(e))throw e;t.du.add(1),await Zl(t),t.mu.set("Offline"),n||(n=()=>Kk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Cd(t)})}function tx(t,e){return e().catch(n=>dh(t,n,e))}async function Id(t){const e=ee(t),n=hi(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;LU(e);)try{const i=await _U(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,MU(e,i)}catch(i){await dh(e,i)}nx(e)&&rx(e)}function LU(t){return hs(t)&&t.lu.length<10}function MU(t,e){t.lu.push(e);const n=hi(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function nx(t){return hs(t)&&!hi(t).xo()&&t.lu.length>0}function rx(t){hi(t).start()}async function $U(t){hi(t).tu()}async function FU(t){const e=hi(t);for(const n of t.lu)e.Yo(n.mutations)}async function UU(t,e,n){const r=t.lu.shift(),i=vv.from(r,e,n);await tx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Id(t)}async function VU(t,e){e&&hi(t).Jo&&await async function(n,r){if(i=r.code,DF(i)&&i!==C.ABORTED){const s=n.lu.shift();hi(n).Oo(),await tx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Id(n)}var i}(t,e),nx(t)&&rx(t)}async function u1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.du.add(3),await Zl(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Cd(n)}async function BU(t,e){const n=ee(t);e?(n.du.delete(2),await Cd(n)):e||(n.du.add(2),await Zl(n),n.mu.set("Unknown"))}function Do(t){return t.yu||(t.yu=function(e,n,r){const i=ee(e);return i.nu(),new xU(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:PU.bind(null,t),Zr:DU.bind(null,t),zo:OU.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),kv(t)?Tv(t):t.mu.set("Unknown")):(await t.yu.stop(),ex(t))})),t.yu}function hi(t){return t.pu||(t.pu=function(e,n,r){const i=ee(e);return i.nu(),new RU(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:$U.bind(null,t),Zr:VU.bind(null,t),Xo:FU.bind(null,t),Zo:UU.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Id(t)):(await t.pu.stop(),t.lu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class xv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rv(t,e){if(Er("AsyncQueue",`${e}: ${t}`),Yl(t))return new L(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new Lt(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class c1{constructor(){this.Iu=new Lt(z.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class go{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new go(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zU{constructor(){this.Eu=void 0,this.listeners=[]}}class jU{constructor(){this.queries=new Po(e=>Ck(e),yd),this.onlineState="Unknown",this.Au=new Set}}async function Nv(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zU),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Rv(o,`Initialization of query '${Bm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&bv(n)}async function Av(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function WU(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&bv(n)}function HU(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function bv(t){t.Au.forEach(e=>{e.next()})}class Pv{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class ix{constructor(e){this.key=e}}class sx{constructor(e){this.key=e}}class qU{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=oe(),this.mutatedKeys=oe(),this.Ku=Ik(e),this.Gu=new Qs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new c1,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=vd(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(r.track({type:3,doc:p}),_=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.Ku(p,l)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new go(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new c1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=oe(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new sx(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new ix(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=oe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return go.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class GU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KU{constructor(e){this.key=e,this.ec=!1}}class QU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Po(a=>Ck(a),yd),this.ic=new Map,this.rc=new Set,this.oc=new Lt(z.comparator),this.uc=new Map,this.cc=new Ev,this.ac={},this.hc=new Map,this.lc=mo.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function YU(t,e){const n=o3(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await wU(n.localStore,Sr(e));n.isPrimaryClient&&Xk(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await XU(n,e,r,a==="current",o.resumeToken)}return i}async function XU(t,e,n,r,i){t.dc=(h,d,p)=>async function(g,y,_,m){let f=y.view.zu(_);f.Mi&&(f=await o1(g.localStore,y.query,!1).then(({documents:T})=>y.view.zu(T,f)));const v=m&&m.targetChanges.get(y.targetId),E=y.view.applyChanges(f,g.isPrimaryClient,v);return d1(g,y.targetId,E.Yu),E.snapshot}(t,h,d,p);const s=await o1(t.localStore,e,!0),o=new qU(e,s.Wi),a=o.zu(s.documents),l=Jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);d1(t,n,u.Yu);const c=new GU(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function JU(t,e){const n=ee(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!yd(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Jk(n.remoteStore,r.targetId),qm(n,r.targetId)}).catch(Ql)):(qm(n,r.targetId),await Hm(n.localStore,r.targetId,!0))}async function ZU(t,e,n){const r=a3(t);try{const i=await function(s,o){const a=ee(s),l=Je.now(),u=o.reduce((d,p)=>d.add(p.key),oe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Cr(),g=oe();return a.Ki.getEntries(d,u).next(y=>{p=y,p.forEach((_,m)=>{m.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{c=y;const _=[];for(const m of o){const f=RF(m,c.get(m.key).overlayedDocument);f!=null&&_.push(new _i(m.key,f,gk(f.value.mapValue),Gn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:kk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Lt(ge)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await eu(r,i.changes),await Id(r.remoteStore)}catch(i){const s=Rv(i,"Failed to persist write");n.reject(s)}}async function ox(t,e){const n=ee(t);try{const r=await yU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ne(o.ec):i.removedDocuments.size>0&&(Ne(o.ec),o.ec=!1))}),await eu(n,r,e)}catch(r){await Ql(r)}}function h1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&bv(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function e3(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Lt(z.comparator);o=o.insert(s,Rt.newNoDocument(s,Z.min()));const a=oe().add(s),l=new Ed(Z.min(),new Map,new Ze(ge),o,a);await ox(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Dv(r)}else await Hm(r.localStore,e,!1).then(()=>qm(r,e,n)).catch(Ql)}async function t3(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await gU(n.localStore,e);lx(n,r,null),ax(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eu(n,i)}catch(i){await Ql(i)}}async function n3(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ne(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);lx(r,e,n),ax(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eu(r,i)}catch(i){await Ql(i)}}function ax(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function lx(t,e,n){const r=ee(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||ux(t,r)})}function ux(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Jk(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Dv(t))}function d1(t,e,n){for(const r of n)r instanceof ix?(t.cc.addReference(r.key,e),r3(t,r)):r instanceof sx?(B("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||ux(t,r.key)):G()}function r3(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(r),Dv(t))}function Dv(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new z(Ie.fromString(e)),r=t.lc.next();t.uc.set(r,new KU(n)),t.oc=t.oc.insert(n,r),Xk(t.remoteStore,new Vi(Sr(md(n.path)),r,2,hv.ct))}}async function eu(t,e,n){const r=ee(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Cv.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Yl(c))throw c;B("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,g)}}}(r.localStore,s))}async function i3(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Gk(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(C.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eu(n,r.Qi)}}function s3(t,e){const n=ee(t),r=n.uc.get(e);if(r&&r.ec)return oe().add(r.key);{let i=oe();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function o3(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ox.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e3.bind(null,e),e.nc.zo=WU.bind(null,e.eventManager),e.nc.wc=HU.bind(null,e.eventManager),e}function a3(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n3.bind(null,e),e}class f1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mU(this.persistence,new fU,e.initialUser,this.serializer)}createPersistence(e){return new hU(Sv.Fs,this.serializer)}createSharedClientState(e){return new SU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class l3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>h1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=i3.bind(null,this.syncEngine),await BU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jU}createDatastore(e){const n=Sd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new kU(i));var i;return function(s,o,a,l){return new NU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>h1(this.syncEngine,a,0),o=l1.D()?new l1:new CU,new bU(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new QU(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);B("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Zl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class u3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=fk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yf(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function p1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h3(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>u1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>u1(e.remoteStore,s)),t._onlineComponents=e}function c3(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function h3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!c3(n))throw n;oh("Error using user provided cache. Falling back to memory cache: "+n),await Yf(t,new f1)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Yf(t,new f1);return t._offlineComponents}async function cx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await p1(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await p1(t,new l3))),t._onlineComponents}function d3(t){return cx(t).then(e=>e.syncEngine)}async function fh(t){const e=await cx(t),n=e.eventManager;return n.onListen=YU.bind(null,e.syncEngine),n.onUnlisten=JU.bind(null,e.syncEngine),n}function f3(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ov({next:h=>{s.enqueueAndForget(()=>Av(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Pv(md(o.path),u,{includeMetadataChanges:!0,xu:!0});return Nv(i,c)}(await fh(t),t.asyncQueue,e,n,r)),r.promise}function p3(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ov({next:h=>{s.enqueueAndForget(()=>Av(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Pv(o,u,{includeMetadataChanges:!0,xu:!0});return Nv(i,c)}(await fh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const m1=new Map;/**
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
 */function hx(t,e,n){if(!n)throw new L(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function m3(t,e,n,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function g1(t){if(!z.isDocumentKey(t))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y1(t){if(z.isDocumentKey(t))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Td(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Td(t);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function g3(t,e){if(e<=0)throw new L(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class v1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,m3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class kd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new U$;switch(n.type){case"firstParty":return new j$(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=m1.get(e);n&&(B("ComponentProvider","Removing Datastore"),m1.delete(e),n.terminate())}(this),Promise.resolve()}}function y3(t,e,n,r={}){var i;const s=(t=vn(t,kd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&oh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=It.MOCK_USER;else{o=ty(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new It(l)}t._authCredentials=new V$(new dk(o,a))}}/**
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
 */class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class ei extends Mn{constructor(e,n,r){super(e,n,md(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new z(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=ye(t),hx("collection","path",e),t instanceof kd){const r=Ie.fromString(e,...n);return y1(r),new ei(t,null,r)}{if(!(t instanceof Pt||t instanceof ei))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return y1(r),new ei(t.firestore,null,r)}}function di(t,e,...n){if(t=ye(t),arguments.length===1&&(e=fk.A()),hx("doc","path",e),t instanceof kd){const r=Ie.fromString(e,...n);return g1(r),new Pt(t,null,new z(r))}{if(!(t instanceof Pt||t instanceof ei))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return g1(r),new Pt(t.firestore,t instanceof ei?t.converter:null,new z(r))}}/**
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
 */class v3{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Qk(this,"async_queue_retry"),this.qc=()=>{const n=Qf();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Qf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Qf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new dr;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Yl(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=xv.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function _1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ns extends kd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new v3,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dx(this),this._firestoreClient.terminate()}}function _3(t,e){const n=typeof t=="object"?t:zh(),r=typeof t=="string"?t:e||"(default)",i=xl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Zg("firestore");s&&y3(i,...s)}return i}function xd(t){return t._firestoreClient||dx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new nF(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new u3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yo(un.fromBase64String(e))}catch(n){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yo(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Rd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nd{constructor(e){this._methodName=e}}/**
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
 */class Lv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const w3=/^__.*__$/;class E3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xl(e,this.data,n,this.fieldTransforms)}}class fx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function px(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Mv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Mv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ph(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(px(this.Yc)&&w3.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class S3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sd(e)}ua(e,n,r,i=!1){return new Mv({Yc:e,methodName:n,oa:r,path:Nt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ad(t){const e=t._freezeSettings(),n=Sd(t._databaseId);return new S3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function C3(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);Fv("Data must be an object, but it was:",o,r);const a=gx(r,o);let l,u;if(s.merge)l=new Bn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Gm(e,h,n);if(!o.contains(d))throw new L(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vx(c,d)||c.push(d)}l=new Bn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new E3(new Ht(a),l,u)}class bd extends Nd{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bd}}class $v extends Nd{_toFieldTransform(e){return new IF(e.path,new pl)}isEqual(e){return e instanceof $v}}function I3(t,e,n,r){const i=t.ua(1,e,n);Fv("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();cs(r,(l,u)=>{const c=Uv(e,l,n);u=ye(u);const h=i.na(c);if(u instanceof bd)s.push(c);else{const d=tu(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Bn(s);return new fx(o,a,i.fieldTransforms)}function T3(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Gm(e,r,n)],l=[i];if(s.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gm(e,s[d])),l.push(s[d+1]);const u=[],c=Ht.empty();for(let d=a.length-1;d>=0;--d)if(!vx(u,a[d])){const p=a[d];let g=l[d];g=ye(g);const y=o.na(p);if(g instanceof bd)u.push(p);else{const _=tu(g,y);_!=null&&(u.push(p),c.set(p,_))}}const h=new Bn(u);return new fx(c,h,o.fieldTransforms)}function mx(t,e,n,r=!1){return tu(n,t.ua(r?4:3,e))}function tu(t,e){if(yx(t=ye(t)))return Fv("Unsupported field value:",e,t),gx(t,e);if(t instanceof Nd)return function(n,r){if(!px(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=tu(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return EF(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Je.fromDate(n);return{timestampValue:hh(r.serializer,i)}}if(n instanceof Je){const i=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hh(r.serializer,i)}}if(n instanceof Lv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yo)return{bytesValue:Bk(r.serializer,n._byteString)};if(n instanceof Pt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Td(n)}`)}(t,e)}function gx(t,e){const n={};return pk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const s=tu(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Lv||t instanceof yo||t instanceof Pt||t instanceof Nd)}function Fv(t,e,n){if(!yx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Td(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Gm(t,e,n){if((e=ye(e))instanceof Rd)return e._internalPath;if(typeof e=="string")return Uv(t,e);throw ph("Field path arguments must be of type string or ",t,!1,void 0,n)}const k3=new RegExp("[~\\*/\\[\\]]");function Uv(t,e,n){if(e.search(k3)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rd(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ph(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(C.INVALID_ARGUMENT,a+t+l)}function vx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Vv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x3 extends Vv{data(){return super.data()}}function Pd(t,e){return typeof e=="string"?Uv(t,e):e instanceof Rd?e._internalPath:e._delegate._internalPath}/**
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
 */function _x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bv{}class nu extends Bv{}function Pi(t,e,...n){let r=[];e instanceof Bv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof zv).length,o=i.filter(a=>a instanceof Dd).length;if(s>1||s>0&&o>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dd extends nu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dd(e,n,r)}_apply(e){const n=this._parse(e);return Ex(e._query,n),new Mn(e.firestore,e.converter,Vm(e._query,n))}_parse(e){const n=Ad(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){E1(c,u);const d=[];for(const p of c)d.push(w1(a,i,p));h={arrayValue:{values:d}}}else h=w1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||E1(c,u),h=mx(o,s,c,u==="in"||u==="not-in");return qe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Di(t,e,n){const r=e,i=Pd("where",t);return Dd._create(i,r,n)}class zv extends Bv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Ex(s,a),s=Vm(s,a)}(e._query,n),new Mn(e.firestore,e.converter,Vm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jv extends nu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jv(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ks(i,s);return function(a,l){if(gv(a)===null){const u=gd(a);u!==null&&Sx(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new vi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Wv(t,e="asc"){const n=e,r=Pd("orderBy",t);return jv._create(r,n)}class Hv extends nu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hv(e,n,r)}_apply(e){return new Mn(e.firestore,e.converter,uh(e._query,this._limit,this._limitType))}}function R3(t){return g3("limit",t),Hv._create("limit",t,"F")}class qv extends nu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new qv(e,n,r)}_apply(e){const n=wx(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(r,i){return new vi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function N3(...t){return qv._create("startAt",t,!0)}class Gv extends nu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gv(e,n,r)}_apply(e){const n=wx(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(r,i){return new vi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function A3(...t){return Gv._create("endAt",t,!0)}function wx(t,e,n,r){if(n[0]=ye(n[0]),n[0]instanceof Vv)return function(i,s,o,a,l){if(!a)throw new L(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Ui(i))if(c.field.isKeyField())u.push(lh(s,a.key));else{const h=a.data.field(c.field);if(dv(h))throw new L(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new L(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new po(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ad(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new L(C.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new L(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof g}`);if(!yv(s)&&g.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${g}' contains a slash.`);const y=s.path.child(Ie.fromString(g));if(!z.isDocumentKey(y))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const _=new z(y);d.push(lh(o,_))}else{const y=mx(a,l,g);d.push(y)}}return new po(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function w1(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yv(e)&&n.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!z.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lh(t,new z(r))}if(n instanceof Pt)return lh(t,n._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Td(n)}.`)}function E1(t,e){if(!Array.isArray(t)||t.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ex(t,e){if(e.isInequality()){const r=gd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new L(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=gv(t);s!==null&&Sx(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Sx(t,e,n){if(!n.isEqual(e))throw new L(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class b3{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(co(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return cs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lv(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hl(e));default:return null}}convertTimestamp(e){const n=ci(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Ne(qk(r));const i=new dl(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||Er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function P3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cx extends Vv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ic extends Cx{data(e={}){return super.data(e)}}class Ix{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ua(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ic(this._firestore,this._userDataWriter,r.key,r,new ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ic(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ua(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ic(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ua(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:D3(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function D3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function O3(t){t=vn(t,Pt);const e=vn(t.firestore,ns);return f3(xd(e),t._key).then(n=>kx(e,t,n))}class Kv extends b3{constructor(e){super(),this.firestore=e}convertBytes(e){return new yo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function ru(t){t=vn(t,Mn);const e=vn(t.firestore,ns),n=xd(e),r=new Kv(e);return _x(t._query),p3(n,t._query).then(i=>new Ix(e,r,t,i))}function Od(t,e,n){t=vn(t,Pt);const r=vn(t.firestore,ns),i=P3(t.converter,e,n);return Tx(r,[C3(Ad(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Gn.none())])}function Km(t,e,n,...r){t=vn(t,Pt);const i=vn(t.firestore,ns),s=Ad(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof Rd?T3(s,"updateDoc",t._key,e,n,r):I3(s,"updateDoc",t._key,e),Tx(i,[o.toMutation(t._key,Gn.exists(!0))])}function Qv(t,...e){var n,r,i;t=ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Pt)u=vn(t.firestore,ns),c=md(t._key.path),l={next:h=>{e[o]&&e[o](kx(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,Mn);u=vn(h.firestore,ns),c=h._query;const d=new Kv(u);l={next:p=>{e[o]&&e[o](new Ix(u,d,h,p))},error:e[o+1],complete:e[o+2]},_x(t._query)}return function(h,d,p,g){const y=new Ov(g),_=new Pv(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>Nv(await fh(h),_)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Av(await fh(h),_))}}(xd(u),c,a,l)}function Tx(t,e){return function(n,r){const i=new dr;return n.asyncQueue.enqueueAndForget(async()=>ZU(await d3(n),r,i)),i.promise}(xd(t),e)}function kx(t,e,n){const r=n.docs.get(e._key),i=new Kv(t);return new Cx(t,i,e._key,r,new ua(n.hasPendingWrites,n.fromCache),e.converter)}function yl(){return new $v("serverTimestamp")}(function(t,e=!0){(function(n){bo=n})(os),oi(new yr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ns(new B$(n.getProvider("auth-internal")),new H$(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),yn(Bw,"3.10.0",t),yn(Bw,"3.10.0","esm2017")})();/**
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
 */const xx="firebasestorage.googleapis.com",Rx="storageBucket",L3=2*60*1e3,M3=10*60*1e3;/**
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
 */class Ve extends Yn{constructor(e,n,r=0){super(Xf(e),`Firebase Storage: ${n} (${Xf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Xf(t){return"storage/"+t}function Yv(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Ue.UNKNOWN,t)}function $3(t){return new Ve(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function F3(t){return new Ve(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function U3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Ue.UNAUTHENTICATED,t)}function V3(){return new Ve(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function B3(t){return new Ve(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function z3(){return new Ve(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function j3(){return new Ve(Ue.CANCELED,"User canceled the upload/download.")}function W3(t){return new Ve(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function H3(t){return new Ve(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function q3(){return new Ve(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rx+"' property when initializing the app?")}function G3(){return new Ve(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function K3(){return new Ve(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Q3(t){return new Ve(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qm(t){return new Ve(Ue.INVALID_ARGUMENT,t)}function Nx(){return new Ve(Ue.APP_DELETED,"The Firebase app was deleted.")}function Y3(t){return new Ve(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ra(t,e){return new Ve(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Jo(t){throw new Ve(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw H3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=n===xx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],A=T.regex.exec(e);if(A){const M=A[T.indices.bucket];let D=A[T.indices.path];D||(D=""),r=new nn(M,D),T.postModify(r);break}}if(r==null)throw W3(e);return r}}class X3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function J3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function d(){s&&clearTimeout(s)}function p(_,...m){if(u){d();return}if(_){d(),c.call(null,_,...m);return}if(l()||o){d(),c.call(null,_,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let g=!1;function y(_){g||(g=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function Z3(t){t(!1)}/**
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
 */function e4(t){return t!==void 0}function t4(t){return typeof t=="object"&&!Array.isArray(t)}function Xv(t){return typeof t=="string"||t instanceof String}function S1(t){return Jv()&&t instanceof Blob}function Jv(){return typeof Blob<"u"&&!ZA()}function C1(t,e,n,r){if(r<e)throw Qm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Zv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ax(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Bi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bi||(Bi={}));/**
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
 */function n4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class r4{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Bi.NO_ERROR,l=s.getStatus();if(!a||n4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Bi.ABORT;r(!1,new Lu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Lu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());e4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Yv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Nx():j3();o(l)}else{const l=z3();o(l)}};this.canceled_?n(!1,new Lu(!1,null,!0)):this.backoffId_=J3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Z3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function i4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function s4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function o4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function a4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function l4(t,e,n,r,i,s,o=!0){const a=Ax(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return o4(u,e),i4(u,n),s4(u,s),a4(u,r),new r4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function u4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function c4(...t){const e=u4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jv())return new Blob(t);throw new Ve(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function h4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function d4(t){if(typeof atob>"u")throw Q3("base-64");return atob(t)}/**
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
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Jf{constructor(e,n){this.data=e,this.contentType=n||null}}function f4(t,e){switch(t){case zn.RAW:return new Jf(bx(e));case zn.BASE64:case zn.BASE64URL:return new Jf(Px(t,e));case zn.DATA_URL:return new Jf(m4(e),g4(e))}throw Yv()}function bx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function p4(t){let e;try{e=decodeURIComponent(t)}catch{throw Ra(zn.DATA_URL,"Malformed data URL.")}return bx(e)}function Px(t,e){switch(t){case zn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=d4(e)}catch(i){throw i.message.includes("polyfill")?i:Ra(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Dx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ra(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=y4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function m4(t){const e=new Dx(t);return e.base64?Px(zn.BASE64,e.rest):p4(e.rest)}function g4(t){return new Dx(t).contentType}function y4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Fr{constructor(e,n){let r=0,i="";S1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(S1(this.data_)){const r=this.data_,i=h4(r,e,n);return i===null?null:new Fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Fr(r,!0)}}static getBlob(...e){if(Jv()){const n=e.map(r=>r instanceof Fr?r.data_:r);return new Fr(c4.apply(null,n))}else{const n=e.map(o=>Xv(o)?f4(zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Fr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Ox(t){let e;try{e=JSON.parse(t)}catch{return null}return t4(e)?e:null}/**
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
 */function v4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Lx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function w4(t,e){return e}class $t{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||w4}}let Mu=null;function E4(t){return!Xv(t)||t.length<2?t:Lx(t)}function Mx(){if(Mu)return Mu;const t=[];t.push(new $t("bucket")),t.push(new $t("generation")),t.push(new $t("metageneration")),t.push(new $t("name","fullPath",!0));function e(s,o){return E4(o)}const n=new $t("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new $t("size");return i.xform=r,t.push(i),t.push(new $t("timeCreated")),t.push(new $t("updated")),t.push(new $t("md5Hash",null,!0)),t.push(new $t("cacheControl",null,!0)),t.push(new $t("contentDisposition",null,!0)),t.push(new $t("contentEncoding",null,!0)),t.push(new $t("contentLanguage",null,!0)),t.push(new $t("contentType",null,!0)),t.push(new $t("metadata","customMetadata",!0)),Mu=t,Mu}function S4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new nn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function C4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return S4(r,t),r}function $x(t,e,n){const r=Ox(e);return r===null?null:C4(t,r,n)}function I4(t,e,n,r){const i=Ox(e);if(i===null||!Xv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=Zv(d,n,r),g=Ax({alt:"media",token:u});return p+g})[0]}function T4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Fx{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ux(t){if(!t)throw Yv()}function k4(t,e){function n(r,i){const s=$x(t,i,e);return Ux(s!==null),s}return n}function x4(t,e){function n(r,i){const s=$x(t,i,e);return Ux(s!==null),I4(s,i,t.host,t._protocol)}return n}function Vx(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=V3():i=U3():n.getStatus()===402?i=F3(t.bucket):n.getStatus()===403?i=B3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function R4(t){const e=Vx(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$3(t.path)),s.serverResponse=i.serverResponse,s}return n}function N4(t,e,n){const r=e.fullServerUrl(),i=Zv(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Fx(i,s,x4(t,n),o);return a.errorHandler=R4(e),a}function A4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function b4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=A4(null,e)),r}function P4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=b4(e,r,i),c=T4(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Fr.getBlob(h,r,d);if(p===null)throw G3();const g={name:u.fullPath},y=Zv(s,t.host,t._protocol),_="POST",m=t.maxUploadRetryTime,f=new Fx(y,_,k4(t,n),m);return f.urlParams=g,f.headers=o,f.body=p.uploadData(),f.errorHandler=Vx(e),f}class D4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Jo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class O4 extends D4{initXhr(){this.xhr_.responseType="text"}}function Bx(){return new O4}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lx(this._location.path)}get storage(){return this._service}get parent(){const e=v4(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Y3(e)}}function L4(t,e,n){t._throwIfRoot("uploadBytes");const r=P4(t.storage,t._location,Mx(),new Fr(e,!0),n);return t.storage.makeRequestWithTokens(r,Bx).then(i=>({metadata:i,ref:t}))}function M4(t){t._throwIfRoot("getDownloadURL");const e=N4(t.storage,t._location,Mx());return t.storage.makeRequestWithTokens(e,Bx).then(n=>{if(n===null)throw K3();return n})}function $4(t,e){const n=_4(t._location.path,e),r=new nn(t._location.bucket,n);return new rs(t.storage,r)}/**
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
 */function F4(t){return/^[A-Za-z]+:\/\//.test(t)}function U4(t,e){return new rs(t,e)}function zx(t,e){if(t instanceof e_){const n=t;if(n._bucket==null)throw q3();const r=new rs(n,n._bucket);return e!=null?zx(r,e):r}else return e!==void 0?$4(t,e):t}function V4(t,e){if(e&&F4(e)){if(t instanceof e_)return U4(t,e);throw Qm("To use ref(service, url), the first argument must be a Storage instance.")}else return zx(t,e)}function I1(t,e){const n=e==null?void 0:e[Rx];return n==null?null:nn.makeFromBucketSpec(n,t)}function B4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ty(i,t.app.options.projectId))}class e_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=xx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=L3,this._maxUploadRetryTime=M3,this._requests=new Set,i!=null?this._bucket=nn.makeFromBucketSpec(i,this._host):this._bucket=I1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=I1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new X3(Nx());{const o=l4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const T1="@firebase/storage",k1="0.11.2";/**
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
 */const jx="storage";function Wx(t,e,n){return t=ye(t),L4(t,e,n)}function Hx(t){return t=ye(t),M4(t)}function mh(t,e){return t=ye(t),V4(t,e)}function z4(t=zh(),e){t=ye(t);const r=xl(t,jx).getImmediate({identifier:e}),i=Zg("storage");return i&&j4(r,...i),r}function j4(t,e,n,r={}){B4(t,e,n,r)}function W4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new e_(n,r,i,e,os)}function H4(){oi(new yr(jx,W4,"PUBLIC").setMultipleInstances(!0)),yn(T1,k1,""),yn(T1,k1,"esm2017")}H4();const q4={apiKey:"AIzaSyBWCYJLZD2LxIv8werAXUDRnVkJuVoPUPE",authDomain:"messengertest-89526.firebaseapp.com",databaseURL:"https://messengertest-89526-default-rtdb.europe-west1.firebasedatabase.app",projectId:"messengertest-89526",storageBucket:"messengertest-89526.appspot.com",messagingSenderId:"306316013221",appId:"1:306316013221:web:094be4ff535f494fc1a74c"},Ld=gC(q4),gh=z4(Ld),gt=_3(Ld),G4=OM(Ld),Md=TO(Ld),ds=I.createContext(),K4=({children:t,setIsLoading:e})=>{const[n,r]=I.useState(null);return I.useEffect(()=>cD(Md,s=>{r(s),e(!1)}),[]),w(ds.Provider,{value:{currentUser:n},children:t})};function Q4(){return w("div",{children:"Preloader"})}/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}var Br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Br||(Br={}));const x1="popstate";function Y4(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ym("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yh(i)}return J4(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function t_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function X4(){return Math.random().toString(36).substr(2,8)}function R1(t,e){return{usr:t.state,key:t.key,idx:e}}function Ym(t,e,n,r){return n===void 0&&(n=null),vl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oo(e):e,{state:n,key:e&&e.key||r||X4()})}function yh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function J4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Br.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(vl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Br.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:y.location,delta:m})}function d(_,m){a=Br.Push;let f=Ym(y.location,_,m);n&&n(f,_),u=c()+1;let v=R1(f,u),E=y.createHref(f);try{o.pushState(v,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(_,m){a=Br.Replace;let f=Ym(y.location,_,m);n&&n(f,_),u=c();let v=R1(f,u),E=y.createHref(f);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function g(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:yh(_);return Ge(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(x1,h),l=_,()=>{i.removeEventListener(x1,h),l=null}},createHref(_){return e(i,_)},createURL:g,encodeLocation(_){let m=g(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(_){return o.go(_)}};return y}var N1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(N1||(N1={}));function Z4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Oo(e):e,i=n_(r.pathname||"/",n);if(i==null)return null;let s=qx(t);eV(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=uV(s[a],dV(i));return o}function qx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ti([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qx(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:aV(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Gx(s.path))i(s,o,l)}),e}function Gx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Gx(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eV(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lV(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tV=/^:\w+$/,nV=3,rV=2,iV=1,sV=10,oV=-2,A1=t=>t==="*";function aV(t,e){let n=t.split("/"),r=n.length;return n.some(A1)&&(r+=oV),e&&(r+=rV),n.filter(i=>!A1(i)).reduce((i,s)=>i+(tV.test(s)?nV:s===""?iV:sV),r)}function lV(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uV(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=cV({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ti([i,c.pathname]),pathnameBase:gV(ti([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ti([i,c.pathnameBase]))}return s}function cV(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hV(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=fV(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function hV(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),t_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dV(t){try{return decodeURI(t)}catch(e){return t_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fV(t,e){try{return decodeURIComponent(t)}catch(n){return t_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function n_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pV(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oo(t):t;return{pathname:n?n.startsWith("/")?n:mV(n,e):e,search:yV(r),hash:vV(i)}}function mV(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qx(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oo(t):(i=vl({},t),Ge(!i.pathname||!i.pathname.includes("?"),Zf("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Zf("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Zf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=pV(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ti=t=>t.join("/").replace(/\/\/+/g,"/"),gV=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yV=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vV=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _V(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const EV=typeof Object.is=="function"?Object.is:wV,{useState:SV,useEffect:CV,useLayoutEffect:IV,useDebugValue:TV}=sp;function kV(t,e,n){const r=e(),[{inst:i},s]=SV({inst:{value:r,getSnapshot:e}});return IV(()=>{i.value=r,i.getSnapshot=e,ep(i)&&s({inst:i})},[t,r,e]),CV(()=>(ep(i)&&s({inst:i}),t(()=>{ep(i)&&s({inst:i})})),[t]),TV(r),r}function ep(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!EV(n,r)}catch{return!0}}function xV(t,e,n){return e()}const RV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NV=!RV,AV=NV?xV:kV;"useSyncExternalStore"in sp&&(t=>t.useSyncExternalStore)(sp);const Yx=I.createContext(null),$d=I.createContext(null),Lo=I.createContext(null),Fd=I.createContext(null),wi=I.createContext({outlet:null,matches:[]}),Xx=I.createContext(null);function Xm(){return Xm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xm.apply(this,arguments)}function bV(t,e){let{relative:n}=e===void 0?{}:e;Mo()||Ge(!1);let{basename:r,navigator:i}=I.useContext(Lo),{hash:s,pathname:o,search:a}=r_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ti([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Mo(){return I.useContext(Fd)!=null}function iu(){return Mo()||Ge(!1),I.useContext(Fd).location}function Ud(){Mo()||Ge(!1);let{basename:t,navigator:e}=I.useContext(Lo),{matches:n}=I.useContext(wi),{pathname:r}=iu(),i=JSON.stringify(Kx(n).map(a=>a.pathnameBase)),s=I.useRef(!1);return I.useEffect(()=>{s.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Qx(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ti([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const PV=I.createContext(null);function DV(t){let e=I.useContext(wi).outlet;return e&&I.createElement(PV.Provider,{value:t},e)}function OV(){let{matches:t}=I.useContext(wi),e=t[t.length-1];return e?e.params:{}}function r_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(wi),{pathname:i}=iu(),s=JSON.stringify(Kx(r).map(o=>o.pathnameBase));return I.useMemo(()=>Qx(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function LV(t,e){Mo()||Ge(!1);let{navigator:n}=I.useContext(Lo),r=I.useContext($d),{matches:i}=I.useContext(wi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=iu(),u;if(e){var c;let y=typeof e=="string"?Oo(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ge(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=Z4(t,{pathname:d}),g=UV(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ti([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:ti([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&g?I.createElement(Fd.Provider,{value:{location:Xm({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Br.Pop}},g):g}function MV(){let t=jV(),e=_V(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}class $V extends I.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(wi.Provider,{value:this.props.routeContext},I.createElement(Xx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FV(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Yx);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(wi.Provider,{value:e},r)}function UV(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ge(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=I.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=I.createElement(MV,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=I.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),I.createElement(FV,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?I.createElement($V,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var b1;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(b1||(b1={}));var vh;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(vh||(vh={}));function VV(t){let e=I.useContext($d);return e||Ge(!1),e}function BV(t){let e=I.useContext(wi);return e||Ge(!1),e}function zV(t){let e=BV(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function jV(){var t;let e=I.useContext(Xx),n=VV(vh.UseRouteError),r=zV(vh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Jx(t){let{to:e,replace:n,state:r,relative:i}=t;Mo()||Ge(!1);let s=I.useContext($d),o=Ud();return I.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function i_(t){return DV(t.context)}function Zn(t){Ge(!1)}function WV(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Br.Pop,navigator:s,static:o=!1}=t;Mo()&&Ge(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Oo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=I.useMemo(()=>{let y=n_(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return g==null?null:I.createElement(Lo.Provider,{value:l},I.createElement(Fd.Provider,{children:n,value:g}))}function HV(t){let{children:e,location:n}=t,r=I.useContext(Yx),i=r&&!e?r.router.routes:Jm(e);return LV(i,n)}var P1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(P1||(P1={}));new Promise(()=>{});function Jm(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Jm(r.props.children,s));return}r.type!==Zn&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _h(){return _h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_h.apply(this,arguments)}function Zx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qV(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GV(t,e){return t.button===0&&(!e||e==="_self")&&!qV(t)}const KV=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],QV=["aria-current","caseSensitive","className","end","style","to","children"];function YV(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=Y4({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(a),[s]),I.createElement(WV,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const XV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JV=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s_=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Zx(e,KV),{basename:d}=I.useContext(Lo),p,g=!1;if(typeof u=="string"&&JV.test(u)&&(p=u,XV)){let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=n_(v.pathname,d);v.origin===f.origin&&E!=null?u=E+v.search+v.hash:g=!0}let y=bV(u,{relative:i}),_=ZV(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||_(f)}return I.createElement("a",_h({},h,{href:p||y,onClick:g||s?r:m,ref:n,target:l}))}),tr=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Zx(e,QV),h=r_(l,{relative:c.relative}),d=iu(),p=I.useContext($d),{navigator:g}=I.useContext(Lo),y=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,_=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(_=_.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase());let f=_===y||!o&&_.startsWith(y)&&_.charAt(y.length)==="/",v=m!=null&&(m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:v}):T=[s,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:f,isPending:v}):a;return I.createElement(s_,_h({},c,{"aria-current":E,className:T,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:f,isPending:v}):u)});var D1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(D1||(D1={}));var O1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(O1||(O1={}));function ZV(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ud(),l=iu(),u=r_(t,{relative:o});return I.useCallback(c=>{if(GV(c,n)){c.preventDefault();let h=r!==void 0?r:yh(l)===yh(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const eB=()=>w("div",{className:"Home",children:"Ну кто прочитал тот: Грустный Ершковый Йод"});var _l={},tB={get exports(){return _l},set exports(t){_l=t}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,o_=lt?Symbol.for("react.element"):60103,a_=lt?Symbol.for("react.portal"):60106,Vd=lt?Symbol.for("react.fragment"):60107,Bd=lt?Symbol.for("react.strict_mode"):60108,zd=lt?Symbol.for("react.profiler"):60114,jd=lt?Symbol.for("react.provider"):60109,Wd=lt?Symbol.for("react.context"):60110,l_=lt?Symbol.for("react.async_mode"):60111,Hd=lt?Symbol.for("react.concurrent_mode"):60111,qd=lt?Symbol.for("react.forward_ref"):60112,Gd=lt?Symbol.for("react.suspense"):60113,nB=lt?Symbol.for("react.suspense_list"):60120,Kd=lt?Symbol.for("react.memo"):60115,Qd=lt?Symbol.for("react.lazy"):60116,rB=lt?Symbol.for("react.block"):60121,iB=lt?Symbol.for("react.fundamental"):60117,sB=lt?Symbol.for("react.responder"):60118,oB=lt?Symbol.for("react.scope"):60119;function dn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case o_:switch(t=t.type,t){case l_:case Hd:case Vd:case zd:case Bd:case Gd:return t;default:switch(t=t&&t.$$typeof,t){case Wd:case qd:case Qd:case Kd:case jd:return t;default:return e}}case a_:return e}}}function eR(t){return dn(t)===Hd}we.AsyncMode=l_;we.ConcurrentMode=Hd;we.ContextConsumer=Wd;we.ContextProvider=jd;we.Element=o_;we.ForwardRef=qd;we.Fragment=Vd;we.Lazy=Qd;we.Memo=Kd;we.Portal=a_;we.Profiler=zd;we.StrictMode=Bd;we.Suspense=Gd;we.isAsyncMode=function(t){return eR(t)||dn(t)===l_};we.isConcurrentMode=eR;we.isContextConsumer=function(t){return dn(t)===Wd};we.isContextProvider=function(t){return dn(t)===jd};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===o_};we.isForwardRef=function(t){return dn(t)===qd};we.isFragment=function(t){return dn(t)===Vd};we.isLazy=function(t){return dn(t)===Qd};we.isMemo=function(t){return dn(t)===Kd};we.isPortal=function(t){return dn(t)===a_};we.isProfiler=function(t){return dn(t)===zd};we.isStrictMode=function(t){return dn(t)===Bd};we.isSuspense=function(t){return dn(t)===Gd};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vd||t===Hd||t===zd||t===Bd||t===Gd||t===nB||typeof t=="object"&&t!==null&&(t.$$typeof===Qd||t.$$typeof===Kd||t.$$typeof===jd||t.$$typeof===Wd||t.$$typeof===qd||t.$$typeof===iB||t.$$typeof===sB||t.$$typeof===oB||t.$$typeof===rB)};we.typeOf=dn;(function(t){t.exports=we})(tB);function aB(t){function e(O,$,F,Q,S){for(var le=0,P=0,Le=0,pe=0,ve,te,ct=0,jt=0,he,wt=he=ve=0,me=0,ht=0,$o=0,dt=0,ou=F.length,Fo=ou-1,Sn,J="",Be="",Yd="",Xd="",xr;me<ou;){if(te=F.charCodeAt(me),me===Fo&&P+pe+Le+le!==0&&(P!==0&&(te=P===47?10:47),pe=Le=le=0,ou++,Fo++),P+pe+Le+le===0){if(me===Fo&&(0<ht&&(J=J.replace(d,"")),0<J.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:J+=F.charAt(me)}te=59}switch(te){case 123:for(J=J.trim(),ve=J.charCodeAt(0),he=1,dt=++me;me<ou;){switch(te=F.charCodeAt(me)){case 123:he++;break;case 125:he--;break;case 47:switch(te=F.charCodeAt(me+1)){case 42:case 47:e:{for(wt=me+1;wt<Fo;++wt)switch(F.charCodeAt(wt)){case 47:if(te===42&&F.charCodeAt(wt-1)===42&&me+2!==wt){me=wt+1;break e}break;case 10:if(te===47){me=wt+1;break e}}me=wt}}break;case 91:te++;case 40:te++;case 34:case 39:for(;me++<Fo&&F.charCodeAt(me)!==te;);}if(he===0)break;me++}switch(he=F.substring(dt,me),ve===0&&(ve=(J=J.replace(h,"").trim()).charCodeAt(0)),ve){case 64:switch(0<ht&&(J=J.replace(d,"")),te=J.charCodeAt(1),te){case 100:case 109:case 115:case 45:ht=$;break;default:ht=Xn}if(he=e($,ht,he,te,S+1),dt=he.length,0<b&&(ht=n(Xn,J,$o),xr=a(3,he,ht,$,ut,Ke,dt,te,S,Q),J=ht.join(""),xr!==void 0&&(dt=(he=xr.trim()).length)===0&&(te=0,he="")),0<dt)switch(te){case 115:J=J.replace(A,o);case 100:case 109:case 45:he=J+"{"+he+"}";break;case 107:J=J.replace(f,"$1 $2"),he=J+"{"+he+"}",he=_t===1||_t===2&&s("@"+he,3)?"@-webkit-"+he+"@"+he:"@"+he;break;default:he=J+he,Q===112&&(he=(Be+=he,""))}else he="";break;default:he=e($,n($,J,$o),he,Q,S+1)}Yd+=he,he=$o=ht=wt=ve=0,J="",te=F.charCodeAt(++me);break;case 125:case 59:if(J=(0<ht?J.replace(d,""):J).trim(),1<(dt=J.length))switch(wt===0&&(ve=J.charCodeAt(0),ve===45||96<ve&&123>ve)&&(dt=(J=J.replace(" ",":")).length),0<b&&(xr=a(1,J,$,O,ut,Ke,Be.length,Q,S,Q))!==void 0&&(dt=(J=xr.trim()).length)===0&&(J="\0\0"),ve=J.charCodeAt(0),te=J.charCodeAt(1),ve){case 0:break;case 64:if(te===105||te===99){Xd+=J+F.charAt(me);break}default:J.charCodeAt(dt-1)!==58&&(Be+=i(J,ve,te,J.charCodeAt(2)))}$o=ht=wt=ve=0,J="",te=F.charCodeAt(++me)}}switch(te){case 13:case 10:P===47?P=0:1+ve===0&&Q!==107&&0<J.length&&(ht=1,J+="\0"),0<b*K&&a(0,J,$,O,ut,Ke,Be.length,Q,S,Q),Ke=1,ut++;break;case 59:case 125:if(P+pe+Le+le===0){Ke++;break}default:switch(Ke++,Sn=F.charAt(me),te){case 9:case 32:if(pe+le+P===0)switch(ct){case 44:case 58:case 9:case 32:Sn="";break;default:te!==32&&(Sn=" ")}break;case 0:Sn="\\0";break;case 12:Sn="\\f";break;case 11:Sn="\\v";break;case 38:pe+P+le===0&&(ht=$o=1,Sn="\f"+Sn);break;case 108:if(pe+P+le+Zt===0&&0<wt)switch(me-wt){case 2:ct===112&&F.charCodeAt(me-3)===58&&(Zt=ct);case 8:jt===111&&(Zt=jt)}break;case 58:pe+P+le===0&&(wt=me);break;case 44:P+Le+pe+le===0&&(ht=1,Sn+="\r");break;case 34:case 39:P===0&&(pe=pe===te?0:pe===0?te:pe);break;case 91:pe+P+Le===0&&le++;break;case 93:pe+P+Le===0&&le--;break;case 41:pe+P+le===0&&Le--;break;case 40:if(pe+P+le===0){if(ve===0)switch(2*ct+3*jt){case 533:break;default:ve=1}Le++}break;case 64:P+Le+pe+le+wt+he===0&&(he=1);break;case 42:case 47:if(!(0<pe+le+Le))switch(P){case 0:switch(2*te+3*F.charCodeAt(me+1)){case 235:P=47;break;case 220:dt=me,P=42}break;case 42:te===47&&ct===42&&dt+2!==me&&(F.charCodeAt(dt+2)===33&&(Be+=F.substring(dt,me+1)),Sn="",P=0)}}P===0&&(J+=Sn)}jt=ct,ct=te,me++}if(dt=Be.length,0<dt){if(ht=$,0<b&&(xr=a(2,Be,ht,O,ut,Ke,dt,Q,S,Q),xr!==void 0&&(Be=xr).length===0))return Xd+Be+Yd;if(Be=ht.join(",")+"{"+Be+"}",_t*Zt!==0){switch(_t!==2||s(Be,2)||(Zt=0),Zt){case 111:Be=Be.replace(E,":-moz-$1")+Be;break;case 112:Be=Be.replace(v,"::-webkit-input-$1")+Be.replace(v,"::-moz-$1")+Be.replace(v,":-ms-input-$1")+Be}Zt=0}}return Xd+Be+Yd}function n(O,$,F){var Q=$.trim().split(_);$=Q;var S=Q.length,le=O.length;switch(le){case 0:case 1:var P=0;for(O=le===0?"":O[0]+" ";P<S;++P)$[P]=r(O,$[P],F).trim();break;default:var Le=P=0;for($=[];P<S;++P)for(var pe=0;pe<le;++pe)$[Le++]=r(O[pe]+" ",Q[P],F).trim()}return $}function r(O,$,F){var Q=$.charCodeAt(0);switch(33>Q&&(Q=($=$.trim()).charCodeAt(0)),Q){case 38:return $.replace(m,"$1"+O.trim());case 58:return O.trim()+$.replace(m,"$1"+O.trim());default:if(0<1*F&&0<$.indexOf("\f"))return $.replace(m,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+$}function i(O,$,F,Q){var S=O+";",le=2*$+3*F+4*Q;if(le===944){O=S.indexOf(":",9)+1;var P=S.substring(O,S.length-1).trim();return P=S.substring(0,O).trim()+P+";",_t===1||_t===2&&s(P,1)?"-webkit-"+P+P:P}if(_t===0||_t===2&&!s(S,1))return S;switch(le){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(et,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return P=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+S+"-ms-flex-pack"+P+S;case 1005:return g.test(S)?S.replace(p,":-webkit-")+S.replace(p,":-moz-")+S:S;case 1e3:switch(P=S.substring(13).trim(),$=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt($)){case 226:P=S.replace(T,"tb");break;case 232:P=S.replace(T,"tb-rl");break;case 220:P=S.replace(T,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+P+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch($=(S=O).length-10,P=(S.charCodeAt($)===33?S.substring(0,$):S).substring(O.indexOf(":",7)+1).trim(),le=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:S=S.replace(P,"-webkit-"+P)+";"+S;break;case 207:case 102:S=S.replace(P,"-webkit-"+(102<le?"inline-":"")+"box")+";"+S.replace(P,"-webkit-"+P)+";"+S.replace(P,"-ms-"+P+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return P=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+P+"-ms-flex-"+P+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(D,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(D,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(q.test(O)===!0)return(P=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),$,F,Q).replace(":fill-available",":stretch"):S.replace(P,"-webkit-"+P)+S.replace(P,"-moz-"+P.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,F+Q===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+S}return S}function s(O,$){var F=O.indexOf($===1?":":"{"),Q=O.substring(0,$!==3?F:10);return F=O.substring(F+1,O.length-1),W($!==2?Q:Q.replace(se,"$1"),F,$)}function o(O,$){var F=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return F!==$+";"?F.replace(M," or ($1)").substring(4):"("+$+")"}function a(O,$,F,Q,S,le,P,Le,pe,ve){for(var te=0,ct=$,jt;te<b;++te)switch(jt=Mt[te].call(c,O,ct,F,Q,S,le,P,Le,pe,ve)){case void 0:case!1:case!0:case null:break;default:ct=jt}if(ct!==$)return ct}function l(O){switch(O){case void 0:case null:b=Mt.length=0;break;default:if(typeof O=="function")Mt[b++]=O;else if(typeof O=="object")for(var $=0,F=O.length;$<F;++$)l(O[$]);else K=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(W=null,O?typeof O!="function"?_t=1:(_t=2,W=O):_t=0),u}function c(O,$){var F=O;if(33>F.charCodeAt(0)&&(F=F.trim()),Ee=F,F=[Ee],0<b){var Q=a(-1,$,F,F,ut,Ke,0,0,0,0);Q!==void 0&&typeof Q=="string"&&($=Q)}var S=e(Xn,F,$,0,0);return 0<b&&(Q=a(-2,S,F,F,ut,Ke,S.length,0,0,0),Q!==void 0&&(S=Q)),Ee="",Zt=0,Ke=ut=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,_=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,D=/-self|flex-/g,se=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,et=/([^-])(image-set\()/,Ke=1,ut=1,Zt=0,_t=1,Xn=[],Mt=[],b=0,W=null,K=0,Ee="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var lB={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uB(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var cB=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,L1=uB(function(t){return cB.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),u_=_l,hB={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dB={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c_={};c_[u_.ForwardRef]=fB;c_[u_.Memo]=tR;function M1(t){return u_.isMemo(t)?tR:c_[t.$$typeof]||hB}var pB=Object.defineProperty,mB=Object.getOwnPropertyNames,$1=Object.getOwnPropertySymbols,gB=Object.getOwnPropertyDescriptor,yB=Object.getPrototypeOf,F1=Object.prototype;function nR(t,e,n){if(typeof e!="string"){if(F1){var r=yB(e);r&&r!==F1&&nR(t,r,n)}var i=mB(e);$1&&(i=i.concat($1(e)));for(var s=M1(t),o=M1(e),a=0;a<i.length;++a){var l=i[a];if(!dB[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=gB(e,l);try{pB(t,l,u)}catch{}}}}return t}var vB=nR;function ur(){return(ur=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var U1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Zm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!_l.typeOf(t)},wh=Object.freeze([]),ni=Object.freeze({});function wl(t){return typeof t=="function"}function V1(t){return t.displayName||t.name||"Component"}function h_(t){return t&&typeof t.styledComponentId=="string"}var vo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",d_=typeof window<"u"&&"HTMLElement"in window,_B=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function su(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var wB=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&su(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),sc=new Map,Eh=new Map,Na=1,$u=function(t){if(sc.has(t))return sc.get(t);for(;Eh.has(Na);)Na++;var e=Na++;return sc.set(t,e),Eh.set(e,t),e},EB=function(t){return Eh.get(t)},SB=function(t,e){e>=Na&&(Na=e+1),sc.set(t,e),Eh.set(e,t)},CB="style["+vo+'][data-styled-version="5.3.9"]',IB=new RegExp("^"+vo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),TB=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},kB=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(IB);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(SB(u,l),TB(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},xB=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},rR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(vo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(vo,"active"),r.setAttribute("data-styled-version","5.3.9");var o=xB();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},RB=function(){function t(n){var r=this.element=rR(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}su(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),NB=function(){function t(n){var r=this.element=rR(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),AB=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),B1=d_,bB={isServer:!d_,useCSSOMInjection:!_B},iR=function(){function t(n,r,i){n===void 0&&(n=ni),r===void 0&&(r={}),this.options=ur({},bB,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&d_&&B1&&(B1=!1,function(s){for(var o=document.querySelectorAll(CB),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(vo)!=="active"&&(kB(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return $u(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(ur({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new AB(o):s?new RB(o):new NB(o),new wB(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if($u(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules($u(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup($u(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=EB(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=vo+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),PB=/(a)(d)/gi,z1=function(t){return String.fromCharCode(t+(t>25?39:97))};function eg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=z1(e%52)+n;return(z1(e%52)+n).replace(PB,"$1-$2")}var Ls=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},sR=function(t){return Ls(5381,t)};function DB(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(wl(n)&&!h_(n))return!1}return!0}var OB=sR("5.3.9"),LB=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DB(e),this.componentId=n,this.baseHash=Ls(OB,n),this.baseStyle=r,iR.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=_o(this.rules,e,n,r).join(""),a=eg(Ls(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ls(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=_o(p,e,n,r),y=Array.isArray(g)?g.join(""):g;c=Ls(c,y+d),h+=y}}if(h){var _=eg(c>>>0);if(!n.hasNameForId(i,_)){var m=r(h,"."+_,void 0,i);n.insertRules(i,_,m)}s.push(_)}}return s.join(" ")},t}(),MB=/^\s*\/\/.*$/gm,$B=[":","[",".","#"];function FB(t){var e,n,r,i,s=t===void 0?ni:t,o=s.options,a=o===void 0?ni:o,l=s.plugins,u=l===void 0?wh:l,c=new aB(a),h=[],d=function(y){function _(m){if(m)try{y(m+"}")}catch{}}return function(m,f,v,E,T,A,M,D,se,q){switch(m){case 1:if(se===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(D===0)return f+"/*|*/";break;case 3:switch(D){case 102:case 112:return y(v[0]+f),"";default:return f+(q===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(y){h.push(y)}),p=function(y,_,m){return _===0&&$B.indexOf(m[n.length])!==-1||m.match(i)?y:"."+e};function g(y,_,m,f){f===void 0&&(f="&");var v=y.replace(MB,""),E=_&&m?m+" "+_+" { "+v+" }":v;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!_?"":_,E)}return c.use([].concat(u,[function(y,_,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(y){if(y===-2){var _=h;return h=[],_}}])),g.hash=u.length?u.reduce(function(y,_){return _.name||su(15),Ls(y,_.name)},5381).toString():"",g}var oR=rn.createContext();oR.Consumer;var aR=rn.createContext(),UB=(aR.Consumer,new iR),tg=FB();function VB(){return I.useContext(oR)||UB}function BB(){return I.useContext(aR)||tg}var zB=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return su(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=tg),this.name+e.hash},t}(),jB=/([A-Z])/,WB=/([A-Z])/g,HB=/^ms-/,qB=function(t){return"-"+t.toLowerCase()};function j1(t){return jB.test(t)?t.replace(WB,qB).replace(HB,"-ms-"):t}var W1=function(t){return t==null||t===!1||t===""};function _o(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=_o(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(W1(t))return"";if(h_(t))return"."+t.styledComponentId;if(wl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return _o(l,e,n,r)}var u;return t instanceof zB?n?(t.inject(n,r),t.getName(r)):t:Zm(t)?function c(h,d){var p,g,y=[];for(var _ in h)h.hasOwnProperty(_)&&!W1(h[_])&&(Array.isArray(h[_])&&h[_].isCss||wl(h[_])?y.push(j1(_)+":",h[_],";"):Zm(h[_])?y.push.apply(y,c(h[_],_)):y.push(j1(_)+": "+(p=_,(g=h[_])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in lB?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var H1=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function GB(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return wl(t)||Zm(t)?H1(_o(U1(wh,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:H1(_o(U1(t,n)))}var KB=function(t,e,n){return n===void 0&&(n=ni),t.theme!==n.theme&&t.theme||e||n.theme},QB=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YB=/(^-|-$)/g;function tp(t){return t.replace(QB,"-").replace(YB,"")}var XB=function(t){return eg(sR(t)>>>0)};function Fu(t){return typeof t=="string"&&!0}var ng=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},JB=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ZB(t,e,n){var r=t[n];ng(e)&&ng(r)?lR(r,e):t[n]=e}function lR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(ng(o))for(var a in o)JB(a)&&ZB(t,o[a],a)}return t}var uR=rn.createContext();uR.Consumer;var np={};function cR(t,e,n){var r=h_(t),i=!Fu(t),s=e.attrs,o=s===void 0?wh:s,a=e.componentId,l=a===void 0?function(f,v){var E=typeof f!="string"?"sc":tp(f);np[E]=(np[E]||0)+1;var T=E+"-"+XB("5.3.9"+E+np[E]);return v?v+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Fu(f)?"styled."+f:"Styled("+V1(f)+")"}(t):u,h=e.displayName&&e.componentId?tp(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,E){return t.shouldForwardProp(f,v,E)&&e.shouldForwardProp(f,v,E)}:t.shouldForwardProp);var g,y=new LB(n,h,r?t.componentStyle:void 0),_=y.isStatic&&o.length===0,m=function(f,v){return function(E,T,A,M){var D=E.attrs,se=E.componentStyle,q=E.defaultProps,et=E.foldedComponentIds,Ke=E.shouldForwardProp,ut=E.styledComponentId,Zt=E.target,_t=function(Q,S,le){Q===void 0&&(Q=ni);var P=ur({},S,{theme:Q}),Le={};return le.forEach(function(pe){var ve,te,ct,jt=pe;for(ve in wl(jt)&&(jt=jt(P)),jt)P[ve]=Le[ve]=ve==="className"?(te=Le[ve],ct=jt[ve],te&&ct?te+" "+ct:te||ct):jt[ve]}),[P,Le]}(KB(T,I.useContext(uR),q)||ni,T,D),Xn=_t[0],Mt=_t[1],b=function(Q,S,le,P){var Le=VB(),pe=BB(),ve=S?Q.generateAndInjectStyles(ni,Le,pe):Q.generateAndInjectStyles(le,Le,pe);return ve}(se,M,Xn),W=A,K=Mt.$as||T.$as||Mt.as||T.as||Zt,Ee=Fu(K),O=Mt!==T?ur({},T,{},Mt):T,$={};for(var F in O)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?$.as=O[F]:(Ke?Ke(F,L1,K):!Ee||L1(F))&&($[F]=O[F]));return T.style&&Mt.style!==T.style&&($.style=ur({},T.style,{},Mt.style)),$.className=Array.prototype.concat(et,ut,b!==ut?b:null,T.className,Mt.className).filter(Boolean).join(" "),$.ref=W,I.createElement(K,$)}(g,f,v,_)};return m.displayName=c,(g=rn.forwardRef(m)).attrs=d,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):wh,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var v=e.componentId,E=function(A,M){if(A==null)return{};var D,se,q={},et=Object.keys(A);for(se=0;se<et.length;se++)D=et[se],M.indexOf(D)>=0||(q[D]=A[D]);return q}(e,["componentId"]),T=v&&v+"-"+(Fu(f)?f:tp(V1(f)));return cR(f,ur({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?lR({},t.defaultProps,f):f}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&vB(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var rg=function(t){return function e(n,r,i){if(i===void 0&&(i=ni),!_l.isValidElementType(r))return su(1,String(r));var s=function(){return n(r,i,GB.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,ur({},i,{},o))},s.attrs=function(o){return e(n,r,ur({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(cR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){rg[t]=rg(t)});const R=rg;var hR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q1=rn.createContext&&rn.createContext(hR),ri=globalThis&&globalThis.__assign||function(){return ri=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ri.apply(this,arguments)},ez=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function dR(t){return t&&t.map(function(e,n){return rn.createElement(e.tag,ri({key:n},e.attr),dR(e.child))})}function fs(t){return function(e){return rn.createElement(tz,ri({attr:ri({},t.attr)},e),dR(t.child))}}function tz(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ez(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),rn.createElement("svg",ri({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ri(ri({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&rn.createElement("title",null,s),t.children)};return q1!==void 0?rn.createElement(q1.Consumer,null,function(n){return e(n)}):e(hR)}function nz(t){return fs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Bell_On"},child:[{tag:"path",attr:{d:"M18.79,15.34a2.087,2.087,0,0,0-1.26-.61V10.19a5.5,5.5,0,0,0-1.62-3.91,5.826,5.826,0,0,0-2.15-1.33V4.89a1.8,1.8,0,0,0-1.61-1.81,1.749,1.749,0,0,0-1.91,1.75v.12a5.547,5.547,0,0,0-3.77,5.24v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.121,2.121,0,0,0,2.12-2.12v-.53A2.1,2.1,0,0,0,18.79,15.34Zm-.38,2.03a1.118,1.118,0,0,1-1.12,1.12H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19a4.555,4.555,0,0,1,3.24-4.34.729.729,0,0,0,.53-.71V4.83a.735.735,0,0,1,.25-.56.744.744,0,0,1,.51-.2h.07a.807.807,0,0,1,.69.82v.25a.729.729,0,0,0,.53.71A4.668,4.668,0,0,1,15.2,6.99a4.468,4.468,0,0,1,1.33,3.2v4.76a.8.8,0,0,0,.22.55.773.773,0,0,0,.54.22,1.127,1.127,0,0,1,1.12,1.12Z"}}]}]})(t)}function rz(t){return fs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Login"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"}}]}]}]})(t)}function iz(t){return fs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"}}]}]}]})(t)}function fR(t){return fs({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`}}]}]})(t)}function sz(t){return fs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Settings"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"}},{tag:"path",attr:{d:"M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"}}]}]}]})(t)}const oz=R.header`
  background-color: var(--colors-bg);
`,az=R.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100px;
  justify-content: space-between;
  border-bottom: 2px solid var(--colors-lines-bg);
  margin-bottom: 10px;
`,lz=R.div`
  padding: 20px 30px;
  font-size: 24px;
`,uz=R.nav`
  flex: 1;
`,cz=R.ul`
  display: flex;
  flex-direction: row;
`,gs=R.li`
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
`,hz=R.div`
  display: flex;
  align-items: center;
  float: right;
  align-items: center;
  padding: 20px 30px;
`,Zo=R.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 30px;
  }
`,dz=({currentUser:t})=>w(oz,{children:X(az,{children:[w(lz,{children:"GayProject"}),w(uz,{children:X(cz,{children:[w(gs,{children:w(tr,{to:"/messangerReact/",children:"Home"})}),w(gs,{children:w(tr,{to:"/messangerReact/dashboard",children:"Dashboard"})}),w(gs,{children:w(tr,{to:"/messangerReact/projects",children:"Projects"})}),w(gs,{children:w(tr,{to:"/messangerReact/tasks",children:"Tasks"})}),w(gs,{children:w(tr,{to:"/messangerReact/bugtracker",children:"Bugtracker"})}),w(gs,{children:w(tr,{className:t?"online":null,to:"/messangerReact/messenger",children:"Messenger"})})]})}),X(hz,{children:[w(Zo,{children:w(fR,{size:25})}),w(Zo,{children:w(sz,{size:25})}),w(Zo,{children:w(nz,{size:25})}),t&&w(Zo,{children:w("img",{src:t.photoURL,alt:""})}),t&&w(Zo,{onClick:()=>hD(Md),children:w(iz,{size:40})}),!t&&w(tr,{to:"/messangerReact/login",children:w(rz,{size:40})})]})]})}),fz=R.div`
  display: flex;
  flex-direction: column;
  min-height: 99vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`,pz=R.main`
  flex-grow: 1;
`,mz=()=>{const{currentUser:t}=I.useContext(ds);return X(fz,{children:[w(dz,{currentUser:t}),w(pz,{children:w(i_,{})})]})},gz=async(t,e)=>await iD(Md,t,e),yz=async(t,e,n)=>e?(await Wx(mh(gh,t),e),await Hx(mh(gh,t))):`https://ui-avatars.com/api/?background=random&name=${n}`,vz=async(t,{displayName:e,photoURL:n})=>{await aD(t,{displayName:e,photoURL:n})},_z=async(t,e)=>{await Od(di(gt,`users/${t}`),e)},wz=async(t,e)=>await sD(Md,t,e),Ez=async()=>{const t=_n(gt,"users");return+(await ru(t)).size},Sz=R.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G1=R.input`
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
`,Cz=R.button`
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
`,Iz=()=>{const t=Ud();return X(Sz,{onSubmit:async n=>{n.preventDefault();const r=n.target[0].value,i=n.target[1].value;await wz(r,i),t("/")},children:[w(G1,{type:"email",placeholder:"email"}),w(G1,{type:"password",placeholder:"password"}),w(Cz,{children:"Sign in"})]})},Tz=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`,kz=R.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`,xz=R(s_)`
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`,Rz=()=>X(Tz,{children:[w(kz,{children:"Login"}),w(Iz,{}),w(xz,{to:"/messangerReact/register",children:"or Register"})]}),Nz=R.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`,rp=R.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 20rem;
  font-size: 1rem;
`,Az=R.label`
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
`,bz=R.button`
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
`,Pz=()=>{const t=Ud();return X(Nz,{onSubmit:async n=>{n.preventDefault();const r=n.target[0].value,i=n.target[1].value,s=n.target[2].value,o=n.target[3].files[0],a=await gz(i,s),l=await yz(i,o,r),u=await Ez();await vz(a.user,{displayName:r,photoURL:l}),await _z(a.user.uid,{displayName:r,email:i,photoURL:l,uid:a.user.uid,userId:u+1,displayNameLower:r.toLowerCase()}),t("/")},children:[w(rp,{type:"text",placeholder:"Display name"}),w(rp,{type:"email",placeholder:"Email"}),w(rp,{type:"password",placeholder:"Password"}),w(Az,{htmlFor:"file",children:w("span",{children:"Choose a photo"})}),w("input",{style:{display:"none"},type:"file",id:"file"}),w(bz,{type:"submit",children:"Sign up"})]})},Dz=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`,Oz=R.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`,Lz=R(s_)`
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`,Mz=()=>X(Dz,{children:[w(Oz,{children:"Register"}),w(Pz,{}),w(Lz,{to:"/messangerReact/login",children:"or Login"})]}),$z=()=>w("div",{children:"DashboardPage"}),Fz=()=>w("div",{children:"ProjectsPage"}),Uz=()=>w("div",{children:"TasksPage"}),Vz=()=>w("div",{children:"ReportingPage"}),Sh=t=>{const e=new Date(t),n=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");return`${n}:${r}`},Bz=R.div`
  border-bottom: none;
  a {
    &.active {
      display: block;
      background-color: var(--colors-bg-active);
      border-left: solid 4px var(--colors-style);
    }
  }
`,zz=R.div`
  padding: 10px 0;
`,jz=R.div`
  color: var(--colors-text);
  margin: 15px 30px;
  padding: 1px 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`,Wz=R.div`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
`,Hz=R.div`
  flex: 1;
  font-weight: var(--fw-normal);
`,qz=R.div`
  grid-area: username;
  color: var(--colors-text);
`,Gz=R.div`
  grid-area: column;
  display: flex;
`,Kz=R.div`
  grid-area: avatar;
  img {
    width: 43px;
    height: 43px;
    border-radius: 20px;
  }
`;R.div``;const Qz=({dialog:t,user:e})=>{const[n,r]=I.useState(null),i=t.group;return I.useEffect(()=>{const s=t.users.find(a=>a!==e.uid),o=Qv(di(gt,"users",s),a=>{const l=a.data();r(l)});return()=>o()},[t]),w(Bz,{children:w(tr,{to:"/messangerReact/messenger"+(i?t.groupId:n&&n.username||n&&n.userId),children:X(zz,{children:[X(Wz,{children:[w(Kz,{children:w("img",{src:i?t.avatar:n&&n.photoURL,alt:"photo"})}),X(Gz,{children:[w(Hz,{children:i?t.name:n&&n.displayName}),w("div",{children:t.lastAt?Sh(t.lastAt.toDate()):Sh(new Date)})]}),w(qz,{children:i?void 0:n&&n.username})]}),w(jz,{children:t.lastMessage})]})})})},Yz=R.div`
  height: 60vh;
  max-height: 100vh;
  overflow: auto;
`,Xz=({currentUser:t})=>{const[e,n]=I.useState([]);return I.useEffect(()=>{const r=kM(_n(gt,"dialogs"),Di("users","array-contains",t.uid),Wv("lastAt","desc"),R3(50)),i=Qv(r,s=>{const o=[];s.forEach(a=>{const l=a.data();o.push(l)}),n(o)});return()=>i()},[t]),w(Yz,{children:e.map(r=>w(Qz,{user:t,dialog:r},r.id))})},Jz=R.div`
  display: ${({view:t})=>t?"block":"none"};
`,Zz=({showUsers:t})=>{const{currentUser:e}=I.useContext(ds);return w(Jz,{view:!t,children:w(Xz,{currentUser:e})})},e5=R.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,t5=R.div`
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
`,n5=R.div`
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
`,r5=({handleSubmit:t,setActive:e})=>X(e5,{onSubmit:t,children:[X(t5,{children:[w("input",{type:"text",placeholder:"Name Group"}),w("label",{htmlFor:"file",children:w("span",{children:"IMG"})}),w("input",{type:"file",id:"file"})]}),X(n5,{children:[w("button",{className:"cancel-btn",type:"button",onClick:()=>e(!1),children:"Cancel"}),w("button",{className:"submit-btn",type:"submit",children:"Next"})]})]}),i5=async t=>{const e=Pi(_n(gt,"users"),Di("uid","!=",t));return await ru(e)},s5=async(t,e,n)=>t?(await Wx(mh(gh,e),t),await Hx(mh(gh,e))):`https://ui-avatars.com/api/?background=random&name=${n}`,o5=async()=>{const t=_n(gt,"dialogs");return-(await ru(t)).size},a5=async(t,e,n)=>{const r=e.uid,i=di(_n(gt,"dialogs")),s=await s5(t[0],i.id,t[1]);let o=await o5();const a=yl();await Od(i,{avatar:s,users:n,group:!0,name:t[1],lastMessage:"Dialog Created",owner:r,id:i.id,lastAt:a,groupId:--o})},l5=R.div`
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
`,u5=R.div`
  background-color: #6b96f6;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
`,c5=R.div`
  font-weight: bold;
  margin-right: 8px;
`,h5=R.div`
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
`,d5=({user:t,setSelectedUsers:e,selectedUsers:n})=>X(l5,{onClick:()=>{e(i=>n.includes(t.uid)?i.filter(s=>s!==t.uid):[...i,t.uid])},children:[w(h5,{children:w("img",{src:t.photoURL,alt:"photo"})}),w(c5,{children:t.displayName}),n.includes(t.uid)&&w(u5,{children:"Selected"})]}),f5=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`,p5=R.div``,m5=R.div`
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
`,g5=({setActive:t,setStep:e,currentUser:n,data:r})=>{const[i,s]=I.useState([]),[o,a]=I.useState(!1),[l,u]=I.useState([n.uid]);return I.useEffect(()=>{(async()=>{a(!0);try{const d=(await i5(n.uid)).docs.map(p=>p.data());s(d)}catch(h){console.error(h)}finally{a(!1)}})()},[n]),I.useEffect(()=>{},[l]),X(f5,{children:[o&&w("p",{children:"Loading users..."}),!o&&w(p5,{children:i.map(c=>w(d5,{setSelectedUsers:u,selectedUsers:l,user:c},c.uid))}),X(m5,{children:[w("button",{onClick:()=>t(!1),children:"Cancel"}),w("button",{onClick:()=>e(1),children:"Back"}),w("button",{onClick:()=>{a5(r,n,l),t(!1)},children:"Create Group"})]})]})};const y5=({active:t,setActive:e,children:n})=>w("div",{className:t?"modal active":"modal",onClick:()=>e(!1),children:w("div",{className:t?"modal-container active":"modal-container",onClick:r=>r.stopPropagation(),children:n})});function v5(t){return fs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400L100 256l144-144M120 256h292"}}]})(t)}function _5(t){return fs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"}},{tag:"path",attr:{d:"M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"}}]})(t)}const w5=R.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
`,E5=()=>{const{currentUser:t}=I.useContext(ds),[e,n]=I.useState(!1),[r,i]=I.useState(1),[s,o]=I.useState([]);return X(UR,{children:[w(w5,{className:"create",onClick:()=>{i(1),n(!0)},children:w(_5,{size:30})}),X(y5,{active:e,setActive:n,children:[r===1&&w(r5,{setActive:n,handleSubmit:async l=>{l.preventDefault(),o([]);const u=l.target[1].files[0],c=l.target[0].value;c&&(o([u,c]),i(2))}}),r===2&&w(g5,{setActive:n,currentUser:t,setStep:i,data:s})]})]})},S5=async t=>{if(!t)return[];const e=t.toLowerCase(),n=Pi(_n(gt,"users"),Wv("displayNameLower"),N3(e),A3(e+""));return await ru(n)},C5=R.div`
  border: solid 1px var(--colors-lines);
  padding: 10px 0;
`,I5=R.div`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
`,T5=R.div`
  flex: 1;
  font-weight: var(--fw-normal);
`,k5=R.div`
  grid-area: username;
  color: var(--colors-text);
`,x5=R.div`
  grid-area: column;
`,R5=R.div`
  grid-area: avatar;
  img {
    width: 43px;
    height: 43px;
    border-radius: 20px;
  }
`,N5=({user:t})=>w(tr,{to:"/messenger/"+(t.username||t.userId),children:w(C5,{children:X(I5,{children:[w(R5,{children:w("img",{src:t.photoURL,alt:"photo"})}),w(x5,{children:w(T5,{children:t.displayName})}),t.username&&w(k5,{children:t.username})]})})}),A5=R.div`
  margin: 12px 20px;
`,b5=R.div`
  display: flex;
  flex-direction: row;
  border: solid 1px var(--colors-lines);
  border-radius: 8px;
  padding: 12px 10px;
  margin-bottom: 10px;
`,P5=R.input`
  font-size: 16px;
  width: 90%;
  border-radius: 8px;
  margin-left: 10px;
`,D5=R.button`
  background-color: var(--colors-bg);
  margin: 0 10px;
`,O5=R.div`
  padding: 20px;
  font-size: 20px;
  font-weight: var(--fw-normal);
`,L5=R.div`
  height: 100%;
`,M5=({currentUser:t,setShowUsers:e,showUsers:n})=>{const[r,i]=I.useState(""),[s,o]=I.useState([]),a=async()=>{o([]),(await S5(r)).forEach(c=>{const h=c.data();h.uid!==t.uid&&o(d=>[...d,h])})};return X(A5,{children:[X(b5,{children:[X(D5,{children:[!n&&w(fR,{size:30}),n&&w(v5,{onMouseDown:()=>{e(!1),i(""),o([])},size:30})]}),w(P5,{onMouseDown:()=>e(!0),type:"text",placeholder:"Search",onKeyDown:u=>{u.code==="Enter"&&a()},onChange:u=>{i(u.target.value)},value:r})]}),n&&X(L5,{children:[X(O5,{children:["Result search ",s.length]}),s.map(u=>w(N5,{user:u},u.uid))]})]})},$5=({setShowUsers:t,showUsers:e})=>{const{currentUser:n}=I.useContext(ds);return w(M5,{showUsers:e,setShowUsers:t,currentUser:n})};const F5=R.div`
  width: 100%;
  border-start-start-radius: 10px;
  border: solid 1px var(--colors-lines);
`,U5=R.div`
  display: flex;
  flex-direction: column;
`,V5=R.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
`,B5=R.div`
  font-size: 20px;
  font-weight: var(--fw-normal);
`,z5=()=>{const[t,e]=I.useState(!1);return X(F5,{children:[X(U5,{children:[X(V5,{children:[w(B5,{children:"Messages"}),w(E5,{})]}),w($5,{showUsers:t,setShowUsers:e})]}),w(Zz,{showUsers:t})]})},j5=R.div`
  position: relative;
  min-width: 60px;
  max-width: 300px;
  color: ${({isFromSender:t})=>t?"var(--colors-ui-style)":"var(--colors-text)"};
  background-color: ${({isFromSender:t})=>t?"var(--colors-style)":"var(--colors-message-to-bg)"};
  width: max-content;
  border-radius: 10px;
  word-wrap: break-word;
  padding: 15px;
  margin-bottom: 20px;
`,W5=R.div`
  margin-right: 40px;
`,H5=R.span`
  position: absolute;
  bottom: 10px;
  right: 15px;
  color: ${({isFromSender:t})=>t?"var(--colors-ui-style)":"var(--colors-text)"};
  font-size: 12px;
`,q5=({isFromSender:t,message:e})=>w(j5,{isFromSender:t,children:X(W5,{isFromSender:t,children:[e.text,w(H5,{isFromSender:t,children:e.createdAt?Sh(e.createdAt.toDate()):Sh(new Date)})]})}),ip=async t=>(await ru(t)).docs.map(e=>e.data()),G5=async(t,e,n)=>{if(!t)return;const r=_n(gt,"dialogs"),i=async()=>{let a=null;+t?a=Pi(_n(gt,"users"),Di("userId","==",+t)):a=Pi(_n(gt,"users"),Di("username","==",t));const l=await ip(a);return n([l[0]]),await s(l[0].uid)},s=async a=>{const l=Pi(r,Di("users","in",[[e.uid,a],[a,e.uid]]));return(await ip(l))[0]},o=async()=>{const a=Pi(r,Di("groupId","==",+t)),l=await ip(a);return K5(e,l[0],n),l[0]};return+t<0?o():i()},K5=async(t,e,n)=>{const r=e.users.filter(s=>s!==t.uid),i=[t];for(const s of r){const o=di(gt,"users",s),a=await O3(o);if(a.exists()){const l=a.data();i.push(l)}}n(i)},Q5=async(t,e)=>{const n=yl(),r=di(_n(gt,"dialogs"));return await Od(r,{users:[t,e],lastAt:n,id:r.id}),console.log(`Dialog ${r.id}`),r.id},Y5=async({fromId:t,text:e},n)=>{const r=yl(),i=di(_n(gt,"messages"));await Od(i,{id:i.id,fromId:t,dialogId:n,text:e,attachment:[!1],createdAt:r}),console.log(`Message ${i.id}`),Km(di(gt,"dialogs",n),{lastMessage:e,lastAt:r})},X5=R.form`
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
`,J5=({currentUser:t,dialog:e,setUpdateDialog:n,usersDialog:r})=>{const i=r.find(l=>l.uid!==t.uid),[s,o]=I.useState("");return X(X5,{onSubmit:async l=>{l.preventDefault();const u=l.target[0].value,c=t.uid;let h="";e?h=e.id:(h=await Q5(c,i.uid),n(!0)),Y5({fromId:c,text:u},h),o("")},children:[w("input",{type:"text",placeholder:"Send Message",value:s,onChange:l=>o(l.target.value)}),w("button",{children:"Send"})]})},Z5=R.div`
  padding: 5px 50px;
`,ej=R.div`
  position: relative;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-areas: "avatar column";
  align-items: end;
`,tj=R.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isFromSender:t})=>t?"flex-end":"flex-start"};
`,nj=R.img`
  width: 43px;
  height: 43px;
  border-radius: 20px;
  position: relative;
  right: 50px;
  top: 20px;
`,K1=R.div`
  padding-right: 20px;
  grid-area: column;
  position: relative;
  top: -5px;
  right: ${({isFromSender:t})=>t?"-10px":"40px"};
`,rj=R.div``,ij=R.div`
  position: relative;
  grid-area: avatar;
`,sj=({messageGroup:t,currentUser:e,usersDialog:n})=>{const r=t.fromId===e.uid,i=n.find(s=>s.uid===t.fromId);return w(Z5,{children:X(tj,{isFromSender:r,children:[X(ej,{children:[X(ij,{children:[!r&&w(nj,{src:i&&i.photoURL}),w(rj,{})]}),!r&&w(K1,{isFromSender:r,children:i&&i.displayName}),r&&w(K1,{isFromSender:r,children:"You"})]}),t.messages.map(s=>w(q5,{isFromSender:r,message:s,sender:i},s.id))]})})},oj=R.div`
  padding: 2px 30px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
`,aj=({dialog:t,currentUser:e,usersDialog:n})=>{const[r,i]=I.useState([]),[s,o]=I.useState(!0);return console.log(t),I.useEffect(()=>{if(!t){i([]),o(!1);return}const a=t.id,l=Pi(_n(gt,"messages"),Di("dialogId","==",a),Wv("createdAt")),u=Qv(l,c=>{const h=[];c.forEach(p=>{const g=p.data();h.push(g)});const d=h.reduce((p,g)=>{const y=p.length-1,_=p[y];return!_||_.fromId!==g.fromId?p.push({id:g.id,fromId:g.fromId,messages:[g]}):_.messages.push(g),p},[]);i(d)});return()=>{u(),o(!1)}},[t]),X(oj,{children:[s&&w("p",{children:"Loading"}),!s&&r.map(a=>w(sj,{messageGroup:a,usersDialog:n,currentUser:e},a.id))]})};const lj=R.div`
  flex-basis: 100px;
  border-bottom: solid 1px var(--colors-lines);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,uj=R.div`
  flex: 1;
  margin: 18px 22px;
  display: grid;
  grid-template-columns: 73px 1fr;
  grid-template-areas:
    "avatar column"
    "avatar username";
  align-items: center;
`,cj=R.div`
  grid-area: avatar;
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
`,hj=R.div`
  display: flex;
  grid-area: column;
  align-items: center;
`,dj=R.div`
  margin-right: 10px;
  font-weight: var(--fw-normal);
`,fj=R.div`
  position: relative;
  background-color: ${t=>t.sender&&t.sender.online?"var(--colors-status-bg-online)":"var(--colors-status-bg-offline)"};
  padding: 5px;
  border-radius: 20px;
  color: ${t=>t.sender&&t.sender.online?"var(--colors-status-online)":"var(--colors-status-offline)"};
  .online::before {
    content: "";
    position: relative;
    top: -1px;
    left: -4px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${t=>t.sender&&t.sender.online?"var(--colors-status-online)":"var(--colors-status-offline)"};
    margin-left: 10px;
  }
`,pj=R.button`
  margin: 0 10px;
  border: solid 1px var(--colors-lines);
  padding: 15px 20px;
  border-radius: 15px;
  background-color: var(--colors-bg);
`,mj=R.button`
  background-color: var(--colors-ui-style);
  padding: 15px 20px;
  color: var(--colors-text-style);
  border-radius: 15px;
  margin-right: 10px;
`,gj=R.button`
  background-color: var(--colors-style);
  padding: 15px 30px;
  margin-right: 30px;
  border-radius: 15px;
  color: white;
`,yj=R.div``,vj=R.div`
  display: flex;
  align-items: center;
  float: right;
  align-items: center;
  padding: 20px 30px;
`,_j=I.memo(({dialog:t,usersDialog:e,currentUser:n,group:r})=>{const i=e.find(s=>s.uid!==n.uid);return X(lj,{children:[X(uj,{children:[w(cj,{children:w("img",{src:r?t.avatar:i&&i.photoURL,alt:"photo"})}),X(hj,{children:[w(dj,{children:r?t.name:i&&i.displayName}),r?null:w(fj,{sender:i,children:w("div",{className:"online",children:i&&i.online?"online":"offline"})})]}),w(yj,{children:r?void 0:i&&i.username})]}),X(vj,{children:[w(pj,{children:"Call"}),w(mj,{children:"Archive"}),w(gj,{children:"View profile"})]})]})}),wj=R.div`
  display: flex;
  flex-direction: column;
`,Ej=R.div`
  display: flex;
  flex-direction: column;
`,Sj=R.div``,Cj=()=>{const{currentUser:t}=I.useContext(ds),{id:e}=OV(),[n,r]=I.useState(null),[i,s]=I.useState([]),[o,a]=I.useState(!1),[l,u]=I.useState(!1),[c,h]=I.useState(e);return I.useEffect(()=>{(async()=>{a(!1);const p=await G5(e,t,s);r(p),p&&a(p.group)})()},[e,l]),X(Sj,{children:[w(wj,{children:c&&w(_j,{group:o,usersDialog:i,dialog:n,currentUser:t})}),X(Ej,{children:[c&&w(aj,{dialog:n,currentUser:t,usersDialog:i}),!c&&w("div",{children:"Choice dialog"}),c&&w(J5,{currentUser:t,setUpdateDialog:u,dialog:n,usersDialog:i})]})]})},Ij=R.div`
  width: 100%;
  border-start-end-radius: 10px;
  border: solid 1px var(--colors-lines);
`,Tj=()=>w(Ij,{children:w(Cj,{})}),kj=R.div`
  display: flex;
  flex-direction: column;
`,xj=R.div`
  font-size: 32px;
  padding: 25px 0px 10px 25px;
  font-weight: var(--fw-normal);
  margin-bottom: 35px;
`,Rj=R.article`
  display: grid;
  grid-template-columns: 28.8% 71.2%;
  width: 100%;
`,Q1=()=>X(kj,{children:[w(xj,{children:"All messages"}),X(Rj,{children:[w(z5,{}),w(Tj,{})]})]}),Nj=({isAuth:t})=>t?w(Jx,{to:"/"}):w(i_,{}),Aj=async t=>{if(!t)return;const e=t.uid,n=di(gt,"users",e),r=CM(G4,".info/connected");window.addEventListener("beforeunload",async i=>{i.preventDefault(),await Km(n,{online:!1,lastOnline:yl()})}),TM(r,i=>{i.val()===!0&&Km(n,{online:!0,lastOnline:yl()})})},bj=({isAuth:t})=>t?w(i_,{}):w(Jx,{to:"/messangerReact/login"}),Pj=[{path:"/messangerReact/dashboard",component:$z},{path:"/messangerReact/projects",component:Fz},{path:"/messangerReact/tasks",component:Uz},{path:"/messangerReact/bugtracker",component:Vz},{path:"/messangerReact/messenger",component:Q1},{path:"/messangerReact/messenger/:id",component:Q1}],Dj=()=>{const{currentUser:t}=I.useContext(ds);return Aj(t),w(YV,{children:w(HV,{children:X(Zn,{path:"/messangerReact/",element:w(mz,{}),children:[w(Zn,{path:"/messangerReact/",element:w(eB,{})}),X(Zn,{element:w(Nj,{isAuth:t}),children:[w(Zn,{path:"register",element:w(Mz,{})}),w(Zn,{path:"login",element:w(Rz,{})})]}),w(Zn,{element:w(bj,{isAuth:t}),children:Pj.map(e=>{const n=e.component,r=e.path;return w(Zn,{path:r,element:w(n,{})},r)})}),w(Zn,{path:"*",element:w("div",{children:"Not Found"})})]})})})},Oj=()=>{const[t,e]=I.useState(!0);return X(K4,{setIsLoading:e,children:[t&&w(Q4,{}),!t&&w(Dj,{})]})};op.createRoot(document.getElementById("root")).render(w(rn.StrictMode,{children:w(Oj,{})}));
