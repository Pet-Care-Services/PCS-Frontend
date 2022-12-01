const getCollapsedSize = (isLargeScreen, isMediumScreen, isSmallScreen) => {
  let size = 170;
  if (isLargeScreen) {
    size = 140;
  }
  if (isMediumScreen) {
    size = 105;
  }
  if (isSmallScreen) {
    size = 120;
  }

  return size;
};

export { getCollapsedSize };
