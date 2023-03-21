import React from "react";
import { Nav, NavTitle, NavIcon, Logo, Coffee } from "./navbar.styles";
import SunLogo from "../../images/sunrise-logo.png";
import CoffeeCup from "../../images/coffee-cup.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavTitle>
          The Sunrise Cafe <Logo img src={SunLogo} alt="logo" />
        </NavTitle>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Coffee img src={CoffeeCup} alt="coffee cup" />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
