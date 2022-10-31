import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Typography, Collapse } from '@mui/material';
import Button from 'components/Button';
import Icon from 'components/Icon';
import PriceRange from 'components/PriceRange';
import Rating from 'components/Rating';
import TextAvailability from 'components/TextAvailability';
import TileWrapper from 'components/TileWrapper';
import { daysAvailabilitiesShape } from 'components/WeekAvailability/shapes';
import WeekAvailabilityView from 'components/WeekAvailability/view';
import useTheme from 'hooks/useTheme';
import availabilitiesShape from 'shapes/availabilitiesShape';
import priceShape from 'shapes/priceShape';
import TagList from '../TagList';
import styles from './styles';

const Advertisement = ({
  activities,
  animals,
  starsValue,
  price,
  location,
  image,
  description,
  isExpanded,
  availabilities,
  weekAvailability,
  isService,
  onBoxClick,
  onContactClick,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  let availability;
  if (isService) {
    availability = isExpanded ? (
      <WeekAvailabilityView
        dateFrom={weekAvailability.dateFrom}
        daysAvailabilities={weekAvailability.daysAvailabilities}
      />
    ) : (
      <Box sx={styles.fakeAvailabilityArea} />
    );
  } else {
    availability = <TextAvailability availabilities={availabilities} />;
  }

  return (
    <TileWrapper>
      <Collapse in={isExpanded} collapsedSize={170} sx={styles.collapse}>
        <Box onClick={onBoxClick} sx={styles.root}>
          <Box sx={styles.collapsedBox}>
            <Box component="img" sx={styles.imageBox} src={image} />
            <Box sx={styles.centerColumnBox}>
              <Box sx={styles.tagsBox}>
                <TagList
                  labels={activities}
                  modelKey="activity"
                  color={theme.palette.neutral.main}
                />
                <TagList
                  labels={animals}
                  modelKey="animal"
                  color={theme.palette.secondary.dark}
                />
              </Box>
              <Box sx={styles.locationBox}>
                <Icon Component={FmdGoodIcon} size={'large'} />
                <Typography variant={'h1'}>{location}</Typography>
              </Box>
            </Box>
            <Box sx={styles.rightColumnBox}>
              <Rating value={starsValue} />
              <PriceRange
                from={price.from}
                to={price.to}
                type={price.priceType}
              />
            </Box>
          </Box>
          <Box sx={styles.expandedBox}>
            <Typography variant="h2">{description}</Typography>
            {availability}
            <Box sx={styles.justifyEndBox}>
              <Button sx={styles.contactButton} onClick={onContactClick}>
                {t('contact')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </TileWrapper>
  );
};

Advertisement.propTypes = {
  activities: PropTypes.array.isRequired,
  animals: PropTypes.array.isRequired,
  starsValue: PropTypes.number.isRequired,
  price: priceShape.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  availabilities: availabilitiesShape.isRequired,
  weekAvailability: PropTypes.exact({
    dateFrom: PropTypes.instanceOf(Date),
    daysAvailabilities: daysAvailabilitiesShape,
  }),
  isService: PropTypes.bool.isRequired,
  description: PropTypes.string,
  isExpanded: PropTypes.bool,
  onContactClick: PropTypes.func,
  onBoxClick: PropTypes.func,
};

Advertisement.defaultProps = {
  weekAvailability: null,
  description: '',
  isExpanded: false,
  onContactClick: noop,
  onBoxClick: noop,
};

//TODO Location prop as an object

export default Advertisement;
