import React from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import { FIELD_TYPES } from './consts';
import { fieldObject } from './shapes';

const Field = ({ name, label, fieldType, fieldProps, ...otherProps }) => {
  let Component;

  switch (fieldType) {
    case FIELD_TYPES.INPUT:
      Component = Input;
      break;
    case FIELD_TYPES.SELECT:
      Component = Select;
      break;
  }

  return (
    <Component name={name} label={label} {...fieldProps} {...otherProps} />
  );
};

Field.propTypes = fieldObject;

export default Field;
