const disp = [
  ['inline', 'inline'],
  ['inlineBlock', 'inline-block'],
  ['inlineFlex', 'inline-flex'],
  ['block', 'block'],
  ['flex', 'flex'],
  ['none', 'none']
].reduce((p, v) => {
  p[v[0]] = {display: v[1]};
  return p;
}, {});

export default disp;
