import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Paper, Box, Typography, Collapse } from '@mui/material';
import Rating from 'components/Rating';
import Button from '../Button';
import Icon from '../Icon';
import PriceRange from '../PriceRange';
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
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const { t } = useTranslation();

  return (
    <Paper sx={styles.elevation}>
      <Collapse in={isExpanded} collapsedSize={170} sx={styles.collapse}>
        <Box sx={styles.root}>
          <Box onClick={() => setExpanded(!isExpanded)} sx={styles.rootBox}>
            <Box sx={styles.collapsedBox}>
              <Box component="img" sx={styles.imageBox} src={image} />
              <Box sx={styles.centerColumnBox}>
                <Box sx={styles.tagsBox}>
                  {renderTags(activities, 'activitiesTags', 2)}
                  {renderTags(animals, 'animalsTags', 2)}
                </Box>
                <Box sx={styles.locationBox}>
                  <Icon Component={FmdGoodIcon} size={'large'}></Icon>
                  <Typography variant={'h1'}>{location}</Typography>
                </Box>
              </Box>
              <Box sx={styles.rightColumnBox}>
                <Box sx={styles.justifyEndBox}>
                  <Rating value={starsValue} />
                </Box>
                <Box sx={styles.justifyEndBox}>
                  <PriceRange
                    from={price.from}
                    to={price.to}
                    type={price.priceType}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={styles.expandedBox}>
              <Typography variant="h2">{description}</Typography>
              <Box sx={styles.availabilityBox}>Availability</Box>
              <Box sx={styles.justifyEndBox}>
                <Box sx={styles.justifyEndBox}>
                  <Button type="submit" sx={styles.contactButton}>
                    {t('contact')}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
};

Advertisement.propTypes = {
  activities: PropTypes.array.isRequired,
  animals: PropTypes.array.isRequired,
  starsValue: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

//TODO Location prop as an object

export default Advertisement;
