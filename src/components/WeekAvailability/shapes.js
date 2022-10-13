import PropTypes from 'prop-types';

const timeframesShape = PropTypes.arrayOf(
  PropTypes.exact({
    from: PropTypes.string,
    to: PropTypes.string,
  })
);

const daysAvailabilitiesShape = PropTypes.exact({
  monday: timeframesShape,
  tuesday: timeframesShape,
  wednesday: timeframesShape,
  thursday: timeframesShape,
  friday: timeframesShape,
  saturday: timeframesShape,
  sunday: timeframesShape,
});

const valueShape = PropTypes.exact({
  date: PropTypes.instanceOf(Date),
  timeframes: timeframesShape,
});

export { daysAvailabilitiesShape, valueShape, timeframesShape };
