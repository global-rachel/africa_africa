(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1528d3c1"],{"0698":function(e,t,n){var r={"./sa-01-trevor.jpeg":"1cf8","./sa-02-blackcoffee.jpeg":"c610","./sa-03-zozibini.jpeg":"79c5"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="0698"},"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b4"),s=n("5270"),a=n("4a7b"),c=n("848b"),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new o,response:new o}}f.prototype.request=function(e,t){if("string"===typeof e?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!i){var l=[s,void 0];Array.prototype.unshift.apply(l,r),l=l.concat(f),o=Promise.resolve(t);while(l.length)o=o.then(l.shift(),l.shift());return o}var p=t;while(r.length){var d=r.shift(),h=r.shift();try{p=d(p)}catch(b){h(b);break}}try{o=s(p)}catch(b){return Promise.reject(b)}while(f.length)o=o.then(f.shift(),f.shift());return o},f.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=f},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),f=n("577e"),l=n("14c3"),p=n("9263"),d=n("9f7f"),h=n("d039"),b=d.UNSUPPORTED_Y,v=[].push,m=Math.min,g=4294967295,y=!h((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=f(s(this)),o=void 0===n?g:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var a,c,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,b=new RegExp(e.source,d+"g");while(a=p.call(b,r)){if(c=b.lastIndex,c>h&&(l.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&v.apply(l,a.slice(1)),u=a[0].length,h=c,l.length>=o))break;b.lastIndex===a.index&&b.lastIndex++}return h===r.length?!u&&b.test("")||l.push(""):l.push(r.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(f(i),t,n)},function(e,i){var s=o(this),p=f(e),d=n(r,s,p,i,r!==t);if(d.done)return d.value;var h=a(s,RegExp),v=s.unicode,y=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"g":"y"),x=new h(b?"^(?:"+s.source+")":s,y),j=void 0===i?g:i>>>0;if(0===j)return[];if(0===p.length)return null===l(x,p)?[p]:[];var w=0,O=0,E=[];while(O<p.length){x.lastIndex=b?0:O;var k,C=l(x,b?p.slice(O):p);if(null===C||(k=m(u(x.lastIndex+(b?O:0)),p.length))===w)O=c(p,O,v);else{if(E.push(p.slice(w,O)),E.length===j)return E;for(var S=1;S<=C.length-1;S++)if(E.push(C[S]),E.length===j)return E;O=w=k}}return E.push(p.slice(w)),E}]}),!y,b)},"1cf8":function(e,t,n){e.exports=n.p+"static/img/sa-01-trevor.2d3687c7.jpeg"},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1e93":function(e,t,n){"use strict";n("7653")},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),o=n("387f"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}function u(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var f={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),u(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw o(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(s)})),e.exports=f}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},5270:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),s=n("2444"),a=n("7a77");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5cce":function(e,t){e.exports={version:"0.25.0"}},"5f02":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7653:function(e,t,n){},"79c5":function(e,t,n){e.exports=n.p+"static/img/sa-03-zozibini.b6b4e086.jpeg"},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},"848b":function(e,t,n){"use strict";var r=n("5cce").version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};function s(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var o=r[i],s=t[o];if(s){var a=e[o],c=void 0===a||s(a,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}}i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(i(r," has been removed"+(t?" in "+t:"")));return t&&!o[r]&&(o[r]=!0),!e||e(n,r,s)}},e.exports={assertOptions:s,validators:i}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),d=n("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",m=d>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=l("concat"),y=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},x=!m||!g;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,n,r,i,o,s=a(this),l=f(s,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],y(o)){if(i=c(o.length),p+i>b)throw TypeError(v);for(n=0;n<i;n++,p++)n in o&&u(l,p,o[n])}else{if(p>=b)throw TypeError(v);u(l,p++,o)}return l.length=p,l}})},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),s=n("30b5"),a=n("83b9"),c=n("c345"),u=n("3934"),f=n("2d83"),l=n("2444"),p=n("7a77");e.exports=function(e){return new Promise((function(t,n){var d,h=e.data,b=e.headers,v=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(h)&&delete b["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";b.Authorization="Basic "+btoa(y+":"+x)}var j=a(e.baseURL,e.url);function w(){if(g){var r="getAllResponseHeaders"in g?c(g.getAllResponseHeaders()):null,o=v&&"text"!==v&&"json"!==v?g.response:g.responseText,s={data:o,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};i((function(e){t(e),m()}),(function(e){n(e),m()}),s),g=null}}if(g.open(e.method.toUpperCase(),s(j,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=w:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(w)},g.onabort=function(){g&&(n(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var O=(e.withCredentials||u(j))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;O&&(b[e.xsrfHeaderName]=O)}"setRequestHeader"in g&&r.forEach(b,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete b[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),v&&"json"!==v&&(g.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){g&&(n(!e||e&&e.type?new p("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),g.send(h)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},bea6:function(e,t,n){"use strict";n.r(t);var r=n("f2bf"),i={class:"flex flex-wrap justify-around"};function o(e,t,n,o,s,a){var c=Object(r["F"])("Card");return Object(r["y"])(),Object(r["h"])("div",i,[(Object(r["y"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(s.peopleData,(function(e,t){return Object(r["y"])(),Object(r["h"])("div",{key:t,class:"place-self-start"},[Object(r["l"])(c,{person:e,class:"personCard"},null,8,["person"])])})),128)),a.cardNumberIsOdd?(Object(r["y"])(),Object(r["h"])("div",{key:0,style:Object(r["t"])(s.cardWidth)},null,4)):Object(r["g"])("",!0)])}var s=n("1da1");n("96cf"),n("d3b7"),n("ddb0"),n("159b"),n("ac1f"),n("1276"),n("b0c0"),n("a4d3"),n("e01a");Object(r["B"])("data-v-31049302");var a=Object(r["i"])("div",{class:"card_upper"},[Object(r["i"])("div",{class:"ball"}),Object(r["i"])("div",{class:"ball ml-2"}),Object(r["i"])("div",{class:"ball ml-2"})],-1),c=["src"],u={class:"text-white"},f=Object(r["i"])("div",{class:"flex justify-between mt-4"},[Object(r["i"])("a",{class:"box_btn text-xl md:text-2xl font-bold text-white transition-all"},[Object(r["k"])("Flip the card to find out "),Object(r["i"])("span",{class:"transition-all arrow"},"→")])],-1),l={key:1,class:"card flip-widget-back"},p=Object(r["i"])("div",{class:"card_upper"},[Object(r["i"])("div",{class:"ball"}),Object(r["i"])("div",{class:"ball ml-2"}),Object(r["i"])("div",{class:"ball ml-2"})],-1),d=["src"],h={class:"text-2xl md:text-4xl my-4 text-gray-700 font-bold"},b={class:"flex flex-wrap"},v={class:"flex justify-between mt-4"},m=["href"],g=Object(r["k"])("Visit "),y=Object(r["i"])("span",{class:"transition-all arrow"},"→",-1),x=[g,y];function j(e,t,i,o,s,g){var y=Object(r["F"])("Tag");return Object(r["y"])(),Object(r["h"])("div",{class:Object(r["s"])(["flip-widget",[e.$_isMobile()?"w-full":"w-96"]]),style:{height:"600px","margin-right":"30px","margin-bottom":"30px"}},[Object(r["i"])("div",{class:"flip-widget-inner",style:Object(r["t"])(s.flip?"transform: rotateY(180deg);":""),onClick:t[0]||(t[0]=function(){return s.flip=!s.flip})},[s.flip?(Object(r["y"])(),Object(r["h"])("div",{class:"card flip-widget-front",key:i.person.name,style:{background:"repeating-linear-gradient(-55deg,#222,#222 10px,#333 10px,#333 20px)"}},[a,Object(r["i"])("div",null,[Object(r["i"])("img",{src:n("0698")("./".concat(i.person.image)),style:{filter:"blur(10px) brightness(0.5)"}},null,8,c)]),Object(r["i"])("span",u,Object(r["I"])(i.person.question),1),f])):Object(r["g"])("",!0),s.flip?Object(r["g"])("",!0):(Object(r["y"])(),Object(r["h"])("div",l,[p,Object(r["i"])("div",null,[Object(r["i"])("img",{src:n("0698")("./".concat(i.person.image)),alt:""},null,8,d)]),Object(r["i"])("h3",h,Object(r["I"])(i.person.name),1),Object(r["i"])("div",b,[(Object(r["y"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(i.person.tags,(function(e,t){return Object(r["y"])(),Object(r["h"])("div",{key:e,class:"mr-2"},[Object(r["l"])(y,{tagname:e,colornum:t},null,8,["tagname","colornum"])])})),128))]),Object(r["i"])("span",null,Object(r["I"])(i.person.country),1),Object(r["i"])("div",null,Object(r["I"])(i.person.description),1),Object(r["i"])("div",v,[Object(r["i"])("a",{class:"box_btn text-xl md:text-2xl font-bold text-gray-700 transition-all",href:i.person.links,target:"”_blank”"},x,8,m)])]))],4)],2)}Object(r["z"])();var w=n("c009"),O={name:"Card",components:{Tag:w["a"]},props:{person:{type:Object}},data:function(){return{flip:!0}},computed:{}},E=(n("1e93"),n("6b0d")),k=n.n(E);const C=k()(O,[["render",j],["__scopeId","data-v-31049302"]]);var S=C,T=(n("99af"),n("bc3a")),A=n.n(T),N="12URHOpJPTYEvwwfP6TbTI46U7ii1TMT6oPJ8nopPM2A",P="AIzaSyB8O9Vn4B3GEJwJX6ukPYDZXZIfqk9mPMY",R=function(){var e="people",t="https://sheets.googleapis.com/v4/spreadsheets/".concat(N,"/values/").concat(e,"?alt=json&key=").concat(P);return A.a.get(t)},U={name:"People",components:{Card:S},data:function(){return{peopleData:[],cardWidth:""}},methods:{cardNumberIsOdd:function(){return this.peopleData.length%2},setEmptyCard:function(){var e=this;this.$nextTick((function(){var t=document.querySelector(".personCard").clientWidth;e.cardWidth="width: ".concat(t,"px")}))}},computed:{},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:n=t.sent,r=n.data,i=r.values.shift(),o=[],r.values.forEach((function(e){var t={};i.forEach((function(n,r){e.forEach((function(e,i){r===i&&(t[n]="tags"===n?e.split(","):e)}))})),o.push(t)})),e.peopleData=o,e.setEmptyCard();case 9:case"end":return t.stop()}}),t)})))()}};const _=k()(U,[["render",o]]);t["default"]=_},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532"),i=n("2444");e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(e){return Array.isArray(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"[object FormData]"===i.call(e)}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t}function l(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function b(e){return"[object Date]"===i.call(e)}function v(e){return"[object File]"===i.call(e)}function m(e){return"[object Blob]"===i.call(e)}function g(e){return"[object Function]"===i.call(e)}function y(e){return d(e)&&g(e.pipe)}function x(e){return"[object URLSearchParams]"===i.call(e)}function j(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function O(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=E(e[n],t):h(t)?e[n]=E({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)O(arguments[n],t);return e}function k(e,t,n){return O(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function C(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isPlainObject:h,isUndefined:s,isDate:b,isFile:v,isBlob:m,isFunction:g,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:w,forEach:O,merge:E,extend:k,trim:j,stripBOM:C}},c610:function(e,t,n){e.exports=n.p+"static/img/sa-02-blackcoffee.57029c5c.jpeg"},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),s=n("4a7b"),a=n("2444");function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n.create=function(t){return c(s(e,t))},n}var u=c(a);u.Axios=o,u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.VERSION=n("5cce").version,u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i}}]);