(function(_){for(var r in _){_[r].__farm_resource_pot__='index_6820.js';(globalThis || window || global)['0f6266587c3c880ed98055938bafcf5c'].__farm_module_system__.register(r,_[r])}})({"0532353b":function e(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"openDB",{enumerable:!0,get:function(){return o;}});let i=n("8064dee6");function o(e,t,{blocked:n,upgrade:r,blocking:o,terminated:d}={}){let s=indexedDB.open(e,t),a=(0,i.w)(s);return r&&s.addEventListener("upgradeneeded",e=>{r((0,i.w)(s.result),e.oldVersion,e.newVersion,(0,i.w)(s.transaction),e);}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{d&&e.addEventListener("close",()=>d()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e));}).catch(()=>{}),a;}let d=["get","getKey","getAll","getAllKeys","count"],s=["put","add","delete","clear"],a=new Map;function l(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(a.get(t))return a.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=s.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d.includes(n)))return;let o=async function(e,...t){let o=this.transaction(e,i?"readwrite":"readonly"),d=o.store;return r&&(d=d.index(t.shift())),(await Promise.all([d[n](...t),i&&o.done]))[0];};return a.set(t,o),o;}(0,i.r)(e=>({...e,get:(t,n,r)=>l(t,n)||e.get(t,n,r),has:(t,n)=>!!l(t,n)||e.has(t,n)}));},"0b683edb":function e(e,r,t,n){"use strict";function i(e){if(Array.isArray(e))return e;}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"_array_with_holes",{enumerable:!0,get:function(){return i;}});},"493f9ad4":function e(e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]});}(r,{_:function(){return u;},_sliced_to_array:function(){return u;}});let _=t("0b683edb"),i=t("bde0450c"),o=t("ceb61345"),a=t("6278d8cc");function u(e,r){return(0,_._array_with_holes)(e)||(0,i._iterable_to_array_limit)(e,r)||(0,a._unsupported_iterable_to_array)(e,r)||(0,o._non_iterable_rest)();}},"6278d8cc":function r(r,t,e,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"_unsupported_iterable_to_array",{enumerable:!0,get:function(){return o;}});let n=e("a0a1cdc3");function o(r,t){if(r){if("string"==typeof r)return(0,n._array_like_to_array)(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return(0,n._array_like_to_array)(r,t);}}},"8064dee6":function e(e,t,r,n){"use strict";let o,s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}(t,{r:function(){return v;},w:function(){return d;}});let a=(e,t)=>t.some(t=>e instanceof t),i=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,p=new WeakMap,l={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0]);}return d(e[t]);},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function v(e){l=e(l);}function d(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s);},o=()=>{t(d(e.result)),n();},s=()=>{r(e.error),n();};e.addEventListener("success",o),e.addEventListener("error",s);});return t.then(t=>{t instanceof IDBCursor&&i.set(t,e);}).catch(()=>{}),p.set(t,e),t;}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(D(this),e),d(i.get(this));}:function(...e){return d(t.apply(D(this),e));}:function(e,...r){let n=t.call(D(this),e,...r);return u.set(n,e.sort?e.sort():[e]),d(n);}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s);},o=()=>{t(),n();},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n();};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s);});c.set(e,t);}(t),a(t,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,l):t;return r!==e&&(f.set(e,r),p.set(r,e)),r;}let D=e=>p.get(e);},"a0a1cdc3":function e(e,r,t,n){"use strict";function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n;}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"_array_like_to_array",{enumerable:!0,get:function(){return u;}});},"bde0450c":function e(e,t,r,n){"use strict";function l(e,t){var r,n,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var u=[],i=!0,o=!1;try{for(l=l.call(e);!(i=(r=l.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(e){o=!0,n=e;}finally{try{i||null==l.return||l.return();}finally{if(o)throw n;}}return u;}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"_iterable_to_array_limit",{enumerable:!0,get:function(){return l;}});},"ceb61345":function e(e,t,r,n){"use strict";function o(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"_non_iterable_rest",{enumerable:!0,get:function(){return o;}});},});