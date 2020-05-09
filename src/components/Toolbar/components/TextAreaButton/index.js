import React from 'react';

import TextSVG from '../../../../assets/text.svg';
import Button from '../Button';

const TextAreaButton = () => {
  const onClick = (e) => {
    console.log('Click', e);
  };
  return (
    <Button onClick={onClick}>
      <img src={TextSVG} alt="Text Area Button" width="24px" height="24px" />
    </Button>
  );
};

TextAreaButton.displayName = 'TextAreaButton';

export default TextAreaButton;
