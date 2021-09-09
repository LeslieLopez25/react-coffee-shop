import styled from "styled-components";
import ShopPic from "../../../images/shop2.jpg";

export const ShopContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.2),
      rgba(88, 21, 26, 0.1)
    ),
    url(${ShopPic});
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
