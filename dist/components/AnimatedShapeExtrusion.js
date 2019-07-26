"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

var _ShapeExtrusion = _interopRequireDefault(require("./ShapeExtrusion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sideColor = function sideColor(v) {
  return "rgb(".concat(v * 255, ", ").concat(Math.sin(v * Math.PI) * 200, ", ", 0, ")");
};

var AnimatedShapeExtrusion = function AnimatedShapeExtrusion(props) {
  var ref = (0, _react.useRef)(undefined);
  (0, _reactZdog.useRender)(function () {
    ref.current.shapeRefs.forEach(function (shape, i) {
      var v = i / (ref.current.props.depth - 1); // let xOff = Math.sin((Date.now()) / 1000);
      // let yOff = Math.sin((Date.now()) / 1000 / 2);
      // shape.translate.x = Math.pow(xOff, 2) * Math.sign(xOff) * 100 * v;
      // shape.translate.y = Math.pow(yOff, 2) * Math.sign(yOff) * 100 * v;

      shape.translate.x = Math.sin(v * Math.PI + Date.now() / 300) * 50 * v;
    });
  });
  return _react["default"].createElement(_ShapeExtrusion["default"], _extends({
    ref: ref,
    sideColor: sideColor
  }, props, {
    spacing: 3,
    fillSides: true
  }));
};

var _default = AnimatedShapeExtrusion;
exports["default"] = _default;