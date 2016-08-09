const reset = (base, config) => {
  return (`
    /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}


    /**
     * Root and Body
     *
     * The root component. Roots for rem value are set here.
     */

    html {
      min-height: 100%
    }

    html,
    body {
      color: ${base.color};
      font-family: ${base.fontFamily};
      font-size: ${base.textSize};
      height: 100%;
      line-height: 1.375;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-overflow-scrolling: touch;
    }

    /**
     * Base '*'
     *
     * Applies 'border-box' box-sizing to all elements and pseudo elements for more
     * predictable control over the box model.
     */

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      min-height: 0;
      min-width: 0;
      -ms-flex-preferred-size: auto;
     }

    /**
     * Small reset for button tags
     */

    button {
      -webkit-appearance: none;
      border: none;
      outline: none;
    }

    ${resetTypography(config)}
    ${resetAnchors(config)}
    ${resetTemp(config)}
  `);
};


/**
 * based on provided text size preset, build a css string with
 * global semantic text styles
 *
 * @param {obj} config
 */
function resetTypography(config) {
  const whitelist = ['small', 'p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
  const boldList = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
  const sizes = config.textSizes;

  return Object.keys(sizes).reduce((p, v) => {
    if (!!~whitelist.indexOf(v)) {
      // NOTE - at some point we should configure weights as well;
      p = p + `
        ${v} {
          font-size: ${sizes[v]}px;
          font-weight: ${!!~boldList.indexOf(v) ? 700 : 400};
          ${v === 'p' ? `text-rendering: optimizeLegibility;` : ``}
        }
      `;
    }

    return p;
  }, '');
}

function resetAnchors(config) {
  return `
    a {
      text-decoration: none;
      color: inherit;
    }
  `;
}

export default reset;
