import { device } from "constants/device";
import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
`;

export const Video = styled.iframe`
  width: 640px;
  height: 315px;
  frameborder: 0;

  @media only screen and ${device.mobile} {
    width: 100%;
    height: 200px;
  }
`;
