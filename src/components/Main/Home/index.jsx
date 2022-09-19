import React from "react";
import img1 from "../../../assets/imgs/uy1.png";
import img2 from "../../../assets/imgs/uy2.png";
import { useRef } from "react";
// import { Container, Wrapper } from "../../Filter/style";
import { CaruselWrapper, Icon, Img, MainCarousel } from "./style";

const Home = () => {
  const slider = useRef();
  return (
    <CaruselWrapper>
      <Icon.Left onClick={() => slider.current?.next()} />
      <Icon.Right onClick={() => slider.current?.prev()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
      </MainCarousel>
    </CaruselWrapper>
  );
};

export default Home;
