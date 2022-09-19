import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d263b;
  /* background: var(--primaryColor); */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;

Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;

export const NavbarBody = styled.div`
  display: flex;
  gap: 64px;
  flex: 1;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    text-decoration: none;
  }
`;

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00FFE9" : "#fff",
    fontWeight: isActive ? 500 : "",
    fontSize: isActive ? "18px" : "",
  };
};
