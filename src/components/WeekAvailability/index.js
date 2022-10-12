import React, { createRef, useRef, useState } from 'react';
import { Field as FormikField } from 'formik';
import { get, isFunction, map, range } from 'lodash';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';
import { areTimesInProperOrder, isContinouslyAvailable } from './utils';
import WeekAvailabilityView from './view';

const WeekAvailability = ({ name, ...props }) => {
  const [tileFrom, setTileFrom] = useState(null);
  const [tileTo, setTileTo] = useState(null);

  const onChange = (date, timeframe, setFieldValue) => {
    let tileFromNewValue, tileToNewValue;

    if (
      (tileFrom && tileTo) ||
      (tileFrom?.date &&
        (tileFrom.date !== date ||
          !isContinouslyAvailable(
            props.daysAvailabilities,
            date,
            tileFrom.timeframe,
            timeframe
          ) ||
          !areTimesInProperOrder(tileFrom.timeframe, timeframe)))
    ) {
      // gdy oba są wybrane
      // lub gdy koniec jest w innym dniu
      // lub gdy wybrano nieciągły obszar
      tileFromNewValue = null;
      tileToNewValue = null;
    } else if (!tileFrom) {
      // gdy wybieramy początek
      tileFromNewValue = {
        date,
        timeframe,
      };
      tileToNewValue = null;
    } else if (!tileTo) {
      // gdy wybieramy koniec
      tileToNewValue = {
        date,
        timeframe,
      };
    }

    if (tileFromNewValue && tileToNewValue) {
      // TODO
      // const timeframes = getTimeframesBetween(tileFromNewValue.timeframe, timeToNewValue.timeframe);
      // setFieldValue(name, { date: tileFromNewValue, timeframes });
    }

    setTileFrom(tileFromNewValue);
    setTileTo(tileToNewValue);
  };

  return (
    <FormikField name={name} {...props}>
      {({ form: { setFieldValue }, meta: { error } }) => (
        <WeekAvailabilityView
          onTimeClick={(...props) => onChange(...props, setFieldValue)}
          {...props}
        />
      )}
    </FormikField>
  );
};

WeekAvailability.propTypes = {
  name: PropTypes.string.isRequired,
  ...WeekAvailabilityView.propTypes,
};

WeekAvailability.defaultProps = {
  ...WeekAvailabilityView.defaultProps,
};

export default WeekAvailability;
