import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';
import MUIAutocomplete from '@mui/material/Autocomplete';
import InputView from 'components/Input/view';
import { AUTOCOMPLETE_MIN_LENGTH_TO_SEARCH } from 'consts/config';
import optionsShape from 'shapes/optionsShape';
import sxShape from 'shapes/sxShape';
import getStyles from './styles';
import { getOptions, getOptionLabel } from './utils';

const Autocomplete = ({
  options,
  label,
  name,
  onChange,
  error,
  helperText,
  isLoading,
  sx,
  ...props
}) => {
  const { t } = useTranslation();
  const styles = getStyles(error, helperText);
  const [open, setOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext();

  const value = get(values, name, '');

  let noOptionsText = t('autocomplete.noOptions');

  if (isLoading) {
    noOptionsText = t('autocomplete.loading');
  } else if (value.length < AUTOCOMPLETE_MIN_LENGTH_TO_SEARCH) {
    noOptionsText = t('autocomplete.encourageText');
  }

  return (
    <MUIAutocomplete
      sx={[styles.root, sx]}
      ListboxProps={{
        sx: styles.listbox,
      }}
      PaperComponent={(props) => <Paper {...props} sx={styles.paper} />}
      open={open}
      value={value}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      freeSolo
      isOptionEqualToValue={(option, val) => option.label === val}
      getOptionLabel={getOptionLabel}
      filterOptions={(options) => options}
      getOptionDisabled={(option) => option.value < 0}
      options={getOptions(options, noOptionsText)}
      onChange={(_, option) => {
        const value = option.value;
        setFieldValue(name, value);
        onChange({ target: { value, set: option.set } });
      }}
      onFocus={() => onChange({ target: { value } })}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <InputView
            {...params}
            {...props}
            {...params.inputProps}
            error={error}
            helperText={helperText}
            label={label}
            sx={styles.inputComponent}
            onChange={(event) => {
              setFieldValue(name, event.target.value);
              onChange(event);
            }}
          />
        </div>
      )}
    />
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: optionsShape,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  sx: sxShape,
};

Autocomplete.defaultProps = {
  options: [],
  onChange: noop,
  error: '',
  helperText: '',
  isLoading: false,
  sx: {},
};

export default Autocomplete;
