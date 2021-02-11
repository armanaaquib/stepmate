import React, { ReactElement } from "react";

import { GlobalStyle } from "./App.style";

import Header from "./Header";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default App;
