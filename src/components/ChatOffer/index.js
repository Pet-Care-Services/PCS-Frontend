import React from 'react';
import { t } from 'i18next';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Icon from 'components/Icon';
import PriceRange from 'components/PriceRange';
import Tag from 'components/Tag';
import TextAvailability from 'components/TextAvailability';
import { OFFER_STATUS } from 'consts/enums';
import useTheme from 'hooks/useTheme';
import availabilitiesShape from 'shapes/availabilitiesShape';
import priceShape from 'shapes/priceShape';
import styles from './styles';

const ChatOffer = ({
  image,
  price,
  status,
  availabilities,
  message,
  onAccept,
  onReject,
  onLinkClick,
}) => {
  const theme = useTheme();
  const isRejected = status === OFFER_STATUS.REJECTED;
  const isPending = status === OFFER_STATUS.PENDING;
  const isAccepted = status === OFFER_STATUS.ACCEPTED;

  return (
    <Box
      sx={{
        ...styles.root,
        ...(isRejected && styles.rejected),
        ...(isAccepted && styles.accepted),
      }}
    >
      <Box sx={styles.content}>
        <Box sx={styles.imageWrapper}>
          <Box component="img" sx={styles.image} src={image} />
          <Icon
            Component={OpenInNewIcon}
            size="small"
            onClick={onLinkClick}
            sx={styles.openIcon}
          />
        </Box>
        <Box sx={styles.details}>
          <PriceRange
            from={price.from}
            to={price.to}
            type={price.priceType}
            textVariant="h3"
          />
          {availabilities && (
            <TextAvailability availabilities={availabilities} />
          )}
          {message && <Typography variant="h4">{message}</Typography>}
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        {isPending ? (
          <>
            <Button onClick={onReject} color="error" small>
              {t('reject')}
            </Button>
            <Button onClick={onAccept} small>
              {t('accept')}
            </Button>
          </>
        ) : (
          <Tag
            label={isRejected ? t('rejected') : t('accepted')}
            color={
              isRejected ? theme.palette.error.dark : theme.palette.primary.dark
            }
            labelColor={theme.palette.white}
          />
        )}
      </Box>
    </Box>
  );
};

ChatOffer.propTypes = {
  image: PropTypes.string.isRequired,
  price: priceShape.isRequired,
  status: PropTypes.oneOf(['PENDING', 'ACCEPTED', 'REJECTED']).isRequired,
  availabilities: availabilitiesShape,
  message: PropTypes.string,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  onLinkClick: PropTypes.func,
};

ChatOffer.defaultProps = {
  onAccept: noop,
  onReject: noop,
  onLinkClick: noop,
};

export default ChatOffer;
