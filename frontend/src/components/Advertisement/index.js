import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import Tag from '../Tag';
import styles from './styles';

const Advertisement = ({ activities, animals, starsValue }) => {
  return (
    <Box>
      <Paper sx={styles.root}>
        <Box p={5}>
          <Grid container spacing={2}>
            <Grid item xs={3} />
            <Grid item xs={7}>
              <div>{renderTags(activities, 'activitiesTags', 2)}</div>
              <div>{renderTags(animals, 'animalsTags', 2)}</div>
            </Grid>
            <Grid item xs={2}>
              <Rating name='read-only' value={starsValue} readOnly />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
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
  activities: PropTypes.node.isRequired,
  animals: PropTypes.node.isRequired,
  starsValue: PropTypes.node.isRequired
};

export default Advertisement;
