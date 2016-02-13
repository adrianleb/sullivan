import spacing from './spacing';
import text from './text';
import flex from './flex';
import bg from './bg';
import disp from './disp';
import svg from './svg';

// TODO validate maps passed in...
export default ({sizes, textSizes, colors}) => {
  return Object.assign(
    {},
    {disp},
    {flex},
    spacing(sizes),
    bg(colors),
    svg(colors),
    text({textSizes, colors}),
  );
};
