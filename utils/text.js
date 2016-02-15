'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var textSizes = _ref.textSizes;
  var colors = _ref.colors;
  var lineHeights = _ref.lineHeights;

  // FONT-WEIGHT
  // TODO use right vals
  var text = [['lighter', 400], ['light', 400], ['normal', 400], ['bold', 600], ['bolder', 600]].reduce(function (o, v) {
    o[v[0]] = { fontWeight: v[1] };
    return o;
  }, {});

  if (textSizes) {
    // SIZES
    Object.keys(textSizes).map(function (s) {
      text[s] = { fontSize: textSizes[s] };
    });

    if (textSizes.xsmall) {
      // this is specific...
      text.eyebrow = {
        fontSize: textSizes.xsmall,
        letterSpacing: '0.7px',
        textTransform: 'uppercase'
      };
    }
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

  return { text: text };
};
//# sourceMappingURL=text.js.map