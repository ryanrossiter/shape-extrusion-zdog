(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CProjects%5Cshape-extrusion-zdog%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CProjects%5Cshape-extrusion-zdog%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react-zdog/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-zdog/dist/index.js ***!
  \***********************************************/
/*! exports provided: Anchor, Box, Cone, Cylinder, Ellipse, Group, Hemisphere, Illustration, Polygon, Rect, RoundedRect, Shape, addEffect, applyProps, invalidate, useRender, useZdog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cone", function() { return Cone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return Cylinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return Ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hemisphere", function() { return Hemisphere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Illustration", function() { return Illustration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundedRect", function() { return RoundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEffect", function() { return addEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyProps", function() { return applyProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidate", function() { return invalidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRender", function() { return useRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useZdog", function() { return useZdog; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var zdog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zdog */ "./node_modules/zdog/js/index.js");
/* harmony import */ var zdog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zdog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");






const stateContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext();
const parentContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext();
let globalEffects = [];
function addEffect(callback) {
  globalEffects.push(callback);
}
function invalidate() {// TODO: render loop has to be able to render frames on demand
}
function applyProps(instance, newProps) {
  zdog__WEBPACK_IMPORTED_MODULE_2___default.a.extend(instance, newProps);
}

function useMeasure() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }),
        bounds = _useState[0],
        set = _useState[1];

  const _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(() => new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"]((_ref) => {
    let entry = _ref[0];
    return set(entry.contentRect);
  })),
        ro = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref.current]);
  return [{
    ref
  }, bounds];
}

function useRender(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }

  const state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(stateContext);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    // Subscribe to the render-loop
    const unsubscribe = state.current.subscribe(fn); // Call subscription off on unmount

    return () => unsubscribe();
  }, deps);
}

function useZdog() {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(stateContext);
  return state.current;
}

function useZdogPrimitive(primitive, children, props, ref) {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(stateContext);
  const parent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(parentContext);

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(() => new primitive(props)),
        node = _useState3[0];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, () => node);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => void applyProps(node, props), [props]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
    if (parent) {
      parent.addChild(node);
      state.current.illu.updateGraph();
      return () => {
        parent.removeChild(node);
        parent.updateFlatGraph();
        state.current.illu.updateGraph();
      };
    }
  }, [parent]);
  return [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(parentContext.Provider, {
    value: node,
    children: children
  }), node];
}

const Illustration = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo((_ref2) => {
  let children = _ref2.children,
      style = _ref2.style,
      resize = _ref2.resize,
      _ref2$element = _ref2.element,
      Element = _ref2$element === void 0 ? 'svg' : _ref2$element,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["children", "style", "resize", "element"]);

  const canvas = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  const _useMeasure = useMeasure(),
        bind = _useMeasure[0],
        size = _useMeasure[1];

  const _useZdogPrimitive = useZdogPrimitive(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Anchor, children),
        result = _useZdogPrimitive[0],
        scene = _useZdogPrimitive[1];

  const state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({
    scene,
    illu: undefined,
    size: {},
    subscribers: [],
    subscribe: fn => {
      state.current.subscribers.push(fn);
      return () => state.current.subscribers = state.current.subscribers.filter(s => s !== fn);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    state.current.size = size;
    if (state.current.illu) state.current.illu.setSize(size.width, size.height);
  }, [size]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    state.current.illu = new zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Illustration(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      element: canvas.current
    }, rest));
    state.current.illu.addChild(scene);
    state.current.illu.updateGraph();
    let frame;
    let active = true;

    function render(t) {
      const _state$current = state.current,
            size = _state$current.size,
            subscribers = _state$current.subscribers;

      if (size.width && size.height) {
        // Run global effects
        globalEffects.forEach(fn => fn(t)); // Run local effects

        subscribers.forEach(fn => fn(t)); // Render scene

        state.current.illu.updateRenderGraph();
      }

      if (active) frame = requestAnimationFrame(render);
    } // Start render loop


    render();
    return () => {
      // Take no chances, the loop has got to stop if the component unmounts
      active = false;
      cancelAnimationFrame(frame);
    };
  }, []); // Takes care of updating the main illustration

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => void (state.current.illu && applyProps(state.current.illu, rest)), [rest]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: bind.ref
  }, rest, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }, style)
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Element, {
    ref: canvas,
    style: {
      display: 'block'
    },
    width: size.width,
    height: size.height
  }), state.current.illu && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(stateContext.Provider, {
    value: state,
    children: result
  }));
});

const createZdog = primitive => react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef((_ref3, ref) => {
  let children = _ref3.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["children"]);

  return useZdogPrimitive(primitive, children, rest, ref)[0];
});

const Anchor = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Anchor);
const Shape = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Shape);
const Group = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Group);
const Rect = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Rect);
const RoundedRect = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.RoundedRect);
const Ellipse = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Ellipse);
const Polygon = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Polygon);
const Hemisphere = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Hemisphere);
const Cylinder = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Cylinder);
const Cone = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Cone);
const Box = createZdog(zdog__WEBPACK_IMPORTED_MODULE_2___default.a.Box);




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser =  true && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if ( true && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/zdog/js/anchor.js":
/*!****************************************!*\
  !*** ./node_modules/zdog/js/anchor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Anchor
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js"),
        __webpack_require__(/*! ./canvas-renderer */ "./node_modules/zdog/js/canvas-renderer.js"), __webpack_require__(/*! ./svg-renderer */ "./node_modules/zdog/js/svg-renderer.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Anchor = factory( Zdog, Zdog.Vector, Zdog.CanvasRenderer,
        Zdog.SvgRenderer );
  }
}( this, function factory( utils, Vector, CanvasRenderer, SvgRenderer ) {

var TAU = utils.TAU;
var onePoint = { x: 1, y: 1, z: 1 };

function Anchor( options ) {
  this.create( options || {} );
}

Anchor.prototype.create = function( options ) {
  this.children = [];
  // set defaults & options
  utils.extend( this, this.constructor.defaults );
  this.setOptions( options );

  // transform
  this.translate = new Vector( options.translate );
  this.rotate = new Vector( options.rotate );
  this.scale = new Vector( onePoint ).multiply( this.scale );
  // origin
  this.origin = new Vector();
  this.renderOrigin = new Vector();

  if ( this.addTo ) {
    this.addTo.addChild( this );
  }
};

Anchor.defaults = {};

Anchor.optionKeys = Object.keys( Anchor.defaults ).concat([
  'rotate',
  'translate',
  'scale',
  'addTo',
]);

Anchor.prototype.setOptions = function( options ) {
  var optionKeys = this.constructor.optionKeys;

  for ( var key in options ) {
    if ( optionKeys.indexOf( key ) != -1 ) {
      this[ key ] = options[ key ];
    }
  }
};

Anchor.prototype.addChild = function( shape ) {
  if ( this.children.indexOf( shape ) != -1 ) {
    return;
  }
  shape.remove(); // remove previous parent
  shape.addTo = this; // keep parent reference
  this.children.push( shape );
};

Anchor.prototype.removeChild = function( shape ) {
  var index = this.children.indexOf( shape );
  if ( index != -1 ) {
    this.children.splice( index, 1 );
  }
};

Anchor.prototype.remove = function() {
  if ( this.addTo ) {
    this.addTo.removeChild( this );
  }
};

// ----- update ----- //

Anchor.prototype.update = function() {
  // update self
  this.reset();
  // update children
  this.children.forEach( function( child ) {
    child.update();
  });
  this.transform( this.translate, this.rotate, this.scale );
};

Anchor.prototype.reset = function() {
  this.renderOrigin.set( this.origin );
};

Anchor.prototype.transform = function( translation, rotation, scale ) {
  this.renderOrigin.transform( translation, rotation, scale );
  // transform children
  this.children.forEach( function( child ) {
    child.transform( translation, rotation, scale );
  });
};

Anchor.prototype.updateGraph = function() {
  this.update();
  this.updateFlatGraph();
  this.flatGraph.forEach( function( item ) {
    item.updateSortValue();
  });
  // z-sort
  this.flatGraph.sort( Anchor.shapeSorter );
};

Anchor.shapeSorter = function( a, b ) {
  return a.sortValue - b.sortValue;
};

// custom getter to check for flatGraph before using it
Object.defineProperty( Anchor.prototype, 'flatGraph', {
  get: function() {
    if ( !this._flatGraph ) {
      this.updateFlatGraph();
    }
    return this._flatGraph;
  },
  set: function( graph ) {
    this._flatGraph = graph;
  },
});

Anchor.prototype.updateFlatGraph = function() {
  this.flatGraph = this.getFlatGraph();
};

// return Array of self & all child graph items
Anchor.prototype.getFlatGraph = function() {
  var flatGraph = [ this ];
  return this.addChildFlatGraph( flatGraph );
};

Anchor.prototype.addChildFlatGraph = function( flatGraph ) {
  this.children.forEach( function( child ) {
    var childFlatGraph = child.getFlatGraph();
    Array.prototype.push.apply( flatGraph, childFlatGraph );
  });
  return flatGraph;
};

Anchor.prototype.updateSortValue = function() {
  this.sortValue = this.renderOrigin.z;
};

// ----- render ----- //

Anchor.prototype.render = function() {};

// TODO refactor out CanvasRenderer so its not a dependency within anchor.js
Anchor.prototype.renderGraphCanvas = function( ctx ) {
  if ( !ctx ) {
    throw new Error( 'ctx is ' + ctx + '. ' +
      'Canvas context required for render. Check .renderGraphCanvas( ctx ).' );
  }
  this.flatGraph.forEach( function( item ) {
    item.render( ctx, CanvasRenderer );
  });
};

Anchor.prototype.renderGraphSvg = function( svg ) {
  if ( !svg ) {
    throw new Error( 'svg is ' + svg + '. ' +
      'SVG required for render. Check .renderGraphSvg( svg ).' );
  }
  this.flatGraph.forEach( function( item ) {
    item.render( svg, SvgRenderer );
  });
};

// ----- misc ----- //

Anchor.prototype.copy = function( options ) {
  // copy options
  var itemOptions = {};
  var optionKeys = this.constructor.optionKeys;
  optionKeys.forEach( function( key ) {
    itemOptions[ key ] = this[ key ];
  }, this );
  // add set options
  utils.extend( itemOptions, options );
  var ItemClass = this.constructor;
  return new ItemClass( itemOptions );
};

Anchor.prototype.copyGraph = function( options ) {
  var clone = this.copy( options );
  this.children.forEach( function( child ) {
    child.copyGraph({
      addTo: clone,
    });
  });
  return clone;
};

Anchor.prototype.normalizeRotate = function() {
  this.rotate.x = utils.modulo( this.rotate.x, TAU );
  this.rotate.y = utils.modulo( this.rotate.y, TAU );
  this.rotate.z = utils.modulo( this.rotate.z, TAU );
};

// ----- subclass ----- //

function getSubclass( Super ) {
  return function( defaults ) {
    // create constructor
    function Item( options ) {
      this.create( options || {} );
    }

    Item.prototype = Object.create( Super.prototype );
    Item.prototype.constructor = Item;

    Item.defaults = utils.extend( {}, Super.defaults );
    utils.extend( Item.defaults, defaults );
    // create optionKeys
    Item.optionKeys = Super.optionKeys.slice(0);
    // add defaults keys to optionKeys, dedupe
    Object.keys( Item.defaults ).forEach( function( key ) {
      if ( !Item.optionKeys.indexOf( key ) != 1 ) {
        Item.optionKeys.push( key );
      }
    });

    Item.subclass = getSubclass( Item );

    return Item;
  };
}

Anchor.subclass = getSubclass( Anchor );

return Anchor;

}));


