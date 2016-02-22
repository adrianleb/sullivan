import React from 'react'
import {render} from 'react-dom'
import Sullivan from 'sullivan';
import styleguide from './styleguide/default';

const S = new Sullivan(styleguide); // Initialize Sullivan singleton passing in your styleguide

class App extends React.Component {
  render() {
    return (
      <div
        className={S.class(
          ss.wrap, // Using custom styles is as easy as using Aphrodite
          S.utils.flex.center, // Helper around flex center all things!
          S.utils.text.orange, // The orange your designer friend requested
          S.utils.bg.cover // Helper around background properties
        )}
        style={
          S.inline.bg.image("http://placeburger.net/400/400") // Image an user image coming from a fetched resource...
        }>
        So Pretty!
      </div>
    );
  }
}

const ss = S.sheet.create({ // Thanks to Aphrodite custom sheets are super easy!
  wrap: {
    width: 200,
    height: 200,

    [S.mq.minMedium]: { // Media queries for the win!
      width: 400,
      height: 400,
    }
  }
})


render(<App/>, document.getElementById('root'))
