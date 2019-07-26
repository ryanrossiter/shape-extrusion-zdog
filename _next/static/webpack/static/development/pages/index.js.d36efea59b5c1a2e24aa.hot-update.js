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




var spacing = function spacing(i, v) {
  return {
    x: 0,
    y: Math.sin(v * Math.PI * 2) * 20,
    z: i * 1.1
  };
};

var sideColor = function sideColor(v) {
  return "rgb(".concat(v * 255, ", ", 0, ", ", 0, ")");
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '800px',
      height: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Illustration"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__["RotatingAnchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__["ShapeExtrusion"], {
    depth: 100,
    spacing: spacing,
    sideColor: sideColor
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d36efea59b5c1a2e24aa.hot-update.js.map