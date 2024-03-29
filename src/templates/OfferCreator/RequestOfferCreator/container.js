import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { ITEM_TYPE } from 'consts/enums';
import useChat from 'hooks/useChat';
import useDialog from 'hooks/useDialog';
import availabilitiesShape from 'shapes/availabilitiesShape';
import dictionaryValueShape from 'shapes/dictionaryValueShape';
import priceShape from 'shapes/priceShape';
import priceTypeShape from 'shapes/priceTypeShape';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import { postOffer } from '../queries';
import RequestOfferCreatorView from './view';

const RequestOfferCreatorContainer = ({ advertisement }) => {
  const { closeDialog } = useDialog();
  const { openChat } = useChat();

  const { mutate: submitOffer, isLoading } = useMutation(postOffer, {
    onSuccess: () => {
      closeDialog();
      openChat();
    },
  });

  const onSubmit = (values) => {
    const data = {
      user: {
        userId: advertisement.userId,
      },
      message: {
        text: values.message,
        offer: {
          activities: map(advertisement.activities, ({ id }) => ({ id })),
          animal: {
            id: advertisement.animal.id,
          },
          offerType: ITEM_TYPE.REQUEST,
          offerId: advertisement.requestId,
          price: values.price,
          priceType: advertisement.price.type,
        },
      },
    };

    submitOffer(data);
  };

  const initialValues = {
    price: advertisement.price.amount,
    message: '',
  };

  return (
    <RequestOfferCreatorView
      image={advertisement.image}
      description={advertisement.description}
      priceType={advertisement.price.type}
      availabilities={advertisement.availabilities}
      isLoading={isLoading}
      animal={advertisement.animal}
      activities={advertisement.activities}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
};

RequestOfferCreatorContainer.propTypes = {
  advertisement: PropTypes.shape({
    requestId: stringOrNumberShape,
    userId: stringOrNumberShape,
    animal: dictionaryValueShape,
    activities: PropTypes.arrayOf(dictionaryValueShape),
    price: priceShape,
    priceType: priceTypeShape,
    availabilities: availabilitiesShape,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RequestOfferCreatorContainer;
