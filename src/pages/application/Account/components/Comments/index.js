import React from 'react';
import { map, range } from 'lodash';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import globalCommonStyles from 'consts/commonStyles';
import commonStyles from '../../styles';
import styles from './styles';

const CommentsView = () => {
  const { t } = useTranslation();

  return (
    <Box sx={[commonStyles.column, styles.comments]}>
      <Typography variant="h1">{t('comments')}</Typography>

      {map(range(3), (i) => (
        <Box
          key={i}
          sx={{
            height: 100,
            width: '100%',
            backgroundColor: (theme) => theme.palette.neutral.main,
            border: '1px solid black',
            ...globalCommonStyles.centered,
          }}
        >
          Mocked comment box
        </Box>
      ))}
    </Box>
  );
};

export default CommentsView;
