'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var textSizes = _ref.textSizes;
  var colors = _ref.colors;
  var lineHeights = _ref.lineHeights;
  var textWeights = _ref.textWeights;

  var text = ['left', 'right', 'center'].reduce(function (p, v) {
    p[v] = { textAlign: v };
    return p;
  }, {});

  if (textWeights) {
    Object.keys(textWeights).map(function (s) {
      text[s] = { fontWeight: textWeights[s] };
    });
  }

  if (textSizes) {
    Object.keys(textSizes).map(function (s) {
      text[s] = { fontSize: textSizes[s] };
      text[s + 'Double'] = { fontSize: textSizes[s] * 2 + 'px' };
    });
  }

  if (colors) {
    Object.keys(colors).map(function (c) {
      text[c] = { color: colors[c] };
    });
  }

  if (lineHeights) {
    Object.keys(lineHeights).map(function (s) {
      text[s] = { lineHeight: lineHeights[s] };
    });
  }

  text.truncate = {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  text.linkDecorated = {
    textDecoration: 'underline'
  };

  return { text: text };
};
//# sourceMappingURL=text.js.map