import React, { ReactElement } from "react";

import GlobalStyle from "./style/GlobalStyle";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <div>Welcome to Stepmate</div>
    </>
  );
};

export default App;
