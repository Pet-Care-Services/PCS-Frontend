export default (color, opacityPercentage) => {
  const opacityValue = Math.ceil((opacityPercentage / 100) * 255);
  const opacityHex = opacityValue.toString(16);

  return `${color}${opacityHex}`;
};
