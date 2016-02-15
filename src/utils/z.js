import reducer from './helpers/reducer';

export default (zValues = {}) => {
  const z = reducer(zValues, 'zIndex');

  return {z};
};
