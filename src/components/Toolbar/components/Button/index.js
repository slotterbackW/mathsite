import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const StyledButton = createComponent(
  ({ isOn }) => ({
    background: isOn ? '#AED6F1' : 'white',
    transition: 'background 0.25s, border-color 0.25s',
    borderRadius: '50%',
    padding: '12px',
    margin: '8px 0',
    ':hover': {
      background: '#AED6F1',
      cursor: 'pointer',
      borderColor: 'black',
    },
    ':focus': {
      outline: 'none',
    },
  }),
  'button',
  ['onClick', 'type'],
);

const Button = ({ onClick, children, isOn }) => (
  <StyledButton type="button" onClick={onClick} isOn={isOn}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isOn: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  isOn: false,
};

export default Button;
