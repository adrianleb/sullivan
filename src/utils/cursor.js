const cursor = ['default', 'pointer', 'auto', 'text'].reduce((p, v) => {
  p[v] = {cursor: v};
  return p;
}, {});

export default cursor;
