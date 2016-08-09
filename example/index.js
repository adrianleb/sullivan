import React from 'react'
import {render} from 'react-dom'
import Sullivan from 'sullivan';
import Styleguide from './styleguide';
import {StyleSheet, css} from 'aphrodite';

const styles = new Sullivan({
  aphroditeStylesheet: StyleSheet,
  styleguide: Styleguide
});

const {utils, rawUtils: raw, inline, mq, z, styleguide} = styles;
const {colors, sizes, textSizes, lineHeights} = styleguide;


class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={css( // Using Aphrodite you compose precached generated styles.
          utils.text.h2,
          utils.text.light,
          utils.text.loose,
          utils.mh.xlarge
        )}> Sullivan Example </h1>

        <div
          className={css(
            ss.wrap, // Using custom styles is as easy as using Aphrodite itself.
            utils.flex.center, // Helper around flex center all things!
            utils.text.orange, // The orange your designer friend requested.
            utils.bg.cover, // Helper around background properties.
            utils.ma.xlarge
          )}
          style={
            inline.bg.image("http://placeburger.net/400/400") // This can be a user image coming from a fetched resource...
          }>
          <div className={css(ss.box)}>
            <h2>So Pretty!</h2> {/* You can also use the styleguide to define a custom global reset! Using defined typography values for example.*/ }
          </div>
        </div>
      </div>
    );
  }
}

const ss = StyleSheet.create({ // Thanks to Aphrodite custom sheets are super easy!
  wrap: {
    width: 200,
    height: 200,
    border: 'solid',
    borderSize: sizes.small, // extract styleguide values and use them as want.
    borderColor: colors.black,

    [mq.minMedium]: { // Media queries for the win!
      width: 400,
      height: 400
    }
  },

  box: {
    ...raw.bg.whiteTransparent, // spread raw (POJO) version of the utils
    ...raw.flex.center,
    ...raw.ma.auto,
    ...raw.pa.large,
    ...raw.cursor.text
  }
})


render(<App/>, document.getElementById('root'))
