import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatorView from './view';

const AdvertismentCreator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [type, setType] = useState(null);
  const [animal, setAnimal] = useState(null);
  // const [data, setData] = useState({});

  const goBack = () => {
    const newStep = step - 1;
    if (newStep < 1) {
      navigate(-1);
    } else {
      setStep(newStep);
    }
  };

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    setStep(2);
  };

  const handleAnimalSelect = (id) => {
    setAnimal(id);
    setStep(3);
  };

  const handleDataSubmit = () => {
    console.log('API request');
  };

  return (
    <CreatorView
      step={step}
      handleTypeSelect={handleTypeSelect}
      handleAnimalSelect={handleAnimalSelect}
      handleDataSubmit={handleDataSubmit}
      goBack={goBack}
    />
  );
};

export default AdvertismentCreator;
