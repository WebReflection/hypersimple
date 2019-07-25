/*! (c) Andrea Giammarchi - ISC */
var hypersimple=function(e){"use strict";var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,i=o.prototype;return i.delete=function(e){return this.has(e)&&delete e[this._]},i.get=function(e){return this.has(e)?e[this._]:void 0},i.has=function(e){return r.call(e,this._)},i.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(a,this)}function a(e){this.set(e[0],e[1])}}(Math.random(),Object)}var u=t.WeakMap,n={};try{n.Map=Map}catch(e){n.Map=function(){var n=0,i=[],o=[];return{delete:function(e){var t=r(e);return t&&(i.splice(n,1),o.splice(n,1)),t},forEach:function(n,r){i.forEach(function(e,t){n.call(r,o[t],e,this)},this)},get:function(e){return r(e)?o[n]:void 0},has:function(e){return r(e)},set:function(e,t){return o[r(e)?n:i.push(e)-1]=t,this}};function r(e){return-1<(n=i.indexOf(e))}}}var a=n.Map,i={};try{i.WeakSet=WeakSet}catch(e){!function(e,t){var n=r.prototype;function r(){t(this,"_",{value:"_@ungap/weakmap"+e++})}n.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},n.has=function(e){return this.hasOwnProperty.call(e,this._)},n.delete=function(e){return this.has(e)&&delete e[this._]},i.WeakSet=r}(Math.random(),Object.defineProperty)}var r=i.WeakSet,o={};try{o.Map=Map}catch(e){o.Map=function(){var n=0,i=[],o=[];return{delete:function(e){var t=r(e);return t&&(i.splice(n,1),o.splice(n,1)),t},forEach:function(n,r){i.forEach(function(e,t){n.call(r,o[t],e,this)},this)},get:function(e){return r(e)?o[n]:void 0},has:function(e){return r(e)},set:function(e,t){return o[r(e)?n:i.push(e)-1]=t,this}};function r(e){return-1<(n=i.indexOf(e))}}}function g(e,t,n,r,i,o){for(var a=("selectedIndex"in t),u=-1;r<i;){var c=e(n[r],1);a&&u<0&&c.selected&&(u=r),t.insertBefore(c,o),r++}a&&-1<u&&(t.selectedIndex=u)}function y(e,t){return e==t}function b(e){return e}function w(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;u<=n-t;){for(var c=t,s=i;c<n&&s<o&&a(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1}function E(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i}function N(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}}function x(e,t,n,r,i,o,a,u,c,s,l,f,h){!function(e,t,n,r,i,o,a,u,c){for(var s=new C,l=e.length,f=a,h=0;h<l;)switch(e[h++]){case 0:i++,f++;break;case 1:s.set(r[i],1),g(t,n,r,i++,i,f<u?t(o[f],0):c);break;case-1:f++}for(h=0;h<l;)switch(e[h++]){case 0:a++;break;case-1:s.has(o[a])?a++:N(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var u,c,s,l,f,h,d,v=n+o,p=[];e:for(u=0;u<=v;u++){if(50<u)return null;for(d=u-1,f=u?p[u-1]:[0,0],h=p[u]=[],c=-u;c<=u;c+=2){for(s=(l=c===-u||c!==u&&f[d+c-1]<f[d+c+1]?f[d+c+1]:f[d+c-1]+1)-c;l<o&&s<n&&a(r[i+l],e[t+s]);)l++,s++;if(l===o&&s===n)break e;h[u+c]=l}}var m=Array(u/2+v/2),g=m.length-1;for(u=p.length-1;0<=u;u--){for(;0<l&&0<s&&a(r[i+l-1],e[t+s-1]);)m[g--]=0,l--,s--;if(!u)break;d=u-1,f=u?p[u-1]:[0,0],(c=l-s)===-u||c!==u&&f[d+c-1]<f[d+c+1]?(s--,m[g--]=1):(l--,m[g--]=-1)}return m}(n,r,o,a,u,s,f)||function(e,t,n,r,i,o,a,u){var c=0,s=r<u?r:u,l=Array(s++),f=Array(s);f[0]=-1;for(var h=1;h<s;h++)f[h]=a;for(var d=new C,v=o;v<a;v++)d.set(i[v],v);for(var p=t;p<n;p++){var m=d.get(e[p]);null!=m&&-1<(c=k(f,s,m))&&(f[c]=m,l[c]={newi:p,oldi:m,prev:l[c-1]})}for(c=--s,--a;f[c]>a;)--c;s=u+r-c;var g=Array(s),y=l[c];for(--n;y;){for(var b=y,w=b.newi,E=b.oldi;w<n;)g[--s]=1,--n;for(;E<a;)g[--s]=-1,--a;g[--s]=0,--n,--a,y=y.prev}for(;t<=n;)g[--s]=1,--n;for(;o<=a;)g[--s]=-1,--a;return g}(n,r,i,o,a,u,c,s),e,t,n,r,a,u,l,h)}function c(e,t,n,r){for(var i=(r=r||{}).compare||y,o=r.node||b,a=null==r.before?null:o(r.before,0),u=t.length,c=u,s=0,l=n.length,f=0;s<c&&f<l&&i(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&i(t[c-1],n[l-1]);)c--,l--;var h=s===c,d=f===l;if(h&&d)return n;if(h&&f<l)return g(o,e,n,f,l,E(o,t,s,u,a)),n;if(d&&s<c)return N(o,e,t,s,c),n;var v=c-s,p=l-f,m=-1;if(v<p){if(-1<(m=w(n,f,l,t,s,c,i)))return g(o,e,n,f,m,o(t[s],0)),g(o,e,n,m+v,l,E(o,t,c,u,a)),n}else if(p<v&&-1<(m=w(t,s,c,n,f,l,i)))return N(o,e,t,s,m),N(o,e,t,m+p,c),n;return v<2||p<2?(g(o,e,n,f,l,o(t[s],0)),N(o,e,t,s,c)):v==p&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,i)?g(o,e,n,f,l,E(o,t,c,u,a)):x(o,e,n,f,l,p,t,s,c,v,u,i,a),n}var s,C=o.Map,k=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=1+o}return r},l={};function f(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}l.CustomEvent="function"==typeof CustomEvent?CustomEvent:(f[s="prototype"]=new f("").constructor[s],f);var h=l.CustomEvent,d={};try{d.Map=Map}catch(e){d.Map=function(){var n=0,i=[],o=[];return{delete:function(e){var t=r(e);return t&&(i.splice(n,1),o.splice(n,1)),t},forEach:function(n,r){i.forEach(function(e,t){n.call(r,o[t],e,this)},this)},get:function(e){return r(e)?o[n]:void 0},has:function(e){return r(e)},set:function(e,t){return o[r(e)?n:i.push(e)-1]=t,this}};function r(e){return-1<(n=i.indexOf(e))}}}var v=d.Map;function p(){return this}function m(e,t){var n="_"+e+"$";return{get:function(){return this[n]||M(this,n,t.call(this,e))},set:function(e){M(this,n,e)}}}var M=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]};Object.defineProperties(p.prototype,{ELEMENT_NODE:{value:1},nodeType:{value:-1}});var O,A,j,S,T,_,P={},L={},D=[],$=L.hasOwnProperty,W=0,R={attributes:P,define:function(e,t){e.indexOf("-")<0?(e in L||(W=D.push(e)),L[e]=t):P[e]=t},invoke:function(e,t){for(var n=0;n<W;n++){var r=D[n];if($.call(e,r))return L[r](e[r],t)}}},F=Array.isArray||(A=(O={}.toString).call([]),function(e){return O.call(e)===A}),H=(j=document,S="fragment",_="content"in I(T="template")?function(e){var t=I(T);return t.innerHTML=e,t.content}:function(e){var t=I(S),n=I(T),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(i)}else n.innerHTML=e,r=n.childNodes;return z(t,r),t},function(e,t){return("svg"===t?function(e){var t=I(S),n=I("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",z(t,n.firstChild.childNodes),t}:_)(e)});function z(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function I(e){return e===S?j.createDocumentFragment():j.createElementNS("http://www.w3.org/1999/xhtml",e)}var Z,B,V,G,q,J,K,Q,U,X,Y=(Z=document,B="appendChild",V="cloneNode",G="createTextNode",J=(q="importNode")in Z,(K=Z.createDocumentFragment())[B](Z[G]("g")),K[B](Z[G]("")),(J?Z[q](K,!0):K[V](!0)).childNodes.length<2?function e(t,n){for(var r=t[V](),i=t.childNodes||[],o=i.length,a=0;n&&a<o;a++)r[B](e(i[a],n));return r}:J?Z[q]:function(e,t){return e[V](!!t)}),ee="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},te="-"+Math.random().toFixed(6)+"%";try{Q=document.createElement("template"),X="tabindex",(U="content")in Q&&(Q.innerHTML="<p "+X+'="'+te+'"></p>',Q[U].childNodes[0].getAttribute(X)==te)||(te="_dt: "+te.slice(1,-1)+";",!0)}catch(e){}var ne="\x3c!--"+te+"--\x3e",re=8,ie=1,oe=3,ae=/^(?:style|textarea)$/i,ue=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var ce=" \\f\\n\\r\\t",se="[^"+ce+"\\/>\"'=]+",le="["+ce+"]+"+se,fe="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",he="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+se.replace("\\/","")+"))?)",de=new RegExp(fe+le+he+"+)(["+ce+"]*/?>)","g"),ve=new RegExp(fe+le+he+"*)(["+ce+"]*/>)","g"),pe=new RegExp("("+le+"\\s*=\\s*)(['\"]?)"+ne+"\\2","gi");function me(e,t,n,r){return"<"+t+n.replace(pe,ge)+r}function ge(e,t,n){return t+(n||'"')+te+(n||'"')}function ye(e,t,n){return ue.test(t)?e:"<"+t+n+"></"+t+">"}var be={};try{be.Map=Map}catch(e){be.Map=function(){var n=0,i=[],o=[];return{delete:function(e){var t=r(e);return t&&(i.splice(n,1),o.splice(n,1)),t},forEach:function(n,r){i.forEach(function(e,t){n.call(r,o[t],e,this)},this)},get:function(e){return r(e)?o[n]:void 0},has:function(e){return r(e)},set:function(e,t){return o[r(e)?n:i.push(e)-1]=t,this}};function r(e){return-1<(n=i.indexOf(e))}}}var we=be.Map;function Ee(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function Ne(e,t,n,r){for(var i=new we,o=e.attributes,a=[],u=a.slice.call(o,0),c=u.length,s=0;s<c;){var l,f=u[s++],h=f.value===te;if(h||1<(l=f.value.split(ne)).length){var d=f.name;if(!i.has(d)){var v=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+d+")\\s*=\\s*('|\")","i"),"$1"),p=o[v]||o[v.toLowerCase()];if(i.set(d,p),h)t.push(xe(p,r,v,null));else{for(var m=l.length-2;m--;)n.shift();t.push(xe(p,r,v,l))}}a.push(f)}}for(c=a.length,s=0;s<c;){var g=a[s++];/^id$/i.test(g.name)?e.removeAttribute(g.name):e.removeAttributeNode(g)}var y=e.nodeName;if(/^script$/i.test(y)){var b=document.createElement(y);for(c=o.length,s=0;s<c;)b.setAttributeNode(o[s++].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}}function xe(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Ce(e,t){return{type:"text",node:e,path:t}}var ke=new u,Me=new u;function Oe(a,f){var e=function(e){return e.join(ne).replace(ve,ye).replace(de,me)}(f),t=a.transform;t&&(e=t(e));var n=H(e,a.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===ee.call(r.textContent).length&&e.removeChild(r)}}(n);var u=[];!function e(t,n,r,i){for(var o,a,u=t.childNodes,c=u.length,s=0;s<c;){var l=u[s];switch(l.nodeType){case ie:var f=i.concat(s);Ne(l,n,r,f),e(l,n,r,f);break;case re:var h=l.textContent;if(h===te)r.shift(),n.push(ae.test(t.nodeName)?Ce(t,i):(o=l,a=i.concat(s),{type:"any",node:o,path:a}));else switch(h.slice(0,2)){case"/*":if("*/"!==h.slice(-2))break;case"👻":t.removeChild(l),s--,c--}break;case oe:ae.test(t.nodeName)&&ee.call(l.textContent)===ne&&(r.shift(),n.push(Ce(t,i)))}s++}}(n,u,f.slice(0),[]);var r={content:n,updates:function(c){for(var s=[],l=u.length,e=0,t=0;e<l;){var n=u[e++],r=Ee(c,n.path);switch(n.type){case"any":s.push({fn:a.any(r,[]),sparse:!1});break;case"attr":var i=n.sparse,o=a.attribute(r,n.name,n.node);null===i?s.push({fn:o,sparse:!1}):(t+=i.length-2,s.push({fn:o,sparse:!0,values:i}));break;case"text":s.push({fn:a.text(r),sparse:!1}),r.textContent=""}}return l+=t,function(){var e=arguments.length;if(l!==e-1)throw new Error(e-1+" values instead of "+l+"\n"+f.join("${value}"));for(var t=1,n=1;t<e;){var r=s[t-n];if(r.sparse){var i=r.values,o=i[0],a=1,u=i.length;for(n+=u-2;a<u;)o+=arguments[t++]+i[a++];r.fn(o)}else r.fn(arguments[t++])}return c}}};return ke.set(f,r),r}function Ae(n){return function(e){var t=Me.get(n);return null!=t&&t.template===e||(t=function(e,t){var n=ke.get(t)||Oe(e,t),r=Y.call(document,n.content,!0),i={content:r,template:t,updates:n.updates(r)};return Me.set(e,i),i}(n,e)),t.updates.apply(null,arguments),t.content}}var je,Se,Te=(je=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Se=/([^A-Z])([A-Z]+)/g,function(e,t){return"ownerSVGElement"in e?function(e,t){var n;return(n=t?t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),e.getAttributeNode("style"))).value="",e.setAttributeNode(n),Pe(n,!0)}(e,t):Pe(e.style,!1)});function _e(e,t,n){return t+"-"+n.toLowerCase()}function Pe(o,a){var u,c;return function(e){var t,n,r,i;switch(typeof e){case"object":if(e){if("object"===u){if(!a&&c!==e)for(n in c)n in e||(o[n]="")}else a?o.value="":o.cssText="";for(n in t=a?{}:o,e)r="number"!=typeof(i=e[n])||je.test(n)?i:i+"px",!a&&/^--/.test(n)?t.setProperty(n,r):t[n]=r;u="object",a?o.value=function(e){var t,n=[];for(t in e)n.push(t.replace(Se,_e),":",e[t],";");return n.join("")}(c=t):c=e;break}default:c!=e&&(u="string",c=e,a?o.value=e||"":o.cssText=e||"")}}}var Le,De,$e=(Le=[].slice,(De=We.prototype).ELEMENT_NODE=1,De.nodeType=111,De.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(e?t[1]:n),i.setEndAfter(r),i.deleteContents()}return n},De.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,i=0,o=r.length;i<o;i++)t.appendChild(r[i]);return t},We);function We(e){var t=this.childNodes=Le.call(e,0);this.firstChild=t[0],this.lastChild=t[t.length-1],this.ownerDocument=t[0].ownerDocument,this._=null}function Re(e){return{html:e}}function Fe(e,t){switch(e.nodeType){case Qe:return 1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild;case Ke:return Fe(e.render(),t);default:return e}}function He(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Re).then(t):Promise.resolve(R.invoke(e,t)).then(t)}function ze(e){return null!=e&&"then"in e}var Ie,Ze,Be,Ve,Ge,qe="ownerSVGElement",Je="connected",Ke=p.prototype.nodeType,Qe=$e.prototype.nodeType,Ue=(Ze=(Ie={Event:h,WeakSet:r}).Event,Be=Ie.WeakSet,Ve=!0,Ge=null,function(e){return Ve&&(Ve=!Ve,Ge=new Be,function(t){var i=new Be,o=new Be;try{new MutationObserver(u).observe(t,{subtree:!0,childList:!0})}catch(e){var n=0,r=[],a=function(e){r.push(e),clearTimeout(n),n=setTimeout(function(){u(r.splice(n=0,r.length))},0)};t.addEventListener("DOMNodeRemoved",function(e){a({addedNodes:[],removedNodes:[e.target]})},!0),t.addEventListener("DOMNodeInserted",function(e){a({addedNodes:[e.target],removedNodes:[]})},!0)}function u(e){for(var t,n=e.length,r=0;r<n;r++)c((t=e[r]).removedNodes,"disconnected",o,i),c(t.addedNodes,"connected",i,o)}function c(e,t,n,r){for(var i,o=new Ze(t),a=e.length,u=0;u<a;1===(i=e[u++]).nodeType&&s(i,o,t,n,r));}function s(e,t,n,r,i){Ge.has(e)&&!r.has(e)&&(i.delete(e),r.add(e),e.dispatchEvent(t));for(var o=e.children||[],a=o.length,u=0;u<a;s(o[u++],t,n,r,i));}}(e.ownerDocument)),Ge.add(e),e}),Xe=/^(?:form|list)$/i,Ye=[].slice;function et(e){return this.type=e,Ae(this)}et.prototype={attribute:function(n,r,e){var i,t=qe in n;if("style"===r)return Te(n,e,t);if(/^on/.test(r)){var o=r.slice(2);return o===Je||"disconnected"===o?Ue(n):r.toLowerCase()in n&&(o=o.toLowerCase()),function(e){i!==e&&(i&&n.removeEventListener(o,i,!1),(i=e)&&n.addEventListener(o,e,!1))}}if("data"===r||!t&&r in n&&!Xe.test(r))return function(e){i!==e&&(i=e,n[r]!==e&&null==e?(n[r]="",n.removeAttribute(r)):n[r]=e)};if(r in R.attributes)return function(e){var t=R.attributes[r](n,e);i!==t&&(null==(i=t)?n.removeAttribute(r):n.setAttribute(r,t))};var a=!1,u=e.cloneNode(!0);return function(e){i!==e&&(i=e,u.value!==e&&(null==e?(a&&(a=!1,n.removeAttributeNode(u)),u.value=e):(u.value=e,a||(a=!0,n.setAttributeNode(u)))))}},any:function(n,r){var i,o={node:Fe,before:n},a=qe in n?"svg":"html",u=!1;return function e(t){switch(typeof t){case"string":case"number":case"boolean":u?i!==t&&(i=t,r[0].textContent=t):(u=!0,i=t,r=c(n.parentNode,r,[function(e,t){return e.ownerDocument.createTextNode(t)}(n,t)],o));break;case"function":e(t(n));break;case"object":case"undefined":if(null==t){u=!1,r=c(n.parentNode,r,[],o);break}default:if(u=!1,F(i=t))if(0===t.length)r.length&&(r=c(n.parentNode,r,[],o));else switch(typeof t[0]){case"string":case"number":case"boolean":e({html:t});break;case"object":if(F(t[0])&&(t=t.concat.apply([],t)),ze(t[0])){Promise.all(t).then(e);break}default:r=c(n.parentNode,r,t,o)}else!function(e){return"ELEMENT_NODE"in e}(t)?ze(t)?t.then(e):"placeholder"in t?He(t,e):"text"in t?e(String(t.text)):"any"in t?e(t.any):"html"in t?r=c(n.parentNode,r,Ye.call(H([].concat(t.html).join(""),a).childNodes),o):e("length"in t?Ye.call(t):R.invoke(t,e)):r=c(n.parentNode,r,11===t.nodeType?Ye.call(t.childNodes):[t],o)}}},text:function(r){var i;return function e(t){if(i!==t){var n=typeof(i=t);"object"==n&&t?ze(t)?t.then(e):"placeholder"in t?He(t,e):e("text"in t?String(t.text):"any"in t?t.any:"html"in t?[].concat(t.html).join(""):"length"in t?Ye.call(t).join(""):R.invoke(t,e)):"function"==n?e(t(r)):r.textContent=null==t?"":t}}}};var tt="object"!=("undefined"==typeof document?"undefined":typeof document),nt=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var i={},o=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)};if(r)nt=o;else{var a=new u;nt=function(e){return a.get(e)||function(e,t){return a.set(e,t),t}(e,o(e))}}}else tt=!0;return rt(e)};function rt(e){return tt?e:nt(e)}function it(e,t){return null==e?lt(t||"html"):ft(e,t||"html")}var ot,at,ut,ct,st=new u,lt=function(t){var n,r,i;return function(){var e=function(e){for(var t=arguments.length,n=[rt(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments);return i!==e[0]?(i=e[0],r=new et(t),n=ht(r.apply(r,e))):r.apply(r,e),n}},ft=function(e,t){var n=t.indexOf(":"),r=st.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||st.set(e,r={}),r[i]||(r[i]=lt(t))},ht=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new $e(t):e},dt=(new u,R.define);ot=lt,at=new u,ut=Object.create,ct=function(e,t){var n={w:null,p:null};return t.set(e,n),n},Object.defineProperties(p,{for:{configurable:!0,value:function(e,t){return function(e,t,n,r){var i=t.get(e)||ct(e,t);switch(typeof r){case"object":case"function":var o=i.w||(i.w=new u);return o.get(r)||function(e,t,n){return e.set(t,n),n}(o,r,new e(n));default:var a=i.p||(i.p=ut(null));return a[r]||(a[r]=new e(n))}}(this,at.get(e)||function(e){var t=new v;return at.set(e,t),t}(e),e,null==t?"default":t)}}}),Object.defineProperties(p.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:m("html",ot),svg:m("svg",ot),state:m("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new h(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.firstChild).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}});var vt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,mt=Object.keys,gt={}.hasOwnProperty,yt=[].slice,bt={id:0,model:null};function wt(e,t){return this[t]===e[t]}function Et(e,t){return"function"==typeof e?e.bind(t):e}var Nt=new u,xt=new u,Ct=new u,kt=0,Mt=!0;function Ot(e){Mt&&Ct.get(e).forEach(At,e)}function At(e){return function(e,t,n,r){var i=bt.id,o=bt.model;bt.id=n,bt.model=e;try{return t.apply(null,r)}finally{bt.id=i,bt.model=o}}(this,e.Component,e.id,e.args)}return e.comp=function(r){var i=++kt;return Nt.set(o,i),o;function o(e){var t=e||{},n=Ct.get(t)||function(e){var t=new a;return Ct.set(e,t),function(r,i){mt(r).forEach(function(e){var t,n=pt(r,e);n.configurable&&("value"in n?(t=Et(n.value,r),vt(r,e,{configurable:!0,enumerable:!0,get:function(){return t},set:function(e){t=Et(e,r),i(r)}})):"set"in n&&(t=n.set,n.set=function(e){t.call(r,e),i(r)},vt(r,e,n)))})}(e,Ot),t}(t);return At.call(t,n.get(o)||function(e,t,n,r,i){var o={Component:n,id:r,args:i};return e.set(t,o),o}(n,o,r,i,yt.call(arguments,0)))}},e.define=dt,e.html=function(){return it(bt.model,"html:"+bt.id).apply(null,arguments)},e.render=function(e,t){var n=Nt.has(t)?t(xt.get(e)||function(e){var t={};return xt.set(e,t),t}(e)):t(),r=1===n.nodeType;return r&&e.firstChild===n||!r&&n.childNodes.every(wt,e.childNodes)||(e.textContent="",e.appendChild(n.valueOf(!0))),e},e.svg=function(){return it(bt.model,"svg:"+bt.id).apply(null,arguments)},e.update=function(e,t){var n=Ct.get(e);if(!n)throw new Error("unknown model");Mt=!1;try{!function e(t,n){for(var r in n)if(gt.call(n,r)){var i=n[r];gt.call(t,r)&&"object"==typeof i&&null!==i?e(t[r],i):t[r]=i}}(e,t||{})}finally{Mt=!0,n.forEach(At,e)}},e}({});
