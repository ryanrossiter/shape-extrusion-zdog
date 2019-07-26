webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var _src_components_AnimatedShapeExtrusion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/AnimatedShapeExtrusion */ "./src/components/AnimatedShapeExtrusion.js");





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '800px',
      height: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Illustration"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__["RotatingAnchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AnimatedShapeExtrusion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    depth: 50,
    spacing: spacing,
    sideColor: sideColor
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

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

var AnimatedShapeExtrusion = function AnimatedShapeExtrusion() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(undefined);
  Object(react_zdog__WEBPACK_IMPORTED_MODULE_1__["useRender"])(function () {
    ref.translate.x = Math.sin(Date.now() / 2000);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShapeExtrusion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spacing: spacing,
    color: color
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedShapeExtrusion);

/***/ })

})
//# sourceMappingURL=index.js.1b727342abf8c2c4c5d7.hot-update.js.map