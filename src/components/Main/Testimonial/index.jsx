import React from "react";
import { HomeContext, HomeParagraph, HomeTitle } from "../Recomended/style";
import { Container, Wrapper } from "../style";

import CardAvatar from "../../Testimonial";
import { MainContainer } from "./style";

const Testimonial = () => {
  return (
    <MainContainer>
      <HomeContext>
        <HomeTitle>Testimonials</HomeTitle>
        <HomeParagraph>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </HomeParagraph>
        <Container>
          <Wrapper>
            <CardAvatar />
          </Wrapper>
        </Container>
      </HomeContext>
    </MainContainer>
  );
};

export default Testimonial;
