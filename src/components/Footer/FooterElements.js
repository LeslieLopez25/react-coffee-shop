import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterImg from "../../images/board.jpg";
import { FaSun } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: linear-gradient(
      to right,
      hsl(0, 100%, 27.3%, 0.8),
      hsl(32.9, 100%, 50%, 0.8)
    ),
    url(${FooterImg});
  background-size: cover;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 81.25rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 81.25rem;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 68.75rem;
  margin: 1rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  color: hsl(32.9, 100%, 50%);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0.0625rem 0.0625rem 0.18rem hsl(3.4, 98.7%, 31.2%);
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;

  &:hover {
    color: hsl(24.6, 33.7%, 32.5%);
  }
`;

export const Sun = styled(FaSun)`
  font-size: 1.87rem;
  position: absolute;
  top: 7365px;
  left: 290px;
  color: hsl(49.4, 100%, 64.5%);
`;
