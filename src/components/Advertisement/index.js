import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Typography, Collapse } from '@mui/material';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import Icon from 'components/Icon';
import PriceRange from 'components/PriceRange';
import Rating from 'components/Rating';
import TextAvailability from 'components/TextAvailability';
import TileWrapper from 'components/TileWrapper';
import { daysAvailabilitiesShape } from 'components/WeekAvailability/shapes';
import WeekAvailabilityView from 'components/WeekAvailability/view';
import useTheme from 'hooks/useTheme';
import useWeekAvailability from 'hooks/useWeekAvailability';
import availabilitiesShape from 'shapes/availabilitiesShape';
import priceShape from 'shapes/priceShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import TagList from '../TagList';
import styles from './styles';

const Advertisement = ({
  author,
  userId,
  activities,
  animals,
  starsValue,
  price,
  location,
  image,
  description,
  isExpanded,
  availabilities,
  isService,
  servicesIndices,
  belongsToMe,
  onBoxClick,
  onContactClick,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const { weekAvailability, isLoading, changeWeek } = useWeekAvailability(
    servicesIndices,
    isExpanded && isService
  );

  let availability;
  if (isService) {
    availability = isExpanded ? (
      <WeekAvailabilityView
        dateFrom={weekAvailability.dateFrom}
        daysAvailabilities={weekAvailability.daysAvailabilities}
        onArrowClick={(offset) => changeWeek(offset)}
        isLoading={isLoading}
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
            <Typography variant="h3">
              {t('author')}:{' '}
              <ActionText
                isTypography={false}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/application/account/${userId}`);
                }}
                sx={styles.author}
              >
                {author}
              </ActionText>
            </Typography>
            <Typography variant="h2" sx={styles.description}>
              {description}
            </Typography>
            {availability}
            {!belongsToMe && (
              <Box sx={styles.justifyEndBox}>
                <Button sx={styles.contactButton} onClick={onContactClick}>
                  {t('contact')}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Collapse>
    </TileWrapper>
  );
};

Advertisement.propTypes = {
  author: PropTypes.string.isRequired,
  userId: stringOrNumberShape.isRequired,
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
  belongsToMe: PropTypes.bool,
  servicesIndices: PropTypes.arrayOf(PropTypes.number),
  onContactClick: PropTypes.func,
  onBoxClick: PropTypes.func,
};

Advertisement.defaultProps = {
  weekAvailability: null,
  description: '',
  isExpanded: false,
  belongsToMe: false,
  onContactClick: noop,
  onBoxClick: noop,
};

//TODO Location prop as an object

export default Advertisement;
