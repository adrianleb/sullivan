export default ({textSizes, colors, lineHeights, textWeights}) => {
  const text = ['left', 'right', 'center'].reduce((p, v) => {
    p[v] = {textAlign: v};
    return p;
  }, {});

  if (textWeights) {
    Object.keys(textWeights).map(s => {
      text[s] = { fontWeight: textWeights[s] };
    });
  }

  if (textSizes) {
    Object.keys(textSizes).map(s => {
      text[s] = { fontSize: textSizes[s] };
      text[s + 'Double'] = { fontSize: `${textSizes[s] * 2}px` };
    });
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

  text.truncate = {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  text.linkDecorated = {
    textDecoration: 'underline'
  }

  return {text};
};

