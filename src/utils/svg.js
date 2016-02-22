import propertyReducer from '../helpers/property-reducer';

export default (colors = {}) => {
  const svg = propertyReducer(colors, 'fill');

  return {svg};
};
