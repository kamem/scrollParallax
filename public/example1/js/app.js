!function(t){var e={};function r(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);var a=$("#header, #install, #timing, #speed, #fit"),o=$(".gnav > ul > *");function n(t){var e=a.index(t.target)+(t.isOver?0:-1);o.removeClass("on").eq(e).addClass("on"),a.removeClass("on").eq(e).addClass("on")}a.each((function(){$(this).parallaxTiming([n,n])})),$(".material").append('<div class="borders"></div>');for(var l=0;l<8;l++)$(".borders").append('<div class="border"></div>'),$(".border").eq(l).css({width:Math.floor(300*Math.random())+300,opacity:Math.random()+.1}).parallaxSpeed({style:["width","left"],speed:.2*Math.random()+.5*[-1,1][Math.floor(2*Math.random())]});$(".drop").parallaxFit([{start:0,end:"last",fromStyle:{top:"5%"},toStyle:{top:"80%"}}]),$(".dropPath").parallaxFit([{start:0,end:"#timing",fromStyle:{fill:"#1176ff"},toStyle:{fill:"#67ad0c"}},{end:"#speed",toStyle:{fill:"#ff15d0"}},{end:"last",toStyle:{fill:"#1176ff"}}]),$(".gear").parallaxSpeed({style:"transform",contentScrollPositionStyleValue:"rotate(0deg)",speed:-.2}),$(".triangle").each((function(t){$(this).parallaxSpeed({style:["transform","top","opacity"],contentScrollPositionStyleValue:"rotate(".concat(Math.floor(60*Math.random()*t),"deg)"),speed:[.05*Math.random()*[-1,1][Math.floor(2*Math.random())],.15*Math.random(),.005],contentScrollPosition:"#speed"})})),$(".circle").each((function(t){$(this).parallaxFit([{start:["last",50*t-300],end:["last",100*t],fromStyle:{opacity:0,transform:"scale(0.3)",top:$(this).css("top")},toStyle:{opacity:1,transform:"scale(1)",top:$(this).css("top")},easing:"easeOutBack"}])}))},function(t,e,r){}]);