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
