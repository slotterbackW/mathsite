import React from 'react';
import { render } from 'react-dom';
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';

import Toolbar from './components/Toolbar';
import GridContainer from './components/GridContainer';

const renderer = createRenderer();

const App = () => (
  <RendererProvider renderer={renderer}>
    <div>
      <Toolbar />
      <GridContainer />
    </div>
  </RendererProvider>
);

render(<App />, document.getElementById('root'));
