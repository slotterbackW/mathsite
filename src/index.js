import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import { RendererProvider, createComponent } from 'react-fela';
import { createRenderer } from 'fela';

import getId from './utils/getId';
import Toolbar from './components/Toolbar';
import Grid from './components/Grid';
import './styles.css';

const renderer = createRenderer();

const StyledApp = createComponent(() => ({}), 'div');

const App = () => {
  const [elements, setElements] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const toggleIsDrawing = useCallback(() => setIsDrawing(!isDrawing), [
    isDrawing,
  ]);

  const addElement = (element) => {
    const elementEntry = {
      id: getId(),
      Element: element,
    };
    const newElements = elements.concat(elementEntry);
    setElements(newElements);
  };

  const removeElement = (id) => {
    setElements(elements.filter((elementEntry) => elementEntry.id !== id));
  };

  return (
    <RendererProvider renderer={renderer}>
      <StyledApp>
        <Toolbar addElement={addElement} toggleIsDrawing={toggleIsDrawing} />
        <Grid isDrawing={isDrawing} />
        {elements.map(({ Element, id }) => (
          <Element key={id} removeElement={() => removeElement(id)} />
        ))}
      </StyledApp>
    </RendererProvider>
  );
};

render(<App />, document.getElementById('root'));
