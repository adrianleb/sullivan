export default ({textSizes, colors, lineHeights}) => {
  // FONT-WEIGHT
  // TODO use right vals
  const text = [
    ['lighter', 400],
    ['light', 400],
    ['normal', 400],
    ['bold', 600],
    ['bolder', 600]
  ].reduce((o, v) => {
    o[v[0]] = { fontWeight: v[1] };
    return o;
  }, {});

  if (textSizes) {
    // SIZES
    Object.keys(textSizes).map(s => {
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
    Object.keys(colors).map(c => {
      text[c] = { color: colors[c] };
    });
  }

  if (lineHeights) {
    Object.keys(lineHeights).map(s => {
      text[s] = { lineHeight: lineHeights[s] };
    });
  }

  return {text};
};

