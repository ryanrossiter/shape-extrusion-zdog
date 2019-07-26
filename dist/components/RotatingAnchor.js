"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var RotatingAnchor = function RotatingAnchor(_ref) {
  var children = _ref.children;
  var ref = (0, _react.useRef)(undefined);
  (0, _reactZdog.useRender)(function () {
    ref.current.rotate.y = Math.sin((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3;
    ref.current.rotate.x = Math.cos((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3; // ref.current.rotate.y = (Date.now() - window.performance.timing.navigationStart) / 2000;
    // ref.current.rotate.x = (Date.now() - window.performance.timing.navigationStart) / 2000;
  });
  return _react["default"].createElement(_reactZdog.Anchor, {
    ref: ref,
    rotate: {
      x: -Math.PI / 8,
      y: 0
    }
  }, children);
};

var _default = RotatingAnchor;
exports["default"] = _default;