(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{3943:function(e,t,n){"use strict";n.d(t,{$s:function(){return R},BH:function(){return v},L:function(){return c},LL:function(){return A},P0:function(){return w},Rd:function(){return h},Sg:function(){return _},US:function(){return o},ZR:function(){return k},aH:function(){return b},eu:function(){return I},hl:function(){return E},k$:function(){return D},m9:function(){return O},ru:function(){return y},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let r=t[a],o=n[a];if(S(r)&&S(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},zI:function(){return T}});var r=n(357);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;s||(d=64,a||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==l)throw new s;let c=i<<2|a>>4;if(r.push(c),64!==o){let e=a<<4&240|o>>2;if(r.push(e),64!==l){let e=o<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")}/**
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
 */let d=()=>h().__FIREBASE_DEFAULTS__,p=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return d()||p()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=e=>{let t=m(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},b=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
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
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(a)),""].join(".")}function y(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function T(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(C,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new k(r,o,n)}}let C=/\{\$([^}]+)}/g;function S(e){return null!==e&&"object"==typeof e}/**
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
 */let D=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})};function R(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
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
 */function O(e){return e&&e._delegate?e._delegate:e}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},357:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(8081)},8081:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,u=-1;function h(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(h);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},8885:function(e,t,n){"use strict";n.d(t,{Jn:function(){return y},KN:function(){return T},Mq:function(){return I},Xd:function(){return w},ZF:function(){return E},qX:function(){return b}});var r=n(2680),i=n(9053),a=n(3943),o=n(6512);/**
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
 */class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",c="0.10.3",u=new i.Yd("@firebase/app"),h="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,f=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function w(e){let t=e.name;if(g.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(g.set(t,e),p.values()))m(n,e);for(let t of f.values())m(t,e);return!0}function b(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let v=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class _{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}/**
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
 */let y="10.12.0";function E(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw v.create("bad-app-name",{appName:String(o)});if(n||(n=(0,a.aH)()),!n)throw v.create("no-options");let s=p.get(o);if(s){if((0,a.vZ)(n,s.options)&&(0,a.vZ)(i,s.config))return s;throw v.create("duplicate-app",{appName:o})}let l=new r.H0(o);for(let e of g.values())l.addComponent(e);let c=new _(n,i,l);return p.set(o,c),c}function I(e=h){let t=p.get(e);if(!t&&e===h&&(0,a.aH)())return E();if(!t)throw v.create("no-app",{appName:e});return t}function T(e,t,n){var i;let a=null!==(i=d[e])&&void 0!==i?i:e;n&&(a+=`-${n}`);let o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=[`Unable to register library "${a}" with version "${t}":`];o&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),u.warn(e.join(" "));return}w(new r.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let k="firebase-heartbeat-store",A=null;function C(){return A||(A=(0,o.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(k)}catch(e){console.warn(e)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),A}async function S(e){try{let t=(await C()).transaction(k),n=await t.objectStore(k).get(R(e));return await t.done,n}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=v.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function D(e,t){try{let n=(await C()).transaction(k,"readwrite"),r=n.objectStore(k);await r.put(t,R(e)),await n.done}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=v.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function R(e){return`${e.name}!${e.options.appId}`}class O{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new x(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=N();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=N(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),P(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,a.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function N(){return new Date().toISOString().substring(0,10)}class x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await S(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function P(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}w(new r.wA("platform-logger",e=>new s(e),"PRIVATE")),w(new r.wA("heartbeat",e=>new O(e),"PRIVATE")),T(l,c,""),T(l,c,"esm2017"),T("fire-js","")},2680:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(3943);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let a="[DEFAULT]";/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9053:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return u}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},7175:function(e,t,n){"use strict";let r,i,a,o;n.d(t,{IH:function(){return eE},Kz:function(){return eI}});var s=n(8885),l=n(9053),c=n(3943),u=n(2680),h=n(6512);let d="@firebase/installations",p="0.6.7",f=`w:${p}`,g="FIS_v2",m=new c.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function w(e){return e instanceof c.ZR&&e.code.includes("request-failed")}/**
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
 */function b({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function _(e,t){let n=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function E(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function I({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=b(e),i=y(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({fid:n,authVersion:g,appId:e.appId,sdkVersion:f})},s=await E(()=>fetch(r,o));if(s.ok){let e=await s.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await _("Create Installation",s)}/**
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
 */function T(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let k=/^[cdef][\w-]{21}$/;/**
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
 */function A(e){return`${e.appName}!${e.appId}`}/**
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
 */let C=new Map;function S(e,t){let n=A(e);D(n,t),function(e,t){let n=(!R&&"BroadcastChannel"in self&&((R=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{D(e.data.key,e.data.fid)}),R);n&&n.postMessage({key:e,fid:t}),0===C.size&&R&&(R.close(),R=null)}(n,t)}function D(e,t){let n=C.get(e);if(n)for(let e of n)e(t)}let R=null,O="firebase-installations-store",N=null;function x(){return N||(N=(0,h.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(O)}})),N}async function P(e,t){let n=A(e),r=(await x()).transaction(O,"readwrite"),i=r.objectStore(O),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||S(e,t.fid),t}async function L(e){let t=A(e),n=(await x()).transaction(O,"readwrite");await n.objectStore(O).delete(t),await n.done}async function B(e,t){let n=A(e),r=(await x()).transaction(O,"readwrite"),i=r.objectStore(O),a=await i.get(n),o=t(a);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&S(e,o.fid),o}/**
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
 */async function U(e){let t;let n=await B(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(m.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=M(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:$(e)}:{installationEntry:t}}(e,j(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return k.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function M(e,t){try{let n=await I(e,t);return P(e.appConfig,n)}catch(n){throw w(n)&&409===n.customData.serverCode?await L(e.appConfig):await P(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function $(e){let t=await F(e.appConfig);for(;1===t.registrationStatus;)await T(100),t=await F(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await U(e);return n||t}return t}function F(e){return B(e,e=>{if(!e)throw m.create("installation-not-found");return j(e)})}function j(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function H({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=y(e);return n.append("Authorization",`${g} ${t}`),n}(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:f,appId:e.appId}})},s=await E(()=>fetch(r,o));if(s.ok)return v(await s.json());throw await _("Generate Auth Token",s)}/**
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
 */async function z(e,t=!1){let n;let r=await B(e.appConfig,r=>{var i;if(!K(r))throw m.create("not-registered");let a=r.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return n=V(e,t),r;{if(!navigator.onLine)throw m.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=W(e,t),t}});return n?await n:r.authToken}async function V(e,t){let n=await q(e.appConfig);for(;1===n.authToken.requestStatus;)await T(100),n=await q(e.appConfig);let r=n.authToken;return 0===r.requestStatus?z(e,t):r}function q(e){return B(e,e=>{var t;if(!K(e))throw m.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W(e,t){try{let n=await H(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await P(e.appConfig,r),n}catch(n){if(w(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await L(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await P(e.appConfig,n)}throw n}}function K(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function X(e){let{installationEntry:t,registrationPromise:n}=await U(e);return n?n.catch(console.error):z(e).catch(console.error),t.fid}/**
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
 */async function J(e,t=!1){return await G(e),(await z(e,t)).token}async function G(e){let{registrationPromise:t}=await U(e);t&&await t}function Z(e){return m.create("missing-app-config-values",{valueName:e})}/**
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
 */let Y="installations";(0,s.Xd)(new u.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw Z(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,s.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,s.Xd)(new u.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,s.qX)(t,Y).getImmediate();return{getId:()=>X(n),getToken:e=>J(n,e)}},"PRIVATE")),(0,s.KN)(d,p),(0,s.KN)(d,p,"esm2017");/**
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
 */let Q="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new l.Yd("@firebase/analytics"),en=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function er(e){if(!e.startsWith(ee)){let t=en.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,n,r,i,a){let o=r[i];try{if(o)await t[o];else{let e=(await ei(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,a)}async function eo(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await ei(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){et.error(e)}}class es{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let el=new es;async function ec(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let e="";try{let n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw en.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function eu(e,t=el,n){let{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw en.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw en.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ed;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),eh({appId:r,apiKey:i,measurementId:a},o,s,t)}async function eh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=el){var a;let{appId:o,measurementId:s}=e;try{await new Promise((e,n)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));r.addEventListener(()=>{clearTimeout(i),n(en.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(s)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:s};throw e}try{let t=await ec(e);return i.deleteThrottleMetadata(o),t}catch(u){if(!function(e){if(!(e instanceof c.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(i.deleteThrottleMetadata(o),s)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:o,measurementId:s};throw u}let t=503===Number(null===(a=null==u?void 0:u.customData)||void 0===a?void 0:a.httpStatus)?(0,c.$s)(n,i.intervalMillis,30):(0,c.$s)(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(o,l),et.debug(`Calling attemptFetch again in ${t} millis`),eh(e,l,r,i)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ep(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}/**
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
 */async function ef(){if(!(0,c.hl)())return et.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(e){return et.warn(en.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function eg(e,t,n,a,o,s,l){var c;let u=eu(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(u);let h=ef().then(e=>e?a.getId():void 0),[d,p]=await Promise.all([u,h]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(s)&&function(e,t){var n,r;let i;let a=(n="firebase-js-sdk-policy",r={createScriptURL:er},window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,r)),i),o=document.createElement("script"),s=`${ee}?l=${e}&id=${t}`;o.src=a?null==a?void 0:a.createScriptURL(s):s,o.async=!0,document.head.appendChild(o)}(s,d.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let f=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return f.origin="firebase",f.update=!0,null!=p&&(f.firebase_id=p),o("config",d.measurementId,f),r&&(o("set",r),r=void 0),d.measurementId}/**
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
 */class em{constructor(e){this.app=e}_delete(){return delete ew[this.app.options.appId],Promise.resolve()}}let ew={},eb=[],ev={},e_="dataLayer",ey=!1;function eE(e=(0,s.Mq)()){e=(0,c.m9)(e);let t=(0,s.qX)(e,Q);return t.isInitialized()?t.getImmediate():function(e,t={}){let n=(0,s.qX)(e,Q);if(n.isInitialized()){let e=n.getImmediate();if((0,c.vZ)(t,n.getOptions()))return e;throw en.create("already-initialized")}return n.initialize({options:t})}(e)}function eI(e,t,n,r){e=(0,c.m9)(e),ep(o,ew[e.app.options.appId],t,n,r).catch(e=>et.error(e))}let eT="@firebase/analytics",ek="0.10.3";(0,s.Xd)(new u.wA(Q,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if((0,c.ru)()&&e.push("This is a browser extension environment."),(0,c.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=en.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}();let r=e.options.appId;if(!r)throw en.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw en.create("no-api-key")}if(null!=ew[r])throw en.create("already-exists",{id:r});if(!ey){var i,s;let e,t;e=[],Array.isArray(window[e_])?e=window[e_]:window[e_]=e;let{wrappedGtag:n,gtagCore:r}=(i="gtag",t=function(...e){window[e_].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(s=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await eo(s,ew,eb,e,n)}else if("config"===e){let[e,n]=t;await ea(s,ew,eb,ev,e,n)}else if("consent"===e){let[e]=t;s("consent","update",e)}else if("get"===e){let[e,n,r]=t;s("get",e,n,r)}else if("set"===e){let[e]=t;s("set",e)}else s(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});o=n,a=r,ey=!0}return ew[r]=eg(e,eb,ev,t,a,e_,n),new em(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,s.Xd)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,n,r)=>eI(t,e,n,r)}}catch(e){throw en.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,s.KN)(eT,ek),(0,s.KN)(eT,ek,"esm2017")},4495:function(e,t,n){"use strict";n.d(t,{z9:function(){return q},yu:function(){return W}});var r=n(8885),i=n(2680),a=n(3943),o=n(9053);/**
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
 */let s=new Map,l={activated:!1,tokenObservers:[]},c={initialized:!1,enabled:!1};function u(e){return s.get(e)||Object.assign({},l)}/**
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
 */let h="https://content-firebaseappcheck.googleapis.com/v1";/**
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
 */class d{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{var t;this.pending=new a.BH,this.pending.promise.catch(e=>{}),await (t=this.getNextRun(e),new Promise(e=>{setTimeout(e,t)})),this.pending.resolve(),await this.pending.promise,this.pending=new a.BH,this.pending.promise.catch(e=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}let p=new a.LL("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});/**
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
 */function f(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function g(e){if(!u(e).activated)throw p.create("use-before-activation",{appName:e.name})}function m(e){let t=Math.round(e/1e3),n=Math.floor(t/86400),r=Math.floor((t-86400*n)/3600),i=Math.floor((t-86400*n-3600*r)/60),a="";return n&&(a+=w(n)+"d:"),r&&(a+=w(r)+"h:"),a+=w(i)+"m:"+w(t-86400*n-3600*r-60*i)+"s"}function w(e){return 0===e?"00":e>=10?e.toString():"0"+e}/**
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
 */async function b({url:e,body:t},n){let r,i;let a={"Content-Type":"application/json"},o=n.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&(a["X-Firebase-Client"]=e)}let s={method:"POST",body:JSON.stringify(t),headers:a};try{r=await fetch(e,s)}catch(e){throw p.create("fetch-network-error",{originalErrorMessage:null==e?void 0:e.message})}if(200!==r.status)throw p.create("fetch-status-error",{httpStatus:r.status});try{i=await r.json()}catch(e){throw p.create("fetch-parse-error",{originalErrorMessage:null==e?void 0:e.message})}let l=i.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw p.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${i.ttl}`});let c=1e3*Number(l[1]),u=Date.now();return{token:i.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function v(e,t){let{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${h}/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}let _="firebase-app-check-store",y="debug-token",E=null;function I(){return E||(E=new Promise((e,t)=>{try{let n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(p.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{let t=e.target.result;0===e.oldVersion&&t.createObjectStore(_,{keyPath:"compositeKey"})}}catch(e){t(p.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}}))}async function T(e,t){let n=(await I()).transaction(_,"readwrite"),r=n.objectStore(_).put({compositeKey:e,value:t});return new Promise((e,t)=>{r.onsuccess=t=>{e()},n.onerror=e=>{var n;t(p.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}})}async function k(e){let t=(await I()).transaction(_,"readonly"),n=t.objectStore(_).get(e);return new Promise((e,r)=>{n.onsuccess=t=>{let n=t.target.result;n?e(n.value):e(void 0)},t.onerror=e=>{var t;r(p.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}})}function A(e){return`${e.options.appId}-${e.name}`}/**
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
 */let C=new o.Yd("@firebase/app-check");/**
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
 */async function S(e){if((0,a.hl)()){let t;try{t=await k(A(e))}catch(e){C.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function D(e,t){return(0,a.hl)()?T(A(e),t).catch(e=>{C.warn(`Failed to write token to IndexedDB. Error: ${e}`)}):Promise.resolve()}async function R(){let e;try{e=await k(y)}catch(e){}if(e)return e;{let e=(0,a.k$)();return T(y,e).catch(e=>C.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`)),e}}/**
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
 */function O(){return c.enabled}async function N(){if(c.enabled&&c.token)return c.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}/**
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
 */let x={error:"UNKNOWN_ERROR"};async function P(e,t=!1){let n,r;let i=e.app;g(i);let a=u(i),o=a.token;if(o&&!F(o)&&(a.token=void 0,o=void 0),!o){let e=await a.cachedTokenPromise;e&&(F(e)?o=e:await D(i,void 0))}if(!t&&o&&F(o))return{token:o.token};let s=!1;if(O()){a.exchangeTokenPromise||(a.exchangeTokenPromise=b(v(i,await N()),e.heartbeatServiceProvider).finally(()=>{a.exchangeTokenPromise=void 0}),s=!0);let t=await a.exchangeTokenPromise;return await D(i,t),a.token=t,{token:t.token}}try{a.exchangeTokenPromise||(a.exchangeTokenPromise=a.provider.getToken().finally(()=>{a.exchangeTokenPromise=void 0}),s=!0),o=await u(i).exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?C.warn(e.message):C.error(e),r=e}return o?r?n=F(o)?{token:o.token,internalError:r}:j(r):(n={token:o.token},a.token=o,await D(i,o)):n=j(r),s&&$(i,n),n}async function L(e){let t=e.app;g(t);let{provider:n}=u(t);if(O()){let n=await N(),{token:r}=await b(v(t,n),e.heartbeatServiceProvider);return{token:r}}{let{token:e}=await n.getToken();return{token:e}}}function B(e,t,n,r){let{app:i}=e,a=u(i);if(a.tokenObservers=[...a.tokenObservers,{next:n,error:r,type:t}],a.token&&F(a.token)){let t=a.token;Promise.resolve().then(()=>{n({token:t.token}),M(e)}).catch(()=>{})}a.cachedTokenPromise.then(()=>M(e))}function U(e,t){let n=u(e),r=n.tokenObservers.filter(e=>e.next!==t);0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function M(e){let{app:t}=e,n=u(t),r=n.tokenRefresher;r||(r=function(e){let{app:t}=e;return new d(async()=>{let n;if((n=u(t).token?await P(e,!0):await P(e)).error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{let e=u(t);if(!e.token)return 0;{let t=e.token.issuedAtTimeMillis+(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)*.5+3e5;return Math.max(0,(t=Math.min(t,e.token.expireTimeMillis-3e5))-Date.now())}},3e4,96e4)}(e),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function $(e,t){for(let n of u(e).tokenObservers)try{"EXTERNAL"===n.type&&null!=t.error?n.error(t.error):n.next(t)}catch(e){}}function F(e){return e.expireTimeMillis-Date.now()>0}function j(e){return{token:a.US.encodeString(JSON.stringify(x),!1),error:e}}/**
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
 */class H{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:e}=u(this.app);for(let t of e)U(this.app,t.next);return Promise.resolve()}}function z(e,t,n,r,i){n.ready(()=>{(function(e,t,n,r){let i=n.render(r,{sitekey:t,size:"invisible",callback:()=>{u(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{u(e).reCAPTCHAState.succeeded=!1}}),a=u(e);a.reCAPTCHAState=Object.assign(Object.assign({},a.reCAPTCHAState),{widgetId:i})})(e,t,n,r),i.resolve(n)})}async function V(e){g(e);let t=u(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise((t,r)=>{let i=u(e).reCAPTCHAState;n.ready(()=>{t(n.execute(i.widgetId,{action:"fire_app_check"}))})})}/**
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
 */class q{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,n;let r;!function(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw p.create("throttled",{time:m(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}(this._throttleData);let i=await V(this._app).catch(e=>{throw p.create("recaptcha-error")});if(!(null===(e=u(this._app).reCAPTCHAState)||void 0===e?void 0:e.succeeded))throw p.create("recaptcha-error");try{r=await b(function(e,t){let{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${h}/projects/${n}/apps/${r}:exchangeRecaptchaV3Token?key=${i}`,body:{recaptcha_v3_token:t}}}(this._app,i),this._heartbeatServiceProvider)}catch(e){if(null===(t=e.code)||void 0===t?void 0:t.includes("fetch-status-error"))throw this._throttleData=function(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};{let n=t?t.backoffCount:0,r=(0,a.$s)(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}(Number(null===(n=e.customData)||void 0===n?void 0:n.httpStatus),this._throttleData),p.create("throttled",{time:m(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus});throw e}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=(0,r.qX)(e,"heartbeat"),(function(e,t){let n=new a.BH;u(e).reCAPTCHAState={initialized:n};let r=function(e){let t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}(e),i=f(!1);return i?z(e,t,i,r,n):function(e){let t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js",t.onload=e,document.head.appendChild(t)}(()=>{let i=f(!1);if(!i)throw Error("no recaptcha");z(e,t,i,r,n)}),n.promise})(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof q&&this._siteKey===e._siteKey}}/**
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
 */function W(e=(0,r.Mq)(),t){e=(0,a.m9)(e);let n=(0,r.qX)(e,"app-check");if(c.initialized||function(){let e=(0,a.Rd)();if(c.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;c.enabled=!0;let t=new a.BH;c.token=t,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?t.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(R())}(),O()&&N().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){let r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return r;throw p.create("already-initialized",{appName:e.name})}let i=n.initialize({options:t});return function(e,t,n){var r;let i=(r=Object.assign({},l),s.set(e,r),s.get(e));i.activated=!0,i.provider=t,i.cachedTokenPromise=S(e).then(t=>(t&&F(t)&&(i.token=t,$(e,{token:t.token})),t)),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,i.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),u(e).isTokenAutoRefreshEnabled&&B(i,"INTERNAL",()=>{}),i}let K="app-check-internal";(0,r.Xd)(new i.wA("app-check",e=>new H(e.getProvider("app").getImmediate(),e.getProvider("heartbeat")),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(K).initialize()})),(0,r.Xd)(new i.wA(K,e=>{var t;return t=e.getProvider("app-check").getImmediate(),{getToken:e=>P(t,e),getLimitedUseToken:()=>L(t),addTokenListener:e=>B(t,"INTERNAL",e),removeTokenListener:e=>U(t.app,e)}},"PUBLIC").setInstantiationMode("EXPLICIT")),(0,r.KN)("@firebase/app-check","0.8.4")},5236:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(8885);/**
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
 */(0,r.KN)("firebase","10.12.0","app")},8116:function(e,t,n){"use strict";n.d(t,{$C:function(){return v},V1:function(){return _}});var r,i=n(8885),a=n(3943),o=n(2680);function s(e,t){let n={};for(let r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function l(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let t=Number(e.value);if(isNaN(t))throw Error("Data cannot be decoded from JSON: "+e);return t}default:throw Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>l(e)):"function"==typeof e||"object"==typeof e?s(e,e=>l(e)):e}/**
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
 */let c="functions",u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class h extends a.ZR{constructor(e,t,n){super(`${c}/${e}`,t||""),this.details=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="us-central1";class f{constructor(e,t,n,r,i=p,a){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new d(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(i);this.customDomain=e.origin,this.region=p}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;if(null!==this.emulatorOrigin){let n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}async function g(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let a=null;try{a=await i.json()}catch(e){}return{status:i.status,json:a}}async function m(e,t,n,r){var i;let a;let o={data:n=function e(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t)||!0===t||!1===t||"[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(t=>e(t));if("function"==typeof t||"object"==typeof t)return s(t,t=>e(t));throw Error("Data cannot be encoded in JSON: "+t)}(n)},c={},d=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);d.authToken&&(c.Authorization="Bearer "+d.authToken),d.messagingToken&&(c["Firebase-Instance-ID-Token"]=d.messagingToken),null!==d.appCheckToken&&(c["X-Firebase-AppCheck"]=d.appCheckToken);let p=(i=r.timeout||7e4,a=null,{promise:new Promise((e,t)=>{a=setTimeout(()=>{t(new h("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{a&&clearTimeout(a)}}),f=await Promise.race([g(t,o,c,e.fetchImpl),p.promise,e.cancelAllRequests]);if(p.cancel(),!f)throw new h("cancelled","Firebase Functions instance was deleted.");let m=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{let e=t&&t.error;if(e){let t=e.status;if("string"==typeof t){if(!u[t])return new h("internal","internal");r=u[t],i=t}let a=e.message;"string"==typeof a&&(i=a),n=e.details,void 0!==n&&(n=l(n))}}catch(e){}return"ok"===r?null:new h(r,i,n)}(f.status,f.json);if(m)throw m;if(!f.json)throw new h("internal","Response is not valid JSON object.");let w=f.json.data;if(void 0===w&&(w=f.json.result),void 0===w)throw new h("internal","Response is missing data field.");return{data:l(w)}}let w="@firebase/functions",b="0.11.5";/**
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
 */function v(e=(0,i.Mq)(),t=p){let n=(0,i.qX)((0,a.m9)(e),c).getImmediate({identifier:t}),r=(0,a.P0)("functions");return r&&function(e,t,n){(0,a.m9)(e).emulatorOrigin=`http://${t}:${n}`}(n,...r),n}function _(e,t,n){var r;return r=(0,a.m9)(e),e=>(function(e,t,n,r){let i=e._url(t);return m(e,i,n,r)})(r,t,e,n||{})}r=fetch.bind(self),(0,i.Xd)(new o.wA(c,(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate();return new f(n,e.getProvider("auth-internal"),e.getProvider("messaging-internal"),e.getProvider("app-check-internal"),t,r)},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(w,b,void 0),(0,i.KN)(w,b,"esm2017")},9854:function(e,t,n){"use strict";n.d(t,{Jt:function(){return er},cF:function(){return ea},iH:function(){return ei},sf:function(){return en}});var r,i,a,o,s=n(8885),l=n(3943),c=n(2680);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com",h="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(e){return"storage/"+e}function f(){return new d(a.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(e){return new d(a.INVALID_ARGUMENT,e)}function m(){return new d(a.APP_DELETED,"The Firebase app was deleted.")}function w(e,t){return new d(a.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function b(e){throw new d(a.INTERNAL_ERROR,"Internal error: "+e)}(r=a||(a={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=v.makeFromUrl(e,t)}catch(t){return new v(e,"")}if(""===n.path)return n;throw new d(a.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}let s=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:RegExp(`^https?://${t===u?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<l.length;t++){let r=l[t],i=r.regex.exec(e);if(i){let e=i[r.indices.bucket],t=i[r.indices.path];t||(t=""),n=new v(e,t),r.postModify(n);break}}if(null==n)throw new d(a.INVALID_URL,"Invalid URL '"+e+"'.");return n}}class _{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function y(e){return"string"==typeof e||e instanceof String}function E(e){return I()&&e instanceof Blob}function I(){return"undefined"!=typeof Blob}function T(e,t,n,r){if(r<t)throw g(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw g(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function A(e){let t=encodeURIComponent,n="?";for(let r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n.slice(0,-1)}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t,n,r,i,a,o,s,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){let e=f();e.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,e):e)}else r(t.canceled?this.appDelete_?m():new d(a.CANCELED,"User canceled the upload/download."):new d(a.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(!1,new S(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){let r=1,i=null,a=null,o=!1,s=0,l=!1;function c(...e){l||(l=!0,t.apply(null,e))}function u(t){i=setTimeout(()=>{i=null,e(d,2===s)},t)}function h(){a&&clearTimeout(a)}function d(e,...t){let n;if(l){h();return}if(e||2===s||o){h(),c.call(null,e,...t);return}r<64&&(r*=2),1===s?(s=2,n=0):n=(r+Math.random())*1e3,u(n)}let p=!1;function f(e){!p&&(p=!0,h(),!l&&(null!==i?(e||(s=2),clearTimeout(i),u(0)):e||(s=1)))}return u(0),a=setTimeout(()=>{o=!0,f(!0)},n),f}((e,t)=>{if(t){e(!1,new S(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===o.NO_ERROR,i=n.getStatus();if(!t||/**
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
 */function(e,t){let n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){e(!1,new S(!1,null,n.getErrorCode()===o.ABORT));return}e(!0,new S(-1!==this.successCodes_.indexOf(i),n))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class S{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function D(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(I())return new Blob(e);throw new d(a.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class O{constructor(e,t){this.data=e,this.contentType=t||null}}function N(e,t){switch(e){case R.RAW:return new O(x(t));case R.BASE64:case R.BASE64URL:return new O(P(e,t));case R.DATA_URL:return new O(function(e){let t=new L(e);return t.base64?P(R.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw w(R.DATA_URL,"Malformed data URL.")}return x(t)}(t.rest)}(t),new L(t).contentType)}throw f()}function x(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<=127?t.push(r):r<=2047?t.push(192|r>>6,128|63&r):(64512&r)==55296?n<e.length-1&&(64512&e.charCodeAt(n+1))==56320?(r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):t.push(239,191,189):(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function P(e,t){let n;switch(e){case R.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw w(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case R.BASE64URL:{let n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r)throw w(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{n=/**
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
 */function(e){if("undefined"==typeof atob)throw new d(a.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw w(e,"Invalid character found")}let r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class L{constructor(e){var t;this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(null===n)throw w(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;null!=r&&(this.base64=(t=";base64",r.length>=t.length&&r.substring(r.length-t.length)===t),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){let n=0,r="";E(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(!E(this.data_))return new B(new Uint8Array(this.data_.buffer,e,t-e),!0);{var n;let r=(n=this.data_).webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null;return null===r?null:new B(r)}}static getBlob(...e){if(I()){let t=e.map(e=>e instanceof B?e.data_:e);return new B(D.apply(null,t))}{let t=e.map(e=>y(e)?N(R.RAW,e).data:e.data_),n=0;t.forEach(e=>{n+=e.byteLength});let r=new Uint8Array(n),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new B(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){var t;let n;try{n=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function M(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){return t}class F{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||$}}let j=null;function H(){if(j)return j;let e=[];e.push(new F("bucket")),e.push(new F("generation")),e.push(new F("metageneration")),e.push(new F("name","fullPath",!0));let t=new F("name");t.xform=function(e,t){return!y(t)||t.length<2?t:M(t)},e.push(t);let n=new F("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new F("timeCreated")),e.push(new F("updated")),e.push(new F("md5Hash",null,!0)),e.push(new F("cacheControl",null,!0)),e.push(new F("contentDisposition",null,!0)),e.push(new F("contentEncoding",null,!0)),e.push(new F("contentLanguage",null,!0)),e.push(new F("contentType",null,!0)),e.push(new F("metadata","customMetadata",!0)),j=e}function z(e,t,n){let r=U(t);return null===r?null:function(e,t,n){let r={};r.type="file";let i=n.length;for(let e=0;e<i;e++){let i=n[e];r[i.local]=i.xform(r,t[i.server])}return Object.defineProperty(r,"ref",{get:function(){let t=new v(r.bucket,r.fullPath);return e._makeStorageReference(t)}}),r}(e,r,n)}class V{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(!e)throw f()}function W(e){return function(t,n){var r,i;let o;return 401===t.getStatus()?o=t.getErrorText().includes("Firebase App Check token is invalid")?new d(a.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(a.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,o=new d(a.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,o=new d(a.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):o=n,o.status=t.getStatus(),o.serverResponse=n.serverResponse,o}}class K{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class X extends K{initXhr(){this.xhr_.responseType="text"}}function J(){return new X}/**
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
 */class G{constructor(e,t){this._service=e,t instanceof v?this._location=t:this._location=v.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new G(e,t)}get root(){let e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new v(this._location.bucket,e);return new G(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(a.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function Z(e,t){let n=null==t?void 0:t[h];return null==n?null:v.makeFromBucketSpec(n,e)}class Y{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=v.makeFromBucketSpec(r,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=Z(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){T("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new G(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new _(m());{let a=function(e,t,n,r,i,a,o=!0){let s=A(e.urlParams),l=e.url+s,c=Object.assign({},e.headers);return t&&(c["X-Firebase-GMPID"]=t),null!==n&&n.length>0&&(c.Authorization="Firebase "+n),c["X-Firebase-Storage-Version"]="webjs/"+(null!=a?a:"AppManager"),null!==r&&(c["X-Firebase-AppCheck"]=r),new C(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let Q="@firebase/storage",ee="0.12.5",et="storage";function en(e,t,n,r){return function(e,t,n=R.RAW,r){e._throwIfRoot("uploadString");let i=N(n,t),o=Object.assign({},r);return null==o.contentType&&null!=i.contentType&&(o.contentType=i.contentType),function(e,t,n){e._throwIfRoot("uploadBytes");let r=function(e,t,n,r,i){let o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},l=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+l;let c=function(e,t,n){let r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),!r.contentType&&(r.contentType=t&&t.type()||"application/octet-stream"),r}(t,r,i),u="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){let n={},r=t.length;for(let i=0;i<r;i++){let r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(c,n)+"\r\n--"+l+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h=B.getBlob(u,r,"\r\n--"+l+"--");if(null===h)throw new d(a.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let p={name:c.fullPath},f=new V(k(o,e.host,e._protocol),"POST",function(t,r){let i=z(e,r,n);return q(null!==i),i},e.maxUploadRetryTime);return f.urlParams=p,f.headers=s,f.body=h.uploadData(),f.errorHandler=W(t),f}(e.storage,e._location,H(),new B(t,!0),n);return e.storage.makeRequestWithTokens(r,J).then(t=>({metadata:t,ref:e}))}(e,i.data,o)}(e=(0,l.m9)(e),t,n,r)}function er(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){let r=new V(k(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,r){let i=z(e,r,n);return q(null!==i),function(e,t,n,r){let i=U(t);if(null===i||!y(i.downloadTokens))return null;let a=i.downloadTokens;if(0===a.length)return null;let o=encodeURIComponent;return a.split(",").map(t=>{let i=e.bucket,a=e.fullPath;return k("/b/"+o(i)+"/o/"+o(a),n,r)+A({alt:"media",token:t})})[0]}(i,r,e.host,e._protocol)},e.maxOperationRetryTime);return r.errorHandler=function(e){let t=W(e);return function(n,r){let i=t(n,r);if(404===n.getStatus()){var o;o=e.path,i=new d(a.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")}return i.serverResponse=r.serverResponse,i}}(t),r}(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,J).then(e=>{if(null===e)throw new d(a.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ei(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,n){if(t instanceof Y){if(null==t._bucket)throw new d(a.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let r=new G(t,t._bucket);return null!=n?e(r,n):r}return void 0!==n?function(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new v(e._location.bucket,n);return new G(e.storage,r)}(t,n):t}(e,t);if(e instanceof Y)return new G(e,t);throw g("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ea(e=(0,s.Mq)(),t){e=(0,l.m9)(e);let n=(0,s.qX)(e,et).getImmediate({identifier:t}),r=(0,l.P0)("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(0,s.Xd)(new c.wA(et,function(e,{instanceIdentifier:t}){return new Y(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,s.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(Q,ee,""),(0,s.KN)(Q,ee,"esm2017")},6512:function(e,t,n){"use strict";let r,i,a;n.d(t,{X3:function(){return g}});let o=(e,t)=>t.some(t=>e instanceof t),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(p(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(f(this),e),p(s.get(this))}:function(...e){return p(t.apply(f(this),e))}:function(e,...n){let r=t.call(f(this),e,...n);return c.set(r,e.sort?e.sort():[e]),p(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),o(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return n!==e&&(u.set(e,n),h.set(n,e)),n}let f=e=>h.get(e);function g(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=p(o);return r&&o.addEventListener("upgradeneeded",e=>{r(p(o.result),e.oldVersion,e.newVersion,p(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let m=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return b.set(t,a),a}d={...a=d,get:(e,t,n)=>v(e,t)||a.get(e,t,n),has:(e,t)=>!!v(e,t)||a.has(e,t)}},2290:function(e,t,n){"use strict";n.d(t,{x0:function(){return r}});let r=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t}}}]);