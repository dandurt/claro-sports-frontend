import React, { ReactNode } from "react";
import { Container } from "./styles";

const Background = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
);

export default Background;
