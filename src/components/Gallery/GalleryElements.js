import styled from "styled-components";
import Img1 from "../../images/sign1.jpg";
import Img2 from "../../images/person1.jpg";
import Img3 from "../../images/sign2.jpg";
import Img4 from "../../images/person2.jpg";
import Img5 from "../../images/coffee-machine.jpg";

export const GalleryContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(188, 41, 9, 0.2),
    rgba(88, 21, 26, 0.1)
  );
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
`;

export const GalleryImg1 = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${Img1});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 400px;
  position: absolute;
  left: 0;
  padding: 0 1rem;
`;

export const GalleryImg2 = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${Img2});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 400px;
  position: absolute;
  left: 270px;
  padding: 0 1rem;
`;

export const GalleryImg3 = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${Img3});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 400px;
  position: absolute;
  left: 540px;
  padding: 0 1rem;
`;

export const GalleryImg4 = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${Img4});
  background-size: cover;
  width: 20%;
  height: 100%;
  max-height: 400px;
  position: absolute;
  left: 810px;
  padding: 0 1rem;
`;

export const GalleryImg5 = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${Img5});
  background-size: cover;
  width: 19.97%;
  height: 100%;
  max-height: 400px;
  position: absolute;
  left: 1080px;
  padding: 0 1rem;
`;
