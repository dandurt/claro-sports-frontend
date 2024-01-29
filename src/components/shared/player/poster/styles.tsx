import styled from "styled-components";

interface PosterContainerProps {
  $isActive: boolean;
  $posterUrl?: string;
}

export const PosterContainer = styled.div<PosterContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  cursor: pointer;

  ${({ $posterUrl }) => {
    if ($posterUrl) {
      return `
      background-image: url(${$posterUrl});
      background-repeat: no-repeat;
      background-size: cover;
      `;
    }
  }}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-left: 2rem;
  padding-bottom: 2rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  color: #eaf8f7;
  margin-bottom: 0.2rem;
`;

export const Text = styled.p`
  margin-bottom: 0.5rem;
  color: #eaf8f7;
`;
