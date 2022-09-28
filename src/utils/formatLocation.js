export default ({ address, apartment, city }) =>
  `${address}${apartment ? `/${apartment}` : ''}, ${city}`;
