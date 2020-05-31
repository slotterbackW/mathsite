import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

import TextAreaButton from './components/TextAreaButton';
import EquationAreaButton from './components/EquationAreaButton';
import DrawButton from './components/DrawButton';

const StyledToolbar = createComponent(
  () => ({
    position: 'fixed',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(189, 195, 199, 0.7)',
    borderRadius: '5px',
    background: 'rgb(253, 254, 254, 0.7)',
    padding: '0.5rem',
    marginTop: '-16px',
  }),
  'div',
);

const Toolbar = ({ addElement, toggleIsDrawing, isDrawing }) => {
  const toolbarRef = useRef(null);
  return (
    <StyledToolbar innerRef={toolbarRef}>
      <TextAreaButton addElement={addElement} />
      <EquationAreaButton addElement={addElement} />
      <DrawButton toggleIsDrawing={toggleIsDrawing} isDrawing={isDrawing} />
    </StyledToolbar>
  );
};

Toolbar.propTypes = {
  addElement: PropTypes.func.isRequired,
  toggleIsDrawing: PropTypes.func.isRequired,
  isDrawing: PropTypes.bool.isRequired,
};

export default Toolbar;
