import React from "react";
import Home from "./Home";
import Recomended from "./Recomended";
import { Container, Wrapper } from "./style";
import Choose from "./ChooseUs";
import Category from "./Category";
import PopularHome from "./PopularHome";
import Recent from "./Recent";
import Testimonial from "./Testimonial";
import Footer from "../Footer";

const Generic = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Home />
          <Recomended />
        </Wrapper>
      </Container>
      <Choose />
      <Container>
        <Wrapper>
          <Category />
        </Wrapper>
      </Container>
      <PopularHome />
      <Container>
        <Wrapper>
          <Recent />
        </Wrapper>
      </Container>
      <Testimonial />
    </>
  );
};

export default Generic;
