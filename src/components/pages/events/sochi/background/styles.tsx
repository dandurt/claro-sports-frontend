import { device } from "constants/device";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #000000;
  position: relative;
  background-image: url("/static/background/sochi/default.jpg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  overflow: hidden;

  @media only screen and ${device.mobile} {
    overflow-y: auto;
  }
`;
