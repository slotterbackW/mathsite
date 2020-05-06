import React from "react";
import { render } from "react-dom";

import GridContainer from "./components/GridContainer";

const App = () => {
  return <GridContainer />;
};

render(<App />, document.getElementById("root"));
