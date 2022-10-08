export default (error, helperText) => ({
  root: {
    width: '100%',
  },
  listbox: {
    borderRadius: (theme) => theme.borderRadius.tiny,
    padding: 0,

    '.MuiAutocomplete-option': {
      height: 45,

      '&:hover': {
        backgroundColor: (theme) => theme.palette.neutral.main,
        color: (theme) => theme.palette.neutral.contrastText,
      },

      '&[aria-selected="true"]': {
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,

        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
        },

        '&.Mui-focused': {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      },
    },
  },
  paper: {
    borderRadius: (theme) => theme.borderRadius.tiny,
    marginTop: error || helperText ? -15 : 3,
    boxShadow:
      '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  },
  inputComponent: {
    input: {
      paddingLeft: 5,
    },
  },
});
