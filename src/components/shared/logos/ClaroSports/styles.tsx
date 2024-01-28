import { device } from "constants/device";
import styled from "styled-components";

export const Img = styled.img`
  width: 120px;
  @media only screen and ${device.mobile} {
    width: 80px;
  }
`;
