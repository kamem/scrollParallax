!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=45)}({11:function(t,e,n){(function(t){var n,r,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * scroll-parallax
 * Implementing parallax effect by utilizing various events of scroll.
 * https://github.com/kamem/scrollParallax.git
 * @version 1.0.0
 * @license Released under MIT license
 * @author kamem
 */window,i=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===a(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=6)}([function(t,e,n){"use strict";(function(t){n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return y})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return g}));var r=n(1);function o(t){return(o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=/([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g,u=function(t){for(var e,n=[];null!==(e=s.exec(t));)n.push(parseFloat(e[1]));return n},l=function(t){var e=String(t);return e=d(e),e=h(e)},c=function(t,e){var n=0;return t.replace(s,(function(t){return t.replace(/[-]?([1-9]\d*|0)(\.\d+)?/,e[n++])}))},f=function(t){return t+t},h=function(t){return t.replace(/#[0-9a-fA-F]{3,6}/g,(function(t){var e,n=i(function(t){var e=t.substring(1);return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]}((e=t).length>4?e:"#".concat(f(e[1])).concat(f(e[2])).concat(f(e[3]))),3),r=n[0],o=n[1],a=n[2];return"rgb(".concat(r,",").concat(o,",").concat(a,")")}))},d=function(t){var e={red:"f00",blue:"00f",yellow:"ff0",green:"008000"};return t.replace(/red|blue|green|yellow/g,(function(t){return"#"+e[t]}))},y=function(e,n){var r=n.direction,o="y"===r?"Top":"Left",i=t["page".concat(r.toUpperCase(),"Offset")]||document.documentElement["scroll".concat(o)],a="string"!=typeof e?e:document.querySelector(e);return a&&a.getBoundingClientRect()[o.toLocaleLowerCase()]+i},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.b,n=e.stageSize,i=e.contentSize,a=i-n;if(t>a||~["lastScrollPosition","last"].indexOf(t))return a;if(~["string","object"].indexOf(o(t))){var s="string"==typeof t?t.split(","):t,u=s[0],l=~["lastScrollPosition","last"].indexOf(u)?a:y(u,e),c=(parseInt(s[1])||0)+Math.min(l,a);return Math.min(c,a)}return t},g={linear:function(t,e,n,r){return e+n*t},easeInQuad:function(t,e,n,r){return n*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return n*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return n*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e},easeOutSine:function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:n*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){return t==r?e+n:n*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){return 0==t?e:t==r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var o=1.70158,i=0,a=n;return 0==t?e:1==(t/=r)?e+n:(i||(i=.3*r),a<Math.abs(n)?(a=n,o=i/4):o=i/(2*Math.PI)*Math.asin(n/a),-a*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/i)+e)},easeOutElastic:function(t,e,n,r){var o=1.70158,i=0,a=n;return 0==t?e:1==(t/=r)?e+n:(i||(i=.3*r),a<Math.abs(n)?(a=n,o=i/4):o=i/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*t)*Math.sin((t*r-o)*(2*Math.PI)/i)+n+e)},easeInOutElastic:function(t,e,n,r){var o=1.70158,i=0,a=n;return 0==t?e:2==(t/=r/2)?e+n:(i||(i=r*(.3*1.5)),a<Math.abs(n)?(a=n,o=i/4):o=i/(2*Math.PI)*Math.asin(n/a),t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/i)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/i)*.5+n+e)},easeInBack:function(t,e,n,r,o){return null==o&&(o=1.70158),n*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,n,r,o){return null==o&&(o=1.70158),n*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,n,r,o){return null==o&&(o=1.70158),(t/=r/2)<1?n/2*(t*t*((1+(o*=1.525))*t-o))+e:n/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e},easeInBounce:function(t,e,n,r){return n-g.easeOutBounce(r-t,0,n,r)+e},easeOutBounce:function(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,r){return t<r/2?.5*g.easeInBounce(2*t,0,n,r)+e:.5*g.easeOutBounce(2*t-r,0,n,r)+.5*n+e}}}).call(this,n(5))},function(t,e,n){"use strict";(function(t){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,u=function(){function e(){o(this,e),this.$stage=t,this.direction="y",this.functions=[],this.debugMode=!1,this.targetPercentage=.2,this.setDirectionInfo(),this.ScrollPosition=new l(this),this.scrollPosition=this.ScrollPosition.generateScrollPosition(),this.scrollEventUpdate()}return a(e,[{key:"setVal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$stage=e.stage?e.stage:t,this.direction=e.direction||this.direction,this.debugMode=e.debugMode||this.debugMode,this.targetPercentage=e.targetPercentage||.2,this.updateFunction=e.updateFunction,this.ScrollPosition=new l(this),this.scrollPosition=this.ScrollPosition.generateScrollPosition(),this.setDirectionInfo()}},{key:"scrollEventUpdate",value:function(){var t=this;this.update(),this.updateFunction?this.updateFunction(this):this.functions.forEach((function(e){var n=r(e,2),o=n[0],i=n[1];return o(i?Object.assign({},t,{scrollPosition:i.generateScrollPosition()}):t)})),s(this.scrollEventUpdate.bind(this))}},{key:"update",value:function(){this.scrollPosition=this.ScrollPosition.generateScrollPosition();var t=this.$stage["inner".concat(this.stageSizeName)];this.stageSize=t||this.$stage["client".concat(this.stageSizeName)],this.contentSize=document.documentElement["scroll".concat(this.stageSizeName)]}},{key:"setDirectionInfo",value:function(){this.directionPositionName="y"===this.direction?"Top":"Left",this.stageSizeName="y"===this.direction?"Height":"Width"}}]),e}(),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.$stage=e.$stage,this.direction=e.direction,this.targetPercentage=e.targetPercentage||.2,this.scrollName=this.$stage===window?"page".concat(e.direction.toUpperCase(),"Offset"):"scroll".concat(e.directionPositionName),this.scrollPosition=this.getScrollPosition()}return a(t,[{key:"getScrollPosition",value:function(){return this.$stage[this.scrollName]}},{key:"generateScrollPosition",value:function(){var t=(this.getScrollPosition()-this.scrollPosition)*this.targetPercentage;return this.scrollPosition+=Math.round(100*t)/100,this.scrollPosition}}]),t}(),c=new u}).call(this,n(5))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isOver=!1,this.$el=e,this.eventScrollElementPosition=n,this.eventTriggerPercentage=r||.5,this.events=o}var e,n,i;return e=t,(n=[{key:"getEventScrollElementPosition",value:function(t){return this.eventScrollElementPosition?Object(r.f)(this.eventScrollElementPosition):Object(r.a)(this.$el,{direction:t})}},{key:"timingEvent",value:function(t){var e=t.stageSize,n=t.scrollPosition,r=t.direction;this.eventScrollPlussWindowPerCentPosition=n+e*this.eventTriggerPercentage;var o=this.eventScrollPlussWindowPerCentPosition>=this.getEventScrollElementPosition(r);if(o!==this.isOver)return this.isOver=o,(0,this.events[o?0:1])({target:this.$el,isOver:o})}}])&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e,n,r,i,a,s,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.speeds="object"===o(r)?r:[r],this.mins="object"===o(i)?i:[i],this.maxs="object"===o(a)?a:[a],this.contentScrollPositionStyleValues="object"===o(u)?u:[u],this.contentScrollPosition=s,this.styles=this.generateStyles("object"===o(n)?n:[n])}var e,n,a;return e=t,(n=[{key:"generateStyles",value:function(t){var e=this;return t.map((function(t,n){var o=e.contentScrollPositionStyleValues[n]||document.defaultView.getComputedStyle(e.$el,null)[t],i=Object(r.c)(o);return{name:t,speed:e.speeds[n]||e.speeds[0],min:e.mins[n]||e.mins[0],max:e.maxs[n]||e.maxs[0],contentStyleValue:i,styleValues:Object(r.e)(i)}}))}},{key:"generateValues",value:function(t,e,n,o,i,a){var s=this;return i.map((function(i,u){var l="object"===o?o[u]:o,c=-parseFloat(-t*l+Object(r.f)(s.contentScrollPosition)*l)+i;return c=Math.min(c,"object"===n?n[u]:n),c=Math.max(c,"object"===e?e[u]:e),a.indexOf("rgb")>=0&&(c=Math.max(parseInt(c),0)),c}))}},{key:"getStyleValues",value:function(t){var e=this,n=t.scrollPosition;return this.styles.reduce((function(t,o){return Object.assign({},t,(i={},a=o.name,s=Object(r.d)(o.contentStyleValue,e.generateValues(n,o.min,o.max,o.speed,o.styleValues,o.contentStyleValue)),a in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,i));var i,a,s}),{})}}])&&i(e.prototype,n),a&&i(e,a),t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.styleValues={},this.motions=[],this.rangeMotions=[]}var e,n,i;return e=t,(n=[{key:"setMotion",value:function(t){var e=this.setStyleValue(t.fromStyle),n=this.setStyleValue(t.toStyle);this.motions.push(Object.assign({},t,{easing:t.easing||"linear",fromStyle:e,toStyle:n}))}},{key:"setStyleValues",value:function(){var t=this;this.motions=this.motions.map((function(e){return Object.assign({},e,{fromStyleValues:t.generateStyleValues(e.fromStyle),toStyleValues:t.generateStyleValues(e.toStyle)})}))}},{key:"generateStyleValues",value:function(t){var e={};for(var n in t)e[n]=Object(r.e)(t[n]);return e}},{key:"setStyleValue",value:function(t){var e={};for(var n in t)e[n]=Object(r.c)(t[n]);return e}},{key:"setRangeMotions",value:function(t){var e=t.scrollPosition,n=[];this.motions.forEach((function(t){Object(r.f)(t.start)<=e&&n.push(t)})),this.rangeMotions=n}},{key:"setDefaultStyles",value:function(){var t={};this.motions.forEach((function(e){var n=e.fromStyle;for(var r in n)void 0===t[r]&&(t[r]=n[r])})),this.styleValues=t}},{key:"setFromStyle",value:function(){var t=this;this.motions.forEach((function(e,n){var r=e.fromStyle,o=e.toStyle;for(var i in o)void 0===r&&(r={}),void 0===r[i]&&(r[i]=t.getLastToStyle(i,n))}))}},{key:"getLastToStyle",value:function(t,e){for(var n="",r=Math.max(e-1,0);r>=0;r--){var o=this.motions[r];if(void 0!==o.fromStyle[t]){n=o.toStyle[t];break}}return""===n&&(n=document.defaultView.getComputedStyle(this.$el,null)[t]),n}},{key:"setStart",value:function(){var t=this;this.motions.forEach((function(e,n){void 0===e.start&&(e.start=t.getLastStart(n)||0)}))}},{key:"getLastStart",value:function(t){for(var e="",n=Math.max(t-1,0);n>=0;n--){var r=this.motions[n];if(void 0!==r.start){e=r.end;break}}return e}},{key:"generateScrollStyleValues",value:function(t,e,n,o,i){var a=Math.abs(e-n),s=e<n?a:-a,u=r.b[o](i,e,s,1);return t.indexOf("rgb")>=0&&(u=u>=1?parseInt(u):u<0?0:u),u}},{key:"getStyleValues",value:function(t){var e=this,n=t.scrollPosition;return this.rangeMotions.forEach((function(t,o){var i=Object(r.f)(t.start),a=Object(r.f)(t.end),s=i<n&&n<a?(n-i)/(a-i):n>i?1:n<a?0:"";for(var u in t.fromStyle){for(var l=t.fromStyle[u],c=t.fromStyleValues[u],f=t.toStyleValues[u],h=[],d=0;d<c.length;d++)h[d]=e.generateScrollStyleValues(l,c[d],f[d],t.easing,s);e.styleValues[u]=Object(r.d)(l,h)}})),this.styleValues}}])&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":a(window))&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2),i=n(3),a=n(4);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}$.parallax=function(t){r.b.setVal(t),r.b.debugMode&&$("body").append('<p class="parallax-debug" style="border: 1px solid red;position: absolute;'+("y"===r.b.direction?"width":"height")+": 100%;"+("y"===r.b.direction?"left":"top")+': 0;"></p>')},$.parallaxTiming=function(t){this.eventTriggerPercentage=t.eventTriggerPercentage};var c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.b;n.functions.push([t,e.targetPercentage&&new r.a(u({},n,{targetPercentage:e.targetPercentage}))])};$.fn.parallaxTiming=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.b.directionPositionName.toLocaleLowerCase(),i="[object Array]"===Object.prototype.toString.call(e)?e:e.start?[e.start,e.end]:e.toggle,a=new o.a(e.target||this[0],e.eventScrollPosition,e.eventTriggerPercentage||$.eventTriggerPercentage,i||[function(){return $(t).addClass("on")},function(){return $(t).removeClass("on")}]);return c((function(t){a.timingEvent(t),r.b.debugMode&&$("body > .parallax-debug").css(n,a.eventScrollPlussWindowPerCentPosition)}),e),this},$.fn.parallaxSpeed=function(t){var e=this,n=new i.a(e[0],t.style||t.styles,t.speed||2,t.min||-99999,t.max||99999,t.contentScrollPosition||0,t.contentScrollPositionStyleValue);return c((function(t){e.css(n.getStyleValues(t))}),t),this},$.fn.parallaxFit=function(t){var e=this,n=new a.a(e[0]);t.length?t.forEach((function(t){return n.setMotion(t)})):void 0!==t.end&&n.setMotion({start:t.start,end:t.end,fromStyle:t.fromStyle,toStyle:t.toStyle,easing:t.easing});for(var r=1;void 0!==t["motion"+r+"End"];r++){var o="motion"+r;n.setMotion({start:t[o+"Start"],end:t[o+"End"],fromStyle:t[o+"FromStyle"],toStyle:t[o+"ToStyle"],easing:t[o+"Easing"]})}return n.setFromStyle(),n.setStyleValues(),n.setStart(),c((function(t){n.setRangeMotions(t),n.setDefaultStyles(),e.css(n.getStyleValues(t))}),t),this}}])},"object"===a(e)&&"object"===a(t)?t.exports=i():(r=[],void 0===(o="function"==typeof(n=i)?n.apply(e,r):n)||(t.exports=o))}).call(this,n(3)(t))},3:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},45:function(t,e,n){"use strict";n.r(e);n(46),n(11);$.parallax({direction:"x"}),$(".gnav > ul > *").each((function(){$(this).parallaxTiming({target:$(this).find("a").attr("href")})})),$("#timing").parallaxTiming(),$(".material").append('<div class="borders"></div>');for(var r=0;r<8;r++)$(".borders").append('<div class="border"></div>'),$(".border").eq(r).css({width:Math.floor(300*Math.random())+300,opacity:Math.random()+.1}).parallaxSpeed({style:["width","left"],speed:.2*Math.random()+.5*[-1,1][Math.floor(2*Math.random())]});$(".bird").parallaxFit([{start:0,end:"#timing",fromStyle:{left:"50%"},toStyle:{left:"60%",top:"100px"},easing:"easeOutCubic"},{end:"#speed",toStyle:{left:"40%",top:"90px"},easing:"easeInQuart"},{end:"last",toStyle:{left:"65%",top:"80px"},easing:"easeInQuart"}]),$(".birdPath").parallaxFit([{start:0,end:"#timing",fromStyle:{fill:"#1176ff"},toStyle:{fill:"#67ad0c"}},{end:"#speed",toStyle:{fill:"#ff15d0"}},{end:"#fit",toStyle:{fill:"#1176ff"}}]),$(".gear").parallaxSpeed({style:"transform",contentScrollPositionStyleValue:"rotate(0deg)",speed:-.2}),$(".triangle").each((function(t){$(this).parallaxSpeed({style:["transform","top","opacity"],contentScrollPositionStyleValue:"rotate(".concat(Math.floor(60*Math.random()*t),"deg)"),speed:[.05*Math.random()*[-1,1][Math.floor(2*Math.random())],.15*Math.random(),.005],contentScrollPosition:"#speed"})})),$(".circle").each((function(t){$(this).parallaxFit([{start:["#fit",50*t-300],end:["#fit",100*t],fromStyle:{opacity:0,transform:"scale(0.3)",top:$(this).css("top")},toStyle:{opacity:1,transform:"scale(1)",top:$(this).css("top")},easing:"easeOutBack"}])}))},46:function(t,e,n){}});