import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterImg from "../../images/beans.jpg";

export const FooterContainer = styled.footer`
  background: linear-gradient(
      to right,
      hsl(0, 100%, 27.3%, 0.3),
      hsl(32.9, 100%, 50%, 0.3)
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

  @media screen and (max-width: 40.625em) {
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
  position: relative;
  top: 0.5rem;
  text-decoration: none;
  text-shadow: 0.0625rem 0.0625rem hsl(3.4, 98.7%, 31.2%);
  margin-bottom: 1rem;
  cursor: pointer;

  @media screen and (max-width: 40.625em) {
    position: relative;
    left: 0;
    bottom: 0.625rem;
  }
`;

export const WebsiteRights = styled.div`
  position: relative;
  left: 3rem;
  color: hsl(0, 0%, 100%);
  text-shadow: 0.0625rem 0.0625rem hsl(3.4, 98.7%, 31.2%);

  @media screen and (max-width: 40.625em) {
    position: relative;
    left: 0.5rem;
    bottom: 1rem;
  }
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
    color: hsl(3.4, 98.7%, 31.2%);
  }

  @media screen and (max-width: 40.625em) {
    position: relative;
    top: 0.625rem;
    left: 1rem;
  }
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 18.5rem;

  @media screen and (max-width: 40.625em) {
    width: 2rem;
    height: 2rem;
    position: relative;
    bottom: 2.3rem;
    left: 6rem;
  }
`;
