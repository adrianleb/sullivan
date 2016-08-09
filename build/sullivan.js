'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _generateMediaQueries = require('./utils/generate-media-queries');

var _generateMediaQueries2 = _interopRequireDefault(_generateMediaQueries);

var _injectCss = require('./utils/inject-css');

var _injectCss2 = _interopRequireDefault(_injectCss);

var _injectTypekit = require('./utils/inject-typekit');

var _injectTypekit2 = _interopRequireDefault(_injectTypekit);

var _lodash3 = require('lodash.isfunction');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sullivan = function Sullivan(_ref) {
  var _ref$aphroditeStylesh = _ref.aphroditeStylesheet;
  var aphroditeStylesheet = _ref$aphroditeStylesh === undefined ? false : _ref$aphroditeStylesh;
  var styleguide = _ref.styleguide;

  _classCallCheck(this, Sullivan);

  var mediaQueries = styleguide.mediaQueries;
  var z = styleguide.z;
  var _z = styleguide._z;
  var _styleguide$typekit = styleguide.typekit;
  var typekit = _styleguide$typekit === undefined ? null : _styleguide$typekit;
  var _styleguide$reset = styleguide.reset;
  var reset = _styleguide$reset === undefined ? null : _styleguide$reset;

  var restOfStyleguide = _objectWithoutProperties(styleguide, ['mediaQueries', 'z', '_z', 'typekit', 'reset']);

  // Inject reset and typekit if configured to do so.


  if (reset) {
    (0, _injectCss2.default)(reset, 'sullivan-reset');
  }

  if (typekit) {
    (0, _injectTypekit2.default)(typekit);
  }

  var inlineUtils = {};
  var u = (0, _utils2.default)(restOfStyleguide);

  this.utils = Object.keys(u).reduce(function (p, c) {
    // Filter out inline (function) style utils.
    // Generate class names if aphrodite is available

    inlineUtils[c] = (0, _lodash2.default)(u[c], function (v) {
      return (0, _lodash4.default)(v);
    });
    if (aphroditeStylesheet) {
      p[c] = aphroditeStylesheet.create((0, _lodash2.default)(u[c], function (v) {
        return !(0, _lodash4.default)(v);
      }));
    }
    return p;
  }, {});

  this.rawUtils = u;
  this.inline = inlineUtils;

  if (mediaQueries) {
    this.mq = (0, _generateMediaQueries2.default)(mediaQueries);
  }

  if (z) {
    this.z = z(_z);
  }

  this.styleguide = styleguide;
  this.injectCss = _injectCss2.default;
};

// import { StyleSheet, css } from 'aphrodite';
// import utils from './utils';
// import pickBy from 'lodash.pickby';
// import generateMediaQueries from './generateMediaQueries';
// import isFunction from 'lodash.isfunction';

// export default class Sullivan {
//   constructor({ sizes, colors, textSizes, lineHeights, z, mediaQueries}) {
//     this.sheet = StyleSheet;
//     this.class = css;

//     const D = {};

//     const u = utils({
//       sizes,
//       colors,
//       textSizes,
//       lineHeights,
//       z
//     });

//     this.utils = Object.keys(u).reduce((p, c) => {
//       // filter out dynamic styles
//       // create class names
//       D[c] = pickBy(u[c], (v) => isFunction(v));
//       p[c] = this.sheet.create(pickBy(u[c], (v) => !isFunction(v)));
//       return p;
//     }, {});

//     this.rawUtils = u;
//     this.inline = D;

//     if (mediaQueries) {
//       this.mq = generateMediaQueries(mediaQueries);
//     }

//   }
// }


exports.default = Sullivan;
//# sourceMappingURL=sullivan.js.map