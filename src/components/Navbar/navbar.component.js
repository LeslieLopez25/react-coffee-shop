import React from "react";
import { Nav, NavLink, NavIcon, Logo, Coffee } from "./navbar.styles";
import SunLogo from "../../images/sunrise-logo.png";
import CoffeeCup from "../../images/coffee-cup.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          The Sunrise Cafe <Logo img src={SunLogo} alt="logo" />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Coffee img src={CoffeeCup} alt="coffee cup" />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
