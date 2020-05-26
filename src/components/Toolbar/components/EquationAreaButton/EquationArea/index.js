import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { createComponentWithProxy } from 'react-fela';

const StyledEquationArea = createComponentWithProxy(
  () => ({
    fontSize: '22px',
    padding: '16px',
    borderRadius: '5px',
  }),
  'div',
);

const StyledEquationAreaContainer = createComponentWithProxy(
  () => ({
    position: 'absolute',
    margin: '25px',
    padding: '20px',
    cursor: 'grab',
  }),
  'div',
);

const EquationArea = ({ removeElement }) => {
  const inputRef = useRef(null);
  const mq = MathQuill.getInterface(2); // eslint-disable-line

  const onKeyDown = (e) => {
    if (
      e.keyCode === 8
      && e.target.parentNode.parentNode.querySelector('.mq-root-block').childNodes
        .length <= 1
    ) {
      removeElement();
    }
  };

  useEffect(() => {
    mq.MathField(inputRef.current, {});
  }, []);

  return (
    <Draggable handle=".handle">
      <StyledEquationAreaContainer className="handle">
        {/* eslint-disable-next-line */}
        <StyledEquationArea
          innerRef={inputRef}
          role="textbox"
          onKeyDown={onKeyDown}
        />
      </StyledEquationAreaContainer>
    </Draggable>
  );
};

EquationArea.propTypes = {
  removeElement: PropTypes.func,
};

EquationArea.defaultProps = {
  removeElement: () => {},
};

export default EquationArea;
