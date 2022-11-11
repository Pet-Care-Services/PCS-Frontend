export default ({ address, flatNumber, city }) => {
  const fullAddress = `${address}${flatNumber ? `/${flatNumber}` : ''}`;

  return `${fullAddress}, ${city}`;
};
