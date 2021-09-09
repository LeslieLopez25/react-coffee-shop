import styled from "styled-components";
import Img1 from "../../../images/sign1.jpg";
import Img2 from "../../../images/person1.jpg";
import Img3 from "../../../images/sign2.jpg";
import Img4 from "../../../images/person2.jpg";

export const BannerContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${BannerPic});
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
