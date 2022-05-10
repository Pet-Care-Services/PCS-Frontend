import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import PriceInterval from '../PriceInterval';
import Tag from '../Tag';
import styles from './styles';

const Advertisement = ({ activities, animals, starsValue, price }) => {
  return (
    <Paper sx={styles.root}>
      <Box p={10}>
        <Box display={'flex'} sx={styles.root}>
          <Box flexGrow={3}>{'img'}</Box>
          <Box
            display={'flex'}
            flexGrow={9}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box>{renderTags(activities, 'activitiesTags', 2)}</Box>
              <Box>{renderTags(animals, 'animalsTags', 2)}</Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'}>{'tags3'}</Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexGrow={4}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} justifyContent={'flex-end'}>
              {<Rating name="read-only" value={starsValue} readOnly />}
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <PriceInterval
                price={price.from}
                priceTo={price.to}
                priceType={price.priceType}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const renderTags = (tagLabels, styleType, amountToFit) => {
  const size = tagLabels.length;
  const activitiesTags = [];
  const color = styles[styleType].backgroundColor;
  for (let i = 0; i < amountToFit; i++) {
    if (size > i) {
      activitiesTags.push(<Tag label={tagLabels[i]} color={color} />);
    }
  }
  if (size > amountToFit) {
    activitiesTags.push(
      <Tag label={'+' + (size - amountToFit)} color={color} />
    );
  }

  return activitiesTags;
};

Advertisement.propTypes = {
  activities: PropTypes.array.isRequired,
  animals: PropTypes.array.isRequired,
  starsValue: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired,
};

export default Advertisement;
