import { device } from "constants/device";
import styled from "styled-components";

export const VideoListContainer = styled.div`
  background: #232323;
  margin-top: 2rem;
  padding-bottom: 9rem;
  display: flex;
  flex-direction: column;

  @media only screen and ${device.mobile} {
    padding-bottom: 2rem;
  }
`;

export const VideoListTitle = styled.h1`
  text-align: center;
  font-size: 1.7rem;
  padding-top: 2rem;
  color: #eaf8f7;

  @media only screen and ${device.mobile} {
    font-size: 1.2rem;
  }
`;
