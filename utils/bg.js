'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require('./helpers/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var colors = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var bg = (0, _reducer2.default)(colors, 'backgroundColor');

  // background cover aye
  bg.cover = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  bg.image = function (url) {
    return { backgroundImage: 'url("' + url + '")' };
  };

  return { bg: bg };
};
//# sourceMappingURL=bg.js.map