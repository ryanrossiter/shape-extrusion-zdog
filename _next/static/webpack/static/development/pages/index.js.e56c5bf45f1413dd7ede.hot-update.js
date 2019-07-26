webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/AnimatedShapeExtrusion.js":
/*!**************************************************!*\
  !*** ./src/components/AnimatedShapeExtrusion.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _ShapeExtrusion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShapeExtrusion */ "./src/components/ShapeExtrusion.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var spacing = function spacing(i, v) {
  return {
    x: 0,
    y: Math.sin(v * Math.PI * 2 + Date.now() / 2000) * 20,
    z: i * 2
  };
};

var sideColor = function sideColor(v) {
  return "rgb(".concat(v * 255, ", ", 0, ", ", 0, ")");
};

var AnimatedShapeExtrusion = function AnimatedShapeExtrusion(props) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(undefined);
  Object(react_zdog__WEBPACK_IMPORTED_MODULE_1__["useRender"])(function () {
    ref.current.translate.x = Math.sin(Date.now() / 2000);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShapeExtrusion__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    ref: ref,
    spacing: spacing,
    sideColor: sideColor
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedShapeExtrusion);

/***/ })

})
//# sourceMappingURL=index.js.e56c5bf45f1413dd7ede.hot-update.js.map