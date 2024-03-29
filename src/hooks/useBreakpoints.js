import { useMediaQuery } from '@mui/material';

export const xlBreakpoint = (theme) => theme.breakpoints.up('xl');
export const lgBreakpoint = (theme) => theme.breakpoints.down('lg');
export const mdBreakpoint = (theme) => theme.breakpoints.down('md');
export const smMidBreakpoint = (theme) => theme.breakpoints.down('smMid');
export const smBreakpoint = (theme) => theme.breakpoints.down('sm');
export const xsBreakpoint = (theme) => theme.breakpoints.down('xs');

const useBreakpoints = () => {
  const isExtraLargeScreen = useMediaQuery(xlBreakpoint);
  const isLargeScreen = useMediaQuery(lgBreakpoint);
  const isMediumScreen = useMediaQuery(mdBreakpoint);
  const isSmallMidScreen = useMediaQuery(smMidBreakpoint);
  const isSmallScreen = useMediaQuery(smBreakpoint);
  const isExtraSmallScreen = useMediaQuery(xsBreakpoint);

  return {
    isExtraLargeScreen,
    isLargeScreen,
    isMediumScreen,
    isSmallMidScreen,
    isSmallScreen,
    isExtraSmallScreen,
  };
};

export default useBreakpoints;
