'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propertyReducer = require('../helpers/property-reducer');

var _propertyReducer2 = _interopRequireDefault(_propertyReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var colors = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var svg = (0, _propertyReducer2.default)(colors, 'fill');

  return { svg: svg };
};
//# sourceMappingURL=svg.js.map