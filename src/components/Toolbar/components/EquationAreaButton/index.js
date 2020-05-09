import React from 'react';

import SqRootSVG from '../../../../assets/sqroot.svg';
import Button from '../Button';

const EquationAreaButton = () => {
  const onClick = (e) => {
    console.log('Click', e);
  };
  return (
    <Button onClick={onClick}>
      <img src={SqRootSVG} alt="Formula Button" width="24px" height="24px" />
    </Button>
  );
};

EquationAreaButton.displayName = 'EquationAreaButton';

export default EquationAreaButton;
