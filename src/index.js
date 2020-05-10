import React, { useState } from 'react';
import { render } from 'react-dom';
import { RendererProvider, createComponent } from 'react-fela';
import { createRenderer } from 'fela';

import getId from './utils/getId';
import Toolbar from './components/Toolbar';
import GridContainer from './components/GridContainer';
import './styles.css';

const renderer = createRenderer();

const StyledApp = createComponent(() => ({}), 'div');

const App = () => {
  const [elements, setElements] = useState([]);

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
        <Toolbar addElement={addElement} />
        <GridContainer />
        {elements.map(({ Element, id }) => (
          <Element key={id} removeElement={() => removeElement(id)} />
        ))}
      </StyledApp>
    </RendererProvider>
  );
};

render(<App />, document.getElementById('root'));
