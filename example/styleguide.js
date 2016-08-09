import resetCss from './reset-stylesheet';

const base = {
  color: '#333', // Charcoal
  size: 10,
  textSize: 14,
  lineHeight: 1,
  fontFamily: `"Helvetica", sans-serif`
}

const config = {
  // Color
  // Used for background-color, color & fill
    colors: {
    clear: 'rgba(0, 0, 0, 0)',
    white: '#ffffff',
    whiteTransparent: 'rgba(255, 255, 255, 0.7)',
    gray: '#C0C0C0',
    red: '#FF1654',
    blue: '#247BA0',
    yellow: '#F3FFBD',
    green: '#70C1B3',
    lightGreen: '#B2DBBF'
  },

  // Size
  // used by margins & paddings
  sizes: {
    none: 0,
    auto: 'auto',
    xsmall: base.size * 0.2,            // 2
    small: base.size * 0.5,             // 5
    medium: base.size,                  // 10
    large: base.size * 1.5,             // 15
    xlarge: base.size * 2,              // 20
    xxlarge: base.size * 2.5,           // 25
    xxxlarge: base.size * 3             // 30
  },

  // Text Size
  textSizes: {
    h6: Math.round(base.textSize * 0.8571428571),          // 12
    small: Math.round(base.textSize * 0.9285714286),       // 13
    h5: Math.round(base.textSize * 0.9285714286),          // 13
    p: Math.round(base.textSize),                          // 14
    marge: Math.round(base.textSize * 1.1428571429),       // 16
    h4: Math.round(base.textSize * 1.2857142857),          // 18
    h3: Math.round(base.textSize * 1.5714285714),          // 22
    h2: Math.round(base.textSize * 2.5714285714),          // 36
    h1: Math.round(base.textSize * 3)                      // 42
  },

  textWeights: {
    lighter: 100,
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 900
  },

  // Text Line height
  lineHeights: {
    xxxtight: base.lineHeight * 0.2,
    xxtight: base.lineHeight * 0.5,
    xtight: base.lineHeight * 0.8,
    tight: base.lineHeight,
    loose: base.lineHeight * 1.1,
    xloose: base.lineHeight * 1.2,
    xxloose: base.lineHeight * 1.5,
    xxxloose: base.lineHeight * 1.6
  },

  // Media-Query
  // screen width breakpoints (screen and min-width || screen and max-width)
  mediaQueries: {
    min: {
      xsmall: 670,
      small: 768,
      medium: 992,
      mediumMax: 1070,
      large: 1200
    },

    max: {
      xsmall: 669,
      small: 767,
      medium: 1199,
      large: 1400
    }
  },

  _z: {
    z0: 0,
    z1: 1,
    z2: 2,
    z3: 3,
    z4: 4,
    z5: 5,
    z6: 6,
    z7: 7,
    z8: 8,
    z9: 9
  },

  z: (z) => {
    return {
      burger: z.z1,
      text: z.z2
    }
  },

  typekit: 'xxxxxx'
};

config.reset = resetCss(base, config);

export default config;
