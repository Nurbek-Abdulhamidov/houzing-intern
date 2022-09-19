import React from "react";
import Home from "./Home";
import Recomended from "./Recomended";
import { Container, Wrapper } from "./style";

const Generic = () => {
  return (
    <Container>
      <Wrapper>
        <Home />
        <Recomended />
      </Wrapper>
    </Container> 
  );
};

export default Generic;
