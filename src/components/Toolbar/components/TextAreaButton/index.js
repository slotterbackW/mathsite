import React from 'react';
import PropTypes from 'prop-types';

import Textarea from './Textarea';
import TextSVG from '../../../../assets/text.svg';
import Button from '../Button';

const TextAreaButton = ({ addElement }) => {
  const onClick = () => {
    addElement(Textarea);
  };
  return (
    <Button onClick={onClick}>
      <img src={TextSVG} alt="Text Area Button" width="24px" height="24px" />
    </Button>
  );
};

TextAreaButton.displayName = 'TextAreaButton';

TextAreaButton.propTypes = {
  addElement: PropTypes.func.isRequired,
};

export default TextAreaButton;
