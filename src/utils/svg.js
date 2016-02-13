import reducer from './helpers/reducer';

export default (colors = {}) => {
  const svg = reducer(colors, 'fill');

  return {svg};
};
