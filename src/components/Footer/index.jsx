import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../Generic/Button";
import {
  Arrow,
  Column,
  CopyRight,
  Email,
  Facebook,
  FooterBottom,
  FooterBottomContent,
  FooterContainer,
  FooterWrapper,
  Instagram,
  LinkidIn,
  Location,
  Logo,
  LogoWrapp,
  Phone,
  Telegram,
} from "./style";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Column>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <i>
                  <Location />
                </i>
                <p>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </li>
              <li>
                <i>
                  <Phone />
                </i>
                <p>123 456 7890</p>
              </li>
              <li>
                <i>
                  <Email />
                </i>
                <p>support@houzing.com</p>
              </li>
              <li>
                <i>
                  <Instagram />
                </i>
                <i>
                  <Telegram />
                </i>
                <i>
                  <Facebook />
                </i>
                <i>
                  <LinkidIn />
                </i>
              </li>
            </ul>
          </Column>
          <Column>
            <h5>Discover</h5>
            <ul>
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>New York</li>
            </ul>
          </Column>
          <Column>
            <h5>Lists by Category</h5>
            <ul>
              <li>Apartments</li>
              <li>Condos</li>
              <li>Houses</li>
              <li>Offices</li>
              <li>Retail</li>
              <li>Villas</li>
            </ul>
          </Column>
          <Column>
            <h5>Lists by Category</h5>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </Column>
        </FooterWrapper>
      </FooterContainer>
      <FooterBottom>
        <FooterBottomContent>
          <LogoWrapp onClick={<Navigate to="/home" />}>
            <Logo />
            <h2>Houzing</h2>
          </LogoWrapp>
          <CopyRight>
            <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
            <Button width="45px" type="primary" onClick={goToTop}>
              <Arrow />
            </Button>
          </CopyRight>
        </FooterBottomContent>
      </FooterBottom>
    </>
  );
};

export default Footer;
