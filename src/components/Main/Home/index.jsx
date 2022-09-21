import React from "react";
import img1 from "../../../assets/imgs/uy1.png";
import img2 from "../../../assets/imgs/uy2.png";
import { useRef } from "react";
import {
  CaruselBackground,
  CaruselContent,
  CaruselContentParagraph,
  CaruselContentText,
  CaruselContentTitle,
  CaruselContentWrapper,
  CaruselContentWrapperBedPrice,
  CaruselContentWrapperButton,
  CaruselDetails,
  CaruselWrapper,
  Icon,
  IconsBath,
  IconsBed,
  IconsCar,
  IconsRuler,
  IconsWrapper,
  Img,
  MainCarousel,
} from "./style";
import { Button } from "../../Generic";

const Home = () => {
  const slider = useRef();
  return (
    <CaruselWrapper>
      <Icon.Left onClick={() => slider.current?.next()} />
      <Icon.Right onClick={() => slider.current?.prev()} />
      <MainCarousel ref={slider} dots autoplay>
        <CaruselContent>
          <Img src={img1} alt="img" />
          <CaruselBackground></CaruselBackground>
          <CaruselContentWrapper>
            <CaruselContentTitle>Skyper Pool Partment</CaruselContentTitle>
            <CaruselContentParagraph>
              112 Glenwood Ave Hyde Park, Boston, MA
            </CaruselContentParagraph>
            <CaruselDetails>
              <IconsWrapper>
                <IconsBed />
                <CaruselContentText>4 Beds</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsBath />
                <CaruselContentText>5 Baths</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsRuler />
                <CaruselContentText>1200 Sq Ft</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsCar />
                <CaruselContentText>1 Garage</CaruselContentText>
              </IconsWrapper>
            </CaruselDetails>
            <CaruselContentWrapperBedPrice>
              $5,250/mo
            </CaruselContentWrapperBedPrice>
            <CaruselContentWrapperButton>
              <Button width="180px" type="common">
                Read more
              </Button>
            </CaruselContentWrapperButton>
          </CaruselContentWrapper>
        </CaruselContent>
        <CaruselContent>
          <Img src={img2} alt="img" />
          <CaruselBackground></CaruselBackground>
          <CaruselContentWrapper>
            <CaruselContentTitle>Skyper Pool Partment</CaruselContentTitle>
            <CaruselContentParagraph>
              112 Glenwood Ave Hyde Park, Boston, MA
            </CaruselContentParagraph>
            <CaruselDetails>
              <IconsWrapper>
                <IconsBed />
                <CaruselContentText>4 Beds</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsBath />
                <CaruselContentText>5 Baths</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsRuler />
                <CaruselContentText>1200 Sq Ft</CaruselContentText>
              </IconsWrapper>
              <IconsWrapper>
                <IconsCar />
                <CaruselContentText>1 Garage</CaruselContentText>
              </IconsWrapper>
            </CaruselDetails>
            <CaruselContentWrapperBedPrice>
              $5,250/mo
            </CaruselContentWrapperBedPrice>
            <CaruselContentWrapperButton>
              <Button width="180px" type="common">
                Read more
              </Button>
            </CaruselContentWrapperButton>
          </CaruselContentWrapper>
        </CaruselContent>
     
      </MainCarousel>
    </CaruselWrapper>
  );
};

export default Home;
