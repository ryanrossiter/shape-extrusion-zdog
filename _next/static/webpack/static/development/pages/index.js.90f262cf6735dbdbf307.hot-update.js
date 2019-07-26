webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/ShapeExtrusion.js":
/*!******************************************!*\
  !*** ./src/components/ShapeExtrusion.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _shapes_letters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shapes/letters */ "./src/shapes/letters.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var DARK_AQUA = "#84DCC6";
var LIGHT_AQUA = "#A5FFD6";
var LIGHT_RED = "#FFA69E";
var DARK_RED = "#FF686B";
var YELLOW = "#FFCE49";

var ShapeExtrusion = function ShapeExtrusion(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? false : _ref$fill,
      color = _ref.color,
      sideColor = _ref.sideColor,
      _ref$depth = _ref.depth,
      depth = _ref$depth === void 0 ? 10 : _ref$depth,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 1.3 : _ref$spacing,
      props = _objectWithoutProperties(_ref, ["fill", "color", "sideColor", "depth", "spacing"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Group"], null, _toConsumableArray(Array(depth)).map(function (n, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_letters__WEBPACK_IMPORTED_MODULE_2__["AmpShape"], _extends({
      color: i === 0 ? color : sideColor ? sideColor : color,
      translate: {
        z: i * spacing
      },
      fill: fill && i === 0
    }, props));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeExtrusion);

/***/ })

})
//# sourceMappingURL=index.js.90f262cf6735dbdbf307.hot-update.js.map