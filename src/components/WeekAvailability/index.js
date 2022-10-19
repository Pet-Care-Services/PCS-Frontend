import React, { useState } from 'react';
import { Field as FormikField } from 'formik';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import styles from './styles';
import { getTimeframesBetween, isInvalidClick } from './utils';
import WeekAvailabilityView from './view';

const WeekAvailability = ({ name, ...props }) => {
  const [tileFrom, setTileFrom] = useState(null);
  const [tileTo, setTileTo] = useState(null);

  const onChange = (date, timeframe, setFieldValue) => {
    let tileFromNewValue = tileFrom;
    let tileToNewValue = tileTo;

    if (
      isInvalidClick(
        tileFrom,
        tileTo,
        date,
        timeframe,
        props.daysAvailabilities
      )
    ) {
      // gdy oba są wybrane
      // lub gdy koniec jest w innym dniu
      // lub gdy wybrano nieciągły obszar
      tileFromNewValue = null;
      tileToNewValue = null;
      setFieldValue(name, { date: null, timeframes: [] });
    }
    if (!tileFromNewValue) {
      // gdy wybieramy początek
      tileFromNewValue = {
        date,
        timeframe,
      };
      tileToNewValue = null;
      setFieldValue(name, { date, timeframes: [tileFromNewValue.timeframe] });
    } else if (!tileToNewValue) {
      // gdy wybieramy koniec
      tileToNewValue = {
        date,
        timeframe,
      };

      const timeframes = getTimeframesBetween(
        props.daysAvailabilities,
        date,
        tileFromNewValue.timeframe,
        tileToNewValue.timeframe
      );
      setFieldValue(name, { date, timeframes });
    }

    setTileFrom(tileFromNewValue);
    setTileTo(tileToNewValue);
  };

  return (
    <FormikField name={name} {...props}>
      {({ field: { value }, form: { setFieldValue }, meta: { error } }) => (
        <>
          <WeekAvailabilityView
            {...props}
            onTileClick={(...callbackProps) =>
              onChange(...callbackProps, setFieldValue)
            }
            value={value}
          />
          {error && (
            <Typography variant="tiny" sx={styles.error}>
              {error}
            </Typography>
          )}
        </>
      )}
    </FormikField>
  );
};

WeekAvailability.propTypes = {
  name: PropTypes.string.isRequired,
  ...omit(WeekAvailabilityView.propTypes, 'value'),
};

WeekAvailability.defaultProps = {
  ...WeekAvailabilityView.defaultProps,
  readOnly: false,
};

export default WeekAvailability;
