'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _spacing = require('./spacing');

var _spacing2 = _interopRequireDefault(_spacing);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _flex = require('./flex');

var _flex2 = _interopRequireDefault(_flex);

var _pos = require('./pos');

var _pos2 = _interopRequireDefault(_pos);

var _bg = require('./bg');

var _bg2 = _interopRequireDefault(_bg);

var _disp = require('./disp');

var _disp2 = _interopRequireDefault(_disp);

var _cursor = require('./cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

var _z = require('./z');

var _z2 = _interopRequireDefault(_z);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // import spacing from './spacing';
// import text from './text';
// import flex from './flex';
// import bg from './bg';
// import disp from './disp';
// import svg from './svg';
// import zUtil from './z';

// // TODO validate maps passed in...
// export default ({sizes, textSizes, colors, lineHeights, z}) => {
//   z = zUtil(z);

//   return Object.assign(
//     {},
//     {disp},
//     {flex},
//     spacing(sizes),
//     bg(colors),
//     svg(colors),
//     text({textSizes, colors, lineHeights}),
//     z
//   );
// };

// TODO validate maps passed in...

exports.default = function (_ref) {
  var sizes = _ref.sizes;
  var colors = _ref.colors;
  var z = _ref.z;

  var restOfStyleguide = _objectWithoutProperties(_ref, ['sizes', 'colors', 'z']);

  z = (0, _z2.default)(z);
  return _extends({}, { disp: _disp2.default }, { flex: _flex2.default }, (0, _spacing2.default)(sizes), { pos: _pos2.default }, { cursor: _cursor2.default }, (0, _bg2.default)(colors), (0, _svg2.default)(colors), (0, _text2.default)(_extends({ colors: colors }, restOfStyleguide)), z);
};
//# sourceMappingURL=index.js.map