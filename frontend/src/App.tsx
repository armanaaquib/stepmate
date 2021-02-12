import React, { ReactElement } from "react";
import { HashRouter } from "react-router-dom";

import { GlobalStyle, Container } from "./App.style";
import Header from "./Header";
import Routes from "./Routes";

const App: React.FC = (): ReactElement => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes />
      </Container>
    </HashRouter>
  );
};

export default App;
