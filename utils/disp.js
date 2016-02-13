'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var disp = [['inline', 'inline'], ['inlineBlock', 'inline-block'], ['block', 'block'], ['flex', 'flex']].reduce(function (p, v) {
  p[v[0]] = { display: v[1] };
  return p;
}, {});

exports.default = disp;
//# sourceMappingURL=disp.js.map