import React from 'react';

import TextAreaButton from './components/TextAreaButton';
import EquationAreaButton from './components/EquationAreaButton';
import './style.css';

const BUTTONS = [TextAreaButton, EquationAreaButton];

const Toolbar = () => (
  <div className="toolbar">
    {BUTTONS.map((Button) => (
      <div key={Button.displayName}>
        <Button />
      </div>
    ))}
  </div>
);

export default Toolbar;
