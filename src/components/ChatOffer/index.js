import React from 'react';
import { t } from 'i18next';
import { map, noop } from 'lodash';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Icon from 'components/Icon';
import PriceRange from 'components/PriceRange';
import Tag from 'components/Tag';
import TagList from 'components/TagList';
import TextAvailability from 'components/TextAvailability';
import { OFFER_STATUS } from 'consts/enums';
import useTheme from 'hooks/useTheme';
import availabilitiesShape from 'shapes/availabilitiesShape';
import dictionaryValueShape from 'shapes/dictionaryValueShape';
import priceShape from 'shapes/priceShape';
import styles from './styles';

const ChatOffer = ({
  image,
  price,
  status,
  activities,
  animal,
  availabilities,
  message,
  showButtons,
  onAccept,
  onReject,
  onLinkClick,
}) => {
  const theme = useTheme();
  const isRejected = status === OFFER_STATUS.REJECTED;
  const isPending = status === OFFER_STATUS.PENDING;
  const isAccepted = status === OFFER_STATUS.ACCEPTED;

  let tagLabel = t('pending');
  let tagColor = theme.palette.neutral.main;
  if (isRejected) {
    tagLabel = t('rejected');
    tagColor = theme.palette.error.dark;
  } else if (isAccepted) {
    tagLabel = t('accepted');
    tagColor = theme.palette.primary.dark;
  }

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
          <Box sx={styles.tags}>
            <Tag
              label={
                <PriceRange
                  from={price.from}
                  to={price.to}
                  type={price.priceType}
                  isTypography={false}
                />
              }
              color={theme.palette.action.main}
              labelColor={theme.palette.action.contrastText}
            />
            <Tag
              label={t(`animal.${animal.name}`)}
              color={theme.palette.secondary.dark}
            />
            <TagList
              amountToFit={2}
              color={theme.palette.neutral.main}
              modelKey="activity"
              labels={map(activities, ({ name }) => name)}
            />
          </Box>
          {availabilities && (
            <TextAvailability availabilities={availabilities} />
          )}
          {message && <Typography variant="h4">{message}</Typography>}
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        {showButtons && isPending ? (
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
            label={tagLabel}
            color={tagColor}
            labelColor={isPending ? theme.palette.black : theme.palette.white}
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
  activities: PropTypes.arrayOf(dictionaryValueShape),
  animal: dictionaryValueShape,
  availabilities: availabilitiesShape,
  message: PropTypes.string,
  showButtons: PropTypes.bool,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  onLinkClick: PropTypes.func,
};

ChatOffer.defaultProps = {
  showButtons: false,
  onAccept: noop,
  onReject: noop,
  onLinkClick: noop,
};

export default ChatOffer;
