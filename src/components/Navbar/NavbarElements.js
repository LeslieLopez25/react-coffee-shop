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
  font-size: 50px;
  text-decoration: none;
  text-shadow: 0.125rem 0.125rem 0.25rem hsl(3.4, 98.7%, 31.2%);
  cursor: pointer;

  @media screen and (max-width: 437px) {
    font-size: 25px;
    position: absolute;
    top: 30px;
    left: 25px;
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
  }
`;

export const Sun = styled(FaSun)`
  color: hsl(49.4, 100%, 64.5%);
  font-size: 3.125rem;
  position: absolute;
  right: 450px;
`;

export const Bars = styled(FaCoffee)`
  color: hsl(0, 0%, 100%);
  font-size: 2rem;
  transform: translate(-50%, -15%);

  &:hover {
    color: hsl(49.4, 100%, 64.5%);
    transition: 0.2s ease-in-out;
  }
`;
