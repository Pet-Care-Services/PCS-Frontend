import React from 'react';
import { Box } from '@mui/system';
import Tag from 'components/Tag';
import styles from './styles';

const styleMap = {
  activity: 'activitiesTags',
  animal: 'animalsTags',
};

const renderTags = (tagLabels, modelKey, amountToFit, t) => {
  const size = tagLabels.length;
  const activitiesTags = [];
  const styleKey = styleMap[modelKey];
  const color = styles[styleKey].backgroundColor;

  for (let i = 0; i < amountToFit; i++) {
    if (size > i) {
      activitiesTags.push(
        <Tag
          label={t(`${modelKey}.${tagLabels[i]}`)}
          color={color}
          key={`tag-${i}-${tagLabels[i]}`}
        />
      );
    }
  }

  if (size > amountToFit) {
    activitiesTags.push(
      <Tag
        label={'+' + (size - amountToFit)}
        color={color}
        key={`tag-has-more-${modelKey}`}
      />
    );
  }

  return (
    <Box display={'flex'} p={3} gap={5}>
      {activitiesTags}
    </Box>
  );
};

export default renderTags;
