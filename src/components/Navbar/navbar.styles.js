import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background: transparent;
  font-weight: 700;
  height: 5rem;
`;

export const NavTitle = styled.div`
  display: flex;
  align-items: center;
  color: hsl(32.9, 100%, 50%);
  font-size: 3.12rem;
  text-decoration: none;
  text-shadow: 0.125rem 0.125rem hsl(3.4, 98.7%, 31.2%);

  @media screen and (max-width: 40.625em) {
    font-size: 3rem;
    position: relative;
    top: 3rem;
    left: 0rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  color: hsl(0, 0%, 100%);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  p {
    color: hsl(32.9, 100%, 50%);
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0.0625rem 0.0625rem hsl(3.4, 98.7%, 31.2%);
    transform: translate(-175%, 100%);

    @media screen and (max-width: 40.625em) {
      font-size: 1.25rem;
      position: relative;
      top: -1.25rem;
      right: -1.87rem;
    }
  }
`;

export const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  right: 28.12rem;

  @media screen and (max-width: 40.625em) {
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    top: 0.31rem;
    left: 0.5rem;
  }
`;

export const Coffee = styled.img`
  width: 2rem;
  height: 2rem;
  transform: translate(-100%, -15%);

  @media screen and (max-width: 40.625em) {
    font-size: 1.56rem;
    position: relative;
    left: 2rem;
    bottom: 1.5rem;
  }
`;
