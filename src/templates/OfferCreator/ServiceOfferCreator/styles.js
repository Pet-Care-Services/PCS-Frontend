import { smBreakpoint } from 'hooks/useBreakpoints';

export default {
  imageInService: (theme) => ({
    [smBreakpoint(theme)]: {
      maxWidth: 'unset',
    },
  }),
};
