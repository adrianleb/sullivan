// Import this if you want to polyfill things like Promise, Object.values(),
// etc. Includes Facebook Regenerator if you're using generators or async
// functions.
import 'babel-polyfill'
import { StyleSheet, css } from 'aphrodite';
import utils from './utils';
import pickBy from 'lodash.pickby';
import isFunction from 'lodash.isfunction';

class _Sullivan {
  constructor({sizes = {}, colors = {}, textSizes = {}, z = {}}) {
    const D = {};

    const u = utils({
      sizes,
      colors,
      textSizes
    });

    this.utils = Object.keys(u).reduce((p, c) => {
      // filter out dynamic styles
      // create class names
      D[c] = pickBy(u[c], (v) => isFunction(v));
      p[c] = this.sheet(pickBy(u[c], (v) => !isFunction(v)));
      return p;
    }, {});

    this.sizes = sizes;
    this.colors = colors;
    this.textSizes = textSizes;
    this.inline = D;
  }

  sheet(...args) {
    return StyleSheet(...args)
  }

  class(...args) {
    return css(...args);
  }
}

export let Sullivan = _Sullivan;
