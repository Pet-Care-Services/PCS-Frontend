import React from 'react';
import { Box } from '@mui/system';
import Tag from '../Tag';
import styles from './styles';

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

  return (
    <Box display={'flex'} p={1} gap={5}>
      {activitiesTags}
    </Box>
  );
};

export default renderTags;
