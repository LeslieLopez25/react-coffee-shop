import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-weight: 800;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and(max-width: 400px) {
    position: absolute;
    top: 0.625em;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(FaCoffee)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