/***/ }),

/***/ "./node_modules/zdog/js/boilerplate.js":
/*!*********************************************!*\
  !*** ./node_modules/zdog/js/boilerplate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Zdog v1.1.0
 * Round, flat, designer-friendly pseudo-3D engine
 * Licensed MIT
 * https://zzz.dog
 * Copyright 2019 Metafizzy
 */

/**
 * Boilerplate & utils
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    root.Zdog = factory();
  }
}( this, function factory() {

var Zdog = {};

Zdog.TAU = Math.PI * 2;

Zdog.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

Zdog.lerp = function( a, b, alpha ) {
  return ( b - a ) * alpha + a;
};

Zdog.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

var powerMultipliers = {
  2: function( a ) {
    return a * a;
  },
  3: function( a ) {
    return a * a * a;
  },
  4: function( a ) {
    return a * a * a * a;
  },
  5: function( a ) {
    return a * a * a * a * a;
  },
};

Zdog.easeInOut = function( alpha, power ) {
  if ( power == 1 ) {
    return alpha;
  }
  alpha = Math.max( 0, Math.min( 1, alpha ) );
  var isFirstHalf = alpha < 0.5;
  var slope = isFirstHalf ? alpha : 1 - alpha;
  slope /= 0.5;
  // make easing steeper with more multiples
  var powerMultiplier = powerMultipliers[ power ] || powerMultipliers[2];
  var curve = powerMultiplier( slope );
  curve /= 2;
  return isFirstHalf ? curve : 1 - curve;
};

return Zdog;

}));


/***/ }),

/***/ "./node_modules/zdog/js/box.js":
/*!*************************************!*\
  !*** ./node_modules/zdog/js/box.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Box composite shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js"),
        __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js"), __webpack_require__(/*! ./rect */ "./node_modules/zdog/js/rect.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Box = factory( Zdog, Zdog.Anchor, Zdog.Shape, Zdog.Rect );
  }
}( this, function factory( utils, Anchor, Shape, Rect ) {

// ----- BoxRect ----- //

var BoxRect = Rect.subclass();
// prevent double-creation in parent.copyGraph()
// only create in Box.create()
BoxRect.prototype.copyGraph = function() {};

// ----- Box ----- //

var TAU = utils.TAU;
var faceNames = [
  'frontFace',
  'rearFace',
  'leftFace',
  'rightFace',
  'topFace',
  'bottomFace',
];

var boxDefaults = utils.extend( {}, Shape.defaults );
delete boxDefaults.path;
faceNames.forEach( function( faceName ) {
  boxDefaults[ faceName ] = true;
});
utils.extend( boxDefaults, {
  width: 1,
  height: 1,
  depth: 1,
  fill: true,
});

var Box = Anchor.subclass( boxDefaults );

Box.prototype.create = function( options ) {
  Anchor.prototype.create.call( this, options );
  this.updatePath();
  // HACK reset fill to trigger face setter
  this.fill = this.fill;
};

Box.prototype.updatePath = function() {
  // reset all faces to trigger setters
  faceNames.forEach( function( faceName ) {
    this[ faceName ] = this[ faceName ];
  }, this );
};

faceNames.forEach( function( faceName ) {
  var _faceName = '_' + faceName;
  Object.defineProperty( Box.prototype, faceName, {
    get: function() {
      return this[ _faceName ];
    },
    set: function( value ) {
      this[ _faceName ] = value;
      this.setFace( faceName, value );
    },
  });
});

Box.prototype.setFace = function( faceName, value ) {
  var rectProperty = faceName + 'Rect';
  var rect = this[ rectProperty ];
  // remove if false
  if ( !value ) {
    this.removeChild( rect );
    return;
  }
  // update & add face
  var options = this.getFaceOptions( faceName );
  options.color = typeof value == 'string' ? value : this.color;

  if ( rect ) {
    // update previous
    rect.setOptions( options );
  } else {
    // create new
    rect = this[ rectProperty ] = new BoxRect( options );
  }
  rect.updatePath();
  this.addChild( rect );
};

Box.prototype.getFaceOptions = function( faceName ) {
  return {
    frontFace: {
      width: this.width,
      height: this.height,
      translate: { z: this.depth/2 },
    },
    rearFace: {
      width: this.width,
      height: this.height,
      translate: { z: -this.depth/2 },
      rotate: { y: TAU/2 },
    },
    leftFace: {
      width: this.depth,
      height: this.height,
      translate: { x: -this.width/2 },
      rotate: { y: -TAU/4 },
    },
    rightFace: {
      width: this.depth,
      height: this.height,
      translate: { x: this.width/2 },
      rotate: { y: TAU/4 },
    },
    topFace: {
      width: this.width,
      height: this.depth,
      translate: { y: -this.height/2 },
      rotate: { x: -TAU/4 },
    },
    bottomFace: {
      width: this.width,
      height: this.depth,
      translate: { y: this.height/2 },
      rotate: { x: TAU/4 },
    },
  }[ faceName ];
};

// ----- set face properties ----- //

var childProperties = [ 'color', 'stroke', 'fill', 'backface', 'front',
  'visible' ];
childProperties.forEach( function( property ) {
  // use proxy property for custom getter & setter
  var _prop = '_' + property;
  Object.defineProperty( Box.prototype, property, {
    get: function() {
      return this[ _prop ];
    },
    set: function( value ) {
      this[ _prop ] = value;
      faceNames.forEach( function( faceName ) {
        var rect = this[ faceName + 'Rect' ];
        var isFaceColor = typeof this[ faceName ] == 'string';
        var isColorUnderwrite = property == 'color' && isFaceColor;
        if ( rect && !isColorUnderwrite ) {
          rect[ property ] = value;
        }
      }, this );
    },
  });
});

return Box;

}));


/***/ }),

/***/ "./node_modules/zdog/js/canvas-renderer.js":
/*!*************************************************!*\
  !*** ./node_modules/zdog/js/canvas-renderer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * CanvasRenderer
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    root.Zdog.CanvasRenderer = factory();
  }
}( this, function factory() {

var CanvasRenderer = { isCanvas: true };

CanvasRenderer.begin = function( ctx ) {
  ctx.beginPath();
};

CanvasRenderer.move = function( ctx, elem, point ) {
  ctx.moveTo( point.x, point.y );
};

CanvasRenderer.line = function( ctx, elem, point ) {
  ctx.lineTo( point.x, point.y );
};

CanvasRenderer.bezier = function( ctx, elem, cp0, cp1, end ) {
  ctx.bezierCurveTo( cp0.x, cp0.y, cp1.x, cp1.y, end.x, end.y );
};

CanvasRenderer.closePath = function( ctx ) {
  ctx.closePath();
};

CanvasRenderer.setPath = function() {};

CanvasRenderer.renderPath = function( ctx, elem, pathCommands, isClosed ) {
  this.begin( ctx, elem );
  pathCommands.forEach( function( command ) {
    command.render( ctx, elem, CanvasRenderer );
  });
  if ( isClosed ) {
    this.closePath( ctx, elem );
  }
};

CanvasRenderer.stroke = function( ctx, elem, isStroke, color, lineWidth ) {
  if ( !isStroke ) {
    return;
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
};

CanvasRenderer.fill = function( ctx, elem, isFill, color ) {
  if ( !isFill ) {
    return;
  }
  ctx.fillStyle = color;
  ctx.fill();
};

CanvasRenderer.end = function() {};

return CanvasRenderer;

}));


/***/ }),

