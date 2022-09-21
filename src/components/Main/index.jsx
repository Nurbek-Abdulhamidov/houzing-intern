import React from "react";
import Home from "./Home";
import Recomended from "./Recomended";
import { Container, Wrapper } from "./style";
import Filter from "../../components/Filter";
import Choose from "./ChooseUs";
import Category from "./Category";
import PopularHome from "./PopularHome";
import Recent from "./Recent";

const Generic = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Filter />
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
    </>
  );
};

export default Generic;
