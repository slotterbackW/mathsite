import React from 'react';
import { render } from 'react-dom';

import Toolbar from './components/Toolbar';
import GridContainer from './components/GridContainer';

const App = () => (
  <div>
    <Toolbar />
    <GridContainer />
  </div>
);

render(<App />, document.getElementById('root'));
