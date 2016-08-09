// import spacing from './spacing';
// import text from './text';
// import flex from './flex';
// import bg from './bg';
// import disp from './disp';
// import svg from './svg';
// import zUtil from './z';

// // TODO validate maps passed in...
// export default ({sizes, textSizes, colors, lineHeights, z}) => {
//   z = zUtil(z);

//   return Object.assign(
//     {},
//     {disp},
//     {flex},
//     spacing(sizes),
//     bg(colors),
//     svg(colors),
//     text({textSizes, colors, lineHeights}),
//     z
//   );
// };

import spacing from './spacing';
import text from './text';
import flex from './flex';
import pos from './pos';
import bg from './bg';
import disp from './disp';
import cursor from './cursor';
import svg from './svg';
import zUtil from './z';

// TODO validate maps passed in...
export default ({sizes, colors, z, ...restOfStyleguide}) => {
  z = zUtil(z);
  return Object.assign(
    {},
    {disp},
    {flex},
    spacing(sizes),
    {pos},
    {cursor},
    bg(colors),
    svg(colors),
    text({colors, ...restOfStyleguide}),
    z
  );
};
