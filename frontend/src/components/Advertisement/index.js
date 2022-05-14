import React from 'react';
import PropTypes from 'prop-types';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Paper, Rating, Box, Typography } from '@mui/material';
import Icon from '../Icon';
import PriceInterval from '../PriceInterval';
import styles from './styles';
import renderTags from './utils';

const Advertisement = ({
  activities,
  animals,
  starsValue,
  price,
  location,
  image,
}) => {
  return (
    <Paper sx={styles.root}>
      <Box p={10}>
        <Box display={'flex'} sx={styles.root} gap={20}>
          <Box
            component="img"
            sx={{
              height: 140,
              borderRadius: 25,
            }}
            src={image}
          />
          <Box
            display={'flex'}
            flexGrow={10}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} flexDirection={'column'}>
              {renderTags(activities, 'activitiesTags', 2)}
              {renderTags(animals, 'animalsTags', 2)}
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'}>
                <Icon Component={FmdGoodIcon} size={'big'}></Icon>
                <Typography variant={'h1'}>{location}</Typography>
              </Box>
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

Advertisement.propTypes = {
  activities: PropTypes.array.isRequired,
  animals: PropTypes.array.isRequired,
  starsValue: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

//TODO Location prop as an object

export default Advertisement;
