import styled from "styled-components";
import ShopPic from "../../../images/shop2.jpeg";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      hsl(32.9, 100%, 50%, 0.2),
      hsl(0, 100%, 27.3%, 0.1)
    ),
    url(${ShopPic});
  background-position: center;
  background-size: cover;
  height: 25rem;
  max-height: 62.5rem;
  padding: 0 1rem;
`;
