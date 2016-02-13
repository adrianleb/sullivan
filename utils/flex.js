'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = [['align', 'alignItems'], ['self', 'alignSelf'], ['justify', 'justifyContent']];

var values = [['Start', 'flex-start'], ['End', 'flex-end'], ['Center', 'center'], ['Between', 'space-between'], ['Around', 'space-around']];

var flex = properties.reduce(function (o, p) {
  values.map(function (v) {
    return o['' + p[0] + v[0]] = _defineProperty({}, p[1], v[1]);
  });
  return o;
}, {});

flex.center = _extends({}, flex.display, {
  justifyContent: 'center',
  alignItems: 'center'
});

flex.column = _extends({}, flex.display, {
  display: 'flex',
  flexDirection: 'column'
});

exports.default = flex;
//# sourceMappingURL=flex.js.map