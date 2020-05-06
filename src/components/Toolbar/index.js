import React from 'react';
import { createComponent } from 'react-fela';

import TextAreaButton from './components/TextAreaButton';
import EquationAreaButton from './components/EquationAreaButton';

const BUTTONS = [TextAreaButton, EquationAreaButton];

const StyledToolbar = createComponent(
  () => ({
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  'div',
);

const Toolbar = () => (
  <StyledToolbar>
    {BUTTONS.map((Button) => (
      <div key={Button.displayName}>
        <Button />
      </div>
    ))}
  </StyledToolbar>
);

export default Toolbar;
