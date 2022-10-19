import PropTypes from 'prop-types';
import { WEEKDAY } from 'consts/enums';

const timeframesShape = PropTypes.arrayOf(
  PropTypes.exact({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  })
);

const daysAvailabilitiesShape = PropTypes.exact({
  [WEEKDAY.MONDAY]: timeframesShape,
  [WEEKDAY.TUESDAY]: timeframesShape,
  [WEEKDAY.WEDNESDAY]: timeframesShape,
  [WEEKDAY.THURSDAY]: timeframesShape,
  [WEEKDAY.FRIDAY]: timeframesShape,
  [WEEKDAY.SATURDAY]: timeframesShape,
  [WEEKDAY.SUNDAY]: timeframesShape,
});

const valueShape = PropTypes.exact({
  date: PropTypes.instanceOf(Date),
  timeframes: timeframesShape,
});

export { daysAvailabilitiesShape, valueShape, timeframesShape };
