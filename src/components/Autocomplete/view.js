import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';
import MUIAutocomplete from '@mui/material/Autocomplete';
import InputView from 'components/Input/view';
import optionsShape from 'shapes/optionsShape';
import getStyles from './styles';
import { getOptions, getOptionLabel } from './utils';

const Autocomplete = ({
  options,
  label,
  name,
  minLengthToSearch,
  onChange,
  error,
  helperText,
  isLoading,
  ...props
}) => {
  const { t } = useTranslation();
  const styles = getStyles(error, helperText);
  const [open, setOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext();

  const value = values[name];

  let noOptionsText = t('autocomplete.noOptions');

  if (isLoading) {
    noOptionsText = t('autocomplete.loading');
  } else if (value.length < minLengthToSearch) {
    noOptionsText = t('autocomplete.encourageText');
  }

  return (
    <MUIAutocomplete
      sx={styles.root}
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
        const value = getOptionLabel(option);
        setFieldValue(name, value);
        onChange({ target: { value } });
      }}
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
  minLengthToSearch: PropTypes.number,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
};

Autocomplete.defaultProps = {
  options: [],
  onChange: noop,
  minLengthToSearch: 0,
  error: '',
  helperText: '',
  isLoading: false,
};

export default Autocomplete;
