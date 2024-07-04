(function(_){for(var r in _){_[r].__farm_resource_pot__='index_9017.js';(globalThis || window || global)['0f6266587c3c880ed98055938bafcf5c'].__farm_module_system__.register(r,_[r])}})({"3e143ed6":function e(e,t,n,r){"use strict";var i,s,a,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{addDoc:function(){return so;},collection:function(){return iA;},deleteDoc:function(){return sa;},doc:function(){return iN;},getDocs:function(){return ss;},getFirestore:function(){return iR;},onSnapshot:function(){return sl;},query:function(){return i3;}});let l=n("0180eda6"),u=n("3acf3105"),h=n("2d39026f"),c=n("fd523222"),d=n("cee838e3"),f=n("1d85cae0"),m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.uid=e;}isAuthenticated(){return null!=this.uid;}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user";}isEqual(e){return e.uid===this.uid;}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="10.12.1",y=new h.Logger("@firebase/firestore");function v(){return y.logLevel;}function w(e,...t){if(y.logLevel<=h.LogLevel.DEBUG){let n=t.map(T);y.debug(`Firestore (${p}): ${e}`,...n);}}function _(e,...t){if(y.logLevel<=h.LogLevel.ERROR){let n=t.map(T);y.error(`Firestore (${p}): ${e}`,...n);}}function E(e,...t){if(y.logLevel<=h.LogLevel.WARN){let n=t.map(T);y.warn(`Firestore (${p}): ${e}`,...n);}}function T(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e);}catch(t){return e;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw _(t),Error(t);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends c.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t;});}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`);}}class b{getToken(){return Promise.resolve(null);}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED));}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null;}getToken(){return Promise.resolve(this.token);}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user));}shutdown(){this.changeListener=null;}}class k{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null;}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new A;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new A,e.enqueueRetryable(()=>r(this.currentUser));};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser);});},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s();};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new A);}},0),s();}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||I(),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null);}invalidateToken(){this.forceRefresh=!0;}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o);}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||I(),new g(e);}}class R{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.I=new Map;}T(){return this.P?this.P():null;}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I;}}class L{constructor(e,t,n){this.l=e,this.h=t,this.P=n;}getToken(){return Promise.resolve(new R(this.l,this.h,this.P));}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY));}shutdown(){}invalidateToken(){}}class x{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value);}}class M{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null;}start(e,t){let n=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,w("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve();};this.o=t=>{e.enqueueRetryable(()=>n(t));};let r=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o);};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected");}},0);}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||I(),this.R=e.token,new x(e.token)):null):Promise.resolve(null);}invalidateToken(){this.forceRefresh=!0;}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n;}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));}return n;}}function F(e,t){return e<t?-1:e>t?1:0;}function P(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]));}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);}static now(){return O.fromMillis(Date.now());}static fromDate(e){return O.fromMillis(e.getTime());}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)));}toDate(){return new Date(this.toMillis());}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6;}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds);}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds;}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")";}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds};}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0");}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e;}static fromTimestamp(e){return new U(e);}static min(){return new U(new O(0,0));}static max(){return new U(new O(253402300799,999999999));}compareTo(e){return this.timestamp._compareTo(e.timestamp);}isEqual(e){return this.timestamp.isEqual(e.timestamp);}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3;}toString(){return"SnapshotVersion("+this.timestamp.toString()+")";}toTimestamp(){return this.timestamp;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n;}get length(){return this.len;}isEqual(e){return 0===q.comparator(this,e);}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e);}):t.push(e),this.construct(t);}limit(){return this.offset+this.length;}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e);}popLast(){return this.construct(this.segments,this.offset,this.length-1);}firstSegment(){return this.segments[this.offset];}lastSegment(){return this.get(this.length-1);}get(e){return this.segments[this.offset+e];}isEmpty(){return 0===this.length;}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0;}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0;}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t]);}toArray(){return this.segments.slice(this.offset,this.limit());}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1;}return e.length<t.length?-1:e.length>t.length?1:0;}}class B extends q{construct(e,t,n){return new B(e,t,n);}canonicalString(){return this.toArray().join("/");}toString(){return this.canonicalString();}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/");}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0));}return new B(t);}static emptyPath(){return new B([]);}}let $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(e,t,n){return new z(e,t,n);}static isValidIdentifier(e){return $.test(e);}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".");}toString(){return this.canonicalString();}isKeyField(){return 1===this.length&&"__name__"===this.get(0);}static keyField(){return new z(["__name__"]);}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n="";},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2;}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++;}if(i(),s)throw new S(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t);}static emptyPath(){return new z([]);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e;}static fromPath(e){return new K(B.fromString(e));}static fromName(e){return new K(B.fromString(e).popFirst(5));}static empty(){return new K(B.emptyPath());}get collectionGroup(){return this.path.popLast().lastSegment();}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e;}getCollectionGroup(){return this.path.get(this.path.length-2);}getCollectionPath(){return this.path.popLast();}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path);}toString(){return this.path.toString();}static comparator(e,t){return B.comparator(e.path,t.path);}static isDocumentKey(e){return e.length%2==0;}static fromSegments(e){return new K(new B(e.slice()));}}class Q{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n;}static min(){return new Q(U.min(),K.empty(),-1);}static max(){return new Q(U.max(),K.empty(),-1);}}class G{constructor(){this.onCommittedListeners=[];}addOnCommittedListener(e){this.onCommittedListeners.push(e);}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e());}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e){if(e.code!==C.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;w("LocalStore","Unexpectedly lost primary lease");}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e);},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e);});}catch(e){return this.next(void 0,e);}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r);},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r);};});}toPromise(){return new Promise((e,t)=>{this.next(e,t);});}wrapUserFunction(e){try{let t=e();return t instanceof W?t:W.resolve(t);}catch(e){return W.reject(e);}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t);}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t);}static resolve(e){return new W((t,n)=>{t(e);});}static reject(e){return new W((t,n)=>{n(e);});}static waitFor(e){return new W((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t();},e=>n(e));}),s=!0,i===r&&t();});}static or(e){let t=W.resolve(!1);for(let n of e)t=t.next(e=>e?W.resolve(e):n());return t;}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r));}),this.waitFor(n);}static mapArray(e,t){return new W((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s);},e=>r(e));}});}static doWhile(e,t){return new W((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i();},r):n();};i();});}}function H(e){return"IndexedDbTransactionError"===e.name;}/**
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
 */class Y{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e));}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue;}next(){let e=++this.previousValue;return this.se&&this.se(e),e;}}function X(e){return 0===e&&1/e==-1/0;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t;}function Z(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n]);}function ee(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0;}Y.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||er.EMPTY;}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,er.BLACK,null,null));}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,er.BLACK,null,null));}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right);}return null;}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right);}return -1;}isEmpty(){return this.root.isEmpty();}get size(){return this.root.size;}minKey(){return this.root.minKey();}maxKey(){return this.root.maxKey();}inorderTraversal(e){return this.root.inorderTraversal(e);}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1));}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`;}reverseTraversal(e){return this.root.reverseTraversal(e);}getIterator(){return new en(this.root,null,this.comparator,!1);}getIteratorFrom(e){return new en(this.root,e,this.comparator,!1);}getReverseIterator(){return new en(this.root,null,this.comparator,!0);}getReverseIteratorFrom(e){return new en(this.root,e,this.comparator,!0);}}class en{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break;}this.nodeStack.push(e),e=this.isReverse?e.right:e.left;}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t;}hasNext(){return this.nodeStack.length>0;}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value};}}class er{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:er.RED,this.left=null!=r?r:er.EMPTY,this.right=null!=i?i:er.EMPTY,this.size=this.left.size+1+this.right.size;}copy(e,t,n,r,i){return new er(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right);}isEmpty(){return!1;}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e);}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e);}min(){return this.left.isEmpty()?this:this.left.min();}minKey(){return this.min().key;}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey();}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp();}removeMin(){if(this.left.isEmpty())return er.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp();}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return er.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin());}r=r.copy(null,null,null,null,r.right.remove(e,t));}return r.fixUp();}isRed(){return this.color;}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e;}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e;}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e;}rotateLeft(){let e=this.copy(null,null,er.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null);}rotateRight(){let e=this.copy(null,null,er.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e);}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t);}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1;}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1);}}er.EMPTY=null,er.RED=!0,er.BLACK=!1,er.EMPTY=new class{constructor(){this.size=0;}get key(){throw I();}get value(){throw I();}get color(){throw I();}get left(){throw I();}get right(){throw I();}copy(e,t,n,r,i){return this;}insert(e,t,n){return new er(e,t);}remove(e,t){return this;}isEmpty(){return!0;}inorderTraversal(e){return!1;}reverseTraversal(e){return!1;}minKey(){return null;}maxKey(){return null;}isRed(){return!1;}checkMaxDepth(){return!0;}check(){return 0;}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e,this.data=new et(this.comparator);}has(e){return null!==this.data.get(e);}first(){return this.data.minKey();}last(){return this.data.maxKey();}get size(){return this.data.size;}indexOf(e){return this.data.indexOf(e);}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1));}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key);}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return;}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null;}getIterator(){return new es(this.data.getIterator());}getIteratorFrom(e){return new es(this.data.getIteratorFrom(e));}add(e){return this.copy(this.data.remove(e).insert(e,!0));}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this;}isEmpty(){return this.data.isEmpty();}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e);}),t;}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1;}return!0;}toArray(){let e=[];return this.forEach(t=>{e.push(t);}),e;}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")";}copy(e){let t=new ei(this.comparator);return t.data=e,t;}}class es{constructor(e){this.iter=e;}getNext(){return this.iter.getNext().key;}hasNext(){return this.iter.hasNext();}}/**
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
 */class ea{constructor(e){this.fields=e,e.sort(z.comparator);}static empty(){return new ea([]);}unionWith(e){let t=new ei(z.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ea(t.toArray());}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1;}isEqual(e){return P(this.fields,e.fields,(e,t)=>e.isEqual(t));}}/**
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
 */class eo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError";}}/**
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
 */class el{constructor(e){this.binaryString=e;}static fromBase64String(e){return new el(function(e){try{return atob(e);}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eo("Invalid base64 string: "+e):e;}}(e));}static fromUint8Array(e){return new el(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t;}(e));}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}};}toBase64(){return btoa(this.binaryString);}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t;}(this.binaryString);}approximateByteSize(){return 2*this.binaryString.length;}compareTo(e){return F(this.binaryString,e.binaryString);}isEqual(e){return this.binaryString===e.binaryString;}}el.EMPTY_BYTE_STRING=new el("");let eu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eh(e){if(e||I(),"string"==typeof e){let t=0,n=eu.exec(e);if(n||I(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9));}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t};}return{seconds:ec(e.seconds),nanos:ec(e.nanos)};}function ec(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0;}function ed(e){return"string"==typeof e?el.fromBase64String(e):el.fromUint8Array(e);}/**
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
 */function ef(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue);}function em(e){let t=e.mapValue.fields.__previous_value__;return ef(t)?em(t):t;}function eg(e){let t=eh(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l;}}class ey{constructor(e,t){this.projectId=e,this.database=t||"(default)";}static empty(){return new ey("","");}get isDefaultDatabase(){return"(default)"===this.database;}isEqual(e){return e instanceof ey&&e.projectId===this.projectId&&e.database===this.database;}}/**
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
 */let ev={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ew(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ef(e)?4:eL(e)?9007199254740991:10:I();}function e_(e,t){if(e===t)return!0;let n=ew(e);if(n!==ew(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eg(e).isEqual(eg(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eh(e.timestampValue),r=eh(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos;}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ed(e.bytesValue).isEqual(ed(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ec(e.geoPointValue.latitude)===ec(t.geoPointValue.latitude)&&ec(e.geoPointValue.longitude)===ec(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ec(e.integerValue)===ec(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ec(e.doubleValue),r=ec(t.doubleValue);return n===r?X(n)===X(r):isNaN(n)&&isNaN(r);}return!1;}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],e_);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(J(n)!==J(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!e_(n[e],r[e])))return!1;return!0;}(e,t);default:return I();}}function eE(e,t){return void 0!==(e.values||[]).find(e=>e_(e,t));}function eT(e,t){if(e===t)return 0;let n=ew(e),r=ew(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ec(e.integerValue||e.doubleValue),r=ec(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1;}(e,t);case 3:return eI(e.timestampValue,t.timestampValue);case 4:return eI(eg(e),eg(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ed(e),r=ed(t);return n.compareTo(r);}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=F(n[e],r[e]);if(0!==t)return t;}return F(n.length,r.length);}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(ec(e.latitude),ec(t.latitude));return 0!==n?n:F(ec(e.longitude),ec(t.longitude));}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eT(n[e],r[e]);if(t)return t;}return F(n.length,r.length);}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ev.mapValue&&t===ev.mapValue)return 0;if(e===ev.mapValue)return 1;if(t===ev.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=F(r[e],s[e]);if(0!==t)return t;let a=eT(n[r[e]],i[s[e]]);if(0!==a)return a;}return F(r.length,s.length);}(e.mapValue,t.mapValue);default:throw I();}}function eI(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=eh(e),r=eh(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos);}function eC(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eh(e);return`time(${t.seconds},${t.nanos})`;}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ed(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,K.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eC(r);return t+"]";}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eC(e.fields[i])}`;return n+"}";}(e.mapValue):I();}function eS(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`};}function eA(e){return!!e&&"integerValue"in e;}function eN(e){return!!e&&"arrayValue"in e;}function eb(e){return!!e&&"nullValue"in e;}function eD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue));}function ek(e){return!!e&&"mapValue"in e;}function eR(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Z(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eR(n)),t;}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eR(e.arrayValue.values[n]);return t;}return Object.assign({},e);}function eL(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.value=e;}static empty(){return new ex({mapValue:{}});}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ek(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null;}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eR(t);}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast();}e?n[i.lastSegment()]=eR(e):r.push(i.lastSegment());});let i=this.getFieldsMap(t);this.applyChanges(i,n,r);}delete(e){let t=this.field(e.popLast());ek(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()];}isEqual(e){return e_(this.value,e.value);}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ek(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r;}return t.mapValue.fields;}applyChanges(e,t,n){for(let r of(Z(t,(t,n)=>e[t]=n),n))delete e[r];}clone(){return new ex(eR(this.value));}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a;}static newInvalidDocument(e){return new eM(e,0,U.min(),U.min(),U.min(),ex.empty(),0);}static newFoundDocument(e,t,n,r){return new eM(e,1,t,U.min(),n,r,0);}static newNoDocument(e,t){return new eM(e,2,t,U.min(),U.min(),ex.empty(),0);}static newUnknownDocument(e,t){return new eM(e,3,t,U.min(),U.min(),ex.empty(),2);}convertToFoundDocument(e,t){return this.createTime.isEqual(U.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this;}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ex.empty(),this.documentState=0,this;}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ex.empty(),this.documentState=2,this;}setHasCommittedMutations(){return this.documentState=2,this;}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this;}setReadTime(e){return this.readTime=e,this;}get hasLocalMutations(){return 1===this.documentState;}get hasCommittedMutations(){return 2===this.documentState;}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations;}isValidDocument(){return 0!==this.documentType;}isFoundDocument(){return 1===this.documentType;}isNoDocument(){return 2===this.documentType;}isUnknownDocument(){return 3===this.documentType;}isEqual(e){return e instanceof eM&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data);}mutableCopy(){return new eM(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState);}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;}}/**
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
 */class eV{constructor(e,t){this.position=e,this.inclusive=t;}}function eF(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?K.comparator(K.fromName(a.referenceValue),n.key):eT(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break;}return r;}function eP(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!e_(e.position[n],t.position[n]))return!1;return!0;}/**
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
 */class eO{constructor(e,t="asc"){this.field=e,this.dir=t;}}/**
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
 */class eU{}class eq extends eU{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n;}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eK(e,t,n):"array-contains"===t?new eW(e,n):"in"===t?new eH(e,n):"not-in"===t?new eY(e,n):"array-contains-any"===t?new eX(e,n):new eq(e,t,n);}static createKeyFieldInFilter(e,t,n){return"in"===t?new eQ(e,n):new eG(e,n);}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eT(t,this.value)):null!==t&&ew(this.value)===ew(t)&&this.matchesComparison(eT(t,this.value));}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I();}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0;}getFlattenedFilters(){return[this];}getFilters(){return[this];}}class eB extends eU{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null;}static create(e,t){return new eB(e,t);}matches(e){return e$(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e));}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae;}getFilters(){return Object.assign([],this.filters);}}function e$(e){return"and"===e.op;}function ez(e){for(let t of e.filters)if(t instanceof eB)return!1;return!0;}class eK extends eq{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue);}matches(e){let t=K.comparator(e.key,this.key);return this.matchesComparison(t);}}class eQ extends eq{constructor(e,t){super(e,"in",t),this.keys=ej("in",t);}matches(e){return this.keys.some(t=>t.isEqual(e.key));}}class eG extends eq{constructor(e,t){super(e,"not-in",t),this.keys=ej("not-in",t);}matches(e){return!this.keys.some(t=>t.isEqual(e.key));}}function ej(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>K.fromName(e.referenceValue));}class eW extends eq{constructor(e,t){super(e,"array-contains",t);}matches(e){let t=e.data.field(this.field);return eN(t)&&eE(t.arrayValue,this.value);}}class eH extends eq{constructor(e,t){super(e,"in",t);}matches(e){let t=e.data.field(this.field);return null!==t&&eE(this.value.arrayValue,t);}}class eY extends eq{constructor(e,t){super(e,"not-in",t);}matches(e){if(eE(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eE(this.value.arrayValue,t);}}class eX extends eq{constructor(e,t){super(e,"array-contains-any",t);}matches(e){let t=e.data.field(this.field);return!(!eN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eE(this.value.arrayValue,e));}}/**
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
 */class eJ{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null;}}function eZ(e,t=null,n=[],r=[],i=null,s=null,a=null){return new eJ(e,t,n,r,i,s,a);}function e0(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eq)return t.field.canonicalString()+t.op.toString()+eC(t.value);if(ez(t)&&e$(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`;}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eC(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eC(e)).join(",")),e.ue=t;}return e.ue;}function e1(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1;}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eq?n instanceof eq&&t.op===n.op&&t.field.isEqual(n.field)&&e_(t.value,n.value):t instanceof eB?n instanceof eB&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void I();}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eP(e.startAt,t.startAt)&&eP(e.endAt,t.endAt);}function e2(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt;}}function e4(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField());}function e9(e){return null!==e.collectionGroup;}function e8(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ei(z.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field));});}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eO(t,r));}),n.has(z.keyField().canonicalString())||e.ce.push(new eO(z.keyField(),r));}return e.ce;}function e6(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return eZ(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eO(e.field,t);});let n=e.endAt?new eV(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eV(e.startAt.position,e.startAt.inclusive):null;return eZ(e.path,e.collectionGroup,t,e.filters,e.limit,n,r);}}(e,e8(e))),e.le;}function e5(e,t){let n=e.filters.concat([t]);return new e3(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt);}function e7(e,t,n){return new e3(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt);}function te(e,t){return e1(e6(e),e6(t))&&e.limitType===t.limitType;}function tt(e){return`${e0(e6(e))}|lt:${e.limitType}`;}function tn(e){var t;let n;return`Query(target=${n=(t=e6(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eq?`${t.field.canonicalString()} ${t.op} ${eC(t.value)}`:t instanceof eB?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter";})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eC(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eC(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`;}function tr(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):K.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n);}(e,t)&&function(e,t){for(let n of e8(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0;}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0;}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r<=0:r<0;}(e.startAt,e8(e),t))&&(!e.endAt||!!function(e,t,n){let r=eF(e,t,n);return e.inclusive?r>=0:r>0;}(e.endAt,e8(e),t));}function ti(e){return(t,n)=>{let r=!1;for(let i of e8(e)){let e=function(e,t,n){let r=e.field.isKeyField()?K.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eT(r,i):I();}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return I();}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField();}return 0;};}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0;}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r;}}has(e){return void 0!==this.get(e);}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++;}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1;}forEach(e){Z(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r);});}isEmpty(){return ee(this.inner);}size(){return this.innerSize;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=new et(K.comparator),to=new et(K.comparator);function tl(...e){let t=to;for(let n of e)t=t.insert(n.key,n);return t;}function tu(e){let t=to;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t;}function th(){return new ts(e=>e.toString(),(e,t)=>e.isEqual(t));}let tc=new et(K.comparator),td=new ei(K.comparator);function tf(...e){let t=td;for(let n of e)t=t.add(n);return t;}let tm=new ei(F);/**
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
 */function tg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"};}return{doubleValue:X(t)?"-0":t};}function tp(e){return{integerValue:""+e};}/**
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
 */class ty{constructor(){this._=void 0;}}function tv(e,t){return e instanceof tC?eA(t)||t&&"doubleValue"in t?t:{integerValue:0}:null;}class tw extends ty{}class t_ extends ty{constructor(e){super(),this.elements=e;}}function tE(e,t){let n=tA(t);for(let t of e.elements)n.some(e=>e_(e,t))||n.push(t);return{arrayValue:{values:n}};}class tT extends ty{constructor(e){super(),this.elements=e;}}function tI(e,t){let n=tA(t);for(let t of e.elements)n=n.filter(e=>!e_(e,t));return{arrayValue:{values:n}};}class tC extends ty{constructor(e,t){super(),this.serializer=e,this.Pe=t;}}function tS(e){return ec(e.integerValue||e.doubleValue);}function tA(e){return eN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[];}class tN{constructor(e,t){this.version=e,this.transformResults=t;}}class tb{constructor(e,t){this.updateTime=e,this.exists=t;}static none(){return new tb;}static exists(e){return new tb(void 0,e);}static updateTime(e){return new tb(e);}get isNone(){return void 0===this.updateTime&&void 0===this.exists;}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime);}}function tD(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument();}class tk{}function tR(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tU(e.key,tb.none()):new tM(e.key,e.data,tb.none());{let n=e.data,r=ex.empty(),i=new ei(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e);}return new tV(e.key,r,new ea(i.toArray()),tb.none());}}function tL(e,t,n,r){return e instanceof tM?function(e,t,n,r){if(!tD(e.precondition,t))return n;let i=e.value.clone(),s=tO(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null;}(e,t,n,r):e instanceof tV?function(e,t,n,r){if(!tD(e.precondition,t))return n;let i=tO(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tF(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field));}(e,t,n,r):tD(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n;}function tx(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&P(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof t_&&r instanceof t_||n instanceof tT&&r instanceof tT?P(n.elements,r.elements,e_):n instanceof tC&&r instanceof tC?e_(n.Pe,r.Pe):n instanceof tw&&r instanceof tw);})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));}class tM extends tk{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0;}getFieldMask(){return null;}}class tV extends tk{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1;}getFieldMask(){return this.fieldMask;}}function tF(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r);}}),t;}function tP(e,t,n){var r;let i=new Map;e.length===n.length||I();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof t_?tE(o,l):o instanceof tT?tI(o,l):r));}return i;}function tO(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tw?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ef(t)&&(t=em(t)),t&&(n.fields.__previous_value__=t),{mapValue:n};}(t,s):e instanceof t_?tE(e,s):e instanceof tT?tI(e,s):function(e,t){let n=tv(e,t),r=tS(n)+tS(e.Pe);return eA(n)&&eA(e.Pe)?tp(r):tg(e.serializer,r);}(e,s));}return r;}class tU extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[];}getFieldMask(){return null;}}class tq extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[];}getFieldMask(){return null;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r;}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tM?function(e,t,n){let r=e.value.clone(),i=tP(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations();}(i,e,r):i instanceof tV?function(e,t,n){if(!tD(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tP(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tF(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations();}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations();}(0,e,r);}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tL(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tL(n,e,t,this.localWriteTime));return t;}applyToLocalDocumentSet(e,t){let n=th();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tR(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(U.min());}),n;}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tf());}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,(e,t)=>tx(e,t))&&P(this.baseMutations,e.baseMutations,(e,t)=>tx(e,t));}}class t${constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r;}static from(e,t,n){e.mutations.length===n.length||I();let r=tc,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new t$(e,t,n,r);}}/**
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
 */class tz{constructor(e,t){this.largestBatchId=e,this.mutation=t;}getKey(){return this.mutation.key;}isEqual(e){return null!==e&&this.mutation===e.mutation;}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e,t){this.count=e,this.unchangedNames=t;}}function tQ(e){if(void 0===e)return _("GRPC error has no .code"),C.UNKNOWN;switch(e){case i.OK:return C.OK;case i.CANCELLED:return C.CANCELLED;case i.UNKNOWN:return C.UNKNOWN;case i.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case i.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case i.INTERNAL:return C.INTERNAL;case i.UNAVAILABLE:return C.UNAVAILABLE;case i.UNAUTHENTICATED:return C.UNAUTHENTICATED;case i.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case i.NOT_FOUND:return C.NOT_FOUND;case i.ALREADY_EXISTS:return C.ALREADY_EXISTS;case i.PERMISSION_DENIED:return C.PERMISSION_DENIED;case i.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case i.ABORTED:return C.ABORTED;case i.OUT_OF_RANGE:return C.OUT_OF_RANGE;case i.UNIMPLEMENTED:return C.UNIMPLEMENTED;case i.DATA_LOSS:return C.DATA_LOSS;default:return I();}}(s=i||(i={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let tG=new d.Integer([4294967295,4294967295],0);function tj(e){let t=(new TextEncoder).encode(e),n=new d.Md5;return n.update(t),new Uint8Array(n.digest());}function tW(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new d.Integer([n,r],0),new d.Integer([i,s],0)];}class tH{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tY(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=d.Integer.fromNumber(this.Ie);}Ee(e,t,n){let r=e.add(t.multiply(d.Integer.fromNumber(n)));return 1===r.compare(tG)&&(r=new d.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber();}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8);}mightContain(e){if(0===this.Ie)return!1;let[t,n]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);if(!this.de(r))return!1;}return!0;}static create(e,t,n){let r=new tH(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r;}insert(e){if(0===this.Ie)return;let[t,n]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);this.Ae(r);}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8;}}class tY extends Error{constructor(){super(...arguments),this.name="BloomFilterError";}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i;}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tJ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tX(U.min(),r,new et(F),ta,tf());}}class tJ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i;}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tJ(n,t,tf(),tf(),tf());}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r;}}class t0{constructor(e,t){this.targetId=e,this.me=t;}}class t1{constructor(e,t,n=el.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r;}}class t2{constructor(){this.fe=0,this.ge=t9(),this.pe=el.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0;}get current(){return this.ye;}get resumeToken(){return this.pe;}get Se(){return 0!==this.fe;}get be(){return this.we;}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e);}Ce(){let e=tf(),t=tf(),n=tf();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I();}}),new tJ(this.pe,this.ye,e,t,n);}ve(){this.we=!1,this.ge=t9();}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t);}Me(e){this.we=!0,this.ge=this.ge.remove(e);}xe(){this.fe+=1;}Oe(){this.fe-=1,this.fe>=0||I();}Ne(){this.we=!0,this.ye=!0;}}class t3{constructor(e){this.Le=e,this.Be=new Map,this.ke=ta,this.qe=t4(),this.Qe=new et(F);}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve);}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:I();}});}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n);});}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let i=r.target;if(e2(i)){if(0===n){let e=new K(i.path);this.Ue(t,e,eM.newNoDocument(e,U.min()));}else 1===n||I();}else{let r=this.Ye(t);if(r!==n){let n=this.Ze(e),i=n?this.Xe(n,e,r):1;0!==i&&(this.je(t),this.Qe=this.Qe.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"));}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=ed(i).toUint8Array();}catch(e){if(e instanceof eo)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e;}try{n=new tH(t,s,a);}catch(e){return E(e instanceof tY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null;}return 0===n.Ie?null:n;}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2;}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++);}),r;}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let i=this.Je(r);if(i){if(n.current&&e2(i.target)){let t=new K(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,eM.newNoDocument(t,e));}n.be&&(t.set(r,n.Ce()),n.ve());}});let n=tf();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1);}),r&&(n=n.add(e));}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new tX(e,t,this.Qe,this.ke,n);return this.ke=ta,this.qe=t4(),this.Qe=new et(F),r;}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e));}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n));}removeTarget(e){this.Be.delete(e);}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size;}xe(e){this.Ge(e).xe();}Ge(e){let t=this.Be.get(e);return t||(t=new t2,this.Be.set(e,t)),t;}st(e){let t=this.qe.get(e);return t||(t=new ei(F),this.qe=this.qe.insert(e,t)),t;}ze(e){let t=null!==this.Je(e);return t||w("WatchChangeAggregator","Detected inactive target",e),t;}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e);}je(e){this.Be.set(e,new t2),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null);});}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t);}}function t4(){return new et(K.comparator);}function t9(){return new et(K.comparator);}let t8={asc:"ASCENDING",desc:"DESCENDING"},t6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t5={and:"AND",or:"OR"};class t7{constructor(e,t){this.databaseId=e,this.useProto3Json=t;}}function ne(e,t){return e.useProto3Json||null==t?t:{value:t};}function nt(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds};}function nn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array();}function nr(e){return e||I(),U.fromTimestamp(function(e){let t=eh(e);return new O(t.seconds,t.nanos);}(e));}function ni(e,t){return ns(e,t).canonicalString();}function ns(e,t){let n=new B(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t);}function na(e){let t=B.fromString(e);return ng(t)||I(),t;}function no(e,t){return ni(e.databaseId,t.path);}function nl(e,t){let n=na(t);if(n.get(1)!==e.databaseId.projectId)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(nc(n));}function nu(e,t){return ni(e.databaseId,t);}function nh(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString();}function nc(e){return e.length>4&&"documents"===e.get(4)||I(),e.popFirst(5);}function nd(e,t,n){return{name:no(e,t),fields:n.value.mapValue.fields};}function nf(e){return{fieldPath:e.canonicalString()};}function nm(e){return z.fromServerFormat(e.fieldPath);}function ng(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,n,r,i=U.min(),s=U.min(),a=el.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o;}withSequenceNumber(e){return new np(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount);}withResumeToken(e,t){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null);}withExpectedCount(e){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e);}withLastLimboFreeSnapshotVersion(e){return new np(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.ct=e;}}/**
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
 */class nv{constructor(){}Pt(e,t){this.It(e,t),t.Tt();}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ec(e.integerValue));else if("doubleValue"in e){let n=ec(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),X(n)?t.dt(0):t.dt(n));}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n&&(n=eh(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0);}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(ed(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0);}else"mapValue"in e?eL(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):I();}Rt(e,t){this.Et(t,25),this.St(e,t);}St(e,t){t.At(e);}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t);}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t);}gt(e,t){this.Et(t,37),K.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t);});}Et(e,t){e.dt(t);}Vt(e){e.dt(2);}}nv.bt=new nv;/**
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
 */class nw{constructor(){this._n=new n_;}addToCollectionParentIndex(e,t){return this._n.add(t),W.resolve();}getCollectionParents(e,t){return W.resolve(this._n.getEntries(t));}addFieldIndex(e,t){return W.resolve();}deleteFieldIndex(e,t){return W.resolve();}deleteAllFieldIndexes(e){return W.resolve();}createTargetIndexes(e,t){return W.resolve();}getDocumentsMatchingTarget(e,t){return W.resolve(null);}getIndexType(e,t){return W.resolve(0);}getFieldIndexes(e,t){return W.resolve([]);}getNextCollectionGroupToUpdate(e){return W.resolve(null);}getMinOffset(e,t){return W.resolve(Q.min());}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Q.min());}updateCollectionGroup(e,t,n){return W.resolve();}updateIndexEntries(e,t){return W.resolve();}}class n_{constructor(){this.index={};}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ei(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i;}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n);}getEntries(e){return(this.index[e]||new ei(B.comparator)).toArray();}}new Uint8Array(0);class nE{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n;}static withCacheSize(e){return new nE(e,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nE.DEFAULT_COLLECTION_PERCENTILE=10,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nE.DEFAULT=new nE(41943040,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nE.DISABLED=new nE(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.On=e;}next(){return this.On+=2,this.On;}static Nn(){return new nT(0);}static Ln(){return new nT(-1);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1;}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e);}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eM.newInvalidDocument(e).setReadTime(t));}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?W.resolve(n):this.getFromCache(e,t);}getEntries(e,t){return this.getAllFromCache(e,t);}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e);}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r;}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tL(n.mutation,e,ea.empty(),O.now()),e));}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tf()).next(()=>t));}getLocalViewOfDocuments(e,t,n=tf()){let r=th();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tl();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument);}),t;}));}getOverlayedDocuments(e,t){let n=th();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tf()));}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e);}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n);});});}computeViews(e,t,n,r){let i=ta,s=th(),a=th();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tV)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tL(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,ea.empty());}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nC(t,null!==(n=s.get(e))&&void 0!==n?n:null));}),a));}recalculateAndSaveOverlays(e,t){let n=th(),r=new et((e,t)=>e-t),i=tf();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ea.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tf()).add(e);r=r.insert(i.batchId,o);});}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=th();l.forEach(e=>{if(!i.has(e)){let r=tR(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e);}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u));}return W.waitFor(s);}).next(()=>n);}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t));}getDocumentsMatchingQuery(e,t,n,r){return K.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e9(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):W.resolve(th()),a=-1,o=i;return s.next(t=>W.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?W.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e);}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tf())).next(e=>({batchId:a,changes:tu(e)})));});}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=tl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t;});}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tl();return this.indexManager.getCollectionParents(e,i).next(a=>W.forEach(a,a=>{let o=new e3(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t);});});}).next(()=>s));}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eM.newInvalidDocument(r)));});let n=tl();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tL(s.mutation,r,ea.empty(),O.now()),tr(t,r)&&(n=n.insert(e,r));}),n;});}}/**
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
 */class nA{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map;}getBundleMetadata(e,t){return W.resolve(this.cr.get(t));}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:nr(t.createTime)}),W.resolve();}getNamedQuery(e,t){return W.resolve(this.lr.get(t));}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=na(e);return 4===t.length?B.emptyPath():nc(t);}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||I();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId);}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nm(e.unaryFilter.field);return eq.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nm(e.unaryFilter.field);return eq.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nm(e.unaryFilter.field);return eq.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nm(e.unaryFilter.field);return eq.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I();}}(t):void 0!==t.fieldFilter?eq.create(nm(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I();}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eB.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I();}}(t.compositeFilter.op)):I();}(e);return n instanceof eB&&ez(t=n)&&e$(t)?n.getFilters():[n];}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eO(nm(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return;}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new eV(e.values||[],t);}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new eV(e.values||[],t);}(i.endAt)),new e3(r,a,l,o,u,"F",h,c);}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e7(t,t.limit,"L"):t;}(t.bundledQuery),readTime:nr(t.readTime)}),W.resolve();}}/**
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
 */class nN{constructor(){this.overlays=new et(K.comparator),this.hr=new Map;}getOverlay(e,t){return W.resolve(this.overlays.get(t));}getOverlays(e,t){let n=th();return W.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e);})).next(()=>n);}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r);}),W.resolve();}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),W.resolve();}getOverlaysForCollection(e,t,n){let r=th(),i=t.length+1,s=new K(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e);}return W.resolve(r);}getOverlaysForCollectionGroup(e,t,n,r){let i=new et((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=th(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e);}}let a=th(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return W.resolve(a);}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e);}this.overlays=this.overlays.insert(n.key,new tz(t,n));let i=this.hr.get(t);void 0===i&&(i=tf(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key));}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.Pr=new ei(nD.Ir),this.Tr=new ei(nD.Er);}isEmpty(){return this.Pr.isEmpty();}addReference(e,t){let n=new nD(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n);}dr(e,t){e.forEach(e=>this.addReference(e,t));}removeReference(e,t){this.Ar(new nD(e,t));}Rr(e,t){e.forEach(e=>this.removeReference(e,t));}Vr(e){let t=new K(new B([])),n=new nD(t,e),r=new nD(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key);}),i;}mr(){this.Pr.forEach(e=>this.Ar(e));}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e);}gr(e){let t=new K(new B([])),n=new nD(t,e),r=new nD(t,e+1),i=tf();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key);}),i;}containsKey(e){let t=new nD(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key);}}class nD{constructor(e,t){this.key=e,this.pr=t;}static Ir(e,t){return K.comparator(e.key,t.key)||F(e.pr,t.pr);}static Er(e,t){return F(e.pr,t.pr)||K.comparator(e.key,t.key);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ei(nD.Ir);}checkEmpty(e){return W.resolve(0===this.mutationQueue.length);}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tB(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new nD(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return W.resolve(s);}lookupMutationBatch(e,t){return W.resolve(this.Sr(t));}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return W.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null);}getHighestUnacknowledgedBatchId(){return W.resolve(0===this.mutationQueue.length?-1:this.yr-1);}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice());}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nD(t,0),r=new nD(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t);}),W.resolve(i);}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ei(F);return t.forEach(e=>{let t=new nD(e,0),r=new nD(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr);});}),W.resolve(this.Dr(n));}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;K.isDocumentKey(i)||(i=i.child(""));let s=new nD(new K(i),0),a=new ei(F);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0);},s),W.resolve(this.Dr(a));}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n);}),t;}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||I(),this.mutationQueue.shift();let n=this.wr;return W.forEach(t.mutations,r=>{let i=new nD(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key);}).next(()=>{this.wr=n;});}Mn(e){}containsKey(e,t){let n=new nD(t,0),r=this.wr.firstAfterOrEqual(n);return W.resolve(t.isEqual(r&&r.key));}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve();}Cr(e,t){return this.br(e);}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId;}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t];}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.vr=e,this.docs=new et(K.comparator),this.size=0;}setIndexManager(e){this.indexManager=e;}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast());}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size);}getEntry(e,t){let n=this.docs.get(t);return W.resolve(n?n.document.mutableCopy():eM.newInvalidDocument(t));}getEntries(e,t){let n=ta;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eM.newInvalidDocument(e));}),W.resolve(n);}getDocumentsMatchingQuery(e,t,n,r){let i=ta,s=t.path,a=new K(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=K.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId);}(new Q(a.readTime,a.key,-1),n)||(r.has(a.key)||tr(t,a))&&(i=i.insert(a.key,a.mutableCopy()));}return W.resolve(i);}getAllFromCollectionGroup(e,t,n,r){I();}Fr(e,t){return W.forEach(this.docs,e=>t(e));}newChangeBuffer(e){return new nL(this);}getSize(e){return W.resolve(this.size);}}class nL extends nI{constructor(e){super(),this.ar=e;}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n);}),W.waitFor(t);}getFromCache(e,t){return this.ar.getEntry(e,t);}getAllFromCache(e,t){return this.ar.getEntries(e,t);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.persistence=e,this.Mr=new ts(e=>e0(e),e1),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new nb,this.targetCount=0,this.Lr=nT.Nn();}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),W.resolve();}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion);}getHighestSequenceNumber(e){return W.resolve(this.Or);}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),W.resolve(this.highestTargetId);}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),W.resolve();}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new nT(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber);}addTargetData(e,t){return this.qn(t),this.targetCount+=1,W.resolve();}updateTargetData(e,t){return this.qn(t),W.resolve();}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,W.resolve();}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++);}),W.waitFor(i).next(()=>r);}getTargetCount(e){return W.resolve(this.targetCount);}getTargetData(e,t){let n=this.Mr.get(t)||null;return W.resolve(n);}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),W.resolve();}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t));}),W.waitFor(i);}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),W.resolve();}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return W.resolve(n);}containsKey(e,t){return W.resolve(this.Nr.containsKey(t));}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.Br={},this.overlays={},this.kr=new Y(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nx(this),this.indexManager=new nw,this.remoteDocumentCache=new nR(e=>this.referenceDelegate.Kr(e)),this.serializer=new ny(t),this.$r=new nA(this.serializer);}start(){return Promise.resolve();}shutdown(){return this.qr=!1,Promise.resolve();}get started(){return this.qr;}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager;}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nN,this.overlays[e.toKey()]=t),t;}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new nk(t,this.referenceDelegate),this.Br[e.toKey()]=n),n;}getTargetCache(){return this.Qr;}getRemoteDocumentCache(){return this.remoteDocumentCache;}getBundleCache(){return this.$r;}runTransaction(e,t,n){w("MemoryPersistence","Starting transaction:",e);let r=new nV(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e));}Gr(e,t){return W.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)));}}class nV extends G{constructor(e){super(),this.currentSequenceNumber=e;}}class nF{constructor(e){this.persistence=e,this.zr=new nb,this.jr=null;}static Hr(e){return new nF(e);}get Jr(){if(this.jr)return this.jr;throw I();}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),W.resolve();}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),W.resolve();}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),W.resolve();}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()));}).next(()=>n.removeTargetData(e,t));}Ur(){this.jr=new Set;}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Jr,n=>{let r=K.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,U.min());});}).next(()=>(this.jr=null,t.apply(e)));}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString());});}Kr(e){return 0;}Yr(e,t){return W.or([()=>W.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)]);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r;}static Ki(e,t){let n=tf(),r=tf();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key);}return new nP(e,t.fromCache,n,r);}}/**
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
 */class nO{constructor(){this._documentReadCount=0;}get documentReadCount(){return this._documentReadCount;}incrementDocumentReadCount(e){this._documentReadCount+=e;}}/**
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
 */class nU{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,c.isSafari)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1");}((0,c.getUA)())>0?6:4;}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0;}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e;}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e;});}).next(()=>{if(i.result)return;let n=new nO;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size);});}).next(()=>i.result);}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(v()<=h.LogLevel.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),W.resolve()):(v()<=h.LogLevel.DEBUG&&w("QueryEngine","Query:",tn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(v()<=h.LogLevel.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e6(t))):W.resolve());}ji(e,t){if(e4(t))return W.resolve(null);let n=e6(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e6(t=e7(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tf(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,e7(t,null,"F")):this.es(e,s,t,n);}));})));}Hi(e,t,n,r){return e4(t)||r.isEqual(U.min())?W.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?W.resolve(null):(v()<=h.LogLevel.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tn(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new Q(U.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r)),K.empty(),-1);}(r,0)).next(e=>e));});}Zi(e,t){let n=new ei(ti(e));return t.forEach((t,r)=>{tr(e,r)&&(n=n.add(r));}),n;}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0);}Ji(e,t,n){return v()<=h.LogLevel.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",tn(t)),this.zi.getDocumentsMatchingQuery(e,t,Q.min(),n);}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t);}),e));}}/**
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
 */class nq{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new et(F),this.rs=new ts(e=>e0(e),e1),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n);}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nS(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager);}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns));}}async function nB(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tf();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}));});});}function n$(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t));}async function nz(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r));}catch(e){if(!H(e))throw e;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`);}e.ns=e.ns.remove(t),e.rs.delete(r.target);}function nK(e,t,n){let r=U.min(),i=tf();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?W.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n);})(e,s,e6(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e;});}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:U.min(),n?i:tf())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||U.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime);}),e.ss.set(r,s),{documents:n,hs:i};}));}class nQ{constructor(){this.activeTargetIds=tm;}As(e){this.activeTargetIds=this.activeTargetIds.add(e);}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e);}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()});}}class nG{constructor(){this.no=new nQ,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null;}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current";}updateQueryState(e,t,n){this.ro[e]=t;}removeLocalQueryTarget(e){this.no.Rs(e);}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e);}clearQueryState(e){delete this.ro[e];}getAllActiveQueryTargets(){return this.no.activeTargetIds;}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e);}start(){return this.no=new nQ,Promise.resolve();}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nj{io(e){}shutdown(){}}/**
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
 */class nW{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co();}io(e){this.uo.push(e);}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o);}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o);}oo(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0);}ao(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1);}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener;}}/**
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
 */let nH=null;function nY(){return null===nH?nH=268435456+Math.round(2147483648*Math.random()):nH++,"0x"+nH.toString(16);}/**
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
 */let nX={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e){this.lo=e.lo,this.ho=e.ho;}Po(e){this.Io=e;}To(e){this.Eo=e;}Ao(e){this.Ro=e;}onMessage(e){this.Vo=e;}close(){this.ho();}send(e){this.lo(e);}mo(){this.Io();}fo(){this.Eo();}po(e){this.Ro(e);}yo(e){this.Vo(e);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nZ="WebChannelConnection";class n0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=t+"://"+e.host,this.So=`projects/${n}/databases/${r}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`;}get Do(){return!1;}Co(e,t,n,r,i){let s=nY(),a=this.vo(e,t.toUriEncodedString());w("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(o,r,i),this.Mo(e,a,o,n).then(t=>(w("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw E("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t;});}xo(e,t,n,r,i,s){return this.Co(e,t,n,r,i);}Fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p;}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t);}vo(e,t){let n=nX[e];return`${this.wo}/v1/${t}:${n}`;}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions;}Mo(e,t,n,r){let i=nY();return new Promise((s,a)=>{let o=new f.XhrIo;o.setWithCredentials(!0),o.listenOnce(f.EventType.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case f.ErrorCode.NO_ERROR:let t=o.getResponseJson();w(nZ,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case f.ErrorCode.TIMEOUT:w(nZ,`RPC '${e}' ${i} timed out`),a(new S(C.DEADLINE_EXCEEDED,"Request time out"));break;case f.ErrorCode.HTTP_ERROR:let n=o.getStatus();if(w(nZ,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN;}(t.status);a(new S(e,t.message));}else a(new S(C.UNKNOWN,"Server responded with status "+o.getStatus()));}else a(new S(C.UNAVAILABLE,"Connection failed."));break;default:I();}}finally{w(nZ,`RPC '${e}' ${i} completed.`);}});let l=JSON.stringify(r);w(nZ,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15);});}Oo(e,t,n){let r=nY(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,f.createWebChannelTransport)(),o=(0,f.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new f.FetchXmlHttpFactory({})),this.Fo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");w(nZ,`Creating RPC '${e}' stream ${r}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,m=!1,g=new nJ({lo:t=>{m?w(nZ,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(w(nZ,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),w(nZ,`RPC '${e}' stream ${r} sending:`,t),c.send(t));},ho:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e);}catch(e){setTimeout(()=>{throw e;},0);}});};return p(c,f.WebChannel.EventType.OPEN,()=>{m||(w(nZ,`RPC '${e}' stream ${r} transport opened.`),g.mo());}),p(c,f.WebChannel.EventType.CLOSE,()=>{m||(m=!0,w(nZ,`RPC '${e}' stream ${r} transport closed`),g.po());}),p(c,f.WebChannel.EventType.ERROR,t=>{m||(m=!0,E(nZ,`RPC '${e}' stream ${r} transport errored:`,t),g.po(new S(C.UNAVAILABLE,"The operation could not be completed")));}),p(c,f.WebChannel.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||I();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){w(nZ,`RPC '${e}' stream ${r} received error:`,a);let t=a.status,n=function(e){let t=i[e];if(void 0!==t)return tQ(t);}(t),s=a.message;void 0===n&&(n=C.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.po(new S(n,s)),c.close();}else w(nZ,`RPC '${e}' stream ${r} received:`,s),g.yo(s);}}),p(o,f.Event.STAT_EVENT,t=>{t.stat===f.Stat.PROXY?w(nZ,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===f.Stat.NOPROXY&&w(nZ,`RPC '${e}' stream ${r} detected no buffering proxy`);}),setTimeout(()=>{g.fo();},0),g;}}function n1(){return"undefined"!=typeof document?document:null;}/**
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
 */function n2(e){return new t7(e,!0);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=r,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset();}reset(){this.ko=0;}Ko(){this.ko=this.Bo;}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,t-n);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo);}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null);}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null);}Uo(){return(Math.random()-.5)*this.ko;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.Go=n,this.zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new n3(e,t);}Zo(){return 1===this.state||5===this.state||this.Xo();}Xo(){return 2===this.state||3===this.state;}start(){4!==this.state?this.auth():this.e_();}async stop(){this.Zo()&&await this.close(0);}t_(){this.state=0,this.Yo.reset();}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()));}i_(e){this.s_(),this.stream.send(e);}async r_(){if(this.Xo())return this.close(0);}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null);}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null);}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==e?this.Yo.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t);}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.jo===t&&this.u_(e,n);},t=>{e(()=>{let e=new S(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.c_(e);});});}u_(e,t){let n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{n(()=>this.listener.Po());}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()));}),this.stream.Ao(e=>{n(()=>this.c_(e));}),this.stream.onMessage(e=>{n(()=>this.onMessage(e));});}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start();});}c_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e);}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()));};}}class n9 extends n4{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i;}l_(e,t){return this.connection.Oo("Listen",e,t);}onMessage(e){this.Yo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||I(),el.fromBase64String(i||"")):(void 0===i||i instanceof Buffer||i instanceof Uint8Array||I(),el.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new t1(s,a,o,l&&new S(void 0===l.code?C.UNKNOWN:tQ(l.code),l.message||"")||null);}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nl(e,r.document.name),s=nr(r.document.updateTime),a=r.document.createTime?nr(r.document.createTime):U.min(),o=new ex({mapValue:{fields:r.document.fields}}),l=eM.newFoundDocument(i,s,a,o);n=new tZ(r.targetIds||[],r.removedTargetIds||[],l.key,l);}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nl(e,r.document),s=r.readTime?nr(r.readTime):U.min(),a=eM.newNoDocument(i,s);n=new tZ([],r.removedTargetIds||[],a.key,a);}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nl(e,r.document);n=new tZ([],r.removedTargetIds||[],i,null);}else{if(!("filter"in t))return I();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new tK(r,i);n=new t0(e.targetId,s);}}return n;}(this.serializer,e),n=function(e){if(!("targetChange"in e))return U.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?nr(t.readTime):U.min();}(e);return this.listener.h_(t,n);}P_(e){let t={};t.database=nh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=e2(r)?{documents:{documents:[nu(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nu(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eq?function(e){if("=="===e.op){if(eD(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NAN"}};if(eb(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NULL"}};}else if("!="===e.op){if(eD(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NAN"}};if(eb(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NULL"}};}return{fieldFilter:{field:nf(e.field),op:t6[e.op],value:e.value}};}(t):t instanceof eB?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t5[t.op],filters:n}};}(t):I();}(eB.create(e,"and"));}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nf(e.field),direction:t8[e.dir]}));}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ne(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:s,parent:i};}(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nn(e,t.resumeToken);let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r);}else if(t.snapshotVersion.compareTo(U.min())>0){n.readTime=nt(e,t.snapshotVersion.toTimestamp());let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r);}return n;}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I();}}(t.purpose);return null==n?null:{"goog-listen-tags":n};}(this.serializer,e);n&&(t.labels=n),this.i_(t);}I_(e){let t={};t.database=nh(this.serializer),t.removeTarget=e,this.i_(t);}}class n8 extends n4{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.T_=!1;}get E_(){return this.T_;}start(){this.T_=!1,this.lastStreamToken=void 0,super.start();}__(){this.T_&&this.d_([]);}l_(e,t){return this.connection.Oo("Write",e,t);}onMessage(e){var t,n;if(e.streamToken||I(),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||I(),t.map(e=>{let t;return(t=e.updateTime?nr(e.updateTime):nr(n)).isEqual(U.min())&&(t=nr(n)),new tN(t,e.transformResults||[]);})):[]),i=nr(e.commitTime);return this.listener.A_(i,r);}return e.writeResults&&0!==e.writeResults.length&&I(),this.T_=!0,this.listener.R_();}V_(){let e={};e.database=nh(this.serializer),this.i_(e);}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tM)r={update:nd(e,t.key,t.value)};else if(t instanceof tU)r={delete:no(e,t.key)};else if(t instanceof tV)r={update:nd(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t};}(t.fieldMask)};else{if(!(t instanceof tq))return I();r={verify:no(e,t.key)};}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tw)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof t_)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tT)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tC)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw I();})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nt(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:I()),r;})(this.serializer,e))};this.i_(t);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.m_=!1;}f_(){if(this.m_)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.");}Co(e,t,n,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,ns(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString());});}xo(e,t,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.xo(e,ns(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(C.UNKNOWN,e.toString());});}terminate(){this.m_=!0,this.connection.terminate();}}class n5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0;}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())));}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")));}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e);}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e));}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(_(t),this.y_=!1):w("OnlineStateTracker",t);}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(e=>{n.enqueueAndForget(async()=>{rl(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.M_.add(4),await rt(e),e.N_.set("Unknown"),e.M_.delete(4),await re(e);}(this));});}),this.N_=new n5(n,r);}}async function re(e){if(rl(e))for(let t of e.x_)await t(!0);}async function rt(e){for(let t of e.x_)await t(!1);}function rn(e,t){e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),ro(e)?ra(e):rC(e).Xo()&&ri(e,t));}function rr(e,t){let n=rC(e);e.F_.delete(t),n.Xo()&&rs(e,t),0===e.F_.size&&(n.Xo()?n.n_():rl(e)&&e.N_.set("Unknown"));}function ri(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n);}rC(e).P_(t);}function rs(e,t){e.L_.xe(t),rC(e).I_(t);}function ra(e){e.L_=new t3({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),rC(e).start(),e.N_.w_();}function ro(e){return rl(e)&&!rC(e).Zo()&&e.F_.size>0;}function rl(e){return 0===e.M_.size;}async function ru(e){e.N_.set("Online");}async function rh(e){e.F_.forEach((t,n)=>{ri(e,t);});}async function rc(e,t){e.L_=void 0,ro(e)?(e.N_.D_(t),ra(e)):e.N_.set("Unknown");}async function rd(e,t,n){if(e.N_.set("Online"),t instanceof t1&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.F_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.F_.delete(r),e.L_.removeTarget(r));}(e,t);}catch(n){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rf(e,n);}else if(t instanceof tZ?e.L_.Ke(t):t instanceof t0?e.L_.He(t):e.L_.We(t),!n.isEqual(U.min()))try{let t=await n$(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.L_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.F_.get(r);i&&e.F_.set(r,i.withResumeToken(n.resumeToken,t));}}),n.targetMismatches.forEach((t,n)=>{let r=e.F_.get(t);if(!r)return;e.F_.set(t,r.withResumeToken(el.EMPTY_BYTE_STRING,r.snapshotVersion)),rs(e,t);let i=new np(r.target,t,n,r.sequenceNumber);ri(e,i);}),e.remoteSyncer.applyRemoteEvent(n);}(e,n);}catch(t){w("RemoteStore","Failed to raise snapshot:",t),await rf(e,t);}}async function rf(e,t,n){if(!H(t))throw t;e.M_.add(1),await rt(e),e.N_.set("Offline"),n||(n=()=>n$(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await re(e);});}function rm(e,t){return t().catch(n=>rf(e,n,t));}async function rg(e){let t=rS(e),n=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;rl(e)&&e.v_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)));}(e.localStore,n);if(null===r){0===e.v_.length&&t.n_();break;}n=r.batchId,function(e,t){e.v_.push(t);let n=rS(e);n.Xo()&&n.E_&&n.d_(t.mutations);}(e,r);}catch(t){await rf(e,t);}rp(e)&&ry(e);}function rp(e){return rl(e)&&!rS(e).Zo()&&e.v_.length>0;}function ry(e){rS(e).start();}async function rv(e){rS(e).V_();}async function rw(e){let t=rS(e);for(let n of e.v_)t.d_(n.mutations);}async function r_(e,t,n){let r=e.v_.shift(),i=t$.from(r,t,n);await rm(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rg(e);}async function rE(e,t){t&&rS(e).E_&&await async function(e,t){var n;if(function(e){switch(e){default:return I();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;}}(n=t.code)&&n!==C.ABORTED){let n=e.v_.shift();rS(e).t_(),await rm(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rg(e);}}(e,t),rp(e)&&ry(e);}async function rT(e,t){e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");let n=rl(e);e.M_.add(3),await rt(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await re(e);}async function rI(e,t){t?(e.M_.delete(2),await re(e)):t||(e.M_.add(2),await rt(e),e.N_.set("Unknown"));}function rC(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Po:ru.bind(null,e),To:rh.bind(null,e),Ao:rc.bind(null,e),h_:rd.bind(null,e)},t.f_(),new n9(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.B_.t_(),ro(e)?ra(e):e.N_.set("Unknown")):(await e.B_.stop(),e.L_=void 0);})),e.B_;}function rS(e){var t,n,r;return e.k_||(e.k_=(t=e.datastore,n=e.asyncQueue,r={Po:()=>Promise.resolve(),To:rv.bind(null,e),Ao:rE.bind(null,e),R_:rw.bind(null,e),A_:r_.bind(null,e)},t.f_(),new n8(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.k_.t_(),await rg(e)):(await e.k_.stop(),e.v_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]));})),e.k_;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new A,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{});}get promise(){return this.deferred.promise;}static createAndSchedule(e,t,n,r,i){let s=new rA(e,t,Date.now()+n,r,i);return s.start(n),s;}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e);}skipDelay(){return this.handleDelayElapsed();}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))));}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve());}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null);}}function rN(e,t){if(_("AsyncQueue",`${t}: ${e}`),H(e))return new S(C.UNAVAILABLE,`${t}: ${e}`);throw e;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=tl(),this.sortedSet=new et(this.comparator);}static emptySet(e){return new rb(e.comparator);}has(e){return null!=this.keyedMap.get(e);}get(e){return this.keyedMap.get(e);}first(){return this.sortedSet.minKey();}last(){return this.sortedSet.maxKey();}isEmpty(){return this.sortedSet.isEmpty();}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1;}get size(){return this.sortedSet.size;}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1));}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null));}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this;}isEqual(e){if(!(e instanceof rb)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1;}return!0;}toString(){let e=[];return this.forEach(t=>{e.push(t.toString());}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)";}copy(e,t){let n=new rb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.q_=new et(K.comparator);}track(e){let t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):I():this.q_=this.q_.insert(t,e);}Q_(){let e=[];return this.q_.inorderTraversal((t,n)=>{e.push(n);}),e;}}class rk{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l;}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e});}),new rk(e,t,rb.emptySet(t),s,n,r,!0,!1,i);}get hasPendingWrites(){return!this.mutatedKeys.isEmpty();}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&te(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.K_=void 0,this.U_=[];}W_(){return this.U_.some(e=>e.G_());}}class rL{constructor(){this.queries=new ts(e=>tt(e),te),this.onlineState="Unknown",this.z_=new Set;}}async function rx(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.W_()&&t.G_()&&(n=2):(i=new rR,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(r,!0);break;case 1:i.K_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r);}}catch(n){let e=rN(n,`Initialization of query '${tn(t.query)}' failed`);return void t.onError(e);}e.queries.set(r,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&rP(e);}async function rM(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.U_.indexOf(t);e>=0&&(i.U_.splice(e,1),0===i.U_.length?r=t.G_()?0:1:!i.W_()&&t.G_()&&(r=2));}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return;}}function rV(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.U_)e.H_(r)&&(n=!0);i.K_=r;}}n&&rP(e);}function rF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.U_)e.onError(n);e.queries.delete(t);}function rP(e){e.z_.forEach(e=>{e.next();});}(o=a||(a={})).J_="default",o.Cache="cache";class rO{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{};}H_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults);}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t;}onError(e){this.Y_.error(e);}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t;}ta(e,t){return!(e.fromCache&&this.G_())||(!this.options.ra||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t);}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges;}na(e){e=rk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e);}G_(){return this.options.source!==a.Cache;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.key=e;}}class rq{constructor(e){this.key=e;}}class rB{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=tf(),this.mutatedKeys=tf(),this.Ia=ti(e),this.Ta=new rb(this.Ia);}get Ea(){return this.la;}da(e,t){let n=t?t.Aa:new rD,r=t?t.Ta:this.Ta,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tr(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Ra(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Ia(h,o)>0||l&&0>this.Ia(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)));}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e});}return{Ta:s,Aa:n,Xi:a,mutatedKeys:i};}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations;}applyChanges(e,t,n,r){let i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let s=e.Aa.Q_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I();}};return n(e)-n(t);})(e.type,t.type)||this.Ia(e.doc,t.doc)),this.Va(n),r=null!=r&&r;let a=t&&!r?this.ma():[],o=0===this.Pa.size&&this.current&&!r?1:0,l=o!==this.ha;return(this.ha=o,0!==s.length||l)?{snapshot:new rk(this.query,e.Ta,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:a}:{fa:a};}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new rD,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]};}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations;}Va(e){e&&(e.addedDocuments.forEach(e=>this.la=this.la.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=e.current);}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=tf(),this.Ta.forEach(e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key));});let t=[];return e.forEach(e=>{this.Pa.has(e)||t.push(new rq(e));}),this.Pa.forEach(n=>{e.has(n)||t.push(new rU(n));}),t;}pa(e){this.la=e.hs,this.Pa=tf();let t=this.da(e.documents);return this.applyChanges(t,!0);}ya(){return rk.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults);}}class r${constructor(e,t,n){this.query=e,this.targetId=t,this.view=n;}}class rz{constructor(e){this.key=e,this.wa=!1;}}class rK{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new ts(e=>tt(e),te),this.Da=new Map,this.Ca=new Set,this.va=new et(K.comparator),this.Fa=new Map,this.Ma=new nb,this.xa={},this.Oa=new Map,this.Na=nT.Ln(),this.onlineState="Unknown",this.La=void 0;}get isPrimaryClient(){return!0===this.La;}}async function rQ(e,t,n=!0){let r;let i=ir(e),s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await rj(i,t,n,!0),r;}async function rG(e,t){let n=ir(e);await rj(n,t,!0,!1);}async function rj(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=e6(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Qr.getTargetData(e,s).next(n=>n?(t=n,W.resolve(t)):i.Qr.allocateTargetId(e).next(n=>(t=new np(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Qr.addTargetData(e,t).next(()=>t))));}).then(e=>{let t=i.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.ns=i.ns.insert(e.targetId,e),i.rs.set(s,e.targetId)),e;})),l=o.targetId,u=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(a=await rW(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rn(e.remoteStore,o),a;}async function rW(e,t,n,r,i){e.Ba=(t,n,r)=>(async function(e,t,n,r){let i=t.view.da(n);i.Xi&&(i=await nK(e.localStore,t.query,!1).then(({documents:e})=>t.view.da(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return r6(e,t.targetId,o.fa),o.snapshot;})(e,t,n,r);let s=await nK(e.localStore,t,!0),a=new rB(t,s.hs),o=a.da(s.documents),l=tJ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);r6(e,n,u.fa);let h=new r$(t,n,a);return e.ba.set(t,h),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot;}async function rH(e,t,n){let r=e.ba.get(t),i=e.Da.get(r.targetId);if(i.length>1)return e.Da.set(r.targetId,i.filter(e=>!te(e,t))),void e.ba.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await nz(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rr(e.remoteStore,r.targetId),r9(e,r.targetId);}).catch(j)):(r9(e,r.targetId),await nz(e.localStore,r.targetId,!0));}async function rY(e,t){let n=e.ba.get(t),r=e.Da.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rr(e.remoteStore,n.targetId));}async function rX(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=r1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r2.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),tf());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ta,l=tf();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e));});}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tv(r.transform,e||null);null!=i&&(null===n&&(n=ex.empty()),n.set(r.field,i));}return n||null;}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tV(e.key,t,function e(t){let n=[];return Z(t.fields,(t,r)=>{let i=new z([t]);if(ek(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e));}else n.push(i);}),new ea(n);}(t.value.mapValue),tb.exists(!0)));}return e.mutationQueue.addMutationBatch(a,i,s,t);}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i);});}).then(()=>({batchId:r.batchId,changes:tu(n)}));}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.xa[i.currentUser.toKey()])||(e=new et(F)),e=e.insert(r,n),i.xa[i.currentUser.toKey()]=e,await r7(i,s.changes),await rg(i.remoteStore);}catch(t){let e=rN(t,"Failed to persist write");n.reject(e);}}async function rJ(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(el.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Qr.updateTargetData(i,h));});let h=ta,c=tf();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n));}),u.push((s=t.documentUpdates,a=tf(),o=tf(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=ta;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(U.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):w("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version);}),{cs:t,ls:o};})).next(e=>{h=e.cs,c=e.ls;})),!n.isEqual(U.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t);}return W.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h);}).then(t=>(e.ns=r,t));}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Fa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||I(),t.addedDocuments.size>0?r.wa=!0:t.modifiedDocuments.size>0?r.wa||I():t.removedDocuments.size>0&&(r.wa||I(),r.wa=!1));}),await r7(e,n,t);}catch(e){await j(e);}}function rZ(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ba.forEach((e,n)=>{let r=n.view.j_(t);r.snapshot&&i.push(r.snapshot);}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.U_)e.j_(t)&&(n=!0);}),n&&rP(r),i.length&&e.Sa.h_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t);}}async function r0(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Fa.get(t),i=r&&r.key;if(i){let n=new et(K.comparator);n=n.insert(i,eM.newNoDocument(i,U.min()));let r=tf().add(i),s=new tX(U.min(),new Map,new et(F),n,r);await rJ(e,s),e.va=e.va.remove(i),e.Fa.delete(t),r5(e);}else await nz(e.localStore,t,!1).then(()=>r9(e,t,n)).catch(j);}async function r1(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=W.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||I(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)));});}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i));})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tf();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t;}(t))).next(()=>n.localDocuments.getDocuments(e,r));});r4(e,r,null),r3(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await r7(e,i);}catch(e){await j(e);}}async function r2(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||I(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n));});r4(e,t,n),r3(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await r7(e,i);}catch(e){await j(e);}}function r3(e,t){(e.Oa.get(t)||[]).forEach(e=>{e.resolve();}),e.Oa.delete(t);}function r4(e,t,n){let r=e.xa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.xa[e.currentUser.toKey()]=r;}}function r9(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Da.get(t)))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(t=>{e.Ma.containsKey(t)||r8(e,t);});}function r8(e,t){e.Ca.delete(t.path.canonicalString());let n=e.va.get(t);null!==n&&(rr(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),r5(e));}function r6(e,t,n){for(let r of n)r instanceof rU?(e.Ma.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(w("SyncEngine","New document in limbo: "+n),e.Ca.add(r),r5(e));}(e,r)):r instanceof rq?(w("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||r8(e,r.key)):I();}function r5(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){let t=e.Ca.values().next().value;e.Ca.delete(t);let n=new K(B.fromString(t)),r=e.Na.next();e.Fa.set(r,new rz(n)),e.va=e.va.insert(n,r),rn(e.remoteStore,new np(e6(new e3(n.path)),r,"TargetPurposeLimboResolution",Y.oe));}}async function r7(e,t,n){let r=[],i=[],s=[];e.ba.isEmpty()||(e.ba.forEach((a,o)=>{s.push(e.Ba(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient){let n=t&&!t.fromCache;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current");}if(t){r.push(t);let e=nP.Ki(o.targetId,t);i.push(e);}}));}),await Promise.all(s),e.Sa.h_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>W.forEach(t,t=>W.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>W.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))));}catch(e){if(!H(e))throw e;w("LocalStore","Failed to update sequence numbers: "+e);}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i);}}}(e.localStore,i));}async function ie(e,t){var n;if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let r=await nB(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Oa.forEach(e=>{e.forEach(e=>{e.reject(new S(C.CANCELLED,n));});}),e.Oa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await r7(e,r.us);}}function it(e,t){let n=e.Fa.get(t);if(n&&n.wa)return tf().add(n.key);{let n=tf(),r=e.Da.get(t);if(!r)return n;for(let t of r){let r=e.ba.get(t);n=n.unionWith(r.view.Ea);}return n;}}function ir(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=rJ.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=it.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r0.bind(null,e),e.Sa.h_=rV.bind(null,e.eventManager),e.Sa.ka=rF.bind(null,e.eventManager),e;}class ii{constructor(){this.synchronizeTabs=!1;}async initialize(e){this.serializer=n2(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore);}createGarbageCollectionScheduler(e,t){return null;}createIndexBackfillerScheduler(e,t){return null;}createLocalStore(e){var t;return t=this.persistence,new nq(t,new nU,e.initialUser,this.serializer);}createPersistence(e){return new nM(nF.Hr,this.serializer);}createSharedClientState(e){return new nG;}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown();}}class is{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rZ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ie.bind(null,this.syncEngine),await rI(this.remoteStore,this.syncEngine.isPrimaryClient));}createEventManager(e){return new rL;}createDatastore(e){let t=n2(e.databaseInfo.databaseId),n=new n0(e.databaseInfo);return new n6(e.authCredentials,e.appCheckCredentials,n,t);}createRemoteStore(e){var t;return t=this.localStore,new n7(t,this.datastore,e.asyncQueue,e=>rZ(this.syncEngine,e,0),nW.D()?new nW:new nj);}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rK(e,t,n,r,i,s);return a&&(o.La=!0),o;}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t);}async terminate(){var e;await async function(e){w("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await rt(e),e.O_.shutdown(),e.N_.set("Unknown");}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate();}}/**
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
 */class ia{constructor(e){this.observer=e,this.muted=!1;}next(e){this.observer.next&&this.Ka(this.observer.next,e);}error(e){this.observer.error?this.Ka(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString());}$a(){this.muted=!0;}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t);},0);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=g.UNAUTHENTICATED,this.clientId=V.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{w("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e;}),this.appCheckCredentials.start(n,e=>(w("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)));}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100};}setCredentialChangeListener(e){this.authCredentialListener=e;}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e;}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(C.FAILED_PRECONDITION,"The client has already been terminated.");}terminate(){this.asyncQueue.enterRestrictedMode();let e=new A;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve();}catch(n){let t=rN(n,"Failed to shutdown persistence");e.reject(t);}}),e.promise;}}async function il(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nB(t.localStore,e),r=e);}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t;}async function iu(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ih(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rT(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rT(t.remoteStore,n)),e._onlineComponents=t;}async function ih(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await il(e,e._uninitializedComponentsProvider._offline);}catch(t){if(!("FirebaseError"===t.name?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await il(e,new ii);}}else w("FirestoreClient","Using default OfflineComponentProvider"),await il(e,new ii);}return e._offlineComponents;}async function ic(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await iu(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await iu(e,new is))),e._onlineComponents;}async function id(e){let t=await ic(e),n=t.eventManager;return n.onListen=rQ.bind(null,t.syncEngine),n.onUnlisten=rH.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=rG.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rY.bind(null,t.syncEngine),n;}/**
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
 */function im(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t;}/**
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
 */let ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e,t,n){if(!n)throw new S(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`);}function iy(e){if(!K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);}function iv(e){if(K.isDocumentKey(e))throw new S(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);}function iw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object";}}return"function"==typeof e?"a function":I();}function i_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=iw(e);throw new S(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`);}}return e;}/**
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
 */class iE{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0;}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes;}(function(e,t,n,r){if(!0===t&&!0===r)throw new S(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`);})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`);}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams;}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;}}class iT{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iE({}),this._settingsFrozen=!1;}get app(){if(!this._app)throw new S(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app;}get _initialized(){return this._settingsFrozen;}get _terminated(){return void 0!==this._terminateTask;}_setSettings(e){if(this._settingsFrozen)throw new S(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iE(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new b;switch(e.type){case"firstParty":return new L(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type");}}(e.credentials));}_getSettings(){return this._settings;}_freezeSettings(){return this._settingsFrozen=!0,this._settings;}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask;}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings};}_terminate(){return function(e){let t=ig.get(e);t&&(w("ComponentProvider","Removing Datastore"),ig.delete(e),t.terminate());}(this),Promise.resolve();}}/**
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
 */class iI{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e;}withConverter(e){return new iI(this.firestore,e,this._query);}}class iC{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e;}get _path(){return this._key.path;}get id(){return this._key.path.lastSegment();}get path(){return this._key.path.canonicalString();}get parent(){return new iS(this.firestore,this.converter,this._key.path.popLast());}withConverter(e){return new iC(this.firestore,e,this._key);}}class iS extends iI{constructor(e,t,n){super(e,t,new e3(n)),this._path=n,this.type="collection";}get id(){return this._query.path.lastSegment();}get path(){return this._query.path.canonicalString();}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iC(this.firestore,null,new K(e));}withConverter(e){return new iS(this.firestore,e,this._path);}}function iA(e,t,...n){if(e=(0,c.getModularInstance)(e),ip("collection","path",t),e instanceof iT){let r=B.fromString(t,...n);return iv(r),new iS(e,null,r);}{if(!(e instanceof iC||e instanceof iS))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return iv(r),new iS(e.firestore,null,r);}}function iN(e,t,...n){if(e=(0,c.getModularInstance)(e),1==arguments.length&&(t=V.newId()),ip("doc","path",t),e instanceof iT){let r=B.fromString(t,...n);return iy(r),new iC(e,null,new K(r));}{if(!(e instanceof iC||e instanceof iS))throw new S(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(B.fromString(t,...n));return iy(r),new iC(e.firestore,e instanceof iS?e.converter:null,new K(r));}}/**
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
 */class ib{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new n3(this,"async_queue_retry"),this.hu=()=>{let e=n1();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo();};let e=n1();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu);}get isShuttingDown(){return this.ou;}enqueueAndForget(e){this.enqueue(e);}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e);}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=n1();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu);}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new A;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise);}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()));}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset();}catch(e){if(!H(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e);}this.su.length>0&&this.Yo.$o(()=>this.Tu());}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(e=>{let t;throw this.au=e,this.uu=!1,_("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e;}).then(e=>(this.uu=!1,e))));return this.iu=t,t;}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let r=rA.createAndSchedule(this,e,t,n,e=>this.Eu(e));return this._u.push(r),r;}Pu(){this.au&&I();}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1;}Ru(e){return this.du().then(()=>{for(let t of(this._u.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this._u))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du();});}Vu(e){this.lu.push(e);}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1);}}function iD(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1;}(e,["next","error","complete"]);}class ik extends iT{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ib,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]";}_terminate(){return this._firestoreClient||ix(this),this._firestoreClient.terminate();}}function iR(e,t){let n="object"==typeof e?e:(0,l.getApp)(),r=(0,l._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,c.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=i_(e,iT))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=g.MOCK_USER;else{t=(0,c.createMockUserToken)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new g(s);}e._authCredentials=new D(new N(t,n));}}(r,...e);}return r;}function iL(e){return e._firestoreClient||ix(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient;}function ix(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ep(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,im(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new io(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider});}/**
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
 */class iM{constructor(e){this._byteString=e;}static fromBase64String(e){try{return new iM(el.fromBase64String(e));}catch(e){throw new S(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e);}}static fromUint8Array(e){return new iM(el.fromUint8Array(e));}toBase64(){return this._byteString.toBase64();}toUint8Array(){return this._byteString.toUint8Array();}toString(){return"Bytes(base64: "+this.toBase64()+")";}isEqual(e){return this._byteString.isEqual(e._byteString);}}/**
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
 */class iV{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e);}isEqual(e){return this._internalPath.isEqual(e._internalPath);}}/**
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
 */class iF{constructor(e){this._methodName=e;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t;}get latitude(){return this._lat;}get longitude(){return this._long;}isEqual(e){return this._lat===e._lat&&this._long===e._long;}toJSON(){return{latitude:this._lat,longitude:this._long};}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iO=/^__.*__$/;class iU{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n;}toMutation(e,t){return null!==this.fieldMask?new tV(e,this.data,this.fieldMask,t,this.fieldTransforms):new tM(e,this.data,t,this.fieldTransforms);}}function iq(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I();}}class iB{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[];}get path(){return this.settings.path;}get fu(){return this.settings.fu;}gu(e){return new iB(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask);}pu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r;}Su(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r;}bu(e){return this.gu({path:void 0,yu:!0});}Du(e){return iY(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu);}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field));}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e));}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(iq(this.fu)&&iO.test(e))throw this.Du('Document fields cannot begin and end with "__"');}}class i${constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n2(e);}Fu(e,t,n,r=!1){return new iB({fu:e,methodName:t,vu:n,path:z.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties);}}function iz(e){let t=e._freezeSettings(),n=n2(e._databaseId);return new i$(e._databaseId,!!t.ignoreUndefinedProperties,n);}function iK(e,t){if(iG(e=(0,c.getModularInstance)(e)))return ij("Unsupported field value:",t,e),iQ(e,t);if(e instanceof iF)return function(e,t){if(!iq(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n);}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=iK(i,t.bu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++;}return{arrayValue:{values:n}};}(e,t);}return function(e,t){if(null===(e=(0,c.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!X(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tp(r):tg(n,r);}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:nt(t.serializer,n)};}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nt(t.serializer,n)};}if(e instanceof iP)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iM)return{bytesValue:nn(t.serializer,e._byteString)};if(e instanceof iC){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Du(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ni(e.firestore._databaseId||t.databaseId,e._key.path)};}throw t.Du(`Unsupported field value: ${iw(e)}`);}(e,t);}function iQ(e,t){let n={};return ee(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Z(e,(e,r)=>{let i=iK(r,t.pu(e));null!=i&&(n[e]=i);}),{mapValue:{fields:n}};}function iG(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof iP||e instanceof iM||e instanceof iC||e instanceof iF);}function ij(e,t,n){if(!iG(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=iw(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r);}}let iW=RegExp("[~\\*/\\[\\]]");function iH(e,t,n){if(t.search(iW)>=0)throw iY(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new iV(...t.split("."))._internalPath;}catch(r){throw iY(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n);}}function iY(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new S(C.INVALID_ARGUMENT,o+e+l);}/**
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
 */class iX{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i;}get id(){return this._key.path.lastSegment();}get ref(){return new iC(this._firestore,this._converter,this._key);}exists(){return null!==this._document;}data(){if(this._document){if(this._converter){let e=new iJ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e);}return this._userDataWriter.convertValue(this._document.data.value);}}get(e){if(this._document){let t=this._document.data.field(iZ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t);}}}class iJ extends iX{data(){return super.data();}}function iZ(e,t){return"string"==typeof t?iH(e,t):t instanceof iV?t._internalPath:t._delegate._internalPath;}/**
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
 */function i0(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause");}class i1{}class i2 extends i1{}function i3(e,t,...n){let r=[];for(let i of(t instanceof i1&&r.push(t),function(e){let t=e.filter(e=>e instanceof i9).length,n=e.filter(e=>e instanceof i4).length;if(t>1||t>0&&n>0)throw new S(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");}(r=r.concat(n)),r))e=i._apply(e);return e;}class i4 extends i2{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where";}static _create(e,t,n){return new i4(e,t,n);}_apply(e){let t=this._parse(e);return i5(e._query,t),new iI(e.firestore,e.converter,e5(e._query,t));}_parse(e){let t=iz(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){i6(a,s);let t=[];for(let n of a)t.push(i8(r,e,n));o={arrayValue:{values:t}};}else o=i8(r,e,a);}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||i6(a,s),o=function(e,t,n,r=!1){return iK(n,e.Fu(r?4:3,t));}(n,t,a,"in"===s||"not-in"===s);return eq.create(i,s,o);}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);}}class i9 extends i1{constructor(e,t){super(),this.type=e,this._queryConstraints=t;}static _create(e,t){return new i9(e,t);}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eB.create(t,this._getOperator());}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())i5(n,e),n=e5(n,e);}(e._query,t),new iI(e.firestore,e.converter,e5(e._query,t)));}_getQueryConstraints(){return this._queryConstraints;}_getOperator(){return"and"===this.type?"and":"or";}}function i8(e,t,n){if("string"==typeof(n=(0,c.getModularInstance)(n))){if(""===n)throw new S(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e9(t)&&-1!==n.indexOf("/"))throw new S(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(B.fromString(n));if(!K.isDocumentKey(r))throw new S(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eS(e,new K(r));}if(n instanceof iC)return eS(e,n._key);throw new S(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iw(n)}.`);}function i6(e,t){if(!Array.isArray(e)||0===e.length)throw new S(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);}function i5(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null;}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[];}}(t.op));if(null!==n)throw n===t.op?new S(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);}class i7{convertValue(e,t="none"){switch(ew(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ec(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ed(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I();}}convertObject(e,t){return this.convertObjectMap(e.fields,t);}convertObjectMap(e,t="none"){let n={};return Z(e,(e,r)=>{n[e]=this.convertValue(r,t);}),n;}convertGeoPoint(e){return new iP(ec(e.latitude),ec(e.longitude));}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t));}convertServerTimestamp(e,t){switch(t){case"previous":let n=em(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eg(e));default:return null;}}convertTimestamp(e){let t=eh(e);return new O(t.seconds,t.nanos);}convertDocumentKey(e,t){let n=B.fromString(e);ng(n)||I();let r=new ey(n.get(1),n.get(3)),i=new K(n.popFirst(5));return r.isEqual(t)||_(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i;}}/**
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
 */class se{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t;}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache;}}class st extends iX{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i;}exists(){return super.exists();}data(e={}){if(this._document){if(this._converter){let t=new sn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e);}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps);}}get(e,t={}){if(this._document){let n=this._document.data.field(iZ("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps);}}}class sn extends st{data(e={}){return super.data(e);}}class sr{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new se(r.hasPendingWrites,r.fromCache),this.query=n;}get docs(){let e=[];return this.forEach(t=>e.push(t)),e;}get size(){return this._snapshot.docs.size;}get empty(){return 0===this.size;}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sn(this._firestore,this._userDataWriter,n.key,n,new se(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter));});}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sn(e._firestore,e._userDataWriter,n.doc.key,n.doc,new se(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++};});}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sn(e._firestore,e._userDataWriter,t.doc.key,t.doc,new se(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I();}}(t.type),doc:r,oldIndex:i,newIndex:s};});}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges;}}class si extends i7{constructor(e){super(),this.firestore=e;}convertBytes(e){return new iM(e);}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iC(this.firestore,null,t);}}function ss(e){e=i_(e,iI);let t=i_(e.firestore,ik),n=iL(t),r=new si(t);return i0(e._query),(function(e,t,n={}){let r=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new rO(n,new ia({next:n=>{t.enqueueAndForget(()=>rM(e,s)),n.fromCache&&"server"===r.source?i.reject(new S(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n);},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ra:!0});return rx(e,s);})(await id(e),e.asyncQueue,t,n,r)),r.promise;})(n,e._query).then(n=>new sr(t,r,e,n));}function sa(e){return su(i_(e.firestore,ik),[new tU(e._key,tb.none())]);}function so(e,t){var n;let r=i_(e.firestore,ik),i=iN(e),s=(n=e.converter)?n.toFirestore(t):t;return su(r,[(function(e,t,n,r,i,s={}){let a,o;let l=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);ij("Data must be an object, but it was:",l,r);let u=iQ(r,l);if(s.merge)a=new ea(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=function(e,t,n){if((t=(0,c.getModularInstance)(t))instanceof iV)return t._internalPath;if("string"==typeof t)return iH(e,t);throw iY("Field path arguments must be of type string or ",e,!1,void 0,n);}(t,r,n);if(!l.contains(i))throw new S(C.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t));})(e,i)||e.push(i);}a=new ea(e),o=l.fieldTransforms.filter(e=>a.covers(e.field));}else a=null,o=l.fieldTransforms;return new iU(new ex(u),a,o);})(iz(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,tb.exists(!1))]).then(()=>i);}function sl(e,...t){var n,r,i;let s,a,o;e=(0,c.getModularInstance)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||iD(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(iD(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e);}if(e instanceof iC)a=i_(e.firestore,ik),o=new e3(e._key.path),s={next:n=>{t[u]&&t[u](function(e,t,n){let r=n.docs.get(t._key),i=new si(e);return new st(e,i,t._key,r,new se(n.hasPendingWrites,n.fromCache),t.converter);}(a,e,n));},error:t[u+1],complete:t[u+2]};else{let n=i_(e,iI);a=i_(n.firestore,ik),o=n._query;let r=new si(a);s={next:e=>{t[u]&&t[u](new sr(a,r,n,e));},error:t[u+1],complete:t[u+2]},i0(e._query);}return function(e,t,n,r){let i=new ia(r),s=new rO(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>rx(await id(e),s)),()=>{i.$a(),e.asyncQueue.enqueueAndForget(async()=>rM(await id(e),s));};}(iL(a),o,h,s);}function su(e,t){return function(e,t){let n=new A;return e.asyncQueue.enqueueAndForget(async()=>rX(await ic(e).then(e=>e.syncEngine),t,n)),n.promise;}(iL(e),t);}new WeakMap,function(e=!0){p=l.SDK_VERSION,(0,l._registerComponent)(new u.Component("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new ik(new k(t.getProvider("auth-internal")),new M(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ey(e.options.projectId,t);}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s;},"PUBLIC").setMultipleInstances(!0)),(0,l.registerVersion)(m,"4.6.3",void 0),(0,l.registerVersion)(m,"4.6.3","esm2017");}();},});