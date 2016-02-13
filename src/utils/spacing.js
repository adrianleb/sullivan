const properties = ['a', 'v', 'h', 't', 'l', 'b', 'r'];
const declarations = [['m', 'margin'], ['p', 'padding']];

export default (sizes = null) => {
  if (!sizes) return {};

  return properties.reduce((o, p) => {
    declarations.map(d => {
      o[`${d[0]}${p}`] = {};
      Object.keys(sizes).map(s => {
        o[`${d[0]}${p}`][s] = () => {
          const style = {};

          if (!!~['a', 'v', 't'].indexOf(p)) style[`${d[1]}Top`] = sizes[s];
          if (!!~['a', 'v', 'b'].indexOf(p)) style[`${d[1]}Bottom`] = sizes[s];
          if (!!~['a', 'h', 'l'].indexOf(p)) style[`${d[1]}Left`] = sizes[s];
          if (!!~['a', 'h', 'r'].indexOf(p)) style[`${d[1]}Right`] = sizes[s];
          return style;
        }();
      });
    });
    return o;
  }, {});
};
