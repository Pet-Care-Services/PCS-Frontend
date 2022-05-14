import React from 'react';
import { Formik, Form } from 'formik';
import { isArray, map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Field from './components/Field';

const Filters = ({ rows }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minWidth: 380,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (theme) => theme.palette.white,
        padding: 20,
        boxSizing: 'border-box',
        borderRadius: 10,
      }}
    >
      <Formik>
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: 10,
            }}
          >
            <Typography variant="h2">{t('filters')}</Typography>
            {map(rows, (row) => {
              if (isArray(row)) {
                return (
                  <Box sx={{ display: 'flex', columnGap: 10 }}>
                    {map(row, (field) => (
                      <Field {...field} />
                    ))}
                  </Box>
                );
              }

              return <Field {...row} />;
            })}
            <Button sx={{ marginTop: 10 }}>{t('apply')}</Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Filters;
