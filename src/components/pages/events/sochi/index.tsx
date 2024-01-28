import App from "components/App";
import React from "react";
import Header from "./header";
import Background from "./background";
import CountDown from "./countdown";
import Footer from "./footer";

const Sochi = () => (
  <App>
    <Header />
    <Background>
      <CountDown />
    </Background>
    <Footer />
  </App>
);

export default Sochi;
