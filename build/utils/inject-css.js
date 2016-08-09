'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectCss;
/**
 * Inject a string of CSS into the `<head>` under a re-useable style tag.
 *
 * @param {String} cssString
 * @param {String} namespace
 */
function injectCss(cssString, namespace) {
  var dataAttr = 'data-kontor-' + namespace;

  if (!document.querySelector('style[' + dataAttr + ']')) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styleTag = document.createElement('style');

    styleTag.type = 'text/css';
    styleTag.setAttribute(dataAttr, '');

    head.appendChild(styleTag);

    if (styleTag.styleSheet) {
      styleTag.styleSheet.cssText += cssString;
    } else {
      styleTag.appendChild(document.createTextNode(cssString));
    }
  }
}
//# sourceMappingURL=inject-css.js.map