import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import Tag from 'components/Tag';

const TagList = ({
  labels,
  modelKey,
  color,
  labelColor,
  amountToFit,
  wrap,
}) => {
  const { t } = useTranslation();
  const size = labels.length;
  const tags = [];

  for (let i = 0; i < amountToFit; i++) {
    if (size > i) {
      tags.push(
        <Tag
          label={t(`${modelKey}.${labels[i]}`)}
          color={color}
          labelColor={labelColor}
          key={`tag-${i}-${labels[i]}`}
        />
      );
    }
  }

  if (size > amountToFit) {
    tags.push(
      <Tag
        label={'+' + (size - amountToFit)}
        color={color}
        labelColor={labelColor}
        key={`tag-has-more-${modelKey}`}
      />
    );
  }

  return (
    <Box display={'flex'} gap={5} flexWrap={wrap ? 'wrap' : 'nowrap'}>
      {tags}
    </Box>
  );
};

TagList.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  modelKey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  amountToFit: PropTypes.number,
  wrap: PropTypes.bool,
};

TagList.defaultProps = {
  amountToFit: 2,
  wrap: false,
};

export default TagList;