/***/ "./node_modules/zdog/js/cone.js":
/*!**************************************!*\
  !*** ./node_modules/zdog/js/cone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Cone composite shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js"),
        __webpack_require__(/*! ./path-command */ "./node_modules/zdog/js/path-command.js"), __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js"), __webpack_require__(/*! ./ellipse */ "./node_modules/zdog/js/ellipse.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Cone = factory( Zdog, Zdog.Vector, Zdog.PathCommand,
        Zdog.Anchor, Zdog.Ellipse );
  }
}( this, function factory( utils, Vector, PathCommand, Anchor, Ellipse ) {

var Cone = Ellipse.subclass({
  length: 1,
  fill: true,
});

var TAU = utils.TAU;

Cone.prototype.create = function(/* options */) {
  // call super
  Ellipse.prototype.create.apply( this, arguments );
  // composite shape, create child shapes
  this.apex = new Anchor({
    addTo: this,
    translate: { z: this.length },
  });

  // vectors used for calculation
  this.renderApex = new Vector();
  this.renderCentroid = new Vector();
  this.tangentA = new Vector();
  this.tangentB = new Vector();

  this.surfacePathCommands = [
    new PathCommand( 'move', [ {} ] ), // points set in renderConeSurface
    new PathCommand( 'line', [ {} ] ),
    new PathCommand( 'line', [ {} ] ),
  ];
};

Cone.prototype.updateSortValue = function() {
  // center of cone is one third of its length
  this.renderCentroid.set( this.renderOrigin )
    .lerp( this.apex.renderOrigin, 1/3 );
  this.sortValue = this.renderCentroid.z;
};

Cone.prototype.render = function( ctx, renderer ) {
  this.renderConeSurface( ctx, renderer );
  Ellipse.prototype.render.apply( this, arguments );
};

Cone.prototype.renderConeSurface = function( ctx, renderer ) {
  if ( !this.visible ) {
    return;
  }
  this.renderApex.set( this.apex.renderOrigin )
    .subtract( this.renderOrigin );

  var scale = this.renderNormal.magnitude();
  var apexDistance = this.renderApex.magnitude2d();
  var normalDistance = this.renderNormal.magnitude2d();
  // eccentricity
  var eccenAngle = Math.acos( normalDistance / scale );
  var eccen = Math.sin( eccenAngle );
  var radius = this.diameter/2 * scale;
  // does apex extend beyond eclipse of face
  var isApexVisible = radius * eccen < apexDistance;
  if ( !isApexVisible ) {
    return;
  }
  // update tangents
  var apexAngle = Math.atan2( this.renderNormal.y, this.renderNormal.x ) +
      TAU/2;
  var projectLength = apexDistance / eccen;
  var projectAngle = Math.acos( radius / projectLength );
  // set tangent points
  var tangentA = this.tangentA;
  var tangentB = this.tangentB;

  tangentA.x = Math.cos( projectAngle ) * radius * eccen;
  tangentA.y = Math.sin( projectAngle ) * radius;

  tangentB.set( this.tangentA );
  tangentB.y *= -1;

  tangentA.rotateZ( apexAngle );
  tangentB.rotateZ( apexAngle );
  tangentA.add( this.renderOrigin );
  tangentB.add( this.renderOrigin );

  this.setSurfaceRenderPoint( 0, tangentA );
  this.setSurfaceRenderPoint( 1, this.apex.renderOrigin );
  this.setSurfaceRenderPoint( 2, tangentB );

  // render
  var elem = this.getSurfaceRenderElement( ctx, renderer );
  renderer.renderPath( ctx, elem, this.surfacePathCommands );
  renderer.stroke( ctx, elem, this.stroke, this.color, this.getLineWidth() );
  renderer.fill( ctx, elem, this.fill, this.color );
  renderer.end( ctx, elem );
};

var svgURI = 'http://www.w3.org/2000/svg';

Cone.prototype.getSurfaceRenderElement = function( ctx, renderer ) {
  if ( !renderer.isSvg ) {
    return;
  }
  if ( !this.surfaceSvgElement ) {
    // create svgElement
    this.surfaceSvgElement = document.createElementNS( svgURI, 'path');
    this.surfaceSvgElement.setAttribute( 'stroke-linecap', 'round' );
    this.surfaceSvgElement.setAttribute( 'stroke-linejoin', 'round' );
  }
  return this.surfaceSvgElement;
};

Cone.prototype.setSurfaceRenderPoint = function( index, point ) {
  var renderPoint = this.surfacePathCommands[ index ].renderPoints[0];
  renderPoint.set( point );
};

return Cone;

}));


/***/ }),

/***/ "./node_modules/zdog/js/cylinder.js":
/*!******************************************!*\
  !*** ./node_modules/zdog/js/cylinder.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Cylinder composite shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"),
        __webpack_require__(/*! ./path-command */ "./node_modules/zdog/js/path-command.js"), __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js"), __webpack_require__(/*! ./group */ "./node_modules/zdog/js/group.js"),
        __webpack_require__(/*! ./ellipse */ "./node_modules/zdog/js/ellipse.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Cylinder = factory( Zdog, Zdog.PathCommand, Zdog.Shape,
        Zdog.Group, Zdog.Ellipse );
  }
}( this, function factory( utils, PathCommand, Shape, Group, Ellipse ) {

function noop() {}

// ----- CylinderGroup ----- //

var CylinderGroup = Group.subclass({
  color: '#333',
  updateSort: true,
});

CylinderGroup.prototype.create = function() {
  Group.prototype.create.apply( this, arguments );
  this.pathCommands = [
    new PathCommand( 'move', [ {} ] ),
    new PathCommand( 'line', [ {} ] ),
  ];
};

CylinderGroup.prototype.render = function( ctx, renderer ) {
  this.renderCylinderSurface( ctx, renderer );
  Group.prototype.render.apply( this, arguments );
};

CylinderGroup.prototype.renderCylinderSurface = function( ctx, renderer ) {
  if ( !this.visible ) {
    return;
  }
  // render cylinder surface
  var elem = this.getRenderElement( ctx, renderer );
  var frontBase = this.frontBase;
  var rearBase = this.rearBase;
  var scale = frontBase.renderNormal.magnitude();
  var strokeWidth = frontBase.diameter * scale + frontBase.getLineWidth();
  // set path command render points
  this.pathCommands[0].renderPoints[0].set( frontBase.renderOrigin );
  this.pathCommands[1].renderPoints[0].set( rearBase.renderOrigin );

  if ( renderer.isCanvas ) {
    ctx.lineCap = 'butt'; // nice
  }
  renderer.renderPath( ctx, elem, this.pathCommands );
  renderer.stroke( ctx, elem, true, this.color, strokeWidth );
  renderer.end( ctx, elem );

  if ( renderer.isCanvas ) {
    ctx.lineCap = 'round'; // reset
  }
};

var svgURI = 'http://www.w3.org/2000/svg';

CylinderGroup.prototype.getRenderElement = function( ctx, renderer ) {
  if ( !renderer.isSvg ) {
    return;
  }
  if ( !this.svgElement ) {
    // create svgElement
    this.svgElement = document.createElementNS( svgURI, 'path');
  }
  return this.svgElement;
};

// prevent double-creation in parent.copyGraph()
// only create in Cylinder.create()
CylinderGroup.prototype.copyGraph = noop;

// ----- CylinderEllipse ----- //

var CylinderEllipse = Ellipse.subclass();

CylinderEllipse.prototype.copyGraph = noop;

// ----- Cylinder ----- //

var Cylinder = Shape.subclass({
  diameter: 1,
  length: 1,
  frontFace: undefined,
  fill: true,
});

var TAU = utils.TAU;

Cylinder.prototype.create = function(/* options */) {
  // call super
  Shape.prototype.create.apply( this, arguments );
  // composite shape, create child shapes
  // CylinderGroup to render cylinder surface then bases
  this.group = new CylinderGroup({
    addTo: this,
    color: this.color,
    visible: this.visible,
  });
  var baseZ = this.length/2;
  var baseColor = this.backface || true;
  // front outside base
  this.frontBase = this.group.frontBase = new Ellipse({
    addTo: this.group,
    diameter: this.diameter,
    translate: { z: baseZ },
    rotate: { y: TAU/2 },
    color: this.color,
    stroke: this.stroke,
    fill: this.fill,
    backface: this.frontFace || baseColor,
    visible: this.visible,
  });
  // back outside base
  this.rearBase = this.group.rearBase = this.frontBase.copy({
    translate: { z: -baseZ },
    rotate: { y: 0 },
    backface: baseColor,
  });
};

// Cylinder shape does not render anything
Cylinder.prototype.render = function() {};

// ----- set child properties ----- //

var childProperties = [ 'stroke', 'fill', 'color', 'visible' ];
childProperties.forEach( function( property ) {
  // use proxy property for custom getter & setter
  var _prop = '_' + property;
  Object.defineProperty( Cylinder.prototype, property, {
    get: function() {
      return this[ _prop ];
    },
    set: function( value ) {
      this[ _prop ] = value;
      // set property on children
      if ( this.frontBase ) {
        this.frontBase[ property ] = value;
        this.rearBase[ property ] = value;
        this.group[ property ] = value;
      }
    },
  });
});

// TODO child property setter for backface, frontBaseColor, & rearBaseColor

return Cylinder;

}));


/***/ }),

/***/ "./node_modules/zdog/js/dragger.js":
/*!*****************************************!*\
  !*** ./node_modules/zdog/js/dragger.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dragger
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( root );
  } else {
    // browser global
    root.Zdog.Dragger = factory( root );
  }
}( this, function factory( window ) {

// quick & dirty drag event stuff
// messes up if multiple pointers/touches

// event support, default to mouse events
var downEvent = 'mousedown';
var moveEvent = 'mousemove';
var upEvent = 'mouseup';
if ( window.PointerEvent ) {
  // PointerEvent, Chrome
  downEvent = 'pointerdown';
  moveEvent = 'pointermove';
  upEvent = 'pointerup';
} else if ( 'ontouchstart' in window ) {
  // Touch Events, iOS Safari
  downEvent = 'touchstart';
  moveEvent = 'touchmove';
  upEvent = 'touchend';
}

function noop() {}

function Dragger( options ) {
  this.create( options || {} );
}

Dragger.prototype.create = function( options ) {
  this.onDragStart = options.onDragStart || noop;
  this.onDragMove = options.onDragMove || noop;
  this.onDragEnd = options.onDragEnd || noop;

  this.bindDrag( options.startElement );
};

Dragger.prototype.bindDrag = function( element ) {
  element = this.getQueryElement( element );
  if ( !element ) {
    return;
  }
  // disable browser gestures #53
  element.style.touchAction = 'none';
  element.addEventListener( downEvent, this );
};

Dragger.prototype.getQueryElement = function( element ) {
  if ( typeof element == 'string' ) {
    // with string, query selector
    element = document.querySelector( element );
  }
  return element;
};

Dragger.prototype.handleEvent = function( event ) {
  var method = this[ 'on' + event.type ];
  if ( method ) {
    method.call( this, event );
  }
};

Dragger.prototype.onmousedown =
Dragger.prototype.onpointerdown = function( event ) {
  this.dragStart( event, event );
};

Dragger.prototype.ontouchstart = function( event ) {
  this.dragStart( event, event.changedTouches[0] );
};

Dragger.prototype.dragStart = function( event, pointer ) {
  event.preventDefault();
  this.dragStartX = pointer.pageX;
  this.dragStartY = pointer.pageY;
  window.addEventListener( moveEvent, this );
  window.addEventListener( upEvent, this );
  this.onDragStart( pointer );
};

Dragger.prototype.ontouchmove = function( event ) {
  // HACK, moved touch may not be first
  this.dragMove( event, event.changedTouches[0] );
};

Dragger.prototype.onmousemove =
Dragger.prototype.onpointermove = function( event ) {
  this.dragMove( event, event );
};

Dragger.prototype.dragMove = function( event, pointer ) {
  event.preventDefault();
  var moveX = pointer.pageX - this.dragStartX;
  var moveY = pointer.pageY - this.dragStartY;
  this.onDragMove( pointer, moveX, moveY );
};

Dragger.prototype.onmouseup =
Dragger.prototype.onpointerup =
Dragger.prototype.ontouchend =
Dragger.prototype.dragEnd = function(/* event */) {
  window.removeEventListener( moveEvent, this );
  window.removeEventListener( upEvent, this );
  this.onDragEnd();
};

