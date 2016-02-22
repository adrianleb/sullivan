export default (map = {}, property) => {
  return Object.keys(map).reduce((o, v) => {
    o[v] = {[property]: map[v]};
    return o;
  }, {});
};
