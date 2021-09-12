import styled from "styled-components";
import FeaturePic from "../../images/apple-pie.jpg";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(3.4, 98.7%, 31.2%, 0.1)
    ),
    url(${FeaturePic});
  background-position: center;
  background-size: cover;
  color: hsl(0, 0%, 100%);
  text-align: center;
  height: 25rem;
  max-height: 62.5rem;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    text-shadow: 0.18rem 0.18rem 0.375rem hsl(24.6, 33.7%, 32.5%);
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled.button`
  background: hsl(32.9, 100%, 50%);
  color: hsl(0, 16.7%, 7.1%);
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  transition: 0.2s ease-out;

  &:hover {
    background: hsl(0, 100%, 27.3%);
    color: hsl(0, 0%, 100%);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
