!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/components/Teaser/index.ts")}({"./node_modules/@biotope/element/lib/index.js":function(e,t,n){"use strict";var r=function(e){var t=document.defaultView,n=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,r="ownerSVGElement",o="http://www.w3.org/2000/svg",i="connected",s="dis"+i,a=/^style|textarea$/i,l="_hyper: "+(Math.random()*new Date|0)+";",c="\x3c!--"+l+"--\x3e",u=t.Event;try{new u("Event")}catch(e){u=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var d,f=t.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},h=0,p=t.WeakMap||function(){var e=l+h++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},m=t.WeakSet||function(){var e=new p;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},v=Array.isArray||(d={}.toString,function(e){return"[object Array]"===d.call(e)}),g=l.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function b(){return this}var y=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||w(this,n,t.call(this,e))},set:function(e){w(this,n,e)}}},w=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},x={},N={},E=[],C=N.hasOwnProperty,j=0,T={attributes:x,define:function(e,t){e.indexOf("-")<0?(e in N||(j=E.push(e)),N[e]=t):x[e]=t},invoke:function(e,t){for(var n=0;n<j;n++){var r=E[n];if(C.call(e,r))return N[r](e[r],t)}}},A=function(e,t){return O(e).createElement(t)},O=function(e){return e.ownerDocument||e},S=function(e){return O(e).createDocumentFragment()},_=function(e,t){return O(e).createTextNode(t)},k=" \\f\\n\\r\\t",$="[^ "+k+"\\/>\"'=]+",P="[ "+k+"]+"+$,L="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",M="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+$+"))?)",D=new RegExp(L+P+M+"+)([ "+k+"]*/?>)","g"),R=new RegExp(L+P+M+"*)([ "+k+"]*/>)","g"),H=S(document),B="append"in H,Z="content"in A(document,"template");H.appendChild(_(H,"g")),H.appendChild(_(H,""));var z=1===H.cloneNode(!0).childNodes.length,I="importNode"in document,F=B?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},V=new RegExp("("+P+"=)(['\"]?)"+c+"\\2","gi"),W=function(e,t,n,r){return"<"+t+n.replace(V,X)+r},X=function(e,t,n){return t+(n||'"')+l+(n||'"')},G=function(e,t){return(r in e?ee:Y)(e,t.replace(D,W))},q=z?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,o=0;o<r;o++)t.appendChild(q(n[o]));return t}:function(e){return e.cloneNode(!0)},U=I?function(e,t){return e.importNode(t,!0)}:function(e,t){return q(t)},K=[].slice,J=function(e){return Q(e)},Q=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};Q=function(e){var t="^"+e.join("^");return n[t]||(n[t]=e)}}else Q=function(e){return e};return Q(e)},Y=Z?function(e,t){var n=A(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=A(e,"template"),r=S(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var o=RegExp.$1;n.innerHTML="<table>"+t+"</table>",F(r,K.call(n.querySelectorAll(o)))}else n.innerHTML=t,F(r,K.call(n.childNodes));return r},ee=Z?function(e,t){var n=S(e),r=O(e).createElementNS(o,"svg");return r.innerHTML=t,F(n,K.call(r.childNodes)),n}:function(e,t){var n=S(e),r=A(e,"div");return r.innerHTML='<svg xmlns="'+o+'">'+t+"</svg>",F(n,K.call(r.firstChild.childNodes)),n};function te(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}te.prototype.insert=function(){var e=S(this.first);return F(e,this.childNodes),e},te.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=O(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ne=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},re=function(e,t,n){return{type:e,name:n,node:t,path:function(e){var t=[],n=void 0;switch(e.nodeType){case 1:case 11:n=e;break;case 8:n=e.parentNode,ne(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ne(t,n,e);return t}(t)}},oe=function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e},ie=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,se=function(e,t){var n=void 0,r=void 0;return function(o){switch(typeof o){case"object":if(o){if("object"===n){if(!t&&r!==o)for(var i in r)i in o||(e[i]="")}else t?e.value="":e.cssText="";var s=t?{}:e;for(var a in o){var l=o[a];s[a]="number"!=typeof l||ie.test(a)?l:l+"px"}n="object",t?e.value=ce(r=s):r=o;break}default:r!=o&&(n="string",r=o,t?e.value=o||"":e.cssText=o||"")}}},ae=/([^A-Z])([A-Z]+)/g,le=function(e,t,n){return t+"-"+n.toLowerCase()},ce=function(e){var t=[];for(var n in e)t.push(n.replace(ae,le),":",e[n],";");return t.join("")},ue=function(e,t){return e==t},de=function(e){return e},fe=function(e,t,n,r){if(null==r)t.removeChild(e(n,-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n,-1)),o.setEndAfter(e(r,-1)),o.deleteContents()}},he=function(e,t,n,r){r||(r={});for(var o=r.compare||ue,i=r.node||de,s=null==r.before?null:i(r.before,0),a=0,l=0,c=t.length-1,u=t[0],d=t[c],f=n.length-1,h=n[0],p=n[f];a<=c&&l<=f;)if(null==u)u=t[++a];else if(null==d)d=t[--c];else if(null==h)h=n[++l];else if(null==p)p=n[--f];else if(o(u,h))u=t[++a],h=n[++l];else if(o(d,p))d=t[--c],p=n[--f];else if(o(u,p))e.insertBefore(i(u,1),i(d,-0).nextSibling),u=t[++a],p=n[--f];else if(o(d,h))e.insertBefore(i(d,1),i(u,0)),d=t[--c],h=n[++l];else{var m=t.indexOf(h);if(m<0)e.insertBefore(i(h,1),i(u,0)),h=n[++l];else{for(var v=m,g=l;v<=c&&g<=f&&t[v]===n[g];)v++,g++;if(1<v-m)--m===a?e.removeChild(i(u,-1)):fe(i,e,u,t[m]),l=g,u=t[a=v],h=n[g];else{var b=t[m];t[m]=null,e.insertBefore(i(b,1),i(u,0)),h=n[++l]}}}if(a<=c||l<=f)if(c<a){var y=n[f+1],w=null==y?s:i(y,0);if(l===f)e.insertBefore(i(n[l],1),w);else{for(var x=e.ownerDocument.createDocumentFragment();l<=f;)x.appendChild(i(n[l++],1));e.insertBefore(x,w)}}else null==t[a]&&a++,a===c?e.removeChild(i(t[a],-1)):fe(i,e,t[a],t[c]);return n},pe=new m;function me(){}me.prototype=Object.create(null);var ve=function(e){return{html:e}},ge=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===te?1/n<0?n?t.remove():t.last:n?t.insert():t.first:e(t.render(),n)},be=function(e,t,n){for(var r=new me,o=e.attributes,i=K.call(o),s=[],a=i.length,c=0;c<a;c++){var u=i[c];if(u.value===l){var d=u.name;if(!(d in r)){var f=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[d]=o[f]||o[f.toLowerCase()],t.push(re("attr",r[d],f))}s.push(u)}}for(var h=s.length,p=0;p<h;p++){var m=s[p];/^id$/i.test(m.name)?e.removeAttribute(m.name):e.removeAttributeNode(s[p])}var v=e.nodeName;if(/^script$/i.test(v)){for(var g=document.createElement(v),b=0;b<o.length;b++)g.setAttributeNode(o[b].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}},ye=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ve).then(t):Promise.resolve(T.invoke(e,t)).then(t)},we=function(e){return null!=e&&"then"in e},xe=function(e,t){var n={node:ge,before:e},r=!1,o=void 0;return function i(s){switch(typeof s){case"string":case"number":case"boolean":r?o!==s&&(o=s,t[0].textContent=s):(r=!0,o=s,t=he(e.parentNode,t,[_(e,s)],n));break;case"object":case"undefined":if(null==s){r=!1,t=he(e.parentNode,t,[],n);break}default:if(r=!1,v(o=s))if(0===s.length)t.length&&(t=he(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":i({html:s});break;case"object":if(v(s[0])&&(s=s.concat.apply([],s)),we(s[0])){Promise.all(s).then(i);break}default:t=he(e.parentNode,t,s,n)}else"ELEMENT_NODE"in(a=s)||a instanceof te||a instanceof b?t=he(e.parentNode,t,11===s.nodeType?K.call(s.childNodes):[s],n):we(s)?s.then(i):"placeholder"in s?ye(s,i):"text"in s?i(String(s.text)):"any"in s?i(s.any):"html"in s?t=he(e.parentNode,t,K.call(G(e,[].concat(s.html).join("")).childNodes),n):i("length"in s?K.call(s):T.invoke(s,i))}var a}},Ne=function(e,t,n){var o=r in e,a=void 0;if("style"===t)return function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),se(r,n)}return se(e.style,n)}(e,n,o);if(/^on/.test(t)){var l=t.slice(2);return l===i||l===s?(je&&(je=!1,function(){var e=function(e,n){for(var r=new u(n),o=e.length,i=0;i<o;i++){var s=e[i];1===s.nodeType&&t(s,r)}},t=function e(t,n){pe.has(t)&&t.dispatchEvent(n);for(var r=t.children||function(e){for(var t=[],n=e.childNodes,r=n.length,o=0;o<r;o++)1===n[o].nodeType&&t.push(n[o]);return t}(t),o=r.length,i=0;i<o;i++)e(r[i],n)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var o=t[r];e(o.removedNodes,s),e(o.addedNodes,i)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],s)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],i)},!1)}}()),pe.add(e)):t.toLowerCase()in e&&(l=l.toLowerCase()),function(t){a!==t&&(a&&e.removeEventListener(l,a,!1),(a=t)&&e.addEventListener(l,t,!1))}}if("data"===t||!o&&t in e)return function(n){a!==n&&(a=n,e[t]!==n&&null==(e[t]=n)&&e.removeAttribute(t))};if(t in T.attributes)return function(n){a=T.attributes[t](e,n),e.setAttribute(t,null==a?"":a)};var c=!1,d=n.cloneNode(!0);return function(t){a!==t&&(a=t,d.value!==t&&(null==t?(c&&(c=!1,e.removeAttributeNode(d)),d.value=t):(d.value=t,c||(c=!0,e.setAttributeNode(d)))))}},Ee=function(e){var t=void 0;return function n(r){t!==r&&("object"==typeof(t=r)&&r?we(r)?r.then(n):"placeholder"in r?ye(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?K.call(r).join(""):T.invoke(r,n)):e.textContent=null==r?"":r)}},Ce={create:function(e,t){for(var n=[],r=t.length,o=0;o<r;o++){var i=t[o],s=oe(e,i.path);switch(i.type){case"any":n.push(xe(s,[]));break;case"attr":n.push(Ne(s,i.name,i.node));break;case"text":n.push(Ee(s)),s.textContent=""}}return n},find:function e(t,n,r){for(var o=t.childNodes,i=o.length,s=0;s<i;s++){var u=o[s];switch(u.nodeType){case 1:be(u,n,r),e(u,n,r);break;case 8:u.textContent===l&&(r.shift(),n.push(a.test(t.nodeName)?re("text",t):re("any",u)));break;case 3:a.test(t.nodeName)&&g.call(u.textContent)===c&&(r.shift(),n.push(re("text",t)))}}}},je=!0,Te=new p,Ae=function(){try{var e=new p,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new f}}();function Oe(e){var t=Te.get(this);return t&&t.template===J(e)?Se.apply(t.updates,arguments):function(e){e=J(e);var t=Ae.get(e)||function(e){var t=[],n=e.join(c).replace(Le,Me),r=G(this,n);Ce.find(r,t,e.slice());var o={fragment:r,paths:t};return Ae.set(e,o),o}.call(this,e),n=U(this.ownerDocument,t.fragment),r=Ce.create(n,t.paths);Te.set(this,{template:e,updates:r}),Se.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Se(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}var _e,ke,$e,Pe,Le=R,Me=function(e,t,r){return n.test(t)?e:"<"+t+r+"></"+t+">"},De=new p,Re=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,s=void 0;return function(a){a=J(a);var l=i!==a;return l&&(i=a,r=S(document),n="svg"===e?document.createElementNS(o,"svg"):r,s=Oe.bind(n)),s.apply(null,arguments),l&&("svg"===e&&F(r,K.call(n.childNodes)),t=Be(r)),t}},He=function(e,t){var n=t.indexOf(":"),r=De.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||De.set(e,r={}),r[o]||(r[o]=Re(t))},Be=function(e){for(var t=e.childNodes,n=t.length,r=[],o=0;o<n;o++){var i=t[o];1!==i.nodeType&&0===g.call(i.textContent).length||r.push(i)}return 1===r.length?r[0]:new te(r)},Ze=T.define;function ze(e){return arguments.length<2?null==e?Re("html"):"string"==typeof e?ze.wire(null,e):"raw"in e?Re("html")(e):"nodeType"in e?ze.bind(e):He(e,"html"):("raw"in e?Re("html"):ze.wire).apply(null,arguments)}return ze.Component=b,ze.bind=function(e){return Oe.bind(e)},ze.define=Ze,ze.diff=he,(ze.hyper=ze).wire=function(e,t){return null==e?Re(t||"html"):He(e,t||"html")},_e=Re,ke=new p,$e=Object.create,Pe=function(e,t){var n={w:null,p:null};return t.set(e,n),n},Object.defineProperties(b,{for:{configurable:!0,value:function(e,t){return function(e,t,n,r){var o,i,s,a=t.get(e)||Pe(e,t);switch(typeof r){case"object":case"function":var l=a.w||(a.w=new p);return l.get(r)||(o=l,i=r,s=new e(n),o.set(i,s),s);default:var c=a.p||(a.p=$e(null));return c[r]||(c[r]=new e(n))}}(this,ke.get(e)||(n=e,r=new f,ke.set(n,r),r),e,null==t?"default":t);var n,r}}}),Object.defineProperties(b.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:y("html",_e),svg:y("svg",_e),state:y("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var o in r)n[o]=r[o];return!1!==t&&this.render(),this}}}),ze}(window);const{Component:o,bind:i,define:s,diff:a,hyper:l,wire:c}=r,u=Object,d=[],f=(u.defineProperties,u.defineProperty),h=u.getOwnPropertyDescriptor,p=u.getOwnPropertyNames,m=u.getOwnPropertySymbols||(()=>[]),v=u.getPrototypeOf||(e=>e.__proto__),g="object"==typeof Reflect&&Reflect.ownKeys||(e=>p(e).concat(m(e))),b=u.setPrototypeOf||((e,t)=>(e.__proto__=t,e));class y extends HTMLElement{static define(e,t){const n=this,r=n.prototype;(n.observedAttributes||[]).forEach(e=>{e in r||f(r,e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){const t=this.getAttribute(e);return""===t||t},set(t){!1===t||null==t?this.removeAttribute(e,t):this.setAttribute(e,t)}})});const o=r.attributeChangedCallback,i=!!o,s=r.created;if(s){f(r,"_init$",{configurable:!0,writable:!0,value:!0}),f(r,"attributeChangedCallback",{configurable:!0,value:function e(t,n,r){if(this._init$&&(N.call(this,s),this._init$))return this._init$$.push(e.bind(this,t,n,r));i&&n!==r&&o.apply(this,arguments)}});const e=r.connectedCallback,t=!!e;f(r,"connectedCallback",{configurable:!0,value:function n(){if(this._init$&&(N.call(this,s),this._init$))return this._init$$.push(n.bind(this));t&&e.apply(this,arguments)}})}else i&&f(r,"attributeChangedCallback",{configurable:!0,value(e,t,n){t!==n&&o.apply(this,arguments)}});if(p(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];f(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||f(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const o=document.createElement(t.extends).constructor,i=class extends o{},s=v(n);g(s).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>f(i,e,h(s,e))),g(s.prototype).forEach(e=>f(i.prototype,e,h(s.prototype,e))),b(n,i),b(r,i.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return d.push(n),n}get html(){return this._html$||(this.html=i(this.shadowRoot||this._shadowRoot||this))}set html(e){f(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){f(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}y.Component=o,y.bind=i,y.intent=s,y.wire=c,y.hyper=l;try{Symbol.hasInstance&&d.push(f(y,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>d.some(C,v(e))}))}catch(e){}var w=y;const x={type:"DOMContentLoaded",handleEvent(){x.ready()?(document.removeEventListener(x.type,x,!1),x.list.splice(0).forEach(E)):setTimeout(x.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function N(e){if(x.ready()||function(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(N.bind(this,e)),!1}.call(this,e)){if(this._init$){const t=this._init$$;t&&delete this._init$$,e.call(f(this,"_init$",{value:!1})),t&&t.forEach(E)}}else this.hasOwnProperty("_init$$")||f(this,"_init$$",{configurable:!0,value:[]}),x.list.push(N.bind(this,e))}function E(e){e()}function C(e){return this===e.prototype}x.ready()||document.addEventListener(x.type,x,!1);const j=document.defaultView,T=1,A=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,O="http://www.w3.org/2000/svg",S="connected",_="dis"+S,k=/^style|textarea$/i,$="_hyper: "+(Math.random()*new Date|0)+";",P="\x3c!--"+$+"--\x3e";let L=j.Event;try{new L("Event")}catch(e){L=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const M=j.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};let D=0;const R=j.WeakMap||function(){const e=$+D++;return{get:t=>t[e],set(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},H=j.WeakSet||function(){const e=new R;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},B=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),Z=$.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function z(){return this}const I=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||F(this,n,t.call(this,e))},set(e){F(this,n,e)}}},F=(e,t,n)=>Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t],V={},W={},X=[],G=W.hasOwnProperty;let q=0;var U={attributes:V,define:(e,t)=>{e.indexOf("-")<0?(e in W||(q=X.push(e)),W[e]=t):V[e]=t},invoke:(e,t)=>{for(let n=0;n<q;n++){let r=X[n];if(G.call(e,r))return W[r](e[r],t)}}};const K=(e,t)=>J(e).createElement(t),J=e=>e.ownerDocument||e,Q=e=>J(e).createDocumentFragment(),Y=(e,t)=>J(e).createTextNode(t),ee=" \\f\\n\\r\\t",te="[ "+ee+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",ne="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",re="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",oe=new RegExp(ne+te+re+"+)([ "+ee+"]*/?>)","g"),ie=new RegExp(ne+te+re+"*)([ "+ee+"]*/>)","g"),se=Q(document),ae="append"in se,le="content"in K(document,"template");se.appendChild(Y(se,"g")),se.appendChild(Y(se,""));const ce=1===se.cloneNode(!0).childNodes.length,ue="importNode"in document,de=ae?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])},fe=new RegExp("("+te+"=)(['\"]?)"+P+"\\2","gi"),he=(e,t,n,r)=>"<"+t+n.replace(fe,pe)+r,pe=(e,t,n)=>t+(n||'"')+$+(n||'"'),me=(e,t)=>("ownerSVGElement"in e?Ee:Ne)(e,t.replace(oe,he)),ve=ce?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(ve(n[e]));return t}:e=>e.cloneNode(!0),ge=e=>{const t=[],n=e.childNodes,r=n.length;for(let e=0;e<r;e++)n[e].nodeType===T&&t.push(n[e]);return t},be=ue?(e,t)=>e.importNode(t,!0):(e,t)=>ve(t),ye=[].slice,we=e=>xe(e);let xe=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((j.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};xe=(t=>{const n="^"+t.join("^");return e[n]||(e[n]=t)})}else xe=(e=>e);return xe(e)};const Ne=le?(e,t)=>{const n=K(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=K(e,"template"),r=Q(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",de(r,ye.call(n.querySelectorAll(e)))}else n.innerHTML=t,de(r,ye.call(n.childNodes));return r},Ee=le?(e,t)=>{const n=Q(e),r=J(e).createElementNS(O,"svg");return r.innerHTML=t,de(n,ye.call(r.childNodes)),n}:(e,t)=>{const n=Q(e),r=K(e,"div");return r.innerHTML='<svg xmlns="'+O+'">'+t+"</svg>",de(n,ye.call(r.firstChild.childNodes)),n};function Ce(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}Ce.prototype.insert=function(){const e=Q(this.first);return de(e,this.childNodes),e},Ce.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=J(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};const je=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};var Te=(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case T:case 11:n=e;break;case 8:n=e.parentNode,je(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)je(t,n,e);return t})(t)}),Ae=(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e};const Oe=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;const Se=(e,t)=>{let n,r;return o=>{switch(typeof o){case"object":if(o){if("object"===n){if(!t&&r!==o)for(const t in r)t in o||(e[t]="")}else t?e.value="":e.cssText="";const i=t?{}:e;for(const e in o){const t=o[e];i[e]="number"!=typeof t||Oe.test(e)?t:t+"px"}n="object",t?e.value=$e(r=i):r=o;break}default:r!=o&&(n="string",r=o,t?e.value=o||"":e.cssText=o||"")}}},_e=/([^A-Z])([A-Z]+)/g,ke=(e,t,n)=>t+"-"+n.toLowerCase(),$e=e=>{const t=[];for(const n in e)t.push(n.replace(_e,ke),":",e[n],";");return t.join("")},Pe=(e,t)=>e==t,Le=e=>e,Me=(e,t,n,r)=>{if(null==r)t.removeChild(e(n,-1));else{const o=t.ownerDocument.createRange();o.setStartBefore(e(n,-1)),o.setEndAfter(e(r,-1)),o.deleteContents()}};var De=(e,t,n,r)=>{r||(r={});const o=r.compare||Pe,i=r.node||Le,s=null==r.before?null:i(r.before,0);let a=0,l=0,c=t.length-1,u=t[0],d=t[c],f=n.length-1,h=n[0],p=n[f];for(;a<=c&&l<=f;)if(null==u)u=t[++a];else if(null==d)d=t[--c];else if(null==h)h=n[++l];else if(null==p)p=n[--f];else if(o(u,h))u=t[++a],h=n[++l];else if(o(d,p))d=t[--c],p=n[--f];else if(o(u,p))e.insertBefore(i(u,1),i(d,-0).nextSibling),u=t[++a],p=n[--f];else if(o(d,h))e.insertBefore(i(d,1),i(u,0)),d=t[--c],h=n[++l];else{let r=t.indexOf(h);if(r<0)e.insertBefore(i(h,1),i(u,0)),h=n[++l];else{let o=r,s=l;for(;o<=c&&s<=f&&t[o]===n[s];)o++,s++;if(1<o-r)--r===a?e.removeChild(i(u,-1)):Me(i,e,u,t[r]),a=o,l=s,u=t[o],h=n[s];else{const o=t[r];t[r]=null,e.insertBefore(i(o,1),i(u,0)),h=n[++l]}}}if(a<=c||l<=f)if(a>c){const t=n[f+1],r=null==t?s:i(t,0);if(l===f)e.insertBefore(i(n[l],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;l<=f;)t.appendChild(i(n[l++],1));e.insertBefore(t,r)}}else null==t[a]&&a++,a===c?e.removeChild(i(t[a],-1)):Me(i,e,t[a],t[c]);return n};const Re=new H;function He(){}He.prototype=Object.create(null);const Be=e=>({html:e}),Ze=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===Ce?1/t<0?t?e.remove():e.last:t?e.insert():e.first:Ze(e.render(),t),ze=(e,t,n)=>{const r=e.childNodes,o=r.length;for(let i=0;i<o;i++){let o=r[i];switch(o.nodeType){case T:Ie(o,t,n),ze(o,t,n);break;case 8:o.textContent===$&&(n.shift(),t.push(k.test(e.nodeName)?Te("text",e):Te("any",o)));break;case 3:k.test(e.nodeName)&&Z.call(o.textContent)===P&&(n.shift(),t.push(Te("text",e)))}}},Ie=(e,t,n)=>{const r=new He,o=e.attributes,i=ye.call(o),s=[],a=i.length;for(let e=0;e<a;e++){const a=i[e];if(a.value===$){const e=a.name;if(!(e in r)){const i=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[e]=o[i]||o[i.toLowerCase()],t.push(Te("attr",r[e],i))}s.push(a)}}const l=s.length;for(let t=0;t<l;t++){const n=s[t];/^id$/i.test(n.name)?e.removeAttribute(n.name):e.removeAttributeNode(s[t])}const c=e.nodeName;if(/^script$/i.test(c)){const t=document.createElement(c);for(let e=0;e<o.length;e++)t.setAttributeNode(o[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},Fe=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Be).then(t):Promise.resolve(U.invoke(e,t)).then(t)},Ve=e=>null!=e&&"then"in e,We=(e,t)=>{const n={node:Ze,before:e};let r,o=!1;const i=s=>{switch(typeof s){case"string":case"number":case"boolean":o?r!==s&&(r=s,t[0].textContent=s):(o=!0,r=s,t=De(e.parentNode,t,[Y(e,s)],n));break;case"object":case"undefined":if(null==s){o=!1,t=De(e.parentNode,t,[],n);break}default:if(o=!1,r=s,B(s))if(0===s.length)t.length&&(t=De(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":i({html:s});break;case"object":if(B(s[0])&&(s=s.concat.apply([],s)),Ve(s[0])){Promise.all(s).then(i);break}default:t=De(e.parentNode,t,s,n)}else(e=>"ELEMENT_NODE"in e||e instanceof Ce||e instanceof z)(s)?t=De(e.parentNode,t,11===s.nodeType?ye.call(s.childNodes):[s],n):Ve(s)?s.then(i):"placeholder"in s?Fe(s,i):"text"in s?i(String(s.text)):"any"in s?i(s.any):"html"in s?t=De(e.parentNode,t,ye.call(me(e,[].concat(s.html).join("")).childNodes),n):i("length"in s?ye.call(s):U.invoke(s,i))}};return i},Xe=(e,t,n)=>{const r="ownerSVGElement"in e;let o;if("style"===t)return((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),Se(r,n)}return Se(e.style,n)})(e,n,r);if(/^on/.test(t)){let n=t.slice(2);return n===S||n===_?(Ue&&(Ue=!1,function(){const e=(e,n)=>{const r=new L(n),o=e.length;for(let n=0;n<o;n++){let o=e[n];o.nodeType===T&&t(o,r)}},t=(e,n)=>{Re.has(e)&&e.dispatchEvent(n);const r=e.children||ge(e),o=r.length;for(let e=0;e<o;e++)t(r[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let r=0;r<n;r++){let n=t[r];e(n.removedNodes,_),e(n.addedNodes,S)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],_)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],S)},!1)}}()),Re.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{o!==t&&(o&&e.removeEventListener(n,o,!1),o=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!r&&t in e)return n=>{o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in U.attributes)return n=>{o=U.attributes[t](e,n),e.setAttribute(t,null==o?"":o)};{let t=!1;const r=n.cloneNode(!0);return n=>{o!==n&&(o=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},Ge=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?Ve(r)?r.then(n):"placeholder"in r?Fe(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?ye.call(r).join(""):U.invoke(r,n)):e.textContent=null==r?"":r)};return n};var qe={create:(e,t)=>{const n=[],r=t.length;for(let o=0;o<r;o++){const r=t[o],i=Ae(e,r.path);switch(r.type){case"any":n.push(We(i,[]));break;case"attr":n.push(Xe(i,r.name,r.node));break;case"text":n.push(Ge(i)),i.textContent=""}}return n},find:ze};let Ue=!0;const Ke=new R,Je=(()=>{try{const e=new R,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(e){return new M}})();function Qe(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const Ye=ie,et=(e,t,n)=>A.test(t)?e:"<"+t+n+"></"+t+">";var tt=function(e){const t=Ke.get(this);return t&&t.template===we(e)?Qe.apply(t.updates,arguments):function(e){e=we(e);const t=Je.get(e)||function(e){const t=[],n=e.join(P).replace(Ye,et),r=me(this,n);qe.find(r,t,e.slice());const o={fragment:r,paths:t};return Je.set(e,o),o}.call(this,e),n=be(this.ownerDocument,t.fragment),r=qe.create(n,t.paths);Ke.set(this,{template:e,updates:r}),Qe.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this};const nt=new R,rt=e=>{let t,n,r,o,i;return function(s){s=we(s);let a=o!==s;return a&&(o=s,r=Q(document),n="svg"===e?document.createElementNS(O,"svg"):r,i=tt.bind(n)),i.apply(null,arguments),a&&("svg"===e&&de(r,ye.call(n.childNodes)),t=it(r)),t}},ot=(e,t)=>{const n=t.indexOf(":");let r=nt.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||nt.set(e,r={}),r[o]||(r[o]=rt(t))},it=e=>{const t=e.childNodes,n=t.length,r=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==T&&0===Z.call(n.textContent).length||r.push(n)}return 1===r.length?r[0]:new Ce(r)};var st=(e,t)=>null==e?rt(t||"html"):ot(e,t||"html");const at=U.define;function lt(e){return arguments.length<2?null==e?rt("html"):"string"==typeof e?lt.wire(null,e):"raw"in e?rt("html")(e):"nodeType"in e?lt.bind(e):ot(e,"html"):("raw"in e?rt("html"):lt.wire).apply(null,arguments)}lt.Component=z,lt.bind=(e=>tt.bind(e)),lt.define=at,lt.diff=De,lt.hyper=lt,lt.wire=st,function(e){const t=new R,n=Object.create,r=(e,t)=>{const n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(z,{for:{configurable:!0,value(e,o){return((e,t,o,i)=>{const s=t.get(e)||r(e,t);switch(typeof i){case"object":case"function":const t=s.w||(s.w=new R);return t.get(i)||((e,t,n)=>(e.set(t,n),n))(t,i,new e(o));default:const r=s.p||(s.p=n(null));return r[i]||(r[i]=new e(o))}})(this,t.get(e)||(e=>{const n=new M;return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(z.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:I("html",e),svg:I("svg",e),state:I("state",function(){return this.defaultState}),defaultState:{get:()=>({})},dispatch:{value(e,t){const{_wire$:n}=this;if(n){const r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})}(rt);var ct=n("./node_modules/dasherize/index.js"),ut=n.n(ct);const dt=e=>e.componentName||ut()(e.name||e.toString().match(/^function\s*([^\s(]+)/)[1]),ft=e=>{switch(document.createElement(e).constructor){case HTMLElement:case HTMLUnknownElement:return!1}return!0},ht=e=>"string"==typeof e?e:e.name;n.d(t,"default",function(){return pt});class pt extends w{constructor(){super(),this.attachShadow({mode:"open"}),this.constructor.dependencies.forEach(e=>e.register())}static register(){const e=dt(this);ft(e)||this.define(e)}static get observedAttributes(){return this.bioAttributes.map(ht)}attributeChangedCallback(e,t,n){const r=this.constructor.bioAttributes.find(t=>ht(t)===e);this.props=Object.assign({},this.props,{[e]:"string"==typeof r?n:r.converter(n)})}get defaultProps(){return null}get props(){return Object.assign({},this.defaultProps,this._props)}set props(e){this._props=e,this.onPropsChanged()}get wire(){return lt.wire(this)}onPropsChanged(){this.render()}}pt.dependencies=[],pt.bioAttributes=[]},"./node_modules/dasherize/index.js":function(e,t,n){"use strict";var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=function(e){return"[object Date]"===Object.prototype.toString.call(e)},i=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},s=Object.prototype.hasOwnProperty,a=Object.keys||function(e){var t=[];for(var n in e)s.call(e,n)&&t.push(n);return t};function l(e){return e.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,function(e,t){return(t>0?"-":"")+e.toLowerCase()})}function c(e){return e&&"object"==typeof e?o(e)||i(e)?e:r(e)?function(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}(e,c):function(e,t,n){if(e.reduce)return e.reduce(t,n);for(var r=0;r<e.length;r++)n=t(n,e[r],r);return n}(a(e),function(t,n){return t[l(n)]=c(e[n]),t},{}):e}e.exports=function(e){return"string"==typeof e?l(e):c(e)}},"./src/components/Teaser/Headline.ts":function(e,t,n){"use strict";n.r(t),n.d(t,"XHeadline",function(){return o});var r=n("./node_modules/@biotope/element/lib/index.js");class o extends r.default{constructor(){super()}get defaultState(){return{underlined:"false"}}onPropsChanged(){this.setState({underlined:this.props.underlined})}created(){this.onPropsChanged(),this.render()}render(){this.html`
            <h1><slot></slot></h1>
        `}}o.componentName="x-headline",o.bioAttributes=[{name:"underlined",converter:e=>e}],o.register()},"./src/components/Teaser/Image.ts":function(e,t,n){"use strict";n.r(t),n.d(t,"XImage",function(){return o});var r=n("./node_modules/@biotope/element/lib/index.js");class o extends r.default{constructor(){super()}get defaultState(){return{width:300,height:300,imageLink:"https://via.placeholder.com/350x150"}}onPropsChanged(){this.setState({width:this.props.width})}created(){this.onPropsChanged(),this.render()}render(){this.html`
            <img src="${this.state.imageLink}" width="${this.state.width}">
        `}}o.componentName="x-image",o.bioAttributes=[{name:"width",converter:e=>parseInt(e,10)},{name:"height",converter:e=>parseInt(e,10)},{name:"imageLink",converter:e=>e}],o.register()},"./src/components/Teaser/Teaser.ts":function(e,t,n){"use strict";n.r(t),n.d(t,"XTeaser",function(){return o});var r=n("./node_modules/@biotope/element/lib/index.js");n("./src/components/Teaser/Image.ts"),n("./src/components/Teaser/Headline.ts"),n("./src/components/Teaser/Text.ts");class o extends r.default{constructor(){super()}created(){this.onPropsChanged(),this.render()}render(){this.html`
            <link rel="stylesheet" type="text/css" href="resources/components/Teaser/Teaser.styles.css">
            <link rel="stylesheet" type="text/css" href="resources/css/vendor/normalize.css">
            <h1>Teaser</h1>
            <x-text><slot></slot></x-text>
        `}}o.componentName="x-teaser",o.register()},"./src/components/Teaser/Text.ts":function(e,t,n){"use strict";n.r(t),n.d(t,"XText",function(){return o});var r=n("./node_modules/@biotope/element/lib/index.js");class o extends r.default{constructor(){super()}created(){this.render()}render(){this.html`
            <p><slot></slot></p>
        `}}o.componentName="x-text",o.register()},"./src/components/Teaser/index.ts":function(e,t,n){"use strict";n.r(t);n("./src/components/Teaser/Teaser.ts"),n("./src/components/Teaser/Image.ts"),n("./src/components/Teaser/Headline.ts")}});
//# sourceMappingURL=index.js.map
