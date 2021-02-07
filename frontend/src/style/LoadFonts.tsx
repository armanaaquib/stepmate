import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

const LoadFonts = (): ReactElement => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default LoadFonts;
