!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){return e.metaKey||e.ctrlKey},p=function(e){return e.shiftKey},y={shiftKey:"shiftKey",metaKey:"metaKey"},d=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return l(r,(n=r=l(this,(e=f(t)).call.apply(e,[this].concat(u))),r.state={lastKey:null,selectedIds:new Set,shiftSelection:new Set,pivotIndex:null},r.handleSelect=function(e){return function(t){var n=r.props,o=n.ids,u=n.alwaysSelectOne,c=o.indexOf(e);p(t)?(document.getSelection().removeAllRanges(),r.setState(function(t){var n=t.lastKey,r=t.pivotIndex,u=t.selectedIds,c=t.shiftSelection,l=o.indexOf(e);if(-1===r||-1===l)return{selectedIds:new Set([e]),lastKey:y.shiftKey};var f=r-l,a=new Set(u),s=null;s=f>0?o.slice(l,r+1):o.slice(r,l+1),n===y.shiftKey&&i(c).forEach(function(e){return a.delete(e)});var p=new Set(s);return s.forEach(function(e){return a.add(e)}),{selectedIds:a,lastKey:y.shiftKey,shiftSelection:p}})):s(t)?r.setState(function(t){var n=t.selectedIds;return u&&n.size<=1&&n.has(e)?{}:n.has(e)?(n.delete(e),{pivotIndex:c,selectedIds:n,lastKey:y.metaKey}):{pivotIndex:c,selectedIds:n.add(e),lastKey:y.metaKey}}):r.setState({pivotIndex:c,selectedIds:new Set([e])})}},r.handleSelectAll=function(){var e=r.props.ids;r.setState(function(t){return t.selectedIds.size===e.length?{selectedIds:new Set}:{selectedIds:new Set(e)}})},n))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,r["Component"]),n=t,u=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.alwaysSelectOne,r=e.ids,o=t.selectedIds,u=t.pivotIndex;if(n&&r.length>0&&!r.some(function(e){return o.has(e)})){if(u>=r.length){var i=r.length-1,c=r[i];return{pivotIndex:i,selectedIds:new Set([c])}}return{pivotIndex:u,selectedIds:new Set(r.slice(u,u+1))}}return 0===r.length?{pivotIndex:null,selectedIds:new Set}:null}}],(o=[{key:"render",value:function(){var e=this.props,t=e.render,n=e.children;return(t||n)({selectedIds:i(this.state.selectedIds),onSelect:this.handleSelect,onSelectAll:this.handleSelectAll})}}])&&c(n.prototype,o),u&&c(n,u),t}();d.propTypes={ids:o.array,render:o.func,children:o.func,alwaysSelectOne:o.bool},d.defaultProps={ids:[],alwaysSelectOne:!0},t.default=d},function(e,t,n){"use strict";
/** @license React v16.8.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,u,i,c],f=0;(e=Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||S}function _(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||S}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var j=w.prototype=new _;j.constructor=w,r(j,O.prototype),j.isPureReactComponent=!0;var x={current:null},I={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var f=Array(l),a=0;a<l;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:I.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,$=[];function T(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function K(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case i:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var f=0;f<t.length;f++){var a=n+M(c=t[f],f);l+=e(c,a,r,o)}else if(a=null===t||"object"!=typeof t?null:"function"==typeof(a=b&&t[b]||t["@@iterator"])?a:null,"function"==typeof a)for(t=a.call(t),f=0;!(c=t.next()).done;)l+=e(c=c.value,a=n+M(c,f++),r,o);else"object"===c&&m("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,function(e){return e}):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),K(e,q,t=T(t,u,r,o)),A(t)}function F(){var e=x.current;return null===e&&m("307"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;K(e,U,t=T(null,null,t,n)),A(t)},count:function(e){return K(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return C(e)||m("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:c,StrictMode:l,Suspense:d,createElement:E,cloneElement:function(e,t,n){null==e&&m("267",e);var o=void 0,i=r({},e.props),c=e.key,l=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,f=I.current),void 0!==t.key&&(c=""+t.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)P.call(t,o)&&!k.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==a?a[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];i.children=a}return{$$typeof:u,type:e.type,key:c,ref:l,props:i,_owner:f}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.8.1",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentOwner:I,assign:r}},N={default:L},V=N&&L||N;e.exports=V.default||V},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(c[f]=n[f]);if(r){i=r(n);for(var a=0;a<i.length;a++)u.call(n,i[a])&&(c[i[a]]=n[i[a]])}}return c}},function(e,t,n){"use strict";var r=n(6);function o(){}e.exports=function(){function e(e,t,n,o,u,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);
//# sourceMappingURL=index.js.map