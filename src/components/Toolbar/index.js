import React, { useRef } from 'react';
import { createComponent } from 'react-fela';

import TextAreaButton from './components/TextAreaButton';
import EquationAreaButton from './components/EquationAreaButton';

const BUTTONS = [TextAreaButton, EquationAreaButton];

const StyledToolbar = createComponent(
  () => ({
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    border: '1px solid rgb(189, 195, 199, 0.7)',
    borderRadius: '5px',
    background: 'rgb(253, 254, 254, 0.7)',
    padding: '0.5rem',
    left: '0',
    marginTop: '-16px',
  }),
  'div',
);

const Toolbar = () => {
  const toolbarRef = useRef(null);
  return (
    <StyledToolbar innerRef={toolbarRef}>
      {BUTTONS.map((Button) => (
        <div key={Button.displayName}>
          <Button />
        </div>
      ))}
    </StyledToolbar>
  );
};

export default Toolbar;
