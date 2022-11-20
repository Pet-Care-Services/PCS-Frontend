import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Icon from 'components/Icon';
import TileWrapper from 'components/TileWrapper';
import useBreakpoints from 'hooks/useBreakpoints';
import sxShape from 'shapes/sxShape';
import MappedRows from './components/MappedRows';
import { rowsShape } from './shapes';
import styles from './styles';

const Filters = ({
  filtersRows,
  optionsRows,
  initialValues,
  validationSchema,
  onSubmit,
  onClear,
  sx,
}) => {
  const { t } = useTranslation();
  const { isSmallScreen, isSmallMidScreen } = useBreakpoints();
  const [isExpanded, setIsExpanded] = useState(false);
  const Wrapper = isSmallMidScreen ? Collapse : Box;
  const wrapperProps = isSmallMidScreen
    ? { in: isExpanded, collapsedSize: 20, sx: styles.collapse }
    : {};

  return (
    <TileWrapper sx={[styles.root, sx]}>
      <Wrapper {...wrapperProps}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ resetForm }) => (
            <Form>
              <Box sx={styles.formContent}>
                <Typography variant="h2">{t('filters')}</Typography>
                {isSmallMidScreen && (
                  <Icon
                    Component={isExpanded ? ExpandLessIcon : ExpandMoreIcon}
                    onClick={() => setIsExpanded((v) => !v)}
                    sx={styles.expandIcon}
                  />
                )}
                <MappedRows rows={filtersRows} />

                <Typography variant="h2">{t('options')}</Typography>
                <MappedRows rows={optionsRows} />

                <Box sx={styles.buttons}>
                  <Button
                    color="neutral"
                    onClick={() => {
                      resetForm();
                      onClear();
                    }}
                    sx={styles.submitButton}
                    small={isSmallScreen}
                  >
                    {t('clear')}
                  </Button>
                  <Button
                    type="submit"
                    sx={styles.submitButton}
                    small={isSmallScreen}
                  >
                    {t('apply')}
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </TileWrapper>
  );
};

Filters.propTypes = {
  filtersRows: rowsShape.isRequired,
  optionsRows: rowsShape.isRequired,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  sx: sxShape,
};

Filters.defaultProps = {
  initialValues: {},
  validationSchema: null,
  onSubmit: noop,
  onClear: noop,
  sx: {},
};

export default Filters;
