const getCapacityString = ({ lowerBound, upperBound }) => {
  const normalizedLowerBound = lowerBound || 1;
  const normalizedUpperBound = upperBound || 1;

  if (normalizedLowerBound === normalizedUpperBound) {
    return normalizedLowerBound;
  }

  return `${normalizedLowerBound} - ${normalizedUpperBound}`;
};

export { getCapacityString };
