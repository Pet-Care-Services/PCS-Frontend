import React, { useRef } from 'react';
import { Field as FormikField } from 'formik';
import { startsWith } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import Button from 'components/Button';
import useSnackbar from 'hooks/useSnackbar';

const FileUpload = ({ name, label, ...props }) => {
  const { t } = useTranslation();
  const { openSnackbar } = useSnackbar();
  const inputRef = useRef();

  return (
    <FormikField name={name} {...props}>
      {({ form: { setFieldValue } }) => (
        <>
          <Box
            component="input"
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={(e) => {
              if (
                !e.target.files[0] ||
                !startsWith(e.target.files[0].type, 'image')
              ) {
                openSnackbar(t('validation.invalidFileType'));
                return;
              }

              const fieldData = {
                localUrl: URL.createObjectURL(e.target.files[0]),
                file: e.target.files[0],
              };

              setFieldValue(name, fieldData);
            }}
            sx={{ display: 'none' }}
          />
          <Button
            small
            onClick={() => {
              inputRef.current.click();
            }}
          >
            {label}
          </Button>
        </>
      )}
    </FormikField>
  );
};

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FileUpload;
