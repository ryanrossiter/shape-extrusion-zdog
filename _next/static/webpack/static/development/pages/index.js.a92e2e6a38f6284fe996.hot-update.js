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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var DARK_AQUA = "#84DCC6";
var LIGHT_AQUA = "#A5FFD6";
var LIGHT_RED = "#FFA69E";
var DARK_RED = "#FF686B";
var YELLOW = "#FFCE49";

var ShapeExtrusion = function ShapeExtrusion(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? true : _ref$fill;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Group"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
    stroke: 10
  }), _toConsumableArray(Array(5)).map(function (n, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_letters__WEBPACK_IMPORTED_MODULE_2__["AmpShape"], {
      stroke: 2,
      translate: {
        z: i * 0.1
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeExtrusion);

/***/ })

})
//# sourceMappingURL=index.js.a92e2e6a38f6284fe996.hot-update.js.map