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
import TileWrapper from 'components/TileWrapper';
import styles from './styles';
import renderTags from './utils';

const Advertisement = ({
  activities,
  animals,
  starsValue,
  price,
  location,
  image,
  description,
  isExpanded,
  onBoxClick,
  onContactClick,
}) => {
  const { t } = useTranslation();

  return (
    <TileWrapper>
      <Collapse in={isExpanded} collapsedSize={170} sx={styles.collapse}>
        <Box onClick={onBoxClick} sx={styles.root}>
          <Box sx={styles.collapsedBox}>
            <Box component="img" sx={styles.imageBox} src={image} />
            <Box sx={styles.centerColumnBox}>
              <Box sx={styles.tagsBox}>
                {renderTags(activities, 'activity', 2, t)}
                {renderTags(animals, 'animal', 2, t)}
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
            <Box sx={styles.availabilityBox}>Availability</Box>
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
  price: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  isExpanded: PropTypes.bool,
  onContactClick: PropTypes.func,
  onBoxClick: PropTypes.func,
};

Advertisement.defaultProps = {
  description: '',
  isExpanded: false,
  onContactClick: noop,
  onBoxClick: noop,
};

//TODO Location prop as an object

export default Advertisement;
