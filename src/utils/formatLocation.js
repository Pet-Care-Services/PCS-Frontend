export default ({ address, flatNumber, city }) =>
  `${address}${flatNumber ? `/${flatNumber}` : ''}, ${city}`;
