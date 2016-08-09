'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var properties = ['a', 'v', 'h', 't', 'l', 'b', 'r'];
var declarations = [['m', 'margin'], ['p', 'padding']];

exports.default = function () {
  var sizes = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  if (!sizes) return {};

  return properties.reduce(function (o, p) {
    declarations.map(function (d) {
      o['' + d[0] + p] = {};
      Object.keys(sizes).map(function (s) {
        o['' + d[0] + p][s] = function () {
          // eslint-disable-line
          var style = {};

          if (!! ~['a', 'v', 't'].indexOf(p)) style[d[1] + 'Top'] = sizes[s]; // eslint-disable-line
          if (!! ~['a', 'v', 'b'].indexOf(p)) style[d[1] + 'Bottom'] = sizes[s]; // eslint-disable-line
          if (!! ~['a', 'h', 'l'].indexOf(p)) style[d[1] + 'Left'] = sizes[s]; // eslint-disable-line
          if (!! ~['a', 'h', 'r'].indexOf(p)) style[d[1] + 'Right'] = sizes[s]; // eslint-disable-line
          return style;
        }();
      });
    });
    return o;
  }, {});
};
//# sourceMappingURL=spacing.js.map