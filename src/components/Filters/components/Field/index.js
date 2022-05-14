import React from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import { FIELD_TYPES } from './consts';

const Field = ({ name, label, fieldType, fieldProps }) => {
  let Component;

  switch (fieldType) {
    case FIELD_TYPES.INPUT:
      Component = Input;
      break;
    case FIELD_TYPES.SELECT:
      Component = Select;
      break;
  }

  return <Component name={name} label={label} {...fieldProps} />;
};

export default Field;