return Dragger;

}));


/***/ }),

/***/ "./node_modules/zdog/js/ellipse.js":
/*!*****************************************!*\
  !*** ./node_modules/zdog/js/ellipse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Ellipse
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Ellipse = factory( Zdog.Shape );
  }

}( this, function factory( Shape ) {

var Ellipse = Shape.subclass({
  diameter: 1,
  width: undefined,
  height: undefined,
  quarters: 4,
  closed: false,
});

Ellipse.prototype.setPath = function() {
  var width = this.width != undefined ? this.width : this.diameter;
  var height = this.height != undefined ? this.height : this.diameter;
  var x = width / 2;
  var y = height / 2;
  this.path = [
    { x: 0, y: -y },
    { arc: [ // top right
      { x: x, y: -y },
      { x: x, y: 0 },
    ]},
  ];
  // bottom right
  if ( this.quarters > 1 ) {
    this.path.push({ arc: [
      { x: x, y: y },
      { x: 0, y: y },
    ]});
  }
  // bottom left
  if ( this.quarters > 2 ) {
    this.path.push({ arc: [
      { x: -x, y: y },
      { x: -x, y: 0 },
    ]});
  }
  // top left
  if ( this.quarters > 3 ) {
    this.path.push({ arc: [
      { x: -x, y: -y },
      { x: 0, y: -y },
    ]});
  }
};

return Ellipse;

}));


/***/ }),

/***/ "./node_modules/zdog/js/group.js":
/*!***************************************!*\
  !*** ./node_modules/zdog/js/group.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Group
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Group = factory( Zdog.Anchor );
  }
}( this, function factory( Anchor ) {

var Group = Anchor.subclass({
  updateSort: false,
  visible: true,
});

// ----- update ----- //

Group.prototype.updateSortValue = function() {
  var sortValueTotal = 0;
  this.flatGraph.forEach( function( item ) {
    item.updateSortValue();
    sortValueTotal += item.sortValue;
  });
  // average sort value of all points
  // def not geometrically correct, but works for me
  this.sortValue = sortValueTotal / this.flatGraph.length;

  if ( this.updateSort ) {
    this.flatGraph.sort( Anchor.shapeSorter );
  }
};

// ----- render ----- //

Group.prototype.render = function( ctx, renderer ) {
  if ( !this.visible ) {
    return;
  }

  this.flatGraph.forEach( function( item ) {
    item.render( ctx, renderer );
  });
};

// actual group flatGraph only used inside group
Group.prototype.updateFlatGraph = function() {
  // do not include self
  var flatGraph = [];
  this.flatGraph = this.addChildFlatGraph( flatGraph );
};

// do not include children, group handles rendering & sorting internally
Group.prototype.getFlatGraph = function() {
  return [ this ];
};

return Group;

}));


/***/ }),

/***/ "./node_modules/zdog/js/hemisphere.js":
/*!********************************************!*\
  !*** ./node_modules/zdog/js/hemisphere.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hemisphere composite shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js"),
        __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js"), __webpack_require__(/*! ./ellipse */ "./node_modules/zdog/js/ellipse.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Hemisphere = factory( Zdog, Zdog.Vector, Zdog.Anchor, Zdog.Ellipse );
  }
}( this, function factory( utils, Vector, Anchor, Ellipse ) {

var Hemisphere = Ellipse.subclass({
  fill: true,
});

var TAU = utils.TAU;

Hemisphere.prototype.create = function(/* options */) {
  // call super
  Ellipse.prototype.create.apply( this, arguments );
  // composite shape, create child shapes
  this.apex = new Anchor({
    addTo: this,
    translate: { z: this.diameter/2 },
  });
  // vector used for calculation
  this.renderCentroid = new Vector();
};

Hemisphere.prototype.updateSortValue = function() {
  // centroid of hemisphere is 3/8 between origin and apex
  this.renderCentroid.set( this.renderOrigin )
    .lerp( this.apex.renderOrigin, 3/8 );
  this.sortValue = this.renderCentroid.z;
};

Hemisphere.prototype.render = function( ctx, renderer ) {
  this.renderDome( ctx, renderer );
  // call super
  Ellipse.prototype.render.apply( this, arguments );
};

Hemisphere.prototype.renderDome = function( ctx, renderer ) {
  if ( !this.visible ) {
    return;
  }
  var elem = this.getDomeRenderElement( ctx, renderer );
  var contourAngle = Math.atan2( this.renderNormal.y, this.renderNormal.x );
  var domeRadius = this.diameter/2 * this.renderNormal.magnitude();
  var x = this.renderOrigin.x;
  var y = this.renderOrigin.y;

  if ( renderer.isCanvas ) {
    // canvas
    var startAngle = contourAngle + TAU/4;
    var endAngle = contourAngle - TAU/4;
    ctx.beginPath();
    ctx.arc( x, y, domeRadius, startAngle, endAngle );
  } else if ( renderer.isSvg ) {
    // svg
    contourAngle = (contourAngle - TAU/4) / TAU * 360;
    this.domeSvgElement.setAttribute( 'd', 'M ' + -domeRadius + ',0 A ' +
        domeRadius + ',' + domeRadius + ' 0 0 1 ' + domeRadius + ',0' );
    this.domeSvgElement.setAttribute( 'transform',
        'translate(' + x + ',' + y + ' ) rotate(' + contourAngle + ')' );
  }

  renderer.stroke( ctx, elem, this.stroke, this.color, this.getLineWidth() );
  renderer.fill( ctx, elem, this.fill, this.color );
  renderer.end( ctx, elem );
};

var svgURI = 'http://www.w3.org/2000/svg';

Hemisphere.prototype.getDomeRenderElement = function( ctx, renderer ) {
  if ( !renderer.isSvg ) {
    return;
  }
  if ( !this.domeSvgElement ) {
    // create svgElement
    this.domeSvgElement = document.createElementNS( svgURI, 'path');
    this.domeSvgElement.setAttribute( 'stroke-linecap', 'round' );
    this.domeSvgElement.setAttribute( 'stroke-linejoin', 'round' );
  }
  return this.domeSvgElement;
};

return Hemisphere;

}));


/***/ }),

