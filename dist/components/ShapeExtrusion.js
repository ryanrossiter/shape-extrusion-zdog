"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactZdog = require("react-zdog");

var _letters = require("../shapes/letters");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DARK_AQUA = "#84DCC6";
var LIGHT_AQUA = "#A5FFD6";
var LIGHT_RED = "#FFA69E";
var DARK_RED = "#FF686B";
var YELLOW = "#FFCE49";

var ShapeExtrusion =
/*#__PURE__*/
function (_Component) {
  _inherits(ShapeExtrusion, _Component);

  function ShapeExtrusion(props) {
    var _this;

    _classCallCheck(this, ShapeExtrusion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShapeExtrusion).call(this, props));
    _this.shapeRefs = new Map();
    return _this;
  }

  _createClass(ShapeExtrusion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$fill = _this$props.fill,
          fill = _this$props$fill === void 0 ? true : _this$props$fill,
          _this$props$fillSides = _this$props.fillSides,
          fillSides = _this$props$fillSides === void 0 ? false : _this$props$fillSides,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? "#333" : _this$props$color,
          _this$props$sideColor = _this$props.sideColor,
          sideColor = _this$props$sideColor === void 0 ? "#BBB" : _this$props$sideColor,
          _this$props$depth = _this$props.depth,
          depth = _this$props$depth === void 0 ? 30 : _this$props$depth,
          _this$props$spacing = _this$props.spacing,
          spacing = _this$props$spacing === void 0 ? 1 : _this$props$spacing,
          _this$props$stroke = _this$props.stroke,
          stroke = _this$props$stroke === void 0 ? 1 : _this$props$stroke,
          sideStroke = _this$props.sideStroke,
          rotate = _this$props.rotate,
          props = _objectWithoutProperties(_this$props, ["fill", "fillSides", "color", "sideColor", "depth", "spacing", "stroke", "sideStroke", "rotate"]);

      var sc = sideColor;

      if (typeof sc !== "function") {
        sc = function sc(v) {
          return sideColor;
        };
      }

      var sp = spacing;

      if (typeof sp !== "function") {
        sp = function sp(i, v) {
          return {
            x: 0,
            y: 0,
            z: i * spacing
          };
        };
      }

      return _react["default"].createElement(_reactZdog.Anchor, null, _react["default"].createElement(_reactZdog.Group, {
        rotate: rotate
      }, _toConsumableArray(Array(depth)).map(function (n, i) {
        return _react["default"].createElement(_letters.AmpShape, _extends({
          ref: function ref(_ref) {
            return _this2.shapeRefs.set(i, _ref);
          },
          color: i === depth - 1 ? color : sc(i / (depth - 1)),
          translate: sp(i, i / (depth - 1)),
          fill: i === 0 || i === depth - 1 ? fill : fillSides,
          stroke: i === depth - 1 ? stroke : sideStroke ? sideStroke : stroke
        }, props));
      })));
    }
  }]);

  return ShapeExtrusion;
}(_react.Component);

exports["default"] = ShapeExtrusion;