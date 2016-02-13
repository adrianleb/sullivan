Sullivan
===========

**What?**

Opinionated toolkit to quickly build visual interfaces in JS.

**Why?**

:white_check_mark: Because we're humans who make mistakes and need constraints around a predefined styleguide.

:white_check_mark: Because some css patterns are really annoying to rewrite all the time.

:white_check_mark: Because there are too many different ways to peel this potato (styling in JS) and sometimes we just want to write code.

:white_check_mark: Because we're lazy developers.

**How?**

Uses Aphrodite [https://github.com/Khan/aphrodite](https://github.com/Khan/aphrodite) under the hood to dynamically generate classnames and inject styles.

prefixes everything so you don't have to think about it (thanks to Aphrodite);

Provides a catalogue of style utilities (somewhat [BEM](https://en.bem.info/) inspired).

Abstracts around a few overly verbosed css syntaxes (I'm looking at you flex).

Includes a set of transform functions to inject dynamic styles.

Sullivan is built with React in mind but doesn't depend on it so can be used in other non-react project.

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

Initialize the singleton somewhere in your project, Sullivan comes with opinional defaults but you should pass in your own map of values according to your project styleguide.

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
Same as `rawUtils` but pre-transformed by Aphrodite's `Stylesheet.create` method and ready for injection using `class`

### inline
Functional utils returning an object with a transformed css declaration.

##Utils
New utils are constantly being added, this is the current list:
- spacing
- disp
- bg
- svg
- text
- flex

#### Spacing
**Requires sizes**

Mapping to margins and paddings according to passed in size values,
for ease of use they are not namespaced by `spacing` but shorthanded based on their function:
- `ma/pa`: Margin/Padding All (top, right, bottom, left)
- `mv/pv`: Margin/Padding Vertical (top, bottom)
- `mh/ph`: Margin/Padding Horizontal (right, left)
- `mt/pt`: Margin/Padding Top
- `mb/pb`: Margin/Padding Bottom
- `ml/pl`: Margin/Padding Left
- `mr/pr`: Margin/Padding Right

The values are based on what you pass through the `sizes` argument.

Example based on defaults:

`util.mt.small // outputs a classname with {margin-top: 5px}`

#### Disp
**No requirements**

Mapping to css display values
- `inline` : {display: inline}
- `inlineBlock` : {display: inline-block}
- `block` : {display: block}
- `flex` : {display: flex}

Example:

`util.disp.flex // outputs a classname with {display: flex}`

#### BG
**Requires colors**

Mapping to background-color values according to passed in colors, also a small set of quick patterns.

Example based on defaults:

`util.bg.black // outputs a classname with {background-color: '#000'}`

##### bg.cover
Outputs:
```css
{
  background-size: 'cover',
  background-position: 'center',
  background-repeat: 'no-repeat'
}
```

#### SVG
**Requires colors**

Mapping to fill values according to passed in colors.

Example based on defaults:

`util.svg.black // outputs a classname with {fill: '#000'}`

#### Text
**Requires textSizes and colors**

Mapping to color, size and weights values according to passed in maps and a set of utils

Example color based on defaults:

`util.text.black // outputs a classname with {color: '#000'}`

Example size based on defaults:

`util.text.small // outputs a classname with {font-size: '12px'}`

Example weight:

`util.text.light // outputs a classname with {font-weight: '300'}`

#### Flex
Mapping around the flex syntax (which can be a bit verbosed), also a small set of quick patterns.

Properties:
- `align`: alignItems
- `alignSelf`: alignSelf
- `justify`: justifyContent

Values:
- `Start`: flex-start
- `End`: flex-end
- `Center`: center
- `Around`: space-around
- `Between`: space-between

With properties and values combined they summon earth's greatest champion (yes, this is a captain planet reference):

`util.flex.alignEnd // outputs a classname with {align-items: 'flex-end'}`

`util.flex.justifyAround // outputs a classname with {justify-content: 'space-around'}`

##### flex.center
Outputs:
```
{
  display: 'flex',
  align-items: 'center',
  justify-content: 'center'
}
```

##### flex.column
Outputs:
```
{
  display: 'flex',
  flex-direction: 'column'
}
```
If you need to do anything else with flex, you're on your own.

## TODO
- Finish this readme file.
- Truncation text util.
- Some tests would be nice.

# Contributing
Please do, this is built on top of other amazing open-source projects and belongs to the community.
- Ideas? suggest anything over an Issue or PR!
- Suggestions? Read above!
- bugs? Read above!
- this code smells and you can do better? Yes! You know what to do!

# License (MIT)

Copyright (c) 2016 Adrian le Bas

Includes works from https://github.com/Khan/aphrodite, which is MIT licensed with the following copyright:

Copyright (c) 2016 Khan Academy

Which itself includes work from other libraries...
