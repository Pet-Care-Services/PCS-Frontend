import React from 'react';
import { map, values } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import Advertisement from 'components/Advertisement';
import EmptyState from 'components/EmptyState';
import TileWrapper from 'components/TileWrapper';
import { ITEM_TYPE } from 'consts/enums';
import useExpandedAdvertisement from 'hooks/useExpandedAdvertisement';
import advertisementsShape from 'shapes/advertisementsShape';
import commonStyles from '../../styles';
import styles from './styles';

const AdvertisementsView = ({
  onSwitchButtonClick,
  itemType,
  advertisements,
  isMyAccount,
}) => {
  const { t } = useTranslation();
  const { expandedAdvertisementIndex, onAdvertisementClick } =
    useExpandedAdvertisement(advertisements, itemType);

  return (
    <>
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
      <Box sx={[styles.advertisementsWrapper, commonStyles.column]}>
        {advertisements.length === 0 && <EmptyState />}
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
    </>
  );
};

AdvertisementsView.propTypes = {
  onSwitchButtonClick: PropTypes.func,
  itemType: PropTypes.oneOf(values(ITEM_TYPE)),
  advertisements: advertisementsShape,
  isMyAccount: PropTypes.bool,
};

export default AdvertisementsView;
