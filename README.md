Sullivan
===========

Toolkit to quickly build visual interfaces in JS.

Uses Aphrodite [https://github.com/Khan/aphrodite](https://github.com/Khan/aphrodite) under the hood to dynamically generate classnames and inject styles.

Provides a catalogue of style utilities (somewhat [BEM](https://en.bem.info/) inspired).

Includes a set of transform functions to inject dynamic styles.

**Totally WIP**

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install sullivan

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import Sullivan from 'sullivan'

// not using an ES6 transpiler
var Sullivan = require('sullivan').default
```

## Usage

initialize the singleton somewhere in your project, Sullivan comes with opinional defaults but you should pass in your own map of values according to your project styleguide.

```js

import Sullivan from 'sullivan';

const sullivan = new Sullivan({
  sizes,
  colors,
  textSizes
});

export sullivan;
```

Then inside your component:

```js
import sullivan from '..';

const FunkyComponent = () => {
  return (
    <div 
      className={sullivan.class(
        sullivan.util.flex.center,
        sullivan.util.text.yellow,
        sullivan.util.bg.cover
      )} 
      style={
        sullivan.inline.bg.image("https://placekitten.com/200/300")
      }>
      Content will be flex centered and yellow with a pretty kitten covering the background!
    </div>
  );
};
```

## API

### sheet
Alias for Aphrodite's `Stylesheet` object.

### class
Alias for Aphrodite's `css` object.

### rawUtil
Catalogue of small abstractions around common css patterns.

### utils
Same as `rawUtils` but pre-transformed by Aphrodite's `Stylesheet.create method` and ready for injection using `class`

### inline
Functional utils returning an object with a transformed css declaration.

##Utils

New utils are currently being added, this is the current list:
- spacing
- disp
- bg
- svg
- text
- flex

#### spacing
Spacing utils are maps of margins and paddings,
for ease of use they are not namespaced by `spacing` but shorthanded based on their function:
- ma/pa: Margin/Padding All (top, right, bottom, left)
- mv/pv: Margin/Padding Vertical (top, bottom)
- mh/ph: Margin/Padding Horizontal (right, left)
- mt/pt: Margin/Padding Top
- mb/pb: Margin/Padding Bottom
- ml/pl: Margin/Padding Left
- mr/pr: Margin/Padding Right


## TODO

- finish this readme file to begin with
