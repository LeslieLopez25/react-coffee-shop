import styled from "styled-components";
import FeaturePic from "../../images/apple-pie.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${FeaturePic});
  height: 400px;
  max-height: 1000px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ff8c00;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #9e0a01;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
