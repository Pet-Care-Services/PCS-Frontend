import React, { useState } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Box } from '@mui/system';
import ImageButton from 'components/ImageButton';
import Loader from 'components/Loader';
import { ANIMALS_KEY, getAnimals } from 'consts/queries';
import styles from './styles';

const Step2 = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [hoverItemId, setHoverItemId] = useState(null);
  const { data, isLoading } = useQuery(ANIMALS_KEY, getAnimals, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={styles.root}>
      {map(data.data, (animal) => (
        <Box
          key={animal.id}
          onMouseEnter={() => setHoverItemId(animal.id)}
          onMouseLeave={() => setHoverItemId(null)}
        >
          <ImageButton
            title={t(`animal.${animal.name}`)}
            img={require(`assets/animals/${animal.name}.jpg`)}
            variant="bottom"
            faded={hoverItemId !== null && hoverItemId !== animal.id}
            onClick={() => onSubmit(animal.id)}
          />
        </Box>
      ))}
    </Box>
  );
};

Step2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step2;
