import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterImg from "../../images/board.jpg";
import { FaSun } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: linear-gradient(
      to right,
      rgba(188, 41, 9, 0.8),
      rgba(88, 21, 26, 0.8)
    ),
    url(${FooterImg});
  background-size: cover;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #ff8c00;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px #dc143c;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const Sun = styled(FaSun)`
  font-size: 30px;
  position: absolute;
  top: 7805px;
  left: 290px;
  color: rgb(255, 195, 113);
`;
