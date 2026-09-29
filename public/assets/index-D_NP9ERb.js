(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function YM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m_={exports:{}},Zu={},g_={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),$M=Symbol.for("react.portal"),qM=Symbol.for("react.fragment"),KM=Symbol.for("react.strict_mode"),ZM=Symbol.for("react.profiler"),JM=Symbol.for("react.provider"),QM=Symbol.for("react.context"),eE=Symbol.for("react.forward_ref"),tE=Symbol.for("react.suspense"),nE=Symbol.for("react.memo"),iE=Symbol.for("react.lazy"),jm=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,y_={};function mo(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||v_}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x_(){}x_.prototype=mo.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||v_}var Kd=qd.prototype=new x_;Kd.constructor=qd;__(Kd,mo.prototype);Kd.isPureReactComponent=!0;var Ym=Array.isArray,S_=Object.prototype.hasOwnProperty,Zd={current:null},M_={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S_.call(e,i)&&!M_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:Zd.current}}function sE(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function oE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oE(""+t.key):e.toString(36)}function jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case $M:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,Ym(r)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),jl(r,e,n,"",function(u){return u})):r!=null&&(Jd(r)&&(r=sE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($m,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=jl(s,e,n,l,r)}else if(l=rE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=jl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function aE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Yl={transition:null},lE={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Zd};function T_(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=mo;je.Fragment=qM;je.Profiler=ZM;je.PureComponent=qd;je.StrictMode=KM;je.Suspense=tE;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;je.act=T_;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=__({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)S_.call(e,l)&&!M_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:QM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JM,_context:t},t.Consumer=t};je.createElement=E_;je.createFactory=function(t){var e=E_.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:eE,render:t}};je.isValidElement=Jd;je.lazy=function(t){return{$$typeof:iE,_payload:{_status:-1,_result:t},_init:aE}};je.memo=function(t,e){return{$$typeof:nE,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};je.unstable_act=T_;je.useCallback=function(t,e){return nn.current.useCallback(t,e)};je.useContext=function(t){return nn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};je.useEffect=function(t,e){return nn.current.useEffect(t,e)};je.useId=function(){return nn.current.useId()};je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return nn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};je.useRef=function(t){return nn.current.useRef(t)};je.useState=function(t){return nn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return nn.current.useTransition()};je.version="18.3.1";g_.exports=je;var Ue=g_.exports;const uE=YM(Ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=Ue,fE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,pE=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mE={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)dE.call(e,i)&&!mE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fE,type:t,key:s,ref:o,props:r,_owner:pE.current}}Zu.Fragment=hE;Zu.jsx=w_;Zu.jsxs=w_;m_.exports=Zu;var te=m_.exports,qf={},A_={exports:{}},Rn={},C_={exports:{}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var q=L.length;L.push(Y);e:for(;0<q;){var re=q-1>>>1,Re=L[re];if(0<r(Re,Y))L[re]=Y,L[q]=Re,q=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],q=L.pop();if(q!==Y){L[0]=q;e:for(var re=0,Re=L.length,ze=Re>>>1;re<ze;){var j=2*(re+1)-1,ne=L[j],pe=j+1,ue=L[pe];if(0>r(ne,q))pe<Re&&0>r(ue,ne)?(L[re]=ue,L[pe]=q,re=pe):(L[re]=ne,L[j]=q,re=j);else if(pe<Re&&0>r(ue,q))L[re]=ue,L[pe]=q,re=pe;else break e}}return Y}function r(L,Y){var q=L.sortIndex-Y.sortIndex;return q!==0?q:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=L)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function S(L){if(y=!1,v(L),!g)if(n(l)!==null)g=!0,B(b);else{var Y=n(u);Y!==null&&X(S,Y.startTime-L)}}function b(L,Y){g=!1,y&&(y=!1,d(P),P=-1),p=!0;var q=h;try{for(v(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||L&&!E());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var Re=re(f.expirationTime<=Y);Y=t.unstable_now(),typeof Re=="function"?f.callback=Re:f===n(l)&&i(l),v(Y)}else i(l);f=n(l)}if(f!==null)var ze=!0;else{var j=n(u);j!==null&&X(S,j.startTime-Y),ze=!1}return ze}finally{f=null,h=q,p=!1}}var A=!1,w=null,P=-1,H=5,x=-1;function E(){return!(t.unstable_now()-x<H)}function k(){if(w!==null){var L=t.unstable_now();x=L;var Y=!0;try{Y=w(!0,L)}finally{Y?O():(A=!1,w=null)}}else A=!1}var O;if(typeof _=="function")O=function(){_(k)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,$=G.port2;G.port1.onmessage=k,O=function(){$.postMessage(null)}}else O=function(){m(k,0)};function B(L){w=L,A||(A=!0,O())}function X(L,Y){P=m(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,B(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return L()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=h;h=L;try{return Y()}finally{h=q}},t.unstable_scheduleCallback=function(L,Y,q){var re=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,L){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=q+Re,L={id:c++,callback:Y,priorityLevel:L,startTime:q,expirationTime:Re,sortIndex:-1},q>re?(L.sortIndex=q,e(u,L),n(l)===null&&L===n(u)&&(y?(d(P),P=-1):y=!0,X(S,q-re))):(L.sortIndex=Re,e(l,L),g||p||(g=!0,B(b))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Y=h;return function(){var q=h;h=Y;try{return L.apply(this,arguments)}finally{h=q}}}})(R_);C_.exports=R_;var gE=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=Ue,An=gE;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P_=new Set,ca={};function rs(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(ca[t]=e,t=0;t<e.length;t++)P_.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qm={},Km={};function yE(t){return Kf.call(Km,t)?!0:Kf.call(qm,t)?!1:_E.test(t)?Km[t]=!0:(qm[t]=!0,!1)}function xE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SE(t,e,n,i){if(e===null||typeof e>"u"||xE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,ep);Ht[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,ep);Ht[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,ep);Ht[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function tp(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SE(e,n,r,i)&&(n=null),i||r===null?yE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),L_=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),Qf=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Pc;function ko(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var bc=!1;function Lc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function ME(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case Zf:return"Profiler";case np:return"StrictMode";case Jf:return"Suspense";case Qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L_:return(t.displayName||"Context")+".Consumer";case b_:return(t._context.displayName||"Context")+".Provider";case ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rp:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function EE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TE(t){var e=I_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=TE(t))}function N_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=I_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U_(t,e){e=e.checked,e!=null&&tp(t,"checked",e,!1)}function nh(t,e){U_(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Bo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function F_(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wE=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){wE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function B_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function z_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=B_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AE=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(AE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,Gs=null,Ws=null;function ng(t){if(t=Ba(t)){if(typeof uh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=nc(e),uh(t.stateNode,t.type,e))}}function V_(t){Gs?Ws?Ws.push(t):Ws=[t]:Gs=t}function H_(){if(Gs){var t=Gs,e=Ws;if(Ws=Gs=null,ng(t),e)for(t=0;t<e.length;t++)ng(e[t])}}function G_(t,e){return t(e)}function W_(){}var Dc=!1;function X_(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return G_(t,e,n)}finally{Dc=!1,(Gs!==null||Ws!==null)&&(W_(),H_())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var ch=!1;if(Li)try{var To={};Object.defineProperty(To,"passive",{get:function(){ch=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ch=!1}function CE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $o=!1,mu=null,gu=!1,fh=null,RE={onError:function(t){$o=!0,mu=t}};function PE(t,e,n,i,r,s,o,a,l){$o=!1,mu=null,CE.apply(RE,arguments)}function bE(t,e,n,i,r,s,o,a,l){if(PE.apply(this,arguments),$o){if($o){var u=mu;$o=!1,mu=null}else throw Error(se(198));gu||(gu=!0,fh=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ig(t){if(ss(t)!==t)throw Error(se(188))}function LE(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ig(r),t;if(s===i)return ig(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Y_(t){return t=LE(t),t!==null?$_(t):null}function $_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$_(t);if(e!==null)return e;t=t.sibling}return null}var q_=An.unstable_scheduleCallback,rg=An.unstable_cancelCallback,DE=An.unstable_shouldYield,IE=An.unstable_requestPaint,Tt=An.unstable_now,NE=An.unstable_getCurrentPriorityLevel,op=An.unstable_ImmediatePriority,K_=An.unstable_UserBlockingPriority,vu=An.unstable_NormalPriority,UE=An.unstable_LowPriority,Z_=An.unstable_IdlePriority,Ju=null,li=null;function FE(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:BE,OE=Math.log,kE=Math.LN2;function BE(t){return t>>>=0,t===0?32:31-(OE(t)/kE|0)|0}var il=64,rl=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _u(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function zE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=zE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J_(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function HE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ey,lp,ty,ny,iy,dh=!1,sl=[],ir=null,rr=null,sr=null,da=new Map,pa=new Map,Zi=[],GE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&lp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function WE(t,e,n,i,r){switch(e){case"focusin":return ir=wo(ir,t,e,n,i,r),!0;case"dragenter":return rr=wo(rr,t,e,n,i,r),!0;case"mouseover":return sr=wo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,wo(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,wo(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function ry(t){var e=zr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=j_(n),e!==null){t.blockedOn=e,iy(t.priority,function(){ty(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lh=i,n.target.dispatchEvent(i),lh=null}else return e=Ba(n),e!==null&&lp(e),t.blockedOn=n,!1;e.shift()}return!0}function og(t,e,n){$l(t)&&n.delete(e)}function XE(){dh=!1,ir!==null&&$l(ir)&&(ir=null),rr!==null&&$l(rr)&&(rr=null),sr!==null&&$l(sr)&&(sr=null),da.forEach(og),pa.forEach(og)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,dh||(dh=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,XE)))}function ma(t){function e(r){return Ao(r,t)}if(0<sl.length){Ao(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&Ao(ir,t),rr!==null&&Ao(rr,t),sr!==null&&Ao(sr,t),da.forEach(e),pa.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)ry(n),n.blockedOn===null&&Zi.shift()}var Xs=Bi.ReactCurrentBatchConfig,yu=!0;function jE(t,e,n,i){var r=it,s=Xs.transition;Xs.transition=null;try{it=1,up(t,e,n,i)}finally{it=r,Xs.transition=s}}function YE(t,e,n,i){var r=it,s=Xs.transition;Xs.transition=null;try{it=4,up(t,e,n,i)}finally{it=r,Xs.transition=s}}function up(t,e,n,i){if(yu){var r=ph(t,e,n,i);if(r===null)Gc(t,e,i,xu,n),sg(t,i);else if(WE(r,t,e,n,i))i.stopPropagation();else if(sg(t,i),e&4&&-1<GE.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&ey(s),s=ph(t,e,n,i),s===null&&Gc(t,e,i,xu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(t,e,i,null,n)}}var xu=null;function ph(t,e,n,i){if(xu=null,t=sp(i),t=zr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xu=t,null}function sy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NE()){case op:return 1;case K_:return 4;case vu:case UE:return 16;case Z_:return 536870912;default:return 16}default:return 16}}var er=null,cp=null,ql=null;function oy(){if(ql)return ql;var t,e=cp,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function ag(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:ag,this.isPropagationStopped=ag,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=Pn(go),ka=_t({},go,{view:0,detail:0}),$E=Pn(ka),Nc,Uc,Co,Qu=_t({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(Nc=t.screenX-Co.screenX,Uc=t.screenY-Co.screenY):Uc=Nc=0,Co=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),lg=Pn(Qu),qE=_t({},Qu,{dataTransfer:0}),KE=Pn(qE),ZE=_t({},ka,{relatedTarget:0}),Fc=Pn(ZE),JE=_t({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),QE=Pn(JE),eT=_t({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tT=Pn(eT),nT=_t({},go,{data:0}),ug=Pn(nT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sT[t])?!!e[t]:!1}function hp(){return oT}var aT=_t({},ka,{key:function(t){if(t.key){var e=iT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lT=Pn(aT),uT=_t({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=Pn(uT),cT=_t({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),fT=Pn(cT),hT=_t({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=Pn(hT),pT=_t({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mT=Pn(pT),gT=[9,13,27,32],dp=Li&&"CompositionEvent"in window,qo=null;Li&&"documentMode"in document&&(qo=document.documentMode);var vT=Li&&"TextEvent"in window&&!qo,ay=Li&&(!dp||qo&&8<qo&&11>=qo),fg=" ",hg=!1;function ly(t,e){switch(t){case"keyup":return gT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function _T(t,e){switch(t){case"compositionend":return uy(e);case"keypress":return e.which!==32?null:(hg=!0,fg);case"textInput":return t=e.data,t===fg&&hg?null:t;default:return null}}function yT(t,e){if(ws)return t==="compositionend"||!dp&&ly(t,e)?(t=oy(),ql=cp=er=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var xT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xT[t.type]:e==="textarea"}function cy(t,e,n,i){V_(i),e=Su(e,"onChange"),0<e.length&&(n=new fp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ko=null,ga=null;function ST(t){Sy(t,0)}function ec(t){var e=Rs(t);if(N_(e))return t}function MT(t,e){if(t==="change")return e}var fy=!1;if(Li){var Oc;if(Li){var kc="oninput"in document;if(!kc){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),kc=typeof pg.oninput=="function"}Oc=kc}else Oc=!1;fy=Oc&&(!document.documentMode||9<document.documentMode)}function mg(){Ko&&(Ko.detachEvent("onpropertychange",hy),ga=Ko=null)}function hy(t){if(t.propertyName==="value"&&ec(ga)){var e=[];cy(e,ga,t,sp(t)),X_(ST,e)}}function ET(t,e,n){t==="focusin"?(mg(),Ko=e,ga=n,Ko.attachEvent("onpropertychange",hy)):t==="focusout"&&mg()}function TT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(ga)}function wT(t,e){if(t==="click")return ec(e)}function AT(t,e){if(t==="input"||t==="change")return ec(e)}function CT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:CT;function va(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=gg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function dy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function py(){for(var t=window,e=pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pu(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RT(t){var e=py(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dy(n.ownerDocument.documentElement,n)){if(i!==null&&pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vg(n,s);var o=vg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PT=Li&&"documentMode"in document&&11>=document.documentMode,As=null,mh=null,Zo=null,gh=!1;function _g(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||As==null||As!==pu(i)||(i=As,"selectionStart"in i&&pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zo&&va(Zo,i)||(Zo=i,i=Su(mh,"onSelect"),0<i.length&&(e=new fp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Bc={},my={};Li&&(my=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function tc(t){if(Bc[t])return Bc[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in my)return Bc[t]=e[n];return t}var gy=tc("animationend"),vy=tc("animationiteration"),_y=tc("animationstart"),yy=tc("transitionend"),xy=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){xy.set(t,e),rs(e,[t])}for(var zc=0;zc<yg.length;zc++){var Vc=yg[zc],bT=Vc.toLowerCase(),LT=Vc[0].toUpperCase()+Vc.slice(1);yr(bT,"on"+LT)}yr(gy,"onAnimationEnd");yr(vy,"onAnimationIteration");yr(_y,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(yy,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function xg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bE(i,e,void 0,t),t.currentTarget=null}function Sy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xg(r,a,u),s=l}}}if(gu)throw t=fh,gu=!1,fh=null,t}function lt(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var i=t+"__bubble";n.has(i)||(My(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),My(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[ll]){t[ll]=!0,P_.forEach(function(n){n!=="selectionchange"&&(DT.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,Hc("selectionchange",!1,e))}}function My(t,e,n,i){switch(sy(e)){case 1:var r=jE;break;case 4:r=YE;break;default:r=up}n=r.bind(null,e,n,t),r=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}X_(function(){var u=s,c=sp(n),f=[];e:{var h=xy.get(t);if(h!==void 0){var p=fp,g=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":p=lT;break;case"focusin":g="focus",p=Fc;break;case"focusout":g="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fT;break;case gy:case vy:case _y:p=QE;break;case yy:p=dT;break;case"scroll":p=$E;break;case"wheel":p=mT;break;case"copy":case"cut":case"paste":p=tT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cg}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=ha(_,d),S!=null&&y.push(ya(_,S,v)))),m)break;_=_.return}0<y.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==lh&&(g=n.relatedTarget||n.fromElement)&&(zr(g)||g[Di]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?zr(g):null,g!==null&&(m=ss(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=lg,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=cg,S="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?h:Rs(p),v=g==null?h:Rs(g),h=new y(S,_+"leave",p,n,c),h.target=m,h.relatedTarget=v,S=null,zr(c)===u&&(y=new y(d,_+"enter",g,n,c),y.target=v,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,d=g,_=0,v=y;v;v=ls(v))_++;for(v=0,S=d;S;S=ls(S))v++;for(;0<_-v;)y=ls(y),_--;for(;0<v-_;)d=ls(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=ls(y),d=ls(d)}y=null}else y=null;p!==null&&Sg(f,h,p,y,!1),g!==null&&m!==null&&Sg(f,m,g,y,!0)}}e:{if(h=u?Rs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=MT;else if(dg(h))if(fy)b=AT;else{b=TT;var A=ET}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=wT);if(b&&(b=b(t,u))){cy(f,b,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ih(h,"number",h.value)}switch(A=u?Rs(u):window,t){case"focusin":(dg(A)||A.contentEditable==="true")&&(As=A,mh=u,Zo=null);break;case"focusout":Zo=mh=As=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,_g(f,n,c);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":_g(f,n,c)}var w;if(dp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ws?ly(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ay&&n.locale!=="ko"&&(ws||P!=="onCompositionStart"?P==="onCompositionEnd"&&ws&&(w=oy()):(er=c,cp="value"in er?er.value:er.textContent,ws=!0)),A=Su(u,P),0<A.length&&(P=new ug(P,t,null,n,c),f.push({event:P,listeners:A}),w?P.data=w:(w=uy(n),w!==null&&(P.data=w)))),(w=vT?_T(t,n):yT(t,n))&&(u=Su(u,"onBeforeInput"),0<u.length&&(c=new ug("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}Sy(f,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IT=/\r\n?/g,NT=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(NT,"")}function ul(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(se(425))}function Mu(){}var vh=null,_h=null;function yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,FT=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(OT)}:xh;function OT(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ai="__reactFiber$"+vo,xa="__reactProps$"+vo,Di="__reactContainer$"+vo,Sh="__reactEvents$"+vo,kT="__reactListeners$"+vo,BT="__reactHandles$"+vo;function zr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[ai])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[ai]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function nc(t){return t[xa]||null}var Mh=[],Ps=-1;function xr(t){return{current:t}}function ct(t){0>Ps||(t.current=Mh[Ps],Mh[Ps]=null,Ps--)}function ot(t,e){Ps++,Mh[Ps]=t.current,t.current=e}var mr={},Zt=xr(mr),fn=xr(!1),Kr=mr;function Js(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Eu(){ct(fn),ct(Zt)}function wg(t,e,n){if(Zt.current!==mr)throw Error(se(168));ot(Zt,e),ot(fn,n)}function Ey(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,EE(t)||"Unknown",r));return _t({},n,i)}function Tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Kr=Zt.current,ot(Zt,t),ot(fn,fn.current),!0}function Ag(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ey(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,ct(fn),ct(Zt),ot(Zt,t)):ct(fn),ot(fn,n)}var Si=null,ic=!1,Xc=!1;function Ty(t){Si===null?Si=[t]:Si.push(t)}function zT(t){ic=!0,Ty(t)}function Sr(){if(!Xc&&Si!==null){Xc=!0;var t=0,e=it;try{var n=Si;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,ic=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),q_(op,Sr),r}finally{it=e,Xc=!1}}return null}var bs=[],Ls=0,wu=null,Au=0,Nn=[],Un=0,Zr=null,Ei=1,Ti="";function Dr(t,e){bs[Ls++]=Au,bs[Ls++]=wu,wu=t,Au=e}function wy(t,e,n){Nn[Un++]=Ei,Nn[Un++]=Ti,Nn[Un++]=Zr,Zr=t;var i=Ei;t=Ti;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-ei(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function mp(t){t.return!==null&&(Dr(t,1),wy(t,1,0))}function gp(t){for(;t===wu;)wu=bs[--Ls],bs[Ls]=null,Au=bs[--Ls],bs[Ls]=null;for(;t===Zr;)Zr=Nn[--Un],Nn[Un]=null,Ti=Nn[--Un],Nn[Un]=null,Ei=Nn[--Un],Nn[Un]=null}var Tn=null,En=null,ht=!1,Kn=null;function Ay(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function Eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Th(t){if(ht){var e=En;if(e){var n=e;if(!Cg(t,e)){if(Eh(t))throw Error(se(418));e=or(n.nextSibling);var i=Tn;e&&Cg(t,e)?Ay(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(Eh(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function cl(t){if(t!==Tn)return!1;if(!ht)return Rg(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yh(t.type,t.memoizedProps)),e&&(e=En)){if(Eh(t))throw Cy(),Error(se(418));for(;e;)Ay(t,e),e=or(e.nextSibling)}if(Rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?or(t.stateNode.nextSibling):null;return!0}function Cy(){for(var t=En;t;)t=or(t.nextSibling)}function Qs(){En=Tn=null,ht=!1}function vp(t){Kn===null?Kn=[t]:Kn.push(t)}var VT=Bi.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pg(t){var e=t._init;return e(t._payload)}function Ry(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=cr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,S){return _===null||_.tag!==6?(_=Jc(v,d.mode,S),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,S){var b=v.type;return b===Ts?c(d,_,v.props.children,S,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&Pg(b)===_.type)?(S=r(_,v.props),S.ref=Ro(d,_,v),S.return=d,S):(S=iu(v.type,v.key,v.props,null,d.mode,S),S.ref=Ro(d,_,v),S.return=d,S)}function u(d,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Qc(v,d.mode,S),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,S,b){return _===null||_.tag!==7?(_=$r(v,d.mode,S,b),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case el:return v=iu(_.type,_.key,_.props,null,d.mode,v),v.ref=Ro(d,null,_),v.return=d,v;case Es:return _=Qc(_,d.mode,v),_.return=d,_;case qi:var S=_._init;return f(d,S(_._payload),v)}if(Bo(_)||Eo(_))return _=$r(_,d.mode,v,null),_.return=d,_;fl(d,_)}return null}function h(d,_,v,S){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(d,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return v.key===b?l(d,_,v,S):null;case Es:return v.key===b?u(d,_,v,S):null;case qi:return b=v._init,h(d,_,b(v._payload),S)}if(Bo(v)||Eo(v))return b!==null?null:c(d,_,v,S,null);fl(d,v)}return null}function p(d,_,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,a(_,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return d=d.get(S.key===null?v:S.key)||null,l(_,d,S,b);case Es:return d=d.get(S.key===null?v:S.key)||null,u(_,d,S,b);case qi:var A=S._init;return p(d,_,v,A(S._payload),b)}if(Bo(S)||Eo(S))return d=d.get(v)||null,c(_,d,S,b,null);fl(_,S)}return null}function g(d,_,v,S){for(var b=null,A=null,w=_,P=_=0,H=null;w!==null&&P<v.length;P++){w.index>P?(H=w,w=null):H=w.sibling;var x=h(d,w,v[P],S);if(x===null){w===null&&(w=H);break}t&&w&&x.alternate===null&&e(d,w),_=s(x,_,P),A===null?b=x:A.sibling=x,A=x,w=H}if(P===v.length)return n(d,w),ht&&Dr(d,P),b;if(w===null){for(;P<v.length;P++)w=f(d,v[P],S),w!==null&&(_=s(w,_,P),A===null?b=w:A.sibling=w,A=w);return ht&&Dr(d,P),b}for(w=i(d,w);P<v.length;P++)H=p(w,d,P,v[P],S),H!==null&&(t&&H.alternate!==null&&w.delete(H.key===null?P:H.key),_=s(H,_,P),A===null?b=H:A.sibling=H,A=H);return t&&w.forEach(function(E){return e(d,E)}),ht&&Dr(d,P),b}function y(d,_,v,S){var b=Eo(v);if(typeof b!="function")throw Error(se(150));if(v=b.call(v),v==null)throw Error(se(151));for(var A=b=null,w=_,P=_=0,H=null,x=v.next();w!==null&&!x.done;P++,x=v.next()){w.index>P?(H=w,w=null):H=w.sibling;var E=h(d,w,x.value,S);if(E===null){w===null&&(w=H);break}t&&w&&E.alternate===null&&e(d,w),_=s(E,_,P),A===null?b=E:A.sibling=E,A=E,w=H}if(x.done)return n(d,w),ht&&Dr(d,P),b;if(w===null){for(;!x.done;P++,x=v.next())x=f(d,x.value,S),x!==null&&(_=s(x,_,P),A===null?b=x:A.sibling=x,A=x);return ht&&Dr(d,P),b}for(w=i(d,w);!x.done;P++,x=v.next())x=p(w,d,P,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),_=s(x,_,P),A===null?b=x:A.sibling=x,A=x);return t&&w.forEach(function(k){return e(d,k)}),ht&&Dr(d,P),b}function m(d,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case el:e:{for(var b=v.key,A=_;A!==null;){if(A.key===b){if(b=v.type,b===Ts){if(A.tag===7){n(d,A.sibling),_=r(A,v.props.children),_.return=d,d=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&Pg(b)===A.type){n(d,A.sibling),_=r(A,v.props),_.ref=Ro(d,A,v),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Ts?(_=$r(v.props.children,d.mode,S,v.key),_.return=d,d=_):(S=iu(v.type,v.key,v.props,null,d.mode,S),S.ref=Ro(d,_,v),S.return=d,d=S)}return o(d);case Es:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Qc(v,d.mode,S),_.return=d,d=_}return o(d);case qi:return A=v._init,m(d,_,A(v._payload),S)}if(Bo(v))return g(d,_,v,S);if(Eo(v))return y(d,_,v,S);fl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=Jc(v,d.mode,S),_.return=d,d=_),o(d)):n(d,_)}return m}var eo=Ry(!0),Py=Ry(!1),Cu=xr(null),Ru=null,Ds=null,_p=null;function yp(){_p=Ds=Ru=null}function xp(t){var e=Cu.current;ct(Cu),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){Ru=t,_p=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(_p!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Ru===null)throw Error(se(308));Ds=t,Ru.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Vr=null;function Sp(t){Vr===null?Vr=[t]:Vr.push(t)}function by(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Sp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ap(t,n)}}function bg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pu(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(h=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=_t({},f,h);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=f}}function Lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var za={},ui=xr(za),Sa=xr(za),Ma=xr(za);function Hr(t){if(t===za)throw Error(se(174));return t}function Ep(t,e){switch(ot(Ma,e),ot(Sa,t),ot(ui,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}ct(ui),ot(ui,e)}function to(){ct(ui),ct(Sa),ct(Ma)}function Dy(t){Hr(Ma.current);var e=Hr(ui.current),n=sh(e,t.type);e!==n&&(ot(Sa,t),ot(ui,n))}function Tp(t){Sa.current===t&&(ct(ui),ct(Sa))}var pt=xr(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function wp(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var Jl=Bi.ReactCurrentDispatcher,Yc=Bi.ReactCurrentBatchConfig,Jr=0,vt=null,bt=null,Ut=null,Lu=!1,Jo=!1,Ea=0,HT=0;function Gt(){throw Error(se(321))}function Ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Cp(t,e,n,i,r,s){if(Jr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?jT:YT,t=n(i,r),Jo){s=0;do{if(Jo=!1,Ea=0,25<=s)throw Error(se(301));s+=1,Ut=bt=null,e.updateQueue=null,Jl.current=$T,t=n(i,r)}while(Jo)}if(Jl.current=Du,e=bt!==null&&bt.next!==null,Jr=0,Ut=bt=vt=null,Lu=!1,e)throw Error(se(300));return t}function Rp(){var t=Ea!==0;return Ea=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Vn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?vt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ta(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Vn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,vt.lanes|=c,Qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Iy(){}function Ny(t,e){var n=vt,i=Vn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Pp(Oy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,wa(9,Fy.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(se(349));Jr&30||Uy(n,e,r)}return r}function Uy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fy(t,e,n,i){e.value=n,e.getSnapshot=i,ky(e)&&By(t)}function Oy(t,e,n){return n(function(){ky(e)&&By(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function By(t){var e=Ii(t,1);e!==null&&ti(e,t,1,-1)}function Dg(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=XT.bind(null,vt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zy(){return Vn().memoizedState}function Ql(t,e,n,i){var r=ri();vt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&Ap(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}vt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function Ig(t,e){return Ql(8390656,8,t,e)}function Pp(t,e){return rc(2048,8,t,e)}function Vy(t,e){return rc(4,2,t,e)}function Hy(t,e){return rc(4,4,t,e)}function Gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wy(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Gy.bind(null,e,t),n)}function bp(){}function Xy(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jy(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yy(t,e,n){return Jr&21?(ni(n,e)||(n=J_(),vt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function GT(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{it=n,Yc.transition=i}}function $y(){return Vn().memoizedState}function WT(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qy(t))Ky(e,n);else if(n=by(t,e,n,i),n!==null){var r=tn();ti(n,t,i,r),Zy(n,e,i)}}function XT(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qy(t))Ky(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Sp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=by(t,e,r,i),n!==null&&(r=tn(),ti(n,t,i,r),Zy(n,e,i))}}function qy(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Ky(t,e){Jo=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ap(t,n)}}var Du={readContext:zn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},jT={readContext:zn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,Gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=WT.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:Dg,useDebugValue:bp,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=Dg(!1),e=t[0];return t=GT.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ri();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ft===null)throw Error(se(349));Jr&30||Uy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ig(Oy.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,Fy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Ft.identifierPrefix;if(ht){var n=Ti,i=Ei;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:zn,useCallback:Xy,useContext:zn,useEffect:Pp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Hy,useMemo:jy,useReducer:$c,useRef:zy,useState:function(){return $c(Ta)},useDebugValue:bp,useDeferredValue:function(t){var e=Vn();return Yy(e,bt.memoizedState,t)},useTransition:function(){var t=$c(Ta)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Ny,useId:$y,unstable_isNewReconciler:!1},$T={readContext:zn,useCallback:Xy,useContext:zn,useEffect:Pp,useImperativeHandle:Wy,useInsertionEffect:Vy,useLayoutEffect:Hy,useMemo:jy,useReducer:qc,useRef:zy,useState:function(){return qc(Ta)},useDebugValue:bp,useDeferredValue:function(t){var e=Vn();return bt===null?e.memoizedState=t:Yy(e,bt.memoizedState,t)},useTransition:function(){var t=qc(Ta)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Ny,useId:$y,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ur(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ur(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=ur(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(ti(e,t,i,n),Zl(e,t,i))}};function Ng(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function Jy(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=hn(e)?Kr:Zt.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ug(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=hn(e)?Kr:Zt.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Pu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",i=e;do n+=ME(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qT=typeof WeakMap=="function"?WeakMap:Map;function Qy(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nu||(Nu=!0,kh=i),Rh(t,e)},n}function ex(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rh(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uw.bind(null,t,e,n),e.then(t,t))}function Og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var KT=Bi.ReactCurrentOwner,cn=!1;function Qt(t,e,n,i){e.child=t===null?Py(e,null,n,i):eo(e,t.child,n,i)}function Bg(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=Cp(t,e,n,i,s,r),n=Rp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&n&&mp(e),e.flags|=1,Qt(t,e,i,r),e.child)}function zg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tx(t,e,s,i,r)):(t=iu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Ph(t,e,n,i,r)}function nx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ns,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Ns,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Ns,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Ns,Mn),Mn|=i;return Qt(t,e,r,n),e.child}function ix(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,i,r){var s=hn(n)?Kr:Zt.current;return s=Js(e,s),js(e,r),n=Cp(t,e,n,i,s,r),i=Rp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&i&&mp(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Vg(t,e,n,i,r){if(hn(n)){var s=!0;Tu(e)}else s=!1;if(js(e,r),e.stateNode===null)eu(t,e),Jy(e,n,i),Ch(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=hn(n)?Kr:Zt.current,u=Js(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Ug(e,o,i,u),Ki=!1;var h=e.memoizedState;o.state=h,Pu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||fn.current||Ki?(typeof c=="function"&&(Ah(e,n,c,i),l=e.memoizedState),(a=Ki||Ng(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ly(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=hn(n)?Kr:Zt.current,l=Js(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Ug(e,o,i,l),Ki=!1,h=e.memoizedState,o.state=h,Pu(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||fn.current||Ki?(typeof p=="function"&&(Ah(e,n,p,i),g=e.memoizedState),(u=Ki||Ng(e,n,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return bh(t,e,n,i,s,r)}function bh(t,e,n,i,r,s){ix(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ag(e,n,!1),Ni(t,e,s);i=e.stateNode,KT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Ag(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),Ep(t,e.containerInfo)}function Hg(t,e,n,i,r){return Qs(),vp(r),e.flags|=256,Qt(t,e,n,i),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function sx(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return Th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dh(n),e.memoizedState=Lh,t):Lp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lp(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&vp(i),eo(e,t.child,null,n),t=Lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(se(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=Dh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Kc(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ti(i,t,r,-1))}return Op(),i=Kc(Error(se(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),Tn=e,ht=!0,Kn=null,t!==null&&(Nn[Un++]=Ei,Nn[Un++]=Ti,Nn[Un++]=Zr,Ei=t.id,Ti=t.overflow,Zr=e),e=Lp(e,i.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wh(t.return,e,n)}function Zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JT(t,e,n){switch(e.tag){case 3:rx(e),Qs();break;case 5:Dy(e);break;case 1:hn(e.type)&&Tu(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?sx(t,e,n):(ot(pt,pt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(t,e,n)}return Ni(t,e,n)}var ax,Ih,lx,ux;ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};lx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(ui.current);var s=null;switch(n){case"input":r=th(t,r),i=th(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=rh(t,r),i=rh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Mu)}oh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ux=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function QT(t,e,n){var i=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return hn(e.type)&&Eu(),Wt(e),null;case 3:return i=e.stateNode,to(),ct(fn),ct(Zt),wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Vh(Kn),Kn=null))),Ih(t,e),Wt(e),null;case 5:Tp(e);var r=Hr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)lx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Wt(e),null}if(t=Hr(ui.current),cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)lt(Vo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Jm(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":eg(i,s),lt("invalid",i)}oh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":tl(i),Qm(i,s,!0);break;case"textarea":tl(i),tg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[xa]=i,ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)lt(Vo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Jm(t,i),r=th(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":eg(t,i),r=rh(t,i),lt("invalid",t);break;default:r=i}oh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?z_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&tp(t,s,l,o))}switch(n){case"input":tl(t),Qm(t,i,!1);break;case"textarea":tl(t),tg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Mu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)ux(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Hr(Ma.current),Hr(ui.current),cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&En!==null&&e.mode&1&&!(e.flags&128))Cy(),Qs(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ai]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Kn!==null&&(Vh(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Lt===0&&(Lt=3):Op())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return to(),Ih(t,e),t===null&&_a(e.stateNode.containerInfo),Wt(e),null;case 10:return xp(e.type._context),Wt(e),null;case 17:return hn(e.type)&&Eu(),Wt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bu(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>io&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=bu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Wt(e),null}else 2*Tt()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Fp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function ew(t,e){switch(gp(e),e.tag){case 1:return hn(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),ct(fn),ct(Zt),wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return to(),null;case 10:return xp(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var dl=!1,$t=!1,tw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Nh(t,e,n){try{n()}catch(i){St(t,e,i)}}var Wg=!1;function nw(t,e){if(vh=yu,t=py(),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},yu=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Wg,Wg=!1,g}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nh(e,n,s)}r=r.next}while(r!==i)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cx(t){var e=t.alternate;e!==null&&(t.alternate=null,cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[xa],delete e[Sh],delete e[kT],delete e[BT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fx(t){return t.tag===5||t.tag===3||t.tag===4}function Xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mu));else if(i!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var kt=null,qn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)hx(t,e,n),n=n.sibling}function hx(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:$t||Is(n,e);case 6:var i=kt,r=qn;kt=null,Vi(t,e,n),kt=i,qn=r,kt!==null&&(qn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(qn?(t=kt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),ma(t)):Wc(kt,n.stateNode));break;case 4:i=kt,r=qn,kt=n.stateNode.containerInfo,qn=!0,Vi(t,e,n),kt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!$t&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Vi(t,e,n),$t=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tw),e.forEach(function(i){var r=fw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,qn=!1;break e;case 3:kt=a.stateNode.containerInfo,qn=!0;break e;case 4:kt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(kt===null)throw Error(se(160));hx(s,o,r),kt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dx(e,t),e=e.sibling}function dx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ii(t),i&4){try{Qo(3,t,t.return),oc(3,t)}catch(y){St(t,t.return,y)}try{Qo(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:Gn(e,t),ii(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(Gn(e,t),ii(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U_(r,s),ah(a,o);var u=ah(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?z_(r,f):c==="dangerouslySetInnerHTML"?k_(r,f):c==="children"?fa(r,f):tp(r,c,f,u)}switch(a){case"input":nh(r,s);break;case"textarea":F_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(y){St(t,t.return,y)}}break;case 6:if(Gn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){St(t,t.return,y)}}break;case 3:if(Gn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:Gn(e,t),ii(t);break;case 13:Gn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Np=Tt())),i&4&&jg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||c,Gn(e,t),$t=u):Gn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Ee=t,c=t.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Qo(4,h,h.return);break;case 1:Is(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Is(h,h.return);break;case 22:if(h.memoizedState!==null){$g(f);continue}}p!==null?(p.return=h,Ee=p):$g(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=B_("display",o))}catch(y){St(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){St(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),ii(t),i&4&&jg(t);break;case 21:break;default:Gn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=Xg(t);Oh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Xg(t);Fh(t,a,o);break;default:throw Error(se(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iw(t,e,n){Ee=t,px(t)}function px(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=dl;var u=$t;if(dl=o,($t=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?qg(r):l!==null?(l.return=o,Ee=l):qg(r);for(;s!==null;)Ee=s,px(s),s=s.sibling;Ee=r,dl=a,$t=u}Yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Yg(t)}}function Yg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}$t||e.flags&512&&Uh(e)}catch(h){St(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function $g(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function qg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Uh(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Uh(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var rw=Math.ceil,Iu=Bi.ReactCurrentDispatcher,Dp=Bi.ReactCurrentOwner,Bn=Bi.ReactCurrentBatchConfig,Ke=0,Ft=null,Pt=null,Vt=0,Mn=0,Ns=xr(0),Lt=0,Aa=null,Qr=0,ac=0,Ip=0,ea=null,ln=null,Np=0,io=1/0,xi=null,Nu=!1,kh=null,lr=null,pl=!1,tr=null,Uu=0,ta=0,Bh=null,tu=-1,nu=0;function tn(){return Ke&6?Tt():tu!==-1?tu:tu=Tt()}function ur(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:VT.transition!==null?(nu===0&&(nu=J_()),nu):(t=it,t!==0||(t=window.event,t=t===void 0?16:sy(t.type)),t):1}function ti(t,e,n,i){if(50<ta)throw ta=0,Bh=null,Error(se(185));Oa(t,n,i),(!(Ke&2)||t!==Ft)&&(t===Ft&&(!(Ke&2)&&(ac|=n),Lt===4&&Ji(t,Vt)),dn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(io=Tt()+500,ic&&Sr()))}function dn(t,e){var n=t.callbackNode;VE(t,e);var i=_u(t,t===Ft?Vt:0);if(i===0)n!==null&&rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rg(n),e===1)t.tag===0?zT(Kg.bind(null,t)):Ty(Kg.bind(null,t)),FT(function(){!(Ke&6)&&Sr()}),n=null;else{switch(Q_(i)){case 1:n=op;break;case 4:n=K_;break;case 16:n=vu;break;case 536870912:n=Z_;break;default:n=vu}n=Mx(n,mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mx(t,e){if(tu=-1,nu=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var i=_u(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fu(t,i);else{e=i;var r=Ke;Ke|=2;var s=vx();(Ft!==t||Vt!==e)&&(xi=null,io=Tt()+500,Yr(t,e));do try{aw();break}catch(a){gx(t,a)}while(!0);yp(),Iu.current=s,Ke=r,Pt!==null?e=0:(Ft=null,Vt=0,e=Lt)}if(e!==0){if(e===2&&(r=hh(t),r!==0&&(i=r,e=zh(t,r))),e===1)throw n=Aa,Yr(t,0),Ji(t,i),dn(t,Tt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!sw(r)&&(e=Fu(t,i),e===2&&(s=hh(t),s!==0&&(i=s,e=zh(t,s))),e===1))throw n=Aa,Yr(t,0),Ji(t,i),dn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Ir(t,ln,xi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Np+500-Tt(),10<e)){if(_u(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xh(Ir.bind(null,t,ln,xi),e);break}Ir(t,ln,xi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rw(i/1960))-i,10<i){t.timeoutHandle=xh(Ir.bind(null,t,ln,xi),i);break}Ir(t,ln,xi);break;case 5:Ir(t,ln,xi);break;default:throw Error(se(329))}}}return dn(t,Tt()),t.callbackNode===n?mx.bind(null,t):null}function zh(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=ln,ln=n,e!==null&&Vh(e)),t}function Vh(t){ln===null?ln=t:ln.push.apply(ln,t)}function sw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Ip,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Kg(t){if(Ke&6)throw Error(se(327));Ys();var e=_u(t,0);if(!(e&1))return dn(t,Tt()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var i=hh(t);i!==0&&(e=i,n=zh(t,i))}if(n===1)throw n=Aa,Yr(t,0),Ji(t,e),dn(t,Tt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,ln,xi),dn(t,Tt()),null}function Up(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(io=Tt()+500,ic&&Sr())}}function es(t){tr!==null&&tr.tag===0&&!(Ke&6)&&Ys();var e=Ke;Ke|=1;var n=Bn.transition,i=it;try{if(Bn.transition=null,it=1,t)return t()}finally{it=i,Bn.transition=n,Ke=e,!(Ke&6)&&Sr()}}function Fp(){Mn=Ns.current,ct(Ns)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UT(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(gp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Eu();break;case 3:to(),ct(fn),ct(Zt),wp();break;case 5:Tp(i);break;case 4:to();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:xp(i.type._context);break;case 22:case 23:Fp()}n=n.return}if(Ft=t,Pt=t=cr(t.current,null),Vt=Mn=e,Lt=0,Aa=null,Ip=ac=Qr=0,ln=ea=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function gx(t,e){do{var n=Pt;try{if(yp(),Jl.current=Du,Lu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lu=!1}if(Jr=0,Ut=bt=vt=null,Jo=!1,Ea=0,Dp.current=null,n===null||n.return===null){Lt=1,Aa=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Og(o);if(p!==null){p.flags&=-257,kg(p,o,a,s,e),p.mode&1&&Fg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Fg(s,u,e),Op();break e}l=Error(se(426))}}else if(ht&&a.mode&1){var m=Og(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),kg(m,o,a,s,e),vp(no(l,a));break e}}s=l=no(l,a),Lt!==4&&(Lt=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Qy(s,l,e);bg(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ex(s,a,e);bg(s,S);break e}}s=s.return}while(s!==null)}yx(n)}catch(b){e=b,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function vx(){var t=Iu.current;return Iu.current=Du,t===null?Du:t}function Op(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(Qr&268435455)&&!(ac&268435455)||Ji(Ft,Vt)}function Fu(t,e){var n=Ke;Ke|=2;var i=vx();(Ft!==t||Vt!==e)&&(xi=null,Yr(t,e));do try{ow();break}catch(r){gx(t,r)}while(!0);if(yp(),Ke=n,Iu.current=i,Pt!==null)throw Error(se(261));return Ft=null,Vt=0,Lt}function ow(){for(;Pt!==null;)_x(Pt)}function aw(){for(;Pt!==null&&!DE();)_x(Pt)}function _x(t){var e=Sx(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?yx(t):Pt=e,Dp.current=null}function yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ew(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Pt=null;return}}else if(n=QT(n,e,Mn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ir(t,e,n){var i=it,r=Bn.transition;try{Bn.transition=null,it=1,lw(t,e,n,i)}finally{Bn.transition=r,it=i}return null}function lw(t,e,n,i){do Ys();while(tr!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HE(t,s),t===Ft&&(Pt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Mx(vu,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=it;it=1;var a=Ke;Ke|=4,Dp.current=null,nw(t,n),dx(n,t),RT(_h),yu=!!vh,_h=vh=null,t.current=n,iw(n),IE(),Ke=a,it=o,Bn.transition=s}else t.current=n;if(pl&&(pl=!1,tr=t,Uu=r),s=t.pendingLanes,s===0&&(lr=null),FE(n.stateNode),dn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nu)throw Nu=!1,t=kh,kh=null,t;return Uu&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Bh?ta++:(ta=0,Bh=t):ta=0,Sr(),null}function Ys(){if(tr!==null){var t=Q_(Uu),e=Bn.transition,n=it;try{if(Bn.transition=null,it=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Uu=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Qo(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var h=c.sibling,p=c.return;if(cx(c),c===u){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var _=t.current;for(Ee=_;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=_;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(b){St(a,a.return,b)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(Ke=r,Sr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ju,t)}catch{}i=!0}return i}finally{it=n,Bn.transition=e}}return!1}function Zg(t,e,n){e=no(n,e),e=Qy(t,e,1),t=ar(t,e,1),e=tn(),t!==null&&(Oa(t,1,e),dn(t,e))}function St(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=no(n,t),t=ex(e,t,1),e=ar(e,t,1),t=tn(),e!==null&&(Oa(e,1,t),dn(e,t));break}}e=e.return}}function uw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Lt===4||Lt===3&&(Vt&130023424)===Vt&&500>Tt()-Np?Yr(t,0):Ip|=n),dn(t,e)}function xx(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=tn();t=Ii(t,e),t!==null&&(Oa(t,e,n),dn(t,n))}function cw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xx(t,n)}function fw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),xx(t,n)}var Sx;Sx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,JT(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ht&&e.flags&1048576&&wy(e,Au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(t,e),t=e.pendingProps;var r=Js(e,Zt.current);js(e,n),r=Cp(null,e,i,t,r,n);var s=Rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Tu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mp(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,Ch(e,i,t,n),e=bh(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&mp(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dw(i),t=$n(i,t),r){case 0:e=Ph(null,e,i,t,n);break e;case 1:e=Vg(null,e,i,t,n);break e;case 11:e=Bg(null,e,i,t,n);break e;case 14:e=zg(null,e,i,$n(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Ph(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Vg(t,e,i,r,n);case 3:e:{if(rx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ly(t,e),Pu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(se(423)),e),e=Hg(t,e,i,n,r);break e}else if(i!==r){r=no(Error(se(424)),e),e=Hg(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Kn=null,n=Py(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=Ni(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Dy(e),t===null&&Th(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yh(i,r)?o=null:s!==null&&yh(i,s)&&(e.flags|=32),ix(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&Th(e),null;case 13:return sx(t,e,n);case 4:return Ep(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Bg(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Cu,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!fn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=zn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),zg(t,e,i,r,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),eu(t,e),e.tag=1,hn(i)?(t=!0,Tu(e)):t=!1,js(e,n),Jy(e,i,r),Ch(e,i,r,n),bh(null,e,i,!0,t,n);case 19:return ox(t,e,n);case 22:return nx(t,e,n)}throw Error(se(156,e.tag))};function Mx(t,e){return q_(t,e)}function hw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new hw(t,e,n,i)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dw(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ip)return 11;if(t===rp)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return $r(n.children,r,s,e);case np:o=8,r|=8;break;case Zf:return t=On(12,n,e,r|2),t.elementType=Zf,t.lanes=s,t;case Jf:return t=On(13,n,e,r),t.elementType=Jf,t.lanes=s,t;case Qf:return t=On(19,n,e,r),t.elementType=Qf,t.lanes=s,t;case D_:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b_:o=10;break e;case L_:o=9;break e;case ip:o=11;break e;case rp:o=14;break e;case qi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=On(22,t,i,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,i,r,s,o,a,l){return t=new pw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(s),t}function mw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ex(t){if(!t)return mr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(hn(n))return Ey(t,n,e)}return e}function Tx(t,e,n,i,r,s,o,a,l){return t=Bp(n,i,!0,t,r,s,o,a,l),t.context=Ex(null),n=t.current,i=tn(),r=ur(n),s=Ri(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,Oa(t,r,i),dn(t,i),t}function uc(t,e,n,i){var r=e.current,s=tn(),o=ur(r);return n=Ex(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(ti(t,r,o,s),Zl(t,r,o)),o}function Ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){Jg(t,e),(t=t.alternate)&&Jg(t,e)}function gw(){return null}var wx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vp(t){this._internalRoot=t}cc.prototype.render=Vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));uc(t,e,null,null)};cc.prototype.unmount=Vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){uc(null,t,null,null)}),e[Di]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ny();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&ry(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function vw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ou(o);s.call(u)}}var o=Tx(e,i,t,0,null,!1,!1,"",Qg);return t._reactRootContainer=o,t[Di]=o.current,_a(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ou(l);a.call(u)}}var l=Bp(t,0,!1,null,null,!1,!1,"",Qg);return t._reactRootContainer=l,t[Di]=l.current,_a(t.nodeType===8?t.parentNode:t),es(function(){uc(e,l,n,i)}),l}function hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ou(o);a.call(l)}}uc(e,o,t,r)}else o=vw(n,e,t,r,i);return Ou(o)}ey=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(ap(e,n|1),dn(e,Tt()),!(Ke&6)&&(io=Tt()+500,Sr()))}break;case 13:es(function(){var i=Ii(t,1);if(i!==null){var r=tn();ti(i,t,1,r)}}),zp(t,1)}};lp=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=tn();ti(e,t,134217728,n)}zp(t,134217728)}};ty=function(t){if(t.tag===13){var e=ur(t),n=Ii(t,e);if(n!==null){var i=tn();ti(n,t,e,i)}zp(t,e)}};ny=function(){return it};iy=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(se(90));N_(i),nh(i,r)}}}break;case"textarea":F_(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};G_=Up;W_=es;var _w={usingClientEntryPoint:!1,Events:[Ba,Rs,nc,V_,H_,Up]},bo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y_(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Ju=ml.inject(yw),li=ml}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_w;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(se(200));return mw(t,e,null,n)};Rn.createRoot=function(t,e){if(!Hp(t))throw Error(se(299));var n=!1,i="",r=wx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,_a(t.nodeType===8?t.parentNode:t),new Vp(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Y_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return es(t)};Rn.hydrate=function(t,e,n){if(!fc(e))throw Error(se(200));return hc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=wx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tx(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};Rn.render=function(t,e,n){if(!fc(e))throw Error(se(200));return hc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!fc(t))throw Error(se(40));return t._reactRootContainer?(es(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Rn.unstable_batchedUpdates=Up;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return hc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ax)}catch(t){console.error(t)}}Ax(),A_.exports=Rn;var xw=A_.exports,ev=xw;qf.createRoot=ev.createRoot,qf.hydrateRoot=ev.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="169",Sw=0,tv=1,Mw=2,Cx=1,Ew=2,yi=3,gr=0,pn=1,Mi=2,fr=0,$s=1,Hh=2,nv=3,iv=4,Tw=5,kr=100,ww=101,Aw=102,Cw=103,Rw=104,Pw=200,bw=201,Lw=202,Dw=203,Gh=204,Wh=205,Iw=206,Nw=207,Uw=208,Fw=209,Ow=210,kw=211,Bw=212,zw=213,Vw=214,Xh=0,jh=1,Yh=2,ro=3,$h=4,qh=5,Kh=6,Zh=7,Rx=0,Hw=1,Gw=2,hr=0,Ww=1,Xw=2,jw=3,Yw=4,$w=5,qw=6,Kw=7,Px=300,so=301,oo=302,Jh=303,Qh=304,dc=306,ed=1e3,Gr=1001,td=1002,kn=1003,Zw=1004,gl=1005,Zn=1006,ef=1007,Wr=1008,Ui=1009,bx=1010,Lx=1011,Ca=1012,Wp=1013,ts=1014,wi=1015,Va=1016,Xp=1017,jp=1018,ao=1020,Dx=35902,Ix=1021,Nx=1022,Qn=1023,Ux=1024,Fx=1025,qs=1026,lo=1027,Ox=1028,Yp=1029,kx=1030,$p=1031,qp=1033,ru=33776,su=33777,ou=33778,au=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,ud=37808,cd=37809,fd=37810,hd=37811,dd=37812,pd=37813,md=37814,gd=37815,vd=37816,_d=37817,yd=37818,xd=37819,Sd=37820,Md=37821,lu=36492,Ed=36494,Td=36495,Bx=36283,wd=36284,Ad=36285,Cd=36286,Jw=3200,Qw=3201,e1=0,t1=1,Qi="",si="srgb",Mr="srgb-linear",Kp="display-p3",pc="display-p3-linear",ku="linear",ut="srgb",Bu="rec709",zu="p3",us=7680,rv=519,n1=512,i1=513,r1=514,zx=515,s1=516,o1=517,a1=518,l1=519,sv=35044,ov="300 es",Ai=2e3,Vu=2001;class _o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,Rd=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function u1(t,e){return(t%e+e)%e}function nf(t,e,n){return(1-n)*t+n*e}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],_=r[1],v=r[4],S=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*y+a*_+l*b,s[3]=o*m+a*v+l*A,s[6]=o*d+a*S+l*w,s[1]=u*y+c*_+f*b,s[4]=u*m+c*v+f*A,s[7]=u*d+c*S+f*w,s[2]=h*y+p*_+g*b,s[5]=h*m+p*v+g*A,s[8]=h*d+p*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(rf.makeScale(e,n)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,n){return this.premultiply(rf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new Xe;function Vx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function c1(){const t=Hu("canvas");return t.style.display="block",t}const av={};function uu(t){t in av||(av[t]=!0,console.warn(t))}function f1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function h1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lv=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uv=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Mr]:{transfer:ku,primaries:Bu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[si]:{transfer:ut,primaries:Bu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[pc]:{transfer:ku,primaries:zu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(uv),fromReference:t=>t.applyMatrix3(lv)},[Kp]:{transfer:ut,primaries:zu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(uv),fromReference:t=>t.applyMatrix3(lv).convertLinearToSRGB()}},p1=new Set([Mr,pc]),Qe={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!p1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Do[e].toReference,r=Do[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Do[t].primaries},getTransfer:function(t){return t===Qi?ku:Do[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Do[e].luminanceCoefficients)}};function Ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class m1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=Hu("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g1=0;class Hx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(of(r[o].image)):s.push(of(r[o]))}else s=of(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function of(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v1=0;class mn extends _o{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Gr,r=Gr,s=Zn,o=Wr,a=Qn,l=Ui,u=mn.DEFAULT_ANISOTROPY,c=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=yo(),this.name="",this.source=new Hx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Px;mn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,b=(d+1)/2,A=(c+h)/4,w=(f+y)/4,P=(g+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _1 extends _o{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends _1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Gx extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y1 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,d*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const S=a*_;if(l=l*m+h*S,u=u*m+p*S,c=c*m+g*S,f=f*m+y*S,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-a*p,e[n+2]=u*g+c*p+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new I,cv=new Ha;class Ga{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),_l.subVectors(this.max,Io),fs.subVectors(e.a,Io),hs.subVectors(e.b,Io),ds.subVectors(e.c,Io),Hi.subVectors(hs,fs),Gi.subVectors(ds,hs),wr.subVectors(fs,ds);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-wr.z,wr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,wr.z,0,-wr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-wr.y,wr.x,0];return!lf(n,fs,hs,ds,_l)||(n=[1,0,0,0,1,0,0,0,1],!lf(n,fs,hs,ds,_l))?!1:(yl.crossVectors(Hi,Gi),n=[yl.x,yl.y,yl.z],lf(n,fs,hs,ds,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,vl=new Ga,fs=new I,hs=new I,ds=new I,Hi=new I,Gi=new I,wr=new I,Io=new I,_l=new I,yl=new I,Ar=new I;function lf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),u=n.dot(Ar),c=i.dot(Ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const x1=new Ga,No=new I,uf=new I;class mc{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):x1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(uf)),this.expandByPoint(No.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new I,cf=new I,xl=new I,Wi=new I,ff=new I,Sl=new I,hf=new I;class Wx{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cf.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(cf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xl),a=Wi.dot(this.direction),l=-Wi.dot(xl),u=Wi.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const y=1/c;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cf).addScaledVector(xl,h),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){ff.subVectors(n,e),Sl.subVectors(i,e),hf.crossVectors(ff,Sl);let o=this.direction.dot(hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(Wi,Sl));if(l<0)return null;const u=a*this.direction.dot(ff.cross(Wi));if(u<0||l+u>o)return null;const c=-a*Wi.dot(hf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h+y*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h-y*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S1,e,M1)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(i,xn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(i,xn)),Xi.normalize(),Ml.crossVectors(xn,Xi),r[0]=Xi.x,r[4]=Ml.x,r[8]=xn.x,r[1]=Xi.y,r[5]=Ml.y,r[9]=xn.y,r[2]=Xi.z,r[6]=Ml.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],_=i[3],v=i[7],S=i[11],b=i[15],A=r[0],w=r[4],P=r[8],H=r[12],x=r[1],E=r[5],k=r[9],O=r[13],G=r[2],$=r[6],B=r[10],X=r[14],L=r[3],Y=r[7],q=r[11],re=r[15];return s[0]=o*A+a*x+l*G+u*L,s[4]=o*w+a*E+l*$+u*Y,s[8]=o*P+a*k+l*B+u*q,s[12]=o*H+a*O+l*X+u*re,s[1]=c*A+f*x+h*G+p*L,s[5]=c*w+f*E+h*$+p*Y,s[9]=c*P+f*k+h*B+p*q,s[13]=c*H+f*O+h*X+p*re,s[2]=g*A+y*x+m*G+d*L,s[6]=g*w+y*E+m*$+d*Y,s[10]=g*P+y*k+m*B+d*q,s[14]=g*H+y*O+m*X+d*re,s[3]=_*A+v*x+S*G+b*L,s[7]=_*w+v*E+S*$+b*Y,s[11]=_*P+v*k+S*B+b*q,s[15]=_*H+v*O+S*X+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=f*m*u-y*h*u+y*l*p-a*m*p-f*l*d+a*h*d,v=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,S=c*y*u-g*f*u+g*a*p-o*y*p-c*a*d+o*f*d,b=g*f*l-c*y*l-g*a*h+o*y*h+c*a*m-o*f*m,A=n*_+i*v+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(c*m*s-g*h*s+g*r*p-n*m*p-c*r*d+n*h*d)*w,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*d-n*l*d)*w,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(g*f*s-c*y*s-g*i*p+n*y*p+c*i*d-n*f*d)*w,e[10]=(o*y*s-g*a*s+g*i*u-n*y*u-o*i*d+n*a*d)*w,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*w,e[12]=b*w,e[13]=(c*y*r-g*f*r+g*i*h-n*y*h-c*i*m+n*f*m)*w,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,y=o*c,m=o*f,d=a*f,_=l*u,v=l*c,S=l*f,b=i.x,A=i.y,w=i.z;return r[0]=(1-(y+d))*b,r[1]=(p+S)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+v)*w,r[9]=(m-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,c=1/o,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Ai)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let g,y;if(a===Ai)g=(o+s)*f,y=-2*f;else if(a===Vu)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new I,Xn=new rt,S1=new I(0,0,0),M1=new I(1,1,1),Xi=new I,Ml=new I,xn=new I,fv=new rt,hv=new Ha;class Fi{constructor(e=0,n=0,i=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Xx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E1=0;const dv=new I,ms=new Ha,gi=new rt,El=new I,Uo=new I,T1=new I,w1=new Ha,pv=new I(1,0,0),mv=new I(0,1,0),gv=new I(0,0,1),vv={type:"added"},A1={type:"removed"},gs={type:"childadded",child:null},df={type:"childremoved",child:null};class gn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new I,n=new Fi,i=new Ha,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Xe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,n){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Uo,El,this.up):gi.lookAt(El,Uo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(gi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(A1),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,T1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new I(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new I,vi=new I,pf=new I,_i=new I,vs=new I,_s=new I,_v=new I,mf=new I,gf=new I,vf=new I,_f=new wt,yf=new wt,xf=new wt;class Jn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),vi.subVectors(i,n),pf.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(vi),l=jn.dot(pf),u=vi.dot(vi),c=vi.dot(pf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return _f.setScalar(0),yf.setScalar(0),xf.setScalar(0),_f.fromBufferAttribute(e,n),yf.fromBufferAttribute(e,i),xf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_f,s.x),o.addScaledVector(yf,s.y),o.addScaledVector(xf,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),vi.subVectors(e,n),jn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;vs.subVectors(r,i),_s.subVectors(s,i),mf.subVectors(e,i);const l=vs.dot(mf),u=_s.dot(mf);if(l<=0&&u<=0)return n.copy(i);gf.subVectors(e,r);const c=vs.dot(gf),f=_s.dot(gf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(vs,o);vf.subVectors(e,s);const p=vs.dot(vf),g=_s.dot(vf);if(g>=0&&p<=g)return n.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(_s,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return _v.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(_v,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(vs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=u1(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Sf(o,s,e+1/3),this.g=Sf(o,s,e),this.b=Sf(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(qt(jt.r*255,0,255))*65536+Math.round(qt(jt.g*255,0,255))*256+Math.round(qt(jt.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=si){Qe.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Tl);const i=nf(ji.h,Tl.h,n),r=nf(ji.s,Tl.s,n),s=nf(ji.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=jx;let C1=0;class Wa extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=$s,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gh&&(i.blendSrc=this.blendSrc),this.blendDst!==Wh&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yx extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new I,wl=new ge;class en{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class $x extends en{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qx extends en{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends en{constructor(e,n,i){super(new Float32Array(e),n,i)}}let R1=0;const Ln=new rt,Mf=new gn,ys=new I,Sn=new Ga,Fo=new Ga,Nt=new I;class vn extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?qx:$x)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Sn.min,Fo.min),Sn.expandByPoint(Nt),Nt.addVectors(Sn.max,Fo.max),Sn.expandByPoint(Nt)):(Sn.expandByPoint(Fo.min),Sn.expandByPoint(Fo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(ys.fromBufferAttribute(e,u),Nt.add(ys)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const u=new I,c=new I,f=new I,h=new ge,p=new ge,g=new ge,y=new I,m=new I;function d(P,H,x){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,H),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(E),a[P].add(y),a[H].add(y),a[x].add(y),l[P].add(m),l[H].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,H=_.length;P<H;++P){const x=_[P],E=x.start,k=x.count;for(let O=E,G=E+k;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new I,S=new I,b=new I,A=new I;function w(P){b.fromBufferAttribute(r,P),A.copy(b);const H=a[P];v.copy(H),v.sub(b.multiplyScalar(b.dot(H))).normalize(),S.crossVectors(A,H);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,H=_.length;P<H;++P){const x=_[P],E=x.start,k=x.count;for(let O=E,G=E+k;O<G;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new en(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new rt,Cr=new Wx,Al=new mc,xv=new I,Cl=new I,Rl=new I,Pl=new I,Ef=new I,bl=new I,Sv=new I,Ll=new I;class Ci extends gn{constructor(e=new vn,n=new Yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ef.fromBufferAttribute(f,e),o?bl.addScaledVector(Ef,c):bl.addScaledVector(Ef.sub(n),c))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(Al.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Al,xv)===null||Cr.origin.distanceToSquared(xv)>(e.far-e.near)**2))&&(yv.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=v;S<b;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=Dl(this,d,e,i,u,c,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Dl(this,o,e,i,u,c,f,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=v;S<b;S+=3){const A=S,w=S+1,P=S+2;r=Dl(this,d,e,i,u,c,f,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=m,v=m+1,S=m+2;r=Dl(this,o,e,i,u,c,f,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function P1(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ll);return u<n.near||u>n.far?null:{distance:u,point:Ll.clone(),object:t}}function Dl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Cl),t.getVertexPosition(l,Rl),t.getVertexPosition(u,Pl);const c=P1(t,e,n,i,Cl,Rl,Pl,Sv);if(c){const f=new I;Jn.getBarycoord(Sv,Cl,Rl,Pl,f),r&&(c.uv=Jn.getInterpolatedAttribute(r,a,l,u,f,new ge)),s&&(c.uv1=Jn.getInterpolatedAttribute(s,a,l,u,f,new ge)),o&&(c.normal=Jn.getInterpolatedAttribute(o,a,l,u,f,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new I,materialIndex:0};Jn.getNormal(Cl,Rl,Pl,h.normal),c.face=h,c.barycoord=f}return c}class dr extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(f,2));function g(y,m,d,_,v,S,b,A,w,P,H){const x=S/w,E=b/P,k=S/2,O=b/2,G=A/2,$=w+1,B=P+1;let X=0,L=0;const Y=new I;for(let q=0;q<B;q++){const re=q*E-O;for(let Re=0;Re<$;Re++){const ze=Re*x-k;Y[y]=ze*_,Y[m]=re*v,Y[d]=G,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=A>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(Re/w),f.push(1-q/P),X+=1}}for(let q=0;q<P;q++)for(let re=0;re<w;re++){const Re=h+re+$*q,ze=h+re+$*(q+1),j=h+(re+1)+$*(q+1),ne=h+(re+1)+$*q;l.push(Re,ze,ne),l.push(ze,j,ne),L+=6}a.addGroup(p,L,H),p+=L,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function b1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const L1={clone:uo,merge:Jt};var D1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D1,this.fragmentShader=I1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=b1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new I,Mv=new ge,Ev=new ge;class Fn extends Zx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Mv,Ev),n.subVectors(Ev,Mv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=-90,Ss=1;class N1 extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(xs,Ss,e,n);r.layers=this.layers,this.add(r);const s=new Fn(xs,Ss,e,n);s.layers=this.layers,this.add(s);const o=new Fn(xs,Ss,e,n);o.layers=this.layers,this.add(o);const a=new Fn(xs,Ss,e,n);a.layers=this.layers,this.add(a);const l=new Fn(xs,Ss,e,n);l.layers=this.layers,this.add(l);const u=new Fn(xs,Ss,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jx extends mn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:so,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U1 extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dr(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:fr});s.uniforms.tEquirect.value=n;const o=new Ci(r,s),a=n.minFilter;return n.minFilter===Wr&&(n.minFilter=Zn),new N1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tf=new I,F1=new I,O1=new Xe;class Nr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tf.subVectors(i,n).cross(F1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||O1.getNormalMatrix(e),r=this.coplanarPoint(Tf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new mc,Il=new I;class Qx{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-d).normalize(),i[1].setComponents(l+s,h+u,m+p,S+d).normalize(),i[2].setComponents(l+o,h+c,m+g,S+_).normalize(),i[3].setComponents(l-o,h-c,m-g,S-_).normalize(),i[4].setComponents(l-a,h-f,m-y,S-v).normalize(),n===Ai)i[5].setComponents(l+a,h+f,m+y,S+v).normalize();else if(n===Vu)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function k1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class gc extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],g=[],y=[],m=[];for(let d=0;d<c;d++){const _=d*h-o;for(let v=0;v<u;v++){const S=v*f-s;g.push(S,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+u*d,S=_+u*(d+1),b=_+1+u*(d+1),A=_+1+u*d;p.push(v,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}var B1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mA="gl_FragColor = linearToOutputTexel( gl_FragColor );",gA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:B1,alphahash_pars_fragment:z1,alphamap_fragment:V1,alphamap_pars_fragment:H1,alphatest_fragment:G1,alphatest_pars_fragment:W1,aomap_fragment:X1,aomap_pars_fragment:j1,batching_pars_vertex:Y1,batching_vertex:$1,begin_vertex:q1,beginnormal_vertex:K1,bsdfs:Z1,iridescence_fragment:J1,bumpmap_pars_fragment:Q1,clipping_planes_fragment:eA,clipping_planes_pars_fragment:tA,clipping_planes_pars_vertex:nA,clipping_planes_vertex:iA,color_fragment:rA,color_pars_fragment:sA,color_pars_vertex:oA,color_vertex:aA,common:lA,cube_uv_reflection_fragment:uA,defaultnormal_vertex:cA,displacementmap_pars_vertex:fA,displacementmap_vertex:hA,emissivemap_fragment:dA,emissivemap_pars_fragment:pA,colorspace_fragment:mA,colorspace_pars_fragment:gA,envmap_fragment:vA,envmap_common_pars_fragment:_A,envmap_pars_fragment:yA,envmap_pars_vertex:xA,envmap_physical_pars_fragment:LA,envmap_vertex:SA,fog_vertex:MA,fog_pars_vertex:EA,fog_fragment:TA,fog_pars_fragment:wA,gradientmap_pars_fragment:AA,lightmap_pars_fragment:CA,lights_lambert_fragment:RA,lights_lambert_pars_fragment:PA,lights_pars_begin:bA,lights_toon_fragment:DA,lights_toon_pars_fragment:IA,lights_phong_fragment:NA,lights_phong_pars_fragment:UA,lights_physical_fragment:FA,lights_physical_pars_fragment:OA,lights_fragment_begin:kA,lights_fragment_maps:BA,lights_fragment_end:zA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:HA,logdepthbuf_pars_vertex:GA,logdepthbuf_vertex:WA,map_fragment:XA,map_pars_fragment:jA,map_particle_fragment:YA,map_particle_pars_fragment:$A,metalnessmap_fragment:qA,metalnessmap_pars_fragment:KA,morphinstance_vertex:ZA,morphcolor_vertex:JA,morphnormal_vertex:QA,morphtarget_pars_vertex:eC,morphtarget_vertex:tC,normal_fragment_begin:nC,normal_fragment_maps:iC,normal_pars_fragment:rC,normal_pars_vertex:sC,normal_vertex:oC,normalmap_pars_fragment:aC,clearcoat_normal_fragment_begin:lC,clearcoat_normal_fragment_maps:uC,clearcoat_pars_fragment:cC,iridescence_pars_fragment:fC,opaque_fragment:hC,packing:dC,premultiplied_alpha_fragment:pC,project_vertex:mC,dithering_fragment:gC,dithering_pars_fragment:vC,roughnessmap_fragment:_C,roughnessmap_pars_fragment:yC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:SC,shadowmap_vertex:MC,shadowmask_pars_fragment:EC,skinbase_vertex:TC,skinning_pars_vertex:wC,skinning_vertex:AC,skinnormal_vertex:CC,specularmap_fragment:RC,specularmap_pars_fragment:PC,tonemapping_fragment:bC,tonemapping_pars_fragment:LC,transmission_fragment:DC,transmission_pars_fragment:IC,uv_pars_fragment:NC,uv_pars_vertex:UC,uv_vertex:FC,worldpos_vertex:OC,background_vert:kC,background_frag:BC,backgroundCube_vert:zC,backgroundCube_frag:VC,cube_vert:HC,cube_frag:GC,depth_vert:WC,depth_frag:XC,distanceRGBA_vert:jC,distanceRGBA_frag:YC,equirect_vert:$C,equirect_frag:qC,linedashed_vert:KC,linedashed_frag:ZC,meshbasic_vert:JC,meshbasic_frag:QC,meshlambert_vert:eR,meshlambert_frag:tR,meshmatcap_vert:nR,meshmatcap_frag:iR,meshnormal_vert:rR,meshnormal_frag:sR,meshphong_vert:oR,meshphong_frag:aR,meshphysical_vert:lR,meshphysical_frag:uR,meshtoon_vert:cR,meshtoon_frag:fR,points_vert:hR,points_frag:dR,shadow_vert:pR,shadow_frag:mR,sprite_vert:gR,sprite_frag:vR},de={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},oi={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};oi.physical={uniforms:Jt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Nl={r:0,b:0,g:0},Pr=new Fi,_R=new rt;function yR(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const S=g(_);S===null?d(a,l):S&&S.isColor&&(d(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===dc)?(c===void 0&&(c=new Ci(new dr(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:uo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Pr.copy(v.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(Pr)),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ut,(f!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ci(new gc(2,2),new Oi({name:"BackgroundMaterial",uniforms:uo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,v){_.getRGB(Nl,Kx(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:y,addToRenderList:m}}function xR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,k,O,G){let $=!1;const B=f(O,k,E);s!==B&&(s=B,u(s.object)),$=p(x,O,k,G),$&&g(x,O,k,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(x,E,k,O),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function f(x,E,k){const O=k.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let $=G[E.id];$===void 0&&($={},G[E.id]=$);let B=$[O];return B===void 0&&(B=h(l()),$[O]=B),B}function h(x){const E=[],k=[],O=[];for(let G=0;G<n;G++)E[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,E,k,O){const G=s.attributes,$=E.attributes;let B=0;const X=k.getAttributes();for(const L in X)if(X[L].location>=0){const q=G[L];let re=$[L];if(re===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function g(x,E,k,O){const G={},$=E.attributes;let B=0;const X=k.getAttributes();for(const L in X)if(X[L].location>=0){let q=$[L];q===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(q=x.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),G[L]=re,B++}s.attributes=G,s.attributesNum=B,s.index=O}function y(){const x=s.newAttributes;for(let E=0,k=x.length;E<k;E++)x[E]=0}function m(x){d(x,0)}function d(x,E){const k=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;k[x]=1,O[x]===0&&(t.enableVertexAttribArray(x),O[x]=1),G[x]!==E&&(t.vertexAttribDivisor(x,E),G[x]=E)}function _(){const x=s.newAttributes,E=s.enabledAttributes;for(let k=0,O=E.length;k<O;k++)E[k]!==x[k]&&(t.disableVertexAttribArray(k),E[k]=0)}function v(x,E,k,O,G,$,B){B===!0?t.vertexAttribIPointer(x,E,k,G,$):t.vertexAttribPointer(x,E,k,O,G,$)}function S(x,E,k,O){y();const G=O.attributes,$=k.getAttributes(),B=E.defaultAttributeValues;for(const X in $){const L=$[X];if(L.location>=0){let Y=G[X];if(Y===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const q=Y.normalized,re=Y.itemSize,Re=e.get(Y);if(Re===void 0)continue;const ze=Re.buffer,j=Re.type,ne=Re.bytesPerElement,pe=j===t.INT||j===t.UNSIGNED_INT||Y.gpuType===Wp;if(Y.isInterleavedBufferAttribute){const ue=Y.data,Fe=ue.stride,Ie=Y.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)d(L.location+ke,ue.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<L.locationSize;ke++)m(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ke=0;ke<L.locationSize;ke++)v(L.location+ke,re/L.locationSize,j,q,Fe*ne,(Ie+re/L.locationSize*ke)*ne,pe)}else{if(Y.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)d(L.location+ue,Y.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ue=0;ue<L.locationSize;ue++)v(L.location+ue,re/L.locationSize,j,q,re*ne,re/L.locationSize*ue*ne,pe)}}else if(B!==void 0){const q=B[X];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}_()}function b(){P();for(const x in i){const E=i[x];for(const k in E){const O=E[k];for(const G in O)c(O[G].object),delete O[G];delete E[k]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const k in E){const O=E[k];for(const G in O)c(O[G].object),delete O[G];delete E[k]}delete i[x.id]}function w(x){for(const E in i){const k=i[E];if(k[x.id]===void 0)continue;const O=k[x.id];for(const G in O)c(O[G].object),delete O[G];delete k[x.id]}}function P(){H(),o=!0,s!==r&&(s=r,u(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function SR(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=c[y];for(let y=0;y<h.length;y++)n.update(g,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Qn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ui&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:b,maxSamples:A}}function ER(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,v=_*4;let S=d.clippingState||null;l.value=S,S=c(g,h,v,p);for(let b=0;b!==v;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function TR(t){let e=new WeakMap;function n(o,a){return a===Jh?o.mapping=so:a===Qh&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jh||a===Qh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new U1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wR extends Zx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,Tv=[.125,.215,.35,.446,.526,.582],Br=20,wf=new wR,wv=new Ze;let Af=null,Cf=0,Rf=0,Pf=!1;const Ur=(1+Math.sqrt(5))/2,Ms=1/Ur,Av=[new I(-Ur,Ms,0),new I(Ur,Ms,0),new I(-Ms,0,Ur),new I(Ms,0,Ur),new I(0,Ur,-Ms),new I(0,Ur,Ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Cf,Rf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Va,format:Qn,colorSpace:Mr,depthBuffer:!1},r=Rv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AR(s)),this._blurMaterial=CR(s,e,n)}return r}_compileMaterial(e){const n=new Ci(this._lodPlanes[0],e);this._renderer.compile(n,wf)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(wv),c.toneMapping=hr,c.autoClear=!1;const p=new Yx({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ci(new dr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(wv),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Ul(r,_*v,d>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Av[(r-s-1)%Av.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ci(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),y=s/g,m=isFinite(s)?1+Math.floor(c*y):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const d=[];let _=0;for(let w=0;w<Br;++w){const P=w/y,H=Math.exp(-P*P/2);d.push(H),w===0?_+=H:w<m&&(_+=2*H)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Us?r-v+Us:0),A=4*(this._cubeSize-S);Ul(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(f,wf)}}function AR(t){const e=[],n=[],i=[];let r=t;const s=t-Us+1+Tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Us?l=Tv[o-t+Us-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,y=3,m=2,d=1,_=new Float32Array(y*g*p),v=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,H=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(H,y*g*A),v.set(h,m*g*A);const x=[A,A,A,A,A,A];S.set(x,d*g*A)}const b=new vn;b.setAttribute("position",new en(_,y)),b.setAttribute("uv",new en(v,m)),b.setAttribute("faceIndex",new en(S,d)),e.push(b),r>Us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Rv(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CR(t,e,n){const i=new Float32Array(Br),r=new I(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Pv(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function bv(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jh||l===Qh,c=l===so||l===oo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Cv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Cv(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&uu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bR(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let v=0,S=_.length;v<S;v+=3){const b=_[v+0],A=_[v+1],w=_[v+2];h.push(b,A,A,w,w,b)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const b=v+0,A=v+1,w=v+2;h.push(b,A,A,w,w,b)}}else return;const m=new(Vx(h)?qx:$x)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function LR(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function DR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function IR(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*f),P=new Gx(w,b,A,f);P.type=wi,P.needsUpdate=!0;const H=S*4;for(let E=0;E<f;E++){const k=d[E],O=_[E],G=v[E],$=b*A*4*E;for(let B=0;B<k.count;B++){const X=B*H;g===!0&&(r.fromBufferAttribute(k,B),w[$+X+0]=r.x,w[$+X+1]=r.y,w[$+X+2]=r.z,w[$+X+3]=0),y===!0&&(r.fromBufferAttribute(O,B),w[$+X+4]=r.x,w[$+X+5]=r.y,w[$+X+6]=r.z,w[$+X+7]=0),m===!0&&(r.fromBufferAttribute(G,B),w[$+X+8]=r.x,w[$+X+9]=r.y,w[$+X+10]=r.z,w[$+X+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ge(b,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function NR(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class tS extends mn{constructor(e,n,i,r,s,o,a,l,u,c=qs){if(c!==qs&&c!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===qs&&(i=ts),i===void 0&&c===lo&&(i=ao),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const nS=new mn,Lv=new tS(1,1),iS=new Gx,rS=new y1,sS=new Jx,Dv=[],Iv=[],Nv=new Float32Array(16),Uv=new Float32Array(9),Fv=new Float32Array(4);function xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dv[r];if(s===void 0&&(s=new Float32Array(r),Dv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=Iv[e];n===void 0&&(n=new Int32Array(e),Iv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function OR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function BR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Fv.set(i),t.uniformMatrix2fv(this.addr,!1,Fv),It(n,i)}}function zR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Uv.set(i),t.uniformMatrix3fv(this.addr,!1,Uv),It(n,i)}}function VR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Nv.set(i),t.uniformMatrix4fv(this.addr,!1,Nv),It(n,i)}}function HR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function XR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function jR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function $R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function qR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function KR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Lv.compareFunction=zx,s=Lv):s=nS,n.setTexture2D(e||s,r)}function ZR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rS,r)}function JR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sS,r)}function QR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iS,r)}function eP(t){switch(t){case 5126:return UR;case 35664:return FR;case 35665:return OR;case 35666:return kR;case 35674:return BR;case 35675:return zR;case 35676:return VR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return WR;case 35669:case 35673:return XR;case 5125:return jR;case 36294:return YR;case 36295:return $R;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return QR}}function tP(t,e){t.uniform1fv(this.addr,e)}function nP(t,e){const n=xo(e,this.size,2);t.uniform2fv(this.addr,n)}function iP(t,e){const n=xo(e,this.size,3);t.uniform3fv(this.addr,n)}function rP(t,e){const n=xo(e,this.size,4);t.uniform4fv(this.addr,n)}function sP(t,e){const n=xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oP(t,e){const n=xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aP(t,e){const n=xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lP(t,e){t.uniform1iv(this.addr,e)}function uP(t,e){t.uniform2iv(this.addr,e)}function cP(t,e){t.uniform3iv(this.addr,e)}function fP(t,e){t.uniform4iv(this.addr,e)}function hP(t,e){t.uniform1uiv(this.addr,e)}function dP(t,e){t.uniform2uiv(this.addr,e)}function pP(t,e){t.uniform3uiv(this.addr,e)}function mP(t,e){t.uniform4uiv(this.addr,e)}function gP(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||nS,s[o])}function vP(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rS,s[o])}function _P(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sS,s[o])}function yP(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iS,s[o])}function xP(t){switch(t){case 5126:return tP;case 35664:return nP;case 35665:return iP;case 35666:return rP;case 35674:return sP;case 35675:return oP;case 35676:return aP;case 5124:case 35670:return lP;case 35667:case 35671:return uP;case 35668:case 35672:return cP;case 35669:case 35673:return fP;case 5125:return hP;case 36294:return dP;case 36295:return pP;case 36296:return mP;case 35678:case 36198:case 36298:case 36306:case 35682:return gP;case 35679:case 36299:case 36307:return vP;case 35680:case 36300:case 36308:case 36293:return _P;case 36289:case 36303:case 36311:case 36292:return yP}}class SP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eP(n.type)}}class MP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xP(n.type)}}class EP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function Ov(t,e){t.seq.push(e),t.map[e.id]=e}function TP(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ov(n,u===void 0?new SP(a,t,e):new MP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new EP(a),Ov(n,f)),n=f}}}class cu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);TP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function kv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wP=37297;let AP=0;function CP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RP(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===zu&&n===Bu?i="LinearDisplayP3ToLinearSRGB":e===Bu&&n===zu&&(i="LinearSRGBToLinearDisplayP3"),t){case Mr:case pc:return[i,"LinearTransferOETF"];case si:case Kp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CP(t.getShaderSource(e),o)}else return r}function PP(t,e){const n=RP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bP(t,e){let n;switch(e){case Ww:n="Linear";break;case Xw:n="Reinhard";break;case jw:n="Cineon";break;case Yw:n="ACESFilmic";break;case qw:n="AgX";break;case Kw:n="Neutral";break;case $w:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new I;function LP(){Qe.getLuminanceCoefficients(Fl);const t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function IP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function zv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(t){return t.replace(UP,OP)}const FP=new Map;function OP(t,e){let n=We[e];if(n===void 0){const i=FP.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pd(n)}const kP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(t){return t.replace(kP,BP)}function BP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ew?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function VP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function GP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rx:e="ENVMAP_BLENDING_MULTIPLY";break;case Hw:e="ENVMAP_BLENDING_MIX";break;case Gw:e="ENVMAP_BLENDING_ADD";break}return e}function WP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zP(n),u=VP(n),c=HP(n),f=GP(n),h=WP(n),p=DP(n),g=IP(s),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),d.length>0&&(d+=`
`)):(m=[Gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),d=[Gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?We.tonemapping_pars_fragment:"",n.toneMapping!==hr?bP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,PP("linearToOutputTexel",n.outputColorSpace),LP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Pd(o),o=zv(o,n),o=Vv(o,n),a=Pd(a),a=zv(a,n),a=Vv(a,n),o=Hv(o),a=Hv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+o,S=_+d+a,b=kv(r,r.VERTEX_SHADER,v),A=kv(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),O=r.getShaderInfoLog(b).trim(),G=r.getShaderInfoLog(A).trim();let $=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const X=Bv(r,b,"vertex"),L=Bv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+X+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(B=!1);B&&(E.diagnostics={runnable:$,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(b),r.deleteShader(A),P=new cu(r,y),H=NP(r,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let H;this.getAttributes=function(){return H===void 0&&w(this),H};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,wP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AP++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let jP=0;class YP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $P(e),n.set(e,i)),i}}class $P{constructor(e){this.id=jP++,this.code=e,this.usedTimes=0}}function qP(t,e,n,i,r,s,o){const a=new Xx,l=new YP,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,E,k,O,G){const $=O.fog,B=G.geometry,X=x.isMeshStandardMaterial?O.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||X),Y=L&&L.mapping===dc?L.image.height:null,q=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Re=re!==void 0?re.length:0;let ze=0;B.morphAttributes.position!==void 0&&(ze=1),B.morphAttributes.normal!==void 0&&(ze=2),B.morphAttributes.color!==void 0&&(ze=3);let j,ne,pe,ue;if(q){const on=oi[q];j=on.vertexShader,ne=on.fragmentShader}else j=x.vertexShader,ne=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const Fe=t.getRenderTarget(),Ie=G.isInstancedMesh===!0,ke=G.isBatchedMesh===!0,Pe=!!x.map,K=!!x.matcap,R=!!L,ce=!!x.aoMap,oe=!!x.lightMap,ie=!!x.bumpMap,fe=!!x.normalMap,be=!!x.displacementMap,me=!!x.emissiveMap,C=!!x.metalnessMap,M=!!x.roughnessMap,F=x.anisotropy>0,Z=x.clearcoat>0,Q=x.dispersion>0,J=x.iridescence>0,Ae=x.sheen>0,he=x.transmission>0,Se=F&&!!x.anisotropyMap,Ye=Z&&!!x.clearcoatMap,ae=Z&&!!x.clearcoatNormalMap,Me=Z&&!!x.clearcoatRoughnessMap,Ve=J&&!!x.iridescenceMap,He=J&&!!x.iridescenceThicknessMap,Te=Ae&&!!x.sheenColorMap,$e=Ae&&!!x.sheenRoughnessMap,Ge=!!x.specularMap,st=!!x.specularColorMap,D=!!x.specularIntensityMap,ye=he&&!!x.transmissionMap,W=he&&!!x.thicknessMap,ee=!!x.gradientMap,ve=!!x.alphaMap,xe=x.alphaTest>0,qe=!!x.alphaHash,Ct=!!x.extensions;let sn=hr;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(sn=t.toneMapping);const Je={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:ne,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ke,batchingColor:ke&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Mr,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:K,envMap:R,envMapMode:R&&L.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:oe,bumpMap:ie,normalMap:fe,displacementMap:p&&be,emissiveMap:me,normalMapObjectSpace:fe&&x.normalMapType===t1,normalMapTangentSpace:fe&&x.normalMapType===e1,metalnessMap:C,roughnessMap:M,anisotropy:F,anisotropyMap:Se,clearcoat:Z,clearcoatMap:Ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:Q,iridescence:J,iridescenceMap:Ve,iridescenceThicknessMap:He,sheen:Ae,sheenColorMap:Te,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:st,specularIntensityMap:D,transmission:he,transmissionMap:ye,thicknessMap:W,gradientMap:ee,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:xe,alphaHash:qe,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:ce&&m(x.aoMap.channel),lightMapUv:oe&&m(x.lightMap.channel),bumpMapUv:ie&&m(x.bumpMap.channel),normalMapUv:fe&&m(x.normalMap.channel),displacementMapUv:be&&m(x.displacementMap.channel),emissiveMapUv:me&&m(x.emissiveMap.channel),metalnessMapUv:C&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Se&&m(x.anisotropyMap.channel),clearcoatMapUv:Ye&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(x.sheenRoughnessMap.channel),specularMapUv:Ge&&m(x.specularMap.channel),specularColorMapUv:st&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:ye&&m(x.transmissionMap.channel),thicknessMapUv:W&&m(x.thicknessMap.channel),alphaMapUv:ve&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Pe||ve),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:sn,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=u.has(1),Je.vertexUv2s=u.has(2),Je.vertexUv3s=u.has(3),u.clear(),Je}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(v(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=y[x.type];let k;if(E){const O=oi[E];k=L1.clone(O.uniforms)}else k=x.uniforms;return k}function A(x,E){let k;for(let O=0,G=c.length;O<G;O++){const $=c[O];if($.cacheKey===E){k=$,++k.usedTimes;break}}return k===void 0&&(k=new XP(t,E,x,s),c.push(k)),k}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:H}}function KP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ZP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||ZP),i.length>1&&i.sort(h||Wv),r.length>1&&r.sort(h||Wv)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function JP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xv,t.set(i,[o])):r>=s.length?(o=new Xv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ze};break;case"SpotLight":n={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tb=0;function nb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ib(t){const e=new QP,n=eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new rt,o=new rt;function a(u){let c=0,f=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,_=0,v=0,S=0,b=0,A=0,w=0;u.sort(nb);for(let H=0,x=u.length;H<x;H++){const E=u[H],k=E.color,O=E.intensity,G=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=k.r*O,f+=k.g*O,h+=k.b*O;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],O);w++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const X=E.shadow,L=n.get(E);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=E.shadow.matrix,_++}i.directional[p]=B,p++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(k).multiplyScalar(O),B.distance=G,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[y]=B;const X=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,X.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=X.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=$,S++}y++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(k).multiplyScalar(O),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=B,m++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const X=E.shadow,L=n.get(E);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=E.shadow.matrix,v++}i.point[g]=B,g++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(O),B.groundColor.copy(E.groundColor).multiplyScalar(O),i.hemi[d]=B,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=w,i.version=tb++)}function l(u,c){let f=0,h=0,p=0,g=0,y=0;const m=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const v=u[d];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function jv(t){const e=new ib(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jv(t),e.set(r,[a])):s>=o.length?(a=new jv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class sb extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ub(t,e,n){let i=new Qx;const r=new ge,s=new ge,o=new wt,a=new sb({depthPacking:Qw}),l=new ob,u={},c=n.maxTextureSize,f={[gr]:pn,[pn]:gr,[Mi]:Mi},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:ab,fragmentShader:lb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ci(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cx;let d=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),k=t.state;k.setBlending(fr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==yi&&this.type===yi,G=d===yi&&this.type!==yi;for(let $=0,B=A.length;$<B;$++){const X=A[$],L=X.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||O===!0||G===!0){const re=this.type!==yi?{minFilter:kn,magFilter:kn}:{};L.map!==null&&L.map.dispose(),L.map=new ns(r.x,r.y,re),L.map.texture.name=X.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let re=0;re<q;re++){const Re=L.getViewport(re);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),k.viewport(o),L.updateMatrices(X,re),i=L.getFrustum(),S(w,P,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&_(L,P),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(H,x,E)};function _(A,w){const P=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ns(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,y,null)}function v(A,w,P,H){let x=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=x.uuid,O=w.uuid;let G=u[k];G===void 0&&(G={},u[k]=G);let $=G[O];$===void 0&&($=x.clone(),G[O]=$,w.addEventListener("dispose",b)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,H===yi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=t.properties.get(x);k.light=P}return x}function S(A,w,P,H,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),G=A.material;if(Array.isArray(G)){const $=O.groups;for(let B=0,X=$.length;B<X;B++){const L=$[B],Y=G[L.materialIndex];if(Y&&Y.visible){const q=v(A,Y,H,x);A.onBeforeShadow(t,A,w,P,O,q,L),t.renderBufferDirect(P,null,O,q,A,L),A.onAfterShadow(t,A,w,P,O,q,L)}}}else if(G.visible){const $=v(A,G,H,x);A.onBeforeShadow(t,A,w,P,O,$,null),t.renderBufferDirect(P,null,O,$,A,null),A.onAfterShadow(t,A,w,P,O,$,null)}}const k=A.children;for(let O=0,G=k.length;O<G;O++)S(k[O],w,P,H,x)}function b(A){A.target.removeEventListener("dispose",b);for(const P in u){const H=u[P],x=A.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}const cb={[Xh]:jh,[Yh]:Kh,[$h]:Zh,[ro]:qh,[jh]:Xh,[Kh]:Yh,[Zh]:$h,[qh]:ro};function fb(t){function e(){let D=!1;const ye=new wt;let W=null;const ee=new wt(0,0,0,0);return{setMask:function(ve){W!==ve&&!D&&(t.colorMask(ve,ve,ve,ve),W=ve)},setLocked:function(ve){D=ve},setClear:function(ve,xe,qe,Ct,sn){sn===!0&&(ve*=Ct,xe*=Ct,qe*=Ct),ye.set(ve,xe,qe,Ct),ee.equals(ye)===!1&&(t.clearColor(ve,xe,qe,Ct),ee.copy(ye))},reset:function(){D=!1,W=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,ye=!1,W=null,ee=null,ve=null;return{setReversed:function(xe){ye=xe},setTest:function(xe){xe?pe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(xe){W!==xe&&!D&&(t.depthMask(xe),W=xe)},setFunc:function(xe){if(ye&&(xe=cb[xe]),ee!==xe){switch(xe){case Xh:t.depthFunc(t.NEVER);break;case jh:t.depthFunc(t.ALWAYS);break;case Yh:t.depthFunc(t.LESS);break;case ro:t.depthFunc(t.LEQUAL);break;case $h:t.depthFunc(t.EQUAL);break;case qh:t.depthFunc(t.GEQUAL);break;case Kh:t.depthFunc(t.GREATER);break;case Zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=xe}},setLocked:function(xe){D=xe},setClear:function(xe){ve!==xe&&(t.clearDepth(xe),ve=xe)},reset:function(){D=!1,W=null,ee=null,ve=null}}}function i(){let D=!1,ye=null,W=null,ee=null,ve=null,xe=null,qe=null,Ct=null,sn=null;return{setTest:function(Je){D||(Je?pe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Je){ye!==Je&&!D&&(t.stencilMask(Je),ye=Je)},setFunc:function(Je,on,di){(W!==Je||ee!==on||ve!==di)&&(t.stencilFunc(Je,on,di),W=Je,ee=on,ve=di)},setOp:function(Je,on,di){(xe!==Je||qe!==on||Ct!==di)&&(t.stencilOp(Je,on,di),xe=Je,qe=on,Ct=di)},setLocked:function(Je){D=Je},setClear:function(Je){sn!==Je&&(t.clearStencil(Je),sn=Je)},reset:function(){D=!1,ye=null,W=null,ee=null,ve=null,xe=null,qe=null,Ct=null,sn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,S=null,b=null,A=new Ze(0,0,0),w=0,P=!1,H=null,x=null,E=null,k=null,O=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=B>=2);let L=null,Y={};const q=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Re=new wt().fromArray(q),ze=new wt().fromArray(re);function j(D,ye,W,ee){const ve=new Uint8Array(4),xe=t.createTexture();t.bindTexture(D,xe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<W;qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ye+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return xe}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(ro),oe(!1),ie(tv),pe(t.CULL_FACE),R(fr);function pe(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ue(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Fe(D,ye){return c[D]!==ye?(t.bindFramebuffer(D,ye),c[D]=ye,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ye),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ie(D,ye){let W=h,ee=!1;if(D){W=f.get(ye),W===void 0&&(W=[],f.set(ye,W));const ve=D.textures;if(W.length!==ve.length||W[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,qe=ve.length;xe<qe;xe++)W[xe]=t.COLOR_ATTACHMENT0+xe;W.length=ve.length,ee=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ee=!0);ee&&t.drawBuffers(W)}function ke(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Pe={[kr]:t.FUNC_ADD,[ww]:t.FUNC_SUBTRACT,[Aw]:t.FUNC_REVERSE_SUBTRACT};Pe[Cw]=t.MIN,Pe[Rw]=t.MAX;const K={[Pw]:t.ZERO,[bw]:t.ONE,[Lw]:t.SRC_COLOR,[Gh]:t.SRC_ALPHA,[Ow]:t.SRC_ALPHA_SATURATE,[Uw]:t.DST_COLOR,[Iw]:t.DST_ALPHA,[Dw]:t.ONE_MINUS_SRC_COLOR,[Wh]:t.ONE_MINUS_SRC_ALPHA,[Fw]:t.ONE_MINUS_DST_COLOR,[Nw]:t.ONE_MINUS_DST_ALPHA,[kw]:t.CONSTANT_COLOR,[Bw]:t.ONE_MINUS_CONSTANT_COLOR,[zw]:t.CONSTANT_ALPHA,[Vw]:t.ONE_MINUS_CONSTANT_ALPHA};function R(D,ye,W,ee,ve,xe,qe,Ct,sn,Je){if(D===fr){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),D!==Tw){if(D!==y||Je!==P){if((m!==kr||v!==kr)&&(t.blendEquation(t.FUNC_ADD),m=kr,v=kr),Je)switch(D){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.ONE,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,_=null,S=null,b=null,A.set(0,0,0),w=0,y=D,P=Je}return}ve=ve||ye,xe=xe||W,qe=qe||ee,(ye!==m||ve!==v)&&(t.blendEquationSeparate(Pe[ye],Pe[ve]),m=ye,v=ve),(W!==d||ee!==_||xe!==S||qe!==b)&&(t.blendFuncSeparate(K[W],K[ee],K[xe],K[qe]),d=W,_=ee,S=xe,b=qe),(Ct.equals(A)===!1||sn!==w)&&(t.blendColor(Ct.r,Ct.g,Ct.b,sn),A.copy(Ct),w=sn),y=D,P=!1}function ce(D,ye){D.side===Mi?ue(t.CULL_FACE):pe(t.CULL_FACE);let W=D.side===pn;ye&&(W=!W),oe(W),D.blending===$s&&D.transparent===!1?R(fr):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;o.setTest(ee),ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(D){H!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),H=D)}function ie(D){D!==Sw?(pe(t.CULL_FACE),D!==x&&(D===tv?t.cullFace(t.BACK):D===Mw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),x=D}function fe(D){D!==E&&($&&t.lineWidth(D),E=D)}function be(D,ye,W){D?(pe(t.POLYGON_OFFSET_FILL),(k!==ye||O!==W)&&(t.polygonOffset(ye,W),k=ye,O=W)):ue(t.POLYGON_OFFSET_FILL)}function me(D){D?pe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+G-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,ye,W){W===void 0&&(L===null?W=t.TEXTURE0+G-1:W=L);let ee=Y[W];ee===void 0&&(ee={type:void 0,texture:void 0},Y[W]=ee),(ee.type!==D||ee.texture!==ye)&&(L!==W&&(t.activeTexture(W),L=W),t.bindTexture(D,ye||ne[D]),ee.type=D,ee.texture=ye)}function F(){const D=Y[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){Re.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function Te(D){ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function $e(D,ye){let W=l.get(ye);W===void 0&&(W=new WeakMap,l.set(ye,W));let ee=W.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(ye,D.name),W.set(D,ee))}function Ge(D,ye){const ee=l.get(ye).get(D);a.get(ye)!==ee&&(t.uniformBlockBinding(ye,ee,D.__bindingPointIndex),a.set(ye,ee))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,Y={},c={},f=new WeakMap,h=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,S=null,b=null,A=new Ze(0,0,0),w=0,P=!1,H=null,x=null,E=null,k=null,O=null,Re.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ue,bindFramebuffer:Fe,drawBuffers:Ie,useProgram:ke,setBlending:R,setMaterial:ce,setFlipSided:oe,setCullFace:ie,setLineWidth:fe,setPolygonOffset:be,setScissorTest:me,activeTexture:C,bindTexture:M,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:Me,texImage3D:Ve,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:Ye,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:Se,scissor:He,viewport:Te,reset:st}}function Yv(t,e,n,i){const r=hb(i);switch(n){case Ix:return t*e;case Ux:return t*e;case Fx:return t*e*2;case Ox:return t*e/r.components*r.byteLength;case Yp:return t*e/r.components*r.byteLength;case kx:return t*e*2/r.components*r.byteLength;case $p:return t*e*2/r.components*r.byteLength;case Nx:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case qp:return t*e*4/r.components*r.byteLength;case ru:case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(t,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(t,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lu:case Ed:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bx:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hb(t){switch(t){case Ui:case bx:return{byteLength:1,components:1};case Ca:case Lx:case Va:return{byteLength:2,components:1};case Xp:case jp:return{byteLength:2,components:4};case ts:case Wp:case wi:return{byteLength:4,components:1};case Dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function db(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ge,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Hu("canvas")}function y(C,M,F){let Z=1;const Q=me(C);if((Q.width>F||Q.height>F)&&(Z=F/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*Q.width),Ae=Math.floor(Z*Q.height);f===void 0&&(f=g(J,Ae));const he=M?g(J,Ae):f;return he.width=J,he.height=Ae,he.getContext("2d").drawImage(C,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Ae+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==kn&&C.minFilter!==Zn}function d(C){t.generateMipmap(C)}function _(C,M,F,Z,Q=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===t.RED&&(F===t.FLOAT&&(J=t.R32F),F===t.HALF_FLOAT&&(J=t.R16F),F===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.R8UI),F===t.UNSIGNED_SHORT&&(J=t.R16UI),F===t.UNSIGNED_INT&&(J=t.R32UI),F===t.BYTE&&(J=t.R8I),F===t.SHORT&&(J=t.R16I),F===t.INT&&(J=t.R32I)),M===t.RG&&(F===t.FLOAT&&(J=t.RG32F),F===t.HALF_FLOAT&&(J=t.RG16F),F===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RG8UI),F===t.UNSIGNED_SHORT&&(J=t.RG16UI),F===t.UNSIGNED_INT&&(J=t.RG32UI),F===t.BYTE&&(J=t.RG8I),F===t.SHORT&&(J=t.RG16I),F===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGB8UI),F===t.UNSIGNED_SHORT&&(J=t.RGB16UI),F===t.UNSIGNED_INT&&(J=t.RGB32UI),F===t.BYTE&&(J=t.RGB8I),F===t.SHORT&&(J=t.RGB16I),F===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),F===t.UNSIGNED_INT&&(J=t.RGBA32UI),F===t.BYTE&&(J=t.RGBA8I),F===t.SHORT&&(J=t.RGBA16I),F===t.INT&&(J=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Ae=Q?ku:Qe.getTransfer(Z);F===t.FLOAT&&(J=t.RGBA32F),F===t.HALF_FLOAT&&(J=t.RGBA16F),F===t.UNSIGNED_BYTE&&(J=Ae===ut?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,M){let F;return C?M===null||M===ts||M===ao?F=t.DEPTH24_STENCIL8:M===wi?F=t.DEPTH32F_STENCIL8:M===Ca&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ts||M===ao?F=t.DEPTH_COMPONENT24:M===wi?F=t.DEPTH_COMPONENT32F:M===Ca&&(F=t.DEPTH_COMPONENT16),F}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&c.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),H(M)}function w(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,Z=h.get(F);if(Z){const Q=Z[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(Z).length===0&&h.delete(F)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const F=C.source,Z=h.get(F);delete Z[M.__cacheKey],o.memory.textures--}function H(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let Q=0;Q<M.__webglFramebuffer[Z].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Z][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let Z=0,Q=F.length;Z<Q;Z++){const J=i.get(F[Z]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(C)}let x=0;function E(){x=0}function k(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const F=i.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(F,C,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function $(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){ze(F,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function B(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){ze(F,C,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function X(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const L={[ed]:t.REPEAT,[Gr]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},Y={[kn]:t.NEAREST,[Zw]:t.NEAREST_MIPMAP_NEAREST,[gl]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[ef]:t.LINEAR_MIPMAP_NEAREST,[Wr]:t.LINEAR_MIPMAP_LINEAR},q={[n1]:t.NEVER,[l1]:t.ALWAYS,[i1]:t.LESS,[zx]:t.LEQUAL,[r1]:t.EQUAL,[a1]:t.GEQUAL,[s1]:t.GREATER,[o1]:t.NOTEQUAL};function re(C,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zn||M.magFilter===ef||M.magFilter===gl||M.magFilter===Wr||M.minFilter===Zn||M.minFilter===ef||M.minFilter===gl||M.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kn||M.minFilter!==gl&&M.minFilter!==Wr||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Re(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const J=O(M);if(J!==C.__cacheKey){Q[J]===void 0&&(Q[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[J].usedTimes++;const Ae=Q[C.__cacheKey];Ae!==void 0&&(Q[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(M)),C.__cacheKey=J,C.__webglTexture=Q[J].texture}return F}function ze(C,M,F){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const Q=Re(C,M),J=M.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+F);const Ae=i.get(J);if(J.version!==Ae.__version||Q===!0){n.activeTexture(t.TEXTURE0+F);const he=Qe.getPrimaries(Qe.workingColorSpace),Se=M.colorSpace===Qi?null:Qe.getPrimaries(M.colorSpace),Ye=M.colorSpace===Qi||he===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ae=y(M.image,!1,r.maxTextureSize);ae=be(M,ae);const Me=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let He=_(M.internalFormat,Me,Ve,M.colorSpace,M.isVideoTexture);re(Z,M);let Te;const $e=M.mipmaps,Ge=M.isVideoTexture!==!0,st=Ae.__version===void 0||Q===!0,D=J.dataReady,ye=S(M,ae);if(M.isDepthTexture)He=v(M.format===lo,M.type),st&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,He,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,He,ae.width,ae.height,0,Me,Ve,null));else if(M.isDataTexture)if($e.length>0){Ge&&st&&n.texStorage2D(t.TEXTURE_2D,ye,He,$e[0].width,$e[0].height);for(let W=0,ee=$e.length;W<ee;W++)Te=$e[W],Ge?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Te.width,Te.height,Me,Ve,Te.data):n.texImage2D(t.TEXTURE_2D,W,He,Te.width,Te.height,0,Me,Ve,Te.data);M.generateMipmaps=!1}else Ge?(st&&n.texStorage2D(t.TEXTURE_2D,ye,He,ae.width,ae.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Ve,ae.data)):n.texImage2D(t.TEXTURE_2D,0,He,ae.width,ae.height,0,Me,Ve,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,He,$e[0].width,$e[0].height,ae.depth);for(let W=0,ee=$e.length;W<ee;W++)if(Te=$e[W],M.format!==Qn)if(Me!==null)if(Ge){if(D)if(M.layerUpdates.size>0){const ve=Yv(Te.width,Te.height,M.format,M.type);for(const xe of M.layerUpdates){const qe=Te.data.subarray(xe*ve/Te.data.BYTES_PER_ELEMENT,(xe+1)*ve/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,xe,Te.width,Te.height,1,Me,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Te.width,Te.height,ae.depth,Me,Te.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,He,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Te.width,Te.height,ae.depth,Me,Ve,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,He,Te.width,Te.height,ae.depth,0,Me,Ve,Te.data)}else{Ge&&st&&n.texStorage2D(t.TEXTURE_2D,ye,He,$e[0].width,$e[0].height);for(let W=0,ee=$e.length;W<ee;W++)Te=$e[W],M.format!==Qn?Me!==null?Ge?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,Te.width,Te.height,Me,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,W,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Te.width,Te.height,Me,Ve,Te.data):n.texImage2D(t.TEXTURE_2D,W,He,Te.width,Te.height,0,Me,Ve,Te.data)}else if(M.isDataArrayTexture)if(Ge){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,He,ae.width,ae.height,ae.depth),D)if(M.layerUpdates.size>0){const W=Yv(ae.width,ae.height,M.format,M.type);for(const ee of M.layerUpdates){const ve=ae.data.subarray(ee*W/ae.data.BYTES_PER_ELEMENT,(ee+1)*W/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Me,Ve,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(M.isData3DTexture)Ge?(st&&n.texStorage3D(t.TEXTURE_3D,ye,He,ae.width,ae.height,ae.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)):n.texImage3D(t.TEXTURE_3D,0,He,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(M.isFramebufferTexture){if(st)if(Ge)n.texStorage2D(t.TEXTURE_2D,ye,He,ae.width,ae.height);else{let W=ae.width,ee=ae.height;for(let ve=0;ve<ye;ve++)n.texImage2D(t.TEXTURE_2D,ve,He,W,ee,0,Me,Ve,null),W>>=1,ee>>=1}}else if($e.length>0){if(Ge&&st){const W=me($e[0]);n.texStorage2D(t.TEXTURE_2D,ye,He,W.width,W.height)}for(let W=0,ee=$e.length;W<ee;W++)Te=$e[W],Ge?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Me,Ve,Te):n.texImage2D(t.TEXTURE_2D,W,He,Me,Ve,Te);M.generateMipmaps=!1}else if(Ge){if(st){const W=me(ae);n.texStorage2D(t.TEXTURE_2D,ye,He,W.width,W.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ve,ae)}else n.texImage2D(t.TEXTURE_2D,0,He,Me,Ve,ae);m(M)&&d(Z),Ae.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,F){if(M.image.length!==6)return;const Z=Re(C,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const J=i.get(Q);if(Q.version!==J.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const Ae=Qe.getPrimaries(Qe.workingColorSpace),he=M.colorSpace===Qi?null:Qe.getPrimaries(M.colorSpace),Se=M.colorSpace===Qi||Ae===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!Ye&&!ae?Me[ee]=y(M.image[ee],!0,r.maxCubemapSize):Me[ee]=ae?M.image[ee].image:M.image[ee],Me[ee]=be(M,Me[ee]);const Ve=Me[0],He=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),$e=_(M.internalFormat,He,Te,M.colorSpace),Ge=M.isVideoTexture!==!0,st=J.__version===void 0||Z===!0,D=Q.dataReady;let ye=S(M,Ve);re(t.TEXTURE_CUBE_MAP,M);let W;if(Ye){Ge&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,$e,Ve.width,Ve.height);for(let ee=0;ee<6;ee++){W=Me[ee].mipmaps;for(let ve=0;ve<W.length;ve++){const xe=W[ve];M.format!==Qn?He!==null?Ge?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,xe.width,xe.height,He,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,xe.width,xe.height,He,Te,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,xe.width,xe.height,0,He,Te,xe.data)}}}else{if(W=M.mipmaps,Ge&&st){W.length>0&&ye++;const ee=me(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,He,Te,Me[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Me[ee].width,Me[ee].height,0,He,Te,Me[ee].data);for(let ve=0;ve<W.length;ve++){const qe=W[ve].image[ee].image;Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,qe.width,qe.height,He,Te,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,qe.width,qe.height,0,He,Te,qe.data)}}else{Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,Te,Me[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,He,Te,Me[ee]);for(let ve=0;ve<W.length;ve++){const xe=W[ve];Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,He,Te,xe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,He,Te,xe.image[ee])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),J.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,F,Z,Q,J){const Ae=s.convert(F.format,F.colorSpace),he=s.convert(F.type),Se=_(F.internalFormat,Ae,he,F.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>J),Me=Math.max(1,M.height>>J);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,J,Se,ae,Me,M.depth,0,Ae,he,null):n.texImage2D(Q,J,Se,ae,Me,0,Ae,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,i.get(F).__webglTexture,0,oe(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,i.get(F).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const Z=M.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,J=v(M.stencilBuffer,Q),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=oe(M);ie(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,J,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,C)}else{const Z=M.textures;for(let Q=0;Q<Z.length;Q++){const J=Z[Q],Ae=s.convert(J.format,J.colorSpace),he=s.convert(J.type),Se=_(J.internalFormat,Ae,he,J.colorSpace),Ye=oe(M);F&&ie(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Se,M.width,M.height):ie(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,Q=oe(M);if(M.depthTexture.format===qs)ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===lo)ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Z}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[Z],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,M,F){const Z=i.get(C);M!==void 0&&ne(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Fe(C)}function ke(C){const M=C.texture,F=i.get(C),Z=i.get(M);C.addEventListener("dispose",A);const Q=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let Se=0;Se<M.mipmaps.length;Se++)F.__webglFramebuffer[he][Se]=t.createFramebuffer()}else F.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)F.__webglFramebuffer[he]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let he=0,Se=Q.length;he<Se;he++){const Ye=i.get(Q[he]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&ie(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const Se=Q[he];F.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Ye=s.convert(Se.format,Se.colorSpace),ae=s.convert(Se.type),Me=_(Se.internalFormat,Ye,ae,Se.colorSpace,C.isXRRenderTarget===!0),Ve=oe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,F.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),re(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ne(F.__webglFramebuffer[he][Se],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ne(F.__webglFramebuffer[he],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let he=0,Se=Q.length;he<Se;he++){const Ye=Q[he],ae=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),re(t.TEXTURE_2D,Ye),ne(F.__webglFramebuffer,C,Ye,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ye)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Z.__webglTexture),re(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ne(F.__webglFramebuffer[Se],C,M,t.COLOR_ATTACHMENT0,he,Se);else ne(F.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&d(he),n.unbindTexture()}C.depthBuffer&&Fe(C)}function Pe(C){const M=C.textures;for(let F=0,Z=M.length;F<Z;F++){const Q=M[F];if(m(Q)){const J=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(Q).__webglTexture;n.bindTexture(J,Ae),d(J),n.unbindTexture()}}}const K=[],R=[];function ce(C){if(C.samples>0){if(ie(C)===!1){const M=C.textures,F=C.width,Z=C.height;let Q=t.COLOR_BUFFER_BIT;const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(C),he=M.length>1;if(he)for(let Se=0;Se<M.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Ye=i.get(M[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,Q,t.NEAREST),l===!0&&(K.length=0,R.length=0,K.push(t.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(K.push(J),R.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<M.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Ye=i.get(M[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function oe(C){return Math.min(r.maxSamples,C.samples)}function ie(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function be(C,M){const F=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Mr&&F!==Qi&&(Qe.getTransfer(F)===ut?(Z!==Qn||Q!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=Ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ie}function pb(t,e){function n(i,r=Qi){let s;const o=Qe.getTransfer(r);if(i===Ui)return t.UNSIGNED_BYTE;if(i===Xp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bx)return t.BYTE;if(i===Lx)return t.SHORT;if(i===Ca)return t.UNSIGNED_SHORT;if(i===Wp)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===Va)return t.HALF_FLOAT;if(i===Ix)return t.ALPHA;if(i===Nx)return t.RGB;if(i===Qn)return t.RGBA;if(i===Ux)return t.LUMINANCE;if(i===Fx)return t.LUMINANCE_ALPHA;if(i===qs)return t.DEPTH_COMPONENT;if(i===lo)return t.DEPTH_STENCIL;if(i===Ox)return t.RED;if(i===Yp)return t.RED_INTEGER;if(i===kx)return t.RG;if(i===$p)return t.RG_INTEGER;if(i===qp)return t.RGBA_INTEGER;if(i===ru||i===su||i===ou||i===au)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===od||i===ad)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ld)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===cd||i===fd||i===hd||i===dd||i===pd||i===md||i===gd||i===vd||i===_d||i===yd||i===xd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ud)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_d)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===Ed||i===Td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lu)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bx||i===wd||i===Ad||i===Cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class mb extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Go extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Oi({vertexShader:vb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends _o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const y=new yb,m=n.getContextAttributes();let d=null,_=null;const v=[],S=[],b=new ge;let A=null;const w=new Fn;w.layers.enable(1),w.viewport=new wt;const P=new Fn;P.layers.enable(2),P.viewport=new wt;const H=[w,P],x=new mb;x.layers.enable(1),x.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=v[j];return ne===void 0&&(ne=new Lf,v[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=v[j];return ne===void 0&&(ne=new Lf,v[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=v[j];return ne===void 0&&(ne=new Lf,v[j]=ne),ne.getHandSpace()};function O(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const pe=v[ne];pe!==void 0&&(pe.update(j.inputSource,j.frame,u||o),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",$);for(let j=0;j<v.length;j++){const ne=S[j];ne!==null&&(S[j]=null,v[j].disconnect(ne))}E=null,k=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ns(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?lo:qs,pe=m.stencil?ao:ts);const Fe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ns(h.textureWidth,h.textureHeight,{format:Qn,type:Ui,depthTexture:new tS(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(j){for(let ne=0;ne<j.removed.length;ne++){const pe=j.removed[ne],ue=S.indexOf(pe);ue>=0&&(S[ue]=null,v[ue].disconnect(pe))}for(let ne=0;ne<j.added.length;ne++){const pe=j.added[ne];let ue=S.indexOf(pe);if(ue===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=S.length){S.push(pe),ue=Ie;break}else if(S[Ie]===null){S[Ie]=pe,ue=Ie;break}if(ue===-1)break}const Fe=v[ue];Fe&&Fe.connect(pe)}}const B=new I,X=new I;function L(j,ne,pe){B.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);const ue=B.distanceTo(X),Fe=ne.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,ke=Fe[14]/(Fe[10]-1),Pe=Fe[14]/(Fe[10]+1),K=(Fe[9]+1)/Fe[5],R=(Fe[9]-1)/Fe[5],ce=(Fe[8]-1)/Fe[0],oe=(Ie[8]+1)/Ie[0],ie=ke*ce,fe=ke*oe,be=ue/(-ce+oe),me=be*-ce;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=ke+be,M=Pe+be,F=ie-me,Z=fe+(ue-me),Q=K*Pe/M*C,J=R*Pe/M*C;j.projectionMatrix.makePerspective(F,Z,Q,J,C,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Y(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,pe=j.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),x.near=P.near=w.near=ne,x.far=P.far=w.far=pe,(E!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,k=x.far);const ue=j.parent,Fe=x.cameras;Y(x,ue);for(let Ie=0;Ie<Fe.length;Ie++)Y(Fe[Ie],ue);Fe.length===2?L(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),q(j,x,ue)};function q(j,ne,pe){pe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Re(j,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let Ie=0;Ie<pe.length;Ie++){const ke=pe[Ie];let Pe=null;if(p!==null)Pe=p.getViewport(ke);else{const R=f.getViewSubImage(h,ke);Pe=R.viewport,Ie===0&&(e.setRenderTargetTextures(_,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(_))}let K=H[Ie];K===void 0&&(K=new Fn,K.layers.enable(Ie),K.viewport=new wt,H[Ie]=K),K.matrix.fromArray(ke.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ke.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ie===0&&(x.matrix.copy(K.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(K)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ie=f.getDepthInformation(pe[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ue=S[pe],Fe=v[pe];ue!==null&&Fe!==void 0&&Fe.update(ue,ne,u||o)}re&&re(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ze=new eS;ze.setAnimationLoop(Re),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const br=new Fi,Sb=new rt;function Mb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Kx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,br.copy(S),br.x*=-1,br.y*=-1,br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(br)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Eb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(g(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const v=f();_.__bindingPointIndex=v;const S=t.createBuffer(),b=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let H=0,x=P.length;H<x;H++){const E=P[H];if(p(E,A,H,b)===!0){const k=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let $=0;$<O.length;$++){const B=O[$],X=y(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,k+G,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,b){const A=_.value,w=v+"_"+S;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const P=b[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const v=_.uniforms;let S=0;const b=16;for(let w=0,P=v.length;w<P;w++){const H=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,E=H.length;x<E;x++){const k=H[x],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,$=O.length;G<$;G++){const B=O[G],X=y(B),L=S%b,Y=L%X.boundary,q=L+Y;S+=Y,q!==0&&b-q<X.storage&&(S+=b-q),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=X.storage}}}const A=S%b;return A>0&&(S+=b-A),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Tb{constructor(e={}){const{canvas:n=c1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let S=!1,b=0,A=0,w=null,P=-1,H=null;const x=new wt,E=new wt;let k=null;const O=new Ze(0);let G=0,$=n.width,B=n.height,X=1,L=null,Y=null;const q=new wt(0,0,$,B),re=new wt(0,0,$,B);let Re=!1;const ze=new Qx;let j=!1,ne=!1;const pe=new rt,ue=new rt,Fe=new I,Ie=new wt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function K(){return w===null?X:1}let R=i;function ce(T,N){return n.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gp}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",xe,!1),R===null){const N="webgl2";if(R=ce(N,T),R===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,ie,fe,be,me,C,M,F,Z,Q,J,Ae,he,Se,Ye,ae,Me,Ve,He,Te,$e,Ge,st,D;function ye(){oe=new PR(R),oe.init(),Ge=new pb(R,oe),ie=new MR(R,oe,e,Ge),fe=new fb(R),ie.reverseDepthBuffer&&fe.buffers.depth.setReversed(!0),be=new DR(R),me=new KP,C=new db(R,oe,fe,me,ie,Ge,be),M=new TR(v),F=new RR(v),Z=new k1(R),st=new xR(R,Z),Q=new bR(R,Z,be,st),J=new NR(R,Q,Z,be),He=new IR(R,ie,C),ae=new ER(me),Ae=new qP(v,M,F,oe,ie,st,ae),he=new Mb(v,me),Se=new JP,Ye=new rb(oe),Ve=new yR(v,M,F,fe,J,h,l),Me=new ub(v,J,ie),D=new Eb(R,be,ie,fe),Te=new SR(R,oe,be),$e=new LR(R,oe,be),be.programs=Ae.programs,v.capabilities=ie,v.extensions=oe,v.properties=me,v.renderLists=Se,v.shadowMap=Me,v.state=fe,v.info=be}ye();const W=new xb(v,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize($,B,!1))},this.getSize=function(T){return T.set($,B)},this.setSize=function(T,N,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,B=N,n.width=Math.floor(T*X),n.height=Math.floor(N*X),z===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set($*X,B*X).floor()},this.setDrawingBufferSize=function(T,N,z){$=T,B=N,X=z,n.width=Math.floor(T*z),n.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,N,z,V){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,N,z,V),fe.viewport(x.copy(q).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,N,z,V){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,N,z,V),fe.scissor(E.copy(re).multiplyScalar(X).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){fe.setScissorTest(Re=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,N=!0,z=!0){let V=0;if(T){let U=!1;if(w!==null){const le=w.texture.format;U=le===qp||le===$p||le===Yp}if(U){const le=w.texture.type,_e=le===Ui||le===ts||le===Ca||le===ao||le===Xp||le===jp,we=Ve.getClearColor(),Ce=Ve.getClearAlpha(),Oe=we.r,Be=we.g,Le=we.b;_e?(p[0]=Oe,p[1]=Be,p[2]=Le,p[3]=Ce,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=Oe,g[1]=Be,g[2]=Le,g[3]=Ce,R.clearBufferiv(R.COLOR,0,g))}else V|=R.COLOR_BUFFER_BIT}N&&(V|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Se.dispose(),Ye.dispose(),me.dispose(),M.dispose(),F.dispose(),J.dispose(),st.dispose(),D.dispose(),Ae.dispose(),W.dispose(),W.removeEventListener("sessionstart",km),W.removeEventListener("sessionend",Bm),Tr.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=be.autoReset,N=Me.enabled,z=Me.autoUpdate,V=Me.needsUpdate,U=Me.type;ye(),be.autoReset=T,Me.enabled=N,Me.autoUpdate=z,Me.needsUpdate=V,Me.type=U}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const N=T.target;N.removeEventListener("dispose",qe),Ct(N)}function Ct(T){sn(T),me.remove(T)}function sn(T){const N=me.get(T).programs;N!==void 0&&(N.forEach(function(z){Ae.releaseProgram(z)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,V,U,le){N===null&&(N=ke);const _e=U.isMesh&&U.matrixWorld.determinant()<0,we=GM(T,N,z,V,U);fe.setMaterial(V,_e);let Ce=z.index,Oe=1;if(V.wireframe===!0){if(Ce=Q.getWireframeAttribute(z),Ce===void 0)return;Oe=2}const Be=z.drawRange,Le=z.attributes.position;let nt=Be.start*Oe,at=(Be.start+Be.count)*Oe;le!==null&&(nt=Math.max(nt,le.start*Oe),at=Math.min(at,(le.start+le.count)*Oe)),Ce!==null?(nt=Math.max(nt,0),at=Math.min(at,Ce.count)):Le!=null&&(nt=Math.max(nt,0),at=Math.min(at,Le.count));const yt=at-nt;if(yt<0||yt===1/0)return;st.setup(U,V,we,z,Ce);let _n,et=Te;if(Ce!==null&&(_n=Z.get(Ce),et=$e,et.setIndex(_n)),U.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*K()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(U.isLine){let De=V.linewidth;De===void 0&&(De=1),fe.setLineWidth(De*K()),U.isLineSegments?et.setMode(R.LINES):U.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else U.isPoints?et.setMode(R.POINTS):U.isSprite&&et.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const De=U._multiDrawStarts,Ot=U._multiDrawCounts,tt=U._multiDrawCount,Hn=Ce?Z.get(Ce).bytesPerElement:1,as=me.get(V).currentProgram.getUniforms();for(let yn=0;yn<tt;yn++)as.setValue(R,"_gl_DrawID",yn),et.render(De[yn]/Hn,Ot[yn])}else if(U.isInstancedMesh)et.renderInstances(nt,yt,U.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ot=Math.min(z.instanceCount,De);et.renderInstances(nt,yt,Ot)}else et.render(nt,yt)};function Je(T,N,z){T.transparent===!0&&T.side===Mi&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Ja(T,N,z),T.side=gr,T.needsUpdate=!0,Ja(T,N,z),T.side=Mi):Ja(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),m=Ye.get(z),m.init(N),_.push(m),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),T!==z&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const V=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const le=U.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const we=le[_e];Je(we,z,U),V.add(we)}else Je(le,z,U),V.add(le)}),_.pop(),m=null,V},this.compileAsync=function(T,N,z=null){const V=this.compile(T,N,z);return new Promise(U=>{function le(){if(V.forEach(function(_e){me.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){U(T);return}setTimeout(le,10)}oe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let on=null;function di(T){on&&on(T)}function km(){Tr.stop()}function Bm(){Tr.start()}const Tr=new eS;Tr.setAnimationLoop(di),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(T){on=T,W.setAnimationLoop(T),T===null?Tr.stop():Tr.start()},W.addEventListener("sessionstart",km),W.addEventListener("sessionend",Bm),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,w),m=Ye.get(T,_.length),m.init(N),_.push(m),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,j=ae.init(this.clippingPlanes,ne),y=Se.get(T,d.length),y.init(),d.push(y),W.enabled===!0&&W.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Tc(le,N,-1/0,v.sortObjects)}Tc(T,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,Y),Pe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Pe&&Ve.addToRenderList(y,T),this.info.render.frame++,j===!0&&ae.beginShadows();const z=m.state.shadowsArray;Me.render(z,T,N),j===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=y.opaque,U=y.transmissive;if(m.setupLights(),N.isArrayCamera){const le=N.cameras;if(U.length>0)for(let _e=0,we=le.length;_e<we;_e++){const Ce=le[_e];Vm(V,U,T,Ce)}Pe&&Ve.render(T);for(let _e=0,we=le.length;_e<we;_e++){const Ce=le[_e];zm(y,T,Ce,Ce.viewport)}}else U.length>0&&Vm(V,U,T,N),Pe&&Ve.render(T),zm(y,T,N);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,N),st.resetDefaultState(),P=-1,H=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&ae.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Tc(T,N,z,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){V&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const _e=J.update(T),we=T.material;we.visible&&y.push(T,_e,we,z,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const _e=J.update(T),we=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Ce=_e.groups;for(let Oe=0,Be=Ce.length;Oe<Be;Oe++){const Le=Ce[Oe],nt=we[Le.materialIndex];nt&&nt.visible&&y.push(T,_e,nt,z,Ie.z,Le)}}else we.visible&&y.push(T,_e,we,z,Ie.z,null)}}const le=T.children;for(let _e=0,we=le.length;_e<we;_e++)Tc(le[_e],N,z,V)}function zm(T,N,z,V){const U=T.opaque,le=T.transmissive,_e=T.transparent;m.setupLightsView(z),j===!0&&ae.setGlobalState(v.clippingPlanes,z),V&&fe.viewport(x.copy(V)),U.length>0&&Za(U,N,z),le.length>0&&Za(le,N,z),_e.length>0&&Za(_e,N,z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Vm(T,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Va:Ui,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const le=m.state.transmissionRenderTarget[V.id],_e=V.viewport||x;le.setSize(_e.z,_e.w);const we=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Pe&&Ve.render(z);const Ce=v.toneMapping;v.toneMapping=hr;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&ae.setGlobalState(v.clippingPlanes,V),Za(T,z,V),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,nt=N.length;Le<nt;Le++){const at=N[Le],yt=at.object,_n=at.geometry,et=at.material,De=at.group;if(et.side===Mi&&yt.layers.test(V.layers)){const Ot=et.side;et.side=pn,et.needsUpdate=!0,Hm(yt,z,V,_n,et,De),et.side=Ot,et.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}v.setRenderTarget(we),v.setClearColor(O,G),Oe!==void 0&&(V.viewport=Oe),v.toneMapping=Ce}function Za(T,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,le=T.length;U<le;U++){const _e=T[U],we=_e.object,Ce=_e.geometry,Oe=V===null?_e.material:V,Be=_e.group;we.layers.test(z.layers)&&Hm(we,N,z,Ce,Oe,Be)}}function Hm(T,N,z,V,U,le){T.onBeforeRender(v,N,z,V,U,le),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(v,N,z,V,T,le),U.transparent===!0&&U.side===Mi&&U.forceSinglePass===!1?(U.side=pn,U.needsUpdate=!0,v.renderBufferDirect(z,N,V,U,T,le),U.side=gr,U.needsUpdate=!0,v.renderBufferDirect(z,N,V,U,T,le),U.side=Mi):v.renderBufferDirect(z,N,V,U,T,le),T.onAfterRender(v,N,z,V,U,le)}function Ja(T,N,z){N.isScene!==!0&&(N=ke);const V=me.get(T),U=m.state.lights,le=m.state.shadowsArray,_e=U.state.version,we=Ae.getParameters(T,U.state,le,N,z),Ce=Ae.getProgramCacheKey(we);let Oe=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?F:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",qe),Oe=new Map,V.programs=Oe);let Be=Oe.get(Ce);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===_e)return Wm(T,we),Be}else we.uniforms=Ae.getUniforms(T),T.onBeforeCompile(we,v),Be=Ae.acquireProgram(we,Ce),Oe.set(Ce,Be),V.uniforms=we.uniforms;const Le=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ae.uniform),Wm(T,we),V.needsLights=XM(T),V.lightsStateVersion=_e,V.needsLights&&(Le.ambientLightColor.value=U.state.ambient,Le.lightProbe.value=U.state.probe,Le.directionalLights.value=U.state.directional,Le.directionalLightShadows.value=U.state.directionalShadow,Le.spotLights.value=U.state.spot,Le.spotLightShadows.value=U.state.spotShadow,Le.rectAreaLights.value=U.state.rectArea,Le.ltc_1.value=U.state.rectAreaLTC1,Le.ltc_2.value=U.state.rectAreaLTC2,Le.pointLights.value=U.state.point,Le.pointLightShadows.value=U.state.pointShadow,Le.hemisphereLights.value=U.state.hemi,Le.directionalShadowMap.value=U.state.directionalShadowMap,Le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Le.spotShadowMap.value=U.state.spotShadowMap,Le.spotLightMatrix.value=U.state.spotLightMatrix,Le.spotLightMap.value=U.state.spotLightMap,Le.pointShadowMap.value=U.state.pointShadowMap,Le.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Gm(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=cu.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Wm(T,N){const z=me.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function GM(T,N,z,V,U){N.isScene!==!0&&(N=ke),C.resetTextureUnits();const le=N.fog,_e=V.isMeshStandardMaterial?N.environment:null,we=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mr,Ce=(V.isMeshStandardMaterial?F:M).get(V.envMap||_e),Oe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!z.morphAttributes.position,nt=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let yt=hr;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=v.toneMapping);const _n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=_n!==void 0?_n.length:0,De=me.get(V),Ot=m.state.lights;if(j===!0&&(ne===!0||T!==H)){const bn=T===H&&V.id===P;ae.setState(V,T,bn)}let tt=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ot.state.version||De.outputColorSpace!==we||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==Ce||V.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==nt||De.morphColors!==at||De.toneMapping!==yt||De.morphTargetsCount!==et)&&(tt=!0):(tt=!0,De.__version=V.version);let Hn=De.currentProgram;tt===!0&&(Hn=Ja(V,N,U));let as=!1,yn=!1,wc=!1;const Mt=Hn.getUniforms(),zi=De.uniforms;if(fe.useProgram(Hn.program)&&(as=!0,yn=!0,wc=!0),V.id!==P&&(P=V.id,yn=!0),as||H!==T){ie.reverseDepthBuffer?(pe.copy(T.projectionMatrix),h1(pe),d1(pe),Mt.setValue(R,"projectionMatrix",pe)):Mt.setValue(R,"projectionMatrix",T.projectionMatrix),Mt.setValue(R,"viewMatrix",T.matrixWorldInverse);const bn=Mt.map.cameraPosition;bn!==void 0&&bn.setValue(R,Fe.setFromMatrixPosition(T.matrixWorld)),ie.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,yn=!0,wc=!0)}if(U.isSkinnedMesh){Mt.setOptional(R,U,"bindMatrix"),Mt.setOptional(R,U,"bindMatrixInverse");const bn=U.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Mt.setValue(R,"boneTexture",bn.boneTexture,C))}U.isBatchedMesh&&(Mt.setOptional(R,U,"batchingTexture"),Mt.setValue(R,"batchingTexture",U._matricesTexture,C),Mt.setOptional(R,U,"batchingIdTexture"),Mt.setValue(R,"batchingIdTexture",U._indirectTexture,C),Mt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Mt.setValue(R,"batchingColorTexture",U._colorsTexture,C));const Ac=z.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0)&&He.update(U,z,Hn),(yn||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,Mt.setValue(R,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zi.envMap.value=Ce,zi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(zi.envMapIntensity.value=N.environmentIntensity),yn&&(Mt.setValue(R,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&WM(zi,wc),le&&V.fog===!0&&he.refreshFogUniforms(zi,le),he.refreshMaterialUniforms(zi,V,X,B,m.state.transmissionRenderTarget[T.id]),cu.upload(R,Gm(De),zi,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cu.upload(R,Gm(De),zi,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(R,"center",U.center),Mt.setValue(R,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(R,"normalMatrix",U.normalMatrix),Mt.setValue(R,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bn=V.uniformsGroups;for(let Cc=0,jM=bn.length;Cc<jM;Cc++){const Xm=bn[Cc];D.update(Xm,Hn),D.bind(Xm,Hn)}}return Hn}function WM(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function XM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,z){me.get(T.texture).__webglTexture=N,me.get(T.depthTexture).__webglTexture=z;const V=me.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const z=me.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){w=T,b=N,A=z;let V=!0,U=null,le=!1,_e=!1;if(T){const Ce=me.get(T);if(Ce.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ce.__hasExternalTextures)C.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(Ce.__boundDepthTexture!==Le){if(Le!==null&&me.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Be=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?U=Be[N][z]:U=Be[N],le=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?U=me.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?U=Be[z]:U=Be,x.copy(T.viewport),E.copy(T.scissor),k=T.scissorTest}else x.copy(q).multiplyScalar(X).floor(),E.copy(re).multiplyScalar(X).floor(),k=Re;if(fe.bindFramebuffer(R.FRAMEBUFFER,U)&&V&&fe.drawBuffers(T,U),fe.viewport(x),fe.scissor(E),fe.setScissorTest(k),le){const Ce=me.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,z)}else if(_e){const Ce=me.get(T.texture),Oe=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.__webglTexture,z||0,Oe)}P=-1},this.readRenderTargetPixels=function(T,N,z,V,U,le,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){fe.bindFramebuffer(R.FRAMEBUFFER,we);try{const Ce=T.texture,Oe=Ce.format,Be=Ce.type;if(!ie.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&z>=0&&z<=T.height-U&&R.readPixels(N,z,V,U,Ge.convert(Oe),Ge.convert(Be),le)}finally{const Ce=w!==null?me.get(w).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,V,U,le,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){const Ce=T.texture,Oe=Ce.format,Be=Ce.type;if(!ie.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-V&&z>=0&&z<=T.height-U){fe.bindFramebuffer(R.FRAMEBUFFER,we);const Le=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(N,z,V,U,Ge.convert(Oe),Ge.convert(Be),0);const nt=w!==null?me.get(w).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,nt);const at=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await f1(R,at,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Le),R.deleteSync(at),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(T.image.width*V),le=Math.floor(T.image.height*V),_e=N!==null?N.x:0,we=N!==null?N.y:0;C.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,_e,we,U,le),fe.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,V=null,U=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,z=null);let le,_e,we,Ce,Oe,Be;z!==null?(le=z.max.x-z.min.x,_e=z.max.y-z.min.y,we=z.min.x,Ce=z.min.y):(le=T.image.width,_e=T.image.height,we=0,Ce=0),V!==null?(Oe=V.x,Be=V.y):(Oe=0,Be=0);const Le=Ge.convert(N.format),nt=Ge.convert(N.type);C.setTexture2D(N,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const at=R.getParameter(R.UNPACK_ROW_LENGTH),yt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_n=R.getParameter(R.UNPACK_SKIP_PIXELS),et=R.getParameter(R.UNPACK_SKIP_ROWS),De=R.getParameter(R.UNPACK_SKIP_IMAGES),Ot=T.isCompressedTexture?T.mipmaps[U]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,we),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Oe,Be,le,_e,Le,nt,Ot.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Oe,Be,Ot.width,Ot.height,Le,Ot.data):R.texSubImage2D(R.TEXTURE_2D,U,Oe,Be,le,_e,Le,nt,Ot),R.pixelStorei(R.UNPACK_ROW_LENGTH,at),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_n),R.pixelStorei(R.UNPACK_SKIP_ROWS,et),R.pixelStorei(R.UNPACK_SKIP_IMAGES,De),U===0&&N.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,V=null,U=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0);let le,_e,we,Ce,Oe,Be,Le,nt,at;const yt=T.isCompressedTexture?T.mipmaps[U]:T.image;z!==null?(le=z.max.x-z.min.x,_e=z.max.y-z.min.y,we=z.max.z-z.min.z,Ce=z.min.x,Oe=z.min.y,Be=z.min.z):(le=yt.width,_e=yt.height,we=yt.depth,Ce=0,Oe=0,Be=0),V!==null?(Le=V.x,nt=V.y,at=V.z):(Le=0,nt=0,at=0);const _n=Ge.convert(N.format),et=Ge.convert(N.type);let De;if(N.isData3DTexture)C.setTexture3D(N,0),De=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),De=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Ot=R.getParameter(R.UNPACK_ROW_LENGTH),tt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Hn=R.getParameter(R.UNPACK_SKIP_PIXELS),as=R.getParameter(R.UNPACK_SKIP_ROWS),yn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(De,U,Le,nt,at,le,_e,we,_n,et,yt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(De,U,Le,nt,at,le,_e,we,_n,yt.data):R.texSubImage3D(De,U,Le,nt,at,le,_e,we,_n,et,yt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,as),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yn),U===0&&N.generateMipmaps&&R.generateMipmap(De),fe.unbindTexture()},this.initRenderTarget=function(T){me.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,fe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kp?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===pc?"display-p3":"srgb"}}class wb extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ab extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $v=new rt,bd=new Wx,Ol=new mc,kl=new I;class Cb extends gn{constructor(e=new vn,n=new Ab){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=s,e.ray.intersectsSphere(Ol)===!1)return;$v.copy(r).invert(),bd.copy(e.ray).applyMatrix4($v);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,y=p;g<y;g++){const m=u.getX(g);kl.fromBufferAttribute(f,m),qv(kl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,y=p;g<y;g++)kl.fromBufferAttribute(f,g),qv(kl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qv(t,e,n,i,r,s,o){const a=bd.distanceSqToPoint(t);if(a<n){const l=new I;bd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new rt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(qt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jp extends hi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rb extends Jp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Bl=new I,Df=new Qp,If=new Qp,Nf=new Qp;class Pb extends hi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Bl.subVectors(r[0],r[1]).add(r[0]),u=Bl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Df.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,y,m),If.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,y,m),Nf.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&(Df.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),If.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Nf.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Df.calc(l),If.calc(l),Nf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kv(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function bb(t,e){const n=1-t;return n*n*e}function Lb(t,e){return 2*(1-t)*t*e}function Db(t,e){return t*t*e}function na(t,e,n,i){return bb(t,e)+Lb(t,n)+Db(t,i)}function Ib(t,e){const n=1-t;return n*n*n*e}function Nb(t,e){const n=1-t;return 3*n*n*t*e}function Ub(t,e){return 3*(1-t)*t*t*e}function Fb(t,e){return t*t*t*e}function ia(t,e,n,i,r){return Ib(t,e)+Nb(t,n)+Ub(t,i)+Fb(t,r)}class oS extends hi{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ob extends hi{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y),ia(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aS extends hi{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kb extends hi{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lS extends hi{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bb extends hi{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y),na(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uS extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Kv(a,l.x,u.x,c.x,f.x),Kv(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var Ld=Object.freeze({__proto__:null,ArcCurve:Rb,CatmullRomCurve3:Pb,CubicBezierCurve:oS,CubicBezierCurve3:Ob,EllipseCurve:Jp,LineCurve:aS,LineCurve3:kb,QuadraticBezierCurve:lS,QuadraticBezierCurve3:Bb,SplineCurve:uS});class zb extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ld[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Ld[r.type]().fromJSON(r))}return this}}class Zv extends zb{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new aS(this.currentPoint.clone(),new ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new lS(this.currentPoint.clone(),new ge(e,n),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new oS(this.currentPoint.clone(),new ge(e,n),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new uS(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new Jp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class em extends vn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new I,c=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tm extends vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],p=[];let g=0;const y=[],m=i/2;let d=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function _(){const S=new I,b=new I;let A=0;const w=(n-e)/i;for(let P=0;P<=s;P++){const H=[],x=P/s,E=x*(n-e)+e;for(let k=0;k<=r;k++){const O=k/r,G=O*l+a,$=Math.sin(G),B=Math.cos(G);b.x=E*$,b.y=-x*i+m,b.z=E*B,f.push(b.x,b.y,b.z),S.set($,w,B).normalize(),h.push(S.x,S.y,S.z),p.push(O,1-x),H.push(g++)}y.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const x=y[H][P],E=y[H+1][P],k=y[H+1][P+1],O=y[H][P+1];e>0&&(c.push(x,E,O),A+=3),n>0&&(c.push(E,k,O),A+=3)}u.addGroup(d,A,0),d+=A}function v(S){const b=g,A=new ge,w=new I;let P=0;const H=S===!0?e:n,x=S===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let k=0;k<=r;k++){const G=k/r*l+a,$=Math.cos(G),B=Math.sin(G);w.x=H*B,w.y=m*x,w.z=H*$,f.push(w.x,w.y,w.z),h.push(0,x,0),A.x=$*.5+.5,A.y=B*.5*x+.5,p.push(A.x,A.y),g++}for(let k=0;k<r;k++){const O=b+k,G=E+k;S===!0?c.push(G,G+1,O):c.push(G+1,G,O),P+=3}u.addGroup(d,P,S===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cS extends Zv{constructor(e){super(e),this.uuid=yo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Zv().fromJSON(r))}return this}}const Vb={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=fS(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,p;if(i&&(s=jb(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return Ra(s,o,n,a,l,p,0),o}};function fS(t,e,n,i,r){let s,o;if(r===i2(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Jv(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Jv(s,t[s],t[s+1],o);return o&&_c(o,o.next)&&(ba(o),o=o.next),o}function is(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(_c(n,n.next)||mt(n.prev,n,n.next)===0)){if(ba(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ra(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Zb(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?Gb(t,i,r,s):Hb(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),ba(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=Wb(is(t),e,n),Ra(t,e,n,i,r,s,2)):o===2&&Xb(t,e,n,i,r,s):Ra(is(t),e,n,i,r,s,1);break}}}function Hb(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=h&&g.y>=f&&g.y<=p&&Fs(r,a,s,l,o,u,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gb(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<f?c<h?c:h:f<h?f:h,y=a>l?a>u?a:u:l>u?l:u,m=c>f?c>h?c:h:f>h?f:h,d=Dd(p,g,e,n,i),_=Dd(y,m,e,n,i);let v=t.prevZ,S=t.nextZ;for(;v&&v.z>=d&&S&&S.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Fs(a,c,l,f,u,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Fs(a,c,l,f,u,h,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Fs(a,c,l,f,u,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Fs(a,c,l,f,u,h,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wb(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!_c(r,s)&&hS(r,i,i.next,s)&&Pa(r,s)&&Pa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ba(i),ba(i.next),i=t=s),i=i.next}while(i!==t);return is(i)}function Xb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e2(o,a)){let l=dS(o,a);o=is(o,o.next),l=is(l,l.next),Ra(o,e,n,i,r,s,0),Ra(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function jb(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=fS(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(Qb(u));for(r.sort(Yb),s=0;s<r.length;s++)n=$b(r[s],n);return n}function Yb(t,e){return t.x-e.x}function $b(t,e){const n=qb(t,e);if(!n)return e;const i=dS(n,t);return is(i,i.next),is(n,n.next)}function qb(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Fs(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Pa(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&Kb(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function Kb(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function Zb(t,e,n,i){let r=t;do r.z===0&&(r.z=Dd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Jb(r)}function Jb(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Dd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Qb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Fs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function e2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!t2(t,e)&&(Pa(t,e)&&Pa(e,t)&&n2(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||_c(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function _c(t,e){return t.x===e.x&&t.y===e.y}function hS(t,e,n,i){const r=Vl(mt(t,e,n)),s=Vl(mt(t,e,i)),o=Vl(mt(n,i,t)),a=Vl(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&zl(t,n,e)||s===0&&zl(t,i,e)||o===0&&zl(n,t,i)||a===0&&zl(n,e,i))}function zl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Vl(t){return t>0?1:t<0?-1:0}function t2(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&hS(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Pa(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function n2(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function dS(t,e){const n=new Id(t.i,t.x,t.y),i=new Id(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Jv(t,e,n,i){const r=new Id(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ba(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Id(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i2(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ra{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ra.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Qv(e),e0(i,e);let o=e.length;n.forEach(Qv);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,e0(i,n[l]);const a=Vb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qv(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function e0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class nm extends vn{constructor(e=new cS([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new At(r,3)),this.setAttribute("uv",new At(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:r2;let v,S=!1,b,A,w,P;d&&(v=d.getSpacedPoints(c),S=!0,h=!1,b=d.computeFrenetFrames(c,!1),A=new I,w=new I,P=new I),h||(m=0,p=0,g=0,y=0);const H=a.extractPoints(u);let x=H.shape;const E=H.holes;if(!ra.isClockWise(x)){x=x.reverse();for(let K=0,R=E.length;K<R;K++){const ce=E[K];ra.isClockWise(ce)&&(E[K]=ce.reverse())}}const O=ra.triangulateShape(x,E),G=x;for(let K=0,R=E.length;K<R;K++){const ce=E[K];x=x.concat(ce)}function $(K,R,ce){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(R,ce)}const B=x.length,X=O.length;function L(K,R,ce){let oe,ie,fe;const be=K.x-R.x,me=K.y-R.y,C=ce.x-K.x,M=ce.y-K.y,F=be*be+me*me,Z=be*M-me*C;if(Math.abs(Z)>Number.EPSILON){const Q=Math.sqrt(F),J=Math.sqrt(C*C+M*M),Ae=R.x-me/Q,he=R.y+be/Q,Se=ce.x-M/J,Ye=ce.y+C/J,ae=((Se-Ae)*M-(Ye-he)*C)/(be*M-me*C);oe=Ae+be*ae-K.x,ie=he+me*ae-K.y;const Me=oe*oe+ie*ie;if(Me<=2)return new ge(oe,ie);fe=Math.sqrt(Me/2)}else{let Q=!1;be>Number.EPSILON?C>Number.EPSILON&&(Q=!0):be<-Number.EPSILON?C<-Number.EPSILON&&(Q=!0):Math.sign(me)===Math.sign(M)&&(Q=!0),Q?(oe=-me,ie=be,fe=Math.sqrt(F)):(oe=be,ie=me,fe=Math.sqrt(F/2))}return new ge(oe/fe,ie/fe)}const Y=[];for(let K=0,R=G.length,ce=R-1,oe=K+1;K<R;K++,ce++,oe++)ce===R&&(ce=0),oe===R&&(oe=0),Y[K]=L(G[K],G[ce],G[oe]);const q=[];let re,Re=Y.concat();for(let K=0,R=E.length;K<R;K++){const ce=E[K];re=[];for(let oe=0,ie=ce.length,fe=ie-1,be=oe+1;oe<ie;oe++,fe++,be++)fe===ie&&(fe=0),be===ie&&(be=0),re[oe]=L(ce[oe],ce[fe],ce[be]);q.push(re),Re=Re.concat(re)}for(let K=0;K<m;K++){const R=K/m,ce=p*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+y;for(let ie=0,fe=G.length;ie<fe;ie++){const be=$(G[ie],Y[ie],oe);ue(be.x,be.y,-ce)}for(let ie=0,fe=E.length;ie<fe;ie++){const be=E[ie];re=q[ie];for(let me=0,C=be.length;me<C;me++){const M=$(be[me],re[me],oe);ue(M.x,M.y,-ce)}}}const ze=g+y;for(let K=0;K<B;K++){const R=h?$(x[K],Re[K],ze):x[K];S?(w.copy(b.normals[0]).multiplyScalar(R.x),A.copy(b.binormals[0]).multiplyScalar(R.y),P.copy(v[0]).add(w).add(A),ue(P.x,P.y,P.z)):ue(R.x,R.y,0)}for(let K=1;K<=c;K++)for(let R=0;R<B;R++){const ce=h?$(x[R],Re[R],ze):x[R];S?(w.copy(b.normals[K]).multiplyScalar(ce.x),A.copy(b.binormals[K]).multiplyScalar(ce.y),P.copy(v[K]).add(w).add(A),ue(P.x,P.y,P.z)):ue(ce.x,ce.y,f/c*K)}for(let K=m-1;K>=0;K--){const R=K/m,ce=p*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+y;for(let ie=0,fe=G.length;ie<fe;ie++){const be=$(G[ie],Y[ie],oe);ue(be.x,be.y,f+ce)}for(let ie=0,fe=E.length;ie<fe;ie++){const be=E[ie];re=q[ie];for(let me=0,C=be.length;me<C;me++){const M=$(be[me],re[me],oe);S?ue(M.x,M.y+v[c-1].y,v[c-1].x+ce):ue(M.x,M.y,f+ce)}}}j(),ne();function j(){const K=r.length/3;if(h){let R=0,ce=B*R;for(let oe=0;oe<X;oe++){const ie=O[oe];Fe(ie[2]+ce,ie[1]+ce,ie[0]+ce)}R=c+m*2,ce=B*R;for(let oe=0;oe<X;oe++){const ie=O[oe];Fe(ie[0]+ce,ie[1]+ce,ie[2]+ce)}}else{for(let R=0;R<X;R++){const ce=O[R];Fe(ce[2],ce[1],ce[0])}for(let R=0;R<X;R++){const ce=O[R];Fe(ce[0]+B*c,ce[1]+B*c,ce[2]+B*c)}}i.addGroup(K,r.length/3-K,0)}function ne(){const K=r.length/3;let R=0;pe(G,R),R+=G.length;for(let ce=0,oe=E.length;ce<oe;ce++){const ie=E[ce];pe(ie,R),R+=ie.length}i.addGroup(K,r.length/3-K,1)}function pe(K,R){let ce=K.length;for(;--ce>=0;){const oe=ce;let ie=ce-1;ie<0&&(ie=K.length-1);for(let fe=0,be=c+m*2;fe<be;fe++){const me=B*fe,C=B*(fe+1),M=R+oe+me,F=R+ie+me,Z=R+ie+C,Q=R+oe+C;Ie(M,F,Z,Q)}}}function ue(K,R,ce){l.push(K),l.push(R),l.push(ce)}function Fe(K,R,ce){ke(K),ke(R),ke(ce);const oe=r.length/3,ie=_.generateTopUV(i,r,oe-3,oe-2,oe-1);Pe(ie[0]),Pe(ie[1]),Pe(ie[2])}function Ie(K,R,ce,oe){ke(K),ke(R),ke(oe),ke(R),ke(ce),ke(oe);const ie=r.length/3,fe=_.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Pe(fe[0]),Pe(fe[1]),Pe(fe[3]),Pe(fe[1]),Pe(fe[2]),Pe(fe[3])}function ke(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function Pe(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return s2(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ld[r.type]().fromJSON(r)),new nm(i,e.options)}}const r2={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ge(o,1-l),new ge(u,1-f),new ge(h,1-g),new ge(y,1-d)]:[new ge(a,1-l),new ge(c,1-f),new ge(p,1-g),new ge(m,1-d)]}};function s2(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class im extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new I,f=new I,h=new I;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(y,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new im(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rm extends vn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],c=[],f=new I,h=new I,p=new I,g=new I,y=new I,m=new I,d=new I;for(let v=0;v<=i;++v){const S=v/i*s*Math.PI*2;_(S,s,o,e,p),_(S+.01,s,o,e,g),m.subVectors(g,p),d.addVectors(g,p),y.crossVectors(m,d),d.crossVectors(y,m),y.normalize(),d.normalize();for(let b=0;b<=r;++b){const A=b/r*Math.PI*2,w=-n*Math.cos(A),P=n*Math.sin(A);f.x=p.x+(w*d.x+P*y.x),f.y=p.y+(w*d.y+P*y.y),f.z=p.z+(w*d.z+P*y.z),l.push(f.x,f.y,f.z),h.subVectors(f,p).normalize(),u.push(h.x,h.y,h.z),c.push(v/i),c.push(b/r)}}for(let v=1;v<=i;v++)for(let S=1;S<=r;S++){const b=(r+1)*(v-1)+(S-1),A=(r+1)*v+(S-1),w=(r+1)*v+S,P=(r+1)*(v-1)+S;a.push(b,A,P),a.push(A,w,P)}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(c,2));function _(v,S,b,A,w){const P=Math.cos(v),H=Math.sin(v),x=b/S*v,E=Math.cos(x);w.x=A*(2+E)*.5*P,w.y=A*(2+E)*H*.5,w.z=A*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);const zt=I,un=Ze,Uf=[1,-1,1,-1,0],o2=["#5b2bd1","#a3268a","#0e7fb8","#3b3fb8","#2b5fd1"];function nr(t,e,n){const r=(t.index?t.toNonIndexed():t).attributes.position.array,s=r.length/9,o=new Float32Array(s),a=new zt,l=new zt,u=new zt,c=new zt,f=new zt;let h=0;for(let p=0;p<s;p++)a.fromArray(r,p*9),l.fromArray(r,p*9+3),u.fromArray(r,p*9+6),h+=c.subVectors(l,a).cross(f.subVectors(u,a)).length()/2,o[p]=h;for(let p=0;p<e;p++){const g=Math.random()*h;let y=0,m=s-1;for(;y<m;){const v=y+m>>1;o[v]<g?y=v+1:m=v}a.fromArray(r,y*9),l.fromArray(r,y*9+3),u.fromArray(r,y*9+6);let d=Math.random(),_=Math.random();d+_>1&&(d=1-d,_=1-_),n(new zt().copy(a).addScaledVector(c.subVectors(l,a),d).addScaledVector(f.subVectors(u,a),_))}t.dispose()}function sa(){const t=Math.random()*2-1,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t*t);return new zt(n*Math.cos(e),t,n*Math.sin(e))}function Xa(){const t=[],e=[];return{add(n,i){t.push(n.x,n.y,n.z),e.push(i.r,i.g,i.b)},P:t,C:e}}function ja(t,e){const n=t.P.length/3,i=[];for(let o=0;o<e;o++)i.push(o<n?o:Math.floor(Math.random()*n));for(let o=i.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[i[o],i[a]]=[i[a],i[o]]}const r=new Float32Array(e*3),s=new Float32Array(e*3);return i.forEach((o,a)=>{for(let l=0;l<3;l++)r[a*3+l]=t.P[o*3+l],s[a*3+l]=t.C[o*3+l]}),{p:r,c:s}}const co=(t,e,n)=>new un(t).lerp(new un(e),Math.min(1,Math.max(0,n)));function a2(t){const e=Xa();return nr(new rm(1.15,.36,260,36),t,n=>e.add(n,co("#9D6BFF","#3FD8F0",(n.x+1.7)/3.4))),ja(e,t)}function l2(t){const e=Xa(),n=Math.floor(t*.78),i=Math.floor(t*.1),r=Math.floor(t*.04),s=t-n-i-r;for(let o=0;o<n;o++){const a=sa();let l=a.x*1.5,u=a.y*1.05,c=a.z*1.12;u<-.5&&(u=-.5+(u+.5)*.35);const f=1+.075*Math.sin(9*a.x+2.2*a.y)*Math.sin(8*a.y+1.3)+.05*Math.sin(11*a.z+5*a.x);l*=f,u*=f,c*=f,c+=c>0?.09:-.09,e.add(new zt(l+.12,u+.2,c),co("#FF6FD8","#8B7BFF",(l+1.5)/3))}for(let o=0;o<i;o++){const a=sa(),l=1+.07*Math.sin(28*a.y);e.add(new zt(-1.02+a.x*.5*l,-.62+a.y*.3*l,a.z*.74*l),co("#C084FC","#FF6FD8",Math.random()))}for(let o=0;o<r;o++){const a=Math.random(),l=Math.random()*Math.PI*2;e.add(new zt(-.45+a*.2+Math.cos(l)*.15,-.55-a*.9,Math.sin(l)*.15),new un("#B794F4"))}for(let o=0;o<s;o++){const a=sa().multiplyScalar(Math.cbrt(Math.random())*.8);e.add(new zt(a.x*1.4+.12,a.y*.9+.2,a.z),new un("#FFE3FA"))}return ja(e,t)}function u2(t){const e=Xa(),n=new cS;n.moveTo(2.15,-.25),n.lineTo(2.22,.05),n.quadraticCurveTo(2.2,.24,1.9,.28),n.lineTo(1,.4),n.quadraticCurveTo(.6,.46,.45,.52),n.quadraticCurveTo(.1,.86,-.2,.88),n.lineTo(-.8,.88),n.quadraticCurveTo(-1.2,.8,-1.6,.5),n.lineTo(-2.05,.42),n.quadraticCurveTo(-2.25,.3,-2.2,0),n.lineTo(-2.15,-.25),n.lineTo(-1.8,-.25),n.absarc(-1.35,-.25,.45,Math.PI,0,!0),n.lineTo(.9,-.25),n.absarc(1.35,-.25,.45,Math.PI,0,!0),n.lineTo(2.15,-.25);const i=new rt().makeRotationX(.16).multiply(new rt().makeRotationY(-.6)).multiply(new rt().makeScale(.8,.8,.8)),r=new nm(n,{depth:1.6,bevelEnabled:!0,bevelThickness:.1,bevelSize:.08,bevelSegments:3,curveSegments:28});r.translate(0,0,-.8),nr(r,Math.floor(t*.66),o=>{const a=co("#22D3EE","#6366F1",(o.x+2.2)/4.4);e.add(o.applyMatrix4(i),a)}),[[-1.35,.82],[1.35,.82],[-1.35,-.82],[1.35,-.82]].forEach(([o,a])=>{const l=new im(.33,.11,12,48);l.translate(o,-.27,a),nr(l,Math.floor(t*.06),c=>e.add(c.applyMatrix4(i),new un("#E0E7FF")));const u=new em(.22,24);u.translate(o,-.27,a+(a>0?.02:-.02)),nr(u,Math.floor(t*.012),c=>e.add(c.applyMatrix4(i),new un("#A5B4FC")))});const s=t-e.P.length/3;for(let o=0;o<s;o++){const a=Math.random()*Math.PI*2,l=.9+Math.random()*.12;e.add(new zt(Math.cos(a)*2.6*l,-.72,Math.sin(a)*1.3*l).applyMatrix4(i),new un("#155E75"))}return ja(e,t)}function c2(t){const e=Xa(),n=new rt().makeRotationX(.5).multiply(new rt().makeRotationY(Math.PI/4));[[.95,"#3FD8F0"],[0,"#9D6BFF"],[-.95,"#3BE38B"]].forEach(([s,o])=>{const a=new dr(2.3,.08,2.3);a.translate(0,s,0),nr(a,Math.floor(t*.22),l=>e.add(l.applyMatrix4(n),new un(o)))}),[[-.45,1.12,-.35,.8,.26,.55],[.5,1.12,.35,.6,.26,.8]].forEach(([s,o,a,l,u,c])=>{const f=new dr(l,u,c);f.translate(s,o,a),nr(f,Math.floor(t*.04),h=>e.add(h.applyMatrix4(n),new un("#A5F3FC")))}),[[-.6,.18,.4],[0,.18,-.5],[.6,.18,.3]].forEach(([s,o,a])=>{const l=new dr(.38,.3,.38);l.translate(s,o,a),nr(l,Math.floor(t*.02),u=>e.add(u.applyMatrix4(n),new un("#D8B4FE")))});const i=new tm(.45,.45,.5,36);i.translate(0,-.66,0),nr(i,Math.floor(t*.06),s=>e.add(s.applyMatrix4(n),new un("#86EFAC")));const r=t-e.P.length/3;for(let s=0;s<r;s++){const o=s%4,a=o<2?-1.15:1.15,l=o%2?-1.15:1.15;e.add(new zt(a,-.95+Math.random()*1.9,l).applyMatrix4(n),new un("#6B7280"))}return ja(e,t)}function f2(t){const e=Xa(),n=1.65,i=Math.PI/180,r=(u,c)=>new zt(Math.cos(u)*Math.cos(c)*n,Math.sin(u)*n,Math.cos(u)*Math.sin(c)*n);for(let u=0;u<t*.52;u++){const c=Math.random()<.5?r((Math.floor(Math.random()*7)-3)*20*i,Math.random()*Math.PI*2):r((Math.random()*180-90)*i,Math.floor(Math.random()*12)*30*i);e.add(c,co("#60A5FA","#C4B5FD",(c.y+n)/(2*n)))}for(let u=0;u<t*.25;u++){const c=sa().multiplyScalar(n);e.add(c,co("#1E3A8A","#6D28D9",(c.y+n)/(2*n)))}const s=new zt(1,0,0),o=new zt(0,0,1);for(let u=0;u<t*.18;u++){const c=Math.random()*Math.PI*2,f=2.4+Math.random()*.14;e.add(new zt(Math.cos(c)*f,(Math.random()-.5)*.03,Math.sin(c)*f).applyAxisAngle(s,.35).applyAxisAngle(o,.3),new un("#3FD8F0"))}const a=r(3.1*i,-101.7*i),l=t-e.P.length/3;for(let u=0;u<l;u++)e.add(a.clone().add(sa().multiplyScalar(Math.random()*.09)),new un("#FF6FD8"));return ja(e,t)}function h2(t){return[a2(t),l2(t),u2(t),c2(t),f2(t)]}Qe.enabled=!1;const d2=`
  attribute vec3 pA; attribute vec3 pB; attribute vec3 cA; attribute vec3 cB; attribute float rnd;
  uniform float uMix, uTime, uIntro, uSize, uPR;
  varying vec3 vC; varying float vA;
  void main() {
    float d = clamp(uMix * 1.4 - rnd * 0.4, 0.0, 1.0);
    d = d * d * (3.0 - 2.0 * d);
    vec3 dir = normalize(vec3(sin(rnd * 91.7), cos(rnd * 47.3), sin(rnd * 13.1 + 1.0)));
    vec3 p = mix(pA, pB, d) + dir * sin(3.14159 * d) * 0.9;
    p += 0.02 * vec3(sin(uTime * 1.3 + rnd * 40.0), cos(uTime * 1.1 + rnd * 30.0), sin(uTime * 0.9 + rnd * 20.0));
    float it = clamp(uIntro * 1.3 - rnd * 0.3, 0.0, 1.0);
    it = 1.0 - pow(1.0 - it, 3.0);
    p = mix(dir * 7.0, p, it);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPR * (0.55 + rnd * 0.9) / (-mv.z);
    vC = mix(cA, cB, d);
    vA = (0.35 + 0.45 * rnd) * it;
  }
`,p2=`
  uniform float uAlpha;
  varying vec3 vC; varying float vA;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    if (r > 0.5) discard;
    gl_FragColor = vec4(vC, smoothstep(0.5, 0.0, r) * vA * uAlpha);
  }
`;function m2({onActiveChange:t}){const e=Ue.useRef(null),n=Ue.useRef(null),i=Ue.useRef(t);return i.current=t,Ue.useEffect(()=>{const r=e.current,s=n.current,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=window.innerWidth<820,l=a?4200:7500,u=h2(l),c=o2.map(Pe=>new Ze(Pe)),f=[...document.querySelectorAll("section[data-shape]")],h=()=>{const Pe=window.innerHeight;let K=0;for(let R=1;R<f.length;R++){const ce=(window.scrollY+Pe*.8-f[R].offsetTop)/(Pe*.6);K+=Math.min(1,Math.max(0,ce))}return K},p=new Tb({antialias:!0,alpha:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(p.domElement);const g=new wb,y=new Fn(40,1,.1,100),m=new Go;g.add(m);const d=new Float32Array(l*3),_=new Float32Array(l*3),v=new Float32Array(l*3),S=new Float32Array(l*3),b=new Float32Array(l).map(()=>Math.random()),A=new en(d,3),w=new en(_,3),P=new en(v,3),H=new en(S,3),x=new vn;x.setAttribute("position",A),x.setAttribute("pA",A),x.setAttribute("pB",w),x.setAttribute("cA",P),x.setAttribute("cB",H),x.setAttribute("rnd",new en(b,1));const E=new Oi({uniforms:{uMix:{value:0},uTime:{value:0},uIntro:{value:o?1:0},uSize:{value:a?24:30},uPR:{value:p.getPixelRatio()},uAlpha:{value:a?.6:1}},vertexShader:d2,fragmentShader:p2,transparent:!0,depthWrite:!1,blending:Hh}),k=new Cb(x,E);k.frustumCulled=!1,m.add(k);let O=-1;const G=Pe=>{d.set(u[Pe].p),_.set(u[Pe+1].p),v.set(u[Pe].c),S.set(u[Pe+1].c),[A,w,P,H].forEach(K=>K.needsUpdate=!0),O=Pe};let $=3,B=a;const X=()=>{const Pe=window.innerWidth,K=window.innerHeight;B=Pe<820,p.setSize(Pe,K,!1),y.aspect=Pe/K,y.position.z=B?8.6:7.2,y.updateProjectionMatrix(),$=Math.tan(20*Math.PI/180)*y.position.z*y.aspect};X();let L=0,Y=0,q=0,re=0;const Re=Pe=>{L=Pe.clientX/window.innerWidth*2-1,Y=Pe.clientY/window.innerHeight*2-1};window.addEventListener("resize",X),window.addEventListener("pointermove",Re);let ze=h(),j=0,ne=-1,pe="",ue=0;const Fe=performance.now(),Ie=new Ze,ke=Pe=>{var M;const K=(Pe-Fe)/1e3;E.uniforms.uTime.value=o?0:K,o||(E.uniforms.uIntro.value=Math.min(1,K/2.2));const R=h();ze+=(R-ze)*(o?1:.07),Math.abs(R-ze)<1e-4&&(ze=R);const ce=u.length-1,oe=Math.min(Math.floor(ze),ce-1),ie=Math.min(1,ze-oe);oe!==O&&G(oe),E.uniforms.uMix.value=ie;const fe=ie*ie*(3-2*ie),be=B?0:Uf[oe]+(Uf[oe+1]-Uf[oe])*fe;m.position.x=be*$*.46,q+=(L-q)*.05,re+=(Y-re)*.05,o||(j+=.0022),m.rotation.y=j+q*.4,m.rotation.x=re*.22,Ie.copy(c[oe]).lerp(c[oe+1],fe);const me=`radial-gradient(55% 60% at ${(50+be*22).toFixed(1)}% 48%, #${Ie.getHexString()} 0%, transparent 70%)`;me!==pe&&(s.style.background=me,pe=me);const C=Math.round(ze);C!==ne&&(ne=C,(M=i.current)==null||M.call(i,C)),p.render(g,y),ue=requestAnimationFrame(ke)};return ue=requestAnimationFrame(ke),()=>{cancelAnimationFrame(ue),window.removeEventListener("resize",X),window.removeEventListener("pointermove",Re),x.dispose(),E.dispose(),p.dispose(),r.removeChild(p.domElement)}},[]),te.jsxs(te.Fragment,{children:[te.jsx("div",{ref:n,className:"glow","aria-hidden":"true"}),te.jsx("div",{ref:e,className:"gl","aria-hidden":"true"})]})}const Xr={name:"Ariff Firdaus",role:"Full stack developer in Selangor, Malaysia",tagline:"I build web apps with React and Node.js, and I'm teaching myself AI by training a language model from scratch.",status:"Open to junior developer roles",email:"hello@ariff.dev",links:[{label:"GitHub",href:"https://github.com/your-username"},{label:"LinkedIn",href:"https://www.linkedin.com/in/your-username"},{label:"Upwork",href:"https://www.upwork.com/freelancers/your-id"}]},Hl={title:"I learn by taking things apart.",paragraphs:["Before I wrote code, I worked on aircraft. As a technician at Upeca Aerotech, I learned that any system makes sense once you open it up and trace how each part works.","I carried that habit into my computer science degree at MSU. It's why I'm building my own language model, Aeri, from the ground up instead of only calling an API."],facts:[{label:"Degree",value:"B.Sc. Computer Science & Technology, MSU"},{label:"Diploma",value:"Aircraft Maintenance Technology"},{label:"Learning now",value:"AI engineering"}],skills:["React","JavaScript","Node.js","MongoDB","HTML & CSS","Python","PyTorch"]},g2=[{when:"Apr to Sep 2026",title:"Full Stack Developer Intern, Cloud Basha",text:"Built an internal business and admin web application, working across the MongoDB data layer and the interface."},{when:"2022 to 2023",title:"Aircraft Technician, Upeca Aerotech",text:"Maintained and inspected aircraft components, where every step follows a procedure and every detail is checked."},{when:"Graduating",title:"Computer Science & Technology, MSU",text:"Bachelor's degree at Management and Science University, Shah Alam."}],v2=[{name:"CodeBridge Courses",type:"Web app",text:"A learning platform with separate dashboards for students and trainers, redesigned around a clean sidebar layout.",tags:["React","Node.js","UI design"],href:"#contact"},{name:"Aeri",type:"AI",text:"A small Transformer language model I'm building from scratch in PyTorch, to understand how LLMs really work.",tags:["Python","PyTorch","Transformers"],href:"#contact"},{name:"Admin web app, Cloud Basha",type:"Internship",text:"An internal business tool for managing company data, built during my full stack internship.",tags:["MongoDB","Node.js","Full stack"],href:"#contact"}],_2=[{id:"intro",label:"Intro"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];function y2({active:t}){return te.jsxs(te.Fragment,{children:[te.jsxs("nav",{className:"top","aria-label":"Main",children:[te.jsx("a",{className:"logo",href:"#intro",children:"AF"}),te.jsxs("ul",{children:[te.jsx("li",{children:te.jsx("a",{href:"#about",children:"About"})}),te.jsx("li",{children:te.jsx("a",{href:"#experience",children:"Experience"})}),te.jsx("li",{children:te.jsx("a",{href:"#projects",children:"Projects"})})]}),te.jsx("a",{className:"cta",href:"#contact",children:"Contact"})]}),te.jsx("nav",{className:"dots","aria-label":"Sections",children:_2.map((e,n)=>te.jsxs("a",{href:`#${e.id}`,className:n===t?"on":"","aria-current":n===t?"true":void 0,children:[e.label,te.jsx("i",{})]},e.id))})]})}const pS=Ue.createContext({});function x2(t){const e=Ue.useRef(null);return e.current===null&&(e.current=t()),e.current}const sm=Ue.createContext(null),mS=Ue.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function S2(t=!0){const e=Ue.useContext(sm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Ue.useId();Ue.useEffect(()=>{t&&r(s)},[t]);const o=Ue.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const om=typeof window<"u",M2=om?Ue.useLayoutEffect:Ue.useEffect,wn=t=>t;let gS=wn;function am(t){let e;return()=>(e===void 0&&(e=t()),e)}const fo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Pi=t=>t*1e3,bi=t=>t/1e3,E2={useManualTiming:!1};function T2(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const p=f&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const Gl=["read","resolveKeyframes","update","preRender","render","postRender"],w2=40;function vS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Gl.reduce((d,_)=>(d[_]=T2(s),d),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:h}=o,p=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,w2),1),r.timestamp=d,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Gl.reduce((d,_)=>{const v=o[_];return d[_]=(S,b=!1,A=!1)=>(n||g(),v.schedule(S,b,A)),d},{}),cancel:d=>{for(let _=0;_<Gl.length;_++)o[Gl[_]].cancel(d)},state:r,steps:o}}const{schedule:ft,cancel:vr,state:Bt,steps:Ff}=vS(typeof requestAnimationFrame<"u"?requestAnimationFrame:wn,!0),_S=Ue.createContext({strict:!1}),t0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const t in t0)ho[t]={isEnabled:e=>t0[t].some(n=>!!e[n])};function A2(t){for(const e in t)ho[e]={...ho[e],...t[e]}}const C2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||C2.has(t)}let yS=t=>!Gu(t);function R2(t){t&&(yS=e=>e.startsWith("on")?!Gu(e):t(e))}try{R2(require("@emotion/is-prop-valid").default)}catch{}function P2(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(yS(r)||n===!0&&Gu(r)||!e&&!Gu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function b2(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const yc=Ue.createContext({});function La(t){return typeof t=="string"||Array.isArray(t)}function xc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],um=["initial",...lm];function Sc(t){return xc(t.animate)||um.some(e=>La(t[e]))}function xS(t){return!!(Sc(t)||t.variants)}function L2(t,e){if(Sc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||La(n)?n:void 0,animate:La(i)?i:void 0}}return t.inherit!==!1?e:{}}function D2(t){const{initial:e,animate:n}=L2(t,Ue.useContext(yc));return Ue.useMemo(()=>({initial:e,animate:n}),[n0(e),n0(n)])}function n0(t){return Array.isArray(t)?t.join(" "):t}const I2=Symbol.for("motionComponentSymbol");function Os(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function N2(t,e,n){return Ue.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Os(n)&&(n.current=i))},[e])}const cm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),U2="framerAppearId",SS="data-"+cm(U2),{schedule:fm}=vS(queueMicrotask,!1),MS=Ue.createContext({});function F2(t,e,n,i,r){var s,o;const{visualElement:a}=Ue.useContext(yc),l=Ue.useContext(_S),u=Ue.useContext(sm),c=Ue.useContext(mS).reducedMotion,f=Ue.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=f.current,p=Ue.useContext(MS);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&O2(f.current,n,r,p);const g=Ue.useRef(!1);Ue.useInsertionEffect(()=>{h&&g.current&&h.update(n,u)});const y=n[SS],m=Ue.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return M2(()=>{h&&(g.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),fm.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),Ue.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var d;(d=window.MotionHandoffMarkAsComplete)===null||d===void 0||d.call(window,y)}),m.current=!1))}),h}function O2(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:ES(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Os(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function ES(t){if(t)return t.options.allowProjection!==!1?t.projection:ES(t.parent)}function k2({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&A2(t);function a(u,c){let f;const h={...Ue.useContext(mS),...u,layoutId:B2(u)},{isStatic:p}=h,g=D2(u),y=i(u,p);if(!p&&om){z2();const m=V2(h);f=m.MeasureLayout,g.visualElement=F2(r,y,h,e,m.ProjectionNode)}return te.jsxs(yc.Provider,{value:g,children:[f&&g.visualElement?te.jsx(f,{visualElement:g.visualElement,...h}):null,n(r,u,N2(y,g.visualElement,c),y,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=Ue.forwardRef(a);return l[I2]=r,l}function B2({layoutId:t}){const e=Ue.useContext(pS).id;return e&&t!==void 0?e+"-"+t:t}function z2(t,e){Ue.useContext(_S).strict}function V2(t){const{drag:e,layout:n}=ho;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const H2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hm(t){return typeof t!="string"||t.includes("-")?!1:!!(H2.indexOf(t)>-1||/[A-Z]/u.test(t))}function i0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function dm(t,e,n,i){if(typeof e=="function"){const[r,s]=i0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=i0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Nd=t=>Array.isArray(t),G2=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),W2=t=>Nd(t)?t[t.length-1]||0:t,Kt=t=>!!(t&&t.getVelocity);function fu(t){const e=Kt(t)?t.get():t;return G2(e)?e.toValue():e}function X2({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:j2(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const TS=t=>(e,n)=>{const i=Ue.useContext(yc),r=Ue.useContext(sm),s=()=>X2(t,e,i,r);return n?s():x2(s)};function j2(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=fu(s[h]);let{initial:o,animate:a}=t;const l=Sc(t),u=xS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!xc(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const g=dm(t,h[p]);if(g){const{transitionEnd:y,transition:m,...d}=g;for(const _ in d){let v=d[_];if(Array.isArray(v)){const S=c?v.length-1:0;v=v[S]}v!==null&&(r[_]=v)}for(const _ in y)r[_]=y[_]}}}return r}const So=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],os=new Set(So),wS=t=>e=>typeof e=="string"&&e.startsWith(t),AS=wS("--"),Y2=wS("var(--"),pm=t=>Y2(t)?$2.test(t.split("/*")[0].trim()):!1,$2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,CS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ki=(t,e,n)=>n>e?e:n<t?t:n,Mo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Da={...Mo,transform:t=>ki(0,1,t)},Wl={...Mo,default:1},Ya=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$i=Ya("deg"),ci=Ya("%"),Ne=Ya("px"),q2=Ya("vh"),K2=Ya("vw"),r0={...ci,parse:t=>ci.parse(t)/100,transform:t=>ci.transform(t*100)},Z2={borderWidth:Ne,borderTopWidth:Ne,borderRightWidth:Ne,borderBottomWidth:Ne,borderLeftWidth:Ne,borderRadius:Ne,radius:Ne,borderTopLeftRadius:Ne,borderTopRightRadius:Ne,borderBottomRightRadius:Ne,borderBottomLeftRadius:Ne,width:Ne,maxWidth:Ne,height:Ne,maxHeight:Ne,top:Ne,right:Ne,bottom:Ne,left:Ne,padding:Ne,paddingTop:Ne,paddingRight:Ne,paddingBottom:Ne,paddingLeft:Ne,margin:Ne,marginTop:Ne,marginRight:Ne,marginBottom:Ne,marginLeft:Ne,backgroundPositionX:Ne,backgroundPositionY:Ne},J2={rotate:$i,rotateX:$i,rotateY:$i,rotateZ:$i,scale:Wl,scaleX:Wl,scaleY:Wl,scaleZ:Wl,skew:$i,skewX:$i,skewY:$i,distance:Ne,translateX:Ne,translateY:Ne,translateZ:Ne,x:Ne,y:Ne,z:Ne,perspective:Ne,transformPerspective:Ne,opacity:Da,originX:r0,originY:r0,originZ:Ne},s0={...Mo,transform:Math.round},mm={...Z2,...J2,zIndex:s0,size:Ne,fillOpacity:Da,strokeOpacity:Da,numOctaves:s0},Q2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},eL=So.length;function tL(t,e,n){let i="",r=!0;for(let s=0;s<eL;s++){const o=So[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=CS(a,mm[o]);if(!l){r=!1;const c=Q2[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function gm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(os.has(l)){o=!0;continue}else if(AS(l)){r[l]=u;continue}else{const c=CS(u,mm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=tL(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const nL={offset:"stroke-dashoffset",array:"stroke-dasharray"},iL={offset:"strokeDashoffset",array:"strokeDasharray"};function rL(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?nL:iL;t[s.offset]=Ne.transform(-i);const o=Ne.transform(e),a=Ne.transform(n);t[s.array]=`${o} ${a}`}function o0(t,e,n){return typeof t=="string"?t:Ne.transform(e+n*t)}function sL(t,e,n){const i=o0(e,t.x,t.width),r=o0(n,t.y,t.height);return`${i} ${r}`}function vm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(gm(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:g}=t;h.transform&&(g&&(p.transform=h.transform),delete h.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=sL(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&rL(h,o,a,l,!1)}const _m=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),RS=()=>({..._m(),attrs:{}}),ym=t=>typeof t=="string"&&t.toLowerCase()==="svg";function PS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const bS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function LS(t,e,n,i){PS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(bS.has(r)?r:cm(r),e.attrs[r])}const Wu={};function oL(t){Object.assign(Wu,t)}function DS(t,{layout:e,layoutId:n}){return os.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Wu[t]||t==="opacity")}function xm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Kt(r[o])||e.style&&Kt(e.style[o])||DS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function IS(t,e,n){const i=xm(t,e,n);for(const r in t)if(Kt(t[r])||Kt(e[r])){const s=So.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function aL(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const a0=["x","y","width","height","cx","cy","r"],lL={useVisualState:TS({scrapeMotionValuesFromProps:IS,createRenderState:RS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(os.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<a0.length;a++){const l=a0[a];t[l]!==e[l]&&(o=!0)}o&&ft.read(()=>{aL(n,i),ft.render(()=>{vm(i,r,ym(n.tagName),t.transformTemplate),LS(n,i)})})}})},uL={useVisualState:TS({scrapeMotionValuesFromProps:xm,createRenderState:_m})};function NS(t,e,n){for(const i in e)!Kt(e[i])&&!DS(i,n)&&(t[i]=e[i])}function cL({transformTemplate:t},e){return Ue.useMemo(()=>{const n=_m();return gm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function fL(t,e){const n=t.style||{},i={};return NS(i,n,t),Object.assign(i,cL(t,e)),i}function hL(t,e){const n={},i=fL(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function dL(t,e,n,i){const r=Ue.useMemo(()=>{const s=RS();return vm(s,e,ym(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};NS(s,t.style,t),r.style={...s,...r.style}}return r}function pL(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(hm(n)?dL:hL)(i,s,o,n),u=P2(i,typeof n=="string",t),c=n!==Ue.Fragment?{...u,...l,ref:r}:{},{children:f}=i,h=Ue.useMemo(()=>Kt(f)?f.get():f,[f]);return Ue.createElement(n,{...c,children:h})}}function mL(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...hm(i)?lL:uL,preloadedFeatures:t,useRender:pL(r),createVisualElement:e,Component:i};return k2(o)}}function US(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Mc(t,e,n){const i=t.getProps();return dm(i,e,n!==void 0?n:i.custom,t)}const gL=am(()=>window.ScrollTimeline!==void 0);class vL{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(gL()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class _L extends vL{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Sm(t,e){return t?t[e]||t.default||t:void 0}const Ud=2e4;function FS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ud;)e+=n,i=t.next(e);return e>=Ud?1/0:e}function Mm(t){return typeof t=="function"}function l0(t,e){t.timeline=e,t.onfinish=null}const Em=t=>Array.isArray(t)&&typeof t[0]=="number",yL={linearEasing:void 0};function xL(t,e){const n=am(t);return()=>{var i;return(i=yL[e])!==null&&i!==void 0?i:n()}}const Xu=xL(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),OS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(fo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function kS(t){return!!(typeof t=="function"&&Xu()||!t||typeof t=="string"&&(t in Fd||Xu())||Em(t)||Array.isArray(t)&&t.every(kS))}const Wo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Fd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wo([0,.65,.55,1]),circOut:Wo([.55,0,1,.45]),backIn:Wo([.31,.01,.66,-.59]),backOut:Wo([.33,1.53,.69,.99])};function BS(t,e){if(t)return typeof t=="function"&&Xu()?OS(t,e):Em(t)?Wo(t):Array.isArray(t)?t.map(n=>BS(n,e)||Fd.easeOut):Fd[t]}const Yn={x:!1,y:!1};function zS(){return Yn.x||Yn.y}function SL(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function VS(t,e){const n=SL(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function u0(t){return e=>{e.pointerType==="touch"||zS()||t(e)}}function ML(t,e,n={}){const[i,r,s]=VS(t,n),o=u0(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=u0(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const HS=(t,e)=>e?t===e?!0:HS(t,e.parentElement):!1,Tm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,EL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TL(t){return EL.has(t.tagName)||t.tabIndex!==-1}const Xo=new WeakSet;function c0(t){return e=>{e.key==="Enter"&&t(e)}}function Of(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const wL=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=c0(()=>{if(Xo.has(n))return;Of(n,"down");const r=c0(()=>{Of(n,"up")}),s=()=>Of(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function f0(t){return Tm(t)&&!zS()}function AL(t,e,n={}){const[i,r,s]=VS(t,n),o=a=>{const l=a.currentTarget;if(!f0(a)||Xo.has(l))return;Xo.add(l);const u=e(a),c=(p,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!f0(p)||!Xo.has(l))&&(Xo.delete(l),typeof u=="function"&&u(p,{success:g}))},f=p=>{c(p,n.useGlobalTarget||HS(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!TL(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>wL(u,r),r)}),s}function CL(t){return t==="x"||t==="y"?Yn[t]?null:(Yn[t]=!0,()=>{Yn[t]=!1}):Yn.x||Yn.y?null:(Yn.x=Yn.y=!0,()=>{Yn.x=Yn.y=!1})}const GS=new Set(["width","height","top","left","right","bottom",...So]);let hu;function RL(){hu=void 0}const fi={now:()=>(hu===void 0&&fi.set(Bt.isProcessing||E2.useManualTiming?Bt.timestamp:performance.now()),hu),set:t=>{hu=t,queueMicrotask(RL)}};function wm(t,e){t.indexOf(e)===-1&&t.push(e)}function Am(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Cm{constructor(){this.subscriptions=[]}add(e){return wm(this.subscriptions,e),()=>Am(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function WS(t,e){return e?t*(1e3/e):0}const h0=30,PL=t=>!isNaN(parseFloat(t));class bL{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=fi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=fi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=PL(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Cm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ft.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=fi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>h0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,h0);return WS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ia(t,e){return new bL(t,e)}function LL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ia(n))}function DL(t,e){const n=Mc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=W2(s[o]);LL(t,o,a)}}function IL(t){return!!(Kt(t)&&t.add)}function Od(t,e){const n=t.getValue("willChange");if(IL(n))return n.add(e)}function XS(t){return t.props[SS]}const jS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,NL=1e-7,UL=12;function FL(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=jS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>NL&&++a<UL);return o}function $a(t,e,n,i){if(t===e&&n===i)return wn;const r=s=>FL(s,0,1,t,n);return s=>s===0||s===1?s:jS(r(s),e,i)}const YS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,$S=t=>e=>1-t(1-e),qS=$a(.33,1.53,.69,.99),Rm=$S(qS),KS=YS(Rm),ZS=t=>(t*=2)<1?.5*Rm(t):.5*(2-Math.pow(2,-10*(t-1))),Pm=t=>1-Math.sin(Math.acos(t)),JS=$S(Pm),QS=YS(Pm),eM=t=>/^0[^.\s]+$/u.test(t);function OL(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||eM(t):!0}const oa=t=>Math.round(t*1e5)/1e5,bm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function kL(t){return t==null}const BL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lm=(t,e)=>n=>!!(typeof n=="string"&&BL.test(n)&&n.startsWith(t)||e&&!kL(n)&&Object.prototype.hasOwnProperty.call(n,e)),tM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(bm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},zL=t=>ki(0,255,t),kf={...Mo,transform:t=>Math.round(zL(t))},jr={test:Lm("rgb","red"),parse:tM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+kf.transform(t)+", "+kf.transform(e)+", "+kf.transform(n)+", "+oa(Da.transform(i))+")"};function VL(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const kd={test:Lm("#"),parse:VL,transform:jr.transform},ks={test:Lm("hsl","hue"),parse:tM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ci.transform(oa(e))+", "+ci.transform(oa(n))+", "+oa(Da.transform(i))+")"},Yt={test:t=>jr.test(t)||kd.test(t)||ks.test(t),parse:t=>jr.test(t)?jr.parse(t):ks.test(t)?ks.parse(t):kd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?jr.transform(t):ks.transform(t)},HL=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function GL(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(bm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(HL))===null||n===void 0?void 0:n.length)||0)>0}const nM="number",iM="color",WL="var",XL="var(",d0="${}",jL=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Na(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(jL,l=>(Yt.test(l)?(i.color.push(s),r.push(iM),n.push(Yt.parse(l))):l.startsWith(XL)?(i.var.push(s),r.push(WL),n.push(l)):(i.number.push(s),r.push(nM),n.push(parseFloat(l))),++s,d0)).split(d0);return{values:n,split:a,indexes:i,types:r}}function rM(t){return Na(t).values}function sM(t){const{split:e,types:n}=Na(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===nM?s+=oa(r[o]):a===iM?s+=Yt.transform(r[o]):s+=r[o]}return s}}const YL=t=>typeof t=="number"?0:t;function $L(t){const e=rM(t);return sM(t)(e.map(YL))}const _r={test:GL,parse:rM,createTransformer:sM,getAnimatableNone:$L},qL=new Set(["brightness","contrast","saturate","opacity"]);function KL(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(bm)||[];if(!i)return t;const r=n.replace(i,"");let s=qL.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const ZL=/\b([a-z-]*)\(.*?\)/gu,Bd={..._r,getAnimatableNone:t=>{const e=t.match(ZL);return e?e.map(KL).join(" "):t}},JL={...mm,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:Bd,WebkitFilter:Bd},Dm=t=>JL[t];function oM(t,e){let n=Dm(t);return n!==Bd&&(n=_r),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const QL=new Set(["auto","none","0"]);function eD(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!QL.has(s)&&Na(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=oM(n,r)}const p0=t=>t===Mo||t===Ne,m0=(t,e)=>parseFloat(t.split(", ")[e]),g0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return m0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?m0(s[1],t):0}},tD=new Set(["x","y","z"]),nD=So.filter(t=>!tD.has(t));function iD(t){const e=[];return nD.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const po={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:g0(4,13),y:g0(5,14)};po.translateX=po.x;po.translateY=po.y;const qr=new Set;let zd=!1,Vd=!1;function aM(){if(Vd){const t=Array.from(qr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=iD(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Vd=!1,zd=!1,qr.forEach(t=>t.complete()),qr.clear()}function lM(){qr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Vd=!0)})}function rD(){lM(),aM()}class Im{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(qr.add(this),zd||(zd=!0,ft.read(lM),ft.resolveKeyframes(aM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),qr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,qr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const uM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),sD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oD(t){const e=sD.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function cM(t,e,n=1){const[i,r]=oD(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return uM(o)?parseFloat(o):o}return pm(r)?cM(r,e,n+1):r}const fM=t=>e=>e.test(t),aD={test:t=>t==="auto",parse:t=>t},hM=[Mo,Ne,ci,$i,K2,q2,aD],v0=t=>hM.find(fM(t));class dM extends Im{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),pm(u))){const c=cM(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!GS.has(i)||e.length!==2)return;const[r,s]=e,o=v0(r),a=v0(s);if(o!==a)if(p0(o)&&p0(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)OL(e[r])&&i.push(r);i.length&&eD(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=po[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=po[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const _0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(_r.test(t)||t==="0")&&!t.startsWith("url("));function lD(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function uD(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=_0(r,e),a=_0(s,e);return!o||!a?!1:lD(t)||(n==="spring"||Mm(n))&&i}const cD=t=>t!==null;function Ec(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(cD),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const fD=40;class pM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=fi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>fD?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&rD(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=fi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!uD(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Ec(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const gt=(t,e,n)=>t+(e-t)*n;function Bf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function hD({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Bf(l,a,t+1/3),s=Bf(l,a,t),o=Bf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function ju(t,e){return n=>n>0?e:t}const zf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},dD=[kd,jr,ks],pD=t=>dD.find(e=>e.test(t));function y0(t){const e=pD(t);if(!e)return!1;let n=e.parse(t);return e===ks&&(n=hD(n)),n}const x0=(t,e)=>{const n=y0(t),i=y0(e);if(!n||!i)return ju(t,e);const r={...n};return s=>(r.red=zf(n.red,i.red,s),r.green=zf(n.green,i.green,s),r.blue=zf(n.blue,i.blue,s),r.alpha=gt(n.alpha,i.alpha,s),jr.transform(r))},mD=(t,e)=>n=>e(t(n)),qa=(...t)=>t.reduce(mD),Hd=new Set(["none","hidden"]);function gD(t,e){return Hd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function vD(t,e){return n=>gt(t,e,n)}function Nm(t){return typeof t=="number"?vD:typeof t=="string"?pm(t)?ju:Yt.test(t)?x0:xD:Array.isArray(t)?mM:typeof t=="object"?Yt.test(t)?x0:_D:ju}function mM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Nm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function _D(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Nm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function yD(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const xD=(t,e)=>{const n=_r.createTransformer(e),i=Na(t),r=Na(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Hd.has(t)&&!r.values.length||Hd.has(e)&&!i.values.length?gD(t,e):qa(mM(yD(i,r),r.values),n):ju(t,e)};function gM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?gt(t,e,n):Nm(t)(t,e)}const SD=5;function vM(t,e,n){const i=Math.max(e-SD,0);return WS(n-t(i),e-i)}const xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vf=.001;function MD({duration:t=xt.duration,bounce:e=xt.bounce,velocity:n=xt.velocity,mass:i=xt.mass}){let r,s,o=1-e;o=ki(xt.minDamping,xt.maxDamping,o),t=ki(xt.minDuration,xt.maxDuration,bi(t)),o<1?(r=u=>{const c=u*o,f=c*t,h=c-n,p=Gd(u,o),g=Math.exp(-f);return Vf-h/p*g},s=u=>{const f=u*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,g=Math.exp(-f),y=Gd(Math.pow(u,2),o);return(-r(u)+Vf>0?-1:1)*((h-p)*g)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-Vf+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=TD(r,s,a);if(t=Pi(t),isNaN(l))return{stiffness:xt.stiffness,damping:xt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const ED=12;function TD(t,e,n){let i=n;for(let r=1;r<ED;r++)i=i-t(i)/e(i);return i}function Gd(t,e){return t*Math.sqrt(1-e*e)}const wD=["duration","bounce"],AD=["stiffness","damping","mass"];function S0(t,e){return e.some(n=>t[n]!==void 0)}function CD(t){let e={velocity:xt.velocity,stiffness:xt.stiffness,damping:xt.damping,mass:xt.mass,isResolvedFromDuration:!1,...t};if(!S0(t,AD)&&S0(t,wD))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*ki(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:xt.mass,stiffness:r,damping:s}}else{const n=MD(t);e={...e,...n,mass:xt.mass},e.isResolvedFromDuration=!0}return e}function _M(t=xt.visualDuration,e=xt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=CD({...n,velocity:-bi(n.velocity||0)}),g=h||0,y=u/(2*Math.sqrt(l*c)),m=o-s,d=bi(Math.sqrt(l/c)),_=Math.abs(m)<5;i||(i=_?xt.restSpeed.granular:xt.restSpeed.default),r||(r=_?xt.restDelta.granular:xt.restDelta.default);let v;if(y<1){const b=Gd(d,y);v=A=>{const w=Math.exp(-y*d*A);return o-w*((g+y*d*m)/b*Math.sin(b*A)+m*Math.cos(b*A))}}else if(y===1)v=b=>o-Math.exp(-d*b)*(m+(g+d*m)*b);else{const b=d*Math.sqrt(y*y-1);v=A=>{const w=Math.exp(-y*d*A),P=Math.min(b*A,300);return o-w*((g+y*d*m)*Math.sinh(P)+b*m*Math.cosh(P))/b}}const S={calculatedDuration:p&&f||null,next:b=>{const A=v(b);if(p)a.done=b>=f;else{let w=0;y<1&&(w=b===0?Pi(g):vM(v,b,A));const P=Math.abs(w)<=i,H=Math.abs(o-A)<=r;a.done=P&&H}return a.value=a.done?o:A,a},toString:()=>{const b=Math.min(FS(S),Ud),A=OS(w=>S.next(b*w).value,b,30);return b+"ms "+A}};return S}function M0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],h={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,g=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=f+y,d=o===void 0?m:o(m);d!==m&&(y=d-f);const _=P=>-y*Math.exp(-P/i),v=P=>d+_(P),S=P=>{const H=_(P),x=v(P);h.done=Math.abs(H)<=u,h.value=h.done?d:x};let b,A;const w=P=>{p(h.value)&&(b=P,A=_M({keyframes:[h.value,g(h.value)],velocity:vM(v,P,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return w(0),{calculatedDuration:null,next:P=>{let H=!1;return!A&&b===void 0&&(H=!0,S(P),w(P)),b!==void 0&&P>=b?A.next(P-b):(!H&&S(P),h)}}}const RD=$a(.42,0,1,1),PD=$a(0,0,.58,1),yM=$a(.42,0,.58,1),bD=t=>Array.isArray(t)&&typeof t[0]!="number",LD={linear:wn,easeIn:RD,easeInOut:yM,easeOut:PD,circIn:Pm,circInOut:QS,circOut:JS,backIn:Rm,backInOut:KS,backOut:qS,anticipate:ZS},E0=t=>{if(Em(t)){gS(t.length===4);const[e,n,i,r]=t;return $a(e,n,i,r)}else if(typeof t=="string")return LD[t];return t};function DD(t,e,n){const i=[],r=n||gM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||wn:e;a=qa(l,a)}i.push(a)}return i}function ID(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(gS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=DD(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const h=fo(t[f],t[f+1],c);return a[f](h)};return n?c=>u(ki(t[0],t[s-1],c)):u}function ND(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fo(0,e,i);t.push(gt(n,1,r))}}function UD(t){const e=[0];return ND(e,t.length-1),e}function FD(t,e){return t.map(n=>n*e)}function OD(t,e){return t.map(()=>e||yM).splice(0,t.length-1)}function Yu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=bD(i)?i.map(E0):E0(i),s={done:!1,value:e[0]},o=FD(n&&n.length===e.length?n:UD(e),t),a=ID(o,e,{ease:Array.isArray(r)?r:OD(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const kD=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ft.update(e,!0),stop:()=>vr(e),now:()=>Bt.isProcessing?Bt.timestamp:fi.now()}},BD={decay:M0,inertia:M0,tween:Yu,keyframes:Yu,spring:_M},zD=t=>t/100;class Um extends pM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Im,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Mm(n)?n:BD[n]||Yu;let l,u;a!==Yu&&typeof e[0]!="number"&&(l=qa(zD,gM(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=FS(c));const{calculatedDuration:f}=c,h=f+r,p=h*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:g,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const d=this.currentTime-h*(this.speed>=0?1:-1),_=this.speed>=0?d<0:d>c;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,S=s;if(p){const P=Math.min(this.currentTime,c)/f;let H=Math.floor(P),x=P%1;!x&&P>=1&&(x=1),x===1&&H--,H=Math.min(H,p+1),!!(H%2)&&(g==="reverse"?(x=1-x,y&&(x-=y/f)):g==="mirror"&&(S=o)),v=ki(0,1,x)*f}const b=_?{done:!1,value:l[0]}:S.next(v);a&&(b.value=a(b.value));let{done:A}=b;!_&&u!==null&&(A=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return w&&r!==void 0&&(b.value=Ec(l,this.options,r)),m&&m(b.value),w&&this.finish(),b}get duration(){const{resolved:e}=this;return e?bi(e.calculatedDuration):0}get time(){return bi(this.currentTime)}set time(e){e=Pi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=bi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=kD,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const VD=new Set(["opacity","clipPath","filter","transform"]);function HD(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=BS(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const GD=am(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$u=10,WD=2e4;function XD(t){return Mm(t.type)||t.type==="spring"||!kS(t.ease)}function jD(t,e){const n=new Um({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<WD;)i=n.sample(s),r.push(i.value),s+=$u;return{times:void 0,keyframes:r,duration:s-$u,ease:"linear"}}const xM={anticipate:ZS,backInOut:KS,circInOut:QS};function YD(t){return t in xM}class T0 extends pM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new dM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Xu()&&YD(s)&&(s=xM[s]),XD(this.options)){const{onComplete:f,onUpdate:h,motionValue:p,element:g,...y}=this.options,m=jD(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const c=HD(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(l0(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(Ec(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return bi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return bi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Pi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return wn;const{animation:i}=n;l0(i,e)}return wn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:h,...p}=this.options,g=new Um({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Pi(this.time);u.setWithVelocity(g.sample(y-$u).value,g.sample(y).value,$u)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return GD()&&i&&VD.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const $D={type:"spring",stiffness:500,damping:25,restSpeed:10},qD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),KD={type:"keyframes",duration:.8},ZD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},JD=(t,{keyframes:e})=>e.length>2?KD:os.has(t)?t.startsWith("scale")?qD(e[1]):$D:ZD;function QD({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Fm=(t,e,n,i={},r,s)=>o=>{const a=Sm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Pi(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};QD(a)||(c={...c,...JD(t,c)}),c.duration&&(c.duration=Pi(c.duration)),c.repeatDelay&&(c.repeatDelay=Pi(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const h=Ec(c.keyframes,a);if(h!==void 0)return ft.update(()=>{c.onUpdate(h),c.onComplete()}),new _L([])}return!s&&T0.supports(c)?new T0(c):new Um(c)};function e3({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function SM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const h=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&e3(c,f))continue;const g={delay:n,...Sm(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const d=XS(t);if(d){const _=window.MotionHandoffAnimation(d,f,ft);_!==null&&(g.startTime=_,y=!0)}}Od(t,f),h.start(Fm(f,h,p,t.shouldReduceMotion&&GS.has(f)?{type:!1}:g,t,y));const m=h.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{ft.update(()=>{a&&DL(t,a)})}),u}function Wd(t,e,n={}){var i;const r=Mc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(SM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=s;return t3(t,e,c+u,f,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function t3(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(n3).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Wd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function n3(t,e){return t.sortNodePosition(e)}function i3(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Wd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Wd(t,e,n);else{const r=typeof e=="function"?Mc(t,e,n.custom):e;i=Promise.all(SM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const r3=um.length;function MM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?MM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<r3;n++){const i=um[n],r=t.props[i];(La(r)||r===!1)&&(e[i]=r)}return e}const s3=[...lm].reverse(),o3=lm.length;function a3(t){return e=>Promise.all(e.map(({animation:n,options:i})=>i3(t,n,i)))}function l3(t){let e=a3(t),n=w0(),i=!0;const r=l=>(u,c)=>{var f;const h=Mc(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:p,transitionEnd:g,...y}=h;u={...u,...y,...g}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=MM(t.parent)||{},f=[],h=new Set;let p={},g=1/0;for(let m=0;m<o3;m++){const d=s3[m],_=n[d],v=u[d]!==void 0?u[d]:c[d],S=La(v),b=d===l?_.isActive:null;b===!1&&(g=m);let A=v===c[d]&&v!==u[d]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),_.protectedKeys={...p},!_.isActive&&b===null||!v&&!_.prevProp||xc(v)||typeof v=="boolean")continue;const w=u3(_.prevProp,v);let P=w||d===l&&_.isActive&&!A&&S||m>g&&S,H=!1;const x=Array.isArray(v)?v:[v];let E=x.reduce(r(d),{});b===!1&&(E={});const{prevResolvedValues:k={}}=_,O={...k,...E},G=X=>{P=!0,h.has(X)&&(H=!0,h.delete(X)),_.needsAnimating[X]=!0;const L=t.getValue(X);L&&(L.liveStyle=!1)};for(const X in O){const L=E[X],Y=k[X];if(p.hasOwnProperty(X))continue;let q=!1;Nd(L)&&Nd(Y)?q=!US(L,Y):q=L!==Y,q?L!=null?G(X):h.add(X):L!==void 0&&h.has(X)?G(X):_.protectedKeys[X]=!0}_.prevProp=v,_.prevResolvedValues=E,_.isActive&&(p={...p,...E}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(A&&w)||H)&&f.push(...x.map(X=>({animation:X,options:{type:d}})))}if(h.size){const m={};h.forEach(d=>{const _=t.getBaseTarget(d),v=t.getValue(d);v&&(v.liveStyle=!0),m[d]=_??null}),f.push({animation:m})}let y=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=w0(),i=!0}}}function u3(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!US(e,t):!1}function Lr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function w0(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class Er{constructor(e){this.isMounted=!1,this.node=e}update(){}}class c3 extends Er{constructor(e){super(e),e.animationState||(e.animationState=l3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let f3=0;class h3 extends Er{constructor(){super(...arguments),this.id=f3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const d3={animation:{Feature:c3},exit:{Feature:h3}};function Ua(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ka(t){return{point:{x:t.pageX,y:t.pageY}}}const p3=t=>e=>Tm(e)&&t(e,Ka(e));function aa(t,e,n,i){return Ua(t,e,p3(n),i)}const A0=(t,e)=>Math.abs(t-e);function m3(t,e){const n=A0(t.x,e.x),i=A0(t.y,e.y);return Math.sqrt(n**2+i**2)}class EM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Gf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=m3(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:g}=f,{timestamp:y}=Bt;this.history.push({...g,timestamp:y});const{onStart:m,onMove:d}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),d&&d(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Hf(h,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Gf(f.type==="pointercancel"?this.lastMoveEventInfo:Hf(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),g&&g(f,m)},!Tm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ka(e),a=Hf(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Bt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Gf(a,this.history)),this.removeListeners=qa(aa(this.contextWindow,"pointermove",this.handlePointerMove),aa(this.contextWindow,"pointerup",this.handlePointerUp),aa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),vr(this.updatePoint)}}function Hf(t,e){return e?{point:e(t.point)}:t}function C0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Gf({point:t},e){return{point:t,delta:C0(t,TM(e)),offset:C0(t,g3(e)),velocity:v3(e,.1)}}function g3(t){return t[0]}function TM(t){return t[t.length-1]}function v3(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=TM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Pi(e)));)n--;if(!i)return{x:0,y:0};const s=bi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const wM=1e-4,_3=1-wM,y3=1+wM,AM=.01,x3=0-AM,S3=0+AM;function Cn(t){return t.max-t.min}function M3(t,e,n){return Math.abs(t-e)<=n}function R0(t,e,n,i=.5){t.origin=i,t.originPoint=gt(e.min,e.max,t.origin),t.scale=Cn(n)/Cn(e),t.translate=gt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=_3&&t.scale<=y3||isNaN(t.scale))&&(t.scale=1),(t.translate>=x3&&t.translate<=S3||isNaN(t.translate))&&(t.translate=0)}function la(t,e,n,i){R0(t.x,e.x,n.x,i?i.originX:void 0),R0(t.y,e.y,n.y,i?i.originY:void 0)}function P0(t,e,n){t.min=n.min+e.min,t.max=t.min+Cn(e)}function E3(t,e,n){P0(t.x,e.x,n.x),P0(t.y,e.y,n.y)}function b0(t,e,n){t.min=e.min-n.min,t.max=t.min+Cn(e)}function ua(t,e,n){b0(t.x,e.x,n.x),b0(t.y,e.y,n.y)}function T3(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?gt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?gt(n,t,i.max):Math.min(t,n)),t}function L0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function w3(t,{top:e,left:n,bottom:i,right:r}){return{x:L0(t.x,n,r),y:L0(t.y,e,i)}}function D0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function A3(t,e){return{x:D0(t.x,e.x),y:D0(t.y,e.y)}}function C3(t,e){let n=.5;const i=Cn(t),r=Cn(e);return r>i?n=fo(e.min,e.max-i,t.min):i>r&&(n=fo(t.min,t.max-r,e.min)),ki(0,1,n)}function R3(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Xd=.35;function P3(t=Xd){return t===!1?t=0:t===!0&&(t=Xd),{x:I0(t,"left","right"),y:I0(t,"top","bottom")}}function I0(t,e,n){return{min:N0(t,e),max:N0(t,n)}}function N0(t,e){return typeof t=="number"?t:t[e]||0}const U0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Bs=()=>({x:U0(),y:U0()}),F0=()=>({min:0,max:0}),Et=()=>({x:F0(),y:F0()});function In(t){return[t("x"),t("y")]}function CM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function b3({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function L3(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Wf(t){return t===void 0||t===1}function jd({scale:t,scaleX:e,scaleY:n}){return!Wf(t)||!Wf(e)||!Wf(n)}function Fr(t){return jd(t)||RM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function RM(t){return O0(t.x)||O0(t.y)}function O0(t){return t&&t!=="0%"}function qu(t,e,n){const i=t-n,r=e*i;return n+r}function k0(t,e,n,i,r){return r!==void 0&&(t=qu(t,r,i)),qu(t,n,i)+e}function Yd(t,e=0,n=1,i,r){t.min=k0(t.min,e,n,i,r),t.max=k0(t.max,e,n,i,r)}function PM(t,{x:e,y:n}){Yd(t.x,e.translate,e.scale,e.originPoint),Yd(t.y,n.translate,n.scale,n.originPoint)}const B0=.999999999999,z0=1.0000000000001;function D3(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Vs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,PM(t,o)),i&&Fr(s.latestValues)&&Vs(t,s.latestValues))}e.x<z0&&e.x>B0&&(e.x=1),e.y<z0&&e.y>B0&&(e.y=1)}function zs(t,e){t.min=t.min+e,t.max=t.max+e}function V0(t,e,n,i,r=.5){const s=gt(t.min,t.max,r);Yd(t,e,n,s,i)}function Vs(t,e){V0(t.x,e.x,e.scaleX,e.scale,e.originX),V0(t.y,e.y,e.scaleY,e.scale,e.originY)}function bM(t,e){return CM(L3(t.getBoundingClientRect(),e))}function I3(t,e,n){const i=bM(t,n),{scroll:r}=e;return r&&(zs(i.x,r.offset.x),zs(i.y,r.offset.y)),i}const LM=({current:t})=>t?t.ownerDocument.defaultView:null,N3=new WeakMap;class U3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Et(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ka(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:g}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CL(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),In(m=>{let d=this.getAxisMotionValue(m).get()||0;if(ci.test(d)){const{projection:_}=this.visualElement;if(_&&_.layout){const v=_.layout.layoutBox[m];v&&(d=Cn(v)*(parseFloat(d)/100))}}this.originPoint[m]=d}),g&&ft.postRender(()=>g(c,f)),Od(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:g,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=F3(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>In(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new EM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:LM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ft.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Xl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=T3(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Os(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=w3(r.layoutBox,n):this.constraints=!1,this.elastic=P3(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&In(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=R3(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Os(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=I3(i,r.root,this.visualElement.getTransformPagePoint());let o=A3(r.layout.layoutBox,s);if(n){const a=n(b3(o));this.hasMutatedConstraints=!!a,a&&(o=CM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=In(c=>{if(!Xl(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Od(this.visualElement,e),i.start(Fm(e,i,0,n,this.visualElement,!1))}stopAnimation(){In(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){In(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){In(n=>{const{drag:i}=this.getProps();if(!Xl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-gt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Os(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};In(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=C3({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),In(o=>{if(!Xl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(gt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;N3.set(this.visualElement,this);const e=this.visualElement.current,n=aa(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Os(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ft.read(i);const o=Ua(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(In(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Xd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Xl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function F3(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class O3 extends Er{constructor(e){super(e),this.removeGroupControls=wn,this.removeListeners=wn,this.controls=new U3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||wn}unmount(){this.removeGroupControls(),this.removeListeners()}}const H0=t=>(e,n)=>{t&&ft.postRender(()=>t(e,n))};class k3 extends Er{constructor(){super(...arguments),this.removePointerDownListener=wn}onPointerDown(e){this.session=new EM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:LM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:H0(e),onStart:H0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ft.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=aa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const du={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function G0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Oo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ne.test(t))t=parseFloat(t);else return t;const n=G0(t,e.target.x),i=G0(t,e.target.y);return`${n}% ${i}%`}},B3={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=_r.parse(t);if(r.length>5)return i;const s=_r.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=gt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class z3 extends Ue.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;oL(V3),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),du.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ft.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),fm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function DM(t){const[e,n]=S2(),i=Ue.useContext(pS);return te.jsx(z3,{...t,layoutGroup:i,switchLayoutGroup:Ue.useContext(MS),isPresent:e,safeToRemove:n})}const V3={borderRadius:{...Oo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Oo,borderTopRightRadius:Oo,borderBottomLeftRadius:Oo,borderBottomRightRadius:Oo,boxShadow:B3};function H3(t,e,n){const i=Kt(t)?t:Ia(t);return i.start(Fm("",i,e,n)),i.animation}function G3(t){return t instanceof SVGElement&&t.tagName!=="svg"}const W3=(t,e)=>t.depth-e.depth;class X3{constructor(){this.children=[],this.isDirty=!1}add(e){wm(this.children,e),this.isDirty=!0}remove(e){Am(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(W3),this.isDirty=!1,this.children.forEach(e)}}function j3(t,e){const n=fi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(vr(i),t(s-e))};return ft.read(i,!0),()=>vr(i)}const IM=["TopLeft","TopRight","BottomLeft","BottomRight"],Y3=IM.length,W0=t=>typeof t=="string"?parseFloat(t):t,X0=t=>typeof t=="number"||Ne.test(t);function $3(t,e,n,i,r,s){r?(t.opacity=gt(0,n.opacity!==void 0?n.opacity:1,q3(i)),t.opacityExit=gt(e.opacity!==void 0?e.opacity:1,0,K3(i))):s&&(t.opacity=gt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Y3;o++){const a=`border${IM[o]}Radius`;let l=j0(e,a),u=j0(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||X0(l)===X0(u)?(t[a]=Math.max(gt(W0(l),W0(u),i),0),(ci.test(u)||ci.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=gt(e.rotate||0,n.rotate||0,i))}function j0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const q3=NM(0,.5,JS),K3=NM(.5,.95,wn);function NM(t,e,n){return i=>i<t?0:i>e?1:n(fo(t,e,i))}function Y0(t,e){t.min=e.min,t.max=e.max}function Dn(t,e){Y0(t.x,e.x),Y0(t.y,e.y)}function $0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function q0(t,e,n,i,r){return t-=e,t=qu(t,1/n,i),r!==void 0&&(t=qu(t,1/r,i)),t}function Z3(t,e=0,n=1,i=.5,r,s=t,o=t){if(ci.test(e)&&(e=parseFloat(e),e=gt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=gt(s.min,s.max,i);t===s&&(a-=e),t.min=q0(t.min,e,n,a,r),t.max=q0(t.max,e,n,a,r)}function K0(t,e,[n,i,r],s,o){Z3(t,e[n],e[i],e[r],e.scale,s,o)}const J3=["x","scaleX","originX"],Q3=["y","scaleY","originY"];function Z0(t,e,n,i){K0(t.x,e,J3,n?n.x:void 0,i?i.x:void 0),K0(t.y,e,Q3,n?n.y:void 0,i?i.y:void 0)}function J0(t){return t.translate===0&&t.scale===1}function UM(t){return J0(t.x)&&J0(t.y)}function Q0(t,e){return t.min===e.min&&t.max===e.max}function eI(t,e){return Q0(t.x,e.x)&&Q0(t.y,e.y)}function e_(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function FM(t,e){return e_(t.x,e.x)&&e_(t.y,e.y)}function t_(t){return Cn(t.x)/Cn(t.y)}function n_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class tI{constructor(){this.members=[]}add(e){wm(this.members,e),e.scheduleRender()}remove(e){if(Am(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function nI(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:g}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Or={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},jo=typeof window<"u"&&window.MotionDebug!==void 0,Xf=["","X","Y","Z"],iI={visibility:"hidden"},i_=1e3;let rI=0;function jf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function OM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=XS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ft,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&OM(i)}function kM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=rI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,jo&&(Or.totalNodes=Or.resolvedTargetDeltas=Or.recalculatedProjection=0),this.nodes.forEach(aI),this.nodes.forEach(hI),this.nodes.forEach(dI),this.nodes.forEach(lI),jo&&window.MotionDebug.record(Or)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new X3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Cm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=G3(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=j3(h,250),du.hasAnimatedSinceResize&&(du.hasAnimatedSinceResize=!1,this.nodes.forEach(s_))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||_I,{onLayoutAnimationStart:m,onLayoutAnimationComplete:d}=c.getProps(),_=!this.targetLayout||!FM(this.targetLayout,g)||p,v=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const S={...Sm(y,"layout"),onPlay:m,onComplete:d};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else h||s_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,vr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pI),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&OM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(r_);return}this.isUpdating||this.nodes.forEach(cI),this.isUpdating=!1,this.nodes.forEach(fI),this.nodes.forEach(sI),this.nodes.forEach(oI),this.clearAllSnapshots();const a=fi.now();Bt.delta=ki(0,1e3/60,a-Bt.timestamp),Bt.timestamp=a,Bt.isProcessing=!0,Ff.update.process(Bt),Ff.preRender.process(Bt),Ff.render.process(Bt),Bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uI),this.sharedNodes.forEach(mI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!UM(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Fr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),yI(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Et();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(xI))){const{scroll:c}=this.root;c&&(zs(l.x,c.offset.x),zs(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Et();if(Dn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Dn(l,o),zs(l.x,f.offset.x),zs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Et();Dn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Vs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Fr(c.latestValues)&&Vs(l,c.latestValues)}return Fr(this.latestValues)&&Vs(l,this.latestValues),l}removeTransform(o){const a=Et();Dn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Fr(u.latestValues))continue;jd(u.latestValues)&&u.updateSnapshot();const c=Et(),f=u.measurePageBox();Dn(c,f),Z0(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Fr(this.latestValues)&&Z0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Bt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ua(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Dn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Et(),this.targetWithTransforms=Et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Dn(this.target,this.layout.layoutBox),PM(this.target,this.targetDelta)):Dn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),ua(this.relativeTargetOrigin,this.target,p.target),Dn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}jo&&Or.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||jd(this.parent.latestValues)||RM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Bt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Dn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;D3(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Et());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($0(this.prevProjectionDelta.x,this.projectionDelta.x),$0(this.prevProjectionDelta.y,this.projectionDelta.y)),la(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!n_(this.projectionDelta.x,this.prevProjectionDelta.x)||!n_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),jo&&Or.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Bs(),this.projectionDelta=Bs(),this.projectionDeltaWithTransform=Bs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Bs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Et(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,m=this.getStack(),d=!m||m.members.length<=1,_=!!(y&&!d&&this.options.crossfade===!0&&!this.path.some(vI));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const b=S/1e3;o_(f.x,o.x,b),o_(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ua(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gI(this.relativeTarget,this.relativeTargetOrigin,h,b),v&&eI(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Et()),Dn(v,this.relativeTarget)),y&&(this.animationValues=c,$3(c,u,this.latestValues,b,_,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(vr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update(()=>{du.hasAnimatedSinceResize=!0,this.currentAnimation=H3(0,i_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(i_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&BM(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Et();const f=Cn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=Cn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Dn(a,l),Vs(a,c),la(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new tI),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&jf("z",o,u,this.animationValues);for(let c=0;c<Xf.length;c++)jf(`rotate${Xf[c]}`,o,u,this.animationValues),jf(`skew${Xf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return iI;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=fu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=fu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Fr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=nI(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:p,y:g}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Wu){if(h[y]===void 0)continue;const{correct:m,applyTo:d}=Wu[y],_=u.transform==="none"?h[y]:m(h[y],f);if(d){const v=d.length;for(let S=0;S<v;S++)u[d[S]]=_}else u[y]=_}return this.options.layoutId&&(u.pointerEvents=f===this?fu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(r_),this.root.sharedNodes.clear()}}}function sI(t){t.updateLayout()}function oI(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?In(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=Cn(h);h.min=i[f].min,h.max=h.min+p}):BM(s,n.layoutBox,i)&&In(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=Cn(i[f]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Bs();la(a,i,n.layoutBox);const l=Bs();o?la(l,t.applyTransform(r,!0),n.measuredBox):la(l,i,n.layoutBox);const u=!UM(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const g=Et();ua(g,n.layoutBox,h.layoutBox);const y=Et();ua(y,i,p.layoutBox),FM(g,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function aI(t){jo&&Or.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lI(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function uI(t){t.clearSnapshot()}function r_(t){t.clearMeasurements()}function cI(t){t.isLayoutDirty=!1}function fI(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function s_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hI(t){t.resolveTargetDelta()}function dI(t){t.calcProjection()}function pI(t){t.resetSkewAndRotation()}function mI(t){t.removeLeadSnapshot()}function o_(t,e,n){t.translate=gt(e.translate,0,n),t.scale=gt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function a_(t,e,n,i){t.min=gt(e.min,n.min,i),t.max=gt(e.max,n.max,i)}function gI(t,e,n,i){a_(t.x,e.x,n.x,i),a_(t.y,e.y,n.y,i)}function vI(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const _I={duration:.45,ease:[.4,0,.1,1]},l_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),u_=l_("applewebkit/")&&!l_("chrome/")?Math.round:wn;function c_(t){t.min=u_(t.min),t.max=u_(t.max)}function yI(t){c_(t.x),c_(t.y)}function BM(t,e,n){return t==="position"||t==="preserve-aspect"&&!M3(t_(e),t_(n),.2)}function xI(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const SI=kM({attachResizeListener:(t,e)=>Ua(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yf={current:void 0},zM=kM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Yf.current){const t=new SI({});t.mount(window),t.setOptions({layoutScroll:!0}),Yf.current=t}return Yf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),MI={pan:{Feature:k3},drag:{Feature:O3,ProjectionNode:zM,MeasureLayout:DM}};function f_(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ft.postRender(()=>s(e,Ka(e)))}class EI extends Er{mount(){const{current:e}=this.node;e&&(this.unmount=ML(e,n=>(f_(this.node,n,"Start"),i=>f_(this.node,i,"End"))))}unmount(){}}class TI extends Er{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qa(Ua(this.node.current,"focus",()=>this.onFocus()),Ua(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function h_(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ft.postRender(()=>s(e,Ka(e)))}class wI extends Er{mount(){const{current:e}=this.node;e&&(this.unmount=AL(e,n=>(h_(this.node,n,"Start"),(i,{success:r})=>h_(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const $d=new WeakMap,$f=new WeakMap,AI=t=>{const e=$d.get(t.target);e&&e(t)},CI=t=>{t.forEach(AI)};function RI({root:t,...e}){const n=t||document;$f.has(n)||$f.set(n,{});const i=$f.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(CI,{root:t,...e})),i[r]}function PI(t,e,n){const i=RI(e);return $d.set(t,n),i.observe(t),()=>{$d.delete(t),i.unobserve(t)}}const bI={some:0,all:1};class LI extends Er{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:bI[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return PI(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(DI(e,n))&&this.startObserver()}unmount(){}}function DI({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const II={inView:{Feature:LI},tap:{Feature:wI},focus:{Feature:TI},hover:{Feature:EI}},NI={layout:{ProjectionNode:zM,MeasureLayout:DM}},Ku={current:null},Om={current:!1};function VM(){if(Om.current=!0,!!om)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ku.current=t.matches;t.addListener(e),e()}else Ku.current=!1}const UI=[...hM,Yt,_r],FI=t=>UI.find(fM(t)),d_=new WeakMap;function OI(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Kt(r))t.addValue(i,r);else if(Kt(s))t.addValue(i,Ia(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ia(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const p_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class kI{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Im,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=fi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ft.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Sc(n),this.isVariantNode=xS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const g=h[p];l[p]!==void 0&&Kt(g)&&g.set(l[p],!1)}}mount(e){this.current=e,d_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Om.current||VM(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ku.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){d_.delete(this.current),this.projection&&this.projection.unmount(),vr(this.notifyUpdate),vr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=os.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ft.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ho){const n=ho[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Et()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<p_.length;i++){const r=p_[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=OI(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ia(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(uM(r)||eM(r))?r=parseFloat(r):!FI(r)&&_r.test(n)&&(r=oM(e,n)),this.setBaseTarget(e,Kt(r)?r.get():r)),Kt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=dm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Kt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Cm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class HM extends kI{constructor(){super(...arguments),this.KeyframeResolver=dM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Kt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function BI(t){return window.getComputedStyle(t)}class zI extends HM{constructor(){super(...arguments),this.type="html",this.renderInstance=PS}readValueFromInstance(e,n){if(os.has(n)){const i=Dm(n);return i&&i.default||0}else{const i=BI(e),r=(AS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return bM(e,n)}build(e,n,i){gm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return xm(e,n,i)}}class VI extends HM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Et}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(os.has(n)){const i=Dm(n);return i&&i.default||0}return n=bS.has(n)?n:cm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return IS(e,n,i)}build(e,n,i){vm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){LS(e,n,i,r)}mount(e){this.isSVGTag=ym(e.tagName),super.mount(e)}}const HI=(t,e)=>hm(t)?new VI(e):new zI(e,{allowProjection:t!==Ue.Fragment}),GI=mL({...d3,...II,...MI,...NI},HI),WI=b2(GI);function XI(){!Om.current&&VM();const[t]=Ue.useState(Ku.current);return t}function dt({as:t="div",i:e=0,children:n,...i}){const r=XI(),s=WI[t];return te.jsx(s,{initial:r?!1:{opacity:0,y:26,filter:"blur(6px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,amount:.2},transition:{duration:1,ease:[.22,1,.36,1],delay:e*.09},...i,children:n})}function jI(){return te.jsxs("section",{id:"intro","data-shape":!0,children:[te.jsxs("div",{className:"col",children:[te.jsx(dt,{as:"p",i:0,className:"kick",children:Xr.role}),te.jsx(dt,{as:"h1",i:1,children:Xr.name}),te.jsx(dt,{as:"p",i:2,className:"lead",children:Xr.tagline}),te.jsxs(dt,{i:3,className:"btns",children:[te.jsx("a",{className:"btn p",href:"#projects",children:"See my projects"}),te.jsx("a",{className:"btn g",href:"#contact",children:"Get in touch"})]}),te.jsxs(dt,{i:4,className:"status",children:[te.jsx("span",{className:"dot"}),Xr.status]})]}),te.jsxs("div",{className:"hint","aria-hidden":"true",children:["Scroll to explore",te.jsx("i",{})]})]})}function YI(){return te.jsx("section",{id:"about",className:"r","data-shape":!0,children:te.jsxs("div",{className:"col",children:[te.jsx(dt,{as:"p",i:0,className:"kick",children:"About me"}),te.jsx(dt,{as:"h2",i:1,children:Hl.title}),Hl.paragraphs.map((t,e)=>te.jsx(dt,{as:"p",i:2+e,children:t},e)),te.jsx("div",{className:"facts",children:Hl.facts.map((t,e)=>te.jsxs(dt,{className:"card",i:4+e,children:[te.jsx("small",{children:t.label}),te.jsx("b",{children:t.value})]},t.label))}),te.jsx(dt,{i:7,className:"chips",children:Hl.skills.map(t=>te.jsx("span",{children:t},t))})]})})}function $I(){return te.jsx("section",{id:"experience","data-shape":!0,children:te.jsxs("div",{className:"col",children:[te.jsx(dt,{as:"p",i:0,className:"kick",children:"Experience"}),te.jsx(dt,{as:"h2",i:1,children:"Precision is a habit, not a phase."}),te.jsx(dt,{as:"p",i:2,children:"Engines don't forgive shortcuts, and neither do production apps. This is where I built that discipline."}),te.jsx("div",{className:"tl",children:g2.map((t,e)=>te.jsxs(dt,{className:"card",i:3+e,children:[te.jsx("time",{children:t.when}),te.jsxs("div",{children:[te.jsx("h3",{children:t.title}),te.jsx("p",{children:t.text})]})]},t.title))})]})})}function qI(){return te.jsx("section",{id:"projects",className:"r","data-shape":!0,children:te.jsxs("div",{className:"col",children:[te.jsx(dt,{as:"p",i:0,className:"kick",children:"Projects"}),te.jsx(dt,{as:"h2",i:1,children:"Full stack, literally."}),te.jsx(dt,{as:"p",i:2,children:"The shape on the left is the stack behind everything I ship."}),te.jsxs(dt,{i:3,className:"legend",children:[te.jsxs("span",{children:[te.jsx("i",{style:{background:"#3FD8F0"}}),"Frontend"]}),te.jsxs("span",{children:[te.jsx("i",{style:{background:"#9D6BFF"}}),"Backend"]}),te.jsxs("span",{children:[te.jsx("i",{style:{background:"#3BE38B"}}),"Data"]})]}),te.jsx("div",{className:"proj",children:v2.map((t,e)=>te.jsxs(dt,{as:"a",className:"card",href:t.href,i:4+e,children:[te.jsxs("h3",{children:[t.name," ",te.jsx("span",{children:t.type})]}),te.jsx("p",{children:t.text}),te.jsx("div",{className:"tags",children:t.tags.map(n=>te.jsx("span",{children:n},n))})]},t.name))})]})})}function KI(){return te.jsx("section",{id:"contact",className:"c","data-shape":!0,children:te.jsxs("div",{className:"col",children:[te.jsx(dt,{as:"p",i:0,className:"kick",children:"Contact"}),te.jsx(dt,{as:"h2",i:1,children:"Let's build something together."}),te.jsx(dt,{as:"p",i:2,className:"lead",children:"I'm open to junior front-end and full stack roles, and to freelance projects. Based in Selangor, happy to work remotely."}),te.jsxs(dt,{i:3,className:"btns",children:[te.jsx("a",{className:"btn p",href:`mailto:${Xr.email}`,children:"Email me"}),te.jsx("a",{className:"btn g",href:"#intro",children:"Back to top"})]}),te.jsx(dt,{i:4,className:"links",children:Xr.links.map(t=>te.jsx("a",{href:t.href,target:"_blank",rel:"noreferrer",children:t.label},t.label))})]})})}function ZI(){const[t,e]=Ue.useState(0);return te.jsxs(te.Fragment,{children:[te.jsx(m2,{onActiveChange:e}),te.jsx(y2,{active:t}),te.jsxs("main",{children:[te.jsx(jI,{}),te.jsx(YI,{}),te.jsx($I,{}),te.jsx(qI,{}),te.jsx(KI,{})]}),te.jsxs("footer",{children:["© ",new Date().getFullYear()," ",Xr.name]})]})}qf.createRoot(document.getElementById("root")).render(te.jsx(uE.StrictMode,{children:te.jsx(ZI,{})}));
