import React from "react";
import { Nav, NavLink, NavIcon, Bars, Sun } from "./navbar.styles";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          The Sunrise Cafe <Sun />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
