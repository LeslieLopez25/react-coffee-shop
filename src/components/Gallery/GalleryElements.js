import styled from "styled-components";
import Img1 from "../../images/sign1.jpg";
import Img2 from "../../images/person1.jpg";
import Img3 from "../../images/sign2.jpg";
import Img4 from "../../images/person2.jpg";
import Img5 from "../../images/coffee-machine.jpg";

export const GalleryContainer = styled.div`
  background: linear-gradient(
    to right,
    hsl(32.9, 100%, 50%, 0.2),
    hsl(0, 100%, 27.3%, 0.1)
  );
  height: 25rem;
  max-height: 62.5rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const GalleryImg1 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img1});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 25rem;
  position: absolute;
  left: 0;
  padding: 0 1rem;
`;

export const GalleryImg2 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img2});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 25rem;
  position: absolute;
  left: 16.87rem;
  padding: 0 1rem;
`;

export const GalleryImg3 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img3});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 25rem;
  position: absolute;
  left: 33.75rem;
  padding: 0 1rem;
`;

export const GalleryImg4 = styled.div`
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${Img4});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 25rem;
  position: absolute;
  left: 50.62rem;
  padding: 0 1rem;
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
  width: 19.97%;
  height: 100%;
  max-height: 25rem;
  padding: 0 1rem;
`;
