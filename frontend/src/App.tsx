import React, { ReactElement } from "react";

import LoadFonts from "./style/LoadFonts";
import GlobalStyle from "./style/GlobalStyle";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <LoadFonts />
      <GlobalStyle />
      <div>Welcome to Stepmate</div>
    </>
  );
};

export default App;
