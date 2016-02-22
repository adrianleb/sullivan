import { StyleSheet, css } from 'aphrodite';
import utils from './utils';
import pickBy from 'lodash.pickby';
import generateMediaQueries from './generateMediaQueries';
import isFunction from 'lodash.isfunction';

export default class Sullivan {
  constructor({ sizes, colors, textSizes, lineHeights, z, mediaQueries}) {
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



    this.rawUtils = u;
    this.inline = D;

    if (mediaQueries) {
      this.mq = generateMediaQueries(mediaQueries);
    }

  }
}
