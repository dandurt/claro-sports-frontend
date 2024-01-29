import { device } from "constants/device";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${device.mobile} {
    padding: 2rem 0;
  }
`;
export const Title = styled.h2`
  color: #eaf8f7;
  font-family: Exo-Bold;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  width: 350px;

  @media only screen and ${device.mobile} {
    width: 100%;
    padding: 0 3rem;
  }
`;

export const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: solid 2px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${device.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const Time = styled.div`
  color: #ffffff;
  font-size: 1.8rem;
  font-family: Exo-Bold;

  @media only screen and ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const Label = styled.div`
  color: #ffffff;
  font-family: Exo-Bold;
  font-size: 1rem;

  @media only screen and ${device.mobile} {
    font-size: 0.5rem;
  }
`;
