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
import Tag from 'components/Tag';
import TextAvailability from 'components/TextAvailability';
import TileWrapper from 'components/TileWrapper';
import { daysAvailabilitiesShape } from 'components/WeekAvailability/shapes';
import WeekAvailabilityView from 'components/WeekAvailability/view';
import useBreakpoints from 'hooks/useBreakpoints';
import useTheme from 'hooks/useTheme';
import useWeekAvailability from 'hooks/useWeekAvailability';
import availabilitiesShape from 'shapes/availabilitiesShape';
import priceShape from 'shapes/priceShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import TagList from '../TagList';
import { getCollapsedSize } from './consts';
import styles from './styles';
import { getCapacityString } from './utils';

const Advertisement = ({
  author,
  userId,
  activities,
  animals,
  averageRating,
  price,
  location,
  image,
  capacity,
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
  const { isLargeScreen, isMediumScreen, isSmallScreen } = useBreakpoints();

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

  let locationTextVariant = 'h1';
  let priceTextVariant = 'h2';
  if (isLargeScreen) {
    locationTextVariant = 'h3';
    priceTextVariant = 'h4';
  }
  if (isMediumScreen) {
    locationTextVariant = 'body';
  }
  if (isSmallScreen) {
    priceTextVariant = 'body';
  }

  const ratingAndPriceView = (
    <>
      <Rating value={averageRating} size={isLargeScreen ? 'small' : 'medium'} />
      <PriceRange
        from={price.from}
        to={price.to}
        type={price.priceType}
        textVariant={priceTextVariant}
      />
    </>
  );

  const capacityString = getCapacityString(capacity);

  return (
    <TileWrapper>
      <Collapse
        in={isExpanded}
        collapsedSize={getCollapsedSize(
          isLargeScreen,
          isMediumScreen,
          isSmallScreen
        )}
        sx={styles.collapse}
      >
        <Box onClick={onBoxClick} sx={styles.content}>
          <Box sx={styles.collapsedBox}>
            <Box component="img" sx={styles.imageBox} src={image} />
            <Box sx={styles.centerColumnBox}>
              {isSmallScreen && (
                <Box sx={styles.justifySpaceBetweenBox}>
                  {ratingAndPriceView}
                </Box>
              )}
              <Box sx={styles.tagsBox}>
                <TagList
                  labels={activities}
                  modelKey="activity"
                  color={theme.palette.neutral.main}
                  labelColor={theme.palette.neutral.contrastText}
                  amountToFit={isSmallScreen ? 1 : 2}
                />
                <Box sx={styles.row}>
                  <TagList
                    labels={animals}
                    modelKey="animal"
                    color={theme.palette.secondary.dark}
                    labelColor={theme.palette.secondary.contrastText}
                    amountToFit={isSmallScreen ? 1 : 2}
                  />
                  {capacity.upperBound > 1 && (
                    <Tag
                      label={`${t('count')}: ${capacityString}`}
                      labelColor={(theme) => theme.palette.action.contrastText}
                      color={(theme) => theme.palette.action.main}
                    />
                  )}
                </Box>
              </Box>
              <Box sx={styles.locationBox}>
                <Icon
                  Component={FmdGoodIcon}
                  size={isLargeScreen ? 'medium' : 'large'}
                  componentProps={{
                    sx: styles.locationIcon,
                  }}
                />
                <Typography
                  noWrap
                  variant={locationTextVariant}
                  sx={styles.location}
                >
                  {location}
                </Typography>
              </Box>
            </Box>
            {!isSmallScreen && (
              <Box sx={styles.rightColumnBox}>{ratingAndPriceView}</Box>
            )}
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
            <Typography
              variant={isMediumScreen ? 'h4' : 'h2'}
              sx={styles.description}
            >
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
  averageRating: PropTypes.number.isRequired,
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
  capacity: PropTypes.shape({
    lowerBound: PropTypes.number,
    upperBound: PropTypes.number,
  }),
};

Advertisement.defaultProps = {
  weekAvailability: null,
  description: '',
  isExpanded: false,
  belongsToMe: false,
  onContactClick: noop,
  onBoxClick: noop,
  capacity: {
    lowerBound: 0,
    upperBound: 0,
  },
};

//TODO Location prop as an object

export default Advertisement;
