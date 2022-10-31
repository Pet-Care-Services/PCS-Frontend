import React from 'react';
import PropTypes from 'prop-types';
import availabilitiesShape from 'shapes/availabilitiesShape';
import dictionaryValueShape from 'shapes/dictionaryValueShape';
import priceShape from 'shapes/priceShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import RequestOfferCreatorView from './view';

const RequestOfferCreatorContainer = ({ advertisement }) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const isLoading = false;

  return (
    <RequestOfferCreatorView
      image={advertisement.image}
      description={advertisement.description}
      priceType={advertisement.price.type}
      availabilities={advertisement.availabilities}
      isLoading={isLoading}
      animal={advertisement.animal}
      activities={advertisement.activities}
      initialValues={{ price: advertisement.price.amount }}
      onSubmit={onSubmit}
    />
  );
};

RequestOfferCreatorContainer.propTypes = {
  advertisement: PropTypes.shape({
    id: stringOrNumberShape,
    userId: stringOrNumberShape,
    animal: dictionaryValueShape,
    activities: PropTypes.arrayOf(dictionaryValueShape),
    price: priceShape,
    availabilities: availabilitiesShape,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RequestOfferCreatorContainer;
