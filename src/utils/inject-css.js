/**
 * Inject a string of CSS into the `<head>` under a re-useable style tag.
 *
 * @param {String} cssString
 * @param {String} namespace
 */
export default function injectCss(cssString, namespace) {
  const dataAttr = `data-kontor-${namespace}`;

  if (!document.querySelector(`style[${dataAttr}]`)) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styleTag = document.createElement('style');

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
