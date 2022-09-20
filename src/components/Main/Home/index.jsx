import React from "react";
import img1 from "../../../assets/imgs/uy1.png";
import img2 from "../../../assets/imgs/uy2.png";
import { useRef } from "react";
import {
  CaruselBackground,
  CaruselContent,
  CaruselContentWrapper,
  CaruselDetails,
  CaruselWrapper,
  Icon,
  Icons,
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
            <CaruselContent.title>Skyper Pool Partment</CaruselContent.title>
            <CaruselContent.paragraph>
              112 Glenwood Ave Hyde Park, Boston, MA
            </CaruselContent.paragraph>
            <CaruselDetails>
              <Icons.Wrapper>
                <Icons.Bed />
                <CaruselContent.text>4 Beds</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Bath />
                <CaruselContent.text>5 Baths</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Ruler />
                <CaruselContent.text>1200 Sq Ft</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Car />
                <CaruselContent.text>1 Garage</CaruselContent.text>
              </Icons.Wrapper>
            </CaruselDetails>
            <CaruselContentWrapper.BedPrice>
              $5,250/mo
            </CaruselContentWrapper.BedPrice>
            <CaruselContentWrapper.Button>
              <Button width="180px" type="common">
                Read more
              </Button>
            </CaruselContentWrapper.Button>
          </CaruselContentWrapper>
        </CaruselContent>
        <CaruselContent>
          <Img src={img2} alt="img" />
          <CaruselBackground></CaruselBackground>
          <CaruselContentWrapper>
            <CaruselContent.title>Skyper Pool Partment</CaruselContent.title>
            <CaruselContent.paragraph>
              112 Glenwood Ave Hyde Park, Boston, MA
            </CaruselContent.paragraph>
            <CaruselDetails>
              <Icons.Wrapper>
                <Icons.Bed />
                <CaruselContent.text>4 Beds</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Bath />
                <CaruselContent.text>5 Baths</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Ruler />
                <CaruselContent.text>1200 Sq Ft</CaruselContent.text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Car />
                <CaruselContent.text>1 Garage</CaruselContent.text>
              </Icons.Wrapper>
            </CaruselDetails>
            <CaruselContentWrapper.BedPrice>
              $5,250/mo
            </CaruselContentWrapper.BedPrice>
            <CaruselContentWrapper.Button>
              <Button width="180px" type="common">
                Read more
              </Button>
            </CaruselContentWrapper.Button>
          </CaruselContentWrapper>
        </CaruselContent>
      </MainCarousel>
    </CaruselWrapper>
  );
};

export default Home;
