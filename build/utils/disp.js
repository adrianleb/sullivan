'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var disp = [['inline', 'inline'], ['inlineBlock', 'inline-block'], ['inlineFlex', 'inline-flex'], ['block', 'block'], ['flex', 'flex'], ['none', 'none']].reduce(function (p, v) {
  p[v[0]] = { display: v[1] };
  return p;
}, {});

exports.default = disp;
//# sourceMappingURL=disp.js.map