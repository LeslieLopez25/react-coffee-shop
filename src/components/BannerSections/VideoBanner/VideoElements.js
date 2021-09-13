import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    hsl(32.9, 100%, 50%, 0.2),
    hsl(0, 100%, 27.3%, 0.1)
  );
  background-position: center;
  background-size: cover;
  height: 25rem;
  max-height: 62.5rem;
  padding: 0 1rem;
`;

export const VideoBg = styled.video`
  -o-object-fit: cover;
  object-fit: cover;
  width: 84.31rem;
  height: 100%;

  @media screen and (max-width: 40.62em) {
    width: 27.31rem;
  }
`;
