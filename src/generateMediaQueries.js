import capitalize from './helpers/capitalize';

export default function(mediaQueries) {
  const prefix = '@media';
  const methods = {
    max: (size) => `${prefix} (max-width: ${size}px)`,
    min: (size) => `${prefix} (min-width: ${size}px)`
  };

  return Object.keys(mediaQueries).reduce((o, p) => {
    Object.keys(mediaQueries[p]).map(k => {
      o[`${p}${capitalize(k)}`] = methods[p](mediaQueries[p][k]);
    })

    return o;
  }, {})
};
