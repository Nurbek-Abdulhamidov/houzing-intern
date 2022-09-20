import React from "react";
import HouseCard from "../../HouseCard";
import { Cards, Container, RecomendedContent } from "./style";
import { Wrapper } from "./style";

const Recomended = () => {
  return (
    <Container>
      <Wrapper>
        <RecomendedContent>
          <RecomendedContent.Title>Recommended</RecomendedContent.Title>
          <RecomendedContent.Paragraph>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </RecomendedContent.Paragraph>
        </RecomendedContent>
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
