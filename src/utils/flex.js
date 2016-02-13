const properties = [
  ['align', 'alignItems'],
  ['self', 'alignSelf'],
  ['justify', 'justifyContent']
];

const values = [
  ['Start', 'flex-start'],
  ['End', 'flex-end'],
  ['Center', 'center'],
  ['Between', 'space-between'],
  ['Around', 'space-around']
];

const flex = properties.reduce((o, p) => {
  values.map(v => o[`${p[0]}${v[0]}`] = {[p[1]]: v[1]});
  return o;
}, {});

flex.center = Object.assign({}, flex.display, {
  justifyContent: 'center',
  alignItems: 'center'
});

flex.column = Object.assign({}, flex.display, {
  display: 'flex',
  flexDirection: 'column'
});

export default flex;
