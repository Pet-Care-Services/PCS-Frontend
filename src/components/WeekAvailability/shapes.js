import PropTypes from 'prop-types';

const dayAvailabilities = PropTypes.arrayOf(
  PropTypes.exact({
    from: PropTypes.string,
    to: PropTypes.string,
  })
);

const daysAvailabilitiesShape = PropTypes.exact({
  monday: dayAvailabilities,
  tuesday: dayAvailabilities,
  wednesday: dayAvailabilities,
  thursday: dayAvailabilities,
  friday: dayAvailabilities,
  saturday: dayAvailabilities,
  sunday: dayAvailabilities,
});

export { daysAvailabilitiesShape };
