'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mediaQueries) {
  var prefix = '@media';
  var methods = {
    max: function max(size) {
      return prefix + ' (max-width: ' + size + 'px)';
    },
    min: function min(size) {
      return prefix + ' (min-width: ' + size + 'px)';
    }
  };

  return Object.keys(mediaQueries).reduce(function (o, p) {
    Object.keys(mediaQueries[p]).map(function (k) {
      o['' + p + (0, _capitalize2.default)(k)] = methods[p](mediaQueries[p][k]);
    });

    return o;
  }, {});
};

var _capitalize = require('../helpers/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
//# sourceMappingURL=generate-media-queries.js.map