import { device } from "constants/device";
import styled from "styled-components";

interface Preview {
  $imageUrl: string;
}

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  width: 800px;
  margin: 0 auto;

  @media only screen and ${device.mobile} {
    width: 100%;
    heigth: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const PreviewHover = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #e82201;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media only screen and ${device.mobile} {
    margin-bottom: 2rem;
  }
`;

export const PreviewHoverText = styled.p`
  color: #eaf8f7;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
`;

export const Preview = styled.div<Preview>`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #e82201;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-image: url(${({ $imageUrl }) => `http://localhost${$imageUrl}`});
  background-repeat: no-repeat;
  background-position: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${device.mobile} {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.span`
  color: #eaf8f7;
  margin-top: 1rem;
  font-size: 1rem;
`;
