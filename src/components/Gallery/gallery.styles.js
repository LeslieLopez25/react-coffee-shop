import styled from "styled-components";
import Img1 from "../../images/cafe.jpg";
import Img2 from "../../images/person.jpg";
import Img3 from "../../images/sign.jpeg";
import Img4 from "../../images/making-coffee.jpg";
import Img5 from "../../images/board.jpg";

export const GalleryContainer = styled.div`
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
  color: hsl(0, 0%, 100%);
  text-align: center;
  padding: 0 1rem;
  max-height: 62.5rem;
  height: 25rem;
`;

export const GalleryImg1 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img1});
  background-size: cover;
  position: absolute;
  left: 0;
  padding: 0 1rem;
  width: 20%;
  max-height: 25rem;
  height: 100%;

  @media screen and (max-width: 40.625em) {
    -o-object-fit: cover;
    width: 30%;
    height: 100%;
    z-index: 1;
  }
`;

export const GalleryImg2 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img2});
  background-size: cover;
  position: absolute;
  left: 16.87rem;
  padding: 0 1rem;
  width: 20%;
  max-height: 25rem;
  height: 100%;

  @media screen and (max-width: 40.625em) {
    -o-object-fit: cover;
    position: absolute;
    left: 5rem;
    width: 60%;
    height: 100%;
  }
`;

export const GalleryImg3 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img3});
  background-size: cover;
  position: absolute;
  left: 33.75rem;
  padding: 0 1rem;
  max-height: 25rem;
  width: 20%;
  height: 100%;

  @media screen and (max-width: 40.625em) {
    display: none;
  }
`;

export const GalleryImg4 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img4});
  background-size: cover;
  position: absolute;
  left: 50.62rem;
  padding: 0 1rem;
  width: 20%;
  max-height: 25rem;
  height: 100%;

  @media screen and (max-width: 40.625em) {
    display: none;
  }
`;

export const GalleryImg5 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img5});
  background-size: cover;
  position: absolute;
  left: 67.5rem;
  padding: 0 1rem;
  width: 19.97%;
  max-height: 25rem;
  height: 100%;

  @media screen and (max-width: 40.625em) {
    position: absolute;
    left: 18.12rem;
    width: 22.8%;
  }
`;
