import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Logo, NavbarBody, NavbarWrapper, Wrapper } from "./style";

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
                <NavLink key={index} to={value.path}>
                  {value.title}
                </NavLink>
              );
            })}
          </NavbarBody>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
