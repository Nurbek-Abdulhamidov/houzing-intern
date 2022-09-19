import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  activeStyle,
} from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value, index) => {
              return (
                <NavLink style={activeStyle} key={index} to={value.path}>
                  {value.title}
                </NavLink>
              );
            })}
          </NavbarBody>
          <Logo>
            <Button width="120px" height="44px">
              Sig In
            </Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
