"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeZdogBezier;

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