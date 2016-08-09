const properties = [
  ['align', 'alignItems'],
  ['self', 'alignSelf'],
  ['justify', 'justifyContent']
];

const values = [
  ['Start', 'flex-start'],
  ['End', 'flex-end'],
  ['Center', 'center'],
  ['Stretch', 'stretch'],
  ['Between', 'space-between'],
  ['Around', 'space-around']
];

const flex = properties.reduce((o, p) => {
  values.map(v => o[`${p[0]}${v[0]}`] = {[p[1]]: v[1]});
  return o;
}, {});

flex.wrap = {
  flexWrap: 'wrap'
};

flex.center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

flex.column = {
  display: 'flex',
  flexDirection: 'column'
};

flex.noShrink = {
  flexShrink: 0
};

flex.noGrow = {
  flexGrow: 0
};

export default flex;
