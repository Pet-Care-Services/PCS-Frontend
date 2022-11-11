const getCollapsedSize = (isLargeScreen, isMediumScreen) => {
  let size = 170;
  if (isLargeScreen) {
    size = 140;
  }
  if (isMediumScreen) {
    size = 96;
  }

  return size;
};

export { getCollapsedSize };
