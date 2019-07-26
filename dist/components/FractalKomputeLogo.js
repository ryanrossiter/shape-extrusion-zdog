"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

var _letters = require("../shapes/letters");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DARK_AQUA = "#84DCC6";
var LIGHT_AQUA = "#A5FFD6";
var LIGHT_RED = "#FFA69E";
var DARK_RED = "#FF686B";
var YELLOW = "#FFCE49";

var ForwardLogo = function ForwardLogo(_ref) {
  var _ref$fColor = _ref.fColor,
      fColor = _ref$fColor === void 0 ? DARK_AQUA : _ref$fColor,
      _ref$kColor = _ref.kColor,
      kColor = _ref$kColor === void 0 ? DARK_RED : _ref$kColor,
      props = _objectWithoutProperties(_ref, ["fColor", "kColor"]);

  return _react["default"].createElement(_reactZdog.Group, props, _react["default"].createElement(_letters.FShape, {
    translate: {
      x: -4
    },
    fill: true,
    scale: -1,
    rotate: {
      x: Math.PI
    },
    color: fColor,
    backface: false
  }), _react["default"].createElement(_letters.KShape, {
    translate: {
      x: 0
    },
    fill: true,
    color: kColor,
    backface: false
  }));
};

var BackwardLogo = function BackwardLogo(_ref2) {
  var _ref2$fColor = _ref2.fColor,
      fColor = _ref2$fColor === void 0 ? LIGHT_AQUA : _ref2$fColor,
      _ref2$kColor = _ref2.kColor,
      kColor = _ref2$kColor === void 0 ? LIGHT_RED : _ref2$kColor,
      props = _objectWithoutProperties(_ref2, ["fColor", "kColor"]);

  return _react["default"].createElement(_reactZdog.Group, props, _react["default"].createElement(_letters.KShape, {
    translate: {
      x: 0
    },
    scale: {
      x: -1
    },
    rotate: {
      y: Math.PI
    },
    fill: true,
    color: kColor,
    backface: false
  }), _react["default"].createElement(_letters.FShape, {
    translate: {
      x: 0
    },
    scale: {
      x: -1
    },
    rotate: {
      y: Math.PI
    },
    fill: true,
    color: fColor,
    backface: false
  }));
};

var FractalKomputeLogo = function FractalKomputeLogo() {
  return _react["default"].createElement(_reactZdog.Anchor, {
    scale: 20
  }, _react["default"].createElement(_reactZdog.Group, null, _react["default"].createElement(ForwardLogo, {
    fColor: LIGHT_AQUA,
    kColor: LIGHT_RED,
    translate: {
      z: 0.5,
      x: 0.5,
      y: 0.3
    }
  }), _react["default"].createElement(ForwardLogo, null), _react["default"].createElement(BackwardLogo, {
    fColor: DARK_AQUA,
    kColor: DARK_RED
  }), _react["default"].createElement(BackwardLogo, {
    translate: {
      z: 0.5,
      x: -0.5,
      y: -0.3
    }
  })));
};

var _default = FractalKomputeLogo;
exports["default"] = _default;