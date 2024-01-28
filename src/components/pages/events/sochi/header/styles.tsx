import { device } from "constants/device";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-bg);
  height: 55px;
  padding: 0.5rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.3rem solid #ed2000;
  position: sticky;
  top: 0;
  z-index: 1;

  @media only screen and ${device.mobile} {
    padding: 0.3rem 1.5rem;
  }
`;
