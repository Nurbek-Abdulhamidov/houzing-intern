import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import {
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  activeStyle,
} from "./style";
import Footer from "../Footer";

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
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <NavLink style={activeStyle} key={index} to={path}>
                    {title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>
            <Button
              onClick={() => navigate("/signIn")}
              width="120px"
              height="44px"
            >
              Sig In
            </Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Filter />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Navbar;
