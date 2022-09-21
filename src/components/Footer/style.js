import styled from "styled-components";
import { ReactComponent as instagram } from "../../assets/icons/t.svg";
import { ReactComponent as facebook } from "../../assets/icons/i.svg";
import { ReactComponent as linkidin } from "../../assets/icons/f.svg";
import { ReactComponent as telegram } from "../../assets/icons/l.svg";
import { ReactComponent as location } from "../../assets/icons/pin.svg";
import { ReactComponent as email } from "../../assets/icons/email 1.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrowTop.svg";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #0d263b;
  padding: 48px 0 10px;
`;

export const FooterWrapper = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  h5 {
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  ul {
    list-style: none;
    color: #fff;
    margin: 30px 0;
    li {
      display: flex;
      gap: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin: 20px 0;
      cursor: pointer;
    }
  }
`;

export const Instagram = styled(instagram)``;
export const Telegram = styled(telegram)``;
export const LinkidIn = styled(linkidin)``;
export const Facebook = styled(facebook)``;
export const Phone = styled(phone)``;
export const Location = styled(location)``;
export const Email = styled(email)``;
export const Logo = styled(logo)``;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  height: 68px;
  display: flex;
  justify-content: center;
  background-color: #0d263b;
`;

export const FooterBottomContent = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  h2 {
    color: #fff;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Arrow = styled(arrow)``;
