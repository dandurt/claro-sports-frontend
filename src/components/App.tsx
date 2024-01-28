import React, { ReactNode } from "react";
import Globalstyles from "./globalstyles";
import PageHead from "./PageHead";

const App = ({ children }: { children?: ReactNode }) => {
  return (
    <React.Fragment>
      <Globalstyles />
      <PageHead />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default App;
