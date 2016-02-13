'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('babel-polyfill');

var _spacing = require('./spacing');

var _spacing2 = _interopRequireDefault(_spacing);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _flex = require('./flex');

var _flex2 = _interopRequireDefault(_flex);

var _bg = require('./bg');

var _bg2 = _interopRequireDefault(_bg);

var _disp = require('./disp');

var _disp2 = _interopRequireDefault(_disp);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO validate maps passed in...

exports.default = function (_ref) {
  var sizes = _ref.sizes;
  var textSizes = _ref.textSizes;
  var colors = _ref.colors;

  return _extends({}, { disp: _disp2.default }, { flex: _flex2.default }, (0, _spacing2.default)(sizes), (0, _bg2.default)(colors), (0, _svg2.default)(colors), (0, _text2.default)({ textSizes: textSizes, colors: colors }));
};
//# sourceMappingURL=index.js.map