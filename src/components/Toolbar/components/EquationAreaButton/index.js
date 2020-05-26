import React from 'react';
import PropTypes from 'prop-types';

import MinusSVG from '../../../../assets/minus.svg';
import Button from '../Button';
import EquationArea from './EquationArea';

const EquationAreaButton = ({ addElement }) => {
  const onClick = () => {
    addElement(EquationArea);
  };

  return (
    <Button onClick={onClick}>
      <img src={MinusSVG} alt="Formula Button" width="24px" height="24px" />
    </Button>
  );
};

EquationAreaButton.displayName = 'EquationAreaButton';

EquationAreaButton.propTypes = {
  addElement: PropTypes.func.isRequired,
};

export default EquationAreaButton;
