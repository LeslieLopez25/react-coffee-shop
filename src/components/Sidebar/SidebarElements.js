import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  background: hsl(15, 50%, 26.7%);
  position: fixed;
  top: 0;
  width: 21.87rem;
  height: 100%;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-62.5rem")};
  z-index: 999;

  @media screen and (max-width: 25em) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: hsl(45, 100%, 60%);
`;

export const Icon = styled.div`
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  border: transparent;
  outline: none;
  cursor: pointer;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 5rem);
  text-align: center;

  @media screen and (max-width: 30em) {
    grid-template-rows: repeat(4, 3.75rem);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: hsl(49.4, 100%, 64.5%);
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: hsl(32.9, 100%, 50%);
  color: hsl(0, 0%, 100%);
  font-size: 1rem;
  text-decoration: none;
  padding: 1rem 4rem;
  border: none;
  outline: none;
  transition: 0.2s ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: hsl(0, 100%, 27.3%);
    color: hsl(0, 16.7%, 7.1%);
    transition: 0.2s ease-in-out;
  }
`;
