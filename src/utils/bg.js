import propertyReducer from '../helpers/property-reducer';

export default (colors = {}) => {
  const bg = propertyReducer(colors, 'backgroundColor');

  // background cover aye
  bg.cover = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  bg.image = (url) => {
    return {backgroundImage: `url("${url}")`};
  };

  return {bg};
};
