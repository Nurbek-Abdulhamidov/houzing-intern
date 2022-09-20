import React from "react";
import Home from "./Home";
import Recomended from "./Recomended";
import { Container } from "./style";
import Filter from "../../components/Filter";

const Generic = () => {
  return (
    <Container>
      <div>
        <Filter />
        <Home />
        <Recomended />
      </div>
    </Container>
  );
};

export default Generic;
