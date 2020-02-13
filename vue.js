/*!
 * scroll-parallax
 * Implementing parallax effect by utilizing various events of scroll.
 * https://github.com/kamem/scrollParallax.git
 * @version 1.0.0
 * @license Released under MIT license
 * @author kamem
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scrollParallax"] = factory();
	else
		root["scrollParallax"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStyleValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateStyleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generateStyleValueString; });
/* unused harmony export generateColorString */
/* unused harmony export generateRGB */
/* unused harmony export hexadecimalToRgb */
/* unused harmony export getStringColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scrollPositionStringToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return easing; });
/* harmony import */ var _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var numRegExp = /([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g;
var getStyleValues = function getStyleValues(value) {
  var valueRegAry;
  var valueAry = [];

  while ((valueRegAry = numRegExp.exec(value)) !== null) {
    valueAry.push(parseFloat(valueRegAry[1]));
  }

  return valueAry;
};
var generateStyleValue = function generateStyleValue(styleValue) {
  var value = String(styleValue);
  value = getStringColor(value);
  value = hexadecimalToRgb(value);
  return value;
};
var generateStyleValueString = function generateStyleValueString(style, values) {
  var i = 0;
  return style.replace(numRegExp, function (styleValue) {
    return styleValue.replace(/[-]?([1-9]\d*|0)(\.\d+)?/, values[i++]);
  });
};

var plusColor = function plusColor(s) {
  return s + s;
};

var generateColorString = function generateColorString(colorString) {
  if (colorString.length > 4) return colorString;
  return "#".concat(plusColor(colorString[1])).concat(plusColor(colorString[2])).concat(plusColor(colorString[3]));
};
var generateRGB = function generateRGB(colorString) {
  var c = colorString.substring(1);
  return [parseInt(c.substring(0, 2), 16), parseInt(c.substring(2, 4), 16), parseInt(c.substring(4, 6), 16)];
};
var hexadecimalToRgb = function hexadecimalToRgb(value) {
  return value.replace(/#[0-9a-fA-F]{3,6}/g, function (color) {
    var _generateRGB = generateRGB(generateColorString(color)),
        _generateRGB2 = _slicedToArray(_generateRGB, 3),
        r = _generateRGB2[0],
        g = _generateRGB2[1],
        b = _generateRGB2[2];

    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
  });
};
var getStringColor = function getStringColor(styleValue) {
  var colors = {
    red: 'f00',
    blue: '00f',
    yellow: 'ff0',
    green: '008000'
  };
  return styleValue.replace(/red|blue|green|yellow/g, function (color) {
    return '#' + colors[color];
  });
};
var _offset = function _offset(element, _ref) {
  var direction = _ref.direction;
  var directionPositionName = direction === 'y' ? 'Top' : 'Left';
  var scrollPosition = global["page".concat(direction.toUpperCase(), "Offset")] || document.documentElement["scroll".concat(directionPositionName)];
  var el = typeof element !== 'string' ? element : document.querySelector(element);
  return el && el.getBoundingClientRect()[directionPositionName.toLocaleLowerCase()] + scrollPosition;
};
var scrollPositionStringToNumber = function scrollPositionStringToNumber(scrollPosition) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"];
  var stageSize = status.stageSize,
      contentSize = status.contentSize;
  var lastScrollPosition = contentSize - stageSize;

  if (scrollPosition > lastScrollPosition || ~['lastScrollPosition', 'last'].indexOf(scrollPosition)) {
    return lastScrollPosition;
  }

  if (~['string', 'object'].indexOf(_typeof(scrollPosition))) {
    var i = typeof scrollPosition === 'string' ? scrollPosition.split(',') : scrollPosition;
    var positionName = i[0] || scrollPosition;
    var position = ~['lastScrollPosition', 'last'].indexOf(positionName) ? lastScrollPosition : _offset(positionName, status);
    var s = (parseInt(i[1]) || 0) + Math.min(position, lastScrollPosition);
    return Math.min(s, lastScrollPosition);
  }

  return Math.min(scrollPosition, lastScrollPosition);
};
var easing = {
  linear: function linear(t, b, c, d) {
    return b + c * t;
  },
  easeInQuad: function easeInQuad(i, b, c, d) {
    return c * (i /= d) * i + b;
  },
  easeOutQuad: function easeOutQuad(i, b, c, d) {
    return -c * (i /= d) * (i - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(i, b, c, d) {
    if ((i /= d / 2) < 1) {
      return c / 2 * i * i + b;
    }

    return -c / 2 * (--i * (i - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(i, b, c, d) {
    return c * (i /= d) * i * i + b;
  },
  easeOutCubic: function easeOutCubic(i, b, c, d) {
    return c * ((i = i / d - 1) * i * i + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(i, b, c, d) {
    if ((i /= d / 2) < 1) {
      return c / 2 * i * i * i + b;
    }

    return c / 2 * ((i -= 2) * i * i + 2) + b;
  },
  easeInQuart: function easeInQuart(i, b, c, d) {
    return c * (i /= d) * i * i * i + b;
  },
  easeOutQuart: function easeOutQuart(i, b, c, d) {
    return -c * ((i = i / d - 1) * i * i * i - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(i, b, c, d) {
    if ((i /= d / 2) < 1) {
      return c / 2 * i * i * i * i + b;
    }

    return -c / 2 * ((i -= 2) * i * i * i - 2) + b;
  },
  easeInQuint: function easeInQuint(i, b, c, d) {
    return c * (i /= d) * i * i * i * i + b;
  },
  easeOutQuint: function easeOutQuint(i, b, c, d) {
    return c * ((i = i / d - 1) * i * i * i * i + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(i, b, c, d) {
    if ((i /= d / 2) < 1) {
      return c / 2 * i * i * i * i * i + b;
    }

    return c / 2 * ((i -= 2) * i * i * i * i + 2) + b;
  },
  easeInSine: function easeInSine(i, b, c, d) {
    return -c * Math.cos(i / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(i, b, c, d) {
    return c * Math.sin(i / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(i, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * i / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(i, b, c, d) {
    return i == 0 ? b : c * Math.pow(2, 10 * (i / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(i, b, c, d) {
    return i == d ? b + c : c * (-Math.pow(2, -10 * i / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(i, b, c, d) {
    if (i == 0) {
      return b;
    }

    if (i == d) {
      return b + c;
    }

    if ((i /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (i - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --i) + 2) + b;
  },
  easeInCirc: function easeInCirc(i, b, c, d) {
    return -c * (Math.sqrt(1 - (i /= d) * i) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(i, b, c, d) {
    return c * Math.sqrt(1 - (i = i / d - 1) * i) + b;
  },
  easeInOutCirc: function easeInOutCirc(i, b, c, d) {
    if ((i /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - i * i) - 1) + b;
    }

    return c / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + b;
  },
  easeInElastic: function easeInElastic(m, p, a, b) {
    var d = 1.70158;
    var c = 0;
    var n = a;

    if (m == 0) {
      return p;
    }

    if ((m /= b) == 1) {
      return p + a;
    }

    if (!c) {
      c = b * 0.3;
    }

    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = c / (2 * Math.PI) * Math.asin(a / n);
    }

    return -(n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p;
  },
  easeOutElastic: function easeOutElastic(m, p, a, b) {
    var d = 1.70158;
    var c = 0;
    var n = a;

    if (m == 0) {
      return p;
    }

    if ((m /= b) == 1) {
      return p + a;
    }

    if (!c) {
      c = b * 0.3;
    }

    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = c / (2 * Math.PI) * Math.asin(a / n);
    }

    return n * Math.pow(2, -10 * m) * Math.sin((m * b - d) * (2 * Math.PI) / c) + a + p;
  },
  easeInOutElastic: function easeInOutElastic(m, p, a, b) {
    var d = 1.70158;
    var c = 0;
    var n = a;

    if (m == 0) {
      return p;
    }

    if ((m /= b / 2) == 2) {
      return p + a;
    }

    if (!c) {
      c = b * (0.3 * 1.5);
    }

    if (n < Math.abs(a)) {
      n = a;
      var d = c / 4;
    } else {
      var d = c / (2 * Math.PI) * Math.asin(a / n);
    }

    if (m < 1) {
      return -0.5 * (n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p;
    }

    return n * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c) * 0.5 + a + p;
  },
  easeInBack: function easeInBack(k, b, c, d, j) {
    if (j == undefined) {
      j = 1.70158;
    }

    return c * (k /= d) * k * ((j + 1) * k - j) + b;
  },
  easeOutBack: function easeOutBack(k, b, c, d, j) {
    if (j == undefined) {
      j = 1.70158;
    }

    return c * ((k = k / d - 1) * k * ((j + 1) * k + j) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(k, b, c, d, j) {
    if (j == undefined) {
      j = 1.70158;
    }

    if ((k /= d / 2) < 1) {
      return c / 2 * (k * k * (((j *= 1.525) + 1) * k - j)) + b;
    }

    return c / 2 * ((k -= 2) * k * (((j *= 1.525) + 1) * k + j) + 2) + b;
  },
  easeInBounce: function easeInBounce(i, b, c, d) {
    return c - easing.easeOutBounce(d - i, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(i, b, c, d) {
    if ((i /= d) < 1 / 2.75) {
      return c * (7.5625 * i * i) + b;
    } else {
      if (i < 2 / 2.75) {
        return c * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) + b;
      } else {
        if (i < 2.5 / 2.75) {
          return c * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) + b;
        } else {
          return c * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375) + b;
        }
      }
    }
  },
  easeInOutBounce: function easeInOutBounce(i, b, c, d) {
    if (i < d / 2) {
      return easing.easeInBounce(i * 2, 0, c, d) * 0.5 + b;
    }

    return easing.easeOutBounce(i * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ScrollStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Status; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var ScrollStatus =
/*#__PURE__*/
function () {
  function ScrollStatus() {
    _classCallCheck(this, ScrollStatus);

    this.$stage = global;
    this.direction = 'y';
    this.functions = [];
    this.debugMode = false;
    this.targetPercentage = 0.2;
    this.setDirectionInfo();
    this.ScrollPosition = new ScrollPosition(this);
    this.scrollPosition = this.ScrollPosition.generateScrollPosition();
    this.scrollEventUpdate();
  }

  _createClass(ScrollStatus, [{
    key: "setVal",
    value: function setVal() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$stage = opt.stage ? opt.stage : global;
      this.direction = opt.direction || this.direction;
      this.debugMode = opt.debugMode || this.debugMode;
      this.targetPercentage = opt.targetPercentage || 0.2;
      this.updateFunction = opt.updateFunction;
      this.ScrollPosition = new ScrollPosition(this);
      this.scrollPosition = this.ScrollPosition.generateScrollPosition();
      this.setDirectionInfo();
    }
  }, {
    key: "scrollEventUpdate",
    value: function scrollEventUpdate() {
      var _this = this;

      this.update();

      if (this.updateFunction) {
        this.updateFunction(this);
      } else {
        this.functions.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              func = _ref2[0],
              scrollPosition = _ref2[1];

          return func(scrollPosition ? Object.assign({}, _this, {
            scrollPosition: scrollPosition.generateScrollPosition()
          }) : _this);
        });
      }

      requestAnimationFrame(this.scrollEventUpdate.bind(this));
    }
  }, {
    key: "update",
    value: function update() {
      this.scrollPosition = this.ScrollPosition.generateScrollPosition();
      this.stageSize = this.$stage["inner".concat(this.stageSizeName)] || this.$stage["client".concat(this.stageSizeName)];
      this.contentSize = this.$stage["scroll".concat(this.stageSizeName)] || document.documentElement["scroll".concat(this.stageSizeName)];
    }
  }, {
    key: "setDirectionInfo",
    value: function setDirectionInfo() {
      this.directionPositionName = this.direction === 'y' ? 'Top' : 'Left';
      this.stageSizeName = this.direction === 'y' ? 'Height' : 'Width';
    }
  }]);

  return ScrollStatus;
}();


var ScrollPosition =
/*#__PURE__*/
function () {
  function ScrollPosition() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ScrollPosition);

    this.$stage = opt.$stage;
    this.direction = opt.direction;
    this.targetPercentage = opt.targetPercentage || 0.2;
    this.scrollName = this.$stage === window ? "page".concat(opt.direction.toUpperCase(), "Offset") : "scroll".concat(opt.directionPositionName);
    this.scrollPosition = this.getScrollPosition();
  }

  _createClass(ScrollPosition, [{
    key: "getScrollPosition",
    value: function getScrollPosition() {
      return this.$stage[this.scrollName];
    }
  }, {
    key: "generateScrollPosition",
    value: function generateScrollPosition() {
      var scrollPosition = this.getScrollPosition();
      var offset = (scrollPosition - this.scrollPosition) * this.targetPercentage;
      this.scrollPosition += offset;
      return Math.round(this.scrollPosition * 100) / 100;
    }
  }]);

  return ScrollPosition;
}();
var Status = new ScrollStatus();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timing; });
/* harmony import */ var _js_scrollParallax_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timing =
/*#__PURE__*/
function () {
  function Timing($el, eventScrollPosition, eventTriggerPercentage, events) {
    _classCallCheck(this, Timing);

    this.isOver = false;
    this.$el = $el;
    this.eventScrollElementPosition = eventScrollPosition;
    this.eventTriggerPercentage = eventTriggerPercentage || 0.5;
    this.events = events;
  }

  _createClass(Timing, [{
    key: "getEventScrollElementPosition",
    value: function getEventScrollElementPosition(direction) {
      return this.eventScrollElementPosition ? Object(_js_scrollParallax_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(this.eventScrollElementPosition) : Object(_js_scrollParallax_util__WEBPACK_IMPORTED_MODULE_0__[/* _offset */ "a"])(this.$el, {
        direction: direction
      });
    }
  }, {
    key: "timingEvent",
    value: function timingEvent(_ref) {
      var stageSize = _ref.stageSize,
          scrollPosition = _ref.scrollPosition,
          direction = _ref.direction;
      this.eventScrollPlussWindowPerCentPosition = scrollPosition + stageSize * this.eventTriggerPercentage;
      var isOver = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(direction);

      if (isOver !== this.isOver) {
        this.isOver = isOver;
        var eventSelect = this.events[isOver ? 0 : 1];
        return eventSelect({
          target: this.$el,
          isOver: isOver
        });
      }
    }
  }]);

  return Timing;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speed; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Speed =
/*#__PURE__*/
function () {
  function Speed($el, style, speed, min, max, contentScrollPosition, contentStyleValue) {
    _classCallCheck(this, Speed);

    this.$el = $el;
    this.speeds = _typeof(speed) === 'object' ? speed : [speed];
    this.mins = _typeof(min) === 'object' ? min : [min];
    this.maxs = _typeof(max) === 'object' ? max : [max];
    this.contentScrollPositionStyleValues = _typeof(contentStyleValue) === 'object' ? contentStyleValue : [contentStyleValue];
    this.contentScrollPosition = contentScrollPosition;
    this.styles = this.generateStyles(_typeof(style) === 'object' ? style : [style]);
  }

  _createClass(Speed, [{
    key: "generateStyles",
    value: function generateStyles(styles) {
      var _this = this;

      return styles.map(function (name, i) {
        var contentScrollPositionStyleValues = _this.contentScrollPositionStyleValues[i] || document.defaultView.getComputedStyle(_this.$el, null)[name];
        var styleValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* generateStyleValue */ "c"])(contentScrollPositionStyleValues);
        return {
          name: name,
          speed: _this.speeds[i] || _this.speeds[0],
          min: _this.mins[i] || _this.mins[0],
          max: _this.maxs[i] || _this.maxs[0],
          contentStyleValue: styleValue,
          styleValues: Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* getStyleValues */ "e"])(styleValue)
        };
      });
    }
  }, {
    key: "generateValues",
    value: function generateValues(status, min, max, speed, styleValues, contentStyleValue) {
      var _this2 = this;

      return styleValues.map(function (value, j) {
        var _speed = _typeof(speed) === 'object' ? speed[j] : speed;

        _speed = typeof _speed === 'number' ? _speed : 2;
        var newValue = -parseFloat(-status.scrollPosition * _speed + Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(_this2.contentScrollPosition, status) * _speed) + value;

        var _min = _typeof(min) === 'object' ? min && min[j] : min;

        var _max = _typeof(min) === 'object' ? min && max[j] : max;

        newValue = Math.max(newValue, typeof _min === 'number' ? _min : -99999);
        newValue = Math.min(newValue, typeof _max === 'number' ? _max : 99999);

        if (contentStyleValue.indexOf('rgb') >= 0) {
          newValue = Math.max(parseInt(newValue), 0);
        }

        return newValue;
      });
    }
  }, {
    key: "getStyleValues",
    value: function getStyleValues(status) {
      var _this3 = this;

      return this.styles.reduce(function (result, style) {
        return Object.assign({}, result, _defineProperty({}, style.name, Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* generateStyleValueString */ "d"])(style.contentStyleValue, _this3.generateValues(status, style.min, style.max, style.speed, style.styleValues, style.contentStyleValue))));
      }, {});
    }
  }]);

  return Speed;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fit; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Fit =
/*#__PURE__*/
function () {
  function Fit($el) {
    _classCallCheck(this, Fit);

    this.$el = $el;
    this.styleValues = {};
    this.motions = [];
    this.rangeMotions = [];
  }

  _createClass(Fit, [{
    key: "setMotion",
    value: function setMotion(motion) {
      var fromStyle = this.setStyleValue(motion.fromStyle);
      var toStyle = this.setStyleValue(motion.toStyle);
      this.motions.push(Object.assign({}, motion, {
        easing: motion.easing || 'linear',
        fromStyle: fromStyle,
        toStyle: toStyle
      }));
    }
  }, {
    key: "setStyleValues",
    value: function setStyleValues() {
      var _this = this;

      this.motions = this.motions.map(function (motion) {
        return Object.assign({}, motion, {
          fromStyleValues: _this.generateStyleValues(motion.fromStyle),
          toStyleValues: _this.generateStyleValues(motion.toStyle)
        });
      });
    }
  }, {
    key: "generateStyleValues",
    value: function generateStyleValues(fromStyle) {
      var styles = {};

      for (var style in fromStyle) {
        styles[style] = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* getStyleValues */ "e"])(fromStyle[style]);
      }

      return styles;
    }
  }, {
    key: "setStyleValue",
    value: function setStyleValue(fromStyle) {
      var styles = {};

      for (var style in fromStyle) {
        styles[style] = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* generateStyleValue */ "c"])(fromStyle[style]);
      }

      return styles;
    }
  }, {
    key: "setRangeMotions",
    value: function setRangeMotions(_ref) {
      var scrollPosition = _ref.scrollPosition;
      var range = [];
      this.motions.forEach(function (motion) {
        var start = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(motion.start);
        if (start <= scrollPosition) range.push(motion);
      });
      this.rangeMotions = range;
    }
  }, {
    key: "setDefaultStyles",
    value: function setDefaultStyles() {
      var defaultStyles = {};
      this.motions.forEach(function (_ref2) {
        var fromStyle = _ref2.fromStyle;

        for (var style in fromStyle) {
          if (defaultStyles[style] === undefined) defaultStyles[style] = fromStyle[style];
        }
      });
      this.styleValues = defaultStyles;
    }
  }, {
    key: "setFromStyle",
    value: function setFromStyle() {
      var _this2 = this;

      this.motions.forEach(function (_ref3, i) {
        var fromStyle = _ref3.fromStyle,
            toStyle = _ref3.toStyle;

        for (var style in toStyle) {
          if (fromStyle === undefined) fromStyle = {};

          if (fromStyle[style] === undefined) {
            fromStyle[style] = _this2.getLastToStyle(style, i);
          }
        }
      });
    }
  }, {
    key: "getLastToStyle",
    value: function getLastToStyle(style, i) {
      var fromStyle = '';
      var k = Math.max(i - 1, 0);

      for (var j = k; j >= 0; j--) {
        var motion = this.motions[j];

        if (motion.fromStyle[style] !== undefined) {
          fromStyle = motion.toStyle[style];
          break;
        }
      }

      if (fromStyle === '') fromStyle = document.defaultView.getComputedStyle(this.$el, null)[style];
      return fromStyle;
    }
  }, {
    key: "setStart",
    value: function setStart() {
      var _this3 = this;

      this.motions.forEach(function (motion, i) {
        if (motion.start === undefined) {
          motion.start = _this3.getLastStart(i) || 0;
        }
      });
    }
  }, {
    key: "getLastStart",
    value: function getLastStart(i) {
      var start = '';
      var k = Math.max(i - 1, 0);

      for (var j = k; j >= 0; j--) {
        var motion = this.motions[j];

        if (motion.start !== undefined) {
          start = motion.end;
          break;
        }
      }

      return start;
    }
  }, {
    key: "generateScrollStyleValues",
    value: function generateScrollStyleValues(style, fromtStyle, toStyle, easingName, scrollPercent) {
      var abs = Math.abs(fromtStyle - toStyle);
      var fixAbs = fromtStyle < toStyle ? abs : -abs;
      var e = typeof easingName === 'string' ? _util__WEBPACK_IMPORTED_MODULE_0__[/* easing */ "b"][easingName] : easingName;
      var styleValue = e(scrollPercent, fromtStyle, fixAbs, 1);

      if (style.indexOf('rgb') >= 0) {
        styleValue = styleValue >= 1 ? parseInt(styleValue) : styleValue < 0 ? 0 : styleValue;
      }

      return styleValue;
    }
  }, {
    key: "getStyleValues",
    value: function getStyleValues(_ref4) {
      var _this4 = this;

      var scrollPosition = _ref4.scrollPosition;
      this.rangeMotions.forEach(function (motion, j) {
        var start = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(motion.start);
        var end = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(motion.end);
        var isInRange = start < scrollPosition && scrollPosition < end;
        var range = end - start;
        var scrollPercent = isInRange ? (scrollPosition - start) / range : scrollPosition > start ? 1 : scrollPosition < end ? 0 : '';

        for (var style in motion.fromStyle) {
          var fromStyleValue = motion.fromStyle[style];
          var fromStyleValues = motion.fromStyleValues[style];
          var toStyleValues = motion.toStyleValues[style];
          var values = [];

          for (var i = 0; i < fromStyleValues.length; i++) {
            values[i] = _this4.generateScrollStyleValues(fromStyleValue, fromStyleValues[i], toStyleValues[i], motion.easing, scrollPercent);
          }

          _this4.styleValues[style] = Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* generateStyleValueString */ "d"])(fromStyleValue, values);
        }
      });
      return this.styleValues;
    }
  }]);

  return Fit;
}();



/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scrollParallax_Timing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scrollParallax_Speed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _scrollParallax_Fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var setScrollEvents = function setScrollEvents(func, opt) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"];
  status.functions.push([func, opt.targetPercentage && new _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* ScrollPosition */ "a"](_objectSpread({}, status, {
    targetPercentage: opt.targetPercentage
  }))]);
};

var generateScrollStatusValues = function generateScrollStatusValues(Vue) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scrollStatus = arguments.length > 2 ? arguments[2] : undefined;

  if (opt.name) {
    $scrollStatus[opt.name] = Vue.observable({
      scrollPosition: _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].scrollPosition,
      contentSize: _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].contentSize,
      values: {}
    });
  }

  var scrollStatus = opt.name ? $scrollStatus[opt.name] : $scrollStatus;
  return _objectSpread({}, opt, {
    updateFunction: function updateFunction(status) {
      scrollStatus.scrollPosition = status.scrollPosition;
      scrollStatus.contentSize = status.contentSize;
      scrollStatus.values = Object.assign({}, scrollStatus.values, status.functions.reduce(function (result, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            current = _ref2[0],
            scrollPosition = _ref2[1];

        return Object.assign({}, result, current(scrollPosition ? Object.assign({}, status, {
          scrollPosition: scrollPosition.generateScrollPosition()
        }) : status));
      }, {}));
    }
  });
};

var Parallax = {
  install: function install(Vue, opt) {
    var $scrollStatus = Vue.observable({
      scrollPosition: _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].scrollPosition,
      values: {}
    });
    _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].setVal(generateScrollStatusValues(Vue, opt, $scrollStatus, name));
    Vue.prototype.$scrollStatus = $scrollStatus;
    Vue.directive('parallax-timing', {
      bind: function bind(el, _ref3, _ref4) {
        var value = _ref3.value;
        var _ref4$data$attrs = _ref4.data.attrs,
            o = _ref4$data$attrs === void 0 ? {} : _ref4$data$attrs;
        var opt = value || o;
        var c = opt.class || 'on';
        var timing = new _scrollParallax_Timing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](opt.target || el, opt.eventScrollPosition, opt.eventTriggerPercentage, opt.toggle || [function () {
          return el.classList.add(c);
        }, function () {
          return el.classList.remove(c);
        }]);
        setScrollEvents(function (status) {
          return timing.timingEvent(status);
        }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
      }
    });
    Vue.directive('parallax-speed', {
      bind: function bind(el, _ref5, _ref6) {
        var value = _ref5.value;
        var _ref6$data$attrs = _ref6.data.attrs,
            o = _ref6$data$attrs === void 0 ? {} : _ref6$data$attrs;
        var opt = value || o;
        setTimeout(function () {
          var element = opt.el || el;
          var s = new _scrollParallax_Speed__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](element, opt.styles, opt.speed, opt.min, opt.max, opt.contentScrollPosition === 'this' ? element : opt.contentScrollPosition || 0, opt.contentScrollPositionStyleValue);
          setScrollEvents(function (status) {
            var styleValues = s.getStyleValues(status);

            for (var key in styleValues) {
              element.style[key] = styleValues[key];
            }
          }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
        }, 0);
      }
    });
    Vue.directive('parallax-fit', {
      bind: function bind(el, _ref7, _ref8) {
        var value = _ref7.value;
        var _ref8$data$attrs = _ref8.data.attrs,
            o = _ref8$data$attrs === void 0 ? {} : _ref8$data$attrs;
        setTimeout(function () {
          var fit = new _scrollParallax_Fit__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](el);
          var opt = value || o;

          if (opt.length) {
            opt.forEach(function (motion) {
              return fit.setMotion(motion);
            });
          } else if (opt['end'] !== undefined) {
            fit.setMotion({
              start: opt['start'],
              end: opt['end'],
              fromStyle: opt['fromStyle'],
              toStyle: opt['toStyle'],
              easing: opt['easing']
            });
          }

          for (var i = 1; opt['motion' + i + 'End'] !== undefined; i++) {
            var motion = 'motion' + i;
            fit.setMotion({
              start: opt[motion + 'Start'],
              end: opt[motion + 'End'],
              fromStyle: opt[motion + 'FromStyle'],
              toStyle: opt[motion + 'ToStyle'],
              easing: opt[motion + 'Easing']
            });
          }

          fit.setFromStyle();
          fit.setStyleValues();
          fit.setStart();
          setScrollEvents(function (status) {
            fit.setRangeMotions(status);
            fit.setDefaultStyles();
            var styleValues = fit.getStyleValues(status);

            for (var key in styleValues) {
              el.style[key] = styleValues[key];
            }
          }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
        }, 0);
      }
    });
    Vue.mixin({
      methods: {
        createStatus: function createStatus(opt) {
          var status = new _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"]();
          status.setVal(opt.name ? generateScrollStatusValues(Vue, opt, this.$scrollStatus) : opt);
          return status;
        },
        parallaxTiming: function parallaxTiming(opt) {
          var timing = new _scrollParallax_Timing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]('', opt.eventScrollPosition, opt.eventTriggerPercentage, Object.prototype.toString.call(opt) === '[object Array]' ? opt : opt.start ? [opt.start, opt.end] : opt.toggle);
          setScrollEvents(function (status) {
            return _defineProperty({}, opt.name, timing.timingEvent(status));
          }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
        },
        parallaxSpeed: function parallaxSpeed(opt) {
          var s = new _scrollParallax_Speed__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]('', opt.style, opt.speed, opt.min, opt.max, opt.contentScrollPosition || 0, opt.contentScrollPositionStyleValue);
          setScrollEvents(function (status) {
            return _defineProperty({}, opt.name, s.getStyleValues(status));
          }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
        },
        parallaxFit: function parallaxFit(name, opt) {
          var fit = new _scrollParallax_Fit__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](this);

          if (opt.length) {
            opt.forEach(function (motion) {
              return fit.setMotion(motion);
            });
          } else if (opt['end'] !== undefined) {
            fit.setMotion({
              start: opt['start'],
              end: opt['end'],
              fromStyle: opt['fromStyle'],
              toStyle: opt['toStyle'],
              easing: opt['easing']
            });
          }

          for (var i = 1; opt['motion' + i + 'End'] !== undefined; i++) {
            var motion = 'motion' + i;
            fit.setMotion({
              start: opt[motion + 'Start'],
              end: opt[motion + 'End'],
              fromStyle: opt[motion + 'FromStyle'],
              toStyle: opt[motion + 'ToStyle'],
              easing: opt[motion + 'Easing']
            });
          }

          fit.setFromStyle();
          fit.setStyleValues();
          fit.setStart();
          setScrollEvents(function (status) {
            fit.setRangeMotions(status);
            fit.setDefaultStyles();
            return _defineProperty({}, name, fit.getStyleValues(status));
          }, opt, opt.status || _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"]);
        }
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ })
/******/ ]);
});