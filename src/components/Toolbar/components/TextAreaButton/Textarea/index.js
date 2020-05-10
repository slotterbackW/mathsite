import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import Draggable from 'react-draggable';

const StyledTextArea = createComponent(
  () => ({
    position: 'absolute',
    height: '60px',
    maxHeight: '500px',
    margin: '50px',
    padding: '8px',
    background: 'transparent',
    fontSize: '22px',
    border: '1px solid transparent',
    resize: 'none',
    cursor: 'grab',
    ':focus': {
      border: '1px solid black',
      cursor: 'text',
    },
  }),
  'textarea',
  ['autoFocus', 'onInput', 'placeholder', 'onKeyDown'],
);

const TextArea = ({ removeElement }) => {
  const onInput = ({ target }) => {
    target.style.height = "inherit"; // eslint-disable-line
    const height = parseInt(target.scrollHeight, 10) - 8;
    target.style.height = `${height}px`; // eslint-disable-line
  };

  const onKeyDown = (e) => {
    // 8 === delete key
    if (e.keyCode === 8 && e.target.value === '') {
      removeElement();
    }
  };

  return (
    <Draggable handle=".handle">
      <div className="handle" style={{ display: 'inline-flex' }}>
        <StyledTextArea
          autoFocus
          placeholder="Type here..."
          onInput={onInput}
          onKeyDown={onKeyDown}
        />
      </div>
    </Draggable>
  );
};

TextArea.propTypes = {
  removeElement: PropTypes.func.isRequired,
};

export default TextArea;
