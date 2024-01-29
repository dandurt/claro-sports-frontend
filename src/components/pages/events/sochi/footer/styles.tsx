import { device } from "constants/device";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  bottom: 0;
  padding: 0 12rem;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${device.mobile} {
    flex-direction: column;
    padding: 0.3rem 0;
    height: 140px;
    justify-content: space-around;
  }
`;

export const PrivacyText = styled.span`
  font-size: 0.7rem;
  color: #eaf8f7;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
