module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/CommentPost"]},,function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(0),u=r.n(o),a=r(3),i=r.n(a);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}u.a.initializers.add("aradeid/flarum-references",(function(){Object(n.extend)(i.a.prototype,["oncreate","onupdate"],(function(){for(var e,t=u.a.forum.attribute("baseUrl"),r=function(){var r=e.value;if(r.classList.contains("PostMention"))return"continue";var n=r.href;if(!n.startsWith(t))return"continue";var o=n.replace(t,"").split("/");if(o[o.length-1].match(/(.*)\.(.*)/i))return"continue";var u=o[o.length-1].split("#"),a=u[u.length-1];r.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById(a);null==t||t.scrollIntoView({behavior:"smooth"})}))},n=l(this.element.querySelector(".Post-body").querySelectorAll("a"));!(e=n()).done;)r()}))}))}]);
//# sourceMappingURL=forum.js.map