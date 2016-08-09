'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pos = ['static', 'absolute', 'fixed', 'relative'].reduce(function (p, v) {
  p[v] = { position: v };
  return p;
}, {});

pos.cover = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

exports.default = pos;
//# sourceMappingURL=pos.js.map