/***/ "./node_modules/zdog/js/illustration.js":
/*!**********************************************!*\
  !*** ./node_modules/zdog/js/illustration.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Illustration
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js"),
        __webpack_require__(/*! ./dragger */ "./node_modules/zdog/js/dragger.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Illustration = factory( Zdog, Zdog.Anchor, Zdog.Dragger );
  }
}( this, function factory( utils, Anchor, Dragger ) {

function noop() {}
var TAU = utils.TAU;

var Illustration = Anchor.subclass({
  element: undefined,
  centered: true,
  zoom: 1,
  dragRotate: false,
  resize: false,
  onPrerender: noop,
  onDragStart: noop,
  onDragMove: noop,
  onDragEnd: noop,
  onResize: noop,
});

utils.extend( Illustration.prototype, Dragger.prototype );

Illustration.prototype.create = function( options ) {
  Anchor.prototype.create.call( this, options );
  Dragger.prototype.create.call( this, options );
  this.setElement( this.element );
  this.setDragRotate( this.dragRotate );
  this.setResize( this.resize );
};

Illustration.prototype.setElement = function( element ) {
  element = this.getQueryElement( element );
  if ( !element ) {
    throw new Error( 'Zdog.Illustration element required. Set to ' + element );
  }

  var nodeName = element.nodeName.toLowerCase();
  if ( nodeName == 'canvas' ) {
    this.setCanvas( element );
  } else if ( nodeName == 'svg' ) {
    this.setSvg( element );
  }
};

Illustration.prototype.setSize = function( width, height ) {
  width = Math.round( width );
  height = Math.round( height );
  if ( this.isCanvas ) {
    this.setSizeCanvas( width, height );
  } else if ( this.isSvg ) {
    this.setSizeSvg( width, height );
  }
};

Illustration.prototype.setResize = function( resize ) {
  this.resize = resize;
  // create resize event listener
  if ( !this.resizeListener ) {
    this.resizeListener = this.onWindowResize.bind( this );
  }
  // add/remove event listener
  if ( resize ) {
    window.addEventListener( 'resize', this.resizeListener );
    this.onWindowResize();
  } else {
    window.removeEventListener( 'resize', this.resizeListener );
  }
};

// TODO debounce this?
Illustration.prototype.onWindowResize = function() {
  this.setMeasuredSize();
  this.onResize( this.width, this.height );
};

Illustration.prototype.setMeasuredSize = function() {
  var width, height;
  var isFullscreen = this.resize == 'fullscreen';
  if ( isFullscreen ) {
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    var rect = this.element.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
  }
  this.setSize( width, height );
};

// ----- render ----- //

Illustration.prototype.renderGraph = function( item ) {
  if ( this.isCanvas ) {
    this.renderGraphCanvas( item );
  } else if ( this.isSvg ) {
    this.renderGraphSvg( item );
  }
};

// combo method
Illustration.prototype.updateRenderGraph = function( item ) {
  this.updateGraph();
  this.renderGraph( item );
};

// ----- canvas ----- //

Illustration.prototype.setCanvas = function( element ) {
  this.element = element;
  this.isCanvas = true;
  // update related properties
  this.ctx = this.element.getContext('2d');
  // set initial size
  this.setSizeCanvas( element.width, element.height );
};

Illustration.prototype.setSizeCanvas = function( width, height ) {
  this.width = width;
  this.height = height;
  // up-rez for hi-DPI devices
  var pixelRatio = this.pixelRatio = window.devicePixelRatio || 1;
  this.element.width = this.canvasWidth = width * pixelRatio;
  this.element.height = this.canvasHeight = height * pixelRatio;
  var needsHighPixelRatioSizing = pixelRatio > 1 && !this.resize;
  if ( needsHighPixelRatioSizing ) {
    this.element.style.width = width + 'px';
    this.element.style.height = height + 'px';
  }
};

Illustration.prototype.renderGraphCanvas = function( item ) {
  item = item || this;
  this.prerenderCanvas();
  Anchor.prototype.renderGraphCanvas.call( item, this.ctx );
  this.postrenderCanvas();
};

Illustration.prototype.prerenderCanvas = function() {
  var ctx = this.ctx;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.clearRect( 0, 0, this.canvasWidth, this.canvasHeight );
  ctx.save();
  if ( this.centered ) {
    var centerX = this.width/2 * this.pixelRatio;
    var centerY = this.height/2 * this.pixelRatio;
    ctx.translate( centerX, centerY );
  }
  var scale = this.pixelRatio * this.zoom;
  ctx.scale( scale, scale );
  this.onPrerender( ctx );
};

Illustration.prototype.postrenderCanvas = function() {
  this.ctx.restore();
};

// ----- svg ----- //

Illustration.prototype.setSvg = function( element ) {
  this.element = element;
  this.isSvg = true;
  this.pixelRatio = 1;
  // set initial size from width & height attributes
  var width = element.getAttribute('width');
  var height = element.getAttribute('height');
  this.setSizeSvg( width, height );
};

Illustration.prototype.setSizeSvg = function( width, height ) {
  this.width = width;
  this.height = height;
  var viewWidth = width / this.zoom;
  var viewHeight = height / this.zoom;
  var viewX = this.centered ? -viewWidth/2 : 0;
  var viewY = this.centered ? -viewHeight/2 : 0;
  this.element.setAttribute( 'viewBox', viewX + ' ' + viewY + ' ' +
    viewWidth + ' ' + viewHeight );
  if ( this.resize ) {
    // remove size attributes, let size be determined by viewbox
    this.element.removeAttribute('width');
    this.element.removeAttribute('height');
  } else {
    this.element.setAttribute( 'width', width );
    this.element.setAttribute( 'height', height );
  }
};

Illustration.prototype.renderGraphSvg = function( item ) {
  item = item || this;
  empty( this.element );
  this.onPrerender( this.element );
  Anchor.prototype.renderGraphSvg.call( item, this.element );
};

function empty( element ) {
  while ( element.firstChild ) {
    element.removeChild( element.firstChild );
  }
}

// ----- drag ----- //

Illustration.prototype.setDragRotate = function( item ) {
  if ( !item ) {
    return;
  } else if ( item === true ) {
    /* eslint consistent-this: "off" */
    item = this;
  }
  this.dragRotate = item;

  this.bindDrag( this.element );
};

Illustration.prototype.dragStart = function(/* event, pointer */) {
  this.dragStartRX = this.dragRotate.rotate.x;
  this.dragStartRY = this.dragRotate.rotate.y;
  Dragger.prototype.dragStart.apply( this, arguments );
};

Illustration.prototype.dragMove = function( event, pointer ) {
  var moveX = pointer.pageX - this.dragStartX;
  var moveY = pointer.pageY - this.dragStartY;
  var displaySize = Math.min( this.width, this.height );
  var moveRY = moveX / displaySize * TAU;
  var moveRX = moveY / displaySize * TAU;
  this.dragRotate.rotate.x = this.dragStartRX - moveRX;
  this.dragRotate.rotate.y = this.dragStartRY - moveRY;
  Dragger.prototype.dragMove.apply( this, arguments );
};

return Illustration;

}));


/***/ }),

/***/ "./node_modules/zdog/js/index.js":
/*!***************************************!*\
  !*** ./node_modules/zdog/js/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Index
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"),
        __webpack_require__(/*! ./canvas-renderer */ "./node_modules/zdog/js/canvas-renderer.js"),
        __webpack_require__(/*! ./svg-renderer */ "./node_modules/zdog/js/svg-renderer.js"),
        __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js"),
        __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js"),
        __webpack_require__(/*! ./dragger */ "./node_modules/zdog/js/dragger.js"),
        __webpack_require__(/*! ./illustration */ "./node_modules/zdog/js/illustration.js"),
        __webpack_require__(/*! ./path-command */ "./node_modules/zdog/js/path-command.js"),
        __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js"),
        __webpack_require__(/*! ./group */ "./node_modules/zdog/js/group.js"),
        __webpack_require__(/*! ./rect */ "./node_modules/zdog/js/rect.js"),
        __webpack_require__(/*! ./rounded-rect */ "./node_modules/zdog/js/rounded-rect.js"),
        __webpack_require__(/*! ./ellipse */ "./node_modules/zdog/js/ellipse.js"),
        __webpack_require__(/*! ./polygon */ "./node_modules/zdog/js/polygon.js"),
        __webpack_require__(/*! ./hemisphere */ "./node_modules/zdog/js/hemisphere.js"),
        __webpack_require__(/*! ./cylinder */ "./node_modules/zdog/js/cylinder.js"),
        __webpack_require__(/*! ./cone */ "./node_modules/zdog/js/cone.js"),
        __webpack_require__(/*! ./box */ "./node_modules/zdog/js/box.js")
    );
  } else if ( true ) {
    /* globals define */ // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (root.Zdog),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})( this, function factory( Zdog, CanvasRenderer, SvgRenderer, Vector, Anchor,
    Dragger, Illustration, PathCommand, Shape, Group, Rect, RoundedRect,
    Ellipse, Polygon, Hemisphere, Cylinder, Cone, Box ) {

      Zdog.CanvasRenderer = CanvasRenderer;
      Zdog.SvgRenderer = SvgRenderer;
      Zdog.Vector = Vector;
      Zdog.Anchor = Anchor;
      Zdog.Dragger = Dragger;
      Zdog.Illustration = Illustration;
      Zdog.PathCommand = PathCommand;
      Zdog.Shape = Shape;
      Zdog.Group = Group;
      Zdog.Rect = Rect;
      Zdog.RoundedRect = RoundedRect;
      Zdog.Ellipse = Ellipse;
      Zdog.Polygon = Polygon;
      Zdog.Hemisphere = Hemisphere;
      Zdog.Cylinder = Cylinder;
      Zdog.Cone = Cone;
      Zdog.Box = Box;

      return Zdog;
});


/***/ }),

/***/ "./node_modules/zdog/js/path-command.js":
/*!**********************************************!*\
  !*** ./node_modules/zdog/js/path-command.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * PathCommand
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.PathCommand = factory( Zdog.Vector );
  }
}( this, function factory( Vector ) {

function PathCommand( method, points, previousPoint ) {
  this.method = method;
  this.points = points.map( mapVectorPoint );
  this.renderPoints = points.map( mapNewVector );
  this.previousPoint = previousPoint;
  this.endRenderPoint = this.renderPoints[ this.renderPoints.length - 1 ];
  // arc actions come with previous point & corner point
  // but require bezier control points
  if ( method == 'arc' ) {
    this.controlPoints = [ new Vector(), new Vector() ];
  }
}

function mapVectorPoint( point ) {
  if ( point instanceof Vector ) {
    return point;
  } else {
    return new Vector( point );
  }
}

function mapNewVector( point ) {
  return new Vector( point );
}

PathCommand.prototype.reset = function() {
  // reset renderPoints back to orignal points position
  var points = this.points;
  this.renderPoints.forEach( function( renderPoint, i ) {
    var point = points[i];
    renderPoint.set( point );
  });
};

PathCommand.prototype.transform = function( translation, rotation, scale ) {
  this.renderPoints.forEach( function( renderPoint ) {
    renderPoint.transform( translation, rotation, scale );
  });
};

PathCommand.prototype.render = function( ctx, elem, renderer ) {
  return this[ this.method ]( ctx, elem, renderer );
};

PathCommand.prototype.move = function( ctx, elem, renderer ) {
  return renderer.move( ctx, elem, this.renderPoints[0] );
};

PathCommand.prototype.line = function( ctx, elem, renderer ) {
  return renderer.line( ctx, elem, this.renderPoints[0] );
};

PathCommand.prototype.bezier = function( ctx, elem, renderer ) {
  var cp0 = this.renderPoints[0];
  var cp1 = this.renderPoints[1];
  var end = this.renderPoints[2];
  return renderer.bezier( ctx, elem, cp0, cp1, end );
};

var arcHandleLength = 9/16;

PathCommand.prototype.arc = function( ctx, elem, renderer ) {
  var prev = this.previousPoint;
  var corner = this.renderPoints[0];
  var end = this.renderPoints[1];
  var cp0 = this.controlPoints[0];
  var cp1 = this.controlPoints[1];
  cp0.set( prev ).lerp( corner, arcHandleLength );
  cp1.set( end ).lerp( corner, arcHandleLength );
  return renderer.bezier( ctx, elem, cp0, cp1, end );
};

return PathCommand;

}));


/***/ }),

