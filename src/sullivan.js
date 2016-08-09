import utils from './utils';
import pickBy from 'lodash.pickby';
import generateMediaQueries from './utils/generate-media-queries';
import injectCss from './utils/inject-css';
import injectTypekit from './utils/inject-typekit';
import isFunction from 'lodash.isfunction';

export default class Sullivan {
  constructor({aphroditeStylesheet = false, styleguide}) {
    const {
      mediaQueries,
      z,
      _z,
      typekit = null,
      reset = null,
      ...restOfStyleguide
    } = styleguide;

    // Inject reset and typekit if configured to do so.
    if (reset) {
      injectCss(reset, 'sullivan-reset');
    }

    if (typekit) {
      injectTypekit(typekit);
    }

    const inlineUtils = {};
    const u = utils(restOfStyleguide);

    this.utils = Object.keys(u).reduce((p, c) => {
      // Filter out inline (function) style utils.
      // Generate class names if aphrodite is available

      inlineUtils[c] = pickBy(u[c], (v) => isFunction(v));
      if (aphroditeStylesheet) {
        p[c] = aphroditeStylesheet.create(pickBy(u[c], (v) => !isFunction(v)));
      }
      return p;
    }, {});



    this.rawUtils = u;
    this.inline = inlineUtils;

    if (mediaQueries) {
      this.mq = generateMediaQueries(mediaQueries);
    }

    if (z) {
      this.z = z(_z);
    }


    this.styleguide = styleguide;
    this.injectCss = injectCss;
  }
}






// import { StyleSheet, css } from 'aphrodite';
// import utils from './utils';
// import pickBy from 'lodash.pickby';
// import generateMediaQueries from './generateMediaQueries';
// import isFunction from 'lodash.isfunction';

// export default class Sullivan {
//   constructor({ sizes, colors, textSizes, lineHeights, z, mediaQueries}) {
//     this.sheet = StyleSheet;
//     this.class = css;

//     const D = {};

//     const u = utils({
//       sizes,
//       colors,
//       textSizes,
//       lineHeights,
//       z
//     });

//     this.utils = Object.keys(u).reduce((p, c) => {
//       // filter out dynamic styles
//       // create class names
//       D[c] = pickBy(u[c], (v) => isFunction(v));
//       p[c] = this.sheet.create(pickBy(u[c], (v) => !isFunction(v)));
//       return p;
//     }, {});



//     this.rawUtils = u;
//     this.inline = D;

//     if (mediaQueries) {
//       this.mq = generateMediaQueries(mediaQueries);
//     }

//   }
// }
