"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
  var map = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var property = arguments[1];

  return Object.keys(map).reduce(function (o, v) {
    o[v] = _defineProperty({}, property, map[v]);
    return o;
  }, {});
};
//# sourceMappingURL=property-reducer.js.map