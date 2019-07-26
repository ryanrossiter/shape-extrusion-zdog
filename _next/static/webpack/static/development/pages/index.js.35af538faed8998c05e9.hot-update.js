webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/RotatingAnchor.js":
/*!******************************************!*\
  !*** ./src/components/RotatingAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");



var RotatingAnchor = function RotatingAnchor(_ref) {
  var children = _ref.children;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
  Object(react_zdog__WEBPACK_IMPORTED_MODULE_1__["useRender"])(function () {
    ref.current.rotate.y = Math.sin((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    ref: ref,
    rotate: {
      x: -Math.PI / 8,
      y: 0
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (RotatingAnchor);

/***/ })

})
//# sourceMappingURL=index.js.35af538faed8998c05e9.hot-update.js.map