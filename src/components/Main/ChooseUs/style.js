import styled from "styled-components";
import { ReactComponent as map } from "../../../assets/icons/maps.svg";
import { ReactComponent as discord } from "../../../assets/icons/discord.svg";
import { ReactComponent as house } from "../../../assets/icons/house 1.svg";
import { ReactComponent as calculator } from "../../../assets/icons/calculator.svg";

export const ChooseDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 40px 0;
  padding: 48px 0;
  background: #f5f7fc;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 1440px;
`;

export const HomeBloks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  text-align: center;
  width: 235px;
`;

export const House = styled(house)``;
export const Map = styled(map)``;
export const Discord = styled(discord)``;
export const Calculator = styled(calculator)``;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: var(--primaryColor);
  margin: 20px 0;
`;

export const Description = styled.p`
  color: var(--secondaryColor);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
