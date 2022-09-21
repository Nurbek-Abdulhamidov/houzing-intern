import styled from "styled-components";
import { ReactComponent as home } from "../../../assets/icons/garage.svg";

export const CategoryBloks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 280px;
  height: 350px;
  z-index: 1;
`;

export const IconBlock = styled.div`
  position: absolute;
  z-index: 9;
  p {
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const CategoryBlok = styled.div`
  position: relative;
  text-align: center;
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Black = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const Icon = styled(home)`
  width: 60px;
  height: 60px;
  z-index: 9;
  & path {
    fill: white;
  }
`;
