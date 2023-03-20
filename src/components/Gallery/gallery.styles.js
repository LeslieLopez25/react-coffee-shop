import styled from "styled-components";
import Img1 from "../../images/cafe.jpg";
import Img2 from "../../images/person.jpg";
import Img3 from "../../images/sign.jpeg";
import Img4 from "../../images/making-coffee.jpg";
import Img5 from "../../images/board.jpg";

export const GalleryContainer = styled.div`
  background: linear-gradient(
    to right,
    hsl(32.9, 100%, 50%, 0.2),
    hsl(0, 100%, 27.3%, 0.1)
  );
  background-position: center;
  background-size: cover;
  color: hsl(0, 0%, 100%);
  text-align: center;
  padding: 0 1rem;
  max-height: 62.5rem;
  height: 25rem;

  @media screen and (max-width: 40.625em) {
    overflow-y: hidden;
  }
`;

export const GalleryImg1 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.2)
    ),
    url(${Img1});
  background-size: cover;
  position: absolute;
  left: 0;
  padding: 0 1rem;
  width: 20.91vw;
  max-height: 25rem;
  height: 100vh;

  @media screen and (max-width: 40.625em) {
    width: 25vw;
    height: 100vh;
    z-index: 1;
  }
`;

export const GalleryImg2 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.2)
    ),
    url(${Img2});
  background-size: cover;
  position: absolute;
  left: 16.87rem;
  padding: 0 1rem;
  width: 20.91vw;
  max-height: 25rem;
  height: 100vh;

  @media screen and (max-width: 40.625em) {
    position: relative;
    left: 5rem;
    width: 40vw;
    height: 100vh;
  }
`;

export const GalleryImg3 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.2)
    ),
    url(${Img3});
  background-size: cover;
  position: absolute;
  left: 33.75rem;
  padding: 0 1rem;
  width: 20.91vw;
  max-height: 25rem;
  height: 100vh;

  @media screen and (max-width: 40.625em) {
    position: relative;
    bottom: 25rem;
    left: 20rem;
    width: 25vw;
  }
`;

export const GalleryImg4 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.2)
    ),
    url(${Img4});
  background-size: cover;
  position: absolute;
  left: 50.62rem;
  padding: 0 1rem;
  width: 20.91vw;
  max-height: 25rem;
  height: 100vh;

  @media screen and (max-width: 40.625em) {
    display: none;
  }
`;

export const GalleryImg5 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.2)
    ),
    url(${Img5});
  background-size: cover;
  position: absolute;
  left: 67.5rem;
  padding: 0 1rem;
  width: 20.91vw;
  max-height: 25rem;
  height: 100vh;

  @media screen and (max-width: 40.625em) {
    position: relative;
    bottom: 50rem;
    left: 30.2rem;
    width: 23.2vw;
  }
`;