/***/ "./node_modules/zdog/js/polygon.js":
/*!*****************************************!*\
  !*** ./node_modules/zdog/js/polygon.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Polygon = factory( Zdog, Zdog.Shape );
  }
}( this, function factory( utils, Shape ) {

var Polygon = Shape.subclass({
  sides: 3,
  radius: 0.5,
});

var TAU = utils.TAU;

Polygon.prototype.setPath = function() {
  this.path = [];
  for ( var i=0; i < this.sides; i++ ) {
    var theta = i/this.sides * TAU - TAU/4;
    var x = Math.cos( theta ) * this.radius;
    var y = Math.sin( theta ) * this.radius;
    this.path.push({ x: x, y: y });
  }
};

return Polygon;

}));


/***/ }),

/***/ "./node_modules/zdog/js/rect.js":
/*!**************************************!*\
  !*** ./node_modules/zdog/js/rect.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Rect
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Rect = factory( Zdog.Shape );
  }
}( this, function factory( Shape ) {

var Rect = Shape.subclass({
  width: 1,
  height: 1,
});

Rect.prototype.setPath = function() {
  var x = this.width / 2;
  var y = this.height / 2;
  /* eslint key-spacing: "off" */
  this.path = [
    { x: -x, y: -y },
    { x:  x, y: -y },
    { x:  x, y:  y },
    { x: -x, y:  y },
  ];
};

return Rect;

}));


/***/ }),

/***/ "./node_modules/zdog/js/rounded-rect.js":
/*!**********************************************!*\
  !*** ./node_modules/zdog/js/rounded-rect.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * RoundedRect
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./shape */ "./node_modules/zdog/js/shape.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.RoundedRect = factory( Zdog.Shape );
  }
}( this, function factory( Shape ) {

var RoundedRect = Shape.subclass({
  width: 1,
  height: 1,
  cornerRadius: 0.25,
  closed: false,
});

RoundedRect.prototype.setPath = function() {
  /* eslint
     id-length: [ "error", { "min": 2, "exceptions": [ "x", "y" ] }],
     key-spacing: "off" */
  var xA = this.width / 2;
  var yA = this.height / 2;
  var shortSide = Math.min( xA, yA );
  var cornerRadius = Math.min( this.cornerRadius, shortSide );
  var xB = xA - cornerRadius;
  var yB = yA - cornerRadius;
  var path = [
    // top right corner
    { x: xB, y: -yA },
    { arc: [
      { x: xA, y: -yA },
      { x: xA, y: -yB },
    ]},
  ];
  // bottom right corner
  if ( yB ) {
    path.push({ x: xA, y: yB });
  }
  path.push({ arc: [
    { x: xA, y:  yA },
    { x: xB, y:  yA },
  ]});
  // bottom left corner
  if ( xB ) {
    path.push({ x: -xB, y: yA });
  }
  path.push({ arc: [
    { x: -xA, y:  yA },
    { x: -xA, y:  yB },
  ]});
  // top left corner
  if ( yB ) {
    path.push({ x: -xA, y: -yB });
  }
  path.push({ arc: [
    { x: -xA, y: -yA },
    { x: -xB, y: -yA },
  ]});

  // back to top right corner
  if ( xB ) {
    path.push({ x: xB, y: -yA });
  }

  this.path = path;
};

return RoundedRect;

}));


/***/ }),

/***/ "./node_modules/zdog/js/shape.js":
/*!***************************************!*\
  !*** ./node_modules/zdog/js/shape.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Shape
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js"), __webpack_require__(/*! ./vector */ "./node_modules/zdog/js/vector.js"),
        __webpack_require__(/*! ./path-command */ "./node_modules/zdog/js/path-command.js"), __webpack_require__(/*! ./anchor */ "./node_modules/zdog/js/anchor.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Shape = factory( Zdog, Zdog.Vector, Zdog.PathCommand, Zdog.Anchor );
  }
}( this, function factory( utils, Vector, PathCommand, Anchor ) {

var Shape = Anchor.subclass({
  stroke: 1,
  fill: false,
  color: '#333',
  closed: true,
  visible: true,
  path: [ {} ],
  front: { z: 1 },
  backface: true,
});

Shape.prototype.create = function( options ) {
  Anchor.prototype.create.call( this, options );
  this.updatePath();
  // front
  this.front = new Vector( options.front || this.front );
  this.renderFront = new Vector( this.front );
  this.renderNormal = new Vector();
};

var actionNames = [
  'move',
  'line',
  'bezier',
  'arc',
];

Shape.prototype.updatePath = function() {
  this.setPath();
  this.updatePathCommands();
};

// place holder for Ellipse, Rect, etc.
Shape.prototype.setPath = function() {};

// parse path into PathCommands
Shape.prototype.updatePathCommands = function() {
  var previousPoint;
  this.pathCommands = this.path.map( function( pathPart, i ) {
    // pathPart can be just vector coordinates -> { x, y, z }
    // or path instruction -> { arc: [ {x0,y0,z0}, {x1,y1,z1} ] }
    var keys = Object.keys( pathPart );
    var method = keys[0];
    var points = pathPart[ method ];
    // default to line if no instruction
    var isInstruction = keys.length == 1 && actionNames.indexOf( method ) != -1;
    if ( !isInstruction ) {
      method = 'line';
      points = pathPart;
    }
    // munge single-point methods like line & move without arrays
    var isLineOrMove = method == 'line' || method == 'move';
    var isPointsArray = Array.isArray( points );
    if ( isLineOrMove && !isPointsArray ) {
      points = [ points ];
    }

    // first action is always move
    method = i === 0 ? 'move' : method;
    // arcs require previous last point
    var command = new PathCommand( method, points, previousPoint );
    // update previousLastPoint
    previousPoint = command.endRenderPoint;
    return command;
  });
};

// ----- update ----- //

Shape.prototype.reset = function() {
  this.renderOrigin.set( this.origin );
  this.renderFront.set( this.front );
  // reset command render points
  this.pathCommands.forEach( function( command ) {
    command.reset();
  });
};

Shape.prototype.transform = function( translation, rotation, scale ) {
  // calculate render points backface visibility & cone/hemisphere shapes
  this.renderOrigin.transform( translation, rotation, scale );
  this.renderFront.transform( translation, rotation, scale );
  this.renderNormal.set( this.renderOrigin ).subtract( this.renderFront );
  // transform points
  this.pathCommands.forEach( function( command ) {
    command.transform( translation, rotation, scale );
  });
  // transform children
  this.children.forEach( function( child ) {
    child.transform( translation, rotation, scale );
  });
};

Shape.prototype.updateSortValue = function() {
  // sort by average z of all points
  // def not geometrically correct, but works for me
  var pointCount = this.pathCommands.length;
  var firstPoint = this.pathCommands[0].endRenderPoint;
  var lastPoint = this.pathCommands[ pointCount - 1 ].endRenderPoint;
  // ignore the final point if self closing shape
  var isSelfClosing = pointCount > 2 && firstPoint.isSame( lastPoint );
  if ( isSelfClosing ) {
    pointCount -= 1;
  }

  var sortValueTotal = 0;
  for ( var i = 0; i < pointCount; i++ ) {
    sortValueTotal += this.pathCommands[i].endRenderPoint.z;
  }
  this.sortValue = sortValueTotal / pointCount;
};

// ----- render ----- //

Shape.prototype.render = function( ctx, renderer ) {
  var length = this.pathCommands.length;
  if ( !this.visible || !length ) {
    return;
  }
  // do not render if hiding backface
  this.isFacingBack = this.renderNormal.z > 0;
  if ( !this.backface && this.isFacingBack ) {
    return;
  }
  if ( !renderer ) {
    throw new Error( 'Zdog renderer required. Set to ' + renderer );
  }
  // render dot or path
  var isDot = length == 1;
  if ( renderer.isCanvas && isDot ) {
    this.renderCanvasDot( ctx, renderer );
  } else {
    this.renderPath( ctx, renderer );
  }
};

var TAU = utils.TAU;
// Safari does not render lines with no size, have to render circle instead
Shape.prototype.renderCanvasDot = function( ctx ) {
  var lineWidth = this.getLineWidth();
  if ( !lineWidth ) {
    return;
  }
  ctx.fillStyle = this.getRenderColor();
  var point = this.pathCommands[0].endRenderPoint;
  ctx.beginPath();
  var radius = lineWidth/2;
  ctx.arc( point.x, point.y, radius, 0, TAU );
  ctx.fill();
};

Shape.prototype.getLineWidth = function() {
  if ( !this.stroke ) {
    return 0;
  }
  if ( this.stroke == true ) {
    return 1;
  }
  return this.stroke;
};

Shape.prototype.getRenderColor = function() {
  // use backface color if applicable
  var isBackfaceColor = typeof this.backface == 'string' && this.isFacingBack;
  var color = isBackfaceColor ? this.backface : this.color;
  return color;
};

Shape.prototype.renderPath = function( ctx, renderer ) {
  var elem = this.getRenderElement( ctx, renderer );
  var isTwoPoints = this.pathCommands.length == 2 &&
    this.pathCommands[1].method == 'line';
  var isClosed = !isTwoPoints && this.closed;
  var color = this.getRenderColor();

  renderer.renderPath( ctx, elem, this.pathCommands, isClosed );
  renderer.stroke( ctx, elem, this.stroke, color, this.getLineWidth() );
  renderer.fill( ctx, elem, this.fill, color );
  renderer.end( ctx, elem );
};

var svgURI = 'http://www.w3.org/2000/svg';

Shape.prototype.getRenderElement = function( ctx, renderer ) {
  if ( !renderer.isSvg ) {
    return;
  }
  if ( !this.svgElement ) {
    // create svgElement
    this.svgElement = document.createElementNS( svgURI, 'path');
    this.svgElement.setAttribute( 'stroke-linecap', 'round' );
    this.svgElement.setAttribute( 'stroke-linejoin', 'round' );
  }
  return this.svgElement;
};

return Shape;

}));


/***/ }),

