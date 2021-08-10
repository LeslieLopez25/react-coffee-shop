import React from "react";
import { Nav, NavLink, NavIcon, Bars, Sun } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          The Sunrise Cafe <Sun />
        </NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
