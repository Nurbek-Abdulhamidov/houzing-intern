import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../../assets/icons/carouselArrow.svg";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";
import { ReactComponent as garage } from "../../../assets/icons/garage.svg";

export const CaruselWrapper = styled("div")`
  position: relative;
  user-select: none;
  width: 1440px;
  margin-bottom: 50px;
`;

export const MainCarousel = styled(Carousel)`
  height: fit-content;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: #fff;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;

  :hover {
    opacity: 0.97;
  }

  & path {
    fill: #0d263b;
  }
`;

Icon.Right = styled(arrow)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -40%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export const CaruselContent = styled.div`
  position: relative;
  text-align: center;
  width: 1440px;
`;

export const CaruselDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

CaruselContent.title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

CaruselContent.paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const CaruselBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const CaruselContentWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Icons = styled.div``;

Icons.Wrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: fit-content;
  height: 45px;
`;

Icons.Bed = styled(bed)`
  & path {
    fill: #fff;
  }
`;

Icons.Bath = styled(ruler)`
  & path {
    fill: #fff;
  }
`;

Icons.Ruler = styled(bath)`
  & path {
    fill: #fff;
  }
`;

Icons.Car = styled(garage)`
  & path {
    fill: #fff;
  }
`;

CaruselContent.text = styled.p`
  font-style: normal;
  font-size: 16px;
  color: #ffffff;
`;

CaruselContentWrapper.BedPrice = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 24px;
`;

CaruselContentWrapper.Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;