/***/ "./node_modules/zdog/js/svg-renderer.js":
/*!**********************************************!*\
  !*** ./node_modules/zdog/js/svg-renderer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * SvgRenderer
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    root.Zdog.SvgRenderer = factory();
  }
}( this, function factory() {

var SvgRenderer = { isSvg: true };

// round path coordinates to 3 decimals
var round = SvgRenderer.round = function( num ) {
  return Math.round( num * 1000 ) / 1000;
};

function getPointString( point ) {
  return round( point.x ) + ',' + round( point.y ) + ' ';
}

SvgRenderer.begin = function() {};

SvgRenderer.move = function( svg, elem, point ) {
  return 'M' + getPointString( point );
};

SvgRenderer.line = function( svg, elem, point ) {
  return 'L' + getPointString( point );
};

SvgRenderer.bezier = function( svg, elem, cp0, cp1, end ) {
  return 'C' + getPointString( cp0 ) + getPointString( cp1 ) +
    getPointString( end );
};

SvgRenderer.closePath = function(/* elem */) {
  return 'Z';
};

SvgRenderer.setPath = function( svg, elem, pathValue ) {
  elem.setAttribute( 'd', pathValue );
};

SvgRenderer.renderPath = function( svg, elem, pathCommands, isClosed ) {
  var pathValue = '';
  pathCommands.forEach( function( command ) {
    pathValue += command.render( svg, elem, SvgRenderer );
  });
  if ( isClosed ) {
    pathValue += this.closePath( svg, elem );
  }
  this.setPath( svg, elem, pathValue );
};

SvgRenderer.stroke = function( svg, elem, isStroke, color, lineWidth ) {
  if ( !isStroke ) {
    return;
  }
  elem.setAttribute( 'stroke', color );
  elem.setAttribute( 'stroke-width', lineWidth );
};

SvgRenderer.fill = function( svg, elem, isFill, color ) {
  var fillColor = isFill ? color : 'none';
  elem.setAttribute( 'fill', fillColor );
};

SvgRenderer.end = function( svg, elem ) {
  svg.appendChild( elem );
};

return SvgRenderer;

}));


/***/ }),

/***/ "./node_modules/zdog/js/vector.js":
/*!****************************************!*\
  !*** ./node_modules/zdog/js/vector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vector
 */

( function( root, factory ) {
  // module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( __webpack_require__(/*! ./boilerplate */ "./node_modules/zdog/js/boilerplate.js") );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.Vector = factory( Zdog );
  }

}( this, function factory( utils ) {

function Vector( position ) {
  this.set( position );
}

var TAU = utils.TAU;

// 'pos' = 'position'
Vector.prototype.set = function( pos ) {
  this.x = pos && pos.x || 0;
  this.y = pos && pos.y || 0;
  this.z = pos && pos.z || 0;
  return this;
};

// set coordinates without sanitizing
// vec.write({ y: 2 }) only sets y coord
Vector.prototype.write = function( pos ) {
  if ( !pos ) {
    return this;
  }
  this.x = pos.x != undefined ? pos.x : this.x;
  this.y = pos.y != undefined ? pos.y : this.y;
  this.z = pos.z != undefined ? pos.z : this.z;
  return this;
};

Vector.prototype.rotate = function( rotation ) {
  if ( !rotation ) {
    return;
  }
  this.rotateZ( rotation.z );
  this.rotateY( rotation.y );
  this.rotateX( rotation.x );
  return this;
};

Vector.prototype.rotateZ = function( angle ) {
  rotateProperty( this, angle, 'x', 'y' );
};

Vector.prototype.rotateX = function( angle ) {
  rotateProperty( this, angle, 'y', 'z' );
};

Vector.prototype.rotateY = function( angle ) {
  rotateProperty( this, angle, 'x', 'z' );
};

function rotateProperty( vec, angle, propA, propB ) {
  if ( !angle || angle % TAU === 0 ) {
    return;
  }
  var cos = Math.cos( angle );
  var sin = Math.sin( angle );
  var a = vec[ propA ];
  var b = vec[ propB ];
  vec[ propA ] = a*cos - b*sin;
  vec[ propB ] = b*cos + a*sin;
}

Vector.prototype.isSame = function( pos ) {
  if ( !pos ) {
    return false;
  }
  return this.x === pos.x && this.y === pos.y && this.z === pos.z;
};

Vector.prototype.add = function( pos ) {
  if ( !pos ) {
    return this;
  }
  this.x += pos.x || 0;
  this.y += pos.y || 0;
  this.z += pos.z || 0;
  return this;
};

Vector.prototype.subtract = function( pos ) {
  if ( !pos ) {
    return this;
  }
  this.x -= pos.x || 0;
  this.y -= pos.y || 0;
  this.z -= pos.z || 0;
  return this;
};

Vector.prototype.multiply = function( pos ) {
  if ( pos == undefined ) {
    return this;
  }
  // multiple all values by same number
  if ( typeof pos == 'number' ) {
    this.x *= pos;
    this.y *= pos;
    this.z *= pos;
  } else {
    // multiply object
    this.x *= pos.x != undefined ? pos.x : 1;
    this.y *= pos.y != undefined ? pos.y : 1;
    this.z *= pos.z != undefined ? pos.z : 1;
  }
  return this;
};

Vector.prototype.transform = function( translation, rotation, scale ) {
  this.multiply( scale );
  this.rotate( rotation );
  this.add( translation );
  return this;
};

Vector.prototype.lerp = function( pos, alpha ) {
  this.x = utils.lerp( this.x, pos.x || 0, alpha );
  this.y = utils.lerp( this.y, pos.y || 0, alpha );
  this.z = utils.lerp( this.z, pos.z || 0, alpha );
  return this;
};

Vector.prototype.magnitude = function() {
  var sum = this.x*this.x + this.y*this.y + this.z*this.z;
  return getMagnitudeSqrt( sum );
};

function getMagnitudeSqrt( sum ) {
  // PERF: check if sum ~= 1 and skip sqrt
  if ( Math.abs( sum - 1 ) < 0.00000001 ) {
    return 1;
  }
  return Math.sqrt( sum );
}

Vector.prototype.magnitude2d = function() {
  var sum = this.x*this.x + this.y*this.y;
  return getMagnitudeSqrt( sum );
};

Vector.prototype.copy = function() {
  return new Vector( this );
};

return Vector;

}));


/***/ }),

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Illustration"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__["RotatingAnchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Ellipse"], {
    diameter: 200,
    translate: {
      z: -10
    },
    fill: true,
    color: "#AEA"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    scale: 40,
    translate: {
      x: 300,
      y: -150
    },
    fill: true,
    color: "#AEA",
    leftFace: "#EAA",
    rightFace: "#AAE",
    topFace: "#65F"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    scale: 40,
    translate: {
      x: -300,
      y: 150
    },
    fill: true,
    color: "#AEA",
    leftFace: "#EAA",
    rightFace: "#AAE",
    topFace: "#65F"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AnimatedShapeExtrusion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    depth: 50
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var sideColor = function sideColor(v) {
  return "rgb(".concat(v * 255, ", ").concat(Math.sin(v * Math.PI) * 200, ", ", 0, ")");
};

