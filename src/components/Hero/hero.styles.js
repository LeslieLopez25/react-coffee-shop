import styled from "styled-components";
import ImgBg from "../../images/shop.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${ImgBg});
  background-position: center;
  background-size: cover;
  height: 100%;
`;

export const HeroContent = styled.div`
  height: calc(100% - 5rem);
  max-height: 100%;
  padding: 0rem calc ((100vw - 81.25rem) /2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: hsl(0, 0%, 100%);
  padding: 0 2rem;
  width: 40.62rem;
  height: 37.5rem;
  max-height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 40.625em) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  color: hsl(3.4, 98.7%, 31.2%);
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-family: "Signika Negative", sans-serif;
  letter-spacing: 0.187rem;
  text-shadow: 0.125rem 0.125rem hsl(45, 100%, 60%);
  margin-bottom: 1rem;
  box-shadow: 0.187rem 0.31rem hsl(0, 16.7%, 7.1%);
`;

export const HeroP = styled.p`
  color: hsl(3.4, 98.7%, 31.2%);
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-family: "Signika Negative", sans-serif;
  text-shadow: 0.0625rem 0.0625rem hsl(45, 100%, 60%);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  background: hsl(0, 100%, 27.3%);
  color: hsl(0, 0%, 100%);
  font-size: 1.4rem;
  font-family: "Signika Negative", sans-serif;
  padding: 1rem 4rem;
  border: none;
  transition: 0.2s ease-out;

  &:hover {
    background: hsl(32.2, 30.8%, 73.9%);
    color: hsl(0, 16.7%, 7.1%);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
