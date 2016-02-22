import propertyReducer from '../helpers/property-reducer';

export default (zValues = {}) => {
  const z = propertyReducer(zValues, 'zIndex');

  return {z};
};
