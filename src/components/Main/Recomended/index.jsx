import React from "react";
import HouseCard from "../../HouseCard";
import {
  Cards,
  Container,
  HomeContext,
  HomeParagraph,
  HomeTitle,
} from "./style";
import { Wrapper } from "./style";

const Recomended = () => {
  return (
    <Container>
      <Wrapper>
        <HomeContext>
          <HomeTitle>Recommended</HomeTitle>
          <HomeParagraph>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </HomeParagraph>
        </HomeContext>
        <Cards>
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Recomended;
