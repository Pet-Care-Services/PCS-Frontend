import React, { createRef, useRef, useState } from 'react';
import { Field as FormikField } from 'formik';
import { get, isFunction, map, range } from 'lodash';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const CodeInput = ({
  name,
  numberOfBoxes,
  autoFocus,
  fastSubmitAction,
  sx,
  ...props
}) => {
  const idsArray = range(numberOfBoxes);
  const [boxValues, setBoxValues] = useState(map(idsArray, () => ''));
  const boxesRefs = useRef(map(idsArray, () => createRef()));

  const onChange = (id, character, setFieldValue) => {
    const newBoxValues = [...boxValues];
    newBoxValues[id] = character;
    const newValue = newBoxValues.join('');

    setFieldValue(name, newValue, false);
    setBoxValues(newBoxValues);

    if (newValue.length === numberOfBoxes && isFunction(fastSubmitAction)) {
      boxesRefs.current[id].current.blur();
      fastSubmitAction();
    } else {
      const nextBoxRef = get(boxesRefs, `current[${id + 1}].current`);
      if (nextBoxRef) {
        nextBoxRef.focus();
      }
    }
  };

  return (
    <FormikField name={name} {...props}>
      {({ form: { setFieldValue }, meta: { error } }) => (
        <Box sx={sx}>
          <Box sx={styles.boxesWrapper}>
            {map(idsArray, (id) => (
              <Box
                key={id}
                autoFocus={id === 0 && autoFocus}
                ref={boxesRefs.current[id]}
                component="input"
                maxLength={1}
                onChange={(e) => onChange(id, e.target.value, setFieldValue)}
                sx={{ ...styles.box, ...(error && styles.error) }}
              />
            ))}
          </Box>
          {error && (
            <Typography variant="tiny" sx={styles.error}>
              {error}
            </Typography>
          )}
        </Box>
      )}
    </FormikField>
  );
};

CodeInput.propTypes = {
  name: PropTypes.string.isRequired,
  numberOfBoxes: PropTypes.number,
  autoFocus: PropTypes.bool,
  fastSubmitAction: PropTypes.func,
  sx: PropTypes.object,
};

CodeInput.defaultProps = {
  sx: {},
  numberOfBoxes: 6,
  autoFocus: false,
  fastSubmitAction: null,
};

export default CodeInput;
