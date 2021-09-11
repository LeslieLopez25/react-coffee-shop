import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaCoffee, FaSun } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #ff8c00;
  font-size: 75px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 2px 2px 4px #9e0a01;

  @media screen and(max-width: 400px) {
    position: absolute;
    top: 0.625em;
    left: 1.5625em;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 1.5rem;
    color: #ff8c00;
    text-shadow: 1px 1px 3px #dc143c;
  }
`;

export const Bars = styled(FaCoffee)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  color: #fff;

  &:hover {
    color: rgb(255, 195, 113);
    transition: 0.2s ease-in-out;
  }
`;

export const Sun = styled(FaSun)`
  font-size: 50px;
  position: absolute;
  right: 370px;
  color: rgb(255, 195, 113);
`;
