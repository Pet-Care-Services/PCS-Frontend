import React from 'react';
import { map, noop, values } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Advertisement from 'components/Advertisement';
import Button from 'components/Button';
import TileWrapper from 'components/TileWrapper';
import { ITEM_TYPE } from 'consts/enums';
import useExpandedAdvertisement from 'hooks/useExpandedAdvertisement';
import advertisementsShape from 'shapes/advertisementsShape';
import styles from './styles';

const AccountView = ({
  isMyAccount,
  firstName,
  lastName,
  description,
  itemType,
  advertisements,
  onSwitchButtonClick,
}) => {
  const { t } = useTranslation();
  const { expandedAdvertisementIndex, onAdvertisementClick } =
    useExpandedAdvertisement(advertisements, itemType);

  const username = `${firstName} ${lastName}`;

  return (
    <Box sx={[styles.root, styles.column]}>
      <TileWrapper sx={styles.mainTile}>
        <Box sx={{ ...styles.column, ...styles.leftColumn }}>
          <Box
            component="img"
            src={require('assets/mockPhoto.jpg')}
            sx={styles.image}
          />
          <Button>{t('upload')}</Button>
        </Box>
        <Box sx={styles.column}>
          <Typography variant="h1">{username}</Typography>

          <Typography variant="h4">
            {description || t('noDescription')}
          </Typography>
        </Box>
      </TileWrapper>
      <TileWrapper sx={styles.switchButtons}>
        <Box
          onClick={() => onSwitchButtonClick(ITEM_TYPE.REQUEST)}
          sx={[
            styles.switchButton,
            styles.leftSwitchButton,
            itemType === ITEM_TYPE.REQUEST && styles.switchButtonActive,
          ]}
        >
          {t('requests')}
        </Box>
        <Box
          onClick={() => onSwitchButtonClick(ITEM_TYPE.SERVICE)}
          sx={[
            styles.switchButton,
            styles.rightSwitchButton,
            itemType === ITEM_TYPE.SERVICE && styles.switchButtonActive,
          ]}
        >
          {t('services')}
        </Box>
      </TileWrapper>
      <Box sx={[styles.advertisementsWrapper, styles.column]}>
        {map(advertisements, (advertisement, index) => (
          <Advertisement
            key={index}
            {...advertisement}
            belongsToMe={isMyAccount}
            isService={itemType === ITEM_TYPE.SERVICE}
            isExpanded={expandedAdvertisementIndex === index}
            onBoxClick={() => onAdvertisementClick(index)}
            onContactClick={advertisement.onContactClick}
          />
        ))}
      </Box>
    </Box>
  );
};

AccountView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string,
  isMyAccount: PropTypes.bool,
  itemType: PropTypes.oneOf(values(ITEM_TYPE)),
  advertisements: advertisementsShape,
  onSwitchButtonClick: PropTypes.func,
};

AccountView.defaultProps = {
  description: '',
  isMyAccount: false,
  itemType: ITEM_TYPE.REQUEST,
  advertisements: [],
  onSwitchButtonClick: noop,
};

export default AccountView;
