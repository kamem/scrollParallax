!function(t){var e={};function a(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=2)}([,,function(t,e,a){"use strict";a.r(e);a(3);$.parallax({direction:"x"});var r=$("#header, #install, #timing, #speed, #fit"),o=$(".gnav > ul > *");function n(t){var e=r.index(t.target)+(t.isOver?0:-1);o.removeClass("on").eq(e).addClass("on"),r.removeClass("on").eq(e).addClass("on")}r.each((function(){$(this).parallaxTiming([n,n])})),$(".material").append('<div class="borders"></div>');for(var l=0;l<8;l++)$(".borders").append('<div class="border"></div>'),$(".border").eq(l).css({width:Math.floor(300*Math.random())+300,opacity:Math.random()+.1}).parallaxSpeed({style:["width","left"],speed:.2*Math.random()+.5*[-1,1][Math.floor(2*Math.random())]});$(".bird").parallaxFit([{start:0,end:"#timing",fromStyle:{left:"50%"},toStyle:{left:"60%",top:"100px"},easing:"easeOutCubic"},{end:"#speed",toStyle:{left:"40%",top:"90px"},easing:"easeInQuart"},{end:"last",toStyle:{left:"65%",top:"80px"},easing:"easeInQuart"}]),$(".birdPath").parallaxFit([{start:0,end:"#timing",fromStyle:{fill:"#1176ff"},toStyle:{fill:"#67ad0c"}},{end:"#speed",toStyle:{fill:"#ff15d0"}},{end:"#fit",toStyle:{fill:"#1176ff"}}]),$(".gear").parallaxSpeed({style:"transform",contentScrollPositionStyleValue:"rotate(0deg)",speed:-.2}),$(".triangle").each((function(t){$(this).parallaxSpeed({style:["transform","top","opacity"],contentScrollPositionStyleValue:"rotate(".concat(Math.floor(60*Math.random()*t),"deg)"),speed:[.05*Math.random()*[-1,1][Math.floor(2*Math.random())],.15*Math.random(),.005],contentScrollPosition:"#speed"})})),$(".circle").each((function(t){$(this).parallaxFit([{start:["last",50*t-300],end:["last",100*t],fromStyle:{opacity:0,transform:"scale(0.3)",top:$(this).css("top")},toStyle:{opacity:1,transform:"scale(1)",top:$(this).css("top")},easing:"easeOutBack"}])}))},function(t,e,a){}]);