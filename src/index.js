import { StyleSheet, css } from 'aphrodite';
import utils from './utils';
import pickBy from 'lodash.pickby';
import isFunction from 'lodash.isfunction';
import defaultSizes from './default/sizes';
import defaultColors from './default/colors';
import defaultTextsizes from './default/textSizes';
import defaultLineHeights from './default/lineHeights';
import defaultZ from './default/z';

export default class Sullivan {
  constructor({
    sizes = defaultSizes,
    colors = defaultColors,
    textSizes = defaultTextsizes,
    lineHeights = lineHeights,
    z = defaultZ}) {
    this.sheet = StyleSheet;
    this.class = css;

    const D = {};

    const u = utils({
      sizes,
      colors,
      textSizes,
      lineHeights,
      z
    });

    this.utils = Object.keys(u).reduce((p, c) => {
      // filter out dynamic styles
      // create class names
      D[c] = pickBy(u[c], (v) => isFunction(v));
      p[c] = this.sheet.create(pickBy(u[c], (v) => !isFunction(v)));
      return p;
    }, {});

    this.sizes = sizes;
    this.colors = colors;
    this.textSizes = textSizes;
    this.rawUtils = u;
    this.inline = D;

  }
}
