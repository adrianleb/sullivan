const pos = ['static', 'absolute', 'fixed', 'relative'].reduce((p, v) => {
  p[v] = {position: v};
  return p;
}, {});

pos.cover = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

export default pos;
