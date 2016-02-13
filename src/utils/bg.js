import reducer from './helpers/reducer';

export default (colors = {}) => {
  const bg = reducer(colors, 'backgroundColor');

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
