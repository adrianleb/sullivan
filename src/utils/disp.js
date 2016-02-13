const disp = [
  ['inline', 'inline'],
  ['inlineBlock', 'inline-block'],
  ['block', 'block'],
  ['flex', 'flex']
].reduce((p, v) => {
  p[v[0]] = {display: v[1]};
  return p;
}, {});

export default disp;