var AnimatedShapeExtrusion = function AnimatedShapeExtrusion(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
  Object(react_zdog__WEBPACK_IMPORTED_MODULE_1__["useRender"])(function () {
    ref.current.shapeRefs.forEach(function (shape, i) {
      var v = i / (ref.current.props.depth - 1); // let xOff = Math.sin((Date.now()) / 1000);
      // let yOff = Math.sin((Date.now()) / 1000 / 2);
      // shape.translate.x = Math.pow(xOff, 2) * Math.sign(xOff) * 100 * v;
      // shape.translate.y = Math.pow(yOff, 2) * Math.sign(yOff) * 100 * v;

      shape.translate.x = Math.sin(v * Math.PI + Date.now() / 300) * 50 * v;
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShapeExtrusion__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    ref: ref,
    sideColor: sideColor
  }, props, {
    spacing: 3,
    fillSides: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimatedShapeExtrusion);

/***/ }),

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
    ref.current.rotate.y = Math.sin((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3;
    ref.current.rotate.x = Math.cos((Date.now() - window.performance.timing.navigationStart) / 2000) * Math.PI / 2 * 0.3; // ref.current.rotate.y = (Date.now() - window.performance.timing.navigationStart) / 2000;
    // ref.current.rotate.x = (Date.now() - window.performance.timing.navigationStart) / 2000;
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

/***/ }),

/***/ "./src/components/ShapeExtrusion.js":
/*!******************************************!*\
  !*** ./src/components/ShapeExtrusion.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShapeExtrusion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _shapes_letters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shapes/letters */ "./src/shapes/letters.js");
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Group"], {
        rotate: rotate
      }, _toConsumableArray(Array(depth)).map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_letters__WEBPACK_IMPORTED_MODULE_2__["AmpShape"], _extends({
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
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ShapeExtrusion, RotatingAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ShapeExtrusion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ShapeExtrusion */ "./src/components/ShapeExtrusion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeExtrusion", function() { return _components_ShapeExtrusion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_RotatingAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RotatingAnchor */ "./src/components/RotatingAnchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotatingAnchor", function() { return _components_RotatingAnchor__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/shapes/letters.js":
/*!*******************************!*\
  !*** ./src/shapes/letters.js ***!
  \*******************************/
/*! exports provided: KShape, FShape, AmpShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KShape", function() { return KShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FShape", function() { return FShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpShape", function() { return AmpShape; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makeZdogBezier */ "./src/utils/makeZdogBezier.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // https://path2bezier.netlify.com/

var K_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 235.41,
  "y": 231.62099999999998
}, {
  "x": 235.41,
  "y": 231.62099999999998
}, {
  "x": 235.363,
  "y": 231.551
}, {
  "x": 235.289,
  "y": 231.396
}, {
  "x": 235.18699999999998,
  "y": 231.158
}, {
  "x": 235.18699999999998,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.18699999999998,
  "y": 230.842
}, {
  "x": 235.18699999999998,
  "y": 230.842
}, {
  "x": 235.23399999999998,
  "y": 230.733
}, {
  "x": 235.31199999999998,
  "y": 230.57600000000002
}, {
  "x": 235.421,
  "y": 230.37300000000002
}, {
  "x": 235.421,
  "y": 230.37300000000002
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}]);
var F_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 230.314,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}]);
var AMP_OUTER_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 21.447,
  "y": 26.725
}, {
  "x": 21.447,
  "y": 26.725
}, {
  "x": 20.372,
  "y": 24.834000000000003
}, {
  "x": 19.839,
  "y": 23.097
}, {
  "x": 19.839,
  "y": 21.511000000000003
}, {
  "x": 19.839,
  "y": 20.139000000000003
}, {
  "x": 20.311,
  "y": 18.912000000000003
}, {
  "x": 21.256,
  "y": 17.844
}, {
  "x": 22.712,
  "y": 16.122
}, {
  "x": 24.579,
  "y": 14.879000000000001
}, {
  "x": 26.851,
  "y": 14.109000000000002
}, {
  "x": 27.453,
  "y": 13.888000000000002
}, {
  "x": 27.865,
  "y": 13.743000000000002
}, {
  "x": 28.078,
  "y": 13.659000000000002
}, {
  "x": 28.078,
  "y": 13.659000000000002
}, {
  "x": 57.439,
  "y": 1.229
}, {
  "x": 57.439,
  "y": 1.229
}, {
  "x": 60.61,
  "y": 2.692
}, {
  "x": 63.293,
  "y": 5.07
}, {
  "x": 65.488,
  "y": 8.378
}, {
  "x": 67.676,
  "y": 11.679
}, {
  "x": 68.765,
  "y": 15.261
}, {
  "x": 68.765,
  "y": 19.125999999999998
}, {
  "x": 68.765,
  "y": 22.083999999999996
}, {
  "x": 68.124,
  "y": 24.781999999999996
}, {
  "x": 66.837,
  "y": 27.229
}, {
  "x": 65.54,
  "y": 29.676
}, {
  "x": 63.528000000000006,
  "y": 32.039
}, {
  "x": 60.776,
  "y": 34.318
}, {
  "x": 59.061,
  "y": 35.774
}, {
  "x": 54.946000000000005,
  "y": 38.623999999999995
}, {
  "x": 48.443000000000005,
  "y": 42.87
}, {
  "x": 48.443000000000005,
  "y": 42.87
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 81.259,
  "y": 53.77
}, {
  "x": 81.259,
  "y": 53.77
}, {
  "x": 84.392,
  "y": 56.216
}, {
  "x": 86.862,
  "y": 57.848000000000006
}, {
  "x": 88.66,
  "y": 58.663000000000004
}, {
  "x": 90.467,
  "y": 59.479000000000006
}, {
  "x": 92.121,
  "y": 59.884
}, {
  "x": 93.622,
  "y": 59.884
}, {
  "x": 94.179,
  "y": 59.884
}, {
  "x": 94.826,
  "y": 59.822
}, {
  "x": 95.551,
  "y": 59.693
}, {
  "x": 95.894,
  "y": 59.647999999999996
}, {
  "x": 96.176,
  "y": 59.632
}, {
  "x": 96.389,
  "y": 59.632
}, {
  "x": 96.389,
  "y": 59.632
}, {
  "x": 96.969,
  "y": 59.821999999999996
}, {
  "x": 96.969,
  "y": 59.821999999999996
}, {
  "x": 97.18199999999999,
  "y": 60.12
}, {
  "x": 97.28899999999999,
  "y": 60.446999999999996
}, {
  "x": 97.28899999999999,
  "y": 60.78999999999999
}, {
  "x": 97.28899999999999,
  "y": 61.94799999999999
}, {
  "x": 95.90799999999999,
  "y": 63.617999999999995
}, {
  "x": 93.14299999999999,
  "y": 65.806
}, {
  "x": 90.367,
  "y": 68
}, {
  "x": 87.395,
  "y": 69.09
}, {
  "x": 84.217,
  "y": 69.09
}, {
  "x": 80.093,
  "y": 69.09
}, {
  "x": 76.266,
  "y": 67.11500000000001
}, {
  "x": 72.752,
  "y": 63.152
}, {
  "x": 72.752,
  "y": 63.152
}, {
  "x": 63.392999999999994,
  "y": 69.72200000000001
}, {
  "x": 63.392999999999994,
  "y": 69.72200000000001
}, {
  "x": 66.076,
  "y": 74.53900000000002
}, {
  "x": 68.187,
  "y": 77.90100000000001
}, {
  "x": 69.735,
  "y": 79.81400000000001
}, {
  "x": 71.282,
  "y": 81.72000000000001
}, {
  "x": 73.37,
  "y": 83.381
}, {
  "x": 76.015,
  "y": 84.798
}, {
  "x": 78.653,
  "y": 86.21600000000001
}, {
  "x": 81.67,
  "y": 86.925
}, {
  "x": 85.055,
  "y": 86.925
}, {
  "x": 87.50200000000001,
  "y": 86.925
}, {
  "x": 90.29100000000001,
  "y": 86.17099999999999
}, {
  "x": 93.432,
  "y": 84.669
}, {
  "x": 93.775,
  "y": 84.50099999999999
}, {
  "x": 94.049,
  "y": 84.417
}, {
  "x": 94.262,
  "y": 84.417
}, {
  "x": 94.477,
  "y": 84.417
}, {
  "x": 94.652,
  "y": 84.501
}, {
  "x": 94.782,
  "y": 84.669
}, {
  "x": 94.99499999999999,
  "y": 84.89
}, {
  "x": 95.10199999999999,
  "y": 85.12599999999999
}, {
  "x": 95.10199999999999,
  "y": 85.378
}, {
  "x": 95.10199999999999,
  "y": 86.666
}, {
  "x": 94.317,
  "y": 88.449
}, {
  "x": 92.75399999999999,
  "y": 90.721
}, {
  "x": 91.184,
  "y": 93
}, {
  "x": 88.889,
  "y": 94.906
}, {
  "x": 85.86299999999999,
  "y": 96.452
}, {
  "x": 82.83599999999998,
  "y": 98
}, {
  "x": 79.58199999999998,
  "y": 98.77
}, {
  "x": 76.10499999999999,
  "y": 98.77
}, {
  "x": 72.24999999999999,
  "y": 98.77
}, {
  "x": 68.78899999999999,
  "y": 97.97699999999999
}, {
  "x": 65.74,
  "y": 96.39099999999999
}, {
  "x": 62.699,
  "y": 94.79799999999999
}, {
  "x": 59.992,
  "y": 92.61099999999999
}, {
  "x": 57.629999999999995,
  "y": 89.821
}, {
  "x": 55.91499999999999,
  "y": 87.801
}, {
  "x": 53.55199999999999,
  "y": 84.112
}, {
  "x": 50.54899999999999,
  "y": 78.746
}, {
  "x": 50.54899999999999,
  "y": 78.746
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}]);
var AMP_INNER_PATH_0 = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}]);
var AMP_INNER_PATH_1 = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 47.149,
  "y": 40.544
}, {
  "x": 51.173,
  "y": 37.94499999999999
}, {
  "x": 54.024,
  "y": 35.32299999999999
}, {
  "x": 55.701,
  "y": 32.686
}, {
  "x": 56.859,
  "y": 30.834
}, {
  "x": 57.439,
  "y": 28.54
}, {
  "x": 57.439,
  "y": 25.817999999999998
}, {
  "x": 57.439,
  "y": 21.831999999999997
}, {
  "x": 56.067,
  "y": 18.255999999999997
}, {
  "x": 53.315,
  "y": 15.100999999999997
}, {
  "x": 50.571,
  "y": 11.952999999999998
}, {
  "x": 47.803999999999995,
  "y": 10.374999999999996
}, {
  "x": 45.007,
  "y": 10.374999999999996
}, {
  "x": 42.652,
  "y": 10.374999999999996
}, {
  "x": 40.601,
  "y": 11.212999999999996
}, {
  "x": 38.863,
  "y": 12.882999999999996
}, {
  "x": 37.125,
  "y": 14.559999999999995
}, {
  "x": 36.256,
  "y": 16.449999999999996
}, {
  "x": 36.256,
  "y": 18.546999999999997
}, {
  "x": 36.256,
  "y": 20.177999999999997
}, {
  "x": 37.049,
  "y": 22.410999999999998
}, {
  "x": 38.634,
  "y": 25.246999999999996
}, {
  "x": 38.634,
  "y": 25.246999999999996
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}]);

var LetterShape = function LetterShape(positionProps) {
  for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
    var rotate = _ref.rotate,
        scale = _ref.scale,
        translate = _ref.translate,
        props = _objectWithoutProperties(_ref, ["rotate", "scale", "translate"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
      rotate: rotate,
      scale: scale,
      translate: translate,
      ref: ref
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], positionProps, paths.map(function (path) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Shape"], _extends({
        path: path
      }, props));
    })));
  });
};

var KShape = LetterShape({
  translate: {
    x: -233,
    y: -231
  }
}, K_PATH);
var FShape = LetterShape({
  translate: {
    x: -233,
    y: -231
  }
}, F_PATH);
var AmpShape = LetterShape({
  translate: {
    x: -50,
    y: -50
  }
}, AMP_OUTER_PATH);


/***/ }),

/***/ "./src/utils/makeZdogBezier.js":
/*!*************************************!*\
  !*** ./src/utils/makeZdogBezier.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeZdogBezier; });
// https://github.com/chrisgannon/makeZdogBezier
function makeZdogBezier(_path) {
  var arr = [];
  arr[0] = {
    x: _path[0].x,
    y: _path[0].y
  };

  for (var i = 1; i < _path.length; i++) {
    if (i % 3 == 0) {
      var key = 'bezier';
      var obj = {};
      obj[key] = [{
        x: _path[i - 2].x,
        y: _path[i - 2].y
      }, {
        x: _path[i - 1].x,
        y: _path[i - 1].y
      }, {
        x: _path[i].x,
        y: _path[i].y
      }];
      arr.push(obj);
    }
  }

  return arr;
}

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=E%3A%5CProjects%5Cshape-extrusion-zdog%5Cpages%5Cindex.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=E%3A%5CProjects%5Cshape-extrusion-zdog%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CProjects%5Cshape-extrusion-zdog%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_829b10deddf10e1653a8":
/*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_829b10deddf10e1653a8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map