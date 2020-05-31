import React from 'react';
import PropTypes from 'prop-types';

import PentagonSVG from '../../../../assets/pentagon.svg';
import Button from '../Button';

const DrawButton = ({ isDrawing, toggleIsDrawing }) => {
  const onClick = () => {
    toggleIsDrawing();
  };

  return (
    <Button onClick={onClick} isOn={isDrawing}>
      <img
        src={PentagonSVG}
        alt="Line Tool Button"
        width="24px"
        height="24px"
      />
    </Button>
  );
};

DrawButton.displayName = 'DrawButton';

DrawButton.propTypes = {
  isDrawing: PropTypes.bool.isRequired,
  toggleIsDrawing: PropTypes.func.isRequired,
};

export default DrawButton;
