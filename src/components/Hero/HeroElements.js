import styled from "styled-components";
import ImgBg from "../../images/shop3.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2) 0%,
      rgba(88, 21, 26, 0.1) 100%
    ),
    url(${ImgBg});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

// export const VideoBg = styled.video`
//   width: 50%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
// `;

export const HeroContent = styled.div`
  height: calc(100% - 80px);
  max-height: 100%;
  padding: 0rem calc ((100vw - 1300px) /2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  color: rgb(139, 0, 0);
  font-family: "Signika Negative", sans-serif;
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px rgb(242, 243, 244);
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  color: rgb(139, 0, 0);
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-family: "Signika Negative", sans-serif;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  font-family: "Signika Negative", sans-serif;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
