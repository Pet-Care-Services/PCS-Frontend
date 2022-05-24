import React from 'react';
import PropTypes from 'prop-types';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Paper, Box, Typography } from '@mui/material';
import Rating from 'components/Rating';
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
}) => {
  return (
    <Paper sx={styles.root}>
      <Box p={10}>
        <Box display={'flex'} sx={styles.root} gap={20}>
          <Box
            component="img"
            sx={{
              height: 140,
              width: 180,
              objectFit: 'cover',
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
            <Box display={'flex'} alignItems={'center'}>
              <Icon Component={FmdGoodIcon} size={'large'}></Icon>
              <Typography variant={'h1'}>{location}</Typography>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexGrow={4}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Rating value={starsValue} />
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <PriceRange
                from={price.from}
                to={price.to}
                type={price.priceType}
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
