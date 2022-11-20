import React from 'react';
import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import EmptyState from 'components/EmptyState';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Rating from 'components/Rating';
import TileWrapper from 'components/TileWrapper';
import { datetimeFormat } from 'consts/dateFormats';
import { reviewsShape } from '../../shapes';
import commonStyles from '../../styles';
import styles from './styles';
import getValidation from './validation';

const ReviewsView = ({ reviews, isMyAccount, isLoading, onSubmitReview }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={[commonStyles.column, styles.root]}>
      <Typography variant="h1">{t('reviews')}</Typography>
      {!isMyAccount && (
        <Formik
          initialValues={{ stars: null, content: '' }}
          onSubmit={(values, { resetForm }) => {
            onSubmitReview(values);
            resetForm();
          }}
          validationSchema={getValidation(t)}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Box component={Form} sx={styles.form}>
            <Rating name="stars" isFormField />
            <Input name="content" label={t('content')} multiline />
            <Button type="submit">{t('submit')}</Button>
            {isLoading && <Loader />}
          </Box>
        </Formik>
      )}
      {reviews.length === 0 && <EmptyState />}
      {map(reviews, (review, index) => (
        <TileWrapper key={index} sx={styles.reviewRoot}>
          <Box sx={styles.reviewHeader}>
            <Box sx={styles.authorAndDate}>
              <ActionText
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/application/account/${review.authorId}`);
                }}
                sx={styles.author}
              >
                {review.authorName}
              </ActionText>
              <Typography variant="tiny">
                {format(new Date(review.createdDate), datetimeFormat)}
              </Typography>
            </Box>

            <Rating value={review.stars} />
          </Box>
          {review.content}
        </TileWrapper>
      ))}
    </Box>
  );
};

ReviewsView.propTypes = {
  reviews: reviewsShape,
  onSubmitReview: PropTypes.func,
  isLoading: PropTypes.bool,
  isMyAccount: PropTypes.bool,
};

ReviewsView.defaultProps = {
  reviews: [],
  onSubmitReview: noop,
  isLoading: false,
  isMyAccount: false,
};

export default ReviewsView;
