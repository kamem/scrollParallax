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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export default */
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
      var innerWidth = this.$stage["inner".concat(this.stageSizeName)];
      this.stageSize = innerWidth ? innerWidth : document.documentElement["client".concat(this.stageSizeName)];
      this.contentSize = document.documentElement["scroll".concat(this.stageSizeName)];
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
    this.scrollPosition = this.getScrollPosition();
    this.targetPercentage = opt.targetPercentage || 0.2;
  }

  _createClass(ScrollPosition, [{
    key: "getScrollPosition",
    value: function getScrollPosition() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.direction;
      return this.$stage["page".concat(direction.toUpperCase(), "Offset")];
    }
  }, {
    key: "generateScrollPosition",
    value: function generateScrollPosition() {
      var scrollPosition = this.getScrollPosition();
      var offset = (scrollPosition - this.scrollPosition) * this.targetPercentage;
      this.scrollPosition += Math.round(offset * 100) / 100;
      return this.scrollPosition;
    }
  }]);

  return ScrollPosition;
}();
var Status = new ScrollStatus();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 1 */
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
/* harmony import */ var _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
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
    var positionName = i[0];
    var position = ~['lastScrollPosition', 'last'].indexOf(positionName) ? lastScrollPosition : _offset(positionName, status);
    return Math.min(position + (parseInt(i[1]) || 0), lastScrollPosition);
  }

  return scrollPosition;
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timing; });
/* harmony import */ var _js_scrollParallax_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timing =
/*#__PURE__*/
function () {
  function Timing($el, eventScrollPosition, center, events) {
    _classCallCheck(this, Timing);

    this.isOver = false;
    this.$el = $el;
    this.eventScrollElementPosition = eventScrollPosition;
    this.center = center || 50;
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
      this.eventScrollPlussWindowPerCentPosition = scrollPosition + stageSize * (this.center / 100);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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
    value: function generateValues(scrollPosition, min, max, speed, styleValues, contentStyleValue) {
      var _this2 = this;

      return styleValues.map(function (value, j) {
        var sp = speed === 'object' ? speed[j] : speed;
        var newValue = -parseFloat(-scrollPosition * sp + Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* scrollPositionStringToNumber */ "f"])(_this2.contentScrollPosition) * sp) + value;
        newValue = Math.min(newValue, max === 'object' ? max[j] : max);
        newValue = Math.max(newValue, min === 'object' ? min[j] : min);

        if (contentStyleValue.indexOf('rgb') >= 0) {
          newValue = Math.max(parseInt(newValue), 0);
        }

        return newValue;
      });
    }
  }, {
    key: "getStyleValues",
    value: function getStyleValues(_ref) {
      var _this3 = this;

      var scrollPosition = _ref.scrollPosition;
      return this.styles.reduce(function (result, style) {
        return Object.assign({}, result, _defineProperty({}, style.name, Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* generateStyleValueString */ "d"])(style.contentStyleValue, _this3.generateValues(scrollPosition, style.min, style.max, style.speed, style.styleValues, style.contentStyleValue))));
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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
      var styleValue = _util__WEBPACK_IMPORTED_MODULE_0__[/* easing */ "b"][easingName](scrollPercent, fromtStyle, fixAbs, 1);

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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _scrollParallax_Timing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scrollParallax_Speed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _scrollParallax_Fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* all parallax default options */

$.parallax = function (opt) {
  _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].setVal(opt);
  if (_scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].debugMode) $('body').append('<p class="parallax-debug" style="border: 1px solid red;position: absolute;' + (_scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].direction === 'y' ? 'width' : 'height') + ': 100%;' + (_scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].direction === 'y' ? 'left' : 'top') + ': 0;' + '"></p>');
};
/* timing default options */


$.parallaxTiming = function (opt) {
  this.center = opt.center;
};

var setScrollEvents = function setScrollEvents(func, opt) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"];
  status.functions.push([func, opt.targetPercentage && new _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* ScrollPosition */ "a"](_objectSpread({}, status, {
    targetPercentage: opt.targetPercentage
  }))]);
};

$.fn.parallaxTiming = function () {
  var _this = this;

  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var positionName = _scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].directionPositionName.toLocaleLowerCase();
  var timingEvent = Object.prototype.toString.call(opt) === '[object Array]' ? opt : opt.start ? [opt.start, opt.end] : opt.toggle;
  var timing = new _scrollParallax_Timing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](opt.el || this[0], opt.eventScrollPosition, opt.center || $.center, timingEvent || [function () {
    return $(_this).addClass('on');
  }, function () {
    return $(_this).removeClass('on');
  }]);
  setScrollEvents(function (status) {
    timing.timingEvent(status);

    if (_scrollParallax_ScrollStatus__WEBPACK_IMPORTED_MODULE_0__[/* Status */ "b"].debugMode) {
      $('body > .parallax-debug').css(positionName, timing.eventScrollPlussWindowPerCentPosition);
    }
  }, opt);
  return this;
};
/* speed */


$.fn.parallaxSpeed = function (opt) {
  var $el = this;
  var s = new _scrollParallax_Speed__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]($el[0], opt.style, opt.speed || 2, opt.min || -99999, opt.max || 99999, opt.contentScrollPosition || 0, opt.contentScrollPositionStyleValue);
  setScrollEvents(function (status) {
    $el.css(s.getStyleValues(status));
  }, opt);
  return this;
};
/* fit */


$.fn.parallaxFit = function (opt) {
  var $el = this;
  var fit = new _scrollParallax_Fit__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]($el[0]);

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
    $el.css(fit.getStyleValues(status));
  }, opt);
  return this;
};

/***/ })
/******/ ]);
});