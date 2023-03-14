import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaCoffee, FaSun } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background: transparent;
  font-weight: 700;
  height: 5rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: hsl(32.9, 100%, 50%);
  font-size: 3.12rem;
  text-decoration: none;
  text-shadow: 0.125rem 0.125rem 0.25rem hsl(3.4, 98.7%, 31.2%);
  cursor: pointer;

  @media screen and (max-width: 40.62em) {
    font-size: 1.87rem;
    position: absolute;
    top: 3rem;
    left: 4.62rem;
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
    text-shadow: 0.0625rem 0.0625rem 0.1875rem hsl(3.4, 98.7%, 31.2%);
    transform: translate(-175%, 100%);

    @media screen and (max-width: 40.62em) {
      font-size: 1.25rem;
      position: absolute;
      top: -1.25rem;
      right: -1.87rem;
    }
  }
`;

export const Sun = styled(FaSun)`
  color: hsl(49.4, 100%, 64.5%);
  font-size: 3.125rem;
  position: absolute;
  right: 28.12rem;

  @media screen and (max-width: 40.62em) {
    font-size: 1.87rem;
    position: absolute;
    top: 0.31rem;
    left: 12.5rem;
  }
`;

export const Bars = styled(FaCoffee)`
  color: hsl(0, 0%, 100%);
  font-size: 2rem;
  transform: translate(-50%, -15%);

  &:hover {
    color: hsl(49.4, 100%, 64.5%);
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 40.62em) {
    font-size: 1.56rem;
    position: absolute;
    top: 0.625rem;
    right: 0;
  }
`;
