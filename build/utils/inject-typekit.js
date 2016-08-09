'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectTypekit;
/**
 * Inject the async typekit embed code with the passed in typekit id
 * embed code from https://blog.5apps.com/2014/02/21/using-typekit-the-right-way-with-an-improved-loading-script.html
 *
 * @param {String} typekitId
 */
function injectTypekit(typekitId) {
  (function (d) {
    var tkTimeout = 3000;
    if (window.sessionStorage) {
      if (sessionStorage.getItem('useTypekit') === 'false') {
        tkTimeout = 0;
      }
    }
    var config = {
      kitId: typekitId,
      scriptTimeout: tkTimeout
    },
        h = d.documentElement,
        t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + "wf-inactive";if (window.sessionStorage) {
        sessionStorage.setItem("useTypekit", "false");
      }
    }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;h.className += "wf-loading";tk.src = '//use.typekit.net/' + config.kitId + '.js';tk.async = true;tk.onload = tk.onreadystatechange = function () {
      a = this.readyState;if (f || a && a != "complete" && a != "loaded") return;f = true;clearTimeout(t);try {
        Typekit.load(config);
      } catch (e) {}
    };s.parentNode.insertBefore(tk, s);
  })(document);
}
//# sourceMappingURL=inject-typekit.js.map